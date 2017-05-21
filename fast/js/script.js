
 function onLoad() {
	 //$('body').append("<div class='ui-loader-background'> </div>");
	 //alluserfast();
	$(".ui-loader").hide();
	document.addEventListener("deviceready", onDeviceReady, false); 
	//whenDeviceReady();
	if (localStorage.getItem("loginstatus") === null || localStorage.getItem("loginstatus") == "0") {
		// loginfunc();
		console.log("Not Exist = "+localStorage.getItem("loginstatus"));
		
		    window.location.hash = 'loginpage';
			$.mobile.initializePage();
	}else if(localStorage.getItem("loginstatus") == "1"){
		console.log("Exist = "+localStorage.getItem("loginstatus"));
	
		window.location.hash = 'serviceprovider';
		$.mobile.initializePage();
	} 
	
 }

function alertDismissed() {
   $(".ui-loader").hide();
	$.mobile.loading("hide");
}
/* var panel='<div data-role="panel" id="overlayPanel" data-display="overlay" data-position="right">\
				<ul class="mob_menu">\
					<li><a href="#" onclick="top10pagefunc()"><img src="img/left_caret.png" alt=""> Top 10 Buyers</a></li>\
					<li><a href="#" onclick="updatepagefunc()"><img src="img/left_caret.png" alt="">Change Password</a></li>\
					<li><a href="#" onclick="myaccountpagefunc()"><img src="img/left_caret.png" alt="">My Account</a></li>\
					<li><a href="#" onclick="walletpagefunc()"><img src="img/left_caret.png" alt=""> Wallet</a></li>\
					<li><a href="#" onclick="chat_user_list()"><img src="img/left_caret.png" alt="">Chat</a></li>\
					<li><a href="#" onclick="helppagefunc()"><img src="img/left_caret.png" alt="">Help</a></li>\
					<li><a href="#" onclick="backtohome()"><img src="img/left_caret.png" alt="">Logout</a></li>\
					</ul>\
					</div>'; */
/* $(document).on('pagebeforecreate', function () {
    $.mobile.pageContainer.prepend(panel);
    $("#overlayPanel").panel();//.enhanceWithin();
}); */
var loadingtheme = "b";
var loadingText = "Loading .."

function onDeviceReady() { 
document.addEventListener("backbutton", onBackKeyDown/* function(e){
    if($.mobile.activePage.is('#loginpage')){
        navigator.app.exitApp();
    }
    else if($.mobile.activePage.is('#serviceprovider')){		
    }else if($.mobile.activePage.is('#registerpage')){
		$(":mobile-pagecontainer").pagecontainer("change", "#loginpage", { reverse: true, transition: "slide", changeHash: false });
    }else if($.mobile.activePage.is('#forgotpage')){
		$(":mobile-pagecontainer").pagecontainer("change", "#loginpage", { reverse: true, transition: "slide", changeHash: false });
    }else if($.mobile.activePage.is('#voucherlistpage')){
		$(":mobile-pagecontainer").pagecontainer("change", "#serviceprovider", { reverse: true, transition: "slide", changeHash: false });
    }else if($.mobile.activePage.is('#voucherPayPage')){
		$(":mobile-pagecontainer").pagecontainer("change", "#voucherlistpage", { reverse: true, transition: "slide", changeHash: false });
    }else if($.mobile.activePage.is('#wallethistorypage')){
		$(":mobile-pagecontainer").pagecontainer("change", "#walletpage", { reverse: true, transition: "slide", changeHash: false });
    }else{
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
    }
} */, false);
        // specify contact search criteria
        var options = new ContactFindOptions();
        options.filter="";          // empty search string returns all contacts
        options.multiple=true;      // return multiple results
        filter = ["displayName"];   // return contact.displayName field

        // find contacts
        navigator.contacts.find(filter, onSuccess, onError, options);
   

    // onSuccess: Get a snapshot of the current contacts
    //
/* }
function whenDeviceReady() { */
var push = PushNotification.init({
    android: {
        senderID: "230872843518"
    },
    ios: {
        alert: "true",
        badge: "true",
        sound: "true"
    },
    windows: {}
	});

	push.on('registration', function(data) {
		console.log(data.registrationId);
	/* 	if(data.registrationId.length>0){ */
			window.localStorage.deviceid = data.registrationId;
/* 		}else if(data.accessToken>0){
			window.localStorage.deviceid = data.accessToken;
		} */
		
		//alert(data.registrationId);
		
	});

push.on('notification', function(data) { 
	$("#note").css('display','block');
	// var dataa = JSON.parse(data);
	// var data = dataa.data;
	console.log(data);
	//$("#push_notification").html(data.additionalData.message1);

    if(data.additionalData.payload.android.title == 'Credit Received'){
		$("#push_notification").html("<a href='#' onclick = 'walletpagefunc()'>"+data.additionalData.payload.android.alert+"</a>");
	}else if(data.additionalData.payload.android.title == 'Message Received'){
		$("#push_notification").html("<a href='#' onclick = 'chatSubmit1()'>"+data.additionalData.payload.android.alert+"</a>");
	}else if(data.additionalData.payload.android.title == 'Welcome To Fasttopups'){
		$("#push_notification").html("<a href='#'>"+data.additionalData.payload.android.alert.message+"</a>");
	}else if(data.additionalData.payload.android.title == 'Card Purchased Successfully'){
		$("#push_notification").html("<a href='#' onclick = 'myordrPgfunc()'>"+data.additionalData.payload.android.alert+"</a>");
	}else if(data.additionalData.payload.android.title == 'Bill Payment Successfull'){
		$("#push_notification").html("<a href='#' onclick = 'billhistoryfunc()'>"+data.additionalData.payload.android.alert+"</a>");
	}else if(data.additionalData.payload.android.title == 'Add Credit Successfull'){
		$("#push_notification").html("<a href='#' onclick = 'walletpagefunc()'>"+data.additionalData.payload.android.alert+"</a>");
	}else if(data.additionalData.payload.android.title == 'Fund Transfer Successfull'){
		$("#push_notification").html("<a href='#' onclick = 'fund_trnsfer_historyfunc()'>"+data.additionalData.payload.android.alert+"</a>");
	};
	// data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
	});

push.on('error', function(e) {
    // e.message
});   
} 
function onBackKeyDown() {
    if($.mobile.activePage.is('#loginpage')){
        //navigator.app.exitApp();
    }
    else if($.mobile.activePage.is('#serviceprovider')){
		pageid = pageid.splice(0,2);
		 console.log(pageid)
    }else {
	var pageback='';
   var cp='';
   //for(i=0;i<=pageid.length;i++){
	pageback = pageid[pageid.length-2];
	cp = pageid.length;
   //}
   console.log(pageback,cp)
   $(":mobile-pagecontainer").pagecontainer("change", "#"+pageback, { reverse: true, transition: "slide", changeHash: false });
   /* pageid.splice(-1,1);
   pageid.splice(-1,1); */
   pageid.splice(cp-2,2);
	}
}
function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            //alert(contacts[i].displayName);
        }
    };

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        //alert('onError!');
    }
var names = [];

// onSuccess: Get a snapshot of the current contacts
var link = "https://fasttopups.com/WebServices/";
 
$( document ).on( "pageinit", "#loginpage", function( event ) {
  $( "#btnlogin" ).unbind('click').bind('click', loginfunc );
  $( "#btncreatlogin" ).unbind('click').bind('click', createacfunc );
  $( "#frgotpswrd" ).unbind('click').bind('click', forgotpagefunc );
    $("input[cType=chkrecord]").bind("change", function () {
        if ($(this).val() == 0) {
            $(this).val(1);
            $(this).attr("checked", true);
			window.localStorage.loginstatus = 1;
        }
        else {
            $(this).val(0);
            $(this).attr("checked", false);
			window.localStorage.setItem("loginstatus",0);
        }
    });
});
var loginflag=0;
function loginfunc(e){
e.preventDefault();
		var device_id = window.localStorage.deviceid;
		//alert("device_id");
		//alert(device_id);
		
		//alert(device_id)
        var mobileno = $('#txtmobileno').val();
        var password = $('#txtpaswrd').val();
		//alert(mobileno);
		if(loginflag == 0){
			if(mobileno.length < 1){
			 //alert("Enter mobile no.");
			 navigator.notification.alert('Enter mobile no.',alertDismissed,'Alert', 'Ok');
			}else if(password.length < 1){
				//alert("Enter password");
				navigator.notification.alert('Enter password',alertDismissed,'Alert', 'Ok');
			}else{
			msg = { "mobile_number": mobileno, "password": password,"device_id":device_id };
			}
		}else if(loginflag == 1){
			msg = { "mobile_number": regmobileno, "password": regpassword,"device_id":device_id };
			loginflag = 0;
		}
     //msg = { "mobile_number": mobileno, "password": password };
/* if(mobileno.length < 1){
 alert("Enter mobile no.");
}else if(password.length < 1){
	alert("Enter password");
}else{ */
 
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
    $.ajax({
        url: link + "login", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		data:msg,
        //dataType: "jsonp",
        type: "POST",
        headers: "Access-Control-Allow-Origin : *",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		//var usr_id = Arr.id; 
		
		if(status==1){ 
				var user = OutputArr.user;
				var Arr = user.User;
					window.localStorage.Usr_id = Arr.id;
					window.localStorage.credit = Arr.credit;
					window.localStorage.is_active = Arr.is_active;
					window.localStorage.profile_name = Arr.profile_name;
					window.localStorage.first_name = Arr.first_name;
					window.localStorage.last_name = Arr.last_name;
					window.localStorage.email_id = Arr.email_id;
					window.localStorage.mobile_number = Arr.mobile_number;
					window.localStorage.o_pass = Arr.o_pass;
					window.localStorage.refferalcode = Arr.reffral_code;
					window.localStorage.refferby = Arr.refferby;
					window.localStorage.userlogincount = Arr.login_count;
					window.localStorage.Accountpin = Arr.account_pin;
					var userlogincount = window.localStorage.userlogincount;
					if(userlogincount == 1){
							$(".ui-loader").hide();
							$.mobile.loading("hide");
							//var mobileno=window.localStorage.mobile_number;
							//chatSubmit1();
							//chatadminfunc(987654321,window.localStorage.mobile_number,admin);
							$.mobile.changePage( "#serviceprovider", { transition: "slide", changeHash: false });
							//e.preventDefault();

						}else{
							$(".ui-loader").hide();
							$.mobile.loading("hide");
							$.mobile.changePage( "#serviceprovider", { transition: "slide", changeHash: false });
							e.preventDefault();
						}
				
            }else{
			$(".ui-loader").hide();
				$.mobile.loading("hide");
				//alert(OutputArr.message);
				navigator.notification.alert('Either mobile no. or password is wrong',alertDismissed,'Alert', 'Ok');
				$.mobile.changePage( "#loginpage", { transition: "slide", changeHash: false });
				e.preventDefault();
			 }   
        }
    }); 
  //}
}
var svcproviderArr = [];
function serviceProviderfunc(e){
	//alert(window.localStorage.mobile_number);
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     $("#SrvcproviderList").html("");
    $("#SrvcproviderList").show();
	    //var mobileno = $('#txtmobileno').val();
        //var password = $('#txtpaswrd').val();
		//alert(mobileno);
     //msg = { "mobile_number": mobileno, "password": password };
    $.ajax({
        url: link + "service_providersapi", 
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
		//var status = OutputArr.status;
			for (var key in OutputArr) {
				var providerarray = OutputArr[key].Provider;
					var providerId = providerarray.id;
					var ProviderImgUrl = providerarray.imageUrl;
					var Providername = providerarray.sp_name;
					var Providerdailcode = providerarray.dial_code;
					var Providerdiscount = providerarray.discount;
                    //$('#SrvcproviderList').append("<li style='' onclick='providercoupon("+ providerId +","+ Providerdiscount +")'><div style=''><img src='"+ ProviderImgUrl +"' alt=''><p style='margin:-44px 0px 16px 80px;'>"+ Providername +"</p></div></li>"); 
					$('#SrvcproviderList').append("<li onclick='providercoupon("+ providerId +","+ Providerdiscount +")'><img width='70px' height='auto' src='"+ ProviderImgUrl +"' alt=''> <label style='margin:-50px 0px 20px 80px'>"+ Providername +"</label><a href='#' class='fr mid' style='margin:-75px 0px 10px 100px'><img src='img/right.png' alt=''></a></li>");
					svcproviderArr.push({ "svcPvrdname": Providername ,"svcPvdrid": providerId});
			} 
			//console.log(svcproviderArr);
			$('#SrvcproviderList').trigger('create');
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			// $.mobile.changePage( "#serviceprovider", { transition: "slide", changeHash: false });
        }
    });
}
$( document ).on( "pageinit", "#serviceprovider", function( event ) {
	serviceProviderfunc();
	$( "#addcreditt" ).unbind('click').bind('click', dropdownlst );
  $( "#trnsfrcreditt" ).unbind('click').bind('click', trnsfr_fund_func );
	//$( "#bcktologn" ).unbind('click').bind('click', backtohome )
	//$( "#proceed" ).bind('click', voucherpage )
	$( "#invtfrnd_srvcprovdrPg" ).unbind('click').bind('click', invitefrndPgfunc )
	//$( "#myordr_srvcprovdrPg" ).unbind('click').bind('click', myordrPgfunc )
});
/*-------------------------------------------------------for send friend ----------------------------------------------------*/
var reffered_code=window.localStorage.reffer_code;
var msginvtefrnd = "Hi, I'm using Fasttopups to recharge my phone, pay bills and transfer funds online. Get yours here http://goo.gl/dYq7YG. Enter "+reffered_code+" on the register page.";
//var msginvtefrnd = "You can install fasttopup app from googleplay and register on it by using this code--\n"+reffered_code+"";
function shareViaSMS(){
			//alert(sendmsg);
		window.plugins.socialsharing.shareViaSMS(sendmsg, null /* see the note below */, function(msg) {console.log('ok: ' + msg)}, function(msg) {navigator.notification.alert('error: ' + msg,alertDismissed,'Alert', 'Ok');})
		}
