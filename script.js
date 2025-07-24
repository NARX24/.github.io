// script.js (完全版の例)

document.addEventListener('DOMContentLoaded', () => {
    // 全てのメニュー項目データを定義
    // 各アイテムには、ID、タイプ、価格、時間、含まれる部位のリスト、そしてそのアイテムが非活性化された際に表示するメッセージが含まれます。
    const items = [
        // ■セットメニュー■
        { id: 'set_eyebrow', type: 'set', price: 11000, time: 40, name: '眉毛セット', parts: ['part_eyebrow_upper', 'part_eyebrow_lower', 'part_eyebrow_middle', 'part_design_fee'] },
        { id: 'set_fullface', type: 'set', price: 13200, time: 65, name: '全顔セット', parts: ['part_nose_under', 'part_mouth_under', 'part_cheek', 'part_face_line', 'part_neck'] },
        { id: 'set_fullbody_all', type: 'set', price: 52800, time: 270, name: '全身オール（顔、VIO含む）', parts: ['set_upperbody_parts_no_face', 'set_lowerbody_parts', 'part_nose_under', 'part_mouth_under', 'part_cheek', 'part_face_line', 'part_neck'] }, // set_upperbody_parts_no_faceは仮想的な内部パーツ
        { id: 'set_fullbody_noface', type: 'set', price: 41800, time: 200, name: '顔なし全身', parts: ['part_armpit', 'part_nape', 'part_back_upper', 'part_back_lower', 'part_chest_nipple', 'part_abdomen_navel', 'part_elbow_upper', 'part_elbow_lower', 'part_hand_finger', 'part_v_line', 'part_i_line', 'part_o_line', 'part_buttocks', 'part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        { id: 'set_upperbody', type: 'set', price: 30800, time: 170, name: '上半身セット', parts: ['part_nose_under', 'part_mouth_under', 'part_cheek', 'part_face_line', 'part_neck', 'part_armpit', 'part_chest_nipple', 'part_abdomen_navel', 'part_nape', 'part_back_upper', 'part_back_lower', 'part_elbow_upper', 'part_elbow_lower', 'part_hand_finger'] },
        { id: 'set_lowerbody', type: 'set', price: 30800, time: 150, name: '下半身セット', parts: ['part_v_line', 'part_i_line', 'part_o_line', 'part_buttocks', 'part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        { id: 'set_vio', type: 'set', price: 16500, time: 50, name: 'VIOセット', parts: ['part_v_line', 'part_i_line', 'part_o_line'] },
        { id: 'set_fullface_vio', type: 'set', price: 27500, time: 100, name: '全顔+VIOセット', parts: ['part_nose_under', 'part_mouth_under', 'part_cheek', 'part_face_line', 'part_neck', 'part_v_line', 'part_i_line', 'part_o_line'] },
        { id: 'set_vio_buttocks', type: 'set', price: 20900, time: 60, name: 'VIO+臀部（おしり）セット', parts: ['part_v_line', 'part_i_line', 'part_o_line', 'part_buttocks'] },
        { id: 'set_navel_vio', type: 'set', price: 18700, time: 55, name: 'ヘソ下+VIOセット', parts: ['part_navel_under', 'part_v_line', 'part_i_line', 'part_o_line'] },
        { id: 'set_chest_abdomen', type: 'set', price: 9900, time: 35, name: '胸＋腹部セット', parts: ['part_chest_nipple', 'part_abdomen_navel'] },
        { id: 'set_arms_legs', type: 'set', price: 28600, time: 125, name: '両腕+両足セット', parts: ['part_elbow_upper', 'part_elbow_lower', 'part_hand_finger', 'part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        { id: 'set_arms', type: 'set', price: 17600, time: 65, name: '両腕セット', parts: ['part_elbow_upper', 'part_elbow_lower', 'part_hand_finger'] },
        { id: 'set_legs', type: 'set', price: 17600, time: 65, name: '両足セット', parts: ['part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        { id: 'set_ear_whole', type: 'set', price: 8800, time: 25, name: '耳全体（耳珠、耳たぶ含む）', parts: ['part_tragus', 'part_earlobe'] },

        // ■パーツメニュー■
        // 【顔】
        { id: 'part_nose_under', type: 'part', price: 4400, time: 16, name: '鼻下', parts: ['part_nose_under'] },
        { id: 'part_mouth_under', type: 'part', price: 4400, time: 16, name: '口下', parts: ['part_mouth_under'] },
        { id: 'part_cheek', type: 'part', price: 4400, time: 16, name: '頬', parts: ['part_cheek'] },
        { id: 'part_face_line', type: 'part', price: 4400, time: 16, name: 'フェイスライン', parts: ['part_face_line'] },
        { id: 'part_neck', type: 'part', price: 4400, time: 16, name: '首', parts: ['part_neck'] },

        // 【胴】
        { id: 'part_nape', type: 'part', price: 4400, time: 16, name: 'うなじ', parts: ['part_nape'] },
        { id: 'part_armpit', type: 'part', price: 4400, time: 13, name: '脇', parts: ['part_armpit'] },
        { id: 'part_chest_nipple', type: 'part', price: 6600, time: 16, name: '胸（乳輪周り含む）', parts: ['part_chest_nipple'] },
        { id: 'part_abdomen_navel', type: 'part', price: 6600, time: 16, name: '腹部（ヘソ下含む）', parts: ['part_abdomen_navel'] },
        { id: 'part_back_upper', type: 'part', price: 6600, time: 16, name: '背中上', parts: ['part_back_upper'] },
        { id: 'part_back_lower', type: 'part', price: 6600, time: 16, name: '背中下', parts: ['part_back_lower'] },
        { id: 'part_buttocks', type: 'part', price: 6600, time: 16, name: '臀部（おしり）', parts: ['part_buttocks'] },

        // 【腕・足】
        { id: 'part_elbow_upper', type: 'part', price: 6600, time: 16, name: '肘上', parts: ['part_elbow_upper'] },
        { id: 'part_elbow_lower', type: 'part', price: 6600, time: 18, name: '肘下', parts: ['part_elbow_lower'] },
        { id: 'part_hand_finger', type: 'part', price: 4400, time: 12, name: '手の甲+指', parts: ['part_hand_finger'] },
        { id: 'part_knee_upper', type: 'part', price: 8800, time: 35, name: '膝上', parts: ['part_knee_upper'] },
        { id: 'part_knee_lower', type: 'part', price: 8800, time: 35, name: '膝下', parts: ['part_knee_lower'] },
        { id: 'part_foot_toe', type: 'part', price: 4400, time: 12, name: '足の甲＋指', parts: ['part_foot_toe'] },

        // 【VIO】
        { id: 'part_v_line', type: 'part', price: 7700, time: 16, name: 'Vライン', parts: ['part_v_line'] },
        { id: 'part_i_line', type: 'part', price: 7700, time: 20, name: 'Iライン', parts: ['part_i_line'] },
        { id: 'part_o_line', type: 'part', price: 5500, time: 16, name: 'Oライン', parts: ['part_o_line'] },

        // 【特殊部位】
        { id: 'part_forehead', type: 'part', price: 4400, time: 13, name: 'おでこ', parts: ['part_forehead'] },
        { id: 'part_eyebrow_upper', type: 'part', price: 4400, time: 13, name: '眉上', parts: ['part_eyebrow_upper'] },
        { id: 'part_eyebrow_lower', type: 'part', price: 2200, time: 13, name: '眉下', parts: ['part_eyebrow_lower'] },
        { id: 'part_eyebrow_middle', type: 'part', price: 2200, time: 13, name: '眉中', parts: ['part_eyebrow_middle'] },
        { id: 'part_small_nose', type: 'part', price: 4400, time: 13, name: '小鼻', parts: ['part_small_nose'] },
        { id: 'part_nose_hair', type: 'part', price: 4400, time: 20, name: '鼻毛', parts: ['part_nose_hair'] },
        { id: 'part_tragus', type: 'part', price: 3300, time: 13, name: '耳珠', parts: ['part_tragus'] },
        { id: 'part_earlobe', type: 'part', price: 4400, time: 13, name: '耳たぶ', parts: ['part_earlobe'] },
        { id: 'part_nipple', type: 'part', price: 4400, time: 10, name: '乳輪周り', parts: ['part_nipple'] },
        { id: 'part_navel_under', type: 'part', price: 4400, time: 10, name: 'ヘソ下', parts: ['part_navel_under'] },
        { id: 'part_design_fee', type: 'part', price: 0, time: 0, name: 'デザイン料', parts: ['part_design_fee'] }
    ];

    const totalPriceElem = document.getElementById('totalPrice');
    const totalTimeElem = document.getElementById('totalTime');
    const messageArea = document.getElementById('message-area');
    const copyButton = document.getElementById('copyButton');
    const reservationButton = document.getElementById('reservationButton');

    // keisan関数はグローバルスコープで定義
    window.keisan = function() {
        let totalTime = 0;
        let totalPrice = 0;
        let selectedItems = []; // 選択されたアイテムオブジェクトを保持
        let selectedParts = new Set(); // 選択されたパーツのIDを格納するSet
        let conflictDetected = false;
        let conflictParts = new Set(); // 重複しているパーツを保持するSet

        // 全てのチェックボックスの状態をリセット（非活性解除）
        items.forEach(item => {
            const checkbox = document.getElementById(item.id);
            const label = document.getElementById(`label_${item.id}`);
            if (checkbox && label) {
                checkbox.disabled = false;
                label.classList.remove('disabled-item');
            }
        });

        // 選択された項目を収集し、合計を計算し、選択されたパーツをトラッキング
        items.forEach(item => {
            const checkbox = document.getElementById(item.id);
            if (checkbox && checkbox.checked) {
                selectedItems.push(item);
                totalPrice += item.price;
                totalTime += item.time;
                // 選択されたアイテムのパーツを全てselectedPartsに追加
                item.parts.forEach(part => selectedParts.add(part));
            }
        });

        // 重複チェックと非活性化のロジック
        items.forEach(itemToCheck => {
            const checkboxToCheck = document.getElementById(itemToCheck.id);
            const labelToCheck = document.getElementById(`label_${itemToCheck.id}`);

            if (!checkboxToCheck || !labelToCheck) {
                // HTML要素が見つからない場合はスキップ
                return;
            }

            // 既に選択されている項目は、ここでは重複チェックの対象外（自身はチェックされている状態なので）
            if (checkboxToCheck.checked) {
                // 自分自身のパーツは重複ではないので、ここでは何もしない
                // ただし、選択済みの他のセットとの重複は後で判定する
                return;
            }

            // 未選択の項目について、選択されたパーツとの重複をチェック
            const hasCommonPart = itemToCheck.parts.some(part => selectedParts.has(part));

            if (hasCommonPart) {
                // 重複するパーツが見つかった場合
                checkboxToCheck.disabled = true; // チェックボックスを非活性化
                labelToCheck.classList.add('disabled-item'); // ラベルに非活性スタイルを適用
            } else {
                // 重複がない場合は活性化
                checkboxToCheck.disabled = false;
                labelToCheck.classList.remove('disabled-item');
            }
        });

        // 選択されている項目間で重複が発生しているか最終チェック
        // これは、ユーザーが複数のパーツセットを選んでしまい、それらのセットが同じパーツを含んでいる場合に警告を出すためのものです。
        let combinedSelectedParts = new Set();
        let currentConflicts = new Set();
        let selectedSetItems = selectedItems.filter(item => item.type === 'set');
        let selectedPartItems = selectedItems.filter(item => item.type === 'part');

        // まず、選択されたパーツメニューのパーツをすべて収集
        selectedPartItems.forEach(partItem => {
            partItem.parts.forEach(part => {
                if (combinedSelectedParts.has(part)) {
                    currentConflicts.add(part);
                }
                combinedSelectedParts.add(part);
            });
        });

        // 次に、選択されたセットメニューのパーツを収集し、重複をチェック
        // ここでの処理をより厳密にする必要があります
        selectedSetItems.forEach(setItem => {
            setItem.parts.forEach(part => {
                if (combinedSelectedParts.has(part) && !setItem.parts.includes(part) && !selectedPartItems.some(p => p.parts.includes(part) && p.id !== part)) {
                    // もし、現在選択しているセットのパーツが、既に選択済みのパーツリストに含まれていて、
                    // それが自分自身のセットのパーツではない（つまり他のセット/パーツで選ばれている）
                    // かつ、そのパーツが個別のパーツメニューとして選択されていない場合
                    // → このロジックは複雑になりがちなので、よりシンプルな方法を検討
                }
                if (combinedSelectedParts.has(part)) {
                    currentConflicts.add(part);
                }
                combinedSelectedParts.add(part);
            });
        });
        
        // --- 修正案のロジック（重複チェックの強化） ---
        // 新しいSetを使って、選択された全てのパーツを一つずつ追加し、重複を検出する
        let tempSelectedParts = new Set();
        let detectedConflicts = new Set();
        selectedItems.forEach(item => {
            item.parts.forEach(part => {
                if (tempSelectedParts.has(part)) {
                    detectedConflicts.add(part);
                }
                tempSelectedParts.add(part);
            });
        });

        // 検出された重複があるかどうか
        if (detectedConflicts.size > 0) {
            conflictDetected = true;
            messageArea.classList.add('error');
            const conflictPartNames = Array.from(detectedConflicts).map(partId => {
                const item = items.find(i => i.id === partId);
                return item ? item.name : partId;
            }).join('、');
            messageArea.value = `選択したメニューに重複する部位が含まれています。\n選択を解消してください。\n重複部位: ${conflictPartNames}`;
            messageArea.style.display = 'block';
            copyButton.classList.add('disabled');
            reservationButton.classList.add('disabled');
        } else {
            // エラーがない場合
            messageArea.classList.remove('error');
            messageArea.style.display = 'none'; // 通常は非表示に戻す
            messageArea.value = ''; // メッセージをクリア

            // 合計時間と料金の表示
            let totalHours = Math.floor(totalTime / 60);
            let remainingMinutes = totalTime % 60;
            let formattedTime;

            if (remainingMinutes === 0) {
                formattedTime = `${totalHours}.0`;
            } else if (remainingMinutes === 30) {
                formattedTime = `${totalHours}.5`;
            } else {
                formattedTime = `${totalTime}分`; // 30分単位でない場合は分で表示
                // または、四捨五入して0.5単位に丸めるロジックを追加
                // formattedTime = (Math.round(totalTime / 30) * 0.5).toFixed(1);
            }

            totalTimeElem.value = formattedTime;
            totalPriceElem.textContent = `料金合計: ${totalPrice.toLocaleString()}円（税込）`;

            // コピーと予約ボタンの有効化
            if (totalTime > 0) {
                copyButton.classList.remove('disabled');
                reservationButton.classList.remove('disabled');
            } else {
                copyButton.classList.add('disabled');
                reservationButton.classList.add('disabled');
                messageArea.value = '手動：希望部位を選択してください。'; // 初期メッセージ
                messageArea.style.display = 'block';
                messageArea.classList.add('guidance-message');
            }
        }
        
        // コピーボタンのテキストを生成
        updateCopyText(selectedItems, totalTime, totalPrice, conflictDetected, detectedConflicts);
    };

    let copyTextContent = '';

    function updateCopyText(selectedItems, totalTime, totalPrice, conflictDetected, detectedConflicts) {
        if (conflictDetected) {
            const conflictPartNames = Array.from(detectedConflicts).map(partId => {
                const item = items.find(i => i.id === partId);
                return item ? item.name : partId;
            }).join('、');
            copyTextContent = `【エラー】選択したメニューに重複する部位が含まれています。\n重複部位: ${conflictPartNames}`;
            return;
        }

        if (selectedItems.length === 0) {
            copyTextContent = '選択された部位がありません。';
            return;
        }

        let selectedDetails = selectedItems.map(item => `${item.name}(${item.time}分) 税込 ${item.price.toLocaleString()}円`).join('\n');
        
        let totalHours = Math.floor(totalTime / 60);
        let remainingMinutes = totalTime % 60;
        let formattedTime;

        if (remainingMinutes === 0) {
            formattedTime = `${totalHours}.0時間`;
        } else if (remainingMinutes === 30) {
            formattedTime = `${totalHours}.5時間`;
        } else {
            formattedTime = `${totalTime}分`;
        }

        copyTextContent = `選択した部位:\n${selectedDetails}\n\n合計時間: ${formattedTime}\n料金合計: ${totalPrice.toLocaleString()}円 (税込)`;
    }

    copyButton.addEventListener('click', () => {
        if (!copyButton.classList.contains('disabled')) {
            navigator.clipboard.writeText(copyTextContent)
                .then(() => {
                    alert('選択内容がコピーされました！');
                })
                .catch(err => {
                    console.error('コピーに失敗しました: ', err);
                    alert('コピーに失敗しました。お手数ですが手動でコピーしてください。');
                });
        }
    });

    // 初期表示の計算とメッセージ設定
    keisan();
});
