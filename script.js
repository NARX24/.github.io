// 料金と時間のデータを一元管理するオブジェクト
const menuData = {
    // セットメニュー
    set_eyebrow: { time: 40, price: 11000, label: '眉毛セット', type: 'set' },
    set_fullface: { time: 65, price: 13200, label: '全顔セット', type: 'set' },
    set_fullface_eyebrow: { time: 105, price: 22000, label: '全顔+眉毛脱毛セット', type: 'set' },
    set_fullbody_all: { time: 270, price: 52800, label: '全身オール（顔、VIO含む）', type: 'set' },
    set_fullbody_noface: { time: 200, price: 41800, label: '顔なし全身', type: 'set' },
    set_upperbody: { time: 170, price: 30800, label: '上半身セット', type: 'set' },
    set_lowerbody: { time: 150, price: 30800, label: '下半身セット', type: 'set' },
    set_vio: { time: 50, price: 16500, label: 'VIOセット', type: 'set' },
    set_fullface_vio: { time: 100, price: 27500, label: '全顔+VIOセット', type: 'set' },
    set_vio_buttocks: { time: 60, price: 20900, label: 'VIO+臀部（おしり）セット', type: 'set' },
    set_navel_vio: { time: 55, price: 18700, label: 'ヘソ下+VIOセット', type: 'set' },
    set_chest_abdomen: { time: 35, price: 9900, label: '胸＋腹部セット', type: 'set' },
    set_arms_legs: { time: 125, price: 28600, label: '両腕+両足セット', type: 'set' },
    set_arms: { time: 65, price: 17600, label: '両腕セット', type: 'set' },
    set_legs: { time: 65, price: 17600, label: '両足セット', type: 'set' },
    set_ear_whole: { time: 25, price: 8800, label: '耳全体（耳珠、耳たぶ含む）', type: 'set' },

    // パーツメニュー
    part_nose_under: { time: 16, price: 4400, label: '鼻下', type: 'part' },
    part_mouth_under: { time: 16, price: 4400, label: '口下', type: 'part' },
    part_cheek: { time: 16, price: 4400, label: '頬', type: 'part' },
    part_face_line: { time: 16, price: 4400, label: 'フェイスライン', type: 'part' },
    part_neck: { time: 16, price: 4400, label: '首', type: 'part' },
    part_nape: { time: 16, price: 4400, label: 'うなじ', type: 'part' },
    part_armpit: { time: 13, price: 4400, label: '脇', type: 'part' },
    part_chest_nipple: { time: 16, price: 6600, label: '胸（乳輪周り含む）', type: 'part' },
    part_abdomen_navel: { time: 16, price: 6600, label: '腹部（ヘソ下含む）', type: 'part' },
    part_back_upper: { time: 16, price: 6600, label: '背中上', type: 'part' },
    part_back_lower: { time: 16, price: 6600, label: '背中下', type: 'part' },
    part_buttocks: { time: 16, price: 6600, label: '臀部（おしり）', type: 'part' },
    part_elbow_upper: { time: 16, price: 6600, label: '肘上', type: 'part' },
    part_elbow_lower: { time: 18, price: 6600, label: '肘下', type: 'part' },
    part_hand_finger: { time: 12, price: 4400, label: '手の甲+指', type: 'part' },
    part_knee_upper: { time: 35, price: 8800, label: '膝上', type: 'part' },
    part_knee_lower: { time: 35, price: 8800, label: '膝下', type: 'part' },
    part_foot_toe: { time: 12, price: 4400, label: '足の甲＋指', type: 'part' },
    part_v_line: { time: 16, price: 7700, label: 'Vライン', type: 'part' },
    part_i_line: { time: 20, price: 7700, label: 'Iライン', type: 'part' },
    part_o_line: { time: 16, price: 5500, label: 'Oライン', type: 'part' },
    part_forehead: { time: 13, price: 4400, label: 'おでこ', type: 'part' },
    part_eyebrow_upper: { time: 13, price: 4400, label: '眉上', type: 'part' },
    part_eyebrow_lower: { time: 13, price: 6600, label: '眉下', type: 'part' },
    part_eyebrow_middle: { time: 13, price: 2200, label: '眉中', type: 'part' },
    part_small_nose: { time: 13, price: 4400, label: '小鼻', type: 'part' },
    part_nose_hair: { time: 20, price: 4400, label: '鼻毛', type: 'part' },
    part_tragus: { time: 13, price: 3300, label: '耳珠', type: 'part' },
    part_earlobe: { time: 13, price: 4400, label: '耳たぶ', type: 'part' },
    part_nipple: { time: 10, price: 4400, label: '乳輪周り', type: 'part' },
    part_navel_under: { time: 10, price: 4400, label: 'ヘソ下', type: 'part' },
    part_design_fee: { time: 0, price: 0, label: 'デザイン料', type: 'part' },

    // その他メニュー
    other_lala_peel: { time: 90, price: 12100, label: 'ララピール', type: 'other' },
    other_face_correction: { time: 90, price: 22000, label: '小顔矯正術', type: 'other' },
    other_derma_scalp: { time: 50, price: 22000, label: 'ダーマインジェクション（スカルプケア）', type: 'other' },
    other_derma_skin: { time: 50, price: 22000, label: 'ダーマインジェクション（肌育ケア）', type: 'other' },
};

