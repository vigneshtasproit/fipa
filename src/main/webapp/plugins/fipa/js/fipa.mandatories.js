/**
 * Mandatory Forms
 */
/*Mandatory Fields pop for Retirement*/
function mandatoryFldForRetirement(elmId,RowId,SCREEN){
	 
		if(!validationRetirementScreenWithOutAlert('retmandatoryDialog')){ 
			applyErrorToastrAlert("Some Retirement data is not key-ed in. so key-in required data in retirement planning section for effective retirement planning");
		 $("#retMandatoryFlds").insertAfter( $( "#cloneModel" ));
		$('#retmandatoryDialog').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
			}); 
		$('#retmandatoryDialog').on('shown.bs.modal', function() {
			  $(this).find(".modal-title").text("Retirement Mandatory Fields to be Keyed In");
			  $(this).find(".modal-footer").find("button:eq(0)").unbind();
			  $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
				  if(!validationRetirementdlgIdScreen('retmandatoryDialog'))return;
				  $( "#retMandatoryFlds" ).insertAfter($("#RET_APD2")); 
				  if(RowId!=null){
					  if(SCREEN == "PROP"){
							onSoldChange(RowId.find("td:eq(15)").find('select:eq(0)'),elmId,RowId.find("td:eq(17)").find('input:eq(0)'));
							retOnRetFnc(elmId,RowId.find("td:eq(17)").find('input:eq(0)'));
							 propyearstorent(RowId.find("td:eq(8)").find('select:eq(0)'),RowId.find("td:eq(15)").find('select:eq(0)'),elmId,RowId.find("td:eq(18)").find('input:eq(0)'));
							 syncPropTblRow(RowId);
							 
					  }
					  if(SCREEN == "INVEST"){
//					  if(!checkPaymentInvObj(elmId,RowId.find("td:eq(10)").find('select:eq(0)')))return;
						if(!checkPaymentWithObj(RowId.find("td:eq(10)").find('select:eq(0)'),elmId))return;
						checkInvObjDets(elmId,RowId.find("td:eq(28)").find('select:eq(0)'),RowId.find("td:eq(27)").find('input:eq(0)'),RowId.find("td:eq(29)").find('input:eq(0)'),RowId.find("td:eq(10)").find('select:eq(0)'));
//						newRowInvestCobEditTbl(RowId);
//						syncInvestTblEditRow(RowId); 
					  } 
					  
					  if(SCREEN == "COB"){
//						  syncCashAtBankTblEditRow(RowId); 
					  }
					  if(SCREEN == "LIFE"){ 
		  	               $('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display","block");  
				  	  		liRetirementPlgtbl.columns.adjust().draw(false);
				  	  		setMainRPtoLifeRP();
				  	  		$('#selDlgliplnCoverages').multiselect('select','RP');
				  	  		$('#lifeInsNavTabsDets a[href="#liplandetails"]').click();  
					  }
				  } else{

//						if(!checkPaymentInvObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst")))return;
					  
					  if(SCREEN == "PROP"){
						  onSoldChange($("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),true); 
							retOnRetFnc($("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),true); 
							propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true);
//							 syncPropTblRow(RowId);
							 
					  }
					  
					  
					  if(SCREEN == "INVEST"){
						checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"));
						if(!checkPaymentWithObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst")))return;
						
					  }
					  
					  
					  openDivCobObject($("#selDlgCOBObjective"),$("#txtFldDlgCOBRetrmntPrcnt"),$("#selDlgCOBChildName"));
					  
						if(SCREEN == "LIFE"){
							     
			  	               $('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display","block");  
					  	  		liRetirementPlgtbl.columns.adjust().draw(false);
					  	  		setMainRPtoLifeRP(); 
					  	  		$('#selDlgliplnCoverages').multiselect('select','RP');
					  	    	typeOfCoverage("All","none");
					  	    	$('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
					  	  	
						  }
				  }
	//			  instantRetirplgDetails();
				  $('#retmandatoryDialog').modal('hide');  
				  
			  });
			  $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
				  $( "#retMandatoryFlds" ).insertAfter($("#RET_APD2"));
				  if(SCREEN == "INVEST"){
					  elmId.val("No plans");  
				  }else{
					  elmId.val("");  
				  }
				     
				  
				  
				  if(RowId!=null){
					  if(SCREEN == "PROP"){
							onSoldChange(RowId.find("td:eq(15)").find('select:eq(0)'),elmId,RowId.find("td:eq(17)").find('input:eq(0)'));
							retOnRetFnc(RowId.find("td:eq(16)").find('select:eq(0)'),RowId.find("td:eq(17)").find('input:eq(0)'));
							 propyearstorent(RowId.find("td:eq(8)").find('select:eq(0)'),RowId.find("td:eq(15)").find('select:eq(0)'),elmId,RowId.find("td:eq(18)").find('input:eq(0)'));
							 syncPropTblRow(RowId);
							 
					  }
				  }else{
					  if(SCREEN == "PROP"){
						  onSoldChange($("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),true); 
							retOnRetFnc($("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),true); 
							propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true);
//							 syncPropTblRow(RowId);
							 
					  }
					  
					  
					  if(SCREEN == "INVEST"){
						checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"));
						if(!checkPaymentWithObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst")))return;
						
					  }
				  }
				  
				  
				  if(SCREEN == "LIFE"){
					  $('#selDlgliplnCoverages').multiselect('deselect','RP');
					  $('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
					  loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
				  } 
				  typeOfCoverage("All","none");
				  $('#retmandatoryDialog').modal('hide');  
				  
			  });
			
		});   
		}   

	  		$('#selDlgliplnCoverages').multiselect('select','RP');
}//end of mandatoryFldForRetirement



function mandatoryFldForCob(elmId,RowId,SCREEN){
	
	$("#cashOfBanksTable tbody tr").each(function(){
		$(this).removeClass("selected"); 
	});
	
	var $invrowref=RowId.find("td:eq(0)").find("input.rowrefid").val(); 
	$("#cashOfBanksTable  tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){ 
		if($invrowref == $(this).val()){
			
			var $lastRow=$(this).closest("tr");
			
			var cntmainholder=$lastRow.find("td:eq(2)").find('select:eq(0)').val(); //Main Holder
			var cntbankname=$lastRow.find("td:eq(6)").find("input:eq(0)").val(); //Current bank Name
			var cntacctno=$lastRow.find("td:eq(7)").find('input:eq(0)').val(); //Current Account no 
			var cntbalance=$lastRow.find("td:eq(9)").find('input:eq(0)').val(); //Current Balance Amount
			  
//			if(isEmpty(cntmainholder)){  
				
//				applyErrorToastrAlert("Some Mandatory data is not filled in so key in for effective Cash At Bank");
				$lastRow.addClass("selected");   
				
				
				
			$("#cobMandatoryFlds").insertAfter( $( "#cloneModel" ));
			$('#retmandatoryDialog').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			$('#retmandatoryDialog').on('shown.bs.modal', function() {
			 
				 var valflg=validateCOB($lastRow); 
				 if(valflg){
					 $lastRow.find("td:eq(2)").find('select:eq(0)').focus();	 
				 }
				 
				 
				  $(this).find(".modal-title").text("Cash At Bank Mandatory Fields to be Keyed In");
				  $(this).find(".modal-footer").find("button:eq(0)").unbind();
				  $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
					  if(!validateCOB($lastRow))return;
					  $( "#cobMandatoryFlds" ).insertAfter($("#COB_APD"));  
					  $lastRow.removeClass("selected");   
					  $('#retmandatoryDialog').modal('hide');  
					  
				  });
				  $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
					  $( "#cobMandatoryFlds" ).insertAfter($("#COB_APD")); 					  
					  $lastRow.removeClass("selected");   
					  $('#retmandatoryDialog').modal('hide');  
					  
				  });
				
			});   
//			}
		}
		
	});
	
	 
	
}//end of mandatoryFldForCob


function validateCOB($lastRow){
	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(2)").find('select:eq(0)'), MAIN_HOLDER_NAME)))return;
//	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(6)").find('input:eq(0)'), BANK_NAME)))return; 
//	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(7)").find('input:eq(0)'), BANK_NO)))return; 
//	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(9)").find('input:eq(0)'), COB_BALANCE)))return; 
return true;
}





function mandatoryFldForCpf(elmId,RowId,SCREEN){
	
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false); 
	
	$("#cpfAccAddDedTable tbody tr").each(function(){
		$(this).removeClass("selected"); 
	}); 
			var $lastRow=elmId;
			
			var cntaccholder=$lastRow.find("td:eq(2)").find('select:eq(0)').val(); //Account Holder
			var cnttransaction=$lastRow.find("td:eq(5)").find('select:eq(0)').val(); //Types of Transaction
			var cntcpfacc=$lastRow.find("td:eq(6)").find('select:eq(0)').val(); //Cpf Account Type
			 
			 
				$lastRow.addClass("selected");
				
			$("#cpfMandatoryFlds").insertAfter( $( "#cloneModel" ));
			$('#retmandatoryDialog').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			$('#retmandatoryDialog').on('shown.bs.modal', function() { 
				
				$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
			
				
				 var valflg=validateCpf($lastRow);
				 
				 if(valflg){
					 $lastRow.find("td:eq(2)").find('select:eq(0)').focus();	 
				 }
				 
				  $(this).find(".modal-title").text("Central Provident Fund Mandatory Fields to be Keyed In");
				  $(this).find(".modal-footer").find("button:eq(0)").unbind();
				  $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
					  if(!validateCpf($lastRow))return;
					  $( "#cpfMandatoryFlds" ).insertAfter($("#CPF_APD"));  
					  $lastRow.removeClass("selected");   
					  $('#retmandatoryDialog').modal('hide');   
				  });
				  $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
					  $( "#cpfMandatoryFlds" ).insertAfter($("#CPF_APD"));
					  $lastRow.removeClass("selected");   
					  $('#retmandatoryDialog').modal('hide');   
				  });
				
			});    
	
}//end of mandatoryFldForCob


