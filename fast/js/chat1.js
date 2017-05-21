//var link = "http://flexsin.org/lab/buytopups/WebServices/";
var link = "https://fasttopups.com/WebServices/";
$(document).on("pagebeforecreate","#chatPage_user",function(){
  //alluserfast();
});

$( document ).on( "pageinit", "#chatPage_user", function( event ) {
	//$("#invtfrnd_for_order").unbind("click").bind("click",myordrPgfunc);
	$("#invtfrnd_for_chat" ).unbind('click').bind('click', invitefrndPgfunc);
	                                         //$("#chatfrndlst").bind('click',chat_user_list1);
	//$("#contactfrndlst").bind('click',contact_user_list);
	                                        //$("#refreshcontact").bind('click',refreshchat);
	//alluserfast();
	$("#bckfrmchatPg").unbind('click').bind('click', function(){
		$(":mobile-pagecontainer").pagecontainer("change", "#"+previous_page, { reverse: true, transition: "slide", changeHash: false });
	});	
});
/* var current_page1 = '';
var previous_page1 = '';
var myVar1 = '';
$(document).on("pageshow", '[data-role="page"]', function () {
	previous_page1 = current_page1;
	//alert(previous_page);
    current_page = $.mobile.activePage[0].id;
	if(current_page == 'chatPage'){
		startTimer()
	}else{
		clearInterval(myVar1);
	}
});*/
function refreshchat(){
	alluserfast();
}
function chat_user_list1(){
	var my_no = window.localStorage.mobile_number;
		var reffer_by = window.localStorage.refferby;
		var refferal_code = window.localStorage.refferalcode;
		//var is_active = window.localStorage.is_active;
		//alert(my_no);
		$("#friend_chatlist").empty();//reffer_code
		msg = { "referel_code": refferal_code,"refferby_code":reffer_by };
		$.ajax({
        url: link + "invitedfriendsapi",
		data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
		$(".ui-loader").hide();
				$.mobile.loading("hide");
		},
        success: function (result) {
		$(".ui-loader").hide();
				$.mobile.loading("hide");
		var response=JSON.parse(result);
		var friend = response.friends;
		//var admin = 'SalesRepresentative';
		if(response.status==1){
		$("#friend_chatlist").empty();
		$("#friend_chatlist").prepend("<li><div onclick='chatpagefunc("+123456789+","+my_no+","+2+","+0+")'><img style='margin:0px 7px -4px 0px' src='img/active.png'>Sales Representative</div></li>").listview().listview('refresh');
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
						var unblck = "Block";
					}else{
						var sndrval = 1;
						var color = "#000";
						var unblck = "Unblock";
						$('li.div').unbind('click');
					}
				if(senderno.first_name==""){
					//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ mobilenumber +","+my_no+","+ 0+","+sndrval+")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ mobilenumber +"</div><span id="+ mobilenumber +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ mobilenumber +","+my_no+","+ sndrval +")' value="+ sndrval +">"+ unblck +"</span></li>").listview('refresh');
				}else{
				var sendersname = senderno.first_name+" "+senderno.last_name;
				var sendername = '"'+senderno.first_name+" "+senderno.last_name+'"';
				//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ mobilenumber +","+my_no+","+ sendername +","+sndrval+")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ sendersname +"</div><span id="+ mobilenumber +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ mobilenumber +","+my_no+","+ sndrval +")' value="+ sndrval +">"+ unblck +"</span></li>").listview('refresh');
				}
			//}		
			}
			if(refferal_code != ""){
			
			console.log("\nFirst array");
			console.log(friend);
			console.log("\nSecond array");
			console.log(foundlist);
			for(var i=0;i<foundlist.length;i++){
					//console.log("compare : "+mobilenumber +' == '+ foundlist[i].phoneNo);
					var all = false;
				for(var key in friend){
				var usrfrnds = friend[key].User;
			console.log("mobile : "+usrfrnds.mobile_number);
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
					}else if(frndblock == 1){
						var frndval = 1;
						var color = "#f00";
						var unblck = "Block";
						$('li.div').unbind('click');
					}
						
					//console.log("match = "+mobilenumber +" == "+ foundlist[i].phoneNo);
					if(foundlist[i].phoneNo == mobilenumber){
					console.log("match = "+mobilenumber +" == "+ foundlist[i].phoneNo);
						all = true;

						}
					}
				if(all){
					
						console.log("Found");
				if(usrfrnds.first_name==""){
							//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ foundlist[i].phoneNo +","+my_no+","+ 0+","+ frndval +")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ foundlist[i].phoneNo +"</div><span id="+ foundlist[i].phoneNo +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ foundlist[i].phoneNo +","+my_no+","+ frndval +")' value="+ frndval +">"+ unblck +"</span></li>").listview('refresh');
						}else{
							var friendname = '"'+usrfrnds.first_name+" "+usrfrnds.last_name+'"';
							var friendsname = usrfrnds.first_name+" "+usrfrnds.last_name;
							//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ foundlist[i].phoneNo +","+my_no+","+ friendname +","+ frndval +")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ friendsname +"</div><span id="+ foundlist[i].phoneNo +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ foundlist[i].phoneNo +","+my_no+","+ frndval +")' value="+ frndval +">"+ unblck +"</span></li>").listview('refresh');
						}
					
						}else{
						var friendnameee = '"'+foundlist[i].naam+'"';
						var phoneno = '"'+foundlist[i].phoneNo+'"';
						var frndvalu = 0;
						/* var color = "#fff";
						var unblck = "Unblock"; */
						console.log("not match = "+mobilenumber +" == "+ foundlist[i].phoneNo);
						//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ phoneno +","+my_no+","+ friendnameee +","+ frndvalu +")'><img style='margin:0px 7px -4px 0px' src='img/forinvite.png'>"+ foundlist[i].naam +"</div><span onclick='chatpagefunc("+ phoneno +","+my_no+","+ friendnameee +","+ frndvalu +")' class='ui-li-count'>Chat</span></li>").listview('refresh');
					}
						/* $("#friend_chatlist").trigger("create");
						$('#friend_chatlist').listview().listview('refresh'); */
				}

		$(".ui-loader").hide();
		$.mobile.loading("hide");
		$.mobile.changePage("#chatPage_user", { transition: "slide", changeHash: false });
        }else{
		for(var i=0;i<foundlist.length;i++){
			var friendnameee = '"'+foundlist[i].naam+'"';
						var phoneno = '"'+foundlist[i].phoneNo+'"';
						var frndvalu = 0;
						/* var color = "#fff";
						var unblck = "Unblock"; */
						console.log("not match = "+mobilenumber +" == "+ foundlist[i].phoneNo);
						//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ phoneno +","+my_no+","+ friendnameee +","+ frndvalu +")'><img style='margin:0px 7px -4px 0px' src='img/forinvite.png'>"+ foundlist[i].naam +"</div><span onclick='chatpagefunc("+ phoneno +","+my_no+","+ friendnameee +","+ frndvalu +")' class='ui-li-count'>Chat</span></li>").listview('refresh');
						}
						/* $("#friend_chatlist").trigger("create");
						$('#friend_chatlist').listview('refresh'); */
						$(".ui-loader").hide();
					$.mobile.loading("hide");
		}
		}
		}
    });
