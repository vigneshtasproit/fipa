/**
 * 
//**************************************Input Life Insurance*********************************************
 */


/*$( document ).ready(function() {
	 childexist();
});*/


var planNames_FPMSR=[];	 
var planNames_FPMSB=[];	 


//$("#lipCompany").on

/*List of plan names from FPMS*/
function fpmsPlannamelist(){
var company = $("#lipCompany :selected").val();
if(!isEmpty(company)){
showLoader();
	$.ajax({
		url:servletName,
		async:false,
		data:{
			"DBCALLFOR":"FPMS_PLANNAMES_LIST",
			"strInsurerName":company
		},
		success: function(result){ 
			var jsnRslt=JSON.parse(result); 
			$.each(jsnRslt,function(i,obj){
				if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
					window.location = BASE_URL + SESSION_EXP_JSP; 
					hideLoader();
					return;
				}

				if (obj.SESSION_EXPIRY=="DB_ERROR") {
					window.location = BASE_URL + DB_EXP_JSP; 
					hideLoader();
					return;
				}
				
				$.each(obj,function(i,val){
					if(i=="FPMS_PLANS"){
						$.each(val, function(contkey, contvalue) { 
							
							var polplans = contvalue["txtfldProdPlanName"];
							var plansType = contvalue["txtfldProdProdType"];
							
							planNames_FPMSB.push(polplans);
							
//							if(plansType == "B"){planNames_FPMSB.push(polplans);}
//							if(plansType == "R"){planNames_FPMSR.push(polplans);}
							
						}); 			
					}
				});  //for each
		 
			});
		}
	}); 
}
 

//var autocomplete_Basic = $('#lipPlanname').typeahead(); 
//autocomplete_Basic.data('typeahead').source = planNames_FPMSB;  
//
//var autocomplete_Basic2 = $('#selplanB00').typeahead(); 
//autocomplete_Basic2.data('typeahead').source = planNames_FPMSB; 
 
 
hideLoader();
	return planNames_FPMSB; 
}
/**/
function callDeletePolicy(lifeId,datatblvar,tblId){
 
	 
	  $('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').css("display","none");
	  $('#lifeInsNavTabsDets a[href="#liplandetails"]').css("display","none");
	  $('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').css("display","none");
		
		typeOfCoverage("All","none"); 
		
	
	var aplnName = lifeId.closest("tr").find("td:eq(1)").find('input:eq(0)').val(),
	lifeIns_id = lifeId.closest("tr").find("td:eq(1)").find('input:eq(1)').val(),
	fna_id = lifeId.closest("tr").find("td:eq(1)").find('input:eq(2)').val(),
	app_id  = lifeId.closest("tr").find("td:eq(1)").find('input:eq(3)').val();
	refId  = lifeId.closest("tr").find("td:eq(1)").find('input:eq(4)').val();
	
	
	var $parentRow=lifeId.closest("tr"); 
	datatblvar.$('tr.selected').removeClass('selected');
    $parentRow.addClass('selected');   
     
	  //Other Reference 
		if(!isEmpty(refId)){  
			var message=false;
			 
			
			$("#IncAssRetPlgtbl tbody tr[rowrefid='"+refId+"']").each(function(){
				message=true;
				IncAssRetPlgtbl.row($(this)).remove().draw();
			});	
			 
			$("#cpfAccAddDedTable tbody tr[rowrefid='"+refId+"']").each(function(){
				message=true;
				cpfAccAddDedTable.row($(this)).remove().draw();
			});	 
			
			if(message){
				applyErrorToastrAlert("There is row exists in other sections, will also be deleted!");
			}
			
			 
		}
		
		
	$('#deletemsglifeData').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true
		});
	  $('#deletemsglifeData').on('shown.bs.modal', function() {  
		  $(this).find(".modal-title").text('FIPA Message');
		  $(this).find(".modal-footer").find("button:eq(0)").unbind();  
			  $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
				  				
				  if(aplnName == 'FIPA'){	
						if(!(isEmpty(lifeIns_id)) ){
							
							showLoader();
							
							var parameter = "DBCALLFOR=DELETE_FIPALIFEDATA&strlifeInsId="+lifeIns_id+"&strlifeFnaId="+fna_id;
						
							ajaxCall(parameter,servletName,function(Data){
								
								var retval = Data;	
									hideLoader();
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
											

											 
											if (key == "TARGET") {
											
												applyToastrAlert(value);
												datatblvar.row('.selected').remove().draw( false ); 
												$parentRow.removeClass('selected');  
												clearLifeInsuranceScreen();
												reOrderLifeInsVisibleRows(tblId);
											   return ;
											}	
											
											
											
										}
									}

								}
							});
							
						}
				  }
				
				  $('#deletemsglifeData').modal('hide'); 
			  });  
		});
	   
	

		  
	  
	  
}
//validations -------------
$("#popaddlifeicon").on("click",function(){ 
//	calcTotalPlandetails();	
	
	if($("#addnewlife").hasClass("blinking")){
		$("#addnewlife").removeClass("blinking");
	} 
	
	$("#lifeinsurance_li").click();	 
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#addnewlife").addClass("blinking"); 
	$("#addnewlife").focus();
	
	
	ilifeInsPremium(null);
	calcTotSAPremPlandetails();
});


