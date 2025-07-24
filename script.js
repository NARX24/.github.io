// 各メニューのデータ定義
const items = [
    // ■セットメニュー■
    { id: "set_eyebrow", name: "眉毛セット", time: 40, price: 11000, parts: ["part_eyebrow_upper", "part_eyebrow_lower", "part_eyebrow_middle", "part_design_fee"], type: "set" },
    { id: "set_fullface", name: "全顔セット", time: 65, price: 13200, parts: ["part_nose_under", "part_mouth_under", "part_cheek", "part_face_line", "part_neck"], type: "set" },
    { id: "set_fullbody_all", name: "全身オール（顔、VIO含む）", time: 270, price: 52800, parts: ["set_upperbody", "set_lowerbody"], type: "set" },
    { id: "set_fullbody_noface", name: "顔なし全身", time: 200, price: 41800, parts: ["part_armpit", "part_nape", "part_back_upper", "part_back_lower", "part_chest_nipple", "part_abdomen_navel", "part_elbow_upper", "part_elbow_lower", "part_hand_finger", "part_v_line", "part_i_line", "part_o_line", "part_buttocks", "part_knee_upper", "part_knee_lower", "part_foot_toe"], type: "set" },
    { id: "set_upperbody", name: "上半身セット", time: 170, price: 30800, parts: ["set_fullface", "part_armpit", "part_chest_nipple", "part_abdomen_navel", "part_nape", "part_back_upper", "part_back_lower", "part_elbow_upper", "part_elbow_lower", "part_hand_finger"], type: "set" },
    { id: "set_lowerbody", name: "下半身セット", time: 150, price: 30800, parts: ["set_vio", "part_buttocks", "part_knee_upper", "part_knee_lower", "part_foot_toe"], type: "set" },
    { id: "set_vio", name: "VIOセット", time: 50, price: 16500, parts: ["part_v_line", "part_i_line", "part_o_line"], type: "set" },
    { id: "set_fullface_vio", name: "全顔+VIOセット", time: 100, price: 27500, parts: ["set_fullface", "set_vio"], type: "set" },
    { id: "set_vio_buttocks", name: "VIO+臀部（おしり）セット", time: 60, price: 20900, parts: ["set_vio", "part_buttocks"], type: "set" },
    { id: "set_navel_vio", name: "ヘソ下+VIOセット", time: 55, price: 18700, parts: ["part_navel_under", "set_vio"], type: "set" },
    { id: "set_chest_abdomen", name: "胸＋腹部セット", time: 35, price: 9900, parts: ["part_chest_nipple", "part_abdomen_navel"], type: "set" },
    { id: "set_arms_legs", name: "両腕+両足セット", time: 125, price: 28600, parts: ["part_elbow_upper", "part_elbow_lower", "part_hand_finger", "part_knee_upper", "part_knee_lower", "part_foot_toe"], type: "set" },
    { id: "set_arms", name: "両腕セット", time: 65, price: 17600, parts: ["part_elbow_upper", "part_elbow_lower", "part_hand_finger"], type: "set" },
    { id: "set_legs", name: "両足セット", time: 65, price: 17600, parts: ["part_knee_upper", "part_knee_lower", "part_foot_toe"], type: "set" },
    { id: "set_ear_whole", name: "耳全体（耳珠、耳たぶ含む）", time: 25, price: 8800, parts: ["part_tragus", "part_earlobe"], type: "set" },

    // ■パーツメニュー■
    // 【顔】
    { id: "part_nose_under", name: "鼻下", time: 16, price: 4400, parts: ["part_nose_under"], type: "part" },
    { id: "part_mouth_under", name: "口下", time: 16, price: 4400, parts: ["part_mouth_under"], type: "part" },
    { id: "part_cheek", name: "頬", time: 16, price: 4400, parts: ["part_cheek"], type: "part" },
    { id: "part_face_line", name: "フェイスライン", time: 16, price: 4400, parts: ["part_face_line"], type: "part" },
    { id: "part_neck", name: "首", time: 16, price: 4400, parts: ["part_neck"], type: "part" },
    // 【胴】
    { id: "part_nape", name: "うなじ", time: 16, price: 4400, parts: ["part_nape"], type: "part" },
    { id: "part_armpit", name: "脇", time: 13, price: 4400, parts: ["part_armpit"], type: "part" },
    // ここが修正点：part_nipple を parts 配列に追加
    { id: "part_chest_nipple", name: "胸（乳輪周り含む）", time: 16, price: 6600, parts: ["part_chest_nipple", "part_nipple"], type: "part" }, 
    // ここが修正点：part_navel_under を parts 配列に追加
    { id: "part_abdomen_navel", name: "腹部（ヘソ下含む）", time: 16, price: 6600, parts: ["part_abdomen_navel", "part_navel_under"], type: "part" }, 
    { id: "part_back_upper", name: "背中上", time: 16, price: 6600, parts: ["part_back_upper"], type: "part" },
    { id: "part_back_lower", name: "背中下", time: 16, price: 6600, parts: ["part_back_lower"], type: "part" },
    { id: "part_buttocks", name: "臀部（おしり）", time: 16, price: 6600, parts: ["part_buttocks"], type: "part" },
    // 【腕・足】
    { id: "part_elbow_upper", name: "肘上", time: 16, price: 6600, parts: ["part_elbow_upper"], type: "part" },
    { id: "part_elbow_lower", name: "肘下", time: 18, price: 6600, parts: ["part_elbow_lower"], type: "part" },
    { id: "part_hand_finger", name: "手の甲+指", time: 12, price: 4400, parts: ["part_hand_finger"], type: "part" },
    { id: "part_knee_upper", name: "膝上", time: 35, price: 8800, parts: ["part_knee_upper"], type: "part" },
    { id: "part_knee_lower", name: "膝下", time: 35, price: 8800, parts: ["part_knee_lower"], type: "part" },
    { id: "part_foot_toe", name: "足の甲＋指", time: 12, price: 4400, parts: ["part_foot_toe"], type: "part" },
    // 【VIO】
    { id: "part_v_line", name: "Vライン", time: 16, price: 7700, parts: ["part_v_line"], type: "part" },
    { id: "part_i_line", name: "Iライン", time: 20, price: 7700, parts: ["part_i_line"], type: "part" },
    { id: "part_o_line", name: "Oライン", time: 16, price: 5500, parts: ["part_o_line"], type: "part" },
    // 【特殊部位】
    { id: "part_forehead", name: "おでこ", time: 13, price: 4400, parts: ["part_forehead"], type: "part" },
    { id: "part_eyebrow_upper", name: "眉上", time: 13, price: 4400, parts: ["part_eyebrow_upper"], type: "part" },
    { id: "part_eyebrow_lower", name: "眉下", time: 13, price: 2200, parts: ["part_eyebrow_lower"], type: "part" },
    { id: "part_eyebrow_middle", name: "眉中", time: 13, price: 2200, parts: ["part_eyebrow_middle"], type: "part" },
    { id: "part_small_nose", name: "小鼻", time: 13, price: 4400, parts: ["part_small_nose"], type: "part" },
    { id: "part_nose_hair", time: 20, price: 4400, parts: ["part_nose_hair"], type: "part" },
    { id: "part_tragus", name: "耳珠", time: 13, price: 3300, parts: ["part_tragus"], type: "part" },
    { id: "part_earlobe", name: "耳たぶ", time: 13, price: 4400, parts: ["part_earlobe"], type: "part" },
    // part_nipple と part_navel_under の定義はここにも必要
    { id: "part_nipple", name: "乳輪周り", time: 10, price: 4400, parts: ["part_nipple"], type: "part" },
    { id: "part_navel_under", name: "ヘソ下", time: 10, price: 4400, parts: ["part_navel_under"], type: "part" },
    { id: "part_design_fee", name: "デザイン料", time: 0, price: 0, parts: ["part_design_fee"], type: "part" }
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

    // タイプが "part" で、かつ `parts` プロパティがある場合も再帰的に展開するように変更
    // または、タイプが "set" で `parts` プロパティがある場合も再帰的に展開
    if ((item.type === "part" && item.parts && item.parts.length > 0) || (item.type === "set" && item.parts && item.parts.length > 0)) {
        item.parts.forEach(partId => {
            if (itemMap.has(partId)) { // 存在するIDのみ再帰呼び出し
                finalParts.push(...getFinalParts(partId, currentPath));
            } else {
                console.warn(`Referenced part ID "${partId}" not found in itemMap for item "${itemId}".`);
            }
        });
    } else if (item.type === "part") {
        // type: "part" でかつ `parts` プロパティを持たない場合（これ以上展開されない最小単位のパーツ）
        finalParts.push(itemId);
    }

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

    // 【修正箇所1: 全てのパーツメニューを初期状態に戻す】
    // まず全てのメニュー（セットとパーツ両方）を有効な状態に戻す
    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        // HTMLでlabel要素にid="label_パーツID"を付与している前提
        const label = document.getElementById(`label_${item.id}`); 
        if (checkbox) {
            checkbox.disabled = false; // 有効化
            if (label) {
                // label要素に適用された.disabled-itemクラスを削除
                label.classList.remove('disabled-item'); 
            }
        }
    });

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
        if (checkbox && currentlyCheckedIds.has(item.id)) {
            totalTime += item.time;
            totalPrice += item.price;

            // 画面表示用のテキストを生成（詳細情報を含む）
            let setDetailText = '';
            // setDetailTextはsetタイプか、partsを持つpartタイプの場合に生成
            if ((item.type === "set" || (item.type === "part" && item.parts && item.parts.length > 1)) && item.parts && item.parts.length > 0) {
                const finalExpandedNames = getFinalParts(item.id).map(partId => {
                    const subItem = itemMap.get(partId);
                    return subItem ? subItem.name.replace(/（[^）]*）/g, '') : '';
                }).filter(name => name !== ''); // 空文字は除外
                
                // 親の名前と重複しないようにフィルタリング
                const uniqueFinalExpandedNames = [...new Set(finalExpandedNames)].filter(name => {
                    // 自身のIDが含まれていないかチェック
                    return name !== item.name.replace(/（[^）]*）/g, '');
                });

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

    // 【修正箇所2: セットメニューに含まれるパーツを非活性にする】
    // 重複エラーがない場合のみ実行
    if (duplicatePartNames.length === 0) {
        // 現在選択されているメニューに含まれる最終的なパーツIDのSetを作成
        const partsToDisable = new Set();
        currentlyCheckedIds.forEach(checkedItemId => { // 現在チェックされているIDのみを考慮
            const checkedItem = itemMap.get(checkedItemId);
            // セットメニュー、またはpartsを持つパーツメニューの場合
            if (checkedItem && (checkedItem.type === "set" || (checkedItem.type === "part" && checkedItem.parts && checkedItem.parts.length > 1))) {
                const containedParts = getFinalParts(checkedItemId);
                containedParts.forEach(partId => {
                    // 選択されている親メニュー自体は非活性にしない (ただし、親がパーツで、そのpartsに自身が含まれる場合は非活性化しない)
                    if (partId !== checkedItemId || (checkedItem.type === "part" && checkedItem.parts && checkedItem.parts.length === 1 && checkedItem.parts[0] === checkedItemId)) { 
                        // 例外: part_nose_under の parts が ["part_nose_under"] のように、自身のみを含む場合は、非活性化リストには追加しない
                        // 親がセットの場合はすべて追加
                        // 親がパーツで、そのパーツが複数の部位を含む場合は、その含まれる部位（自身以外）を追加
                        if (checkedItem.type === "set" || (checkedItem.type === "part" && partId !== checkedItemId)) {
                            partsToDisable.add(partId);
                        }
                    }
                });
            }
        });

        items.forEach(item => {
            const checkbox = document.getElementById(item.id);
            const label = document.getElementById(`label_${item.id}`); 
            
            // 現在チェックされていない、かつ非活性化リストに含まれているパーツを処理
            if (checkbox && !currentlyCheckedIds.has(item.id) && partsToDisable.has(item.id)) {
                checkbox.disabled = true; // チェックボックスを無効化
                checkbox.checked = false; // チェックを外す
                if (label) {
                    label.classList.add('disabled-item'); // スタイルを適用
                }
            } else if (checkbox && !currentlyCheckedIds.has(item.id) && !partsToDisable.has(item.id)) {
                // 選択されていないが、非活性化リストにも含まれない場合は有効化（念のため）
                // ただし、もしそのパーツ自体が他の選択されたパーツによって非活性化されるべきでない場合は、disabledを解除
                // ここは慎重にロジックを組む必要があります。
                // 現状のロジックでは、まず全て有効化してから無効化するので、このelse ifは不要かもしれません。
                // ただし、明示的な有効化/無効化の指示として残しておきます。
                checkbox.disabled = false;
                if (label) {
                    label.classList.remove('disabled-item');
                }
            }
        });
    }

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
    }

    // コピーするテキストはselectedPartsForCopyを使用
    copyText = `選択した部位:\n${selectedPartsForCopy.join("\n")}\n---\n合計時間: ${currentTotalHours}時間\n料金合計: ${totalPrice.toLocaleString()}円（税込）`;
}

