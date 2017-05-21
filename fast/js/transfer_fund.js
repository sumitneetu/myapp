var link = "https://fasttopups.com/WebServices/";
$( document ).on( "pageinit", "#transfer_fund_page", function( event ) {
	$("#transfer_fundback" ).unbind('click').bind('click', backsrvcProvidrPg);
	$("#transfer_fundbtn" ).unbind('click').bind('click', fund_transferfunc);
	$("#fund_trnsfr_history" ).unbind('click').bind('click', fund_trnsfer_historyfunc)
});
var limit='';
function limitfund_transferfunc(){
limit='';
$.ajax({
			url: link + "transferlimitapi", 
			//data:msg,
			type: "POST",
			error: function (request, error) {
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			},
			success: function (result) {
				var OutputArr = JSON.parse(result);
				limit = OutputArr.limit;
				//alert(limit)
				}
		});
}
function fund_transferfunc(){
	$( "#bankback" ).unbind('click').bind('click', function(e){
			$(":mobile-pagecontainer").pagecontainer("change", "#transfer_fund_page", { reverse: false, transition: "slide", changeHash: false });
		});
	$( "#go2orders" ).unbind('click').bind('click', fund_trnsfer_historyfunc );
	$("#goto").html("Goto history");
	var Amount = $("#trnsfrfundamt").val();
	var Beneficiary_Name = $("#beneficiarysurname").val();
	var beneficiary_other_name = $("#beneficiaryothername").val();
	var beneficiary_phone = $("#beneficiarymobileno").val();
	var beneficiary_email = $("#beneficiaryemail").val();
	var Account_Number = $("#accountno").val();
	var Bank = $("#banklist-button span").attr("id");
	alert(Amount);
	var Account = $("#acounttypelist-button span").attr("id");
	//alert(Account);
	var remark = $("#remarkforfund").val();
	var bank_text = $("#banklist-button span").html();
	var User_id = window.localStorage.Usr_id;
	if(Amount.length < 1){
		//alert("Please enter quantity");
		navigator.notification.alert('Please enter amount',alertDismissed,'Alert', 'Ok');
	}else if(Amount >= parseInt(limit)){
		//alert(limit);
		//alert('Please enter amount less than'+limit);
		navigator.notification.alert('Please Amount cannot exceed '+limit,alertDismissed,'Alert', 'Ok');
	}else if(Beneficiary_Name.length < 1){
		//alert("Please enter quantity");
		navigator.notification.alert('Please enter beneficiary surname',alertDismissed,'Alert', 'Ok');
	}else if(beneficiary_other_name.length < 1){
		//alert("Please enter quantity");
		navigator.notification.alert('Please enter beneficiary other name',alertDismissed,'Alert', 'Ok');
	}else if(Account_Number.length < 1){
		//alert("Please enter quantity");
		navigator.notification.alert('Please enter account no.',alertDismissed,'Alert', 'Ok');
	}else if(User_id.length < 1){
		//alert("Please enter quantity");
		navigator.notification.alert('Please enter quantity',alertDismissed,'Alert', 'Ok');
	}else if(Bank == 0){
		//alert("Please enter quantity");
		navigator.notification.alert('Please select bank',alertDismissed,'Alert', 'Ok');
	}else if(Account == 0){
		//alert("Please enter quantity");
		navigator.notification.alert('Please select account type',alertDismissed,'Alert', 'Ok');
	}else{

	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
 		msg = {"Amount":Amount,"Beneficiary_Name":Beneficiary_Name,"beneficiary_other_name":beneficiary_other_name,"beneficiary_phone":beneficiary_phone,"beneficiary_email":beneficiary_email,"Account_Number":Account_Number,"PaymentChannels":7,"Bank":Bank,"Account":Account,"remark":remark,"bank_text":bank_text,"User_id":User_id};		
		$.ajax({
			url: link + "DoTransferapi", 
			data:msg,
			type: "POST",
			error: function (request, error) {
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			},
			success: function (result) {
				var OutputArr = JSON.parse(result);
				var URL_ = OutputArr.url;
					goto_bankpage(URL_);
					$(".ui-loader").hide();
				$.mobile.loading("hide");
				$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
				}
		});
		}
	}