function shareMessageAndImageViaFacebook() {  
	//var playstore_link="https://play.google.com/store/apps/details?id=com.fasttopups.android";
	//var reffered_massage="<b>Please install app by following link <b>:<br><a href="+playstore_link+">"+playstore_link+"</a></br></br> Reffer Code: "+reffer_code;
	var subject="Invitation for fasttopup app";
            if (!this.checkSimulator()) {
                // For the files param you can pass null, a single string or an array.
                window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(sendmsg, null, null, null, this.onSuccess, this.onError);
            }
        }
function shareMessageViaWhatsApp() {
	//var reffer_code=window.localStorage.reffer_code;
	//var playstore_link="https://play.google.com/store/apps/details?id=com.flipkart.android";
	//var reffered_massage="<b>Please install app by following link <b>:<br><a href="+playstore_link+">"+playstore_link+"</a></br></br> Reffer Code: "+reffer_code;
	//var subject="Invitation for fasttopup app";
            if (!this.checkSimulator()) {
 	           window.plugins.socialsharing.shareViaWhatsApp (sendmsg, null, null, this.onSuccess, this.onError);
            }
        }
function shareViaEmail() { 
	//var reffer_code=window.localStorage.reffer_code;
	//var playstore_link="https://play.google.com/store/apps/details?id=com.flipkart.android";
	//var reffered_massage="<b>Please install app by following link <b>:<br><a href="+playstore_link+">"+playstore_link+"</a></br></br> Reffer Code: "+reffer_code;
	//var subject="Invitation for fasttopup app";
		    if (!this.checkSimulator()) {
 	           window.plugins.socialsharing.shareViaEmail (
                   sendmsg,
                   subject,
                   ['flexsinmail@gmail.com', 'test@gmail.com'], // TO: must be null or an array
                   ['cc@person1.com'], // CC: must be null or an array
                   null, // BCC: must be null or an array
                   //['https://www.google.nl/images/srpr/logo4w.png'],
                   this.onSuccess,
                   this.onError
               );
            }
        }

function checkSimulator() {
            if (window.navigator.simulator === true) {
                //alert('This plugin is not available in the simulator.');
				navigator.notification.alert('This plugin is not available in the simulator.',alertDismissed,'Alert', 'Ok');
                return true;
            } else if (window.plugins === undefined || window.plugins.socialsharing === undefined) {
                //alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
				navigator.notification.alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.',alertDismissed,'Alert', 'Ok');
                return true;
            } else {
                return false;
            }
        }

        // callbacks
function onSuccess(msg) {
            console.log('SocialSharing success: ' + msg);
        }

function onError(msg) {
            //alert('SocialSharing error: ' + msg);
			navigator.notification.alert('SocialSharing error: ' + msg,alertDismissed,'Alert', 'Ok');
        }
function forgotpagefunc(e){	
	e.preventDefault();
		$('#txtfrgotmobileno').val(" ");
    $('#txtfrgotcnfno').val(" ");
	$.mobile.changePage("#forgotpage", { transition: "false", changeHash: false });
	
}
$( document ).on( "pageinit", "#forgotpage", function( event ) {
  $( "#btnfrgotlogin" ).unbind('click').bind('click', backtohome );
  $( "#btnsendforgot" ).unbind('click').bind('click', forgotpasswordfunc );
/*   $("#forgotpage").on("swiperight", function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    { 
		backtohome();
        //$.mobile.changePage('#article3', {transition: "slide", reverse: false}, true, true);
        event.handled = true;
    }
    return false;         
}); */
});
function forgotpasswordfunc(e){
	
	var mobileno = $('#txtfrgotmobileno').val();
    var confno = $('#txtfrgotcnfno').val();
	if(mobileno.length < 1){
		//alert("Enter mobile no.");
		navigator.notification.alert('Enter mobile no.',alertDismissed,'Alert', 'Ok');
	}else if(confno.length < 1){
		//alert("Enter confirm mobile no.");
		navigator.notification.alert('Enter confirm mobile no.',alertDismissed,'Alert', 'Ok');
	}else if(mobileno != confno){
		//alert("Confirm mobile no. not match");
		navigator.notification.alert('Confirm mobile no. not match',alertDismissed,'Alert', 'Ok');
	}else{
		 var confmobileno = mobileno;
		 $(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
    msg = { "mobile_number": confmobileno};
    $.ajax({
        url: link + "forgotpasswordapi", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		data:msg,
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
		if(status == 1){
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			$.mobile.changePage("#loginpage", { transition: "false", changeHash: false });
			e.preventDefault();
		}else{
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			$.mobile.changePage("#forgotpage", { transition: "false", changeHash: false });
			e.preventDefault();
		}
   
        }
    });
	}/* else{
		alert("Mobile No. not match");
	} */
}
function top10pagefunc(){
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
filterorderr(); 	
	$.mobile.changePage("#top10Page", { transition: "false", changeHash: false });
	$(".ui-loader").hide();
	//e.preventDefault();
}
function filterorderr(id,price){
	$("#top10list").empty();
	var content;
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });	
/* 	var serviceprovidername;
	for(var key in svcproviderArr){
	  if(svcproviderArr[key].svcPvdrid == id){
		serviceprovidername = svcproviderArr[key].svcPvrdname;
	  }
	} */
	//console.log(serviceprovidername);
	msg = { "amount": price,"provider_id":id};
    $.ajax({
        url: link + "top10_week_api", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
			var status;
			var OutputArr = JSON.parse(result);
			for (var key in OutputArr) {
				status = OutputArr[key].status;
				//alert(status);
			}
		if(status == 1){
			for (var key in OutputArr) {
			var OutputArray = OutputArr[key].userInfo;
			var serviceprovidername;
	for(var key in svcproviderArr){
	  if(svcproviderArr[key].svcPvdrid == OutputArray.service_provider_id){
		serviceprovidername = svcproviderArr[key].svcPvrdname;
	  }
	}
			var mobilenumber;
			if(OutputArray.mobile_number.length == 10){
				var fst4dst = OutputArray.mobile_number.slice(0, 4);
				var lst4dst = OutputArray.mobile_number.slice(7, 10);
				mobilenumber = fst4dst+"*"+"*"+lst4dst;
			}else{
				var fst4dst = OutputArray.mobile_number.slice(0, 5);
				var lst4dst = OutputArray.mobile_number.slice(7, 11);
				mobilenumber = fst4dst+"*"+"*"+lst4dst;
			}
			//alert(OutputArray);
				 //content = "<li><div>User mobile No.:<span>"+ mobilenumber +"</span><div><div>Service Provider:<span>"+ serviceprovidername +"</span><div><div>Amount:<span>₦"+ OutputArray.Total_amount +"</span><div></li>";
					$("#top10list").append("<li><div>User Mobile No.: <span> "+ mobilenumber +"</span><div><div>Service Provider:<span> "+ serviceprovidername +"</span><div><div>Amount:<span>&#8358 "+ OutputArray.Total_amount +"</span><div></li>");
			}
			$("#top10list").trigger('refresh');
			$(".filter_box").slideUp();
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			}else{
				content = "<li><div>Data Not Available<div></li>";
				$("#top10list").append( content );
				$(".filter_box").slideUp();
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			} 
			}
			//$.mobile.changePage("#top10Page", { transition: "false", changeHash: false });
       // }
    });
}
function updatepagefunc(){
	//e.preventDefault();
	$('#txtcrntPswrd').val("");
    $('#txtnewPswrd').val("");
	$('#txtconfrmnewPswrd').val("");
	$.mobile.changePage("#updatepasswordpage", { transition: "false", changeHash: false });
}
function invitefrndPgfunc(){ 
	$("#forfrnds").html(" ");
	$("#forfrnds").html("Invite Friends");
	sendInvitation_refferalcode();
	sendallflag = 2;
	$.mobile.changePage( "#invitefrndPg", { transition: "slide", changeHash: false });
}
function walletpagefunc(){
var mobile_number = window.localStorage.mobile_number;
	msg = { "mobile_number":mobile_number};
    $.ajax({
        url: link + "getuserupdatedapi", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'', 'Ok');
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
				var user = OutputArr.userdata;
				var Arr = user.User;
				//alert(Arr.credit);
					window.localStorage.credit = Arr.credit;
					$("#creditamt").html("&#8358 "+ Arr.credit);
		}
	});
	//$("#creditamt").html("₦"+window.localStorage.credit);
	//$.mobile.changePage("#walletpage", { transition: "false", changeHash: false });
	$(":mobile-pagecontainer").pagecontainer("change", "#walletpage", { reverse: false, transition: "slide", changeHash: false });
}
$( document ).on( "pageinit", "#walletpage", function( event ) {
  $( "#addcredit" ).unbind('click').bind('click', addcreditfunc );
  $( "#trnsfrcredit" ).unbind('click').bind('click', trnsfrcreditfunc );
  	$("#bcktowalletPg").unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
	$("#invtfrnd_walletPg").unbind('click').bind('click', invitefrndPgfunc);
	$("#wallethistory").unbind('click').bind('click', wallethistoryfunc);
	//$("#walletpage").on("swiperight", backsrvcProvidrPg);
	
});

