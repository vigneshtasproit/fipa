/**
 * Fna Financial Goals Scripts
 */

/*$("#finGoalsCancelbtn").on("click",function(){
	$("#selDlgFinGoalType,#txtFldDlgFinGoal").removeClass("mandatoryFillFlds");
	$("#selDlgFinGoalType,#txtFldDlgFinGoal").qtip('disable');
	$("#selDlgFinGoalType,#txtFldDlgFinGoal").qtip('destroy',true);
   		FinGoalsRdlyflds(INS_MODE);  
	   	getFinGoalsRows(null); 
		$('#finGoals_Dialog').modal('hide'); 
});*/
/*Datatable Initialisation*/
//var finGoalsTbl = $('#finGoalsTable').DataTable( {
//	destroy: true,
// 	responsive: false,         
//    ordering: false,
//    searching: false,     
//    scrollY:  "40vh",
//    scrollX: true,
//    scroller: false,
//    scrollCollapse:false,
//    paging:false, 
//    filter:false,   
//    columnDefs: [], 
//    dom: '<<"top" ip>flt>',  
//  columnDefs: [  { width: '20px', targets: [0,1]},
//   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4],"orderable": false,"searchable": false}],		 
//
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();
	



 

/*Add Row Click */
$("#AfinGls").on("click",function(){
	//if(!valfinGlsTbl())return; 
	
			finGlsClearFlds();
		
			$("#txtFldDlgFnaGoalId").val(makeid(17));
			
			showFIPAModel('finGoals_Dialog','Financial Goals and Concerns');   
//			$("#finGoals_Dialog").find("input[id=txtFldDlgFGMode]").val("I");
			$('#finGoals_Dialog').on('shown.bs.modal', function () {
//				$("#finGoals_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#finGoals_Dialog").find("select[id=selDlgFinGoalType]").focus();
				$("#finGoals_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
					
					  if(!validateFinGoalsDetails())return;
					   	FinGoalsRdlyflds(INS_MODE);  
					   	getFinGoalsRows(null); 
						/*reOrderVisibleRows("finGoalsTable");*/
						$('#finGoals_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getFinGoalsRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldFinGoalsMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldFnaGoalId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radFinGoalsSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<select  name="selFinGoalType" class="form-control editable"  onmouseover="fipaTooltip(this);"></select>'; 
var cell3 = '<input type="text" name="txtFldFinGoal" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';
 
var cell4 ='<select name="selFinGoalPrio" class="form-control editable" ></select>'+
'<input type="hidden" name="txtFldFGCrtdBy"/><input type="hidden" name="txtFldFGCrtdDate"/>'; 


finGoalsTbl.row.add( [cell0,cell1,cell2,cell3,cell4] ).draw( false );

var rowCount = $('#finGoalsTable tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#finGoalsTable tbody tr').length : rowCount;
var $lastRow = $("#finGoalsTable tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radFinGoals"+$lastRow.index())
.parent().find('label').attr('for',"radFinGoals"+$lastRow.index());

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgFnaGoalId").val());

var goalType = $("#selDlgFinGoalType > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(goalType);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#selDlgFinGoalType").val());

$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgFinGoal").val());

var priority =  $("#selDlgFinGoalPrio > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(priority);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#selDlgFinGoalPrio").val());


$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});
$lastRow.click(function() {
    var checkbox = $(this).find("td:eq(1)").find("input");
    if(checkbox.is(":checked")) {
        checkbox.prop("checked", false);
	$lastRow.removeClass("selected");
    }else {
        checkbox.prop("checked", true);
	$lastRow.addClass("selected");
    }
});

//DHTML CRUD ICONS
$lastRow.click(function(){
	/*toggleSingleRow($lastRow);*/
	crudicons(this,'finGoalsTable','Selfingoals','EfinGls','DfinGls');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'finGoalsTable','Selfingoals','EfinGls','DfinGls');
});

if(dataset != null){

	
	rowCount = $('#finGoalsTable tbody tr').length;	
	

	$lastRow.find("td:first").find('span').text(rowCount);
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
			case "fnaGoalId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "fgType":  
				selectNullvalChk($lastRow.find("td:eq(2)"),col);
				
				break;
				
			case "finGoal": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				break;
			 
			case "fgPriority":  
				selectNullvalChk($lastRow.find("td:eq(4)"),col); 
				break;
			 
			 
			case "fgCreatedBy": 
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "fgCreatedDate": 
				$lastRow.find("td:eq(4)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "fgModifiedBy":
				infoDetsArr.push(col);
				break;
				
			case "fgModifiedDate":
				infoDetsArr.push(col);
				break;	
		}			 
		 
	}
	}
else{
	//DHTML CRUD ICONS
	crudicons(null,'finGoalsTable','Selfingoals','EfinGls','DfinGls');
}
/*	if(dataset == null){
		instantFinGoalsSave($lastRow,INS_MODE);		
	}

	$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
	$lastRow.find("select").prop("disabled",true);//instant save added line
 */
}

