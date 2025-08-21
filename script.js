// 料金と時間のデータを一元管理するオブジェクト
const menuData = {
  // セットメニュー
  set_eyebrow: { time: 40, price: 11000, label: '眉毛セット' },
  set_fullface: { time: 65, price: 13200, label: '全顔セット' },
  set_fullface_eyebrow: { time: 105, price: 22000, label: '全顔+眉毛脱毛セット' },
  set_fullbody_all: { time: 270, price: 52800, label: '全身オール（顔、VIO含む）' },
  set_fullbody_noface: { time: 200, price: 41800, label: '顔なし全身' },
  set_upperbody: { time: 170, price: 30800, label: '上半身セット' },
  set_lowerbody: { time: 150, price: 30800, label: '下半身セット' },
  set_vio: { time: 50, price: 16500, label: 'VIOセット' },
  set_fullface_vio: { time: 100, price: 27500, label: '全顔+VIOセット' },
  set_vio_buttocks: { time: 60, price: 20900, label: 'VIO+臀部（おしり）セット' },
  set_navel_vio: { time: 55, price: 18700, label: 'ヘソ下+VIOセット' },
  set_chest_abdomen: { time: 35, price: 9900, label: '胸＋腹部セット' },
  set_arms_legs: { time: 125, price: 28600, label: '両腕+両足セット' },
  set_arms: { time: 65, price: 17600, label: '両腕セット' },
  set_legs: { time: 65, price: 17600, label: '両足セット' },
  set_ear_whole: { time: 25, price: 8800, label: '耳全体（耳珠、耳たぶ含む）' },

  // パーツメニュー
  part_nose_under: { time: 16, price: 4400, label: '鼻下' },
  part_mouth_under: { time: 16, price: 4400, label: '口下' },
  part_cheek: { time: 16, price: 4400, label: '頬' },
  part_face_line: { time: 16, price: 4400, label: 'フェイスライン' },
  part_neck: { time: 16, price: 4400, label: '首' },
  part_nape: { time: 16, price: 4400, label: 'うなじ' },
  part_armpit: { time: 13, price: 4400, label: '脇' },
  part_chest_nipple: { time: 16, price: 6600, label: '胸（乳輪周り含む）' },
  part_abdomen_navel: { time: 16, price: 6600, label: '腹部（ヘソ下含む）' },
  part_back_upper: { time: 16, price: 6600, label: '背中上' },
  part_back_lower: { time: 16, price: 6600, label: '背中下' },
  part_buttocks: { time: 16, price: 6600, label: '臀部（おしり）' },
  part_elbow_upper: { time: 16, price: 6600, label: '肘上' },
  part_elbow_lower: { time: 18, price: 6600, label: '肘下' },
  part_hand_finger: { time: 12, price: 4400, label: '手の甲+指' },
  part_knee_upper: { time: 35, price: 8800, label: '膝上' },
  part_knee_lower: { time: 35, price: 8800, label: '膝下' },
  part_foot_toe: { time: 12, price: 4400, label: '足の甲＋指' },
  part_v_line: { time: 16, price: 7700, label: 'Vライン' },
  part_i_line: { time: 20, price: 7700, label: 'Iライン' },
  part_o_line: { time: 16, price: 5500, label: 'Oライン' },
  part_forehead: { time: 13, price: 4400, label: 'おでこ' },
  part_eyebrow_upper: { time: 13, price: 4400, label: '眉上' },
  part_eyebrow_lower: { time: 13, price: 6600, label: '眉下' },
  part_eyebrow_middle: { time: 13, price: 2200, label: '眉中' },
  part_small_nose: { time: 13, price: 4400, label: '小鼻' },
  part_nose_hair: { time: 20, price: 4400, label: '鼻毛' },
  part_tragus: { time: 13, price: 3300, label: '耳珠' },
  part_earlobe: { time: 13, price: 4400, label: '耳たぶ' },
  part_nipple: { time: 10, price: 4400, label: '乳輪周り' },
  part_navel_under: { time: 10, price: 4400, label: 'ヘソ下' },
  part_design_fee: { time: 0, price: 0, label: 'デザイン料' },
  
  // その他メニュー
  other_lala_peel: { time: 90, price: 12100, label: 'ララピール' },
  other_face_correction: { time: 90, price: 22000, label: '小顔矯正術' },
  other_derma_scalp: { time: 50, price: 22000, label: 'ダーマインジェクション（スカルプケア）' },
  other_derma_skin: { time: 50, price: 22000, label: 'ダーマインジェクション（肌育ケア）' },
};

