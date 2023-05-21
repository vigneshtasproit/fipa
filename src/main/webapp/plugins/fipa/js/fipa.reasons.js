//
//
///*Datatable Initialisation*/
////var clntReasnsTable = $('#clntReasnsTable').DataTable( {
////   destroy: true,
////   responsive: false,         
////   ordering: false,
////   sereasnhing: false,     
////   scrollY:  "40vh",
////   scrollX: true,
////   scroller: false,
////   scrollCollapse:false,
////   paging:false, 
////   filter:false,   
////   columnDefs: [], 
////   dom: '<<"top" ip>flt>',  
////   columnDefs: [  { width: '20px', targets: [0,1]},
////  	             {"className": "dt-head-center text-center",targets: [0,1,2],"orderable": false,"sereasnhable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////   
////		 }, 
////}).draw();
//
//
///*Add Row Click */
//$("#rsnARow").on("click",function(){
//	if(!valreasnTbl())return; 
//			reasnClearFlds();
//			showFIPAModel('reasonsrecm_Dialog','Reasons for Recommendation');   
//			$('#reasonsrecm_Dialog').on('shown.bs.modal', function () {
//				$("#reasonsrecm_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#reasonsrecm_Dialog").find("textarea[id=txtFldDlgReasons]").focus();//Aravindh
//				$("#reasonsrecm_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validatereasnDetails())return;
//					   	reasnRdlyflds(INS_MODE);  
//					   	getReasonsRows(null); 
//						$('#reasonsrecm_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
///*Populate Data */
//function getReasonsRows(dataset){ 
//
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldreasnMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldFnaReasId">';
//
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radreasnSelect"/><label>&nbsp;</label></div>'; 
//
//var cell2 ='<input type="text" name="txtFldReasons" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="500"/>'+
//'<input type="hidden" name="txtFldRecCrtdBy"/><input type="hidden" name="txtFldRecCrtdDate"/>';
//
//clntReasnsTable.row.add( [cell0,cell1,cell2] ).draw( false );
//
//var rowCount = $('#clntReasnsTable tbody tr').length;	
//var $lastRow = $("#clntReasnsTable tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radreasn"+$lastRow.index())
//.parent().find('label').attr('for',"radreasn"+$lastRow.index());
//
//$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgReasons").val());
//
//
//applyEventHandlers();
//
//
//$lastRow.find("input,select").on("click",function(event){
//	event.stopPropagation();
//});
//$lastRow.click(function() {
//    var checkbox = $(this).find("td:eq(1)").find("input");
//    if(checkbox.is(":checked")) {
//        checkbox.prop("checked", false);
//	$lastRow.removeClass("selected");
//    }else {
//        checkbox.prop("checked", true);
//	$lastRow.addClass("selected");
//    }
//});
//
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
//		case "fnaReasId":
//			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
//			break;
//			
//		case "reasons":
//			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
//			break;
//		 
//		case "recCreatedBy":
//			$lastRow.find("td:eq(2)").find('input:eq(1)').val(col);
//			infoDetsArr.push(col);				
//			break;
//			
//		case "recCreatedDate":
//			$lastRow.find("td:eq(2)").find('input:eq(2)').val(col);
//			infoDetsArr.push(col);
//			break;
//			
//		case "recModifiedBy":
//			infoDetsArr.push(col);
//			break;
//			
//		case "recModifiedDate":
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
//$("#rsnERow").on("click",function(){
//	rsnVRow(); 
//});
//
//
///*View Row Click */
//function rsnVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#clntReasnsTable tbody tr').length;	
//	var $lastRow = $("#clntReasnsTable tbody tr:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	
//	
//	$("#clntReasnsTable tbody tr").each(function(){
//		var $row = $(this);   
//		$row.removeClass('selected');  
//		$(this).removeAttr("style"); 
//		$row.find("td").removeAttr("style");
//	});
//	
//	
//	$("#clntReasnsTable tbody").find('input[name="radreasnSelect"]').each(function(){ //Checkbox selection
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
//	$("#clntReasnsTable tbody").find('input[name="radreasnSelect"]').each(function(){ //Checkbox selection
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
//				 	reasnRdlyflds($mode);
//					reasnfilldlgval($row); 
//					showFIPAModel('reasonsrecm_Dialog','Reasons for Recommendation');  
//					$('#reasonsrecm_Dialog').on('shown.bs.modal', function () {
//						$("#reasonsrecm_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#reasonsrecm_Dialog").find("textarea[id=txtFldDlgReasons]").focus();//Aravindh
//						$("#reasonsrecm_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatereasnDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			reasnfilldomval($RowId,$row); 
//					     		}  
//					     		 
//								$('#reasonsrecm_Dialog').modal('hide'); 
//								reasnClearFlds();
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
//$("#rsnDRow").on("click",function(){ 
//	 	datatableDeleteRow('clntReasnsTable',clntReasnsTable,'','','');  
//});
//
///*Clear Fields */
//function reasnClearFlds(){
//	$("#reasonsrecm_Dialog").find("input[type=text]").val("");
//	$("#reasonsrecm_Dialog").find("textarea").val("");
//	$("#reasonsrecm_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function reasnRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#reasonsrecm_Dialog :input").prop("disabled", true); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#reasonsrecm_Dialog :input").prop("disabled", false);
//	 }
//}
//
///*Validation */
//function validatereasnDetails(){
//	 
//	if(!(validateFocusFlds('reasonsrecm_Dialog','txtFldDlgReasons',RSONFRRECOM))) return;   
//		  
//	  return true; 
//}
//function valreasnTbl(){ 
////	var $lastRow = $("#clntReasnsTable tbody tr:last");	
//	var $RowCount = clntReasnsTable.rows().count();
//
//	var valid=true;
//	if($RowCount > 0 ){ 
//		$("#clntReasnsTable tbody tr").each(function(){
//			var $lastRow=$(this);
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), RSONFRRECOM))) {valid=false;return false;};
//		 
//		});
//	}  
//	 return valid;
//}
//
//
//
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgReasons").on("change",function(){
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
//function reasnfilldlgval($lastRow){
//	  
//	  $('#reasonsrecm_Dialog #txtFldDlgFnaReasId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  $('#reasonsrecm_Dialog #txtFldDlgReasons').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());  
//	  $('#reasonsrecm_Dialog #txtFldDlgRecCrtdBy').val($lastRow.find("td:eq(2)").find('input:eq(1)').val());
//	  $('#reasonsrecm_Dialog #txtFldDlgRecCrtdDate').val($lastRow.find("td:eq(2)").find('input:eq(2)').val());
//	   
//}
//
///* Filling Table Fields*/
//function reasnfilldomval($RowId,$row){
//	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgReasons").val()); 
//		
//}
///*###########################################################################################################################################################*/
//
