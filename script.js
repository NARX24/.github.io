// 価格と時間のデータを格納するオブジェクト
const menuData = {
    // セットメニュー
    set_eyebrow: { time: 40, price: 11000, name: "眉毛セット", parts: "眉上・眉下・眉中・デザイン料" },
    set_fullface: { time: 65, price: 13200, name: "全顔セット", parts: "鼻下・口下・頬・フェイスライン・首" },
    set_fullface_eyebrow: { time: 105, price: 22000, name: "全顔+眉毛脱毛セット", parts: "全顔セット・眉上・眉下・眉中・デザイン料" },
    set_fullbody_all: { time: 270, price: 52800, name: "全身オール（顔、VIO含む）", parts: "上半身セット・下半身セット" },
    set_fullbody_noface: { time: 200, price: 41800, name: "顔なし全身", parts: "脇・うなじ・背中上・背中下・胸（乳輪周り含む）・腹部（ヘソ下含む）・肘上・肘下・手の甲＋指・Vライン・Iライン・Oライン・臀部（おしり）・膝上・膝下・足の甲＋指" },
    set_upperbody: { time: 170, price: 30800, name: "上半身セット", parts: "全顔セット・脇・胸（乳輪周り含む）・腹部（ヘソ下含む）・うなじ・背中上・背中下・肘上・肘下・手の甲＋指" },
    set_lowerbody: { time: 150, price: 30800, name: "下半身セット", parts: "VIOセット・臀部（おしり）・膝上・膝下・足の甲＋指" },
    set_vio: { time: 50, price: 16500, name: "VIOセット", parts: "Vライン・Iライン・Oライン" },
    set_fullface_vio: { time: 100, price: 27500, name: "全顔+VIOセット", parts: "全顔セット・VIOセット" },
    set_vio_buttocks: { time: 60, price: 20900, name: "VIO+臀部（おしり）セット", parts: "VIOセット・臀部（おしり）" },
    set_navel_vio: { time: 55, price: 18700, name: "ヘソ下+VIOセット", parts: "ヘソ下・VIOセット" },
    set_chest_abdomen: { time: 35, price: 9900, name: "胸＋腹部セット", parts: "胸（乳輪周り含む）・腹部（ヘソ下含む）" },
    set_arms_legs: { time: 125, price: 28600, name: "両腕+両足セット", parts: "肘上・肘下・手の甲＋指・膝上・膝下・足の甲＋指" },
    set_arms: { time: 65, price: 17600, name: "両腕セット", parts: "肘上・肘下・手の甲＋指" },
    set_legs: { time: 65, price: 17600, name: "両足セット", parts: "膝上・膝下・足の甲＋指" },
    set_ear_whole: { time: 25, price: 8800, name: "耳全体（耳珠、耳たぶ含む）", parts: "耳珠・耳たぶ" },
    // パーツメニュー
    part_nose_under: { time: 16, price: 4400, name: "鼻下" },
    part_mouth_under: { time: 16, price: 4400, name: "口下" },
    part_cheek: { time: 16, price: 4400, name: "頬" },
    part_face_line: { time: 16, price: 4400, name: "フェイスライン" },
    part_neck: { time: 16, price: 4400, name: "首" },
    part_nape: { time: 16, price: 4400, name: "うなじ" },
    part_armpit: { time: 13, price: 4400, name: "脇" },
    part_chest_nipple: { time: 16, price: 6600, name: "胸（乳輪周り含む）" },
    part_abdomen_navel: { time: 16, price: 6600, name: "腹部（ヘソ下含む）" },
    part_back_upper: { time: 16, price: 6600, name: "背中上" },
    part_back_lower: { time: 16, price: 6600, name: "背中下" },
    part_buttocks: { time: 16, price: 6600, name: "臀部（おしり）" },
    part_elbow_upper: { time: 16, price: 6600, name: "肘上" },
    part_elbow_lower: { time: 18, price: 6600, name: "肘下" },
    part_hand_finger: { time: 12, price: 4400, name: "手の甲+指" },
    part_knee_upper: { time: 35, price: 8800, name: "膝上" },
    part_knee_lower: { time: 35, price: 8800, name: "膝下" },
    part_foot_toe: { time: 12, price: 4400, name: "足の甲＋指" },
    part_v_line: { time: 16, price: 7700, name: "Vライン" },
    part_i_line: { time: 20, price: 7700, name: "Iライン" },
    part_o_line: { time: 16, price: 5500, name: "Oライン" },
    part_forehead: { time: 13, price: 4400, name: "おでこ" },
    part_eyebrow_upper: { time: 13, price: 4400, name: "眉上" },
    part_eyebrow_lower: { time: 13, price: 6600, name: "眉下" },
    part_eyebrow_middle: { time: 13, price: 2200, name: "眉中" },
    part_small_nose: { time: 13, price: 4400, name: "小鼻" },
    part_nose_hair: { time: 20, price: 4400, name: "鼻毛" },
    part_tragus: { time: 13, price: 3300, name: "耳珠" },
    part_earlobe: { time: 13, price: 4400, name: "耳たぶ" },
    part_nipple: { time: 10, price: 4400, name: "乳輪周り" },
    part_navel_under: { time: 10, price: 4400, name: "ヘソ下" },
    part_design_fee: { time: 0, price: 1100, name: "デザイン料" },
    // その他メニュー
    other_lala_peel: { time: 90, price: 12100, name: "ララピール" },
    other_face_correction: { time: 90, price: 22000, name: "小顔矯正術" },
    other_derma_scalp: { time: 50, price: 22000, name: "ダーマインジェクション（スカルプケア）" },
    other_derma_skin: { time: 50, price: 22000, name: "ダーマインジェクション（肌育ケア）" }
};

