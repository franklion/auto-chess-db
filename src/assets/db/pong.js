const getUniqueId = () => {
    return '_' + Math.random().toString(16).substr(2, 9);
};

const pong = [
    {
        id: getUniqueId(),
        race: '戰士',
        pong: [
            {
                unit: 3,
                power: '所有友方戰士護甲+7'
            },
            {
                unit: 6,
                power: '所有友方戰士護甲+8'
            },
            {
                unit: 9,
                power: '所有友方戰士護甲+9'
            }
        ]
    },
    {
        id: getUniqueId(),
        race: '獸人',
        pong: [
            {
                unit: 2,
                power: '所有友方獸人的最大生命值+250'
            },
            {
                unit: 4,
                power: '所有友方獸人的最大生命值+350'
            },
            {
                unit: 6,
                power: '所有友方獸人的最大生命值+450'
            }
        ]
    },
    {
        id: getUniqueId(),
        race: '精靈',
        pong: [
            {
                unit: 3,
                power: '所有友方精靈+25%幾率閃避'
            },
            {
                unit: 6,
                power: '所有友方精靈+25%幾率閃避'
            },
            {
                unit: 9,
                power: '所有友方精靈+25%幾率閃避'
            }
        ]
    },
    {
        id: getUniqueId(),
        race: '野獸',
        pong: [
            {
                unit: 2,
                power: '所有友軍攻擊力+10%'
            },
            {
                unit: 4,
                power: '所有友軍攻擊力+15%'
            },
            {
                unit: 6,
                power: '所有友軍攻擊力+20%'
            }
        ]
    },
    {
        id: getUniqueId(),
        race: '薩滿祭司',
        pong: [
            {
                unit: 2,
                power: '開局隨機羊一敵人6秒'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '巨魔',
        pong: [
            {
                unit: 2,
                power: '所有友方巨魔加攻速+35'
            },
            {
                unit: 4,
                power: '友軍的攻擊速度+30'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '地精',
        pong: [
            {
                unit: 3,
                power: '使隨機一友軍+15回血+10'
            },
            {
                unit: 6,
                power: '全體地精護甲+15回血+10'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '刺客',
        pong: [
            {
                unit: 3,
                power: '所有刺客有10%機率3倍暴擊'
            },
            {
                unit: 6,
                power: '所有刺客有15%機率4倍暴擊'
            },
            {
                unit: 9,
                power: '所有刺客有20%機率5倍暴擊'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '工匠',
        pong: [
            {
                unit: 2,
                power: '所有工匠+15回血'
            },
            {
                unit: 4,
                power: '所有工匠+25回血'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '騎士',
        pong: [
            {
                unit: 2,
                power: '所有騎士30%時間加盾'
            },
            {
                unit: 4,
                power: '所有騎士30%時間加盾'
            },
            {
                unit: 6,
                power: '所有騎士30%時間加盾'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '惡魔獵手',
        pong: [
            {
                unit: 1,
                power: '視為敵方的一個惡魔'
            },
            {
                unit: 2,
                power: '所有友方惡魔視為同一種類'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '人類',
        pong: [
            {
                unit: 2,
                power: '所有友方人類攻擊敵人有20%概率使敵人沉默4秒'
            },
            {
                unit: 4,
                power: '所有友方人類攻擊敵人有25%概率使敵人沉默4秒'
            },
            {
                unit: 6,
                power: '所有友方人類攻擊敵人有30%概率使敵人沉默4秒'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '元素',
        pong: [
            {
                unit: 2,
                power: '友軍被近戰攻擊的時候有30%概率使攻擊者石化4秒'
            },
            {
                unit: 4,
                power: '友軍被近戰攻擊的時候有30%概率使攻擊者石化4秒'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '法師',
        pong: [
            {
                unit: 3,
                power: '所有敵人魔抗-40'
            },
            {
                unit: 6,
                power: '所有敵人魔抗-40'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '娜迦',
        pong: [
            {
                unit: 2,
                power: '娜迦全體魔抗+20'
            },
            {
                unit: 4,
                power: '娜迦全體魔抗+40'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '亡靈',
        pong: [
            {
                unit: 2,
                power: '敵方全體減甲5'
            },
            {
                unit: 4,
                power: '敵方全體減甲7'
            },
            {
                unit: 6,
                power: '敵方全體減甲9'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '獵人',
        pong: [
            {
                unit: 3,
                power: '所有友方獵人的攻擊力+30%'
            },
            {
                unit: 6,
                power: '所有友方獵人的攻擊力+30%'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '惡魔',
        pong: [
            {
                unit: 'N/A',
                power: '只上場一個惡魔，該惡魔+50%純粹攻擊'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '德魯伊',
        pong: [
            {
                unit: 2,
                power: '場上有2個相同的★德魯伊就可以升級為★★'
            },
            {
                unit: 4,
                power: '場上有2個相同的★★德魯伊就可以升級為★★★'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '食人魔',
        pong: [
            {
                unit: 'N/A',
                power: '食人魔最大生命值+10%'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '術士',
        pong: [
            {
                unit: 3,
                power: '全體吸血+20%'
            },
            {
                unit: 6,
                power: '全體吸血+30%'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '龍',
        pong: [
            {
                unit: 3,
                power: '所有龍族的初始魔法值為100'
            },
            {
                unit: 6,
                power: '友方棋子的初始魔法值為100'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '龍',
        pong: [
            {
                unit: 3,
                power: '所有龍族的初始魔法值為100'
            },
            {
                unit: 6,
                power: '友方棋子的初始魔法值為100'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '矮人',
        pong: [
            {
                unit: 'N/A',
                power: '己方矮人攻击距离+300'
            },
        ]
    },
    {
        id: getUniqueId(),
        race: '薩特',
        pong: [
            {
                unit: 'N/A',
                power: '隱藏等待棋子'
            },
        ]
    },
]

export default pong;