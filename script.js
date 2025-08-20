// セットメニューとパーツメニューの関連付けを定義します。
const setMenuDetails = {
    set_eyebrow: ["part_eyebrow_upper", "part_eyebrow_lower", "part_eyebrow_middle", "part_design_fee"],
    set_fullface: ["part_nose_under", "part_mouth_under", "part_cheek", "part_face_line", "part_neck"],
    set_fullface_eyebrow: ["set_fullface", "part_eyebrow_upper", "part_eyebrow_lower", "part_eyebrow_middle", "part_design_fee"],
    set_fullbody_all: ["set_upperbody", "set_lowerbody"],
    set_fullbody_noface: ["part_armpit", "part_nape", "part_back_upper", "part_back_lower", "part_chest_nipple", "part_abdomen_navel", "part_elbow_upper", "part_elbow_lower", "part_hand_finger", "part_v_line", "part_i_line", "part_o_line", "part_buttocks", "part_knee_upper", "part_knee_lower", "part_foot_toe"],
    set_upperbody: ["set_fullface", "part_armpit", "part_chest_nipple", "part_abdomen_navel", "part_nape", "part_back_upper", "part_back_lower", "part_elbow_upper", "part_elbow_lower", "part_hand_finger"],
    set_lowerbody: ["set_vio", "part_buttocks", "part_knee_upper", "part_knee_lower", "part_foot_toe"],
    set_vio: ["part_v_line", "part_i_line", "part_o_line"],
    set_fullface_vio: ["set_fullface", "set_vio"],
    set_vio_buttocks: ["set_vio", "part_buttocks"],
    set_navel_vio: ["part_navel_under", "set_vio"],
    set_chest_abdomen: ["part_chest_nipple", "part_abdomen_navel"],
    set_arms_legs: ["part_elbow_upper", "part_elbow_lower", "part_hand_finger", "part_knee_upper", "part_knee_lower", "part_foot_toe"],
    set_arms: ["part_elbow_upper", "part_elbow_lower", "part_hand_finger"],
    set_legs: ["part_knee_upper", "part_knee_lower", "part_foot_toe"],
    set_ear_whole: ["part_tragus", "part_earlobe"]
};

// パーツメニューのグループ化を定義します。
const partGroups = {
    "【顔】": ["part_nose_under", "part_mouth_under", "part_cheek", "part_face_line", "part_neck"],
    "【胴】": ["part_nape", "part_armpit", "part_chest_nipple", "part_abdomen_navel", "part_back_upper", "part_back_lower", "part_buttocks"],
    "【腕・足】": ["part_elbow_upper", "part_elbow_lower", "part_hand_finger", "part_knee_upper", "part_knee_lower", "part_foot_toe"],
    "【VIO】": ["part_v_line", "part_i_line", "part_o_line"],
    "【特殊部位】": ["part_forehead", "part_eyebrow_upper", "part_eyebrow_lower", "part_eyebrow_middle", "part_small_nose", "part_nose_hair", "part_tragus", "part_earlobe", "part_nipple", "part_navel_under", "part_design_fee"],
    "【その他メニュー】": ["other_lala_peel", "other_face_correction", "other_derma_scalp", "other_derma_skin"]
};

const checkboxInfo = {};
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    if (label) {
        // ラベルのテキストをから時間と価格を抽出します
        const textContent = label.textContent.trim();
        const match = textContent.match(/\((.*?分)\) 税込 (.*?円)/);
        if (match) {
            checkboxInfo[checkbox.id] = {
                name: textContent.split('(')[0].trim(),
                time: parseInt(match[1]),
                price: parseInt(match[2].replace(/,/g, ''))
            };
        }
    }
});

