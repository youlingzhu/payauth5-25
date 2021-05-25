//  资料填写，必填信息
function required_information(nextPro) {
    var Information_to_fill_out = document.getElementById('Information_to_fill_out');
    var application_list_one = document.getElementById('application_list_one');
    var applicationParent = document.getElementById('applicationParent');
    var order_application = document.getElementById('order_application');
    // var nextPros = nextPro;
    var strBox = '<div id="information_fill" class="information_fill">' +
        '<b id="information_fill_b"><img src="./img/vector_go.png" id="data_filling"><span>资料填写</span></b>' +
        '</div>' +
        '<div class="content_top">' +
        '<div class="title">申请单信息</div>' +
        '<ul>' +
        '<li><label>已选主体类型</label><span id="zhuti_qiye">企业</span><img id="zhuti_pic" src="./img/vector_bianji.png"></li>' +
        '<li><label>创建时间</label><span>2021-03-08 17:06</span></li>' +
        '<li><label>省申请单编号</label><span>2021-03-08 17:06</span></li>' +
        '</ul>' +
        '</div>' +
        '<div id="required_information">' +
        '<h6>必填信息</h6>' +
        '<ul></ul>' +
        '</div>' +
        '<div id="optional_information">' +
        '<h6>选填信息</h6>' +
        '<div class="middle">' +
        '<h5>补充材料</h5>' +
        '<p>根据实际审核情况，额外要求商家提供指定的补充资料</p>' +
        '</div>' +
        '<div class="bottom">' +
        '<p id="preview_all_information">预览</p>' +
        '</div>' +
        '</div>';
    Information_to_fill_out.innerHTML = strBox;
    var required_information = document.getElementById('required_information');
    var oUl = required_information.getElementsByTagName('ul')[0];
    var zhuti_pic = document.getElementById('zhuti_pic');
    var zhuti_qiye = document.getElementById('zhuti_qiye');
    zhuti_qiye.innerHTML = wechartJson[0].zhuti_leixing; // 已经选择主体类型；
    zhuti_pic.onclick = function () {
        //   console.log(subject_type);
        wechartJson[0].is_beneficiary = false;
        $('#information_fill_subject_title').show();
        document.getElementById('authorized_application_parent').style.display = 'block';
        document.getElementById('Information_to_fill_out').style.display = 'none';
    }
    var objArr = [{
            title: "主体信息",
            content: "请填写商家的营业执照置记证书、经营者法人的证件等信息",
            component: "SubjectInformation",
        },
        {
            title: "经营信息",
            content: "请填写商家的经营业务信息、售卖商品提供服务场景信息",
            component: "ManagementInformation",
        },
        {
            title: "结算规则",
            content: "请填写商家的结算费率规则、特殊资质等信息",
            component: "Settlementrules",
        },
        {
            title: "结算账户",
            content: "请填与商家提现收款的银行账户信息",
            component: "SettlementAccount ",
        },
        {
            title: "超级管理员",
            content: "请填与商家的超级管理员信息，超级管理员需在开户后进行签约，并接收日常重要管理信息和进行资金操作，请确定其为商户法定代表人或负责人",
            component: "SuperAdmin",
        }
    ]

    var arr_ziduan = [];
    var arr_ziduanTwo = [];
    for (var i = 0; i < objArr.length; i++) {
        var li = document.createElement('li');
        var divL = document.createElement('div');
        li.appendChild(divL);
        divL.setAttribute('class', 'left');
        var div = document.createElement('div');
        var i_dom = document.createElement('i');
        divL.appendChild(div);
        divL.appendChild(i_dom);
        // 判断左边的是图片还是数字
        renderLeft(div, i, arr_ziduanTwo);
        if (i == objArr.length - 1) {
            i_dom.remove();
            li.style.height = '100px'
        }


        var divM = document.createElement('div');
        divM.setAttribute('class', 'middle');
        li.appendChild(divM);
        var h5 = document.createElement('h5');
        h5.innerHTML = objArr[i].title;
        divM.appendChild(h5);
        var p = document.createElement('p');
        divM.appendChild(p);
        p.innerHTML = objArr[i].content;


        var divR = document.createElement('div');
        divR.setAttribute('class', 'right');
        var b = document.createElement('b');
        li.appendChild(divR);
        divR.appendChild(b);
        // 判断是修改，还是去填写；还是没有；
        renderRight(b, arr_ziduan, i);
        oUl.appendChild(li);
    }


    var aB = oUl.getElementsByTagName('b');
    var aLi = oUl.children;


    for (var i = 0; i < aB.length; i++) {
        aB[i].index = i;
        aB[i].onclick = function (event, i) {
            subject_boolean = false;
            Information_to_fill_out.style.display = 'none';
            order_application.style.display = 'block';
            nextPro(objArr[this.index].component);
            pushHistory_one();
            document.getElementById('order_of_payment_and_registration').innerHTML = '';
            order_of_payment_and_registration();
            $('#order_of_payment_and_registration').show();
            $('#olBackinformation li').hide();
            $('#olBackinformation li').eq(this.index).show();
        }
    }

    var preview_all_information = document.getElementById('preview_all_information');
    preview_all_information.onclick = function () { // 点击预览
       
        if (wechartJson[0].leixing[subject_index].subject_information && wechartJson[0].leixing[subject_index].business_information && wechartJson[0].leixing[subject_index].settlement_rules && wechartJson[0].leixing[subject_index].settlement_account && wechartJson[0].leixing[subject_index].super_administrator) {
           
           
            subject_boolean = true; // 这个是预览
            application_list_one.innerHTML = '';
            new RecursiveTool(function (response) {
                if (response.generate_component != null && typeof response.generate_component == 'function') {
                    response.generate_component();
                }
            }).recursive(wechartJson);
            var authorized_application_parent = document.getElementById('authorized_application_parent');
            // console.log(authorized_application_parent);
            var Information_to_fill_out = document.getElementById('Information_to_fill_out');
            var order_application = document.getElementById('order_application');
            authorized_application_parent.style.display = 'none';
            Information_to_fill_out.style.display = 'none';
            order_application.style.display = 'block';
            application_list_one.style.display = 'block';
            order_of_payment_and_registration();
            getClassName_dom(application_list_one, 'upload-tips');
            getClassName_dom(application_list_one, 'tips-info');
            getClassName_dom(application_list_one, 'ico-msg-s');
            getClassName_dom(application_list_one, 'input-group-addon');
            getClassName_dom(application_list_one, 'matation_settlement_rules_bottom');
            //   getClassName_dom(application_list_one,'ng-binding');
            getClassName_dom(application_list_one, 'ng-scope');
            getClassName_dom(application_list_one, 'a-upload');
            // console.log(getClassName_dom(application_list_one, 'ng-scope'), '元素是否存在');
            var divPrev = document.createElement('div');
            divPrev.className = 'matation_form_div_prev';
            divPrev.setAttribute('id', 'matation_form_div_pren_box');
            divPrev.innerHTML += prev_next();
            application_list_one.appendChild(divPrev);
            var li = divPrev.getElementsByTagName('li');
            li[0].setAttribute('id','matation_form_div_pren_li_six');
            li[0].onclick = function () {
                subject_boolean = false;
                SuperAdmin();
                $('#order_of_payment_and_registration').show();
                $('#olBackinformation li').hide();
                $('#information_fill_li_five').show();
            }
            li[2].onclick = function () {
                subject_boolean = false;
                // ajax 请求 ;
                //  console.log('向后台发起请求')
            }

          $('#order_of_payment_and_registration').show();
          $('#olBackinformation li').hide();
          $('#information_fill_li_six').show();

            //  console.log(wechartJson[2].subobject[1].subobject[0]);  form-group
            var form_group = getClassName_dom_time(application_list_one, 'form-group');
            //  console.log(form_group);
            for (var i = 0; i < form_group.length; i++) {

                form_group[i].style.width = '100px';
            }
         }else{
             $('#idErrMsg').text('有资料未填写完整或错误，请填写完整之后再点击预览');   // 有资料未填写或填写错误，请检查修改
             $('#reminderBoxAlert').show();
         }
    }

    // 点击资料填写的返回图标
    $('#information_fill_b').click(function(){
      //  $('#authorized_application_parent').show();
      //  $('#information_fill_subject_title').show();
        $('#zhuti_pic').trigger('click');

    })

}


