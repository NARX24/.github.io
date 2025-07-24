// script.js (全体)

// 各メニューのデータ定義 (上記で修正した items 配列を使用)
const items = [
    // ... (修正後の items 配列の内容)
];

let copyText = ""; // コピーするテキストを格納する変数
let currentTotalHours = "0"; // 合計時間を格納する変数

// 全てのアイテムをIDで参照できるようにするマップ
const itemMap = new Map();
items.forEach(item => {
    itemMap.set(item.id, item);
});

/**
 * 指定されたアイテムIDが最終的に展開される個別パーツのIDリストを再帰的に取得する関数。
 * 無限ループを防止します。
 * @param {string} itemId - 展開したいアイテムのID。
 * @param {Set<string>} currentPath - 現在の再帰呼び出しパスで訪問済みのアイテムIDを追跡するためのSet。無限ループ防止用。
 * @returns {Array<string>} 最終的に含まれる個別パーツのIDの配列。
 */
function getFinalParts(itemId, currentPath = new Set()) {
    // 無限ループ防止: 現在のパスにitemIdが含まれていれば、空の配列を返す（循環参照）
    if (currentPath.has(itemId)) {
        console.warn(`Circular reference detected for item: ${itemId}. Returning empty array.`);
        return [];
    }

    // 現在のパスにitemIdを追加
    currentPath.add(itemId);

    const finalParts = [];
    const item = itemMap.get(itemId);

    if (!item) {
        console.warn(`Item with ID "${itemId}" not found in itemMap.`);
        currentPath.delete(itemId); // パスから削除
        return finalParts;
    }

    // ★ここを修正します★
    // タイプが "part" で、かつ `parts` プロパティがある場合も再帰的に展開するように変更
    // または、タイプが "set" で `parts` プロパティがある場合も再帰的に展開
    if ((item.type === "part" || item.type === "set") && item.parts && item.parts.length > 0) {
        item.parts.forEach(partId => {
            // 注意: ここで partId が itemMap に存在しない場合を考慮する必要がある
            if (itemMap.has(partId)) { // 存在するIDのみ再帰呼び出し
                finalParts.push(...getFinalParts(partId, currentPath));
            } else {
                // 定義されていないパーツIDが指定された場合、エラーにはしないが警告は出す
                console.warn(`Referenced part ID "${partId}" not found in itemMap for item "${itemId}".`);
            }
        });
    } else if (item.type === "part") {
        // type: "part" でかつ `parts` プロパティを持たない場合（これ以上展開されない最小単位のパーツ）
        finalParts.push(itemId);
    }
    // ★修正箇所終わり★

    currentPath.delete(itemId); // パスから削除

    return finalParts;
}