// セットメニューに含まれるパーツの関連付け（階層構造に対応）
const setIncludes = {
    set_eyebrow: ['part_eyebrow_upper', 'part_eyebrow_lower', 'part_eyebrow_middle', 'part_design_fee'],
    set_fullface: ['part_nose_under', 'part_mouth_under', 'part_cheek', 'part_face_line', 'part_neck'],
    set_fullface_eyebrow: ['set_fullface', 'set_eyebrow'],
    set_fullbody_all: ['set_fullface_eyebrow', 'set_upperbody', 'set_lowerbody', 'part_earlobe', 'part_nipple', 'part_navel_under'],
    set_fullbody_noface: ['set_upperbody', 'set_lowerbody'],
    set_upperbody: ['set_fullface', 'part_armpit', 'part_chest_nipple', 'part_abdomen_navel', 'part_nape', 'part_back_upper', 'part_back_lower', 'part_elbow_upper', 'part_elbow_lower', 'part_hand_finger'],
    set_lowerbody: ['set_vio', 'part_buttocks', 'part_knee_upper', 'part_knee_lower', 'part_foot_toe'],
    set_vio: ['part_v_line', 'part_i_line', 'part_o_line'],
    set_fullface_vio: ['set_fullface', 'set_vio'],
    set_vio_buttocks: ['set_vio', 'part_buttocks'],
    set_navel_vio: ['part_navel_under', 'set_vio'],
    set_chest_abdomen: ['part_chest_nipple', 'part_abdomen_navel'],
    set_arms_legs: ['set_arms', 'set_legs'],
    set_arms: ['part_elbow_upper', 'part_elbow_lower', 'part_hand_finger'],
    set_legs: ['part_knee_upper', 'part_knee_lower', 'part_foot_toe'],
    set_ear_whole: ['part_tragus', 'part_earlobe'],
};

// DOM要素の取得
const totalPriceElement = document.getElementById('totalPrice');
const totalTimeElement = document.getElementById('totalTime');
const messageArea = document.getElementById('message-area');
const copyButton = document.getElementById('copyButton');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// すべてのチェックボックスにイベントリスナーを追加
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCalculation);
});

// コピーボタンにイベントリスナーを追加
if (copyButton) {
    copyButton.addEventListener('click', copyMessage);
}

// 初期計算
updateCalculation();

/**
 * セットメニューに含まれる全メニューIDを再帰的に取得する
 */
function getIncludedItems(setId) {
    const includedIds = new Set();
    const stack = setIncludes[setId] || [];
    
    stack.forEach(id => {
        includedIds.add(id);
        const item = menuData[id];
        // 階層を深く探索し、すべての下位メニューを取得
        if (item && item.type === 'set') {
            const nestedIds = getIncludedItems(id);
            nestedIds.forEach(nestedId => includedIds.add(nestedId));
        }
    });

    return Array.from(includedIds);
}

/**
 * 計算を更新するメイン関数
 */
