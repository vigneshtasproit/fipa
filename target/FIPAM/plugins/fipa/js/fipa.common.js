


/**
 * Instant Saving - autosave
 */
var prevScrFlg=""; 

var currentDate = new Date();

var month = currentDate.getMonth()+1;
var day = currentDate.getDate();

var ResultNewDate = ((''+day).length<2 ? '0' : '') + day +'/'+
    ((''+month).length<2 ? '0' : '') + month + '/' +
    currentDate.getFullYear();


$("#lifeinscsecion").find(":input").on("change",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
	 
});

$("div.autosavetrigger").find(":input").on("change",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
	 
});

$(document).on("change",".editable",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
});


$(document).on("click",".delRow-icon",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
});

$(document).on("click",".addRow-icon",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
});


function instantsaveValidation(){
}

$("#li_existpolicy").on("click",function(event){
	prevScrFlg = "lifeinsurance_li";
	processInstantSaving();
});

$(".sidebar-menu li a").on("click",function(event){
	
	var limainmenu = $(this).parent().hasClass("mainmenu");
	var lisubmenu = $(this).parent().hasClass("submenu");
	if(limainmenu || lisubmenu){
		
		processInstantSaving();
		
	}
});


function processInstantSaving(){
	
	var hMenuName=$("#hTxtMenuName").val();
	
	if( hMenuName !="#searchpage" && hMenuName != "#profilepage"  ){
		if(!isEmpty(prevScrFlg)){
			/*alert("Saved Triggered");*/
			instantSaveClientDetails();
		}
	} 
	
	prevScrFlg = "";
}


 function instantSaveClientDetails(){
//	 
//	 This method invoked for FPMS client details fetching.(in fipa.client.js)
	   
	var val=$("#dfSelfName").val();  
	
	if(!isEmpty(val)){ 
			  
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 var fnacrtdTime=$("#dfCreatedDatetime").val();
	 
	 	var disabled = $("#fipaForm").find(':input:disabled').removeAttr('disabled');
	 
	 	var fnaData = $("#fipaForm").serialize();
	 	
	 	disabled.attr('disabled','disabled');
	 
	 	var saveFor = "FPMS_CLIENT";  
		var parameter = fnaData + "&DBCALLFOR=FPMSCLIENT_INSTANT_SAVE&txtFldSaveFor=" + saveFor ;
//		console.log(parameter);
		
		
		$.post(InstantProServlet,parameter
		).done(function(data) {
			var jsnRslt=JSON.parse(data); 
				
			$.each(jsnRslt,function(i,obj){
				
				$.each(obj,function(i,val){
//					console.log(i+'='+val+';')
					
					$("#fipaForm").find("input[name='"+i+"']").val(val);
					$("#"+i).val(val);
					
				});
			});
			
			
		});
	

		}
}
 

/*End of autosave code*/
 
/* var hMenuName=$("#hTxtMenuName").val();
	console.log(hMenuName)
	if( !isEmpty(hMenuName) && hMenuName != "Default" &&  hMenuName !="#searchpage" && hMenuName != "#profilepage"  && hMenuName != "#typesofappln"
		&& hMenuName != "#fingoalsdiv" && 	hMenuName != "#particulars"  && hMenuName!= "#spousediv" && hMenuName != "#chldpartdiv"){
		var fnaId_temp = $("#fnaId").val();
		var val=$("#dfSelfName").val();  
		if(isEmpty(val)){
			applyErrorToastrAlert("Since, No details are keyed in Client Particulars");
//			$("#clientdets_li").trigger("click");
			return false;
		}
	}*/

$(".srchtextflds").on("change",function(){
	clearClntSrchRows();
});

 
function showPopOver(elmId,txtMsg){ 
	
	if(txtMsg == PLAN_DETS){
		$("#"+elmId).popover({ 
			html:'true',
			trigger: "hover" ,
			content:txtMsg,
			container: 'body',
			title:function () {
			    return 'Info';
			  }, 
			animation: 'true',
//			placement:'top',
//			viewport:$("#"+elmId)
		}); 
	}else{
		$("#"+elmId).popover({ 
			html:'true',
			trigger: "hover" ,
			content:txtMsg,
			container: 'body',
			title:function () {
			    return 'Info';
			  }, 
			animation: 'true',
			placement:'top',
//			viewport:$("#"+elmId)
		}); 
	}
	
	
}

function logout(){
//	if(window.confirm("Are you sure want to logout?")){
	setAllLayoutColor();
	
		document.forms["fipaForm"].action="Logout.do";
		document.forms["fipaForm"].submit();
//		window.close();
//	}
//	else
//		return false;
	
}

function setHomePage(){
	document.forms[0].action="FipaHome.do";
	document.forms[0].submit();
}


