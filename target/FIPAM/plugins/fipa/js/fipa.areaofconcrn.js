

/*Datatable Initialisation*/
//var othareaofconTbl = $('#othareaofconTbl').DataTable( {
//   destroy: true,
//   responsive: false,         
//   ordering: false,
//   searching: false,     
//   scrollY:  "40vh",
//   scrollX: true,
//   scroller: false,
//   scrollCollapse:false,
//   paging:false, 
//   filter:false,   
//   columnDefs: [], 
//   dom: '<<"top" ip>flt>',  
//   columnDefs: [  { width: '20px', targets: [0,1]},
//  	             {"className": "dt-head-center text-center",targets: [0,1,2],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//   
//		 }, 
//}).draw();
	


/*$("#otherAreaofConCancelbtn").on("click",function(){
	$("#txtFldDlgOthAreaConcern").removeClass("mandatoryFillFlds");
	$("#txtFldDlgOthAreaConcern").qtip('disable');
	$("#txtFldDlgOthAreaConcern").qtip('destroy',true);
	arcRdlyflds(INS_MODE);  
   	getAreaConRows(null); 
	$('#othareaofcon_Dialog').modal('hide'); 
});*/
/*Add Row Click */
$("#ArCARow").on("click",function(){
		//if(!valarcTbl())return; 
			arcClearFlds();
			
			$("#txtFldDlgFnaOacId").val(makeid(17));
			
			showFIPAModel('othareaofcon_Dialog','Other Area Of Concerns');   
//			$("#othareaofcon_Dialog").find("input[id=txtFldDlgFnaOacMode]").val("I");//instant save added line
			$('#othareaofcon_Dialog').on('shown.bs.modal', function () {
//				$("#othareaofcon_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#othareaofcon_Dialog").find("textarea[id=txtFldDlgOthAreaConcern]").focus();
				$("#othareaofcon_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatearcDetails())return;
					   	arcRdlyflds(INS_MODE);  
					   	getAreaConRows(null); 
						$('#othareaofcon_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getAreaConRows(dataset){ 

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldarcMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldFnaOacId">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radarcSelect"/><label>&nbsp;</label></div>'; 

var cell2 ='<input type="text" name="txtFldOthAreaConcern" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="500"/>'+
'<input type="hidden" name="txtFldFgCrtdBy"/><input type="hidden" name="txtFldFgCrtdDate"/>'; 


othareaofconTbl.row.add( [cell0,cell1,cell2] ).draw( false );

var $lastRow = $("#othareaofconTbl tbody tr:last");	
var rowCount = $('#othareaofconTbl tbody tr:visible').length;
rowCount =  (rowCount == 0) ? $('#othareaofconTbl tbody tr').length : rowCount;

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radarc"+$lastRow.index())
.parent().find('label').attr('for',"radarc"+$lastRow.index());

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgFnaOacId").val());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgOthAreaConcern").val());

 

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


//DHTML CRUD ICONS
$lastRow.click(function(){
	/*toggleSingleRow($lastRow);*/
	crudicons(this,'othareaofconTbl','Selothareaofcon','ArCERow','ArCDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'othareaofconTbl','Selothareaofcon','ArCERow','ArCDRow');
});

if(dataset != null){

	 rowCount = $('#othareaofconTbl tbody tr').length;	
	 $lastRow.find("td:first").find('span').text(rowCount); 
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "fnaOacId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "othAreaConcern": 
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
			
			break;
			 
		case "fgCreatedBy": 
			$lastRow.find("td:eq(2)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "fgCreatedDate":
			$lastRow.find("td:eq(2)").find('input:eq(2)').val(col);
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

//	DHTML CRUD ICONS
	crudicons(null,'othareaofconTbl','Selothareaofcon','ArCERow','ArCDRow');
}
/*
//instant save added line
if(dataset == null){
	instantArOfConSave($lastRow,INS_MODE);		
}
//
$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
 
}

//DHTML SELECT ALL
function SelAllothareaofcon(obj){
	
	if($(obj).is(":checked")){
		
		$('#othareaofconTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#ArCDRow").attr("disabled",false);
		$('#othareaofconTbl tbody tr').addClass("selected");
		
		var $rowCount = $('#othareaofconTbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#ArCERow").attr("disabled",true);
			$("#ArCDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#ArCERow").attr("disabled",false);
			$("#ArCDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#ArCERow").attr("disabled",true);*/
			$("#ArCDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#othareaofconTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#othareaofconTbl tbody tr').removeClass("selected");
		
		/*$("#ArCERow").attr("disabled",true);
		$("#ArCDRow").attr("disabled",true);*/
		
	}
}

/*Edit Row Click */
$("#ArCERow").on("click",function(){
	ArCVRow(); 
});


/*View Row Click */
 function ArCVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#othareaofconTbl tbody tr').length;	
	var $lastRow = $("#othareaofconTbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	/*$("#othareaofconTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});*/
	
	
	$("#othareaofconTbl tbody").find('input[name="radarcSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#othareaofconTbl tbody").find('input[name="radarcSelect"]').each(function(){ //Checkbox selection
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
				 	arcRdlyflds($mode);
					arcfilldlgval($row); 
					showFIPAModel('othareaofcon_Dialog','Other Area Of Concerns');  
					$("#othareaofcon_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					$('#othareaofcon_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line
//						$("#othareaofcon_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#othareaofcon_Dialog").find("textarea[id=txtFldDlgOthAreaConcern]").focus(); 
						$("#othareaofcon_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatearcDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			arcfilldomval($RowId,$row); 
					     		}  
//					     		instantArOfConSave($row,UPD_MODE); //instant save added line
					     		arcClearFlds();
								$('#othareaofcon_Dialog').modal('hide'); 
								crudicons(null,'othareaofconTbl','Selothareaofcon','ArCERow','ArCDRow');
							
						});
						$("#othareaofcon_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							crudicons(null,'othareaofconTbl','Selothareaofcon','ArCERow','ArCDRow');
						});
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
$("#ArCDRow").on("click",function(){ 
	 	datatableDeleteRow('othareaofconTbl',othareaofconTbl,'Selothareaofcon','ArCERow','ArCDRow');  
/*//		DHTML CRUD ICONS
		var rc = othareaofconTbl.row().count();
		if(rc ==0){
			$("#Selothareaofcon").prop("checked",false);
			crudicons(this,'othareaofconTbl','Selothareaofcon','ArCERow','ArCDRow');
		}
//		DHTML CRUD ICONS
*/});

/*Clear Fields */
function arcClearFlds(){
	$("#othareaofcon_Dialog").find("input[type=text]").val("");
	$("#othareaofcon_Dialog").find("textarea").val("");
	$("#othareaofcon_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function arcRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#othareaofcon_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#othareaofcon_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatearcDetails(){
	 
	/*if(!(validateFocusFlds('othareaofcon_Dialog','txtFldDlgOthAreaConcern',OTHAREAOFCRN))) return; */
	 
		  
	  return true; 
}
function valarcTbl(){  
	var $RowCount = othareaofconTbl.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#othareaofconTbl tbody tr").each(function(){
			var $lastRow=$(this); 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), OTHAREAOFCRN,SCREEN_OTHAREA))){valid=false;return false;}; 
		 
		});
	}*/  
	return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgOthAreaConcern").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 

/* Filling Model Fields*/
function arcfilldlgval($lastRow){
//	  $('#othareaofcon_Dialog #txtFldDlgFnaOacMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#othareaofcon_Dialog #txtFldDlgFnaOacId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#othareaofcon_Dialog #txtFldDlgOthAreaConcern').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());  
	  $('#othareaofcon_Dialog #txtFldDlgFgCrtdBy').val($lastRow.find("td:eq(2)").find('input:eq(1)').val());
	  $('#othareaofcon_Dialog #txtFldDlgFgCrtdDate').val($lastRow.find("td:eq(2)").find('input:eq(2)').val());
}

/* Filling Table Fields*/
function arcfilldomval($RowId,$row){
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgOthAreaConcern").val()); 
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line
}


//instant save added line
$("#othareaofcon_Dialog").find("input,select,textarea").on("change",function(){
	$("#othareaofcon_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

/*###########################################################################################################################################################*/