// 判断左边的是图片还是数字
function renderLeft(div, i, arr) {

    if (wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_ENTERPRISE' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INSTITUTIONS' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INDIVIDUAL' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_OTHERS') {
       // console.log(wechartJson[0].leixing);
       // console.log(subject_index)
        if (wechartJson[0].leixing[subject_index].subject_information && i == 0) {
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].subject_information == false && i == 0) {
            div.innerHTML = i + 1;
            arr.push(div);
            div.style.color = '#FFFFFF';
            div.style.background = '#47CD69';
            div.style.border = 'none';
        }

        if (wechartJson[0].leixing[subject_index].business_information && i == 1) {
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].business_information == false && i == 1) {
            div.style.border = 'none';
            if (arr.length > 0) {
                div.innerHTML = i + 1;
                div.style.color = '#ffffff';
                div.style.background = 'rgba(55, 63, 74)';
                div.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                div.innerHTML = i + 1;
                div.style.background = '#47CD69';
                div.style.color = '#ffffff';
                arr.push(div);
            }
        }

        if (wechartJson[0].leixing[subject_index].settlement_rules && i == 2) {
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_rules == false && i == 2) {
            div.style.border = 'none';
            if (arr.length > 0) {
                div.innerHTML = i + 1;
                div.style.color = '#ffffff';
                div.style.background = 'rgba(55, 63, 74)';
                div.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                div.innerHTML = i + 1;
                div.style.background = '#47CD69';
                div.style.color = '#ffffff';
                arr.push(div);
            }
        }

        if (wechartJson[0].leixing[subject_index].settlement_account && i == 3) {
            //  console.log('wechartJson[0].leixing[subject_index].settlement_account', wechartJson[0].leixing[subject_index].settlement_account)
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_account == false && i == 3) {
            div.style.border = 'none';
            if (arr.length > 0) {
                div.innerHTML = i + 1;
                div.style.color = '#ffffff';
                div.style.background = 'rgba(55, 63, 74)';
                div.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                div.innerHTML = i + 1;
                div.style.background = '#47CD69';
                div.style.color = '#ffffff';
                arr.push(div);
            }
        }

        if (wechartJson[0].leixing[subject_index].super_administrator && i == 4) {
            //  console.log('wechartJson[0].leixing[subject_index].settlement_account', wechartJson[0].leixing[subject_index].settlement_account)
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].super_administrator == false && i == 4) {
            div.style.border = 'none';
            if (arr.length > 0) {
                div.innerHTML = i + 1;
                div.style.color = '#ffffff';
                div.style.background = 'rgba(55, 63, 74)';
                div.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                div.innerHTML = i + 1;
                div.style.background = '#47CD69';
                div.style.color = '#ffffff';
                arr.push(div);
            }
        }
    }
}

