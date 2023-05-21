
/**
 * Wealth Accumulation 
 */

/*Datatable Initialisation*/
//var wealthAccmltTable = $('#wealthAccmltTable').DataTable( {
//	destroy: true,
// 	responsive: false,         
//    ordering: false,
//    searching: false,     
//    scrollY:  "auto",
//    scrollX: true,
//    scroller: false,
//    scrollCollapse:false,
//    paging:false, 
//    filter:false,   
////    columnDefs: [], 
//    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]}
////   	             ],//{"className": "dt-head-center text-center",targets: [2,3,4,5,6],"orderable": false,"searchable": false}		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();
	
/*$("#wealthAccCancelbtn").on("click",function(){
	$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").removeClass("mandatoryFillFlds");
	$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").qtip('disable');
	$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").qtip('destroy',true);
	wlthaccRdlyflds(INS_MODE);  
   	getwlthaccRows(null); 
	$('#svinvst_Dialog').modal('hide'); 
});*/



  

/*Add Row Click */
$("#WAcARow").on("click",function(){
	//if(!valwlthaccTbl())return; 
			wlthaccClearFlds();
			$("#txtFldDlgSAInvId").val(makeid(17));
			showFIPAModel('svinvst_Dialog','Wealth Accumulation Goals');  
	//		$("#svinvst_Dialog").find("input[id=txtFldDlgSAMode]").val("I");//instant save added line
			$('#svinvst_Dialog').on('shown.bs.modal', function () {
//				$("#svinvst_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#svinvst_Dialog").find("textarea[id=txtFldDlgSAPurpose]").focus(); 
				$("#svinvst_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatewlthaccDetails())return;
					   	wlthaccRdlyflds(INS_MODE);  
					   	getwlthaccRows(null); 
						$('#svinvst_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getwlthaccRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldwlthaccMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldSAInvId">';
//<!--changes done 19/06/2019 -->
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radwlthaccSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<input type="text" name="txtFldSAPurpose" class="form-control editable" onmouseover="fipaTooltip(this);" maxlength="300"/>'; 
var cell3 = '<input type="text" name="txtFldSAWhen" class="form-control editable" onmouseover="fipaTooltip(this);" style="width:60px"/>';
var cell4 = '<input type="text" name="txtFldSAmount" class="form-control editable" onmouseover="fipaTooltip(this);" />';
var cell5 = '<select name="selSAPriority" id="selSAPriority" class="form-control editable" onmouseover="fipaTooltip(this);"> </select>';
var cell6 = '<select name="selSARiskLvl" id="selSARiskLvl" class="form-control editable" onmouseover="fipaTooltip(this);"   > </select>'+
'<input type="hidden" name="txtFldSACrtdBy"/><input type="hidden" name="txtFldSACrtdDate"/>'; 

   

wealthAccmltTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6] ).draw( false );

var rowCount = $('#wealthAccmltTable tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#wealthAccmltTable tbody tr').length : rowCount;
var $lastRow = $("#wealthAccmltTable tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgSAInvId").val());

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radwlthacc"+$lastRow.index())
.parent().find('label').attr('for',"radwlthacc"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgSAPurpose").val()); 

$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSAWhen").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').addClass("applyEvntYrs");

$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgSAmount").val());  
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd");


var sel1 =  $("#selDlgSAPriority > option").clone();
$lastRow.find("td:eq(5)").find('select:eq(0)').append(sel1);
$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#selDlgSAPriority").val());
  
var sel2 =  $("#selDlgSARiskLvl > option").clone();
$lastRow.find("td:eq(6)").find('select:eq(0)').append(sel2);
$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#selDlgSARiskLvl").val());
  
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
	crudicons(this,'wealthAccmltTable','SelweathAccgoals','WAcERow','WAcDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'wealthAccmltTable','SelweathAccgoals','WAcERow','WAcDRow');
});

if(dataset != null){

	 rowCount = $('#wealthAccmltTable tbody tr').length;	
	

	 $lastRow.find("td:first").find('span').text(rowCount);
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
			case "sainvId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "sainvPurpose": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				
				break;
				
			case "sainvWhen": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				break;
			 
			case "sainvAmount": 
				var value=(isEmpty(col)? Number("0")  : col);
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(value); 
				break;
			 
			case "saivnPriority": 
				selectNullvalChk($lastRow.find("td:eq(5)"),col);  
				break;
			 
			 
			case "savinvRisklvl": 
				selectNullvalChk($lastRow.find("td:eq(6)"),col);  
				break;
			 
			 
			case "sainvCreatedBy": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
				break;
			 
			 
			case "sainvCreatedDate": 
				$lastRow.find("td:eq(6)").find('input:eq(1)').val(col); 
				break; 
				 
		}			 
		 
	}
	}
else{
//	DHTML CRUD ICONS
	crudicons(null,'wealthAccmltTable','SelweathAccgoals','WAcERow','WAcDRow');
}
  /*
if(dataset == null){	 //instant save added line
	instantWlthAcSave($lastRow,INS_MODE);		
}
$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
 */
}

