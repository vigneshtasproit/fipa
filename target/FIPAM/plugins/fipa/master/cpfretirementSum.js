
var frmCpfRetirementSum ;

var stafftype = $('#hTxtFldLoggedStfType').val();

function fipaInitPage(){
	showLoader();
	frmCpfRetirementSum = document.forms[0];
	 
	if(stafftype == STAFFTYPE_STAFF){  
		$("#btnRetYearSave").addClass("hidden");   
	}
	if(stafftype == STAFFTYPE_ADVISER){
		$("#btnRetYearSave").addClass("hidden");   
	 }
	
	 $("#selSrchRetYear").datetimepicker(yearOptions);
	 $("#brthYr").datetimepicker(yearOptions);
	 
	loadAllSymbols();
	applyEventHandlers(); 
	      
/*Master Pop Up URL*/

			$("#btnURL").css("display","none");
			$("#mainlayout #headerlayout").css("display","none");
			$("#mainlayout #sidebar-wrapper").css("display","none");
			$("#mainlayout #footerLayout").css("display","none");
			$("#layoutbody").removeAttr("class");
			$("#layoutbody").attr("class","col-md-12"); 
		 
/**/
	   hideLoader();
}


/*Search On Click */
$("#btnRetYearSrch").on("click",function(){
	if(!(validateFocusFlds('frmCpfRetirementSum','selSrchRetYear', MAST_SRCHYEAR))) return;
	CpfRetmntSrch(); 
});


/*Add Row Click */
$("#btnClear").on("click",function(){
		cpfRetSumClearFlds(); 
});

/*Clear Fields */
function cpfRetSumClearFlds(){
	$("form#frmCpfRetirementSum").find("input").val("");
}



$("#btnRetYearSave").on("click",function(){ 
	fipaCPFRetSumSave();
});

function fipaCPFRetSumSave(){
	 
	if(!validatecpfRetSumDetails())return;
	 enableComboWhenSubmit(frmCpfRetirementSum); 
	 frmCpfRetirementSum.action = "RetirementCPFSumSave.do";
	 frmCpfRetirementSum.submit();
		
}
function validatecpfRetSumDetails(){
	if(!(validateFocusFlds('frmCpfRetirementSum','brthYr', MAST_BIRTHYEAR))) return;
	if(!(validateFocusFlds('frmCpfRetirementSum','brsLimit', MAST_BRSLIMT))) return;
	 return true; 
}
 

/*Mandatory Fields Tooltip*/ 
$("#brthYr,#brsLimit,#selSrchRetYear").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

 
function CpfRetmntSrch(){
	var year=(isEmpty($("#selSrchRetYear").val())? "" : $("#selSrchRetYear").val());
	showLoader(); 

var parameter = "DBCALLFOR=CPFRET_SEARCH&selSrchRetYear="+year+"";

ajaxCall(parameter,servletName,function(Data){
var retval = Data;
hideLoader()
for ( var val in retval) {
var tabdets = retval[val];

  
if (tabdets["SESSION_EXPIRY"]) {
	window.location = BASE_URL +  SESSION_EXP_JSP;
	return;
}

if (tabdets["DB_ERROR"]) {
	window.location = BASE_URL +  DB_EXP_JSP;
	return;
}

for ( var tab in tabdets) {
	

	if (tabdets.hasOwnProperty(tab)) {	
		var key = tab;
		var value = tabdets[tab];
		var jsnData = value; 	
		if (key == "CPFRET_SEARCH"){ 	
			jsonRetSumDataPopulate(value, tab); 
						
		}
		if (key == "CPFRET_SEARCH_NOREC") { 
			applyToastrAlert("NO RECORD FOUND");
			cpfRetSumClearFlds(); 
			hideLoader(); 
			return true;
		}
	}
}
}
});

}

function jsonRetSumDataPopulate(jsnData, tab) {
	
		for ( var cont in jsnData) {
	
			if (jsnData.hasOwnProperty(cont)) {

				var contvalue = jsnData[cont];
				var elemObj = eval('frmCpfRetirementSum.' + cont);
				
				if (elemObj) {
					
					elemObj.value = contvalue;

					if (elemObj.type == "checkbox") {
						if (contvalue == 'Y') {
							elemObj.checked = true;
							$(elemObj).prop("checked", true);
						}
					}

					if (elemObj.type == "radio") {
						if (contvalue == "Y" || elemObj.value == contvalue) {
							elemObj.checked = true;
							$(elemObj).prop("checked", true);
						}
					}

					if (elemObj.type == "select-one") {
						$("#" + cont).val( contvalue );
					}
	 

				}
			}
		}
	}

$("#brthYr").on("change",function(){
	var year=$(this).val();
	showLoader();  
	var parameter = "DBCALLFOR=CPFRET_SEARCH&selSrchRetYear="+year+"";
 if(!isEmpty(year)){
		ajaxCall(parameter,servletName,function(Data){
		var retval = Data; 
		 for ( var val in retval) {
			var tabdets = retval[val]; 
			  
			if (tabdets["SESSION_EXPIRY"]) {
				window.location = BASE_URL +  SESSION_EXP_JSP;
				return;
			}
			
			if (tabdets["DB_ERROR"]) {
				window.location = BASE_URL +  DB_EXP_JSP;
				return;
			}
			
			for ( var tab in tabdets) {
				
			
				if (tabdets.hasOwnProperty(tab)) {	
					var key = tab;
					var value = tabdets[tab];
					var jsnData = value; 	
					if (key == "CPFRET_SEARCH"){ 
						$("#brthYr").val("");
						applyToastrAlert("Year Already Exist"); 
						return;
					} 
				}
			}
			}
		});
	}
 hideLoader();
});

$("#brsLimit").on("change",function(){
	var brsLmt = Number($(this).val());
	var frs=0;
	var ers=0; 
	
	if(!isEmpty(brsLmt)){
		frs=brsLmt*2;
		ers=brsLmt*3;
	}
	
	$("#frsLimit").val(frs);
	$("#ersLimit").val(ers);
	 
});

