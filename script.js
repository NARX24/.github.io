document.addEventListener('DOMContentLoaded', (event) => {
    const menuData = {
        'set_eyebrow': { name: '眉毛セット', time: 40, price: 11000, parts: ['part_eyebrow_upper', 'part_eyebrow_lower', 'part_eyebrow_middle', 'part_design_fee'] },
        'set_fullface': { name: '全顔セット', time: 65, price: 13200, parts: ['part_nose_under', 'part_mouth_under', 'part_cheek', 'part_face_line', 'part_neck'] },
        'set_fullface_eyebrow': { name: '全顔+眉毛脱毛セット', time: 105, price: 22000, parts: ['set_fullface', 'set_eyebrow'] }, // 修正箇所①
        'set_fullbody_all': { name: '全身オール（顔、VIO含む）', time: 270, price: 52800, parts: ['set_upperbody', 'set_lowerbody'] },
        'set_fullbody_noface': { name: '顔なし全身', time: 200, price: 41800, parts: ['part_armpit', 'part_nape', 'part_back_upper', 'part_back_lower', 'part_chest_nipple', 'part_abdomen_navel', 'part_elbow_upper', 'part_elbow_lower', 'part_hand_finger', 'part_v_line', 'part_i_line', 'part_o_line', 'part_buttocks', 'part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        'set_upperbody': { name: '上半身セット', time: 170, price: 30800, parts: ['set_fullface', 'part_armpit', 'part_chest_nipple', 'part_abdomen_navel', 'part_nape', 'part_back_upper', 'part_back_lower', 'part_elbow_upper', 'part_elbow_lower', 'part_hand_finger'] },
        'set_lowerbody': { name: '下半身セット', time: 150, price: 30800, parts: ['set_vio', 'part_buttocks', 'part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        'set_vio': { name: 'VIOセット', time: 50, price: 16500, parts: ['part_v_line', 'part_i_line', 'part_o_line'] },
        'set_fullface_vio': { name: '全顔+VIOセット', time: 100, price: 27500, parts: ['set_fullface', 'set_vio'] },
        'set_vio_buttocks': { name: 'VIO+臀部（おしり）セット', time: 60, price: 20900, parts: ['set_vio', 'part_buttocks'] },
        'set_navel_vio': { name: 'ヘソ下+VIOセット', time: 55, price: 18700, parts: ['part_navel_under', 'set_vio'] },
        'set_chest_abdomen': { name: '胸＋腹部セット', time: 35, price: 9900, parts: ['part_chest_nipple', 'part_abdomen_navel'] },
        'set_arms_legs': { name: '両腕+両足セット', time: 125, price: 28600, parts: ['part_elbow_upper', 'part_elbow_lower', 'part_hand_finger', 'part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        'set_arms': { name: '両腕セット', time: 65, price: 17600, parts: ['part_elbow_upper', 'part_elbow_lower', 'part_hand_finger'] },
        'set_legs': { name: '両足セット', time: 65, price: 17600, parts: ['part_knee_upper', 'part_knee_lower', 'part_foot_toe'] },
        'set_ear_whole': { name: '耳全体（耳珠、耳たぶ含む）', time: 25, price: 8800, parts: ['part_tragus', 'part_earlobe'] },
        'part_nose_under': { name: '鼻下', time: 16, price: 4400, isPart: true },
        'part_mouth_under': { name: '口下', time: 16, price: 4400, isPart: true },
        'part_cheek': { name: '頬', time: 16, price: 4400, isPart: true },
        'part_face_line': { name: 'フェイスライン', time: 16, price: 4400, isPart: true },
        'part_neck': { name: '首', time: 16, price: 4400, isPart: true },
        'part_nape': { name: 'うなじ', time: 16, price: 4400, isPart: true },
        'part_armpit': { name: '脇', time: 13, price: 4400, isPart: true },
        'part_chest_nipple': { name: '胸（乳輪周り含む）', time: 16, price: 6600, isPart: true },
        'part_abdomen_navel': { name: '腹部（ヘソ下含む）', time: 16, price: 6600, isPart: true },
        'part_back_upper': { name: '背中上', time: 16, price: 6600, isPart: true },
        'part_back_lower': { name: '背中下', time: 16, price: 6600, isPart: true },
        'part_buttocks': { name: '臀部（おしり）', time: 16, price: 6600, isPart: true },
        'part_elbow_upper': { name: '肘上', time: 16, price: 6600, isPart: true },
        'part_elbow_lower': { name: '肘下', time: 18, price: 6600, isPart: true },
        'part_hand_finger': { name: '手の甲+指', time: 12, price: 4400, isPart: true },
        'part_knee_upper': { name: '膝上', time: 35, price: 8800, isPart: true },
        'part_knee_lower': { name: '膝下', time: 35, price: 8800, isPart: true },
        'part_foot_toe': { name: '足の甲＋指', time: 12, price: 4400, isPart: true },
        'part_v_line': { name: 'Vライン', time: 16, price: 7700, isPart: true },
        'part_i_line': { name: 'Iライン', time: 20, price: 7700, isPart: true },
        'part_o_line': { name: 'Oライン', time: 16, price: 5500, isPart: true },
        'part_forehead': { name: 'おでこ', time: 13, price: 4400, isPart: true },
        'part_eyebrow_upper': { name: '眉上', time: 13, price: 4400, isPart: true },
        'part_eyebrow_lower': { name: '眉下', time: 13, price: 6600, isPart: true },
        'part_eyebrow_middle': { name: '眉中', time: 13, price: 2200, isPart: true },
        'part_small_nose': { name: '小鼻', time: 13, price: 4400, isPart: true },
        'part_nose_hair': { name: '鼻毛', time: 20, price: 4400, isPart: true },
        'part_tragus': { name: '耳珠', time: 13, price: 3300, isPart: true },
        'part_earlobe': { name: '耳たぶ', time: 13, price: 4400, isPart: true },
        'part_nipple': { name: '乳輪周り', time: 10, price: 4400, isPart: true },
        'part_navel_under': { name: 'ヘソ下', time: 10, price: 4400, isPart: true },
        'part_design_fee': { name: 'デザイン料', time: 0, price: 1100, isPart: true },
        'other_lala_peel': { name: 'ララピール', time: 90, price: 12100 },
        'other_face_correction': { name: '小顔矯正術', time: 90, price: 22000 },
        'other_derma_scalp': { name: 'ダーマインジェクション（スカルプケア）', time: 50, price: 22000 },
        'other_derma_skin': { name: 'ダーマインジェクション（肌育ケア）', time: 50, price: 22000 },
    };

    const findMenuDataById = (id) => menuData[id];

    window.keisan = function() {
        let totalTime = 0;
        let totalPrice = 0;
        const selectedMenus = [];

        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.disabled = false;
        });

        const checkedPartIds = new Set(Array.from(document.querySelectorAll('input[id^="part_"]:checked')).map(cb => cb.id));
        
        for (const setId in menuData) {
            if (setId.startsWith('set_') && menuData[setId].parts) {
                const partsInSet = menuData[setId].parts.filter(partId => partId.startsWith('part_'));
                const isSetComplete = partsInSet.every(partId => checkedPartIds.has(partId));
                const setCheckbox = document.getElementById(setId);
                if (setCheckbox) {
                    setCheckbox.checked = isSetComplete;
                }
            }
        }
        
        const checkedSetMenuIds = new Set(Array.from(document.querySelectorAll('input[id^="set_"]:checked')).map(cb => cb.id));

        const partsToDisable = new Set();
        checkedSetMenuIds.forEach(setId => {
            const set = findMenuDataById(setId);
            if (set && set.parts) {
                const parts = [...set.parts];
                while(parts.length > 0) {
                    const currentPartId = parts.shift();
                    const currentPartData = findMenuDataById(currentPartId);
                    if (currentPartData && currentPartData.parts) {
                        parts.push(...currentPartData.parts);
                    }
                    partsToDisable.add(currentPartId);
                }
            }
        });
        
        partsToDisable.forEach(partId => {
            const partCheckbox = document.getElementById(partId);
            if (partCheckbox && !partId.startsWith('set_')) {
                partCheckbox.checked = false;
                partCheckbox.disabled = true;
            }
        });

        const processedIds = new Set();
        for (const id in menuData) {
            const checkbox = document.getElementById(id);
            if (checkbox && checkbox.checked && !processedIds.has(id)) {
                const menu = findMenuDataById(id);
                if (menu) {
                    totalTime += menu.time;
                    totalPrice += menu.price;
                    const partsText = menu.parts ? menu.parts.map(partId => {
                        const partMenu = findMenuDataById(partId);
                        return partMenu ? partMenu.name : null;
                    }).filter(Boolean).join('、') : '';
                    selectedMenus.push({
                        name: menu.name,
                        time: menu.time,
                        price: menu.price,
                        parts: partsText
                    });
                    
                    if (menu.parts) {
                         const parts = [...menu.parts];
                         while(parts.length > 0) {
                             const currentPartId = parts.shift();
                             processedIds.add(currentPartId);
                             const currentPartData = findMenuDataById(currentPartId);
                             if (currentPartData && currentPartData.parts) {
                                 parts.push(...currentPartData.parts);
                             }
                         }
                    }
                }
            }
        }
        
        const roundedTime = Math.ceil(totalTime / 30) * 30;
        const totalHours = roundedTime / 60; // 修正箇所②
        const displayHours = Math.floor(totalHours);
        const displayMinutes = (totalHours - displayHours) * 60;

        const totalTimeDisplay = document.getElementById('totalTime');
        const totalPriceDisplay = document.getElementById('totalPrice');
        const messageArea = document.getElementById('message-area');

        totalTimeDisplay.value = totalHours.toFixed(1).replace(/\.0$/, ''); // 修正箇所②
        totalPriceDisplay.textContent = `料金合計: ${totalPrice.toLocaleString()}円（税込）`;

        let messageText = '選択した部位:\n';
        if (selectedMenus.length > 0) {
            messageText += selectedMenus.map(menu => {
                const parts = menu.parts ? `＜${menu.parts}＞` : '';
                return `${menu.name}(${menu.time}分) 税込 ${menu.price.toLocaleString()}円 ${parts}`;
            }).join('\n');
        } else {
            messageText += 'なし';
        }
        messageText += `\n---\n合計時間: ${displayHours}時間${displayMinutes}分\n料金合計: ${totalPrice.toLocaleString()}円（税込）`;
        messageArea.value = messageText;

        const copyButton = document.getElementById('copyButton');
        copyButton.onclick = function() {
            let finalCopyText = '選択した部位:\n';
            if (selectedMenus.length > 0) {
                finalCopyText += selectedMenus.map(menu => {
                    return `【${menu.name}】 税込 ${menu.price.toLocaleString()}円`;
                }).join('\n');
            } else {
                finalCopyText += 'なし';
            }
            finalCopyText += `\n---\n合計時間: ${displayHours}時間${displayMinutes}分\n料金合計: ${totalPrice.toLocaleString()}円（税込）`;

            navigator.clipboard.writeText(finalCopyText)
                .then(() => {
                    alert(`選択内容がコピーされました！\nご予約メニュー【${totalTimeDisplay.value}時間枠】を選択後、コピー内容を備考欄に貼り付けて下さい。\n---\n${finalCopyText}`);
                })
                .catch(err => {
                    console.error('コピーに失敗しました', err);
                });
        };
    };

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', window.keisan);
    });

    window.keisan();
});