//$.mobile.changePage("#chatPage_user", { transition: "slide", changeHash: false });	
}
function chat_user_list(){ 
var my_no = window.localStorage.mobile_number;
  $(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
		
	var usrlogincount = window.localStorage.userlogincount;
	if(usrlogincount == 1){
	var massage_data ={"reciever_mob": 123456789, "sender_mob": my_no}; 
    $.ajax({
        url: link+"messageListapi", 
		data:massage_data,
        type: "POST",
        error: function (request, error) {
		$(".ui-loader").hide();
			$.mobile.loading("hide");
		},
        success: function (result) { 
		var response = JSON.parse(result);
		if(response.length < 1) {
			//alert("blank");
				$("#chat_username").html(" ");
				$("#chat_username").html("Sales Representative");
				 var receverrmb= window.localStorage.mobile_number;
				 var senddr= 123456789;	
				if($("#chat_msg")!='')
				{
					//var sender_mob=window.localStorage.mobile_number;
					var sender_msg="Welcome to Fasttopups! Please if you need any help, ask me!";
					var massage_data ={"reciever_mob": receverrmb, "sender_mob":senddr,'message':sender_msg};	
					$.ajax({
					url: link+"sendMessageapi", 
					data:massage_data,
					type: "POST",
					error: function (request, error) {
					},
					success: function (result) { 
					var response = JSON.parse(result);
					if(response){
						var chat_data='';
						if(response.status==1) {
			/* 				chat_msg ='<div class="chat_rgt">'+sender_msg+'</div>';				
							$("#chat_box").append(chat_msg);
							$("#chat_msg").val('');
							var admin="Admin";
							//chatpagefunc(recevermb,sendr,admin); */
							$(".ui-loader").hide();
							$.mobile.loading("hide");
							$.mobile.changePage("#chatPage", { transition: "true", changeHash: false });
						}
					}else{
						$(".ui-loader").hide();
						$.mobile.loading("hide");
							//alert("error in msg sending");
						}   
					}
				});
				}
		}else{
		 chatpagefunc(123456789,my_no,2,0);
		}
		}
	});	
	}else{
		 chatpagefunc(123456789,my_no,2,0);
		}	
}
function blockchat(blockedno,blockedby,frndval){
	//var blockmobileno = $("#"+blockedno).val();
	//alert(blockmobileno);
	var mobile_number = blockedno;
	var sender_mobile_number = blockedby;
	var blockstatus;
	if(frndval == 0){
		//$("#"+blockedno).css("backgroundColor","red");
		$("#"+blockedno).val(1);
		blockstatus = 1;
		$("#"+blockedno).html("Block");
		//alert($("#"+blockedno).val());
		
	}else{
		//$("#"+blockedno).css("backgroundColor","#000");
		$("#"+blockedno).val(0);
		blockstatus = 0;
		$("#"+blockedno).html("Unblock");
		//alert($("#"+blockedno).val());
	}
	msg ={"mobile_number":mobile_number, "sender_mobile_number":sender_mobile_number,"blockstatus":blockstatus}; 
	//console.log(invite_data);
	$.ajax({
        url: link + "userblockunblocksapi",
		data:msg,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
		},
        success: function (result) {
			chat_user_list();
		}

    });
}
var reffer_code = window.localStorage.reffer_code;
function sendInvitation_refferalcode(){	
/* 	var reciver_mobile_name=$("#selected_friend_name").html();
	var reciver_mobile_number=$("#selected_friend_number").html();
	reciver_mobile_number=reciver_mobile_number.replace(/[- + )(]/g,'');
	var sender_mob=window.localStorage.mobile_number;
	if(!sender_mob) {
		alert("please enter valid mobile number");
		return false;
	} */
	var sender_mob = window.localStorage.mobile_number;
	var invite_data ={"reciever_mob":"", "sender_mob":sender_mob}; 
	console.log(invite_data);
	$.ajax({
        url: link + "sendInvitationapi",
		data:invite_data,
        //dataType: "json",
        type: "POST",
        //contentType: "application/json;charset=utf-8",
        error: function (request, error) {
		},
        success: function (result) {
		var response=JSON.parse(result);
		if(response.status==1){
			var reffer_code=response.referralcode; 
			window.localStorage.reffer_code=reffer_code;
		}
        }
    });
}
var usercontactArry=[];
var onlycontactArr = [];
var foundlist=[];
function contact_user_list() { 
 onlycontactArr = [];
 foundlist=[];
 console.log(onlycontactArr);
 console.log(foundlist);
 console.log("sdfgh");
 
 onlycontactArr.splice(0,onlycontactArr.length);
/* var my_no = window.localStorage.mobile_number;
$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
$("#friend_chatlist").empty();
$("#friend_chatlist").html("");
$("#friend_chatlist").append(contacthtml);
$("#friend_chatlist").trigger("create");
			$('#friend_chatlist').listview('refresh');
			$(".ui-loader").hide();
			$.mobile.loading("hide"); */
	navigator.contactsPhoneNumbers.list(function(contacts) {
      //alert(contacts.length + ' contacts found');
	  var phoneNo;
	  var naam;
	  var contactlst;
	  usercontactArry=[];
      for(var i = 0; i < contacts.length; i++) {
         //alert(contacts[i].id + " - " + contacts[i].displayName);
		 naam = contacts[i].displayName;
         for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
            var phone = contacts[i].phoneNumbers[j];
            //alert("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber+ ")");
			phoneNo = phone.number;
			phoneNo = phoneNo.replace(/\s/g, '');
			//alert(phoneNo)
		 }
		 // alert(phoneNo);
		 // alert(naam);
		 contactlst={"naam":naam,"phoneNo":phoneNo}
		 // console.log(contactlst);
			//$("#friend_chatlist").append("<li>Fasttopup user "+naam+" "+phoneNo+"</li>");
			usercontactArry.push(contactlst);
				// console.log(usercontactArry);
		}
		var listfoundflag = 0;
		var namee;
		var telno;
		onlycontactArr=[];
	   for(var i=0;i<usercontactArry.length;i++){
	   //console.log(allUserArr.length);
	   var bl = false;
			for(var j=0;j<allUserArr.length;j++){
			//console.log(usercontactArry.length);
				if(usercontactArry[i].phoneNo == allUserArr[j].mobileNo){
				 console.log("compair = "+usercontactArry[i].phoneNo+ ' == ' +allUserArr[j].mobileNo);
				 // console.log();
				 listfoundflag =1;
				 
				 bl = true;
				 
				}
				
			}
		
			if(bl){
				console.log("found");
				var mobilenumber = usercontactArry[i].phoneNo;
				var frname = usercontactArry[i].naam;
				var friendname = '"'+usercontactArry[i].naam+'"';
/* 				var frndval = 0;
				var unblck = "Unblock";
				var live = "img/inactive.png";
				var color = "#000"; */
				contactfrndlst='';
				console.log(contactfrndlst);
				contactfrndlst={"naam":frname,"phoneNo":mobilenumber};
				onlycontactArr.push(contactfrndlst);
				
				//$("#friend_chatlist").append("<li>Fasttopup user "+usercontactArry[i].naam+" "+usercontactArry[i].phoneNo+"</li>");
				//$("#friend_chatlist").append("<li><div onclick='chatpagefunc("+ mobilenumber +","+my_no+","+ friendname +","+ frndval +")'><img style='margin:0px 7px -4px 0px' src="+live+">"+ mobilenumber +"</div><span id="+ mobilenumber +" class='ui-li-count' style='backgroundColor:"+ color +";' onclick='blockchat("+ mobilenumber +","+my_no+","+ frndval +")' value="+ frndval +">"+ unblck +"</span></li>").listview('refresh');
				
			}else{
				console.log("Not found");
				//$("#friend_chatlist").append("<li>"+usercontactArry[i].naam+" "+usercontactArry[i].phoneNo+"</li>");
			}
	   }
	   console.log(onlycontactArr);
	   window.localStorage.setItem("arr", JSON.stringify(onlycontactArr));
	   //onlycontactArr=[];
	   foundlist = JSON.parse(window.localStorage.getItem("arr"));
	   
	   console.log(foundlist);
	   //console.log(b);
   	  $("#friend_chatlist").trigger("create");
			$('#friend_chatlist').listview('refresh');
			$(".ui-loader").hide();
			$.mobile.loading("hide");

   }, function(error) {
      console.error(error);
   });
   //console.log(usercontactArry);

 }