//DHTML SELECT ALL
function SelAllSelfingoals(obj){
	
	if($(obj).is(":checked")){
		
		$('#finGoalsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#DfinGls").attr("disabled",false);
		$('#finGoalsTable tbody tr').addClass("selected");
		
		var $rowCount = $('#finGoalsTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#EfinGls").attr("disabled",true);
			$("#DfinGls").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#EfinGls").attr("disabled",false);
			$("#DfinGls").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#EfinGls").attr("disabled",true);*/
			$("#DfinGls").attr("disabled",false);
		}
		
	}else{
		
		$('#finGoalsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#finGoalsTable tbody tr').removeClass("selected");
		
		/*$("#EfinGls").attr("disabled",true);
		$("#DfinGls").attr("disabled",true);*/
		
	}
	


}
 
/*Edit Row Click */
$("#EfinGls").on("click",function(){
	VfinGls(); 
});


/*View Row Click */
function VfinGls(){
	var isOneRowSelected=0;
	var $rowCount = $('#finGoalsTable tbody tr').length;	
	var $lastRow = $("#finGoalsTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	/*$("#finGoalsTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	$("#finGoalsTable tbody").find('input[name="radFinGoalsSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#finGoalsTable tbody").find('input[name="radFinGoalsSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				
				$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'});
				});  
				 
				 	FinGoalsRdlyflds($mode);
					finGoalsfilldlgval($row); 
					showFIPAModel('finGoals_Dialog','Financial Goals and Concerns'); 
					$("#finGoals_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
					
					$('#finGoals_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//					$row.find("select").prop("disabled",true);//instant save added line
					
//						$("#finGoals_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#finGoals_Dialog").find("select[id=selDlgFinGoalType]").focus(); 
						$("#finGoals_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateFinGoalsDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			finGoalsfilldomval($RowId,$row); 
					     		}  
					  //   		instantFinGoalsSave($row,UPD_MODE); 
								$('#finGoals_Dialog').modal('hide'); 
								finGlsClearFlds();
								
								crudicons(null,'finGoalsTable','Selfingoals','EfinGls','DfinGls');
							
						});
						
						$("#finGoals_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'finGoalsTable','Selfingoals','EfinGls','DfinGls');
						})
					});
					 
			}  
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	} 
	
}


/*Delete Row Click */
$("#DfinGls").on("click",function(){  
	
//	DHTML CRUD ICONS
	
	datatableDeleteRow('finGoalsTable',finGoalsTbl,'Selfingoals','EfinGls','DfinGls'); 
	/*crudicons(null,'finGoalsTable','Selfingoals','EfinGls','DfinGls');*/
//	DHTML CRUD ICONS
	
});

/*Clear Fields */
function finGlsClearFlds(){
	$("#finGoals_Dialog").find("input[type=text]").val("");
	$("#finGoals_Dialog").find("textarea").val("");
	$("#finGoals_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function FinGoalsRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#finGoals_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#finGoals_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateFinGoalsDetails(){
	 
	/*if(!(validateFocusFlds('finGoals_Dialog','selDlgFinGoalType',FINTYPE_GOALS))) return;  
	if(!(validateFocusFlds('finGoals_Dialog','txtFldDlgFinGoal',FIN_GOALS))) return;*/
	  return true; 
}


function valfinGlsTbl(){ 
//	var $lastRow = $("#finGoalsTable tbody tr:last");	
	var $RowCount = finGoalsTbl.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#finGoalsTable tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), FINTYPE_GOALS,SCREEN_FINGOAL))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), FIN_GOALS,SCREEN_FINGOAL))){valid=false;return false;}; 
		 
		});
	}*/
	 return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#selDlgFinGoalType,#txtFldDlgFinGoal").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 

 
/* Filling Model Fields*/
function finGoalsfilldlgval($lastRow){
	  
//	  $('#finGoals_Dialog #txtFldDlgFGMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());
	  $('#finGoals_Dialog #txtFldDlgFnaGoalId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#finGoals_Dialog #selDlgFinGoalType').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  $('#finGoals_Dialog #txtFldDlgFinGoal').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#finGoals_Dialog #selDlgFinGoalPrio').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#finGoals_Dialog #txtFldDlgFGCrtdBy').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#finGoals_Dialog #txtFldDlgFGCrtdDate').val($lastRow.find("td:eq(4)").find('input:eq(1)').val());
	
}

/* Filling Table Fields*/
function finGoalsfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('select:eq(0)').val($("#selDlgFinGoalType").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgFinGoal").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgFinGoalPrio").val()); 
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

		
}

$("#finGoals_Dialog").find("input,select,textarea").on("change",function(){
	$("#finGoals_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});
 