function validateCpf($lastRow){ 
	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(2)").find('select:eq(0)'), CAD_APPLICANT))) return;
	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(5)").find('select:eq(0)'), CAD_TRANSTYPE))) return;
	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(6)").find('select:eq(0)'), CAD_ACCTYPE))) return;
	return true;
}
 
 

function mandatoryFldForInsurance(){
	 
	if(!validationLifeInsScreenWithOutAlert()){ 
		
		applyErrorToastrAlert("Some Life Insurance data is not key-ed in so key in for effective Plan Details"); 
				$("#lifeMandatoryFlds").insertAfter( $( "#cloneModel" ));
			$('#retmandatoryDialog').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			$('#retmandatoryDialog').on('shown.bs.modal', function() { 
				  $(this).find(".modal-title").text("Life Insurance Mandatory Fields to be Keyed In");
				  $(this).find(".modal-footer").find("button:eq(0)").unbind();
				  $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
					  if(!validationLifedlgIdScreen('lifeInsdetstab'))return;
					  $( "#lifeMandatoryFlds" ).insertAfter($("#LIFE_APD")); 
				//	  instantLifeInsDetails();
					  $('#retmandatoryDialog').modal('hide');  
					  return true;
					  
				  });
				  $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
					  $( "#lifeMandatoryFlds" ).insertAfter($("#LIFE_APD")); 
					  $('#retmandatoryDialog').modal('hide');  
					  return true;		  
				  });
				
			});   
			return false;
	}   else{
		return true;
	}
	
}//end of mandatoryFldForRetirement