/*Life insurance tab click to reset Types of coverage tabs */
$("#lifeInsNavTabsDets").find("li[id=li_lifeInsurance]").on("click",function(){
//	typeOfCoverage("All","none");
	
});

/*Plan tab click to reset Types of coverage tabs */
$("#lifeInsNavTabsDets").find("li[id=li_plandetails]").on("click",function(){  
	
	
	 var mode = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").find("input:eq(12)").val();
	 var pkid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").find("input:eq(13)").val();
	 
	 setTimeout(function() {
		 
		
		 
		 if(isEmpty(pkid)){
			 
//			 console.log($("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").next("div").html() +"<-----------")
			 $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").next("div").find("input:eq(0)").val("Basic").prop("readonly",true);	   
			 $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").find("input:eq(3)").val($("#retYrstoret").val());//<!-- Yrs to ret -->
			 $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").find("input:eq(4)").val($("#retSelfCoordinateage").val());//<!-- Co-self age -->
			 $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").find("input:eq(5)").val($("#retSpsCoordinateage").val());//<!-- Co-spouse age -->s
			 $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").find("input:eq(8)").val($("#caSavingDeprate").val());//<!-- Int rate used --> 
			
			 
			 $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div[class='hiddens']").find("input:eq(13)").val(makeid(17));
			 
			 isEmpty($("[name=txtFldIncDate]").val())? $("[name=txtFldIncDate]").val($("#lipIncepdate").val()) : "";
			 isEmpty($("[name=txtFldPolExpDate]").val())? $("[name=txtFldPolExpDate]").val($("#lipExpdate").val()) : "";
		 }
		 
		 
//		 var planNames_Lst=fpmsPlannamelist(); 
//		 $("#cvplnleftpaneltbl tbody").find("input[name=selplan]").typeahead({source: planNames_Lst});
			
		 planAlertInfo();  
			
	 },200);
});

 

$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq(0)").find("input:eq(1)").on("change",function(){
	calculateEndDateFromYear(
			$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq(0)").find("input:eq(1)"),
			$("#cvplnleftpaneltbl tbody").find("tr:eq(5)").find("td:eq(0)").find("input:eq(0)"),
			$("#cvplnleftpaneltbl tbody").find("tr:eq(7)").find("td:eq(0)").find("input:eq(0)"));
});

//On Time load all calculated values for visible plan coverages
//$("#li_deathbenf,#li_disability,#li_criticalill,#li_hospitality,#li_retirement,#li_education").on("click",function(){
//	 setTimeout(function() {
//	reOrderVisibleRows("liDeathBenefittbl");
//	reOrderVisibleRows("liDisabilitytbl");
//	reOrderVisibleRows("liCriticalIllnesstbl");
//	reOrderVisibleRows("liHospitilisationtbl");
//	reOrderVisibleRows("liRetirementPlgtbl");
//	RetPlgcalculateRow();
//	reOrderVisibleRows("liEducationtbl"); 
//	totalPvRetEdPlgTerEdAge(); 
//	 },300);//it has to be atleast 300 since on tab click auto datatable columns has to be arranged properly with arranged serial nos
//	
//});
 
function planAlertInfo(){
	
	
	/*var Bplan = $("#selplanB00").val();
	var Bsa = $("#txtFldSAB00").val(); 
	var Binc = $("#txtFldIncDateB00").val(); 
	
	var Rplan = $("#selplanR00").val();
	var Rsa = $("#txtFldSAR00").val(); 
	var Rinc = $("#txtFldIncDateR00").val(); 
	
	
	 if(!isEmpty(Bplan) || !isEmpty(Bsa) || !isEmpty(Binc) ||
			 !isEmpty(Rplan) || !isEmpty(Rsa) || !isEmpty(Rinc)){ 
		 
		 $("#noplanavailable").addClass("hidden");
	 }else{
		 $("#noplanavailable").removeClass("hidden"); 
	 }*/
	 
	 
}
	 
$("#lipPremiumsrc").on("change",function(){ 
	var $elmVal = $(this).val(); 
	ilifeInsPremium(null);//for new life
 	calcTotSAPremPlandetails();//for new life
});

$("#lipSa").on("change",function(){  
	var $elmVal =$("#lipPremiumsrc").val();  
	ilifeInsPremium(null);//for new life
	calcTotSAPremPlandetails();//for new life
});

$("#lipOwner").on("change",function(){ 
	var $elmVal =$("#lipPremiumsrc").val();  
	ilifeInsPremium(null);//for new life
	calcTotSAPremPlandetails();//for new life
});

 

 

 

 

$("#liDisabilty_Dialog #txtFldDlgliDsbltyYrBegins").on("change", function(){ 
	disablityYrBegin($(this),$("#liDisabilty_Dialog #txtFldDlgliDsbltyYrCeases"));
}); 
 
$("#liDisabilty_Dialog #txtFldDlgliDsbltyYrCeases").on("change", function(){
	
	disablityYrCeases($(this),$("#liDisabilty_Dialog #txtFldDlgliDsbltyYrBegins"))
});


