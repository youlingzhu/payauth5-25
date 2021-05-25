function Component_list() {

    var application_list_one = document.getElementById('application_list_one');
    // 选择经营者类型
    this.subjectType = function (data, componentNextPro) {
        var arr = [{
                caption: '企业',
                title: "营业执照上的主体类型一般为有限公司、有限责任公<br />司",
                value: "SUBJECT_TYPE_ENTERPRISE"
            },
            {
                caption: '党政、机关及事业单位',
                title: "包括国内各级、各类政府机构、事业单位 等。如：公<br />安、党团、司法、交通、旅游 工商税务、市政、医疗、教育、学校等机构",
                value: "SUBJECT_TYPE_INSTITUTIONS"
            },
            {
                caption: '个体工商户',
                title: "营业执照上的主体类型一般为个体户、个体工商户、<br />个体经营",
                value: "SUBJECT_TYPE_INDIVIDUAL"
            },
            {
                caption: '其他组织',
                title: "不属于企业、政府事业单位的组织机构，如社会团<br />体、民办丰企业、基金会。要求机构 已か理组织机构<br />代码证",
                value: "SUBJECT_TYPE_OTHERS"
            }
        ]
        var divTitle = document.createElement('div');
        // var strTitleTop='<div id="information_fill_subject" class="information_fill"><img src="./img/vector_go.png"><span>主体类型</span></div>'
        // divTitle.innerHTML=strTitleTop;
        var divp = document.createElement('div');
        var div_top = document.createElement('div');
        divp.setAttribute('id', 'authorized_application_parent');
        div_top.setAttribute('id', 'authorized_application_div_top');
        var div = document.createElement("div");
        div.setAttribute('id', 'authorized_application');
        div.className = 'authorized_application';
        var h3 = document.createElement('h3');
        var ul = document.createElement('ul');
        ul.className = 'authorized_ul';
        ul.setAttribute('id', 'authorized_ul_list');
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            str += "<li><div>" + arr[i].caption + "</div><p>" + arr[i].title + "</p><button>选择</botton></li>"
        }
        var strTitle = "<p class='check_p_one'>微信特约商户支付授权申请</p><p class='check_p_two'>选择主体类型</p>"
        ul.innerHTML = str;
        div.innerHTML = strTitle;
        div.appendChild(ul);
        divp.appendChild(div_top);
        divp.appendChild(div);
        // document.body.appendChild(divTitle);
        document.body.appendChild(divp); // 放到body的后面；
        var li = ul.getElementsByTagName('li');
        var aDiv = ul.getElementsByTagName("div");
        var applicationParent = document.getElementById('applicationParent');
        var Information_to_fill_out = document.getElementById('Information_to_fill_out');
        var order_application = document.getElementById('order_application');
        $('#authorized_ul_list li').eq(0).find('div').css('color', '#47CD69');


        $('#authorized_ul_list li button').each(function (i) {
            $(this).attr('index', i); // 设置下标
        })


        $('#authorized_ul_list li button').on('click', function () {
            var index = $(this).attr('index');
            index = parseInt(index);
            data.value = arr[index].value;
            wechartJson[0].zhuti_leixing_ziduan = arr[index].value; // 
            wechartJson[0].zhuti_leixing = arr[index].caption;
            data.data_value_type = arr[index].caption;
            $('#authorized_application_parent').hide();
            $('#information_fill_subject_title').hide();
            //  $('#information_fill_subject_title').hide();
            Information_to_fill_out.style.display = 'block';
            order_application.style.display = 'none';
            if (componentNextPro) {
                componentNextPro(data.value, index);
            }
            pushHistory_one(); // 自己做的回退事件;

        })





        $('#authorized_ul_list li').on('mouseover', function () {
            $('#authorized_ul_list li').find('div').css('color', '#373f4a');
            $('#authorized_ul_list li').css('border', '1px solid rgb(195,197,200)');
            $(this).css('border', '1px solid #47CD69');
            $(this).find('div').css('color', '#47CD69');
        })

        if (subject_boolean) {
            divp.style.display = 'none';
            var datas = data.data_value_type;
            var str = '<div class="info-hd" style="border-left: 1px solid #EEE;border-right: 1px solid #EEE;" id="zhutileixing_top_hrs"><span>主体信息</span></div><div class="application_list_one_ul_li_div" style="padding-left: 40px;padding-top:65px;border-left:1px solid #EEE;border-right: 1px solid #EEE;margin-top:0px"><label class="lable_left">主体类型</label><span class="input_public" id="zhutileix_input" style="background: rgb(255, 255, 255); border: 1px solid transparent; width: 300px;"></span><p class="text-errors"></p></div><div style="height:81px" class="zhutileix_input_hrs"><div class="public_hr"></div></div>';
            application_list_one.innerHTML += str;
            var zhutileix_input = document.getElementById('zhutileix_input');
            zhutileix_input.innerHTML = '&nbsp;&nbsp;&nbsp;' + datas;
            application_list_one.style.border='none';
        }
    }


    // 营业执照照片
    this.photosOfBusinessLicense = function (data) {
        var div_subject = document.createElement('div');
        div_subject.setAttribute('id', 'subject_information');
        var div_box = document.createElement('div');
        div_box.setAttribute('id', 'matation_business_pictrue_box'); // 营业执照的节点
        var div_box_dengji = document.createElement('div');
        div_box_dengji.setAttribute('id', 'matation_business_dengji_box'); // 登记证书的节点
        var div = document.createElement("div");
        div.className = 'form-item';
        div.setAttribute('id', 'form-item_jingyingxinxi');
        var str = "<div class='info-hd' id='zhutixinxi_top_hrs'><span>主体信息</span></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>营业执照</h4>" +
            "</div>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>请上传营业执照，需年检章齐全，当年注册除外</p>" +
            "</div>" +
            "<div id='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden'  id='yingyezhizhao'>" +
            "<i class='wildcard' id='yingyezhizhao_iOne'>*</i>" +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' id='yingyezhizhao_inputImg' class='a-upload'>" +
            "<input type='file' name='' class='input_updata' id=''><span>上传</span>" +
            "</a>" +
            "<div class='upload-tips'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childers' class='application_list_one_ul_childer'>" +
            "</ul>" +
            "<p class='text-error'>请填写营业执照照片</p>" +
            "<p class='text-error'>请上传单张图片在2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>"
        div.innerHTML = str;
        application_list_one.appendChild(div_subject);
        div_subject.appendChild(div_box);
        div_subject.appendChild(div_box_dengji);
        div_box.appendChild(div);
        this.publicImgUupData('yingyezhizhao', data);
        if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL' || subject_type == 'SUBJECT_TYPE_ENTERPRISE') {
            div_box.style.display = 'block';
        } else {
            div_box.style.display = 'none';
        }
        if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS') {
            div_box_dengji.style.display = 'block';
        } else {
            div_box_dengji.style.display = 'none';
        }
        var zhutixinxi_top_hrs = document.getElementById('zhutixinxi_top_hrs');
        if (subject_boolean) {
            zhutixinxi_top_hrs.style.display = 'none';
            document.getElementById('yingyezhizhao').style.paddingLeft = '40px';
            document.getElementById('yingyezhizhao').style.marginTop = '-10px';
            document.getElementById('application_list_one_ul_childers').style.paddingLeft = '10px';
            div_box.style.marginTop = '-20px';
            $('#yingyezhizhao_iOne').hide();
            $('#yingyezhizhao_inputImg').hide();
            div_subject.className='active';
            $('#application_phone').css('marginBottom','38px');  // 营业执照与营业执照照片之间的距离
        }
    }




    // 注册号 
    this.license_number = function (data) {
        this.input_box(data, function (data) {
            //  // console.log(subject_type);
            var a = data.verification_method();
            var organization_code_certificate = document.getElementById('organization_code_certificate');
            if (a == "" && data.value.length == 15 && subject_type != 'SUBJECT_TYPE_INDIVIDUAL') {
                organization_code_certificate.style.display = "block";
                wechartJson[0].is_organization = true; // 组织机构显示
            } else {
                organization_code_certificate.style.display = "none";
                wechartJson[0].is_organization = false;
            }
        });
    }

    // 登记证书 照片
    this.cert_copy = function (data) {
        var div = document.createElement("div");
        div.className = 'form-item';
        var dom = null;
        if (subject_boolean) {
            dom = '';
        } else {
            dom = "<i class='wildcard'>*</i>";
        }
        div.setAttribute('id', 'form-item_dengjixinxi');
        var str = "<div class='info-hd' id='form-item_dengjixinxi_info_hd'><h2 class='ng-binding'>主体信息</h2></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='data-hd' style='margin-top:20px'>" +
            "<h4 class='fl ng-binding'>登记证书</h4>" +
            "</div>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>请上传相关部门颁发的证书，如：事业单位法人证书、统一社会信用代码证书</p>" +
            "</div>" +
            "<div class='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden'  id='dengjizhengshu_matation'>" +
            dom +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' id='dengjizhengshu_input_img' class='a-upload'>" +
            "<input type='file' class='input_updata' name='' id=''><span>上传</span>" +
            "</a>" +
            // "<a href='javascript:;' class='a-upload'  style='display:none'>" +
            // "<input type='file' name='' class='input_updata' id=''>重新上传" +
            // "</a>" +
            "<div class='upload-tips'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul class='application_list_one_ul_childer'>" +
            // "<li style='display:none'>" +
            // "<img src='' />" +
            // "<a href='javascript:;'  class='del'>删除</a>" +
            // "</li>" +
            "</ul>" +
            "<p class='text-error' style='display:none'>请填写营业执照照片</p>" +
            "<p class='text-error' style='display:none'>请上传单张图片在2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>"
        div.innerHTML = str;
        var matation_business_dengji_box = document.getElementById('matation_business_dengji_box');
        matation_business_dengji_box.appendChild(div);
        this.publicImgUupData('dengjizhengshu_matation', data);
        document.getElementById('dengjizhengshu_matation').style.paddingLeft = '40px';
        if (subject_boolean) {
            $('#dengjizhengshu_input_img').hide();
            $('#form-item_dengjixinxi_info_hd').hide();
        }
    }

    // 登记证书 类型

    this.cert_type = function (data) {
        var divs = document.createElement("div");
        divs.setAttribute('id', 'matation_form_cert_type');
        var matation_business_dengji_box = document.getElementById('matation_business_dengji_box');
        matation_business_dengji_box.appendChild(divs);
        divs.style.paddingLeft = '40px';
        var arr = [{
                title: '事业单位法人证书',
                type: 'CERTIFICATE_TYPE_2388'
            },
            {
                title: '统一社会信用代码证书',
                type: 'CERTIFICATE_TYPE_2389'
            },
            {
                title: '有偿服务许可证（军队医院适用）',
                type: 'CERTIFICATE_TYPE_2390'
            },
            {
                title: '医疗机构执业许可证（军队医院适用）',
                type: 'CERTIFICATE_TYPE_2391'
            },
            {
                title: '企业营业执照（挂靠企业的党组织适用）',
                type: 'CERTIFICATE_TYPE_2392'
            },
            {
                title: '组织机构代码证（政府机关适用）',
                type: 'CERTIFICATE_TYPE_2393'
            },
            {
                title: '社会团体法人登记证书',
                type: 'CERTIFICATE_TYPE_2394'
            },
            {
                title: '民办非企业单位登记证书',
                type: 'CERTIFICATE_TYPE_2395'
            },
            {
                title: '基金会法人登记证书',
                type: 'CERTIFICATE_TYPE_2396'
            },
            {
                title: '慈善组织公开募捐资格证书',
                type: 'CERTIFICATE_TYPE_2397'
            },
            {
                title: '农民专业合作社法人营业执照',
                type: 'CERTIFICATE_TYPE_2398'
            },
            {
                title: '宗教活动场所登记证',
                type: 'CERTIFICATE_TYPE_2399'
            },
            {
                title: '其他证书/批文/证明',
                type: 'CERTIFICATE_TYPE_2400'
            }
        ]

        this.cert_type_ul(data, arr, divs, function (index) {
            // console.log(index);
            data.value = arr[index].type;
            data.data_value_type = arr[index].title;
            // console.log(data.value);
            var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');
            common_xuanze_zhengji_span.firstChild.nodeValue = arr[index].title;
            var common_xuanze_zhengji_p_yuansu = document.getElementById('common_xuanze_zhengji_p_yuansu');
            common_xuanze_zhengji_p_yuansu.style.display = 'none';

        });

        var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');

        if (data.value) {
            common_xuanze_zhengji_span.firstChild.nodeValue = data.data_value_type;
        }

    }

    // 登记证书 下面的 ul 
    this.cert_type_ul = function (data, arr, divs, nextPro) {
        divs.innerHTML += this.xuanze_dengji();
        divs.innerHTML += this.cert_type_innnerHTML();
        var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');
        var common_zhengjian_leixing_type = document.getElementById('common_zhengjian_leixing_type');
        common_xuanze_zhengji_span.onOff = true;
        common_zhengjian_leixing_type.style.display = 'none';
        common_xuanze_zhengji_span.onclick = function () {
            if (this.onOff) {
                common_zhengjian_leixing_type.style.display = 'block';
            } else {
                common_zhengjian_leixing_type.style.display = 'none';
            }
            this.onOff = !this.onOff;
        }

        var zhengjia_type_list_leixing = document.getElementById('zhengjia_type_list_leixing');
        var a = zhengjia_type_list_leixing.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            a[i].onclick = function () {
                nextPro(i);
                common_xuanze_zhengji_span.onOff = true;
                common_zhengjian_leixing_type.style.display = 'none';
            }
        }

        var dengji_zhengshu_list_close = document.getElementById('dengji_zhengshu_list_close');
        dengji_zhengshu_list_close.onclick = function () {
            common_xuanze_zhengji_span.onOff = true;
            common_zhengjian_leixing_type.style.display = 'none';
        };
    }

    // 登记证书 证书号
    this.cert_number = function (data) {
        this.input_box_dengji(data, function (data) {
            var a = data.verification_method();
            var organization_code_certificate = document.getElementById('organization_code_certificate');
            // console.log(subject_type);
            // console.log(data);
            if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS') { // 党政机关
                if (a == "" && data.value.length == 15) {
                    //  // console.log('组织机构显示', organization_code_certificate);
                    organization_code_certificate.style.display = "block";
                    wechartJson[0].is_organization_dang = true; // 组织机构显示
                } else if (a == "" && (data.value.length > 7 && data.value.length < 13)) {
                    organization_code_certificate.style.display = "block";
                    wechartJson[0].is_organization_dang = true; // 组织机构显示
                } else {
                    organization_code_certificate.style.display = "none";
                    wechartJson[0].is_organization_dang = false;
                }
            }


            if (subject_type == 'SUBJECT_TYPE_OTHERS') {
                if (a == "" && data.value.length == 15) {
                    organization_code_certificate.style.display = "block";
                    wechartJson[0].is_organization_gongyi = true; // 组织机构显示
                } else if (a == "" && (data.value.length > 7 && data.value.length < 13)) {
                    organization_code_certificate.style.display = "block";
                    wechartJson[0].is_organization_gongyi = true; // 组织机构显示
                } else {
                    organization_code_certificate.style.display = "none";
                    wechartJson[0].is_organization_gongyi = false;
                }
            }
        })
    }

    // 登记证件开始的时间
    this.period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, "datetimepicker9", "matation_business_dengji_box", "证件有效期限", "text_errors_timesix");

    }


    // 登记证件结束的时间
    this.period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, 'datetimepicker10', "matation_business_dengji_box", "text_errors_timesix");
    }




    // 组织机构代码证
    this.organization_copy = function (data) {
        // console.log(data, 203)
        var div = document.createElement('div');
        var div = document.createElement("div");
        div.setAttribute('class', 'form-item');
        div.setAttribute('id', 'organization_code_certificate');
        div.style.position = "relative";
        var dom = null;
        if (subject_boolean) {
            dom = '';
        } else {
            dom = "<i class='wildcards'>*</i>";
        }
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>组织机构代码证</h4>" +
            "</div>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>由于你的营业执照未三证合一，请上传“组织机构代码证”</p>" +
            "</div>" +
            "<div id='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden;padding-top:30px;' id='zuzhijigou_matation_form'>" +
            dom +
            "<label class='labels ng-binding' style=>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' class='a-upload'>" +
            "<input type='file'  class='input_updata' name='' id=''><span>上传</span>" +
            "</a>" +
            // "<a href='javascript:;' class='a-upload' style='display:none'>" +
            // "<input type='file' name=''  class='input_updata' id=''>重新上传" +
            // "</a>" +
            "<div class='upload-tips'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childer'>" +
            // "<li>" +
            // "<img src='' />" +
            // "<a href='javascript:;'  class='del'>删除</a>" +
            // "</li>" +
            "</ul>" +
            "<p class='text-error'>请填写组织机构代码证照片</p>" +
            "<p class='text-error'>请上传单张图片在2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>";

        div.innerHTML = str;
        var subject_information = document.getElementById('subject_information');
        subject_information.appendChild(div);
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        //console.log(subject_type)
        // wechartJson[0].is_organization_dang

        if (subject_type == 'SUBJECT_TYPE_ENTERPRISE') {
            if (wechartJson[0].is_organization) {
                organization_code_certificate.style.display = 'block';
            } else {
                organization_code_certificate.style.display = 'none';
            }
        }

        if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS') {
            if (wechartJson[0].is_organization_dang) {
                organization_code_certificate.style.display = 'block';
            } else {
                organization_code_certificate.style.display = 'none';
            }
        }

        if (subject_type == 'SUBJECT_TYPE_OTHERS') {
            if (wechartJson[0].is_organization_gongyi) {
                organization_code_certificate.style.display = 'block';
            } else {
                organization_code_certificate.style.display = 'none';
            }
        }
        if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL') {
            organization_code_certificate.style.display = 'none';
        }

        this.publicImgUupData('zuzhijigou_matation_form', data);

    }

    // 组织机构生成的方法--组织机构代码
    this.input_box_organization = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        var iOne = document.createElement('i');
        div.className = 'application_list_one_ul_li_div';
        div.setAttribute('id','organization_code_certificate')
        label.className = "lable_left";
        p.className = "text-errors";
        iOne.className = 'wildcard';
        iOne.innerHTML = '*';
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.type = 'text';
        input.className = "input_public";
        div.appendChild(iOne);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);


        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '40px';
            iOne.style.display = 'none';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
            div.style.paddingLeft = '40px';
        }

        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                p.style.display = 'none';
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }

            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            p.style.display = 'none';
        }
    }

    // 组织机构有效期限开始时间
    this.org_period_begin = function (data, componentNextPro) {
        var div = document.createElement("div");
        var dom = null;
        if (subject_boolean) {
            dom = '';
        } else {
            dom = "<i class='wildcards'>*</i>"
        }
        div.className = 'application_list_one_ul_li_divs';
        var str = dom +
            "<label class='lable_lefts_time'>有效期限</label>" +
            "<div class='col-sm-6 col-sm_time'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id='datetimepicker1'>" +
            "<input type='text' id='datetimepicker1_input' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<i class='col-sm_time_i'>至</i>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker1').datetimepicker({
            // fontAwesome:'font-awesome',
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')

        });
        var input = div.getElementsByTagName('input')[0];
        if (data.value) {
            input.value = data.value;
        }

        input.onblur = function () {
            var text_errors_timeone = document.getElementById('text_errors_timeone');
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            text_errors_timeone.style.display = 'none';
        }

        if (subject_boolean) {
            $('#datetimepicker1_input').disabled = true;
            $('#datetimepicker1_input').border = 'none';
            document.getElementById('datetimepicker1_input').style.cssText = "background:#ffffff;border:1px solid transparent";
        }

    }

    // 组织机构有效期限结束时间
    this.org_period_end = function (data, componentNextPro) {
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<div class='col-sm-6'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id='datetimepicker2'>" +
            "<input type='text' class='form-control' id='datetimepicker2_input_jieshu'  />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker2').datetimepicker({
            // fontAwesome:'font-awesome',
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        var p = document.createElement('p');
        p.setAttribute('id', 'text_errors_timeone');
        p.className = "text-errors_timeone";
        organization_code_certificate.appendChild(p);
        var p = document.createElement('p');
        p.setAttribute('id', 'text_errors_timetwo');
        p.className = "text-errors_timetwo";
        organization_code_certificate.appendChild(p);
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            data.value = input.value ? input.value : "";

            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }

            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            //   p.style.display = 'none';
            p.innerHTML = '';
        }

        if (subject_boolean) {
            $('#datetimepicker2_input_jieshu').disabled = true;
            $('#datetimepicker2_input_jieshu').border = 'none';
            document.getElementById('datetimepicker2_input_jieshu').style.cssText = "background:#ffffff;border:1px solid transparent";
        }
    }



    // 证件类型 身份证还是其他类型的通行证（港澳台护照）
    this.id_doc_type = function (data) {
        var div = document.createElement("div"); // 这个是选择证件的类型 public_hrs
        div.setAttribute('id', 'form-item_shenfenzheng');
        div.className = 'form-item_shenfenzheng';
        var divs = document.createElement("div");
        divs.setAttribute('id', 'form_item_shenfenzhengbottom'); // 身份证
        divs.setAttribute('class', 'clear_float');
        var divTwo = document.createElement('div');
        divTwo.setAttribute('id', 'form_item_shenfenzhengbottomTwo'); // 护照类
        divTwo.setAttribute('class', 'clear_float');

        if (data.value) {
            data.value = data.value;
        } else {
            data.value = 'IDENTIFICATION_TYPE_IDCARD';
            data.data_value_type = '中国大陆居民--身份证';
        }

        if (wechartJson[0].is_ID_or_passport) {
            divs.style.display = "block"; // 身份证
            divTwo.style.display = "none";
        } else {
            divs.style.display = "none";
            divTwo.style.display = "block";
        }

        var names = document.getElementById('getihu_farendaibiao');

        div.innerHTML += this.createTitleTops('法定代表人/个体户经营者证件', '请上传法人\'' + str + '\'的身份证/护照');
        var str = null;

        var arr = [{
                name: '中国大陆居民--身份证',
                type: 'IDENTIFICATION_TYPE_IDCARD',
                types: 'radio_id_doc_type'
            }, {
                name: '中国香港居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT',
                types: 'radio_id_doc_type'
            }, {
                name: '中国澳门居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_MACAO_PASSPORT',
                types: 'radio_id_doc_type'
            },
            {
                name: '中国台湾居民--来往大陆通行证',
                type: 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT',
                types: 'radio_id_doc_type'
            }, {
                name: '其他国家或地区居民--护照',
                type: 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT',
                types: 'radio_id_doc_type'
            }
        ];



        this.three_syndromes_component(data, "证件类型", arr, div, function (value, index) {
            var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
            var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo');

            data.value = value;
            data.data_value_type = arr[index].name;
            if (value == "IDENTIFICATION_TYPE_IDCARD") {
                //身份证照显示
                //证件照隐藏
                form_item_shenfenzhengbottom.style.display = "block";
                form_item_shenfenzhengbottomTwo.style.display = "none";
                wechartJson[0].is_ID_or_passport = true;

            } else {
                //身份证照隐藏
                //证件照显示
                form_item_shenfenzhengbottom.style.display = "none";
                form_item_shenfenzhengbottomTwo.style.display = "block";
                wechartJson[0].is_ID_or_passport = false;
            }

        });
        var subject_information = document.getElementById('subject_information');
        subject_information.appendChild(div);
        //   application_list_one.appendChild(div);
        subject_information.appendChild(divs);
        subject_information.appendChild(divTwo);

        var form_item_shenfenzheng = document.getElementById('form-item_shenfenzheng');
        var form_item_shenfenzheng_ul = form_item_shenfenzheng.getElementsByTagName('ul')[0];
        var form_item_shenfenzheng_input = form_item_shenfenzheng_ul.getElementsByTagName('input');
        var divParent_matation_form = document.getElementById('divParent_matation_form');

        if (subject_type == 'SUBJECT_TYPE_ENTERPRISE' || subject_type == 'SUBJECT_TYPE_INDIVIDUAL') {
            if (names.value) {
                str = names.value;
                $('#updata_legal_person').text('请上传法人\"' + str + '\"的身份证/护照');
            } else {
                $('#updata_legal_person').text('请上传法人的身份证/护照');
            }
        }

        if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS') {
            if ($('#dengji_faren_xingming').val().trim()) {
                str = $('#dengji_faren_xingming').val();
                $('#updata_legal_person').text('请上传法人\"' + str + '\"的身份证/护照');
            } else {
                $('#updata_legal_person').text('请上传法人的身份证/护照');
            }
        }


        if (subject_boolean == false) { // 不是预览状态；
            if (data.value == 'IDENTIFICATION_TYPE_IDCARD') {
                form_item_shenfenzheng_input[0].checked = true;
            }

            if (data.value == 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT') {
                form_item_shenfenzheng_input[1].checked = true;
            }
            if (data.value == 'IDENTIFICATION_TYPE_MACAO_PASSPORT') {
                form_item_shenfenzheng_input[2].checked = true;
            }
            if (data.value == 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT') {
                form_item_shenfenzheng_input[3].checked = true;
            }
            if (data.value == 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT') {
                form_item_shenfenzheng_input[4].checked = true;
            }

        } else {
            var matation_form_is_shouyiren = document.getElementById('form-item_shenfenzheng');
            var ul = matation_form_is_shouyiren.getElementsByTagName('ul')[0];
            //   console.log(ul)
            var div = ul.children[2];
            var datas = data.data_value_type;
            div.innerHTML = '&nbsp;&nbsp;&nbsp;' + datas;
            ul.style.paddingLeft = '40px';
            ul.children[1].style.width = '148px';
            ul.children[2].innerHTML = data.data_value_type;
            ul.style.marginTop = '8px';
        }





    }

    // 身份证人像面照片
    this.id_card_copy = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证人像面照片', '请填写身份证人像面照片', 'shenfenzhengzhaopianzhengmian', '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）');
        var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
        form_item_shenfenzhengbottom.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianzhengmian', data);
        if (subject_boolean) {
            document.getElementById('shenfenzhengzhaopianzhengmian').style.paddingLeft = '40px';

        }
    }


    // 身份证国徽面照片
    this.id_card_national = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证国徽面照片', '请填写身份证国徽面照片', 'shenfenzhengzhaopianfanmian', '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）');
        var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
        form_item_shenfenzhengbottom.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianfanmian', data);
        if (subject_boolean) {

            document.getElementById('shenfenzhengzhaopianfanmian').style.paddingLeft = '40px';

        }
    }



    // 身份证姓名和身份证号码生成dom方法  id_card_name_And_number
    this.id_card_name_And_number = function (data, componentNextPro) {
        var dom = 'form_item_shenfenzhengbottom';
        this.input_box_id_card(data, dom, componentNextPro);
    }





    //证件号码和证件持有人姓名
    this.id_doc_name_and_name = function (data) {
        var dom = 'form_item_shenfenzhengbottomTwo';
        this.input_box_id_card(data, dom);
    }


    // 身份证开始有效期限
    this.card_period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, "datetimepicker3", "form_item_shenfenzhengbottom", "证件有效期", "text_errors_timethree");
    }

    // 身份证结束有效期限
    this.card_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, "datetimepicker4", "form_item_shenfenzhengbottom", "text_errors_timethree");

    }


    //经营者/法人是否为受益人
    this.owner = function (data, componentNextPro) {
        var dom = document.getElementById('subject_information');
        var arr = [{
            name: '是',
            type: true,
            types: 'radio_checked'
        }, {
            name: '否，非法定代表人/个体户经营者',
            type: false,
            types: 'radio_checked'
        }];


        if (data.value === null || data.value === '') {
            data.value = true; // 默认值
            wechartJson[0].is_beneficiary = true;
        }
        if (data.value) {
            wechartJson[0].is_beneficiary = true;
        } else {
            wechartJson[0].is_beneficiary = false;
        }

        this.three_syndromes_components(data, "是否为受益所有人", arr, dom, function (value) {
            data.value = value; // 赋值给经营者/法人是否为受益人这个数据
            var divParent = document.getElementById('divParent_matation_form');
            var divChildrenThree = document.getElementById('divChildrenThree');
            var divChildrenFour = document.getElementById('divChildrenFour');
            if (data.value == true) {
                divParent.style.display = 'none';
                divChildrenThree.style.display = 'none';
                divChildrenFour.style.display = 'none';
                wechartJson[0].is_beneficiary = true;
            } else {
                divParent.style.display = 'block';
                divChildrenThree.style.display = 'block';
                divChildrenFour.style.display = 'block';
                wechartJson[0].is_beneficiary = false;
            }
            //  console.log('选中是否是受益人', data.value); public_hrs
            //  console.log('选中受益人信息上面的第一个赋值', wechartJson[0].is_beneficiary);  public_hrs
        }, 'matation_form_is_shouyiren');

        var matation_form_is_shouyiren = document.getElementById('matation_form_is_shouyiren');
        var matation_form_is_shouyiren_input = matation_form_is_shouyiren.getElementsByTagName('input');
        //  console.log('是否是受益人', data.value);
        //  console.log('受益人信息上面的第一个赋值', wechartJson[0].is_beneficiary);
        if (data.value) { // 判断那个input是被选中的；
            matation_form_is_shouyiren_input[0].checked = true;
        } else {
            matation_form_is_shouyiren_input[1].checked = true;
        }


        if (subject_boolean) {
            var matation_form_is_shouyiren = document.getElementById('matation_form_is_shouyiren');
            var div = matation_form_is_shouyiren.children[2];

            if (data.value) {
                div.innerHTML = '是';
            } else {
                div.innerHTML = '否，非法定代表人/个体户经营者';
            }
            matation_form_is_shouyiren.style.paddingLeft = '40px';
            div.style.paddingLeft = '150px';
        }

    }



    // 其他类型证件证件照片
    this.id_doc_copy = function (data, componentNextPro) {
        var str = this.createTitleTopAndImg(data, '证件照片', '请填写证件照片', 'qitazhengjianzhaopian', '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）');
        var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo');
        form_item_shenfenzhengbottomTwo.appendChild(str);
        this.publicImgUupData('qitazhengjianzhaopian', data);
    }


    // 生成其他证件的开始时间方法
    this.doc_period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, 'datetimepicker5', "form_item_shenfenzhengbottomTwo", "证件有效期", "text_errors_timefour");
    }

    // 生成其他证件结束时间的方法
    this.doc_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, 'datetimepicker6', "form_item_shenfenzhengbottomTwo", "text_errors_timefour")
    }



    // 生成受益人信息
    this.id_type = function (data) {
        var str = this.createTitleTopTwo("受益人信息");
        var divParent = document.createElement('div');
        var divChildrenOne = document.createElement('div'); // 证件类型 身份证或护照类
        var divChildrenTwo = document.createElement('div'); // 证件类型信息
        var divChildrenThree = document.createElement('div'); // 受益人日期组件
        var divChildrenFour = document.createElement('div'); // hr线
        var divPrev = document.createElement('div'); // 保存 返回按钮
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_one'); // 保存 返回按钮
        divPrev.innerHTML += this.prev_next();

        divParent.setAttribute('id', 'divParent_matation_form');
        divChildrenOne.setAttribute('id', 'divChildrenOne');
        divChildrenTwo.setAttribute('id', 'divChildrenTwo');
        divChildrenThree.setAttribute('id', 'divChildrenThree');
        divChildrenFour.setAttribute('id', 'divChildrenFour');
        var subject_information=document.getElementById('subject_information');
        subject_information.appendChild(divParent);
        divParent.appendChild(divChildrenOne);
        divParent.appendChild(divChildrenTwo);
        subject_information.appendChild(divChildrenThree);
        subject_information.appendChild(divChildrenFour);

        subject_information.appendChild(divPrev);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        divChildrenFour.appendChild(div_hr);
       // div_hr.style.height='10px';

        divChildrenOne.innerHTML += str;


        if (wechartJson[0].is_beneficiary) { // 默认隐藏
            divParent.style.display = 'none';
            divChildrenThree.style.display = 'none';
            divChildrenFour.style.display = 'none';
        } else {
            divParent.style.display = 'block';
            divChildrenThree.style.display = 'block';
            divChildrenFour.style.display = 'block';
        }


        var arr = [{
                name: '中国大陆居民--身份证',
                type: 'IDENTIFICATION_TYPE_IDCARD'
            }, {
                name: '中国香港居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT'
            }, {
                name: '中国澳门居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_MACAO_PASSPORT'
            },
            {
                name: '中国台湾居民--来往大陆通行证',
                type: 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT'
            }, {
                name: '其他国家或地区居民--护照',
                type: 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT'
            }
        ];

        if (!data.value) {
            data.value = 'IDENTIFICATION_TYPE_IDCARD'; // 默认是身份证;
            data.data_value_type = '中国大陆居民--身份证';
        } else {
            data.value = data.value;
        }


        this.three_syndromes_component(data, "证件类型", arr, divChildrenOne, function (values, index) {
            data.value = values; // 赋值给经营者/法人是否为受益人这个数据
            var shenfenzhengzhaopianzhengmian_one = document.getElementById('shenfenzhengzhaopianzhengmian_one');
            var shenfenzhengzhaopianfanmian_one = document.getElementById('shenfenzhengzhaopianfanmian_one');
            var qitazhengjianzhaopian_one = document.getElementById('qitazhengjianzhaopian_one');
            shenfenzhengzhaopianzhengmian_one.style.display = "block";
            shenfenzhengzhaopianfanmian_one.style.display = "block";
            qitazhengjianzhaopian_one.style.display = "none";
            data.data_value_type = arr[index].name;
            if (values == "IDENTIFICATION_TYPE_IDCARD") {
                //身份证照显示
                //证件照隐藏
                shenfenzhengzhaopianzhengmian_one.style.display = "block";
                shenfenzhengzhaopianfanmian_one.style.display = "block";
                qitazhengjianzhaopian_one.style.display = "none";
                wechartJson[0].is_beneficiary_pic = true; // 身份证照片显示

            } else {
                //身份证照隐藏
                //证件照显示
                shenfenzhengzhaopianzhengmian_one.style.display = "none";
                shenfenzhengzhaopianfanmian_one.style.display = "none";
                qitazhengjianzhaopian_one.style.display = "block";
                wechartJson[0].is_beneficiary_pic = false; // 护照照片显示
            }

        });


        var divChildrenOne_ul = divChildrenOne.getElementsByTagName('ul')[0];
        var divChildrenOne_input = divChildrenOne_ul.getElementsByTagName('input');

        if (subject_boolean == false) { // 受益人相关的证件类型 就是被选择
            if (data.value == 'IDENTIFICATION_TYPE_IDCARD') {
                divChildrenOne_input[0].checked = true;

            }

            if (data.value == 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT') {
                divChildrenOne_input[1].checked = true;

            }
            if (data.value == 'IDENTIFICATION_TYPE_MACAO_PASSPORT') {
                divChildrenOne_input[2].checked = true;

            }
            if (data.value == 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT') {
                divChildrenOne_input[3].checked = true;

            }
            if (data.value == 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT') {
                divChildrenOne_input[4].checked = true;

            }
            divPrev.style.display = 'block';
        } else {
            // document.getElementById('shenfenzhengzhaopianzhengmian_one').style.paddingLeft='40px';
            // document.getElementById('shenfenzhengzhaopianfanmian_one').style.paddingLeft='40px';
            // document.getElementById('qitazhengjianzhaopian_one').style.paddingLeft='40px';
            divChildrenOne_ul.style.paddingLeft = '40px';
            divChildrenOne_ul.children[1].style.width = '148px';
            divChildrenOne_ul.children[2].innerHTML = data.data_value_type;
            divChildrenThree.style.paddingBottom='35px';
            $('#divChildrenOne .form-item_children').css('marginBottom','8px');   // 
           // div_hr.style.display='none';
        //    console.log(wechartJson[0].is_beneficiary)
        //    if(wechartJson[0].is_beneficiary){
        //       div_hr.style.display='none';
        //    }
        }



        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        li[0].setAttribute('id', 'matation_form_div_pren_li_one');

        var _this = this;
        li[0].onclick = function () {
            subject_boolean = false;
            subject_back = false;
            verification_one();
            window.history.back();
        }
        li[2].onclick = function () {
            subject_back = true;
            verification_one();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_two').show();
        }

        //////////////////////////////////////
        if (subject_boolean == true) {
            divPrev.style.display = 'none';
            div_hr.style.display = 'none';
        }


    }


    // 是否是受益人中的身份证正面照片
    this.id_card_copys = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证人像面照片', '请填写身份证人像面照片', 'shenfenzhengzhaopianzhengmian_one', "");
        // console.log(str);
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianzhengmian_one', data);
        var shenfenzhengzhaopianzhengmian_one = document.getElementById('shenfenzhengzhaopianzhengmian_one');
        // console.log('is_beneficiary_pic', wechartJson[0].is_beneficiary_pic)
        if (wechartJson[0].is_beneficiary_pic == false) {
            shenfenzhengzhaopianzhengmian_one.style.display = 'none';
        } else {
            shenfenzhengzhaopianzhengmian_one.style.display = 'block';
        }
        if (subject_boolean) {
            shenfenzhengzhaopianzhengmian_one.style.paddingLeft = '40px';
        }
    }


    // 是否是受益人中的身份证反面照片
    this.id_card_nationals = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证国徽面照片', '请上传身份证国徽面照片', 'shenfenzhengzhaopianfanmian_one', "");
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianfanmian_one', data);
        var shenfenzhengzhaopianfanmian_one = document.getElementById('shenfenzhengzhaopianfanmian_one');
        // console.log('is_beneficiary_pic', wechartJson[0].is_beneficiary_pic)
        if (wechartJson[0].is_beneficiary_pic == false) {
            shenfenzhengzhaopianfanmian_one.style.display = 'none';
        } else {
            shenfenzhengzhaopianfanmian_one.style.display = 'block';
        }
        if (subject_boolean) {
            shenfenzhengzhaopianfanmian_one.style.paddingLeft = '40px';
        }
    }

    // 是否是受益人中的证件照片
    this.id_doc_copys = function (data) {
        var str = this.createTitleTopAndImg(data, '证件照片', '请填写证件照片', 'qitazhengjianzhaopian_one', '');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('qitazhengjianzhaopian_one', data);
        var qitazhengjianzhaopian_one = document.getElementById('qitazhengjianzhaopian_one');
        qitazhengjianzhaopian_one.style.display = "none";
        // console.log('is_beneficiary_pic', wechartJson[0].is_beneficiary_pic)
        if (wechartJson[0].is_beneficiary_pic) {
            qitazhengjianzhaopian_one.style.display = 'none';
        } else {
            qitazhengjianzhaopian_one.style.display = 'block';
        }
        if (subject_boolean) {
            qitazhengjianzhaopian_one.style.paddingLeft = '40px';
        }
    }

    // 是否是受益人姓名
    this.name = function (data) {
        var dom = 'divChildrenTwo';
        this.input_box_id_card(data, dom);
    }
    // 是否是受益人证件号码
    this.id_number = function (data) {
        var dom = 'divChildrenTwo';
        this.input_box_id_card(data, dom);
    }

    // 是否是受益人证件开始的时间
    this.id_period_begin = function (data, componentNextPro) {
        // this.validity_start_time(data, componentNextPro, "datetimepicker7", "divChildrenTwo", "证件有效期限", "text_errors_timefive");

        //  var idChildrens = idChildren + '_input';
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = 
        "<i class='wildcards'>*</i>"+
        "<label class='lable_lefts_time'>证件有效期限 </label>" +
            "<div class='col-sm-6 col-sm_time'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id= datetimepicker7>" +
            "<input type='text' id=datetimepicker7_input class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<i class='col-sm_time_i'>至</i>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('divChildrenThree');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker7').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        if (subject_boolean == true) {
            // console.log(input);
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '40px';
        } else {
            div.style.paddingLeft = '40px';
        }
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            var text_errors_timeone = document.getElementById('text_errors_timefive');
            data.value = input.value ? input.value : "";
            var a = data.verification_method();

            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
                input.setAttribute('isnext', 'nextStep');
            } else {
                text_errors_timeone.style.display = 'none';
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                }
            }

            if (componentNextPro) {

                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            text_errors_timeone.style.display = 'none';
        }



    }


    // 是否是收益人证件结束的时间
    this.id_period_end = function (data, componentNextPro) {
        // this.validity_end_time(data, componentNextPro, 'datetimepicker8', "divChildrenTwo", "text_errors_timefive");
        // var idChildrens = 'datetimepicker8' + '_input'
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<div class='col-sm-6'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id='datetimepicker8'>" +
            "<input type='text' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('divChildrenThree');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker8').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        var p1 = document.createElement('p');
        p1.setAttribute('id', 'text_errors_timefive');
        p1.className = "text-errors_timeone";
        organization_code_certificate.appendChild(p1);
        var p2 = document.createElement('p');
        p2.className = "text-errors_timetwo";
        organization_code_certificate.appendChild(p2);
        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
        }
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                p2.style.display = 'block';
                p2.innerHTML = a;
                input.setAttribute('isnext', 'nextStep');
            } else {
                p2.innerHTML = '';
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                }
            }
            if (componentNextPro) {
                componentNextPro(data);

            }
        }
        input.onfocus = function () {
            //  p2.style.display = 'none';
            p2.innerHTML = '';
        }
    }

    // 经营信息 商户简称
    this.merchant_shortname = function (data, componentNextPro) {
        var div = document.createElement("div");
        var img = document.createElement('img');
        var imgs = document.createElement('img');
        var is = document.createElement('i');
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        var div_scenario = document.createElement('div');
        div_scenario.setAttribute('id','business_scenario_types_of');
        application_list_one.appendChild(div_scenario);
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        p.style.cssText = 'left:-7px;top:44px;transform:rotate(45deg);border:1px solid #eee';
        var divImg = document.createElement("div");
        div.setAttribute('id', 'matation_form-item_shenfenzhengTwo');
        var scenario_information=document.getElementById('business_scenario_types_of');
        scenario_information.appendChild(div);
        div.innerHTML += this.matation_title('经营信息');

        var dom = 'matation_form-item_shenfenzhengTwo';
        this.input_box_id_card(data, dom);
        is.setAttribute('class', 'ico-msg-s');
        img.src = './img/zhifu_jingyingxinxi.png';
        div.appendChild(divImg);
        divImg.appendChild(img);
        // divImg.appendChild(imgs);
        divImg.appendChild(p);
        divImg.appendChild(pTwo);
        div.appendChild(is);
        divImg.setAttribute('class', 'matation_jingying_img');
        divImg.style.display = 'none';
        var divText = document.createElement('div');
        divText.innerHTML = '① 不支持单纯以人名来命名，若为个体户经营，可用“个体户+经营者名称”或“经营者名称+业务”命名，如“个体户张三”或“张三餐饮店”；<br>② 不支持无实际意义的文案，如“XX特约商户”、“800”、“XX客服电话XXX”；'
        divText.setAttribute('class', 'tips-info');
        div.appendChild(divText);
        is.onmousemove = function () {
            //  console.log(this)
            divImg.style.display = 'block'
        }
        is.onmouseout = function () {
            divImg.style.display = 'none';
        }
        if(subject_boolean){
            div_scenario.className='active';
            div_scenario.style.paddingBottom='60px';
            $('#matation_form-item_shenfenzhengTwo .application_list_one_ul_li_div').css('marginTop','30px');  // 经营信息 商户简称
        }
    }

    // 经营信息 客服电话
    this.service_phone = function (data, componentNextPro) {
        var div = document.createElement("div");
        var img = document.createElement('img');
        var imgs = document.createElement('img');
        var is = document.createElement('i');
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        p.style.cssText = 'left:-7px;top:44px;transform:rotate(45deg);border:1px solid #eee';
        var divImg = document.createElement("div");
        div.setAttribute('id', 'matation_form-item_shenfenzhengThree');
        var scenario_information=document.getElementById('business_scenario_types_of');
        scenario_information.appendChild(div);
        var dom = 'matation_form-item_shenfenzhengThree';
        this.input_box_id_card(data, dom);
        is.setAttribute('class', 'ico-msg-s');
        img.src = './img/trans_record.png';
        div.appendChild(divImg);
        divImg.appendChild(img);
        // divImg.appendChild(imgs);
        divImg.appendChild(p);
        divImg.appendChild(pTwo);
        div.appendChild(is);
        divImg.setAttribute('class', 'matation_jingying_img');
        divImg.style.display = 'none';
        var divText = document.createElement('div');
        divText.innerHTML = '1、请填写真实有效的客服电话，将在交易记录中向买家展示，提供咨询服务 <br>2、请确保电话畅通，以便入驻后平台回拨确认。'
        divText.setAttribute('class', 'tips-info');
        div.appendChild(divText);
        is.onmousemove = function () {
            divImg.style.display = 'block'
        }
        is.onmouseout = function () {
            divImg.style.display = 'none';
        }


    }

    // 经营信息 经营场景
    this.sales_scenes_type = function (data) {

        var divone = document.createElement('div');
        divone.setAttribute('id', 'matation_form-item_shenfenzhengfour') // 经营场景多选框
        var scenario_information=document.getElementById('business_scenario_types_of');
        scenario_information.appendChild(divone);
        var divTwo = document.createElement('div');
        divTwo.setAttribute('id', 'matation_form_item_checkbox_jingying_parent') // 接收选中经营场景的信息的div
        scenario_information.appendChild(divTwo);

        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_two'); // 这个是保存 下一步按钮；
        divPrev.innerHTML += this.prev_next();
        // <div class="public_hrs"></div>
        var divHrs = document.createElement('div');
        divHrs.className = 'public_hrs';
        divHrs.setAttribute('id', 'matation_form_div_pren_two_hrs');

        scenario_information.appendChild(divHrs);
        scenario_information.appendChild(divPrev);
        if (subject_type) {
            $('#matation_form_div_pren_two_hrs').hide();
        }
        var divxianxia = document.createElement('div');
        divxianxia.setAttribute('id', "matation_form_item_xianxia"); // 线下场所 
        divTwo.appendChild(divxianxia);

        var div_official_account = document.createElement('div');
        div_official_account.setAttribute('id', "matation_form_item_div_official_account"); // 公众号
        divTwo.appendChild(div_official_account);

        var div_applets_scene = document.createElement('div');
        div_applets_scene.setAttribute('id', "div_applets_scene"); // 小程序
        divTwo.appendChild(div_applets_scene);

        var div_app_scence = document.createElement('div');
        div_app_scence.setAttribute('id', "div_app_scence"); // app
        divTwo.appendChild(div_app_scence);

        var div_pc_scence = document.createElement('div');
        div_pc_scence.setAttribute('id', "div_pc_scence"); // pc
        divTwo.appendChild(div_pc_scence);

        var div_enterprise_wechat = document.createElement('div');
        div_enterprise_wechat.setAttribute('id', "div_enterprise_wechat"); // 企业微信
        divTwo.appendChild(div_enterprise_wechat);

        var arr = [{
                name: '线下场所',
                type: 'SALES_SCENES_STORE'
            }, {
                name: '公众号',
                type: 'SALES_SCENES_MP'
            }, {
                name: '小程序',
                type: 'SALES_SCENES_MINI_PROGRAM'
            },
            {
                name: 'APP',
                type: 'SALES_SCENES_APP'
            },
            {
                name: 'PC网站',
                type: 'SALES_SCENES_WEB'
            },
            {
                name: '企业微信',
                type: 'SALES_SCENES_WEWORK'
            }
        ];

        var arrType = ['SALES_SCENES_STORE', 'SALES_SCENES_MP', 'SALES_SCENES_MINI_PROGRAM', 'SALES_SCENES_APP', 'SALES_SCENES_WEB', 'SALES_SCENES_WEWORK'];
        var arrText = ['线下场所', '公众号', '小程序', 'APP', 'PC网站', '企业微信']

        divxianxia.style.display = 'none';
        div_official_account.style.display = 'none';
        div_applets_scene.style.display = 'none';
        div_app_scence.style.display = 'none';
        div_pc_scence.style.display = 'none';
        div_enterprise_wechat.style.display = 'none';
        var arrDom = [];
        arrDom.push(divxianxia);
        arrDom.push(div_official_account);
        arrDom.push(div_applets_scene);
        arrDom.push(div_app_scence);
        arrDom.push(div_pc_scence);
        arrDom.push(div_enterprise_wechat);
        var str_xianxia = '线下场所';
        var str_gongzhonghao = '公众号';
        var str_xiaochengxu = '小程序';
        var str_app = 'APP';
        var str_pc = 'PC网站';
        var str_weixin = '企业微信';

        if (wechartJson[0].business_scenario[0]) { // 代表里面有值，不为空；
            //console.log(wechartJson[0].business_scenario);
            for (var i = 0; i < wechartJson[0].business_scenario.length; i++) {
                if (wechartJson[0].business_scenario.indexOf(str_xianxia) != -1) {
                    //  console.log('线下场所有')
                    divxianxia.style.display = 'block';
                } else {
                    divxianxia.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_gongzhonghao) != -1) {
                    // console.log('公众号有')
                    div_official_account.style.display = 'block';
                } else {
                    div_official_account.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_xiaochengxu) != -1) {
                    // console.log('小程序有')
                    div_applets_scene.style.display = 'block';
                } else {
                    div_applets_scene.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_app) != -1) {
                    // console.log('APP有')
                    div_app_scence.style.display = 'block';
                } else {
                    div_app_scence.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_pc) != -1) {
                    //  console.log('PC端有')
                    div_pc_scence.style.display = 'block';
                } else {
                    div_pc_scence.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_weixin) != -1) {
                    //  console.log('企业微信有')
                    div_enterprise_wechat.style.display = 'block';
                } else {
                    div_enterprise_wechat.style.display = 'none';
                }
            }
            $('#matation_form_div_pren_two_hrs').hide();
        }

        var array = [];
        var array_text = [];
        array = data.value ? data.value : [];
        array_text = data.data_value_text ? data.data_value_text : [];
        this.checkbox_public(data, '经营场景', arr, divone, function (values, is_checked, indexs) {
            // console.log(values,is_checked,indexs)
            var arrayDom = [];
            divTwo.innerHTML = '';
            if (is_checked) {
                array.push(values);
                array_text.push(arr[indexs].name);
            } else {
                var index_s = array.indexOf(values);
                var index_text = array_text.indexOf(arr[indexs].name);
                array.splice(index_s, 1);
                array_text.splice(index_text, 1);
            }
            data.data_value_text = array_text;
            data.value = array;
            wechartJson[0].business_scenario = array_text;
            for (var i = 0; i < array.length; i++) {
                var index = arrType.indexOf(array[i]);
                // console.log(index);
                arrayDom.push(arrDom[index]); // arrDom 是里面存放dom 节点的；
            };
            for (var i = 0; i < arrayDom.length; i++) {
                divTwo.appendChild(arrayDom[i]);
                arrayDom[i].style.display = 'block';
            }
            if (array_text[0]) {
                $('#matation_form_div_pren_two_hrs').hide();
            } else {
                $('#matation_form_div_pren_two_hrs').show();
            }


        }, 'matation_form-item_shenfenzhengfour_uls')
        //    matation_form-item_shenfenzhengfour

        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        li[0].setAttribute('id', 'matation_form_div_pren_li_two');
        li[0].onclick = function () {
            subject_boolean = false;
            subject_back = false;
            verification_two(); // 在返回的时候验证，防止下一步的值被修改后，在再验证是否通过，在进行修改；
            SubjectInformation();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_one').show();
        }
        var _this = this;
        li[2].onclick = function () {
            subject_back = true;
            verification_two();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_three').show();
        }

        /////////////////////////////////////
        if (subject_boolean == true) {
            divPrev.style.display = 'none'; //   这个是保存 下一步按钮;
            document.getElementById('matation_form-item_shenfenzhengfour_uls').style.paddingLeft = '0px';
            document.getElementById('matation_form-item_shenfenzhengfour_uls').children[2].innerHTML = data.data_value_text;
            document.getElementById('matation_form-item_shenfenzhengfour_uls').children[1].style.width = '148px';
        }

        if (wechartJson[0].business_scenario[0]) { // 复选框是否选中函数 , 就是那个复选框需要打“ √ ”
            var matation_form_item_shenfenzhengfour = document.getElementById('matation_form-item_shenfenzhengfour');
            var inputs = matation_form_item_shenfenzhengfour.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                var input_sing_prev = inputs[i].nextElementSibling.innerHTML;
                if (wechartJson[0].business_scenario.indexOf(input_sing_prev) != -1) {
                    inputs[i].checked = true;
                }
            }

        }

    }
    /*

       
    */

    // 线下场景 门店名称
    this.biz_store_name = function (data, componentNextPro) {
        var str = this.createSubtitle('你选择了“线下场所”场景，审核通过后将获得“付款码支付”、“JSAPI支付”产品');
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.innerHTML += str;
        this.input_box_id_card(data, 'matation_form_item_xianxia', componentNextPro);
    }

    // 线下场景 省市编号
    this.biz_address_code = function (data, componentNextPro) {


        this.input_box_id_card(data, 'matation_form_item_xianxia', componentNextPro);

    }

    // 线下场景 经营场所地址
    this.biz_store_address = function (data) {
        this.input_box_id_card(data, 'matation_form_item_xianxia');

        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '请填写详细的经营场所信息，如有多个场所，选择一个主要场所填写即可';
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.appendChild(divInnerText);

    }

    // 线下场景 门店门头照片
    this.store_entrance_pic = function (data) {
        var str = this.create_multiple_pictures('经营场所门前照片', '请上传门店照片', '请上传门店照片（要求门店招牌清晰可见），图片需在2M内。若为停车场、售卖机等无固定门头照片 的经营场所，请提供真实的经营现场照片即可', 'mendianmentouzhaopian');
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.appendChild(str);
        this.multiple_pictures('mendianmentouzhaopian', data);
    }

    // 线下场景 店内环境照片
    this.indoor_pic = function (data) {
        var str = this.create_multiple_pictures('经营场所店内环境  照片', '请上传经营场所店内环境照片', '请上传门店内部环境照片，图片需在2M内。若为停车场、售卖机等无固定门头照片的经营场所，请提 供真实的经营现场照片即可', 'mendianneibuzhaopian');
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.appendChild(str);
        this.multiple_pictures('mendianneibuzhaopian', data);
    }

    // 线下场景 对应的公众号AppId  线下场所对应的商家APPID(选填)
    this.biz_sub_appid = function (data) {
        this.input_box_id_card(data, 'matation_form_item_xianxia');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '已认证的服务号或政府媒体类型的订阅号。要求申请主体一致，且公众号需要有内容。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">APPID查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达，支付凭证小程序等业务。';
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_xianxia.appendChild(divInnerText);
        matation_form_item_xianxia.appendChild(div_hr);
        if (subject_boolean) {
            div_hr.style.marginBottom = '-10px';
           // div_hr.style.marginTop = '45px';
        }
    }

    // 公众号 服务商公众号APPID
    this.mp_appid = function (data) {
        var str = this.createSubtitle('你选择了“公众号”场景，审核通过后将获得“JSAPI支付”产品');
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account'); // 公众号场景 id;
        matation_form_item_div_official_account.innerHTML += str;
        var arr = [{
            name: '商家公众号APPID',
            type: true,
            types: 'account'
        }, {
            name: '服务商公众号APPID',
            type: false,
            types: 'account'
        }];
        this.three_syndromes_components(data, "公众号APPID", arr, matation_form_item_div_official_account, function (value) {
            if (value) { // officialInput 商家的input   // serviceInput 服务商的input
                $('#officialAccountAppId').show(); // 商家公众号ID显示
                $('#publicNumberSeller').show();
                $('#serviceProviderAppId').hide();
                $('#publicNumberServer').hide();
                $('#serviceInput').val(''); // 服务商input为空
                $('#officialInput').val(' '); // 商家input设置一个值
                wechartJson[3].subobject[2].subobject[2].subobject[1].value = $('#officialInput').val(); // 商家的的公众号APPID data.value被赋值了,是一个空格；
                data.value = $('#serviceInput').val();
                $('#sellerApp_domP').hide();
                $('#serviceInput').removeAttr('isnext'); // 商家的这个属性移除
            } else {
                $('#serviceProviderAppId').show(); // 服务商公众号ID显示
                $('#publicNumberServer').show();
                $('#officialAccountAppId').hide();
                $('#publicNumberSeller').hide();
                $('#officialInput').val(''); // 商家input为空
                $('#serviceInput').val(' '); // 服务商input设置值
                $('#serverApp_domP').hide();
                $('#officialInput').removeAttr('isnext');
                data.value = $('#serviceInput').val(); // 服务商的input框；
                wechartJson[3].subobject[2].subobject[2].subobject[1].value = $('#officialInput').val(); // 商家的公众号APPID  data.value被赋值了，是一个空值；
            };
        }, 'matation_form_gongzhonghao_appId', 'radioSelectAccount');
        var appId = document.getElementById('matation_form_gongzhonghao_appId'); // ul 值；
        appId.style.paddingLeft = '40px';
        appId.style.marginTop = '20px';
        this.input_box_id_card(data, 'matation_form_item_div_official_account');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('id', 'publicNumberServer');
        divInnerText.className = 'tips-info';
        divInnerText.innerHTML = '1、请根据实际情况填写，你如果是服务商请填写服务商公众号APPID，你如果是商家请填写商家公众号APPID。<br>2、服务商公众号APPID与商家公众号APPID，二选一必填。<br>3、可填写当前服务商商户号已绑定的公众号APPID。';
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account');
        matation_form_item_div_official_account.appendChild(divInnerText);
        if (subject_boolean) {
            appId.style.display = 'none';
            var str = $('#serviceInput').val();
            if (str.replace(/^\s+|\s+$/g, '').length == 0) {
                $('#serviceProviderAppId').hide();
            }
        }

        if (data.value) {
            // console.log('服务商', data.value, data.value.length);
            $('#serviceProviderAppId').show();
            $('#publicNumberServer').show();

        }

        // console.log('服务商', $('#serviceInput').val());
        // console.log('服务商', data.value);

    }

    // 公众号 商家公众号APPID
    this.mp_sub_appid = function (data) {
        this.input_box_id_card(data, 'matation_form_item_div_official_account');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('id', 'publicNumberSeller');
        divInnerText.className = 'tips-info';
        divInnerText.innerHTML = '1、服务商公众号APPID与商家公众号APPID，二选一必填。<br>2、可填写与商家主体一致且已认证的公众号APPID，需是已认证的服务号、政府或媒体类型的订阅号。<br>3、请填写已认证的公众号APPID，需是已认证的服务号、政府或媒体类型的订阅号。要求申请主体一致，且公众号需要有内容。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">查看指引</a>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account');
        matation_form_item_div_official_account.appendChild(divInnerText);
        if (subject_boolean) {
            var str = $('#officialInput').val();
            if (str.replace(/^\s+|\s+$/g, '').length == 0) {
                $('#officialAccountAppId').hide();
                $('#serviceProviderAppId').show(); // 服务商公众号APPID 显示；
            }
        }
        //  console.log('商家',data.value,data.value.length)
        if (data.value) {
            //  console.log('商家',data.value,data.value.length)
            $('#publicNumberSeller').show();
            $('#officialAccountAppId').show();
            $('#serviceProviderAppId').hide();
            $('#publicNumberServer').hide();
        } else {
            $('#publicNumberSeller').hide();
            $('#officialAccountAppId').hide();
            $('#serviceProviderAppId').show();
            $('#publicNumberServer').show();
        }



        var matation_form_gongzhonghao_appId = document.getElementById('matation_form_gongzhonghao_appId');
        var input_chaoji = matation_form_gongzhonghao_appId.getElementsByTagName('input');
        if ($('#serviceInput').val().length > 0) {
            // console.log(input_chaoji[1]);
            input_chaoji[1].checked = true;

        } else {
            // console.log(input_chaoji[0])
            input_chaoji[0].checked = true;

        }
        //  console.log(1791,'商家',$('#officialInput').val().length,data.value.length);     // officialInput
        //  console.log(1792,'服务商',$('#serviceInput').val(),$('#serviceInput').val().length);
        if ($('#serviceInput').val().length == 0 && data.value.length == 0) { // 如果都没有值得时候；
            $('#publicNumberSeller').show();
            $('#officialAccountAppId').show();
            $('#serviceProviderAppId').hide();
            $('#publicNumberServer').hide();
        }


    }

    // 公众号 页面截图(选填)
    this.mp_pics = function (data) {
        var str = this.create_multiple_pictures('公众号页面截图', '请填写公众号页面截图(选填)', '请提供展示商品/服务的页面截图/设计稿（最多5张），若公众号未建设完善或未上线请务必提供，图片需在2M内。', 'gongzhonghao_appid');
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('gongzhonghao_appid', data);
        if (subject_boolean) {
            console.log(div_hr);
            div_hr.style.marginBottom = '-10px';
          // div_hr.style.marginBottom = '60px';
        }
    }

    // 小程序服务商小程序APPID
    this.mini_program_appid = function (data) {
        var str = this.createSubtitle('你选择了“小程序”场景，审核通过后将获得“JSAPI支付”产品');
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.innerHTML += str;
        var arr = [{
                name: '商家小程序APPID',
                type: true,
                types: 'applets'
            },
            {
                name: '服务商小程序APPID',
                type: false,
                types: 'applets'
            }
        ]
        this.three_syndromes_components(data, '小程序APPID', arr, matation_form_item_div_official_account, function (value) {
            // console.log(value)
            if (value) { // 选择商家小程序APPID显示
                $('#officialAppletsAppId').show();
                $('#AppletDescriptionSeller').show();
                $('#serviceAppletsAppId').hide();
                $('#AppletDescriptionServer').hide();
                $('#officialAppletsInput').val(' '); // 设置商家input的值
                $('#serviceAppletsInput').val(''); // 设置服务商input的值   
                data.value = $('#serviceAppletsInput').val();
                wechartJson[3].subobject[2].subobject[3].subobject[1].value = $('#officialAppletsInput').val(); // 商家的小程序APPID  data.value被赋值了，是一个空格值；
                $('#serverApp_AppletsdomP').hide();

            } else { // 服务商小程序显示
                $('#officialAppletsAppId').hide();
                $('#AppletDescriptionSeller').hide();
                $('#serviceAppletsAppId').show();
                $('#AppletDescriptionServer').show();
                $('#officialAppletsInput').val(''); // 设置商家input的值
                $('#serviceAppletsInput').val(' '); // 设置服务商input的值 
                data.value = $('#serviceAppletsInput').val();
                wechartJson[3].subobject[2].subobject[3].subobject[1].value = $('#officialAppletsInput').val(); // 商家的小程序APPID  data.value被赋值了，是一个空格值；
                $('#sellerApp_AppletsdomP').hide();
            }


        }, 'matation_form_xiaochengxus_appId', 'radioSelectApplets');
        var appId = document.getElementById('matation_form_xiaochengxus_appId')
        appId.style.paddingLeft = '40px';
        appId.style.marginTop = '20px';
        this.input_box_id_card(data, 'div_applets_scene');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('id', 'AppletDescriptionServer');
        divInnerText.className = 'tips-info';
        divInnerText.innerHTML = '1、服务商小程序APPID与商家小程序APPID，二选一必填。<br />2、可填写当前服务商商户号已绑定的小程序APPID。';
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.appendChild(divInnerText);
        if (subject_boolean) {
            appId.style.display = 'none';
            var str = $('#serviceAppletsInput').val();
            if (str.replace(/^\s+|\s+$/g, '').length == 0) {
                $('#serviceAppletsAppId').hide(); // 服务商小程序隐藏；
            }
        }
        if (data.value) {
            // 服务商小程序显示
            $('#serviceAppletsAppId').show();
            $('#AppletDescriptionServer').show();
        }
    }

    // 小程序商家小程序APPID
    this.mini_program_sub_appid = function (data) {
        this.input_box_id_card(data, 'div_applets_scene');
        var divInnerText = document.createElement('div');
        divInnerText.className = 'tips-info';
        divInnerText.setAttribute('id', 'AppletDescriptionSeller');
        divInnerText.innerHTML = '1、服务商小程序APPID与商家小程序APPID，二选一必填。<br>2、请填写已认证的小程序APPID。<br>3、请填写已认证的小程序APPID，要求申请主体一致。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.appendChild(divInnerText);
        if (subject_boolean) {
            var str = $('#officialAppletsInput').val();
            if (str.replace(/^\s+|\s+$/g, '').length == 0) {
                $('#officialAppletsAppId').hide();
                $('#serviceAppletsAppId').show(); // 服务商小程序显示；
            } else {
                $('#officialAppletsAppId').show();
                $('#serviceAppletsAppId').hide(); // 服务商小程序显示；
            }
        }
        if (data.value) {
            $('#officialAppletsAppId').show();
            $('#AppletDescriptionSeller').show();
            $('#serviceAppletsAppId').hide();
            $('#AppletDescriptionServer').hide();
        } else {
            $('#officialAppletsAppId').hide();
            $('#AppletDescriptionSeller').hide();
            $('#serviceAppletsAppId').show();
            $('#AppletDescriptionServer').show();
        }

        var matation_form_xiaochengxus_appId = document.getElementById('matation_form_xiaochengxus_appId');
        var input_applet = matation_form_xiaochengxus_appId.getElementsByTagName('input');
        if ($('#serviceAppletsInput').val().length > 0) {
            input_applet[1].checked = true;
        } else {
            input_applet[0].checked = true;
        }

        if ($('#serviceAppletsInput').val().length == 0 && data.value.length == 0) { // 如果都没有值得时候；
            $('#officialAppletsAppId').show();
            $('#AppletDescriptionSeller').show();
            $('#serviceAppletsAppId').hide();
            $('#AppletDescriptionServer').hide();
        }

    }

    // 小程序小程序截图
    this.mini_program_pics = function (data) {
        var str = this.create_multiple_pictures('小程序截图', '请上传小程序截图', '请提供展示商品/服务的页面截图/设计稿（最多5张），若小程序未建设完善或未上线请务必提供。图片需在2M内。', 'xiaochengxu_appid');
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('xiaochengxu_appid', data);
        if (subject_boolean) {
            div_hr.style.marginBottom = '-10px';
          // div_hr.style.marginBottom = '60px';
        }
    }

    // APP场景服务商应用APPID  // div_app_scence
    this.app_appid = function (data) {
        var str = this.createSubtitle('你选择了“APP”场景，审核通过后将获得“APP支付”产品');
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.innerHTML += str;
        var arr = [{
                name: '商家应用APPID',
                type: true,
                types: 'applications'
            },
            {
                name: '服务商应用APPID',
                type: false,
                types: 'applications'
            }
        ];
        this.three_syndromes_components(data, '应用APPID', arr, matation_form_item_div_official_account, function (value) {
            if (value) { // 商家应用APPID显示；
                $('#officialApplicationAppId').show();
                $('#applicationSeller').show();
                $('#serviceApplicationAppId').hide();
                $('#applicationServer').hide();
                $('#officialApplicationInput').val(' '); // 商家
                $('#serviceApplicationInput').val('');
                data.value = $('#serviceApplicationInput').val();
                wechartJson[3].subobject[2].subobject[4].subobject[1].value = $('#officialApplicationInput').val(); // 这个是商家应用APPID的值
                $('#serverApp_ApplicationdomP').hide();
                var serviceApplicationInput = document.getElementById('serviceApplicationInput');
                if (serviceApplicationInput.hasAttribute('isnext')) {
                    $('#serviceApplicationInput').removeAttr('isnext');
                }



            } else { // 服务商应用APPID显示
                $('#officialApplicationAppId').hide();
                $('#applicationSeller').hide();
                $('#serviceApplicationAppId').show();
                $('#applicationServer').show();
                $('#officialApplicationInput').val(''); // 商家
                $('#serviceApplicationInput').val(' ');
                data.value = $('#serviceApplicationInput').val();
                wechartJson[3].subobject[2].subobject[4].subobject[1].value = $('#officialApplicationInput').val(); // // 这个是商家应用APPID的值
                $('#sellerApp_ApplicationdomP').hide();
                var officialApplicationInput = document.getElementById('officialApplicationInput');
                if (officialApplicationInput.hasAttribute('isnext')) {
                    $('#officialApplicationInput').removeAttr('isnext');
                }


            }
        }, 'matation_form_application_appId');
        var appId = document.getElementById('matation_form_application_appId');
        appId.style.paddingLeft = '40px';
        appId.style.marginTop = '20px';
        this.input_box_id_card(data, 'div_app_scence');
        var divInnerText = document.createElement('div');
        divInnerText.className = 'tips-info';
        divInnerText.setAttribute('id', 'applicationServer');
        divInnerText.innerHTML = '1、服务商应用APPID与商家应用APPID，二选一必填。<br>2、可填写当前服务商商户号已绑定的应用APPID。';
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.appendChild(divInnerText);
        if (subject_boolean) {
            appId.style.display = 'none';
            var str = $('#serviceApplicationInput').val();
            if (str.trim().length == 0) {
                $('#serviceApplicationAppId').hide();
            }
        }
        if (data.value) {
            $('#serviceApplicationAppId').show();
            $('#applicationServer').show();

        }
    }

    // APP场景商家应用APPID
    this.app_sub_appid = function (data) {
        this.input_box_id_card(data, 'div_app_scence');
        var divInnerText = document.createElement('div');
        divInnerText.className = 'tips-info';
        divInnerText.setAttribute('id', 'applicationSeller');
        divInnerText.innerHTML = '1、服务商应用APPID与商家应用APPID，二选一必填。<br>2、可填写当前服务商商户号已绑定的应用APPID。<br>3、请填写与商家主体一致且已认证的应用APPID。  <a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">APPID查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.appendChild(divInnerText);
        if (subject_boolean) {
            var str = $('#officialApplicationInput').val();
            if (str.trim().length == 0) {
                $('#officialApplicationAppId').hide();
                $('#serviceApplicationAppId').show();
            }
        }
        if (data.value) { // 商家有值；
            $('#officialApplicationAppId').show();
            $('#applicationSeller').show();
            $('#serviceApplicationAppId').hide();
            $('#applicationServer').hide();
        } else {
            $('#officialApplicationAppId').hide();
            $('#applicationSeller').hide();
            $('#serviceApplicationAppId').show();
            $('#applicationServer').show();
        }

        var matation_form_application_appId = document.getElementById('matation_form_application_appId');
        var input = matation_form_application_appId.getElementsByTagName('input');
        if ($('#serviceApplicationInput').val().length > 0) {
            input[1].checked = true;
        } else {
            input[0].checked = true;
        }

        if ($('#serviceApplicationInput').val().length == 0 && data.value.length == 0) { // 如果都没有值得时候；
            $('#officialApplicationAppId').show();
            $('#applicationSeller').show();
            $('#serviceApplicationAppId').hide();
            $('#applicationServer').hide();
        }
    }

    //  APP场景APP截图
    this.app_pics = function (data) {
        var str = this.create_multiple_pictures('APP截图', '请上传APP截图', '请提供APP首页截图、尾页截图、应用内截图、支付页截图各1张。<a target="_blank" href="http://kf.qq.com/faq/190130aqumuq190130A326Bf.html">查看示例</a>。', 'app_appid');
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('app_appid', data);
        if (subject_boolean) {
            div_hr.style.marginBottom = '-10px';
        }
    }


    // PC 场景 互联网网站域名  // div_pc_scence
    this.domain = function (data) {
        var str = this.createSubtitle('你选择了“PC网站”场景，审核通过后将获得“JSAPI支付”、“Native支付”产品');
        var matation_form_item_div_official_account = document.getElementById('div_pc_scence');
        matation_form_item_div_official_account.innerHTML += str;
        this.input_box_id_card(data, 'div_pc_scence');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '若为网站售卖、智能终端等场景，可填写官网链接（格式需以http://或https://开头）<br>网站域名需ICP备案，若备案主体与申请主体不同，请在下方上传加盖公章的<a href="https://wx.gtimg.com/mch/img/icp.doc"> 网站授权函</a>，需为2M内的图片。';
        var matation_form_item_div_official_account = document.getElementById('div_pc_scence');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // PC 场景 网站授权函 
    this.web_authorisation = function (data) {
        var str = this.createTitleTopAndImg(data, '网站授权函(选填)', '请填写网站授权函(选填)', 'pc_Website_authorization', '若备案主体与申请主体不同，请务必上传加盖公章的网站授权函');
        var form_item_shenfenzhengbottomTwo = document.getElementById('div_pc_scence');
        form_item_shenfenzhengbottomTwo.appendChild(str);
        this.publicImgUupData('pc_Website_authorization', data);
    }
    // pcwangzhanshouquanhan
    // PC 场景 互联网网站对应的商家APPID
    this.web_appid = function (data) {
        this.input_box_id_card(data, 'div_pc_scence');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '请填写已认证的公众号、小程序、应用的APPID，需是已认证的服务号、政府或媒体类型的订阅号。要求申请主体一致，且公众号需要有内容。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">APPID查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_xianxia = document.getElementById('div_pc_scence');
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_xianxia.appendChild(divInnerText);
        matation_form_item_xianxia.appendChild(div_hr);
        if (subject_boolean) {
            div_hr.style.marginBottom = '-10px';
        }
    }

    // 企业微信场景 商家企业微信CorpID
    this.wework_info = function (data) {
        var str = this.createSubtitle('你选择了“企业微信”场景，审核通过后将开通“企业微信专区”，并获得“向员工收款”产品（其他产品可在入驻后根据情况发起申请）');
        var matation_form_item_div_official_account = document.getElementById('div_enterprise_wechat');
        matation_form_item_div_official_account.innerHTML += str;
        this.input_box_id_card(data, 'div_enterprise_wechat');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '可填写与商家主体一致且已认证的企业微信CorpID。 <a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">CorpID查看指引</a><br>完成入驻后，系统发起商户号与该CorpID的绑定';
        var matation_form_item_div_official_account = document.getElementById('div_enterprise_wechat');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // 企业微信页面截图
    this.wework_pics = function (data) {
        var str = this.create_multiple_pictures('企业微信页面截图', '请填写企业微信页面截图', '请提供展示商品/服务的页面截图/设计稿。<a target="_blank" href="http://kf.qq.com/faq/190130aqumuq190130A326Bf.html">查看示例</a>,最多可上传5张照片。', 'qiyeweixin_appid');
        var matation_form_item_div_official_account = document.getElementById('div_enterprise_wechat');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('qiyeweixin_appid', data);
        if (subject_boolean) {
            div_hr.style.marginBottom = '-10px';
        }
    }


    //结算规则 结算规则信息 入驻结算规则ID   
    this.settlement_id = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_settlement_rules');
        var div_rule=document.createElement('div');
        div_rule.setAttribute('id','settlement_rules_account_information');
        
        application_list_one.appendChild(div_rule);
        div_rule.appendChild(div);
        div.innerHTML += this.matation_title('结算规则');
        // var h2 = div.getElementsByTagName('h2')[0];
        // console.log(div);
        // console.log(h2);
        if (subject_boolean) {
            // h2.style.position = 'absolute';
            // h2.style.top = '-22px';
            // div.style.paddingTop = '50px';
        }
        var div_bottom = document.createElement('div');
        var p = document.createElement('p');
        p.innerHTML = '请选择结算规则信息！';
        p.className = 'text-error';
        p.setAttribute('id', 'matation_settlement_rules_p_children');
        p.style.display = 'none';

        div_bottom.setAttribute('class', 'matation_settlement_rules_bottom')
        div_bottom.innerHTML = '请根据实际经营行业选择结算规则，可看 <a href="https://kf.qq.com/faq/190610vmIfei190610AfMzii.html" target="_blank">结算规则指引</a>，若结算规则说明有单笔收款限额，请看 <a href="https://kf.qq.com/faq/201130jyeAFr201130NJVv6z.html" target="_blank">收款限额说明</a>';
        this.rules_lable(data, 'matation_settlement_rules', 'matation_settlement_rules_children');
        this.pay_rule(data, div, 'matation_settlement_rules_children');
        div.appendChild(p);
        div.appendChild(div_bottom);
        if (subject_boolean) {
            document.getElementById('matation_settlement_rules_children').style.marginLeft = '10px';
            div_rule.className='active';
            $('#matation_settlement_rules .application_list_one_ul_li_divs_hangye').css('marginTop','30px')
        }
    }

    //  结算规则方法label和右边部分  也是入驻结算规则ID 和 所属行业 的方法
    this.rules_lable = function (data, dom, dom_children) {
        //  console.log(data)
        var div = document.createElement("div");
        var label = document.createElement("label");
        var iOne = document.createElement('i');
        iOne.innerHTML = '*';
        var p = document.createElement('p');
        var p_rotate = document.createElement('p');
        p_rotate.className = 'rotate_ps';
        if (data.caption == '所属行业') {
            p_rotate.className = 'rotate_p';
        }
        iOne.className = 'wildcard_jingying';
        div.className = 'application_list_one_ul_li_divs_hangye';
        if (subject_boolean) {
            div.style.paddingLeft = '40px';
        } else {
            div.style.paddingLeft = '40px';
        }
        label.className = "lable_left_rule";
        p.className = "text-errors";
        label.innerText = data.caption;
        var divs = document.createElement("div");
        divs.setAttribute('class', 'rule_divs');
        divs.setAttribute('id', dom_children);
        divs.className = "b_public";
        var span = document.createElement('span');
        var i = document.createElement('i');

        divs.appendChild(span);
        divs.appendChild(i);
        span.innerText = '请选择';
        span.style.paddingLeft = '20px';
        div.appendChild(iOne);
        div.appendChild(label);
        div.appendChild(divs);
        divs.appendChild(p_rotate);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
        if (data.data_subjectType == subject_type) {
            if (data.data_value_type) { // 这个是赋值的方法；
                span.innerHTML = data.data_value_type.hangye_range;
                i.innerHTML = data.data_value_type.rate;
                divs.style.height = parseInt(getComputedStyle(span)['height']) + 20 + 'px';
            }
        } else {
            data.value = null;
        }
        // console.log(data.caption,data.value);
        if (subject_boolean) {
            iOne.style.display = 'none';
        }
    }

    // 结算规则所属行业
    this.qualification_type = function (data, componentNextPro) {
        // console.log('所属行业',data);
        var div = document.createElement('div');
        var div_rule=document.getElementById('settlement_rules_account_information');
        div.setAttribute('id', 'matation_qualification_type');
        div_rule.appendChild(div);
        this.rules_lable(data, 'matation_qualification_type', 'matation_qualification_type_children');
        var div_bottom = document.createElement('div');
        this.qualification_type_ul(data); // qualification_type_ul，这个data 一开始进来的时候里面是自然的数据，点击入驻结算规则之后，里面的数据就变成了入驻结算规则下面对应的数组了；
        var p1 = document.createElement('p');
        p1.innerHTML = '请选择所属行业信息！';
        p1.className = 'text-error';
        p1.setAttribute('id', 'matation_qualification_type_children_p_children');
        p1.style.display = 'none';
        div.appendChild(p1);
        div_bottom.setAttribute('class', 'matation_settlement_rules_bottom');
        div_bottom.innerHTML = '1、请提供为“申请商家主体”所属的特殊资质，可授权使用总公司/分公司的特殊资质；<a href="https://kf.qq.com/faq/190610B7baQb190610NN3mQN.html" target="_blank">上传特殊资质指引</a><br>2、请上传2M以内的图片。';
        div.appendChild(div_bottom);
        var p = document.createElement('p');
        p.setAttribute('id', 'matation_qualification_type_p');
        p.className = 'text-errors';
        div.appendChild(p);
        p.style.paddingTop = '10px';
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'categoryList_rules');
        ul.style.display = 'none';
        div.appendChild(ul);

        var matation_qualification_type_children = document.getElementById('matation_qualification_type_children');
        // matation_qualification_type_children
        var span = matation_qualification_type_children.getElementsByTagName('span')[0];
        var i = matation_qualification_type_children.getElementsByTagName('i')[0];
        //console.log("所属行业",data.data_value_type,i)
        //console.log(matation_qualification_type_children);
        if (data.data_subjectType == subject_type) {
            if (data.data_value_type) {
                // console.log(i);
                span.style.display = 'block';
                span.style.fontWeight = 'bold';
                i.style.display = 'block';
                span.style.float = 'none';
                i.style.width = '100%';
                i.style.textAlign = 'left';
                i.style.paddingLeft = '20px';
                span.innerHTML = data.data_value_type.title;
                i.innerHTML = data.data_value_type.require;
                matation_qualification_type_children.style.height = '100%';
                $('#matation_qualification_type_children').click(function () {
                    $('#matation_qualification_type_p').text('数据已经重新渲染请先点击上面的"入驻结算规则ID项"');
                })
            }
        } else {
            data.value = null;
        }
        var ul = div.getElementsByTagName('ul')[0];

        if (subject_boolean) {
            document.getElementById('matation_settlement_rules_children').style.marginLeft = '10px';
            document.getElementById('matation_qualification_type_children').style.marginLeft = '10px';
            span.style.paddingLeft = '0px';
            i.style.paddingLeft = '0px';
        }

    }

    // 结算规则信息方法下面生成的ul;
    this.pay_rule = function (data, dom, dom_children) {
        var arrs = [];
        var arrs_child = [];
        var that = this;
        var ul = document.createElement('ul');
        ul.setAttribute('id', 'categoryList_rule_guize');
        ul.className = 'categoryList_rule'
        var arrs = arr_subject_type[subject_index]; // subject_index 是索引 根据选择的是企业，个体户，党政机关，组织去渲染数据；
        ul.style.display = 'none';
        var div_b_public = document.getElementById(dom_children); // 入住结算规则ID 右边的框；
        for (let j = 0; j < arrs.length; j++) {
            var li = document.createElement('li');
            var span = document.createElement('span');
            var i = document.createElement('i');
            var b = document.createElement('b');
            li.appendChild(b);
            li.appendChild(span);
            li.appendChild(i);
            span.innerText = arrs[j].hangye_range; // 入驻结算规则ID 具体的行业是 比如餐饮等
            i.innerHTML = arrs[j].rate; // 入驻结算规则ID 费率
            ul.appendChild(li);
            li.onclick = function () {
                //   console.log(2403,this)
                //  wechartJson[4].subobject[1].value = null;
                // // console.log(wechartJson[4].subobject[1]);
                // // console.log(wechartJson[4].subobject[1].value);
                data.value = arrs[j].rule_id; // 这里赋值了；     入驻结算规则ID 发送给后端的ID 比如：726
                data.data_value_type = arrs[j]; // 得到了值；
                //  wechartJson[4].subobject[1].value = null;
                //  wechartJson[4].subobject[1].data_value_type = null;
                // console.log('点击后生成的数据入驻规则ID',data);        这个值是入驻规则的值
                // console.log('点击后生成的数据入驻规则ID',data.data_value_type);  这个值是入驻规则下面的值
                data.data_subjectType = subject_type; // 点击入驻结算规则之后把主体类型赋值给这个data的data_subjectType的属性下面，企业，个人，机关，组织
                div_b_public.children[0].innerHTML = this.children[1].innerText;
                div_b_public.children[1].innerHTML = this.children[2].innerText;
                div_b_public.style.height = this.offsetHeight + 'px';
                this.parentNode.style.display = 'none';
                var matation_qualification_type = document.getElementById('matation_qualification_type');
                var div_hangye_children = document.getElementById('matation_qualification_type_children'); // matation_settlement_rules_children
                var ul_children = matation_qualification_type.getElementsByTagName('ul')[0];
                var matation_qualification_type_p = document.getElementById('matation_qualification_type_p');
                matation_qualification_type_p.innerHTML = '请选择所属行业';
                div_hangye_children.children[0].innerHTML = '请选择';
                div_hangye_children.children[1].innerHTML = '';
                div_hangye_children.children[0].style.cssText = 'padding-left: 20px;width: 340px;float: left;';
                div_hangye_children.children[1].style.cssText = 'width: 290px;float: left;';
                div_hangye_children.style.cssText = 'height:45px';
                var h = getComputedStyle(this.children[2])["paddingTop"];
                document.getElementById('matation_settlement_rules_p_children').style.display = 'none';
                ul_children.style.display = 'none';
                if (j == 0) {
                    div_b_public.children[1].style.paddingTop = '28px';
                } else if (j == 5) {
                    div_b_public.children[1].style.paddingTop = '15px';
                } else {
                    div_b_public.children[1].style.paddingTop = '2px';
                }
                for (var n = 0; n < ul.children.length; n++) {
                    ul.children[n].children[0].style.display = 'none';
                }
                div_b_public.style.paddingTop = '16px';
                div_b_public.children[1].style.cssText = 'position: absolute;top:31%';
                this.children[0].style.display = 'block';
                // console.log('arr数组',arrs[j].arr)
                that.qualification_type_ul(arrs[j].arr); // 这个地方是
                if (subject_type == 'SUBJECT_TYPE_ENTERPRISE' && j == 0) {
                    document.getElementById('matation_settlement_rules_children').children[1].style.top = '36%';
                }

            }
        }



        div_b_public.onclick = function () {
            var h = 60 + parseInt(this.offsetHeight);
            ul.style.display = 'block';
            ul.style.top = h + 'px';
        }
        // if(subject_type=='SUBJECT_TYPE_INSTITUTIONS'){
        //      document.getElementById('matation_qualification_type_children').style.height='53px';
        // }
        var h = $('#matation_settlement_rules_children').outerHeight();
        if (subject_boolean == false) {
            dom.appendChild(ul);
        }


        console.log('高度', h);

        if (parseInt(h) == 42 || parseInt(h) == 44) {
            $('#matation_settlement_rules_children').css({
                'height': '53px',
                'paddingTop': '16px'
            });
            $('#matation_settlement_rules_children i').css({
                'top': '31%'
            });
        }

        if (subject_boolean) {
            document.getElementById('matation_settlement_rules_children').children[0].style.cssText = 'padding-right;padding-left:0px';
            document.getElementById('matation_settlement_rules_children').children[1].style.cssText = 'position:absolute;top:35%';
            //   console.log('入驻结算规则ID的右边div高度', h);
            if (h == 44 || h == 86) {
                $('#matation_settlement_rules_children').css({
                    'height': '73px'
                });
            }
        } else {
            document.getElementById('matation_settlement_rules_children').children[1].style.cssText = 'position:absolute;top:35%';
        }


        if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS') { // 党政机关；
            $('#categoryList_rule_guize li i').css({
                'paddingTop': '3px'
            })
        }

    }

    // 结算规则所属行业下的ul框
    this.qualification_type_ul = function (arr) {
        //  // // console.log(wechartJson[4].subobject[1]);
        //   console.log('所属行业', arr);
        if (arr[0]) {
            var matation_qualification_type = document.getElementById('matation_qualification_type');
            var div_hangye_children = document.getElementById('matation_qualification_type_children');
            var ul = matation_qualification_type.getElementsByTagName('ul')[0];
            div_hangye_children.onclick = function () {
                ul.style.display = 'block';
                var h = parseInt(this.offsetHeight);
                ul.style.top = h + 'px';
            }
            ul.innerHTML = '';
            for (let j = 0; j < arr.length; j++) {
                var li = document.createElement('li');
                var span = document.createElement('span');
                var i = document.createElement('i');
                var b = document.createElement('b');
                li.appendChild(b);
                li.appendChild(span);
                li.appendChild(i);
                span.innerText = arr[j].title;
                i.innerHTML = arr[j].require;
                ul.appendChild(li);
                li.onclick = function () {
                    wechartJson[4].subobject[1].data_subjectType = subject_type;
                    wechartJson[4].subobject[1].value = arr[j].title;
                    wechartJson[4].subobject[1].data_value_type = arr[j];
                    wechartJson[4].subobject[1].data_value_type = arr[j];
                    // // console.log(wechartJson[4].subobject[1]);
                    // // console.log(wechartJson[4].subobject[1].value);
                    var matation_qualification_type_p = document.getElementById('matation_qualification_type_p');
                    matation_qualification_type_p.innerHTML = '';
                    ul.style.display = 'block';
                    div_hangye_children.style.height = (this.offsetHeight) + 'px'; // 设置了高度
                    div_hangye_children.children[0].style.display = 'block';
                    div_hangye_children.children[0].style.fontWeight = 'bold';
                    div_hangye_children.children[1].style.float = 'block';
                    div_hangye_children.children[1].style.width = '620px';
                    div_hangye_children.style.paddingRight = '40px';
                    div_hangye_children.style.paddingLeft = '40px';
                    div_hangye_children.style.paddingTop = '15px';
                    div_hangye_children.children[0].style.paddingLeft = '0px';
                    div_hangye_children.children[0].style.float = 'none';
                    div_hangye_children.children[1].style.float = 'none';
                    div_hangye_children.children[0].innerHTML = arr[j].title;
                    div_hangye_children.children[1].innerHTML = arr[j].require;
                    for (var n = 0; n < ul.children.length; n++) {
                        ul.children[n].children[0].style.display = 'none';
                    }
                    this.children[0].style.display = 'block';
                    ul.style.display = 'none';
                }
            }

            var matation_qualification_type_children = document.getElementById('matation_qualification_type_children');
            matation_qualification_type_children.onclick = function () {
                var h = 22 + parseInt(this.offsetHeight);
                ul.style.display = 'block';
                ul.style.top = h + 'px';
            }

            if (subject_boolean) { // 没有进来
                div_hangye_children.style.paddingLeft = '25px';
                div_hangye_children.children[0].style.paddingLeft = '0px';
                div_hangye_children.children[0].style.paddingRight = '20px';
                div_hangye_children.children[1].style.paddingLeft = '0px';
                //   console.log(div_hangye_children.children[0]);
            }


        }
    }

    // 结算规则 特殊资质图片
    this.qualifications = function (data) {
        var str = this.create_multiple_pictures('特殊资质图片', '请上传特殊资质图片', '', 'qualifications_pic');
        var div_rule=document.getElementById('settlement_rules_account_information');
        div_rule.appendChild(str);
        this.multiple_pictures('qualifications_pic', data);
        if (subject_boolean) {
            document.getElementById('qualifications_pic').style.paddingTop = '30px';
        }
    }

    // 结算规则 优惠费率活动ID
    this.activities_id = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'discount_rate_id');
        var div_rule=document.getElementById('settlement_rules_account_information');
        div_rule.appendChild(div);
        this.input_box_id_card(data, 'discount_rate_id');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '优惠费率活动的ID值点击查看<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-8" target="_blank">优惠费率活动对照表</a>下的活动费率ID一栏，如，示例值：20191030111cff5b5e<br>';
        div.appendChild(divInnerText);
    }

    // 结算规则 优惠费率活动值
    this.activities_rate = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'activities_rate_id');
        var div_rule=document.getElementById('settlement_rules_account_information');
        div_rule.appendChild(div);
        this.input_box_id_card(data, 'activities_rate_id');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '优惠费率活动值，服务商自定义填写，需在优惠费率活动ID指定费率0.2~0.6范围内，如，示例值：0.6';
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        div.appendChild(divInnerText);
        div.appendChild(div_hr);
        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_three');
        divPrev.innerHTML += this.prev_next();
        div_rule.appendChild(divPrev);
        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        li[0].setAttribute('id', 'matation_form_div_pren_li_three');
        li[0].onclick = function () {
            subject_boolean = false;
            subject_back = false;
            verification_three();
            ManagementInformation();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_two').show();
        }
        li[2].onclick = function () {
            subject_back = true;
            verification_three();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_four').show();
        }

        /////////////////////////
        if (subject_boolean == true) {
            divPrev.style.display = 'none';
            div_hr.style.display = 'none';
            div.style.paddingBottom = '50px';
        }
    }


    // 结算账户 账户类型
    this.bank_account_type = function (data) {
        var div_settlement =document.createElement('div');
        div_settlement.setAttribute('id','account_information_of_settlement_operator');
       
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_settlement_bank_account_type');
        application_list_one.appendChild(div_settlement);
        div_settlement.appendChild(div);
        div.innerHTML += this.matation_title('结算账户'); // 最上面的那title;
        var div = document.createElement("div");
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        div.setAttribute('id', 'matation_form_item_bank_account_type');
        div.style.paddingTop='25px';
        div_settlement.appendChild(div);
        var str = '';
        // wechartJson[0].is_ID_or_passport   is_ID_or_passport: true, // 默认是身份证
        var dom = 'matation_form_item_bank_account_type';
        var valCompany = wechartJson[2].subobject[1].subobject[2].value; // 营业执照的商户名称
        var valGovernment = wechartJson[2].subobject[2].subobject[3].value; // 登记证书的商户名称
        if (subject_type == 'SUBJECT_TYPE_ENTERPRISE') { // 企业类型
            str = '你是企业，请务必填写开户名为\"' + valCompany + '\"的对公银行账户';
            data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
            div.innerHTML += this.createTitleTop_no_hrs(str);
            this.input_box_id_card_account(data, dom, subject_type); // 渲染的是账户类型和右边的框；
        }
        if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS') { // 党政机关类型
            str = '你是党政、机关及事业单位，请务必填写开户名为\"' + valGovernment + '\"的对公银行账户';
            data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
            div.innerHTML += this.createTitleTop_no_hrs(str);
            this.input_box_id_card_account(data, dom, subject_type); // 渲染的是账户类型和右边的框；
        }
        if (subject_type == 'SUBJECT_TYPE_OTHERS') { // 其他组织类型
            str = '你是其他组织，请务必填写开户名为\"' + valGovernment + '\"的对公银行账户';
            data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
            div.innerHTML += this.createTitleTop_no_hrs(str);
            this.input_box_id_card_account(data, dom, subject_type); // 渲染的是账户类型和右边的框；
        }
        if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL') { // 个人类型
            if (!data.value) {
                data.value = 'BANK_ACCOUNT_TYPE_PERSONAL'; // 默认是法人；
            }
            //   console.log('没有事件时账户类型',data.value)
            var val = null; // wechartJson[2].subobject[1].subobject[3].value   // 营业执照的法人姓名；
            if (data.value == 'BANK_ACCOUNT_TYPE_PERSONAL') { // 法人账户；个人银行卡；
                val = wechartJson[2].subobject[1].subobject[3].value; // 营业执照的法人姓名；
            } else if (data.value == 'BANK_ACCOUNT_TYPE_CORPORATE') { // 对公账户
                val = valCompany;
            };
            //    console.log('法人账户',wechartJson[2].subobject[1].subobject[3].value);  //  营业执照的法人姓名；
            //   console.log(val)
            str = '你选择的是法人账户，请务必填写开户名为\"' + val + '\"的银行账户';
            div.innerHTML += this.createTitleTop_no_hrs(str, "geren_leixing_xuanze");


            var dom = document.getElementById('matation_form_item_bank_account_type');
            var arr = [{
                name: '法人账户',
                type: true
            }, {
                name: '对公账户',
                type: false
            }];

            var onOff = true;
            var _this = this;   // matation_form_item_bank_account_type
            this.three_syndromes_components(data, "账户类型", arr, dom, function (value) {
                var geren_leixing_xuanze = document.getElementById('geren_leixing_xuanze');
                if (value == false) { // 对公
                    data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
                    geren_leixing_xuanze.innerHTML = '你选择的是对公账户，请务必填写开户名为\"' + valCompany + '\"的银行账户';
                    $('#matation_form_account_name_kaihu_input').val(valCompany);
                    wechartJson[5].subobject[1].value = valCompany; // 结算账户的开户名称
                    //           console.log('事件时账户类型',data.value);
                } else { // 法人账户
                    data.value = 'BANK_ACCOUNT_TYPE_PERSONAL';
                    val = wechartJson[2].subobject[1].subobject[3].value; //  营业执照的法人姓名；
                    geren_leixing_xuanze.innerHTML = '你选择的是法人账户，请务必填写开户名为\"' + val + '\"的银行账户';
                    $('#matation_form_account_name_kaihu_input').val(val);
                    wechartJson[5].subobject[1].value = val; // 结算账户的开户名称
                    //          console.log('事件时账户类型',data.value);
                }
                //   console.log('选择账户类型', data.value);
            }, 'matation_form_zhanghuleixing');
            var matation_form_zhanghuleixing = document.getElementById('matation_form_zhanghuleixing');
            var matation_form_is_shouyiren_input = matation_form_zhanghuleixing.getElementsByTagName('input');
            var matation_form_zhanghuleixing_i = document.getElementsByTagName('i')[0];
            if (data.value == 'BANK_ACCOUNT_TYPE_PERSONAL') { // 法人账户；个人银行卡；
                val = wechartJson[2].subobject[1].subobject[3].value; //   营业执照的法人姓名；
                matation_form_is_shouyiren_input[0].checked = true;
            } else if (data.value == 'BANK_ACCOUNT_TYPE_CORPORATE') { // 对公账户
                val = valCompany;
                matation_form_is_shouyiren_input[1].checked = true;
            };
            matation_form_zhanghuleixing_i.style.display = 'none';
            if (subject_boolean) {
                matation_form_zhanghuleixing.style.paddingLeft = '40px';
                dom.style.paddingTop='10px';  // 账户类型
                if (data.value == 'BANK_ACCOUNT_TYPE_CORPORATE') { // 对公账户
                    matation_form_zhanghuleixing.children[2].innerHTML = '对公账户';
                } else {
                    matation_form_zhanghuleixing.children[2].innerHTML = '法人账户';
                }
            }
            matation_form_zhanghuleixing.style.paddingLeft = '40px';
        }

        //  console.log('账户类型',data.value);
        if(subject_boolean){
            div_settlement.className='active';
        }
    }

    // 结算账户 开户名称
    this.account_name = function (data, componentNextPro) {
        var div = document.createElement('div');
        var div_settlement=document.getElementById('account_information_of_settlement_operator');
        div.setAttribute('id', 'matation_form_account_name');
        div_settlement.appendChild(div);
        this.input_box_id_card(data, 'matation_form_account_name', componentNextPro);
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        // var str = '';
        // if (subject_type == 'SUBJECT_TYPE_ENTERPRISE') { // 企业类型
        //     str = '开户名称必须与营业执照/登记证书的“商户名称”一致';
        // } else if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL') {
        //     str = '1、选择“经营者个人银行卡”时，开户名称必须与“经营者证件姓名”一致。<br />2、选择“对公银行账户”时，开户名称必须与营业执照/登记证书的“商户名称”一致。';
        // }

        var input = div.getElementsByTagName('input')[0];
        input.setAttribute('id', 'matation_form_account_name_kaihu_input');
        input.style.border = '1px solid transparent';
        input.disabled = true;
        // $("#matation_form_account_name_kaihu_input").attr("disabled", true);
        input.style.backgroundColor = '#ffffff';
        // if (subject_boolean == false) {
        //     divInnerText.innerHTML = str;
        //     div.appendChild(divInnerText);
        // }

        var val = null;
        if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL') { // 个体户
            if (wechartJson[5].subobject[0].value == 'BANK_ACCOUNT_TYPE_PERSONAL') {
                val = wechartJson[2].subobject[1].subobject[3].value; // 这个是对公的信息；
                $('#matation_form_account_name_kaihu_input').val(val);
            } else if (wechartJson[5].subobject[0].value == 'BANK_ACCOUNT_TYPE_CORPORATE') {
                val = wechartJson[2].subobject[1].subobject[2].value; // 这个是对公的信息；
                $('#matation_form_account_name_kaihu_input').val(val);
            }
            data.value = $('#matation_form_account_name_kaihu_input').val();
        } else if (subject_type == 'SUBJECT_TYPE_ENTERPRISE') { // 企业
            val = wechartJson[2].subobject[1].subobject[2].value;
            $('#matation_form_account_name_kaihu_input').val(val);
            data.value = $('#matation_form_account_name_kaihu_input').val();

        } else if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS') { // 党政机关
            val = wechartJson[2].subobject[2].subobject[3].value
            $('#matation_form_account_name_kaihu_input').val(val);
            data.value = $('#matation_form_account_name_kaihu_input').val();

        } else if (subject_type == 'SUBJECT_TYPE_OTHERS') { // 其他组织
            val = wechartJson[2].subobject[2].subobject[3].value
            $('#matation_form_account_name_kaihu_input').val(val);
            data.value = $('#matation_form_account_name_kaihu_input').val();
        }
        // console.log(data.value);
        // console.log('结算账户的value', wechartJson[5].subobject[1].value)


    }

    // 结算账户 开户银行
    this.account_bank = function (data) {
        var div = document.createElement('div');
        var div_settlement=document.getElementById('account_information_of_settlement_operator');
        div.setAttribute('id', 'matation_form_account_bank');
        div_settlement.appendChild(div);
        this.banks_public_fn(data, 'matation_form_account_bank');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var p = document.createElement('p');
        p.innerHTML = '请选择正确的基本开户行信息';
        p.className = 'text-error';
        p.setAttribute('id', 'matation_form_account_bank_other_p');
        div.appendChild(p);
        p.style.display = 'none';
        if (subject_boolean == false) {
            div.appendChild(divInnerText);
        }
        divInnerText.innerHTML = '城市商业银行、农村商业银行、信用合作联社及其他银行,请选择“其他银行”';

        var yinghang_normal_bank_list = document.getElementById('yinghang_normal_bank_list');
        var a = yinghang_normal_bank_list.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            a[i].onclick = function () {
                var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span'); // 如果不是其他银行，就赋值了；
                var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two'); // 这个是其他银行的input输入框；
                var common_banks_account_bank = document.getElementById('common_banks_account_bank'); // ul框具体的银行信息
                var common_banks_account_bank_p = document.getElementById('common_banks_account_bank_p');
                if (this.children[1].innerHTML != '其他银行') {
                    data.value = this.children[1].innerHTML;
                    common_banks_account_bank_span.firstChild.nodeValue = data.value;
                    common_banks_account_bank_span_two.style.display = 'none';
                    common_banks_account_bank.style.display = 'none';
                    common_banks_account_bank_span.onOff = true;
                    data.other_banks = false;
                    common_banks_account_bank_p.style.display = 'none';
                    matation_form_account_bank_other_p.style.display = 'none';
                } else {
                    common_banks_account_bank_span.firstChild.nodeValue = this.children[1].innerHTML;
                    common_banks_account_bank_span_two.style.display = 'inline-block'; // 这个是其他银行的input输入框；
                    common_banks_account_bank.style.display = 'none';
                    common_banks_account_bank_span.onOff = true;
                    data.other_banks = true;
                }
            }
        }
        var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span');
        var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two');


        if (subject_boolean) {
            common_banks_account_bank_span.firstChild.nodeValue = data.value;
        }
        if (subject_boolean && data.other_banks) {
            common_banks_account_bank_span.firstChild.nodeValue = '其他银行';
            common_banks_account_bank_span_two.style.display = 'inline-block';
            common_banks_account_bank_span_two.disabled = true;
            common_banks_account_bank_span_two.value = data.value;
            common_banks_account_bank_span_two.border = 'none';
            common_banks_account_bank_span_two.style.cssText = "background:#ffffff;border:1px solid transparent";
        }


        if (data.other_banks === false) {
            // // // console.log('other_banks',data.other_banks);
            common_banks_account_bank_span.firstChild.nodeValue = data.value;

        } else if (data.other_banks === null) {
            common_banks_account_bank_span_two.style.display = 'none';
        } else {
            // console.log('other_banks', data.other_banks);
            common_banks_account_bank_span.firstChild.nodeValue = '其他银行';
            common_banks_account_bank_span_two.style.display = 'inline-block';
            common_banks_account_bank_span_two.value = data.value;
        }

    }


    // 开户银行下面具体的银行
    this.banks_str_innerHtml = function (data, nextProx) {
        var str = '<div id="common_banks_account_bank">' +
            '<div class="bankpicker-list">' +
            '<div class="section-box">' +
            '<div class="section-tab">' +
            '<ul id="pinyinList" class="clr clear_float">' +
            '<li class="pinyinLi noHideBank selected" pinyingroup="normal">' +
            '<a href="javascript:;" class="noHideBank_a">常见银行</a>' +
            '<span></span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div class="section-cnt noHideBank">' +
            '<div class="bank-comm clr noHideBank" id="yinghang_normal_bank_list">' +
            '<a bankid="102" bankname="中国工商银行" cft_bank_code="1002" bank_property="7" class="" title="中国工商银行" href="javascript:;"><span class="bank-logo-s bank-s-icbc"></span><span>中国工商银行</span></a>' +
            '<a bankid="103" bankname="中国农业银行" cft_bank_code="1005" bank_property="7" class="" title="中国农业银行" href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>中国农业银行</span></a>' +
            '<a bankid="104" bankname="中国银行" cft_bank_code="1026" bank_property="7" class="" title="中国银行" href="javascript:;"><span class="bank-logo-s bank-s-boc"></span><span>中国银行</span></a>' +
            '<a bankid="105" bankname="中国建设银行" cft_bank_code="1003" bank_property="7" class="" title="中国建设银行" href="javascript:;"><span class="bank-logo-s bank-s-ccb"></span><span>中国建设银行</span></a>' +
            '<a bankid="301" bankname="交通银行" cft_bank_code="1020" bank_property="7" class="" title="交通银行" href="javascript:;"><span class="bank-logo-s bank-s-comm"></span><span>交通银行</span></a>' +
            '<a bankid="302" bankname="中信银行" cft_bank_code="1021" bank_property="7" class="" title="中信银行" href="javascript:;"><span class="bank-logo-s bank-s-citic"></span><span>中信银行</span></a>' +
            '<a bankid="303" bankname="中国光大银行" cft_bank_code="1022" bank_property="7" class="" title="中国光大银行" href="javascript:;"><span class="bank-logo-s bank-s-ceb"></span><span>中国光大银行</span></a>' +
            '<a bankid="304" bankname="华夏银行" cft_bank_code="1025" bank_property="5" class="" title="华夏银行" href="javascript:;"><span class="bank-logo-s bank-s-hxb"></span><span>华夏银行</span></a>' +
            '<a bankid="305" bankname="中国民生银行" cft_bank_code="1006" bank_property="7" class="" title="中国民生银行" href="javascript:;"><span class="bank-logo-s bank-s-cmbc"></span><span>中国民生银行</span></a>' +
            '<a bankid="306" bankname="广发银行" cft_bank_code="1027" bank_property="5" class="" title="广发银行" href="javascript:;"><span class="bank-logo-s bank-s-gdb"></span><span>广发银行</span></a>' +
            '<a bankid="307" bankname="平安银行" cft_bank_code="1010" bank_property="7" class="" title="平安银行" href="javascript:;"><span class="bank-logo-s bank-s-pab"></span><span>平安银行</span></a>' +
            '<a bankid="308" bankname="招商银行" cft_bank_code="1001" bank_property="7" class="" title="招商银行" href="javascript:;"><span class="bank-logo-s bank-s-cmb"></span><span>招商银行</span></a>' +
            '<a bankid="309" bankname="兴业银行" cft_bank_code="1009" bank_property="7" class="" title="兴业银行" href="javascript:;"><span class="bank-logo-s bank-s-cib"></span><span>兴业银行</span></a>' +
            '<a bankid="310" bankname="上海浦东发展银行" cft_bank_code="1004" bank_property="7" class="" title="上海浦东发展银行" href="javascript:;"><span class="bank-logo-s bank-s-spdb"></span><span>上海浦东发展银行</span></a>' +
            '<a bankid="325" bankname="上海银行" cft_bank_code="1024" bank_property="5" class="" title="上海银行" href="javascript:;"><span class="bank-logo-s bank-s-bosh"></span><span>上海银行</span></a>' +
            '<a bankid="403" bankname="中国邮政储蓄银行" cft_bank_code="1066" bank_property="7" class="" title="中国邮政储蓄银行" href="javascript:;"><span class="bank-logo-s bank-s-psbc"></span><span>中国邮政储蓄银行</span></a>' +
            '<a bankid="501" bankname="汇丰银行（中国）" cft_bank_code="1099" bank_property="4" class="" title="汇丰银行（中国）" href="javascript:;"><span class="bank-logo-s bank-s-hsbc"></span><span>汇丰银行（中国）</span></a>' +
            '<a bankid="3130001" bankname="北京银行" cft_bank_code="4836" bank_property="7" class="" title="北京银行" href="javascript:;"><span class="bank-logo-s bank-s-bob"></span><span>北京银行</span></a>' +
            '<a bankid="3130007" bankname="宁波银行" cft_bank_code="1056" bank_property="7" class="" title="宁波银行" href="javascript:;"><span class="bank-logo-s bank-s-nbcb"></span><span>宁波银行</span></a>' +
            ' <a bankid="0" bankname="其他银行" cft_bank_code="0" bank_property="0" class="green" title="其他银行" href="javascript:;"><span class="bank-logo-s bank-s-rcb"></span><span>其他银行</span></a>' +
            '</div>' +
            '<div id="pinyinBankList"> </div>' +
            '<div class="bank-tips noHideBank">城市商业银行、农村商业银行、信用合作联社及其他银行，请选择“其他银行”</div>' +
            '</div>' +
            '<a class="ico-cls" href="javascript:;" title="关闭" id="yinghang_normal_bank_list_close"></a>' +
            '</div>' +
            '</div>' +
            '</div>'
        return str;
    }

    // 登记证书 证书类型
    this.cert_type_innnerHTML = function () {
        var str = '<div id="common_zhengjian_leixing_type">' +
            '<div class="bankpicker-list">' +
            '<div class="section-box">' +
            '<div class="section-tab">' +
            '<ul id="pinyinLists" class="clr clear_float">' +
            '<li class="pinyinLi noHideBank selected" pinyingroup="normal">' +
            '<a href="javascript:;" class="noHideBank_a">证件类型</a>' +
            '<span></span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div class="section-cnt noHideBank">' +
            '<div class="bank-comm clr noHideBank" id="zhengjia_type_list_leixing">' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-icbc"></span><span>事业单位法人证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>统一社会信用代码证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>有偿服务许可证（军队医院适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>医疗机构执业许可证（军队医院适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>企业营业执照（挂靠企业的党组织适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>组织机构代码证（政府机关适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>社会团体法人登记证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>民办非企业单位登记证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>基金会法人登记证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>慈善组织公开募捐资格证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>农民专业合作社法人营业执照</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>宗教活动场所登记证</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>其他证书/批文/证明</span></a>' +
            '</div>' +
            '<div class="bank-tips noHideBank"></div>' +
            '</div>' +
            '<a class="ico-cls" href="javascript:;"  id="dengji_zhengshu_list_close" title="关闭"></a>' +
            '</div>' +
            '</div>' +
            '</div>'
        return str;
    }

    // 开户银行省市编号
    this.bank_address_code = function (data) {
        var div = document.createElement('div');
        var div_settlement=document.getElementById('account_information_of_settlement_operator');
        div.setAttribute('id', 'matation_form_bank_address_code');
        div_settlement.appendChild(div);
        this.input_box_id_card(data, 'matation_form_bank_address_code');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '至少精确到市，详细参见<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-5" target="_blank">省市区编号对照表</a>。<span class="green">示例值：110000 </span>';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
    }

    // 开户银行 开户银行联行号 
    this.bank_branch_id = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_bank_branch_id');
        var div_settlement=document.getElementById('account_information_of_settlement_operator');
        div_settlement.appendChild(div);
        this.input_box_id_card(data, 'matation_form_bank_branch_id');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '1、开户银行全称（含支行）和开户银行联行号二选一填写。<br />2、开户银行联行号，详细参见<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-6" target="_blank">开户银行全称（含支行）对照表</a>。示例值：402713354941';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        div.style.display = 'none';

    }

    // 开户银行 开户银行全称（含支行)
    this.bank_name = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_bank_name');
        var div_settlement=document.getElementById('account_information_of_settlement_operator');
        div_settlement.appendChild(div);
        this.input_box_id_card(data, 'matation_form_bank_name');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = ' 1、需填写银行全称，如"深圳农村商业银行XXX支行"，开户银行全称，详细参见<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-6" target="_blank">开户银行全称（含支行）对照表</a>。<br><span class="green">示例值：施秉县农村信用合作联社城关信用社 </span>';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
    }

    // 开户银行 银行账户  common_banks_account_bank_span_two
    this.account_number = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_account_number');
        var div_settlement=document.getElementById('account_information_of_settlement_operator');
        div_settlement.appendChild(div);
        this.input_box_id_card_yinghao_number(data, 'matation_form_account_number');
        var divInnerText = document.createElement('span');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '<a href="https://kf.qq.com/faq/140225MveaUz150819mYFjuE.html" target="_blank">常用银行账号位数参考</a>';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        var inputs = div.getElementsByTagName('input')[0];

        var span = document.createElement('span');
        div.appendChild(span);
        span.setAttribute('class', 'matation_span');
        span.style.display = 'none';
        inputs.oninput = function () {
            var str_input = this.value;
            if (str_input.length > 0) {
                span.style.display = 'block';
            }
            var len = parseInt(this.value.length / 4) + 1;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(str_input.slice(i * 4, (i + 1) * 4));
            }
            var str_arr = arr.join(' ');
            // console.log(str_arr);
            span.innerHTML = str_arr;
        }
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        div.appendChild(divInnerText);
        div.appendChild(div_hr);
        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_four');
        divPrev.innerHTML += this.prev_next();
        var div_settlement=document.getElementById('account_information_of_settlement_operator');
        div_settlement.appendChild(divPrev);
        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        li[0].setAttribute('id', 'matation_form_div_pren_li_four');
        li[0].onclick = function () {
            subject_boolean = false;
            subject_back = false;
            verification_four();
            Settlementrules();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_three').show();
        }
        li[2].onclick = function () {
            subject_back = true;
            verification_four();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_five').show();
        }

        //////////////////////////////////////////////
        if (subject_boolean == true) {
            divPrev.style.display = 'none';
            div_hr.style.display = 'none';
            div.style.marginBottom='40px';
        }







    }

    // 这个方法主要是针对dom的移除和添加设置公共方法；和input_box；相似。身份证姓名和身份证号码的方法
    this.input_box_id_card = function (data, dom, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        var iOne = document.createElement('i');
        iOne.className = 'wildcard';
        iOne.innerHTML = '*';
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.type = 'text';
        input.className = "input_public";
        div.appendChild(iOne);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
        if (data.caption == '服务商公众号APPID') {
            input.setAttribute('id', 'serviceInput');
            div.setAttribute('id', 'serviceProviderAppId');
            p.setAttribute('id', 'serverApp_domP');
        }
        if (data.caption == '商家公众号APPID') {
            input.setAttribute('id', 'officialInput');
            div.setAttribute('id', 'officialAccountAppId');
            p.setAttribute('id', 'sellerApp_domP');
        }
        if (data.caption == '服务商小程序APPID') {
            input.setAttribute('id', 'serviceAppletsInput');
            div.setAttribute('id', 'serviceAppletsAppId');
            p.setAttribute('id', 'serverApp_AppletsdomP');
        }
        if (data.caption == '商家小程序APPID') {
            input.setAttribute('id', 'officialAppletsInput');
            div.setAttribute('id', 'officialAppletsAppId');
            p.setAttribute('id', 'sellerApp_AppletsdomP');
        }
        if (data.caption == '服务商应用APPID') {
            input.setAttribute('id', 'serviceApplicationInput');
            div.setAttribute('id', 'serviceApplicationAppId');
            p.setAttribute('id', 'serverApp_ApplicationdomP'); // Application
        }
        if (data.caption == '商家应用APPID') {
            input.setAttribute('id', 'officialApplicationInput');
            div.setAttribute('id', 'officialApplicationAppId');
            p.setAttribute('id', 'sellerApp_ApplicationdomP');
        }

        if (data.caption == '证件姓名') {
            input.setAttribute('id', 'other_name_of_certificate');
        }

        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '40px';
            iOne.style.display = 'none';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
            div.style.paddingLeft = '40px';
        }

        if (data.caption.slice(0, 8) == '线下场所对应的商' || data.caption == '小程序截图' || data.caption == '公众号页面截图' || data.caption == '小程序截图' || data.caption == '网站授权函(选填)' || data.caption == '互联网网站对应的商家APPID(选填)') {
            iOne.style.display = 'none';
        }

        input.onblur = function () {
            if (data.caption == '互联网网站域名') {
                var str = input.value.slice(0, 4);
                if (!str.match('http') && input.value.trim().length > 0) {
                    input.value = 'http://' + input.value;
                }
            }
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                if (data.caption.slice(0, 8) == '线下场所对应的商' && input.value.trim().length == 0) {
                    //  console.log('线下场所对应的商家APPID(选填)', a);
                    if (input.hasAttribute('isNext')) {
                        input.removeAttribute("isNext");
                    }
                    return;

                }
                if (data.caption.slice(0, 10) == '互联网网站对应的商家' && input.value.trim().length == 0) {
                    if (input.hasAttribute('isNext')) {
                        input.removeAttribute("isNext");
                    }
                    return;

                }
                if (data.caption.slice(0, 6) == '优惠费率活动' && input.value.trim().length == 0) {
                    if (input.hasAttribute('isNext')) {
                        input.removeAttribute("isNext");
                    }
                    return;

                }

                //   console.log('互联网网站对应的商家', input)
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;

            } else {
                p.style.display = 'none';
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }
            }

            // if(data.caption=='证件姓名'&&()){

            // }


            if ((data.caption == '身份证姓名' && (subject_type == 'SUBJECT_TYPE_ENTERPRISE' || subject_type == 'SUBJECT_TYPE_INDIVIDUAL')) || (data.caption == '证件姓名' && (subject_type == 'SUBJECT_TYPE_ENTERPRISE' || subject_type == 'SUBJECT_TYPE_INDIVIDUAL'))) {
                // console.log('身份证姓名input框调用了');
                var getihu_farendaibiao = document.getElementById('getihu_farendaibiao'); // 法人代表input框；
                var values = getihu_farendaibiao.value;
                var str = $('#getihu_farendaibiao').val();
                if (data.value != values) {
                    p.style.display = 'block';
                    p.innerHTML = '请上传法人\"' + str + '\"的身份证件（即与营业执照上的经营者/法人姓名相同的身份证件）';
                    input.setAttribute("isNext", "nextStep");
                    return;
                } else {
                    p.style.display = 'none';
                    if (input.hasAttribute('isNext')) {
                        input.removeAttribute("isNext");
                    }
                }
            } else if ((data.caption == '身份证姓名' && (subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS')) || (data.caption == '证件姓名' && (subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS'))) {
                // console.log('身份证姓名input框调用了');
                var getihu_farendaibiao = document.getElementById('dengji_faren_xingming'); // 法人姓名的input框；
                var values = getihu_farendaibiao.value;
                if (data.value != values) {
                    p.style.display = 'block';
                    p.innerHTML = '请上传法人\"' + values + '\"的身份证件（即与登记执照上的经营者/法人姓名相同的身份证件）';
                    input.setAttribute("isNext", "nextStep");
                    return;
                } else {
                    p.style.display = 'none';
                    if (input.hasAttribute('isNext')) {
                        input.removeAttribute("isNext");
                    }
                }
            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            if (input.value.replace(/^\s+|\s+$/g, '').length == 0) {
                input.value = '';
            }

            p.style.display = 'none';
        }
        if (data.caption == '身份证姓名') {
            input.setAttribute('id', 'shenfenzheng_nama_input');
        }
    }

    // 开户银行 银行账号 
    this.input_box_id_card_yinghao_number = function (data, dom, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        var iOne = document.createElement('i');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        iOne.className = 'wildcard';
        iOne.innerHTML = '*';
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.type = 'text';
        input.className = "input_public";
        div.appendChild(iOne);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        // console.log(organization_code_certificate)
        organization_code_certificate.appendChild(div);

        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '40px';
            iOne.style.display = 'none';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
            div.style.paddingLeft = '40px';
        }


        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var span = organization_code_certificate.getElementsByTagName('span')[0];
            span.style.display = 'none';
            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }

            }

            if (componentNextPro) {
                componentNextPro(data);
            }

        }
        input.onfocus = function () {
            p.style.display = 'none';
            var span = organization_code_certificate.getElementsByTagName('span')[0];
            document.getElementById('matation_form_account_bank_other_p').style.display = 'none';
            // if (data.value.length > 0) {
            //     span.style.display = 'block';
            // }

        }
    }



    // 对公账户右边信息
    this.input_box_id_card_account = function (data, dom, subject_type) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        if (subject_boolean) {
            div.style.paddingLeft = '40px';
        } else {
            div.style.paddingLeft = '40px';
        }
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        div.appendChild(label);
        if (subject_type != 'SUBJECT_TYPE_INDIVIDUAL') {
            var span = document.createElement("span");
            span.className = "span_public";
            div.appendChild(span);
            span.innerHTML = '对公账户';
            span.style.cssText = ' position: absolute;top:-3px';
        }
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
    }


    // 超级管理员信息 超级管理员姓名；
    this.contact_name = function (data) {
        var div_admini = document.createElement('div');
        div_admini.setAttribute('id', 'super_administrator_information');
        var div = document.createElement('div');
        application_list_one.appendChild(div_admini);
        div.setAttribute('id', 'matation_settlement_contact_name'); // 超级管理员标题
        div_admini.appendChild(div);
        div.innerHTML += this.matation_title('超级管理员'); // 最上面的那title;
        var div = document.createElement("div");
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        div.setAttribute('id', 'matation_form_contact_name'); // 超级管理员姓名栏
        div_admini.appendChild(div);
        var str = null;
        if (subject_boolean == false) {
            var str = "超级管理员信息<span style='color:#999;font-size:12px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;超级管理员将接收开户信息及日常重要管理信息，并可进行商户号的日常重要管理及资金操作，请确定超级管理为商户法定代表人或负责人再进行操作。</span>";

        } else {
            var str = "超级管理员信息";
            div_admini.className='active';
        }


        div.innerHTML += this.createTitleTop_no_tubiao(str);
        this.input_box_id_card(data, 'matation_form_contact_name');
        var input = div.getElementsByTagName('input')[0];
        input.style.width = '300px';
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '超级管理员姓名与微信实名信息需一致。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);

        //  超级管理员资料类型选择
        var dom = document.getElementById('matation_form_contact_name');
        var arr = [{
            name: '证件号码',
            type: true
        }, {
            name: '微信openid',
            type: false
        }];

        var onOff = true;

        this.three_syndromes_components(data, "超级管理员资料  类型", arr, dom, function (value) {
            onOff = value;
            var matation_form_contact_id_number = document.getElementById('matation_form_contact_id_number');
            var matation_form_contact_openid = document.getElementById('matation_form_contact_openid');
            if (onOff == true) {
                wechartJson[0].Idcard_or_openid = false;
                matation_form_contact_id_number.style.display = 'block';
                matation_form_contact_openid.style.display = 'none';
            } else {
                wechartJson[0].Idcard_or_openid = true;
                matation_form_contact_id_number.style.display = 'none';
                matation_form_contact_openid.style.display = 'block';
            }

        }, 'matation_form_chaoji_guanli');


        var matation_form_chaoji_guanli = document.getElementById('matation_form_chaoji_guanli');
        var input_chaoji = matation_form_chaoji_guanli.getElementsByTagName('input');

        if (wechartJson[0].Idcard_or_openid) {
            input_chaoji[1].checked = true;
        } else {
            input_chaoji[0].checked = true;
        }

        if (subject_boolean) {
            var matation_form_contact_name = document.getElementById('matation_form_contact_name'); // matation_form_chaoji_guanli
            var div = matation_form_contact_name.children[1];
            // console.log(div);
            div.getElementsByTagName('input')[0].remove();
            div.getElementsByTagName('p')[0].remove();
            var span = document.createElement('span');
            span.className = 'input_public';
            span.innerHTML = data.value;
            div.appendChild(span);
            span.style.border = 'none';
            div.style.paddingBottom = '10px'

        }

    }


    // 超级管理员 身份证件号码 
    this.contact_id_number = function (data) {
        var div_admini = document.getElementById('super_administrator_information');
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_contact_id_number');
        div_admini.appendChild(div);
        this.input_box_id_card(data, 'matation_form_contact_id_number');
        var divInnerTexts = document.createElement('div');
        divInnerTexts.setAttribute('class', 'tips-info');
        var str = '请填写超级管理员的证件号码，可传身份证，来往内地通行证、护照等证件号码。';
        divInnerTexts.innerHTML = str;
        div.appendChild(divInnerTexts);
        div.style.display = "none";
        if (wechartJson[0].Idcard_or_openid == false) {
            div.style.display = 'block';
        }
        if (subject_boolean) {
            // console.log(div.getElementsByTagName('input')[0].value);
            div.getElementsByTagName('input')[0].remove();
            div.children[0].getElementsByTagName('p')[0].remove();
            var span = document.createElement('span');
            span.className = 'input_public';
            span.innerHTML = data.value;
            div.children[0].appendChild(span);
            span.style.border = 'none';
            div.style.paddingBottom = '30px'
        }


    }

    // 超级管理员微信openid
    this.openid = function (data) {
        var div_admini = document.getElementById('super_administrator_information');
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_contact_openid');
        div_admini.appendChild(div);
        this.input_box_id_card(data, 'matation_form_contact_openid');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '微信号要与该微信openid一致。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        div.style.display = "none";
        if (wechartJson[0].Idcard_or_openid == true) {
            div.style.display = 'block';
        }
        if (subject_boolean) {
            // console.log(div.getElementsByTagName('input')[0].value);
            div.getElementsByTagName('input')[0].remove();
            div.children[0].getElementsByTagName('p')[0].remove();
            var span = document.createElement('span');
            span.className = 'input_public';
            span.innerHTML = data.value;
            div.children[0].appendChild(span);
            span.style.border = 'none';
            div.style.paddingBottom = '30px'
        }
    }

    // 超级管理员联系手机
    this.mobile_phone = function (data) {
        var div_admini = document.getElementById('super_administrator_information');
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_mobile_phone');
        div_admini.appendChild(div);
        this.input_box_id_card(data, 'matation_form_mobile_phone');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '用于接收微信支付的重要管理信息及日常操作验证码。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        if (subject_boolean) {
            // console.log(div.getElementsByTagName('input')[0].value);
            div.getElementsByTagName('input')[0].remove();
            div.children[0].getElementsByTagName('p')[0].remove();
            var span = document.createElement('span');
            span.className = 'input_public';
            span.innerHTML = data.value;
            div.children[0].appendChild(span);
            span.style.border = 'none';
            div.style.paddingBottom = '10px'
        }
    }

    // 超级管理员联系邮箱
    this.contact_email = function (data) {
        var div_admini = document.getElementById('super_administrator_information');
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_contact_email');
        div_admini.appendChild(div);
        this.input_box_id_card(data, 'matation_form_contact_email');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '用于接收微信支付的开户邮件及日常业务通知。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        div.appendChild(divInnerText);
        div.appendChild(div_hr);
        //  div_hr.style.display = 'none';
        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_five'); // public_hrs
        divPrev.innerHTML += this.prev_next();
        div_admini.appendChild(divPrev);
        var li = divPrev.getElementsByTagName('li');
        var preview_all_information = document.getElementById('preview_all_information');
        if (subject_boolean) {
            // console.log(div.getElementsByTagName('input')[0].value);
            div.getElementsByTagName('input')[0].remove();
            div.children[0].getElementsByTagName('p')[0].remove();
            var span = document.createElement('span');
            span.className = 'input_public';
            span.innerHTML = data.value;
            div.children[0].appendChild(span);
            span.style.border = 'none';
            div.style.paddingBottom = '52px';
        }

        li[0].setAttribute('id', 'matation_form_div_pren_li_five');
        li[0].onclick = function () {
            subject_boolean = false;
            subject_back = false;
            verification_five();
            SettlementAccount();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_four').show();
            $('#matation_form_div_pren_four').show();
        }

        li[2].onclick = function () {
            subject_back = true;
            verification_five();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#information_fill_li_six').show();
        }


        ///////////////////////////////////////////
        if (subject_boolean == true) {
            divPrev.style.display = 'none';
            div_hr.style.display = 'none';
        }

    }




    // 生成点击选项公共的方法
    this.three_syndromes_component = (data, caption, arr, dom, nextPro) => {
        var ul = document.createElement("ul");
        var iOne = document.createElement('i');
        iOne.className = 'wildcard_document_type';
        iOne.innerHTML = '*';
        var labelCaption = document.createElement("label");
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.appendChild(iOne);
        ul.appendChild(labelCaption);
        ul.appendChild(div);
        if (data.caption == '证件类型') {
            div.setAttribute('id', 'divs_public_shenfen_leixing');
        }
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var radios = null;
            if (arr[i].types) {
                radios = arr[i].types
            } else {
                radios = 'radio';
            }

            str += '<li>' +
                '<div class="label_three_syndromes">' +
                '<label class="labelone_three_syndromes">' +
                '<input type="radio" name=\'' + radios + '\' class="radioSelect">' +
                '<span></span>' +
                '<i>' + arr[i].name + '</i>' +
                '</label>' +
                '</div>' +
                '</li>';
        }

        if (subject_boolean) {
            // console.log(subject_boolean)
            // div.innerHTML = data.value;
            iOne.style.display = 'none';
        } else {
            div.innerHTML = str;
            var inputs = ul.getElementsByTagName('input');
            inputs[0].checked = true;
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].onchange = function () {
                    nextPro(arr[i].type, i)
                }
            }

        }

        if (subject_boolean) {
            ul.style.paddingLeft = '30px';
        }


        dom.appendChild(ul);

    }


    // 生成复选框选项的公共方法 lable_left
    this.three_syndromes_components = (data, caption, arr, dom, nextPro, ids) => {
        var ul = document.createElement("ul");
        ul.className = 'publick_checked_list';
        ul.setAttribute('id', ids);
        var labelCaption = document.createElement("label");
        var iOne = document.createElement('i');
        iOne.className = 'wildcard';
        iOne.innerHTML = '*';
        if (data.caption == '账户类型') {
            iOne.className = 'wildcards';
        }
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.appendChild(iOne);
        ul.appendChild(labelCaption);
        ul.appendChild(div);

        //     application_list_one_ul_li_div
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var radios = null;
            if (arr[i].types) {
                radios = arr[i].types
            } else {
                radios = 'radio';
            }
            //    ico-msg-s_ask
            str += '<li>' +
                '<div class="label_three_syndromes">' +
                '<label class="labelone_three_syndromes">' +
                '<input type="radio" name=\'' + radios + '\' class="radioSelect">' +
                '<span></span>' +
                '<i>' + arr[i].name + '</i>' +
                '</label>' +
                '</div>' +
                '</li>';
        }


        if (subject_boolean == true) {
            ul.style.paddingLeft = '30px';
            iOne.style.display = 'none';
        }


        div.innerHTML += str;


        dom.appendChild(ul);

        var str_dom = null;
        if (data.caption == '服务商公众号APPID' || data.caption == '服务商小程序APPID' || data.caption == '服务商应用APPID') {
            //  document.getElementById('ico-msg-s_ask').style.display = 'none';
            str_dom = '<i class="ico-msg-s" id="ico-msg-s_ask" style="height:0"></i>'
        } else {
            str_dom = '<i class="ico-msg-s" id="ico-msg-s_ask"></i>';
        }

        ul.innerHTML += str_dom;
        var str2 = '<div class="popup pop-left pos-top ng-hide" id="popup_ask" style="display:none">' +
            '<div class="inner">' +
            '<p class="ng-binding ng-scope">根据国家相关法律法规，您需要提供公司受益所有人信息。受益所有人需符合至少以下条件之一：1. 直接或者间接拥有超过25%公司股权或者表决权的自然人；2. 通过人事、财务等其他方式对公司进行控制的自然人；3. 公司的高级管理人员，包括公司的经理、副经理、财务负责人，上市公司董事会秘书和公司章程规定的其他人员</p>' +
            '</div>' +
            '<p class="rotate_p rotate_p_benefit"></p><p class="rotate_p_Two"></p>' +
            '</div>'
        ul.innerHTML += str2;

        var str = null;



        var inputs = ul.getElementsByTagName('input');
        inputs[0].checked = true; // 默认第一个被选中；
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                nextPro(arr[i].type);
            }
        }

        var ico_msg_s_ask = document.getElementById('ico-msg-s_ask');
        var popup_ask = document.getElementById('popup_ask');

        /*
                ico_msg_s_ask.onmousemove = function () {
                    popup_ask.style.display = 'block';
                }
                ico_msg_s_ask.onmouseout = function () {
                    popup_ask.style.display = 'none';
                }
        */
        if (caption == '是否为受益所有人') {
            var div_hr = document.createElement('div');
            div_hr.setAttribute('class', 'public_hrs');
            div_hr.style.marginTop='20px';
            dom.appendChild(div_hr);
            if(subject_boolean){
                 if(wechartJson[0].is_beneficiary){
                    div_hr.style.display='none';
                 }
            }
        }

        if (caption == '账户类型') {
            ico_msg_s_ask.style.display = 'none';
        }

        caption = caption.replace(/\s+/g, '');
        if (caption == '超级管理员资料类型') {
            ico_msg_s_ask.style.display = 'none';
            var divInnerTexts = document.createElement('div');
            divInnerTexts.setAttribute('class', 'tips-info');
            var str = '证件号码和微信openid二选一必填。';
            divInnerTexts.innerHTML = str;
            ul.appendChild(divInnerTexts);
            divInnerTexts.style.paddingTop = 0;
            divInnerTexts.style.marginTop = '-15px';
            if (subject_boolean) {
                ul.style.display = 'none';
            }
        }

        var popup_ask = document.getElementById('popup_ask');
        var popup_ask_p = popup_ask.getElementsByTagName('p');
        ico_msg_s_ask.onmouseover = function () {

            var rectObject_top = this.getBoundingClientRect().bottom; // 元素底部到可视区顶部的距离
            var windowH = window.innerHeight;
            var h = windowH - rectObject_top;
            var domH = $('#popup_ask').outerHeight();
            if (h < domH) {
                popup_ask.style.top = '-180px';
                popup_ask.style.position = 'absolute';
                popup_ask_p[1].style.top = '195px';
                popup_ask_p[2].style.top = '184px';
                popup_ask_p[1].style.border = '1px solid #eee';
            } else {
                // console.log(2)
                popup_ask.style.position = 'absolute';
                popup_ask.style.top = '-18px';
                popup_ask_p[1].style.top = '35px';
                popup_ask_p[2].style.top = '23px';
                popup_ask_p[1].style.border = '1px solid #eee';
            }
            popup_ask.style.display = 'block';
        }
        ico_msg_s_ask.onmouseout = function () {
            popup_ask.style.display = 'none';
        }




    }

    // 开户银行专有的方法
    this.banks_public_fn = function (data, dom) {
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        var iOne = document.createElement('i');
        iOne.className = 'wildcard';
        iOne.setAttribute('id', 'qianmian_xingaho');
        iOne.innerHTML = '*';
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        p.setAttribute('id', 'common_banks_account_bank_p');
        label.innerText = data.caption;
        var spans = document.createElement("span");
        var spans_two = document.createElement("input");
        spans_two.type = 'text';
        spans.innerText = '请选择';
        spans.className = "span_public";
        spans_two.className = "span_public";
        spans.setAttribute('id', 'common_banks_account_bank_span');
        spans_two.setAttribute('id', 'common_banks_account_bank_span_two');
        spans_two.placeholder = '请输入正确的开户行信息';
        spans_two.style.display = 'none';
        var i = document.createElement('i');
        i.className = 'triangle_banks';
        var i_two = document.createElement('i');
        i_two.className = 'triangle_banks';
        spans.appendChild(i);
        spans_two.appendChild(i_two);
        div.appendChild(iOne);
        div.appendChild(label);
        div.appendChild(spans);
        div.appendChild(spans_two);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
        div.innerHTML += this.banks_str_innerHtml(data);
        var common_banks_account_bank = document.getElementById('common_banks_account_bank');
        common_banks_account_bank.style.display = 'none';
        var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span');
        var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two');
        var common_banks_account_bank_p = document.getElementById('common_banks_account_bank_p');
        common_banks_account_bank_span.onOff = true;
        yinghang_normal_bank_list_close = document.getElementById('yinghang_normal_bank_list_close');
        yinghang_normal_bank_list_close.onclick = function () {
            common_banks_account_bank.style.display = 'none';
            common_banks_account_bank_span.onOff = true;
        }
        common_banks_account_bank_span.onclick = function () {
            if (subject_boolean == false) {
                if (this.onOff) {
                    common_banks_account_bank.style.display = 'block';
                } else {
                    common_banks_account_bank.style.display = 'none';
                }
                this.onOff = !this.onOff;
            }

        }

        common_banks_account_bank_span_two.onblur = function () {
            data.value = common_banks_account_bank_span_two.value;
            var a = data.verification_method();
            if (a) {
                common_banks_account_bank_p.style.display = 'block';
                common_banks_account_bank_p.innerHTML = a;
                this.setAttribute("isNext", "nextStep");
                return;
            } else {
                common_banks_account_bank_p.style.display = 'none';
                if (this.hasAttribute('isNext')) {
                    this.removeAttribute("isNext");
                }
            }
        }

        common_banks_account_bank_span_two.onfocus = function () {
            common_banks_account_bank_p.style.display = 'none';
        }




        if (subject_boolean) {
            div.style.paddingLeft = '40px';
            iOne.style.display = 'none';
            $('#qianmian_xingaho').hide();
        } else {
            div.style.paddingLeft = '40px';
        }



    }


    // 登记证书 选择证件类型专有方法
    this.zhengshu_public_fn = function (data, dom) {
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        p.setAttribute('id', 'common_banks_account_bank_p');
        label.innerText = data.caption;
        var spans = document.createElement("span");
        var spans_two = document.createElement("input");
        spans_two.type = 'text';
        spans.innerText = '请选择';
        spans.className = "span_public";
        spans_two.className = "span_public";
        spans.setAttribute('id', 'common_banks_account_bank_span');
        spans_two.setAttribute('id', 'common_banks_account_bank_span_two');
        spans_two.placeholder = '请输入开户银行名称';
        spans_two.style.display = 'none';
        var i = document.createElement('i');
        i.className = 'triangle_banks';
        var i_two = document.createElement('i');
        i_two.className = 'triangle_banks';
        spans.appendChild(i);
        spans_two.appendChild(i_two);
        div.appendChild(label);
        div.appendChild(spans);
        div.appendChild(spans_two);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
        div.innerHTML += this.banks_str_innerHtml(data);
        var common_banks_account_bank = document.getElementById('common_banks_account_bank');
        common_banks_account_bank.style.display = 'none';
        var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span');
        var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two');
        var common_banks_account_bank_p = document.getElementById('common_banks_account_bank_p');
        common_banks_account_bank_span.onOff = true;
        yinghang_normal_bank_list_close = document.getElementById('yinghang_normal_bank_list_close');
        yinghang_normal_bank_list_close.onclick = function () {
            common_banks_account_bank.style.display = 'none';
            common_banks_account_bank_span.onOff = true;
        }
        common_banks_account_bank_span.onclick = function () {
            if (this.onOff) {
                common_banks_account_bank.style.display = 'block';
            } else {
                common_banks_account_bank.style.display = 'none';
            }
            this.onOff = !this.onOff;
        }

        common_banks_account_bank_span_two.onblur = function () {
            data.value = common_banks_account_bank_span_two.value;
            let a = data.verification_method();
            if (a) {
                common_banks_account_bank_p.style.display = 'block';
                common_banks_account_bank_p.innerHTML = a;
            }
        }

        common_banks_account_bank_span_two.onfocus = function () {
            common_banks_account_bank_p.style.display = 'none';
        }


    }


    // 头部的方法 有副标题  
    this.createTitleTop = function (str1, str2) {
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>" + str2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 头部的方法 有副标题 这个是 法定代表人/个体户经营证证件 专有方法；
    this.createTitleTops = function (str1, str2) {
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding' id='updata_legal_person'>" + str2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 头部的方法 没有那个图标
    this.createTitleTop_no_tubiao = function (str) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str + "</h4>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }


    // 头部的方法 有副标题
    this.createTitleTop_no_hr = function (str1, str2, ids) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding' id=\"" + ids + "\">" + str2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 结算账户头部方法
    this.createTitleTop_no_hrs = function (str2, ids) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding' id=\"" + ids + "\">" + str2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 头部方法，没有副标题
    this.createTitleTopTwo = function (str1) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-cnt'>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 只有一个副标题的公共方法
    this.createSubtitle = function (str1) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>" + str1 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }




    // 生成单张上传图片信息的方法
    this.createTitleTopAndImg = function (data, str1, str2, domID, str3) {

        var div = document.createElement("div");
        // // console.log(str_three,data.caption)
        // var  str3 = str_three ? str_three : '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）';
        var dom = '';
        var doma = null;
        if (data.caption == '网站授权函(选填)') {
            dom = '';
        } else {
            dom = '<i class="wildcard">*</i>';
        }
        if (subject_boolean) {
            dom = '';
        }
        div.setAttribute('class', 'common_header_method');
        div.setAttribute('id', domID);
        var str = '<div class="createTitleTopAndImg_top">' +
            dom +
            '<label class = "labels ng-binding">' + str1 + '</label>' +
            '<div class="application_phone_div">' +
            '<a href="javascript:;" class="a-upload"><input type="file" name="" class="input_updata" id=""><span>上传</span></a >' +
            // '<a href="javascript:;" style="display:none" class="a-upload"><input type="file" name="" class="input_updata" id="">重新上传</a>' +
            '<div class="upload-tips">' + str3 + '</div>' +
            '</div>' +
            '<ul class="application_list_one_ul_childer">' +
            // '<li>' +
            // '<img src="">' +
            // '<a href="javascript:;" class="del">删除</a>' +
            // '</li>' +
            '</ul>' +
            '<p class="text-error">' + str2 + '</p>' +
            '<p class="text-error">请上传单张图片在2M内的彩色图片，格式可为bmp、png、jpg</p>';
        div.innerHTML = str;
        return div;
    }

    // 多张图片上传的公共方法
    this.create_multiple_pictures = function (str1, str2, str3, domID) {
        var div = document.createElement("div");
        div.setAttribute('class', 'common_header_method');
        div.setAttribute('id', domID);
       // console.log(str1)
        if(str1=='经营场所门前照片'||str1=='特殊资质图片'||str1.slice(0,8)=='经营场所店内环境'){
            console.log(str1);
            div.style.overflow = 'hidden';
        }
       
        var dom = '';
        if (str1 == '小程序截图(选填)') {
            dom = '';
        } else {
            dom = '<i class="wildcard">*</i>';
        }

        if (subject_boolean) {
            dom = '';
        }

        var str = '<div class="createTitleTopAndImg_top">' +
            dom +
            '<label class = "labels ng-binding">' + str1 + '</label>' +
            '<div class="application_phone_div">' +
            '<a href="javascript:;" class="a-upload"><input type="file" multiple="multiple" class="input_updata"  id=""><span>上传</span></a >' +
            // '<a href="javascript:;" style="display:none" class="a-upload"><input type="file" name="" id="">重新上传</a>' +
            '<div class="upload-tips" id="duozhangtupiande_shangchuan">' + str3 + '</div>' +
            '</div>' +
            '<ul class="application_list_one_ul_childer">' +
            // '<li>' +
            // '<img src="">' +
            // '<a href="javascript:;" class="del">删除</a>' +
            // '</li>' +
            '</ul>' +
            '<p class="text-error">' + str2 + '</p>' +
            '<p class="text-error">请上传单张图片在2M内的彩色图片，格式可为bmp、png、jpg</p>' +
            '<p class="text-error">最多只能上传5张图片</p>' +
            '<p class="text-error">系统出现错误</p>';
        div.innerHTML = str;
        if (subject_boolean) {
            div.style.paddingLeft = '40px';
            div.getElementsByTagName('ul')[0].style.paddingLeft = '10px';
            div.getElementsByTagName('a')[0].style.display = 'none';
        } else {
            div.style.paddingLeft = '40px';
            div.style.position = 'relative';
        }
        return div;
    }


    // 生成有效期开始时间公共方法
    this.validity_start_time = function (data, componentNextPro, idChildren, idParent, strs, idP) {
        var idChildrens = idChildren + '_input';
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var dom = null;
        if (subject_boolean) {
            dom = '';
        } else {
            dom = "<i class='wildcards'>*</i>";
        }
        var str = dom +
            "<label class='lable_lefts_time'>" + strs + "</label>" +
            "<div class='col-sm-6 col-sm_time'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id=\"" + idChildren + "\">" +
            "<input type='text' id=\"" + idChildrens + "\" class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<i class='col-sm_time_i'>至</i>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById(idParent);
        // console.log(organization_code_certificate)
        organization_code_certificate.appendChild(div);
        $('#' + idChildren).datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        if (subject_boolean == true) {
            // console.log(input);
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '40px';
        } else {
            div.style.paddingLeft = '40px';
        }
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            var text_errors_timeone = document.getElementById(idP);
            data.value = input.value ? input.value : "";
            var a = data.verification_method();

            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
                input.setAttribute('isnext', 'nextStep');
            } else {
                text_errors_timeone.style.display = 'none';
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                }
            }

            if (componentNextPro) {

                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            text_errors_timeone.style.display = 'none';
        }

    }


    // 生成有效期结束时间公共方法
    this.validity_end_time = function (data, componentNextPro, idChildren, idParent, idp) {
        var idChildrens = idChildren + '_input'
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<div class='col-sm-6'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id=\"" + idChildren + "\">" +
            "<input type='text' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById(idParent);
        organization_code_certificate.appendChild(div);
        $('#' + idChildren).datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        var p1 = document.createElement('p');
        p1.setAttribute('id', idp);
        p1.className = "text-errors_timeone";
        organization_code_certificate.appendChild(p1);
        var p2 = document.createElement('p');
        p2.className = "text-errors_timetwo";
        organization_code_certificate.appendChild(p2);
        if (subject_boolean == true) {
            // console.log(input);
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
        }
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                p2.style.display = 'block';
                p2.innerHTML = a;
                input.setAttribute('isnext', 'nextStep');
            } else {
                p2.innerHTML = '';
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                }
            }
            if (componentNextPro) {
                componentNextPro(data);

            }
        }
        input.onfocus = function () {
            //  p2.style.display = 'none';
            p2.innerHTML = '';
        }

    }

    // 上传单张图片验证的公共方法
    this.publicImgUupData = function (dom, data) {
        var yingyezhizhao = document.getElementById(dom);
        var aA = yingyezhizhao.getElementsByTagName('a');
        var inputs = yingyezhizhao.getElementsByTagName('input');
        var ul = yingyezhizhao.getElementsByTagName('ul')[0];
        var p = yingyezhizhao.getElementsByTagName('p');
        var span = yingyezhizhao.getElementsByTagName('span')[0];
        // var img = ul.getElementsByTagName('img')[0];
        // var li = ul.getElementsByTagName('li')[0];
        //li.style.display = 'none';
        p[0].style.display = 'none';
        p[1].style.display = 'none';

        if (subject_boolean) {
            yingyezhizhao.style.paddingLeft = '40px';
        }

        inputs[0].onchange = function () {
            var file = this.files[0];
            this.value = null;
            //  console.log('this.files[0]',this.files[0]);
            //   console.log('删除图片后是否进change事件里面来');
            if (!file) {
                p[0].style.display = 'block';
                inputs[0].setAttribute('isnext', 'nextStep');
                return;
            }

            var sizeImg = file.size;
            if (sizeImg > 1024 * 1024 * 2) {
                p[1].style.display = 'block';
                //  inputs[0].setAttribute('isnext', 'nextStep');
                return;
            } else {
                p[0].style.display = 'none';
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (ev) {
                var li = document.createElement('li');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.setAttribute('class', 'del');
                img.src = ev.target.result;
                ul.innerHTML = '';
                ul.appendChild(li);
                li.appendChild(img);
                li.appendChild(a);
                data.value = file;
                img.src = ev.target.result;
                span.innerHTML = '重新上传';
                p[0].style.display = 'none';
                p[1].style.display = 'none';
                if (inputs[0].hasAttribute('isnext')) {
                    inputs[0].removeAttribute('isnext');
                }
                li.onmousemove = function () {
                    if (!subject_boolean) {
                        a.style.display = 'block';
                    }
                    a.onclick = function () { // 单张图片的删除
                        li.remove();
                        p[0].style.display = 'block';
                        data.value = null;
                        file = null;
                        //    console.log('data.value', data.value);
                        //   console.log('file', file);
                    }
                }
                li.onmouseout = function () {
                    a.style.display = 'none';
                }



                img.onclick = function () {
                    if (!subject_boolean) {
                        var imgs = new Image();
                        imgs.src = this.src;
                        imgs.onload = function () {
                            $('#bodyImg').show();
                            $('#bodyImgChildren').attr('src', imgs.src);
                            var w = $('#bodyImgChildren').outerWidth();
                            var h = $('#bodyImgChildren').outerHeight();
                            var windowW = $(window).width();
                            var windowH = $(window).height();
                            // window.open(imgs.src);
                            //  console.log('图片的宽高', w, h);
                            //   console.log('游览器的宽高', windowW, windowH);
                            if (windowW - w <= 0) {
                                w = windowW * 0.8;
                                h = windowH * 0.8;
                                $('#bodyImgChildren').css({
                                    'width': w + 'px',
                                    'height': h + 'px'
                                });
                            }

                            var left = (windowW - w) / 2;
                            var top = (windowH - h) / 2;

                            if (top <= 200) {
                                $('#bodyImgClose').css({
                                    'right': '5%',
                                    'top': '5%'
                                });
                            } else {
                                $('#bodyImgClose').css({
                                    'right': '10%',
                                    'top': '15%'
                                })
                            }

                            //  console.log('修改后图片的宽高', w, h);
                            //  console.log('windowW-w和windowH-h', windowW - w, windowH - h);
                            //  console.log('定位的值', left, top);
                            $('#bodyImgChildren').css({
                                'top': top + 'px',
                                'left': left + 'px'
                            })
                        }
                    }
                }






            }

        }


        if (data.value) {
            var file = data.value;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (ev) {
                var li = document.createElement('li');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.setAttribute('class', 'del');
                img.src = ev.target.result;
                ul.appendChild(li);
                li.appendChild(img);
                li.appendChild(a);
                data.value = file;
                img.src = ev.target.result;
                span.innerHTML = '重新上传';
                p[0].style.display = 'none';
                p[1].style.display = 'none';
                if (p[0].hasAttribute('isnext')) {
                    p[0].removeAttribute('isnext');
                }
                if (p[1].hasAttribute('isnext')) {
                    p[1].removeAttribute('isnext');
                }
                li.onmousemove = function () {
                    if (!subject_boolean) {
                        a.style.display = 'block';
                    }
                    a.onclick = function () { // 单张图片的删除
                        li.remove();
                        p[0].style.display = 'block';
                        data.value = null;
                        file = null;
                    }
                }
                li.onmouseout = function () {
                    a.style.display = 'none';
                }



                img.onclick = function () {
                    if (!subject_boolean) {
                        var imgs = new Image();
                        imgs.src = this.src;
                        imgs.onload = function () {
                            $('#bodyImg').show();
                            $('#bodyImgChildren').attr('src', imgs.src);
                            var w = $('#bodyImgChildren').outerWidth();
                            var h = $('#bodyImgChildren').outerHeight();
                            var windowW = $(window).width();
                            var windowH = $(window).height();
                            // window.open(imgs.src);
                            // console.log('图片的宽高', w, h);
                            // console.log('游览器的宽高', windowW, windowH);
                            if (windowW - w <= 0) {
                                w = windowW * 0.8;
                                h = windowH * 0.8;
                                $('#bodyImgChildren').css({
                                    'width': w + 'px',
                                    'height': h + 'px'
                                });
                            }
                            var left = (windowW - w) / 2;
                            var top = (windowH - h) / 2;
                            if (top <= 200) {
                                $('#bodyImgClose').css({
                                    'right': '5%',
                                    'top': '5%'
                                });
                            } else {
                                $('#bodyImgClose').css({
                                    'right': '10%',
                                    'top': '15%'
                                })
                            }

                            // console.log('修改后图片的宽高', w, h);
                            // console.log('windowW-w和windowH-h', windowW - w, windowH - h);
                            //  console.log('定位的值', left, top);
                            $('#bodyImgChildren').css({
                                'top': top + 'px',
                                'left': left + 'px'
                            })
                        }

                    }

                }


            }

        }


        if (subject_boolean) {
            // aA[0].remove();
            ul.style.paddingLeft = '10px';
        }





    }



    // 多图片上传
    this.multiple_pictures = function (dom, data) {
        var parentId = document.getElementById(dom);
        var _this = this;
        var ul_ul = parentId.getElementsByTagName('ul')[0];
        var input = parentId.getElementsByTagName('input')[0];
        var span_span = parentId.getElementsByTagName('span')[0];
        var p_p = parentId.getElementsByTagName('p');
        ul_ul.innerHTML = '';
        p_p[0].style.display = 'none';
        p_p[1].style.display = 'none';
        p_p[2].style.display = 'none';
        p_p[3].style.display = 'none';
        ul_ul.innerHTML = '';
        var arr = [];
        arr = data.value ? data.value : [];
        data.value = data.value ? data.value : [];
        input.onchange = function () {
            var that = this;
            //  console.log('触发了input的onchange事件');
            _this.onchangePic(that, data, arr, ul_ul, span_span, p_p, input);
        }

        if (data.value && data.value.length > 0) {
            for (let i = 0; i < data.value.length; i++) {
                var file = data.value[i];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (ev) {
                    var li = document.createElement('li');
                    var img = document.createElement('img');
                    var a = document.createElement('a');
                    a.setAttribute('class', 'del');
                    img.src = ev.target.result;
                    ul_ul.appendChild(li);
                    li.appendChild(img);
                    li.appendChild(a);
                    var lis = null;
                    li.onmousemove = function () {
                        if (!subject_boolean) {
                            a.style.display = 'block';
                        }
                        lis = ul_ul.children;
                        for (let j = 0; j < lis.length; j++) {
                            var a_a = lis[j].children[1];
                            a_a.onclick = function () {
                                arr.splice(j, 1);
                                data.value = arr;
                                this.parentNode.remove();
                                if (arr.length == 0) {
                                    p_p[0].style.display = 'block';
                                    file = null;
                                }
                            }
                        }
                    }
                    li.onmouseout = function () {
                        a.style.display = 'none';
                    }


                    img.onclick = function () {
                        if (!subject_boolean) {
                            var imgs = new Image();
                            imgs.src = this.src;
                            imgs.onload = function () {
                                $('#bodyImg').show();
                                $('#bodyImgChildren').attr('src', imgs.src);
                                var w = $('#bodyImgChildren').outerWidth();
                                var h = $('#bodyImgChildren').outerHeight();
                                var windowW = $(window).width();
                                var windowH = $(window).height();
                                // window.open(imgs.src);
                                // console.log('图片的宽高', w, h);
                                // console.log('游览器的宽高', windowW, windowH);
                                if (windowW - w <= 0) {
                                    w = windowW * 0.8;
                                    h = windowH * 0.8;
                                    $('#bodyImgChildren').css({
                                        'width': w + 'px',
                                        'height': h + 'px'
                                    });
                                }
                                var left = (windowW - w) / 2;
                                var top = (windowH - h) / 2;
                                if (top <= 200) {
                                    $('#bodyImgClose').css({
                                        'right': '5%',
                                        'top': '5%'
                                    });
                                } else {
                                    $('#bodyImgClose').css({
                                        'right': '10%',
                                        'top': '15%'
                                    })
                                }

                                // console.log('修改后图片的宽高', w, h);
                                // console.log('windowW-w和windowH-h', windowW - w, windowH - h);
                                //  console.log('定位的值', left, top);
                                $('#bodyImgChildren').css({
                                    'top': top + 'px',
                                    'left': left + 'px'
                                })
                            }
                        }
                    }


                }
            }

        }
    }


    //多图片上传onchange后的方法
    this.onchangePic = function (that, data, arr, ul, span, p, input) {
        span.innerText = '继续上传';
        var files = that.files;
        var num = 0;
        // that.outerHTML = that.outerHTML;
        var _this = this;
        if (files.length == 0 && data.value.length == 0) {
            p[0].style.display = 'block';
            input.setAttribute('isnext', 'nextStep');
            return;
        }
        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            var sizeImg = file.size;

            num += 1;
            var len = data.value.length + num;
            if (len > 5) {
                p[2].style.display = 'block';
                // console.log(input)
                // input.setAttribute('isnext', 'nextStep');
                return;
            }

            if (sizeImg > 1024 * 1024 * 2) {
                p[1].style.display = 'block';
                //  input.setAttribute('isnext', 'nextStep');
                return;
            }

            var reader = new FileReader();
            if (!reader) {
                alert('对不起，您的浏览器不支持！请更换浏览器试一下');
                return
            }
            reader.readAsDataURL(files[i]);
            reader.onload = function (ev) {
                ev.target.value = null;
                arr.push(files[i]);
                data.value = arr;
                var li = document.createElement('li');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.setAttribute('class', 'del');
                img.src = ev.target.result;
                ul.appendChild(li);
                li.appendChild(img);
                li.appendChild(a);
                p[0].style.display = 'none';
                p[1].style.display = 'none';
                p[2].style.display = 'none';
                p[3].style.display = 'none';
                var lis = null;
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                };
                li.onmousemove = function () {
                    if (!subject_boolean) {
                        a.style.display = 'block';
                    }
                    lis = ul.children;
                    for (let j = 0; j < lis.length; j++) {
                        var a_a = lis[j].children[1];
                        a_a.onclick = function () {
                            arr.splice(j, 1);
                            data.value = arr; // 这个里面的data.value也是被删掉了；
                            // var parentDom=this.parentNode.parentNode;
                            // var parentPrev=parentDom.previousSibling;
                            // var childDom=parentPrev.children[0];
                            // var inputs=document.createElement('input');
                            // var spans=document.createElement('span');
                            // inputs.className='input_updata';
                            // inputs.setAttribute('type','file');
                            // inputs.setAttribute('multiple','multiple');
                            // spans.innerHTML='上传';
                            input.type = 'text';
                            input.type = 'file';
                            this.parentNode.remove();
                            if (!arr[0]) {
                                input.setAttribute("isNext", "nextStep");
                                p[0].style.display = 'block';

                            }
                        }
                    }
                }
                li.onmouseout = function () {
                    a.style.display = 'none';
                }


                img.onclick = function () {
                    if (!subject_boolean) {
                        var imgs = new Image();
                        imgs.src = this.src;
                        imgs.onload = function () {
                            $('#bodyImg').show();
                            $('#bodyImgChildren').attr('src', imgs.src);
                            var w = $('#bodyImgChildren').outerWidth();
                            var h = $('#bodyImgChildren').outerHeight();
                            var windowW = $(window).width();
                            var windowH = $(window).height();
                            // window.open(imgs.src);
                            // console.log('图片的宽高', w, h);
                            // console.log('游览器的宽高', windowW, windowH);
                            if (windowW - w <= 0) {
                                w = windowW * 0.8;
                                h = windowH * 0.8;
                                $('#bodyImgChildren').css({
                                    'width': w + 'px',
                                    'height': h + 'px'
                                });
                            }
                            var left = (windowW - w) / 2;
                            var top = (windowH - h) / 2;
                            if (top <= 200) {
                                $('#bodyImgClose').css({
                                    'right': '5%',
                                    'top': '5%'
                                });
                            } else {
                                $('#bodyImgClose').css({
                                    'right': '10%',
                                    'top': '15%'
                                })
                            }

                            // console.log('修改后图片的宽高', w, h);
                            // console.log('windowW-w和windowH-h', windowW - w, windowH - h);
                            //  console.log('定位的值', left, top);
                            $('#bodyImgChildren').css({
                                'top': top + 'px',
                                'left': left + 'px'
                            })
                        }

                    }
                }



            }
        }
    }



    // 公共方法生成节点
    this.input_box = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        var iOne = document.createElement('i');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        iOne.className = "wildcard";
        iOne.innerHTML = '*';
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.type = 'text';
        input.className = "input_public";
        var matation_business_pictrue_box = document.getElementById('matation_business_pictrue_box');
        div.appendChild(iOne);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        matation_business_pictrue_box.appendChild(div);

        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '40px';
            iOne.style.display = 'none';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
            div.style.paddingLeft = '40px';
        }