$( document ).on( "pageinit", "#top10Page", function( event ) {
	$("#bcktop10Pg").unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
	$("#invtfrnd_top10Pg").unbind('click').bind('click', invitefrndPgfunc);
	//$("#myordr_top10Pg").unbind('click').bind('click', myordrPgfunc);
	//$("#top10Page").on("swiperight", backsrvcProvidrPg);
	filterOrderlist();
});
function addcreditfunc(e){
	e.preventDefault();
	$("#txtcreditamt").val("");
	$("#txtconfrmcreditamt").val("");
	$.mobile.changePage("#addcreditpage", { transition: "false", changeHash: false });
}
$( document ).on( "pageinit", "#addcreditpage", function( event ) {
  $( "#addsubmitcreditamt" ).unbind('click').bind('click', addvaluetocreditfunc );
  $( "#btncreditcancel" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
  $( "#bckfrmaddcrdtpage" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	}*/); 
  //$("#addcreditpage").on("swiperight", walletpagefunc);
  //$( "#frgotpswrd" ).bind('click', forgotpagefunc );
});
var URLlink;
function addvaluetocreditfunc(){
	
	$( "#bankback" ).unbind('click').bind('click', addcreditfunc );
	$( "#go2orders" ).unbind('click').bind('click', walletpagefunc );
	$("#goto").html("Go to Wallet");
	var hndusrid = window.localStorage.Usr_id;
	var addvalue = $("#txtcreditamt").val();
	var confrmvalue = $("#txtconfrmcreditamt").val();
	var creditvalue;
	if(addvalue.length < 1){
		//alert("Please enter credit amount");
		navigator.notification.alert('Please enter credit amount',alertDismissed,'Alert', 'Ok');
	}else if(confrmvalue.length < 1){
		//alert("Please re-enter credit amount");
		navigator.notification.alert('Please re-enter credit amount',alertDismissed,'Alert', 'Ok');
	}else if(addvalue != confrmvalue){
		//alert("Confirm credit amount not match");
		navigator.notification.alert('Confirm credit amount not match',alertDismissed,'Alert', 'Ok');
	}else{
		creditvalue = addvalue;
$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
	msg = { "user_id":hndusrid,"credit_amount":creditvalue};
    $.ajax({
        url: link + "get_credit_requestapi", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		console.log(result);
			//URLlink = (OutputArr.url).slice(0,-1);			
			URLlink = OutputArr.url;
			gotobankpage(URLlink);
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
        }
    });
	}
}
function trnsfrcreditfunc(e){
	e.preventDefault();
	$("#trnsfrtomobileno").val("");
	$("#accountpin").val("");
	 $("#confaccountpin").val("");
	$("#trnsfrcreditamt").val("");
	$.mobile.changePage("#transfercreditPage", { transition: "false", changeHash: false });
}
$( document ).on( "pageinit", "#transfercreditPage", function( event ) {
  $( "#totrnsfrcredit" ).unbind('click').bind('click', credittransferfunc );
  $( "#btncancel" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
  $( "#bckfrmcrdtrnsfrpage" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
	$( "#forgot_pin" ).unbind('click').bind('click', forgotpinfunc );
  $(function ( e ) {
					var my_no = window.localStorage.mobile_number;
					var reffer_by = window.localStorage.refferby;
					var refferal_code = window.localStorage.refferalcode;
					$("#listofconcact").empty();//reffer_code
					msg = { "referel_code": refferal_code,"refferby_code":reffer_by };

	$.ajax({
        url: link + "invitedfriendsapi",
		data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
		},
        success: function (result) {
		var response=JSON.parse(result);
		var friend = response.friends;
		
		if(response.status==1){
			if(reffer_by != ""){
			var sender = response.sender;
			
/* 			if(sender.length==0){
				$("#friend_chatlist").append("<li><a href='#'>you Have No Friend</a></li>");
			}else{ */
				var senderno = sender.User;
				var mobilenumber = senderno.mobile_number;
				var senderblock = senderno.blockstatus;
				var is_active = senderno.is_active;
				if(is_active == 0){
					var live = "img/inactive.png";
				}else{
					var live = "img/active.png";
				}
				if(senderblock == 0){
						var sndrval = 0;
						var color = "#fff";
						var unblck = "Unblock";
					}else{
						var sndrval = 1;
						var color = "#f00";
						var unblck = "Block";
						$('li.div').unbind('click');
					}
				if(senderno.first_name==""){
					$("#listofconcact").append("<option value="+ mobilenumber +">"+ mobilenumber +"</option>");
					//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ mobilenumber +","+my_no+","+ 0+","+sndrval+")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ mobilenumber +"</div><span id="+ mobilenumber +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ mobilenumber +","+my_no+","+ sndrval +")' value="+ sndrval +">"+ unblck +"</span></li>").listview('refresh');
				}else{
				var sendersname = senderno.first_name+" "+senderno.last_name;
				var sendername = '"'+senderno.first_name+" "+senderno.last_name+'"';
				$("#listofconcact").append("<option value="+ mobilenumber +">"+ sendersname +"</option>");
				//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ mobilenumber +","+my_no+","+ sendername +","+sndrval+")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ sendersname +"</div><span id="+ mobilenumber +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ mobilenumber +","+my_no+","+ sndrval +")' value="+ sndrval +">"+ unblck +"</span></li>").listview('refresh');
				}
			//}		
			}
			if(refferal_code != ""){
			for(var key in friend){
				var usrfrnds = friend[key].User;
				var mobilenumber = usrfrnds.mobile_number;
				var frndfirst_name = usrfrnds.first_name;
				var frndlast_name = usrfrnds.last_name;
				var frndblock = usrfrnds.blockstatus;
				var is_active = usrfrnds.is_active;
				if(is_active == 0){
					var live = "img/inactive.png";
				}else{
					var live = "img/active.png";
				}
				if(frndblock == 0){
						var frndval = 0;
						var color = "#fff";
						var unblck = "Unblock";
					}else{
						var frndval = 1;
						var color = "#f00";
						var unblck = "Block";
						$('li.div').unbind('click');
					}
				if(usrfrnds.first_name==""){
					$("#listofconcact").append("<option value="+ mobilenumber +">"+ mobilenumber +"</option>");
					//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ mobilenumber +","+my_no+","+ 0+","+ frndval +")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ mobilenumber +"</div><span id="+ mobilenumber +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ mobilenumber +","+my_no+","+ frndval +")' value="+ frndval +">"+ unblck +"</span></li>").listview('refresh');
				}else{
				var friendname = '"'+usrfrnds.first_name+" "+usrfrnds.last_name+'"';
				var friendsname = usrfrnds.first_name+" "+usrfrnds.last_name;
				$("#listofconcact").append("<option value="+ mobilenumber +">"+ friendsname +"</option>");
				//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ mobilenumber +","+my_no+","+ friendname +","+ frndval +")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ friendsname +"</div><span id="+ mobilenumber +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ mobilenumber +","+my_no+","+ frndval +")' value="+ frndval +">"+ unblck +"</span></li>").listview('refresh');
				//console.log(friendname);
				}
			}
			}
			$("#listofconcact").trigger("updatelayout");
		}
        }
    });
});
/* 		$("#trnsfrtomobileno").on('change',function(){
//alert("alert")		
			//$("#listofconcact").show();
		}) */
});
function choosecontact(mobileno){
	$("#trnsfrtomobileno").val(mobileno);
	//$("#listofconcact").fade();
}
function wallethistoryfunc(){
var items='';
$("#wallethstrylist").empty();
var user_id = window.localStorage.Usr_id;
msg = {"user_id":user_id}
$.ajax({
        url: link + "credit_transfer_historyapi", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
		var status = OutputArr.status;
		var credithistory = OutputArr.credithistory;
		for(var key in credithistory){
			var CreditTransfer = credithistory[key].CreditTransfer;
			var reciever_name = CreditTransfer.reciever_name;
			var amount = CreditTransfer.amount;
			var date_created = CreditTransfer.date_created;
			var time_created = CreditTransfer.time_created;
			var sender_name = CreditTransfer.sender_name;
			var reciever_mobile = CreditTransfer.reciever_mobile;//<div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Sender Name :</div><div style='float:left;' class='wd50p tal'>"+sender_name+"</div></div>
			items +="<li><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Receiver Name :</div><div style='float:left;' class='wd50p tal'>"+reciever_name+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Receiver Mobile No. :</div><div style='float:left;' class='wd50p tal'>"+reciever_mobile+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Amount :</div><div style='float:left;' class='wd50p tal'>&#8358 "+amount+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Date :</div><div style='float:left;' class='wd50p tal'>"+date_created+"</div></div><div class='fl wd100p'><div style='float:left;font-weight:bold' class='wd50p tar'>Time :</div><div style='float:left;' class='wd50p tal'>"+time_created+"</div></div></li>";
			
			}
					$(".ui-loader").hide();
					$.mobile.loading("hide");
					$("#wallethstrylist").append(items);
					$("#wallethstrylist").listview().listview("refresh");
					$(":mobile-pagecontainer").pagecontainer("change", "#wallethistorypage", { reverse: false, transition: "slide", changeHash: false });
		}
		});
}
$( document ).on( "pageinit", "#wallethistorypage", function( event ) {
	$("#bckwallethistry").unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
	//$("#invtfrnd_helpPg").unbind('click').bind('click', invitefrndPgfunc);
	//$("#myordr_helpPg").unbind('click').bind('click', myordrPgfunc);
	//$("#helpPage").on("swiperight", backsrvcProvidrPg);
});
$( document ).on( "pageinit", "#helpPage", function( event ) {
	$("#bcktohelpPg").unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
	$("#invtfrnd_helpPg").unbind('click').bind('click', invitefrndPgfunc);
	//$("#myordr_helpPg").unbind('click').bind('click', myordrPgfunc);
	//$("#helpPage").on("swiperight", backsrvcProvidrPg);
});
function creditcancel(e){
	e.preventDefault();
	//$.mobile.changePage("#walletpage", { transition: "false", changeHash: false });
	$(":mobile-pagecontainer").pagecontainer("change", "#walletpage", { reverse: true, transition: "slide", changeHash: false });
}
function credittransferfunc(){
	
	var hndusrid = window.localStorage.Usr_id;
	var transfertomobileno = $("#trnsfrtomobileno").val();
	var accountpin = $("#accountpin").val();
	var confaccountpin = $("#confaccountpin").val();
	var trnsframt = $("#trnsfrcreditamt").val();
	var accnt_pin;
	if(transfertomobileno.length < 1){
			//alert("Please enter mobile number");
			navigator.notification.alert('Please enter mobile number',alertDismissed,'Alert', 'Ok');
		}else if(trnsframt.length < 1){
			//alert("Please enter credits");
			navigator.notification.alert('Please enter credits',alertDismissed,'Alert', 'Ok');
		}else if(accountpin.length < 1){
			//alert("Please enter account pin");
			navigator.notification.alert('Please enter account pin',alertDismissed,'Alert', 'Ok');
		}else if(confaccountpin.length < 1){
			//alert("Please re-enter account pin");
			navigator.notification.alert('Please re-enter account pin',alertDismissed,'Alert', 'Ok');
		}else if(accountpin != confaccountpin){
			//alert("Account pin not match");
			navigator.notification.alert('Account pin not match',alertDismissed,'Alert', 'Ok');
	}else{
	accnt_pin = accountpin;
		$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
	
	msg = { "User_id":hndusrid,"amount":trnsframt,"mobile_number": transfertomobileno,"pin":accnt_pin};
    $.ajax({
        url: link + "transfer_creditapi", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
        },
        success: function (result) {
		var OutputArr = JSON.parse(result);
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			var message ="Reciepient doesn't exists plesae check the number you have entered";
			if(OutputArr.message != message){
				var avablecredit = OutputArr.credit;
				window.localStorage.credit = OutputArr.credit;
				$("#creditamt").html("&#8358 "+avablecredit);
			}else{
				$("#creditamt").html("&#8358 "+window.localStorage.credit);
			}
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			$.mobile.changePage("#walletpage", { transition: "false", changeHash: false });
        }
    });	
	}
}