function chatSubmit() {
	var recevermb;
	var sendr;
 var usrlogincount = window.localStorage.userlogincount;
 var sendermonileno = window.localStorage.mobile_number;
 //alert(usrlogincount);
 //alert(sendermonileno);
	if(usrlogincount == 1){
	 recevermb = 123456789;
	 sendr = sendermonileno;
	}else{
	//alert(window.localStorage.sendr);
	 recevermb=window.localStorage.recevermb;
	 sendr=window.localStorage.sendr;
	}
	//var recevermb=window.localStorage.recevermb;
	//var sendr=window.localStorage.sendr;
	var chattext = $("#chat_msg").val();
	if(chattext.length >0)
	{
		//var sender_mob=window.localStorage.mobile_number;
		var sender_msg=$("#chat_msg").val();
		var massage_data ={"reciever_mob": recevermb, "sender_mob":sendr,'message':sender_msg};	
		$.ajax({
        url: link+"sendMessageapi", 
		data:massage_data,
        type: "POST",
        error: function (request, error) {
		},
        success: function (result) { 
		var response = JSON.parse(result);
		if(response){
			var chat_msg='';
			if(response.status==1) {
				chat_msg ='<div class="chat_rgt">'+sender_msg+'</div>';				
				$("#chat_box").append(chat_msg);
				$("#chat_msg").val('');
				fsattopfrndflag = 0;
				sendmsg='';
				chatpagefunc(recevermb,sendr,forchatname,blockstats);
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			}
		}else{
			$(".ui-loader").hide();
			$.mobile.loading("hide");
				//alert("error in msg sending");
			}   
        }
    });
	}
}