function showAlert(content,fldtofocus) {
	
	
	if(fldtofocus){
		fldtofocus.focus();
	}
	
////	alert(fldtofocus)
//	var screename=$("#hTxtScreenName").val();
//	$("#alertimg").html("");
//	
//	$("#alertmsg").html(content);
////	$("#alertimg").prepend('<img width="20px" src="images/info.png"/>');
//
//	
//	$('#alertmsgdiv').modal({
//		  backdrop: 'static',
//		  keyboard: false,
//		  show:true,
//		});
//	
//	$('#alertmsgdiv').on('shown.bs.modal', function() { 
//		
//		  $(this).find(".modal-title").text("FIPA - Message");
//		  $(this).find(".modal-footer").find("button:eq(0)").unbind();
//		  $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
//			  $('#alertmsgdiv').modal('hide'); 
////			  $("#sidebar-menu").find("ul li").removeClass("sideMenuHighlight");
//	        	if(!isEmpty(content)){ 
//	        		if((content == CLIENT_REQ)){
////	        			openDivForClient('particulars','clientsection','dataform_li',"Client's Particulars");  
////		    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").click(); 
////		    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").addClass("sideMenuHighlight");
//	        			$("#particulars_li").trigger("click");
//	        			$("#clientdets_li").trigger("click");		    			   
//		    			if(fldtofocus)fldtofocus.focus();
//	        		}
//	        				
//	        	if((content == SELF_NAME) || (content == SELF_NRIC) || (content == SELF_ADVSTF)||
//	    				(content == SELF_DOB) || (content == SELF_NATION) || (content == SELF_HMEADDR) 
//	    				|| (content == SELF_HMEADDR2) || (content == SELF_RPOSTAL )   
//	    				|| (content == SELF_RCNTRY) || (content == SELF_MAILADDR )  
//	    				|| (content == SELF_MAILADDR2) || (content == SELF_MPOSTAL ) 
//	    				|| (content == SELF_MCNTRY)  ) {
//	     	 
////	    			openDivForClient('particulars','clientsection','dataform_li',"Client's Particulars");  
////	    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").click(); 
////	    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").addClass("sideMenuHighlight");
//	        		
//	        		$("#particulars_li").trigger("click");
//	        		$("#clientdets_li").trigger("click");
//	    			   
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    			
//	    		} else if((content == SPOUSE_NAME) || (content == SPOUSE_NRIC) || (content == SPOUSE_DOB)
//	    				|| (content == SPOUSE_NATION) || (content == SPOUSE_HMEADDR)
//	    				|| (content == SPOUSE_HMEADDR2) || (content == SPOUSE_RPOSTAL)
//	    				|| (content == SPOUSE_RCNTRY) || (content == SPOUSE_MAILADDR)
//	    				|| (content == SPOUSE_MAILADDR2) || (content == SPOUSE_MPOSTAL)
//	    				|| (content == SPOUSE_MCNTRY) ) {
//	    			
////	    			openDivForClient('spousediv','spousesection','dataform_li',"Spouse's Particulars"); 
////	    			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
////	    			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").find("a").click();
//	    			
//	    			$("#particulars_li").trigger("click");
//	    			$("#spousedets_li").trigger("click");
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		} else if((content == TOAALYSFOR) || (content == TOAPURPO)
//	    				|| (content == TOPLIFE) || (content == TOPHL) || (content == TOPAYSTYPES) || (content == TOAALYSFORSELF)) { 
////	    			openDivForClient('typesofappln','typesofappsec','typesofAppln_li',"Types of Application");
//	    			
//	    			$("#typesofappln_li").trigger("click");
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    			
//	    		} else if((content == HEALTHINS_RMKS)){  
////	    			openDivForClient('lifeInsurce','lifeinscsecion','analysis_li','Life Insurance');
////	    			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").addClass("sideMenuHighlight");
////	    			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").find("a").click();
//	    			
//	    			$("#lifeinsurance_li").trigger("click");
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    			
//	    		}else if((content == INT_NAME)||(content == INT_NRIC)||(content == INT_CONTACT)||
//	    				(content == INT_HOMEADDR)||(content == INT_REL)){
////	    			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
////	    			$("#sidebar-menu #clientsdeclr_li").find("a").click();
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		} else if((content == CHECK_PRODUCT)){
////	    			openDivForClient('adrecom','adrecomprodiv','advrecm_li','New Purchase & TopUp');
////	    			$("#sidebar-menu #advrecm_li").find("a").click();
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((content == SEL_BENOWNER) || (content == SEL_TPP) || (content == SEL_PEP)){ 
////	    			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
////	    			$("#sidebar-menu #clientsdeclr_li").find("a").click();
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		} else if((content == SWTCH_QUEST1) || (content == SWTCH_QUEST1REMK) || (content == SWTCH_QUEST2) ||
//	    				(content == SWTCH_QUEST3) || (content == SWTCH_QUEST4)){ 
////	    		    openDivForClient('switchrep','adrecomswtcdiv','advrecm_li','Switching & Replacement');
////	    		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
////	    		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").find("a").click();
//	    			
//	    		    if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((content == REASONS_RECOM)){
//	    			 
////	    			openDivForClient('reasons','brofrecomdiv','reasons_li','Basis & Rationale of Recommendations');
////	    			$("#sidebar-menu #reasons_li").find("a").click();
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    			
//	    		}else if((content == DECLARATION)){ 
////	    			openDivForClient('decbycli','decbyclidiv','decbycli_li','Declaration');
////	    			$("#sidebar-menu #decbycli_li").find("a").click();
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((content == SUP_REASON) || (content == SUP_DECLARATION)){ 
////	    			openDivForClient('suprvsr','suprvsrdiv','supervisor_li',"Supervisor's Review");
////	    			$("#sidebar-menu #supervisor_li").find("a").click();
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((screename == "cpfInterestRate")){
//	    			
////	    			 $("#sidebar-menu ul li[id='masteraccintrates']").parent().removeClass("sideMenuHighlight nv");
////	    			 $("#sidebar-menu ul li[id='masteraccintrates']").addClass("sideMenuHighlight nv");
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((screename == "cpfAllocation")){
////	    			 $("#sidebar-menu ul li[id='masteraccallorates']").parent().removeClass("sideMenuHighlight nv");
////	    			 $("#sidebar-menu ul li[id='masteraccallorates']").addClass("sideMenuHighlight nv");
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((screename == "cpfContribution")){
////	    				$("#sidebar-menu ul li[id='mastercontri']").parent().removeClass("sideMenuHighlight nv");
////	    			   $("#sidebar-menu ul li[id='mastercontri']").addClass("sideMenuHighlight nv");
//	    			   
//	    			   
//	    			   if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((screename == "cpfAccType")){
////	    			 $("#sidebar-menu ul li[id='masteracctypes']").parent().removeClass("sideMenuHighlight nv");
////	    			   $("#sidebar-menu ul li[id='masteracctypes']").addClass("sideMenuHighlight nv");
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((screename == "cpfSum")){
////	    			 $("#sidebar-menu ul li[id='masterretiremrntsum']").parent().removeClass("sideMenuHighlight nv");
////	    			   $("#sidebar-menu ul li[id='masterretiremrntsum']").addClass("sideMenuHighlight nv");
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((screename == "cpfLifePayout")){
////	    			 $("#sidebar-menu ul li[id='masterlifepayout']").parent().removeClass("sideMenuHighlight nv");
////	    			   $("#sidebar-menu ul li[id='masterlifepayout']").addClass("sideMenuHighlight nv");
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((screename == "quotes")){
////	    			 $("#sidebar-menu ul li[id='masterquotes']").parent().addClass("sideMenuHighlight nv"); 
//	    			 if(fldtofocus)fldtofocus.focus();
//	    			return;
//	    		}else if((content == CLIENT_REQ)){ 
//	    			$('.modal').modal('hide');
//	    		}
//	        	
//	    		else{ 
//	    			
//	    			if(fldtofocus)fldtofocus.focus();
//	    		}
//	        	} 
//	        	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
//	        	if(fldtofocus)fldtofocus.focus(); 
//		});
//	});   
   
}




 

function calSelfCpfMastMthContr(){
	
	/*
	var selfAge=$("#dfSelfAge").val();//self age
	var slfow = $("#incsrcSelfEmpMonthly").val();
	var slfOW_data=Number(isEmpty(slfow) ?"0" : slfow);//self OW from Exp fd flow
	var slfaw = $("#incsrcSelfEmpAddlwage").val();
	var slfAW_data=Number(isEmpty(slfaw) ?"0" : slfaw)/12;//self AW/12 for monthly from Exp fd flow
	var slfTW_data=Number(slfOW_data+slfAW_data);//self OW+(AW/12) from Exp fd flow
//	calMastCpfContrAnalysis("Self",selfAge,slfOW_data,slfAW_data,slfTW_data);
	var selfdob = $("#dfSelfDob").val()
	
	var arr = getCPFContribution(selfdob,slfOW_data);
	var ee = arr[0];
	var er = arr[1];
	
	
	
	$("input[name=ccEmpleContrb]:eq(0)").val(roundNumber(ee * slfOW_data));
	$("input[name=ccEmplrContrb]:eq(0)").val(roundNumber(er * slfOW_data)); 
	
	callSumOfCpfMth();
	*/
	
	calcCPFContribution();
}
function calSpsCpfMastMthContr(){
	/*
	var spsAge=$("#dfSpsAge").val();//self age
	var spsow = $("#incsrcSpsEmpMonthly").val();
	var spsOW_data=Number(isEmpty(spsow) ? "0" : spsow);//spouse OW from Exp fd flow
	var spsaw = $("#incsrcSpsEmpAddlwage").val();
	var spsAW_data=Number(isEmpty(spsaw) ? "0" : spsaw)/12;//spouse AW/12 for monthly from Exp fd flow
	var spsTW_data=Number(spsOW_data+spsAW_data);//spouse OW+(AW/12) from Exp fd flow
//	calMastCpfContrAnalysis("Spouse",spsAge,spsOW_data,spsAW_data,spsTW_data);
	
	var spsdob = $("#dfSpsDob").val();

	var arr = getCPFContribution(spsdob,spsOW_data);
	var ee = arr[0];
	var er = arr[1];
	
	
	$("input[name=ccEmpleContrb]:eq(1)").val(roundNumber(ee * spsOW_data));
	$("input[name=ccEmplrContrb]:eq(1)").val(roundNumber(er * spsOW_data)); 
	callSumOfCpfMth();
	*/
	
	calcCPFContribution();

	
}
function calMastCpfContrAnalysis(Owner,refage,OW_data,AW_data,TW_data){

	var Age=Number(refage);
	var employee=Number(0);
	var employer=Number(0);
	
	if(!isEmpty(Age)){
		 
		
		if(Age<=55){ 
			 
			if(TW_data<=50){
				
				employee=roundNumber(Number(0)); //Nil 
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=roundNumber((17/100)*Number(TW_data));//17% (TW) 
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=roundNumber(((17/100)*Number(TW_data)) + ((0.6)*(Number(TW_data) - 500)));//17%(TW) +0.6(TW-$500)
				employer=roundNumber(0.6*(Number(TW_data)-500));//0.6(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((37/100)*Number(OW_data)) < 2200) ? Number((37/100)*Number(OW_data)) : 2200;
				employee=roundNumber((check1) + ((37/100)*Number(AW_data))) ;//[37%(OW)]+37%(AW)*Max of $2,200
				var check2= (Number((20/100)*Number(OW_data)) < 1200) ? Number((20/100)*Number(OW_data)) : 1200;
				employer=roundNumber((check2) + ((37/100)*Number(AW_data)));//[20%(OW)]+20%(AW)*Max of $1,200
			}
			
		}else if(Age>=56 && Age<=60){
			 
	if(TW_data<=50){
				
				employee=roundNumber(Number(0)); //Nil 
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=roundNumber((13/100)*Number(TW_data));//13% (TW) 
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=roundNumber(((13/100)*Number(TW_data)) + ((0.39)*(Number(TW_data) - 500)));//13%(TW) +0.39(TW-$500)
				employer=roundNumber(0.39*(Number(TW_data)-500));//0.39(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((26/100)*Number(OW_data)) < 1560) ? Number((26/100)*Number(OW_data)) : 1560;
				employee=roundNumber((check1) + ((26/100)*Number(AW_data)));//[26%(OW)]+26%(AW)*Max of $1560
				var check2= (Number((13/100)*Number(OW_data)) < 780) ? Number((13/100)*Number(OW_data)) : 780;
				employer=roundNumber((check2) + ((13)*Number(AW_data)));//[13%(OW)]+13%(AW)*Max of $780
			}
		
		}else if(Age>=61 && Age<=65){
			 
	if(TW_data<=50){
				
				employee=roundNumber(Number(0)); //Nil 
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=roundNumber((9/100)*Number(TW_data));//9% (TW) 
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=roundNumber(((9/100)*Number(TW_data)) + ((0.225)*(Number(TW_data) - 500)));//9%(TW) +0.225(TW-$500)
				employer=roundNumber(0.225*(Number(TW_data)-500));//0.225(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((16.5/100)*Number(OW_data)) < 990) ? Number((16.5/100)*Number(OW_data)) : 990;
				employee=roundNumber((check1) + ((16.5/100)*Number(AW_data)));//[16.5%(OW)]+16.5%(AW)*Max of $990
				var check2= (Number((7.5/100)*Number(OW_data)) < 450) ? Number((7.5/100)*Number(OW_data)) : 450;
				employer=roundNumber(((check2)) + ((7.5/100)*Number(AW_data)));//[7.5%(OW)] +7.5%(AW)*Max of $450
			}
		
		}else if(Age>65){
			
			if(TW_data<=50){
				
				employee=roundNumber(Number(0)); //Nil 
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=roundNumber((7.5/100)*Number(TW_data));//7.5% (TW)
				employer=roundNumber(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=roundNumber(((7.5/100)*Number(TW_data)) + ((0.15)*(Number(TW_data) - 500)));//7.5%(TW) +0.15(TW-$500)
				employer=roundNumber(0.15*(Number(TW_data)-500));//0.15(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((12.5/100)*Number(OW_data)) < 750) ? Number((12.5/100)*Number(OW_data)) : 750;
				employee=roundNumber((check1) + ((12.5/100)*Number(AW_data)));//[12.5%(OW)]+12.5%(AW)*Max of $750
				var check2= (Number((5/100)*Number(OW_data)) < 300) ? Number((5/100)*Number(OW_data)) : 300;
				employer=roundNumber((check2) + ((5/100)*Number(AW_data)));//[5%(OW)]+5%(AW)*Max of $300
			}
		
		}
		
	 
		
		
		if(Owner == "Self"){
//			console.log("employee->"+employee +","+roundNumber(employee))
			$("input[name=ccEmpleContrbSelf]").val(roundNumber(employee));
			$("input[name=ccEmplrContrbSelf]").val(roundNumber(employer)); 

			if(employee == 0){
				$("input[name=ccEmpleContrbSelf]").val(""); 
			}
			if(employer == 0){
				$("input[name=ccEmplrContrbSelf]").val("");
			}
		}
		
		if(Owner == "Spouse"){
			$("input[name=ccEmpleContrbSps]").val(roundNumber(employee));
			$("input[name=ccEmplrContrbSps]").val(roundNumber(employer)); 
			if(employee == 0){
				$("input[name=ccEmpleContrbSps]").val(""); 
			}
			if(employer == 0){
				$("input[name=ccEmplrContrbSps]").val("");
			}
		}
		
		
		callSumOfCpfMth();
	}
}


function callSumOfCpfMth(){  
var cpf_monthly;
var sumSlfCpfmth=0;
var sumSpsCpfmth=0;     

for(var i=0;i<1;i++){
	  
	if(!isEmpty(document.getElementById("ccEmpleContrbSelf").value  ||  document.getElementById("ccEmplrContrbSelf").value )){
		sumSlfCpfmth+= Number(document.getElementById("ccEmpleContrbSelf").value)  + Number(document.getElementById("ccEmplrContrbSelf").value);
	 } 
	
	if(!isEmpty( document.getElementById("ccEmpleContrbSps").value  || document.getElementById("ccEmplrContrbSps").value)){
		sumSpsCpfmth+= Number(document.getElementById("ccEmpleContrbSps").value)+ Number(document.getElementById("ccEmplrContrbSps").value);
	} 

}


	if(!(sumSlfCpfmth == 0 && sumSlfCpfmth == 0 )){
		$("#txtFldTotalCCSelf").val(isNaN(Number(sumSlfCpfmth))?"0":Number(sumSlfCpfmth));
		$("#txtFldTotalCCSps").val(isNaN(Number(sumSpsCpfmth))?"0":Number(sumSpsCpfmth));	
	}
	
	if(sumSlfCpfmth == 0){$("#txtFldTotalCCSelf").val("");}
	if(sumSlfCpfmth == 0 ){$("#txtFldTotalCCSps").val("");} 

}
 
 


function getCalendar(id){
	  $("#"+id ).datepicker({ changeMonth: true, changeYear: true, dateFormat: 'dd/mm/yy'});
}


 


function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern);
    
    if (dtArray == null) 
        return false;
    

    dtDay= dtArray[1];
    dtMonth = dtArray[3];    
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}

function chkFromToDateValidation(elmFrom,elmTo,msg){
	 
	var fromdate = $("#"+elmFrom);
	var todate = $("#"+elmTo);
	 
	
			
	if(!isEmpty(fromdate.val()) && !isEmpty(todate.val())){
		if(!validateDateComparision(fromdate,todate,"<=",msg));  		
		return;	
	}
}

function dhtmlChkDateValidation(elmFrom,elmTo,msg){
	var fromdate = elmFrom;
	var todate = elmTo;
	 
	if(!isEmpty(fromdate.val()) && !isEmpty(todate.val())){
		if(!validateDateComparision(fromdate,todate,"<=",msg));  		
		return;	
	}
}

function CheckDob(dob) {
	var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
	if (dob.value.match(dateformat)) {

		var opera1 = dob.value.split('/');
		var opera2 = dob.value.split('-');
		lopera1 = opera1.length;
		lopera2 = opera2.length;
		if (lopera1 > 1) {
			var pdate = dob.value.split('/');
		} else if (lopera2 > 1) {
			var pdate = dob.value.split('-');
		}
		var mm = parseInt(pdate[0]);
		var dd = parseInt(pdate[1]);
		var yy = parseInt(pdate[2]);
		var ListofDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
		if (mm == 1 || mm > 2) {
			if (dd > ListofDays[mm - 1]) {
				applyErrorToastrAlert("Invalid date format", dob);

				return false;
			}
		}
		if (mm == 2) {
			var lyear = false;
			if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
				lyear = true;
			}
			if ((lyear == false) && (dd >= 29)) {
				applyErrorToastrAlert("Invalid date format", dob);
				return false;
			}
			if ((lyear == true) && (dd > 29)) {
				applyErrorToastrAlert("Invalid date format", dob);
				return false;
			}
		}
	} else {
		if (!(isEmpty(dob.value))) {
			applyErrorToastrAlert("Invalid date format", dob);
			dob.value = "";
		}
		return false;
	}
}



function checkPercntVal(elemid){ 
	 
	if(!isEmpty(elemid.value)){
		if(elemid.value > 100){ 
//		showAlert("% value should be less than or equal to 100",elemid);
			applyErrorToastrAlert("% value should be less than or equal to 100",elemid);
		elemid.value="";
		return false;
	   }
	}
	return true;
}
 
function EmailCheck(email) {
	var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	if (email.value.match(mailformat)) {
		return true;
	} else {
		if (!(isEmpty(email.value))) { /* changed */
			// showAlert("Invalid email address!",email);
			applyErrorToastrAlert("Invalid email address", email);
			email.value = "";
			email.focus();
			return false;
		}
	}

}


function isEmpty(strVal) 
{ 
   if ((strVal == null) || (strVal == undefined) || (strVal == "undefined") || (strVal.length==0)) 
   {
      return true;
   }
   else 
   { 
      return false; 
   }
}//end IsEmpty

function isDecimal(event, obj) {
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;

    if (chCode >= 48 && chCode <= 57)

    { 
        return true;

    } else if (chCode == 46)

    {  if (obj.value.indexOf('.') >= 0)
    {  return false;
    }

        return true;

    } else

    {
 
        return false;

    }

}
function isNumberOneDecimal(evt,obj) {
	var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    		
		    if(iKeyCode == 46 && $(this).val().indexOf('.') != -1) {
		    	evt.preventDefault();
		    	 return false;
		     } // prevent if already dot	
		    
    		
    return true;
}
 
function isNumber(evt,obj) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    		
//    if(iKeyCode == 46 && $(this).val().indexOf('.') != -1) {
//    	evt.preventDefault();
//    	 return false;
//     } // prevent if already dot	
    

    
    	
    if (iKeyCode != 46 && iKeyCode > 31 && (  iKeyCode < 48 || iKeyCode > 57)){
    	
    		
    
    	$(obj).qtip({
    		content: {text : '<br> Numbers Only  ',title : ' FIPA - Notification ',button: true},
            //show: 'keypress',
            hide: 'keypress',        
            style: {
                classes: 'qtip-green qtip-rounded qtip-shadow'
            }, position: {
                my: 'top left',   
                at: 'bottom left', 
                viewport: $(window),
                target: $(obj)  
            }  
        });
    	
    	$(obj).qtip('show');
    	
    	setInterval(function(){$(obj).qtip('hide');$(".qtip").remove();}, 2500);
    	 
    	
        return false;
        
    }  
    return true;
} 



function isNumberKeydec(evt,obj) {
  //  debugger;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    
    if (charCode == 46) {
        return false;    
        
    }
    
    
    
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57) ){
    	$(obj).qtip({
    		content: {text : '<br> Numbers Only  ',title : ' FIPA -Notification ',button: true},
            //show: 'keypress',
    		 
            hide: { when: 'keypress', fixed: true },
            style: {
                classes: 'qtip-green qtip-rounded qtip-shadow'
            }, position: {
                my: 'top left',   
                at: 'bottom left', 
                viewport: $(window),
                target: $(obj)  
            }  
        });
    	
    	$(obj).qtip('show'); 
    	setInterval(function(){$(obj).qtip('destroy');}, 2500);
    	return false;
    }
    return true;
}

function setSelectedRow(chkbox){
	
	var rind = chkbox.parentNode.parentNode.rowIndex;
	$("#hTblSelectedRow").val(rind);
	
}


function chkClntRiskPref(radObj){
	
	/*if(radObj.checked){
		
		$('.spnClntRiskPref').each(function(){
			var $radObj = $(this);
			$radObj.css({'background-color':'transparent'});
		});
	}*///end of if deprecated function from 12_07_2018 
	
	$('.spnClntRiskPref').each(function(){
		if($(this).hasClass("radioChkd") && this==radObj){
			radObj.checked=false;
			$(radObj).removeClass("radioChkd")
			return false;
		}
		
		if(this.checked){
			$('.spnClntRiskPref').removeClass("radioChkd");
			$(this).addClass("radioChkd");
			return false;
		}
	});
	
}//end of chkClntRiskPref


function calcSum(elemObj, type) {
	
//	alert("elemObj"+elemObj);

	var elemId = '', sum = 0, zeroVal = '0.0000';
	if (!elemObj)
		elemId = 'null';
	else
		elemId = elemObj.id;
	
//	alert("elemId"+elemId);
	
	if (type == Cpf_Bal.SUMOF_CPFBAL_SLF) {
		for ( var tot in Cpf_Bal.Cpf_BalSelf) {
			var id = Cpf_Bal.Cpf_BalSelf[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('totcpfSelfbalcAmt').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('totcpfSelfbalcAmt').value = '';
	}// end of if

	if (type == Cpf_Bal.SUMOF_CPFBAL_SPS) {
		for ( var tot in Cpf_Bal.Cpf_BalSps) {
			var id = Cpf_Bal.Cpf_BalSps[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('totcpfSpsbalcAmt').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('totcpfSpsbalcAmt').value = '';
	}// end of if

	// Annual Expenditure
	if (type == Ann_Exp.SUMOF_ANNEXP_SELF) {
		for ( var tot in Ann_Exp.Ann_Exp_Self) {
			var id = Ann_Exp.Ann_Exp_Self[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('expdSelfTotalannl').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('expdSelfTotalannl').value = '';
	}// end of if

 
	if (type == Ann_Exp.SUMOF_ANNEXP_SPS) {
		for ( var tot in Ann_Exp.Ann_Exp_Sps) {
			var id = Ann_Exp.Ann_Exp_Sps[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('expdSpsTotalannl').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('expdSpsTotalannl').value = '';
	}// end of if
	
	 
	if (type == Ann_Exp.SUMOF_ANNEXP_FAM) {
		for ( var tot in Ann_Exp.Ann_Exp_Fam) {
			var id = Ann_Exp.Ann_Exp_Fam[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('expdFamilyTotalannl').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('expdFamilyTotalannl').value = '';
  }
	
 //end of Annl expenditure
	
 //Contingency plan
	if (type == Ctg_Pln.SUMOF_CONTGPLN_SELF) {
		for ( var tot in Ctg_Pln.Contg_Self) {
			var id = Ctg_Pln.Contg_Self[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('txtFldContSlfYrsNeed').value = roundNumber(sum);
		document.getElementById('txtFldContSpsYrsNeed').value = roundNumber(sum);
		if (sum == zeroVal){
			document.getElementById('txtFldContSlfYrsNeed').value = '';
		   document.getElementById('txtFldContSpsYrsNeed').value = '';
		}
	}// end of if
	
	//end of Contingency plan
	
	//Source Of Income
	if (type == SrcOF_Inc.SRCOFINCM_SLF) {
		for ( var tot in SrcOF_Inc.SrcOfInc_Slf) {
			var id = SrcOF_Inc.SrcOfInc_Slf[tot], othrElems = $('#' + id);
			var addval=0;
			 if(id == 'incsrcSelfEmpMonthly'||id=='incsrcSelfNempMonthly'){
				addval=12;
			 }else{
				addval=1;
			 
			}
			
			
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value)*addval;
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			 
		}// end of for
		document.getElementById('insrcSelfTotannl').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSelfTotannl').value = '';
	}// end of if
	 
	 
	
	if (type == SrcOF_Inc.SRCOFINCM_SPS) {
		for ( var tot in SrcOF_Inc.SrcOfInc_Sps) {
			var id = SrcOF_Inc.SrcOfInc_Sps[tot], othrElems = $('#' + id);
			 
			var addval=0;
			 if(id == 'incsrcSpsEmpMonthly'||id=='incsrcSpsNempMonthly'){
				addval=12;
			 }else{
				addval=1;
			 
			}
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value)*addval;
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			
		}// end of for
		document.getElementById('insrcSpsTotannl').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSpsTotannl').value = '';
	}// end of if
	 
	
	
	if (type == SrcOF_Inc.SRCOFINCM_JOINT) {
		for ( var tot in SrcOF_Inc.SrcOfInc_Joint) {
			var id = SrcOF_Inc.SrcOfInc_Joint[tot], othrElems = $('#' + id);
			 
			var addval=0;
			 if(id == 'incsrcJointEmpMonthly'||id=='incsrcJointNempMonthly'){
				addval=12;
			 }else{
				addval=1;
			 
			}
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value)*addval;
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			
		}// end of for
		document.getElementById('insrcJointTotannl').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcJointTotannl').value = '';
	}// end of if
	
	
	/*Source of Income - Increment*/
	if (type == SrcOF_Inc.SRCOFINCRMNT_SLF) {
		for ( var tot in SrcOF_Inc.SrcOfIncIncrmt_Slf) {
			var id = SrcOF_Inc.SrcOfIncIncrmt_Slf[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSelfTotannlincr').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSelfTotannlincr').value = '';
	}// end of if
	
	
	
	if (type == SrcOF_Inc.SRCOFINCRMNT_SPS) {
		for ( var tot in SrcOF_Inc.SrcOfIncIncrmt_Sps) {
			var id = SrcOF_Inc.SrcOfIncIncrmt_Sps[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSpsTotannlincr').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSpsTotannlincr').value = '';
	}// end of if
	
	
	
	if (type == SrcOF_Inc.SRCOFINCRMNT_JOINT) {
		for ( var tot in SrcOF_Inc.SrcOfIncIncrmt_Joint) {
			var id = SrcOF_Inc.SrcOfIncIncrmt_Joint[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcJointTotannlincr').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcJointTotannlincr').value = '';
	}// end of if
	
	
	/*Source of Income - Increment*/

	
	/*Source of Income - Period*/
	if (type == SrcOF_Inc.SRCOFPER_SLF) {
		for ( var tot in SrcOF_Inc.SrcOfIncPriod_Slf) {
			var id = SrcOF_Inc.SrcOfIncPriod_Slf[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSelfTotannlperd').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSelfTotannlperd').value = '';
	}// end of if
	
	
	if (type == SrcOF_Inc.SRCOFPER_SPS) {
		for ( var tot in SrcOF_Inc.SrcOfIncPriod_Sps) {
			var id = SrcOF_Inc.SrcOfIncPriod_Sps[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSpsTotannlperd').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSpsTotannlperd').value = '';
	}// end of if
	
	if (type == SrcOF_Inc.SRCOFPER_JOINT) {
		for ( var tot in SrcOF_Inc.SrcOfIncPriod_Joint) {
			var id = SrcOF_Inc.SrcOfIncPriod_Joint[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcJointTotannlperd').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('insrcJointTotannlperd').value = '';
	}// end of if
	
	/*Source of Income - Period*/
	
	//CPF
	if (type == CPF.SUMOF_CPF_SELFCR) {
		for ( var tot in CPF.CPF_SLF_AC) {
			var id = CPF.CPF_SLF_AC[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSelfCurrBal').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSelfCurrBal').value = '';
	}// end of if
	
	
	if (type == CPF.SUMOF_CPF_SELFAC) {
		for ( var tot in CPF.CPF_SLF_AA) {
			var id = CPF.CPF_SLF_AA[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSelfAnnCtr').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSelfAnnCtr').value = '';
	}// end of if
	
	
	if (type == CPF.SUMOF_CPF_SPSCR) {
		for ( var tot in CPF.CPF_SPS_AC) {
			var id = CPF.CPF_SPS_AC[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSpsCurrBal').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSpsCurrBal').value = '';
	}// end of if
	
	
	if (type == CPF.SUMOF_CPF_SPSAC) {
		for ( var tot in CPF.CPF_SPS_AA) {
			var id = CPF.CPF_SPS_AA[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSpsAnnCtr').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSpsAnnCtr').value = '';
	}// end of if
	// end of CPF
	

	
	//Cpf Monthly Contribution Total - Self:
	if (type == cpf_monthly.SUMOF_CPFMTHLY_SLF) {
		for ( var tot in cpf_monthly.Cpf_MthSelf) {
			var id = cpf_monthly.Cpf_MthSelf[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotalCCSelf').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotalCCSelf').value = '';
	}// end of if
	
	//Cpf Monthly Contribution Total - Sps:
	if (type == cpf_monthly.SUMOF_CPFMTHLY_SPS) {
		for ( var tot in cpf_monthly.Cpf_MthSpouse) {
			var id = cpf_monthly.Cpf_MthSpouse[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotalCCSps').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotalCCSps').value = '';
	}// end of if
	
	//Financial liabilities
	if (type == FNA_LIA.SUMOF_FINLIAB_SELF) {
		for ( var tot in FNA_LIA.FNA_LIA_SLF) {
			var id = FNA_LIA.FNA_LIA_SLF[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotFincLiabSelf').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotFincLiabSelf').value = '';
	}// end of if
	
	
	if (type == FNA_LIA.SUMOF_FINLIAB_SPS) {
		for ( var tot in FNA_LIA.FNA_LIA_SPS) {
			var id = FNA_LIA.FNA_LIA_SPS[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotFincLiabSps').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotFincLiabSps').value = '';
	}// end of if
	
	if (type == FNA_LIA.SUMOF_FINLIAB_FAM) {
		for ( var tot in FNA_LIA.FNA_LIA_FAM) {
			var id = FNA_LIA.FNA_LIA_FAM[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotFincLiabFam').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotFincLiabFam').value = '';
	}// end of if
	
	
	//Financial liabilities
	
	
	//CASH ASSETS
	
	if (type == CASH_ASS.SUMOF_CASHASST_SELF) {
		for ( var tot in CASH_ASS.CAST_ASS_SELF) {
			var id = CASH_ASS.CAST_ASS_SELF[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('casstSelfTotal').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('casstSelfTotal').value = '';
	}// end of if
	
	
	if (type == CASH_ASS.SUMOF_CASHASST_SPS) {
		for ( var tot in CASH_ASS.CAST_ASS_SPS) {
			var id = CASH_ASS.CAST_ASS_SPS[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('casstSpsTotal').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('casstSpsTotal').value = '';
	}// end of if
	
	
	if (type == CASH_ASS.SUMOF_CASHASST_JOIN) {
		for ( var tot in CASH_ASS.CAST_ASS_JOIN) {
			var id = CASH_ASS.CAST_ASS_JOIN[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('casstFamTotal').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('casstFamTotal').value = '';
	}// end of if
	 
	//CASH ASSETS
	
	
	//Other Assets
	if (type == OTH_ASS.SUMOF_OTHASST_SELF) {
		for ( var tot in OTH_ASS.OTH_ASS_SELF) {
			var id = OTH_ASS.OTH_ASS_SELF[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstSelfTot').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('othasstSelfTot').value = '';
	}// end of if
	
	
	if (type == OTH_ASS.SUMOF_OTHASST_SPS) {
		for ( var tot in OTH_ASS.OTH_ASS_SPS) {
			var id = OTH_ASS.OTH_ASS_SPS[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstSpouseTot').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('othasstSpouseTot').value = '';
	}// end of if
	
	
	if (type == OTH_ASS.SUMOF_OTHASST_JOIN) {
		for ( var tot in OTH_ASS.OTH_ASS_JOIN) {
			var id = OTH_ASS.OTH_ASS_JOIN[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstJointTot').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('othasstJointTot').value = '';
	}// end of if
	
	
	if (type == OTH_ASS.SUMOF_OTHASST_LOAN) {
		for ( var tot in OTH_ASS.OTH_ASS_LOAN) {
			var id = OTH_ASS.OTH_ASS_LOAN[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstLoansTot').value = roundNumber(sum);

		if (sum == zeroVal)
			document.getElementById('othasstLoansTot').value = '';
	}// end of if
	//Other Assets
	 
	loadDynamicChartSelf();
	loadDynamicChartSpouse(); 
	loadDynamicChartJointFamily();
}


function EffRateCalcSum(ER1,ER2){
	  
	var CaSlfRoi=Number(ER1.value);
	var CaGenInfRate=Number(ER2.value);
	var sumEffRate=(1+CaSlfRoi)/(1+CaGenInfRate)-1;
	 
	return (sumEffRate);
	
 }

function PVCalculation(rate, periods, payment, future, type) {
	
	  // Initialize type
	  var type = (typeof type === 'undefined') ? 0 : type;

	  rate = eval(rate);
	  periods = eval(periods);

	  // Return present value
	  if (rate === 0) {
	    return - payment * periods - future;
	  } else {
	    return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods);
	  }
} 

function FVCalculation(rate, nper, pmt, pv, type) {
	  var pow = Math.pow(1 + rate, nper),
	    fv;
	  

	  pv = pv || 0;
	  type = type || 0;

	  if (rate) {
	    fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
	  } else {
	    fv = -1 * (pv + pmt * nper);
	  }

	  return fv;
	}


function PMTCalculation(ir, np, pv, fv, type) {
    
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return -(pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;
}

function NPERCalculation(rate, payment, present, future, type) {
	  // Initialize type
	  var type = (typeof type === 'undefined') ? 0 : type;

	  // Initialize future value
	  var future = (typeof future === 'undefined') ? 0 : future;

	  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
	  rate = eval(rate);

	  // Return number of periods
	  var num = payment * (1 + rate * type) - future * rate;
	  var den = (present * rate + payment * (1 + rate * type));
	  return Math.log(num / den) / Math.log(1 + rate);
	}

function setAdvMgrId(advObj){
		
	var advId = advObj.value;
	var selIndex = advObj.selectedIndex;
	document.getElementById("selAdvMgrHidden").selectedIndex=selIndex;
	var mgrId = document.getElementById("selAdvMgrHidden").value;
	$("#mgrId").val(mgrId); 
	$("select#mgrId").prop("disabled",true);
	$("select#advstfId").prop("disabled",true);
	
	  
}

function setmanagerId(mgrId){
	  
	
	var mgrId = $("#mgrId option:selected").text();
 
	var totMgrNameFlds = document.getElementsByName("txtFldMgrName").length; 
	 for(var i=0;i<totMgrNameFlds;i++){
	 
		 document.getElementsByName("txtFldMgrName")[i].value = mgrId;
	 }
	 
	 
	if(isEmpty(mgrId.value)){
		 for(var i=0;i<totMgrNameFlds;i++){
		 document.getElementsByName("txtFldMgrName")[i].value="";
		 }
	}
	
	var totSignFlds = document.getElementsByName("lblSupervisorSign").length; 
	for(var i=0;i<totSignFlds;i++){ 
		 document.getElementsByName("lblSupervisorSign")[i].value = mgrId;
	}
		 
	if(isEmpty(mgrId.value)){
		 for(var i=0;i<totSignFlds;i++){
		 document.getElementsByName("lblSupervisorSign")[i].value = "";
		 }
	}
	
}




function reorderTableRows(tblName,reorderflg) {
	
	if(reorderflg){
	
		var tblObj = document.getElementById(tblName);
		var rowLen = tblObj.tBodies[0].rows.length;	
		var tBodyObj = tblObj.tBodies[0];
		
		for(var i=0;i<rowLen;i++)
		{
			
	         var lclIndex = i+1;
	         if(tBodyObj.rows[i].cells[0].firstChild)
	        	 tBodyObj.rows[i].cells[0].firstChild.value =lclIndex;        	
	        
		} 	
	}
}//end incrIndex

function tableDeleteRow(tableId,autodelete){
	
	var table = document.getElementById(tableId);
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;
	 
	
	var deleteFlag = 0;
	
	if(rowCount<1){
		applyToastrAlert("No rows to delete!");
		return;
	}
	
	if(rowCount>=1){
		 
		
		if(!autodelete){
			
			for(var del=0;del<rowCount;del++){
				var row = tbody.rows[del];
				var chkbox = row.cells[2].childNodes[0];
				
				if(null != chkbox && true == chkbox.checked) {
				        deleteFlag = 1;
				}
			}// End of for(del)
			if(!deleteFlag){
				applyToastrAlert("Select a row to delete!");
				return;
			}	
			
		}
		
			

		// to delete the rows checked
		for(var del=0;del<rowCount;del++){
			var row = tbody.rows[del];
			
			mode = row.cells[1].childNodes[0].value;
			var chkbox = row.cells[2].childNodes[0];
		 
			if(((null != chkbox && true == chkbox.checked)||autodelete)) {
				if(mode == INS_MODE){
					tbody.deleteRow(del);
					if(isValidObject(document.getElementById('hSelectRow'))){
						document.getElementById('hSelectRow').value = '';
					}
					rowCount--;
					del--;
				}
				if(mode == QRY_MODE){
			        row.cells[1].childNodes[0].value = DEL_MODE;
			        chkbox.checked = false;
				}
			}
		}// End of for(del)
		
		reorderTableRows(tableId,true);
		
	}

}

function makeTblDeleteMode(tblIdArr){ 
	
//	alert("makeTblDeleteMode");
//	
//	alert(tblIdArr);
	
	if(isValidObject(tblIdArr[tblId])){
		
	for(var tblId in tblIdArr){   
		var tbl = document.getElementById(tblIdArr[tblId]),
		tblBody = tbl.tBodies[0],
	    len = tblBody.rows.length;
		  
		if(len>0){			
			tableDeleteRow(tblIdArr[tblId],true);
		}
	}
  }
	
}

function singleRecordViewDlg(content,currow) {
    
	$("#singlerowviewdivcontent").html(content);

    $("#singlerowviewdiv").dialog({
        resizable: false,
        title: "Private Banking - Single Record View",
        modal: true,
        minWidth: 450,
        minHeight:200,
        //height: 'auto',
        bgiframe: false,        
        buttons: [{text: " OK ",click:function(){
        	
        	if(currow){
        		
        	}
        	
        	$("#singlerowviewdiv").dialog('close');
        	
        	}
        }]
    });
}


function showFIPAModel(dialogId,dialogTitle){

	$("input,select,textarea").each(function(){ 
		$(this).removeClass("mandatoryFillFlds");
		$(this).qtip('disable');
		$(this).qtip('destroy',true); 
	});
	
	$('#'+dialogId).on('shown.bs.modal', function() {  
		if(!isEmpty(dialogTitle)){
			$(this).find(".modal-title").text(dialogTitle);
		}
		  
		    $(this).find(".modal-footer").find("button:eq(0)").unbind(); 
			$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
		});
		$('#'+dialogId).modal({
		  backdrop: 'static',
		  keyboard: true,
		  show:true
		});

}
 
function ajaxCall(parameter,servletName,CallBack) {
	
//	var jsnResponse = "";
	showLoader();
		$.ajax({
			type : "GET",
			url : servletName,
			data : parameter,
			dataType : "json",
			async : true,
			cache:false,
//			timeout:15000,
//			beforeSend : function() {
//				    $('.ajax-loader').css("visibility", "visible");
//			},
			success : function(data,statusText) {	
//				alert("success");
//				jsnResponse = data;	
				CallBack(data);
				hideLoader();
			},
//			complete : function(data, statusText) {		
//				$('.ajax-loader').css("visibility", "hidden");
//			}, 
			error : function(request, status, error) {
//				applyErrorToastrAlert("Please Contact System Administrator!");
				alert("Please Contact System Administrator!");
				hideLoader();				
			}
		});

		
		
//		return jsnResponse;
}


function ajaxCallA(parameter,servletName,CallBack) {
	console.log("inside ajaxCallA",parameter)
//	var jsnResponse = "";
	showLoader();
		$.ajax({
			type : "GET",
			url : servletName,
			data : parameter,
			dataType : "json",
//			async : false,
//			cache:false,
//			timeout:15000,
//			beforeSend : function() {
//				    $('.ajax-loader').css("visibility", "visible");
//			},
			success : function(data,statusText) {	
//				alert("success");
//				jsnResponse = data;	
				CallBack(data);
				hideLoader();
			},
//			complete : function(data, statusText) {		
//				$('.ajax-loader').css("visibility", "hidden");
//			}, 
			error : function(request, status, error) {
//				applyErrorToastrAlert("Please Contact System Administrator!");
				alert("Please Contact System Administrator!");
				hideLoader();				
			}
		});

		
		
//		return jsnResponse;
}


function enableComboWhenSubmit(form)
{
     for(var elem=0;elem<form.elements.length;elem++)
     {
     if(form.elements[elem].type=='select-one' ||
    	form.elements[elem].type=='radio'|| 
    	form.elements[elem].type=='checkbox' || 
    	form.elements[elem].type=='text' || 
    	form.elements[elem].type=='textarea')
     {
      form.elements[elem].disabled=null;
     }    
     }//end for     
}//end enableComboWhenSubmit

function removeTblRows(tblId) {
  
	var tBodyObj = document.getElementById(tblId).tBodies[0];
	if(tBodyObj){
		var len = tBodyObj.rows.length;
		if (len > 0) {
			for (var i = len; i > 0; i--) {
				tBodyObj.removeChild(tBodyObj.rows[0]);
			}
		}
	}
}

function isValidObject(objToTest) 
{
	
  if (objToTest == null || objToTest == undefined) 
  { 
    return false;
  }

 return true;
}//end isValidObject




function copyOptionsArrFromSel(sourceSelect){
	 
	var retArr = [];
	 
	for(var opt=0;opt<sourceSelect.options.length;opt++){
		
		retArr[opt] = new Option(sourceSelect.options[opt].value,sourceSelect.options[opt].text);
		
	}
	
	
	return retArr;
	
}

function copyOptionsArrFromSelSpilt(sourceSelect){
	 
	var retArr = [];
	 
	for(var opt=0;opt<sourceSelect.options.length;opt++){
		var spilted=sourceSelect.options[opt].value.split("^"); 
		retArr[opt] = new Option(spilted[1],sourceSelect.options[opt].text);
		
	}
	
	
	return retArr;
	
}

function comboMaker(cellObj,valArrayObj,selectedVal,addselectflg){
	   
	if(addselectflg){
		addSelectOption(cellObj.children[0]);
		cellObj.children[0].value = "";
		
	}
	
    
    for(var k=0; k < valArrayObj.length; k++)
    {
        if(valArrayObj[k].value.length>0)    {
        	cellObj.children[0].options[cellObj.children[0].options.length++] = new Option(valArrayObj[k].value,valArrayObj[k].text);
        }
        else    {
            cellObj.children[0].options.length=0;
            return;
        }
       
    }//end for{k}
    
    if(!isEmpty(selectedVal))    {
    	cellObj.children[0].value=selectedVal;
    }else{
    	cellObj.children[0].value="";
    }
}//end comboMaker



function addSelectOption(obj) {
	
    var option = document.createElement("option");
    option.text = "--SELECT--";
    option.value = "";
    obj.add(option,0);
    
}


function makeOptionArr(strValues,splitby){
	
	var retArr = [];
	
	var inArrObj = strValues.split(splitby);
	
	for(var opt=0;opt<inArrObj.length;opt++){
		
		retArr[opt] = new Option(inArrObj[opt],inArrObj[opt]);
		
	}
	
	return retArr;
	
}

function financialNumber(x){
	var tostringvar=x.toString();
	var number=tostringvar.toString().indexOf("e");  
	if(number == -1){
		number=x;
	}else{
		number=Number(tostringvar.toString().substring(0,number));
	}
	return number;
}

function roundNumber(num){ 

	return Math.round(num);
}



function makeArrSplit(strValues,splitby){

	var retArr = []; 
	var inArrObj = strValues.substr(1,strValues.length-2).split(splitby);
	
	for(var opt=0;opt<inArrObj.length;opt++){
		
		retArr.push(inArrObj[opt]);
		
	}
	
	return retArr;
}


function calcAge(dob) {

	var age = "";
	if (!isEmpty(dob)) {

		var birthday = dob.split("/")[2] + "-" + dob.split("/")[1] + "-"
				+ dob.split("/")[0];
		var now = new Date();
		var past = new Date(birthday);

		age = now.getFullYear() - past.getFullYear();
		
	}
	return isNaN(age) ? "" : age;
}




(function ($){
	
	$.fn.maxlength = function(){
		$('textarea[maxlength]').keypress(function(event){
			var key = event.which;
			
			if(key >= 33 || key == 13 || key == 32){
				var maxlength = $(this).value.length;
				var length = this.value.length;
				if(length >= maxlength){
					event.preventDefault();
				}//end of if
			}//end of if
		});
	};//end of function
})(jQuery);


function validateMandatoryFlds(fld,message){
   
	var fldTrim = fld.value.trim(); 
	if(isEmpty(fldTrim)){
		
		showAlert(message,fld); 
		
		return false;
		
	}//end of if
	
	return true;
}//end of validateMandatoryFlds
 
function selectNullvalChk(row,col){ 
	
	var len;
	if(!isEmpty(col)){
		len=$(row).find('select:eq(0)').find('option[value="'+col+'"]').length;
	}else{
		len=0;
	}
	if(len > 0){
		$(row).find('select:eq(0)').val(col);
	}else{
		$(row).find('select:eq(0)').val("");
	} 
	return;
}

function selectNullOrBlank(row,col){ 
	var len,coltext;
	if(!isEmpty(col)){
		len=row.find('option[value="' + col + '"]').length; 
	}else{
		len=0;
	}
	if(len > 0){
		row.val(col); 
	}else{
		row.val(""); 
	} 
	return;
}


function setUnavailableText(select,col){ 
	var len;
	if(!isEmpty(col)){
		len=select.find('option[value="' + col + '"]').length; 
	}else{
		len=0;
	}
	if(len > 0){
		select.val(col); 
	}else{
//		select.val(""); 
		select.append($('<option>', { value: col, text: col }));
		select.val(col);
	} 
	return;
}

function validateFocusFlds(modelId,fld,msg){
   
	 var screename=$("#hTxtScreenName").val();
	var fldTrim = $("#"+fld).val();
	
	if(isEmpty(fldTrim)){ // && $("#"+fld).is(":visible")
		
		switch(modelId){
			case "clientinformation":
			case "clientRegaddress":
			case "clientmailaddress":{
				$("#clientdets_li").trigger("click");
				break;
			}
			case"spouseinformation":
			case"spouseaddress":
			case"spousemailaddress":{
				$("#spousedets_li").trigger("click"); 
				break;
			}
			case "lifeInsdetstab":{
				 $("#lifeinsurance_li").trigger("click");
				 $("#li_lifeInsurance").trigger("click");
				 break;
			}
				
			
		}
		
		
		if((msg == Li_OWN)||(msg == Li_ASS) || (msg == Li_INS) || (msg == Li_POL)||
				(msg == Li_POLSTS) || (msg == Li_DATE) || (msg == Li_PLAN) || (msg == Li_MATDATE ) || (msg == Li_MATVALUE )) { 
			 
//			openDivForClient('lifeInsurce','lifeinscsecion','analysis_li','Life Insurance');
//			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").find("a").click(); 
//		    $("#sidebar-menu #analysis_li").find("ul li:eq(4)").addClass("sideMenuHighlight");
//		    $('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').click(); 	 
//		    $("#lifeinsurance_li").trigger("click");
		    
		}else if((msg == SELF_NAME) || (msg == SELF_NRIC) || (msg == SELF_ADVSTF)||
				(msg == SELF_DOB) || (msg == SELF_NATION) || (msg == SELF_HMEADDR) 
				|| (msg == SELF_HMEADDR2) || (msg == SELF_RPOSTAL )   
				|| (msg == SELF_RCNTRY) || (msg == SELF_MAILADDR )  
				|| (msg == SELF_MAILADDR2) || (msg == SELF_MPOSTAL ) 
				|| (msg == SELF_MCNTRY)  ) {
 	 
//			openDivForClient('particulars','clientsection','dataform_li',"Client's Particulars");  
//			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").click(); 
//			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").addClass("sideMenuHighlight");
			
//			$("#clientdets_li").trigger("click");
			    
			 
		} else if((msg == SPOUSE_NAME) || (msg == SPOUSE_NRIC) || (msg == SPOUSE_DOB)
				|| (msg == SPOUSE_NATION) || (msg == SPOUSE_HMEADDR)
				|| (msg == SPOUSE_HMEADDR2) || (msg == SPOUSE_RPOSTAL)
				|| (msg == SPOUSE_RCNTRY) || (msg == SPOUSE_MAILADDR)
				|| (msg == SPOUSE_MAILADDR2) || (msg == SPOUSE_MPOSTAL)
				|| (msg == SPOUSE_MCNTRY) ) {
			
//			openDivForClient('spousediv','spousesection','dataform_li',"Spouse's Particulars"); 
//			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
//			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").find("a").click();
			
//			$("#spousedets_li").trigger("click"); 
			 
		} else if((msg == TOAALYSFOR) || (msg == TOAPURPO)
				|| (msg == TOPLIFE) || (msg == TOPHL) || (msg == TOPAYSTYPES) || (msg == TOAALYSFORSELF)) { 
//			openDivForClient('typesofappln','typesofappsec','typesofAppln_li',"Types of Application");  
			
			 
		} else if((msg == HEALTHINS_RMKS)){
			
//			openDivForClient('lifeInsurce','lifeinscsecion','analysis_li','Life Insurance');
//			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").addClass("sideMenuHighlight");
//			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").find("a").click();
			
//			$("#lifeinsurance_li").trigger("click");		    
//			$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').click();
			
//			setTimeout(function() {$("#lifeInsurce").scrollTop(8000);}, 100);
			  
		}else if((msg == INT_NAME)||(msg == INT_NRIC)||(msg == INT_CONTACT)||
				(msg == INT_HOMEADDR)||(msg == INT_REL)){
//			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
//			$("#sidebar-menu #clientsdeclr_li").find("a").click();
			 
		} else if((msg == CHECK_PRODUCT)){
//			openDivForClient('adrecom','adrecomprodiv','advrecm_li','New Purchase & TopUp');
//			$("#sidebar-menu #advrecm_li").find("a").click();
			 
		}else if((msg == SEL_BENOWNER) || (msg == SEL_TPP) || (msg == SEL_PEP)){ 
//			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
//			$("#sidebar-menu #clientsdeclr_li").find("a").click();
			 
		} else if((msg == SWTCH_QUEST1) || (msg == SWTCH_QUEST1REMK) || (msg == SWTCH_QUEST2) ||
				(msg == SWTCH_QUEST3) || (msg == SWTCH_QUEST4)){ 
//		    openDivForClient('switchrep','adrecomswtcdiv','advrecm_li','Switching & Replacement');
//		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
//		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").find("a").click();
		    
		}else if((msg == REASONS_RECOM)){
			 
//			openDivForClient('reasons','brofrecomdiv','reasons_li','Basis & Rationale of Recommendations');
//			$("#sidebar-menu #reasons_li").find("a").click();
			 
			
		}else if((msg == DECLARATION)){ 
//			openDivForClient('decbycli','decbyclidiv','decbycli_li','Declaration');
//			$("#sidebar-menu #decbycli_li").find("a").click();
			 
		}else if((msg == SUP_REASON) || (msg == SUP_DECLARATION)){ 
//			openDivForClient('suprvsr','suprvsrdiv','supervisor_li',"Supervisor's Review");
//			$("#sidebar-menu #supervisor_li").find("a").click();
			 
		}else if((screename == "cpfInterestRate")){
			
//			 $("#sidebar-menu ul li[id='masteraccintrates']").parent().removeClass("sideMenuHighlight nv");
//			 $("#sidebar-menu ul li[id='masteraccintrates']").addClass("sideMenuHighlight nv"); 
			 
		}else if((screename == "cpfAllocation")){
			
//			 $("#sidebar-menu ul li[id='masteraccallorates']").parent().removeClass("sideMenuHighlight nv");
//			 $("#sidebar-menu ul li[id='masteraccallorates']").addClass("sideMenuHighlight nv");
			 
		}else if((screename == "cpfContribution")){
			
//				$("#sidebar-menu ul li[id='mastercontri']").parent().removeClass("sideMenuHighlight nv");
//			   $("#sidebar-menu ul li[id='mastercontri']").addClass("sideMenuHighlight nv");
			    
		}else if((screename == "cpfAccType")){
//			 $("#sidebar-menu ul li[id='masteracctypes']").parent().removeClass("sideMenuHighlight nv");
//			   $("#sidebar-menu ul li[id='masteracctypes']").addClass("sideMenuHighlight nv");  
			 
		}else if((screename == "quotes")){
//			 $("#sidebar-menu ul li[id='masterquotes']").parent().addClass("sideMenuHighlight nv"); 
//			 $("#"+fld).focus();
		}
		
//		$("#"+fld).addClass("mandatoryFillFlds");		
//		showErrorTooltip(modelId,fld,msg);
		//alert(msg);
		$("#"+fld).focus();
//		$("#"+fld).qtip('show');
		return false;
		
	}//end of if 
	 
	

	
	
	return true;
}//end of validateMandatoryFlds


 
function validateFocusDhtmlFlds(dhtmlcol,msg,screen){
	
	var mode= $(dhtmlcol).parents("tr").find("td:first").find('input:eq(0)').val();
	if(mode != "D"){
		
		var fldTrim = dhtmlcol.val();
		
		if(isEmpty(fldTrim)){
			
			if((screen == SCREEN_ATTACH)) {

				$("#upload_li").trigger("click");
				
			}else if(screen == SCREEN_OTHAREA){
				
				$("#financialinfo_li").trigger("click");
				$("#otherconcern_li").trigger("click");
				
			}else if( screen == SCREEN_CPFADDDED){
				
				$("#financialinfo_li").trigger("click");
				$("#cpf_li").trigger("click");
				$('html, body').animate({ scrollTop: $("#CPF_APD").offset().top  }, 2000);
				
				
			}else if( screen == SCREEN_ASSET ){
				
				$("#financialinfo_li").trigger("click");
				$("#cashasstmain_li").trigger("click");
				$("#cashotherasset_li").trigger("click");
				$('html, body').animate({ scrollTop: $("#assets").offset().top  }, 2000);
				
			}else if(screen == SCREEN_VEHICLE){
				
				$("#financialinfo_li").trigger("click");
				$("#cashasstmain_li").trigger("click");
				$("#cashotherasset_li").trigger("click");
				$('html, body').animate({ scrollTop: $("#assets").offset().top  }, 2000);
				
			}else if( screen == SCREEN_CHILD){
				
				$("#particulars_li").trigger("click");			
				$("#childdets_li").trigger("click");
				
			}else if( screen == SCREEN_FINGOAL ){
				
				$("#fingoals_li").trigger("click");
				
			} else if  (screen == SCREEN_PROP){
				
				$("#financialinfo_li").trigger("click");
				$("#property_li").trigger("click");
				
			} else if(screen == SCREEN_RETIREMENT){
				
				
				$("#financialinfo_li").trigger("click");
				$("#retirement_li").trigger("click");
				
			}   else if(screen == SCREEN_RETIREMENT){
				
				
				$("#financialinfo_li").trigger("click");
				$("#retirement_li").trigger("click");
				
			}   else if ( screen == SCREEN_DEPNT) {
				
				$("#financialinfo_li").trigger("click");
				$("#dependantdets_li").trigger("click");
				
			} else if ( screen == SCREEN_INVESTMENT ){
				
				$("#financialinfo_li").trigger("click");
				$("#investment_li").trigger("click");
				
				
			}else if ( screen == SCREEN_SRS){
				
				$("#financialinfo_li").trigger("click");
				$("#srssummary_li").trigger("click");
				
			}else if ( screen == SCREEN_LIFEPLAN){
//				$("#financialinfo_li").trigger("click");
//				$("#lifeinsurance_li").trigger("click");
				$("#lifeInsNavTabsDets").find("li[id=li_plandetails]").trigger("click");
			}
			  
			dhtmlcol.addClass("mandatoryFillFlds");
			
			dhtmlcol.focus(); 
			dhtmlcol.isDisabled = true;
			dhtmlcol.qtip({
			 		content: {text : msg}, 
			         style: {
			             classes: 'qtip-red qtip-rounded qtip-shadow'
			         }, position: {
			             my: 'top left',   
			             at: 'bottom left', 
			             viewport: $(window),  
			         }  
			     });
			
			 
			dhtmlcol.qtip('show');		 
//			dhtmlcol.qtip('show');
			
			/*Error Alert Remove while keyin*/
			dhtmlcol.on("change",function(){
				removeTooltip($(this));
			}); 
			
			if(dhtmlcol.hasClass("mandatoryFillFlds")){
				return false;
			}
			
		}//end of if 
		
		
	}
	
	
	 
	return true;
	
}
function validateFocusRDFlds(modelId,fld,msg){
	   
	var fldTrim = $("#"+fld).val().trim();
	
	if(!($("#"+fld).is(":disabled"))){
	if(isEmpty(fldTrim)){
		
		if(!(modelId == 'retmandatoryDialog')){
		if((msg == RETSCREEN_INTSLFAGE) || (msg == RETSCREEN_INTSPSAGE) || (msg == RETSCREEN_RETAGEBASE)||
				(msg == RETSCREEN_YRSTORET) || (msg == RETSCREEN_CORSLFAGE) || (msg == RETSCREEN_CORSPSAGE) 
				|| (msg == RETSCREEN_PROSLFAGE) || (msg == RETSCREEN_PROSPSAGE 
						|| (msg == RETSCREEN_PROSLFLVYRRET) || (msg == RETSCREEN_PROSPSLVYRRET)
					|| (msg == RETSCREEN_PROFAMLVYRRET) || (msg == RETSCREEN_ROISLF)
					|| (msg == RETSCREEN_ROISPS) || (msg == RETSCREEN_ROIFAM)
					|| (msg == RETSCREEN_LVYRSLF) || (msg == RETSCREEN_LVYRSPS)
					|| (msg == RETSCREEN_LVYRFAM))) { 
			 
			
			$("button[class=close]").click(); 
//			openDivForClient('retireplan','retireplandiv','analysis_li','Retirement Planning');  
			$("#sidebar-menu #analysis_li").find("ul li:eq(3)").addClass("sideMenuHighlight");
			$("#sidebar-menu #analysis_li").find("ul li:eq(3)").find("a").click();
		setTimeout(function() {
//			$("#retireplan").scrollTop(0);
			$("#"+fld).focus();
		}, 100);
			 
		} 
		}
 
		 
		$("#"+fld).addClass("mandatoryFillFlds");
		$("#"+fld).focus();
		showErrorRDTooltip(modelId,fld,msg); 
		$("#"+fld).qtip('show');
		return false;
		
	}//end of if 
	}
	return true;
}//end of validateMandatoryFlds
 
function validateFocusDhtmlFldsWA(dlg,dhtmlcol,msg){
	
	var mode_r = $(dhtmlcol).closest("tr").find("td:first").find('input:eq(0)').val();
	
	if(mode_r  != "D"){
		
		
		var fldTrim = dhtmlcol.val();
		if(isEmpty(fldTrim)){  
			dhtmlcol.addClass("mandatoryFillFlds"); 
			dhtmlcol.focus(); 
			dhtmlcol.isDisabled = true;
			dhtmlcol.qtip({
			 		content: {text : msg}, 
			         style: {
			             classes: 'qtip-red qtip-rounded qtip-shadow'
			         }, position: {
			             my: 'top left',   
			             at: 'bottom left', 
			             viewport: $(window), 
			             target: dhtmlcol,
			             container:$("#"+dlg),
			         }  
			     });
			
			 
			dhtmlcol.qtip('show'); 
			 
			 
			dhtmlcol.qtip('show');
			/*Error Alert Remove while keyin*/
			dhtmlcol.on("change",function(){
				removeTooltip($(this));
			}); 
			
			if(dhtmlcol.hasClass("mandatoryFillFlds")){
				return false;
			}
			
		}//end of if 
		
	}
	
	
	 
	return true;
	
}
function validateCntry(selCntryId,cityFldId,stateFldId){
	
	var selCntryObj = document.getElementById(selCntryId);
	
	if(!isEmpty(selCntryObj.value)){
		
		if(selCntryObj.value == CNTRY_SINGAPORE_VAL){
			
		  document.getElementById(cityFldId).value = '';
		  document.getElementById(cityFldId).readOnly = true;
		  document.getElementById(cityFldId).className = 'readOnlyText';
		  
		  document.getElementById(stateFldId).value = '';
		  document.getElementById(stateFldId).readOnly = true;
		  document.getElementById(stateFldId).className = 'readOnlyText';
		  
		}else{
			
			 document.getElementById(cityFldId).readOnly = false;
			  document.getElementById(cityFldId).className = 'editableCls';
			  
			  document.getElementById(stateFldId).readOnly = false;
			  document.getElementById(stateFldId).className = 'editableCls';
			  
		}//end of if
		
	}//end of if
}//end of validateCntry


function trimStr(value){
	return value.replace(/(^\s+|\s+$)/g, '');
}//end of trimStr 
	


function openURLInNewTab(webSiteObjId){
	
	var webSiteObj = document.getElementById(webSiteObjId);
	var webSiteFldVal = webSiteObj.value;
	
	if(!validateMandatoryFlds(webSiteObj, MASTR_DIST_WEB)) return;
	
	if(webSiteFldVal.indexOf('http://') == -1)webSiteFldVal = 'http://'+webSiteFldVal;
	
	window.open(webSiteFldVal,'_blank');
	window.focus();
	
}//end of openURLInNewTab



//Function for making component for Calendar
function getCalendar(event,txtFldId) {
	
	var dateFld = document.getElementById(txtFldId) || txtFldId;
	
//	if(tblElem){
//		scwShow(tblElem, event);	
//	}else{
	if(dateFld)
		scwShow(dateFld, event);
//	}
	 
	
} // End Function (getCalendar)


function getCalendarInTbl(cal, event) {
	
	var code;
	if (event.keyCode)
		code = event.keyCode;
	else if (event.which)
		code = event.which;

	if (code != 9) { // To escape the tab key in firefox.
		var parentCel = cal.parentNode;

		var hDateValue = parentCel.childNodes[1].value;
        var tblElem = parentCel.childNodes[0];
        
		if (hDateValue == INS_MODE) {
			getCalendar(event,tblElem);
		} else if (hDateValue == UPD_MODE) {
			getCalendar(event,tblElem);
		} else {
			return false;
		}
		cal.focus();
	}
}// End function getCalendarInTbl






/** Function to Check the Max Length for Whole Numbers and Decimal Values*/

function chkDecimal(cellObj,maxlen,decilen)	{
	
	//alert(decilen);	
	
	
	if(!isEmpty(cellObj.value))		{
		var cellValue=cellObj.value;
		var cellValueLen=cellValue.length;
		var precisionLen=maxlen-decilen;
		
		if(cellValue.indexOf(".")== -1)	{			
			if(cellValueLen>precisionLen)	{
				cellObj.value=cellObj.value.substring(0,precisionLen);
				return false;
			}
			 
		}
		
		else if(cellValue.indexOf(".")!=-1)		{			
			var splitDeci= cellValue.split(".");
			var splitInteger=splitDeci[0];
			var splitDecimal=splitDeci[1];
			var splitIntLen= splitInteger.length;
			var splitDeciLen= splitDecimal.length;
			
					
			if(splitIntLen>precisionLen)		{				
				cellObj.value=splitInteger.substring(0, precisionLen) + "."+splitDeci[1];
				return false;
			}
			
			if(splitDeciLen > decilen){ //changed the == symbol to > symbol on 11-10-2012.
				var dec;
				var temp = cellObj.value.split(".");
//				alert(temp);
				dec =  temp[1].substring(0,(decilen-1));
//				alert(precisionLen+","+temp[0].length+","+splitIntLen+","+temp[0]+"."+dec);
				cellObj.value="";
				if((temp[0].length > (precisionLen))){
//					alert("1111");
					cellObj.value=temp[0]+"."+dec;
				}else if((temp[0].length <= (precisionLen))){
//					alert("222");
					cellObj.value=splitInteger.substring(0, precisionLen)+"."+dec;
				}
				//cellObj.value=cellValue.substring(0, (decilen-1));
				return false;
			}
		}
	}
	
	return true;
}//end chkDecimal


function blockNonNumbers(obj, e, allowDecimal, allowNegative)
{
	var key = '';
	var isCtrl = false;
	var keychar;
	var reg;
		
	if(window.event) {
		key = e.keyCode;
		isCtrl = window.event.ctrlKey;
	}
	else if(e.which) {
		key = e.which;
		isCtrl = e.ctrlKey;
	}
	
	if (isNaN(key)) return true;
	
	keychar = String.fromCharCode(key);
	
	// check for backspace or delete, or if Ctrl was pressed
	if (key == 8 || isCtrl)
	{
		return true;
	}

	reg = /\d/;
	var isFirstN = allowNegative ? keychar == '-' && obj.value.indexOf('-') == -1 : false;
	var isFirstD = allowDecimal ? keychar == '.' && obj.value.indexOf('.') == -1 : false;
	
	return isFirstN || isFirstD || reg.test(keychar);
}//end of blockNonNumbers


function tblRowHover(tblId){
	
	
	$('#'+tblId+' tr').mouseover(function() {
		$(this).find('td').each (function() {
			//$(this).find('input').css("background-color","transparent");				
			}); 
	});	
	
	$('#'+tblId+' tr').mouseout(function() {
		$(this).find('td').each (function() {
			//$(this).find('input').css("background-color","transparent");				
			}); 
	});	
	
	$('#'+tblId+' tr').each(function() {
		$(this).dblclick(function(){
			var rad = $(this).find("td").eq(1).find("input").eq(0);
//			$(rad).prop("checked", true);
			
//			populateSearchDetails($(rad));
		}); 
	});
	
	 
	
}	


function singleRecordView(tableId){
	
	var table = document.getElementById(tableId);	
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;
	var currow = null;
	var svflag=false;
	
	if(rowCount<1){
		applyToastrAlert("No rows to single record view!");
		return;
	}
	
	for(var sv=0;sv<rowCount;sv++){
		
		var row = table.rows[sv];
		var chkbox = row.cells[2].childNodes[0];

		if(null != chkbox && true == chkbox.checked) {
			svflag = true;
			currow = row;
		}
	}
	
	if(!svflag){
		applyToastrAlert("Select row for single record view!");
		return;
	}	
	 
		
	var headertbl = document.getElementById(tableId+"headerTbl").childNodes[0].childNodes[0];
	var headerrow = headertbl.tHead;
	var totalcol = currow.cells.length;
	var html = "<table class='pbsinglerowTable' id='pbsinglerowtbl'>";
	
	for(var cel=3;cel<totalcol;cel++){
		
		var cssclass = headerrow.rows[0].cells[cel].className;
		var colHead = headerrow.rows[0].cells[cel].innerHTML ;
		var colContent = currow.cells[cel].innerHTML;
		
		colContent = colContent.replace(/pbEditTableText/g, 'pbsinglerowEditTableText');
		colContent = colContent.replace(/pbSelect/g, 'pbsinglerowSelect');
		
		html += "<tr class='pbsinglerowborder'>" +
					"<td class='"+cssclass+"' align='right'>"+colHead+"</td> " +
					"<td class='ui-widget-content'>"+ colContent + "</td>" +
				"</tr>";
	}
	
	html += "</table>";	
	
	singleRecordViewDlg(html,currow);
	
	//return html;
}


 


function openDivForClient(parentid,chldid,listid,titleName){

//	alert(parentid+"->"+chldid+"->"+listid+"->");

	show(parentid);	
	showchild(chldid);
	$("#sidebar-menu").find("ul li").removeClass("sideMenuHighlight");
	if(titleName!=""){
	$("#menuTitles").html("");
	$("#menuTitles").html(titleName);
	$("#menuTitles").css("display","none"); 
	$("#fipaBreadcrumb").html(""); 
	if(!(titleName == "Profile Summary")){
	$("#fipaBreadcrumb").append($('#sidebar-menu #typesofAppln_li').get(0).innerHTML); 
	}else{
		$("#fipaBreadcrumb").append($('#sidebar-menu #profile_li').get(0).innerHTML);  
	} 
	$("#fipaBreadcrumb").append("<a></a>");
	$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
	 
	}

//	alert($('#sidebar-menu #'+listid+'  ul').get(0))
	$('#sidebar-menu #'+listid+'  ul').css('display','none'); 
	$('#sidebar-menu #'+listid).addClass('active');  

	if ($('#sidebar-menu #'+listid).is('.active')) {

		$('#sidebar-menu #'+listid).is(':focus');
		$('#sidebar-menu li ul').slideUp();
		$('#sidebar-menu li ul').removeClass('vn');
		$('#sidebar-menu #'+listid).addClass('nv');   
		$('#sidebar-menu li').removeClass('active');
		$('#sidebar-menu #'+listid).addClass('active');  
		$('#sidebar-menu #'+listid+'  ul').css('display','block');  

	} else { 

		$(this).removeClass('active');
		$('ul', this).slideUp();
		$(this).removeClass('nv');
		$(this).addClass('vn');
	}

	

}



function valiBussAtr(val,elmid){
	  
	 
	if(!isEmpty(val.value)){
		
		if(val.value == 'Others'){
		showAlert("Please Specify Details!",elmid); 
		elmid.removeAttribute('readonly');
		}
		
	}
}

function showOthersDets(elem,elemtoshow,elemtofocus){
	 
	
	if(elem.checked){
		document.getElementById(elemtoshow).style.display="inline";
		document.getElementById(elemtofocus).readOnly=false;
		showAlert("Please Specify Details!",document.getElementById(elemtofocus)); 
	}else{
		document.getElementById(elemtofocus).value="";
		document.getElementById(elemtofocus).readOnly=true;
		document.getElementById(elemtoshow).style.display="none";
		$(elemtoshow).hide();
	}	
}

function hideOthersDets(elem,elemtoshow,elemtofocus){
	
		document.getElementById(elemtofocus).value="";
		document.getElementById(elemtofocus).readOnly=true;
		document.getElementById(elemtoshow).style.display="none";
		$(elemtoshow).hide();		
}

function chkOthrDets(chkval,elmid){
	 
	if(chkval.checked == true){ 
		showAlert("Please Specify Details!",elmid); 
		elmid.removeAttribute('readonly');
		
	}
	 
}

function UnChkSelectAll(valChk){
	var elmchkd = document.getElementById("chkselectall");
	if(!isEmpty(valChk.value)){ 
		 if(elmchkd.checked  == true){
			 elmchkd.checked = false; 
		 } 
	}
}


 
function chgRegAddrToMailAdd(elmid,chgid,checkedVal){  
	
	var chkspsReg=$("#dfSpsRegmailaddrSame").is(":checked");
	var chkspsMail=$("#dfSpsMailaddrAsSelf").is(":checked"); 
	var chkspsSameReg=$("#dfSpsRegmailaddrSame").is(":checked");
	
	
	if(!($("#"+checkedVal).is(":checked"))){
		if(( !chkspsReg  && !chkspsMail)){
	if(!(isEmpty(elmid.value))){   
			$("#"+chgid).val($(elmid).val());
	}else{
		document.getElementById(chgid).value = "";
		$("#"+chgid).val("");
	}
		}   
	}	
}


function chgRegAddr1(elmid,chgid,checkedVal){  
	
	var chkspsReg=$("#dfSpsRegmailaddrSame").is(":checked");
	var chkspsMail=$("#dfSpsMailaddrAsSelf").is(":checked"); 
	var chkspsSameReg=$("#dfSpsRegmailaddrSame").is(":checked");
	
	
	if(!($("#"+checkedVal).is(":checked"))){
		 
	if(!(isEmpty(elmid.value))){   
			$("#"+chgid).val($(elmid).val());
	}else{
		document.getElementById(chgid).value = "";
		$("#"+chgid).val("");
	}
		}   
	 	
}

function chkSpsReg(curElm,RegElm,MailElm){
	var chkspsSameReg=$("#dfSpsRegmailaddrSame").is(":checked");
	var chkspsMail=$("#dfSpsMailaddrAsSelf").is(":checked"); 
	
	var elmId=$(curElm).val();
	
	if(!(isEmpty(elmId))){
		if(chkspsSameReg){
			$("#"+RegElm).val(elmId);
		}
		if(chkspsMail){
			$("#"+MailElm).val(elmId);
		}
	}
}



function chgIntrptrPrsnt(chkval){
	
	var objval=chkval.value;
	if(!isEmpty(objval)){ 
		if(objval == "Y"){
			showAlert(INTRPER_KEYIN,amlIntprtName);
			InterpreterKeyin();
			 
		}else if(objval == "N" || objval == " "){
			 InterpreterKeyout();
		}  
		
	}
	
}

  


function chgeSignature(chgeId,elmId){ 
	if(!(isEmpty(chgeId))){ 
		var totSignFlds = elmId.length; 
		for(var i=0;i<totSignFlds;i++){
			elmId[i].value=chgeId.value;
		}
	 } 
}

function chgeClntSpsText(chgeId,elmId,nameId){
	

	if(!(isEmpty(chgeId))){ 
		var totSignFlds = elmId.length; 
		for(var i=0;i<totSignFlds;i++){
			elmId[i].value=chgeId.value;
		}
		
		nameId.value = chgeId.value;
	 } 
}
 


function creatSubmtDynaReportPDF(href){

	var lex1 = href.split('?');
	var action= lex1[0];
	var qstr = lex1[1];
	var obj = " ";

	var formId = document.getElementById("hiddenForm");
	var divId = document.getElementById("dynamicFormDiv");

	if(formId){
		if(divId)
			formId.removeChild(divId);
	}

	var newdiv = document.createElement('div');
	newdiv.id = "dynamicFormDiv";

	if(qstr != null) {
		var params = qstr.split('&');
		for(var p=0;p< params.length;p++){
			var keyValue = params[p].split('=');
			var name = keyValue[0];
			var value = keyValue[1];

			if(value.indexOf("\'") != -1)
				value = value.replace("\'","\'");

			obj += '<input type="hidden" name="'+name+'" value="'+value+'"/>';

		}
	}
	newdiv.innerHTML = obj;

	if(document.getElementById("hiddenForm"))
			document.getElementById("hiddenForm").appendChild(newdiv);

	document.forms["hiddenForm"].action=action;
	document.forms["hiddenForm"].method="POST";

	window.open('', 'TheWindowBIRT',"channelMode,toolbar=no,scrollbars=no,location=no,resizable =yes");
	document.getElementById("hiddenForm").submit();

}//end creatSubmtDynaReport

 

function fipaTooltip(obj){ 
	var objval;  
	
	 if($(obj).is("select")){ 
		 objval= $(obj).find("option:selected").text();
     }else {
    	 objval= $(obj).val(); 
     }
	 
	$(obj).isDisabled = true;
      $(obj).qtip({ 
         content: {
        	 text:objval,
               title: { 
                  button: false
               }  
         }, 
         show: {solo: true, ready: false, when: 'mouseover'},
          
         hide: {
             event: 'mouseout'
           },
         style: {
                classes: 'qtip-green qtip-rounded qtip-shadow'
            },
            position: {
                my: 'top left',   
                at: 'bottom left', 
                viewport: $(window),
                target: $(obj)  
            }    
      });
      
    
      
       
      if(!isEmpty(objval) && !(objval == "--SELECT--")){ 
    	  $(obj).qtip('show'); 
      }else if(isEmpty(objval)){ 
    	  	$(obj).qtip('disable'); 
      }else{
    		$(obj).qtip('disable'); 
      }	  
      
      
	     
	     
}




//to remove backspace option 
$(function(){
    /*
     * this swallows backspace keys on any non-input element.
     * stops backspace -> back
     */
    var rx = /INPUT|SELECT|TEXTAREA/i;

    $(document).bind("keydown keypress", function(e){
        if( e.which == 8 ){ // 8 == backspace
            if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
                e.preventDefault();
            }
        }
    });
});

function showLoader(){   
	
	
//	$(".loading").show();
	$('.loading').css("visibility", "visible");
//	$("#fipaTextLoader").position({my: "center",at: "center",of: window});  
//	 $("#layoutfooter").css("display","none");
 
}

function hideLoader(){
	
//	setTimeout(function(){
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
//		$("body").click();
//	},80); 	
	
//	$(".loading").hide();
	$('.loading').css("visibility", "hidden");
//	$("#layoutfooter").css("display","inline-block"); 

}//end of hideLoader

function hideLoaderOnly(){
	
 	console.log("hideLoaderOnly");
	
 	$('.loading').css("visibility", "hidden");
//	$(".loading").hide();
//	$("#layoutfooter").css("display","inline-block"); 

}//end of hideLoader


function focusId(NRIC_id,focusId){
  if(!isEmpty(NRIC_id.value)){
	 focusId.focus();
  }
}
 
function FVCalculation_temp2(id , rate, nper, pmtid, pv, type) {
 	 
	 	var rate_val = 0;
		var pmt_val=0;
		var nper_val=0;
	    var pv_val=0;
	    var type_val=0;
	    
		
		if(typeof rate != "object" ){
			rate_val = 6
//				rate;
		 }else{
			rate_val = 6
//				rate.value;
		 }
		 
		if(typeof pmtid != "object" ){
			pmt_val= pmtid;
		 }else{
			
			pmt_val= pmtid.value;
		 }
		
		if(typeof nper != "object" ){
			nper_val = nper;
		 }else{
			 nper_val = nper.value;
		 }
		
		if(pv  != "object" ){
			pv_val = -(pv.value);
		 }else{
			 
			 pv_val = -(pv);
		 }
		
		if(type  != "undefined" ){
			type_val = type; 
		 }else{
			 type_val = type.value;
		 }
		
		 var pow = Math.pow(1 + rate_val, nper_val), fv;
		 
		 
//		 alert("FV"+"rate"+rate_val+"||nper"+nper_val+"||pmtid"+pmt_val+"||pv"+pv_val+"||type"+type_val+"pow"+pow);

	if (rate_val > 0) {
		fv = (pmt_val * (1 + rate_val * type_val) * (1 - pow) / rate_val) - pv_val * pow;
		 
	} else {
		fv = -1 * (pv_val + pmt_val * nper_val);
		
	}
	 
	 id.value = fv;
	 return (fv);
}
 
 
 function chgeBenTppPepFlg(elem,eledivEnable,elemtofocus){  
	 
	 if(elem.checked){
		 if(!(stafftype == STAFFTYPE_STAFF)){
	 if(eledivEnable == "beneficialOwnerDiv"){
		if(elem.value == 'Y'){  
			$("#beneficialOwnerDiv :input").prop('disabled', false); 
			$('#beneficialOwnerDiv :input').removeClass("disabledCursor");
			$("#"+elemtofocus).focus(); 
			
		}else if(elem.value == 'N'){
			 $("#beneficialOwnerDiv :input").prop('disabled', true);  
			 $('#beneficialOwnerDiv :input').addClass("disabledCursor");
		}	
	}else if(eledivEnable == "PolExpPersDiv"){
		if(elem.value == 'Y'){  
			$("#PolExpPersDiv :input").prop('disabled', false); 
			$('#PolExpPersDiv :input').removeClass("disabledCursor");
			$("#"+elemtofocus).focus(); 
			
		}else  if(elem.value == 'N'){
			 $("#PolExpPersDiv :input").prop('disabled', true);  
			 $('#PolExpPersDiv :input').addClass("disabledCursor");
		}
		
	}else if(eledivEnable == "ThirdPartyPayerDiv"){
		if(elem.value == 'Y'){  
			$("#ThirdPartyPayerDiv :input").prop('disabled', false); 
			$('#ThirdPartyPayerDiv :input').removeClass("disabledCursor");
			$("#"+elemtofocus).focus(); 
			
		}else  if(elem.value == 'N'){
			 $("#ThirdPartyPayerDiv :input").prop('disabled', true); 
			 $('#ThirdPartyPayerDiv :input').addClass("disabledCursor");
		}
	}
		 }
	 }
 }
 
function fillLifeInsUtIlpProdt(elmid){
	 
	var elementVal = $(elmid).attr("data-attr");  
	 if(!(stafftype == STAFFTYPE_STAFF)){
		 
	if(!isEmpty(elementVal)){ 
		if(elementVal == 'LS' || elementVal == 'LF'){
		 
			$("#lifeInsurancePlanDets").css('display','block');
			$("#SwrepLifeInsPlanDets").css('display','block');
		}
		
		if(elementVal == 'AS' || elementVal == 'AF'){
	 
			$("#UtIlpFundDets").css('display','block');
			$("#SwrepUtIlpFundDets").css('display','block');
		}
		
	}
	 }
}

/*
function diffAddrFunc(openFor,openFlg){
 
	if(openFor == 'Self'){
	
		if(openFlg){ 
			
			$('#dfSelfMailaddr2').prop('readonly', true);
			$('#dfSelfMailaddr2').addClass("readOlyCursor");
			$('#dfSelfMailpostal').prop('readonly', true);
			$('#dfSelfMailpostal').addClass("readOlyCursor");
			$('#dfSelfMailcntry').prop('disabled', true);
			$('#dfSelfMailcntry').addClass("disabledCursor");
			$('#dfSelfAddrreason').prop('disabled', true);
			$('#dfSelfAddrreason').addClass("disabledCursor");
		}else  {
			$('#dfSelfMailaddr').prop('readonly', false);
			$('#dfSelfMailaddr').removeClass("readOlyCursor");
			$('#dfSelfMailaddr2').prop('readonly', false);
			$('#dfSelfMailaddr2').removeClass("readOlyCursor");
			$('#dfSelfMailpostal').prop('readonly', false);
			$('#dfSelfMailpostal').removeClass("readOlyCursor");
			$('#dfSelfMailcntry').prop('disabled', false);
			$('#dfSelfMailcntry').removeClass("disabledCursor");
			$('#dfSelfAddrreason').prop('disabled', false);
			$('#dfSelfAddrreason').removeClass("disabledCursor");
		}
	} 
	 
	if(openFor == 'Spouse'){
		if(openFlg){
			$('#dfSpsMailaddr').prop('readonly', true);
			$('#dfSpsMailaddr').addClass("readOlyCursor");
			$('#dfSpsMailaddr2').prop('readonly',true);
			$('#dfSpsMailaddr2').addClass("readOlyCursor");
			$('#dfSpsMailpostal').prop('readonly', true);
			$('#dfSpsMailpostal').addClass("readOlyCursor");
			$('#dfSpsMailcntry').prop('disabled', true);
			$('#dfSpsMailcntry').addClass("disabledCursor");
			$('#dfSpsAddrreason').prop('disabled', true);
			$('#dfSpsAddrreason').addClass("disabledCursor");
		}else{
			$('#dfSpsMailaddr').prop('readonly', false);
			$('#dfSpsMailaddr').removeClass("readOlyCursor");
			$('#dfSpsMailaddr2').prop('readonly',false);
			$('#dfSpsMailaddr2').removeClass("readOlyCursor");
			$('#dfSpsMailpostal').prop('readonly', false);
			$('#dfSpsMailpostal').removeClass("readOlyCursor");
			$('#dfSpsMailcntry').prop('disabled', false);
			$('#dfSpsMailcntry').removeClass("disabledCursor");
			$('#dfSpsAddrreason').prop('disabled', false);
			$('#dfSpsAddrreason').removeClass("disabledCursor");
		}
		
	}
//	}
	
}

*/

function mailAddress(prefer,options,cursor){
	var txtFldInputsAll;
	if(prefer == 'Slf'){
		txtFldInputsAll = ["dfSelfMailaddr","dfSelfMailaddr2",
	                          "dfSelfMailpostal","dfSelfMailcntry",
	                          "dfSelfAddrreason"];  
	}if(prefer == 'Sps'){
		txtFldInputsAll= ["dfSpsMailaddr","dfSpsMailaddr2",
	                          "dfSpsMailpostal","dfSpsMailcntry",
	                          "dfSpsAddrreason"];  
	}
	
	
	$.each( txtFldInputsAll, function( index, value ) {  
		 $("#"+value).prop('disabled', options);  
		 if(cursor == 'ad'){
			 $("#"+value).addClass("readOlyCursor");
		 }
		 if(cursor == 'rmv'){
			 $("#"+value).removeClass("readOlyCursor");
		 }
	}); 
	
}

function regAddress(prefer,options,cursor){
	var txtFldInputsAll;
	if(prefer == 'Slf'){
		txtFldInputsAll = ["dfSelfMailaddr","dfSelfMailaddr2",
	                          "dfSelfMailpostal","dfSelfMailcntry",
	                          "dfSelfAddrreason"];  
	}
	if(prefer == 'Spse'){
		txtFldInputsAll= ["dfSpsMailaddr","dfSpsMailaddr2",
	                          "dfSpsMailpostal","dfSpsMailcntry",
	                          "dfSpsAddrreason"];  
	}
	
	
	$.each( txtFldInputsAll, function( index, value ) {  
		 $("#"+value).prop('disabled', options);  
		 if(cursor == 'ad'){
			 $("#"+value).addClass("readOlyCursor");
		 }
		 if(cursor == 'rmv'){
			 $("#"+value).removeClass("readOlyCursor");
		 }
	}); 
	
}


//validate All Screen before checked
function mandateCdAgrFlg(){
	var totchkCdAgrFlg = document.getElementsByName("cdAgreeFlg").length;  	
	var valiMsg;
 (!validateDetails())? valiMsg="Incomplete" : valiMsg="Completed"  ;   
	 if(valiMsg=="Incomplete"){ 
	 $( "#declrByClient_Dialog" ).dialog({
		 create: function( event, ui ) {
		      var dialog = $(this).closest(".ui-dialog"); 
		      dialog.find(".ui-dialog-titlebar-close")
	            .appendTo(dialog)
	            .css({
	              position: "absolute",
	              top: 0,
	              right: 0,
	              margin: "3px"
	            });
		      dialog.find(".ui-dialog-titlebar").remove();
		  },
	        resizable: false,
	        height: "auto",
	        width: "auto",
	        modal: true,
	        buttons: {
	          " OK ": function() {
	        	 
	        	 
	        	  
	 			  $( this ).dialog( "close" ); 
	        	  
	        	  if(!validateDetails()) {
	        		  document.getElementsByName("cdAgreeFlg")[0].checked=false;
		 			  document.getElementsByName("cdAgreeFlg")[1].checked=false;
	        		  return false;
	        	  }
	        	 
	          }, 
	        }
	      });//end dialog 
	 		return false;
	 } 
	 
	return true;
	   
}

function finalDeclarationDialog(functnToProceed){
	 $( "#RepresentDeclar_Dialog" ).dialog({
		 create: function( event, ui ) {
		      var dialog = $(this).closest(".ui-dialog"); 
		      dialog.find(".ui-dialog-titlebar-close")
	            .appendTo(dialog)
	            .css({
	              position: "absolute",
	              top: 0,
	              right: 0,
	              margin: "3px"
	            });
		      dialog.find(".ui-dialog-titlebar").remove();
		  },
	        resizable: false,
	        height: "auto",
	        width: "auto",
	        modal: true,
	        buttons: {
	          " OK ": function() { 
	        	  
	        	  showLoader();
	        	  fipaForm.action = functnToProceed;
	      		  fipaForm.submit();
	        	  $( this ).dialog( "close" ); 
	          }, 
	        }
	      });//end dialog 
	 hideLoader();
}


function removeInfoError(tblid){ 
	 $("#"+tblid+"_info").hide(); 
}
function showInfoError(tblid){
	 
	 $("#"+tblid+"_info").show(); 
}


function treeConfig(sideMenuId){

	if(sideMenuId=='profilepage' || sideMenuId=='searchpage'){ 
		clearDataTable('ClientSearchTable');
		
		$("#fipaForm #searchpage :input").prop("disabled", false);  
    	$("#fipaForm #profilepage :input").prop("disabled", false);  
    	
    
    	
		if(sideMenuId=='profilepage'){
			
		$('.accordHeaderDiv').css("display","block");  
		}else if(sideMenuId=='searchpage'){
			$('.accordHeaderDiv').css("display","none");
		}
		$('.footdiv').css("display","none");  
	}else{ 
		$('.accordHeaderDiv').css("display","block");  
		$('.footdiv').css("display","block");   
	}
	
	
	 
	if(sideMenuId=='searchpage'){
//		clearDataTable('ClientSearchTable');
		$("#fipaForm #txtFldSrchCustName").prop("disabled", false); 
		$("#fipaForm #txtFldSrchCustNric").prop("disabled", false); 
		$("#fipaForm #txtFldSrchCustName").prop("readonly", false); 
		$("#fipaForm #txtFldSrchCustNric").prop("readonly", false);
		$("#fipaForm #selAdviserSrch").prop("disabled", false); 
		$("#fipaForm #btnSrchProfile").prop("disabled", false); 
	}
	
	if(sideMenuId =='clntreport'){
		$('.footerMenus').css("display","none"); 
		$('.reportPrintdiv').css("display","block"); 
		
	}else{
		$('.footerMenus').css("display","block"); 
		$('.reportPrintdiv').css("display","none"); 
	}
	
	
	if(!(stafftype == 'ADVISER')){
		$('.footdiv').css("display","none");  
	  if(sideMenuId =='mastercpf' || sideMenuId=='cpfallocrate'|| 
			sideMenuId=='cpfcontrirate'|| sideMenuId=='cpfAdct' || sideMenuId=='cpfAccType'){
		  
		  	$("#fipaForm #mastercpf :input").attr("disabled", false); 
	    	$("#fipaForm #cpfallocrate :input").attr("disabled", false);
	    	$("#fipaForm #cpfcontrirate :input").attr("disabled", false);
	    	$("#fipaForm #cpfAdct :input").attr("disabled", false);
	    	$("#fipaForm #cpfAccType :input").attr("disabled", false); 
	    	
		    $('.accordHeaderDiv').css("display","none"); 
			$('.footdiv').css("display","block");
			$('button#btnSaveProfile').text('Save');
			
			
			if(sideMenuId=='cpfcontrirate' || sideMenuId=='cpfallocrate' || sideMenuId=='mastercpf'){
				$('button#btnDeleteProfile').css("display","none"); 
			}else if(sideMenuId=='cpfAccType'){
//				$('button#btnDeleteProfile').css("display","block");
			}
			
			$('button#btnDeleteProfile').text('Delete'); 
			$('button#btnNewProfile').css("display","none");
			$('.reportPrintdiv').css("display","none");
			
			
	 }
	} 
	
	
	
	
	  
}


function InterpreterKeyin(){
	 $('#amlIntprtName').prop('readonly', false); 
	 $('#amlIntprtName').removeClass("readOlyCursor"); 
	 $('#amlIntprtRelat').prop('disabled', false); 
	 $('#amlIntprtRelat').removeClass("disabledCursor"); 
	 $('#amlIntprtNric').prop('readonly', false); 
	 $('#amlIntprtNric').removeClass("readOlyCursor"); 
	 $('#amlIntprtMobile').prop('readonly', false); 
	 $('#amlIntprtMobile').removeClass("readOlyCursor"); 
	 $('#amlIntprtHome').prop('readonly', false); 
	 $('#amlIntprtHome').removeClass("readOlyCursor"); 
}
function InterpreterKeyout(){
	$('#amlIntprtName').prop('readonly', true); 
	$('#amlIntprtName').addClass("readOlyCursor"); 
	$('#amlIntprtRelat').prop('disabled', true);
	$('#amlIntprtRelat').addClass("disabledCursor"); 
	$('#amlIntprtNric').prop('readonly', true);
	$('#amlIntprtNric').addClass("readOlyCursor"); 
	$('#amlIntprtMobile').prop('readonly', true);
	$('#amlIntprtMobile').addClass("readOlyCursor"); 
	$('#amlIntprtHome').prop('readonly', true);
	$('#amlIntprtHome').addClass("readOlyCursor"); 
}
 
function clearAllSlfSpsFields(openFor){
	var maritialSts=$("#dfSelfMartsts").val();
	 var numOfSlfCls = document.getElementsByClassName("clsfipaClient").length;
	 var numOfSpsCls = document.getElementsByClassName("clsfipaSpouse").length;
	 var numOfFamCls = document.getElementsByClassName("clsfipaFamily").length;
	 
	 if(openFor == 'Self'){
		 for(var i=0;i<numOfSlfCls;i++){ 
			 if(!isEmpty(document.getElementsByClassName("clsfipaClient")[i].value)){  
				  
				 
				 $("#confalertimg").html(""); 
					$("#confalertmsg").html("Do you want to clear All Self Details");  
					$('#ClearFieldAlertDialog').modal({
						  backdrop: 'static',
						  keyboard: false,
						  show:true,
						}); 
					$('#ClearFieldAlertDialog').on('shown.bs.modal', function() {  
						$('#ClearFieldAlertDialog').find(".modal-title").text("FIPA - Message");
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").unbind(); 
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").click(function (){   
							showLoader(); 
		  			    	$('#dfSelfDob').val('');
		  			    	 $('.clsfipaClient').each(function() {  
		  			    		$(this).val(''); 
		  			    	 });
		  			    	 $('.clearfipaClient').each(function() {  
			  			    		$(this).val('');
			  			    		$(this).prop("readonly",true);
			  			      });
		  			    	
		  			    	$("#dfSelfRegmailaddrSame").attr("checked",false);   
		  			    	
		  			  		hideLoader();	
								$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(1)").click(function (){ 
							 $('.clsfipaClient').each(function() {  
	  			      				$(this).prop("readonly",false);
	  			      			$(this).prop("disabled",false);
	  		  			    	 });
	  			      			 
	  			      			$('.clearfipaClient').each(function() {  
			  			    		$(this).prop("readonly",true);
			  			    	 });
	  			      			
	  			      			 
	  			      			$("input:checkbox[name=txtFldAnalyisFor]:eq(1)").prop("checked",true);
							  	$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						
					});
				  
			 }
	     }
		 
	 }else if(openFor == 'Spouse'){
		 
		 var clientsts   = $("#dfSelfMartsts").val();
//		 if(clientsts == "Single"){
		var confrmtrigger = 0;
		
		 $(".clsfipaSpouse").each(function(){
			 var thisval = $(this).val();
			 if(!isEmpty(thisval)){
				 confrmtrigger++;
			 }
		 });
		 
			 	$(".clsfipaSpouse").prop("disabled", true);
				$('#dobSpspicker').datetimepicker('remove');
				$("#dfSpsRegaddrAsSelf").prop("disabled", true);
				$("#dfSpsRegaddrAsSelf").prop("checked", false);
				$("#dfSpsRegmailaddrSame").prop("disabled", true);
				$("#dfSpsRegmailaddrSame").prop("checked", false);
				$("#dfSpsMailaddrAsSelf").prop("disabled", true);
				$("#dfSpsMailaddrAsSelf").prop("checked", false);
				$("#dfSpsHomecntry").prop("disabled", true);
				
			 for(var i=0;i<numOfSpsCls;i++){ 
			 
		 
//			 if(!isEmpty(document.getElementsByClassName("clsfipaSpouse")[i].value)){ 
				 
				 $("#confalertimg").html(""); 
					$("#confalertmsg").html("Do you want to clear All Spouse Details");  
					$('#ClearFieldAlertDialog').modal({
						  backdrop: 'static',
						  keyboard: false,
						  show:true,
						}); 
					$('#ClearFieldAlertDialog').on('shown.bs.modal', function() {  
						$('#ClearFieldAlertDialog').find(".modal-title").text("FIPA - Message");
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").unbind(); 
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").click(function (){   
						
		  			    	 $('#dfSpsDob').val('');
		  			    	 $('.clsfipaSpouse').each(function() {  
		  			    		$(this).val('');
		  			    	 });
		  			    	 	$('.clearfipaSpouse').each(function() {  
			  			    		$(this).val('');
			  			    		$(this).prop("readonly",true);
			  			    	 });
		  			    	  
		  			    	 	$('#dfSpsMailcntry option[value=SINGAPORE]').prop('selected', true);
		  			    	 	$('#retAgeBasedon').find('option').remove().end().append('<option value="Self">Self</option>').val('Self').append('<option value="">--SELECT--</option>');
		  			    	 	$("#retAgeBasedon option:contains('--SELECT--')").attr("selected", true); 
		  			    	 	//$('#retAgeBasedon').append('<option value="" selected="selected">--SELECT--</option>');
		  					 	$("input[name=txtFldDepnProvSps]").each(function() {  
		  							 
		  								 $(this).prop("disabled",true);
		  								 $(this).val("");
		  								/*DpdcalculateRow();*/ 
		  								DpndcalculateRow();
		  				    		 
		  				    	 });
		  				    	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
		  				    		 
		  								 $(this).prop("disabled",true);
		  								 $(this).val("");
		  							  
		  				    	 });
		  				    	 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
		  				    		 
		  								 $(this).prop("disabled",true);
		  								 $(this).val("");
		  							  
		  				    	 }); 
		  			    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
		  			    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
		  			    	$("#dfSpsMailaddrAsSelf").prop("checked",false); 
		  			    	$("#dfSpsHomecntry").val('');
		  			    	if(!(maritialSts == "Married")){
		  			    		chkOwnership('Spouse',true);
		  			    	}
		  			  		
		  			    	
								$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(1)").click(function (){ 
							showLoader();  
 			      			 $('.clsfipaSpouse').each(function() {  
 			      				$(this).prop("readonly",false);
 			      				$(this).prop("disabled",false);
 		  			    	 });
 			      			$('.clearfipaSpouse').each(function() {  
		  			    		$(this).prop("readonly",true);
		  			    	 }); 
 			      			  
 			      		 
// 			  			 $("input[name=txtFldDepnProvSps]").each(function() {  
// 			  					 if(!isEmpty( $(this).val())){
// 			  						 $(this).prop("disabled",false); 
// 			  					 }
// 			  		    		 
// 			  		    	 });
// 			  		    	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
// 			  		    		 if(!isEmpty( $(this).val())){
// 			  						 $(this).prop("disabled",false); 
// 			  					 }
// 			  		    	 });
// 			  		    	 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
// 			  		    		 if(!isEmpty( $(this).val())){
// 			  						 $(this).prop("disabled",false); 
// 			  					 }
// 			  		    	 }); 
//			      			
 			  		    	 $("input:checkbox[name=txtFldAnalyisFor]:eq(1)").prop("checked",true);
//			      			chkOwnership('Spouse',false);
			      		 	
			      			
			      			hideLoader();	
							$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						
					}); 
				  
//			 }
		 }
//	   }
	 }else if(openFor == 'Family'){
		 var confrmtrigger = 0;
		 
		 $(".clsfipaFamily").each(function(){
			 var thisval = $(this).val();
			 if(!isEmpty(thisval)){
				 confrmtrigger++;
			 }
		 })
		 
				 
				  if(confrmtrigger > 0){
					  
					  $("#confalertimg").html(""); 
					  
					  $("#confalertmsg").html("Do you want to clear All Family Details");  
						$('#ClearFieldAlertDialog').modal({
							  backdrop: 'static',
							  keyboard: false,
							  show:true,
							}); 
						
						$('#ClearFieldAlertDialog').on('shown.bs.modal', function() {  
							$('#ClearFieldAlertDialog').find(".modal-title").text("FIPA - Message");
							$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").unbind(); 
							$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").click(function (){   
								showLoader();   
			  			    	 $('.clsfipaFamily').each(function() {  
			  			    		$(this).val('');
			  			    	 });
			  			    	 $('.clsfipaFamily').each(function() {  
				  			    		$(this).val('');
				  			    		$(this).prop("readonly",true);
				  			    	 });
			  			    	chkOwnership('Family',true);
			  			  		hideLoader();	
									$('#ClearFieldAlertDialog').modal('hide');  
								  	
							  });
							$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(1)").click(function (){ 

	 			      			 $('.clsfipaFamily').each(function() {  
	 			      				$(this).prop("readonly",false);
	 			      			$(this).prop("disabled",false);
	 		  			    	 });  
				      			$("input:checkbox[name=txtFldAnalyisFor]:eq(2)").prop("checked",true);
				      			chkOwnership('Family',false);
								$('#ClearFieldAlertDialog').modal('hide');  
								  	
							  });
							
						}); 
					  
				  }
				
					
					
				  
//			 }
//		 }
	 }
	 
	
}

function clearAllWhnNoProfileCrtdFipa(){
	
	
	$('#dobSpspicker').datetimepicker('remove');
	
	var numOfSpsCls = document.getElementsByClassName("clsfipaSpouse").length;
	var numOfFamCls = document.getElementsByClassName("clsfipaFamily").length;
	

	 for(var i=0;i<numOfSpsCls;i++){ 
		 if(!isEmpty(document.getElementsByClassName("clsfipaSpouse")[i].value)){ 
			 document.getElementsByClassName("clsfipaSpouse")[i].value="";  
		 } 
	 }
	 
	 for(var i=0;i<numOfFamCls;i++){ 
		 if(!isEmpty(document.getElementsByClassName("clsfipaFamily")[i].value)){ 
			 document.getElementsByClassName("clsfipaFamily")[i].value=""; 
		 } 
	 }
	 
	 $('.clsfipaSpouse').each(function() {  
 		$(this).val('');
 		$(this).prop("disabled",true);
 	 });
 	 $('.clearfipaSpouse').each(function() {  
	    $(this).val('');
	    $(this).prop("disabled",true);
	 });
 	 $('.clsfipaFamily').each(function() {  
  		$(this).val('');
  		$(this).prop("disabled",true);
  	 });
  	 $('.clearfipaFamily').each(function() {  
 	    $(this).val('');
 	    $(this).prop("disabled",true);
 	 });   
  	$("#dfSelfNationality").val("Singaporean"); 
	$("#dfSpsNationality").val("Singaporean");
	$("#dfSpsMartsts").val("Married");
}

function chkOwnership(ownval,opts){
	 
	 
	  $('select[name=txtFldPropCpfOwnership],select[name=txtFldDlgCpfPropOwnership],select[name=retAgeBasedon],'
			  +'select[name=selRDRetAgebasedOn],select[name=lipOwner],select[name=selDlgInvOwnership],select[name=selInvOwner],'
			  +'select[name=selDlgCOBOwnershipType],select[name=selCOBOwnershipType],select[name=txtFldDlgPerAcctHolder],select[name=txtFldPerAcctHolder],'
			  +'select[name=txtFldDlgBusnAcctHolder],select[name=txtFldBuisAcctHolder],select[name=txtFldDlgVehOwner],select[name=txtFldVehOwner],'
			  +'select[name=selDlgCADApplicantType],select[name=selCdApplicantType]').find("option[value="+ownval+"]").each(function() {
				  if($(this).length > 0){
					 if($(this).parent().val() == ownval){
						 if(opts==true){
							 $(this).parent().val("");
						 }
					 }
					 $('#lipAssured option:eq(2)').prop("disabled",opts); 
					 $(this).prop("disabled",opts);
				  }
			  });  
		  
	  
	  if(ownval == "Spouse"){
		  
		  
			 $("select[name=txtFldDlgMainAccHolderName],select[name=txtFldMainAccHolderName],"
			 		+"select[name=txtFldDlgCADApplicant],select[name=txtFldCADApplicant]").each(function(){
				 if($(this).find("option:selected").index == 2){ 
					 if(opts==true){ $(this).val("");}
				 }
				 $(this).find('option:eq(2)').prop("disabled",opts); 
			 });
			 
		  $('select[name=selDlgORAgeBsOn],select[name=selORAgeBsOn],select[name=selDlgIRAgeBsOn],select[name=selIRAgeBsOn],'
				  +'select[name=selDlgIncAssAgeBsOn],select[name=selIncAssAgeBsOn],'
				  +'select[name=selDlgprojORAgeBsOn],select[name=selprojORAgeBsOn],'
				  +'select[name=selDlgprojIRAgeBsOn],select[name=selprojIRAgeBsOn],'
				  +'select[name=selDlgprojIncAssAgeBsOn],select[name=selprojIncAssAgeBsOn]').find("option[value=SPOUSE]").each(function() {
					  if($(this).length > 0){
						 if($(this).parent().val() == "SPOUSE"){
							 if(opts==true){ $(this).parent().val("");	}
						 }
						 $(this).prop("disabled",opts);
					  }
				  });  
			  
	  }
	  hideLoader();	
}


function addLateUpdtDate(){
 
	$("span[id='txtFldRDDate']").text("");
		var crtdDate = $("#dfCreatedDate").val();
		var modDate = $("#dfModifiedDate").val();
		
		modDate = isEmpty(modDate) ? crtdDate : modDate;
		$("input[name='updlstdate']").val("Last updated on "+modDate +"");
		/*RP CF*/$("span[id='txtFldRDDate']").text(modDate);//?????????
		if(!($("#dfSpsName").val() == "")){
			$("input[name='updlstdateSps']").val("Last updated on "+modDate +"");
		}else{
			$("input[name='updlstdateSps']").val("");
		}
		
		$("input[name='updlstdatefrChld']").css("display","none");//?????????????????
		$("input[name='updlstdateChldDecl']").css("display","none"); 
		$("input[name='updlstdatefrAttach']").css("display","none");
		
		 
}


function loadAllSymbols(){ 
	 
		$('span#symbolUsd').addClass('addDollarSign'); 
		$('span#symbolYrs').addClass('addYearSign');   
		$('span#symbolprCent').addClass('addPercentSign');  
		
}
 
function applyToastrAlert(alertInfo,fldtofocus){
//	toastr.clear();
	if(!isEmpty(alertInfo)){
	    toastr.info(alertInfo, "FIPA Notification", toastrOpts);
	    if(fldtofocus)fldtofocus.focus();
	}
}


function applySuccessToastrAlert(alertInfo,fldtofocus){ 
//	toastr.clear();
	if(!isEmpty(alertInfo)){
		toastr.success(alertInfo, "FIPA Notification", sucToastrOpts);
		if(fldtofocus)fldtofocus.focus();
	}
}

function applyErrorToastrAlert(alertInfo,fldtofocus){ 
//	toastr.clear();
	if(!isEmpty(alertInfo)){
		toastr.error(alertInfo, "FIPA Notification", toastrOpts);
		if(fldtofocus)fldtofocus.focus();
		
	}
	
}

function suspErrorToastrAlert(alertInfo,fldtofocus){ 
//	toastr.clear();
	if(!isEmpty(alertInfo)){
		toastr.error(alertInfo, "FIPA Notification", susptoastrOpts);
		if(fldtofocus)fldtofocus.focus();
	}
}

function applyEventHandlers(){

//	$(".numbers").css("text-align","right");
	
	$(".applyNoDecimal").on("keypress keyup blur",function (event) {    
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
	
	//Dollars sign functions
	$(".applyEvntUsd,.applyEvntUsd26,.applyEvntUsd126").on("keypress",function(event) {
		return isNumber(event,this); //changed  isNumberKeydec(event,this);
		
    });    
	
	$(".applyEvntUsd").on('keyup keydown', function (event) { 
		chkDecimal(this,120,5); 
	});  
	$(".applyEvntUsd26").on('keyup keydown', function (event) { 
		chkDecimal(this,120,5);
	}); 
	$(".applyEvntUsd126").on('keyup keydown', function (event) { 
		chkDecimal(this,120,5); 
	}); 
    $(".applyEvntUsd").attr("maxlength","126");
    $(".applyEvntUsd26").attr("maxlength","126");
    $(".applyEvntUsd126").attr("maxlength","126");

    $(".applyEvntUsd26,.applyEvntUsd,.applyEvntUsd126").css("text-align","right");
    $('.applyEvntUsd,.applyEvntUsd26,.applyEvntUsd126').keyup(function(event){
	    var val = $(this).val();
	    if(isNaN(val)){
	         val = val.replace(/[^0-9\.]/g,'');
	         if(val.split('.').length>2) 
	             val =val.replace(/\.+$/,"");
	    }
	    $(this).val(val); 
	});   
 
    
    
	//Percent sign functions  
    $(".applyEvntpCent").keypress(function(event) {
		return isNumber(event,this);
    });
	$(".applyEvntpCent").change(function(event) {
		return checkPercntVal(this);
    });
	$(".applyEvntpCent").on('keyup keydown', function (event) { 
		chkDecimal(this,122,6);
	});   
    $(".applyEvntpCent").attr("maxlength","126");    
    //Section2
    
    $(".applyEvntpCent3").keypress(function(event) {
    	return isNumber(event,this);
    });
    $(".applyEvntpCent3").change(function(event) {
    	return checkPercntVal(this);
    });
	$(".applyEvntpCent3").on('keyup keydown', function (event) { 
//		chkDecimal(this,3,0);
		chkDecimal(this,122,6);
	});   
    $(".applyEvntpCent3").attr("maxlength","126"); 
	//Section 3
    $(".applyEvntpCent5").keypress(function(event) {
    	return isNumber(event,this);
    });
    $(".applyEvntpCent5").blur(function(event) {
    	return checkPercntVal(this);
    });
	$(".applyEvntpCent5").on('keyup keydown', function (event) { 
		chkDecimal(this,122,6);
	});   
    $(".applyEvntpCent5").attr("maxlength","126"); 
    
	//Section 4
    $(".applyEvntpCent26").keypress(function(event) {
    	return isNumber(event,this);
    });
    $(".applyEvntpCent26").change(function(event) {
    	return checkPercntVal(this);
    });
	$(".applyEvntpCent26").on('keyup keydown', function (event) { 
		chkDecimal(this,122,3);
	});   
    $(".applyEvntpCent26").attr("maxlength","126");
    
    $('.applyEvntpCent,.applyEvntpCent3,.applyEvntpCent5,.applyEvntpCent26').css("text-align","right");
    //not to allow more than one decimal points
    $('.applyEvntpCent,.applyEvntpCent3,.applyEvntpCent5,.applyEvntpCent26').keyup(function(event){
	    var val = $(this).val();
	    if(isNaN(val)){
	         val = val.replace(/[^0-9\.]/g,'');
	         if(val.split('.').length>2) 
	             val =val.replace(/\.+$/,"");
	    }
	    $(this).val(val); 
	});
  
	
    //Years Sign functions
    $(".applyEvntYrs").keypress(function(event) {
		return isNumberKeydec(event,this);
    });   
	$(".applyEvntYrs").on('keyup keydown', function (event) { 
		chkDecimal(this,5,0);
	});  
    $(".applyEvntYrs").attr("maxlength","3");  
//    $('.applyEvntYrs').css("text-align","right");
    
    
  // 4 digit Years fields Sign functions
    $(".apply4EvntYrs").keypress(function(event) {
		return isNumberKeydec(event,this);
    });   
	$(".apply4EvntYrs").on('keyup keydown', function (event) { 
		chkDecimal(this,5,0);
	});  
    $(".apply4EvntYrs").attr("maxlength","4");  
//    $('.applyEvntYrs').css("text-align","right");
}  

/*
 * <!--  FIPAlinkToFPMS() --> <!-- commented  by thulasy 03.11.2017-->
function FIPAlinkToFPMS(){ 
	 
	var custId=($("#fipaForm #fpmsCustid").val())?$("#fipaForm #fpmsCustid").val():"";
	var LoggedUserID=($("#fipaForm #hTxtFldLoggedUserID").val())? $("#fipaForm #hTxtFldLoggedUserID").val():"";
	var LoggedUserPass=($("#fipaForm #hTxtFldLoggedUserPass").val())?$("#fipaForm #hTxtFldLoggedUserPass").val():""; 
	if(!isEmpty(custId)){
    creatSubmtDynaForm("http://192.168.1.11:8080/FPMSNL/PolicyPostAction.action?txtFldUserId="+LoggedUserID+"&txtFldPassword="+LoggedUserPass+"&txtFldCustId="+custId+"");
    }else{
		showAlert("No Policy Details For Selected Client!");
	} 
}
*/


function creatSubmtDynaForm(href){	
	
 
		var lex1 = href.split('?');
		var action= lex1[0];
		var qstr = lex1[1];
		var obj = " ";
		var newdiv = document.createElement('div');

		if(qstr != null) {
			var params = qstr.split('&');
			for(var p=0;p< params.length;p++){
				var keyValue = params[p].split('=');
				var name = keyValue[0];
				var value = keyValue[1]; 
				obj += "<input type='hidden' name='"+name+"' value='"+value+"'/>";
				
			}
		}
		
		newdiv.innerHTML = obj; 
		
		if(document.getElementById("fpmshiddenForm"))
			document.getElementById("fpmshiddenForm").appendChild(newdiv);

	document.forms["fpmshiddenForm"].action=action;
	document.forms["fpmshiddenForm"].method="POST"; 
	
	var win=window.open('','TheWindowBIRT',"channelMode,toolbar=no,scrollbars=no,location=no,resizable =yes");
	document.getElementById("fpmshiddenForm").submit();
	  

}//end creatSubmtDynaForm

  
function loadSlfSpsName(){  

	var selfname=$("#dfSelfName").val();
	var spousename=$("#dfSpsName").val();
	var selfnric=$("#dfSelfNric").val();
	
	$("span[id='txtFldClientName']").text("").text(selfname);
	$("span[id='txtFldClientNric']").text("").text(selfnric);

   
	$("[name='txtFldClientName']").val(selfname);
    $("[name='txtFldClientNric']").val(selfnric);
	 
	
	//remove options beform append values
	for(var i=0;i<2;i++){
		$('#Cob_Dialog #txtFldDlgMainAccHolderName option').remove(0);
	} 
	for(var i=0;i<2;i++){
		$('#cpfAddDed_Dialog #txtFldDlgCADApplicant option').remove(0);
	} 
	
	$('#lifeInsdetstab #lipAssured option').remove(0); 
	 
	  
	 
			//append values to select field
	$('#Cob_Dialog #txtFldDlgMainAccHolderName').append('<option value="">--SELECT--</option>' );
	$('#cpfAddDed_Dialog #txtFldDlgCADApplicant').append('<option value="">--SELECT--</option>' );
	$('#lifeInsdetstab #lipAssured').append('<option value="">--SELECT--</option>' );
	 
	 if(!isEmpty(selfname) ){ 
//		 if(!ToClearSelfSpouseFldNames(selfname)) return;
		$('#Cob_Dialog #txtFldDlgMainAccHolderName').append( '<option value="'+selfname+'">'+selfname+'</option>' );
		$('#cpfAddDed_Dialog #txtFldDlgCADApplicant').append( '<option value="'+selfname+'">'+selfname+'</option>' );
		$('#lifeInsdetstab #lipAssured').append( '<option value="'+selfname+'">'+selfname+'</option>' );
//		/*RP CF*/
		$("span[id='txtFldRDClientName']").text("");
		$("span[id='txtFldRDClientName']").text(selfname);
		  
	 }
	 if(!isEmpty(spousename)){ 
//		 if(!ToClearSelfSpouseFldNames(spousename)) return;
		$('#Cob_Dialog #txtFldDlgMainAccHolderName').append( '<option value="'+spousename+'">'+spousename+'</option>' );
		$('#cpfAddDed_Dialog #txtFldDlgCADApplicant').append( '<option value="'+spousename+'">'+spousename+'</option>' );
		$('#lifeInsdetstab #lipAssured').append( '<option value="'+spousename+'">'+spousename+'</option>' );  
//		/*RP CF*/
		$("span[id='txtFldRDSpouseName']").text("");
		$("span[id='txtFldRDSpouseName']").text(selfname);
	} 
	 
	 
		var rowCount = chldpartTbl.rows().count();	 
		if(rowCount >0){
			
			$('#childParticularsTable tbody').find('tr').each(function(){
				var childname=$(this).find("td:eq(2)").find("input:eq(0)").val();
				$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+childname+'">'+childname+'</option>' ); 
			}); 
		}
	 
 
}

//function ToClearSelfSpouseFldNames(selfspousename){
//	
//	var table = document.getElementById("cashOfBanksTable"),
//	 tbody = table.tBodies[0],
//	 rowCount = tbody.rows.length;
//	
//
//	$("#cashOfBanksTable tbody").find('tr.odd').each(function(){
//        $(this).remove();        
//    }); 
//	
//	
//	var cobtbl= document.getElementById("cashOfBanksTable"), 
//	cobbody = cobtbl.tBodies[0],
//	cobrowCount = cobbody.rows.length,	
//	cobindex = $("#cashOfBanksTable tbody").find("td").length; 
//	 
//	
//	var deleteFlag = 0;
//	var alertFlagCob = 0;
//	
//	if(cobindex>0){
//		for(var cob=0;cob<cobrowCount;cob++){
//			var cobrow = cobbody.rows[cob];  
//			var cobname = cobrow.cells[4].childNodes[0].value;  
//			 
//			if(selfspousename == cobname){ 
//				showAlert("Cant Able to Change Self/Spouse Name,Its been already used !");
//				return false;
//			} 
////			if(spousename == cobname){ 
////				showAlert("Cant Able to Change Spouse Name,Its been already used !");
////				return false;
////			}
//			
//		 } 
//	} 
//	  
//	return true;
//	
//}

 


function dhtmlModChange($row){
	var mode=$row.find("td:first").find('input:eq(0)').val();
	if( mode == QRY_MODE){
		$row.find("td:first").find('input:eq(0)').val(UPD_MODE);	
	}
}

	function show(object,id) {

//		treeConfig(id);
		
			$("#allpages").children().hide();
			$("#accordion").children().hide();
			$('#accordion .panel-collapse').collapse('hide');

			if (id != "none") {

				/* Mobile version */
				if ($("#navigationId").is(":visible")) {
					$("#navigationId").click();
				}
				/* Mobile version */

				$("#" + id).show();
				

				
			} else {
				$('.footdiv').css("display", "none");
			}
			
			
			if(id=='profilepage'){
				$("#fipaForm #profilepage :input").prop("disabled", false); 
				$("#ProfileSearchTable").find("textarea").prop("readonly","true");
			}
			
			if(id=='searchpage'){ 
				$("#fipaForm #searchpage :input").prop("disabled", false);   
				$('.accordHeaderDiv').css("display","none");
				
				if(stafftype == STAFFTYPE_ADVISER){
//					$(".menu_section>ul:not(:first-child)").addClass("hidden");
				}else  if(stafftype == STAFFTYPE_STAFF){
//					$(".menu_section>ul:not(:first-child):not(:last)").addClass("hidden");
				} 
				
//				$('#mastercpf_li').removeClass("hidden"); 
				$("#btnSaveProfile").addClass("hidden");
				$("#btnDeleteProfile").addClass("hidden");

				
			}else if(id =="cpfmasters"){
				$('.accordHeaderDiv').css("display","none");
				
			}else{
				$('.accordHeaderDiv').css("display","block");
			}
			
			$("#new_fipa_menu").find("li").removeClass("active");
			
			$(object).closest("li").addClass("active");
			
	}
	
	

	function showchild(id) {

		$("#accordion").children().hide();
		$('#accordion .panel-collapse').collapse('hide');

		$("#" + id).collapse('show');

		var $div = $(".accordion .accord-header");

		$div.addClass("active");

		if ($div.next("div").is(":visible")) {
			$div.next("div").hide();
		}

		$("#" + id).show();
 
	}
	
	

	function chkClientMenu(){
		$("#ProfileSearchTable").dataTable().fnClearTable();
		$("#ProfileOpenFlag").val("N");
		
		var screenname = $("#hTxtScreenName").val();
		if(screenname != "client"){  
				document.forms[0].action="Link.do"; 
				document.forms[0].submit();      
		}  
		
		
		
	}
	function toggleSingleRow(obj){
		var $row = $(obj).closest('tr');
//		var $tbody = $row.closest('tbody');
//		$tbody.find("tr").each(function(){
//			if($(this).hasClass("selected"))
//				$(this).removeClass('selected'); 
////				$(this).find("td:eq(1)").find('input[type=checkbox]').prop("checked",false);
//		});
		
//		$row.hasClass("selected") ?  $row.removeClass('selected') : $row.addClass('selected');
		
		if($row.hasClass("selected")){
			$row.removeClass('selected');
			$row.find("td:eq(1)").find("input:first").prop("checked",false);
		} else{
			$row.addClass('selected');
			$row.find("td:eq(1)").find("input:first").prop("checked",true);
		}	
		
	}

	function selectSingleRow(obj){
		if($(obj).is(":checked")){
			$(obj).closest('tr').addClass('selected');
		}else{ 
			$(obj).closest('tr').removeClass('selected');
		}
	}
	
	
	
	
	
	
	function showTooltip(id,strTooltipContent){
		
		 $("#"+id).qtip({
		 		content: {text : strTooltipContent ,title : ' FIPA -Notification ',button: true},
//		         show: 'keypress',
//		         hide: 'keypress',        
		         style: {
		             classes: 'qtip-green qtip-rounded qtip-shadow'
		         },
		         show: {solo: true, ready: false, when: 'mouseover'},
		          
		         hide: {
		             event: 'mouseout'
		           }, position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window),
		             target: $("#"+id)  
		         }  
		     });
		
//		 $("#"+id).qtip('show'); 
	}
	
	
	function showErrorTooltip(modelId,id,strTooltipContent){
		$("#"+id).isDisabled = true;
		 $("#"+id).qtip({
		 		content: {text : strTooltipContent}, 
		         style: {
		             classes: 'qtip-red qtip-rounded qtip-shadow'
		         }, position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window),
		             target: $("#"+id) ,
		             container:$("#"+modelId),
		             
		         }  
		     });
		
		 
		 $("#"+id).qtip('show'); 
	}
	
	
	
	
	function showErrorRDTooltip(modelId,id,strTooltipContent){
		$("#"+id).isDisabled = true;
		 $("#"+id).qtip({
		 		content: {text : strTooltipContent}, 
		         style: {
		             classes: 'qtip-red qtip-rounded qtip-shadow'
		         }, position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window),
		             target: $("#"+id) ,
		             container:$("label#"+modelId),
		             
		         }  
		     });
		
		 
		 $("#"+id).qtip('show'); 
	}
	
	
	function showTooltipCls(classid,strTooltipContent){   
			$("."+classid).isDisabled = true;
			$("."+classid).qtip({
		 		content: {text : strTooltipContent}, 
		         style: {
		             classes: 'qtip-green qtip-rounded qtip-shadow'
		         },
		         show: {solo: true, ready: false, when: 'mouseover'},
		          
		         hide: {
		             event: 'mouseout'
		           },
		            
		         position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window)   
		         }  
		     }); 
			
			 
	}
	 
	 
	function showTooltipAttr(id,contentmsg){ 
		$("#"+id).isDisabled = true;
		$("#"+id).qtip({ 
	 		content: {text :contentmsg}, 
	         style: {
	             classes: 'qtip-green qtip-rounded qtip-shadow'
	         }, 
	         position: {
	             my: 'top left',   
	             at: 'bottom left', 
	             viewport: $(window)   
	         },
	         show: {
	             ready: true
	           }
	     }); 
		
//		$("#"+id).qtip('show');
		
}
 function checkWhetherPolicyExistsInScreen(){
	 var flag=true;
	  $('#lifeInsdetstab,#li_DeathBenef_tab,#li_Disability_tab,'
			  +'#li_CriticalIllness_tab,#li_Hospitalisation_tab'
			  +'#li_RetirementPlg_tab,#li_EducationPlg_tab')
			  .find("input[type='text'],select,input[type='hidden']").each(function() { 
		  var elmval=$(this).val(); 
		   if (!(elmval == null  ||  elmval == "")) {
			      flag = false; 
			      return;
		   }  
	  });
	  
	  if(!flag){ 
		 return false; 
	  }
	  return true;
 }
	function callFipaInsuranceDets($lastRow){ 
		
						  /**/

							var selfname = $("#dfSelfName").val();
							var spousename = $("#dfSpsName").val();
							
							$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured option").remove(0);
							$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append('<option value="">--SELECT--</option>' ); 
							if(isValidObject(selfname)){if(!isEmpty(selfname)){$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append('<option value="'+selfname+'">'+selfname+'</option>');}}
							if(isValidObject(spousename)){if(!isEmpty(spousename)){$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append('<option value="'+spousename+'">'+spousename+'</option>');}}
							
							$('#childParticularsTable tbody').find('tr').each(function(){
								var childname=$(this).find("td:eq(2)").find("input:eq(0)").val();
								if(isValidObject(childname)){
									if((!isEmpty(childname))){
										$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append( '<option value="'+childname+'">'+childname+'</option>' );
									}
								}
						 	 }); 
							
					    	clearLifeInsuranceScreen();
					    	 
							var aplnName = $lastRow.find("td:eq(1)").find('input:eq(0)').val(),
								lifeIns_id =$lastRow.find("td:eq(1)").find('input:eq(1)').val(),
								fna_id = $lastRow.find("td:eq(1)").find('input:eq(2)').val(),
								app_id  = $lastRow.find("td:eq(1)").find('input:eq(3)').val();
								planname  = $lastRow.find("td:eq(6)").find('input:eq(0)').val();
								policyno = $lastRow.find("td:eq(5)").find('input:eq(0)').val();
								planname = isEmpty(planname)?"":planname;
					// console.log(aplnName +","+lifeIns_id+","+fna_id+","+app_id+","+planname)
							
							$lastRow.closest("tbody").find("tr").each(function(){ 
						    	$(this).removeClass("selected");
						     });  
							 
							$lastRow.addClass("selected");
							
							 var selLipAssuredVal;
							 if(aplnName == 'FIPA'){	
									showLoader();
								if(!(isEmpty(lifeIns_id)) ){
									
									
									var parameter = "DBCALLFOR=GET_FIPALIFEDATA&strSrchlifeInsId="+lifeIns_id;
								
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


								if (key == "CLIENT_LIFEDATA_SRCH"){ 

									var jsnData = value; 	  
									for ( var cont in jsnData) {
										jsonDataPopulate(jsnData[cont], key);
										if (jsnData.hasOwnProperty(cont)) {			

											var contvalue = jsnData[cont];
											for(var data in contvalue){

												var col = contvalue[data]; 

												if(data == "lipAssured"){
													selLipAssuredVal=col;

												} 
												childexist();
												
												filldetsLifeInsuranceDlg(data,col,contvalue,lifeIns_id);

											}

										}
									}




								}
								if (key == "CLIENT_COVERAGE_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										
										getAllCoverage(contvalue);
									});

								}
								
								
								/*
								if (key == "CLIENT_DEATHBENF_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										getliDthBenfRows(contvalue);
									});

								}

								if (key == "CLIENT_CRITICAL_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										getlicrtlnsRows(contvalue);	
									});
									

								}

								if (key == "CLIENT_HOSP_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										getlihospRows(contvalue);
									});

								}
								*/
								if (key == "CLIENT_PLANPRO_SRCH"){
									
									
									$.each(value, function(contkey, contvalue) {
									//console.log(contvalue+"<------------------contvalue")
										
											getliBasRidDetRows(contvalue, tab); 
									}); 
									
							    }
								
								 

								if (key == "CLIENT_CHLDEDUDATA_SRCH"){  
									$.each(value, function(contkey, contvalue) {
										
										getlieduplgRows(contvalue,[]); 
										tbleCollapse();
									});
								}



								if (key == "CLIENT_MVDATA_SRCH"){  
									$.each(value, function(contkey, contvalue) {
										getRetPlgRows(contvalue);
									});
								}

								if (key == "CLIENT_NOMDATA_SRCH"){
//									jsonTableDataPopulate(value, tab, false);
									$.each(value, function(contkey, contvalue) {
										getNomNameRows(contvalue);
									});

								} 

							}
						}
					}

 
										$('li > a[href="#lifeInsdetstab"]').click();
										$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);  
										selectNullvalChk($("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured"),$("#selLipAssuredVal")); 
//										$("#visibleretTotalPrem").attr("type","text");
//										$("#retTotalPrem").attr("type","hidden"); 
										 planAlertInfo();  
										hideLoader();
									});
							 }
							} 
							 
							 if(aplnName == 'FPMSNL'){ 
								var flag=true;
									 $lastRow.closest("tbody").find("tr:not(.selected)").each(function(){ 
										 var refId= $(this).find("td:eq(1)").find('input:eq(4)').val();
										 var appName=$(this).find("td:eq(1)").find('input:eq(0)').val();
										 
										
										 if(app_id == refId && appName== "FIPA"){
											 flag=false;
											 
													 var htmlComp="<textarea name='DlgdfRemarks' id='DlgdfRemarks'  " +
																		"class='form-control' maxlength='1000' " +
																		"cols='100' rows='1'>Sure are you want Load Policy again ?</textarea>";
										     
												$("#confirmationalertmsgdiv #confalertimg").html(""); 
												$("#confirmationalertmsgdiv #confalertmsg").html(htmlComp);
												hideLoader();
												$('#confirmationalertmsgdiv').modal({
													  backdrop: 'static',
													  keyboard: false,
													  show:true,
												});
												
												$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {
													
													$('#confirmationalertmsgdiv').find(".modal-title").text("Policy is already loaded");
													$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
													$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){
														$('#confirmationalertmsgdiv').modal('hide');  
														 showLoader();
														 $("#lipRemarks").val("");
														 fillFPMSDataDlg($lastRow,app_id);	
														 $('li > a[href="#lifeInsdetstab"]').click();
														 selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #lipPlanname"),planname);
														 $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
														 planAlertInfo();
														 hideLoader();
														 return false; 
														 
													});
													
													$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){
														
													});
													
													
												});
										
										 }
										
										 
										
									
									     }); 
								
									//funflag(flag);
									 if(flag){
											showLoader();
											$("#lipRemarks").val("");
											 fillFPMSDataDlg($lastRow,app_id);	
											 $('li > a[href="#lifeInsdetstab"]').click();
											 selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #lipPlanname"),planname);
											 $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
											 planAlertInfo();
											 hideLoader();
										}
							
								 
								
								/* showLoader();
								 fillFPMSDataDlg($lastRow,app_id);	
								 $('li > a[href="#lifeInsdetstab"]').click();
								 selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #lipPlanname"),planname);
								 $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
								 planAlertInfo();
								 hideLoader();*/
							
						} 
							 
							 
							

						  /**/
						   
							 loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));		 
	 }
	
	
	

	function showFIPADialog(dialogId,dialogTitle,methods){
		 
		 $("#"+dialogId).dialog({
			 
		    	title: dialogTitle,
		        resizable: false,
		        height:"auto",
		        width: "auto",
		        modal: true,
		        buttons: {
		          " OK ": function() {
		        	  if(!methods())return;
		        	  $( "#"+dialogId ).dialog( "close" );
		          },
		          " CANCEL ": function() {
		        	  $( this ).dialog( "close" );
		          }
		        }
		      });
		 
		 $('#'+dialogId).dialog('option', 'position', 'center');
		
		
	}
	
function reportCheckEvent(elmid,options){

	if(options == "rpt"){
	if(elmid.checked){ 
		$("input:checkbox[name=chkrpt]").map(function() { //If checked iterate the 
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
		
		}).get();
	}else if(!elmid.checked){
		$("input:checkbox[name=chkrpt]").map(function() { //If checked iterate the 
			 $(this).prop("checked",false); 
			 $(this).prop("disabled",false); 
		
		}).get();
	}
	}
	
	if(options == "All"){ 
		var analysislen = $("input:checkbox[name=chkrpt]").length; 
		$("input:checkbox[name=chkrpt]:checked").map(function() { //If checked iterate the 
			if($("input:checkbox[name=chkrpt]:checked").length == analysislen){
			$("input:checkbox[name=chkAllReport]").prop("checked",true);
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
			}
		}).get();
	 }
}
function analysisCheckEvent(elmid,options){
	
	$("#divAnalysisTypes").removeClass("panel-danger").addClass("panel-default");

	if(options == "evt"){
	if(elmid.checked){ 
		$("input:checkbox[name=analysis]").map(function() { //If checked iterate the 
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
		
		}).get();
	}else if(!elmid.checked){
		$("input:checkbox[name=analysis]").map(function() { //If checked iterate the 
			 $(this).prop("checked",false); 
			 $(this).prop("disabled",false); 
		
		}).get();
	}
	}
	
	if(options == "All"){ 
		var analysislen = $("input:checkbox[name=analysis]").length; 
		$("input:checkbox[name=analysis]:checked").map(function() { //If checked iterate the 
			if($("input:checkbox[name=analysis]:checked").length == analysislen){
			$("input:checkbox[name=txtFldAnalysisSelAll]").prop("checked",true);
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
			}
		}).get();
	 }
}




function estMonthlyIncome(elmid,opts){
	if(opts == 'Self'){
	
	if(!(isEmpty(elmid.value))){ 
		
		 var calEstInSelf=Number(elmid.value) ;//* 12;
		 $("#dfSelfAnnlincome").val(roundNumber(calEstInSelf));
		 
		 applyToastrAlert("The Monthly Gross Income(OW) <b>  "+elmid.value+" </b> is reflected to Estd Monthly Income <b> "+calEstInSelf+"</b> in Client Particular's Screen!");
		 
	}else{
		$("#dfSelfAnnlincome").val("");
	}
	}
	
	
	if(opts == 'Spouse'){
		
		if(!(isEmpty(elmid.value))){ 
			
			 var calEstInSpouse=Number(elmid.value) ;//* 12;
			 $("#dfSpsAnnlincome").val(roundNumber(calEstInSpouse));
			 
			 applyToastrAlert("The Monthly Gross Income(OW) <b>  "+elmid.value+" </b> is reflected to Estd Monthly Income <b> "+calEstInSpouse+"</b>  in Spouse Particular's Screen!"); 
			 
		}else{
			 $("#dfSpsAnnlincome").val("");
		}
	}
		
	
}




function prtclrMnthInc(elmid,opts){
	
	
	if(opts == 'Self'){
		 
	if(!(isEmpty(elmid.value))){ 
		applyToastrAlert("This Income will flow back to Month Gross Income(Self) in Cash Flow Statement");

		var calEstInSelf=Number(elmid.value);// / 12;
		 $("#incsrcSelfEmpMonthly").val(roundNumber(calEstInSelf));
	}else{
		$("#incsrcSelfEmpMonthly").val("");
	}
	}
	
	
	if(opts == 'Spouse'){
		if(!(isEmpty(elmid.value))){
			applyToastrAlert("This Income will flow back to Month Gross Income(Spouse) in Cash Flow Statement");
			var calEstInSpouse=Number(elmid.value) ;// / 12;
			 $("#incsrcSpsEmpMonthly").val(roundNumber(calEstInSpouse));
		}else{
			 $("#incsrcSpsEmpMonthly").val("");
		}
	}
		
	
}
 
function navlink(elm,parentElm){  
	var curScreentxt = $(elm).text();    
	var status=$(elm).closest("div").hasClass("breadcrumbs");
	$("#sidebar-menu").find("ul li").removeClass("sideMenuHighlight");
	$("#menuTitles").css("display","none"); 
	if(status){
	$("#sidebar-menu").find("ul li a").each(function(){ 
		 if($("#fipaBreadcrumb").find("a:eq(1)").text() == $(this).text()){ 
				$(this).parent().addClass("sideMenuHighlight");
			
		}
	});
	if(curScreentxt == "Profile"){  
		var bccurElm = $(elm).get(0).outerHTML; 
		$("#fipaBreadcrumb").html("");  
		$("#fipaBreadcrumb").append(bccurElm);
		$("#fipaBreadcrumb").append("<a></a>");
		$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
	} 
	
	}
	
	/***********/
	if(!status){//For SIDEMENU NAVIGATION
	
	if(!(elm == null)){    
		var curElm = $(elm).get(0).outerHTML;   
		var parElm = $(elm).closest("ul").parent().parent().find("a:eq(0)").get(0).outerHTML;  
		 
//		parElm=$(elm).find("a").text("test");
//		parElm=$(elm).get(0).outerHTML;
		
		
		if(!(curScreentxt == "")){   
			if(curScreentxt == "Profile Search"){  
				$("#fipaBreadcrumb").html("");  
				$("#menuTitles").css("display","block");
				$("#menuTitles").html("Search Client By");	 
				$("#hTxtMenuName").val("");
				$("#hTxtMenuName").val(curScreentxt);
			}else if(curScreentxt == "Profile"){  
				$("#fipaBreadcrumb").html("");  
				$("#fipaBreadcrumb").append(curElm);
				 
				$("#hTxtMenuName").val("");
				$("#hTxtMenuName").val($(elm).text());
//				alert(curElm);
//				hTxtMenuName
				$("#fipaBreadcrumb").append("<a></a>");
				$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
			}else{   
				$("#fipaBreadcrumb").html("");  
				if(!(parentElm == 'null')){
				 
					 if(parentElm == "Sub"){
						 parElm=$(elm).closest("ul").parent().parent().parent().find("a:eq(0)").get(0).outerHTML;
					 }  
					  
				$("#fipaBreadcrumb").append(parElm); 
				$("#fipaBreadcrumb").append(curElm);
//				alert(curElm);
				$("#hTxtMenuName").val("");
				$("#hTxtMenuName").val($(elm).text());
				$("#fipaBreadcrumb").find("a:eq(1)").addClass("active"); 
				
				if($("#fipaBreadcrumb").find("a:eq(1)").hasClass("active")){  
					$(elm).parent().addClass("sideMenuHighlight");  
				}
				
				}else{
					$("#fipaBreadcrumb").html("");  
					$("#fipaBreadcrumb").append(curElm);
					$("#hTxtMenuName").val("");
					$("#hTxtMenuName").val($(elm).text());
//					alert(curElm);
					$("#fipaBreadcrumb").append("<a></a>");
					$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
				} 
		}     
		} 
		
	} else if(elm == null){  
		$("#fipaBreadcrumb").html("");  
	} 
	
	} 
	
	 
}
 

function resetMultiSel(elmId){
	 $('#'+elmId+' option:selected').each(function() {
         $(this).prop('selected', false);
     });
	    $('#'+elmId).multiselect('refresh');
}

/*
function showAllAnalysisTypes(e){  
var rowIndex=$(e).parent().closest("tr").index();   
var $getProfileRow=$("#ProfileSearchTable tr:eq('"+(rowIndex+1)+"')").find("td:eq(3)");
	    if ($(e).attr("data-image") === "Show") {  
	    	$getProfileRow.find("div:eq(1)").html("");
	    	$getProfileRow.find("div:eq(1)").append("<img src='images/menuicons/icoUp.png' onclick='showAllAnalysisTypes(this)'  align='right' style='width:20px;'>");
	    	$getProfileRow.find("div").find("span").find(":eq(0)").text("");   
	        var catchtext=$getProfileRow.find("div").find("span").attr("data-originalText");
	        $getProfileRow.find("div").find("span").find(":eq(0)").append(catchtext);
	        $getProfileRow.find("div:eq(1)").find("img").attr("data-image","Hide");
	        $getProfileRow.find("div:eq(0)").attr("data-image","Hide");
	    } else { 
	    	$getProfileRow.find("div:eq(1)").html("");
	    	$getProfileRow.find("div:eq(1)").append("<img src='images/menuicons/icoDown.png' onclick='showAllAnalysisTypes(this)'  align='right'  style='width:20px;'>");
	    	$getProfileRow.find("div").find("span").find(":eq(0)").text("");
	        var appdtext=$getProfileRow.find("div").find("span").attr("data-originalText").substring(0,30);
	        $getProfileRow.find("div").find("span").find(":eq(0)").append(appdtext);
	        $getProfileRow.find("div:eq(1)").find("img").attr("data-image","Show");
	        $getProfileRow.find("div:eq(0)").attr("data-image","Show");
	    } 
	     
	    
}

*/

function profileTooltip(obj){ 

	var rowIndex=$(obj).parent().closest("tr").index();    
	var $getProfileRow=$("#ProfileSearchTable tr:eq('"+(rowIndex+1)+"')").find("td:eq(3)");
	var catchtext=$getProfileRow.find("div").find("span").attr("data-originalText");
  
		$(obj).isDisabled = true;
	      $(obj).qtip({ 
	         content: {
	        	 text:"<ol>"+catchtext+"</ol>",
	               title: { 
	                  button: false
	               }  
	         }, 
	         show: {solo: true, ready: false, when: 'mouseover'},
	         hide: { when: 'mouseout', fixed: true },
	         style: {
	                classes: 'qtip-green qtip-rounded qtip-shadow'
	            },
	            position: {
	                my: 'top left',   
	                at: 'bottom left', 
	                viewport: $(window),
	                target: $(obj)  
	            }    
	      });
	      
	      
	       
	    	  	$(obj).qtip('show');  
	 
	 
}
function dhtmltooltip(obj,msg){
	$(obj).isDisabled = true;
    $(obj).qtip({ 
       content: {
      	 text:msg,
             title: { 
                button: false
             }  
       }, 
       show: {solo: true, ready: false, when: 'mouseover'},
       hide: { when: 'mouseout', fixed: true },
       style: {
              classes: 'qtip-green qtip-rounded qtip-shadow'
          },
          position: {
              my: 'top left',   
              at: 'bottom left', 
              viewport: $(window),
              target: $(obj)  
          }    
    });
    
    
     
  	  	$(obj).qtip('show'); 
}

function attachFileDownload(obj){
	var fileTxt=$(obj).parent().parent().find("div").text();
	 
	$(obj).isDisabled = true;
    $(obj).qtip({ 
       content: {
      	 text:"Click To Download '"+fileTxt+"' file",
             title: { 
                button: false
             }  
       }, 
       show: {solo: true, ready: false, when: 'mouseover'},
       hide: { when: 'mouseout', fixed: true },
       style: {
              classes: 'qtip-green qtip-rounded qtip-shadow'
          },
          position: {
              my: 'top left',   
              at: 'bottom left', 
              viewport: $(window),
              target: $(obj)  
          }    
    });
    
    
     
  	  	$(obj).qtip('show');  
}

function validateDateComparision(fromDateFld,toDateFld,chkSymbol,alertMsg){	
	
	/*checkDateFormat($(fromDateFld));
	checkDateFormat($(toDateFld));*/
	
	var fromDate,toDate ;
	
	if(typeof fromDateFld == "object"){		
		fromDate = fromDateFld.val();		
		fromDate = fromDate.split("/")[2] + "-" + fromDate.split("/")[1] + "-" + fromDate.split("/")[0] ;
		
		
	}else{		
		fromDate = fromDateFld;
		fromDate = fromDate.split("/")[2] + "-" + fromDate.split("/")[1] + "-" + fromDate.split("/")[0] ;
	}
	
	if(typeof toDateFld == "object"){		
		toDate = toDateFld.val();
		toDate = toDate.split("/")[2] + "-" + toDate.split("/")[1] + "-" + toDate.split("/")[0] ;
	}else{		
		toDate = toDateFld;
		toDate = toDate.split("/")[2] + "-" + toDate.split("/")[1] + "-" + toDate.split("/")[0] ;
	}
	
	 //alert("--> "+fromDate + "," +toDate);
	if(!isEmpty(fromDate) && !isEmpty(toDate)){
		
		var cvrt_FromDate = new Date(fromDate);
		var cvrt_ToDate = new Date(toDate);
		
		//alert(chkSymbol+","+cvrt_FromDate + "," +cvrt_ToDate+","+tabFocusPos);
		
		switch(chkSymbol){
		
			case "<":{
				if(!(cvrt_FromDate < cvrt_ToDate)){
					
					applyErrorToastrAlert(alertMsg);
					
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					}
					return false;
				}
				break;		
			}
			
			case "<=":{
				if(!(cvrt_FromDate <= cvrt_ToDate)){
					applyErrorToastrAlert(alertMsg);
				    
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					}
					return false;
				}
				break;			
			}
			
			case ">":{
				if(!(cvrt_FromDate > cvrt_ToDate)){
					applyErrorToastrAlert(alertMsg);
				    
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					}
					return false;
				}
				break;			
			}
			
			case ">=":{
				if(!(cvrt_FromDate >= cvrt_ToDate)){
					applyErrorToastrAlert(alertMsg);
				
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					};
					return false;
				}
				break;			
			}		
		}	//End of switch case chkSymbol.	
	}
	
	return true;
	
}//End of ValidateDateComparision


function clearDataTable(TableId){ 
	 $('#'+TableId).dataTable().fnClearTable(); 
	 $("#"+TableId).dataTable( { 
		 destroy: true,
		   responsive: false,         
		   ordering: true,
		   sereasnhing: false,     
		   scrollY:  "40vh",
		   scrollX: true,
		   scroller: false,
		   scrollCollapse:false,
		   paging:false, 
		   filter:false,   
		   columnDefs: [], 
		   dom: '<<"top" ip>flt>',  
		} ); 
		 
}

function clearMasterDataTable(TableId){
	 $('#'+TableId).dataTable().fnClearTable();
	 $("#"+TableId).dataTable().fnDestroy();  
	 $("#"+TableId).dataTable( { 
			scrollCollapse: false,
		    paging:false,
		    info : true,
		    filter:false,
		    fixedHeader: {
	            header: true,
	            footer: true
	        }, 
		    oLanguage: {"sEmptyTable": DATATABLE_ERROR,"sInfoEmpty": DATATABLE_ERROR },
		} ); 
		 
		 
}


function datatableDeleteRow(tblId,datatbl,tblSel,eIcon,dIcon){ 
	
	
	var flg=true;
	var rowCount = datatbl.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	
	$('#'+tblId+' tbody').find('input[type=checkbox],input[type=radio]').each(function(){
		if($(this).is(":checked")){
			isOneRowSelected=true;
		}
	});
	

	if(!isOneRowSelected){ 		
		applyToastrAlert("No Rows Selected");
		flg=false;
	}
	
	
	if(flg){
	$("#confirmationalertmsgdiv #confalertimg").html(""); 
	$("#confirmationalertmsgdiv #confalertmsg").html("Are you sure to delete the row?");
	$('#confirmationalertmsgdiv').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true,
		}); 
	$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
		$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
			$('#'+tblId+' tbody').find('input[type=checkbox],input[type=radio]').each(function(){
				if($(this).is(":checked")){

					var row = $(this).parents("tr");                                    
					var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
					var $rowref = row.find("td:first").find('input:eq(2)').val();
					//alert("$rowref---"+$rowref);
					if(mode == INS_MODE){ //comment for instant save
//						datatbl.row($(this).parent().parent()).remove().draw(); 
						$(this).parents("tr").hide();
						$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);
					}else if (mode == QRY_MODE || mode == UPD_MODE){   //comment for instant save
						$(this).parents("tr").hide();
						$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);    //comment for instant save   		     			
//						row.find("td").css({border:'1px solid red'}); //comment for instant save
//						<!--changes done 19/06/2019 -->
//						$(this).closest("tr").hide(); 
					} //comment for instant save
					
					if(tblId == "srsTable"){
						deleteAllRetPlanByRefId($rowref);
						reOrderVisibleRows("IncAssRetPlgtbl");
						//reOrderLifeInsVisibleRows(tblId);
					}

					reOrderVisibleRows(tblId);
					//reOrderLifeInsVisibleRows(tblId);
//					instantDelete(tblId,row);//instant save added line
					$(this).attr("checked",false);
					isOneRowSelected=true;
					
				}
			});
			
			
			
//			if(rowCount==1 && isOneRowSelected){ 
//				datatbl.clear().draw(); 
//			}

			
			   
				reOrderVisibleRows(tblId);
				//reOrderLifeInsVisibleRows(tblId);
				recalculateFooters(tblId);
			
				$('#confirmationalertmsgdiv').modal('hide');  
				var rc = datatbl.row().count();
				if(rc ==0){
					$('#'+tblSel).prop("checked",false);
					crudicons(null,tblId,tblSel,eIcon,dIcon);
				}
			  	
		  });
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
			  	$('#confirmationalertmsgdiv').modal('hide');  
			  	
		  });
		
	});
	}