//DHTML SELECT ALL
function SelAllweathAccgoals(obj){
	
	if($(obj).is(":checked")){
		
		$('#wealthAccmltTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#WAcDRow").attr("disabled",false);
		$('#wealthAccmltTable tbody tr').addClass("selected");
		
		var $rowCount = $('#wealthAccmltTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#WAcERow").attr("disabled",true);
			$("#WAcDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#WAcERow").attr("disabled",false);
			$("#WAcDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#WAcERow").attr("disabled",true);*/
			$("#WAcDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#wealthAccmltTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#wealthAccmltTable tbody tr').removeClass("selected");
		
		/*$("#WAcERow").attr("disabled",true);
		$("#WAcDRow").attr("disabled",true);*/
		
	}
	


}
 
/*Edit Row Click */
$("#WAcERow").on("click",function(){ 
	WAcVRow(); 
});


/*View Row Click */
function WAcVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#wealthAccmltTable tbody tr').length;	
	var $lastRow = $("#wealthAccmltTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
/*	$("#wealthAccmltTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	
	$("#wealthAccmltTable tbody").find('input[name="radwlthaccSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#wealthAccmltTable tbody").find('input[name="radwlthaccSelect"]').each(function(){ //Checkbox selection
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
				
				 	wlthaccRdlyflds($mode);
					wlthaccfilldlgval($row); 
					showFIPAModel('svinvst_Dialog','Wealth Accumulation Goals');  
					$("#svinvst_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#svinvst_Dialog').on('shown.bs.modal', function () {
					//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
		
//						$("#svinvst_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#svinvst_Dialog").find("textarea[id=txtFldDlgSAPurpose]").focus();//Aravindh
						$("#svinvst_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatewlthaccDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			wlthaccfilldomval($RowId,$row); 
					     		}  
					     	//	instantWlthAcSave($row,UPD_MODE); //instant save added line
								$('#svinvst_Dialog').modal('hide'); 
								wlthaccClearFlds();
								
								crudicons(this,'wealthAccmltTable','SelweathAccgoals','WAcERow','WAcDRow');
							
						});
						
						$("#svinvst_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'wealthAccmltTable','SelweathAccgoals','WAcERow','WAcDRow');
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
$("#WAcDRow").on("click",function(){ 
	 			datatableDeleteRow('wealthAccmltTable',wealthAccmltTable,'SelweathAccgoals','WAcERow','WAcDRow');
/*//				DHTML CRUD ICONS
				var rc = wealthAccmltTable.row().count();
				if(rc ==0){
					$("#SelweathAccgoals").prop("checked",false);
					crudicons(this,'wealthAccmltTable','SelweathAccgoals','WAcERow','WAcDRow');
				}
//				DHTML CRUD ICONS
*/				
});

/*Clear Fields */
function wlthaccClearFlds(){
	$("#svinvst_Dialog").find("input[type=text]").val("");
	$("#svinvst_Dialog").find("textarea").val("");
	$("#svinvst_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function wlthaccRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#svinvst_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#svinvst_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatewlthaccDetails(){
	 
	/*if(!(validateFocusFlds('svinvst_Dialog','txtFldDlgSAPurpose',SAVEINV_PUR))) return; 
	if(!(validateFocusFlds('svinvst_Dialog','txtFldDlgSAWhen',SAVEINV_WHEN))) return;
	if(!(validateFocusFlds('svinvst_Dialog','txtFldDlgSAmount',SAVEINV_AMT))) return;*/
	 
	
	  return true; 
}

function valwlthaccTbl(){ 
//	var $lastRow = $("#wealthAccmltTable tbody tr:last");	
	var $RowCount = wealthAccmltTable.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#wealthAccmltTable tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), SAVEINV_PUR))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), SAVEINV_WHEN))) {valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), SAVEINV_AMT))){valid=false;return false;};
		 
		});
	}*/  
	 return valid;
}



/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});




/* Filling Model Fields*/
function wlthaccfilldlgval($lastRow){
	  
	//  $('#svinvst_Dialog #txtFldDlgSAMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#svinvst_Dialog #txtFldDlgSAInvId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#svinvst_Dialog #txtFldDlgSAPurpose').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#svinvst_Dialog #txtFldDlgSAWhen').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  if($lastRow.find("td:eq(4)").find('input:eq(0)').val().trim().length === 0){
		  $('#svinvst_Dialog #txtFldDlgSAmount').val(0);
	      }
	  else{
	  $('#svinvst_Dialog #txtFldDlgSAmount').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  }
	  $('#svinvst_Dialog #selDlgSAPriority').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
	  $('#svinvst_Dialog #selDlgSARiskLvl').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
	  $('#svinvst_Dialog #txtFldDlgSACrtdBy').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#svinvst_Dialog #txtFldDlgSACrtdDate').val($lastRow.find("td:eq(6)").find('input:eq(1)').val());
	 
}

/* Filling Table Fields*/
function wlthaccfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgSAPurpose").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSAWhen").val());
	 if($("#txtFldDlgSAmount").val().trim().length === 0){
		 $row.find("td:eq(4)").find('input:eq(0)').val(0);  
	      }
	  else{
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgSAmount").val());  
	  }
	
	
	$row.find("td:eq(5)").find('select:eq(0)').val($("#selDlgSAPriority").val()); 
	$row.find("td:eq(6)").find('select:eq(0)').val($("#selDlgSARiskLvl").val());  
	//$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

}



//instant save added line
$("#svinvst_Dialog").find("input,select,textarea").on("change",function(){
	$("#svinvst_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

