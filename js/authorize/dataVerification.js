// 验证第一个保存
function verification_one() {
	subject_boolean = false;
	var arr_isnext = [];
	var matation_business_pictrue_box = document.getElementById('matation_business_pictrue_box'); // 营业执照
	var matation_business_dengji_box = document.getElementById('matation_business_dengji_box'); // 登记证书
	var organization_code_certificate = document.getElementById('organization_code_certificate'); // 组织机构代码
	var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom'); // 法定代表人身份证信息
	var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo'); // 法定代表人港澳台护照信息;
	var divChildrenTwo = document.getElementById('divChildrenTwo'); // 受益人信息
	var divChildrenThree = document.getElementById('divChildrenThree'); // 证件有效期限；
	var input_zhizhao_pic = getClassName_doms(matation_business_pictrue_box, 'input_updata'); //营业执照照片；
	var input_zhizhao_input = getClassName_doms(matation_business_pictrue_box, 'input_public'); //营业执照input框；
	var input_dengji_pic = getClassName_doms(matation_business_dengji_box, 'input_updata'); //登记执照照片；
	var input_dengji_input = getClassName_doms(matation_business_dengji_box, 'input_public'); //登记执照input框；
	var input_dengji_riqi = getClassName_doms(matation_business_dengji_box, 'form-control'); //登记执照到期日期；
	var input_zuzhi_pic = getClassName_doms(organization_code_certificate, 'input_updata'); // 组织机构照片；
	var input_zuzhi_input = getClassName_doms(organization_code_certificate, 'input_public'); // 组织机构input框
	var input_zuzhi_riqi = getClassName_doms(organization_code_certificate, 'form-control'); //组织机构执照到期日期；
	var input_shenfenzheng_pic = getClassName_doms(form_item_shenfenzhengbottom, 'input_updata'); //法人证件身份证照片；
	var input_shenfenzheng_input = getClassName_doms(form_item_shenfenzhengbottom, 'input_public'); //法人证件身份证input框；
	var input_shenfenzheng_riqi = getClassName_doms(form_item_shenfenzhengbottom, 'form-control'); //法人证件身份证input框；
	var input_huzhao_pic = getClassName_doms(form_item_shenfenzhengbottomTwo, 'input_updata'); //法人证件身份证照片；
	var input_huzhao_input = getClassName_doms(form_item_shenfenzhengbottomTwo, 'input_public'); //法人证件身份证input框；
	var input_huzhao_riqi = getClassName_doms(form_item_shenfenzhengbottomTwo, 'form-control'); //法人证件身份证到期日期；

	var input_shouyiren_input = getClassName_doms(divChildrenTwo, 'input_public'); //受益人证件身份证input框；
	var input_shouyiren_riqi = getClassName_doms(divChildrenThree, 'form-control'); //受益人证件身份证到期日期；

	var information_fill_span = document.getElementById('information_fill_span');
	var information_fill_img = document.getElementById('information_fill_img');
	if (subject_type == 'SUBJECT_TYPE_ENTERPRISE' || subject_type == 'SUBJECT_TYPE_INDIVIDUAL') { // 营业执照input 调用
		for (let i = 0; i < input_zhizhao_pic.length; i++) {
			var ul_pic_dom = input_zhizhao_pic[i].parentNode.parentNode.nextElementSibling;
			if (ul_pic_dom.children.length == 0) {
				input_zhizhao_pic[i].onchange();
			}

			if (input_zhizhao_pic[i].hasAttribute('isnext')) {
				arr_isnext.push(input_zhizhao_pic[i]);
			}
		};
		for (let i = 0; i < input_zhizhao_input.length; i++) {
			input_zhizhao_input[i].onblur();
			if (input_zhizhao_input[i].hasAttribute('isnext')) {
				arr_isnext.push(input_zhizhao_input[i]);
			}
		}
	}
	if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS') { // 登记证书input 调用
		for (let i = 0; i < input_dengji_pic.length; i++) {
			var ul_pic_dom = input_dengji_pic[i].parentNode.parentNode.nextElementSibling;
			// console.log(ul_pic_dom)
			if (ul_pic_dom.children.length == 0) {
				//// console.log('登记证书')
				input_dengji_pic[i].onchange();
			}

			if (input_dengji_pic[i].hasAttribute('isnext')) {
				arr_isnext.push(input_dengji_pic[i]);
			}
		};
		for (let i = 0; i < input_dengji_input.length; i++) {
			input_dengji_input[i].onblur();
			if (input_dengji_input[i].hasAttribute('isnext')) {
				arr_isnext.push(input_dengji_input[i]);
			}
		}
		for (let i = 0; i < input_dengji_riqi.length; i++) {
			input_dengji_riqi[i].onblur();
			if (input_dengji_riqi[i].hasAttribute('isnext')) {
				arr_isnext.push(input_dengji_riqi[i]);
			}
		}
	}


	if (wechartJson[0].is_organization || wechartJson[0].is_organization_dang || wechartJson[0].is_organization_gongyi) { // 组织机构input 调用  这个是企业类型的
		for (var i = 0; i < input_zuzhi_pic.length; i++) {
			var ul_pic_dom = input_zuzhi_pic[i].parentNode.parentNode.nextElementSibling;
			if (ul_pic_dom.children.length == 0) {
				input_zuzhi_pic[i].onchange();
			}

			if (input_zuzhi_pic[i].hasAttribute('isnext')) {
				arr_isnext.push(input_zuzhi_pic[i]);
			}
		};
		for (var i = 0; i < input_zuzhi_input.length; i++) {
			input_zuzhi_input[i].onblur();
			if (input_zuzhi_input[i].hasAttribute('isnext')) {
				arr_isnext.push(input_zuzhi_input[i]);
			}
		}
		for (var i = 0; i < input_zuzhi_riqi.length; i++) {
			input_zuzhi_riqi[i].onblur();
			if (input_zuzhi_riqi[i].hasAttribute('isnext')) {
				arr_isnext.push(input_zuzhi_riqi[i]);
			}
		}
	}

	if (wechartJson[0].is_ID_or_passport) { // 证件类型 身份证
		for (var i = 0; i < input_shenfenzheng_pic.length; i++) {
			var ul_pic_dom = input_shenfenzheng_pic[i].parentNode.parentNode.nextElementSibling;
			if (ul_pic_dom.children.length == 0) {
				input_shenfenzheng_pic[i].onchange();
			}

			if (input_shenfenzheng_pic[i].hasAttribute('isnext')) {
				arr_isnext.push(input_shenfenzheng_pic[i]);
			}
		}
		for (let i = 0; i < input_shenfenzheng_input.length; i++) {
			input_shenfenzheng_input[i].onblur();
			if (input_shenfenzheng_input[i].hasAttribute('isnext')) {
				arr_isnext.push(input_shenfenzheng_input[i]);
			}
		}
		for (let i = 0; i < input_shenfenzheng_riqi.length; i++) {
			input_shenfenzheng_riqi[i].onblur();
			if (input_shenfenzheng_riqi[i].hasAttribute('isnext')) {
				arr_isnext.push(input_shenfenzheng_riqi[i]);
			}
		}

	} else { // 证件类型 护照类
		for (var i = 0; i < input_huzhao_pic.length; i++) {
			var ul_pic_dom = input_huzhao_pic[i].parentNode.parentNode.nextElementSibling;
			if (ul_pic_dom.children.length == 0) {
				input_huzhao_pic[i].onchange();
			}

			if (input_huzhao_pic[i].hasAttribute('isnext')) {
				arr_isnext.push(input_huzhao_pic[i]);
			}
		}
		for (let i = 0; i < input_huzhao_input.length; i++) {
			input_huzhao_input[i].onblur();
			if (input_huzhao_input[i].hasAttribute('isnext')) {
				arr_isnext.push(input_huzhao_input[i]);
			}
		}
		for (let i = 0; i < input_huzhao_riqi.length; i++) {
			input_huzhao_riqi[i].onblur();
			if (input_huzhao_riqi[i].hasAttribute('isnext')) {
				arr_isnext.push(input_huzhao_riqi[i]);
			}
		}
	}

	if (wechartJson[0].is_beneficiary == false) { // 受益人显示
		if (wechartJson[0].is_beneficiary_pic) { // 证件类型，身份证类型
			var shenfenzhengzhaopianzhengmian_one = document.getElementById('shenfenzhengzhaopianzhengmian_one');
			var shenfenzhengzhaopianfanmian_one = document.getElementById('shenfenzhengzhaopianfanmian_one');
			var input_zheng = shenfenzhengzhaopianzhengmian_one.getElementsByTagName('input')[0];
			var input_fan = shenfenzhengzhaopianfanmian_one.getElementsByTagName('input')[0];
			var ul_pic_dom_zheng = input_zheng.parentNode.parentNode.nextElementSibling;
			var ul_pic_dom_fan = input_fan.parentNode.parentNode.nextElementSibling;

			if (ul_pic_dom_zheng.children.length == 0) {
				input_zheng.onchange();
			}
			if (ul_pic_dom_fan.children.length == 0) {
				input_fan.onchange();
			}

			if (input_zheng.hasAttribute('isnext')) {
				arr_isnext.push(input_zheng);

			}
			if (input_fan.hasAttribute('isnext')) {
				arr_isnext.push(input_fan);

			}

		} else {
			var qitazhengjianzhaopian_one = document.getElementById('qitazhengjianzhaopian_one');
			var input_huzhao = qitazhengjianzhaopian_one.getElementsByTagName('input')[0];
			var ul_pic_dom = input_huzhao.parentNode.parentNode.nextElementSibling;

			if (ul_pic_dom.children.length == 0) {
				input_huzhao.onchange();
			}
			if (input_huzhao.hasAttribute('isnext')) {
				arr_isnext.push(input_huzhao);
			}

		}

		for (var i = 0; i < input_shouyiren_input.length; i++) {
			input_shouyiren_input[i].onblur();
			if (input_shouyiren_input[i].hasAttribute('isnext')) {
				arr_isnext.push(input_shouyiren_input[i]);
			}
		}

		for (var i = 0; i < input_shouyiren_riqi.length; i++) {
			input_shouyiren_riqi[i].onblur();
			if (input_shouyiren_riqi[i].hasAttribute('isnext')) {
				arr_isnext.push(input_shouyiren_riqi[i]);
			}
		}

	}

	var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');
	var common_xuanze_zhengji_p_yuansu = document.getElementById('common_xuanze_zhengji_p_yuansu');
	var value = common_xuanze_zhengji_span.firstChild.nodeValue;
	if ((subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS') && value == '请选择') {
		common_xuanze_zhengji_p_yuansu.style.display = 'block';
		return;
	}
	if (arr_isnext.length > 0) {
		wechartJson[0].leixing[subject_index].subject_information = false; // 代表主体信息已经填写完成并且确认；
		if(subject_back){
			$('#idErrMsg').text('有资料未填写或填写错误，请检查修改');
			$('#reminderBoxAlert').show();
		}
		return;
	} else {
		wechartJson[0].leixing[subject_index].subject_information = true; // 代表主体信息已经填写完成并且确认；
		ManagementInformation();
		order_of_payment_and_registration();
		$('#information_fill_span').text('经营信息');
		// console.log('返回的文字', $('#information_fill_span').text());
	}

}

