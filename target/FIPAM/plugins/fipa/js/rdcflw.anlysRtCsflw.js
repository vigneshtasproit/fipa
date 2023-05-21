/**
 * 
 */

/*Datatable Initialisation*/
//var RDAnalysFlowtbl = $('#RDAnalysFlowtbl').DataTable({
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
//   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();





/*Add Row Click */
$("#RDAnlyFlwAddRow").on("click",function(){
	
			RDAnlyFlwClearFlds();
			showFIPAModel('RDAnalysFlw_Dialog','Add New Plan');   
			$('#RDAnalysFlw_Dialog').on('shown.bs.modal', function () {
//				$("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#RDAnalysFlw_Dialog").find("input[id=txtFldDlgRDAlyFwDesc]").focus();
				$("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatRDAnlyFlwDetails())return;
					   	RDAnlyFlwRdlyflds(INS_MODE);  
					   	getRDAnlyFlwRows(null); 
						$('#RDAnalysFlw_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getRDAnlyFlwRows(dataset){
	
	
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFlRDAnlyFlwMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldAnlyFlwId">';
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radRDAnlyFlwSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<input type="text" name="txtFldAnlyFlwdesc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell3 = '<input type="text" name="txtFldAnlyFlwClsfy" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell4 = '<select type="text" name="selAnlyFlwSrcOfFd" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
var cell5 = '<input type="text" name="txtFldAnlyFlwFdsAdded" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell6 = '<input type="text" name="txtFldAnlyFlwIncome" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell7 = '<input type="text" name="txtFldAnlyFlwYrStFrmRet" class="form-control editable"  onmouseover="fipaTooltip(this);" />';
var cell8 = '<input type="text" name="txtFldAnlyFlwStartAge" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell9 = '<input type="text" name="txtFldAnlyFlwNoofyrs" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell10 ='<input type="text" name="txtFldAnlyFlwIntRate" class="form-control editable"  onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldAnlyFlwCrtdBy"/><input type="hidden" name="txtFldAnlyFlwCrtdDate"/>'; 


RDAnalysFlowtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

var rowCount = $('#RDAnalysFlowtbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#RDAnalysFlowtbl tbody tr').length : rowCount;
var $lastRow = $("#RDAnalysFlowtbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"raRDAnlyFlw"+$lastRow.index())
.parent().find('label').attr('for',"radRDAnlyFlw"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgRDAlyFwDesc").val()); 
$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRDAlyFwClsfy").val()); 

var srcfd = $("#selDlgSrcOfFd > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(srcfd);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#selDlgSrcOfFd").val()); 

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgFdsAdded").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgIncome").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");

$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgYrStartFrmRet").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");


$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgStartAge").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntYrs");


$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#selDlgNoOfYrs").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");

$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgIntrstRate").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntpCent3");

 
applyEventHandlers(); 



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




if(dataset != null){

	rowCount = $('#RDAnalysFlowtbl tbody tr').length;	
	

	$lastRow.find("td:first").find('span').text(rowCount); 
	
	if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
			$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
	}
	
			var infoDetsArr = new Array();
			
			for(var data in dataset){
			var col = dataset[data];
			
			switch(data){
			
			case "txtFldAnlyFlwId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "txtFldAnlyFlwdesc": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				break;
				
			case "txtFldAnlyFlwClsfy": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				break;
				
			case "selAnlyFlwSrcOfFd":
				selectNullvalChk($lastRow.find("td:eq(4)"),col);   
				break;
			 
			case "txtFldAnlyFlwFdsAdded": 
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
				break;
			 
			case "txtFldAnlyFlwIncome": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
				break;
			 
			 
			case "txtFldAnlyFlwYrStFrmRet": 
				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col);
				break; 
			 
			case "txtFldAnlyFlwStartAge": 
				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
				break;
			 
			 
			case "txtFldAnlyFlwNoofyrs": 
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
				break;
				
			case "txtFldAnlyFlwIntRate": 
				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
				break;
			  
			case "txtFldAnlyFlwCrtdBy": 
				$lastRow.find("td:eq(10)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "txtFldAnlyFlwCrtdDate":
				$lastRow.find("td:eq(10)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "txtFldAnlyFlwModBy":
				infoDetsArr.push(col);
				break;
				
			case "txtFldAnlyFlwModDate":
				infoDetsArr.push(col);
				break;	
			}			 
			 
			}
}	  

}


/*Edit Row Click */
$("#RDAnlyFlwEditRow").on("click",function(){ 
	var isOneRowSelected=0;
	var $rowCount = $('#RDAnalysFlowtbl tbody tr').length;	
	var $lastRow = $("#RDAnalysFlowtbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDAnalysFlowtbl tbody").find('input[name="radRDAnlyFlwSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDAnalysFlowtbl tbody").find('input[name="radRDAnlyFlwSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDAnlyFlwRdlyflds($mode);
					RDAnlyFlwfilldlgval($row); 
				    showFIPAModel('RDAnalysFlw_Dialog','Add New Plan');  
				    $("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#RDAnalysFlw_Dialog').on('shown.bs.modal', function () {
//						$("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#RDAnalysFlw_Dialog").find("input[id=txtFldDlgRDAlyFwDesc]").focus();
						$("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 	if(!validatRDAnlyFlwDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDAnlyFlwfilldomval($RowId,$row); 
					     		}					     		 
								$('#RDAnalysFlw_Dialog').modal('hide'); 
								RDAnlyFlwClearFlds();
								
						   });
					});
					 
			}  
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

});