window.keisan = function() { // グローバルスコープに公開
    let totalTime = 0;
    let totalPrice = 0;
    const selectedPartsDisplay = []; // 画面表示用の選択項目リスト
    const selectedPartsForCopy = []; // コピー用の選択項目リスト (詳細なし)
    const selectedDetailedPartIds = new Set(); // 選択された各**最終的な個別パーツのID**を追跡するためのSet
    const duplicatePartNames = []; // 重複する最終的なパーツの名前を格納する配列

    const messageArea = document.getElementById("message-area");
    const totalPriceDisplay = document.getElementById("totalPrice");
    const copyButton = document.getElementById("copyButton");
    const reservationButton = document.getElementById("reservationButton");

    messageArea.style.display = "none";
    messageArea.classList.remove('error');
    messageArea.value = ""; // textareaなのでinnerHTMLではなくvalue

    // --- 【修正箇所1: 全てのパーツメニューを初期状態に戻す】 ---
    // まず全てのメニュー（セットとパーツ両方）を有効な状態に戻す
    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        const label = document.getElementById(`label_${item.id}`); 
        if (checkbox) {
            checkbox.disabled = false; // 有効化
            if (label) {
                label.classList.remove('disabled-item'); 
            }
        }
    });
    // --- 【修正箇所1 終わり】 ---


    // 選択されているチェックボックスのIDを一時的に保持するSet
    const currentlyCheckedIds = new Set();
    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        if (checkbox && checkbox.checked) {
            currentlyCheckedIds.add(item.id);
        }
    });


    // すべてのチェックボックスを反復処理
    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        // 今回の計算では、現在チェックされている項目のみを対象とする
        if (checkbox && currentlyCheckedIds.has(item.id)) { // ここを修正
            totalTime += item.time;
            totalPrice += item.price;

            // 画面表示用のテキストを生成（詳細情報を含む）
            let setDetailText = '';
            // ★ここも修正: setDetailTextはsetタイプか、partsを持つpartタイプの場合に生成
            if ((item.type === "set" || (item.type === "part" && item.parts && item.parts.length > 1)) && item.parts && item.parts.length > 0) {
                const finalExpandedNames = getFinalParts(item.id).map(partId => {
                    const subItem = itemMap.get(partId);
                    return subItem ? subItem.name.replace(/（[^）]*）/g, '') : '';
                }).filter(name => name !== '' && name !== item.name.replace(/（[^）]*）/g, '')); // 親の名前と重複しないようにフィルタ
                
                // 親のIDと同じIDが含まれていればそれを除外して表示
                const uniqueFinalExpandedNames = [...new Set(finalExpandedNames)].filter(name => name !== item.name.replace(/（[^）]*）/g, ''));

                setDetailText = uniqueFinalExpandedNames.length > 0 ? `＜${uniqueFinalExpandedNames.join("・")}＞` : '';
            }
            selectedPartsDisplay.push(`${item.name}(${item.time}分) 税込 ${item.price.toLocaleString()}円${setDetailText ? ' ' + setDetailText : ''}`);

            // コピー用のテキストを生成（詳細情報を含まない）
            selectedPartsForCopy.push(`${item.name}(${item.time}分) 税込 ${item.price.toLocaleString()}円`);


            // 選択されたアイテムの最終的な個別パーツIDリストを取得
            const partsToCheck = getFinalParts(item.id);

            partsToCheck.forEach(partId => {
                // そのパーツIDがすでに選択済みの最終パーツリストにあるかチェック
                if (selectedDetailedPartIds.has(partId)) {
                    // 重複している場合は、そのパーツの表示名を取得して追加
                    const duplicatedItem = itemMap.get(partId);
                    if (duplicatedItem) {
                        duplicatePartNames.push(duplicatedItem.name.replace(/（[^）]*）/g, ''));
                    }
                } else {
                    // 新しいパーツであれば追加
                    selectedDetailedPartIds.add(partId);
                }
            });
        }
    });

    if (duplicatePartNames.length > 0) {
        const uniqueDuplicates = [...new Set(duplicatePartNames)];
        showMessage("選択したメニューに重複する部位が含まれています。\n選択を修正してください。\n重複部位: " + uniqueDuplicates.join("、"), true);

        document.getElementById("totalTime").value = "選択を見直してください";
        totalPriceDisplay.textContent = "料金合計: 0円（税込）"; // 重複がある場合は0円表示
        totalPriceDisplay.classList.remove('guidance-message'); // スタイルを戻す
        copyText = "";
        currentTotalHours = "選択を見直してください";

        copyButton.classList.add("disabled"); // 重複があればコピーボタンも非活性
        reservationButton.classList.add("disabled"); // 予約ボタンも非活性
        return;
    }

    // --- 【修正箇所2: セットメニューに含まれるパーツを非活性にする】 ---
    // ここで再度全てのチェックボックスの状態をチェックし、セットに含まれるパーツを非活性化
    // 重複エラーがない場合のみ実行
    if (duplicatePartNames.length === 0) {
        // 現在選択されているセットメニューに含まれるパーツIDのSetを作成
        const partsToDisable = new Set();
        currentlyCheckedIds.forEach(checkedItemId => { // 現在チェックされているIDのみを考慮
            const checkedItem = itemMap.get(checkedItemId);
            // セットメニュー、またはpartsを持つパーツメニューの場合
            if (checkedItem && (checkedItem.type === "set" || (checkedItem.type === "part" && checkedItem.parts && checkedItem.parts.length > 1))) {
                const containedParts = getFinalParts(checkedItemId);
                containedParts.forEach(partId => {
                    // 選択されている親メニュー自体は非活性にしない
                    if (partId !== checkedItemId) { 
                        partsToDisable.add(partId);
                    }
                });
            }
        });

        items.forEach(item => {
            const checkbox = document.getElementById(item.id);
            const label = document.getElementById(`label_${item.id}`); 
            
            // 現在チェックされていないが、非活性化リストに含まれているパーツを処理
            if (checkbox && !currentlyCheckedIds.has(item.id) && partsToDisable.has(item.id)) {
                checkbox.disabled = true; // チェックボックスを無効化
                checkbox.checked = false; // チェックを外す
                if (label) {
                    label.classList.add('disabled-item'); // スタイルを適用
                }
            } else if (checkbox && !currentlyCheckedIds.has(item.id) && !partsToDisable.has(item.id)) {
                 // 選択されていないが、非活性化リストにも含まれない場合は有効化（念のため）
                checkbox.disabled = false;
                if (label) {
                    label.classList.remove('disabled-item');
                }
            }
        });
    }
    // --- 【修正箇所2 終わり】 ---


    const hours = Math.ceil(totalTime / 30) * 0.5;

    // 小数点以下が.0の場合に整数にする
    if (hours % 1 === 0) { // hoursが整数（例: 2.0, 3.0）の場合
        currentTotalHours = hours.toString(); // 整数に変換
    } else {
        currentTotalHours = hours.toFixed(1); // それ以外は小数点以下1桁に固定
    }

    document.getElementById("totalTime").value = currentTotalHours;

    if (totalPrice === 0) {
        totalPriceDisplay.textContent = "手順①.　施術希望部位を選択してください。";
        totalPriceDisplay.classList.add('guidance-message'); // 新しいスタイルを適用
        copyButton.classList.add("disabled"); // 何も選択されていなければコピーボタンも非活性
        reservationButton.classList.add("disabled"); // 予約ボタンも非活性
    } else {
        totalPriceDisplay.textContent = `料金合計: ${totalPrice.toLocaleString()}円（税込）`;
        totalPriceDisplay.classList.remove('guidance-message'); // スタイルを戻す
        copyButton.classList.remove("disabled"); // 何か選択されていればコピーボタンを活性化
        // 予約ボタンはコピー後活性化されるのでここでは処理しない
    }

    // コピーするテキストはselectedPartsForCopyを使用
    copyText = `選択した部位:\n${selectedPartsForCopy.join("\n")}\n---\n合計時間: ${currentTotalHours}時間\n料金合計: ${totalPrice.toLocaleString()}円（税込）`;
}

