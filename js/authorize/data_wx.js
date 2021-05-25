
    var arr_subject_type = [
                [ // 企业
                    {
                        hangye_range: '餐饮、零售批发、网上综合商城、交通出行、生活娱乐服务、培训教育机构、民营医疗机构、缴费等业务',
                        rate: '费率0.6%，入账周期T+1',
                        rule_id: '716',
                        arr: [{
                                title: '餐饮',
                                require: '选填，若贵司具备以下资质，建议提供：餐饮业态，提供《食品经营许可证》或《餐饮服务许可证》'
                            },
                            {
                                title: '食品生鲜',
                                require: '选填，若贵司具备以下资质，建议提供：食品业态，提供《食品经营许可证》或《食品生产许可证》或供销协议'
                            },
                            {
                                title: '电信运营商/宽带收费',
                                require: '《电信业务经营许可证》'
                            },
                            {
                                title: '私立/民营医院/诊所',
                                require: '《医疗机构执业许可证》'
                            },
                            {
                                title: '保健器械/医疗器械/非处方药品',
                                require: '互联网售药：提供《互联网药品交易服务证》。线下门店卖药：提供《药品经营许可证》。医疗器械：《医疗器械经营企业许可证》'
                            },
    
                            {
                                title: '游艺厅/KTV/网吧',
                                require: '游艺厅/KTV：《娱乐场所许可证》。网吧：《网络文化经营许可证》'
                            },
                            {
                                title: '机票/机票代理',
                                require: '《航空公司营业执照》或《航空公司机票代理资格证》'
                            },
                            {
                                title: '宠物医院',
                                require: '《动物诊疗许可证》'
                            },
                            {
                                title: '旅行社',
                                require: '《旅行社业务经营许可证》'
                            },
                            {
                                title: '宗教组织',
                                require: '宗教类提供《宗教活动场所登记证》'
                            },
    
                            {
                                title: '房地产/房产中介',
                                require: '房地产开发商提供以下五个资质：《建设用地规划许可证》《建设工程规划许可证》《建筑工程开工许可证》《国有土地使用证》《商品房预售许可证》，房地产中介无需特殊资质'
                            },
                            {
                                title: '共享服务',
                                require: '需提供资金监管协议。协议要求：1、主体与商业银行签订。2、内容针对交易资金使用和偿付进行监管。3、协议须在有效期内。4、结算账户须与资金监管账户一致'
                            },
    
                            {
                                title: '文物经营/文物复制品销售',
                                require: '销售文物，需提供《文物经营许可证》'
                            },
                            {
                                title: '拍卖典当',
                                require: '拍卖：《拍卖经营批准证书》。典当：《典当经营许可证》'
                            },
                            {
                                title: '培训机构',
                                require: '选填，若贵司具备以下资质，建议提供：1、学科类培训，提供办学许可证或相关批文。2、驾校培训，提供有“驾驶员培训”项目的《道路运输经营许可证》'
                            },
                            {
                                title: '零售批发/生活娱乐/网上商城/其他',
                                require: '无需提供特需资质'
                            },
                        ]
                    },
                    {
                        hangye_range: '保险公司、保险代理公司',
                        rate: '费率0.6%，入账周期T+1',
                        rule_id: '715',
                        arr: [{
                            title: '保险业务',
                            require: '保险公司提供《经营保险业务许可证》《保险业务法人等级证书》，其他公司提供相关资质'
                        }]
                    },
                    {
                        hangye_range: '众筹业务',
                        rate: '费率0.6%，入账周期T+3',
                        rule_id: '714',
                        arr: [{
                                title: '众筹',
                                require: '仅限实物类、公益类众筹网站接入申请，暂不支持股权类众筹商户,公益类众筹商户需要提供公募资质'
                            }
    
                        ]
                    },
                    {
                        hangye_range: '财经资讯/荐股业务',
                        rate: '费率0.6%，入账周期T+7，单笔限额3K',
                        rule_id: '713',
                        arr: [{
                            title: '财经/股票类资讯',
                            require: '若有具体的荐股行为，需资质《证券投资咨询业务资格证书》'
                        }]
                    },
                    {
                        hangye_range: '婚介平台、就业信息平台、话费代理充值等业务',
                        rate: '费率0.6%，入账周期T+7，单笔限额3K',
                        rule_id: '728',
                        arr: [{
                                title: '话费通讯',
                                require: '提供与运营商间的合作授权收费协议'
                            },
                            {
                                title: '婚介平台/就业信息平台/其他',
                                require: '无需提供特需资质'
                            }
                        ]
                    },
                    {
                        hangye_range: '在线图书/视频/音乐、游戏、网络直播、门户论坛、网络广告及推广、软件开发业务',
                        rate: '费率1%，入账周期T+7，单笔限额3K',
                        rule_id: '711',
                        arr: [{
                                title: '在线图书/视频/音乐/网络直播',
                                require: '《互联网出版许可证》或《网络文化经营许可证》'
                            },
                            {
                                title: '游戏',
                                require: '棋牌类、捕鱼类游戏提供《网络文化经营许可证》'
                            },
                            {
                                title: '门户论坛/网络广告及推广/软件开发/其他',
                                require: '无需提供特需资质'
                            }
                        ]
                    },
                    {
                        hangye_range: '加油、物流快递、民办中小学、幼儿园业务',
                        rate: '费率0.3%，入账周期T+1',
                        rule_id: '717',
                        arr: [{
                                title: '物流/快递',
                                require: '物流：《道路运输许可证》。快递：《快递业务经营许可证》'
                            },
                            {
                                title: '加油',
                                require: '《成品油批发经营批准证书》或《成品油仓储经营批准证书》或《成品油零售经营批准证书》，其中一个即可'
                            },
                            {
                                title: '民办中小学及幼儿园',
                                require: '民办非公立院校需提供《办学许可证》'
                            }
                        ]
                    },
                    {
                        hangye_range: '水电煤暖气民生缴费',
                        rate: '费率0.2%，入账周期T+1',
                        rule_id: '730',
                        arr: [{
                            title: '公共事业（水电煤气）',
                            require: '收费授权证明文件（如授权证明书或合同）'
                        }]
                    },
                    {
                        hangye_range: '信用还款业务（不涉及理财）',
                        rate: '费率0.2%，入账周期T+1，禁信用卡',
                        rule_id: '718',
                        arr: [{
                            title: '信用还款',
                            require: '1、银行：银监会颁发的《金融许可证》。2、消费金融：银监会颁发的《金融许可证》。3、互联网小额贷款企业：银监会颁发的互联网小额贷款资质证明。请根据企业类型提供以上三种证件中的一种，即三选一'
                        }]
                    },
                    {
                        hangye_range: '民办大学及院校',
                        rate: '费率0%，入账周期T+1',
                        rule_id: '739',
                        arr: [{
                            title: '民办大学及院校',
                            require: '民办非公立院校需提供《办学许可证》'
                        }]
                    }
                ],
    
    
                [ // 党政，机关及事业
                    {
                        hangye_range: '党团费、停车缴费、物业缴费等其他缴费类业务',
                        rate: '费率0.6%，入账周期T+1',
                        rule_id: '725',
                        arr: [{
                            title: '其他缴费',
                            require: '收费资质'
                        }]
                    },
                    {
                        hangye_range: '水电煤暖气民生缴费',
                        rate: '费率0.2%，入账周期T+1',
                        rule_id: '722',
                        arr: [{
                            title: '公共事业（水电煤气）',
                            require: '收费授权证明文件（如授权证明书或合同）'
                        }]
                    },
                    {
                        hangye_range: '交通罚款业务',
                        rate: '费率0.1%，入账周期T+1',
                        rule_id: '723',
                        arr: [{
                            title: '交通罚款',
                            require: '收费授权证明文件（如授权证明书或合同）'
                        }]
                    },
                    {
                        hangye_range: '公立医院、公立院校及指定要求的挂号平台',
                        rate: '费率0%，入账周期T+1',
                        rule_id: '724',
                        arr: [{
                                title: '公立医院',
                                require: '《医疗机构执业许可证》'
                            },
                            {
                                title: '公立学校',
                                require: '无需提供特需资质'
                            },
                            {
                                title: '挂号平台',
                                require: '卫生局的批文'
                            },
                        ]
                    }
    
                ],
    
    
                [ // 个体户
                    {
                        hangye_range: '餐饮、零售批发、交通出行、生活娱乐服务、培训教育机构、民营医疗机构、代理缴纳话费等业务',
                        rate: '费率0.6%，入账周期T+1',
                        'rule_id': '719',
                        arr: [{
                                title: '餐饮',
                                require: '选填，若贵司具备以下资质，建议提供：餐饮业态，提供《食品经营许可证》或《餐饮服务许可证》'
                            },
                            {
                                title: '食品生鲜',
                                require: '选填，若贵司具备以下资质，建议提供： 1、食品业态，提供《食品经营许可证》或《食品生产许可证》或供销协议+合作方资质。2、销售初级农产品，无需特殊资质'
                            },
                            {
                                title: '私立/民营医院/诊所',
                                require: '《医疗机构执业许可证》'
                            },
                            {
                                title: '保健器械/医疗器械/非处方药品',
                                require: '互联网售药：提供《互联网药品交易服务证》。线下门店卖药：提供《药品经营许可证》。 医疗器械：《医疗器械经营企业许可证》'
                            },
                            {
                                title: '游艺厅/KTV/网吧',
                                require: '游艺厅/KTV：《娱乐场所许可证》。网吧：《网络文化经营许可证》'
                            },
                            {
                                title: '机票/机票代理',
                                require: '《航空公司营业执照》或《航空公司机票代理资格证》'
                            },
                            {
                                title: '宠物医院',
                                require: '《动物诊疗许可证》'
                            },
                            {
                                title: '培训机构',
                                require: '选填，若贵司具备以下资质，建议提供： 1、学科类培训，提供办学许可证或相关批文。2、驾校培训，提供有“驾驶员培训”项目的《道路运输经营许可证》'
                            },
                            {
                                title: '零售批发/生活娱乐/其他',
                                require: '无需提供特需资质'
                            }
                        ]
                    },
                    {
                        hangye_range: '话费代理充值业务',
                        rate: '费率0.6%，入账周期T+7，单笔限额3K',
                        rule_id: '720',
                        arr: [{
                            title: '话费通讯',
                            require: '提供与运营商间的合作授权收费协议'
                        }]
                    },
                    {
                        hangye_range: '游戏、网络广告及推广、软件开发',
                        rate: '费率0.6%，入账周期T+7，单笔限额3K',
                        rule_id: '746',
                        arr: [{
                                title: '门户论坛/网络广告及推广/软件开发/其他',
                                require: '无需提供特需资质'
                            },
                            {
                                title: '游戏',
                                require: '棋牌类、捕鱼类游戏提供《网络文化经营许可证》'
                            }
                        ]
                    },
                    {
                        hangye_range: '加油业务',
                        rate: '费率0.3%，入账周期T+1',
                        rule_id: '721',
                        arr: [{
                            title: '加油',
                            require: '《成品油批发经营批准证书》或《成品油仓储经营批准证书》或《成品油零售经营批准证书》，其中一个即可'
                        }]
                    }
                ],
    
    
    
                [ // 其他组织
                    {
                        hangye_range: '民办非企业单位业务、社区服务、咨询、娱乐票务等',
                        rate: '费率0.6%，入账周期T+1',
                        rule_id: '727',
                        arr: [{
                                title: '宗教组织',
                                require: '宗教类提供《宗教活动场所登记证》'
                            },
                            {
                                title: '机票/机票代理',
                                require: '《航空公司营业执照》或《航空公司机票代理资格证》'
                            },
                            {
                                title: '私立/民营医院/诊所',
                                require: '《医疗机构执业许可证》'
                            },
                            {
                                title: '咨询/娱乐票务/其他',
                                require: '无需提供特需资质'
                            },
                        ]
                    },
                    {
                        hangye_range: '民办中小学、幼儿园',
                        rate: '费率0.3%，入账周期T+1',
                        rule_id: '738',
                        arr: [{
                            title: '民办中小学及幼儿园',
                            require: '民办非公立院校需提供《办学许可证》'
                        }]
                    },
                    {
                        hangye_range: '民办大学院校及公益基金会',
                        rate: '费率0%，入账周期T+1',
                        rule_id: '726',
                        arr: [{
                                title: '民办大学及院校',
                                require: '民办非公立院校需提供《办学许可证》'
                            },
                            {
                                title: '公益',
                                require: '《基金会法人登记证书》、法人资料业务范围有“接受捐款”相关字眼或有“慈善组织”标识'
                            },
                        ]
                    }
                ]
            ]



















