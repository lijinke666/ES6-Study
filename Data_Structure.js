const data = [
    {
        "items": [
            {
                "rewards": [
                    {
                        "chip": {
                            "low": 0,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": "iphone7",
                        "objs": [
                            {
                                "obj_id": null,
                                "obj_count": 1,
                                "obj_name": "iphone7",
                                "obj_id2": null,
                                "obj_type": null,
                                "obj_icon": null,
                                "temp_id": null,
                                "valid_time": null
                            }
                        ],
                        "master_score": 5
                    },
                    {
                        "chip": {
                            "low": 5000000,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 3
                    },
                    {
                        "chip": {
                            "low": 5000000,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 1
                    }
                ],
                "img_dail": "dail_08.png",
                "img_result": "result_08.png",
                "lucky": 0,
                "is_big_reward": 1,
                "reward_times": 0
            },
            {
                "rewards": [
                    {
                        "chip": {
                            "low": 400000,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": "40万",
                        "objs": [],
                        "master_score": 5
                    },
                    {
                        "chip": null,
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 3
                    },
                    {
                        "chip": null,
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 1
                    }
                ],
                "img_dail": "dail_01.png",
                "img_result": "result_01.png",
                "lucky": 70,
                "is_big_reward": 0,
                "reward_times": 2
            },
        ]
    },
    {
        "items": [
            {
                "rewards": [
                    {
                        "chip": {
                            "low": 100000,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 1
                    },
                    {
                        "chip": null,
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 0
                    },
                    {
                        "chip": null,
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 0
                    }
                ],
                "img_dail": "dail_12.png",
                "img_result": "result_12.png",
                "lucky": 2,
                "is_big_reward": 0,
                "reward_times": 10
            },
            {
                "rewards": [
                    {
                        "chip": {
                            "low": 200000,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 1
                    },
                    {
                        "chip": {
                            "low": 25000,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 0
                    },
                    {
                        "chip": {
                            "low": 25000,
                            "high": 0,
                            "unsigned": true
                        },
                        "diamond": null,
                        "des": null,
                        "objs": [],
                        "master_score": 0
                    }
                ],
                "img_dail": "dail_13.png",
                "img_result": "result_13.png",
                "lucky": 0,
                "is_big_reward": 1,
                "reward_times": 25
            },
        ]
    }
]

const testData = data.reduce((arr, next) => {
    const o = {}
    const transFormResult = next.items.map(({ rewards, img_dail, img_result, lucky, is_big_reward, reward_times }) => {
        //奖励
        const _rewards = rewards.map(({ chip, diamond, des, master_score, objs = [] },index) => {
            //实物奖励 objs
            const rewardPrizes = objs.map(({
                obj_icon,
                obj_id = 0,
                obj_id2,        //wx优惠券id  
                obj_name,
                obj_count,      //奖品数量
                obj_type,              //奖品类型
                temp_id,
                valid_time
            }) => {
                return {
                    prizeIcon: obj_icon || "",
                    prizeId:obj_id || 0,
                    prizeId2:obj_id2 || "",
                    prizeName:obj_name || "",
                    prizeNum:obj_count || 0,
                    prizeType:obj_type,
                    tempId:temp_id || 0,
                    validTime:valid_time || 0
                }
            })
            return Object.assign({}, {
                chip: chip && chip.low || 0,
                diamond:diamond || 0,
                des:des || "",
                masterScore: master_score || 0,
                rewardIndex:index,
                rewardPrizes
            })
        })
        return Object.assign({}, { rewards: _rewards, imgDail: img_dail, imgResult: img_result, lucky, rewardTimes: reward_times, bigReward: is_big_reward })
    })
    o.spinRewardItemList = transFormResult
    arr.push(o)
    return arr
}, [])

console.log(JSON.stringify(testData, undefined, 2));