// 验证第二个保存
function verification_two() {
	subject_boolean = false;
	var str_xianxia = '线下场所';
	var str_gongzhonghao = '公众号';
	var str_xiaochengxu = '小程序';
	var str_app = 'APP';
	var str_pc = 'PC网站';
	var str_weixin = '企业微信';
	var arr_isnext = [];
	var matation_form_item_shenfenzhengTwo = document.getElementById('matation_form-item_shenfenzhengTwo'); // 商户简称
	var matation_form_item_shenfenzhengThree = document.getElementById('matation_form-item_shenfenzhengThree') // 客服电话
	matation_form_item_shenfenzhengTwo_input = matation_form_item_shenfenzhengTwo.getElementsByTagName('input')[0]; // 商户简称input框；
	matation_form_item_shenfenzhengThree_input = matation_form_item_shenfenzhengThree.getElementsByTagName('input')[0]; // 客服电话input框；
	var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia'); // 线下门店的总的div;
	var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account'); // 公众号总的div;
	var div_applets_scene = document.getElementById('div_applets_scene'); // 小程序总的div;
	var div_app_scence = document.getElementById('div_app_scence'); // app总的div;
	matation_form_item_shenfenzhengTwo_input.onblur(); // 商户简称input框；
	matation_form_item_shenfenzhengThree_input.onblur(); // 客服电话input框；

	if (matation_form_item_shenfenzhengTwo_input.hasAttribute('isnext')) {
		arr_isnext.push(matation_form_item_shenfenzhengTwo_input);
	}
	if (matation_form_item_shenfenzhengThree_input.hasAttribute('isnext')) {
		arr_isnext.push(matation_form_item_shenfenzhengThree_input);
	}

	if (wechartJson[0].business_scenario[0]) {
		for (var i = 0; i < wechartJson[0].business_scenario.length; i++) {
			if (wechartJson[0].business_scenario.indexOf(str_xianxia) != -1) { // 线下场景如果被选中了就执行他的input框
				var input_xianxia_input = getClassName_doms(matation_form_item_xianxia, 'input_public');
				var input_xianxia_pic = getClassName_doms(matation_form_item_xianxia, 'input_updata');
				if (input_xianxia_input[3].value.trim().length > 0) {
					input_xianxia_input[3].onblur(); // 如果线下场景对应的商家APPID（选填）。如果里面有值就执行他的失去焦点事件；看需求
					if (input_xianxia_input[3].hasAttribute('isnext')) {
						arr_isnext.push(input_xianxia_input[3]);
					}
				}
				for (var j = 0; j < input_xianxia_input.length - 1; j++) {
					input_xianxia_input[j].onblur();
					if (input_xianxia_input[j].hasAttribute('isnext')) {
						arr_isnext.push(input_xianxia_input[j]);
					}
				}
				for (var z = 0; z < input_xianxia_pic.length; z++) {
					var ul_pic_dom = input_xianxia_pic[z].parentNode.parentNode.nextElementSibling;
					console.log('线下场所',ul_pic_dom.children.length);
					if (ul_pic_dom.children.length == 0) {
					  //	input_xianxia_pic[z].onchange();  
					  input_xianxia_pic[z].setAttribute("isNext", "nextStep");
					  var p = ul_pic_dom.nextElementSibling;
					//  console.log(p)
                      p.style.display = 'block';
					  if (input_xianxia_pic[z].hasAttribute('isnext')) {
						 arr_isnext.push(input_xianxia_pic[z]);
					  }
					}
					// if (input_xianxia_pic[z].hasAttribute('isnext')) {
					// 	arr_isnext.push(input_xianxia_pic[z]);
					// }
				}
			}

			if (wechartJson[0].business_scenario.indexOf(str_gongzhonghao) != -1) { // 公众号场景如果被选中就执行他的input
				yingyongchangjing(matation_form_item_div_official_account, 'input_public', arr_isnext);
				var gongzhonghao_appid = document.getElementById('gongzhonghao_appid');
				var input = gongzhonghao_appid.getElementsByTagName('input')[0];
				var ul = input.parentNode.parentNode.nextElementSibling;
				if (ul.children.length == 0) {
				//	input.onchange();
					input.setAttribute("isNext", "nextStep");
					var p = ul.nextElementSibling;
					p.style.display = 'block';
					if (input.hasAttribute('isnext')) {
						arr_isnext.push(input);
					}
				}
				
			}

			if (wechartJson[0].business_scenario.indexOf(str_xiaochengxu) != -1) { // 小程序场景如果被选中就执行他的input
				yingyongchangjing(div_applets_scene, 'input_public', arr_isnext);   // 执行小程序APPID
				var xiaochengxu_appid = document.getElementById('xiaochengxu_appid');
				var input = xiaochengxu_appid.getElementsByTagName('input')[0];
			//	console.log(input);
			//	console.log(input.parentNode);
			//	console.log(input.parentNode.parentNode);
				var ul = input.parentNode.parentNode.nextElementSibling;
			//	console.log('小程序',ul);
			//	console.log('小程序',ul.children);
				if (ul.children.length == 0) {
					console.log('没有子元素')
					input.setAttribute("isNext", "nextStep");
					var p = ul.nextElementSibling;
					p.style.display = 'block';
					if (input.hasAttribute('isnext')) {
						arr_isnext.push(input);
					}
				}
				
			}

			if (wechartJson[0].business_scenario.indexOf(str_app) != -1) { //app场景如果被选中就执行他的input
				yingyongchangjing(div_app_scence, 'input_public', arr_isnext);  // 执行app场景APPID
				var app_appids = document.getElementById('app_appid');
				var input = app_appids.getElementsByTagName('input')[0];
				console.log(input);
				var ul = input.parentNode.parentNode.nextElementSibling;
				if (ul.children.length == 0) {
					input.setAttribute("isNext", "nextStep");
					var p = ul.nextElementSibling;
					p.style.display = 'block';
					if (input.hasAttribute('isnext')) {
						arr_isnext.push(input);
					}
				}
			}

			if (wechartJson[0].business_scenario.indexOf(str_pc) != -1) { // pc网站如果被选中就执行他的input
				var input_pc_input = getClassName_doms(div_pc_scence, 'input_public');
				var pc_dom = document.getElementById('pc_Website_authorization');
				var ul = pc_dom.getElementsByTagName('ul')[0];
				var input_pic = pc_dom.getElementsByTagName('input')[0];
				/*
				if (ul.children.length > 0) {        // 验证图片，没有图片的时候才验证
					input_pic.onchange();
					if (input_pic.hasAttribute('isnext')) {
						arr_isnext.push(input_pic);
					}
				}
*/
				if (input_pc_input[1].value.trim().length > 0) { // 这个是验证选填互联网网站对应的商家Appid , 有值得时候才验证；
					input_pc_input[1].onblur();
					if (input_pc_input[1].hasAttribute('isnext')) {
						arr_isnext.push(input_pc_input[1]);
					}
				}

				input_pc_input[0].onblur();
				if (input_pc_input[0].hasAttribute('isnext')) {
					arr_isnext.push(input_pc_input[0]);
				}

			}

			if (wechartJson[0].business_scenario.indexOf(str_weixin) != -1) { // 企业微信如果被选中就执行他的input
				var input_qiye_input = getClassName_doms(div_enterprise_wechat, 'input_public');
				var input_qiye_pic = getClassName_doms(div_enterprise_wechat, 'input_updata')[0];
				input_qiye_input[0].onblur();
				if (input_qiye_input[0].hasAttribute('isnext')) {
					arr_isnext.push(input_qiye_input[0]);
				}
				var ul_pic_dom = input_qiye_pic.parentNode.parentNode.nextElementSibling;
				if (ul_pic_dom.children.length == 0) {
					input_qiye_pic.setAttribute("isNext", "nextStep");
					var p = ul_pic_dom.nextElementSibling;
					p.style.display = 'block';
					if (input_qiye_pic.hasAttribute('isnext')) {
						arr_isnext.push(input_qiye_pic);
					}
				}
				// if (input_qiye_pic[0].hasAttribute('isnext')) {
				// 	arr_isnext.push(input_qiye_pic[0]);
				// }
			}
		}
	}

	//console.log(arr_isnext)

	if (arr_isnext.length > 0) {
		wechartJson[0].leixing[subject_index].business_information = false; // 代表经营信息已经填写完成并且确认；
		if(subject_back){
			$('#idErrMsg').text('有资料未填写或填写错误，请检查修改');
			$('#reminderBoxAlert').show();
		}
		return;
	} else {

		wechartJson[0].leixing[subject_index].business_information = true; // 代表经营信息已经填写完成并且确认；
		// document.getElementById('information_fill_span').innerHTML='结算规则';
		Settlementrules();
		order_of_payment_and_registration();
		$('#information_fill_span').text('结算规则');
		// console.log('返回的文字', $('#information_fill_span').text());
	}

}
// 验证第三个保存
function verification_three() {
	
	subject_boolean = false;
	var arr_isnext = [];
	var arr_dom = [];
	var matation_settlement_rules = document.getElementById('matation_settlement_rules');
	var matation_qualification_type = document.getElementById('matation_qualification_type');
	var qualifications_pic = document.getElementById('qualifications_pic'); // 特殊资质图片
	var discount_rate_id = document.getElementById('discount_rate_id'); // 优惠费率活动ID
	var activities_rate_id = document.getElementById('activities_rate_id'); // 优惠费率活动值 
	var discount_rate_id_input = discount_rate_id.getElementsByTagName('input')[0];
	var activities_rate_id_input = activities_rate_id.getElementsByTagName('input')[0];
	var matation_settlement_rules_children = document.getElementById('matation_settlement_rules_children');
	var matation_settlement_rules_children_span = matation_settlement_rules_children.getElementsByTagName('span')[0];
	var matation_settlement_rules_p_children = document.getElementById('matation_settlement_rules_p_children');
	var matation_qualification_type_children = document.getElementById('matation_qualification_type_children');
	var matation_qualification_type_children_span = matation_qualification_type_children.getElementsByTagName('span')[0];
	var matation_qualification_type_p = document.getElementById('matation_qualification_type_p');

	var qualifications_pic = document.getElementById('qualifications_pic');
	var ul = qualifications_pic.getElementsByTagName('ul')[0];
	var input = qualifications_pic.getElementsByTagName('input')[0];
	arr_dom.push(discount_rate_id_input);
	arr_dom.push(activities_rate_id_input);

	if (matation_settlement_rules_children_span.innerHTML == '请选择') { // 入驻结算规则ID的验证
		// console.log(matation_settlement_rules_p_children);
		matation_settlement_rules_p_children.style.display = 'block';
		return;
	} else {
		matation_settlement_rules_p_children.style.display = 'none';
	}

	if (matation_qualification_type_children_span.innerHTML == '请选择') { // 所属行业的验证
		// console.log(matation_qualification_type_children_p_children)
		matation_qualification_type_p.style.display = 'block';
		return;
	} else {
		matation_qualification_type_p.style.display = 'none';
	}

	if (ul.children.length == 0) { // 特殊资质图片的验证
		// input.onchange();
		input.setAttribute('isnext','nextStep');
		if (input.hasAttribute('isnext')) {
			arr_isnext.push(input);
		}
	}

	for (var i = 0; i < arr_dom.length; i++) { // 这个方法是验证优惠费率活动ID和优惠费率活动值的方法
		if (arr_dom[i].value) {
			arr_dom[i].onblur();
		}
		if (arr_dom[i].hasAttribute('isnext')) {
			arr_isnext.push(arr_dom[i]);
		}
	}


	

	if (arr_isnext.length > 0) {
		wechartJson[0].leixing[subject_index].settlement_rules = false; // 代表结算规则已经填写完成并且确认；
		if(subject_back){
			$('#idErrMsg').text('有资料未填写或填写错误，请检查修改');
			$('#reminderBoxAlert').show();
		}
		return;
	} else {
		//  // console.log('返回的文字',document.getElementById('information_fill_span'));
		wechartJson[0].leixing[subject_index].settlement_rules = true; // 代表结算规则已经填写完成并且确认；
		// document.getElementById('information_fill_span').innerHTML='结算账户';
		SettlementAccount();
		order_of_payment_and_registration();
		$('#information_fill_span').text('结算账户');
		//  // console.log($('#information_fill_span').text());

	}

}
/*
if(subject_boolean == true) {
	divPrev.style.display = 'none';
}
}

*/
// 验证第四个保存
function verification_four() {
	var arr_isnext = [];
	var arr_dom = [];
	subject_boolean = false;
	var matation_form_account_bank_other_p = document.getElementById('matation_form_account_bank_other_p');
	var matation_form_account_name = document.getElementById('matation_form_account_name');
	var input_kaihu = matation_form_account_name.getElementsByTagName('input')[0]; // 开户名称
	var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span'); // 开户银行除了“其他银行”外信息    
	var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two'); // input 其他银行信息
	var matation_form_bank_address_code = document.getElementById('matation_form_bank_address_code');
	var matation_form_bank_address_code_input = matation_form_bank_address_code.getElementsByTagName('input')[0]; // 开户银行省市编码
	var matation_form_bank_branch_id = document.getElementById('matation_form_bank_branch_id');
	var matation_form_bank_branch_id_input = matation_form_bank_branch_id.getElementsByTagName('input')[0]; // 开户行联行号
	var matation_form_bank_name = document.getElementById('matation_form_bank_name');
	var matation_form_bank_name_input = matation_form_bank_name.getElementsByTagName('input')[0]; // 开户银行全称
	var matation_form_account_number = document.getElementById('matation_form_account_number');
	var matation_form_account_number_input = matation_form_account_number.getElementsByTagName('input')[0]; // 银行账号
	//arr_dom.push(input_kaihu);
	arr_dom.push(matation_form_bank_address_code_input);
	arr_dom.push(matation_form_account_number_input);
	arr_dom.push(matation_form_bank_name_input);
	for (var i = 0; i < arr_dom.length; i++) {
		arr_dom[i].onblur();
		if (arr_dom[i].hasAttribute('isnext')) {
			arr_isnext.push(arr_dom[i])
		}
	}
	// console.log(arr_isnext);
	if (common_banks_account_bank_span.firstChild.nodeValue == '请选择') {
		// // console.log('请选择',common_banks_account_bank_span.firstChild.nodeValue)
		matation_form_account_bank_other_p.style.display = 'block';
		return;
	}

	if (common_banks_account_bank_span.firstChild.nodeValue == '其他银行') {
		common_banks_account_bank_span_two.onblur();
		if (common_banks_account_bank_span_two.hasAttribute('isnext')) {
			arr_isnext.push(arr_dom[i]);
		}
	}

	if (arr_isnext.length > 0) {
		wechartJson[0].leixing[subject_index].settlement_account = false; // 代表结算账户已经填写完成并且确认；
		if(subject_back){
			$('#idErrMsg').text('有资料未填写或填写错误，请检查修改');
			$('#reminderBoxAlert').show();
		}
		return;
	} else {
		wechartJson[0].leixing[subject_index].settlement_account = true; // 代表结算账户已经填写完成并且确认；
		//  document.getElementById('information_fill_span').innerHTML='超级管理员';
		SuperAdmin();
		order_of_payment_and_registration();
		$('#information_fill_span').text('超级管理员');
		// // console.log('返回的文字',$('#information_fill_span').text());

	}
}
//// 验证第五个保存
function verification_five() {
	var arr_isnext = [];
	var arr_dom = [];
	subject_boolean = false;
	var matation_form_contact_name = document.getElementById('matation_form_contact_name');
	var input_name_input = matation_form_contact_name.getElementsByTagName('input')[0]; // 超管姓名
	var matation_form_contact_id_number = document.getElementById('matation_form_contact_id_number');
	var input_number_input = matation_form_contact_id_number.getElementsByTagName('input')[0]; // 身份证号码
	var matation_form_contact_openid = document.getElementById('matation_form_contact_openid');
	var input_openid_input = matation_form_contact_openid.getElementsByTagName('input')[0]; // 微信openid
	var matation_form_mobile_phone = document.getElementById('matation_form_mobile_phone');
	var input_phone_input = matation_form_mobile_phone.getElementsByTagName('input')[0]; // 联系手机号码
	var matation_form_contact_email = document.getElementById('matation_form_contact_email');
	var input_email_input = matation_form_contact_email.getElementsByTagName('input')[0]; // 联系邮箱
	arr_dom.push(input_name_input);
	arr_dom.push(input_phone_input);
	arr_dom.push(input_email_input);

	if (wechartJson[0].Idcard_or_openid) {
		arr_dom.push(input_openid_input);
	} else {
		arr_dom.push(input_number_input);
	}

	for (i = 0; i < arr_dom.length; i++) {
		arr_dom[i].onblur();
		if (arr_dom[i].hasAttribute('isnext')) {
			arr_isnext.push(arr_dom[i]);
		}
	}

	if (arr_isnext.length > 0) {
		wechartJson[0].leixing[subject_index].super_administrator = false; // 代表超级管理员已经填写完成并且确认；
		if(subject_back){
			$('#idErrMsg').text('有资料未填写或填写错误，请检查修改');
			$('#reminderBoxAlert').show();
		}
		return;
	} else {

		// document.getElementById('information_fill_span').innerHTML='预览信息';
		wechartJson[0].leixing[subject_index].super_administrator = true; // 代表超级管理员已经填写完成并且确认；
		preview_all_information.click()
		order_of_payment_and_registration();
		subject_fn = 'Yulan_matation';
		$('#information_fill_span').text('预览信息');
		// // console.log('返回的文字',$('#information_fill_span').text());
	}
}