var data_wx = 
    {
        "business_code": wechartJson[0].value,
        "contact_info": {
            "contact_name": wechartJson[1].subobject[0].value,
            "contact_id_number":wechartJson[1].subobject[1].value,
            "openid":wechartJson[1].subobject[2].value,
            "mobile_phone": wechartJson[1].subobject[3].value,
            "contact_email":wechartJson[1].subobject[4].value
        },
        "subject_info": {
            "subject_type":wechartJson[2].subobject[0].value,
            "business_license_info": {
                "license_copy":wechartJson[2].subobject[1].subobject[0].value,
                "license_number":wechartJson[2].subobject[1].subobject[1].value,
                "merchant_name":wechartJson[2].subobject[1].subobject[2].value,
                "legal_person":wechartJson[2].subobject[1].subobject[3].value
            },
            "certificate_info": {
                "cert_copy":wechartJson[2].subobject[2].subobject[0].value,
                "cert_type":wechartJson[2].subobject[2].subobject[1].value,
                "cert_number":wechartJson[2].subobject[2].subobject[2].value,
                "merchant_name":wechartJson[2].subobject[2].subobject[3].value,
                "company_address":wechartJson[2].subobject[2].subobject[4].value,
                "legal_person":wechartJson[2].subobject[2].subobject[5].value,
                "period_begin":wechartJson[2].subobject[2].subobject[6].value,
                "period_end":wechartJson[2].subobject[2].subobject[7].value
            },
            "organization_info": {
                "organization_copy":wechartJson[2].subobject[3].subobject[0].value,
                "organization_code":wechartJson[2].subobject[3].subobject[1].value,
                "org_period_begin":wechartJson[2].subobject[3].subobject[2].value,
                "org_period_end":wechartJson[2].subobject[3].subobject[3].value
            },
           // "certificate_letter_copy":wechartJson[2].subobject[4].subobject[0].value,   // 这个静态数据没有渲染的
            "certificate_letter_copy":null,
            "identity_info": {
                "id_doc_type": wechartJson[2].subobject[5].subobject[0].value,
                "id_card_info": {
                    "id_card_copy":wechartJson[2].subobject[5].subobject[1].subobject[0].value,
                    "id_card_national":wechartJson[2].subobject[5].subobject[1].subobject[1].value,
                    "id_card_name":wechartJson[2].subobject[5].subobject[1].subobject[2].value,
                    "id_card_number":wechartJson[2].subobject[5].subobject[1].subobject[3].value,
                    "card_period_begin":wechartJson[2].subobject[5].subobject[1].subobject[4].value,
                    "card_period_end":wechartJson[2].subobject[5].subobject[1].subobject[5].value
                },
                "id_doc_info": {
                    "id_doc_copy":wechartJson[2].subobject[5].subobject[2].subobject[0].value,
                    "id_doc_name":wechartJson[2].subobject[5].subobject[2].subobject[1].value,
                    "id_doc_number":wechartJson[2].subobject[5].subobject[2].subobject[2].value,
                    "doc_period_begin":wechartJson[2].subobject[5].subobject[2].subobject[3].value,
                    "doc_period_end":wechartJson[2].subobject[5].subobject[2].subobject[4].value
                },
                "owner":wechartJson[2].subobject[5].subobject[2].subobject[3].value
            },
            "ubo_info": {
                "id_type":wechartJson[2].subobject[6].subobject[0].value,
                "id_card_copy":wechartJson[2].subobject[6].subobject[1].value,
                "id_card_national":wechartJson[2].subobject[6].subobject[2].value,
                "id_doc_copy":wechartJson[2].subobject[6].subobject[3].value,
                "name":wechartJson[2].subobject[6].subobject[4].value,
                "id_number":wechartJson[2].subobject[6].subobject[5].value,
                "id_period_begin":wechartJson[2].subobject[6].subobject[6].value,
                "id_period_end":wechartJson[2].subobject[6].subobject[7].value
            }
        },
        "business_info": {  // wechartJson[3].subobject[2].subobject[2].subobject[1]
            "merchant_shortname": wechartJson[3].subobject[0].value,
            "service_phone":  wechartJson[3].subobject[1].value,
            "sales_info": {
                "sales_scenes_type":wechartJson[3].subobject[2].subobject[0].value,  // 数组
                "biz_store_info": {
                    "biz_store_name": wechartJson[3].subobject[2].subobject[1].subobject[0].value,
                    "biz_address_code":  wechartJson[3].subobject[2].subobject[1].subobject[1].value,
                    "biz_store_address":  wechartJson[3].subobject[2].subobject[1].subobject[2].value,
                    "store_entrance_pic":wechartJson[3].subobject[2].subobject[1].subobject[3].value,
                    "indoor_pic":wechartJson[3].subobject[2].subobject[1].subobject[4].value,                                           // 数组
                    "biz_sub_appid":wechartJson[3].subobject[2].subobject[1].subobject[5].value
                },
                "mp_info": {
                    "mp_appid":wechartJson[3].subobject[2].subobject[2].subobject[0].value,
                    "mp_sub_appid":wechartJson[3].subobject[2].subobject[2].subobject[1].value,   // 商家公众号APPID
                    "mp_pics":wechartJson[3].subobject[2].subobject[2].subobject[2].value
                },
                "mini_program_info": {
                    "mini_program_appid":wechartJson[3].subobject[2].subobject[3].subobject[0].value,
                    "mini_program_sub_appid": wechartJson[3].subobject[2].subobject[3].subobject[1].value,
                    "mini_program_pics":wechartJson[3].subobject[2].subobject[3].subobject[2].value
                },
                "app_info": {
                    "app_appid":wechartJson[3].subobject[2].subobject[4].subobject[0].value,
                    "app_sub_appid": wechartJson[3].subobject[2].subobject[4].subobject[1].value,
                    "app_pics":wechartJson[3].subobject[2].subobject[4].subobject[2].value   // 数组
                },
                "web_info": {
                    "domain":wechartJson[3].subobject[2].subobject[5].subobject[0].value,
                    "web_authorisation":wechartJson[3].subobject[2].subobject[5].subobject[1].value,
                    "web_appid":wechartJson[3].subobject[2].subobject[5].subobject[2].value,
                },
                "wework_info": {
                    "corp_id":wechartJson[3].subobject[2].subobject[6].subobject[0].value,
                    "sub_corp_id":wechartJson[3].subobject[2].subobject[6].subobject[1].value,
                  //  "wework_pics":wechartJson[3].subobject[2].subobject[6].subobject[2].value   // 数组
                    "wework_pics":null   // 数组
                }
            }
        },
        "settlement_info": {
            "settlement_id":wechartJson[4].subobject[0].value,
            "qualification_type":wechartJson[4].subobject[1].value,
            "qualifications":wechartJson[4].subobject[2].value,        // 数组
            "activities_id":wechartJson[4].subobject[3].value, 
            "activities_rate": wechartJson[4].subobject[4].value, 
            "activities_additions": wechartJson[4].subobject[5].value    // 数组
        },
        "bank_account_info": {
            "bank_account_type": wechartJson[5].subobject[0].value,
            "account_name":  wechartJson[5].subobject[1].value,
            "account_bank":  wechartJson[5].subobject[2].value,
            "bank_address_code":  wechartJson[5].subobject[3].value,
            "bank_branch_id":  wechartJson[5].subobject[4].value,
            "bank_name":  wechartJson[5].subobject[5].value,
            "account_number":  wechartJson[5].subobject[6].value
        },
        "addition_info": {
            "legal_person_commitment": wechartJson[6].subobject[0].value,
            "legal_person_video": wechartJson[6].subobject[1].value,
            // "business_addition_pics": [
            //     "ZC6GC-vnrbEny__Ie_An5-tCp3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBD",
            //     "ZC6GC-vnrbEny__Ie_An5-tCp3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBD"
            // ],
            "business_addition_pics": wechartJson[6].subobject[2].value,
            "business_addition_msg": wechartJson[6].subobject[3].value,        //"特殊情况，说明原因"
        }
    }
