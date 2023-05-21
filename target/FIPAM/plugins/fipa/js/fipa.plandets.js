// /**
// * Life Insurance Dialog  - Plan Details
// */ 
////	var liPlanDetailstbl = $('#liPlanDetailstbl').DataTable( {
////		destroy: true,
////	 	responsive: false,        
////	    ordering: false,
////	    searching: false,
////		scrollY:  "40vh",   
////		scrollX: true,
////	    scroller: false,
////	    scrollCollapse:false,
////	    paging:false, 
////	    filter:false,  
////	    dom: '<<"top" ip>flt>',
////	    columnDefs: [  { width: '20px', targets: [0,1]},
////	       	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			    if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////			    } 
////		 }
////	}).draw();
//	
//	
//	 
//	
//	
//	/*Add Row Click */
//	$("#lfplnARow").on("click",function(){ 
////			if(!mandatoryFldForInsurance())return;  
//		if(!valilifeinsurance())return; 
//		liplndetsclearFlds();
//		toggleBasicRiderPlan("BASIC"); 
//		toggleTermPlanSwitch($('#liPlandets_Dialog #txtFldDlgliplnPremTerm'),$('#liPlandets_Dialog #swtDlgliplnPremTerm'));		
//		showFIPAModel('liPlandets_Dialog','Life Insurance - Plan Details'); 
//				$("#liPlandets_Dialog").find("input[id=txtFldDlgliplnMode]").val("I");//instant save added line
//				$("#txtFldDlgPlanIncDate").val($("#lipIncepdate").val());
//				$("#txtFldDlgPlanExpDate").val($("#lipExpdate").val());
////				$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").addClass("hidden");//instant save added line
//				
//				$("#liPlandets_Dialog").find("select[id=selDlgliplntype]").val("B");
//				
//				$('#liPlandets_Dialog').on('shown.bs.modal', function () {   
//					
//					typeOfCoverage("All","none");
////					$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//					$("#liPlandets_Dialog").find("input[id=txtFldDlgliplnName]").focus();
//					$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//					 
//						  if(!validateLiPlanDetails())return;
//						  LiPlandetsRdlyflds(INS_MODE);  
//						  getliPlndetRows(null); 
//						  typeOfCoverage("All","none");
//							$('#liPlandets_Dialog').modal('hide'); 
//					  });  
//					
//					$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
//						typeOfCoverage("All","none");
//						$('#liPlandets_Dialog').modal('hide'); 
//					});
//				}); 
//	});
//
//	 
//	/*Populate Data */
//	function getliPlndetRows(dataset,tab){ 
//	 
//	var cell0 = '<span></span>'+
//	'<input type="hidden" name="txtFldplnDetMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldliplnId"><input type="hidden"  name="txtFldPlnRefId"><input type="hidden"  name="txtFldBasicRefId" >';
//	 
//	var cell1 = '<div class="radio radio-primary text-center"><input type="radio" name="radplnDetSelect"/><label>&nbsp;</label></div>'; 
//
//	var cell2 = '<input type="text" name="txtFldliplnName" class="form-control editable"  maxlength="150"  onmouseover="fipaTooltip(this);" />';
//
//	var cell3 = '<select  name="selliplntype" class="form-control editable"  ></select>';
//
//	var cell4 = '<input type="text" name="txtFldliplnPremTerm" class="form-control editable"  maxlength="20"  onmouseover="fipaTooltip(this);" />';
//
//	var cell5 = '<input type="text" name="txtFldliplnSA" class="form-control editable" onmouseover="fipaTooltip(this);" />'; 
//
//	var cell6 = '<input type="text" name="txtFldliplnPremAmt" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';
//
//	var cell7 = '<select  name="selliplnPayMode" class="form-control editable" maxlength="30"  ></select>';
//
//	var cell8 = '<select  name="selliplnPayMtd" class="form-control editable"  ></select>';
//
//	var cell9 ='<input type="text" name="txtFldliplnCovTypes" class="form-control editable" onmouseover="fipaTooltip(this);" readonly="true"  />'
//		+'<input type="hidden" name="txtFldliplnCoverages" class="form-control editable" onmouseover="fipaTooltip(this);" readonly="true" />';
//
//	var cell10 = '<input type="text" name="txtFldPlanIncepDate" class="form-control editable"   onmouseover="fipaTooltip(this);"   />';
//	
//	var cell11 = '<input type="text" name="txtFldPlanExpDate" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';
//	
//	var cell12 = '<input type="text" name="txtFldliplnRemarks" class="form-control editable"   maxlength="300"   onmouseover="fipaTooltip(this);"0   />'+
//	'<input type="hidden" name="txtFldliplnCrtdBy"/>1<input type="hidden" name="txtFldliplnCrtdDate"/>'2
//	+'<input type="hidden" name="bplfretYrstoret" value="'+$("#retYrstoret").val()+'"/>3'
//	+'<input type="hidden" name="bpretSelfretage" value="'+$("#retSelfCoordinateage").val()+'"/>4'
//	+'<input type="hidden" name="bpretSpouseretage" value="'+$("#retSpsCoordinateage").val()+'"/>5'
//	+'<input type="hidden" name="bpretMultionret"  />6'
//	+'<input type="hidden" name="bpretCashvalonret"  />7'
//	+'<input type="hidden" name="bpretIntrateused" value="'+$("#caSavingDeprate").val()+'"/>8'
//	+'<input type="hidden" name="bpretPrcnttoused" />9'
//	+'<input type="hidden" name="bpcashvalRetAge" />10'
//	+'<input type="hidden" name="bpcashvalRefId" />11';
//
//
//	 
//
//	liPlanDetailstbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12] ).draw( false );
//
//	var rowCount = $('#liPlanDetailstbl tbody tr').length;	
//	var $lastRow = $("#liPlanDetailstbl tbody tr:last");	
//
//	$lastRow.find("td:first").find('span').text(rowCount); 
//	$lastRow.find("td:eq(1)").find("input:first").click(function(){
//		 $("#liRaiderDetailstbl tbody tr").each(function(){ 
//		    	$(this).removeClass("selected");
//		     });
//		 
//		selectSingleRow(this);
//		selectPlanRow(this,$lastRow);
//		setMajorPlanDetails($lastRow);
//		liPlanDetailstbl.$('tr.selected').removeClass('selected');
//		$lastRow.addClass('selected');  
//		highlightRaiderBenefits(this,$lastRow);
//		showSpecificCoverages($lastRow);
//	
//	});
//	
//	$lastRow.find("td:eq(1)").find("input:first").attr('id',"radplnDet"+$lastRow.index())
//	.parent().find('label').attr('for',"radplnDet"+$lastRow.index());
//	
//	$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgliplnName").val());
//	$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//		setMajorPlanDetails($lastRow);
//	});
//	
//	var plntype = $("#selDlgliplntype > option").clone();
//	$lastRow.find("td:eq(3)").find('select:eq(0)').append(plntype);
//	$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgliplntype").val());
//	$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//	});
//	
//	
//	
//	
//	$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgliplnPremTerm").val());
//	$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntYrs");
//	$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//		 calculateEndDateFromYear($lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'));
//	});
//	
//	
//	$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgliplnSA").val());
//	$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
//	$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
////		calcTotalPlandetails();
//		ilifeInsPremium(null);
//		calcTotSAPremPlandetails();
//		dhtmlModChange($lastRow);
//	});
//	
//
//	$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgliplnPremAmt").val());
//	$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");
//	$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
////		calcTotalPlandetails();	
//		ilifeInsPremium(null);
//		calcTotSAPremPlandetails();
//		dhtmlModChange($lastRow);
//		newRowLifeinsCpfEditTbl($lastRow);
//		newRowLifeinsSRSEditTbl($lastRow);
////		newRowLifeCobEditTbl($lastRow);//commented 12042019
//	});
//	
//	 
//	var paymode = $("#selDlgliplnPayMode > option").clone();
//	$lastRow.find("td:eq(7)").find('select:eq(0)').append(paymode);
//	$lastRow.find("td:eq(7)").find('select:eq(0)').val($("#selDlgliplnPayMode").val());
//	$lastRow.find("td:eq(7)").find('select:eq(0)').on("change",function(){
////		calcTotalPlandetails();
//		ilifeInsPremium(null);
//		calcTotSAPremPlandetails();
//		dhtmlModChange($lastRow);
//		newRowLifeinsCpfEditTbl($lastRow);
//		newRowLifeinsSRSEditTbl($lastRow);
////		newRowLifeCobEditTbl($lastRow);//commented 12042019
//	});
//
//	var paymtd = $("#selDlgliplnPayMtd > option").clone();
//	$lastRow.find("td:eq(8)").find('select:eq(0)').append(paymtd);
//	$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#selDlgliplnPayMtd").val());
//	$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//		newRowLifeinsCpfEditTbl($lastRow);
//		newRowLifeinsSRSEditTbl($lastRow);
////		newRowLifeCobEditTbl($lastRow);//commented 12042019
//	});
//	
//	
//	
//	$lastRow.find("td:eq(9)").find('input:eq(0)').val(expandCoverOpts($("#selDlgliplnCoverages"),false)); 
//	$lastRow.find("td:eq(9)").find('input:eq(1)').val($("#hidDlgCoveragetype").val());
//	$lastRow.find("td:eq(9)").find('input:eq(1)').on("change",function(){
//		dhtmlModChange($lastRow);
//	});
//	
//	
//
//	$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgPlanIncDate").val());
//	$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
//		 checkDateFormat($(this)); 
//		 if(!dhtmlChkDateValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'),"Inception Date should be lesser than the Expiry Date"));  
//		
//		 setMajorPlanDetails($lastRow);
//		dhtmlModChange($lastRow);
//		newRowLifeinsCpfEditTbl($lastRow);
////		newRowLifeCobEditTbl($lastRow);//commented 12042019
//		 calculateEndDateFromYear($lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'));
//	});
//
//	
//	$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPlanExpDate").val());
//	$lastRow.find("td:eq(11)").find('input:eq(0)').on("change",function(){
//		 checkDateFormat($(this));   
//		 if(!dhtmlChkDateValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'),"Expiry Date should be greater than the Inception Date"));  
//		 setMajorPlanDetails($lastRow);
//		dhtmlModChange($lastRow);
//		newRowLifeinsCpfEditTbl($lastRow);
//		newRowLifeinsSRSEditTbl($lastRow);
////		newRowLifeCobEditTbl($lastRow);//commented 12042019
//	});
//	
//	
//	$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgliplnRemarks").val());
//	$lastRow.find("td:eq(12)").find('input:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//	});
//	
//	applyEventHandlers(); 
//	
//
//
//
//	$lastRow.find("input,select").on("click",function(event){
//		event.stopPropagation();
//	});
//	$lastRow.click(function() { 
//		 $("#liRaiderDetailstbl tbody tr").each(function(){ 
//		    	$(this).removeClass("selected");
//		     });
//		 
//		    $("#liPlanDetailstbl tbody tr").each(function(){
//		    	$(this).find("[name=radplnDetSelect]").attr("checked",false);
//		    	$(this).removeClass("selected");
//		     });
//	    	var checkbox = $lastRow.find("td:eq(1)").find("input"); 
//	        checkbox.prop("checked", true);
//	        $lastRow.addClass("selected"); 
//	        selectPlanRow(checkbox,$lastRow);
//			setMajorPlanDetails($lastRow);
//			highlightRaiderBenefits(checkbox,$lastRow);
//			 
//			showSpecificCoverages($lastRow);
//	});
//
//
//
//	
//	if(dataset != null){
// 
//		
//		if(tab == "FPMS_POLICYPLAN_DETS"){
//			$lastRow.find("td:eq(0)").find('input:eq(0)').val("I"); 
//		}else{
//			$lastRow.find("td:eq(0)").find('input:eq(0)').val("Q");
//		}
//		
//		
//				
//		var infoDetsArr = new Array();
//		
//		for(var data in dataset){
//			var col = dataset[data]; 
//			switch(data){
//			
//				case "planReferenceId": 
//				$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);
//				if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");} 
//				break;
//				
//				case "benfRaidRefId": 
//					$lastRow.find("td:eq(0)").find('input:eq(3)').val(col);
//					if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(3)').addClass("planrefid");} 
//					break;
//					
//				
//				case "riderId": 
//					$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 					
//					break;
//					
//				case "planName": 
//				case "strFPMSPolPlanName":
//					$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
//					
//					break;
//					
//				case "basorrid": 
//				case "strFPMSPolPrdtType":
//					selectNullvalChk($lastRow.find("td:eq(3)"),col); 
//					break;
//					
//				case "premTerm": 
//				case "strFPMSPolPremTerm":
//					$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
//					break;
//				 
//				case "sumAssured": 
//				case "strFPMSPolSA":
//					$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
//					break;
//				 
//				case "premAmount":
//				case "strFPMSPolPremium":
//					$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
//					
//					break;
//					
//				case "paymentMode":
//				case "strFPMSPolPaymentMode":
//					var mode;
//					if(col == "SEMI-ANNUAL" || col=="HALF-YEARLY"){
//						mode="HALF YEARLY";
//					}else{
//						mode=col;
//					} 
//					selectNullvalChk($lastRow.find("td:eq(7)"),mode);   
//					break;
//				
//				case "paymentMethod": 
//				case "strFPMSPolPaymentMeth":
//					selectNullvalChk($lastRow.find("td:eq(8)"),col); 
//					
//					break;
//				
//				case "coverageTypes": 
//					$lastRow.find("td:eq(9)").find('input:eq(0)').val(expandCoverOpts(col,true)); 
//					$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);  
//					break;
//					
//				case "planIncepDate": 
//				case "strFPMSPolEffDate": 
//					$lastRow.find("td:eq(10)").find('input:eq(0)').val(col);  
//					break;
//					
//				case "planExpDate": 
//					$lastRow.find("td:eq(11)").find('input:eq(0)').val(col);  
//					break; 
//					
//				case "planRemarks":
//				case "strFPMSPolRemarks":
//					$lastRow.find("td:eq(12)").find('input:eq(0)').val(col);  
//					break;
//					
//				case "planCrtdBy": 
//					$lastRow.find("td:eq(12)").find('input:eq(1)').val(col);
//					infoDetsArr.push(col);				
//					break;
//					
//				case "planCrtdDate":
//					$lastRow.find("td:eq(12)").find('input:eq(2)').val(col);
//					infoDetsArr.push(col);
//					break; 
//					
//				case "plnlfretYrstoret":
//					$lastRow.find("td:eq(12)").find('input:eq(3)').val(col); 
//					break;
//				case "plnretSelfretage":
//					$lastRow.find("td:eq(12)").find('input:eq(4)').val(col); 
//					break;
//				case "plnretSpouseretage":
//					$lastRow.find("td:eq(12)").find('input:eq(5)').val(col); 
//					break;
//				case "plnretMultionret":
//					$lastRow.find("td:eq(12)").find('input:eq(6)').val(col);
//					infoDetsArr.push(col);
//					break;
//				case "plnretCashvalonret":
//					$lastRow.find("td:eq(12)").find('input:eq(7)').val(col); 
//					break;
//				case "plnretIntrateused":
//					$lastRow.find("td:eq(12)").find('input:eq(8)').val(col); 
//					break;
//				case "plnretPrcnttoused":
//					$lastRow.find("td:eq(12)").find('input:eq(9)').val(col); 
//					break;
//				case "plncashvalRetAge":
//					$lastRow.find("td:eq(12)").find('input:eq(10)').val(col);
//					 
//					break;
//				case "cashValRefId":  
//					$lastRow.find("td:eq(12)").find('input:eq(11)').val(col); 
//					break; 
//					
//				case "planModBy":
//					infoDetsArr.push(col);
//					break;
//					
//				case "planModDate":
//					infoDetsArr.push(col);
//					break;	
//					
//					
//			}  
//		}
//		
//		 
//		
//		
//		}
//	if(dataset == null){
//
//		ilifeInsPremium(null);
////		calcTotalPlandetails(); 
//		//instant save added line 
////		instantlfBasPlanSave($lastRow,INS_MODE);	 
//		setMajorPlanDetails($lastRow); 
//		newRowLifeinsCpfEditTbl($lastRow);
//		newRowLifeinsSRSEditTbl($lastRow);
////		newRowLifeCobEditTbl($lastRow);//commented 12042019
//	} 
//	
//	calcTotSAPremPlandetails();
//	 planAlertInfo();
//	 $("[id=chkAllRiderPlans]").prop("checked",false); 
//	 $lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
//		$lastRow.find("select").prop("disabled",true);//instant save added line
//}
//
//	 
//	
//	function setMajorPlanDetails($lastRow){
//		
//		var planName=$lastRow.find("td:eq(2)").find('input:eq(0)').val();
//		var inceptionDate=$lastRow.find("td:eq(10)").find('input:eq(0)').val();
//		var expDate=$lastRow.find("td:eq(11)").find('input:eq(0)').val();
//		var paymentmtd=$lastRow.find("td:eq(8)").find('select:eq(0)').val();
//		
//		$("#hPlanName").val(planName);
//		$("#hInceptionDate").val(inceptionDate);
//		$("#hExpiryDate").val(expDate); 
//		$("#hPaymentMtd").val(paymentmtd);
//		
//	}
//	
//	
//	
//	function selectPlanRow(obj,curRow){
//		
//		var $planRefID = 0; 
//		 $('#raiderToggle').css("display","none");
//		if($(obj).is(":checked")){ 
//			var refId=curRow.find("td:eq(0)").find('input:eq(3)').val();
//			 $('#raiderToggle').css("display","block");
//				 if(isValidObject(refId) && !isEmpty(refId)){
//					 $planRefID=refId;
//					 curRow.find("td:eq(0)").find('input:eq(3)').addClass("planrefid").val($planRefID); 
//					 var splitId=refId.split("_");
//					 $("#hPlanRefId").val("R_"+splitId[1]);
//				 }else{
//					 
//					 var findMax=[];
//					 $("#liPlanDetailstbl tbody tr").each(function(){
//						 var rowRef = $(this).find("td:eq(0)").find('input:eq(3)').val();
//						 if(!isEmpty(rowRef)){
//						  var splitId=rowRef.split("_");
//						  findMax.push(Number(splitId[1])); 
//						 }
//					 });  
//					 
//					 if(findMax.length > 0){
//						 $planRefID=Math.max.apply(Math,findMax)+1;
//					 }else{
//						 $planRefID=1;
//					 }
//					 
//					 curRow.find("td:eq(0)").find('input:eq(3)').addClass("planrefid").val("B_"+$planRefID); 
//					 $("#hPlanRefId").val("R_"+$planRefID);
//					 liplandlgval(curRow);//instant save added line
//					 
//					 var planid=curRow.find("td:eq(0)").find('input:eq(1)').val();
//					 if(isEmpty(planid)){
////						 instantlfBasPlanSave(curRow,INS_MODE); //instant save added line
//					 }else{
////						 instantlfBasPlanSave(curRow,UPD_MODE); //instant save added line
//					 }
//					   
//				 }
//		  
//		var multiSelSplit = curRow.find("td:eq(9)").find('input:eq(1)').val().split(','); 
//			  typeOfCoverage("All","none");
//			  $.each(multiSelSplit, function( index, value ) {
//				  typeOfCoverage(value,"block");
//				});
//			  $("[id=chkAllRiderPlans]").prop("checked",false); 
//		}
//		calcTotSAPremPlandetails();
//	}
//	
//	
//	function setDisplayAllRiderPlans(obj){
//		var count = liPlanDetailstbl.rows().count();
//		$('#liRaiderDetailstbl tbody tr').hide(); 
//		if($(obj).is(":checked")){ 
//			if($('#liRaiderDetailstbl tbody tr').length>0){
//				$('#liRaiderDetailstbl tbody tr').show();
//			}
//		}else{
//			
//			if(count > 0){
//			  $("#liPlanDetailstbl tbody tr").each(function(){
//				  var refId=$(this).find("td:eq(0)").find('input:eq(3)').val(); 
//					var splitId=refId.split("_"); 
//			    	var chked=$(this).find("[name=radplnDetSelect]");
//			    	if(chked.is(":checked")){
//			    	if($('#liRaiderDetailstbl tbody tr').length>0){
//						$('#liRaiderDetailstbl tbody tr').hide(); 
//						var strRefId=""; 
//							$('#liRaiderDetailstbl tbody tr').each(function(){
//								var riderRefId=$(this).find("td:eq(0)").find('input:eq(3)').val();
//								if(isValidObject(riderRefId)){
//									strRefId = isEmpty(riderRefId)? "" :  riderRefId;
//									if("R_"+splitId[1] == strRefId){
//										 isRiderExist = true;
//										 $(this).show(); 
//									} else{
//										$(this).hide();
//									}
//								}
//							});  
//					  }
//			    	}
//			  });
//			}
//			   
//		}
//		reOrderVisibleRows('liRaiderDetailstbl');
//		calcTotSAPremPlandetails();
//	}
//	function highlightRaiderBenefits(obj,curRow){ 
//		var refId=curRow.find("td:eq(0)").find('input:eq(3)').val(); 
//		var splitId=refId.split("_"); 
//		if($(obj).is(":checked")){ 
//			if($('#liRaiderDetailstbl tbody tr').length>0){
//				$('#liRaiderDetailstbl tbody tr').hide();
//				var isRiderExist = false;
//				var strRefId=""; 
//				$('#liRaiderDetailstbl tbody tr').each(function(){
//					var riderRefId=$(this).find("td:eq(0)").find('input:eq(3)').val();
//					var mode=$(this).find("td:eq(0)").find('input:eq(0)').val();
//					if(mode != "D"){
//					if(isValidObject(riderRefId)){
//						strRefId = isEmpty(riderRefId)? "" :  riderRefId;
//						if("R_"+splitId[1] == strRefId){
//						  isRiderExist = true;
//						  $(this).show(); 
//						}else{
//						  $(this).hide();
//						}
//					}
//					}
//				}); 
//				if(!isRiderExist){
////					showAlert("Riders Details are not exist .You can add new rider details");
//				} 
//				
//			}
//		}
//		reOrderVisibleRows('liRaiderDetailstbl');
//		calcTotSAPremPlandetails();
//	}
//	
//	
//	
//	
//	
//	/*Edit Row Click */
//	$("#lfplnERow").on("click",function(){
//		lfplnVRow(); 
//	});
// 
//
//	/*View Row Click */
//		function lfplnVRow(){
//			var isOneRowSelected=0;
//			var $rowCount = $('#liPlanDetailstbl tbody tr').length;	
//			var $lastRow = $("#liPlanDetailstbl tbody tr:last");	
//			
//			if($rowCount<1){
//				applyToastrAlert("Insert rows before edit/view");
//				return;
//			} 
//			
//			$("#liPlanDetailstbl tbody tr").each(function(){
//				var $row = $(this);   
//				$row.removeClass('selected');  
//				$(this).removeAttr("style"); 
//				$row.find("td").removeAttr("style");
//				
//					
//			});
//			
//			$("#liPlanDetailstbl tbody").find('input[name="radplnDetSelect"]').each(function(){ //Checkbox selection
//				var $curElm=$(this);
//				if($curElm.is(":checked")){ 
//					isOneRowSelected++;
//				}
//			});
//			
//			
//			if(isOneRowSelected > 1){ 
//				applyToastrAlert("More than one rows selected.Select one row only");
//				return;
//			}
//			
//			
//			$("#liPlanDetailstbl tbody").find('input[name="radplnDetSelect"]').each(function(){ //Checkbox selection
//				var $curElm=$(this);
//				if($curElm.is(":checked")){ 
//					var $row = $curElm.parents("tr");                                    
//					var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//					$curElm.prop("checked",false);
//			     	 $curElm.parents("tr").removeClass('selected');
//			     	 
//					if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//						 var $RowId=$row.index();
//						 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//						 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//								$(this).attr("disabled",false); 
//								$row.removeClass('selected');  
//								$(this).parent().css({border:'1px solid green'});
//								$row.css({border:'1px solid green'});
//								$row.find("td").css({border:'1px solid green'}); 
//							});  
//			 
//						 LiPlandetsRdlyflds($mode);
//						 liplandlgval($row); 
//						 toggleBasicRiderPlan("BASIC"); 		
//						  toggleTermPlanSwitch($('#liPlandets_Dialog #txtFldDlgliplnPremTerm'),$('#liPlandets_Dialog #swtDlgliplnPremTerm'));
//							showFIPAModel('liPlandets_Dialog','Life Insurance - Plan Details');  
//							$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//							
//							$('#liPlandets_Dialog').on('shown.bs.modal', function () {
//								$row.find("input[type=text]").prop("readonly",true);//instant save added line
//								$row.find("select").prop("disabled",true);//instant save added line
////								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//								$("#liPlandets_Dialog").find("input[id=txtFldDlgliplnName]").focus();//Aravindh
//								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//									 if(!validateLiPlanDetails())return; 
//							     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//							     			liplandetsdomval($RowId,$row); 
//							     		}  
////							     		setMajorPlanDetails($row);
////							     		instantlfBasPlanSave($row,UPD_MODE); //instant save added line
//							     		newRowLifeinsCpfEditTbl($row);
//							     		newRowLifeinsSRSEditTbl($row);
////							     		newRowLifeCobEditTbl($row);//commented 12042019
//							     		typeOfCoverage("All","none");
////							     		calcTotalPlandetails();
//							     		ilifeInsPremium(null);
//							     		calcTotSAPremPlandetails();
//							     		 planAlertInfo();
//										$('#liPlandets_Dialog').modal('hide'); 
//										liplndetsclearFlds();
//									
//								});
//							});
//							 
//					}  
//					
//					if(($mode == QRY_MODE) ){
//						 var $RowId=$row.index();
//						 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);
//						 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//								$(this).attr("disabled",false); 
//								$row.removeClass('selected');  
//								$(this).parent().css({border:'1px solid green'});
//								$row.css({border:'1px solid green'});
//								$row.find("td").css({border:'1px solid green'}); 
//							});  
//			 
//						 LiPlandetsRdlyflds($mode);
//						 liplandlgval($row); 
//						 toggleBasicRiderPlan("BASIC");
//						  toggleTermPlanSwitch($('#liPlandets_Dialog #txtFldDlgliplnPremTerm'),$('#liPlandets_Dialog #swtDlgliplnPremTerm'));
//							showFIPAModel('liPlandets_Dialog','Life Insurance - Plan Details');  
//							$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//							
//							$('#liPlandets_Dialog').on('shown.bs.modal', function () {
//								$row.find("input[type=text]").prop("readonly",true);//instant save added line
//								$row.find("select").prop("disabled",true);//instant save added line
//								
////								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").text("OK");
//								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//									 if(!validateLiPlanDetails())return; 
//							     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//							     			liplandetsdomval($RowId,$row); 
//							     		}  
////							     		calcTotalPlandetails();
//							     		ilifeInsPremium(null);
//							     		calcTotSAPremPlandetails();
////							     		setMajorPlanDetails($row);
////							     		instantlfBasPlanSave($row,UPD_MODE); //instant save added line
//							     		newRowLifeinsCpfEditTbl($row);
//							     		newRowLifeinsSRSEditTbl($row);
////							     		newRowLifeCobEditTbl($row);//commented 12042019
//							     		typeOfCoverage("All","none");
//							     		 planAlertInfo();
//										$('#liPlandets_Dialog').modal('hide'); 
//										liplndetsclearFlds();
//									
//								});
//							});
//							 
//					}  
//					isOneRowSelected++;
//				} 
//			});
//			
//			 
//			if(isOneRowSelected==0){
//				applyToastrAlert("No Rows Selected");
//				return;
//			} 
//			
//			
//		}
//		
//
///*Delete Row Click */
////		<!--changes done 19/06/2019 -->
//$("#lfplnDRow").on("click",function(){  
//	var flg=true;
//	var rowCount = liPlanDetailstbl.row().count();
//	if(rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		flg=false;
//		return;
//	}
//	var isOneRowSelected=false;
//	$('#liPlanDetailstbl tbody').find('input[type=checkbox],input[type=radio]').each(function(){
//		if($(this).is(":checked")){
//			isOneRowSelected=true;
//		}
//	});
//	
//
//	if(!isOneRowSelected){ 		
//		applyToastrAlert("No Rows Selected");
//		flg=false;
//	} 
//	if(flg){
//	$("#confirmationalertmsgdiv #confalertimg").html(""); 
//		$("#confirmationalertmsgdiv #confalertmsg").html("To delete selected row? Other linked data will also be deleted");
//		$('#confirmationalertmsgdiv').modal({
//			  backdrop: 'static',
//			  keyboard: false,
//			  show:true,
//			}); 
//		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
//			$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
//			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
//			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){ 
//				$('#liPlanDetailstbl tbody tr').find('input[type=checkbox],input[type=radio]').each(function(){
//					if($(this).is(":checked")){  
//						var row = $(this).parents("tr");                                    
//						var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();  
//						var refId=$(this).parents("tr").find("td:eq(0)").find("input.rowrefid");//Retirement Reference 
//						var refFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("rowrefid"); 
//						
//						var planrefId=$(this).parents("tr").find("td:eq(0)").find("input.planrefid");//Retirement Reference 
//						var planrefFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("planrefid"); 
//						if(isValidObject(planrefId) && planrefFlg){  
//							 var value=planrefId.val().split("_");
//							 var splvalue="R_"+value[1];
//							if(!isEmpty(planrefId.val())){
//							   var planExist=false;
//							   $("#liRaiderDetailstbl tbody").find("tr").find("td:eq(0)").find("input.planrefid").each(function(){
//								   var mode=$(this).closest("tr").find("td:first").find('input:eq(0)').val();
//									  if(splvalue == $(this).val()){ 
//										planExist=true;
//										
//										if(mode == INS_MODE){ 
//											liRaiderDetailstbl.row($(this).closest("tr")).remove().draw();
////											liRdrplandlgval($(this).closest("tr"));//instant save added line
////											instantlfRidPlanSave(null,DEL_MODE); //instant save added line
//										}else if (mode == QRY_MODE){    
//											$(this).closest("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
//											$(this).closest("tr").find("td").css({border:'1px solid red'});
////											<!--changes done 19/06/2019 -->
//											$(this).closest("tr").hide(); 
//										}
//									}
//								});	
//							}
//						}
//						if(planExist){
//							 applyErrorToastrAlert("There exist row in Rider Details for selected plan, will also be deleted");
//						}
//						if(isValidObject(refId) && refFlg){  
//					 
//							if(!isEmpty(refId.val())){
//							   var message=false;
//							
//							$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//								if(refId.val() == $(this).val()){ 
//									message=true;
//								 	cpfAccAddDedTable.row($(this).closest("tr")).remove().draw(); 
//								}
//							});	
//							 
////							$("#cashOfBanksTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
////								if(refId.val() == $(this).val()){ 
////									message=true;
////									cashOfBanksTable.row($(this).closest("tr")).remove().draw(); 
////								}
////							});	
//							
//
//							 $("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//								 if(refId.val() == $(this).val()){ 
//									 message=true;
//									 srsTable.row($(this).closest("tr")).remove().draw(); 
//							}
//							 
//						 $("#liPlanDetailstbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//									 if(refId.val() == $(this).val()){ 
//										checkAllPlanViaCoverages(row,'synced'); 
//								}
//							});  
//						 
//						 
//					}); 
//						 
//						 
//							}else{
//								checkAllPlanViaCoverages(row,null); 
//							}
//						}else{
//							checkAllPlanViaCoverages(row,null); 
//						} 
//							
////						liplandlgval(row);//instant save added line
////						instantlfBasPlanSave(null,DEL_MODE); //instant save added line
//						if(liPlanDetailstbl.rows().count() > 0){
//							$('#liPlanDetailstbl tbody tr').find('input[type=checkbox],input[type=radio]').each(function(){
//								
//							if($(this).is(":checked")){
//								liPlanDetailstbl.row($(this).closest("tr")).remove().draw();
//							}
//							});
//						}
//						
//						$(this).attr("checked",false); 
//					}
//				});
//				
////				<!--changes done 19/06/2019 -->
//				reOrderVisibleRows("cashOfBanksTable"); 
//				reOrderVisibleRows("cpfAccAddDedTable");
//				reOrderVisibleRows("liPlanDetailstbl"); 
//				reOrderVisibleRows("IncAssRetPlgtbl");  
//				reOrderVisibleRows("srsTable");  
//				
//				
//			$('#liPlanDetailstbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
//					
//					var oldval = $(this).val();
//					var bankrowindex= $(this).closest("tr").index();
//					var newval = "LIFE_"+bankrowindex;
//					 
//					$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//			     	   if(oldval == $(this).val()){
//			     		   $(this).val(newval);
//			     	   }
//			        });
//					
//					$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//				     	   if(oldval == $(this).val()){
//				     		   $(this).val(newval);
//				     	   }
//				        });
//					
////					$("#cashOfBanksTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
////				     	   if(oldval == $(this).val()){
////				     		   $(this).val(newval);
////				     	   }
////				        });
//					
//					
//					
//					$(this).val(newval);
//				});
//			
////					 calcTotalPlandetails();
//					 ilifeInsPremium(null);
//					 calcTotSAPremPlandetails();
//					 planAlertInfo();
//					 typeOfCoverage("All","none");
//					
//					
//					$('#confirmationalertmsgdiv').modal('hide');  
//				  	
//			  });
//			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
//				typeOfCoverage("All","none");
//				  	$('#confirmationalertmsgdiv').modal('hide');  
//				  	
//			  });
//			
//		});
//		
//}
//
//});
//
////<!--changes done 19/06/2019 -->
//function checkAllPlanViaCoverages($Row,sign){
//	 var message=false;
//	var mode=$Row.find("td:first").find('input:eq(0)').val();
//	var checkbox=$Row.find("td:eq(1)").find('input[type=checkbox],input[type=radio]');
//	var plantab_planname=$Row.find('td:eq(2)').find("input:eq(0)").val();//Plan Tab - Plan name 
//	var plantab_coverages=$Row.find('td:eq(9)').find("input:eq(0)").val();//Plan Tab - Plan name 
//	if(checkbox.is(":checked")){
//		if(!isEmpty(plantab_planname) && !isEmpty(plantab_coverages)){ 
//			message=true;
//		var multiSelSplit = plantab_coverages.split(',');
//			$.each(multiSelSplit, function( index, value ) {
//				
//				 if(value == "Critical Illness") { 
//					 deleteChildplanCoverages('liCriticalIllnesstbl',liCriticalIllnesstbl,'2',plantab_planname);
//				 } 
//				 if(value == "Disability") {
//					 deleteChildplanCoverages('liDisabilitytbl',liDisabilitytbl,'2',plantab_planname);
//				 }
//				 if(value == "Death Benefit") {
//					 deleteChildplanCoverages('liDeathBenefittbl',liDeathBenefittbl,'2',plantab_planname);
//				 }
//				 if(value == "Hospitalisation") {
//					 deleteChildplanCoverages('liHospitilisationtbl',liHospitilisationtbl,'2',plantab_planname);
//				 }
//				 if(value == "Education") {
//					 deleteChildplanCoverages('liEducationtbl',liEducationtbl,'3',plantab_planname);
//				 }
//				 if(value == "Retirement") {
//					 deleteChildplanCoverages('liRetirementPlgtbl',liRetirementPlgtbl,'2',plantab_planname);
//				 } 
//			}); 
//		}
//	}
//	
//	if(message){
//		 applyErrorToastrAlert("There exists row in coverage tabs for selected plan, will also be deleted");
//	}
//	if(sign == 'synced'){
//		 applyErrorToastrAlert("There exists row in CPF, will also be deleted");
//	}
//	
////	console.log("checkAllPlanViaCoverages"+mode);
//	if(mode == INS_MODE){ 
//		liPlanDetailstbl.row($Row).remove().draw(); 
//	}else if (mode == QRY_MODE){    
//		$Row.find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
//		$Row.find("td").css({border:'1px solid red'});
////		<!--changes done 19/06/2019 -->
//		$Row.hide(); 
//	}
//	
// 
//	
//}
//
//function showSpecificCoverages(curRow){
//	
//	var mode=curRow.find("td:first").find('input:eq(0)').val();
//	var checkbox=curRow.find("td:eq(1)").find('input[type=checkbox],input[type=radio]');
//	var plantab_planname=curRow.find('td:eq(2)').find("input:eq(0)").val();//Plan Tab - Plan name 
//	var plantab_coverages=curRow.find('td:eq(9)').find("input:eq(0)").val();//Plan Tab - Plan name 
//	
//	if(checkbox.is(":checked")){
//		if(!isEmpty(plantab_planname) && !isEmpty(plantab_coverages)){ 
//			message=true;
//		var multiSelSplit = plantab_coverages.split(',');
//			$.each(multiSelSplit, function( index, value ) {
//				
//				 if(value == "Critical Illness") { 
//					viewplanCoverages('liCriticalIllnesstbl',liCriticalIllnesstbl,'2',plantab_planname);
//				 } 
//				 if(value == "Disability") {
//					 viewplanCoverages('liDisabilitytbl',liDisabilitytbl,'2',plantab_planname);
//				 }
//				 if(value == "Death Benefit") {
//					 viewplanCoverages('liDeathBenefittbl',liDeathBenefittbl,'2',plantab_planname);
//				 }
//				 if(value == "Hospitalisation") {
//					 viewplanCoverages('liHospitilisationtbl',liHospitilisationtbl,'2',plantab_planname);
//				 }
//				 if(value == "Education") {
//					 viewplanCoverages('liEducationtbl',liEducationtbl,'3',plantab_planname);
//					 totalPvRetEdPlgTerEdAge();
//				 }
//				 if(value == "Retirement") {
//					 viewplanCoverages('liRetirementPlgtbl',liRetirementPlgtbl,'2',plantab_planname);
//					 setMainRPPlanTbltoLifeRP(curRow);//set retirement data to Retirement plg tab
//				 } 
//			}); 
//		}
//	}
//	
//	
//}
//
//function viewplanCoverages(tblId,datatbl,pos,plan){ 
//	var rowCount=datatbl.rows().count();
//	if(rowCount>0){
//		$('#'+tblId+' tbody tr').each(function(){
//			var CR_row = $(this);       
//			CR_row.hide();
//			var planname=CR_row.find("td:eq("+pos+")").find("input:eq(0)").val();
//			if(planname == plan){ 
//					if(tblId == "liDeathBenefittbl"){CR_row.show();}
//					if(tblId == "liDisabilitytbl"){CR_row.show();}
//					if(tblId == "liCriticalIllnesstbl"){CR_row.show();}
//					if(tblId == "liHospitilisationtbl"){CR_row.show();}
//					if(tblId == "liRetirementPlgtbl"){CR_row.show();}
//					if(tblId == "liEducationtbl"){CR_row.show();} 
//			}
//		});
//		
//		
//  }  
//}
////<!--changes done 19/06/2019 -->
//function deleteChildplanCoverages(tblId,datatbl,pos,plan){
//	var rowCount=datatbl.rows().count();
//	if(rowCount>0){
//		$('#'+tblId+' tbody tr').each(function(){
//			var CR_row = $(this);       
//			var planname=CR_row.find("td:eq("+pos+")").find("input:eq(0)").val();
//			if(planname == plan){  
//				var mode =CR_row.find("td:first").find('input:eq(0)').val(); 
//				if(mode == INS_MODE){ 
//					datatbl.row(CR_row).remove().draw(); 
//					/*instant save lines*/
////					if(tblId == "liDeathBenefittbl"){dthbffilldlgval(CR_row);instantDeathBfSave(null,DEL_MODE);}
////					if(tblId == "liDisabilitytbl"){instantDeathBfSave(CR_row);instantlfDisableSave(null,DEL_MODE);}
////					if(tblId == "liCriticalIllnesstbl"){crtlnsfilldlgval(CR_row);instantlfCritlsSave(null,DEL_MODE);}
////					if(tblId == "liHospitilisationtbl"){hospfilldlgval(CR_row);instantlfHospSave(null,DEL_MODE);}
////					if(tblId == "liRetirementPlgtbl"){retplgfilldlgval(CR_row);instantlfRetPlgSave(null,DEL_MODE);}
////					if(tblId == "liEducationtbl"){eduplgfilldlgval(CR_row);instantEduPlgSave(null,DEL_MODE);}
//					/*instant save lines*/
////					<!--changes done 19/06/2019 -->
//					if(tblId == "liRetirementPlgtbl"){
//						var refid=CR_row.find("td:eq(0)").find("input.rowrefid").val();
//						$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//							 if(refid == $(this).val()){  
//								 IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
//							 }
//						 });
//					}
//				}else if (mode == QRY_MODE){    
//	
//					CR_row.find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
//					CR_row.find("td").css({border:'1px solid red'});
//					CR_row.hide();
//					if(tblId == "liRetirementPlgtbl"){
//						var refid=CR_row.find("td:eq(0)").find("input.rowrefid").val();
//						$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//							 if(refid == $(this).val()){  
//								 IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
//							 }
//						 });
//					}
//				}
//			}
//		});
//  }
//	return;
//}
//
//function liplndetsclearFlds(){
//	$("#liPlandets_Dialog").find("input[type=text]").val("");
//	$("#liPlandets_Dialog").find("input[type=hidden]").val("");
//	$("#liPlandets_Dialog").find("textarea").val("");
//	$("#liPlandets_Dialog").find("select").val("");   
//	resetMultiSel('selDlgliplnCoverages');
//}
//		
//
///*Disabled/Readonly Fields */
//function LiPlandetsRdlyflds(mode){ 
//	//alert("mode");
//	 if(mode == QRY_MODE ){
//		 	$("#liPlandets_Dialog :input").prop("disabled", false);
//		 	$('#selDlgliplnCoverages').multiselect('enable'); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#liPlandets_Dialog :input").prop("disabled", false);
//			$('#selDlgliplnCoverages').multiselect('enable'); 
//			
//	 }
//}
//
///*Validation */
//function validateLiPlanDetails(){
//	 
//	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgliplnName',LIPD_PLANNAME))) return; 
//	if(!(validateFocusFlds('liPlandets_Dialog','selDlgliplntype',LIPD_PLANTYPE))) return; 
//	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgliplnPremTerm',LIPD_PREMTERM))) return; 
//	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgPlanIncDate',LIPD_INCEPDATE))) return; 
////	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgPlanExpDate',LIPD_EXPRYDATE))) return; 
//	  return true; 
//}	
// 
//
///* Filling Model Fields*/
//	function liplandlgval($lastRow){
//		 // alert($lastRow.find("td:eq(2)").find('input:eq(0)').val())
//		  $('#liPlandets_Dialog #txtFldDlgChildMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
//		  $('#liPlandets_Dialog #txtFldDlgliplnRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
//		  $('#liPlandets_Dialog #hDlgPlanRefId').val($lastRow.find("td:eq(0)").find('input:eq(3)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #selDlgliplntype').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
//		 
//		
//		  
//		  
//		  $('#liPlandets_Dialog #txtFldDlgliplnPremTerm').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
////		  toggleTermPlanSwitch($lastRow.find("td:eq(4)").find('input:eq(0)'),$('#liPlandets_Dialog #swtDlgliplnPremTerm'));
//		  $('#liPlandets_Dialog #txtFldDlgliplnSA').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//		   
//		  $('#liPlandets_Dialog #txtFldDlgliplnPremAmt').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #selDlgliplnPayMode').val($lastRow.find("td:eq(7)").find('select:eq(0)').val());
//		  $('#liPlandets_Dialog #selDlgliplnPayMtd').val($lastRow.find("td:eq(8)").find('select:eq(0)').val());
//		  
//		  resetMultiSel('selDlgliplnCoverages');
//		  $('#liPlandets_Dialog #hidDlgCoveragetype').val($lastRow.find("td:eq(9)").find('input:eq(1)').val()); 
//		  var multiSelSplit =  $('#liPlandets_Dialog #hidDlgCoveragetype').val().split(',');
//		  $("#liPlandets_Dialog #selDlgliplnCoverages").multiselect('select',multiSelSplit);   
//		  typeOfCoverage("All","none");
//		  $.each(multiSelSplit, function( index, value ) {
//			  typeOfCoverage(value,"block");
//		  });
//		  $('#liPlandets_Dialog #txtFldDlgPlanIncDate').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #txtFldDlgPlanExpDate').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnRemarks').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnCrtdBy').val($lastRow.find("td:eq(12)").find('input:eq(1)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnCrtdDate').val($lastRow.find("td:eq(12)").find('input:eq(2)').val());
//	
//	
//		 
//	}
//	
//	/* Filling Table Fields*/
//	function liplandetsdomval($RowId,$row){
//		
//		$row.find("td:eq(0)").find('input:eq(3)').val($("#hDlgPlanRefId").val());
//		$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgliplnName").val()); 
//		$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgliplntype").val());
//		$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgliplnPremTerm").val());
//		$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgliplnSA").val()); 
//		$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgliplnPremAmt").val()); 
//		$row.find("td:eq(7)").find('select:eq(0)').val($("#selDlgliplnPayMode").val()); 
//		$row.find("td:eq(8)").find('select:eq(0)').val($("#selDlgliplnPayMtd").val());   
//		$row.find("td:eq(9)").find('input:eq(0)').val(expandCoverOpts($("#selDlgliplnCoverages"),false));  
//		$row.find("td:eq(9)").find('input:eq(1)').val($("#hidDlgCoveragetype").val());   
//		
//		
//		$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgPlanIncDate").val()); 
//		$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPlanExpDate").val()); 
//		
//		$row.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgliplnRemarks").val()); 
//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
//		$row.find("select").prop("disabled",true);//instant save added line
//
//		
//	}
//
//	//instant save added line
//	$("#liPlandets_Dialog").find("input,select,textarea").on("change",function(){
//		$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//	});
//	
//
//	function ilifeInsPremium(opts){ 
//		console.log(opts)
//		var client_NRIC = $("#dfSelfNric").val();
//		var client_AdvId = $("#advstfId").val();
//		var fpmsCustId = $("[name=custId]").val();
//		
//		var strPremAmtSelf=0,strPremAmtSpouse=0,strPremAmtFamily=0;
//		
//		var tempSelfIns =$("#expdSelfInsurance").val();
//		var tempSpsIns =$("#expdSpsInsurance").val();
//		var tempFamIns =$("#expdFamilyInsurance").val(); 
//		$.ajax({
//			url:servletName,
//			async:false,
//			data:{
//				"DBCALLFOR":"FNA_LIFE_PREMAMT",
//				"strClientNRIC":client_NRIC,
//				"strClientAdvId":client_AdvId,
//				"strCustId":fpmsCustId
//			},
//			success: function(result){
//				
//				var jsnRslt=JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){
//					if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//						window.location = BASE_URL + SESSION_EXP_JSP;
//
//						hideLoader();
//						return;
//					}
//
//					if (obj.SESSION_EXPIRY=="DB_ERROR") {
//						window.location = BASE_URL + DB_EXP_JSP;
//
//						hideLoader();
//						return;
//					}
//					
//					$.each(obj,function(i,val){
//						if(i=="CLNT_LIFEPREM_AMT"){
//							$.each(val, function(contkey, contvalue) { 
//								var appName = contvalue["jsonApplnName"];
//								var lifeId 	= contvalue["jsonLifeId"];
//								var owner 	= contvalue["jsonLifeOwner"];
//								var planName= contvalue["jsonLifePlanName"];
//								var incDate = contvalue["jsonLifeIncDate"];
//								var payMode = contvalue["jsonLifePayMode"]; 
//								var paymtd 	= contvalue["jsonLifePayMtd"]; 
//								var premAmt = Number(contvalue["jsonLifePremAmt"]);   
//								var polDate = contvalue["jsonLifePolDate"];
////								var planterm = contvalue["jsonLifePlanTerm"];
////								var planuniqid = contvalue["jsonLifePlanId"];
////								var planstatus = contvalue["jsonLifePlanStatus"];
//								 
//								if(paymtd == "CPFOA" || paymtd == "CPFSA" || paymtd == "CPF" || paymtd == "SRS" || (paymtd.indexOf("CPF") == 0)){ 
//								if(appName == "FPMSNL"){ 
//							 		  if(opts == "FETCH"){
//							 		 	 syncFPMSCpf(contvalue,lifeId);
//							 		 }
//							 	 }
//								}
//								 
//								 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
//										 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){
//			 
//								if(!isEmpty(premAmt) && isValidObject(premAmt)){ 
//									 var TopUpAmt=0; 
//								 		if(payMode == 'ANNUALLY'){
//											TopUpAmt=1;
//										}else if(payMode == 'HALF YEARLY'){
//											TopUpAmt=2;
//										}else if(payMode == 'QUARTERLY'){
//											TopUpAmt=4;
//										}else if(payMode == 'MONTHLY'){
//											TopUpAmt=12;
//										}else if(payMode == 'SINGLE'){
//											TopUpAmt=1;
//										}
//								 		
//								 		 var stillNeedTopay=false;
//								 		 var sumamt			= 0;
//								 		 	 sumamt=premAmt*TopUpAmt    
//								 		 stillNeedTopay 	= validateDateComparision(polDate,ResultNewDate,">="); 
//								 		
//								 		 	 
//								 		 	 
//								 		 //check for loaded policy	 
//								 		 	 var updPremCal = "";
//								 		 	 if(appName == "FIPA"){
//								 		 		updPremCal = $("input[name=lipId]").val();
//								 		 	 }
//								 		 	 
//								 		 	 if(appName == "FPMSNL"){
//								 		 		updPremCal = $("input[name=lipAppId]").val(); 
//								 		 	 }
//								 		 	 
//								 		 	 
//								 if(stillNeedTopay){
//									 if(lifeId != $("input[name=lipId]").val()){ //For FIPA Applications
//										 if(owner == "Self"){
//												strPremAmtSelf +=Number(sumamt);
//											}
//											if(owner == "Spouse"){
//												strPremAmtSpouse +=Number(sumamt);
//											}
//											if(owner == "Parents" || owner == "Joint"){
//												strPremAmtFamily +=Number(sumamt);
//											} 
//									 } 
//									 
//								  }
//								}
//								 }
//							}); 
//						}
//						
//					});
//					
//					
//				});
//				
//			}
//		});  
//		
//		calcTotalPlandetails(opts,strPremAmtSelf,strPremAmtSpouse,strPremAmtFamily);
//	} 
//
//	 
//	function calcTotalPlandetails(opts,strPremAmtSlf,strPremAmtSps,strPremAmtFam){ 
//			 var sumOfSA=0,totsumassure=0,totpremium=0;
//			 
//			 var $liPlanDetailstblcount = liPlanDetailstbl.rows().count(); 
//			 
//			 if($liPlanDetailstblcount== 0){ 
//				 $("#noplanavailable").removeClass("hidden");
//			 }else{
//				 $("#noplanavailable").addClass("hidden");
//			 }
//				 var ownship=$("#lipOwner").val();
//				 
//				 if($liPlanDetailstblcount >0){ 
//						 $("#liPlanDetailstbl tbody tr").each(function(i,row){ 
//							 
//							 var $mode = $(this).find("td:first").find('input:eq(0)').val();
//							 
//							 var planpremiumamt		=$(this).find("td:eq(6)").find("input:eq(0)").val(); 
//							 var sumassuredamt		=Number($(this).find("td:eq(5)").find("input:eq(0)").val());
//							 var paymode			=$(this).find("td:eq(7)").find("select:eq(0)").val(); 
//							 var paymtd				=$(this).find("td:eq(8)").find("select:eq(0)").val();  
//							 var premTerm			=$(this).find("td:eq(4)").find("input:eq(0)").val(); 
//							 var incdate			=$(this).find("td:eq(10)").find("input:eq(0)").val();  
//							 
//							 if($mode != DEL_MODE){
//							 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
//								 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){
//	 
//							 var TopUpAmt=0; 
//							 		if(paymode == 'ANNUALLY'){
//										TopUpAmt=1;
//									}else if(paymode == 'HALF YEARLY'){
//										TopUpAmt=2;
//									}else if(paymode == 'QUARTERLY'){
//										TopUpAmt=4;
//									}else if(paymode == 'MONTHLY'){
//										TopUpAmt=12;
//									}else if(paymode == 'SINGLE'){
//										TopUpAmt=1;
//									}
//								 
//								 var sumamt	=	planpremiumamt*TopUpAmt;
//								 totpremium +=Number(sumamt); 
//								 
//								 
//								 var dateTopay ="",stillNeedTopay=false;
//								 if(!isEmpty(premTerm) && !isEmpty(incdate)){
//									 if(premTerm.toUpperCase() != "WHOLE LIFE"){
//										  dateTopay			= addyearsToDate(incdate,premTerm);	
//										  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">="); 
////										  stillNeedToGrtpay = validateDateComparision(dateTopay,ResultNewDate,">"); 
//									 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
//										 stillNeedTopay		= true;
//									 }
//								 }
//							 
//							   
//							  
//							  
//					  if(stillNeedTopay && paymode != 'SINGLE'){
//							 if((!isEmpty(sumamt)) && ownship == "Self"){
//								 strPremAmtSlf +=Number(sumamt); 
//								 
//							 }
//							 if((!isEmpty(sumamt)) && ownship == "Spouse"){
//								 strPremAmtSps +=Number(sumamt); 
//							 } 
//							 if((!isEmpty(sumamt)) && ownship == "Joint"){
//								 strPremAmtFam +=Number(sumamt); 
//							 }   
//							 if((!isEmpty(sumassuredamt))){
//								 totsumassure +=Number(sumassuredamt); 
//							 }   
//					  		}
//					  
//					  
//					  
//							 }
//						  }
//							 
//							 if((!isEmpty(sumassuredamt))){
//								 sumOfSA +=Number(sumassuredamt); 
//							 } 
//							
//					 }); 
//						
//					 
//				 }  
//				 
//				 
//				 
//				 
//				 var $liRaiderDettblcount = liRaiderDetailstbl.rows().count();
//				 if($liRaiderDettblcount >0){ 
//					 $("#liRaiderDetailstbl tbody tr").each(function(i,row){
//						 var $rdmode = $(this).find("td:first").find('input:eq(0)').val();
//						 var rdplanpremiumamt	=$(this).find("td:eq(6)").find("input:eq(0)").val(); 
//						 var rdsumassuredamt	=$(this).find("td:eq(5)").find("input:eq(0)").val();
//						 var rdpaymode			=$(this).find("td:eq(7)").find("select:eq(0)").val(); 
//						 var rdpaymtd			=$(this).find("td:eq(8)").find("select:eq(0)").val(); 
//						 
//						 var rdpremTerm			=$(this).find("td:eq(4)").find("input:eq(0)").val(); 
//						 var rdincdate			=$(this).find("td:eq(10)").find("input:eq(0)").val();  
//						 
//						 
//						 if($rdmode != DEL_MODE){
//						 if(rdpaymtd ==  "CASH" || rdpaymtd ==  "CHEQUE" ||	 rdpaymtd ==  "CREDIT-CARD" || rdpaymtd ==  "GIRO - POSB" ||
//							 rdpaymtd ==  "TT" || rdpaymtd ==  "GIRO - OTHERS" || rdpaymtd ==  "CASH CARD" || rdpaymtd ==  "CASH/CHQ"){
//
//					 var rdTopUpAmt=0; 
//					 		if(rdpaymode == 'ANNUALLY'){
//								rdTopUpAmt=1;
//							}else if(rdpaymode == 'HALF YEARLY'){
//								rdTopUpAmt=2;
//							}else if(rdpaymode == 'QUARTERLY'){
//								rdTopUpAmt=4;
//							}else if(rdpaymode == 'MONTHLY'){
//								rdTopUpAmt=12;
//							}else if(rdpaymode == 'SINGLE'){
//								rdTopUpAmt=1;
//							}
//						 
//						 var rdsumamt=rdplanpremiumamt*rdTopUpAmt;
//						 totpremium +=Number(rdsumamt); 
//						 
//						 
//						 var rddateTopay ="",rdstillNeedTopay=false;
//						 if(!isEmpty(rdpremTerm) && !isEmpty(rdincdate)){
//						 if(rdpremTerm.toUpperCase() !="WHOLE LIFE"){
//							  rddateTopay			= addyearsToDate(rdincdate,rdpremTerm);	
//							  rdstillNeedTopay 		= validateDateComparision(rddateTopay,ResultNewDate,">="); 
////							  rdstillNeedToGrtpay 	= validateDateComparision(rddateTopay,ResultNewDate,">");
//						 }else if(rdpremTerm.toUpperCase() =="WHOLE LIFE"){
//							 rdstillNeedTopay=true;
//						 }
//						 }
//					 
//					    
//			  if(rdstillNeedTopay && rdpaymode != 'SINGLE'){
//					 if((!isEmpty(rdsumamt)) && ownship == "Self"){
//						  strPremAmtSlf +=Number(rdsumamt); 
//					 }
//					 if((!isEmpty(rdsumamt)) && ownship == "Spouse"){
//						 	 strPremAmtSps +=Number(rdsumamt); 
//					 } 
//					 if((!isEmpty(rdsumamt)) && ownship == "Joint"){
//							 strPremAmtFam +=Number(rdsumamt); 
//					 }   
//					 if((!isEmpty(rdsumassuredamt))){
//						 totsumassure +=Number(rdsumassuredamt); 
//					 }   
//			  			}
//					 }
//				 }
//			 }); 
//		  } 
//				 if(opts != "FETCH"){
//					 if(!(strPremAmtSlf == 0 && strPremAmtSps == 0 && strPremAmtFam == 0)){
//						 applyToastrAlert("Life Insurance Premium is calculated and Reflected to Expected fund Inflow and Outflow Screen");
//			 		 } 
//	             }
//				 
// 
//			    
//			     
//			     
//			     
//			     if(opts == "FETCH"){
//			    		var tempSelfIns =$("#expdSelfInsurance").val();
//			    		var tempSpsIns =$("#expdSpsInsurance").val();
//			    		var tempFamIns =$("#expdFamilyInsurance").val(); 
//			    		
//			    	 $("#expdSelfInsurance").val(roundNumber(strPremAmtSlf)); 
//					 $("#expdSelfInsurance").attr("data-attr",tempSelfIns).attr("onmouseover","toolTipLifeShow($(this))");
//					 if(tempSelfIns  != $("#expdSelfInsurance").val() && !isEmpty($("#expdSelfInsurance").attr("data-attr"))){
//						 $("#expdSelfInsurance").addClass("alterColor");
//					 }else{
//						 $("#expdSelfInsurance").removeClass("alterColor");
//					 }
//				     $("#expdSpsInsurance").val(roundNumber(strPremAmtSps));
//				     $("#expdSpsInsurance").attr("data-attr",tempSpsIns).attr("onmouseover","toolTipLifeShow($(this))");
//				     if( tempSpsIns  != $("#expdSpsInsurance").val() &&   !isEmpty($("#expdSpsInsurance").attr("data-attr")) ){
//				    	 $("#expdSpsInsurance").addClass("alterColor");
//					 }else{
//						 $("#expdSpsInsurance").removeClass("alterColor");
//					 }
//				     $("#expdFamilyInsurance").val(roundNumber(strPremAmtFam));   
//				     $("#expdFamilyInsurance").attr("data-attr",tempFamIns).attr("onmouseover","toolTipLifeShow($(this))");
//				     if(tempFamIns != $("#expdFamilyInsurance").val() && !isEmpty($("#expdFamilyInsurance").attr("data-attr"))){
//				    	 $("#expdFamilyInsurance").addClass("alterColor");
//					 }else{
//						 $("#expdFamilyInsurance").removeClass("alterColor");
//					 } 
//				     
//			     }else{
//					 $("#expdSelfInsurance").val(roundNumber(strPremAmtSlf)); 
//				     $("#expdSpsInsurance").val(roundNumber(strPremAmtSps));
//				     $("#expdFamilyInsurance").val(roundNumber(strPremAmtFam)); 
//			     }
//			     
//			     $("#lipSa").val(roundNumber(sumOfSA));  
//				 calcSum(this,'SUMOF_ANNEXP_SELF');
//				 calcSum(this,'SUMOF_ANNEXP_SPS');
//				 calcSum(this,'SUMOF_ANNEXP_FAM'); 
//				 
//				 return true;
//		}
// 
////function calcTotalPlandetails(){
////		 var sumSlf=0,sumSps=0,sumFam=0,sumOfSA=0; 
////		 var totsumassure=0,totpremium=0;
////		 
////		 var $liPlanDetailstblcount = liPlanDetailstbl.rows().count(); 
////		 
////		 if($liPlanDetailstblcount== 0){ 
////			 $("#noplanavailable").removeClass("hidden");
////		 }else{
////			 $("#noplanavailable").addClass("hidden");
////		 }
////			 var ownship=$("#lipOwner").val();
////			 
////			 if($liPlanDetailstblcount >0){ 
////					 $("#liPlanDetailstbl tbody tr").each(function(i,row){ 
////						 var planpremiumamt		=$(this).find("td:eq(6)").find("input:eq(0)").val(); 
////						 var sumassuredamt		=Number($(this).find("td:eq(5)").find("input:eq(0)").val());
////						 var paymode			=$(this).find("td:eq(7)").find("select:eq(0)").val(); 
////						 var paymtd				=$(this).find("td:eq(8)").find("select:eq(0)").val();  
////						 var premTerm			=$(this).find("td:eq(4)").find("input:eq(0)").val(); 
////						 var incdate			=$(this).find("td:eq(10)").find("input:eq(0)").val();  
////						 
////						 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
////							 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){
//// 
////						 var TopUpAmt=0; 
////						 		if(paymode == 'ANNUALLY'){
////									TopUpAmt=1;
////								}else if(paymode == 'HALF YEARLY'){
////									TopUpAmt=2;
////								}else if(paymode == 'QUARTERLY'){
////									TopUpAmt=4;
////								}else if(paymode == 'MONTHLY'){
////									TopUpAmt=12;
////								}else if(paymode == 'SINGLE'){
////									TopUpAmt=1;
////								}
////							 
////							 var sumamt	=	planpremiumamt*TopUpAmt;
////							 totpremium +=Number(sumamt); 
////							 
////							 
////							 var dateTopay ="",stillNeedTopay=false;
////							 if(!isEmpty(premTerm) && !isEmpty(incdate)){
////								 if(premTerm.toUpperCase() != "WHOLE LIFE"){
////									  dateTopay			= addyearsToDate(incdate,premTerm);	
////									  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">="); 
//////									  stillNeedToGrtpay = validateDateComparision(dateTopay,ResultNewDate,">"); 
////								 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
////									 stillNeedTopay		= true;
////								 }
////							 }
////						 
////						   
////						  
////						  
////				  if(stillNeedTopay && paymode != 'SINGLE'){
////						 if((!isEmpty(sumamt)) && ownship == "Self"){
////							 sumSlf +=Number(sumamt); 
////							 
////						 }
////						 if((!isEmpty(sumamt)) && ownship == "Spouse"){
////							 sumSps +=Number(sumamt); 
////						 } 
////						 if((!isEmpty(sumamt)) && ownship == "Joint"){
////							 sumFam +=Number(sumamt); 
////						 }   
////						 if((!isEmpty(sumassuredamt))){
////							 totsumassure +=Number(sumassuredamt); 
////						 }   
////				  		}
////				  
////				  
////				  
////				  
////						 }
////						 
////						 if((!isEmpty(sumassuredamt))){
////							 sumOfSA +=Number(sumassuredamt); 
////						 } 
////						
////				 }); 
////					
////				 
////			 }  
////			 
////			 
////			 
////			 
////			 var $liRaiderDettblcount = liRaiderDetailstbl.rows().count();
////			 if($liRaiderDettblcount >0){ 
////				 $("#liRaiderDetailstbl tbody tr").each(function(i,row){ 
////					 var rdplanpremiumamt	=$(this).find("td:eq(6)").find("input:eq(0)").val(); 
////					 var rdsumassuredamt	=$(this).find("td:eq(5)").find("input:eq(0)").val();
////					 var rdpaymode			=$(this).find("td:eq(7)").find("select:eq(0)").val(); 
////					 var rdpaymtd			=$(this).find("td:eq(8)").find("select:eq(0)").val(); 
////					 
////					 var rdpremTerm			=$(this).find("td:eq(4)").find("input:eq(0)").val(); 
////					 var rdincdate			=$(this).find("td:eq(10)").find("input:eq(0)").val();  
////					 
////					 if(rdpaymtd ==  "CASH" || rdpaymtd ==  "CHEQUE" ||	 rdpaymtd ==  "CREDIT-CARD" || rdpaymtd ==  "GIRO - POSB" ||
////						 rdpaymtd ==  "TT" || rdpaymtd ==  "GIRO - OTHERS" || rdpaymtd ==  "CASH CARD" || rdpaymtd ==  "CASH/CHQ"){
////
////					 var rdTopUpAmt=0; 
////					 		if(rdpaymode == 'ANNUALLY'){
////								rdTopUpAmt=1;
////							}else if(rdpaymode == 'HALF YEARLY'){
////								rdTopUpAmt=2;
////							}else if(rdpaymode == 'QUARTERLY'){
////								rdTopUpAmt=4;
////							}else if(rdpaymode == 'MONTHLY'){
////								rdTopUpAmt=12;
////							}else if(rdpaymode == 'SINGLE'){
////								rdTopUpAmt=1;
////							}
////						 
////						 var rdsumamt=rdplanpremiumamt*rdTopUpAmt;
////						 totpremium +=Number(rdsumamt); 
////						 
////						 
////						 var rddateTopay ="",rdstillNeedTopay=false;
////						 if(!isEmpty(rdpremTerm) && !isEmpty(rdincdate)){
////						 if(rdpremTerm.toUpperCase() !="WHOLE LIFE"){
////							  rddateTopay			= addyearsToDate(rdincdate,rdpremTerm);	
////							  rdstillNeedTopay 		= validateDateComparision(rddateTopay,ResultNewDate,">="); 
//////							  rdstillNeedToGrtpay 	= validateDateComparision(rddateTopay,ResultNewDate,">");
////						 }else if(rdpremTerm.toUpperCase() =="WHOLE LIFE"){
////							 rdstillNeedTopay=true;
////						 }
////						 }
////					 
////					    
////			  if(rdstillNeedTopay && rdpaymode != 'SINGLE'){
////					 if((!isEmpty(rdsumamt)) && ownship == "Self"){
////						 sumSlf +=Number(rdsumamt); 
////					 }
////					 if((!isEmpty(rdsumamt)) && ownship == "Spouse"){
////						 sumSps +=Number(rdsumamt); 
////					 } 
////					 if((!isEmpty(rdsumamt)) && ownship == "Joint"){
////						 sumFam +=Number(rdsumamt); 
////					 }   
////					 if((!isEmpty(rdsumassuredamt))){
////						 totsumassure +=Number(rdsumassuredamt); 
////					 }   
////			  }
////		  }
////		 }); 
////	  } 
////			 if(!(sumSlf == 0 && sumSps == 0 && sumFam == 0)){
////				 applyToastrAlert("Life Insurance Premium is calculated and Reflected to Expected fund Inflow and Outflow Screen");
////	 
////			 } 
////			 
////			 $("#expdSelfInsurance").val(roundNumber(sumSlf)); 
////		     $("#expdSpsInsurance").val(roundNumber(sumSps));
////		     $("#expdFamilyInsurance").val(roundNumber(sumFam));  
////		     $("#lipSa").val(roundNumber(sumOfSA)); 
////		     
////		     
////		     
////		     
////			 calcSum(this,'SUMOF_ANNEXP_SELF');
////			 calcSum(this,'SUMOF_ANNEXP_SPS');
////			 calcSum(this,'SUMOF_ANNEXP_FAM'); 
////			 
////			 return true;
////	} 
//
//
//	function calcTotSAPremPlandetails(){
//		 
//		 var totsumassure=0,totpremium=0;
//		 var vtotsumassure=0,vtotpremium=0;
//		 var $liPlanDettblcount = liPlanDetailstbl.rows().count(); 
//		 var $liRaiderDettblcount = liRaiderDetailstbl.rows().count(); 
//			 
//			 var ownship=$("#lipOwner").val();
//			 if($liPlanDettblcount >0){
//				 
//				$("#liPlanDetailstbl tbody tr:visible").each(function(i,row){ 
//						 var sumassuredamt=Number($(this).find("td:eq(5)").find("input:eq(0)").val());  
//						 var planpremiumamt=Number($(this).find("td:eq(6)").find("input:eq(0)").val()); 
//						 var paymode			=$(this).find("td:eq(7)").find("select:eq(0)").val();
//						 
//						 
//						 var TopUpAmt=0; 
//					 		if(paymode == 'ANNUALLY'){
//								TopUpAmt=1;
//							}else if(paymode == 'HALF YEARLY'){
//								TopUpAmt=2;
//							}else if(paymode == 'QUARTERLY'){
//								TopUpAmt=4;
//							}else if(paymode == 'MONTHLY'){
//								TopUpAmt=12;
//							}else if(paymode == 'SINGLE'){
//								TopUpAmt=1;
//							}
//					 		 
//						if((!isEmpty(planpremiumamt))){
//							 totpremium +=planpremiumamt*TopUpAmt; 
//							 vtotpremium +=planpremiumamt*TopUpAmt; 
//						}
//						
//						if((!isEmpty(sumassuredamt))){
//							 totsumassure +=sumassuredamt; 
//							 vtotsumassure +=sumassuredamt; 
//						}  
//				 	}); 
//				
//			 } 
//			  
//			 if($liRaiderDettblcount >0){
//				 
//				 $("#liRaiderDetailstbl tbody tr:visible").each(function(i,row){ 
//					 var rdsumassuredamt=Number($(this).find("td:eq(5)").find("input:eq(0)").val());  
//					 var rdplanpremiumamt=Number($(this).find("td:eq(6)").find("input:eq(0)").val()); 
//					 var rdpaymode			=$(this).find("td:eq(7)").find("select:eq(0)").val();
//					 
//					 
//					 var rdTopUpAmt=0; 
//				 		if(rdpaymode == 'ANNUALLY'){
//							rdTopUpAmt=1;
//						}else if(rdpaymode == 'HALF YEARLY'){
//							rdTopUpAmt=2;
//						}else if(rdpaymode == 'QUARTERLY'){
//							rdTopUpAmt=4;
//						}else if(rdpaymode == 'MONTHLY'){
//							rdTopUpAmt=12;
//						}else if(rdpaymode == 'SINGLE'){
//							rdTopUpAmt=1;
//						}
//				 		
//						  
//					if((!isEmpty(rdplanpremiumamt))){
//						 totpremium +=rdplanpremiumamt*rdTopUpAmt; 
//					}
//					
////					if((!isEmpty(rdsumassuredamt))){
////						 totsumassure +=rdsumassuredamt; 
////					}
//				 
//			 	}); 
//				 
//				 
//				 $("#liRaiderDetailstbl tbody tr:visible").each(function(i,row){ 
//					 var rdvsumassuredamt=Number($(this).find("td:eq(5)").find("input:eq(0)").val());  
//					 var rdvplanpremiumamt=Number($(this).find("td:eq(6)").find("input:eq(0)").val()); 
//					 var rdvpaymode			=$(this).find("td:eq(7)").find("select:eq(0)").val();
//					 
//					 
//					 var rdvTopUpAmt=0; 
//				 		if(rdvpaymode == 'ANNUALLY'){
//							rdvTopUpAmt=1;
//						}else if(rdvpaymode == 'HALF YEARLY'){
//							rdvTopUpAmt=2;
//						}else if(rdvpaymode == 'QUARTERLY'){
//							rdvTopUpAmt=4;
//						}else if(rdvpaymode == 'MONTHLY'){
//							rdvTopUpAmt=12;
//						}else if(rdvpaymode == 'SINGLE'){
//							rdvTopUpAmt=1;
//						}
//						  
//					if((!isEmpty(rdvplanpremiumamt))){
//						 vtotpremium += rdvplanpremiumamt*rdvTopUpAmt; 
//					}
//					
////					if((!isEmpty(rdvsumassuredamt))){
////						 vtotsumassure += rdvsumassuredamt; 
////					}
//				 
//			 	});
//				 
//			 }
//			 
//			 
////			 roundNumber - req to remove round off
//				 $("#retTotalSa").val(Number(totsumassure).toFixed(2)); 
//			     $("#retTotalPrem").val(Number(totpremium).toFixed(2));   
//			 
//			     $("#visibleretTotalSa").val(Number(vtotsumassure).toFixed(2));
//			     $("#visibleretTotalPrem").val(Number(vtotpremium).toFixed(2)); 
//			      
//			   
//			     
//
//			     addDynPlanName();//add plan name dynamically into Life insurance section
//				 calcSum(this,'SUMOF_ANNEXP_SELF');
//				 calcSum(this,'SUMOF_ANNEXP_SPS');
//				 calcSum(this,'SUMOF_ANNEXP_FAM');
//				 
//			 return true;
//	}
///*###########################################################################################################################################################*/
// /**
// * Life Insurance Dialog  - Basic/Rider Plan Details
// */
//
////	 
////	var liRaiderDetailstbl = $('#liRaiderDetailstbl').DataTable({
////		destroy: true,
////	 	responsive: false,        
////	    ordering: false,
////	    searching: false,
////		scrollY:  "40vh",   
////		scrollX: true,
////	    scroller: false,
////	    scrollCollapse:false,
////	    paging:false, 
////	    filter:false,  
////	    dom: '<<"top" ip>flt>',
////	    columnDefs: [  { width: '20px', targets: [0,1]},
////	       	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			    if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////			    } 
////		 }
////	}).draw();
//	
//	function checkAnyPlanSelected(){
//		var isOneRowSelected=false;
//		$("#liPlanDetailstbl tbody tr").each(function(){
//			var $rowCount = $(this).length;	 	
//			
//			if($rowCount<1){
//				applyToastrAlert("Insert Any Basic Plan Details");
//				return;
//			} 
//			$("#liPlanDetailstbl tbody").find('input[name="radplnDetSelect"]').each(function(){ //Checkbox selection
//				var $curElm=$(this);
//				if($curElm.is(":checked")){ 
//					isOneRowSelected=true;
//				}
//			});
//			 
//		});
//		return isOneRowSelected;
//	}
//	 
//	
//	
//	/*Add Row Click */
//	$("#lfraidARow").on("click",function(){  
////		if(!mandatoryFldForInsurance())return;
//		if(!valilifeinsurance())return; 
//		if(!checkAnyPlanSelected())return;
//			liplndetsclearFlds();
//			toggleBasicRiderPlan("RIDER");
//			toggleTermPlanSwitch($('#liPlandets_Dialog #txtFldDlgliplnPremTerm'),$('#liPlandets_Dialog #swtDlgliplnPremTerm'));
//				showFIPAModel('liPlandets_Dialog','Life Insurance - Rider/Benefit plan Details');
//	//			$("#liPlandets_Dialog").find("input[id=txtFldDlgliplnMode]").val("I");//instant save added line
//				$("#txtFldDlgPlanIncDate").val($("#lipIncepdate").val());
//				$("#txtFldDlgPlanExpDate").val($("#lipExpdate").val()); 
//				
//				$('#liPlandets_Dialog').on('shown.bs.modal', function () {
////					fpmsPlannamelist($("#lipCompany"),'R',document.getElementById("txtFldDlgRliplnName")); 
//					$('#liPlandets_Dialog #swtDlgliplnPremTerm').prop("checked", true);
//				 	$("#liPlandets_Dialog #hDlgPlanRefId").val($("#hPlanRefId").val());
//					typeOfCoverage("All","none");
////					$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//					$("#liPlandets_Dialog").find("input[id=txtFldDlgRliplnName]").focus();
//					$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//					 
//						  if(!validateLiRdePlanDetails())return;
//						  LiPlandetsRdlyflds(INS_MODE);  
//						  getliBenfRaidDetRows(null); 
//						  typeOfCoverage("All","none");
//							$('#liPlandets_Dialog').modal('hide'); 
//					  });  
//					
//					$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						typeOfCoverage("All","none");
//						$('#liPlandets_Dialog').modal('hide'); 
//					});
//				}); 
//	});
//
//	 
//	/*Populate Data */
//	function getliBenfRaidDetRows(dataset,tab){ 
//	 
//	var cell0 = '<span></span>'+
//	'<input type="hidden" name="txtFldplnRaidDetMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldliplnRaidId"><input type="hidden"  name="txtFldPlnRaidRefId"><input type="hidden"  name="RaidRefId">';
//	 
//	var cell1 = '<div class="radio radio-primary text-center"><input type="radio" name="radplnRaidDetSelect"/><label>&nbsp;</label></div>'; 
//
//	var cell2 = '<input type="text" name="txtFldliplnRaidName" class="form-control editable"  maxlength="150"  onmouseover="fipaTooltip(this);" />';
//
//	var cell3 = '<select  name="selliplnRaidtype" class="form-control editable" ></select>';
//
//	var cell4 = '<input type="text" name="txtFldliplnRaidPremTerm" class="form-control editable"  maxlength="20"  onmouseover="fipaTooltip(this);" />';
//
//	var cell5 = '<input type="text" name="txtFldliplnRaidSA" class="form-control editable" onmouseover="fipaTooltip(this);" />'; 
//
//	var cell6 = '<input type="text" name="txtFldliplnRaidPremAmt" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
//
//	var cell7 = '<select  name="selliplnRaidPayMode" class="form-control editable" maxlength="30" ></select>';
//
//	var cell8 = '<select  name="selliplnRaidPayMtd" class="form-control editable" ></select>';
//
//	var cell9 ='<input type="text" name="txtFldliplnRaidCovTypes" class="form-control editable" onmouseover="fipaTooltip(this);" readonly="true"/>'
//		+'<input type="hidden" name="txtFldliplnRaidCoverages" class="form-control editable" onmouseover="fipaTooltip(this);" readonly="true"/>';
//
//	var cell10 = '<input type="text" name="txtFldPlanRaidIncepDate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
//	
//	var cell11 = '<input type="text" name="txtFldPlanRaidExpDate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
//	
//	var cell12 = '<input type="text" name="txtFldliplnRaidRemarks" class="form-control editable"   maxlength="300"   onmouseover="fipaTooltip(this);"   />'+
//	'<input type="hidden" name="txtFldliplnRaidCrtdBy"/><input type="hidden" name="txtFldliplnRaidCrtdDate"/>'
//	+'<input type="hidden" name="rplfretYrstoret" value="'+$("#retYrstoret").val()+'"/>'
//	+'<input type="hidden" name="rpretSelfretage" value="'+$("#retSelfCoordinateage").val()+'"/>'
//	+'<input type="hidden" name="rpretSpouseretage" value="'+$("#retSpsCoordinateage").val()+'"/>'
//	+'<input type="hidden" name="rpretMultionret"/>'
//	+'<input type="hidden" name="rpretCashvalonret"/>'
//	+'<input type="hidden" name="rpretIntrateused" value="'+$("#caSavingDeprate").val()+'"/>'
//	+'<input type="hidden" name="rpretPrcnttoused"/>'
//	+'<input type="hidden" name="rpcashvalRetAge"/>' 
//	+'<input type="hidden" name="rpcashvalRefId" />';
//
//	liRaiderDetailstbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12] ).draw( false );
//
//	var rowCount = $('#liRaiderDetailstbl tbody tr').length;	
//	var $lastRow = $("#liRaiderDetailstbl tbody tr:last");	
//
//	$lastRow.find("td:first").find('span').text(rowCount); 
//	$lastRow.find("td:eq(1)").find("input:first").click(function(){
//		$("#liPlanDetailstbl tbody tr").each(function(){ 
//			$(this).removeClass('selected');
//		});
//		selectSingleRow(this);
//		selectPlanRow(this,$lastRow);
//		setMajorPlanDetails($lastRow);
//		liRaiderDetailstbl.$('tr.selected').removeClass('selected');
//		$lastRow.addClass('selected'); 
//		showSpecificCoverages($lastRow);
//        
//	});
//	
//	$lastRow.find("td:eq(1)").find("input:first").attr('id',"radplnRaidDet"+$lastRow.index())
//	.parent().find('label').attr('for',"radplnRaidDet"+$lastRow.index());
//	
//	$lastRow.find("td:eq(0)").find('input:eq(3)').addClass("planrefid").val($("#hDlgPlanRefId").val());
//	
//	$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgRliplnName").val());
//	$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//		setMajorPlanDetails($lastRow);
//	});
//	
//	var plntype = $("#selDlgliRdrplntype > option").clone();
//	$lastRow.find("td:eq(3)").find('select:eq(0)').append(plntype);
//	$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgliRdrplntype").val());
//	$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//	});
//	
//	
//	
//	
//	$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgliplnPremTerm").val());
//	$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntYrs");
//	$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//		 calculateEndDateFromYear($lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'));
//	});
//	
//	
//	$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgliplnSA").val());
//	$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
//	$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
////		calcTotalPlandetails();
//		ilifeInsPremium(null);
//		calcTotSAPremPlandetails();
//		dhtmlModChange($lastRow);
//	});
//	
//
//	$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgliplnPremAmt").val());
//	$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");
//	$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
////		calcTotalPlandetails();	
//		ilifeInsPremium(null);
//		calcTotSAPremPlandetails();
//		dhtmlModChange($lastRow);
//		newRowLifeinsRidCpfEditTbl($lastRow); 
//		newRowLifeinsSRSRidEditTbl($lastRow);
//	});
//	
//	
//	
//	
//
//	var paymode = $("#selDlgliplnPayMode > option").clone();
//	$lastRow.find("td:eq(7)").find('select:eq(0)').append(paymode);
//	$lastRow.find("td:eq(7)").find('select:eq(0)').val($("#selDlgliplnPayMode").val());
//	$lastRow.find("td:eq(7)").find('select:eq(0)').on("change",function(){
////		calcTotalPlandetails();
//		ilifeInsPremium(null);
//		calcTotSAPremPlandetails();
//		dhtmlModChange($lastRow);
//		newRowLifeinsRidCpfEditTbl($lastRow);
//		newRowLifeinsSRSRidEditTbl($lastRow);
//	});
//
//	var paymtd = $("#selDlgliplnPayMtd > option").clone();
//	$lastRow.find("td:eq(8)").find('select:eq(0)').append(paymtd);
//	$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#selDlgliplnPayMtd").val());
//	$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//		newRowLifeinsRidCpfEditTbl($lastRow); 
//		newRowLifeinsSRSRidEditTbl($lastRow);
//	});
//	
//	
//	
//	$lastRow.find("td:eq(9)").find('input:eq(0)').val(expandCoverOpts($("#selDlgliplnCoverages"),false)); 
//	$lastRow.find("td:eq(9)").find('input:eq(1)').val($("#hidDlgCoveragetype").val());
//	$lastRow.find("td:eq(9)").find('input:eq(1)').on("change",function(){
//		dhtmlModChange($lastRow);
//	});
//	
//	
//
//	$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgPlanIncDate").val());
//	$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
//		 checkDateFormat($(this)); 
//		 if(!dhtmlChkDateValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'),"Inception Date should be lesser than the Expiry Date"));  
//		
//		 setMajorPlanDetails($lastRow);
//		dhtmlModChange($lastRow);
//		newRowLifeinsRidCpfEditTbl($lastRow); 
//		newRowLifeinsSRSRidEditTbl($lastRow);
//		 calculateEndDateFromYear($lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'));
//	});
//
//	
//	$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPlanExpDate").val());
//	$lastRow.find("td:eq(11)").find('input:eq(0)').on("change",function(){
//		 checkDateFormat($(this));   
//		 if(!dhtmlChkDateValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'),"Expiry Date should be greater than the Inception Date"));  
//		 setMajorPlanDetails($lastRow);
//		dhtmlModChange($lastRow);
//		newRowLifeinsRidCpfEditTbl($lastRow); 
//		newRowLifeinsSRSRidEditTbl($lastRow);
//	});
//	
//	
//	$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgliplnRemarks").val());
//	$lastRow.find("td:eq(12)").find('input:eq(0)').on("change",function(){
//		dhtmlModChange($lastRow);
//	});
//	
//	applyEventHandlers(); 
//	
//
//
//
//	$lastRow.find("input,select").on("click",function(event){
//		event.stopPropagation();
//	});
//	$lastRow.click(function() { 
//		
//		$("#liPlanDetailstbl tbody tr").each(function(){ 
//			$(this).removeClass('selected');
//		});
//		
//		    $("#liRaiderDetailstbl tbody tr").each(function(){
//		    	$(this).find("[name=radplnRaidDetSelect]").attr("checked",false);
//		    	$(this).removeClass("selected");
//		     });
//	    	var checkbox = $lastRow.find("td:eq(1)").find("input"); 
//	        checkbox.prop("checked", true);
//	        $lastRow.addClass("selected"); 
//	        selectPlanRow(checkbox,$lastRow);
//			setMajorPlanDetails($lastRow);
//			showSpecificCoverages($lastRow);
//			
//	});
//
//
//
//	
//	if(dataset != null){
// 
//		
//		if(tab == "FPMS_POLICYPLAN_DETS"){
//			$lastRow.find("td:eq(0)").find('input:eq(0)').val("I");
////			instantlfRidPlanSave($lastRow,INS_MODE);	
//		}else{
//			$lastRow.find("td:eq(0)").find('input:eq(0)').val("Q");
//		}
//		
//		
//				
//		var infoDetsArr = new Array();
//		
//		for(var data in dataset){
//			var col = dataset[data];
//			$('#liRaiderDetailstbl tbody tr').hide(); 
//			switch(data){
//			
//				case "planReferenceId": 
//				$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);
//				if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");} 
//				break;
//				
//				case "benfRaidRefId":  
//					$lastRow.find("td:eq(0)").find('input:eq(3)').val(col);
//					if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(3)').addClass("planrefid");} 
//					break;
//					
//				case "riderId": 
//					$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 					
//					break;
//					
//				case "planName": 
//				case "strFPMSPolPlanName":
//					$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
//					
//					break;
//					
//				case "basorrid": 
//				case "strFPMSPolPrdtType":
//					selectNullvalChk($lastRow.find("td:eq(3)"),col); 
//					break;
//					
//				case "premTerm": 
//				case "strFPMSPolPremTerm":
//					$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
//					break;
//				 
//				case "sumAssured": 
//				case "strFPMSPolSA":
//					$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
//					break;
//				 
//				case "premAmount":
//				case "strFPMSPolPremium":
//					$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
//					
//					break;
//					
//				case "paymentMode":
//				case "strFPMSPolPaymentMode":
//					var mode;
//					if(col == "SEMI-ANNUAL" || col=="HALF-YEARLY"){
//						mode="HALF YEARLY";
//					}else{
//						mode=col;
//					} 
//					selectNullvalChk($lastRow.find("td:eq(7)"),mode);   
//					break;
//				
//				case "paymentMethod": 
//				case "strFPMSPolPaymentMeth":
//					selectNullvalChk($lastRow.find("td:eq(8)"),col); 
//					
//					break;
//				
//				case "coverageTypes": 
//					$lastRow.find("td:eq(9)").find('input:eq(0)').val(expandCoverOpts(col,true)); 
//					$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);  
//					break;
//					
//				case "planIncepDate": 
//				case "strFPMSPolEffDate": 
//					$lastRow.find("td:eq(10)").find('input:eq(0)').val(col);  
//					break;
//					
//				case "planExpDate": 
//					$lastRow.find("td:eq(11)").find('input:eq(0)').val(col);  
//					break; 
//					
//				case "planRemarks":
//				case "strFPMSPolRemarks":
//					$lastRow.find("td:eq(12)").find('input:eq(0)').val(col);  
//					break;
//					
//				case "planCrtdBy": 
//					$lastRow.find("td:eq(12)").find('input:eq(1)').val(col);
//					infoDetsArr.push(col);				
//					break;
//					
//				case "planCrtdDate":
//					$lastRow.find("td:eq(12)").find('input:eq(2)').val(col);
//					infoDetsArr.push(col);
//					break;
//					
//				case "plnlfretYrstoret":
//					$lastRow.find("td:eq(12)").find('input:eq(3)').val(col); 
//					break;
//				case "plnretSelfretage":
//					$lastRow.find("td:eq(12)").find('input:eq(4)').val(col);
//					 
//					break;
//				case "plnretSpouseretage":
//					$lastRow.find("td:eq(12)").find('input:eq(5)').val(col);
//					 
//					break;
//				case "plnretMultionret":
//					$lastRow.find("td:eq(12)").find('input:eq(6)').val(col);
//					 
//					break;
//				case "plnretCashvalonret":
//					$lastRow.find("td:eq(12)").find('input:eq(7)').val(col);
//					 
//					break;
//				case "plnretIntrateused":
//					$lastRow.find("td:eq(12)").find('input:eq(8)').val(col);
//					 
//					break;
//				case "plnretPrcnttoused":
//					$lastRow.find("td:eq(12)").find('input:eq(9)').val(col);
//					 
//					break;
//				case "plncashvalRetAge":
//					$lastRow.find("td:eq(12)").find('input:eq(10)').val(col);
//					 
//					break;
//					
//				case "cashValRefId":  
//					$lastRow.find("td:eq(12)").find('input:eq(11)').val(col); 
//					break;
//					
//				case "planModBy":
//					infoDetsArr.push(col);
//					break;
//					
//				case "planModDate":
//					infoDetsArr.push(col);
//					break;	
//					
//					
//			}			  
//		}
//		
//		 
//			
//		 
//		
//		
//		}
//	if(dataset == null){
////		calcTotalPlandetails();
//		ilifeInsPremium(null);
//		setMajorPlanDetails($lastRow); 
//		newRowLifeinsRidCpfEditTbl($lastRow); 
//		newRowLifeinsSRSRidEditTbl($lastRow);
//		//instant save added line 
//	//	instantlfRidPlanSave($lastRow,INS_MODE);	 
//		//
//	}  
//	calcTotSAPremPlandetails();
//	reOrderVisibleRows('liRaiderDetailstbl');
////	$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
////	$lastRow.find("select").prop("disabled",true);//instant save added line
//}
//
//	/*Edit Row Click */
//	$("#lfraidERow").on("click",function(){
//		lfraidVRow(); 
//	});
// 
//
//	/*View Row Click */
//		function lfraidVRow(){
//			var isOneRowSelected=0;
//			var $rowCount = $('#liRaiderDetailstbl tbody tr').length;	
//			var $lastRow = $("#liRaiderDetailstbl tbody tr:last");	
//			
//			if($rowCount<1){
//				applyToastrAlert("Insert rows before edit/view");
//				return;
//			} 
//			
//			$("#liRaiderDetailstbl tbody tr").each(function(){
//				var $row = $(this);   
//				$row.removeClass('selected');  
//				$(this).removeAttr("style"); 
//				$row.find("td").removeAttr("style");
//				
//					
//			});
//			
//			$("#liRaiderDetailstbl tbody").find('input[name="radplnRaidDetSelect"]').each(function(){ //Checkbox selection
//				var $curElm=$(this);
//				if($curElm.is(":checked")){ 
//					isOneRowSelected++;
//				}
//			});
//			
//			
//			if(isOneRowSelected > 1){ 
//				applyToastrAlert("More than one rows selected.Select one row only");
//				return;
//			}
//			
//			
//			$("#liRaiderDetailstbl tbody").find('input[name="radplnRaidDetSelect"]').each(function(){ //Checkbox selection
//				var $curElm=$(this);
//				if($curElm.is(":checked")){ 
//					var $row = $curElm.parents("tr");                                    
//					var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//					$curElm.prop("checked",false);
//			     	 $curElm.parents("tr").removeClass('selected');
//			     	 
//					if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//						 var $RowId=$row.index();
//						 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//						 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//								$(this).attr("disabled",false); 
//								$row.removeClass('selected');  
//								$(this).parent().css({border:'1px solid green'});
//								$row.css({border:'1px solid green'});
//								$row.find("td").css({border:'1px solid green'}); 
//							});  
//			 
//						 LiPlandetsRdlyflds($mode);
//						 liRdrplandlgval($row); 
//						 toggleBasicRiderPlan("RIDER");
//						 toggleTermPlanSwitch($('#liPlandets_Dialog #txtFldDlgliplnPremTerm'),$('#liPlandets_Dialog #swtDlgliplnPremTerm'));
//							showFIPAModel('liPlandets_Dialog','Life Insurance - Rider/Benefit plan Details');  
//							$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//							
//							$('#liPlandets_Dialog').on('shown.bs.modal', function () {
////								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").addClass("hidden");//instant save added line
//					//			$row.find("input[type=text]").prop("readonly",true);//instant save added line
//							//	$row.find("select").prop("disabled",true);//instant save added line
//							
////								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//								$("#liPlandets_Dialog").find("input[id=txtFldDlgRliplnName]").focus();//Aravindh
//								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//									 if(!validateLiRdePlanDetails())return; 
//							     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//							     			liRdrplandetsdomval($RowId,$row); 
//							     		}  
////							     		setMajorPlanDetails($row);
//							     		newRowLifeinsRidCpfEditTbl($row); 
//							     		newRowLifeinsSRSRidEditTbl($row);
//							     		typeOfCoverage("All","none");
////							     		calcTotalPlandetails();
//							     		ilifeInsPremium(null);
//							     		calcTotSAPremPlandetails();
//							     //		instantlfRidPlanSave($row,UPD_MODE); //instant save added line
//										$('#liPlandets_Dialog').modal('hide'); 
//										liplndetsclearFlds();
//									
//								});
//							});
//							 
//					}  
//					
//					if(($mode == QRY_MODE) ){
//						 var $RowId=$row.index();
//						 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);
//						 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//								$(this).attr("disabled",false); 
//								$row.removeClass('selected');  
//								$(this).parent().css({border:'1px solid green'});
//								$row.css({border:'1px solid green'});
//								$row.find("td").css({border:'1px solid green'}); 
//							});  
//			 
//						 LiPlandetsRdlyflds($mode);
//						 liRdrplandlgval($row); 
//						 toggleBasicRiderPlan("RIDER");
//						  toggleTermPlanSwitch($('#liPlandets_Dialog #txtFldDlgliplnPremTerm'),$('#liPlandets_Dialog #swtDlgliplnPremTerm'));
//							showFIPAModel('liPlandets_Dialog','Life Insurance - Rider/Benefit plan Details');  
//						//	$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").addClass("hidden");//instant save added line
//							
//							$('#liPlandets_Dialog').on('shown.bs.modal', function () {
//							//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//							//	$row.find("select").prop("disabled",true);//instant save added line
//							
////								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").text("OK");
//								$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//									 if(!validateLiRdePlanDetails())return; 
//							     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//							     			liRdrplandetsdomval($RowId,$row); 
//							     		}  
////							     		calcTotalPlandetails();
//							     		ilifeInsPremium(null);
//							     		calcTotSAPremPlandetails();
////							     		setMajorPlanDetails($row);
//							     		newRowLifeinsRidCpfEditTbl($row); 
//							     		newRowLifeinsSRSRidEditTbl($row);
//							     		typeOfCoverage("All","none");
//							     	//	instantlfRidPlanSave($row,UPD_MODE); //instant save added line
//										$('#liPlandets_Dialog').modal('hide'); 
//										liplndetsclearFlds();
//									
//								});
//							});
//							 
//					}  
//					isOneRowSelected++;
//				} 
//			});
//			
//			 
//			if(isOneRowSelected==0){
//				applyToastrAlert("No Rows Selected");
//				return;
//			} 
//			
//			
//		}
//		
//
///*Delete Row Click */
//$("#lfraidDRow").on("click",function(){  
////	 datatableDeleteRow('liRaiderDetailstbl',liRaiderDetailstbl);   
//		var flg=true;
//		var rowCount = liRaiderDetailstbl.row().count();
//		if(rowCount<1){
//			applyToastrAlert("Insert rows before edit/view");
//			flg=false;
//			return;
//		}
//		var isOneRowSelected=false;
//		$('#liRaiderDetailstbl tbody').find('input[type=checkbox],input[type=radio]').each(function(){
//			if($(this).is(":checked")){
//				isOneRowSelected=true;
//			}
//		});
//		
//
//		if(!isOneRowSelected){ 		
//			applyToastrAlert("No Rows Selected");
//			flg=false;
//		} 
//		if(flg){
//		$("#confirmationalertmsgdiv #confalertimg").html(""); 
//			$("#confirmationalertmsgdiv #confalertmsg").html("To delete selected row? Other linked data will also be deleted");
//			$('#confirmationalertmsgdiv').modal({
//				  backdrop: 'static',
//				  keyboard: false,
//				  show:true,
//				}); 
//			$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
//				$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
//				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
//				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){ 
//					$('#liRaiderDetailstbl tbody tr').find('input[type=checkbox],input[type=radio]').each(function(){
//						if($(this).is(":checked")){  
//							var row = $(this).parents("tr");                                    
//							var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();  
//							var refId=$(this).parents("tr").find("td:eq(0)").find("input.rowrefid");//Retirement Reference 
//							var refFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("rowrefid"); 
//							
//							var planrefId=$(this).parents("tr").find("td:eq(0)").find("input.planrefid");//Retirement Reference 
//							var planrefFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("planrefid"); 
//							 
//							if(isValidObject(refId) && refFlg){  
//						 
//								if(!isEmpty(refId.val())){
//								   var message=false;
//								
//								$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//									if(refId.val() == $(this).val()){ 
//										message=true;
//									 	cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
//									 	
//									}
//								});	
//								 
//							 
//								
//								$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//									if(refId.val() == $(this).val()){ 
//										message=true;
//										srsTable.row($(this).closest("tr")).remove().draw();
//									 	
//									}
//								});	
//							 $("#liRaiderDetailstbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//										 if(refId.val() == $(this).val()){ 
//											 checkAllPlanRidViaCoverages(row,'synced'); 
//									}
//								});  
//								}else{
//									checkAllPlanRidViaCoverages(row,null); 
//								}
//							}else{
//								checkAllPlanRidViaCoverages(row,null); 
//							} 
//								
////							liplandlgval(row);//instant save added line
////							instantlfBasPlanSave(null,DEL_MODE); //instant save added line
////							liPlanDetailstbl.row(row).remove().draw(); 
//							if(liRaiderDetailstbl.rows().count() > 0){
//								$('#liRaiderDetailstbl tbody tr').find('input[type=checkbox],input[type=radio]').each(function(){
//								if($(this).is(":checked")){
//								liRaiderDetailstbl.row(row).remove().draw(); 
//								}
//								});
//							}
//							$(this).attr("checked",false); 
//						}
//					});   
//					reOrderVisibleRows("cpfAccAddDedTable");
//					reOrderVisibleRows("liRaiderDetailstbl"); 
//					reOrderVisibleRows("IncAssRetPlgtbl");
//					reOrderVisibleRows("srsTable");
//					
//				$('#liRaiderDetailstbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
//						
//						var oldval = $(this).val();
//						var bankrowindex= $(this).closest("tr").index();
//						var newval = "LIFE_R"+bankrowindex;
//						 
//						$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//				     	   if(oldval == $(this).val()){
//				     		   $(this).val(newval);
//				     	   }
//				        });
//						
//						$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//					     	   if(oldval == $(this).val()){
//					     		   $(this).val(newval);
//					     	   }
//					        });
//						 
//						$(this).val(newval);
//					});
//				
//				
////						calcTotalPlandetails();
//						ilifeInsPremium(null);
//						calcTotSAPremPlandetails();
//						typeOfCoverage("All","none"); 
//						$('#confirmationalertmsgdiv').modal('hide');  
//					  	
//				  });
//				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
//					typeOfCoverage("All","none");
//					  	$('#confirmationalertmsgdiv').modal('hide');   
//				  }); 
//			}); 
//	} 
//});
//
//
//
//function checkAllPlanRidViaCoverages($Row,sign){
//	 var message=false;
//	var mode=$Row.find("td:first").find('input:eq(0)').val();
//	var checkbox=$Row.find("td:eq(1)").find('input[type=checkbox],input[type=radio]');
//	var plantab_planname=$Row.find('td:eq(2)').find("input:eq(0)").val();//Plan Tab - Plan name 
//	var plantab_coverages=$Row.find('td:eq(9)').find("input:eq(0)").val();//Plan Tab - Plan name 
//	if(checkbox.is(":checked")){
//		if(!isEmpty(plantab_planname) && !isEmpty(plantab_coverages)){ 
//			message=true;
//		var multiSelSplit = plantab_coverages.split(',');
//			$.each(multiSelSplit, function( index, value ) {
//				
//				 if(value == "Critical Illness") { 
//					 deleteChildplanCoverages('liCriticalIllnesstbl',liCriticalIllnesstbl,'2',plantab_planname);
//				 } 
//				 if(value == "Disability") {
//					 deleteChildplanCoverages('liDisabilitytbl',liDisabilitytbl,'2',plantab_planname);
//				 }
//				 if(value == "Death Benefit") {
//					 deleteChildplanCoverages('liDeathBenefittbl',liDeathBenefittbl,'2',plantab_planname);
//				 }
//				 if(value == "Hospitalisation") {
//					 deleteChildplanCoverages('liHospitilisationtbl',liHospitilisationtbl,'2',plantab_planname);
//				 }
//				 if(value == "Education") {
//					 deleteChildplanCoverages('liEducationtbl',liEducationtbl,'3',plantab_planname);
//				 }
//				 if(value == "Retirement") {
//					 deleteChildplanCoverages('liRetirementPlgtbl',liRetirementPlgtbl,'2',plantab_planname);
//				 } 
//			}); 
//		}
//	}
//	
//	if(message){
//		 applyErrorToastrAlert("There exists row in coverage tabs for selected plan, will also be deleted");
//	}
//	if(sign == 'synced'){
//		 applyErrorToastrAlert("There exists row in CPF or SRS, will also be deleted");
//	}
//	
//		 if(mode == INS_MODE){ 
//			liRaiderDetailstbl.row($Row).remove().draw(); 
//		}else if (mode == QRY_MODE){    
//			$Row.find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
//			$Row.find("td").css({border:'1px solid red'});
////			<!--changes done 19/06/2019 -->
//			$Row.hide(); 
//		}
//}
///*Validation */
//function validateLiRdePlanDetails(){
//	 
//	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgRliplnName',LIPD_PLANNAME))) return; 
//	if(!(validateFocusFlds('liPlandets_Dialog','selDlgliRdrplntype',LIRDER_PLANTYPE))) return; 
//	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgliplnPremTerm',LIPD_PREMTERM))) return; 
//	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgPlanIncDate',LIPD_INCEPDATE))) return; 
////	if(!(validateFocusFlds('liPlandets_Dialog','txtFldDlgPlanExpDate',LIPD_EXPRYDATE))) return; 
//	  return true; 
//}	
// 
//
///* Filling Model Fields*/
//	function liRdrplandlgval($lastRow){
//		 // alert($lastRow.find("td:eq(2)").find('input:eq(0)').val())
//		//  $('#liPlandets_Dialog #txtFldDlgliplnMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
//		  $('#liPlandets_Dialog #hDlgPlanRefId').val($lastRow.find("td:eq(0)").find('input:eq(3)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//		  $('#liPlandets_Dialog #txtFldDlgRliplnName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #selDlgliRdrplntype').val($lastRow.find("td:eq(3)").find('select:eq(0)').val()); 
//		  $('#liPlandets_Dialog #txtFldDlgliplnPremTerm').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//		
//		  $('#liPlandets_Dialog #txtFldDlgliplnSA').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnPremAmt').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #selDlgliplnPayMode').val($lastRow.find("td:eq(7)").find('select:eq(0)').val());
//		  $('#liPlandets_Dialog #selDlgliplnPayMtd').val($lastRow.find("td:eq(8)").find('select:eq(0)').val());
//		  
//		  resetMultiSel('selDlgliplnCoverages');
//		  $('#liPlandets_Dialog #hidDlgCoveragetype').val($lastRow.find("td:eq(9)").find('input:eq(1)').val()); 
//		  var multiSelSplit =  $('#liPlandets_Dialog #hidDlgCoveragetype').val().split(',');
//		  $("#liPlandets_Dialog #selDlgliplnCoverages").multiselect('select',multiSelSplit);   
//		  typeOfCoverage("All","none");
//		  $.each(multiSelSplit, function( index, value ) {
//			  typeOfCoverage(value,"block");
//		  });
//		  $('#liPlandets_Dialog #txtFldDlgPlanIncDate').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #txtFldDlgPlanExpDate').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnRemarks').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnCrtdBy').val($lastRow.find("td:eq(12)").find('input:eq(1)').val());
//		  $('#liPlandets_Dialog #txtFldDlgliplnCrtdDate').val($lastRow.find("td:eq(12)").find('input:eq(2)').val());
//	}
//	
//	/* Filling Table Fields*/
//	function liRdrplandetsdomval($RowId,$row){
//		
//		$row.find("td:eq(0)").find('input:eq(3)').val($("#hDlgPlanRefId").val());
//		$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgRliplnName").val()); 
//		$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgliRdrplntype").val());
//		$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgliplnPremTerm").val());
//		$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgliplnSA").val()); 
//		$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgliplnPremAmt").val()); 
//		$row.find("td:eq(7)").find('select:eq(0)').val($("#selDlgliplnPayMode").val()); 
//		$row.find("td:eq(8)").find('select:eq(0)').val($("#selDlgliplnPayMtd").val());   
//		$row.find("td:eq(9)").find('input:eq(0)').val(expandCoverOpts($("#selDlgliplnCoverages"),false));  
//		$row.find("td:eq(9)").find('input:eq(1)').val($("#hidDlgCoveragetype").val());   
//		
//		
//		$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgPlanIncDate").val()); 
//		$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPlanExpDate").val()); 
//		
//		$row.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgliplnRemarks").val()); 
//	//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	//	$row.find("select").prop("disabled",true);//instant save added line
//	
//	}
//
//$("#swtDlgliplnPremTerm").on("change",function(){
//	if (this.checked) {
//		$("#txtFldDlgliplnPremTerm").val("");
//		$('#liPlandets_Dialog #txtFldDlgliplnPremTerm').prop("disabled", false);
//	}
//	else{
//		$("#txtFldDlgliplnPremTerm").val("WHOLE LIFE");
//		$('#liPlandets_Dialog #txtFldDlgliplnPremTerm').prop("disabled", true); 
//	}
//	$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//});
//
//function toggleTermPlanSwitch(elmId,switchId){
//	
//	  var PremTerm=elmId.val();
//		if (PremTerm.toUpperCase() == "WHOLE LIFE")
//		{
//			switchId.prop("checked", false);
//			$('#liPlandets_Dialog #txtFldDlgliplnPremTerm').prop("disabled", true); 
//		}
//		else{
//			switchId.prop("checked", true);
//			$('#liPlandets_Dialog #swtDlgliplnPremTerm').prop("checked", true);
//			$('#liPlandets_Dialog #txtFldDlgliplnPremTerm').prop("disabled", false); 
//		}
//}
// 
//
////Add plan names dynamically
//function addDynPlanName(){
// 
//	 var $liPlanDettblcount = liPlanDetailstbl.rows().count(); 
//	 var $liRaiderDettblcount = liRaiderDetailstbl.rows().count(); 
//	 
//		  var temp = $("#lifeInsdetstab #lipPlanname").val();
//		  
//	 $("#lifeInsdetstab #lipPlanname option").remove(0);
//	 $('#lifeInsdetstab #lipPlanname').append( '<option value="">--SELECT--</option>' );
//	 
//		 if($liPlanDettblcount >0){ 
//			$("#liPlanDetailstbl tbody tr:visible").each(function(i,row){ 
//				var basicPlanName=$(this).find("td:eq(2)").find("input:eq(0)").val();  
//				if(!isEmpty(basicPlanName)){$('#listofLifeIns_Dialog #lipPlanname').append( '<option value="'+basicPlanName+'">'+basicPlanName+'</option>' );}
//			});  
//		 } 
//		  
//		 if($liRaiderDettblcount >0){
//			 $("#liRaiderDetailstbl tbody tr:visible").each(function(i,row){ 
//				var riderPlanName=$(this).find("td:eq(2)").find("input:eq(0)").val();   
//				if(!isEmpty(riderPlanName)){$('#listofLifeIns_Dialog #lipPlanname').append( '<option value="'+riderPlanName+'">'+riderPlanName+'</option>' );}
//		 	 }); 
//	     }
//		 
//		 $("#lifeInsdetstab #lipPlanname").val(temp);
//		 
//		 return true;
//}
///*###########################################################################################################################################################*/
// $("#txtFldDlgliplnPremTerm,#txtFldDlgPlanIncDate").on("change",function(){
//	 
//	 calculateEndDateFromYear($("#txtFldDlgliplnPremTerm"),$("#txtFldDlgPlanIncDate"),$("#txtFldDlgPlanExpDate"));
// });
// 
// 
// /**/
// function autocomplete(inp, arr) {
//	  /*the autocomplete function takes two arguments,
//	  the text field element and an array of possible autocompleted values:*/
//	  var currentFocus;
//	  /*execute a function when someone writes in the text field:*/
//	  inp.addEventListener("input", function(e) {
//	      var a, b, i, val = this.value;
//	      /*close any already open lists of autocompleted values*/
//	      closeAllLists();
//	      if (!val) { return false;}
//	      currentFocus = -1;
//	      /*create a DIV element that will contain the items (values):*/
//	      a = document.createElement("DIV");
//	      a.setAttribute("id", this.id + "autocomplete-list");
//	      a.setAttribute("class", "autocomplete-items");
//	      /*append the DIV element as a child of the autocomplete container:*/
//	      this.parentNode.appendChild(a);
//	      /*for each item in the array...*/
//	      for (i = 0; i < arr.length; i++) {
//	        /*check if the item starts with the same letters as the text field value:*/
//	        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//	          /*create a DIV element for each matching element:*/
//	          b = document.createElement("DIV");
//	          /*make the matching letters bold:*/
//	          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//	          b.innerHTML += arr[i].substr(val.length);
//	          /*insert a input field that will hold the current array item's value:*/
//	          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//	          /*execute a function when someone clicks on the item value (DIV element):*/
//	          b.addEventListener("click", function(e) {
//	              /*insert the value for the autocomplete text field:*/
//	              inp.value = this.getElementsByTagName("input")[0].value;
//	              /*close the list of autocompleted values,
//	              (or any other open lists of autocompleted values:*/
//	              closeAllLists();
//	          });
//	          a.appendChild(b);
//	        }
//	      }
//	  });
//	  /*execute a function presses a key on the keyboard:*/
//	  inp.addEventListener("keydown", function(e) {
//	      var x = document.getElementById(this.id + "autocomplete-list");
//	      if (x) x = x.getElementsByTagName("div");
//	      if (e.keyCode == 40) {
//	        /*If the arrow DOWN key is pressed,
//	        increase the currentFocus variable:*/
//	        currentFocus++;
//	        /*and and make the current item more visible:*/
//	        addActive(x);
//	      } else if (e.keyCode == 38) { //up
//	        /*If the arrow UP key is pressed,
//	        decrease the currentFocus variable:*/
//	        currentFocus--;
//	        /*and and make the current item more visible:*/
//	        addActive(x);
//	      } else if (e.keyCode == 13) {
//	        /*If the ENTER key is pressed, prevent the form from being submitted,*/
//	        e.preventDefault();
//	        if (currentFocus > -1) {
//	          /*and simulate a click on the "active" item:*/
//	          if (x) x[currentFocus].click();
//	        }
//	      }
//	  });
//	  function addActive(x) {
//	    /*a function to classify an item as "active":*/
//	    if (!x) return false;
//	    /*start by removing the "active" class on all items:*/
//	    removeActive(x);
//	    if (currentFocus >= x.length) currentFocus = 0;
//	    if (currentFocus < 0) currentFocus = (x.length - 1);
//	    /*add class "autocomplete-active":*/
//	    x[currentFocus].classList.add("autocomplete-active");
//	  }
//	  function removeActive(x) {
//	    /*a function to remove the "active" class from all autocomplete items:*/
//	    for (var i = 0; i < x.length; i++) {
//	      x[i].classList.remove("autocomplete-active");
//	    }
//	  }
//	  function closeAllLists(elmnt) {
//	    /*close all autocomplete lists in the document,
//	    except the one passed as an argument:*/
//	    var x = document.getElementsByClassName("autocomplete-items");
//	    for (var i = 0; i < x.length; i++) {
//	      if (elmnt != x[i] && elmnt != inp) {
//	        x[i].parentNode.removeChild(x[i]);
//	      }
//	    }
//	  }
//	  /*execute a function when someone clicks in the document:*/
//	  document.addEventListener("click", function (e) {
//	      closeAllLists(e.target);
//	  });
//	}
//
// 
// 
// 
// 
// function calculateEndDateFromYear(term,IncDate,eodDate){
//	 var endDate="";
//	 if(!isEmpty(term.val()) && !isEmpty(IncDate.val())){
//		 if(term.val()!="WHOLE LIFE"){
//		 endDate=addyearsToDate(IncDate.val(),term.val());
//		 eodDate.val(endDate);
//		 } 
//	 }else{
//		 eodDate.val("");
//	 }
// } 