//  判断是修改，还是去填写；还是没有；
function renderRight(b, arr, i) {
    if (wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_ENTERPRISE' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INSTITUTIONS' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INDIVIDUAL' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_OTHERS') {
        if (wechartJson[0].leixing[subject_index].subject_information && i == 0) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].subject_information == false && i == 0) {
            b.innerHTML = '去填写';
            arr.push(b);
            b.style.color = '#FFFFFF';
            b.style.background = '#47CD69';
            b.style.border = 'none';
        }

        if (wechartJson[0].leixing[subject_index].business_information && i == 1) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].business_information == false && i == 1) {
            b.style.border = 'none';
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                b.style.background = '#47CD69';
                b.style.color = '#FFFFFF';
                arr.push(b);
            }
        }

        if (wechartJson[0].leixing[subject_index].settlement_rules && i == 2) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].settlement_rules == false && i == 2) {
            b.style.border = 'none';
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                b.style.background = '#47CD69';
                b.style.color = '#FFFFFF';
                arr.push(b);
            }
        }

        if (wechartJson[0].leixing[subject_index].settlement_account && i == 3) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].settlement_account == false && i == 3) {
            b.style.border = 'none';
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                b.style.background = '#47CD69';
                b.style.color = '#FFFFFF';
                arr.push(b);
            }
        }

        if (wechartJson[0].leixing[subject_index].super_administrator && i == 4) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].super_administrator == false && i == 4) {
            b.style.border = 'none';
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                b.style.background = '#47CD69';
                b.style.color = '#FFFFFF';
                arr.push(b);
            }
        }
    }
}

