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
    { id: "part_chest_nipple", name: "胸（乳輪周り含む）", time: 16, price: 6600, parts: ["part_chest_nipple"], type: "part" },
    { id: "part_abdomen_navel", name: "腹部（ヘソ下含む）", time: 16, price: 6600, parts: ["part_abdomen_navel"], type: "part" },
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
    { id: "part_nose_hair", name: "鼻毛", time: 20, price: 4400, parts: ["part_nose_hair"], type: "part" },
    { id: "part_tragus", name: "耳珠", time: 13, price: 3300, parts: ["part_tragus"], type: "part" },
    { id: "part_earlobe", name: "耳たぶ", time: 13, price: 4400, parts: ["part_earlobe"], type: "part" },
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

    if (item.type === "part") {
        // 個別パーツであれば、それ自体が最終パーツ
        finalParts.push(itemId);
    } else if (item.type === "set" && item.parts && item.parts.length > 0) {
        // セットメニューであれば、含まれる各パーツを展開
        item.parts.forEach(partId => {
            // 各子要素を展開し、結果をfinalPartsに追加
            finalParts.push(...getFinalParts(partId, currentPath));
        });
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

    // --- 【追加・修正箇所1: 全てのパーツメニューを初期状態に戻す】 ---
    // まず全てのパーツメニュー（チェックボックスとラベル）を有効な状態に戻す
    items.forEach(item => {
        if (item.type === "part") { // パーツメニューのみ対象
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
        }
    });
    // --- 【追加・修正箇所1 終わり】 ---


    // すべてのチェックボックスを反復処理
    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        if (checkbox && checkbox.checked) {
            totalTime += item.time;
            totalPrice += item.price;

            // 画面表示用のテキストを生成（詳細情報を含む）
            let setDetailText = '';
            if (item.type === "set" && item.parts && item.parts.length > 0) {
                const finalExpandedNames = getFinalParts(item.id).map(partId => {
                    const subItem = itemMap.get(partId);
                    // 丸括弧内のテキストを除去
                    return subItem ? subItem.name.replace(/（[^）]*）/g, '') : '';
                }).filter(name => name !== '');
                setDetailText = finalExpandedNames.length > 0 ? `＜${finalExpandedNames.join("・")}＞` : '';
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

    // --- 【追加・修正箇所2: セットメニューに含まれるパーツを非活性にする】 ---
    // ここで再度全てのチェックボックスの状態をチェックし、セットに含まれるパーツを非活性化
    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        // checkboxが存在し、かつ選択されているセットメニューの場合のみ処理
        if (checkbox && checkbox.checked && item.type === "set") { 
            const containedParts = getFinalParts(item.id); // セットに含まれる最終的なパーツIDを取得

            containedParts.forEach(partId => {
                const partCheckbox = document.getElementById(partId);
                // HTMLでlabel要素にid="label_パーツID"を付与している前提
                const partLabel = document.getElementById(`label_${partId}`); 
                // セット自体は非活性にしない、個別パーツのみ対象
                if (partCheckbox && itemMap.get(partId).type === "part") { 
                    partCheckbox.disabled = true; // チェックボックスを無効化
                    partCheckbox.checked = false; // 念のためチェックも外す (これ重要)
                    if (partLabel) {
                        partLabel.classList.add('disabled-item'); // スタイルを適用
                    }
                }
            });
        }
    });
    // --- 【追加・修正箇所2 終わり】 ---


    const hours = Math.ceil(totalTime / 30) * 0.5;

    // 小数点以下が.0の場合に整数にする
    if (hours % 1 === 0) { 
        currentTotalHours = hours.toString(); 
    } else {
        currentTotalHours = hours.toFixed(1); 
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
        // コピー成功時のメッセージ表示
        showMessage("コピーしました！\n手順②. 予約ページへ進んでください。");
        // コピーが成功したら予約ボタンを活性化
        reservationButton.classList.remove("disabled");

    } catch (err) {
        console.error('クリップボードへのコピーに失敗しました:', err);
        showMessage("クリップボードへのコピーに失敗しました。手動でコピーしてください。", true);
        // コピー失敗時も予約ボタンは非活性のまま
        reservationButton.classList.add("disabled");
    }
}

/**
 * メッセージを表示するヘルパー関数
 * @param {string} message - 表示するメッセージ
 * @param {boolean} isError - エラーメッセージかどうか
 */
function showMessage(message, isError = false) {
    const messageArea = document.getElementById("message-area");
    messageArea.value = message;
    messageArea.style.display = "block"; // メッセージエリアを表示
    if (isError) {
        messageArea.classList.add('error');
    } else {
        messageArea.classList.remove('error');
    }
}

// 初期計算の実行
document.addEventListener('DOMContentLoaded', () => {
    keisan(); // ページロード時に一度計算を実行して初期表示を整える
    document.getElementById("copyButton").addEventListener("click", copyToClipboard);
});