function keisan() {
    let totalTime = 0;
    let totalPrice = 0;
    let selectedSetParts = new Set();
    let selectedParts = new Set();

    // セットメニューの処理
    const setMenuCheckboxes = [
        "set_eyebrow", "set_fullface", "set_fullface_eyebrow", "set_fullbody_all",
        "set_fullbody_noface", "set_upperbody", "set_lowerbody", "set_vio",
        "set_fullface_vio", "set_vio_buttocks", "set_navel_vio", "set_chest_abdomen",
        "set_arms_legs", "set_arms", "set_legs", "set_ear_whole"
    ];

    setMenuCheckboxes.forEach(setId => {
        const checkbox = document.getElementById(setId);
        if (checkbox && checkbox.checked) {
            totalTime += checkboxInfo[setId].time;
            totalPrice += checkboxInfo[setId].price;
            const parts = setMenuDetails[setId];
            parts.forEach(partId => {
                selectedSetParts.add(partId);
            });
        }
    });

    // パーツメニューの処理
    const partMenuCheckboxes = Object.values(partGroups).flat();
    let selectedPartNames = [];
    partMenuCheckboxes.forEach(partId => {
        const checkbox = document.getElementById(partId);
        // セットメニューに含まれていないパーツのみを計算に加えます
        if (checkbox && checkbox.checked && !selectedSetParts.has(partId)) {
            totalTime += checkboxInfo[partId].time;
            totalPrice += checkboxInfo[partId].price;
            selectedParts.add(partId);
        }
    });

    // 「その他メニュー」の処理
    const otherMenuCheckboxes = partGroups["【その他メニュー】"];
    otherMenuCheckboxes.forEach(otherId => {
        const checkbox = document.getElementById(otherId);
        if (checkbox && checkbox.checked) {
            totalTime += checkboxInfo[otherId].time;
            totalPrice += checkboxInfo[otherId].price;
        }
    });

    // 選択されたセットメニューとパーツメニューの名前を取得
    let selectedSetMenuNames = [];
    setMenuCheckboxes.forEach(setId => {
        const checkbox = document.getElementById(setId);
        if (checkbox && checkbox.checked) {
            selectedSetMenuNames.push(checkboxInfo[setId].name);
        }
    });

    let FinalSelectedParts = [];
    partMenuCheckboxes.forEach(partId => {
        const checkbox = document.getElementById(partId);
        if (checkbox && checkbox.checked && !selectedSetParts.has(partId)) {
            FinalSelectedParts.push(checkboxInfo[partId].name);
        }
    });

    let selectedOtherNames = [];
    otherMenuCheckboxes.forEach(otherId => {
        const checkbox = document.getElementById(otherId);
        if (checkbox && checkbox.checked) {
            selectedOtherNames.push(checkboxInfo[otherId].name);
        }
    });

    // 時間のフォーマットを hh.mm に変更
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    const formattedTime = `${hours}時間${minutes}分`;

    document.getElementById('totalTime').value = formattedTime;
    document.getElementById('totalPrice').textContent = `料金合計: ${totalPrice.toLocaleString()}円（税込）`;

    // クリップボードにコピーする内容を準備
    let copyText = `選択したメニュー:\n`;
    if (selectedSetMenuNames.length > 0) {
        selectedSetMenuNames.forEach(name => {
            copyText += `【${name}】\n`;
        });
    }
    if (FinalSelectedParts.length > 0) {
        FinalSelectedParts.forEach(name => {
            copyText += `【${name}】\n`;
        });
    }
    if (selectedOtherNames.length > 0) {
        selectedOtherNames.forEach(name => {
            copyText += `【${name}】\n`;
        });
    }
    copyText += `\n---`
    copyText += `\n合計時間: ${formattedTime}`;
    copyText += `\n料金合計: ${totalPrice.toLocaleString()}円（税込）`;

    const messageArea = document.getElementById('message-area');
    messageArea.value = copyText;

    const copyButton = document.getElementById('copyButton');
    copyButton.onclick = () => {
        navigator.clipboard.writeText(copyText).then(() => {
            // コピー成功時のアラート表示
            alert(`選択内容がコピーされました！\nご予約メニュー【${formattedTime}枠】を選択後、コピー内容を備考欄に貼り付けて下さい。\n\n---表示されたコピー内容---\n${copyText}`);
        }).catch(err => {
            console.error('コピーに失敗しました', err);
        });
    };
}

// ページ読み込み時に計算を実行し、イベントリスナーを設定
window.onload = function() {
    keisan();
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', keisan);
    });
};