// 必填信息表
order_of_payment_and_registration()
function order_of_payment_and_registration() {
    var order_of_payment_and_registration = document.getElementById('order_of_payment_and_registration');
    order_of_payment_and_registration.style.display='none';
    var order_application = document.getElementById('order_application');
    //  var oUl = order_of_payment_and_registration.getElementsByTagName('ul')[0];
    var objArr = [{
            title: "主体信息",
            content: "请填与商家的营业执照置记证书、经营者法人的证件等信息",
        },
        {
            title: "经营信息",
            content: "请填写商家的经营业务信息、售卖商品提供服务场景信息",
        },
        {
            title: "结算规则",
            content: "请填写商家的结算费率规则、特殊资质等信息",
        },
        {
            title: "结算账户",
            content: "请填写商家提现收款的银行账户信息",
        },
        {
            title: "超级管理员",
            content: "请填写商家的超级管理员信息，超级管理员需在开户后进行签约，并接收日常重要管理信息和进行资金操作，请确定其为商户法定代表人或负责人",
        }
    ];

    var ul = document.createElement('ul');
    var div = document.createElement('div');
    var img = document.createElement('img');
    var span = document.createElement('span');

    var ul_Back=document.createElement('ol');
    ul_Back.setAttribute('id','olBackinformation')
    var strBack='<li index="0" id="information_fill_li_one"><div class="information_fill"><b id="information_fill_content_one"><img src="./img/vector_go.png" id="information_fill_img_one"><span id="information_fill_vector">主体信息</span></b></div></li>'+
    '<li index="1" id="information_fill_li_two"><div class="information_fill"><b id="information_fill_content_two"><img src="./img/vector_go.png" id="information_fill_img_two"><span id="information_fill_vector">经营信息</span></b></div></li>'+
    '<li index="2" id="information_fill_li_three"><div class="information_fill"><b id="information_fill_content_three"><img src="./img/vector_go.png" id="information_fill_img_three"><span id="information_fill_vector">结算规则</span></b></div></li>'+
    '<li index="3" id="information_fill_li_four"><div class="information_fill"><b id="information_fill_content_four"><img src="./img/vector_go.png" id="information_fill_img_four"><span id="information_fill_vector">结算账户</span></b></div></li>'+
    '<li index="4" id="information_fill_li_five"><div class="information_fill"><b id="information_fill_content_five"><img src="./img/vector_go.png" id="information_fill_img_five"><span id="information_fill_vector">超级管理员</span></b></div></li>'+
    '<li index="5" id="information_fill_li_six"><div class="information_fill"><b id="information_fill_content_six"><img src="./img/vector_go.png" id="information_fill_img_six"><span id="information_fill_vector">预览信息</span></b></div></li>'
    ul_Back.innerHTML=strBack;
    order_of_payment_and_registration.innerHTML = '';
    order_of_payment_and_registration.appendChild(ul_Back);
    var str = "";
    var arr_next = [];
    
    $('#information_fill_content_one').click(function(){
        $("#matation_form_div_pren_li_one").trigger('click');
    })
    $('#information_fill_content_two').click(function(){
        console.log($("#matation_form_div_pren_li_two"));
        $("#matation_form_div_pren_li_two").trigger('click');
    })
    $('#information_fill_content_three').click(function(){
        console.log($("#matation_form_div_pren_li_three"));
        $("#matation_form_div_pren_li_three").trigger('click');
    })
    $('#information_fill_content_four').click(function(){
        console.log($("#matation_form_div_pren_li_four"));
        $("#matation_form_div_pren_li_four").trigger('click');
    })
    $('#information_fill_content_five').click(function(){
        console.log($("#matation_form_div_pren_li_five"));
        $("#matation_form_div_pren_li_five").trigger('click');
    })
    $('#information_fill_content_six').click(function(){
        console.log($("#matation_form_div_pren_li_six"));
        $("#matation_form_div_pren_li_six").trigger('click');
    })
   
    for (var i = 0; i < objArr.length; i++) {
        var li = document.createElement('li');
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'left');
        li.appendChild(div1);
        var span_left = document.createElement('span');
        div1.appendChild(span_left)
        // 判断是打钩 还是 数字
        render_next(span_left, i, arr_next);

        var div2 = document.createElement('div');
        div2.setAttribute('class', 'middle');
        li.appendChild(div2);
        var div2_middle = document.createElement('div');
        div2_middle.setAttribute('class', 'middle_solid');
        div2.appendChild(div2_middle);
        var h5 = document.createElement('h5');
        var h3 = document.createElement('h3');
        div2_middle.appendChild(h5);
        div2_middle.appendChild(h3);
        h5.innerHTML = objArr[i].title;

        var p = document.createElement('p');
        p.setAttribute('class', 'p1');
        div2.appendChild(p);
        p.innerHTML = objArr[i].content;
        ul.appendChild(li);

    }


    // ul.innerHTML = str;
    order_of_payment_and_registration.appendChild(ul);

    var lastli = objArr.length - 1;


    var aLi = ul.children[lastli];

    var oP = aLi.getElementsByTagName('p')[0];
    var oH3 = aLi.getElementsByTagName('h3')[0];
    oP.setAttribute('id', 'order_of_payment_and_registration_p_last');
    oP.style.width = '260px';
    oH3.remove();

    var p1 = document.getElementById('order_of_payment_and_registration_p1');
    
    $('#information_fill_li_one').click(function(){
        //window.open()
        console.log('点击了主体信息');
        //history.go(0);
        // window.close();
      
    })
 

}