function chatRefresh() {
	var recevermb;
	var sendr;
 var usrlogincount = window.localStorage.userlogincount;
	if(usrlogincount == 1){
	 recevermb= 123456789;
	 sendr=window.localStorage.mobile_number;
	}else{
	 recevermb=window.localStorage.recevermb;
	 sendr=window.localStorage.sendr;
	}
	//e.preventDefault();
		//var sender_mob=window.localStorage.mobile_number;
		var massage_data ={"reciever_mob": recevermb, "sender_mob": sendr}; 
		$.ajax({
        url: link+"messageListapi", 
		data:massage_data,
        type: "POST",
        error: function (request, error) {
		},
        success: function (result) { 
		var response = JSON.parse(result);
		if(response.status < 1) {
			//alert("not chat available");
			//return false;
		}	
		var chat_data='';
		if(response){
			$.each(response,function( key, value ) {
			if(value.Message.sender_mob==sendr){
				chat_data +='<div class="chat_rgt">'+value.Message.message+''+" -- "+''+value.Message.date_created+'</div>';
			}
			if(value.Message.reciever_mob==sendr){
				chat_data +='<div class="chat_lft">'+value.Message.message+''+" -- "+''+value.Message.date_created+'</div>';
			}				
			});	
			$("#chat_box").html(chat_data);
			$(".ui-loader").hide();
				$.mobile.loading("hide");
		}else{
				chat_data='<div>Chat not found</div>';
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			 }   
        }
    });
}

