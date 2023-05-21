/*Add Row Click */
$("#FpmsClntARow").on("click",function(){
	
//	if(!valdeptTbl())return; 
	 
//	        fpmsclntclearFlds(); 
	
	$("#fpmsclnt_Dialog").find(":input").val();
	
		$("#txtFldDlgFpmsClntName").val("");//Aravindh
		$("#txtFldDlgFpmsClntNric").val("");
		$("#txtFldDlgFpmsClntMrtlSts").val("");
		$("#txtFldDlgFpmsClntAddr").val("");
		$("#txtFldDlgFpmsClntAddr2").val("");
		$("#txtFldDlgFpmsClntPostal").val("");
		$("#selDlgFpmsClntCountry").val("");
		$("#txtFldDlgFpmsClntCtHp").val("");
		$("#txtFldDlgFpmsClntEmail").val("");
	        
			showFIPAModel('fpmsclnt_Dialog','FIPA - FPMS');   
			
			
				$('#fpmsclnt_Dialog').on('shown.bs.modal', function () { 
				
					var fpmscustid=$("#fpmsCustid").val();
					var fipaselfname=$("#dfSelfName").val();
					var fipanric=$("#dfSelfNric").val();
					var fipamarsts=$("#dfSelfMartsts").val();
					
					var fipaaddr=$("#dfSelfHomeaddr").val();
					var fipaaddr2=$("#dfSelfHomeaddr2").val();
					var fipapostal=$("#dfSelfHomepostal").val();
					var fipacountry=$("#dfSelfHomecntry").val();
					
					var fipacontacts=$("#dfSelfMobile").val();
					var fipaemail=$("#dfSelfPersemail").val();
					
					
					if(!isEmpty(fpmscustid)){
						getfpmsClientDetailsFromFPMS(fipaselfname,fipanric, fpmscustid);
					}
					
						
					
					
					$("[name='txtFldDlgFipaClntName']").val(fipaselfname);
				    $("[name='txtFldDlgFipaClntNric']").val(fipanric);
				    $("[name='txtFldDlgFipaClntMrtlSts']").val(fipamarsts);
				    
				    $("[name='txtFldDlgFipaClntAddr']").val(fipaaddr);
				    $("[name='txtFldDlgFipaClntAddr2'").val(fipaaddr2);
				    $("[name='txtFldDlgFipaClntPostal'").val(fipapostal);
				    $("[name='selDlgFipaClntCountry'").val(fipacountry);
				    
				    
				    $("[name='txtFldDlgFipaClntCtHp']").val(fipacontacts);
				    $("[name='txtFldDlgFipaClntEmail']").val(fipaemail);
				   
				    
//				$("#fpmsclnt_Dialog").find(".modal-footer").find("button:eq(0)").text(" Update FPMS Customer Info");			
//				$("#fpmsclnt_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						$('#fpmsclnt_Dialog').modal('hide'); 
//				});  
			});
			
			
});


function getfpmsClientDetailsFromFPMS(clientName, clientNRIC, custId) {
	
	

	var parameter = "DBCALLFOR=GET_CUSTDETS_FROMFPMS&strClientName="
			+ clientName + "&strClientNRIC=" + clientNRIC + "&strCustId="
			+ custId;

	ajaxCall(
			parameter,
			servletName,
			function(Data) {
				
				$("#fpmsclnt_Dialog").find(":input").val();

				var retval = Data;

				for ( var val in retval) {

					var tabdets = retval[val];

					if (tabdets["SESSION_EXPIRY"]) {
						window.location = BASE_URL + SESSION_EXP_JSP;
						return;
					}
					if (tabdets["DB_ERROR"]) {
						window.location = BASE_URL + DB_EXP_JSP;
						return;
					}

					for ( var tab in tabdets) {

						if (tabdets.hasOwnProperty(tab)) {
							var key = tab;
							var value = tabdets[tab];

							if (key == "FPMS_CUSTOMER_DETAILS") {
								
								var jsnData = value;

								for ( var cont in jsnData) {

									var contvalue = jsnData[cont];

									for ( var data in contvalue) {
										
//										$('input[name=' + data + ']').val(contvalue[data]);
//										$('select[name=' + data + ']').val(	contvalue[data]);

										if (data == "dfSelfName") { 
										
											$("#txtFldDlgFpmsClntName").val(contvalue[data]);//Aravindh
										}
										
										if (data == "dfSelfNric") {
											$("#txtFldDlgFpmsClntNric").val(contvalue[data]);
										}
										
										if (data == "dfSelfMartsts") {
											$("#txtFldDlgFpmsClntMrtlSts").val(contvalue[data]);
										}
									
										if (data == "dfSelfHomeaddr") {
											$("#txtFldDlgFpmsClntAddr").val(contvalue[data]);
										}
										if(data == "dfSelfHomeaddr2"){
											$("#txtFldDlgFpmsClntAddr2").val(contvalue[data]);
										}
										if(data == "dfSelfHomepostal"){
											$("#txtFldDlgFpmsClntPostal").val(contvalue[data]);
										}
										
										if(data == "dfSelfHomecntry"){
											$("#selDlgFpmsClntCountry").val(contvalue[data]);
										}
										if (data == "dfSelfMobile") {
											$("#txtFldDlgFpmsClntCtHp").val(contvalue[data]);
										}
										
										if (data == "dfSelfPersemail") {
											$("#txtFldDlgFpmsClntEmail").val(contvalue[data]);
										}
										
										
									}
								}

								
							}

							
						}
					}

				}

				
			});
	
	
}