function goto_bankpage(url){
	//alert(url);
	$("#my_frame").html(" ");
	$("#my_frame").append("<iframe id='myIframe' src='"+url+"' style='height:500px; width:100%;margin-bottom:0px;padding-bottom:20px'></iframe>")
	//$("#myIframe").attr("src",url);
	//$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
} 
function trnsfr_fund_func(){
	limitfund_transferfunc();
	 $("#banklist-button span").html("Select Destination bank");
	 $("#acounttypelist-button span").html("Select Account Type");
	 $("#trnsfrfundamt").val('');
	$("#beneficiarysurname").val('');
	$("#beneficiaryothername").val('');
	$("#beneficiarymobileno").val('');
	$("#beneficiaryemail").val('');
	$("#accountno").val('');
	$("#banklist-button span").attr("id",0);
	$("#acounttypelist-button span").attr("id",0);
	$("#remarkforfund").val('');
    $("#banklist").show();
	$(":mobile-pagecontainer").pagecontainer("change", "#transfer_fund_page", { reverse: false, transition: "slide", changeHash: false });
}
$(document).on('change', '#banklist', function () {
    $("#banklist-button span").attr("id", $("#banklist").val());
	var id = $("#banklist-button span").attr("id");
	//alert(id);
	//paybillfuncddl(id);
});
$(document).on('change', '#acounttypelist', function () {
    $("#acounttypelist-button span").attr("id", $("#acounttypelist").val());
	var id = $("#acounttypelist-button span").attr("id");
	//alert(id);
	//paybillfuncddl(id);
});

$( document ).on( "pageinit", "#transferhistorypage", function( event ) {
	$("#bcktransferhistry" ).unbind('click').bind('click', function(e){
		//alert("back");
		$(":mobile-pagecontainer").pagecontainer("change", "#transfer_fund_page", { reverse: true, transition: "slide", changeHash: false });
	});
});
function fund_trnsfer_historyfunc(){
var items='';
$("#fundtrnsfrhstrylist").empty();
var user_id = window.localStorage.Usr_id;
msg = {"user_id":user_id}
$.ajax({
        url: link + "fund_transfer_history", 
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
			var TransferPayment = data[key].TransferPayment;
			var Transfer = data[key].Transfer;
			var payment_status = TransferPayment.payment_status;
			var date = TransferPayment.date_created;
			var amount = Transfer.amount;
			var id = TransferPayment.id;
			var beneficiary_name = Transfer.name;
			var beneficiary_other_name = Transfer.beneficiary_other_name;
			var bank_text = Transfer.bank_text;
			var account_number = Transfer.account_number;
			items +="<li><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Recipient Name :</div><div style='float:left;' class='wd50p tal'>"+beneficiary_name+" "+beneficiary_other_name+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Account Number :</div><div style='float:left;' class='wd50p tal'>"+account_number+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Bank :</div><div style='float:left;' class='wd50p tal'>"+bank_text+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Amount :</div><div style='float:left;' class='wd50p tal'>&#8358 "+amount+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Status :</div><div style='float:left;' class='wd50p tal'>"+payment_status+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Date :</div><div style='float:left;' class='wd50p tal'>"+date+"</div></div><div class='fl wd100p'><div style='margin:7px 10px 0px 10px;background-color:#40ff00;border: 1px solid #cdcdcd;border-radius:4px;;color:#000;text-align:center;' onclick='transferagain("+id+")' class='txtshadow'>Transfer</div></div></li>";
			
			}
					$(".ui-loader").hide();
					$.mobile.loading("hide");
					$("#fundtrnsfrhstrylist").append(items);
					$("#fundtrnsfrhstrylist").listview().listview("refresh");
					$(":mobile-pagecontainer").pagecontainer("change", "#transferhistorypage", { reverse: false, transition: "slide", changeHash: false });
		}
		});
}
function transferagain(id){
var id = id;
msg = {"id":id}
$.ajax({
        url: link + "fund_transfer_button", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var data = OutputArr.data;
		//for(var key in data){
				var TransferPayment = data.TransferPayment;
				var Transfer = data.Transfer;
				//console.log(Transfer);
				$("#trnsfrfundamt").val(Transfer.amount);
				$("#beneficiarysurname").val(Transfer.name);
				$("#beneficiaryothername").val(Transfer.beneficiary_other_name);
				$("#beneficiarymobileno").val(Transfer.mobile_number);
				$("#beneficiaryemail").val(Transfer.email);
				$("#accountno").val(Transfer.account_number);
				$("#banklist-button span").attr("id",Transfer.Bank);
				$("#acounttypelist-button span").attr("id",Transfer.Account);
				$("#remarkforfund").val(Transfer.remark);
				$("#banklist-button span").html(Transfer.bank_text);
				
			//}
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			$(":mobile-pagecontainer").pagecontainer("change", "#transfer_fund_page", { reverse: false, transition: "slide", changeHash: false });
		
		}
	});
}