var forchatname;
function chatpagefunc(recevermb,sendr,fstname,blockstats){
//sendr = window.localStorage.mobile_number;
if(fsattopfrndflag == 1){
	$("#chat_msg").val(sendmsg);
}else{
	//$("#chat_msg").text("");
};
	forchatname = fstname;
	$("#chat_username").html(" ");
	if(fstname==0){
		$("#chat_username").html(recevermb);
	}else if(fstname==2){
		$("#chat_username").html("Sales Representative");
	}else{
		$("#chat_username").html(fstname);
	}
	//alert(recevermb,sendr);
	window.localStorage.recevermb=recevermb;
	//window.localStorage.sendr=sendr;
	window.localStorage.sendr = window.localStorage.mobile_number
	//e.preventDefault();
	//	var result = str.replace(/[- + )(]/g,'');
	//var sender_mob=window.localStorage.mobile_number;	
	/*
	navigator.contacts.pickContact(function(contact){
       console.log('The following contact has been selected:' + JSON.stringify(contact.length));
	   console.log('The following contact has been selected:' + JSON.stringify(contact));
	   console.log(contact.phoneNumbers[0].value);	
	   if(!isNaN(contact.phoneNumbers[0].value)) {
	   alert("no contact available");
	   return false;
	   }	   
	   var selected_phone_number=contact.phoneNumbers[0].value;
	   selected_phone_number=selected_phone_number.replace(/[- + )(]/g,'');
	   console.log(selected_phone_number);
		if(selected_phone_number!=null){ 
			var user_flg=userExist(selected_phone_number);
			if(!user_flg) { alert("open dialog");
				$("#myDialog").popup('open');
			}
			$("#chat_username").html(contact.phoneNumbers.value).trigger("refresh");
		}
		//$("#overlayPanel9").panel("close");
		//$.mobile.changePage("#chatPage", { transition: "true", changeHash: false });
	},function(err){
        console.log('Error: ' + err);
    }); */
	//crome development
	if(blockstats == 0){
	//$(".ui-loader").show();
	var massage_data ={"reciever_mob": recevermb, "sender_mob": sendr}; 
    $.ajax({
        url: link+"messageListapi", 
		data:massage_data,
        type: "POST",
        error: function (request, error) {
		$(".ui-loader").hide();
			$.mobile.loading("hide");
		},
        success: function (result) { 
		var response = JSON.parse(result);
		if(response.status < 1) {
			//alert("not chat available");
			return false;
		}	
		var chat_data='';
		if(response){
			$.each(response,function( key, value ) {
			if(value.Message.sender_mob==sendr){
				chat_data +='<div class="chat_rgt">'+value.Message.message+'</div>';
			}
			if(value.Message.reciever_mob==sendr){
				chat_data +='<div class="chat_lft">'+value.Message.message+'</div>';
			}				
			});	
			$("#chat_box").html(chat_data);
			$(".ui-loader").hide();
			$.mobile.loading("hide");
		}else{
				chat_data='<div>Chat not found</div>';
				$(".ui-loader").hide();
				$.mobile.loading("hide");
			 }   
        }
    });
	//$("#overlayPanel9").panel("close");
	$.mobile.changePage("#chatPage", { transition: "true", changeHash: false });
	}
}