//这个是资料没有填写完整，弹出的提醒框
reminderBox();

function reminderBox() {
    var divBox = document.createElement('div');
    divBox.setAttribute('id','reminderBoxAlert')
    var applicationParent = document.getElementById('applicationParent');
    applicationParent.appendChild(divBox);
    divBox.style.display='none';
    var str = '<div class="dialog popups1">' +
        '<div class="dialog-hd">' +
        '<h3>温馨提示</h3>' +
        '<a class="ico-cls col" id="reminder_box_cha" href="javascript:;">关闭</a>' +
        '</div>' +
        '<div class="dialog-bd">' +
        '<div class="page-msg align-center align-middle">' +
        '<div class="inner">' +
        '<div class="msg-ico"><i class="ico-msg warn"></i></div>' +
        '<div class="msg-cnt">' +
        '<h4 id="idErrMsg">有资料未填写或填写错误，请检查修改</h4>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="dialog-ft">' +
        '<a class="closes" id="reminder_box_close" href="javascript:;">关闭</a>' +
        '</div>' +
        '</div>' +
        '<div class="mask-layer "></div>';

    divBox.innerHTML = str;
    $('#reminder_box_cha').click(function(){
        divBox.style.display='none';
    });
    $('#reminder_box_close').click(function(){
        divBox.style.display='none';
    })


}

// 自己做的回退事件
function pushHistory_one() {
    window.history.pushState("", "", "");
}

function prev_next() {
    var str = '<ul class="list"><li>返回</li><li>保存草稿</li><li>保存并下一步</li></ul>';
    return str;
}

// 具体的组件到了哪一步了里面是数字还是，图片 打钩
function render_next(span_left, i, arr) {
    // console.log('leixing[subject_index]',wechartJson[0].leixing[subject_index])
    if (wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_ENTERPRISE' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INSTITUTIONS' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INDIVIDUAL' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_OTHERS') {
        // wechartJson[0].leixing[subject_index].subject_information
        if (wechartJson[0].leixing[subject_index].subject_information && i == 0) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].subject_information == false && i == 0) {
            span_left.innerHTML = i + 1;
            arr.push(span_left);
            span_left.style.background = '#47CD69';
            span_left.style.border = 'none';
            span_left.style.color = '#FFFFFF';
        }

        if (wechartJson[0].leixing[subject_index].business_information && i == 1) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].business_information == false && i == 1) {
            span_left.innerHTML = i + 1;
            span_left.style.color = '#FFFFFF';
            span_left.style.border = 'none';
            if (arr.length > 0) {
                span_left.style.background = 'rgba(55, 63, 74)';
                span_left.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                span_left.style.background = '#47CD69';
                arr.push(span_left);
            }
        }


        if (wechartJson[0].leixing[subject_index].settlement_rules && i == 2) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_rules == false && i == 2) {
            span_left.innerHTML = i + 1;
            span_left.style.color = '#FFFFFF';
            span_left.style.border = 'none';
            if (arr.length > 0) {
                span_left.style.background = 'rgba(55, 63, 74)';
                span_left.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                span_left.style.background = '#47CD69';
                arr.push(span_left);
            }
        }

        if (wechartJson[0].leixing[subject_index].settlement_account && i == 3) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_account == false && i == 3) {
            span_left.innerHTML = i + 1;
            span_left.style.color = '#FFFFFF';
            span_left.style.border = 'none';
            if (arr.length > 0) {
                span_left.style.background = 'rgba(55, 63, 74)';
                span_left.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                span_left.style.background = '#47CD69';
                arr.push(span_left);
            }
        }
        if (wechartJson[0].leixing[subject_index].super_administrator && i == 4) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].super_administrator == false && i == 4) {
            span_left.innerHTML = i + 1;
            span_left.style.color = '#FFFFFF';
            span_left.style.border = 'none';
            if (arr.length > 0) {
                span_left.style.background = 'rgba(55, 63, 74)';
                span_left.style.background = 'rgba(55, 63, 74, 0.3)';
            } else {
                span_left.style.background = '#47CD69';
                arr.push(span_left);
            }
        }
    }
}