function updateCalculation() {
    // 1. すべてのチェックボックスをリセット
    checkboxes.forEach(cb => {
        cb.disabled = false;
        const parent = cb.parentElement;
        if (parent) {
            parent.style.color = 'initial';
        }
    });

    // 2. パーツからセットへの自動切り替え
    const checkedItems = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.id);
    for (const setId in setIncludes) {
        const includedItems = getIncludedItems(setId);
        const setCheckbox = document.getElementById(setId);
        if (setCheckbox && includedItems.length > 0) {
            const allIncludedItemsChecked = includedItems.every(itemId => checkedItems.includes(itemId));
            if (allIncludedItemsChecked) {
                setCheckbox.checked = true;
            }
        }
    }

    // 3. 選択されたセットメニューに含まれる全メニューを無効化
    checkboxes.forEach(cb => {
        if (cb.checked && menuData[cb.id]?.type === 'set') {
            const includedItems = getIncludedItems(cb.id);
            includedItems.forEach(includedId => {
                const includedCheckbox = document.getElementById(includedId);
                if (includedCheckbox) {
                    includedCheckbox.disabled = true;
                    includedCheckbox.checked = false;
                    const parent = includedCheckbox.parentElement;
                    if (parent) {
                        parent.style.color = '#ccc';
                    }
                }
            });
        }
    });

    // 4. 計算と表示
    let totalTime = 0;
    let totalPrice = 0;
    const selectedItems = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked && !checkbox.disabled) {
            const id = checkbox.id;
            const item = menuData[id];
            if (item) {
                totalTime += item.time;
                totalPrice += item.price;
                selectedItems.push(item);
            }
        }
    });

    // 合計時間を30分単位で切り上げ、.5/.0表記
    const roundedTimeMinutes = Math.ceil(totalTime / 30) * 30;
    const hours = Math.floor(roundedTimeMinutes / 60);
    const minutes = roundedTimeMinutes % 60;
    const formattedMinutes = minutes === 30 ? '5' : '0';
    const formattedTime = `${hours}.${formattedMinutes}`;

    if (totalPriceElement) {
        totalPriceElement.textContent = `料金合計: ${totalPrice.toLocaleString()}円（税込）`;
    }
    if (totalTimeElement) {
        totalTimeElement.value = formattedTime;
    }

    // テキストエリアのメッセージを更新
    updateMessageArea(selectedItems, totalTime, totalPrice, formattedTime);
}

/**
 * メッセージエリアのテキストを更新
 */
function updateMessageArea(selectedItems, totalTime, totalPrice, formattedTime) {
    let message = `ご予約メニュー【${formattedTime}時間枠】を選択後、\nコピー内容ご予約時の［備考欄］に貼り付けて下さい。\n\n`;

    if (selectedItems.length > 0) {
        message += "---" + "\n";
        message += "選択した部位:" + "\n";
        selectedItems.forEach(item => {
            message += `【${item.label}】税込${item.price.toLocaleString()}円\n`;
        });
        message += "---" + "\n";
        message += `合計時間:${Math.floor(totalTime / 60)}時間${totalTime % 60}分\n`;
        message += `料金合計:${totalPrice.toLocaleString()}円(税込)`;
    } else {
        message += `\n` + `選択されたメニューはありません。` + `\n\n`;
        message += `---` + `\n`;
        message += `合計時間:${Math.floor(totalTime / 60)}時間${totalTime % 60}分\n`;
        message += `料金合計:${totalPrice.toLocaleString()}円(税込)`;
    }
    
    if (messageArea) {
        messageArea.value = message;
    }
}

/**
 * テキストエリアの内容をクリップボードにコピー
 */
function copyMessage() {
    // 選択されたメニュー情報を取得
    let totalTime = 0;
    let totalPrice = 0;
    const selectedItems = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && !checkbox.disabled) {
            const id = checkbox.id;
            const item = menuData[id];
            if (item) {
                totalTime += item.time;
                totalPrice += item.price;
                selectedItems.push(item);
            }
        }
    });

    // コピーしたいシンプルな内容を生成
    let copyText = "";
    if (selectedItems.length > 0) {
        selectedItems.forEach(item => {
            copyText += `【${item.label}】税込${item.price.toLocaleString()}円\n`;
        });
        copyText += "---" + "\n";
        copyText += `合計時間:${Math.floor(totalTime / 60)}時間${totalTime % 60}分\n`;
        copyText += `料金合計:${totalPrice.toLocaleString()}円(税込)`;
    } else {
        copyText = "選択されたメニューはありません。";
    }

    // 隠し要素にコピーする内容を一時的に書き込み
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = copyText;
    document.body.appendChild(tempTextarea);

    // 隠し要素の内容をクリップボードにコピー
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    // ダイアログはそのまま表示
    if (messageArea) {
        alert(messageArea.value);
    }
}