function fpmsclntclearFlds(){
	  
	 
	$("#child_Dialog").find("input[type=text]").val("");
	$("#child_Dialog").find("textarea").val("");
	$("#child_Dialog").find("select").val(""); 
	
}

$('#swapnamefipabtn').click(function (){ 
	var swapnamefpms=$("#txtFldDlgFpmsClntName").val();
	 if (swapnamefpms == null || swapnamefpms == '') { 
     } else {  
         $("[name='txtFldDlgFipaClntName']").val(swapnamefpms);
     }  
	
});


$('#swapnamefpmsbtn').click(function (){
	var swapnamefipa=$("#txtFldDlgFipaClntName").val();
	if (swapnamefipa == null || swapnamefipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntName']").val(swapnamefipa);
    }
});


$('#swapnricfipabtn').click(function (){
	var swapnricfpms=$("#txtFldDlgFpmsClntNric").val();
	
	if (swapnricfpms == null || swapnricfpms == '') {  
    } else {  
    	$("[name='txtFldDlgFipaClntNric']").val(swapnricfpms);
    }
});


$('#swapnricfpmsbtn').click(function (){
	var swapnricfipa=$("#txtFldDlgFipaClntNric").val();
	if (swapnricfipa == null || swapnricfipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntNric']").val(swapnricfipa);
    }
	
});

$('#swapmarstsfipabtn').click(function (){
	var swapmrtlfpms=$("#txtFldDlgFpmsClntMrtlSts").val();
	
	if (swapmrtlfpms == null || swapmrtlfpms == '') {  
    } else {  
    	$("[name='txtFldDlgFipaClntMrtlSts']").val(swapmrtlfpms);
    }
});


$('#swapmarstsfpmsbtn').click(function (){
	var swapmrtlfipa=$("#txtFldDlgFipaClntMrtlSts").val();
	if (swapmrtlfipa == null || swapmrtlfipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntMrtlSts']").val(swapmrtlfipa);
    }
	
});

$('#swapaddrfipabtn').click(function (){
	var swapclnfpms=$("#txtFldDlgFpmsClntAddr").val();
	
	if (swapclnfpms == null || swapclnfpms == '') {  
    } else {  
    	$("[name='txtFldDlgFipaClntAddr']").val(swapclnfpms);
    }
});


$('#swapaddrfpmsbtn').click(function (){
	var swapclntfipa=$("#txtFldDlgFipaClntAddr").val();
	if (swapclntfipa == null || swapclntfipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntAddr']").val(swapclntfipa);
    }
});


$('#swapaddr2fipabtn').click(function (){
	var swapclnfpms=$("#txtFldDlgFpmsClntAddr2").val();
	
	if (swapclnfpms == null || swapclnfpms == '') {  
    } else {  
    	$("[name='txtFldDlgFipaClntAddr2']").val(swapclnfpms);
    }
});


$('#swapaddr2fpmsbtn').click(function (){
	var swapclntfipa=$("#txtFldDlgFipaClntAddr2").val();
	if (swapclntfipa == null || swapclntfipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntAddr2']").val(swapclntfipa);
    }
});


$('#swappostalfipabtn').click(function (){
	var swapclnfpms=$("#txtFldDlgFpmsClntPostal").val();
	
	if (swapclnfpms == null || swapclnfpms == '') {  
    } else {  
    	$("[name='txtFldDlgFipaClntPostal']").val(swapclnfpms);
    }
});


$('#swapaddr2fpmsbtn').click(function (){
	var swapclntfipa=$("#txtFldDlgFipaClntPostal").val();
	if (swapclntfipa == null || swapclntfipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntPostal']").val(swapclntfipa);
    }
});


$('#swapcountryfipabtn').click(function (){
	var swapclnfpms=$("#selDlgFpmsClntCountry").val();
	
	if (swapclnfpms == null || swapclnfpms == '') {  
    } else {  
    	$("[name='selDlgFipaClntCountry']").val(swapclnfpms);
    }
});


$('#swapcountryfpmsbtn').click(function (){
	var swapclntfipa=$("#selDlgFipaClntCountry").val();
	if (swapclntfipa == null || swapclntfipa == '') {  
    } else {  
    	$("[name='selDlgFpmsClntCountry']").val(swapclntfipa);
    }
});

