var link = "https://fasttopups.com/WebServices/";
$( document ).on( "pageinit", "#paybill", function( event ) {
	$("#paybillback" ).unbind('click').bind('click', backsrvcProvidrPg);
	$("#billhistory" ).unbind('click').bind('click', billhistoryfunc);
});
function paybillfunc(){
//alert(id);
$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     $("#paybilldiv").html("");
    $("#paybilldiv").show();
	var id = id;
	//msg = { "provider_id": id };		
    $.ajax({
        url: link + "GetBiller", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		//data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		var Categorybox = OutputArr.billerlist.BillerList.Category;
		//alert(Categorybox)
		for (var key in Categorybox) {
					var boxArry = Categorybox[key].Biller;
					if($.isArray(boxArry)){
					for (var key in boxArry) {
						var boxname = (boxArry[key].Name).replace(/\b[a-z]/g, function(letter) {
							return letter.toUpperCase();
						});
						var boxid = boxArry[key].Id;
						var shortname = '"'+boxArry[key].ShortName+'"';
						var imgurl = "https://fasttopups.com/img/biller_image/"+boxArry[key].ShortName+".png";
						$('#paybilldiv').append("<div class='coupanBox' onclick='payboxclick("+ boxid +",\""+boxArry[key].ShortName+"\",\""+boxArry[key].Name+"\")'><img src="+imgurl+"  width='100%' height='120px'/><div class='txtshadow'><a href='#'style='font-size:10px'>"+boxname+"</a></div></div>");
					}
					}else{
						var boxname = (boxArry.Name).replace(/\b[a-z]/g, function(letter) {
							return letter.toUpperCase();
						});
						var boxid = boxArry.Id;
						var shortname = '"'+boxArry.ShortName+'"';
						var imgurl = "https://fasttopups.com/img/biller_image/"+boxArry.ShortName+".png";
						$('#paybilldiv').append("<div class='coupanBox' onclick='payboxclick("+ boxid +",\""+boxArry.ShortName+"\",\""+boxArry.Name+"\")'><img src="+imgurl+"  width='100%' height='120px'/><div class='txtshadow'><a href='#'style='font-size:10px'>"+boxname+"</a></div></div>");
						}	
		}
                    $('#paybilldiv').trigger('create');
					$(".ui-loader").hide();
					$.mobile.loading("hide");
				   //$(":mobile-pagecontainer").pagecontainer("change", "#paybill", { reverse: false, transition: "slide", changeHash: false });
   
        }
    });
}
function dropdownlst(){
$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     $("#dropdownlst").html("");
	 $("#dropdownlst-button span").html("Select");
    $("#dropdownlst").show();
	//msg = { "provider_id": 6 };		
    $.ajax({
        url: link + "GetBillerCategories ", 
		//data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		//alert(status);
		var Categoryddl = OutputArr.billercategories.CategoryList.Category;
		$("#dropdownlst").append("<option value='0'>Select</option>");
		for (var key in Categoryddl) {
				var categoryId = Categoryddl[key].Id;
				var categoryName = Categoryddl[key].Name;
				//alert(categoryId);
					//var couponamount = couponAmt.amount;
					$("#dropdownlst").append("<option value="+categoryId+" id="+categoryId+">"+categoryName+"</option>");
		}
                    $('#paybilldiv').trigger('create');
					$(".ui-loader").hide();
					$.mobile.loading("hide");
					paybillfunc();
				   $(":mobile-pagecontainer").pagecontainer("change", "#paybill", { reverse: false, transition: "slide", changeHash: false });
   
        }
    });
}
$(document).on('change', '#dropdownlst', function () {
    $("#dropdownlst-button span").attr("id", $("#dropdownlst").val());
	var id = $("#dropdownlst-button span").attr("id");
	//alert(id);
	paybillfuncddl(id);
});
function paybillfuncddl(id){
$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     $("#paybilldiv").html("");
    $("#paybilldiv").show();
	var id = id;
	//msg = { "categoryID": id };		
    $.ajax({
        url: link + "GetBillerbyCategoryId/"+id, 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		//data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		var countArry = OutputArr.billerbycategory.BillerList['@attributes'].count;
		if(countArry != 0){
		var Categorybox = OutputArr.billerbycategory.BillerList.Category;
		//console.log(Categorybox)
		//for (var key in Categorybox) {
					var boxArry = Categorybox.Biller;
					//console.log(boxArry)
					if($.isArray(boxArry)){
					for (var key in boxArry) {
						var boxname = (boxArry[key].Name).replace(/\b[a-z]/g, function(letter) {
							return letter.toUpperCase();
						});
						//console.log(boxname)
						var boxid = boxArry[key].Id;
						
						var shortname = "'"+boxArry[key].ShortName+"'";
						//alert(shortname);
						var imgurl = "https://fasttopups.com/img/biller_image/"+boxArry[key].ShortName+".png";
						$('#paybilldiv').append("<div class='coupanBox' onclick='payboxclick("+ boxid +",\""+boxArry[key].ShortName+"\",\""+boxArry[key].Name+"\")'><img src="+imgurl+"  width='100%' height='120px'/><div class='txtshadow'><a href='#'style='font-size:10px'>"+boxname+"</a></div></div>");
					}
					}else{
						var boxname = (boxArry.Name).replace(/\b[a-z]/g, function(letter) {
							return letter.toUpperCase();
						});
						//console.log(boxname)
						var boxid = boxArry.Id;
						var PaymentCode = boxArry.PaymentCode;
						var shortname = "'"+boxArry.ShortName+"'";
						var imgurl = "https://fasttopups.com/img/biller_image/"+boxArry.ShortName+".png";
						$('#paybilldiv').append("<div class='coupanBox' onclick='payboxclick("+ boxid +",\""+boxArry.ShortName+"\",\""+boxArry.Name+"\")'><img src="+imgurl+"  width='100%' height='120px'/><div class='txtshadow'><a href='#'style='font-size:10px'>"+boxname+"</a></div></div>");
						}	
		//}
                    $('#paybilldiv').trigger('create');
					$(".ui-loader").hide();
					$.mobile.loading("hide");
				   //$(":mobile-pagecontainer").pagecontainer("change", "#paybill", { reverse: false, transition: "slide", changeHash: false });
   
        }else{
			$('#paybilldiv').trigger('create');
					$(".ui-loader").hide();
					$.mobile.loading("hide");
					$('#paybilldiv').append("<div style='background-color:#fff;border:1px solid #fff;text-align:center;textshadow:none;width:100%;'>Sorry No Biller Found Under this Category</div>");
		};
		
		//$('#paybilldiv').trigger('create');
					$(".ui-loader").hide();
					$.mobile.loading("hide");
		}
    });

}
$(document ).on( "pageinit", "#paybillerpage", function( event ) {
	$("#paybillerback" ).unbind('click').bind('click', function(e){
		$(":mobile-pagecontainer").pagecontainer("change", "#paybill", { reverse: true, transition: "slide", changeHash: false });
	});
	$("#paybillbtn" ).unbind('click').bind('click', paypayment)
	$("#forbillhistory" ).unbind('click').bind('click', billhistoryfunc);
});
$(document).on('change', '#billerlst', function () {
    $("#billerlst-button span").attr("value", $("#billerlst").val());
	var amt = $("#billerlst-button span").attr("value");
	$("#itemamt").val('');
	$("#itemamt").val(amt);
	$("#billerlst-button span").attr("billername", $("#billerlst option:selected").attr("billername"));
	var billername = $("#billerlst-button span").attr("billername");
	$("#hdnbillername").val(billername);
	$("#billerlst-button span").attr("billerid", $("#billerlst option:selected").attr("billerid"));
	var itembillerId = $("#billerlst-button span").attr("billerid");
		$("#hdnbillerid").val(itembillerId);
	$("#billerlst-button span").attr("id", $("#billerlst option:selected").attr("serviceid"));
	var itemId = $("#billerlst-button span").attr("id");		
		$("#hdnitemid").val(itemId);
	var servicename = $("#billerlst-button span").html();		
		$("#hdnservicename").val(servicename);
		//alert(billername);alert(itembillerId);alert(itemId);
});