function disablityYrBegin(yrbegin,yrceases){
	var beginCeases=Number(yrceases.val());
	   
	if(!isEmpty(Number(yrbegin.val()))){
		if(Number(yrbegin.val()) < 0 ){
			applyErrorToastrAlert("Year Begins should be 0 or greater than Year Ceases!",yrbegin);
			yrbegin.val("");
		}  else{
			if(!isEmpty(beginCeases) && beginCeases != 0){
				if(Number(yrbegin.val()) > beginCeases){
					applyErrorToastrAlert("Year Begins should be 0 or greater than Year Ceases!",yrbegin);
					yrbegin.val("");
				}    
			} 
		}  
	} 
	
	  
}

function disablityYrCeases(yrceases,yrbegin){
	var beginYr=Number(yrbegin.val());
	var endYr=Number(yrceases.val());
	if(!isEmpty(beginYr)){
		if(!isEmpty(endYr)){  
		if(endYr < beginYr){  
//		}else{
			applyErrorToastrAlert("Year Ceases should be greater than Year Begins !",yrceases);
			yrceases.val("");
		}

		}
	}   
}
function filldetsLifeInsuranceDlg(cont,contvalue,data,lifeIns_id){  
//		console.log("inside filldetsLifeInsuranceDlg------->")
		
		$("input[name=lipId]").val(lifeIns_id);  
		
		 if(cont=="lipCreatedBy"){  
			 $("input[name=lipCreatedBy]").val(contvalue);
		 }
		 
		 if(cont=="lipCreatedDate"){  
		
			 $("input[name=lipCreatedDate]").val(contvalue); 
		 }
		 
		  if(cont=="nominationType"){   
				 if(isEmpty(contvalue)){ 
						$("#lifeInsdetstab #NomineesTblDiv").css("display","none");
				  }else{
					  $("#lifeInsdetstab #NomineesTblDiv").css("display","block");
				  } 
		  }
//		  if(cont == 'retMultionret'){ 
//			  enableRetCashValOnRet($("#retMultionret"),$("#retCashvalonret"),false,$("#lipRetRefId").val()); 
//		  }
			 
		  
		  if(cont == 'lipPlanname'){  
			  $("#"+cont).val(contvalue);
			
		  }
			 
		   if(cont=="lipCoveragetype"){ 
		       var arrLipCovType=contvalue.split(',');
		         $('#sellipCoveragetype').multiselect('select',arrLipCovType);    
		//       for(var opt=0;opt<arrLipCovType.length;opt++){
		//           typeOfCoverage(arrLipCovType[opt],'block')
		//       }  
		   }
		   
		   if(cont=="lipIsnurObject"){   
		   
		       var arrLipIsnurObject=contvalue.split(',');
		        $('#sellipIsnurObject').multiselect('select',arrLipIsnurObject);        
		//        for(var opt=0;opt<arrLipIsnurObject.length;opt++){
		//       	 ObjOfInsurance(arrLipIsnurObject[opt],'block')
		//          } 
		   } 
		   
		//   if(cont=="lipPremiumsrc"){ 
		//	   SyncLifeToCpfAddDed(contvalue);
		//   }
		   
		 if(cont=="lipPolicyno"){ 
			 $("#txtFldLifeinsPolicyNo").val(contvalue);
			 $("#newlifepolicyno").text(contvalue);
		 }
		 
		   if(cont == "lipRefId"){
			  
			   if(!isEmpty(contvalue)){
				 
				 $("#lipRefId").val(contvalue);
				 $("#sellipCoveragetype").attr("rowrefid",contvalue); 
				 $("#lipPremiumsrc").attr("rowrefid",contvalue);
			   }
		   }
		  
		   if(cont == "lipRetRefId"){
			   $("#lipRetRefId").val(contvalue);
		   }
		   
		 if(cont == "lipCompany"){
			   
			   selectNullOrBlank($("#"+cont),contvalue); 
			   $("#txtFldLifeinsInsurerName").val($("#lipCompany :selected").text());
			   $("#newlifeprinname").text();
			   $("#newlifeprinname").text($("#lipCompany :selected").text());
		//		 var planNames_Lst=fpmsPlannamelist(); 
		//		 $("#lipPlanname").typeahead({source: planNames_Lst});   
		   }
		   if(cont=="retTotalSa"){ 
			   $("#retTotalSa").val(contvalue); 
		   }
		   if(cont=="retTotalPrem"){ 
			   $("#retTotalPrem").val(contvalue);
		   }
	  
	   
}

$("#lipCompany").on("change",function(){ 
//	var planNames_Lst=fpmsPlannamelist();  
//	$("#lipPlanname").typeahead({source: planNames_Lst}); 
	var insurer = $("#lipCompany :selected").text();
	$("#newlifeprinname").text(insurer);  
});

$("#lipPolicyno").on("change",function(){
	var polno = $(this).val();
	$("#newlifepolicyno").text(polno);
//	$("#txtFldLifeinsPolicyNo").val(polno); 
});


$("#retMultionret").on("change",function(){
//	 if(!validationRetirementScreen())return;  
	 enableRetCashValOnRet($("#retMultionret"),$("#retCashvalonret"),true,$("#lipRetRefId").val(),$("#covRef").val()); 
//	 $("#lipRetRefId").val("");
//	 setMainEditRPPlanTbltoLifeRP(); 
});