function helppagefunc(){
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
$("#collapsediv").empty();
	//msg = { "mobile_number": confmobileno};
    $.ajax({
        url: link + "help", 
		//data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
		 //var nextId = 1;
			var OutputArr = JSON.parse(result);
			for (var key in OutputArr) {
				var helparray = OutputArr[key].Help;
				var helpQuestId = helparray.id;
				var helpQuestion = helparray.question;
				var helpAnswer = helparray.answer;
				        //nextId++;
					var content = "<div data-role='collapsible' data-mini='true' id='set" + helpQuestId + "'><h3>" + helpQuestion + "</h3><p>"+ helpAnswer +"</p></div>";
					 $("#collapsediv").append( content );
					//$("#set" + helpQuestId + "").collapsibleset('refresh');
				//$('#helpqueAns').append("<li><div class='help_question' id='"+ helpQuestId +"'>"+ helpQuestion +"</div><div class='help_answer'><p>"+ helpAnswer +"</p></div></li>").trigger('create');
			}
			$('[data-role=collapsible-set]').collapsibleset().trigger('create');
			$(".ui-loader").hide();
			$.mobile.loading("hide");
				$("#expand").click(function() {
				$("#collapsediv").children(":last").trigger( "expand" );
			});
			$("#collapse").click(function() {
				$("#collapsediv").children(":last").trigger( "collapse" );
			});
			//console.log(svcproviderArr);
			//$('#helpqueAns').trigger('create');
			$.mobile.changePage("#helpPage", { transition: "false", changeHash: false });
			//e.preventDefault();
        }
    });	
}
function myaccountpagefunc(){
	if(window.localStorage.Accountpin == ""){
		//e.preventDefault();
		$('#txtacuntpin').val("");
		$('#txtconfrmacuntpin').val("");
		$.mobile.changePage("#setpinpage", { transition: "false", changeHash: false });		
	}else{
		//e.preventDefault();
		$('#oldaccountpin').val("");
		$('#newaccountpin').val("");
		$('#confrmnewacntpin').val("");
		$.mobile.changePage("#updatepinpage", { transition: "false", changeHash: false });		
	}	
}
var current_page = '';
var previous_page = '';
var myVar = '';
var sendmsg;
var subject;
var pageid = [];
$(document).on("pageshow", '[data-role="page"]', function () {
	previous_page = current_page;
	//alert(previous_page);
    current_page = $.mobile.activePage[0].id;
	pageid.push(current_page);
	console.log(pageid);
	if(current_page == 'chatPage'){
		startTimer()
	}else{
		clearInterval(myVar);
	}
	if(current_page == 'invitefrndPg'){
	sendmsg = '';
	subject="";
	//alert(sendmsg);
	  if(sendallflag == 0){
	  sendmsg = '';
	  subject="";
	  //alert(sendmsg);
	   sendmsg = messages;
	   subject="Send Recharge Card(s)";
	   //alert(sendmsg);
	  }else if(sendallflag == 1){
	  sendmsg = '';
	  subject="";
	  //alert(sendmsg);
		sendmsg = loadcod;
		//alert(sendmsg);
		subject="Send Recharge Card(s)";
		// alert(sendmsg);
	}else if(sendallflag == 2){
	sendmsg = '';
	subject="";
	//alert(sendmsg);
		//sendmsg = msginvtefrnd;
		var pin = window.localStorage.refferalcode;
		sendmsg = "Hi, I'm using Fasttopups to recharge my phone, pay bills and transfer funds online. Get yours here http://goo.gl/dYq7YG. Enter "+pin+" on the register page.";
		//sendmsg ="You can install fasttopup app from googleplay and register on it by using this code--\n"+pin+"";
		subject="Invitation for fasttopup app";
	}/* else{
	sendmsg = '';
		sendmsg=msginvtefrnd;
	} */
	}
});
function startTimer(){
  clearInterval(myVar);
  myVar = setInterval(function(){
      chatRefresh();     
  }, 2000);
} 
$( document ).on( "pageinit", "#chatPage", function( event ) {
	startTimer();
	$("#bcktochatPg").unbind('click').bind('click', onBackKeyDown/* function(e){
	$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
	//$("#chatPage").on("swiperight", backsrvcProvidrPg);
	//$("#myordr_chatPg").unbind('click').bind('click', myordrPgfunc);
});
$( document ).on( "pageinit", "#setpinpage", function( event ) {
  $( "#addaccountpin" ).unbind('click').bind('click', addaccountpinfunc );
  //$("#setpinpage").on("swiperight", backsrvcProvidrPg);
  $("#cancelsetpin").unbind('click').bind('click', walletpagefunc);
  $("#bckfrmsetpin").unbind('click').bind('click', walletpagefunc);
});
$( document ).on( "pageinit", "#updatepinpage", function( event ) {
	//$("#updatepinpage").on("swiperight", backsrvcProvidrPg);
	$("#cancelupdatepin").unbind('click').bind('click',walletpagefunc );
	$("#bckfrmupdatepin").unbind('click').bind('click',walletpagefunc );
  $( "#updateaccountpin" ).unbind('click').bind('click', editaccountpinfunc );
  $( "#forgotpin" ).unbind('click').bind('click', forgotpinfunc );
  
});
function addaccountpinfunc(){
	
	var accountpin = $('#txtacuntpin').val();
    var confrmaccountpin = $('#txtconfrmacuntpin').val();
	var hndusrid = window.localStorage.Usr_id;
	if(accountpin.length < 1){
		//alert("Please enter pin");
		navigator.notification.alert('Please enter pin',alertDismissed,'Alert', 'Ok');
	}else if(confrmaccountpin.length < 1){
		//alert("Please re-enter pin");
		navigator.notification.alert('Please re-enter pin',alertDismissed,'Alert', 'Ok');
	}else{
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     msg = { "User_id":hndusrid,"account_pin":accountpin,"account_pin_confirm": confrmaccountpin};
    $.ajax({
        url: link + "account_pinapi", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
			var OutputArr = JSON.parse(result);
			var status = OutputArr.message;
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			if(status == "Password mismatch"){
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			}else{
				walletpagefunc();
			}	
        }
    });
	}
}
function editaccountpinfunc(){
	
	var oldaccountpin = $('#oldaccountpin').val();
	var newaccountpin = $('#newaccountpin').val();
    var confrmnewaccountpin = $('#confrmnewacntpin').val();
	var hndusrid = window.localStorage.Usr_id;
	if(oldaccountpin.length < 1){
		//alert("Please enter old pin");
		navigator.notification.alert('Please enter old pin',alertDismissed,'Alert', 'Ok');
	}else if(newaccountpin.length < 1){
		//alert("Please enter new pin");
		navigator.notification.alert('Please enter new pin',alertDismissed,'Alert', 'Ok');
	}else if(confrmnewaccountpin.length < 1){
		//alert("Please enter confirm pin");
		navigator.notification.alert('Please enter confirm pin',alertDismissed,'Alert', 'Ok');
	}else if(newaccountpin != confrmnewaccountpin){
		//alert("Confirm pin not match");
		navigator.notification.alert('Confirm pin not match',alertDismissed,'Alert', 'Ok');
	}else{
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     msg = { "User_id":hndusrid,"old_account_pin":oldaccountpin,"account_pin":newaccountpin,"account_pin_confirm": confrmnewaccountpin};
    $.ajax({
        url: link + "edit_pinapi", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
			var OutputArr = JSON.parse(result);
			var status = OutputArr.message;
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			walletpagefunc();
        }
    });
	}

}
function forgotpinfunc(){
var hndusrid = window.localStorage.Usr_id;
var email = window.localStorage.email_id;
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     msg = { "user_id":hndusrid,"email_id":email};
    $.ajax({
        url: link + "forgot_pin_api", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			navigator.notification.alert('Please try again.',alertDismissed,'Alert', 'Ok');
        },
        success: function (result) {
			var OutputArr = JSON.parse(result);
			var status = OutputArr.message;
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			//$(":mobile-pagecontainer").pagecontainer("change", "#updatepinpage", { reverse: false, transition: "slide", changeHash: false });
        }
    });
}
$( document ).on( "pageinit", "#updatepasswordpage", function( event ) {
  //$("#updatepasswordpage").on("swiperight", backsrvcProvidrPg);
  $( "#btnupdatePswrd" ).unbind('click').bind('click', updatepasswordfunc );
  $("#cancelupdatepassword" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
  $("#bckfrmupdatepassword" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
});
function updatepasswordfunc(e){
	
	var currentpswrd = $('#txtcrntPswrd').val();
	var confrmnewpswrd = $('#txtconfrmnewPswrd').val();
    var newpswrd = $('#txtnewPswrd').val();
	var hndusrid = window.localStorage.Usr_id;
	if(currentpswrd.length < 1){
		//alert("Please enter old password");
		navigator.notification.alert('Please enter old password',alertDismissed,'Alert', 'Ok');
	}else if(newpswrd.length < 1){
		//alert("Please enter new password");
		navigator.notification.alert('Please enter new password',alertDismissed,'Alert', 'Ok');		
	}else if(confrmnewpswrd.length < 1){
		//alert("Please enter confirm password");
		navigator.notification.alert('Please enter confirm password',alertDismissed,'Alert', 'Ok');
	}else if(confrmnewpswrd != newpswrd){		
		//alert("Confirm Password not match");
		navigator.notification.alert('Confirm Password not match',alertDismissed,'Alert', 'Ok');
	}else{
		var updatepassord = confrmnewpswrd;
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     msg = { "user_id":hndusrid,"password":currentpswrd,"new_password": updatepassord};
    $.ajax({
        url: link + "change_passwordapi", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		data:msg,
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
		if(status == 1){
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			$.mobile.changePage("#loginpage", { transition: "false", changeHash: false });
			e.preventDefault();
		}else{
			$(".ui-loader").hide();
			$.mobile.loading("hide");
			//alert(OutputArr.message);
			navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
			$.mobile.changePage("#updatepasswordpage", { transition: "false", changeHash: false });
			e.preventDefault();
		}   
        }
    });
	}
}
$( document ).on( "pageinit", "#voucherlistpage", function( event ) {
	$.mobile.phonegapNavigationEnabled = true;
	$( "#bcktosrvcprovidrpage" ).unbind('click').bind('click', backsrvcProvidrPg )       
	$( "#invitfrnd_vochrlstPg" ).unbind('click').bind('click', invitefrndPgfunc )
	//$( "#myordr_vochrlstPg" ).unbind('click').bind('click', myordrPgfunc )
	//$("#voucherlistpage").on("swiperight", backsrvcProvidrPg);
});
function backtohome(){
clearInterval(myVar);
pageid = [];
var a= "";
        $('#txtmobileno').val("");
        $('#txtpaswrd').val("");
		$("input[cType=chkrecord]").attr("checked",false).checkboxradio().val(0);
		$("input[cType=chkrecord]").attr("checked",false).checkboxradio("refresh");
	msg={"user_id":window.localStorage.Usr_id}
	$.ajax({
		url: link + "logout_api",
		data:msg,
        type: "POST",
        error: function (request, error) {
		$(".ui-loader").hide();
			$.mobile.loading("hide");
		},
        success: function (result) {
		var OutputArr = JSON.parse(result);
		window.localStorage.removeItem("mobile_number");
    window.localStorage.removeItem("credit");
	window.localStorage.removeItem("Usr_id");
	window.localStorage.setItem("loginstatus",0);
	window.localStorage.removeItem("Accountpin");
    window.localStorage.removeItem("profile_name");
	window.localStorage.removeItem("last_name");
	window.localStorage.removeItem("email_id");
	window.localStorage.removeItem("o_pass");
	window.localStorage.removeItem("recevermb");
	window.localStorage.removeItem("sendr");
	window.localStorage.removeItem("userlogincount");
    //window.localStorage.clear();
		$(":mobile-pagecontainer").pagecontainer("change", "#loginpage", { reverse: true, transition: "slide", changeHash: false });
		}
	});    
}

function createacfunc(e){
e.preventDefault();
	$('#txtregmobileno').val("");
    $('#txtregpaswrd').val("");
	$('#txtregpaswrdconfrm').val("");
	$('#txtregemail_id').val("");
	$('#txtfirstname').val("");
	$('#txtlastname').val("");
	$('#refferby').val("");
	$.mobile.changePage( "#registerpage", { transition: "slide", changeHash: false });
	
}
function backsrvcProvidrPg(){
//e.preventDefault();
clearInterval(myVar);
    $(":mobile-pagecontainer").pagecontainer("change", "#serviceprovider", { reverse: true, transition: "slide", changeHash: false });
	
}
 $( document ).on( "pageinit", "#termandconditions", function( event ) {
	event.preventDefault();
   $( "#returntotermspage" ).unbind('click').bind('click', function(event){
		acceptchkbox = 1;
		$(":mobile-pagecontainer").pagecontainer("change", "#registerpage", { reverse: true, transition: "slide", changeHash: false });
	
  })
    });
$( document ).on( "pageinit", "#registerpage", function( event ) {
	event.preventDefault();
   $( "#bckloginpg" ).unbind('click').bind('click', function(event){
	event.preventDefault();
		$("input[cType=chkbx]").attr("checked",false).checkboxradio().val(0);
		$("input[cType=chkbx]").attr("checked",false).checkboxradio("refresh");
	$(":mobile-pagecontainer").pagecontainer("change", "#loginpage", { reverse: true, transition: "slide", changeHash: false });
	
  })
  $( "#btncreatAcnt" ).unbind('click').bind('click', registrationfunc );
 /* $( "#invitfrndhome" ).bind('click', invitefrndpage );
  $( "#clkordrhome" ).bind('click', myorderpgfunc ); */
});
$(function(){
      $("input[cType=chkbx]").bind("change", function () {
        if ($(this).val() == 0) {
            $(this).val(1);
            $(this).attr("checked", true);
			
			$("#acceptpopup").popup("open");
			$("#readit").unbind('click').bind("click", function () {
				//acceptchkbox = 1;
				$.mobile.changePage("#termandconditions", { transition: "false", changeHash: false });
			});
		$("#skip").unbind('click').bind("click", function () {
			acceptchkbox = 1;
			$("#acceptpopup").popup("close");
		});	
        }else{
		    $("input[cType=chkbx]").attr("checked",false).checkboxradio().val(0);
			$("input[cType=chkbx]").attr("checked",false).checkboxradio("refresh");
			//$(this).val(0);
            //$(this).attr("checked", fasle);
			acceptchkbox = 0;
		}
    });
})
var acceptchkbox;
var regmobileno;
var regpassword;
var regemailid
$(document).ready(function() {
		$('#txtregemail_id').focusout(function(){

                $('#txtregemail_id').filter(function(){
                   var emil=$('#txtregemail_id').val();
              var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if( !emailReg.test( emil ) ) {
                //alert('Please enter valid email');
				navigator.notification.alert('Please enter valid email',alertDismissed,'Alert', 'Ok');
                } else {
                regemailid = $('#txtregemail_id').val();
                }
                })
            });
});
function registrationfunc(e){


		regmobileno = $('#txtregmobileno').val();
        regpassword = $('#txtregpaswrd').val();
		var regRepassword = $('#txtregpaswrdconfrm').val();
		
		var reffercode = $('#refferby').val();
		var first_name = $('#txtfirstname').val();
		var last_name = $('#txtlastname').val();
		if(first_name.length < 1){
			//alert("Please enter first name");
			navigator.notification.alert('Please enter first name',alertDismissed,'Alert', 'Ok');
		}else if(last_name.length < 1){
			//alert("Please enter last name");
			navigator.notification.alert('Please enter last name',alertDismissed,'Alert', 'Ok');
		}else if(regmobileno.length < 1){
			//alert("Please enter correct mobile number");
			navigator.notification.alert('Please enter correct mobile number',alertDismissed,'Alert', 'Ok');
		}else if(regemailid.length < 1){
			//alert("Please enter email");
			navigator.notification.alert('Please enter email',alertDismissed,'Alert', 'Ok');
		}else if(regpassword.length < 1){
			//alert("Please enter password");
			navigator.notification.alert('Please enter password',alertDismissed,'Alert', 'Ok');
		}else if(regRepassword.length < 1){
			//alert("Please enter repeat password");
			navigator.notification.alert('Please enter repeat password',alertDismissed,'Alert', 'Ok');
		}else if(regpassword != regRepassword){
			//alert("Password not match");
			navigator.notification.alert('Password not match',alertDismissed,'Alert', 'Ok');
		}else{
			var verifiedPaswrd = regpassword;
	
			if(acceptchkbox == 1){
			$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
				msg = { "mobile_number": regmobileno, "password": verifiedPaswrd, "email_id":regemailid ,"refferby":reffercode,"first_name":first_name,"last_name":last_name,"loginby":"app"};	
			   
				$.ajax({
					url: link + "register", 
					//url: "http://flexsin.org/lab/familytree/dd.php",
					//data: JSON.stringify(msg),
					data:msg,
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
					if(status==1){
						//$(".ui-loader").hide();
						//$.mobile.loading("hide");
						//alert(OutputArr.message);
						//navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
						$("input[cType=chkbx]").attr("checked",false).checkboxradio().val(0);
						$("input[cType=chkbx]").attr("checked",false).checkboxradio("refresh");
						loginflag = 1;
						loginfunc(e);
						//$.mobile.changePage( "#loginpage", { transition: "slide", changeHash: false });
						e.preventDefault();
					}else{
						$(".ui-loader").hide();
						$.mobile.loading("hide");
						//alert(OutputArr.message);
						navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
						$.mobile.changePage( "#registerpage", { transition: "slide", changeHash: false });
						e.preventDefault();
					}    
					}
				});
				}else{
								$(".ui-loader").hide();
						$.mobile.loading("hide");
					//alert("Please accept the terms and conditions");
					navigator.notification.alert('Please accept the terms and conditions',alertDismissed,'Alert', 'Ok');
				}
	}
}
var forpayProviderid;
function providercoupon(srvcProviderid, srvcProviderDiscount){
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
     $("#coupandiv").html("");
    $("#coupandiv").show();
	forpayProviderid = srvcProviderid;
	msg = { "provider_id": srvcProviderid };		
    $.ajax({
        url: link + "coupan_amountapi", 
		//url: "http://flexsin.org/lab/familytree/dd.php",
        //data: JSON.stringify(msg),
		data:msg,
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
		for (var key in OutputArr) {
				var couponAmt = OutputArr[key].Coupon;
					var couponamount = couponAmt.amount;
					$('#coupandiv').append("<div class='coupanBox' onclick='navboxclick("+ couponamount +")'><div class='priceBox'>&#x20a6; "+ couponamount +" <i class='cutter'></i></div><div class='rechargeNow txtshadow'><a href='#'>Recharge Now</a></div></div>");
		}
                    $('#coupandiv').trigger('create');
					$(".ui-loader").hide();
					$.mobile.loading("hide");
				   $(":mobile-pagecontainer").pagecontainer("change", "#voucherlistpage", { transition: "slide", changeHash: false });
   
        }
    });
} 
/*------------------------------------------------------------myoredr function---------------------------------------------------*/
function myordrPgfunc (){
 pagee = 1;
 flag = 0;
 //checkScroll();
 $("#list").empty();
 $(".ui-loader").show();
		$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
 $.mobile.changePage( "#myorderPage", { transition: "slide", changeHash: false });
 //console.log(svcproviderArr);
 $("#filtersvcprovdr").empty();
 	for(var key in svcproviderArr){
	//alert(svcproviderArr.length);
	
		$("#filtersvcprovdr").append("<li><a color='#000' onclick='filterorder("+ svcproviderArr[key].svcPvdrid +")'>"+ svcproviderArr[key].svcPvrdname +"</a>");
	}
	filterOrderlist();
$(".ui-loader").show();
		$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
/*   setTimeout(function() { */
	var items = '';
	//console.log(items);
  var hndusrid = window.localStorage.Usr_id;
  //var pagee = ++pagee;
	msg = { "user_id": hndusrid,"limit":limit,"page":pagee };
	$.ajax({
        //url: "http://flexsin.org/lab/buytopups/WebServices/my_orders",
		url: link + "my_orders",
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success:(function (result) {
			var OutputArr = JSON.parse(result);
			var data = OutputArr.data;
/* 			var user = OutputArr.user;
			var Arr = user.User; */
			
			if(OutputArr.status == 0){
			items += "<li>" + OutputArr.message + "</li>";
			//$('#hstry_tbl').trigger('create');
				$(".ui-loader").hide();
				$.mobile.loading("hide");
				$("#list").append(items);
			$.mobile.changePage( "#myorderPage", { transition: "slide", changeHash: false });
			e.preventDefault();

   }else{
   			for (var key in data) {
					if(data[key].coupon_read_status == 0){
					var svcrpver= '"'+ data[key].service_provider +'"';
					//alert(svcrpver);
					// var svcrpver= "'"+ data[key].service_provider +"'"+","+ data[key].amount +","+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id;
					//console.log(svcrpver);
					//items += "<li><div align='center'>Service Provider:<span>"+ data[key].service_provider +"</span></div><div align='center'>Coupon Code:<span onclick='popup("+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' class='colrclk txtshadow'>Click to View Pin</span></div><div align='center'>Amount:<span>₦"+ data[key].amount +"</span></div><div align='center'>Read:<span><input name='' cType='chkread' type='checkbox' value='"+data[key].coupon_read_status+"' id="+data[key].id+"><span style='margin:0px 0px 0px 50%'>send:</span><span><input name='' cType='chkselect' type='checkbox' id="+key+"></div></li>";
					//$("#list").append(items);
					items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold'>"+ data[key].service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold'>&#8358 "+ data[key].amount +"</div><div style='width:100px;margin-right:10px;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ data[key].secure_coupon_code +","+data[key].dial_code+","+ data[key].amount +","+data[key].id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ data[key].date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ data[key].amount +","+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+ data[key].secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 100px; float: right; margin: 0px 10px 0px 0px;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+data[key].coupon_read_status+"' id="+data[key].id+"></div></div><div></div></li>";
					
					
					}else{
					//items += "<li><div align='center'>Service Provider:<span>"+ data[key].service_provider +"</span></div><div align='center'>Coupon Code:<span onclick='popup("+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' class='colrclk txtshadow'>Click to View Pin</span></div><div align='center'>Amount:<span>₦"+ data[key].amount +"</span></div><div align='center'>Read:<span><input name='' cType='chkread' type='checkbox' value='"+data[key].coupon_read_status+"' checked='checked' id="+data[key].id+"><span style='margin:0px 0px 0px 50%'>send:</span><span><input name='' cType='chkselect' type='checkbox' id="+key+"></div></li>";
					//$("#list").append(items);
					items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold;'>"+ data[key].service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold;'>&#8358 "+ data[key].amount +"</div><div style='width:100px;margin-right:10px;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ data[key].secure_coupon_code +","+data[key].dial_code+","+ data[key].amount +","+data[key].id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ data[key].date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ data[key].amount +","+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+ data[key].secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 100px; float: right; margin: 0px 10px 0px 0px;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+data[key].coupon_read_status+"' checked='checked' id="+data[key].id+"></div></div><div></div></li>";
						}
						//console.log(data[key].id);
						//$("#list").append(items).listview("refresh");
			}
					 /* $('#hstry_tbl').append("<tr><td align='right' colspan='3'>Grand Total:</td><td>£ 45.00</td></tr></tbody>"); */
					 //console.log(items);
					 //console.log(result);
                    $('#list').listview('refresh'); 
					$(".ui-loader").hide();
					$.mobile.loading("hide");
				   //$.mobile.changePage( "#myorderPage", { transition: "slide", changeHash: false });
				   //e.preventDefault();
   }
	pagee = pagee +1;
        $("#list").append(items).listview("refresh");
    })
	});
    //$("#list").append.listview("refresh");
    $.mobile.loading("hide");
/*     $(document).on("scrollstop", checkScroll);
  }, 500); */

}
var limit = 10; //max images per page
var pagee; //initialize page number