function validationLifeInsScreenWithOutAlert(){
	 
	if (!(validateFocusRDFldsWA('lifeInsdetstab', 'lipOwner', Li_OWN)))
		return; 
	if (!(validateFocusRDFldsWA('lifeInsdetstab', 'lipAssured', Li_ASS)))
		return;
	if (!(validateFocusRDFldsWA('lifeInsdetstab', 'lipCompany', Li_INS)))
		return;
	if (!(validateFocusRDFldsWA('lifeInsdetstab', 'lipPolicyno', Li_POL)))
		return;
	if (!(validateFocusRDFldsWA('lifeInsdetstab', 'policyStatus', Li_POLSTS)))
		return;
	if (!(validateFocusRDFldsWA('lifeInsdetstab', 'lipIncepdate', Li_DATE)))
		return; 
//	if (!(validateFocusRDFldsWA('lifeInsdetstab', 'lipPlanname', Li_PLAN)))
//		return; 
	
	if(!isEmpty($("#lipMaturityVal").val())){
		if (!(validateFocusRDFldsWA('lifeInsdetstab', 'lipMaturityDate', Li_MATDATE)))
			return;
	}
	
	return true;
 
}

function validationLifedlgIdScreen(dlgId){
 
	if (!(validateFocusRDFlds(dlgId, 'lipOwner', Li_OWN)))
		return; 
	if (!(validateFocusRDFlds(dlgId, 'lipAssured', Li_ASS)))
		return;
	if (!(validateFocusRDFlds(dlgId, 'lipCompany', Li_INS)))
		return;
	if (!(validateFocusRDFlds(dlgId, 'lipPolicyno', Li_POL)))
		return;
	if (!(validateFocusRDFlds(dlgId, 'policyStatus', Li_POLSTS)))
		return;
	if (!(validateFocusRDFlds(dlgId, 'lipIncepdate', Li_DATE)))
		return; 
//	if (!(validateFocusRDFlds(dlgId, 'lipPlanname', Li_PLAN)))
//		return; 
	
	if(!isEmpty($("#lipMaturityVal").val())){
		if (!(validateFocusRDFlds(dlgId, 'lipMaturityDate', Li_MATDATE)))
			return;
	} 
	return true;
}