//	clearEmptyRows(); 
	
}

function datatabledepDeleteRow(tblId,datatbl,tblSel,eIcon,dIcon){ 
	
	var flg=true;
	//var rowCount = datatbl.row().count();
	var rowCount = $('#deptParticularsTableNew tbody tr').length;
	
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	
	$('#'+tblId+' tbody').find('input[type=checkbox],input[type=radio]').each(function(){
		if($(this).is(":checked")){
			isOneRowSelected=true;
		}
	});
	

	if(!isOneRowSelected){ 		
		applyToastrAlert("No Rows Selected");
		flg=false;
	}
	
	
	if(flg){
	$("#confirmationalertmsgdiv #confalertimg").html(""); 
	$("#confirmationalertmsgdiv #confalertmsg").html("Are you sure to delete the row?");
	$('#confirmationalertmsgdiv').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true,
		}); 
	$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
		$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
			$('#'+tblId+' tbody').find('input[type=checkbox],input[type=radio]').each(function(){
				if($(this).is(":checked")){

					var row = $(this).parents("tr");                                    
					var mode = $(this).parents("tr").find("td").find('input[name=txtFlddeptMode]').val();
					var $rowref = row.find("td:first").find('input:eq(2)').val();
					if(mode == INS_MODE){ //comment for instant save
//						datatbl.row($(this).parent().parent()).remove().draw(); 
						$(this).parents("tr").hide();
						$(this).parents("tr").find("td").find('input[name=txtFlddeptMode]').val(DEL_MODE);
					}else if (mode == QRY_MODE || mode == UPD_MODE){   //comment for instant save
						$(this).parents("tr").hide();
						$(this).parents("tr").find("td").find('input[name=txtFlddeptMode]').val(DEL_MODE);    //comment for instant save   		     			
//						row.find("td").css({border:'1px solid red'}); //comment for instant save
//						<!--changes done 19/06/2019 -->
//						$(this).closest("tr").hide(); 
					} //comment for instant save
					
					if(tblId == "srsTable"){
						deleteAllRetPlanByRefId($rowref);
						reOrderVisibleRows("IncAssRetPlgtbl");
						//reOrderLifeInsVisibleRows(tblId);
					}

					reOrderVisibleRows(tblId);
					//reOrderLifeInsVisibleRows(tblId);
//					instantDelete(tblId,row);//instant save added line
					$(this).attr("checked",false);
					isOneRowSelected=true;
					
				}
			});
			
			
			