const FinalSelectedParts = [];
let totalTime = 0;
let totalPrice = 0;

function keisan() {
    totalTime = 0;
    totalPrice = 0;
    FinalSelectedParts.length = 0;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const menuId = checkbox.id;
            if (menuData[menuId]) {
                const item = menuData[menuId];
                totalTime += item.time;
                totalPrice += item.price;
                
                let displayName = item.name;
                if (item.parts) {
                    displayName += ` ＜${item.parts}＞`;
                }
                
                FinalSelectedParts.push(displayName);
            }
        }
    });

    // 小数点付きの時間を計算
    const totalHours = totalTime / 60;
    document.getElementById('totalTime').value = totalHours.toFixed(1);

    // 価格をカンマ区切りでフォーマット
    const formattedPrice = totalPrice.toLocaleString();
    document.getElementById('totalPrice').textContent = `料金合計: ${formattedPrice}円（税込）`;

    // 予約メッセージエリアの更新
    updateMessageArea();
}

function updateMessageArea() {
    let message = "選択した部位:\n";
    if (FinalSelectedParts.length > 0) {
        message += FinalSelectedParts.join('\n');
    } else {
        message += "選択なし";
    }
    
    // 合計時間と料金をメッセージに追加
    const totalHours = totalTime / 60;
    const formattedPrice = totalPrice.toLocaleString();
    
    message += `\n---\n合計時間: ${totalHours.toFixed(1)}時間\n料金合計: ${formattedPrice}円（税込）`;
    
    document.getElementById('message-area').value = message;
}

// コピーボタンのクリックイベント
document.getElementById('copyButton').addEventListener('click', function() {
    const totalHours = totalTime / 60;
    const formattedPrice = totalPrice.toLocaleString();
    
    // 新しいコピー内容の生成
    const selectedItemsText = FinalSelectedParts.map(item => {
        // メニュー名と金額を抽出
        const match = item.match(/^(.*?)\(.*?\) 税込 (.*?)円/);
        if (match && match[1] && match[2]) {
            return `【${match[1].trim()}】 税込 ${match[2]}円`;
        }
        return item;
    }).join('\n');

    const copyContent = `選択した部位:\n${selectedItemsText}\n---\n合計時間: ${totalHours.toFixed(1)}時間\n料金合計: ${formattedPrice}円（税込）`;

    navigator.clipboard.writeText(copyContent)
        .then(() => {
            alert(`選択内容がコピーされました！\nご予約メニュー【${totalHours.toFixed(1)}時間枠】を選択後、コピー内容を備考欄に貼り付けて下さい。\n\n---\n${copyContent}`);
        })
        .catch(err => {
            console.error('コピーに失敗しました', err);
        });
});

// ページ読み込み時に計算を実行
window.addEventListener('load', keisan);