function payboxclick(id,shortname,boxname){
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     $("#billerlst").html("");
    $("#billerlst").show();
	$("#ddlbiller").show();
	$("#itemamt").val('');
	$("#smartcardno").val('');
	
	$("#hdnshortname").val(shortname);
	var usrcontact = window.localStorage.mobile_number;
	var usremail = window.localStorage.email_id;
	$("#usremail").val(usremail);
	$("#mobilenousr").val(usrcontact);
	$("#forpaybillhd").html('');
	$("#forpaybillhd").html(boxname);
	$("#smartcardno").attr('placeholder','');
	//msg = { "provider_id": 6 };		
    $.ajax({
        url: link + "GetBillerPaymentItems/"+id, 
		//data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		var itemddl = OutputArr.billerpaymentitem.PaymentItemList.PaymentItem;
		$("#billerlst").append("<option value='0' select='selected'>Select an option</option>");
		if($.isArray(itemddl)){
		$("#ddlbiller").show();
			for (var key in itemddl) {
					var itemId = itemddl[key].Id;
					var itembillerId = itemddl[key].BillerId;
					var itemamount = (itemddl[key].Amount)/100;
					var itemname = itemddl[key].Name;
					var billername = itemddl[key].BillerName;
					var PaymentCode = itemddl[key].PaymentCode;
					var Placeholder = itemddl[key].ConsumerIdField;
					$("#smartcardno").attr('placeholder',Placeholder+'*');
						$("#hdnproductid").val(PaymentCode);
						$("#billerlst").append("<option billername=\""+billername+"\" billerid="+itembillerId+" serviceid="+itemId+" value="+itemamount+">"+itemname+"("+itemamount+")</option>");
			}
		}else{
			var itemId = itemddl.Id;
					var itembillerId = itemddl.BillerId;
					var itemamount = (itemddl.Amount)/100;
					var itemname = itemddl.Name;
						var billername = itemddl.BillerName;
						var PaymentCode = itemddl.PaymentCode;
						var Placeholder = itemddl.ConsumerIdField;
						$("#smartcardno").attr('placeholder',Placeholder+'*');
						$("#hdnitemid").val('None');
						$("#hdnservicename").val('None');
						$("#hdnproductid").val(PaymentCode);
						$("#hdnbillername").val(billername);
						$("#hdnbillerid").val(itembillerId);
						$("#billerlst").append("<option value="+itemamount+">"+itemname+"("+itemamount+")</option>");
						$("#ddlbiller").hide();
		}
                    $('#billerlst').trigger('create');
					$(".ui-loader").hide();
					$.mobile.loading("hide");
				   $(":mobile-pagecontainer").pagecontainer("change", "#paybillerpage", { reverse: false, transition: "slide", changeHash: false });
   
        }
    });
	
}