//			if(rowCount==1 && isOneRowSelected){ 
//				datatbl.clear().draw(); 
//			}

			
			   
				reOrderVisibleRows(tblId);
				//reOrderLifeInsVisibleRows(tblId);
				recalculateFooters(tblId);
			
				$('#confirmationalertmsgdiv').modal('hide');  
				//var rc = datatbl.row().count();
				var rc = $('#deptParticularsTableNew tbody tr').length;
				if(rc ==0){
					$('#'+tblSel).prop("checked",false);
					crudicons(null,tblId,tblSel,eIcon,dIcon);
				}
			  	
		  });
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
			  	$('#confirmationalertmsgdiv').modal('hide');  
			  	
		  });
		
	});
	}

//	clearEmptyRows(); 
	
}


function recalculateFooters(tblId){
	//if(tblId == "deptParticularsTable"){DpdcalculateRow();} //Depandant Particulars
	if(tblId == "deptParticularsTableNew"){DpndcalculateRow();} //Depandant Particulars
	if(tblId == "personalAssetTbl" || tblId == "businessAssetTbl"){calcTotalLiabilitiesLoan();}	 //Assets  
	if(tblId == "fnaVehiOwnTbl"){vehowncalculateRow();calcVehLnRepayment();} //Vehicle Ownership
	if(tblId == "RDExptbl"){getRDcfExpDets();} 
	if(tblId == "RDInctbl" || tblId == "RDIncAsstbl"){getRDcfIncDets();}  
	if(tblId == "liEducationtbl"){totalPvRetEdPlgTerEdAge();}  
	if(tblId == "liEduPayoutstbl"){totalPvTerEdAge();} 
	if(tblId == "liDisabilitytbl"){/*calcTotalPlandetails();*/ilifeInsPremium(null);calcTotSAPremPlandetails();}
	if(tblId == "liRaiderDetailstbl"){/*calcTotalPlandetails();*/ilifeInsPremium(null);calcTotSAPremPlandetails();};
} 