/*SRS*/
 function mandatoryFldForSRS(elmId,RowId,SCREEN){
	 
	
	 
	$("#srsTable tbody tr").each(function(){
		$(this).removeClass("selected"); 
	}); 
			var $lastRow=elmId;
			$lastRow.addClass("selected");
				
			$("#srsMandatoryFlds").insertAfter( $( "#cloneModel" ));
			$('#retmandatoryDialog').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			$('#retmandatoryDialog').on('shown.bs.modal', function() { 
				
				 $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false); 
				 
				 var valflg=validateSrs($lastRow);
				 
				 if(valflg){
					 $lastRow.find("td:eq(2)").find('select:eq(0)').focus();	 
				 }
				 
				  $(this).find(".modal-title").text("SRS Mandatory Fields to be Keyed In");
				  $(this).find(".modal-footer").find("button:eq(0)").unbind();
				  $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
					  if(!validateSrs($lastRow))return;
					  $( "#srsMandatoryFlds" ).insertAfter($("#SRS_APD"));  
					  $lastRow.removeClass("selected");   
					  $('#retmandatoryDialog').modal('hide');   
				  });
				  $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
					  $( "#srsMandatoryFlds" ).insertAfter($("#SRS_APD"));
					  $lastRow.removeClass("selected");   
					  $('#retmandatoryDialog').modal('hide');   
				  }); 
			});     
}//end of mandatoryFldForCob


function validateSrs($lastRow){ 
	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(2)").find('select:eq(0)'), SRS_CLASSFY))) return;
	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(3)").find('input:eq(0)'), SRS_DESC))) return;
	if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(4)").find('select:eq(0)'), SRS_FREQ))) return;
	if($lastRow.find("td:eq(2)").find('select:eq(0)').val() == "Annual Addition"){
		if(!(validateFocusDhtmlFldsWA('retmandatoryDialog',$lastRow.find("td:eq(7)").find('input:eq(0)'), SRS_PERTO))) return;
	}
	return true;
} 
 
 