/*View Row Click */
$("#RDAnlyFlwViewRow").on("click",function(){
	var isOneRowSelected=0;
	var $rowCount = $('#RDAnalysFlowtbl tbody tr').length;	
	var $lastRow = $("#RDAnalysFlowtbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDAnalysFlowtbl tbody").find('input[name="radRDAnlyFlwSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDAnalysFlowtbl tbody").find('input[name="radRDAnlyFlwSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 	$curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDAnlyFlwRdlyflds($mode);
					RDAnlyFlwfilldlgval($row); 
					
					showFIPAModel('RDAnalysFlw_Dialog','Add New Plan');  
					  $("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
						
						$('#RDAnalysFlw_Dialog').on('shown.bs.modal', function () {
//						$("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#RDAnalysFlw_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatRDAnlyFlwDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDAnlyFlwfilldomval($RowId,$row); 
					     		}  
 
								$('#RDAnalysFlw_Dialog').modal('hide'); 
								RDAnlyFlwClearFlds();
							
						});
					});
					 
			}  
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
});


/*Delete Row Click */
$("#RDAnlyFlwDelRow").on("click",function(){ 
	 			datatableDeleteRow('RDAnalysFlowtbl',RDAnalysFlowtbl,'','','');
		 
});

/*Clear Fields */
function RDAnlyFlwClearFlds(){
	$("#RDAnalysFlw_Dialog").find("input[type=text]").val("");
	$("#RDAnalysFlw_Dialog").find("textarea").val("");
	$("#RDAnalysFlw_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function RDAnlyFlwRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#RDAnalysFlw_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#RDAnalysFlw_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatRDAnlyFlwDetails(){
	 
	if(!(validateFocusFlds('RDAnalysFlw_Dialog','txtFldDlgRDAlyFwDesc',ANLYS_DESC))) return; 
	if(!(validateFocusFlds('RDAnalysFlw_Dialog','txtFldDlgRDAlyFwClsfy',ANLYS_CLSFY))) return; 
	if(!(validateFocusFlds('RDAnalysFlw_Dialog','selDlgSrcOfFd', ANLYS_SRFDFLW))) return;  
	  return true; 
}



/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgRDAlyFwDesc,#txtFldDlgRDAlyFwClsfy,#selDlgSrcOfFd").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  

/* Filling Model Fields*/
function RDAnlyFlwfilldlgval($lastRow){
	  
	  $('#ProjOfExp_Dialog #txtFldDlgAlyRtFlwId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgRDAlyFwDesc').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgRDAlyFwClsfy').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #selDlgSrcOfFd').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgFdsAdded').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgIncome').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgYrStartFrmRet').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgStartAge').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #selDlgNoOfYrs').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgIntrstRate').val($lastRow.find("td:eq(10)").find('input:eq(0)').val()); 
	
}

/* Filling Table Fields*/
function RDAnlyFlwfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgRDAlyFwDesc").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRDAlyFwClsfy").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgSrcOfFd").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgFdsAdded").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgIncome").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgYrStartFrmRet").val()); 
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgStartAge").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#selDlgNoOfYrs").val()); 
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgIntrstRate").val()); 
		
}