/* check scroll function */
function checkScroll() {
  var activePage = $.mobile.pageContainer.pagecontainer("getActivePage"),
    screenHeight = $.mobile.getScreenHeight(),
    contentHeight = $(".ui-content", activePage).outerHeight(),
    header = $(".ui-header", activePage).outerHeight() - 1,
	//header = 70 - 1,
    scrolled = $(window).scrollTop(),
    footer = $(".ui-footer", activePage).outerHeight() - 1,
    scrollEnd = contentHeight - screenHeight + header + footer;
  $(".ui-btn-left", activePage).text("Scrolled: " + scrolled);
  $(".ui-btn-right", activePage).text("ScrollEnd: " + scrollEnd);
  if (activePage[0].id == "myorderPage" && scrolled >= scrollEnd) {
    //$(".ui-loader").show();
		//$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
	if(flag == 0){
		addMore(activePage);
	}else if(flag == 1){
	  addMore1(activePage);
	  //alert("ok");
	}
	//loadNextPage();
  }
}
var flag;
function addMore(page) {
  $(document).off("scrollstop");
  $(".ui-loader").show();
		$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
  setTimeout(function() {
	var items = '';
  var hndusrid = window.localStorage.Usr_id;
  //var pagee = ++pagee;
	msg = { "user_id": hndusrid,"limit":limit,"page":pagee };
	$.ajax({
        //url: "http://flexsin.org/lab/buytopups/WebServices/my_orders",
		url: link + "my_orders",
		data:msg,
        type: "POST",
        error: function (request, error) {
		$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success:(function (result) {
			var OutputArr = JSON.parse(result);
			var data = OutputArr.data;
/* 			var user = OutputArr.user;
			var Arr = user.User; */
			
			if(OutputArr.status == 0){
			//items += "<li>" + OutputArr.message + "</li>";
			//$('#hstry_tbl').trigger('create');
				$(".ui-loader").hide();
				$.mobile.loading("hide");
				$("#list").append(items);
			$.mobile.changePage( "#myorderPage", { transition: "slide", changeHash: false });
			e.preventDefault();

   }else{
   			for (var key in data) {
					if(data[key].coupon_read_status == 0){
					var svcrpver= '"'+ data[key].service_provider +'"';
					
					//items += "<li><div align='center'>Service Provider:<span>"+ data[key].service_provider +"</span></div><div align='center'>Coupon Code:<span onclick='popup("+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' class='colrclk txtshadow'>Click to View Pin</span></div><div align='center'>Amount:<span>₦"+ data[key].amount +"</span></div><div align='center'>Read:<span><input name='' cType='chkread' type='checkbox' value='"+data[key].coupon_read_status+"' id="+data[key].id+"><span style='margin:0px 0px 0px 50%'>send:</span><span><input name='' cType='chkselect' type='checkbox' id="+key+"></div></li>";
					//$("#list").append(items);
					items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold'>"+ data[key].service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold'>&#8358 "+ data[key].amount +"</div><div style='width:100px;margin-right:10px;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ data[key].secure_coupon_code +","+data[key].dial_code+","+ data[key].amount +","+data[key].id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ data[key].date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ data[key].amount +","+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+ data[key].secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 100px; float: right; margin: 0px 10px 0px 0px;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+data[key].coupon_read_status+"' id="+data[key].id+"></div></div><div></div></li>";
					
					}else{
					//items += "<li><div align='center'>Service Provider:<span>"+ data[key].service_provider +"</span></div><div align='center'>Coupon Code:<span onclick='popup("+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' class='colrclk txtshadow'>Click to View Pin</span></div><div align='center'>Amount:<span>₦"+ data[key].amount +"</span></div><div align='center'>Read:<span><input name='' cType='chkread' type='checkbox' value='"+data[key].coupon_read_status+"' checked='checked' id="+data[key].id+"><span style='margin:0px 0px 0px 50%'>send:</span><span><input name='' cType='chkselect' type='checkbox' id="+key+"></div></li>";
					//$("#list").append(items);
					items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold'>"+ data[key].service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold'>&#8358 "+ data[key].amount +"</div><div style='width:30%;margin-right:2%;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ data[key].secure_coupon_code +","+data[key].dial_code+","+ data[key].amount +","+data[key].id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ data[key].date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ data[key].amount +","+ data[key].secure_coupon_code +","+data[key].dial_code+","+data[key].id+")' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+ data[key].secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 100px; float: right; margin: 0px 10px 0px 0px;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+data[key].coupon_read_status+"' checked='checked' id="+data[key].id+"></div></div><div></div></li>";
						}
						//console.log(data[key].id);
						//$("#list").append(items).listview("refresh");
			}
					 /* $('#hstry_tbl').append("<tr><td align='right' colspan='3'>Grand Total:</td><td>£ 45.00</td></tr></tbody>"); */
					 //console.log(result);
                    $('#list').listview('refresh'); 
					$(".ui-loader").hide();
					$.mobile.loading("hide");
				   //$.mobile.changePage( "#myorderPage", { transition: "slide", changeHash: false });
				   //e.preventDefault();
   }
	pagee = pagee +1;
        $("#list").append(items).listview("refresh");
    })
	});
    //$("#list").append.listview("refresh");
    $.mobile.loading("hide");
    $(document).on("scrollstop", checkScroll);
  }, 500);
}

/* attach if scrollstop for first time */
$(document).on("scrollstop", checkScroll);
var svcpvdr;
var cpnamt;
var pincode;
var pinid;
var selectallArry=[];
function selectAll(service_provider,amount,pin,dialcode,id){
	if(dialcode == 126){
		svcpvdr = "Airtel Nigeria";
	}else if(dialcode == 555){
		svcpvdr = "MTN Nigeria";
	}else if(dialcode == 123){
		svcpvdr = "Glo Mobile Nigeria";
	}else if(dialcode == 222){
		svcpvdr = "Etisalat Nigeria"
	}
	//svcpvdr = service_provider;
	cpnamt = amount;
	pincode ="*"+dialcode+"*"+pin+"#";
	pinid = id;
	//console.log(svcpvdr);
	
}
var chkselectallflag;
$(document).on('change','input[cType=chkselectall]',function(event){
//console.log(selectallArry);
		//$("input[cType=chkread]").bind("change", function () {
        if ($(this).val() == 0) {
            $(this).val(1);
			var idd = $(this).attr("pinid");
			//var id = pinid;
            $(this).attr("checked", true);
			var dialcodee = $(this).attr("dialcode");
			var svcpvdrr;
if(dialcodee == 126){
		svcpvdrr = "Airtel Nigeria";
	}else if(dialcodee == 555){
		svcpvdrr = "MTN Nigeria";
	}else if(dialcodee == 123){
		svcpvdrr = "Glo Mobile Nigeria";
	}else if(dialcodee == 222){
		svcpvdrr = "Etisalat Nigeria"
	}
	
	var amt = $(this).attr("amount");
	var pinn = $(this).attr("pin");
	var pincodee ="*"+dialcodee+"*"+pinn+"#";
       selectitens={"serviceProvider":svcpvdrr,"id":idd,"amount":amt,"coupon_code":pincodee}
			selectallArry.push(selectitens);
			console.log(selectallArry);
			readUnreadcoupon(idd,1);
    //}, 2000);
			
        }
        else if($(this).val() == 1){
            $(this).val(0);
			var idd = $(this).attr("pinid");
			//var id = pinid;
            $(this).attr("checked", false);
			//alert("un checked");
for(var i = 0; i < selectallArry.length; i++) {
    if(selectallArry[i].id == idd) {
        selectallArry.splice(i, 1);
		
        break;
    }
	
}
readUnreadcoupon(idd,0);
        }
    //selectallArry.push(selectitens);
	//console.log(selectallArry);

});

var messages='';;
var sendallflag;
var messageArry=[];
function sendallcards(){
$("#forfrnds").html(" ");
var message='';
sendallflag = '';
sendallflag = 0;
for(var i=0;i<selectallArry.length;i++){
 var compnyname = selectallArry[i].serviceProvider;
 var amount = selectallArry[i].amount;
 var rechargecode = selectallArry[i].coupon_code;
 message+=i+1+")"+compnyname+"\n"+"   "+"&#8358 "+amount+"\n"+"   "+rechargecode+"\n";
//alert(message);
console.log(message)
//messageArry.push(messages);
}
 messages = "A friend Sent you a list of recharge card(s) using Fasttopups mobile app --\n"+message+"";
$("#forfrnds").html("Send Cards");
console.log(messages);
//alert(messages);
$(":mobile-pagecontainer").pagecontainer("change", "#invitefrndPg", { reverse: false, transition: "slide", changeHash: false }); 
}
/*------------------------------------------------------------my order end-------------------------------------------------------*/
var coupon_code;
var couponid;
var loadcod;
function popup(compny,code,dialcode,amt,id){
var companyname;
	if(code == null){
		coupon_code = "Recharge Pin not available";
	}else{
		coupon_code = code;
	}
	if(dialcode == 126){
		companyname = "Airtel Nigeria";
	}else if(dialcode == 555){
		companyname = "MTN Nigeria";
	}else if(dialcode == 123){
		companyname = "Glo Mobile Nigeria";
	}else if(dialcode == 222){
		companyname = "Etisalat Nigeria"
	}
	couponid = id;
var msg='';
loadcod ='';
var rechargepin = '*'+dialcode+'*'+coupon_code+'#';
msg+= 1+")"+companyname+"\n"+"   "+"&#8358 "+amt+"\n"+"   "+rechargepin+"\n";
loadcod ="A friend Sent you a list of recharge card(s) using Fasttopups mobile app --\n"+msg+"" ;
	$("#copncod").html("Recharge Pin:"+ coupon_code)
	$("#orderpopup").popup('open');
	    $("#snd_tofrnd").unbind('click').bind("click", function () {
		$("#forfrnds").html(" ");
		sendallflag = '';
		sendallflag = 1;
		readUnreadcoupon(couponid,1);
		$("#couponcode").html("Recharge Pin:"+" "+coupon_code);
		$("#forfrnds").html("Send Cards");
        $.mobile.changePage("#invitefrndPg", { transition: "false", changeHash: false });
    });
	$("#loadcopn").unbind('click').bind("click", function () {
		readUnreadcoupon(couponid,1);
		window.plugins.CallNumber.callNumber(onSuccess, onError, rechargepin, true );//bypassAppChooser=true
    });	
}
function onSuccess(result){
 console.log("success"+result);
}
function onError(){

}
function readUnreadcoupon(id,status){
	msg = { "id": id,"status":status};		
    $.ajax({
        url: link + "setcouponreadstatusapi", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
			var OutputArr = JSON.parse(result);
				//alert("success")
						$(".ui-loader").hide();
						$.mobile.loading("hide");
						//myordrPgfunc();
		}
    });
}
$( document ).on( "pageinit", "#sendtofriendpage", function( event ) {
    $( "#cupntofrnd" ).unbind('click').bind('click', couponsndtofrnd );
	$( "#sndcancel" ).unbind('click').bind('click', sendfrndcancel );
	$( "#bckfrmsnd2frndpg" ).unbind('click').bind('click', sendfrndcancel );
	//$("#sendtofriendpage").on("swiperight", sendfrndcancel);
});
function sendfrndcancel(e){
	filterOrderlist();
	//$.mobile.changePage( "#myorderPage", { transition: "slide", changeHash: false });
	$(":mobile-pagecontainer").pagecontainer("change", "#myorderPage", { reverse: true, transition: "slide", changeHash: false });
	e.preventDefault();
}
function couponsndtofrnd(){ 
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
    var frndmailid = $("#frndemail_id").val();
	var hndusrid = window.localStorage.Usr_id;
	msg = { "User_id": hndusrid,"secure_code":coupon_code,"email":frndmailid};		
    $.ajax({
        url: link + "sendcouponapi", 
		data:msg,
        type: "POST",
        error: function (request, error) {
			$(".ui-loader").hide();
			$.mobile.loading("hide");
        },
        success: function (result) {
			var OutputArr = JSON.parse(result);
				//alert("success")
				navigator.notification.alert('Success',alertDismissed,'Alert', 'Ok');
						$(".ui-loader").hide();
						$.mobile.loading("hide");
						sendfrndcancel();
						readUnreadcoupon(couponid,1);
		}
    });

}
function filterOrderlist(){
 	$("#filterdate").val("");

	$(".filter > a").unbind('click').click(function(e){
			$(".filter_box").slideToggle();
				//e.preventDefault();
			});
		$(".filterr > a").unbind('click').click(function(e){
			$(".filter_box").slideToggle();
				//e.preventDefault();
			});
			$(".filter_box li").unbind('click').click(function(){
			$(this).children("ul").slideToggle();
			$(this).siblings().find("ul").slideUp();
			//e.preventDefault();
		 });
/* 	for(var key in svcproviderArr){
	//alert(svcproviderArr.length);
		$("#filtersvcprovdr").append("<li><a color='#000' onclick='filterorder("+ svcproviderArr[key].svcPvdrid +")'>"+ svcproviderArr[key].svcPvrdname +"</a>");
	} */
}
var paging;
var filterid;
var filterprice;
var filterdate;
function filterorder(id,price,date){
flag = 1;
filterid = id;
filterprice = price;
paging = 1;
	$("#list").empty();
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
	var hndusrid = window.localStorage.Usr_id;
 filterdate = $("#filterdate").val();
	var items = '';
	msg = { "user_id": hndusrid,"date_created":filterdate,"service_provider_id":id,"amount":price,"limit":10,"page":paging};		
			
    $.ajax({
        url: link + "order_filter", 
		data:msg,
        type: "POST",
        error: function (request, error) {
						$(".ui-loader").hide();
						$.mobile.loading("hide");
        },
        success: function (result) {
			var OutputArra = JSON.parse(result);
			//var data = OutputArr.data;
			//console.log(data);
			//$('#hstry_tbl').html("<tbody width='100%'><tr><th align='center'>Servics Provider</th><th align='center'>Code</th> <th align='center'>Cost</th><th align='center'>Read</th></tr>");
   			for (var key in OutputArra) {
				var dataa = OutputArra[key].data;
				//var svcrpver= '"'+ dataa[key].service_provider +'"';
				try{				
				var svcrpver= '"'+ dataa.service_provider +'"';
				
			 if(dataa.coupon_read_status == 0){
					
				items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold'>"+ dataa.service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold'>&#8358 "+ dataa.amount +"</div><div style='width:100px;margin-right:10px;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ dataa.secure_coupon_code +","+dataa.dial_code+","+ dataa.amount +","+dataa.id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ dataa.date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ dataa.amount +","+ dataa.secure_coupon_code +","+dataa.dial_code+","+dataa.id+")' id="+ dataa.secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 100px; float: right; margin: 0px 10px 0px 0px;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+dataa.coupon_read_status+"' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+dataa.id+"></div></div><div></div></li>";
				}else{
				items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold'>"+ dataa.service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold'>&#8358 "+ dataa.amount +"</div><div style='width:30%;margin-right:2%;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ dataa.secure_coupon_code +","+dataa.dial_code+","+ dataa.amount +","+dataa.id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ dataa.date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ dataa.amount +","+ dataa.secure_coupon_code +","+dataa.dial_code+","+dataa.id+")' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+ dataa.secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 100px; float: right; margin: 0px 10px 0px 0px;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+dataa.coupon_read_status+"' checked='checked' id="+dataa.id+"></div></div><div></div></li>"; 
				}
				
				}catch(e){
				 //alert("hi");
				}
						
			}
			paging = paging +1;
			//console.log(items);
					$("#list").listview('refresh'); 
					$(".ui-loader").hide();
					$.mobile.loading("hide");
						$("#list").append(items).listview('refresh'); 
						$(".filter_box").slideUp();
						//e.preventDefault();
					
		}
		
        //$("#list").append(items).listview("refresh");
    });
}