function paypayment(){
	$( "#bankback" ).unbind('click').bind('click', function(e){
			$(":mobile-pagecontainer").pagecontainer("change", "#paybillerpage", { reverse: true, transition: "slide", changeHash: false });
		});
	$( "#go2orders" ).unbind('click').bind('click', billhistoryfunc );
	$("#goto").html("Goto history");
	var user_id = window.localStorage.Usr_id;
	var email = $("#usremail").val();
	var mobile_number = $("#mobilenousr").val();
	var CustomerId = $("#smartcardno").val();
	var amount = $("#itemamt").val();
	var paymentcode = $("#hdnproductid").val();
	var shortname = $("#hdnshortname").val();
	var biller_name = $("#hdnbillername").val();
	var biller_id = $("#hdnbillerid").val();
	var service_option = $("#hdnitemid").val();
	var select_option = $("#hdnservicename").val();
	if(CustomerId.length < 1){
			//alert("Please enter first name");
			navigator.notification.alert('Please enter smart card No.',alertDismissed,'Alert', 'Ok');
		}else if(amount.length < 1){
			//alert("Please enter last name");
			navigator.notification.alert('Please enter amount',alertDismissed,'Alert', 'Ok');
		}else if(mobile_number.length < 1){
			//alert("Please enter correct mobile number");
			navigator.notification.alert('Please enter mobile number',alertDismissed,'Alert', 'Ok');
		}else if(email.length < 1){
			//alert("Please enter email");
			navigator.notification.alert('Please enter email',alertDismissed,'Alert', 'Ok');
		}else{
			$(".ui-loader").show();
			$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
				msg = {"EmailAddress":email,"PhoneNumber":mobile_number,"biller_id":biller_id,"Amount":amount,"paymentcode":paymentcode,"CustomerId":CustomerId,"user_id":user_id,"biller_name":biller_name,"shortname":shortname,"select_option":service_option,"service_option":select_option };		
				$.ajax({
					url: link + "make_payment", 
					data:msg,
					type: "POST",
					error: function (request, error) {
						$(".ui-loader").hide();
						$.mobile.loading("hide");
					},
					success: function (result) {
						var OutputArr = JSON.parse(result);
						var URL_ = OutputArr.url;
							go2_bankpage(URL_);
							$(".ui-loader").hide();
						$.mobile.loading("hide");
						$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
						}
				});
		}
}
function go2_bankpage(url){
	//alert(url);
	$("#my_frame").html(" ");
	$("#my_frame").append("<iframe id='myIframe' src='"+url+"' style='height:500px; width:100%;margin-bottom:0px;padding-bottom:20px'></iframe>")
	//$("#myIframe").attr("src",url);
	//$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
}
$( document ).on( "pageinit", "#billhistorypage", function( event ) {
	$("#bckbillhistry" ).unbind('click').bind('click', function(e){
		$(":mobile-pagecontainer").pagecontainer("change", "#paybill", { reverse: true, transition: "slide", changeHash: false });
	});
	//$("#billhistory" ).unbind('click').bind('click', billhistoryfunc);
});