function syncdatatableDeleteRow(tblId,datatbl){
	var rowCount = $('#'+tblId+' tbody tr').length;	 
	  
	$('#'+tblId+' tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){

			var row = $(this).parents("tr");                                    
			var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();

			if(mode == INS_MODE){
				 
				datatbl.row($(this).parent().parent()).remove().draw();

			}else if (mode == QRY_MODE){    

				$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				row.find("td").css({border:'1px solid red'});
			}
 
			
		}
	});
	
	if(rowCount==1){
		datatbl.clear().draw();
	}

	
	 
	reorderSino(tblId);
//	clearEmptyRows(); 
	
}
function reorderSino(tblid){
	$("#"+tblid+" tbody").find('tr td').find("span").each(function(){
		 var sino=$(this).parent().parent().index()+1; 
	      $(this).text(sino);	         
	  });
}

function reOrderVisibleRows(tbleID){
	   var sino=1; 
	$("#"+tbleID+" tbody").find('tr:visible td').find("span").each(function(){ 
		var row = $(this).closest("tr");
//		var len = Number(row.find("td:eq(1)").find("div:eq(0)").is(":visible"));
		if(row.find("td:eq(1)").find("div:eq(0)").is(":visible")){
			  $(this).text(sino);	
		      sino++;  
		}
	    
	});
}