// application_list_one_ul_li_div

        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method(); // 前面赋值了，后面调用函数；
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                //  p.setAttribute("isNext", "nextStep");
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }
            }

            var shenfenzheng_nama_input = document.getElementById('shenfenzheng_nama_input');
            if (shenfenzheng_nama_input.value.trim()) {
                shenfenzheng_nama_input.onblur();
            }

            if (data.caption.replace(/\s+/g, '') == '个体户经营者/法人姓名') {
                var str = input.value;
                $('#updata_legal_person').text('请上传法人\"' + str + '\"的身份证/护照');
            }

            if (componentNextPro) {
                componentNextPro(data);
            }


        }

        input.onfocus = function () {
            p.style.display = 'none';
        }

        if (data.caption == "注册号") {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据营业执照，填写15位注册号或18位的统一社会信用代码';
            div.appendChild(divs);
        }

        if (data.caption == '商户名称' && subject_type == 'SUBJECT_TYPE_INDIVIDUAL') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '若营业执照上名称为空或为“无字号”，请填写“个体户+经营者姓名”，如“个体户张三”';
            div.appendChild(divs);
            input.setAttribute('id', 'registered_merchant_name');
        }

        if (data.caption.replace(/\s+/g, '') == '个体户经营者/法人姓名') {
            input.setAttribute('id', 'getihu_farendaibiao');
            div.style.height='50px';
        }
    }


    this.input_box_dengji = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var iOne = document.createElement('i');
        iOne.className = 'wildcard';
        iOne.innerHTML = '*';
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.type = 'text';
        input.className = "input_public";
        var matation_business_pictrue_box = document.getElementById('matation_business_dengji_box');
        div.appendChild(iOne);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        matation_business_pictrue_box.appendChild(div);


        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '40px';
            iOne.style.display = 'none';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
            div.style.paddingLeft = '40px';
        }



        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method(); // 前面赋值了，后面调用函数；
            if (componentNextPro) {
                componentNextPro(data);
            }
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");

            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }
            }
            var shenfenzheng_nama_input = document.getElementById('shenfenzheng_nama_input');
            if (shenfenzheng_nama_input.value.trim()) {
                shenfenzheng_nama_input.onblur();
            }


            if (data.caption == '法人姓名') {
                var str = input.value;
                // $('#updata_legal_person').text('请上传法人\''+$('#dengji_faren_xingming).val()+'\'的身份证/护照')
                $('#updata_legal_person').text('请上传法人\"' + str + '\"的身份证/护照');
            }

        }

        input.onfocus = function () {
            p.style.display = 'none';
        }

        if (data.caption == "证书号") {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据登记证书，填写证书号码';
            div.appendChild(divs);

        }

        if (data.caption == '注册地址') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据营业执照/登记证书，填写注册地址';
            div.appendChild(divs);
        }
        if (data.caption == '商户名称') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据登记证书，填写商户名称';
            div.appendChild(divs);
        }
        if (data.caption == '法人姓名') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据营业执照/登记证书，填写法定代表人姓名';
            div.appendChild(divs);
            input.setAttribute('id', 'dengji_faren_xingming')
        }
    }

    // 生成分类标题如主体信息，经营信息等
    this.matation_title = function (str) {
        var str = '<div class="info-hd">' +
            '<span class="ng-binding">' + str + '</span></div>';
        return str;
    }


    // 多选框公共方法
    this.checkbox_public = function (data, caption, arr, dom, nextPro, ids) {
        var ul = document.createElement("ul");
        var labelCaption = document.createElement("label");
        var iOne = document.createElement('i');
        iOne.className = 'wildcard_jiesuan';
        iOne.innerHTML = '*';
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.setAttribute('id', ids);
        ul.appendChild(iOne);
        ul.appendChild(labelCaption);
        ul.appendChild(div);
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            str += '<li>' +
                '<input type="checkbox" name=\'' + arr[i].type + '\' class="radioSelect_checkbox">' +
                '<i class="checkbox_i">' + arr[i].name + '</i>' +
                '</li>';
        }

        if (subject_boolean) {
            ul.style.paddingLeft = '30px';
            div.innerHTML = data.value;
            iOne.style.display = 'none';
        } else {
            div.innerHTML = str;
        }

        dom.appendChild(ul);
        var inputs = ul.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                nextPro(arr[i].type, this.checked, i);
            }
        }

        var divText = document.createElement('div');
        divText.innerHTML = '请勾选实际售卖商品/提供服务场景（至少一项），以便为你开通需要的支付权限。建议只勾选目前必须的场景，<br />以便尽快通过入驻审核，其他支付权限你可在入驻后再根据实际需要发起申请'
        divText.setAttribute('class', 'tips-info');
        dom.appendChild(divText);
    }


    // 选择登记证书 方法
    this.xuanze_dengji = function () {
        var dom = null;
        if (subject_boolean) {
            dom = '';
        } else {
            dom = '<i class="wildcard_leixing">*</i>';
        }
        var str = dom + '<label class="lable_left">登记证书类型</label><span class="span_public" id="common_xuanze_zhengji_span">请选择<i class="triangle_banks"></i></span><p id="common_xuanze_zhengji_p_yuansu">请选择证书类型</p>'
        return str;
    }

    // 上一步下一步保存草稿按钮
    this.prev_next = function () {
        var str = '<ul class="list"><li>返回</li><li>保存草稿</li><li>保存并下一步</li></ul>';
        return str;
    }

    // 根据class获取元素；
    this.getClassName_dom = function (parents, dom_class) {
        var dom = parents.getElementsByTagName('*');
        var dom_arr = [];
        for (var i = 0; i < dom.length; i++) {
            if (dom[i].className == dom_class) {
                dom_arr.push(dom[i]);
            }
        }

        return dom_arr;
    }

}


// 自己做的回退事件
function pushHistory_two() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#two");
}