//$("#retCashvalonret,#cashvalRetAge,#retPrcnttoused").on("change",function(){
////	var cashvalue=$(this).val();   
//	mandatoryFldForRetirement($(this),null,'LIFE'); 
//	addCashValueToRet($("#retMultionret").val(),$("#retCashvalonret").val(),$("#lipRetRefId").val(),$("#covPayMtd").val(),$("#covPlanName").text(),$("#cashvalRetAge").val(),$("#retPrcnttoused").val(),$("#covRef").val());
////		 setMainEditRPPlanTbltoLifeRP(); 
//});

/*$("#cashvalRetAge").on("change",function(){
//	 if(!validationRetirementScreen())return; 
	mandatoryFldForRetirement($(this),null,'LIFE');
//	 if(!isEmpty($(this).val())){
//		 -- This can be possible
//		 If Retirement Plan were to mature before the client?s intended retirement age : Requirement
		 //if(!rdStartAgeValidate($(this),$('#lipOwner')))return; 
//	 }
//	 setMainEditRPPlanTbltoLifeRP();
	 
		
		var array=[];
		var selfIncAssAge=isEmpty($("#cashvalRetAge").val()) ? "" : Number($("#cashvalRetAge").val());		
		var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
		
		if (selfIncAssAge <= selfProjage) {
			   var option = ''; 
			   array=[];
			  for(var i= selfIncAssAge; i<=selfProjage;i++)
				  { 
					
					  array.push(""+i+"");
				  }  
		 } 
		 
 
//		 var autocomplete = $('#retSelfProjage').typeahead(); 
//		autocomplete.data('typeahead').source = array;

});*/

$("#retIntrateused").on("change",function(){
 
//	 setMainEditRPPlanTbltoLifeRP();
});

  

function fillFPMSDataDlg(lifeId,appId){
	
	var $rowIndex=lifeId.index();
	var $lastRow=lifeId;//$('#existPolicyLHIns tr:eq('+(Number($rowIndex)+1)+')');
	
	$("input[name=lipAppId]").val(appId);
	$("#lipRefId").val(appId);
	
	
	var aplnName = $lastRow.find("td:eq(1)").find('input:eq(0)').val(),
	lifeIns_id =$lastRow.find("td:eq(1)").find('input:eq(1)').val(),
	fna_id = $lastRow.find("td:eq(1)").find('input:eq(2)').val(),
	app_id  = $lastRow.find("td:eq(1)").find('input:eq(3)').val();

	
	showLoader();
	var parameter = "DBCALLFOR=GET_FPMS_LIFEDATA&strSrchlifeInsId="+lifeIns_id+"&strSrchAppId="+app_id;
	
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

					if (key == "FPMS_POLICY_DETS"){
					
						$("#listofLifeIns_Dialog #lifeInsdetstab #lipOwner").val("Self");

						var jsnData = value; 	  
						for ( var cont in jsnData) {
							jsonDataPopulate(jsnData[cont], key);
							if (jsnData.hasOwnProperty(cont)) {			

								var contvalue = jsnData[cont];
								
//								$("#listofLifeIns_Dialog #lifeInsdetstab #lipOwner").val("Self");
								
								for(var data in contvalue){

									var col = contvalue[data]; 
									
									switch(data){
									
										
										case "strFPMSPolType":
											$("#listofLifeIns_Dialog #lifeInsdetstab #lipOwner").val(col == "FIRST PARTY" ? "Self" : "Joint");
											break;
										
										case "strFPMSPolLifeAssured":
											setUnavailableText($("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured"),col);											
											break;
											
											
//										case "strFPMSPolLifeAssured":
//											$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").val(col);											
//											break;
											
											
											
										case "strFPMSPolPlanName":
											$("#listofLifeIns_Dialog #lifeInsdetstab #lipPlanname").val(col);
//											selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #lipPlanname"),col);
											break;
											
										case "strFPMSPolPolNo":
											$("#listofLifeIns_Dialog #lifeInsdetstab #lipPolicyno").val(col);
											$("#txtFldLifeinsPolicyNo").val(col);
											$("#newlifepolicyno").text(col);
											break;
											
										case "strFPMSPolPrincipalId":
											$("#listofLifeIns_Dialog #lifeInsdetstab #lipCompany").val(col);
											var insurer = $("#lipCompany :selected").text();
											$("#txtFldLifeinsInsurerName").val(insurer);
											$("#newlifeprinname").text(insurer);
											break;
											
										case "strFPMSPolPremiumType":											
											break;	
											
										case "strFPMSPolPremium":											
											break;
											
										case "strFPMSPolSA":
											$("#listofLifeIns_Dialog #lifeInsdetstab #lipSa").val(col);
											break;
											
										case "strFPMSPolPaymentMode":
											var mode;
											if(col == "SEMI-ANNUAL" || col=="HALF-YEARLY"){
												mode="HALF YEARLY";
											}else{
												mode=col;
											}
											selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #lipPaymentfreq"),mode);   
//											$("#listofLifeIns_Dialog #lifeInsdetstab #lipPaymentfreq").val(col);
											break;
										case "strFPMSPolPaymentMeth":
											var paymentmethod = "";
											
											
											selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #lipPaymentmethod"),col);  
											break;
										case "strFPMSPolEffDate":
											$("#listofLifeIns_Dialog #lifeInsdetstab #lipIncepdate").val(col);
											break;
										case "strFPMSPolStatus":
											selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #policyStatus"),col);   
											break;
											
									}
								

								}

							}
						} 
						
//						 fpmsPlannamelist(); 
						
					}
					
					
					if(key == "FPMS_POLICYPLAN_DETS"){
						
//						jsonTableDataPopulate(value, tab, false);
						
						
						
						$.each(value, function(contkey, contvalue) { 
							
							getliBasRidDetRows(contvalue, tab);
							
						});
						
					}
					
				}
			}
		}
		
		

	});
	
	 
	 hideLoader();
	
}