function validationRetirementdlgIdScreen(dlgId){

	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 	
		if(!(validateFocusRDFlds(dlgId,'retSelfAge',RETSCREEN_INTSLFAGE))) return;  
		if(!(validateFocusRDFlds(dlgId,'retAgeBasedon',RETSCREEN_RETAGEBASE))) return;
		if(!(validateFocusRDFlds(dlgId,'retYrstoret',RETSCREEN_YRSTORET))) return;
		if(!(validateFocusRDFlds(dlgId,'retSelfCoordinateage',RETSCREEN_CORSLFAGE))) return; 
		if(!(validateFocusRDFlds(dlgId,'retSelfProjage',RETSCREEN_PROSLFAGE))) return; 
		if(!(validateFocusRDFlds(dlgId,'retSelfLivyrs',RETSCREEN_PROSLFLVYRRET))) return;  
		if(!(validateFocusRDFlds(dlgId,'retSelfProjroi',RETSCREEN_ROISLF))) return; 
		
		if(analysisForSpouse){
			if(!(validateFocusRDFlds(dlgId,'retSpsAge',RETSCREEN_INTSPSAGE))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsCoordinateage',RETSCREEN_CORSPSAGE))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsProjage',RETSCREEN_PROSPSAGE))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsLivyrs',RETSCREEN_PROSPSLVYRRET))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsProjroi',RETSCREEN_ROISPS))) return;
		} 
		if(analysisForFamily){
			if(!(validateFocusRDFlds(dlgId,'retFamLivyrs',RETSCREEN_PROFAMLVYRRET))) return;
			if(!(validateFocusRDFlds(dlgId,'retFamProjroi',RETSCREEN_ROIFAM))) return;
		}
		
		
		return true;
}


function validationRetirementScreenWithOutAlert(){
	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 	
	
		if(!(validateFocusRDFldsWA('focusfmIntage','retSelfAge',RETSCREEN_INTSLFAGE))) return;  
		if(!(validateFocusRDFldsWA('focusfmRdAge','retAgeBasedon',RETSCREEN_RETAGEBASE))) return; 
		if(!(validateFocusRDFldsWA('focusfmyrstord','retYrstoret',RETSCREEN_YRSTORET))) return; 
		if(!(validateFocusRDFldsWA('focusfmcoyrs','retSelfCoordinateage',RETSCREEN_CORSLFAGE))) return; 
		if(!(validateFocusRDFldsWA('focusfmprojlife','retSelfProjage',RETSCREEN_PROSLFAGE))) return; 
		if(!(validateFocusRDFldsWA('focusfmprojlvyrs','retSelfLivyrs',RETSCREEN_PROSLFLVYRRET))) return; 
		if(!(validateFocusRDFldsWA('focusfmroi','retSelfProjroi',RETSCREEN_ROISLF))) return;
		
		
		if(analysisForSpouse){
			if(!(validateFocusRDFldsWA('focusfmIntage','retSpsAge',RETSCREEN_INTSPSAGE))) return;
			if(!(validateFocusRDFldsWA('focusfmcoyrs','retSpsCoordinateage',RETSCREEN_CORSPSAGE))) return;
			if(!(validateFocusRDFldsWA('focusfmprojlife','retSpsProjage',RETSCREEN_PROSPSAGE))) return;
			if(!(validateFocusRDFldsWA('focusfmprojlvyrs','retSpsLivyrs',RETSCREEN_PROSPSLVYRRET))) return;
			if(!(validateFocusRDFldsWA('focusfmroi','retSpsProjroi',RETSCREEN_ROISPS))) return;
		}
		if(analysisForFamily){
			if(!(validateFocusRDFldsWA('focusfmprojlvyrs','retFamLivyrs',RETSCREEN_PROFAMLVYRRET))) return;
			if(!(validateFocusRDFldsWA('focusfmroi','retFamProjroi',RETSCREEN_ROIFAM))) return;   
		}
		
//		if(!(validateFocusRDFldsWA('focusfmlvself','retSelfAnnlexpdamt',RETSCREEN_LVYRSLF)))return; 
//		if(!(validateFocusRDFldsWA('focusfmlvsps','retSpsAnnlexpdamt',RETSCREEN_LVYRSPS))) return; 
//		if(!(validateFocusRDFldsWA('focusfmlvfam','retFamAnnlexpdamt',RETSCREEN_LVYRFAM))) return; 
		return true;
	 
}


function validateFocusRDFldsWA(modelId,fld,msg){
var fldTrim = $("#"+fld).val().trim(); 
	if(isEmpty(fldTrim)){ 
		return false; 
	}//end of if  
	return true;
}
