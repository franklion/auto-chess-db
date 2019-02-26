const getUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const heros = [
    {
        id: getUniqueId(),
        name: '斧王',
        image: 'axe.png',
        coin: 1,
        race: ['獸人', '戰士'],
        skill: '狂戰士之吼:嘲諷周圍敵人，強迫他們攻擊自己2/3/4秒，同時獲得額外5/10/15護甲。'
    },
    {
        id: getUniqueId(),
        name: '魅惑魔女',
        image: 'enchantress.png',
        coin: 1,
        race: ['野獸', '德魯伊'],
        skill: '自然之助:召喚3/5/7隻小精靈，治療周遭友方單位，每秒治療25點，持續11秒。'
    },
    {
        id: getUniqueId(),
        name: '食人魔魔法師',
        image: 'ogre_magi.png',
        coin: 1,
        race: ['食人魔', '法師'],
        skill: '嗜血術:為一個友方旗子增加8%/10%/12%移動速度，以及30/40/50攻擊速度，當對自己施放時增加30/50/70。'
    },
    {
        id: getUniqueId(),
        name: '巨牙海民',
        image: 'tusk.png',
        coin: 1,
        race: ['野獸', '戰士'],
        skill: '海象神拳:下一下攻擊將會暴擊300%/350%/400%傷害，滯空1秒，落下後會緩速40%，持續2秒。'
    },
    {
        id: getUniqueId(),
        name: '發條技師',
        image: 'rattletrap.png',
        coin: 1,
        race: ['地精', '工匠'],
        skill: '彈幕衝擊(魔):每間隔0.7秒向附近敵方單位隨機射出高能彈片，持續5秒，每下造成50/75/100點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '賞金獵人',
        image: 'bounty_hunter.png',
        coin: 1,
        race: ['地精', '刺客'],
        skill: '投擲飛鏢:向一名敵方單位丟出致命的飛鏢，對目標造成300/500/700點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '卓爾遊俠',
        image: 'drow_ranger.png',
        coin: 1,
        race: ['亡靈', '獵人'],
        skill: '射手天賦:增加自己 20/30/40 攻擊力和攻速。'
    },
    {
        id: getUniqueId(),
        name: '修補匠',
        image: 'tinker.png',
        coin: 1,
        race: ['地精', '工匠'],
        skill: '熱導飛彈:隨機轟炸3發導彈，每發造成200/300/400點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '蝙蝠騎士',
        image: 'batrider.png',
        coin: 1,
        race: ['巨魔', '騎士'],
        skill: '黏性燃油:用黏油浸透一個區域，持續20秒，蝙蝠騎士對區域內敵人的攻擊對區域內敵人造成額外50/75/100傷害，並降低他們棋子移速3%/5%/7%，轉身速度降低70。'
    },
    {
        id: getUniqueId(),
        name: '暗影薩滿',
        image: 'shadow_shaman.png',
        coin: 1,
        race: ['巨魔', '薩滿祭司'],
        skill: '妖術:將一個敵方單位變成動物，持續4/6/8秒。'
    },
    {
        id: getUniqueId(),
        name: '小小',
        image: 'tiny.png',
        coin: 1,
        race: ['元素', '戰士'],
        skill: '投擲(救死扶傷):將身邊一個敵人拋起，落到離他最遠的格子，對落地點周圍敵人造成100/200/300傷害並眩暈1.5/2/2.5s。'
    },
    {
        id: getUniqueId(),
        name: '敵法師',
        image: 'antimage.png',
        coin: 1,
        race: ['精靈', '惡魔獵手'],
        skill: '法力毀損:每次攻擊毀損攻擊目標30/60/90的法力，並額外造成毀損50%法力的傷害。'
    },
    {
        id: getUniqueId(),
        name: '先知',
        image: 'furion.png',
        coin: 2,
        race: ['精靈', '德魯伊'],
        skill: '自然的召喚:召喚一隻樹人。'
    },
    {
        id: getUniqueId(),
        name: '變體精靈',
        image: 'morphling.png',
        coin: 2,
        race: ['元素', '刺客'],
        skill: '波浪形態:直線推進造成150/250/350 魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '月之騎士',
        image: 'luna.png',
        coin: 2,
        race: ['精靈', '騎士'],
        skill: '月刃:使露娜每下普攻在敵方單位之間彈跳3/5/7次，每下彈跳造成的傷害衰減30%。'
    },
    {
        id: getUniqueId(),
        name: '樹精衛士',
        image: 'treant.png',
        coin: 2,
        race: ['精靈', '德魯伊'],
        skill: '寄生種子:對敵方單位種下種子，吸收其生命值，同時造成緩速50%，持續4/6/8s，種子對周圍友方單位，進行治療，吸取7次，每次40/60/80 傷害。'
    },
    {
        id: getUniqueId(),
        name: '混沌騎士',
        image: 'chaos_knight.png',
        coin: 2,
        race: ['惡魔', '騎士'],
        skill: '混亂之箭:對目標單位投擲能量箭，造成1~2/3/4秒的暈眩和50/100/150~200/300/400點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '魚人守衛',
        image: 'slardar.png',
        coin: 2,
        race: ['娜迦', '戰士'],
        skill: '侵蝕霧霾:削弱敵人15/30/45護甲，持續20s，會提供目標視野，會顯示隱形單位。'
    },
    {
        id: getUniqueId(),
        name: '巫醫',
        image: 'witch_doctor.png',
        coin: 2,
        race: ['巨魔', '術士'],
        skill: '麻痺藥劑:拋出一個裝滿麻痺粉末的木桶，在敵人之間彈跳2/4/6次，眩暈擊中的敵人1秒，造成50/75/100點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '精靈龍',
        image: 'puck_hphover.png',
        coin: 2,
        race: ['精靈', '龍', '法師'],
        skill: '幻象光球:向直線方向發射魔法球，造成150/200/350 點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '痛苦女王',
        image: 'queenofpain.png',
        coin: 2,
        race: ['惡魔', '刺客'],
        skill: '痛苦尖叫:發出刺耳的尖叫，對周圍敵人造成250/350/450點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '伐木機',
        image: 'shredder.png',
        coin: 2,
        race: ['地精', '工匠'],
        skill: '死亡旋風:在300範圍內造成150/200/250點純粹傷害。'
    },
    {
        id: getUniqueId(),
        name: '劍聖',
        image: 'juggernaut.png',
        coin: 2,
        race: ['獸人', '戰士'],
        skill: '劍刃風暴:對周遭敵人造成每秒50/100/150點魔法傷害，持續5秒。'
    },
    {
        id: getUniqueId(),
        name: '獸王',
        image: 'beastmaster.png',
        coin: 2,
        race: ['獸人', '獵人'],
        skill: '野性之斧:投擲兩把飛斧，每把造成70/110/150點物理傷害，並且使來自獸王的傷害加深10%/20%/30%。'
    },
    {
        id: getUniqueId(),
        name: '冰晶室女',
        image: 'crystal_maiden.png',
        coin: 2,
        race: ['人類', '法師'],
        skill: '奧術光環:提高800範圍內友方旗子回魔速度，每2秒 8/14/20 點。'
    },
    {
        id: getUniqueId(),
        name: '靈魂守衛',
        image: 'terrorblade.png',
        coin: 3,
        race: ['惡魔', '惡魔獵手'],
        skill: '魔化:變身，增加大量攻擊力並且變成遠程，並且和一個血量比例最高的友方棋子交換血量比例。'
    },
    {
        id: getUniqueId(),
        name: '秀逗魔導士',
        image: 'lina.png',
        coin: 3,
        race: ['人類', '法師'],
        skill: '神滅斬:對單個敵方單位發出閃電，造成500/750/1000點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '影魔',
        image: 'nevermore.png',
        coin: 3,
        race: ['惡魔', '術士'],
        skill: '魂之輓歌:施法延遲1.67s，造成大範圍100/150/200魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '冥界亞龍',
        image: 'viper.png',
        coin: 3,
        race: ['龍', '刺客'],
        skill: '腹蛇突襲:降低敵方單位40%/60%/80%移動速度和40/60/80攻速，並造成每秒150/250/350毒素傷害，持續5秒，被緩的移速和攻速會隨中毒時間慢慢恢復。'
    },
    {
        id: getUniqueId(),
        name: '狙擊手',
        image: 'sniper.png',
        coin: 3,
        race: ['矮人', '獵人'],
        skill: '暗殺:狙擊手鎖定一個目標，經過2秒瞄準後射出子彈造成400/600/800 魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '魚人夜行者',
        image: 'slark.png',
        coin: 3,
        race: ['娜迦', '刺客'],
        skill: '遁入暗影之雲，持續4秒，期間獲得30%/40%/50%移動速度，每秒獲取3%/6%/9%最大生命回復。'
    },
    {
        id: getUniqueId(),
        name: '沙王',
        image: 'sand_king.png',
        coin: 3,
        race: ['野獸', '刺客'],
        skill: '掘地穿刺:鑽隧道，在隧道上方的單位暈眩2秒，並造成 150/250/350點傷害。'
    },
    {
        id: getUniqueId(),
        name: '死亡騎士',
        image: 'abaddon.png',
        coin: 3,
        race: ['亡靈', '騎士'],
        skill: '無光之盾:施放一個可以吸收100/150/200的護盾，持續10s，消失前會爆炸造成吸收的傷害。'
    },
    {
        id: getUniqueId(),
        name: '幻影刺客',
        image: 'phantom_assassin.png',
        coin: 3,
        race: ['精靈', '刺客'],
        skill: '恩賜解脫 :普攻有10%機率造成300%/450%/600%暴擊。'
    },
    {
        id: getUniqueId(),
        name: '風行者',
        image: 'windrunner.png',
        coin: 3,
        race: ['精靈', '獵人'],
        skill: '強力擊:蓄力最長1秒後，射出一隻強力的箭矢，造成400/600/800點魔法傷害。'
    },
    {
        id: getUniqueId(),
        name: '閃電幽魂',
        image: 'razor.png',
        coin: 3,
        race: ['元素', '法師'],
        skill: '等離子場:在400/500/600範圍內施放一道威力波，距離電棍越遠傷害越高，傷害介於10~100/175/250魔法傷害，會造成5%~25%/30%/35%的緩速，持續1.5s。'
    },
    {
        id: getUniqueId(),
        name: '全能騎士',
        image: 'omniknight.png',
        coin: 3,
        race: ['人類', '騎士'],
        skill: '洗禮:立即治療一個友方單位200/300/400，並對周圍敵人造成200/300/400純粹傷害。'
    },
    {
        id: getUniqueId(),
        name: '劇毒術士',
        image: 'venomancer.png',
        coin: 3,
        race: ['野獸', '術士'],
        skill: '瘟疫守衛:召喚一隻魔法免疫的瘟疫守衛。'
    },
    {
        id: getUniqueId(),
        name: '狼人',
        image: 'lycan.png',
        coin: 3,
        race: ['人類', '野獸', '戰士'],
        skill: '變身:獲得生命值加成20%/30%/40%，並召喚2隻小狼。'
    },
    {
        id: getUniqueId(),
        name: '末日使者',
        image: 'doom_bringer.png',
        coin: 4,
        race: ['惡魔', '戰士'],
        skill: '對敵人施加末日詛咒，使其無法施放法術或使用物品，並每秒持續受到60/90/120點傷害，持續20秒。'
    },
    {
        id: getUniqueId(),
        name: '海軍上將',
        image: 'kunkka.png',
        coin: 4,
        race: ['人類', '戰士'],
        skill: '幽靈船:召喚一艘幽靈船撞擊戰場，被撞到的敵人受到1.4秒暈眩，造成200/300/400魔法傷害，友軍會因為朗姆酒效果提升10%移速，持續10s，受到的40%/45%/50%的傷害會在持續時間結束後結算。'
    },
    {
        id: getUniqueId(),
        name: '巨魔戰將',
        image: 'troll_warlord.png',
        coin: 4,
        race: ['巨魔', '戰士'],
        skill: '熱血戰魂:持續攻擊相同目標時，會攻擊的越來越快，每層攻速加成15/20/25，最多疊加6/9/12層，換敵人後疊加的攻速就會被清空。'
    },
    {
        id: getUniqueId(),
        name: '光之守衛',
        image: 'keeper_of_the_light.png',
        coin: 4,
        race: ['人類', '法師'],
        skill: '衝擊波:積攢光的能量，時間越長，威力越大，最長3秒，每秒積攢100/150/200傷害。'
    },
    {
        id: getUniqueId(),
        name: '死靈法師',
        image: 'necrolyte.png',
        coin: 4,
        race: ['亡靈', '術士'],
        skill: '死亡脈衝:施放死亡波動，對敵人造成100/150/200傷害，對友軍提供100/150/200治療。'
    },
    {
        id: getUniqueId(),
        name: '聖堂刺客',
        image: 'templar_assassin.png',
        coin: 4,
        race: ['精靈', '刺客'],
        skill: '折光:變得十分難以捉摸，躲避傷害同時獲得攻擊力加成40/60/80，獲得攻擊力加成和躲避傷害的效果相互獨立，都只有4/6/8次的效果，持續時間6秒。'
    },
    {
        id: getUniqueId(),
        name: '煉金術士',
        image: 'alchemist.png',
        coin: 4,
        race: ['地精', '術士'],
        skill: '酸性噴霧:對目標區域施放酸霧，敵人每秒受到15/25/35物理傷害，並且削弱5/8/11護甲，持續10s。'
    },
    {
        id: getUniqueId(),
        name: '干擾者',
        image: 'disruptor.png',
        coin: 4,
        race: ['獸人', '薩滿祭司'],
        skill: '靜電風暴:創造一個範圍350/450/550的靜電風暴，持續時間內造成8/12/16波魔法傷害並沉默區域內所有敵方單位，傷害會隨持續時間3/4/5s持續加強。'
    },
    {
        id: getUniqueId(),
        name: '蛇發女妖',
        image: 'medusa.png',
        coin: 4,
        race: ['娜迦', '獵人'],
        skill: '石化凝視:任何蛇發女妖看著的單位的攻速和移速會持續減緩30%，持續4/5/6秒，如果被盯超過2秒會石化，持續2/3/4秒，石化單位受到額外物理傷害30%。'
    },
    {
        id: getUniqueId(),
        name: '龍騎士',
        image: 'dragon_knight.png',
        coin: 4,
        race: ['人類', '龍', '騎士'],
        skill: '古龍型態:型態1:綠龍-腐蝕吐息，攻擊時附帶毒素，造成每秒20點傷害，持續5秒；型態2:紅龍-攻擊時75%傷害會濺射到300範圍內所有單位上，並且全部受腐蝕吐息影響；型態3-青龍-冰霜吐息，降低被攻擊濺射到的敵人的30%移動速度和30攻速，持續3秒，並且全部受腐蝕吐息影響。持續60s，攻擊距離+350，移速+30。'
    },
    {
        id: getUniqueId(),
        name: '利爪德魯伊',
        image: 'lone_druid.png',
        coin: 4,
        race: ['野獸', '德魯伊'],
        skill: '靈熊夥伴:召喚一頭會綁人的熊。'
    },
    {
        id: getUniqueId(),
        name: '矮人直升機',
        image: 'gyrocopter.png',
        coin: 5,
        race: ['矮人', '工匠'],
        skill: '召喚飛彈:先後召喚2發飛彈，第一發造成200/300/400魔法傷害，並緩速30%，持續2秒，第二發造成200/300/400魔法傷害，並緩速60%，持續4秒。'
    },
    {
        id: getUniqueId(),
        name: '巫妖',
        image: 'lich.png',
        coin: 5,
        race: ['亡靈', '法師'],
        skill: '連環雙凍:施放一個在敵人之間彈跳6/9/12次的雙凍之球，每次擊中造成200/300/400點魔法傷害和緩65%攻速和移速，持續2.5s。'
    },
    {
        id: getUniqueId(),
        name: '潮汐獵人',
        image: 'tidehunter.png',
        coin: 5,
        race: ['娜迦', '獵人'],
        skill: '毀滅:猛擊地面，觸手向各方位穿出，在500/650/800範圍內造成150/250/350魔法傷害，並眩暈2/2.5/3秒。'
    },
    {
        id: getUniqueId(),
        name: '謎團',
        image: 'enigma.png',
        coin: 5,
        race: ['元素', '術士'],
        skill: '午夜凋零:使一塊區域進入暗共陣，對敵方單位造成每秒敵方最大生命值5%/7%/9%的純粹傷害，持續10s。'
    },
    {
        id: getUniqueId(),
        name: '地精工程師',
        image: 'techies.png',
        coin: 5,
        race: ['地精', '工匠'],
        skill: '自爆炸藥桶:埋一個炸藥桶，3秒後引爆，對600範圍內敵人造成700/1100/1500點物理傷害。'
    }
]


export default heros;