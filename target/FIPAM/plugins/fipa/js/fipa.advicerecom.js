//  
///**
// * Adv & Recom - Plan Term
// */
//
///*Datatable Initialisation*/
////var fnaartuplanTbl = $('#fnaartuplanTbl').DataTable( {
////	destroy: true,
//// 	responsive: false,         
////    ordering: false,
////    searching: false,     
////    scrollY:  "40vh",
////    scrollX: true,
////    scroller: false,
////    scrollCollapse:false,
////    paging:false, 
////    filter:false,   
////    columnDefs: [], 
////    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]},
////   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////    
////		 }, 
////}).draw();
//	
//
//
///*Add Row Click */
//$("#ArtuPlanARow").on("click",function(){
//	if(!valadRcPlnTbl())return; 
//			adRcPlnClearFlds();
//			showFIPAModel('RecomPPlan_Dialog','For LIFE & HEALTH INSURANCE (PLAN DETAILS)');   
//			$('#RecomPPlan_Dialog').on('shown.bs.modal', function () {
//				$("#RecomPPlan_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#RecomPPlan_Dialog").find("select[id=txtFldDlgRecomPpProdType]").focus();
//				$("#RecomPPlan_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validateadRcPlnDetails())return;
//					   	adRcPlnRdlyflds(INS_MODE);  
//					   	getRcmPlnRows(null); 
//						$('#RecomPPlan_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
//
//
///*Populate Data */
//function getRcmPlnRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldadRcPlnMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldRecomPpId">';
// 
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radadRcPlnSelect"/><label>&nbsp;</label></div>'; 
//
//
//var cell2 ='<select name="txtFldRecomPpProdType" class="form-control editable"   onmouseover="fipaTooltip(this);"> </select>';
//var cell3 ='<input type="text" name="txtFldRecomPpCompany" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="60" />';	
//var cell3a='<input type="text" name="txtFldRecomPpProdName" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="20">'
//var cell3b='<select class="form-control" name="selFldRecomPpBasRid"><option value="">--SELECT--</option><option value="B">Rider</option><option value="R">Basic</option></select>'
//var cell4='<input type="text" name="txtFldRecomPpSumAssr" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
//var cell5 ='<select  name="txtFldRecomPpPayMode"  class="form-control editable"   onmouseover="fipaTooltip(this);" > </select>';  
//var cell6 ='<input type="text" name="txtFldRecomPpPlanTerm" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
//var cell7 = '<input type="text" name="txtFldRecomPpPayTerm"  class="form-control editable"   onmouseover="fipaTooltip(this);"  />';
//var cell8 = '<input type="text" name="txtFldRecomPpPremium"  class="form-control editable"   onmouseover="fipaTooltip(this);" />'+
//'<input type="hidden" name="txtFldRecomPpCrtdBy"/><input type="hidden" name="txtFldRecomPpCrtdDate"/>';
//
//
//fnaartuplanTbl.row.add( [cell0,cell1,cell2,cell3,cell3a,cell3b,cell4,cell5,cell6,cell7,cell8] ).draw( false );
//
//var rowCount = $('#fnaartuplanTbl tbody tr').length;	
//var $lastRow = $("#fnaartuplanTbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radadRcPln"+$lastRow.index())
//.parent().find('label').attr('for',"radadRcPln"+$lastRow.index());
//  
//
//var sel1 =  $("#txtFldDlgRecomPpProdType > option").clone();
//$lastRow.find("td:eq(2)").find('select:eq(0)').append(sel1);
//$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgRecomPpProdType").val());
// 
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRecomPpCompany").val()); 
//
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgRecomPpProdName").val()); 
//
//$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#selFldDlgRecomPpBasRid").val()); 
//
//$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgRecomPpSumAssr").val());  
//$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");
//
//
//var sel2 =  $("#txtFldDlgRecomPpPayMode > option").clone();
//$lastRow.find("td:eq(7)").find('select:eq(0)').append(sel2);
//$lastRow.find("td:eq(7)").find('select:eq(0)').val($("#txtFldDlgRecomPpPayMode").val());
// 
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgRecomPpPlanTerm").val());  
//$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntYrs");
//
//
//$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgRecomPpPayTerm").val());
//$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("");//applyEvntYrs
//
//$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgRecomPpPremium").val());
//$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntUsd");
//  
//applyEventHandlers(); 
//
//if(dataset != null){
//
//	
//			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
//					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
//			}
//			
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "recomPpId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
//				break;
//				
//			case "recomPpProdtype": 
//				selectNullvalChk($lastRow.find("td:eq(2)"),col);    
//				break;
//				
//			case "recomPpPrin": 
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
//				break;
//				
//			case "recomPpProdname": 
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
//				break;	
//			 
//			case "recomPpBasrid": 
//				$lastRow.find("td:eq(5)").find('select:eq(0)').val(col); 
//				break;	
//				
//			case "recomPpSumassr": 
//				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "recomPpPaymentmode": 
//				selectNullvalChk($lastRow.find("td:eq(7)"),col);  
//				break;
//			 
//			 
//			case "recomPpPlanterm": 
//				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
//				break;
//			
//			case "recomPpPayterm": 
//				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "recomPpPremium": 
//				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
//				break;
//			 
//			 
//			case "createdBy": 
//				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col);
//				infoDetsArr.push(col);
//				break;
//			 
//			 
//			case "createdDate": 
//				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col);
//				infoDetsArr.push(col);
//				break; 
//				 
//		}			 
//		 
//	}
//	}
// 
// 
//}
//
//
// 
///*Edit Row Click */
//$("#ArtuPlanERow").on("click",function(){
//	ArtuPlanVRow(); 
//});
//
//
///*View Row Click */
// function ArtuPlanVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#fnaartuplanTbl tbody tr').length;	
//	var $lastRow = $("#fnaartuplanTbl tbody tr:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	
//	$("#fnaartuplanTbl tbody tr").each(function(){
//		var $row = $(this);   
//		$row.removeClass('selected');  
//		$(this).removeAttr("style"); 
//		$row.find("td").removeAttr("style");
//	});
//	
//	
//	$("#fnaartuplanTbl tbody").find('input[name="radadRcPlnSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#fnaartuplanTbl tbody").find('input[name="radadRcPlnSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					});  
//				 	adRcPlnRdlyflds($mode);
//					adRcPlnfilldlgval($row); 
//					showFIPAModel('RecomPPlan_Dialog','For LIFE & HEALTH INSURANCE (PLAN DETAILS)');  
//					$('#RecomPPlan_Dialog').on('shown.bs.modal', function () {
//						$("#RecomPPlan_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#RecomPPlan_Dialog").find("select[id=txtFldDlgRecomPpProdType]").focus();
//						$("#RecomPPlan_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validateadRcPlnDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			adRcPlnfilldomval($RowId,$row); 
//					     		}  
//								$('#RecomPPlan_Dialog').modal('hide'); 
//								adRcPlnClearFlds();
//							
//						});
//					});
//					 
//			}  
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
// }
//
//
///*Delete Row Click */
//$("#ArtuPlanDRow").on("click",function(){ 
//	datatableDeleteRow('fnaartuplanTbl',fnaartuplanTbl,'','',''); 
//});
//
///*Clear Fields */
//function adRcPlnClearFlds(){
//	$("#RecomPPlan_Dialog").find("input[type=text]").val("");
//	$("#RecomPPlan_Dialog").find("textarea").val("");
//	$("#RecomPPlan_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function adRcPlnRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#RecomPPlan_Dialog :input").prop("disabled", true); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#RecomPPlan_Dialog :input").prop("disabled", false);
//	 }
//}
//
///*Validation */
//function validateadRcPlnDetails(){
//	 
//	if(!(validateFocusFlds('RecomPPlan_Dialog','txtFldDlgRecomPpProdType',ARPLN_PROTYPE))) return; 
//	if(!(validateFocusFlds('RecomPPlan_Dialog','txtFldDlgRecomPpCompany',ARPLN_CMPYNAME))) return; 
////	if(!(validateFocusFlds('RecomPPlan_Dialog','txtFldDlgRecomPpProdName',ARPLN_CMPYNAME))) return;  
//	
//	  return true; 
//}
//function valadRcPlnTbl(){ 
//	var $lastRow = $("#fnaartuplanTbl tbody tr:last");	
//	var $RowCount = fnaartuplanTbl.rows().count();
//
//	var valid=true;
//	if($RowCount > 0 ){ 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), ARPLN_PROTYPE))) {valid=false;return false;}; 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), ARPLN_CMPYNAME))) {valid=false;return false;}; 
//	}  
//  return valid; 
//}
//
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgRecomPpProdType,#txtFldDlgRecomPpProdName").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
//
///* Filling Model Fields*/
//function adRcPlnfilldlgval($lastRow){
//	  
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpProdType').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpCompany').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpProdName').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#RecomPPlan_Dialog #selFldDlgRecomPpBasRid').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//	  
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpSumAssr').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpPayMode').val($lastRow.find("td:eq(7)").find('select:eq(0)').val());
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpPlanTerm').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpPayTerm').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpPremium').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
//	  
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpCrtdBy').val($lastRow.find("td:eq(8)").find('input:eq(1)').val());
//	  $('#RecomPPlan_Dialog #txtFldDlgRecomPpCrtdDate').val($lastRow.find("td:eq(8)").find('input:eq(2)').val());
//	   
//}
//
///* Filling Table Fields*/
//function adRcPlnfilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgRecomPpProdType").val()); 
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRecomPpCompany").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgRecomPpProdName").val());
//	$row.find("td:eq(5)").find('input:eq(0)').val($("#selFldDlgRecomPpBasRid").val());
//	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgRecomPpSumAssr").val());  
//	$row.find("td:eq(7)").find('select:eq(0)').val($("#txtFldDlgRecomPpPayMode").val()); 
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgRecomPpPlanTerm").val());  
//	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgRecomPpPayTerm").val()); 
//	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgRecomPpPremium").val()); 
//}
//
// 
///*################################################################################################################################################*/
//
///**
// * Adv & Recom - Fund Term
// */
//
///*Datatable Initialisation*/
////var fnaartufundTbl = $('#fnaartufundTbl').DataTable( {
////	destroy: true,
//// 	responsive: false,         
////    ordering: false,
////    searching: false,     
////    scrollY:  "40vh",
////    scrollX: true,
////    scroller: false,
////    scrollCollapse:false,
////    paging:false, 
////    filter:false,   
////    columnDefs: [], 
////    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]},
////   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////    
////		 }, 
////}).draw();
//	
//
//
//
///*Add Row Click */
//$("#ArtuFundARow").on("click",function(){
//	if(!valadRcFdTbl())return; 
//			adRcFdClearFlds();
//			showFIPAModel('RecomPFund_Dialog','For UT and ILP (FUND DETAILS)');   
//			$('#RecomPFund_Dialog').on('shown.bs.modal', function () {
//				$("#RecomPFund_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#RecomPFund_Dialog").find("select[id=txtFldDlgRecomFfProdType]").focus();
//				$("#RecomPFund_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validateadRcFdDetails())return;
//					   	adRcFdRdlyflds(INS_MODE);  
//					   	getFdPlnRows(null); 
//						$('#RecomPFund_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
///*Populate Data */
//function getFdPlnRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldadRcFdMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldRecomFfId">';
// 
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radadRcFdSelect"/><label>&nbsp;</label></div>'; 
//
//var cell2 ='<select name="txtFldRecomFfProdType" id="txtFldRecomFfProdType"  class="form-control editable"   onmouseover="fipaTooltip(this);"> </select>';
//var cell3 ='<input type="text" name="txtFldRecomFfComp"  class="form-control editable"   maxlength="60" onmouseover="fipaTooltip(this);"/>';	
//var cell3a ='<input type="text" name="txtFldRecomFfPlan"  class="form-control editable"  maxlength="300"  onmouseover="fipaTooltip(this);" >'
//var cell4 ='<input type="text" name="txtFldRecomFfFundRiskRate"  class="form-control editable"   onmouseover="fipaTooltip(this);" />';	
//var cell5 ='<select  name="txtFldRecomFfPayMode" class="form-control editable"   onmouseover="fipaTooltip(this);"> </select>';
//var cell6 ='<input type="text" name="txtFldRecomFfSalChrg"  class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
//var cell7 ='<input type="text" name="txtFldRecomFfPurAmt"  class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
//var cell8 ='<input type="text" name="txtFldRecomFfPurPrcnt"  class="form-control editable"   onmouseover="fipaTooltip(this);"/>'+
//'<input type="hidden" name="txtFldRecomFfCrtdBy"/><input type="hidden" name="txtFldRecomFfCrtdDate"/>';
//
//
//fnaartufundTbl.row.add( [cell0,cell1,cell2,cell3,cell3a,cell4,cell5,cell6,cell7,cell8] ).draw( false );
//
//var rowCount = $('#fnaartufundTbl tbody tr').length;	
//var $lastRow = $("#fnaartufundTbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radadRcFd"+$lastRow.index())
//.parent().find('label').attr('for',"radadRcFd"+$lastRow.index()); 
//
//var sel1 =  $("#txtFldDlgRecomFfProdType > option").clone();
//$lastRow.find("td:eq(2)").find('select:eq(0)').append(sel1);
//$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgRecomFfProdType").val());
// 
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRecomFfComp").val());  
//
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgRecomFfPlan").val());  
//
//
//$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgRecomFfFundRiskRate").val());  
//
//var sel2 =  $("#txtFldDlgRecomFfPayMode > option").clone();
//$lastRow.find("td:eq(6)").find('select:eq(0)').append(sel2);
//$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgRecomFfPayMode").val());
// 
//$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgRecomFfSalChrg").val());  
//$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("symbolprCent");
//
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgRecomFfPurAmt").val()); 
//$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd");
//
//$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgRecomFfPurPrcnt").val()); 
//$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("symbolprCent");
//
//
//
//  
//applyEventHandlers(); 
//
//if(dataset != null){
//
//	
//			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
//					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
//			}
//			
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "recomFfId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
//				break;
//				
//			case "recomFfProdtype": 
//				selectNullvalChk($lastRow.find("td:eq(2)"),col);    
//				break;
//				
//			case "recomFfPrin": 
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
//				break; 
//				
//			case "recomFfPlan": 
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
//				break; 	
//			 
//			case "recomFfFundriskrate": 
//
//				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
//				break;
//			 
//			 
//			case "recomFfPaymentmode": 
//				selectNullvalChk($lastRow.find("td:eq(6)"),col);  
//				break;
//			
//			case "recomFfSaleschrg": 
//				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "recomFfPuramount": 
//				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
//				break;
//				
//			case "recomFfPurprcnt": 
//				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
//				break;
//			  
//			case "recomFfIaffee": 
//				document.getElementById("txtFldRecomFfIaffee").value=col; 
//				break;
//			  
//				
//			case "createdBy": 
//				$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);
//				infoDetsArr.push(col);
//				break;
//			  
//			case "createdDate": 
//				$lastRow.find("td:eq(9)").find('input:eq(2)').val(col);
//				infoDetsArr.push(col);
//				break; 
//				 
//		}			 
//		 
//	}
//	}
// 
// 
//}
//
//
// 
///*Edit Row Click */
//$("#ArtuFundERow").on("click",function(){
//	ArtuFundVRow(); 
//});
//
//
///*View Row Click */
// function ArtuFundVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#fnaartufundTbl tbody tr').length;	
//	var $lastRow = $("#fnaartufundTbl tbody tr:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	
//
//	$("#fnaartufundTbl tbody tr").each(function(){
//		var $row = $(this);   
//		$row.removeClass('selected');  
//		$(this).removeAttr("style"); 
//		$row.find("td").removeAttr("style");
//	});
//	
//	
//	
//	$("#fnaartufundTbl tbody").find('input[name="radadRcFdSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#fnaartufundTbl tbody").find('input[name="radadRcFdSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					});  
//				 	adRcFdRdlyflds($mode);
//					adRcFdfilldlgval($row); 
//					showFIPAModel('RecomPFund_Dialog','For UT and ILP (FUND DETAILS)');  
//					$('#RecomPFund_Dialog').on('shown.bs.modal', function () {
//						$("#RecomPFund_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#RecomPFund_Dialog").find("select[id=txtFldDlgRecomFfProdType]").focus();
//						$("#RecomPFund_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validateadRcFdDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			adRcFdfilldomval($RowId,$row); 
//					     		}  
//								$('#RecomPFund_Dialog').modal('hide'); 
//								adRcFdClearFlds();
//							
//						});
//					});
//					 
//			}  
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
//} 
//
//
///*Delete Row Click */
//$("#ArtuFundDRow").on("click",function(){ 
//	datatableDeleteRow('fnaartufundTbl',fnaartufundTbl,'','',''); 
//});
//
///*Clear Fields */
//function adRcFdClearFlds(){
//	$("#RecomPFund_Dialog").find("input[type=text]").val("");
//	$("#RecomPFund_Dialog").find("textarea").val("");
//	$("#RecomPFund_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function adRcFdRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#RecomPFund_Dialog :input").prop("disabled", true); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#RecomPFund_Dialog :input").prop("disabled", false);
//	 }
//}
//
///*Validation */
//function validateadRcFdDetails(){
//	 
//	if(!(validateFocusFlds('RecomPFund_Dialog','txtFldDlgRecomFfProdType',ARPLN_PROTYPE))) return; 
//	if(!(validateFocusFlds('RecomPFund_Dialog','txtFldDlgRecomFfComp',ARPLN_CMPYNAME))) return; 
//	 
// 
// 
//	  return true; 
//}
//function valadRcFdTbl(){ 
//	var $lastRow = $("#fnaartuplanTbl tbody tr:last");	
//	var $RowCount = fnaartufundTbl.rows().count();
//
//	var valid=true;
//	if($RowCount > 0 ){ 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), ARPLN_PROTYPE))) {valid=false;return false;}; 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), ARPLN_CMPYNAME))) {valid=false;return false;}; 
//	}  
//  return valid; 
//}
//
//
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgRecomFfProdType,#txtFldDlgRecomFfComp").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
//
///* Filling Model Fields*/
//function adRcFdfilldlgval($lastRow){
//	  
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfProdType').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfComp').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfPlan').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfFundRiskRate').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfPayMode').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfSalChrg').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfPurAmt').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfPurPrcnt').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
//	  
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfCrtdBy').val($lastRow.find("td:eq(7)").find('input:eq(1)').val());
//	  $('#RecomPFund_Dialog #txtFldDlgRecomFfCrtdDate').val($lastRow.find("td:eq(7)").find('input:eq(2)').val());
//	   
//}
//
///* Filling Table Fields*/
//function adRcFdfilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgRecomFfProdType").val()); 
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRecomFfComp").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgRecomFfPlan").val());
//	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgRecomFfFundRiskRate").val());  
//	$row.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgRecomFfPayMode").val()); 
//	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgRecomFfSalChrg").val());  
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgRecomFfPurAmt").val()); 
//	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgRecomFfPurPrcnt").val()); 
//}
//
// 
///*################################################################################################################################################*/
// 
///**
// * Adv & Recom - Plan Term
// */
//
///*Datatable Initialisation*/
////var fnaswrepplanTbl = $('#fnaswrepplanTbl').DataTable( {
////	destroy: true,
//// 	responsive: false,         
////    ordering: false,
////    searching: false,     
////    scrollY:  "40vh",
////    scrollX: true,
////    scroller: false,
////    scrollCollapse:false,
////    paging:false, 
////    filter:false,   
////    columnDefs: [], 
////    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]},
////   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////    
////		 }, 
////}).draw();
//
//
//
///*Add Row Click */
//$("#SwrepPlanARow").on("click",function(){
//	if(!valswRplPlnTbl())return; 
//			swRplPlnClearFlds();
//			showFIPAModel('SwtchPlan_Dialog','Switching & Replacement(PLAN DETAILS)');   
//			$('#SwtchPlan_Dialog').on('shown.bs.modal', function () {
//				$("#SwtchPlan_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#SwtchPlan_Dialog").find("select[id=txtFldDlgSwrepPpProdType]").focus();
//				$("#SwtchPlan_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validateswRplPlnDetails())return;
//					   	swRplPlnRdlyflds(INS_MODE);  
//					   	getSwrepPlanRows(null); 
//						$('#SwtchPlan_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
///*Populate Data */
//function getSwrepPlanRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldswRplPlnMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldSwrepPpId">';
// 
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radswRplPlnSelect"/><label>&nbsp;</label></div>'; 
//
//
//var cell2 ='<select name="txtFldSwrepPpProdType"  onmouseover="fipaTooltip(this);" class="form-control editable" > </select>';
//var cell3 ='<input type="text" name="txtFldSwrepPpComp"  onmouseover="fipaTooltip(this);" maxlength="60"   class="form-control editable"   />';		
//var cell3a='<input type="text" name="txtFldSwrepPpProdName"  onmouseover="fipaTooltip(this);" maxlength="20"   class="form-control editable"   />';
//var cell3b='<select name="selFldSwrepPpBasRid" class="form-control"><option value="">--SELECT--</option><option value="B">Basic</option><option value="R">Rider</option></select>'
//var cell4='<input type="text" name="txtFldSwrepPpSumAssr"  onmouseover="fipaTooltip(this);"  class="form-control writableFieldDHTML" />';	
//var cell5 ='<select  name="txtFldSwrepPpPayMode"  onmouseover="fipaTooltip(this);"  class="form-control editable"  > </select>';
//var cell6 = '<select name="txtFldSwrepPpTransInd" class="form-control editable">'+
//			'<option value="">--SELECT--</option><option value="SI">Switch In</option><option value="SO">Switch Out</option>'+
//			'</select>';
//var cell7 = '<input type="text" name="txtFldSwrepPpPlanTerm"  onmouseover="fipaTooltip(this);" class="form-control editable" />';
//var cell8 = '<input type="text" name="txtFldSwrepPpPayTerm"  onmouseover="fipaTooltip(this);"  class="form-control editable" />';
//var cell9 = '<input type="text" name="txtFldSwrepPpPre"  onmouseover="fipaTooltip(this);"  class="form-control editable"  />'+
//'<input type="hidden" name="txtFldSwrepCrtdBy"/><input type="hidden" name="txtFldSwrepCrtdDate"/>';
//
//fnaswrepplanTbl.row.add( [cell0,cell1,cell2,cell3,cell3a,cell3b,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );
//
//var rowCount = $('#fnaswrepplanTbl tbody tr').length;	
//var $lastRow = $("#fnaswrepplanTbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radswRplPln"+$lastRow.index())
//.parent().find('label').attr('for',"radswRplPln"+$lastRow.index());
//  
//
//var sel1 =  $("#txtFldDlgSwrepPpProdType > option").clone();
//$lastRow.find("td:eq(2)").find('select:eq(0)').append(sel1);
//$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgSwrepPpProdType").val());
// 
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSwrepPpComp").val());  
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgSwrepPpProdName").val());  
//$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#selFldDlgSwrepPpBasRid").val());  
//
//$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgSwrepPpSumAssr").val());  
//$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");
//
//var sel2 =  $("#txtFldDlgSwrepPpPayMode > option").clone();
//$lastRow.find("td:eq(7)").find('select:eq(0)').append(sel2);
//$lastRow.find("td:eq(7)").find('select:eq(0)').val($("#txtFldDlgSwrepPpPayMode").val());
// 
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgSwrepPpTransInd").val());  
//$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgSwrepPpPlanTerm").val());
//$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("");//applyEvntYrs
//
//$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgSwrepPpPayTerm").val());
//$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntYrs");
//
//$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgSwrepPpPre").val());
//$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntUsd");
//
//
//  
//applyEventHandlers(); 
//
//if(dataset != null){
//
//	
//			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
//					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
//			}
//			
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "swrepPpId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
//				break;
//				
//			case "swrepPpProdtype": 
//				selectNullvalChk($lastRow.find("td:eq(2)"),col);    
//				break;
//			
//			case "swrepPpPrin": 
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
//				break;	
//				
//			case "swrepPpProdname": 
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
//				break;
//				
//			case "swrepPpBasrid": 
//				$lastRow.find("td:eq(5)").find('select:eq(0)').val(col); 
//				break;	
//			 
//			case "swrepPpSumassr": 
//				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "swrepPpPaymentmode": 
//				selectNullvalChk($lastRow.find("td:eq(7)"),col);  
//				break;
//			 
//			 
//			case "swrepPpTransind": 
//				$lastRow.find("td:eq(8)").find('select:eq(0) option').each(function(){
//				   if(this.value==col){$(this).parents("select")[0].value=col;return false;}
//				   else{$(this).parents("select")[0].value="";}
//				}); 
//				break;
//			
//			case "swrepPpPlanterm": 
//				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "swrepPpPayterm": 
//				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
//				break;
//			 
//				
//			case "swrepPpPremium": 
//				$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
//				break;
//			 
//				
//			case "createdBy": 
//				$lastRow.find("td:eq(11)").find('input:eq(1)').val(col);
//				infoDetsArr.push(col);
//				break;
//			 
//			 
//			case "createdDate": 
//				$lastRow.find("td:eq(11)").find('input:eq(2)').val(col);
//				infoDetsArr.push(col);
//				break; 
//				 
//		}			 
//		 
//	}
//	}
// 
//}
//
//
// 
///*Edit Row Click */
//$("#SwrepPlanERow").on("click",function(){
//	SwrepPlanVRow(); 
//});
//
//
///*View Row Click */
// function SwrepPlanVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#fnaswrepplanTbl tbody tr').length;	
//	var $lastRow = $("#fnaswrepplanTbl tbody tr:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	$("#fnaswrepplanTbl tbody").find('input[name="radswRplPlnSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#fnaswrepplanTbl tbody").find('input[name="radswRplPlnSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					});
//				 	swRplPlnRdlyflds($mode);
//					swRplPlnfilldlgval($row); 
//					showFIPAModel('SwtchPlan_Dialog','Switching & Replacement(PLAN DETAILS)');  
//					$('#SwtchPlan_Dialog').on('shown.bs.modal', function () {
//						$("#SwtchPlan_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#SwtchPlan_Dialog").find("select[id=txtFldDlgSwrepPpProdType]").focus();
//						$("#SwtchPlan_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validateswRplPlnDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			swRplPlnfilldomval($RowId,$row); 
//					     		}  
//								$('#SwtchPlan_Dialog').modal('hide'); 
//								swRplPlnClearFlds();
//							
//						});
//					});
//					 
//			}  
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
//} 
//
//
///*Delete Row Click */
//$("#SwrepPlanDRow").on("click",function(){ 
//	datatableDeleteRow('fnaswrepplanTbl',fnaswrepplanTbl,'','',''); 
//});
//
///*Clear Fields */
//function swRplPlnClearFlds(){
//	$("#SwtchPlan_Dialog").find("input[type=text]").val("");
//	$("#SwtchPlan_Dialog").find("textarea").val("");
//	$("#SwtchPlan_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function swRplPlnRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#SwtchPlan_Dialog :input").prop("disabled", true); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#SwtchPlan_Dialog :input").prop("disabled", false);
//	 }
//}
//
///*Validation */
//function validateswRplPlnDetails(){
//	 
//	if(!(validateFocusFlds('SwtchPlan_Dialog','txtFldDlgSwrepPpProdType',ARPLN_PROTYPE))) return; 
//	if(!(validateFocusFlds('SwtchPlan_Dialog','txtFldDlgSwrepPpComp',ARPLN_CMPYNAME))) return; 
//	   
//	
//	  return true; 
//}
//
//
//function valswRplPlnTbl(){ 
//	var $lastRow = $("#fnaswrepplanTbl tbody tr:last");	
//	var $RowCount = fnaswrepplanTbl.rows().count();
//
//	var valid=true;
//	if($RowCount > 0 ){ 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), ARPLN_PROTYPE))){valid=false;return false;}; 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), ARPLN_CMPYNAME))){valid=false;return false;};  
//	}  
//  return valid; 
//}
//
//
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgSwrepPpProdType,#txtFldDlgSwrepPpComp").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
//
///* Filling Model Fields*/
//function swRplPlnfilldlgval($lastRow){
//	  
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpProdType').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpComp').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpProdName').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#SwtchPlan_Dialog #selFldDlgSwrepPpBasRid').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpSumAssr').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpPayMode').val($lastRow.find("td:eq(7)").find('select:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpTransInd').val($lastRow.find("td:eq(8)").find('select:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpPlanTerm').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpPayTerm').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepPpPre').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
//	  
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepCrtdBy').val($lastRow.find("td:eq(11)").find('input:eq(1)').val());
//	  $('#SwtchPlan_Dialog #txtFldDlgSwrepCrtdDate').val($lastRow.find("td:eq(11)").find('input:eq(2)').val());
//	   
//}
//
///* Filling Table Fields*/
//function swRplPlnfilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgSwrepPpProdType").val()); 
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSwrepPpComp").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgSwrepPpProdName").val());
//	$row.find("td:eq(5)").find('select:eq(0)').val($("#selFldDlgSwrepPpBasRid").val());
//	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgSwrepPpSumAssr").val());  
//	$row.find("td:eq(7)").find('select:eq(0)').val($("#txtFldDlgSwrepPpPayMode").val()); 
//	$row.find("td:eq(8)").find('select:eq(0)').val($("#txtFldDlgSwrepPpTransInd").val());  
//	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgSwrepPpPlanTerm").val()); 
//	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgSwrepPpPayTerm").val()); 
//	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgSwrepPpPre").val()); 
//}
//
// 
///*################################################################################################################################################*/
//
///**
// * Switching- Fund Term
// */
//
///*Datatable Initialisation*/
////var fnaSwrepFundTbl = $('#fnaSwrepFundTbl').DataTable( {
////	destroy: true,
//// 	responsive: false,         
////    ordering: false,
////    searching: false,     
////    scrollY:  "40vh",
////    scrollX: true,
////    scroller: false,
////    scrollCollapse:false,
////    paging:false, 
////    filter:false,   
////    columnDefs: [], 
////    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]},
////   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////    
////		 }, 
////}).draw();
//	
//
//
///*Add Row Click */
//$("#SwrepFundARow").on("click",function(){
//	if(!valswRplFdTbl())return; 
//			swRplFdClearFlds();
//			showFIPAModel('SwtchFund_Dialog','Switching & Replacement(FUND DETAILS)');   
//			$('#SwtchFund_Dialog').on('shown.bs.modal', function () {
//				$("#SwtchFund_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#SwtchFund_Dialog").find("select[id=txtFldDlgSwrepFfProdType]").focus();
//				$("#SwtchFund_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validateswRplFdDetails())return;
//					   	swRplFdRdlyflds(INS_MODE);  
//					   	getSwrepFundRows(null); 
//						$('#SwtchFund_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
///*Populate Data */
//function getSwrepFundRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldswRplFdMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldSwRepFfId">';
// 
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radswRplFdSelect"/><label>&nbsp;</label></div>'; 
//
//
//var cell2 ='<select name="txtFldSwrepFfProdType" id="txtFldSwrepFfProdType"  class="form-control editable"   onmouseover="fipaTooltip(this);"  > </select>';
//var cell3 ='<input type="text" name="txtFldSwrepFfComp"  class="form-control editable" maxlength="60"  onmouseover="fipaTooltip(this);"/>';		
//var cell3a='<input type="text" name="txtFldSwrepFfPlan"  class="form-control editable" maxlength="300"  onmouseover="fipaTooltip(this);"/>';
//var cell4='<input type="text" name="txtFldSwrepFfFundRiskRate"  class="form-control editable"   onmouseover="fipaTooltip(this);" />';	
//var cell5 ='<select  name="txtFldSwrepFfPayMode" class="form-control editable"   onmouseover="fipaTooltip(this);" > </select>';
//var cell6 = '<input type="text" name="txtFldSwrepFfSoredmUnits" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';	
//var cell7 =  '<input type="text" name="txtFldSwrepFfSoredPrcnt" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
//var cell8 ='<input type="text" name="txtFldSwrepFfSirepsalChrg"  class="form-control editable"   onmouseover="fipaTooltip(this);"  />';
//var cell9 ='<input type="text" name="txtFldSwrepFfSirepAmt" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
//var cell10 = '<input type="text" name="txtFldSwrepFfSirepPrcnt" class="form-control editable"   onmouseover="fipaTooltip(this);"/>'+
//'<input type="hidden" name="txtFldSwrepFfCrtdBy"/><input type="hidden" name="txtFldSwrepFfCrtdDate"/>';
//
//fnaSwrepFundTbl.row.add( [cell0,cell1,cell2,cell3,cell3a,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );
//
//var rowCount = $('#fnaSwrepFundTbl tbody tr').length;	
//var $lastRow = $("#fnaSwrepFundTbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radswRplFd"+$lastRow.index())
//.parent().find('label').attr('for',"radswRplFd"+$lastRow.index());
//  
//
//var sel1 =  $("#txtFldDlgSwrepFfProdType > option").clone();
//$lastRow.find("td:eq(2)").find('select:eq(0)').append(sel1);
//$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgSwrepFfProdType").val());
//
//
// 
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSwrepFfComp").val());
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgSwrepFfPlan").val());
//
//$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgSwrepFfFundRiskRate").val());  
//$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
//
//
//var sel2 =  $("#txtFldDlgSwrepFfPayMode > option").clone();
//$lastRow.find("td:eq(6)").find('select:eq(0)').append(sel2);
//$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgSwrepFfPayMode").val());
// 
//$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSoredmUnits").val());  
//$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntUsd");
//
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSoredPrcnt").val());
//$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("symbolprCent");
//
//$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSirepsalChrg").val());
//$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("symbolprCent");
//
//$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSirepAmt").val());
//$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntUsd");
//
//$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSirepPrcnt").val());
//$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("symbolprCent");
//
//
//  
//applyEventHandlers(); 
//
//
//if(dataset != null){
//
//	
//			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
//					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
//			}
//			
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "swrepFfId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
//				break;
//				
//			case "swrepFfProdtype": 
//				selectNullvalChk($lastRow.find("td:eq(2)"),col);    
//				break;
//				
//			case "swrepPpPrin": 
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
//				break;
//				
//			case "swrepPpPlan": 
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
//				break;	
//			 
//			case "swrepFfFundriskrate": 
//				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "swrepFfPaymentmode": 
//				selectNullvalChk($lastRow.find("td:eq(6)"),col);  
//				break;
//			 
//			 
//			case "swrepFfSoredmunits": 
//				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
//				break;
//			
//			case "swrepFfSoredprcnt": 
//				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "swrepFfSirepsaleschrg": 
//				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
//				break;
//			 
//				
//			case "swrepFfSirepamt": 
//				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
//				break;
//				
//			case "swrepFfSirepprcnt": 
//				$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
//				break;
//				
//			case "swrepFfIaffee": 
//				document.getElementById("txtFldSwrepFfIaffee").value=col; 
//				break;
//				 
//				
//			case "createdBy": 
//				$lastRow.find("td:eq(11)").find('input:eq(1)').val(col);
//				infoDetsArr.push(col);
//				break;
//			 
//			 
//			case "createdDate": 
//				$lastRow.find("td:eq(11)").find('input:eq(2)').val(col);
//				infoDetsArr.push(col);
//				break; 
//				 
//		}			 
//		 
//	}
//	}
//
//swRplFdClearFlds();
// 
//}
//
//
// 
///*Edit Row Click */
//$("#SwrepFundERow").on("click",function(){
//	SwrepFundVRow(); 
//});
//
//
///*View Row Click */
// function SwrepFundVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#fnaSwrepFundTbl tbody tr').length;	
//	var $lastRow = $("#fnaSwrepFundTbl tbody tr:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	
//	$("#fnaSwrepFundTbl tbody tr").each(function(){
//		var $row = $(this);   
//		$row.removeClass('selected');  
//		$(this).removeAttr("style"); 
//		$row.find("td").removeAttr("style");
//	});
//	
//	
//	$("#fnaSwrepFundTbl tbody").find('input[name="radswRplFdSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#fnaSwrepFundTbl tbody").find('input[name="radswRplFdSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					});
//				 	swRplFdRdlyflds($mode);
//					swRplFdfilldlgval($row); 
//					showFIPAModel('SwtchFund_Dialog','Switching & Replacement(FUND DETAILS)');  
//					$('#SwtchFund_Dialog').on('shown.bs.modal', function () {
//						$("#SwtchFund_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#SwtchFund_Dialog").find("select[id=txtFldDlgSwrepFfProdType]").focus();
//						$("#SwtchFund_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validateswRplFdDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			swRplFdfilldomval($RowId,$row); 
//					     		}  
//								$('#SwtchFund_Dialog').modal('hide'); 
//								swRplFdClearFlds();
//							
//						});
//					});
//					 
//			}  
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
//} 
//
//
///*Delete Row Click */
//$("#SwrepFundDRow").on("click",function(){ 
//	datatableDeleteRow('fnaSwrepFundTbl',fnaSwrepFundTbl,'','',''); 
//});
//
///*Clear Fields */
//function swRplFdClearFlds(){
//	$("#SwtchFund_Dialog").find("input[type=text]").val("");
//	$("#SwtchFund_Dialog").find("textarea").val("");
//	$("#SwtchFund_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function swRplFdRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#SwtchFund_Dialog :input").prop("disabled", true); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#SwtchFund_Dialog :input").prop("disabled", false);
//	 }
//}
//
///*Validation */
//function validateswRplFdDetails(){
//	 
//	if(!(validateFocusFlds('SwtchFund_Dialog','txtFldDlgSwrepFfProdType',SWTFD_PROTYPE))) return; 
//	if(!(validateFocusFlds('SwtchFund_Dialog','txtFldDlgSwrepFfComp',SWTFD_CMPYNAME))) return;  
//	
//	  return true; 
//}
//
//function valswRplFdTbl(){ 
//	var $lastRow = $("#fnaSwrepFundTbl tbody tr:last");	
//	var $RowCount = fnaSwrepFundTbl.rows().count();
//
//	var valid=true;
//	if($RowCount > 0 ){ 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), SWTFD_PROTYPE))){valid=false;return false;};  
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), SWTFD_CMPYNAME))){valid=false;return false;}; 
//	}  
//  return valid; 
//}
//
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgSwrepFfProdType,#txtFldDlgSwrepFfComp").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
//
///* Filling Model Fields*/
//function swRplFdfilldlgval($lastRow){
//	  
//	  $('#SwtchFund_Dialog #txtFldDlgSwRepFfId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfProdType').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfComp').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfPlan').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfFundRiskRate').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfPayMode').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfSoredmUnits').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfSoredPrcnt').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfSirepsalChrg').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfSirepAmt').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfSirepPrcnt').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
//	  
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfCrtdBy').val($lastRow.find("td:eq(11)").find('input:eq(1)').val());
//	  $('#SwtchFund_Dialog #txtFldDlgSwrepFfCrtdDate').val($lastRow.find("td:eq(11)").find('input:eq(2)').val());
//	   
//}
//
///* Filling Table Fields*/
//function swRplFdfilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgSwrepFfProdType").val()); 
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSwrepFfComp").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgSwrepFfPlan").val());
//	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgSwrepFfFundRiskRate").val());  
//	$row.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgSwrepFfPayMode").val()); 
//	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSoredmUnits").val());  
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSoredPrcnt").val()); 
//	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSirepsalChrg").val()); 
//	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSirepAmt").val()); 
//	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgSwrepFfSirepPrcnt").val()); 
//}
//
// 
///*################################################################################################################################################*/