function reOrderLifeInsVisibleRows(tbleID){
	   var sino=1; 
	$("#"+tbleID+" tbody").find('tr:visible td').find("span").each(function(){ 
		var row = $(this).closest("tr");
//		var len = Number(row.find("td:eq(1)").find("div:eq(0)").is(":visible"));
		if(row.find("td:eq(1)").find("input:eq(0)").is(":visible")){
			  $(this).text(sino);	
		      sino++;  
		}
	    
	});
}
function clearEmptyRows(tblid){
	$("#"+tblid+"  tbody").find('tr.odd').each(function(){
        $(this).remove();        
     
    });
	
}
function removeDatatableRows(tblid){
	$("#"+tblid+"  tbody").find('tr.odd').each(function(){
        $(this).remove();        
     
    });
	
}

function clrDatatables(TableId){
	var table = $('#'+TableId).DataTable();
	var rows = table.rows().remove().draw();
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
}

function MultiTblRowSyncDel(tblId,datatbl){
	var rowCount = $('#'+tblId+' tbody tr').length;	 
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	}
	var isOneRowSelected=false;
	$('#'+tblId+' tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){
			
			 
			var row = $(this).parents("tr");                                    
			var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
			var refId=$(this).parents("tr").attr("rowrefid");
			
			if(refId == "" || refId== undefined){
				datatableDeleteRow(tblId,datatbl); 
			}else{ 
					
				var refTbl=refId.split("-")[0]; 
				$("#IncAssRetPlgtbl tr[rowrefid='"+refId+"']").each(function(){
					IncAssRetPlgtbl.row($(this)).remove().draw();
				});	
				
				$("#RDIncAsstbl tr[rowrefid='"+refId+"']").each(function(){
					RDIncAsstbl.row($(this)).remove().draw();
				});	
				
				$("#fnaInvestmentTbl tr[rowrefid='"+refId+"']").each(function(){
					fnaInvestmentTbl.row($(this)).remove().draw();
				});	
				
				$("#fnaPropOwnTblByCPF tr[rowrefid='"+refId+"']").each(function(){
					fnaPropOwnTblByCPF.row($(this)).remove().draw();
				});
				
				$("#cashOfBanksTable tr[rowrefid='"+refId+"']").each(function(){
					cashOfBanksTable.row($(this)).remove().draw();
				});
				
				
				if(refTbl=='LIFEREF'){
					$('#sellipIsnurObject').multiselect('deselect', ['RP']);
				}
			}
			 
			
			
			$(this).attr("checked",false);
			isOneRowSelected=true;
			
		}
	});
	if(rowCount==1){
		datatbl.clear().draw();
	}

	
	if(!isOneRowSelected){
		applyToastrAlert("No Rows Selected");
	} 
	reOrderVisibleRows("IncAssRetPlgtbl");
	reOrderVisibleRows("RDIncAsstbl");
	reOrderVisibleRows("fnaInvestmentTbl");
	reOrderVisibleRows("fnaPropOwnTblByCPF");
	reOrderVisibleRows("cashOfBanksTable");
//	clearEmptyRows(); 
	
}





function chkSpouseIncluded(){
	var clientmartstst = $("#dfSelfMartsts").val();
	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 	
	clientmartstst = isEmpty(clientmartstst) ? "" : clientmartstst.toUpperCase();
	if(clientmartstst == "SINGLE"){
//	if(analysisForSpouse){
		$(".clsfipaSpouse").prop("disabled",true);
		$(".clsfipaSpouse").val("");
	}else{
		$(".clsfipaSpouse").prop("disabled",false);
	}
//	console.log("client marital status ------->"+clientmartstst);
}
function chkTableDataLatestOrNot(){
//	???? 
	if(dataTableFlg){
		$("table.dataTable").find("input,select,checkbox").each(function(){
		  if(!$(this).is(":disabled")){
				$(this).addClass("disabledcls"); 
				if($(this).hasClass("disabledcls")){
					$(this).attr("disabled", true);
				} 
		  }
		}); 
	}else{
		$("table.dataTable").find("input,select,checkbox").each(function(){
			if($(this).hasClass("disabledcls")){
				$(this).attr("disabled", false);
			} 
		}); 
	}
}
function setSpsDisabled(){
	$(".clsfipaSpouse").prop("disabled",true);
	$(".clsfipaSpouse").val("");
}
function removeTooltip(elmid){

	if(isValidObject(elmid.val())){
		if(!isEmpty(elmid.val())){
			elmid.removeClass("mandatoryFillFlds");
			elmid.qtip('disable');
			elmid.qtip('destroy',true);
		}
	}
}

/*Age Start Validation - Load options from Retirement planning*/
function loadAgeStartEnd(startAgeElmId,basedOn){
	var selfAge=isEmpty($("#retSelfAge").val()) ? "" : Number($("#retSelfAge").val());	
	var spouseAge=isEmpty($("#retSpsAge").val()) ? "" : Number($("#retSpsAge").val()); 
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	var array=[];
	var agebasedOn="Self"/*basedOn.val()*/;
	
	var BasedOn=isEmpty(agebasedOn) ? "" : agebasedOn.toUpperCase();  
	
	
	if(BasedOn == "SELF"){
		if(!isEmpty(selfAge) && !isEmpty(selfProjage)){
			if (selfAge <= selfProjage) {
				   var option = ''; 
				  for(var i= selfAge; i<=selfProjage;i++)
					  {  
						  array.push(""+i+""); 
					  }  
			 } 
		}
	}else if(BasedOn == "SPOUSE"){
		if(!isEmpty(spouseAge) && !isEmpty(selfProjage)){
		if (spouseAge <= selfProjage) { 
			   var option = ''; 
			  for(var i=spouseAge; i<=selfProjage;i++)
				  {  
					  array.push(""+i+"");
				  }  
			}
		}
	}  
	
	/* var autocomplete = $('#txtFldDlgORAgePaySts').typeahead(); 
	 	 autocomplete.data('typeahead').source = array;
	 
	var autocomplete1 = $('#txtFldDlgIRAgePaySts').typeahead(); 
	autocomplete1.data('typeahead').source = array;
	var autocomplete2 = $('#txtFldDlgIncAssAgePaySts').typeahead(); 
	autocomplete2.data('typeahead').source = array;
	var autocomplete3 = $('#txtFldDlgRetPlgCommOfAge').typeahead(); 
	autocomplete3.data('typeahead').source = array;
	var autocomplete4 = $('#txtFldDlgprojORAgePaySts').typeahead(); 
	autocomplete4.data('typeahead').source = array;
	var autocomplete5 = $('#txtFldDlgprojIRAgePaySts').typeahead(); 
	autocomplete5.data('typeahead').source = array;
	var autocomplete6 = $('#txtFldDlgprojIncAssAgePaySts').typeahead(); 
	autocomplete6.data('typeahead').source = array;
	var autocomplete7 = $('#cashvalRetAge').typeahead(); 
	autocomplete7.data('typeahead').source = array;*/
}

 
/*Age End Validation -  Load options from Retirement planning*/
function loadAgeEnd(ageStartElmId,ageEndElmId){
	var ageProj=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val()); 
	var start=isEmpty(ageStartElmId.val()) ? "" : Number(ageStartElmId.val());
	
		ageEndElmId.find('option').remove();
		ageEndElmId.empty().append('<option value="">--SELECT--</option>'); 
		if(!isEmpty(start)){
		if(start < ageProj) {//56<90 
				   var option = ''; 
				  for(var i=start; i< ageProj;i++)
					  { 
						  option = '<option value="' + i + '">' +i+  '</option>';  
						  ageEndElmId.append(option);
					  } 
			   }
			} 
}