function getClassName_doms(parents, dom_class) {
	var dom = parents.getElementsByTagName('*');
	var dom_arr = [];
	for (var i = 0; i < dom.length; i++) {
		if (dom[i].className == dom_class) {
			dom_arr.push(dom[i]);
		}
	}
	return dom_arr;
}

function yingyongchangjing(ids, className, arr_isnext) { // 谁有值就执行哪个；
	var input_xiaochengxu_input = getClassName_doms(ids, className);
	//console.log(input_xiaochengxu_input[0].value, input_xiaochengxu_input[0].value.length);
	//console.log(input_xiaochengxu_input[1].value, input_xiaochengxu_input[1].value.length);
	if (input_xiaochengxu_input[0].value && !input_xiaochengxu_input[1].value) {
		input_xiaochengxu_input[0].onblur();
		if (input_xiaochengxu_input[0].hasAttribute('isnext')) {
			arr_isnext.push(input_xiaochengxu_input[0]);
		}
	}
	if (input_xiaochengxu_input[1].value && !input_xiaochengxu_input[0].value) {
		input_xiaochengxu_input[1].onblur();
		if (input_xiaochengxu_input[1].hasAttribute('isnext')) {
			arr_isnext.push(input_xiaochengxu_input[1]);
		}
	}
	if (!input_xiaochengxu_input[1].value && !input_xiaochengxu_input[0].value) {
		input_xiaochengxu_input[1].onblur();
		input_xiaochengxu_input[0].onblur();
		if (input_xiaochengxu_input[1].hasAttribute('isnext')) {
			arr_isnext.push(input_xiaochengxu_input[1]);
		}
		if (input_xiaochengxu_input[0].hasAttribute('isnext')) {
			arr_isnext.push(input_xiaochengxu_input[0]);
		}
	}
}