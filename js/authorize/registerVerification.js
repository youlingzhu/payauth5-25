function returnInfo(data, nextPro) {
    var str = data.value.trim();
   // console.log(str)
    if (str == "") {
        var str = data.caption.replace(/\s+/g, '')
        return "请填写" + str;
    } else {
        return nextPro();
    }
}


function Validation_Type() {


    // 注册号验证  
    this.license_number_type = function (data) {
        var b = returnInfo(data, function () {
            // var reg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
            var reg1 = /^[A-Za-z0-9]{15}$/g; // \w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。
            var reg2 = /^[A-Za-z0-9]{18}$/g; // \w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。
            var str = data.value;
            if (reg1.test(data.value) || reg2.test(data.value)) {
                return '';
            } else {
                strValue = '格式不正确，请正确填写营业执照上的18位统一社会信用代码或15位注册号';
                return strValue;
            }
        });
        // // // console.log(b);
        return b;
    }



    // 商户名称验证
    this.merchant_name_type = function (data) {
        return returnInfo(data, function () {
            // var reg = /^[\u4e00-\u9fa5\(\)()\da-zA-Z&]{2,50}$/gi;
            // var reg = /^(([\u4e00-\u9fff]{2,50})|([a-z\.\s\,]{2,50}))$/i;
            var reg = /^[\u4e00-\u9fa5\(\)()\da-zA-Z&\.\s\,]{2,50}$/gi;
            var reg1 = /^[0-9a-zA-Z\.\&\,\。]+$/;
            var str = data.value;
            var strValue = null;
            // console.log(reg1.test(str));
            // if (reg.test(str)) {
            //     return "";
            // } 
            // else {
            //     strValue = '请填写正确的商户名称格式';
            //     return strValue;
            // }

            if (reg1.test(str)) {
                return '请填写正确格式的商户名字';
            } else if (reg.test(str)) {
                // console.log(reg1.test(str));
                return '';
            } else {
                strValue = '请填写正确的商户名称格式';
                return strValue;
            }





        })
    }


    // 个体户经营者/法人姓名验证
    this.legal_person_type_one = function (data) {
        // return returnInfo(data, function(){
        //     var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
        //     var str = data.value;
        //     var strValue = null;
        //     if (reg.test(str)) {
        //         return "";
        //     } else {
        //         strValue = '请填写正确的个体户经营者/法人名称';
        //         return strValue;
        //     }
        // })
        
        var reg = /^[\u4e00-\u9fa5]{2,4}$/;
        var str = data.value;
        var strValue = null;
        console.log(str.length);
        if (reg.test(str)) {
            return "";
        }else if(str.trim().length==0){
            return '请填写个体户经营者/法人姓名';
        } else {
            strValue = '请填写正确格式的经营者/法人姓名';
            return strValue;
        }
    }

    // 
    this.organization_code_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]$|[a-zA-Z0-9]{9}-[a-zA-Z0-9]$|^[a-zA-Z0-9]{10}-[a-zA-Z0-9]$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，请正确填写9位组织机构代码，如123456789-A';
                return strValue;
            }
        })
    }

    // 组织机构代码证 开始时间
    this.org_period_begin_type = function (data) {
        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

    // 组织机构代码证 结束时间
    this.org_period_end_type = function (data) {
        var datetimepicker1_input = document.getElementById('datetimepicker1_input');
        var values = dateToTimestamp(datetimepicker1_input.value);


        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str) - values) < 5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

    // 身份证姓名验证
    this.id_card_name_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[\u4e00-\u9fa5]{2,4}$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确格式的身份证姓名';
                return strValue;
            }
        })
    }



    // 身份证号码验证
    this.id_card_number_type = function (data) {
        return returnInfo(data, function () {
            //  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
            var reg1 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/;
            var reg2 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            var str = data.value;
            var strValue = null;
            if (reg1.test(str) || reg2.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，请正确填写身份证上的15或18位身份号码';
                return strValue;
            }
        })
    }

    // 身份证件有效期开始时间
    this.card_period_begin_type = function (data) {
        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            // // // console.log(str)
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

    // 身份证件有效期结束时间
    this.card_period_end_type = function (data) {
        var datetimepicker3 = document.getElementById('datetimepicker3');
        var datetimepicker3_input = datetimepicker3.getElementsByTagName('input')[0];
        var values = dateToTimestamp(datetimepicker3_input.value);
        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str) - values) < 5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }




    // 港澳台护照证件姓名验证
    this.id_doc_name_type = function (data) {
        return returnInfo(data, function () {
            var str = data.value.trim();
            //  // // console.log(str.length);
            if (str.length > 0) {
                return "";
            } else if (str.length == 0) {
                return "请填写证件号码"
            }
        })
    }


    // 港澳台护照证件号码验证
    this.id_doc_number_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[A-Za-z0-9]{7,11}$/;
           // var reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，请输入7到11位的证件号码';
                return strValue;
            }
        })
    }

     // 港澳台护照证件号码验证
     this.id_doc_number_types = function (data) {
         // wechartJson[0].is_beneficiary_pic = true 为身份证
        return returnInfo(data, function () {
            var reg = /^[A-Za-z0-9]{7,11}$/;
            var reg1 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/;
            var reg2 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            var str = data.value;
            var strValue = null;
            // if (reg.test(str)) {
            //     return "";
            // } else {
            //     strValue = '格式不正确，请输入7到11位的证件号码';
            //     return strValue;
            // }
            // console.log(wechartJson[0].is_beneficiary_pic)
            if(wechartJson[0].is_beneficiary_pic){
                if(reg1.test(str)||reg2.test(str)){
                    return ""
                }else{
                    strValue = '格式不正确，请输入正确的证件号码';
                    return strValue;
                }
            }else{
                if(reg.test(str)){
                    return ""
                }else{
                    strValue = '格式不正确，请输入7到11位的证件号码';
                    return strValue;
                }
            }


        })
    }


    // 证件有效期开始时间验证
    this.doc_period_begin_type = function (data) {
        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            //  // // console.log(str)
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

    // 证件有效期结束时间
    this.doc_period_end_type = function (data) {
        var datetimepicker3 = document.getElementById('datetimepicker5');
        var datetimepicker3_input = datetimepicker3.getElementsByTagName('input')[0];
        var values = dateToTimestamp(datetimepicker3_input.value);
        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str) - values) < 5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

    // 受益人证件有效期限结束时间
    this.id_period_end_type = function (data) {
        var datetimepicker3 = document.getElementById('datetimepicker7');
        var datetimepicker3_input = datetimepicker3.getElementsByTagName('input')[0];
        var values = dateToTimestamp(datetimepicker3_input.value);
        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str) - values) < 5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })

    }

    // 经营信息 商户简称
    this.merchant_shortname_type = function (data) {
        return returnInfo(data, function () {
            var str = data.value;
           // str = str.replace(/(^\s*)|(\s*$)/g, '');
           var reg=/^[0-9]+$|^[a-zA-Z]+$|^\w+$/;
           if(!reg.test(str)){
             return "";
           }else{
             return "商户简称格式错误，请重新输入";
           }
            // if (str.length < 2) {
            //     return "商户简称格式错误，请重新输入";
            // } else {
            //     return '';
            // }
        })
    }

    // 经营信息 客服电话
    this.service_phone_type = function (data) {
        return returnInfo(data, function () {
            var reg1 = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; // 手机号码
            var reg2 = /^0\d{2,3}-?\d{7,8}$/ // 座机号码 问号代表前面的'-'
            var reg3 = /^400[0-9]{7}/; // 400电话
            var reg4 = /^800[0-9]{7}/; // 800电话
            var str = data.value;
            var strValue;
            if (reg1.test(str) || reg2.test(str) || reg3.test(str) || reg4.test(str)) {
                return "";
            } else {
                strValue = '客服电话验证错误，请重新输入';
                return strValue;
            }
        })
    }

    // 线下场所门店名称
    // this.biz_store_name_type = function (data) {
    //     return returnInfo(data, function () {
    //         var reg = /[^\s]/;
    //         var str = data.value;
    //         if (reg.test(str)) {
    //             return "";
    //         } else {
    //             strValue = '门店名称格式错误，请重新输入';
    //             return strValue;
    //         }
    //     })
    // }

    // 线下场所邮政编号  [1-9]\d{5}(?!\d)
    this.biz_address_code_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[1-9][0-9]{5}$/;
            var str = data.value;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '邮政编号格式错误，请重新输入';
                return strValue;
            }
        })
    }

    // 线下场所经营地址
    this.biz_store_address_type = function (data) {
        return returnInfo(data, function () {
            var str = data.value;
            str = str.replace(/\s+/g, '');
            if (str.length < 1) {
                return "请填写经营场所地址";
            } else {
                return '';
            }
        })
    }

    // 线下场所对应的商家appID
    this.biz_sub_appid_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[0-9a-zA-Z]{18}$/; // appid为18位数字和字母的组合
            var str = data.value;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，appid为18位数字和字母的组合。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html" target="_blank">appid查看指引</a>';
                return strValue;
            }
        })
    }

    // 公众号服务商appId
    this.mp_appid_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[0-9a-zA-Z]{18}$/; // appid为18位数字和字母的组合
            var str = data.value;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，appid为18位数字和字母的组合。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html" target="_blank">appid查看指引</a>';
                return strValue;
            }
        })
    }



    // 互联网网站域名 互联网网站域名
    this.domain_type = function (data) {
        return returnInfo(data, function () {
            //  var reg=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;      // 域名
           // var reg = /(http|https):\/\/([\w.]+\/?)\S*/;
            var reg = /(http|https):\/\/([\w.]+\.\w+\/?)\S*/;
            var str = data.value;
            var index = str.indexOf('://');
            var len = index + '://'.length;
            var valueName = str.slice(len);
            var indexName = valueName.indexOf('/');
            var regexp = /[\u4E00-\u9FA5]/g;
            var regUpper = /[A-Z]/g;

            if (indexName > 0) {
                var strName = str.slice(len, indexName + len);
                if (regexp.test(strName)) {
                    return '网站格式错误,域名部分不能有中文';
                }
                if (regUpper.test(strName)) {
                    return '网站格式错误,域名部分不能有大写字母';
                }
            } else if (indexName < 0) {
                var strName = str.slice(len);
                if (regexp.test(strName)) {
                    return '网站格式错误,域名部分不能有中文';
                }
                if (regUpper.test(strName)) {
                    return '网站格式错误,域名部分不能有大写字母';
                }
            }


            if (reg.test(str)) {
                return "";
            } else {
                strValue = '网站格式错误（暂不支持中文域名）';
                return strValue;
            }



        })
    }


    //  结算规则 优惠费率活动ID
    this.activities_id_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[A-Za-z0-9]{10,}$/;
            var str = data.value;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式错误,具体常看优惠费率活动对照表';
                return strValue;
            }
        })
    }

    // 结算规则 优惠费率活动值
    this.activities_rate_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[0]+(\.[2-6]{1})$/;
            var str = data.value;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式错误,优惠区间在0.2~0.6范围内';
                return strValue;
            }
        })
    }

    // 结算账户 开户银行
    this.account_bank_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[\u4e00-\u9fa5]{3,}$/;
            var str = data.value;
            if (reg.test(str) && (str.match('行') || str.match('信用') || str.match('清算'))) {
                return "";
            } else {
                strValue = '请选择正确的基本开户行信息';
                return strValue;
            }
        })
    }

    // 开户银行银联号
    this.bank_branch_id_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^\d{12}$/;
            var str = data.value;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请输入正确的银联号';
                return strValue;
            }
        })
    }

    // 开户银行 银行账号
    this.account_number_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^\d{8,30}$/;
            var str = data.value;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请输入正确的银行卡号';
                return strValue;
            }
        })
    }

    //  var reg = /^[A-Za-z0-9]{7,11}$/;
    //  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    // 超级管理员 姓名
    this.contact_name_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[\u4e00-\u9fa5]{2,4}$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确格式的管理员姓名';
                return strValue;
            }
        })
    }

    // 超级管理员 证件号码
    this.contact_id_number_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[A-Za-z0-9]{7,11}$/;
            var reg1 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/;
            var reg2 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str) || reg1.test(str) || reg2.test(str)) {
                return "";
            } else {
                strValue = '请填写正确格式的证件号码';
                return strValue;
            }
        })
    }

    // 超级管理员 微信openid
    this.openid_type = function (data) {
        return returnInfo(data, function () {
            var str = data.value;
            var strValue = null;
            if (str.length > 0) {
                return "";
            } else {
                strValue = '请填写正确格式的微信openid';
                return strValue;
            }
        })
    }

    // 超级管理员 手机号码
    this.mobile_phone_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确格式的手机号码';
                return strValue;
            }
        })
    }

    // 超级管理员 邮箱地址
    this.contact_email_type = function (data) {
        return returnInfo(data, function () {
            // var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确格式的邮箱地址';
                return strValue;
            }
        })
    }

    // 登记证书 证书号
    this.cert_number_type = function (data) {
        return returnInfo(data, function () {
            var reg = /^[A-Za-z0-9]{8,12}$/;
            var reg2 = /^[A-Za-z0-9]{15}$/;
            var reg3 = /^[A-Za-z0-9]{18}$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str) || reg2.test(str) || reg3.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，请正确填写登记证书上的证书号';
                return strValue;
            }
        })
    }

    // 注册地址
    this.company_address_type = function (data) {
        return returnInfo(data, function () {
            var str = data.value;
            var strValue = null;
            if (str.length > 0) {
                return "";
            } else {
                strValue = '请填写正确的注册地址';
                return strValue;
            }
        })
    }

    // 登记证书 法人姓名
    this.legal_person_type = function (data) {
        // return returnInfo(data, function(){
        //     var str = data.value;
        //     var strValue = null;
        //     if (str.length>0) {
        //         return "";
        //     } else {
        //         strValue = '请填写正确的法人姓名';
        //         return strValue;
        //     }
        // }) 
        var reg = /^[\u4e00-\u9fa5]{2,4}$/;
        var str = data.value;
        var strValue = null;
        if (reg.test(str)) {
            return "";
        }else if(str.trim().length==0){
            return '请填写法人姓名';
        }else {
            strValue = '请填写正确格式的法人姓名';
            return strValue;
        }
    }

    // 登记证书 有效期结束时间
    this.period_end = function (data) {
        var datetimepicker3 = document.getElementById('datetimepicker9');
        var datetimepicker3_input = datetimepicker3.getElementsByTagName('input')[0];
        var values = dateToTimestamp(datetimepicker3_input.value);
        return returnInfo(data, function () {
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str) - values) < 5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

}



function dateToTimestamp(dateStr) {
    if (!dateStr) {
        return ''
    }
    let newDataStr = dateStr.replace(/\.|\-/g, '/')
    let date = new Date(newDataStr);
    let timestamp = date.getTime();
    return timestamp
}