// 提交注册是否修改弹框
success_xiuigai();

function success_xiuigai() {
    var order_success_alert = document.getElementById('order_success_alert');

    var str = '<div class="top"></div>' +
        '<div class="content">' +
        '<div class="order_success_alert_content_top">' +
        '<span id="order_success_alert_cha"></span>' +
        '<div class="pic">' +
        '<span></span>' +
        '<i></i>' +
        '</div>' +
        '</div>' +
        '<h3>确认提交后将无法修改信息，是否确认提交</h3>' +
        '<div class="bottom">' +
        '<span id="order_success_alert_cancle">返回修改</span>' +
        '<span id="order_success_alert_success">确认提交</span>' +
        '</div>' +
        '</div>';
    order_success_alert.innerHTML = str;
    var order_success_alert_cancle = document.getElementById('order_success_alert_cancle');
    var order_success_alert_success = document.getElementById('order_success_alert_success');
    var order_success_alert_cha = document.getElementById('order_success_alert_cha');
    order_success_alert_cha.onclick = function () {
        order_success_alert.style.display = 'none';
    }
    order_success_alert_cancle.onclick = function () {
        order_success_alert.style.display = 'none';
    }
    order_success_alert_success.onclick = function () {
        var order_success_alert_sueccss = document.getElementById('order_success_alert_sueccss');
        order_success_alert.style.display = 'none';
        order_success_alert_sueccss.style.display = 'block';
    }
}

// 提交注册成功弹框
success();

function success() {
    var order_success_alert_sueccss = document.getElementById('order_success_alert_sueccss');
    var str = '<div class="top"></div>' +
        '<div class="content">' +
        '<div class="order_success_alert_content_top_sueccss">' +
        '<span id="order_success_alert_cha_sueccss"></span>' +
        '<div class="pic">' +
        '<span></span>' +
        '</div>' +
        '</div>' +
        '<h3>提交成功</h3>' +
        '<div class="bottom">' +
        '<span id="order_success_alert_success_sueccss">确认</span>' +
        '</div>' +
        '</div>';
    order_success_alert_sueccss.innerHTML = str;
    var order_success_alert_cha_sueccss = document.getElementById('order_success_alert_cha_sueccss');
    var order_success_alert_success_sueccss = document.getElementById('order_success_alert_success_sueccss');
    order_success_alert_cha_sueccss.onclick = function () {
        order_success_alert_sueccss.style.display = 'none';
    }
    order_success_alert_success_sueccss.onclick = function () {
        order_success_alert_sueccss.style.display = 'none';
        window.location.reload();
    }
}



function getClassName_dom(parents, dom_class) {
    var dom = parents.getElementsByTagName('*');
    var dom_arr = [];
    for (var i = 0; i < dom.length; i++) {
        if (dom[i].className == dom_class) {
            dom_arr.push(dom[i]);
        }
    }
    for (var i = 0; i < dom_arr.length; i++) {
        dom_arr[i].style.display = 'none';
    }
}

function getClassName_dom_time(parents, dom_class) {
    var dom = parents.getElementsByTagName('*');
    var dom_arr = [];
    for (var i = 0; i < dom.length; i++) {
        if (dom[i].className == dom_class) {
            dom_arr.push(dom[i]);
        }
    }
    return dom_arr;
}

closeImg()
function closeImg(){   // 关闭弹框
    $('#bodyImgClose').click(function(){
        $('#bodyImg').hide();
    })
}