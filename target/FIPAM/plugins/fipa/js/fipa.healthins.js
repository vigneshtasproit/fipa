//
//
///*Datatable Initialisation*/
//var fnahlthinsTbl = $('#fnahlthinsTbl').DataTable( {
//   destroy: true,
//   responsive: false,         
//   ordering: false,
//   sehlthhing: false,     
//   scrollY:  "40vh",
//   scrollX: true,
//   scroller: false,
//   scrollCollapse:false,
//   paging:false, 
//   filter:false,   
//   columnDefs: [], 
//   dom: '<<"top" ip>flt>',  
//   columnDefs: [  { width: '20px', targets: [0,1]},
//  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8],"orderable": false,"sehlthhable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//   
//		 }, 
//}).draw();
//	
//
//
//
///*Add Row Click */
//$("#HlthARow").on("click",function(){
//	if(!valhlthGlsTbl())return; 
//			hlthClearFlds();
//			showFIPAModel('HInsc_Dialog','Information On Health Insurance');   
//			$('#HInsc_Dialog').on('shown.bs.modal', function () {
//				$("#HInsc_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#HInsc_Dialog").find("input[id=txtFldDlgHIPolicyType]").focus(); 
//				$("#HInsc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validatehlthDetails())return;
//					   	hlthRdlyflds(INS_MODE);  
//					   	getHealthInscRows(null); 
//						$('#HInsc_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
///*Populate Data */
//function getHealthInscRows(dataset){ 
//
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldhlthMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldHInsId">';
//
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radhlthSelect"/><label>&nbsp;</label></div>'; 
// 
//var cell2 = '<input type="text" name="txtFldHIPolicyType" class="form-control editable"  maxlength="75"  onmouseover="fipaTooltip(this);" />';
//
//var cell3 = '<input type="text" name="txtFldHIInsured" class="form-control editable"   maxlength="60"  onmouseover="fipaTooltip(this);" />';
//
//var cell4 = '<input type="text" name="txtFldHIBenfType" class="form-control editable" maxlength="150" onmouseover="fipaTooltip(this);" />'; 
//
//var cell5 = '<input type="text" name="txtFldHIAmt" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
//
//var cell6 = '<input type="text" name="txtFldHIExpiry" class="form-control editable" maxlength="10" onmouseover="fipaTooltip(this);" />';
//
//var cell7 = '<input type="text" name="txtFldHIAnnprem" class="form-control editable" onmouseover="fipaTooltip(this);" />';
//
//var cell8 = '<input type="text" name="txtFldHIRmrks" class="form-control editable"   onmouseover="fipaTooltip(this);" />'+
//	'<input type="hidden" name="txtFldHICrtdBy"/><input type="hidden" name="txtFldHICrtdDate"/>';
//
//
//
//fnahlthinsTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8] ).draw( false );
//
//var rowCount = $('#fnahlthinsTbl tbody tr').length;	
//var $lastRow = $("#fnahlthinsTbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radhlth"+$lastRow.index())
//.parent().find('label').attr('for',"radhlth"+$lastRow.index());
//
//$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgHIPolicyType").val());
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgHIInsured").val());
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgHIBenfType").val());
//
//$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgHIAmt").val());
//$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
//
//$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgHIExpiry").val());
//$lastRow.find("td:eq(6)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
//	 checkDateFormat($(this));   
//});
//
//$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgHIAnnprem").val());
//$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntUsd");
//
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgHIRmrks").val());
//
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
//		case "hiId": 
//			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
//			break;
//			
//		case "hiPolicytype": 
//			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
//			
//			break;
//			
//		case "hiInsured": 
//			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
//			break;
//		  
//		case "hiBenftype": 
//			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
//			break;
//			
//		case "hiAmount": 
//			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 		
//			break;
//		
//		case "hiExpiry": 
//			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
//			break;
//		
//		case "hiAnnprem": 
//			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
//			break;
//			
//		case "hiRemarks":
//			$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
//			break;
//			 
//		case "hiCreatedBy": 
//			$lastRow.find("td:eq(8)").find('input:eq(1)').val(col);
//			infoDetsArr.push(col);				
//			break;
//			
//		case "hiCreatedDate":
//			$lastRow.find("td:eq(8)").find('input:eq(2)').val(col);
//			infoDetsArr.push(col);
//			break;
//			
//		case "hiModifiedBy":
//			infoDetsArr.push(col);
//			break;
//			
//		case "hiModifiedDate":
//			infoDetsArr.push(col);
//			break;	
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
//$("#HlthERow").on("click",function(){
//	$("#HlthVRow").click();
////	var isOneRowSelected=false;
////	$("#fnahlthinsTbl tbody").find('input[name="radhlthSelect"]').each(function(){ 
////		if($(this).is(":checked")){ 
////			var $row = $(this).parents("tr"); 
////			var $mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val(); 
////			
////			 
////			if($mode == INS_MODE){ 
////				$(this).parents("tr").find("td:first").find('input:eq(0)').val($mode); 
////				$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
////					$(this).attr("disabled",false); 
////					$row.removeClass('selected');  
////					$(this).parent().css({border:'1px solid green'});
////					$row.css({border:'1px solid green'});
////					$row.find("td").css({border:'1px solid green'});
////				});  
////			}
////			
////			$(this).attr("checked",false);
////			isOneRowSelected=true;
////		}
////	});	    
////	if(!isOneRowSelected){
////		applyToastrAlert("No Rows Selected");
////	}
//});
//
//
///*View Row Click */
//$("#HlthVRow").on("click",function(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#fnahlthinsTbl tbody tr').length;	
//	var $lastRow = $("#fnahlthinsTbl tbody tr:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	$("#fnahlthinsTbl tbody").find('input[name="radhlthSelect"]').each(function(){ //Checkbox selection
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
//	$("#fnahlthinsTbl tbody").find('input[name="radhlthSelect"]').each(function(){ //Checkbox selection
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
//				 	hlthRdlyflds($mode);
//					hlthfilldlgval($row); 
//					showFIPAModel('HInsc_Dialog','Information On Health Insurance');  
//					$('#HInsc_Dialog').on('shown.bs.modal', function () {
//						$("#HInsc_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#HInsc_Dialog").find("input[id=txtFldDlgHIPolicyType]").focus(); 
//						$("#HInsc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatehlthDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			hlthfilldomval($RowId,$row); 
//					     		}  
//					     		 
//								$('#HInsc_Dialog').modal('hide'); 
//								hlthClearFlds();
//							
//						});
//					});
//					 
//			}  
//		
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
//});
//
//
///*Delete Row Click */
//$("#HlthDRow").on("click",function(){ 
//	datatableDeleteRow('fnahlthinsTbl',fnahlthinsTbl); 
// 
//
//});
//
///*Clear Fields */
//function hlthClearFlds(){
//	$("#HInsc_Dialog").find("input[type=text]").val("");
//	$("#HInsc_Dialog").find("textarea").val("");
//	$("#HInsc_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function hlthRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#HInsc_Dialog :input").prop("disabled", true); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#HInsc_Dialog :input").prop("disabled", false);
//	 }
//}
//
///*Validation */
//function validatehlthDetails(){
//	 
//	if(!(validateFocusFlds('HInsc_Dialog','txtFldDlgHIPolicyType',POLICY_TYPE))) return;  
//	if(!(validateFocusFlds('HInsc_Dialog','txtFldDlgHIInsured',INSURED))) return;  
//	if(!(validateFocusFlds('HInsc_Dialog','txtFldDlgHIBenfType',BENIFIT_TYPE))) return;  
//	 
//		  
//	  return true; 
//}
//
//function valhlthGlsTbl(){ 
////	var $lastRow = $("#fnahlthinsTbl tbody tr:last");	
//	var $RowCount = fnahlthinsTbl.rows().count();
//
//	var valid=true;
//	if($RowCount > 0 ){ 
//		$("#fnahlthinsTbl tbody tr").each(function(){
//			var $lastRow=$(this);
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), POLICY_TYPE))){valid=false;return false;}; 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), INSURED))){valid=false;return false;}; 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), BENIFIT_TYPE))){valid=false;return false;};
//		 
//		});
//	}  
//	return valid;
//}
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgHIPolicyType,#txtFldDlgHIInsured,#txtFldDlgHIBenfType").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
// 
//
//
///* Filling Model Fields*/
//function hlthfilldlgval($lastRow){
//	  
//	 
//	  $('#HInsc_Dialog #txtFldDlgHInsId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  $('#HInsc_Dialog #txtFldDlgHIPolicyType').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
//	  $('#HInsc_Dialog #txtFldDlgHIInsured').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#HInsc_Dialog #txtFldDlgHIBenfType').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#HInsc_Dialog #txtFldDlgHIAmt').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//	  $('#HInsc_Dialog #txtFldDlgHIExpiry').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//	  $('#HInsc_Dialog #txtFldDlgHIAnnprem').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
//	  $('#HInsc_Dialog #txtFldDlgHIRmrks').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#HInsc_Dialog #txtFldDlgHICrtdBy').val($lastRow.find("td:eq(8)").find('input:eq(1)').val());
//	  $('#HInsc_Dialog #txtFldDlgHICrtdDate').val($lastRow.find("td:eq(8)").find('input:eq(2)').val());
//}
//
///* Filling Table Fields*/
//function hlthfilldomval($RowId,$row){
//	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgHIPolicyType").val()); 
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgHIInsured").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgHIBenfType").val()); 
//	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgHIAmt").val()); 
//	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgHIExpiry").val()); 
//	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgHIAnnprem").val()); 
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgHIRmrks").val()); 	 
//		
//}
///*###########################################################################################################################################################*/
//function enableInsPolTxtArea(sel,elmid){
//	if(!isEmpty(sel)){
//		if(sel.value == 'Y'){
//			showAlert(EN_INT_POL_REMARKS,elmid);
//			elmid.removeAttribute('readonly'); 
//		}
//	 }
//	}
//
//
//
//