function syncFPMSCpf(contvalue,AppId){
	  
		loadSlfSpsName();
		var ownership 	="Self";//ownership
		
		var rowexist = chkCPFRowExist(AppId);
//		var $tblCpfRow = null;
		
		var exist=false; 
				
		if(rowexist == null){
//			getCADRows(null);
			exist = false;
//			$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
		}else{
//			$tblCpfRow = rowexist;
			exist = true;
		}
		
		
		
//		$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
////			 var $tblCpfRow=$(this).closest("tr");
//			 var refId = $(this).val();
//			 if(refId == AppId){
//				 exist=true;
//				 $tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(refId);
////				 $tblPlanRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(refId);
//			 }
//		});
		
		if(!exist){ 
		
			var paymentmtd	=contvalue["jsonLifePayMtd"];//Payment method 
			var amount		=contvalue["jsonLifePremAmt"];//Premium amount
			var mode		=contvalue["jsonLifePayMode"];//Frequency
			var periodFrm	=contvalue["jsonLifeIncDate"];//Inception date
			var periodTo	=contvalue["jsonLifePolDate"];//Expiry date
			var agefrom = contvalue["jsonLifePlanAgeFrom"];
			var ageTo = contvalue["jsonLifePlanAgeTo"];
			var planName= contvalue["jsonLifePlanName"];
			var policyno = contvalue["jsonLifePlanPolNo"];
			var basorriderid = contvalue["jsonLifePlanId"];
			
			
			 var  stillNeedTopay=false;
			 if(!isEmpty(periodTo)){
				  stillNeedTopay 	= validateDateComparision(periodTo,ResultNewDate,">="); 
			 }
			
			
			if(!isEmpty(paymentmtd) && stillNeedTopay  && mode != "SINGLE"){ 
				 if(paymentmtd == "CPFOA" || paymentmtd == "CPFSA" || paymentmtd == "CPF" ){//|| paymentmtd == "SRS"
					 
					 	getCADRows(null);
					 	
					 	
						var $tblCpfRow=$("#cpfAccAddDedTable tbody tr:last");
						var rowRefID = basorriderid;//AppId;
							if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
								$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
							}
								
						
	//					$tblPlanRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
						$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
					
						 
						 
					var cpfacc,ccid;
				 
				 if(paymentmtd == "CPFOA"){cpfacc="Ordinary";ccid="CPFACC000001";}
				 else if(paymentmtd == "CPFSA"){cpfacc="Special";ccid="CPFACC000002";}
				 else if(paymentmtd == "CPFMA"){cpfacc="Medisave";ccid="CPFACC000003";}
				 else if(paymentmtd == "CPFRA"){cpfacc="Retirement";ccid="CPFACC000004";}
				 else {cpfacc="";ccid="";}
	
	
				 
				 var frequency="";
				 if(mode == "ANNUALLY"){frequency="1";}
				 else if(mode == "HALF YEARLY"){frequency="2";}
				 else if(mode == "QUARTERLY"){frequency="4";}
				 else if(mode == "MONTHLY"){frequency="12";}
				 else if(mode == "SINGLE"){frequency="1";}  
			 
				 
				  
				 
				 $tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
	//			 if(ownership == "Self"){
	//				 $tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");//Name of account
	//			 }else  if(ownership == "Spouse"){
	//				 $tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
	//			 }else{
	//				 $tblCpfRow.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
	//			 } 
				  
				 
				  
			 
				 selectNullvalChk($tblCpfRow.find("td:eq(3)"),ownership);   
				   
				 selectNullvalChk($tblCpfRow.find("td:eq(4)"),"Life Insurance");//Description of Investment
				 $tblCpfRow.find("td:eq(4)").find('input:eq(0)').val( planName );
				 $tblCpfRow.find("td:eq(4)").find('input:eq(1)').val( policyno );
				 $tblCpfRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(planName) ? "": "Plan Name : "+planName);  
				 $tblCpfRow.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(policyno) ? "": "Policy No : "+policyno);  
		 
				 selectNullvalChk($tblCpfRow.find("td:eq(5)"),"Deduction"); //Types of Transaction
				 
				 $tblCpfRow.find("td:eq(6)").find('input:eq(0)').val(ccid);//Type of CPF Account  
				 selectNullvalChk($tblCpfRow.find("td:eq(6)"),ccid);
				 
				 $tblCpfRow.find("td:eq(7)").find('input:eq(0)').val(periodFrm);//Period From 
				 $tblCpfRow.find("td:eq(8)").find('input:eq(0)').val(periodTo);//Period To 
	
				 $tblCpfRow.find("td:eq(7)").find('input:eq(1)').val(agefrom);//Period From 
				 $tblCpfRow.find("td:eq(8)").find('input:eq(1)').val(ageTo);//Period To 
			 
				 $tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(roundNumber(amount*frequency));//Amount 
				    
				 frequency="1"; 
				 selectNullvalChk($tblCpfRow.find("td:eq(10)"),frequency);
				  
				 applyEventHandlers();  
			}  
		  }
		 
		}	 
		reOrderVisibleRows("cpfAccAddDedTable");
		return true; 
		
}
function clearLifeInsuranceScreen(){
	
	$("input[name=lipId]").val("");
	$("input[name=lipAppId]").val("");
	
	$("#txtFldLifeinsInsurerName").val(""); 
	$("#txtFldLifeinsPolicyNo").val(""); 
	
//	var txtFldInputsAll =['lifeInsdetstab', 'li_DeathBenef_tab','li_plandetails',
//	                      'li_Disability_tab','li_CriticalIllness_tab',
//	                      'li_Hospitalisation_tab','li_RetirementPlg_tab','li_EducationPlg_tab'];
	
	var txtFldInputsAll =['lifeInsdetstab', 'li_plandetails'];
	
	
	$.each( txtFldInputsAll, function( index, value ) {  
		 $("#listofLifeIns_Dialog #"+value).find("input[type=text]").val(""); 
		 $("#listofLifeIns_Dialog #"+value).find("input[type=hidden]").val(""); 
		 $("#listofLifeIns_Dialog #"+value).find("select").val(""); 
	});  
//	$("[id=chkAllRiderPlans]").prop("checked",false);
	  
	
	if(isEmpty($("#nominationType").val())   || $("#nominationType").val() == "None"){ 
		$('#listofLifeIns_Dialog #NomineesTblDiv').css("display","none");
	}else{
		$('#listofLifeIns_Dialog #NomineesTblDiv').css("display","block");
	}
	
	$('#listofLifeIns_Dialog #liTypesOfCovBenefdiv').css("display","none");
	$('#listofLifeIns_Dialog #retCashvalonret').prop("readonly",true);
	$('#listofLifeIns_Dialog #LIDDCovergePanel').css("display","none"); 
	 
	$('#listofLifeIns_Dialog').find('ul li:eq(3)').find("a").css('display','none');
	$('#listofLifeIns_Dialog').find('ul li:eq(4)').find("a").css('display','none');
	$('#listofLifeIns_Dialog').find('ul li:eq(5)').find("a").css('display','none');
	$('#listofLifeIns_Dialog').find('ul li:eq(6)').find("a").css('display','none');
	$('#listofLifeIns_Dialog').find('ul li:eq(7)').find("a").css('display','none');
	$('#listofLifeIns_Dialog').find('ul li:eq(8)').find("a").css('display','none'); 
	
	$("#listofLifeIns_Dialog #divRetirementPlgtbl").hide();
	
	 
	resetMultiSel('sellipCoveragetype');
	resetMultiSel('sellipIsnurObject');
	resetMultiSel('selmulCriticalLevelofDD');   
	
	$("#plandetailsfooter").find("input").val("")
//	$("#healthInsdetstab").find("input,select,textarea").val("")
	
	$("#sellipCoveragetype").removeAttr("rowrefid");
	$("#lipRefId").val("");
	$("#lipPremiumsrc").removeAttr("rowrefid");
//	clrDatatables('liPlanDetailstbl');
//	clrDatatables('liRaiderDetailstbl'); 
//	clrDatatables('liDeathBenefittbl');
//	clrDatatables('liDisabilitytbl');
//	clrDatatables('liCriticalIllnesstbl');
//	clrDatatables('liHospitilisationtbl');
	clrDatatables('liEducationtbl');
	clrDatatables('liRetirementPlgtbl');
	clrDatatables('fnaLINomineesTbl');
	
	clrDatatables('planCoveragestbl');
//	clrDatatables('cvplnleftpaneltbl');
	
	
	
		$("#raiderToggle").css("display","none");
	
	  $('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').css("display","block");
	  $('#lifeInsNavTabsDets a[href="#liplandetails"]').css("display","block");
//	  $('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').css("display","none");
//	  $('#liRaiderDetailstbl tbody tr').hide();
	  prevScrFlg="";//instant save
	  
	  $('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').css("display","block");
	  $('#lifeInsNavTabsDets a[href="#liplandetails"]').css("display","block");
	  $('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').css("display","none");
		
		typeOfCoverage("All","none"); 
	  
	  clearPlanTab(true);//new plan
}
function openLifeScreen(){  
	var flag = true; 
//	 autosave required when 
	
//	$("input[name=lipId]").val(""); 
//	$("input[name=coverId]").val("");
//	
//	$("#txtFldLifeinsInsurerName").val(""); 
//	$("#txtFldLifeinsPolicyNo").val(""); 
	
	
	   
//	 var planNames_Lst=fpmsPlannamelist(); 
//	 $("#selplanB00").typeahead({source: planNames_Lst});
//	 $("#lipPlanname").typeahead({source: planNames_Lst});
	 		
//#li_DeathBenef_tab,#li_Disability_tab,+'#li_CriticalIllness_tab,#li_Hospitalisation_tab'

	  $('#lifeInsdetstab,#liplandetails,#li_RetirementPlg_tab,#li_EducationPlg_tab').find(":input").each(function() {
		  
		  var elmval=$(this).val(); 
		  var elmName = $(this).prop("name");
		  var elmId = $(this).prop("id");
		  var elmType = $(this).prop("type");
		  var elmClass = $(this).hasClass("defaultvalues");
		  
		  
		  
		  if (!(isEmpty(elmval)) && (elmName != "hCoverageType") && (elmId != "SelliRetirementPlg")
				  && (elmId != "SelliEducation") && (elmId != "txtFldswtPremTermB00") && (elmType != "checkbox") && (!elmClass)  ) {
			  
//			  console.log("---->"+elmId+"="+elmval);
			      flag = false; 
//			      return;
		   }  
	  });


	 
		
	  if (!flag) { 
		  	openModelforClearLifeDets();
	  }else{
		  
		  clearLifeInsuranceScreen();
		  $('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').click(); 
	  }
	  
	  
//	  $("#txtFldliplnIdB01").val(makeid(17));
	  
//	  var BASIC_REF = "B1";
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(0)").val(BASIC_REF);
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(12)").val("I");
//	  
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(13)").val(makeid(17));
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(14)").val(newMakeId("LIP", 12));
//	  
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq(0)").find("input:eq(0)").prop("checked",true);
	  
//	  var RIDER_REF = "R1";
//	  $("#riderAppendTable tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(0)").val(RIDER_REF);
//	  $("#riderAppendTable tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(12)").val("I");
//	  
//	  $("#riderAppendTable tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(13)").val(makeid(17));
//	  $("#riderAppendTable tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(14)").val(newMakeId("LIP", 12));
	  
//	  $("#txtFldliplnIdR01").val(makeid(17));
	  
	  
	  getBasicfn(false);
	  planAlertInfo();
}