function chatSubmit1() {
	$("#chat_username").html(" ");
	$("#chat_username").html("Sales Representative");
	var usrlogincount = window.localStorage.userlogincount;
	if(usrlogincount == 1){
	 var receverrmb= window.localStorage.mobile_number;
	 var senddr= 123456789;	
	if($("#chat_msg")!='')
	{
		//var sender_mob=window.localStorage.mobile_number;
		var sender_msg="Welcome to Fasttopups! Please if you need any help, ask me!";
		var massage_data ={"reciever_mob": receverrmb, "sender_mob":senddr,'message':sender_msg};	
		$.ajax({
        url: link+"sendMessageapi", 
		data:massage_data,
        type: "POST",
        error: function (request, error) {
		},
        success: function (result) { 
		var response = JSON.parse(result);
		if(response){
			var chat_data='';
			if(response.status==1) {
/* 				chat_msg ='<div class="chat_rgt">'+sender_msg+'</div>';				
				$("#chat_box").append(chat_msg);
				$("#chat_msg").val('');
				var admin="Admin";
				//chatpagefunc(recevermb,sendr,admin); */
				$(".ui-loader").hide();
				$.mobile.loading("hide");
				$.mobile.changePage("#chatPage", { transition: "true", changeHash: false });
			}
		}else{
			$(".ui-loader").hide();
			$.mobile.loading("hide");
				//alert("error in msg sending");
			}   
        }
    });
	}
	}else{
		var recevermbb= window.localStorage.mobile_number; //window.localStorage.recevermb;
		var sendrr= 123456789; //window.localStorage.sendr;
		chatpagefunc(recevermbb,sendrr,2,0);
	}
}
var contacthtml;
var allUserArr = [];
function alluserfast(){	
$(".ui-loader").show();
	$.mobile.loading('show', { theme: loadingtheme, text: loadingText, textonly: false, textVisible: true });
		$.ajax({
        url: link+"all_users", 
		//data:massage_data,
        type: "POST",
        error: function (request, error) {
		},
        success: function (result) { 
		var contactNo;
		var response = JSON.parse(result);
		for(var key in response){
		var usrArr = response[key].User;
		//console.log(usrArr);
		var usrcontctNo = usrArr.mobile_number;
		//console.log(usrcontctNo);
		 contactNo={"mobileNo":usrcontctNo};
		 allUserArr.push(contactNo);
		}
		contact_user_list();/*-------------------------------------------*/
		console.log(allUserArr);
		$(".ui-loader").hide();
			$.mobile.loading("hide");
		//chat_user_list();
        }
    });
};
var fsattopfrndflag = 0;
function fasttopfrnds(){
	fsattopfrndflag = 1;
	chat_user_list();
	//$("#chat_msg").text(sendmsg);
}