$('#swapcontfipabtn').click(function (){
	var swapcthpfpms=$("#txtFldDlgFpmsClntCtHp").val();
	
	if (swapcthpfpms == null || swapcthpfpms == '') {  
    } else {  
    	$("[name='txtFldDlgFipaClntCtHp']").val(swapcthpfpms);
    }
});


$('#swapcontfpmsbtn').click(function (){
	var swapcthpfipa=$("#txtFldDlgFipaClntCtHp").val();
	
	if (swapcthpfipa == null || swapcthpfipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntCtHp']").val(swapcthpfipa);
    }
});

$('#swapemailfipabtn').click(function (){
	var swapemailfpms=$("#txtFldDlgFpmsClntEmail").val();
	
	if (swapemailfpms == null || swapemailfpms == '') {  
    } else {  
    	$("[name='txtFldDlgFipaClntEmail']").val(swapemailfpms);
    }
});


$('#swapemailfpmsbtn').click(function (){
	var swapemailfipa=$("#txtFldDlgFipaClntEmail").val();

	if (swapemailfipa == null || swapemailfipa == '') {  
    } else {  
    	$("[name='txtFldDlgFpmsClntEmail']").val(swapemailfipa);
    }
});


function updateClientDetsFPMS () {
	
	showLoader();
	
	setTimeout(function(){  
		ajaxCallSaveFIPAFPMS(); 
//		$('#fpmsclnt_Dialog').modal('hide');
	},100);
}

function ajaxCallSaveFIPAFPMS(){
	
	var fpmscustid=$("#fpmsCustid").val();
	var custName=$("#txtFldDlgFpmsClntName").val();
	var custInitial=custName.substring(0,20);
	var advstfName=$("#hTxtFldAdvStfName").val();
	var advstfId=$("#advstfId").val();
	var nric=$("#txtFldDlgFpmsClntNric").val();
	var marsts=$("#txtFldDlgFpmsClntMrtlSts").val();
	var address=$("#txtFldDlgFpmsClntAddr").val();
	var address2=$("#txtFldDlgFpmsClntAddr2").val();
	var postal=$("#txtFldDlgFpmsClntPostal").val();
	var country=$("#selDlgFpmsClntCountry").val();
	var handphone=$("#txtFldDlgFpmsClntCtHp").val();
	var emailId=$("#txtFldDlgFpmsClntEmail").val();
	 
	
	$.ajax({
		url:servletName,
		async:false,
		data:{
			"DBCALLFOR":"FIPA_TO_FPMS",
			"strcustid":fpmscustid,
			"strCustName":custName,
			"strCustInitial":custInitial,
			"strAdName":advstfName,
			"strAdId":advstfId,
			"strCustNric":nric,
			"strCustMarSts":marsts,
			"strCustAddress":address,"strCustAddress2":address2,"strCustPostal":postal,"strCustCountry":country,
			"strCustHandPh":handphone,
			"strCustEmailId":emailId
			
		},
		success: function(result){
			var jsnRslt=JSON.parse(result);
			
			$.each(jsnRslt,function(i,obj){
				if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
					window.location = BASE_URL + SESSION_EXP_JSP;
					 
					return;
				}

				if (obj.SESSION_EXPIRY=="DB_ERROR") {
					window.location = BASE_URL + DB_EXP_JSP;
					 
					return;
				}
				
				$.each(obj,function(i,val){
					
				 if(i == "FPMSFIPA_INSERTED"){
					
					 var customerID=val;
					 $("[name=fpmsCustid]").val(customerID);
					 applySuccessToastrAlert("Customer details updated successfully ");
					 return;
					 
				 }
				 if(i == "FPMSFIPA_UPDATED"){
					
					 var customerID=val;
					 
					 $("[name=fpmsCustid]").val(customerID);
					 applySuccessToastrAlert("Customer details updated successfully ");
					 
					 
					
					 return;
					 
				 }
				 if(i == "ERROR"){
					 applyErrorToastrAlert(val);
					 return;
				 }
				});
				
				
			});
			hideLoader();
		}
		
	});
	
}


function updateClientDetsFIPA(){
	
//	$('#fpmsclnt_Dialog').modal('hide');
	
	$("#dfSelfName").val($("[name='txtFldDlgFipaClntName']").val());
	$("#dfSelfNric").val($("[name='txtFldDlgFipaClntNric']").val());
	$("#dfSelfMartsts").val($("[name='txtFldDlgFipaClntMrtlSts']").val());
	$("#dfSelfHomeaddr").val($("[name='txtFldDlgFipaClntAddr']").val());
	$("#dfSelfHomeaddr2").val($("[name='txtFldDlgFipaClntAddr2'").val());
	$("#dfSelfHomepostal").val($("[name='txtFldDlgFipaClntPostal'").val());
	$("#dfSelfHomecntry").val( $("[name='selDlgFipaClntCountry'").val());
	$("#dfSelfMobile").val($("[name='txtFldDlgFipaClntCtHp']").val());
	$("#dfSelfPersemail").val($("[name='txtFldDlgFipaClntEmail']").val());
   
	hideLoader();
	
}