function openModelforClearLifeDets(){
	$('#clearmsglifeData').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true
		});
	  $('#clearmsglifeData').on('shown.bs.modal', function() {  
		  $(this).find(".modal-title").text('FIPA Message');
		  $(this).find(".modal-footer").find("button:eq(0)").unbind();  
			  $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
				  				clearLifeInsuranceScreen();
				  			  $('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').click(); 
				        	  $('#clearmsglifeData').modal('hide'); 
			  });  
		});
	   
		
}

/*Check From Period via To Period validations*/

$("#lipIncepdate").change(function(){ 
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('lipIncepdate','lipExpdate','Inception Date should be lesser than the Expiry Date')); 
	$("#txtFldIncDateB00").val($(this).val()); 
});

/*$("#lipIncepdate").change(function(){
	 checkDateFormat($(this));
});
*/

$("#lipExpdate").change(function(){
	checkDateFormat($(this));
	if(!chkFromToDateValidation('lipIncepdate','lipExpdate','Expiry Date should be greater than the Inception Date'));
	$("#txtFldPolExpDateB00").val($(this).val()); 
}); 


/*$("#lipExpdate").change(function(){    
 checkDateFormat($(this));
}); */
 

$("#caSavingDeprate").change(function(){ 
	var savdep=$(this).val();
	$("#retIntrateused").val(savdep); 
});
//
function highlightSpecPlanDetails(obj,curRow){ 
//	var planName=curRow.find("td:eq(2)").find('input:eq(0)').val();  
//	if($(obj).is(":checked")){  
//		highPlanCoverages('liDeathBenefittbl',2,planName);
//		highPlanCoverages('liDisabilitytbl',2,planName);
//		highPlanCoverages('liCriticalIllnesstbl',2,planName);
//		highPlanCoverages('liHospitilisationtbl',2,planName);
////		highPlanCoverages('liEducationtbl',3,planName);
//		highPlanCoverages('liRetirementPlgtbl',2,planName);
//	} 
}