function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function addyearsToDate(date,durableYears){
	 var str =date;
//	 if(durableYears == 0)durableYears =1;

     if( /^\d{2}\/\d{2}\/\d{4}$/i.test( str ) ) {

         var parts = str.split("/");

         var day = parts[0] && parseInt( parts[0], 10 );
         var month = parts[1] && parseInt( parts[1], 10 );
         var year = parts[2] && parseInt( parts[2], 10 );
         var duration = parseInt( durableYears, 10);

         if( day <= 31 && day >= 1 && month <= 12 && month >= 1 ) {

             var expiryDate = new Date( year, month - 1, day );
             expiryDate.setFullYear( expiryDate.getFullYear() + duration );
             expiryDate.setDate(expiryDate.getDate()-1);

             var day = ( '0' + expiryDate.getDate() ).slice( -2 );
             var month = ( '0' + ( expiryDate.getMonth() + 1 ) ).slice( -2 );
             var year = expiryDate.getFullYear();

//             $("#expires").val( day + "/" + month + "/" + year );

             return day + "/" + month + "/" + year;
         } 
     }
}




function getYears(from, to) {


	var date1 = from.split("/")[2] + "-" + from.split("/")[1] + "-" + from.split("/")[0];
	var date2 = to.split("/")[2] + "-" + to.split("/")[1] + "-" + to.split("/")[0];
	
	
    var d1 = new Date(date1),
        d2 = new Date(date2),
        yr = [];
    
    var diff_date =  d2 - d1;
    
//    for (var i=d1.getFullYear(); i<=d2.getFullYear(); i++) {
//        yr.push( i );
//    }
//    console.log(yr)
//    return yr.length-1;
    
    var years = Math.floor(diff_date/31536000000);
//    console.log("years-------->"+years)
    return years;
}


function crudicons(obj,tableid,selectid,editid,delid){
//	DHTML SELECT ALL	
//	var chkd = $(this).prop("checked");
	var rc = $('#'+tableid+' tbody tr').length;//chldpartTbl.row().count();
	var isOneRowSelected=0;
	
	if(rc > 0){
		
		$('#'+tableid+' tbody tr').find("td:eq(1)").find("input[type=checkbox]").each(function(){ //Checkbox selection
			var $curElm=$(this);
			if($curElm.is(":checked")){ 
				isOneRowSelected++;
			}
		});
		if(isOneRowSelected == rc){
			$("#"+selectid).prop("checked",true);
		}else{
			$("#"+selectid).prop("checked",false);
		}
		
		if(isOneRowSelected == 0){	 
			/*$("#"+editid).attr("disabled",true);
			$("#"+delid).attr("disabled",true);*/
		}else if(isOneRowSelected == 1){
			$("#"+editid).attr("disabled",false);
			$("#"+delid).attr("disabled",false);
		}else if(isOneRowSelected > 1){
			/*$("#"+editid).attr("disabled",true);*/
			$("#"+delid).attr("disabled",false);
		} 
	} 
//	DHTML SELECT ALL
}


function showErrorTip(obj,message){
	$(obj).qtip({
		content: {text : '' + message +'' ,title : ' FIPA - Notification ',button: true},
        //show: 'keypress',
        hide: 'keypress',        
        style: {
            classes: 'qtip-red qtip-rounded qtip-shadow'
        }, position: {
            my: 'top left',   
            at: 'bottom left', 
            viewport: $(window),
            target: $(obj)  
        }  
    });
	
	$(obj).qtip('show');
	
	setInterval(function(){
		$(obj).qtip('hide');
		$(".qtip").remove();
		}, 2500);
}

function NPER(rate, payment, present, future, type) {
	  // Initialize type
	  var type = (typeof type === 'undefined') ? 0 : type;

	  // Initialize future value
	  var future = (typeof future === 'undefined') ? 0 : future;

	  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
	  rate = eval(rate);

	  // Return number of periods
	  var num = payment * (1 + rate * type) - future * rate;
	  var den = (present * rate + payment * (1 + rate * type));
	  return Math.log(num / den) / Math.log(1 + rate);
	}



function makeid(length) {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return ("AS_"+result).toUpperCase();
	}

function newMakeId(prefix,length){
	return (prefix+"_"+Math.random().toString(25).substring(2,length)).toUpperCase();
}

function currencyFormat(num) {
	  return '$ '+ num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	
function chkJsonValExist(jsonarray,valueToFind){
	var matchingId ="";
	if(jsonarray.length > 0 ){
		for (var index = 0; index < jsonarray.length; ++index) {

			 var child = jsonarray[index];

			 if(child.childName == valueToFind){
				 matchingId = child.childid;
				 break;
			 }
			}	
	}

	
	
	return matchingId;
}

(function($){
	$.fn.UItoTop = function(options) { 
 		var defaults = {
    			text: 'To Top',
    			min: 100,
    			inDelay:600,
    			outDelay:400,
      			containerID: 'toTop',
    			containerHoverID: 'toTopHover',
    			scrollSpeed: 1200,
    			easingType: 'linear'
 		    },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#'+settings.containerHoverID;
		
		$('section[class=content]').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		$(containerIDhash).hide().on('click.UItoTop',function(){
			$('section[class=content]').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
					
		$('section[class=content]').scroll(function() {
			var sd = $('section[class=content]').scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $('section[class=content]').height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).fadeIn(settings.inDelay);
			else 
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
};
})(jQuery);


function getFrequencyDigit(rspfreq,defltval){
	
	var rsp_freq = defltval || 1;
	switch (rspfreq) {
		case "ANNUAL":
			rsp_freq = 1;
			break;
		case "SEMI ANNUAL":
		case "HALF YEARLY":
			rsp_freq = 2;
			break;
		case "QUARTERLY":
			rsp_freq = 4;
			break;
		case "MONTHLY":
			rsp_freq = 12;
			break;
		case "SINGLE":
			rsp_freq = 1;
			break;

	}

	/*if(rspfreq == 'ANNUAL'){
		 TopUpAmt=1;
	 }else if(rspfreq == 'SEMI ANNUAL'){
		 TopUpAmt=2;
	 }else if(rspfreq == 'QUARTERLY'){
		 TopUpAmt=4;
	 }else if(rspfreq == 'MONTHLY'){
		 TopUpAmt=12;
	 }else if(rspfreq == 'SINGLE'){
		 TopUpAmt=0;
	 }*/
	
	
	/*if(paymode == 'ANNUALLY'){
			TopUpAmt=1;
		}else if(paymode == 'HALF YEARLY'){
			TopUpAmt=2;
		}else if(paymode == 'QUARTERLY'){
			TopUpAmt=4;
		}else if(paymode == 'MONTHLY'){
			TopUpAmt=12;
		}else if(paymode == 'SINGLE'){
			TopUpAmt=1;
		}*/
	
	return rsp_freq;
}




function getCPFAccDets(paymentmtd){
	var cpfacc="",ccid="";
	 
	 if(paymentmtd == "CPFOA"){cpfacc="Ordinary";ccid="CPFACC000001";}
	 else if(paymentmtd == "CPFSA"){cpfacc="Special";ccid="CPFACC000002";}
	 else if(paymentmtd == "CPFMA"){cpfacc="Medisave";ccid="CPFACC000003";}
	 else if(paymentmtd == "CPFRA"){cpfacc="Retirement";ccid="CPFACC000004";}
	 else {cpfacc="";ccid="";}
	
	var retarr = new Array(cpfacc,ccid);
	return retarr ;
}



function chkCPFRowExist(rowRefID){
	var $tblCpfRow = null;
	 $("#cpfAccAddDedTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblCpfRow = currrow;
		 } 
	});
	return $tblCpfRow;
}

function deleteCPFByRefId($rowref){
	var rowexistcpfdel = chkCPFRowExist($rowref);
	 
	 if(rowexistcpfdel){
		 
		 var mode = rowexistcpfdel.find("td:first").find('input:eq(0)').val();

			if(mode == INS_MODE){ 
				rowexistcpfdel.hide();
				rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
			}else if (mode == QRY_MODE || mode == UPD_MODE){
				rowexistcpfdel.hide();
				rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
			} 

			reOrderVisibleRows("cpfAccAddDedTable");
	 }
}

function chkCPFMultiRowExist(rowRefID){
	var $tblRetRow = null;
	var cpfAccAddDedTablelen = cpfAccAddDedTable.rows().count();
	if(cpfAccAddDedTablelen > 0){
		 $("#cpfAccAddDedTable tbody tr").each(function(){
			 var currrow = $(this);
			 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
			 if(currrowrefid.indexOf(rowRefID) != -1){
				 return $tblRetRow = currrow;
			 } 
		});
	}
	
	
	return $tblRetRow;
}

function deleteCPFMultiByRefId($rowref){
	var cpfAccAddDedTablelen = cpfAccAddDedTable.rows().count();
	if(cpfAccAddDedTablelen > 0){
		 $("#cpfAccAddDedTable tbody tr").each(function(){
			 var row = chkCPFMultiRowExist($rowref);
	
			 if(row){
				 
				 var mode = row.find("td:first").find('input:eq(0)').val();
	
					if(mode == INS_MODE){ 
						row.hide();
						row.find("td:first").find('input:eq(0)').val(DEL_MODE);
					}else if (mode == QRY_MODE || mode == UPD_MODE){
						row.hide();
						row.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
					} 
	
					reOrderVisibleRows("cpfAccAddDedTable");
			 }
			 
		 });
	}	 
}

function deleteAllCPFByRefId(syncRef){
	var cpfAccAddDedTablelen = cpfAccAddDedTable.rows().count();
	if(cpfAccAddDedTablelen > 0){
		$("#cpfAccAddDedTable tbody tr").each(function(){
			
			var cpfCurRef = $(this).find("td:eq(0)").find("input:eq(2)").val();
			var cpfCurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			
			if(cpfCurRef == syncRef){
				if(cpfCurMode == INS_MODE){ 
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE); 
					$(this).hide();
//					cpfAccAddDedTable.row($(this)).remove().draw(); 
				}else if (cpfCurMode == QRY_MODE|| cpfCurMode == UPD_MODE){    
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
					$(this).find("td").css({border:'1px solid red'});  
				} 
			}
			
			reOrderVisibleRows("cpfAccAddDedTable");
		});
		
		
	}
}

/*function chkCPFRowExist(rowRefID){
	var $tblCpfRow = null;
	 $("#cpfAccAddDedTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblCpfRow = currrow;
		 } 
	});
	return $tblCpfRow;
}*/

/*function chkNLifeRowCPFExist(rowRefID){
	var $tblCpfRow = null;
	 $("#cpfAccAddDedTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblCpfRow = currrow;
		 } 
	});
	return $tblCpfRow;
}*/

/*function chkCPFRowExist(rowRefID){
	var $tblCpfRow = null;
	 $("#cpfAccAddDedTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblCpfRow = currrow;
		 } 
	});
	return $tblCpfRow;
}*/

/*function chkRetrPlanRowExist(rowRefID){
	var $tblRPRow = null;
	 $("#IncAssRetPlgtbl tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblRPRow = currrow;
		 } 
	});
	return $tblRPRow;
}*/

/*function chkRPIncAssetRowExist(rowRefID){
	var $tblRetRow = null;
	 $("#IncAssRetPlgtbl tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblRetRow = currrow;
		 } 
	});
	return $tblRetRow;
}*/
function chkRPIncAssetRowExist(rowRefID){
	var $tblRetRow = null;
	var rc = IncAssRetPlgtbl.rows().count();
	if(rc > 0){
		 $("#IncAssRetPlgtbl tbody tr").each(function(){
			 var currrow = $(this);
			 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
			 if(rowRefID == currrowrefid){
				 return $tblRetRow = currrow;
			 } 
		});	
	}
	
	return $tblRetRow;
}



function deleteRetPlanByRefId($rowref){
	
	var rc = IncAssRetPlgtbl.rows().count();
	if(rc > 0){
	
	 var rowexistRPIncAss = chkRPIncAssetRowExist($rowref);

	 if(rowexistRPIncAss){
		 
		 var mode = rowexistRPIncAss.find("td:first").find('input:eq(0)').val();

			if(mode == INS_MODE){ 
				rowexistRPIncAss.hide();
				rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);
			}else if (mode == QRY_MODE || mode == UPD_MODE){
				rowexistRPIncAss.hide();
				rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
			} 

			reOrderVisibleRows("IncAssRetPlgtbl");
	 }
	}
	
}

function deleteAllRetPlanByRefId(rowRefID){
	
	var rc = IncAssRetPlgtbl.rows().count();
	if(rc > 0){
	 $("#IncAssRetPlgtbl tbody").find("tr").each(function(){
		 
		 var mode = $(this).find("td:first").find('input:eq(0)').val();
		 var refid = $(this).find("td:eq(0)").find("input:eq(2)").val();
		 
		 if(rowRefID == refid){ 
		
			 if(mode == INS_MODE){ 
					$(this).hide();
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);
				}else if (mode == QRY_MODE || mode == UPD_MODE){
					$(this).hide();
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
				} 
			 
		 }
			
	  	   reOrderVisibleRows("IncAssRetPlgtbl");  
	     })
	} 
	   
}

function chkRPIncAssetMultiRowExist(rowRefID){
	
	var $tblRetRow = null;
	var rc = IncAssRetPlgtbl.rows().count();
	if(rc > 0){
	
	 $("#IncAssRetPlgtbl tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(currrowrefid.indexOf(rowRefID) != -1){
			 return $tblRetRow = currrow;
		 } 
	});
	}
	return $tblRetRow;
}

function deleteRetPlanMultiByRefId($rowref){
	var rc = IncAssRetPlgtbl.rows().count();
	if(rc > 0){
	
	 $("#IncAssRetPlgtbl tbody tr").each(function(){
		 var rowexistRPIncAss = chkRPIncAssetMultiRowExist($rowref);

		 if(rowexistRPIncAss){
			 
			 var mode = rowexistRPIncAss.find("td:first").find('input:eq(0)').val();

				if(mode == INS_MODE){ 
					rowexistRPIncAss.hide();
					rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);
				}else if (mode == QRY_MODE || mode == UPD_MODE){
					rowexistRPIncAss.hide();
					rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
				} 

				reOrderVisibleRows("IncAssRetPlgtbl");
		 }
		 
	 });
	}
}

/*function chkNLifeRetExist(rowRefID){
	var $tblRetRow = null;
	 $("#IncAssRetPlgtbl tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblRetRow = currrow;
		 } 
	});
	return $tblRetRow;
}*/


 
function chkSRSRowExist(rowRefID){
	var $tblCpfRow = null;
	
	var rc = srsTable.rows().count();
	if(rc>0){
		 $("#srsTable tbody tr").each(function(){
			 var currrow = $(this);
			 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
			 if(rowRefID == currrowrefid){
				 return $tblCpfRow = currrow;
			 } 
		});
	}
	
	return $tblCpfRow;
}

function deleteSRSByRefId($rowref){
	var rc = srsTable.rows().count();
	if(rc > 0){
		 var rowexistsrsdel = chkSRSRowExist($rowref);
		 if(rowexistsrsdel){
			 
			 var mode = rowexistsrsdel.find("td:first").find('input:eq(0)').val();

				if(mode == INS_MODE){ 
					rowexistsrsdel.hide();
					rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
				}else if (mode == QRY_MODE || mode == UPD_MODE){
					rowexistsrsdel.hide();
					rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
				} 

				reOrderVisibleRows("srsTable");
		 }
	}
	
}

function deleteAllSRSByRefId(syncRef){
	
	var srsTablelen = srsTable.rows().count();
	if(srsTablelen > 0){
		$("#srsTable tbody tr").each(function(){
			
			var srsCurRef = $(this).find("td:eq(0)").find("input:eq(2)").val();
			var srsCurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			
					if(srsCurRef == syncRef){
						if(srsCurMode == INS_MODE){ 
//							srsTable.row($(this)).remove().draw(); 
							$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);  
							$(this).hide();
						}else if (srsCurMode == QRY_MODE || srsCurMode == UPD_MODE){    
							$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
							$(this).find("td").css({border:'1px solid red'});  
						} 
					}
		});
		
		reOrderVisibleRows("srsTable");
	}
}
function chkSRSMultiRowExist(rowRefID){
	var $tblRetRow = null;
	
	var srsTablelen = srsTable.rows().count();
	if(srsTablelen > 0){
	 $("#srsTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(currrowrefid.indexOf(rowRefID) != -1){
			 return $tblRetRow = currrow;
		 } 
	});
	}
	return $tblRetRow;
}

function deleteSRSMultiByRefId($rowref){
	
	var srsTablelen = srsTable.rows().count();
	if(srsTablelen > 0){
	 $("#srsTable tbody tr").each(function(){
		 var row = chkSRSMultiRowExist($rowref);

		 if(row){
			 
			 var mode = row.find("td:first").find('input:eq(0)').val();

				if(mode == INS_MODE){ 
					row.hide();
					row.find("td:first").find('input:eq(0)').val(DEL_MODE);
				}else if (mode == QRY_MODE || mode == UPD_MODE){
					row.hide();
					row.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
				} 

				reOrderVisibleRows("srsTable");
		 }
		 
	 });
	}
}

/*function chkNLifeSRSExist(rowRefID){
	var $tblSRSRow = null;
	 $("#srsTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblSRSRow = currrow;
		 } 
	});
	return $tblSRSRow;
}*/




function chkRetMultiRowExist(rowRefID){
	var $tblCpfRow = null;
	 $("#liRetirementPlgtbl tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID.indexOf(currrowrefid) != -1){
			 return $tblCpfRow = currrow;
		 } 
	});
	return $tblCpfRow;
}

function deleteRetMultiByRefId($rowref){
	 var rowexistsrsdel = chkRetMultiRowExist($rowref);
	 if(rowexistsrsdel){
		 
		 var mode = rowexistsrsdel.find("td:first").find('input:eq(0)').val();

			if(mode == INS_MODE){ 
				rowexistsrsdel.hide();
				rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
			}else if (mode == QRY_MODE || mode == UPD_MODE){
				rowexistsrsdel.hide();
				rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
			} 

			reOrderVisibleRows("liRetirementPlgtbl");
	 }
}



function chkCoverageExists(covertype,$planPKId){
	
	var exists = null;
	var len = planCoveragestbl.rows().count();
	if(len >0){
	 $('#planCoveragestbl tbody tr').each(function(){
		 
		 var currrow = $(this);
		 
		 var strTypeofCov =currrow.find("td:eq(5)").find('input:eq(0)').val();
		 var strPlanPKId =currrow.find("td:eq(4)").find('input:eq(0)').val();
		 
		 
		 if(strTypeofCov == covertype && strPlanPKId == $planPKId){
			 return exists = currrow;
			 
		 }		 
	 });
	}
	 return exists;
}



function childexist(){
	var chklength=chldpartTbl.rows().count();
	if(chklength > 0){  
		$(".chkchildexist").addClass("hidden");
	}else{
		$(".chkchildexist").removeClass("hidden");
	}
}

function chkSelfSpsExist(){
	var selfName = $("#dfSelfName").val();
	if(isEmpty(selfName)){
		return false;	
	}
	return true;
}

$("#txtFldDlgMainAccHolderName, #lipAssured, #txtFldDlgCADApplicant").on("click",function(){
	if(!chkSelfSpsExist()){
		showErrorTip($(this),"No Client Name in Client Particulars");
	}
});

function isCashRelated(paymtd){
	
//	paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
//	 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"
	
//	paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
//	paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"
	
//	(paymtd ==  "CASH" || paymtd ==  "CHEQUE" || paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" || 
//			 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ")
	
	if(paymtd.toUpperCase() ==  "CASH" || paymtd.toUpperCase() ==  "CHEQUE" ||	 paymtd.toUpperCase() ==  "CREDIT-CARD" || paymtd.toUpperCase() ==  "GIRO - POSB" ||
	 paymtd.toUpperCase() ==  "TT" || paymtd.toUpperCase() ==  "GIRO - OTHERS" || paymtd.toUpperCase() ==  "CASH CARD" || paymtd.toUpperCase() ==  "CASH/CHQ")
		return true;
	else
		return false;
}

function isCPFRelated(paymtd){
	
	
	if(paymtd.toUpperCase() ==  "CPF" || paymtd.toUpperCase() ==  "CPFOA" ||
			paymtd.toUpperCase() ==  "CPFSA" || paymtd.toUpperCase() ==  "CPFMA" || paymtd.toUpperCase() ==  "CPFRA" || paymtd.toUpperCase().indexOf("CPF") == 0 )
		return true;
	else
		return false;
}

function isSRSRelated(paymtd){
	
	
	if(paymtd.toUpperCase() ==  "SRS" )
		return true;
	else
		return false;
}

//
//$('#myModal').on('keypress', function (event) {
//	  alert("BEFORE ENTER clicked");
//	  var keycode = (event.keyCode ? event.keyCode : event.which);
//	  if(keycode == '13'){
//	    alert("AFTER ENTER clicked");
//	    $('#getDataBt').click();   
//	  }
//	});




function getMaxValJsonByKey(jsonArrofObj, prop) {
    var max;
    for (var i=0 ; i<jsonArrofObj.length ; i++) {
        if (max == null || parseInt(jsonArrofObj[i][prop]) > parseInt(max[prop]))
            max = jsonArrofObj[i];
    }
    return max;
}


function openBackToFundFlow(elmtofocus){
	/* if($("#"+elmtofocus).hasClass("blinking")){
			$("#"+elmtofocus).removeClass("blinking");
		}*/ 
		$("#cashflowst_li").click();	 
	    $("#ExpensesTab").attr('checked', true).trigger('click');
	    if($("#"+elmtofocus).hasClass("blinking")){
			$("#"+elmtofocus).removeClass("blinking");
		}
		$("#"+elmtofocus).addClass("blinking"); 
		$("#"+elmtofocus).focus();
}



function openBackToFundFlowFromInv(elmtofocus){
	 /*if($("#"+elmtofocus).hasClass("blinking")){
			$("#"+elmtofocus).removeClass("blinking");
		}*/ 
		$("#cashflowst_li").click();	 
	    $("#IncomeTab").attr('checked', true).trigger('click');
	    if($("#"+elmtofocus).hasClass("blinking")){
			$("#"+elmtofocus).removeClass("blinking");
		}
		$("#"+elmtofocus).addClass("blinking"); 
		$("#"+elmtofocus).focus();
}


/*function openBackToFundFlowPge(){
	alert("dasdadsada");
	 if($("#incsrcSelfNempDivdamt").hasClass("blinking")){
			$("#incsrcSelfNempDivdamt").removeClass("blinking");
		} 
		
		$("#cashflowst_li").click();	
		//$("#cashflowst_li").trigger("click");
		$("#incsrcSelfNempDivdamt").addClass("blinking"); 
		$("#incsrcSelfNempDivdamt").focus();
}*/

function setDefltCurrAssmVal(){
	if(isEmpty($("#caSelfRoi").val())){
		$("#caSelfRoi").val("3.00")
	}
	if(isEmpty($("#caSpsRoi").val())){
		$("#caSpsRoi").val("3.00")
	}
	if(isEmpty($("#caFamRoi").val())){
		$("#caFamRoi").val("3.00")
	}
	
	if(isEmpty($("#caProjSelfRoi").val())){
		$("#caProjSelfRoi").val("3.00")
	}
	if(isEmpty($("#caProjSpsRoi").val())){
		$("#caProjSpsRoi").val("3.00")
	}
	if(isEmpty($("#caProjFamRoi").val())){
		$("#caProjFamRoi").val("3.00")
	}
	
	if(isEmpty($("#caGenInfrate").val())){
		$("#caGenInfrate").val("3.00")
	}
	if(isEmpty($("#caEdnInfrate").val())){
		$("#caEdnInfrate").val("4.00")
	}
	if(isEmpty($("#caSavingDeprate").val())){
		$("#caSavingDeprate").val("1.50")
	}
	if(isEmpty($("#caBonds").val())){
		$("#caBonds").val("4.00")
	}
	if(isEmpty($("#caUtilp").val())){
		$("#caUtilp").val("6.00")
	}
	if(isEmpty($("#caShares").val())){
		$("#caShares").val("7.00")
	}
	if(isEmpty($("#caOthinv").val())){
		$("#caOthinv").val("8.00")
	}
	if(isEmpty($("#caSRSSatRetAge").val())){
		$("#caSRSSatRetAge").val("62")
	}
	
}

function setDefltContingVal(){
	

	$("#sdLivingneedSpsPrcnt").val("100");
	$("#sdLivingneedChildPrcnt").val("100");
	$("#sdLivingneedFamilyPrcnt").val("100");
	
	$("#spdLivingneedSpsPrcnt").val("100");
	$("#spdLivingneedChildPrcnt").val("100");
	$("#spdLivingneedFamilyPrcnt").val("100");
	
	
	$("#tpdSelfLivingneedPrcnt").val("100");
	$("#tpdSpsLivingneedPrcnt").val("100");
	$("#tpdChildLivingneedPrcnt").val("100");
	$("#tpdFamilyLivingneedPrcnt").val("100");
	
	
	$("#tpdsSelfLivingneedPrcnt").val("100");
	$("#tpdsSpsLivingneedPrcnt").val("100");
	$("#tpdsChildLivingneedPrcnt").val("100");
	$("#tpdsFamilyLivingneedPrcnt").val("100");
	
	
	$("#ciSelfLivingneedPrcnt").val("100");
	$("#ciSpsLivingneedPrcnt").val("100");
	$("#ciChildLivingneedPrcnt").val("100");
	$("#ciFamilyLivingneedPrcnt").val("100");
	
	$("#cisSelfLivingneedPrcnt").val("100");
	$("#cisSpsLivingneedPrcnt").val("100");
	$("#cisChildLivingneedPrcnt").val("100");
	$("#cisFamilyLivingneedPrcnt").val("100");
	
	
	
	
}