function addMore1(activePage){
$(document).off("scrollstop");
	//$("#list").empty();
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
	setTimeout(function(){
	var hndusrid = window.localStorage.Usr_id;
 //filterdate = $("#filterdate").val();
	var items = '';
	msg = { "user_id": hndusrid,"date_created":filterdate,"service_provider_id":filterid,"amount":filterprice,"limit":10,"page":paging};		
			
    $.ajax({
        url: link + "order_filter", 
		data:msg,
        type: "POST",
        error: function (request, error) {
						$(".ui-loader").hide();
						$.mobile.loading("hide");
        },
        success: function (result) {
			var OutputArra = JSON.parse(result);
			//var data = OutputArr.data;
			//console.log(data);
			//$('#hstry_tbl').html("<tbody width='100%'><tr><th align='center'>Servics Provider</th><th align='center'>Code</th> <th align='center'>Cost</th><th align='center'>Read</th></tr>");
   			for (var key in OutputArra) {
				var dataa = OutputArra[key].data;
				try{				
				var svcrpver= '"'+ dataa.service_provider +'"';
			 if(dataa.coupon_read_status == 0){
					
				items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold'>"+ dataa.service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold'>&#8358 "+ dataa.amount +"</div><div style='width:100px;margin-right:10px;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ dataa.secure_coupon_code +","+dataa.dial_code+","+ dataa.amount +","+dataa.id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ dataa.date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ dataa.amount +","+ dataa.secure_coupon_code +","+dataa.dial_code+","+dataa.id+")' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+ dataa.secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 100px; float: right; margin: 0px 10px 0px 0px;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+dataa.coupon_read_status+"' id="+dataa.id+"></div></div><div></div></li>";
				}else{
				items +="<li><div class='fl wd100p'><div style='width:40%;margin-left:2%;float:left;font-weight:bold'>"+ dataa.service_provider +"</div><div style='width:10%;margin-left:5%;float:left;font-weight:bold'>&#8358 "+ dataa.amount +"</div><div style='width:30%;margin-right:2%;background-color:#40ff00;border: 1px solid #cdcdcd;color:#000;float:right;text-align:center;' onclick='popup("+svcrpver+","+ dataa.secure_coupon_code +","+dataa.dial_code+","+ dataa.amount +","+dataa.id+")' class='txtshadow'>View Pin</div></div><div class='fl wd100p mt20'><div style='width: 40%; float: left; margin: 0% 0% 0% 2%;'>"+ dataa.date +"</div><div style='width:10%;margin-left:9%;float:left;'><input type='checkbox' cType='chkselectall' value='0' onclick='selectAll("+svcrpver+","+ dataa.amount +","+ dataa.secure_coupon_code +","+dataa.dial_code+","+dataa.id+")' svcrpver="+svcrpver+" amount="+ data[key].amount +" pin="+ data[key].secure_coupon_code +" dialcode="+data[key].dial_code+" pinid="+data[key].id+" id="+ dataa.secure_coupon_code +"></div><div class='txtshadow' onclick='' style='width: 30%; float: right; margin: 0% 2% 0% 0%;'>Mark Used<input name='' cType='chkread' type='checkbox' style='margin: 0% 0% 0% 8%;' value='"+dataa.coupon_read_status+"' checked='checked' id="+dataa.id+"></div></div><div></div></li>"; 
				}
				
				}catch(e){
				 //alert("hi");
				}
						
			}
						$("#list").append(items).listview('refresh'); 
					$(".ui-loader").hide();
					$.mobile.loading("hide");
						$(".filter_box").slideUp();
						//e.preventDefault();
					
		}
		//pagee = pagee +1;
        //$("#list").append(items).listview("refresh");
    });
	    $(document).on("scrollstop", checkScroll);
  }, 500);
  paging = paging +1;

}
$( document ).on( "pageinit", "#invitefrndPg", function( event ) {
   $( "#bckInvtFrnd" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
  //$("#invitefrndPg").on("swiperight", backsrvcProvidrPg);
});
$( document ).on( "pageinit", "#myorderPage", function( event ) {
   $( "#sndallcards" ).unbind('click').bind('click', sendallcards );
  $( "#bckordrhistry" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
});

$(document).on('change','input[cType=chkread]',function(event){
		//$("input[cType=chkread]").bind("change", function () {
        if ($(this).val() == 0) {
            $(this).val(1);
			var id = $(this).attr("id");
			//alert(id);
            $(this).attr("checked", true);
			readUnreadcoupon(id,1);
        }
        else {
            $(this).val(0);
			var id = $(this).attr("id");
            $(this).attr("checked", false);
			readUnreadcoupon(id,0);
        }
    //});

});
$( document ).on( "pageinit", "#voucherPayPage", function( event ) {
	$( "#bcktovuchrlstPg" ).unbind('click').bind('click', bcktovuchrlstPgfunc );
    $( "#invtfrnds_vochrPayPg" ).unbind('click').bind('click', invitefrndPgfunc );
	//$( "#myOrdrs_vochrPayPg" ).unbind('click').bind('click', myordrPgfunc );
	$( "#paynow" ).unbind('click').bind('click', paymentpagefunc );
	$('#submitform').closest('.ui-btn').hide();
	//$("#voucherPayPage").on("swiperight", bcktovuchrlstPgfunc);
});
/* $( document ).on( "pageinit", "#paymentpage", function( event ) {
	$( "#bckpaymentPg" ).unbind('click').bind('click', bcktovoucherPayPagefunc );
    $( "#invtfrnd_Paymntpg" ).unbind('click').bind('click', invitefrndPgfunc );
	//$( "#myordr_Paymntpg" ).unbind('click').bind('click', myordrPgfunc );
	//$("#paymentpage").on("swiperight", bcktovoucherPayPagefunc);
}); */
function bcktovoucherPayPagefunc(e){
    $("#cupnquntity").val("");
	$(":mobile-pagecontainer").pagecontainer("change", "#voucherPayPage", { reverse: true, transition: "slide", changeHash: false });
	e.preventDefault();
}
/* var iabRef = null;
function insertMyHeader() {
iabRef.executeScript({
    //code: "var b=document.querySelector('body'); var a=document.createElement('div');document.createTextNode('my own header!'); a.appendChild(newContent);b.parentNode.insertBefore(a,b);"
	code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
}, function() {
    alert("header successfully added");
});
}
function iabClose(event) {
     iabRef.removeEventListener('loadstop', insertMyHeader);
     iabRef.removeEventListener('exit', iabClose);
} */
function paymentpagefunc(){
	
	$( "#bankback" ).unbind('click').bind('click', bcktovoucherPayPagefunc );
	$( "#go2orders" ).unbind('click').bind('click', myordrPgfunc );
	$("#goto").html("Goto Cards");
	var couponquantity = $("#cupnquntity").val();
	var couponprice = $("#vouchercost").html();
	$("#paymntPgMobleNo").html(window.localStorage.mobile_number);
	var hndusrid = window.localStorage.Usr_id;
	var payfrom = $('input:radio[name=pay]:checked').val();
	var payfrmcredit;
	if(couponquantity.length < 1){
		//alert("Please enter quantity");
		navigator.notification.alert('Please enter quantity',alertDismissed,'Alert', 'Ok');
	}else{
	//alert(couponquantity);
	if(payfrom == 0){ 
		payfrmcredit = "yes";
	}else{
		payfrmcredit = "no";
		//window.location.href("http://www.w3schools.com");
		//$.mobile.changePage( "#paymentpage", { transition: "slide", changeHash: false });
	}
	$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
 		msg = {"userid": hndusrid,"qunatity":couponquantity,"provider":forpayProviderid,"amount":couponprice,"pay_credit":payfrmcredit};		
		$.ajax({
			url: link + "get_coupon_requestsapi", 
			data:msg,
			type: "POST",
			error: function (request, error) {
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			},
			success: function (result) {
				var OutputArr = JSON.parse(result);
				var status = 1;
				status = OutputArr.status;
				if(status == 0 && payfrom == 1){
					//alert(OutputArr.message);
					navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
					$(".ui-loader").hide();
				$.mobile.loading("hide");
				}else if(payfrom == 1){
					var URL_ = OutputArr.url;
					gotobankpage(URL_);
					$(".ui-loader").hide();
				$.mobile.loading("hide");
				$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
				}else{
					$(".ui-loader").hide();
				$.mobile.loading("hide");
					navigator.notification.alert(OutputArr.message,alertDismissed,'Alert', 'Ok');
				if(OutputArr.message == 'Order Successfull'){				
					$(".ui-loader").hide();
					$.mobile.loading("hide");
					myordrPgfunc();				
				}else{
					$(".ui-loader").hide();
					$.mobile.loading("hide");
				
				}
				
					
				//$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
				}
				
			}
		});
	}		
}
function gotobankpage(url){
	//alert(url);
	$("#my_frame").html(" ");
	$("#my_frame").append("<iframe id='myIframe' src='"+url+"' style='height:500px; width:100%;margin-bottom:0px;padding-bottom:20px'></iframe>")
	//$("#myIframe").attr("src",url);
	//$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
}

function navboxclick(a){
		$("#cupnquntity").val("");
		var user_credit = localStorage.getItem("credit")
		//alert(user_credit);
		if(user_credit== 0){
			$("#payfromCredit").hide();
		}else{
			$("#payfromCredit").show();
		}
	$("#vouchercost").html(a);
	$("#PrmyNo").html(window.localStorage.mobile_number);
	$.mobile.changePage( "#voucherPayPage", { transition: "slide", changeHash: false });
}
function bcktovuchrlstPgfunc(e){
	$(":mobile-pagecontainer").pagecontainer("change", "#voucherlistpage", { reverse: true, transition: "slide", changeHash: false });
	e.preventDefault();
}
$( document ).on( "pageinit", "#affilatehstryPage", function( event ) {
	$( "#invtfrnd_affilatehstryPg" ).unbind('click').bind('click', invitefrndPgfunc );
	$( "#bckaffilatehstryPg" ).unbind('click').bind('click', onBackKeyDown/* function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	} */);
});
function affiliatehstry(){
    $(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
	$("#affilatehstry").empty();
	$("#myaffilliatecode").html(" ");
	$("#myaffilliatecode").html(window.localStorage.refferalcode);
	var hndusrid = window.localStorage.Usr_id;
	 		msg = {"user_id": hndusrid};		
		$.ajax({
			url: link + "affilatehistoryapi ", 
			data:msg,
			type: "POST",
			error: function (request, error) {
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			},
			success: function (result) {
				var OutputArr = JSON.parse(result);
				var affiliateArr = OutputArr.affiliatehistory;
				status = OutputArr.status;
				if(status == 1){
				 for(var key in affiliateArr){
					var User = affiliateArr[key].users;
					var credit = affiliateArr[key].affilates;
					//var firstname = User.first_name;
					//var lastname = User.last_name;
					var mobileno = User.mobile_number;
					var creditamt = credit.earnedamount;
					var name = User.first_name +" "+User.last_name;
					var reffercode = window.localStorage.refferalcode;
					
					var earncreadit;
					if(creditamt== null){
						earncreadit = 0;
					}else{
						earncreadit = creditamt;
					}
					$("#affilatehstry").append("<li><div>Name:<span> "+name+"</span><div><div>Mobile No.:<span> "+mobileno+"</span><div><div>Earn Credit:<span> "+earncreadit+"</span><div><div>Affiliate Code:<span> "+reffercode+"</span><div></li>");
					$(".ui-loader").hide();
				$.mobile.loading("hide");
				 }
				}else{
				//alert(OutputArr.message);You have not invited anyone, click below to invite your friends
				$("#affilatehstry").append("<li><div>You have not invited anyone,<div>click below to invite your friends<div></li>");
					$(".ui-loader").hide();
				$.mobile.loading("hide");
				
				//$(":mobile-pagecontainer").pagecontainer("change", "#bankpage", { reverse: false, transition: "slide", changeHash: false });
				}
				$(":mobile-pagecontainer").pagecontainer("change", "#affilatehstryPage", { reverse: false, transition: "slide", changeHash: false });
			}
		});

	
}            
    