// 選択されたメニューの情報を格納する配列
let selectedItems = [];

// DOM要素の取得
const totalPriceElement = document.getElementById('totalPrice');
const totalTimeElement = document.getElementById('totalTime');
const messageArea = document.getElementById('message-area');
const copyButton = document.getElementById('copyButton');

// すべてのチェックボックスにイベントリスナーを追加
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
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
 * 計算を更新するメイン関数
 */
function updateCalculation() {
  let totalTime = 0;
  let totalPrice = 0;
  selectedItems = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const id = checkbox.id;
      const item = menuData[id];

      // itemがundifinedでないか確認
      if (item) {
        totalTime += item.time;
        totalPrice += item.price;
        selectedItems.push(item);
      }
    }
  });

  // 結果の表示を更新
  if (totalPriceElement) {
    totalPriceElement.textContent = `料金合計: ${totalPrice.toLocaleString()}円（税込）`;
  }
  if (totalTimeElement) {
    totalTimeElement.value = (totalTime / 60).toFixed(2);
  }

  // テキストエリアのメッセージを更新
  updateMessageArea();
}

/**
 * メッセージエリアのテキストを更新
 */
function updateMessageArea() {
  let message = "選択した部位:\n";
  let hasSetMenu = false;
  let hasPartsMenu = false;
  let hasOtherMenu = false;

  const selectedSets = selectedItems.filter(item => item.label.includes('セット') || item.label.includes('全体'));
  if (selectedSets.length > 0) {
    hasSetMenu = true;
    message += selectedSets.map(item => `・${item.label} 税込 ${item.price.toLocaleString()}円`).join('\n') + '\n\n';
  }

  const selectedParts = selectedItems.filter(item => !item.label.includes('セット') && !item.label.includes('全体') && !item.label.includes('矯正') && !item.label.includes('ピール') && !item.label.includes('インジェクション'));
  if (selectedParts.length > 0) {
    hasPartsMenu = true;
    message += 'パーツメニュー:\n';
    message += selectedParts.map(item => `・${item.label} 税込 ${item.price.toLocaleString()}円`).join('\n') + '\n\n';
  }

  const selectedOthers = selectedItems.filter(item => item.label.includes('矯正') || item.label.includes('ピール') || item.label.includes('インジェクション'));
  if (selectedOthers.length > 0) {
    hasOtherMenu = true;
    message += 'その他メニュー:\n';
    message += selectedOthers.map(item => `・${item.label} 税込 ${item.price.toLocaleString()}円`).join('\n') + '\n\n';
  }
  
  if (!hasSetMenu && !hasPartsMenu && !hasOtherMenu) {
    message = "選択されたメニューはありません。";
  }

  const totalTime = selectedItems.reduce((sum, item) => sum + item.time, 0);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
  
  message += `合計時間: ${Math.floor(totalTime / 60)}時間${totalTime % 60}分\n`;
  message += `料金合計: ${totalPrice.toLocaleString()}円（税込）`;

  if (messageArea) {
    messageArea.value = message;
  }
}

/**
 * テキストエリアの内容をクリップボードにコピー
 */
function copyMessage() {
  if (messageArea) {
    messageArea.select();
    document.execCommand('copy');
    alert('選択内容をコピーしました！');
  }
}