function billhistoryfunc(){
var items='';
$("#billhstrylist").empty();
var user_id = window.localStorage.Usr_id;
msg = {"user_id":user_id}
$.ajax({
        url: link + "Bill_Payment_history", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		var data = OutputArr.data;
		for(var key in data){
			var BillsPayment = data[key].BillsPayment;
			var BillOrder = data[key].BillOrder;
			var coustomerid = BillsPayment.CustomerId;
			var id = BillsPayment.id;
			var biller_name = BillOrder.biller_name;
			var mobile_number = BillOrder.mobile_number;
			var amount = BillOrder.amount;
			var date = BillOrder.date_created;
			var status = BillsPayment.payment_status;
			var serviceOption = BillOrder.service_option;
			var Recharge_Pin = BillsPayment.RechargePin;
			//alert(Recharge_Pin);
			var RechargePin;
			if(Recharge_Pin === null){
				RechargePin = "None";
			}else{
				RechargePin = Recharge_Pin;
			}
				//alert(coustomerid);
			items +="<li><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Customer number :</div><div style='float:left;overflow:hidden;word-wrap:break-word;' class='wd50p tal wrdwp'>"+coustomerid+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Biller Name :</div><div style='float:left;overflow:hidden;word-wrap:break-word;' class='wd50p tal wrdwp'>"+biller_name+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Amount :</div><div style='float:left;overflow:hidden;word-wrap:break-word;' class='wd50p tal wrdwp'>&#8358 "+amount+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Service Option :</div><div style='float:left;' class='wd50p tal wrdwp'>"+serviceOption+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Recharge Pin :</div><div style='float:left;' class='wd50p tal wrdwp'>"+RechargePin+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Date :</div><div style='float:left;overflow:hidden;word-wrap:break-word;' class='wd50p tal wrdwp'>"+date+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Status :</div><div style='float:left;overflow:hidden;word-wrap:break-word;' class='wd50p tal wrdwp'>"+status+"</div></div><div class='fl wd100p'><div style='margin:7px 10px 0px 10px;background-color:#40ff00;border: 1px solid #cdcdcd;border-radius:4px;;color:#000;text-align:center;' onclick='payagain("+id+")' class='txtshadow'>Pay</div></div></li>";
		}
					$(".ui-loader").hide();
					$.mobile.loading("hide");
					$("#billhstrylist").append(items).listview().listview("refresh");
					$(":mobile-pagecontainer").pagecontainer("change", "#billhistorypage", { reverse: false, transition: "slide", changeHash: false });
		}
		});
}
function payagain(id){
var id = id;
msg = {"id":id}
$.ajax({
        url: link + "bill_button", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
		success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		var data = OutputArr.data;
		if($.isArray(data)){
		for(var key in data){
			var BillsPayment = data[key].BillsPayment;
			var BillOrder = data[key].BillOrder;;
			var id = BillsPayment.id;
			var biller_name = BillOrder.biller_name;
			var serviceOption = BillOrder.service_option;
			user_id = window.localStorage.Usr_id;
			 $("#usremail").val(BillOrder.email);
			 $("#mobilenousr").val(BillOrder.mobile_number);
			 $("#smartcardno").val(BillsPayment.CustomerId);
			 $("#itemamt").val(BillOrder.amount);
			 $("#hdnproductid").val(BillOrder.paymentcode);
			 $("#hdnshortname").val(BillOrder.shortname);
			 $("#hdnbillername").val(BillOrder.biller_name);
			 $("#hdnbillerid").val(BillOrder.biller_id);
			 $("#hdnitemid").val('None');
			$("#hdnservicename").val('None');
			
		}
		}else{
			var BillsPayment = data.BillsPayment;
			var BillOrder = data.BillOrder;;
			var id = BillsPayment.id;
			var biller_name = BillOrder.biller_name;
			var serviceOption = BillOrder.service_option;
			//alert(BillOrder.service_option);
			user_id = window.localStorage.Usr_id;
			 $("#usremail").val(BillOrder.email);
			 $("#mobilenousr").val(BillOrder.mobile_number);
			 $("#smartcardno").val(BillsPayment.CustomerId);
			 $("#itemamt").val(BillOrder.amount);
			 $("#hdnproductid").val(BillOrder.paymentcode);
			 $("#hdnshortname").val(BillOrder.shortname);
			 $("#hdnbillername").val(BillOrder.biller_name);
			 $("#hdnbillerid").val(BillOrder.biller_id);
			 //$("#hdnservicename").val('None');
			 
			 $("#billerlst").empty();
			 if(BillOrder.service_option=='None' || BillOrder.service_option== '' || BillOrder.select_option=='None' || BillOrder.select_option==''){
				$("#ddlbiller").hide();
				$("#hdnitemid").val('None');
				$("#hdnservicename").val('None');
			 }else{
			 $("#ddlbiller").show();
				$("#hdnitemid").val(BillOrder.select_option.slice(0,2));
				$("#billerlst").append("<option value='0' select='selected'>"+BillOrder.service_option+"</option>");
				$("#hdnservicename").val(BillOrder.service_option);
			 }
			 
		}
					$(".ui-loader").hide();
					$.mobile.loading("hide");
					//	`$("#billhstrylist").append(items).listview().listview("refresh");
					$(":mobile-pagecontainer").pagecontainer("change", "#paybillerpage", { reverse: false, transition: "slide", changeHash: false });
		}
	});
}