function highPlanCoverages(tblId,tdno,oriplanName){
	if($('#'+tblId+' tbody tr').length>0){
		$('#'+tblId+' tbody tr').hide(); 
		var strRefId=""; 
		$('#'+tblId+' tbody tr').each(function(){
			var planName=$(this).find("td:eq("+tdno+")").find('input:eq(0)').val();
			strRefId = isEmpty(planName)? "" :  planName;
			if(oriplanName == strRefId){ 
				 $(this).show(); 
			} else{
				$(this).hide();
			}
			  
		});  
		reOrderVisibleRows(tblId);
	}
}


function lifeInsPremium(opts){ 
	var client_NRIC = $("#dfSelfNric").val();
	var client_AdvId = $("#advstfId").val();
	var fpmsCustId = $("[name=custId]").val();
	
	var strPremAmtSelf=0,strPremAmtSpouse=0,strPremAmtFamily=0;
	
	var tempSelfIns =$("#expdSelfInsurance").val();
	var tempSpsIns =$("#expdSpsInsurance").val();
	var tempFamIns =$("#expdFamilyInsurance").val();
//	
//	console.log($("#expdSelfInsurance").val())
//	console.log($("#expdSpsInsurance").val())
//	console.log($("#expdFamilyInsurance").val())
//	alert(fpmsCustId)
	
	
	$.ajax({
		url:servletName,
		async:true,
		data:{
			"DBCALLFOR":"FNA_LIFE_PREMAMT",
			"strClientNRIC":client_NRIC,
			"strClientAdvId":client_AdvId,
			"strCustId":fpmsCustId
		},
		success: function(result){
			
			var jsnRslt=JSON.parse(result); 
			$.each(jsnRslt,function(i,obj){
				if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
					window.location = BASE_URL + SESSION_EXP_JSP;

					hideLoader();
					return;
				}

				if (obj.SESSION_EXPIRY=="DB_ERROR") {
					window.location = BASE_URL + DB_EXP_JSP;

					hideLoader();
					return;
				}
				
				$.each(obj,function(i,val){
					if(i=="CLNT_LIFEPREM_AMT"){
						$.each(val, function(contkey, contvalue) { 
							var appName = contvalue["jsonApplnName"];
							var lifeId 	= contvalue["jsonLifeId"];
							var owner 	= contvalue["jsonLifeOwner"];
							var planName= contvalue["jsonLifePlanName"];
							var incDate = contvalue["jsonLifeIncDate"];
							var payMode = contvalue["jsonLifePayMode"]; 
							var paymtd = contvalue["jsonLifePayMtd"]; 
							var premAmt = contvalue["jsonLifePremAmt"];   
							var polDate = contvalue["jsonLifePolDate"];
							var planterm = contvalue["jsonLifePlanTerm"];
							var planuniqid = contvalue["jsonLifePlanId"];
							var planstatus = contvalue["jsonLifePlanStatus"];
							
							 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
									 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){
		 
							if(!isEmpty(premAmt) && isValidObject(premAmt)){ 
								 var TopUpAmt=0; 
							 		if(payMode == 'ANNUALLY'){
										TopUpAmt=1;
									}else if(payMode == 'HALF YEARLY'){
										TopUpAmt=2;
									}else if(payMode == 'QUARTERLY'){
										TopUpAmt=4;
									}else if(payMode == 'MONTHLY'){
										TopUpAmt=12;
									}else if(payMode == 'SINGLE'){
										TopUpAmt=1;
									}
							 		
							 		 var stillNeedTopay=false;
							 		 var sumamt	=	premAmt*TopUpAmt;
							 		 stillNeedTopay 	= validateDateComparision(polDate,ResultNewDate,">="); 
							 		
							 if(stillNeedTopay){
								if(owner == "Self"){
									strPremAmtSelf +=Number(sumamt);
								}
								if(owner == "Spouse"){
									strPremAmtSpouse +=Number(sumamt);
								}
								if(owner == "Parents" || owner == "Joint"){
									strPremAmtFamily +=Number(sumamt);
								} 
							  }
							}
							 }
						});
						
						
						
						 $("#expdSelfInsurance").val(roundNumber(strPremAmtSelf)); 
						 $("#expdSelfInsurance").attr("data-attr",tempSelfIns).attr("onmouseover","toolTipLifeShow($(this))");
						 if(tempSelfIns  != $("#expdSelfInsurance").val() && !isEmpty($("#expdSelfInsurance").attr("data-attr"))){
							 $("#expdSelfInsurance").addClass("alterColor");
						 }else{
							 $("#expdSelfInsurance").removeClass("alterColor");
						 }
					     $("#expdSpsInsurance").val(roundNumber(strPremAmtSpouse));
					     $("#expdSpsInsurance").attr("data-attr",tempSpsIns).attr("onmouseover","toolTipLifeShow($(this))");
					     if( tempSpsIns  != $("#expdSpsInsurance").val() &&   !isEmpty($("#expdSpsInsurance").attr("data-attr")) ){
					    	 $("#expdSpsInsurance").addClass("alterColor");
						 }else{
							 $("#expdSpsInsurance").removeClass("alterColor");
						 }
					     $("#expdFamilyInsurance").val(roundNumber(strPremAmtFamily));   
					     $("#expdFamilyInsurance").attr("data-attr",tempFamIns).attr("onmouseover","toolTipLifeShow($(this))");
					     if(tempFamIns != $("#expdFamilyInsurance").val() && !isEmpty($("#expdFamilyInsurance").attr("data-attr"))){
					    	 $("#expdFamilyInsurance").addClass("alterColor");
						 }else{
							 $("#expdFamilyInsurance").removeClass("alterColor");
						 } 
					     
						 calcSum(this,'SUMOF_ANNEXP_SELF');
						 calcSum(this,'SUMOF_ANNEXP_SPS');
						 calcSum(this,'SUMOF_ANNEXP_FAM');  
						 
					}
					
				});
				
				
			});
			
		}
	});  
}

function toolTipLifeShow(elmId){
	var newval = elmId.val();
	var dataval = elmId.attr("data-attr");
	
	 if((newval!=dataval)){
		  if(dataval != undefined && dataval != "0" && dataval != ""){
			  
			  elmId.isDisabled = true;
			  elmId.qtip({
				 		content: {text : "Original Life Policy Premium Amount:<strong> "+dataval+"</strong><br> Keyed In value <strong>"+newval+"</strong>"},   
				         style: {
				             classes: 'qtip-green qtip-rounded qtip-shadow'
				         }, position: {
				             my: 'top left',   
				             at: 'bottom left', 
				             viewport: $(window),
				             target: elmId 
				         }  
				     });
			  elmId.qtip('show');
			  elmId.attr("data-attr",(isNaN(dataval)) ? elmId.removeAttr("data-attr") : dataval);
			  elmId.val((isNaN(newval)) ? elmId.removeAttr("data-attr"): newval);
		  } 
		 
		 	 
	 }
}