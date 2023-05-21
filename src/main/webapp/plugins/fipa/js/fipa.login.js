/**
 * 
 */
 



$("#txtFldUserId").keypress(function(e) {
    if(e.which == 13) {
            $("#txtFldUserPassword").focus();
    }
});
$("#txtFldUserPassword").keypress(function(e) {
    if(e.which == 13) {
    	submitLogin();
    }
});


function isEmpty(strVal) 
{ 
   if ((strVal.length==0) || (strVal == null)) 
   {
      return true;
   }
   else 
   { 
      return false; 
   }
}//end IsEmpty



function submitLogin(){

	$("img#loadit").removeClass("hidden");
	 
	var loginFrm = document.forms["fipaLogin"];
	var userIdFld = loginFrm.txtFldUserId;
	var passwordFld = loginFrm.txtFldUserPassword;
	
	if(isEmpty(userIdFld.value)){
//		showAlert("Key in the UserId!",userIdFld);
		$('input[name="txtFldUserId"]').addClass("errvalidation")
		$('input[name="txtFldUserId"][data-toggle="popover"]').popover("show");   
//			.popover({ title: 'FIPA - Login', content: "Key-in User Id" })
		$("img#loadit").addClass("hidden"); 
		return false;
	}
	
	if(isEmpty(passwordFld.value)){
//		showAlert("Key in the Password!",passwordFld);
		$('input[name="txtFldUserPassword"]').addClass("errvalidation")
		$('input[name="txtFldUserPassword"][data-toggle="popover"]').popover("show");  
		$("img#loadit").addClass("hidden"); 
		return false;
	}
	
	
	loginFrm.action = "LoginValidate.do";
	loginFrm.submit();
	 
	
}


function relogin(){ 
	window.location.href="Login.do"; 
	
//	document.forms[0].action="Login.do";	
//	document.forms[0].submit();
	
}
 $(document).ready(function () {
 	     setTimeout(function(){
		 $('.wrapper').attr('style', 'height: 99vh !important'); 
		/* $("#wrpr").height("99vh");
		 $('#wrpr').attr('style', 'height: 99vh !important');*/
		 }, 500);
		 
});