function fipaNext(){
	   if($("#hTxtMenuName").val() == "#searchpage"){
			if($('a[href="#typesofappln"]').parent().hasClass("submenu")){
				$('a[href="#typesofappln"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
				if($('a[href="#typesofappln"]').parent().closest("li.secondlevel")){
					$('a[href="#typesofappln"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
				}
			}
			$('a[href="#typesofappln"]').trigger("click");
			
			
	}
	else if($("#hTxtMenuName").val() == "#typesofappln"){
		if($('a[href="#particular"]').parent().hasClass("submenu")){
			$('a[href="#particular"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#particular"]').parent().closest("li.secondlevel")){
				$('a[href="#particular"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#particular"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#particular"){
		if($('a[href="#fingoalsdiv"]').parent().hasClass("submenu")){
			$('a[href="#fingoalsdiv"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#fingoalsdiv"]').parent().closest("li.secondlevel")){
				$('a[href="#fingoalsdiv"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#fingoalsdiv"]').trigger("click");
		/*if($('a[href="#sourceofincome"]').parent().hasClass("submenu")){
			$('a[href="#sourceofincome"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#sourceofincome"]').parent().closest("li.secondlevel")){
				$('a[href="#sourceofincome"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#sourceofincome"]').trigger("click");*/
	}
	else if($("#hTxtMenuName").val() == "#fingoalsdiv"){
		if($('a[href="#sourceofincome"]').parent().hasClass("submenu")){
			$('a[href="#sourceofincome"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#sourceofincome"]').parent().closest("li.secondlevel")){
				$('a[href="#sourceofincome"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#sourceofincome"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#sourceofincome"){
		/*if($('a[href="#contingencyplan"]').parent().hasClass("submenu")){
			$('a[href="#contingencyplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#contingencyplan"]').parent().closest("li.secondlevel")){
				$('a[href="#contingencyplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#contingencyplan"]').trigger("click");*/
		if($('a[href="#assetsliabilty"]').parent().hasClass("submenu")){
			$('a[href="#assetsliabilty"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#assetsliabilty"]').parent().closest("li.secondlevel")){
				$('a[href="#assetsliabilty"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#assetsliabilty"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#assetsliabilty"){
		if($('a[href="#contingencyplan"]').parent().hasClass("submenu")){
			$('a[href="#contingencyplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#contingencyplan"]').parent().closest("li.secondlevel")){
				$('a[href="#contingencyplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#contingencyplan"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#contingencyplan"){
		if($('a[href="#retireplan"]').parent().hasClass("submenu")){
			$('a[href="#retireplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#retireplan"]').parent().closest("li.secondlevel")){
				$('a[href="#retireplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#retireplan"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#retireplan"){
		if($('a[href="#lifeInsurce"]').parent().hasClass("submenu")){
			$('a[href="#lifeInsurce"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#lifeInsurce"]').parent().closest("li.secondlevel")){
				$('a[href="#lifeInsurce"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#lifeInsurce"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#lifeInsurce"){
		if($('a[href="#inputinvst"]').parent().hasClass("submenu")){
			$('a[href="#inputinvst"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#inputinvst"]').parent().closest("li.secondlevel")){
				$('a[href="#inputinvst"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#inputinvst"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#inputinvst"){
		if($('a[href="#property"]').parent().hasClass("submenu")){
			$('a[href="#property"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#property"]').parent().closest("li.secondlevel")){
				$('a[href="#property"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#property"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#property"){
		/*if($('a[href="#cashofbanks"]').parent().hasClass("submenu")){
			$('a[href="#cashofbanks"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#cashofbanks"]').parent().closest("li.secondlevel")){
				$('a[href="#cashofbanks"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#cashofbanks"]').trigger("click");*/
		if($('a[href="#estateplan"]').parent().hasClass("submenu")){
			$('a[href="#estateplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#estateplan"]').parent().closest("li.secondlevel")){
				$('a[href="#estateplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#estateplan"]').trigger("click");
	}
	/*else if($("#hTxtMenuName").val() == "#cashofbanks"){
		if($('a[href="#assets"]').parent().hasClass("submenu")){
			$('a[href="#assets"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#assets"]').parent().closest("li.secondlevel")){
				$('a[href="#assets"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#assets"]').trigger("click");
	}*/
	/*else if($("#hTxtMenuName").val() == "#assets"){
		if($('a[href="#estateplan"]').parent().hasClass("submenu")){
			$('a[href="#estateplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#estateplan"]').parent().closest("li.secondlevel")){
				$('a[href="#estateplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#estateplan"]').trigger("click");
	}*/
	else if($("#hTxtMenuName").val() == "#estateplan"){
		if($('a[href="#centralpro"]').parent().hasClass("submenu")){
			$('a[href="#centralpro"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#centralpro"]').parent().closest("li.secondlevel")){
				$('a[href="#centralpro"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#centralpro"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#centralpro"){
		if($('a[href="#srs"]').parent().hasClass("submenu")){
			$('a[href="#srs"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#srs"]').parent().closest("li.secondlevel")){
				$('a[href="#srs"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#srs"]').trigger("click");
	}
	   
	else if($("#hTxtMenuName").val() == "#srs"){
		/*if($('a[href="#fnliabilities"]').parent().hasClass("submenu")){
			$('a[href="#fnliabilities"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#fnliabilities"]').parent().closest("li.secondlevel")){
				$('a[href="#fnliabilities"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#fnliabilities"]').trigger("click");*/
		if($('a[href="#curAssmpt"]').parent().hasClass("submenu")){
			$('a[href="#curAssmpt"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#curAssmpt"]').parent().closest("li.secondlevel")){
				$('a[href="#curAssmpt"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#curAssmpt"]').trigger("click");
	}
	   
	/*else if($("#hTxtMenuName").val() == "#fnliabilities"){
		if($('a[href="#curAssmpt"]').parent().hasClass("submenu")){
			$('a[href="#curAssmpt"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#curAssmpt"]').parent().closest("li.secondlevel")){
				$('a[href="#curAssmpt"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#curAssmpt"]').trigger("click");
	}*/
	   
	else if($("#hTxtMenuName").val() == "#curAssmpt"){
		if($('a[href="#othrareaofconcern"]').parent().hasClass("submenu")){
			$('a[href="#othrareaofconcern"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#othrareaofconcern"]').parent().closest("li.secondlevel")){
				$('a[href="#othrareaofconcern"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#othrareaofconcern"]').trigger("click");
	}
	   
	else if($("#hTxtMenuName").val() == "#othrareaofconcern"){
		if($('a[href="#clntreport"]').parent().hasClass("submenu")){
			$('a[href="#clntreport"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#clntreport"]').parent().closest("li.secondlevel")){
				$('a[href="#clntreport"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#clntreport"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#clntreport"){
		if($('a[href="#attachment"]').parent().hasClass("submenu")){
			$('a[href="#attachment"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#attachment"]').parent().closest("li.secondlevel")){
				$('a[href="#attachment"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#attachment"]').trigger("click");
	} 
	else if($("#hTxtMenuName").val() == "#attachment"){
		if($('a[href="#htmlreport"]').parent().hasClass("submenu")){
			$('a[href="#htmlreport"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#htmlreport"]').parent().closest("li.secondlevel")){
				$('a[href="#htmlreport"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#htmlreport"]').trigger("click");
	} 
	else if($("#hTxtMenuName").val() == "#htmlreport"){
		/*alert("types of plan");
		if($('a[href="#particular"]').parent().hasClass("submenu")){
			$('a[href="#particular"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#particular"]').parent().closest("li.secondlevel")){
				$('a[href="#particular"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#particular"]').trigger("click");*/
	} 
}



function fipaPreview(){
	   if($("#hTxtMenuName").val() == "#searchpage"){
		  
			
	}
	else if($("#hTxtMenuName").val() == "#typesofappln"){
		if($('a[href="#searchpage"]').parent().hasClass("submenu")){
			$('a[href="#searchpage"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#searchpage"]').parent().closest("li.secondlevel")){
				$('a[href="#searchpage"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#searchpage"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#particular"){
		if($('a[href="#typesofappln"]').parent().hasClass("submenu")){
			$('a[href="#typesofappln"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#typesofappln"]').parent().closest("li.secondlevel")){
				$('a[href="#typesofappln"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#typesofappln"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#fingoalsdiv"){
		if($('a[href="#particular"]').parent().hasClass("submenu")){
			$('a[href="#particular"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#particular"]').parent().closest("li.secondlevel")){
				$('a[href="#particular"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#particular"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#sourceofincome"){
		if($('a[href="#fingoalsdiv"]').parent().hasClass("submenu")){
			$('a[href="#fingoalsdiv"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#fingoalsdiv"]').parent().closest("li.secondlevel")){
				$('a[href="#fingoalsdiv"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#fingoalsdiv"]').trigger("click");
		/*if($('a[href="#particular"]').parent().hasClass("submenu")){
			$('a[href="#particular"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#particular"]').parent().closest("li.secondlevel")){
				$('a[href="#particular"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#particular"]').trigger("click");*/
	}
	else if($("#hTxtMenuName").val() == "#assetsliabilty"){
		if($('a[href="#sourceofincome"]').parent().hasClass("submenu")){
			$('a[href="#sourceofincome"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#sourceofincome"]').parent().closest("li.secondlevel")){
				$('a[href="#sourceofincome"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#sourceofincome"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#contingencyplan"){
		if($('a[href="#assetsliabilty"]').parent().hasClass("submenu")){
			$('a[href="#assetsliabilty"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#assetsliabilty"]').parent().closest("li.secondlevel")){
				$('a[href="#assetsliabilty"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#assetsliabilty"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#retireplan"){
		if($('a[href="#contingencyplan"]').parent().hasClass("submenu")){
			$('a[href="#contingencyplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#contingencyplan"]').parent().closest("li.secondlevel")){
				$('a[href="#contingencyplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#contingencyplan"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#lifeInsurce"){
		if($('a[href="#retireplan"]').parent().hasClass("submenu")){
			$('a[href="#retireplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#retireplan"]').parent().closest("li.secondlevel")){
				$('a[href="#retireplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#retireplan"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#inputinvst"){
		if($('a[href="#lifeInsurce"]').parent().hasClass("submenu")){
			$('a[href="#lifeInsurce"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#lifeInsurce"]').parent().closest("li.secondlevel")){
				$('a[href="#lifeInsurce"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#lifeInsurce"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#property"){
		if($('a[href="#inputinvst"]').parent().hasClass("submenu")){
			$('a[href="#inputinvst"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#inputinvst"]').parent().closest("li.secondlevel")){
				$('a[href="#inputinvst"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#inputinvst"]').trigger("click");
	}
	/*else if($("#hTxtMenuName").val() == "#cashofbanks"){
		if($('a[href="#property"]').parent().hasClass("submenu")){
			$('a[href="#property"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#property"]').parent().closest("li.secondlevel")){
				$('a[href="#property"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#property"]').trigger("click");
	}*/
	/*else if($("#hTxtMenuName").val() == "#assets"){
		if($('a[href="#cashofbanks"]').parent().hasClass("submenu")){
			$('a[href="#cashofbanks"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#cashofbanks"]').parent().closest("li.secondlevel")){
				$('a[href="#cashofbanks"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#cashofbanks"]').trigger("click");
	}*/
	else if($("#hTxtMenuName").val() == "#estateplan"){
		/*if($('a[href="#assets"]').parent().hasClass("submenu")){
			$('a[href="#assets"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#assets"]').parent().closest("li.secondlevel")){
				$('a[href="#assets"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#assets"]').trigger("click");*/
		if($('a[href="#property"]').parent().hasClass("submenu")){
			$('a[href="#property"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#property"]').parent().closest("li.secondlevel")){
				$('a[href="#property"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#property"]').trigger("click");
	}
	   
	else if($("#hTxtMenuName").val() == "#centralpro"){
		if($('a[href="#estateplan"]').parent().hasClass("submenu")){
			$('a[href="#estateplan"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#estateplan"]').parent().closest("li.secondlevel")){
				$('a[href="#estateplan"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#estateplan"]').trigger("click");
	}
	   
	else if($("#hTxtMenuName").val() == "#srs"){
		if($('a[href="#centralpro"]').parent().hasClass("submenu")){
			$('a[href="#centralpro"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#centralpro"]').parent().closest("li.secondlevel")){
				$('a[href="#centralpro"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#centralpro"]').trigger("click");
	}
	   
	/*else if($("#hTxtMenuName").val() == "#fnliabilities"){
		if($('a[href="#srs"]').parent().hasClass("submenu")){
			$('a[href="#srs"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#srs"]').parent().closest("li.secondlevel")){
				$('a[href="#srs"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#srs"]').trigger("click");
	}*/
	   
	else if($("#hTxtMenuName").val() == "#curAssmpt"){
		/*if($('a[href="#fnliabilities"]').parent().hasClass("submenu")){
			$('a[href="#fnliabilities"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#fnliabilities"]').parent().closest("li.secondlevel")){
				$('a[href="#fnliabilities"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#fnliabilities"]').trigger("click");*/
		if($('a[href="#srs"]').parent().hasClass("submenu")){
			$('a[href="#srs"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#srs"]').parent().closest("li.secondlevel")){
				$('a[href="#srs"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#srs"]').trigger("click");
	}
	   
	else if($("#hTxtMenuName").val() == "#othrareaofconcern"){
		if($('a[href="#curAssmpt"]').parent().hasClass("submenu")){
			$('a[href="#curAssmpt"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#curAssmpt"]').parent().closest("li.secondlevel")){
				$('a[href="#curAssmpt"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#curAssmpt"]').trigger("click");
	}
	else if($("#hTxtMenuName").val() == "#clntreport"){
		if($('a[href="#othrareaofconcern"]').parent().hasClass("submenu")){
			$('a[href="#othrareaofconcern"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#othrareaofconcern"]').parent().closest("li.secondlevel")){
				$('a[href="#othrareaofconcern"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#othrareaofconcern"]').trigger("click");
	} 
	else if($("#hTxtMenuName").val() == "#attachment"){
		if($('a[href="#clntreport"]').parent().hasClass("submenu")){
			$('a[href="#clntreport"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#clntreport"]').parent().closest("li.secondlevel")){
				$('a[href="#clntreport"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#clntreport"]').trigger("click");
	} 
	/*else if($("#hTxtMenuName").val() == "#htmlreport"){
		if($('a[href="#attachment"]').parent().hasClass("submenu")){
			$('a[href="#attachment"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
			if($('a[href="#attachment"]').parent().closest("li.secondlevel")){
				$('a[href="#attachment"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
			}
		}
		$('a[href="#attachment"]').trigger("click");
	}*/ 
}


function pdfOperation(htmlPge1,htmlPge2,htmlPge3,htmlPge4,htmlPge5,htmlPge6,htmlPge7,cpf_proj_oa1,cpf_proj_sa1,cpf_proj_ma1,cpf_proj_ra1,cpf_proj_oa2,cpf_proj_sa2,cpf_proj_ma2){
	
	$('#sectncontent').css('height', '100%');
	    $('.DTFC_LeftWrapper').css('display','none');
	    $('.DTFC_RightWrapper').css('display','none');
		  $("#"+cpf_proj_oa1).removeClass("dataTables_scroll");
		  $("#"+cpf_proj_oa1).removeClass("dataTables_wrapper");
		  
		  $("#"+cpf_proj_ra1).removeClass("dataTables_scroll");
		  $("#"+cpf_proj_ra1).removeClass("dataTables_wrapper");
		  
		  $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
		 
		  $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		  
		   var cpf_proj_oa1_divHeight =  $("#"+cpf_proj_oa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight*3)+'px');
		   
		   var cpf_proj_sa1_divHeight =  $("#"+cpf_proj_sa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight*3)+'px');
		   
		   var cpf_proj_ma1_divHeight =  $("#"+cpf_proj_ma1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight*3)+'px');
		   
		   var cpf_proj_ra1_divHeight =  $("#"+cpf_proj_ra1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight*3.5)+'px');
		   
		   var cpf_proj_oa2_divHeight =  $("#"+cpf_proj_oa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_sa2_divHeight =  $("#"+cpf_proj_sa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_ma2_divHeight =  $("#"+cpf_proj_ma2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight*3.5)+'px');
		   
		  
		  $("#"+cpf_proj_oa1).attr('border', '1');                                               
		  $("#"+cpf_proj_sa1).attr('border', '1');   
	      $("#"+cpf_proj_ma1 ).attr('border', '1');     
	    
	   
	            
	    $("#"+cpf_proj_ra1).attr('border', '1');    
	    $("#"+cpf_proj_oa2).attr('border', '1');    
	    $("#"+cpf_proj_sa2).attr('border', '1');    
	    $("#"+cpf_proj_ma2).attr('border', '1');   
	    
	   
	   
	    $('.nav-tabs > .active').next('li').find('a').trigger('click');
	    $('.nav-tabs a[href="#Before_Retirement"]').tab('show');
	   
	    
	  
	    
	    $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
	    $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		
		  $('.dataTables_scrollBody').css('max-height','none');
		  $(".c3-line").css("fill","none");
		 
		  
		  var mywindow = window.open('', '', '');
		    
	  
	  
	  
	 var pdf = new jsPDF('p','mm',"a2",true); 
		pdf.setFontSize(13);
		pdf.page=1; 
   	var NORMAL_FONTSIZE = ['11pt','11pt'];
   	var HIGHRES_FONTSIZE = ["10pt","7pt"];

   	function setFonSize(elm,fontsize){ 
   		$(elm).find("label").css("font-size",fontsize[0]);
   		$(elm).find(".headerlabel").css("font-size",fontsize[1]);
   		
   	}
   	
   	var $wrapper = document.getElementById('printHtmlPdf');
   	   var setFonSizeOfWrapper = setFonSize.bind(null, $wrapper);

   	   $("#printHtmlPdf").css("visibility","visible");
   	 
   	
   	$("#rpCashFlwAnlys_Dialog .btn-group").hide();
   	$("#rpCashFlwAnlys_Dialog .pdf-hide").hide(); 
   	//showLoader();		
   	
   	html2canvas(document.getElementById('rpt1'),
   			{scale:1,
   	 useCORS:true,
	 	 allowTaint:true,
	 	 windowWidth:1366,
	 	 windowHeight:676,
	 	 logging:true,
	 	 async:false
        }).then(function(canvas) {
       //showLoader();		 
   	 document.body.appendChild(canvas);
   	 var img = canvas.toDataURL('image/png'); 
   	 var widthT = pdf.internal.pageSize.width;    
	     var heightT = pdf.internal.pageSize.height;
	     var imgData = canvas.toDataURL("image/png", 1.0);
	     
	  
	   //  document.body.removeChild(canvas);
	    // savePdf(pdf);
	     
	     mywindow.document.write('<html><title>CPF Projection analysis report</title><body>');
		    mywindow.document.write("\n");
		   /* mywindow.document.write("<h3><u>Before_Retirement</u></h3>");*/
		 mywindow.document.write("<img id='Image' src=" + img + " style='width:100%;'></img>");
});
     
   html2canvas(document.getElementById('rpt2'),
	          {
	 	 	 scale:1,
	 	 	 useCORS:true,
	 	 	 allowTaint:true,
	 	 	 windowWidth:1366,
	 	 	 windowHeight:676,
	 	 	async:false
	 	 	 }).then(function(canvas) {
	 	 	  if(!$("#RDExptbl tbody tr:first td:first").hasClass('dataTables_empty')){  	 
	     	 document.body.appendChild(canvas);
	     	 var img = canvas.toDataURL('image/png');
	 	    
	 	     pdf.addPage("a2","portrait");
	 	     pdfheader(pdf,170);
	 	     footer(pdf,0);
	 	     
	 	     var widthT = pdf.internal.pageSize.width;    
	 	     var heightT = /*pdf.internal.pageSize.height;550*/200;
	 	     var imgData = canvas.toDataURL("image/png", 1.0);
	 	     
	 	     pdfAddTitle(pdf,10,15,"Other payment to be made during retirement");
	 	     
	 	     pdf.addImage(imgData,'JPEG',5,40,widthT-10,heightT);
	 	   
	 	    // document.body.removeChild(canvas);
	 	     
	 	 	 } 
	 	 	mywindow.document.write("<img id='Image' src=" + img + " style='width:100%;'></img>");
	 	 	//mywindow.document.write($("#"+htmlPge3).html());
	 	 		
	 	  			// document.body.removeChild(canvas);
	 	  			
});
   
   html2canvas(document.getElementById('projOfExpetbldiv'),
	          {
	 	 	 scale:1,
	 	 	 useCORS:true,
	 	 	 allowTaint:true,
	 	 	 windowWidth:1366,
	 	 	 windowHeight:676,
	 	 	async:false
	 	 	 }).then(function(canvas) {
	 	 		document.body.appendChild(canvas);
	 	 	   	 var img = canvas.toDataURL('image/png'); 
	 	 	   	 mywindow.document.write("<img id='Image' src=" + img + " style='width:100%;'></img>");
	 	 	 });
   
   html2canvas(document.getElementById('fldIncomeSec'),
	          {
	 	 	 scale:1,
	 	 	 useCORS:true,
	 	 	 allowTaint:true,
	 	 	 windowWidth:1366,
	 	 	 windowHeight:676,
	 	 	async:false
	 	 	 }).then(function(canvas) {
	 	 		 document.body.appendChild(canvas);
	 	 	   	 var img = canvas.toDataURL('image/png'); 
	 	 	    mywindow.document.write("<img id='Image' src=" + img + " style='width:100%;'></img>");
		 	 	mywindow.document.write($("#"+htmlPge5).html());
		 	 	mywindow.document.write('</body></html>');
		 	 	mywindow.document.close();
		 	 	mywindow.print();

		 	 	
	 	 	 });
   	
   /*if(flag){
		
	}*/
   mywindow.document.write('<html><title>CPF Projection analysis report</title><body>');
   mywindow.document.write("\n");
	mywindow.document.write($("#"+htmlPge6).html());
	mywindow.document.write($("#"+htmlPge7).html());
	mywindow.document.write('</body></html>');
	mywindow.document.close();
	mywindow.print();
	
	$("#"+cpf_proj_oa1).css('border','');
 	$("#"+cpf_proj_sa1).css('border','');
 	$("#"+cpf_proj_ma1).css('border','');

 	$("#"+cpf_proj_ra1).attr('border', '');    
 	$("#"+cpf_proj_oa2).attr('border', '');    
 	$("#"+cpf_proj_sa2).attr('border', '');    
 	$("#"+cpf_proj_ma2).attr('border', '');  

 	  $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight)+'px');
 		  
 		   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight)+'px');
 		   
 		   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight)+'px');

 		   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight)+'px');
 		   
 		   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight)+'px');
 		   
 		   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight)+'px');
 		   
 		   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight)+'px');

 	$('.DTFC_LeftWrapper').css('display','block');
 	$('.DTFC_RightWrapper').css('display','block');
 		$("#"+cpf_proj_oa1).addClass("dataTables_scroll");
 		$("#"+cpf_proj_oa1).addClass("dataTables_wrapper");
 		$("#"+cpf_proj_ra1).addClass("dataTables_scroll");
 		$("#"+cpf_proj_ra1).addClass("dataTables_wrapper");
 	$('#sectncontent').css('height', '73vh'); 
 	 	
	 /* $('#sectncontent').css('height', '100%');
    $('.DTFC_LeftWrapper').css('display','none');
    $('.DTFC_RightWrapper').css('display','none');
	  $("#"+cpf_proj_oa1).removeClass("dataTables_scroll");
	  $("#"+cpf_proj_oa1).removeClass("dataTables_wrapper");
	  
	  $("#"+cpf_proj_ra1).removeClass("dataTables_scroll");
	  $("#"+cpf_proj_ra1).removeClass("dataTables_wrapper");
	  
	  $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
	 
	  $('table').attr('style','width:100% !important');
	  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
	  
	   var cpf_proj_oa1_divHeight =  $("#"+cpf_proj_oa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
	   $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight*3)+'px');
	   
	   var cpf_proj_sa1_divHeight =  $("#"+cpf_proj_sa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
	   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight*3)+'px');
	   
	   var cpf_proj_ma1_divHeight =  $("#"+cpf_proj_ma1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
	   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight*3)+'px');
	   
	   var cpf_proj_ra1_divHeight =  $("#"+cpf_proj_ra1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
	   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight*3.5)+'px');
	   
	   var cpf_proj_oa2_divHeight =  $("#"+cpf_proj_oa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
	   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight*3.5)+'px');
	   
	   var cpf_proj_sa2_divHeight =  $("#"+cpf_proj_sa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
	   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight*3.5)+'px');
	   
	   var cpf_proj_ma2_divHeight =  $("#"+cpf_proj_ma2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
	   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight*3.5)+'px');
	   
	  
	  $("#"+cpf_proj_oa1).attr('border', '1');                                               
	  $("#"+cpf_proj_sa1).attr('border', '1');   
    $("#"+cpf_proj_ma1 ).attr('border', '1');     
    
   
            
    $("#"+cpf_proj_ra1).attr('border', '1');    
    $("#"+cpf_proj_oa2).attr('border', '1');    
    $("#"+cpf_proj_sa2).attr('border', '1');    
    $("#"+cpf_proj_ma2).attr('border', '1');   
    
   
   
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
    $('.nav-tabs a[href="#Before_Retirement"]').tab('show');
   
    
  
    
    $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
    $('table').attr('style','width:100% !important');
	  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
	
	  $('.dataTables_scrollBody').css('max-height','none');
	  $(".c3-line").css("fill","none");
	  
	  
      var mywindow = window.open('', '', '');
	    mywindow.document.write('<html><title>CPF Projection analysis report</title><body>');
	    mywindow.document.write("\n");
	    mywindow.document.write("<h3><u>Before_Retirement</u></h3>");
	   // mywindow.document.write($("#"+htmlPge1).html());
	    mywindow.document.write(pdf);
	    mywindow.document.write(imgData);
	    mywindow.document.write(canvas);
	    mywindow.document.write("\n");
	    mywindow.document.write("<h3><u>After_Retirement</u></h3>");
	    mywindow.document.write($("#"+htmlPge2).html());
	    mywindow.document.write($("#"+htmlPge3).html());
	    mywindow.document.write($("#"+htmlPge4).html());
	    mywindow.document.write($("#"+htmlPge5).html());
	    mywindow.document.write($("#"+htmlPge6).html());
	    mywindow.document.write($("#"+htmlPge7).html());
	    mywindow.document.write('</body></html>');
	    mywindow.document.close();
	    mywindow.print();
	    
	    $("#"+cpf_proj_oa1).css('border','');
	    $("#"+cpf_proj_sa1).css('border','');
	    $("#"+cpf_proj_ma1).css('border','');
	    
	    $("#"+cpf_proj_ra1).attr('border', '');    
	    $("#"+cpf_proj_oa2).attr('border', '');    
	    $("#"+cpf_proj_sa2).attr('border', '');    
	    $("#"+cpf_proj_ma2).attr('border', '');  
	    
	       $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight)+'px');
		  
		   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight)+'px');
		   
		   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight)+'px');

		   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight)+'px');
		   
		   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight)+'px');
		   
		   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight)+'px');
		   
		   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight)+'px');
	    
	    $('.DTFC_LeftWrapper').css('display','block');
	    $('.DTFC_RightWrapper').css('display','block');
		$("#"+cpf_proj_oa1).addClass("dataTables_scroll");
		$("#"+cpf_proj_oa1).addClass("dataTables_wrapper");
		$("#"+cpf_proj_ra1).addClass("dataTables_scroll");
		$("#"+cpf_proj_ra1).addClass("dataTables_wrapper");
	    $('#sectncontent').css('height', '73vh'); */
}




/*function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);*/

$(document).ready(function(){
	  
/*	  function toggleIcon(e) {
		 
	    $(e.target)
	        .prev('.panel-heading')
	        .find(".more-less")
	        .toggleClass('glyphicon-plus glyphicon-minus');
}
	  $('.panel-group').on('hide.bs.collapse', toggleIcon);
	  $('.panel-group').on('show.bs.collapse', toggleIcon);
  */
	  
	$('.collapse')
	  .on('show.bs.collapse', function () {
	  $(this).prev().find('.glyphicon')
	    .removeClass('glyphicon-plus')
	    .addClass('glyphicon-minus')
	})
	  .on('hide.bs.collapse', function () {
	  $(this).prev().find('.glyphicon')
	    .removeClass('glyphicon-minus')
	    .addClass('glyphicon-plus')
	});
	
	});

/*$('#headingOthrPayRtmnt').click(function() { 
    $(this).find('.more-less').toggleClass('glyphicon-plus glyphicon-minus'); 
});

$('#headingIncAsstRtmnt').click(function() { 
    $(this).find('.more-less').toggleClass('glyphicon-plus glyphicon-minus'); 
});*/



$("#btnColpAll,#btnColpAllRtrmnt").click(function(){
	   /* $('#accordion .panel-collapse').collapse('toggle');*/
	    $('.panel-collapse').collapse('hide');
        $('.panel-title').attr('data-toggle', 'collapse');

	});

$("#btnExpAll,#btnExpAllRtrmnt").click(function(){
	$('.panel-collapse').collapse('show');
    $('.panel-title').attr('data-toggle', '');
	});