window.copyToClipboard = async function() { // グローバルスコープに公開
    const messageArea = document.getElementById("message-area");
    const reservationButton = document.getElementById("reservationButton");

    if (copyText === "" || currentTotalHours === "0.0" || currentTotalHours === "選択を見直してください") {
        if (!messageArea.classList.contains('error')) {
            showMessage("コピーする内容がありません。まず施術希望部位を選択してください。", true);
        }
        reservationButton.classList.add("disabled"); // コピーできない場合は予約ボタンも非活性のまま
        return;
    }

    try {
        await navigator.clipboard.writeText(copyText);
        let displayHours = currentTotalHours;
        if (displayHours.endsWith('.0')) {
            displayHours = displayHours.slice(0, -2); // ".0" を削除
        }
        showMessage(`選択内容がコピーされました！\nご予約メニュー【${displayHours}時間枠】を選択後、コピー内容を備考欄に貼り付けて下さい。`, false);
        reservationButton.classList.remove("disabled"); // 予約ボタンを活性化
    } catch (err) {
        console.error('Failed to copy: ', err);

        const selectStartMarker = "---COPY_START---";
        const selectEndMarker = "---COPY_END---";

        let displayHoursForManual = currentTotalHours;
        if (displayHoursForManual.endsWith('.0')) {
            displayHoursForManual = displayHoursForManual.slice(0, -2);
        }
        const fullDisplayMessage = `自動コピーに失敗しました。\n以下の枠内の**ハイライトされた内容をコピー**して手動で貼り付けてください。\n\n${selectStartMarker}${copyText}${selectEndMarker}\n\nご予約メニュー【${displayHoursForManual}時間枠】を選択後、コピー内容を備考欄に貼り付けて下さい。`;

        showMessage(fullDisplayMessage, true);

        let currentText = messageArea.value;

        const startIndex = currentText.indexOf(selectStartMarker);
        const endIndex = currentText.indexOf(selectEndMarker);

        if (startIndex !== -1 && endIndex !== -1) {
            const selectionStart = startIndex + selectStartMarker.length;
            const selectionEnd = endIndex;

            const finalDisplay = currentText.replace(selectStartMarker, "").replace(selectEndMarker, "");
            messageArea.value = finalDisplay;

            const adjustedSelectionStart = selectionStart - selectStartMarker.length;
            const adjustedSelectionEnd = selectionEnd - selectStartMarker.length;

            setTimeout(() => {
                messageArea.focus();
                messageArea.setSelectionRange(adjustedSelectionStart, adjustedSelectionEnd);
            }, 0);

        } else {
            messageArea.select();
        }
        reservationButton.classList.remove("disabled"); // 予約ボタンを活性化
    }
}

function showMessage(message, isError) {
    const messageArea = document.getElementById("message-area");
    messageArea.value = message;
    if (isError) {
        messageArea.classList.add("error");
    } else {
        messageArea.classList.remove("error");
    }
    messageArea.style.display = "block";

    if (isError) {
        messageArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const totalPriceDisplay = document.getElementById("totalPrice");
    totalPriceDisplay.textContent = "手順①.　施術希望部位を選択してください。";
    totalPriceDisplay.classList.add('guidance-message');

    keisan();

    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
        copyButton.addEventListener('click', window.copyToClipboard);
    }
});