// ... (window.copyToClipboard と showMessage, DOMContentLoaded イベントリスナーは変更なし)

window.copyToClipboard = async function() { // グローバルスコープに公開
    const messageArea = document.getElementById("message-area");
    const reservationButton = document.getElementById("reservationButton");

    if (copyText === "" || currentTotalHours === "0.0" || currentTotalHours === "選択を見直してください") {
        // 重複エラー状態でない、または初期状態の場合にのみメッセージを表示
        if (!messageArea.classList.contains('error')) {
            showMessage("コピーする内容がありません。まず施術希望部位を選択してください。", true);
        }
        reservationButton.classList.add("disabled"); // コピーできない場合は予約ボタンも非活性のまま
        return;
    }

    try {
        // Clipboard API を使用して自動コピーを試みる
        await navigator.clipboard.writeText(copyText);
        // currentTotalHours を再整形して表示
        let displayHours = currentTotalHours;
        if (displayHours.endsWith('.0')) {
            displayHours = displayHours.slice(0, -2); // ".0" を削除
        }
        showMessage(`選択内容がコピーされました！\nご予約メニュー【${displayHours}時間枠】を選択後、コピー内容を備考欄に貼り付けて下さい。`, false);
        reservationButton.classList.remove("disabled"); // 予約ボタンを活性化
    } catch (err) {
        // 自動コピーが失敗した場合（例: HTTPSでない、許可が得られないなど）
        console.error('Failed to copy: ', err);

        // コピーしたい内容の開始と終了を示すマーカー
        const selectStartMarker = "---COPY_START---"; // ユニークな文字列
        const selectEndMarker = "---COPY_END---";    // ユニークな文字列

        // textareaに表示するメッセージを構築
        // コピー対象部分にマーカーを挿入
        let displayHoursForManual = currentTotalHours;
        if (displayHoursForManual.endsWith('.0')) {
            displayHoursForManual = displayHoursForManual.slice(0, -2); // ".0" を削除
        }
        const fullDisplayMessage = `自動コピーに失敗しました。\n以下の枠内の**ハイライトされた内容をコピー**して手動で貼り付けてください。\n\n${selectStartMarker}${copyText}${selectEndMarker}\n\nご予約メニュー【${displayHoursForManual}時間枠】を選択後、コピー内容を備考欄に貼り付けて下さい。`;

        // メッセージエリアに表示
        showMessage(fullDisplayMessage, true);

        // textareaの値を一時的に取得
        let currentText = messageArea.value;

        // マーカーの位置を特定
        const startIndex = currentText.indexOf(selectStartMarker);
        const endIndex = currentText.indexOf(selectEndMarker);

        if (startIndex !== -1 && endIndex !== -1) {
            // 実際の選択開始位置を計算 (マーカーの長さを考慮)
            const selectionStart = startIndex + selectStartMarker.length;
            // 実際の選択終了位置を計算
            const selectionEnd = endIndex;

            // マーカーを削除した最終的な表示文字列
            const finalDisplay = currentText.replace(selectStartMarker, "").replace(selectEndMarker, "");
            messageArea.value = finalDisplay;

            // 選択範囲を設定
            const adjustedSelectionStart = selectionStart - selectStartMarker.length;
            const adjustedSelectionEnd = selectionEnd - selectStartMarker.length;

            setTimeout(() => {
                messageArea.focus(); // フォーカスを当てる
                messageArea.setSelectionRange(adjustedSelectionStart, adjustedSelectionEnd);
            }, 0);

        } else {
            // マーカーが見つからない場合は、全選択する（フォールバック）
            messageArea.select();
        }
        reservationButton.classList.remove("disabled"); // 予約ボタンを活性化
    }
}

function showMessage(message, isError) {
    const messageArea = document.getElementById("message-area");
    messageArea.value = message; // textareaなのでvalueを設定
    if (isError) {
        messageArea.classList.add("error");
    } else {
        messageArea.classList.remove("error");
    }
    messageArea.style.display = "block";

    // エラーメッセージが表示された場合にのみスクロール
    if (isError) {
        messageArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// DOMContentLoaded イベントリスナーを使用
document.addEventListener('DOMContentLoaded', (event) => {
    // 初期表示メッセージを設定
    const totalPriceDisplay = document.getElementById("totalPrice");
    totalPriceDisplay.textContent = "手順①.　施術希望部位を選択してください。";
    totalPriceDisplay.classList.add('guidance-message');

    // 計算関数を呼び出し、ボタンの状態を初期化
    keisan();

    // コピーボタンのイベントリスナーを登録
    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
        copyButton.addEventListener('click', window.copyToClipboard);
    }
});
