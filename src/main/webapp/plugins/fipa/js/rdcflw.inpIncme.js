var rdcflwIncAssTbl; 

/*Validations*/
/*Table1*/
$("#selDlgprojIRFreq").on("change",function(){
	if(!rdFrequencyValidation($('#txtFldDlgprojIRAgePayends'),$("#txtFldDlgprojIREslrate"),$(this)))return; 
}); 

$("#txtFldDlgprojIRAgePaySts").on("change",function(){
	if(!rdStartAgeValidate($('#txtFldDlgprojIRAgePaySts'),$('#selDlgprojIRAgeBsOn')))return;
});
$("#txtFldDlgprojIRAgePayends").on("change",function(){
	if(!rdEndAgeValidate($('#txtFldDlgprojIRAgePaySts'),$(this)))return;
});
/*Table2*/ 
$("#selDlgprojIncAssFreq").on("change",function(){
	if(!rdFrequencyValidation($('#txtFldDlgprojIncAssAgePayends'),$("#txtFldDlgprojIncAssEslrate"),$(this)))return; 
}); 

$("#txtFldDlgprojIncAssAgePaySts").on("change",function(){
	if(!rdStartAgeValidate($('#txtFldDlgprojIncAssAgePaySts'),$('#selDlgprojIncAssAgeBsOn')))return;
});
$("#txtFldDlgprojIncAssAgePayends").on("change",function(){
	if(!rdEndAgeValidate($('#txtFldDlgprojIncAssAgePaySts'),$(this)))return;
});

/**/


/*Datatable Initialisation*/


//var RDIncDisImbtbl = $('#RDIncDisImbtbl').DataTable( {
//	destroy: true,
//  	responsive: false,         
//     ordering: false,
//     searching: false,     
//     scrollY:  "40vh",
//     scrollX: true,
//     scroller: false,
//     scrollCollapse:false,
//     paging:false, 
//     filter:false,   
//     columnDefs: [], 
//     dom: '<<"top" ip>flt>',  
//   columnDefs: [  { width: '20px', targets: [0,1]},
//   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();

/*var RDInctbl = $('#RDInctbl').DataTable( {
	destroy: true,
  	responsive: false,         
   //  ordering: false,
     ordering: true,
     searching: false,     
     scrollY:  "40vh",
     scrollX: true,
     scroller: false,
     scrollCollapse:false,
     paging:false, 
     filter:false,   
     columnDefs: [], 
     dom: '<<"top" ip>flt>',  
   columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"searchable": false},{ "orderable": false,targets: [0,1]}],		 
   	          columns: [
   	           null,
   	           null,
   	           { "orderDataType": "dom-text", type: 'string' },
   	           { "orderDataType": "dom-text", type: 'string' },
   	           { "orderDataType": "dom-select" ,type: 'string' },
   	           { "orderDataType": "dom-text", type: 'string' },
   	           { "orderDataType": "dom-text-numeric" },
   	           { "orderDataType": "dom-text-numeric" },
   	           { "orderDataType": "dom-select" ,type: 'string' },
   	           { "orderDataType": "dom-text-numeric" },
   	           { "orderDataType": "dom-text-numeric" }
   	            ],
   	       	fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
   	           //debugger;
   	           var index = iDisplayIndexFull + 1;
   	           $("td span", nRow).html(index);
   	           return nRow;
   	       },
		 fnDrawCallback: function(oSettings) {
			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
				 
			    } 
    
		 }, 
}).draw();*/
	
var RDInctbl = $('#RDInctbl').DataTable( {
	destroy: true,
  	responsive: false,         
     ordering: false,
     searching: false,     
     scrollY:  "40vh",
     scrollX: true,
     scroller: false,
     scrollCollapse:false,
     paging:false, 
     filter:false,   
     columnDefs: [], 
     dom: '<<"top" ip>flt>',  
   columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}],		 
		 fnDrawCallback: function(oSettings) {
			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
				 
			    } 
    
		 }, 
}).draw();
	

/*Add Row Click */
$("#RDIncAddRow").on("click",function(){
	//if(!validationRetirementPlnSection())return;
	$("#RDIncAddRow").parent().css("border","");
	$('#generatetoamendincExp').html("");
	$("#generatetoamendincExpAccm").html("");
	
	d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
			RDincretClearFlds();
			showFIPAModel('ProjOfInc_Dialog','Income to be received during retirement');   
			loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
			
			$('#ProjOfInc_Dialog').on('shown.bs.modal', function () {
//				$("#ProjOfInc_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#ProjOfInc_Dialog").find("input[id=txtFldDlgprojIRClsfy]").focus();
				$("#ProjOfInc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatRDincretDetails())return;
					   	RDincretRdlyflds(INS_MODE);  
					   	getRDincretRows(null); 
						$('#ProjOfInc_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getRDincretRows(dataset){ 

	var cell0 = '<span></span>'+
	'<input type="hidden" name="txtFldRDincretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldprojIRId">';
	 
	var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radRDincretSelect"/><label>&nbsp;</label></div>'; 
	var cell2 = '<input type="text" name="txtFldprojIRClsfy" class="form-control editable"   onmouseover="fipaTooltip(this);" />'; 
	var cell3 = '<input type="text" name="txtFldprojIRDesc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell4 = '<select type="text" name="selprojIRFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
	var cell5 = '<input type="text" name="txtFldprojIRAmtofInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell6 = '<input type="text" name="txtFldprojIREslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell7 = '<input type="text" name="txtFldprojIRRoi" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell8 = '<select type="text" name="selprojIRAgeBsOn" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
	var cell9 = '<input type="text" name="txtFldprojIRAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell10 ='<input type="text" name="txtFldprojIRAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);" />'+
	'<input type="hidden" name="txtFldprojIRCrtdBy"/><input type="hidden" name="txtFldprojIRCrtdDate"/>'; 


	RDInctbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

	var rowCount = $('#RDInctbl tbody tr:visible').length;
	 rowCount =  (rowCount == 0) ? $('#RDInctbl tbody tr').length : rowCount;
	var $lastRow = $("#RDInctbl tbody tr:last");	

	$lastRow.find("td:first").find('span').text(rowCount); 

	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
	})

	$lastRow.find("td:eq(1)").find("input:first").attr('id',"radRDincret"+$lastRow.index())
	.parent().find('label').attr('for',"radRDincret"+$lastRow.index());

	$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgprojIRClsfy").val());
	$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){  
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});
//	
	$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgprojIRDesc").val());
	$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){  
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});


	var irfreq = $("#selDlgprojIRFreq > option").clone();
	$lastRow.find("td:eq(4)").find('select:eq(0)').append(irfreq);
	$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#selDlgprojIRFreq").val());
	$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
		if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$(this)))return; 
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 


	$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgprojIRAmtofInc").val());
	$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
	$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){  
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});
	
	$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgprojIREslrate").val());
	$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");
	$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){  
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});
	
	
	$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgprojIRRoi").val());
	$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");
	$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){  
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});

	var iragebsed =  $("#selDlgprojIRAgeBsOn > option").clone();
	$lastRow.find("td:eq(8)").find('select:eq(0)').append(iragebsed);
	$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#selDlgprojIRAgeBsOn").val());
	$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){
		if(!rdStartAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 
	
	
	$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgprojIRAgePaySts").val());
	$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");
	$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){ 		
		if(!rdStartAgeValidate($(this),$('#lipOwner')))return;
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 
	
	$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgprojIRAgePayends").val());
	$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntYrs");
	$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
		if(!rdEndAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 


	
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

//	DHTML CRUD ICONS
	$lastRow.click(function(){
		/*toggleSingleRow($lastRow);*/
		crudicons(this,'RDInctbl','SelRDInc','RDIncEditRow','RDIncDelRow');
				
	});
//	DHTML CRUD ICONS
	
	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
//		DHTML CRUD ICONS
		crudicons(this,'RDInctbl','SelRDInc','RDIncEditRow','RDIncDelRow');
	});
	
	if(dataset == null){
//		$lastRow.addClass("newrow");
		$lastRow.addClass("rpincrecvdnew");
//		DHTML CRUD ICONS
		crudicons(null,'RDInctbl','SelRDInc','RDIncEditRow','RDIncDelRow');
	}

	if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('select:eq(0)')))return; 
getRDcfIncDets();

}
 
//DHTML SELECT 
function SelAllRDInc(obj){
	
	if($(obj).is(":checked")){
		
		$('#RDInctbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#RDIncDelRow").attr("disabled",false);
		$('#RDInctbl tbody tr').addClass("selected");
		
		var $rowCount = $('#RDInctbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#RDIncEditRow").attr("disabled",true);
			$("#RDIncDelRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#RDIncEditRow").attr("disabled",false);
			$("#RDIncDelRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#RDIncEditRow").attr("disabled",true);*/
			$("#RDIncDelRow").attr("disabled",false);
		}
		
	}else{
		
		$('#RDInctbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#RDInctbl tbody tr').removeClass("selected");
		
		/*$("#RDIncEditRow").attr("disabled",true);
		$("#RDIncDelRow").attr("disabled",true);*/
		
	}
}
 
/*Edit Row Click */
$("#RDIncEditRow").on("click",function(){
	var isOneRowSelected=0;
	var $rowCount = $('#RDInctbl tbody tr').length;	
	var $lastRow = $("#RDInctbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDInctbl tbody").find('input[name="radRDincretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDInctbl tbody").find('input[name="radRDincretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDincretRdlyflds($mode);
					RDincretfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgprojIRAgePayends'),$("#txtFldDlgprojIREslrate"),$("#selDlgprojIRFreq")))return; 
					showFIPAModel('ProjOfInc_Dialog','Income to be received during retirement');  
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#ProjOfInc_Dialog').on('shown.bs.modal', function () {
//						$("#ProjOfInc_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#ProjOfInc_Dialog").find("input[id=txtFldDlgprojIRClsfy]").focus();
						$("#ProjOfInc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatRDincretDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDincretfilldomval($RowId,$row); 
					     		}  
					     		if(!rdFrequencyValidation($row.find("td:eq(10)").find('input:eq(0)'),$row.find("td:eq(6)").find('input:eq(0)'),$row.find("td:eq(4)").find('select:eq(0)')))return; 
					     		getRDcfIncDets();
								$('#ProjOfInc_Dialog').modal('hide'); 
								RDincretClearFlds();
							
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
$("#RDIncViewRow").on("click",function(){
	var isOneRowSelected=0;
	var $rowCount = $('#RDInctbl tbody tr').length;	
	var $lastRow = $("#RDInctbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDInctbl tbody").find('input[name="radRDincretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDInctbl tbody").find('input[name="radRDincretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDincretRdlyflds($mode);
					RDincretfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgprojIRAgePayends'),$("#txtFldDlgprojIREslrate"),$("#selDlgprojIRFreq")))return; 
					showFIPAModel('ProjOfInc_Dialog','Income to be received during retirement');  
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#ProjOfInc_Dialog').on('shown.bs.modal', function () {
//						$("#ProjOfInc_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#ProjOfInc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatRDincretDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDincretfilldomval($RowId,$row); 
					     		}  
					     		if(!rdFrequencyValidation($row.find("td:eq(10)").find('input:eq(0)'),$row.find("td:eq(6)").find('input:eq(0)'),$row.find("td:eq(4)").find('select:eq(0)')))return;
					     		getRDcfIncDets();
								$('#ProjOfInc_Dialog').modal('hide'); 
								RDincretClearFlds();
							
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
$("#RDIncDelRow").on("click",function(){ 
 			datatableDeleteRow('RDInctbl',RDInctbl,'SelRDInc','RDIncEditRow','RDIncDelRow');   
/*//			DHTML CRUD ICONS
			var rc = RDInctbl.row().count();
			if(rc ==0){
				$("#SelRDInc").prop("checked",false);
				crudicons(null,'RDInctbl','SelRDInc','RDIncEditRow','RDIncDelRow');
			}
//			DHTML CRUD ICONS
*/});

/*Clear Fields */
function RDincretClearFlds(){
	$("#ProjOfInc_Dialog").find("input[type=text]").val("");
	$("#ProjOfInc_Dialog").find("textarea").val("");
	$("#ProjOfInc_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function RDincretRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#ProjOfInc_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#ProjOfInc_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatRDincretDetails(){
	   
	/*if(!(validateFocusFlds('ProjOfInc_Dialog','txtFldDlgprojIRClsfy', IR_CLSFY)))return; 
	if(!(validateFocusFlds('ProjOfInc_Dialog','selDlgprojIRFreq', IR_FRQ)))return;
	if(!(validateFocusFlds('ProjOfInc_Dialog','selDlgprojIRAgeBsOn', IR_AGEBASED)))return;
	if(!(validateFocusFlds('ProjOfInc_Dialog','txtFldDlgprojIRAgePaySts', IR_AGESTS)))return;
	if(!rdFrequencyValidation($('#txtFldDlgprojIRAgePayends'),$("#txtFldDlgprojIREslrate"),$("#selDlgprojIRFreq")))return; 
	if(!rdStartAgeValidate($('#txtFldDlgprojIRAgePaySts'),$('#selDlgprojIRAgeBsOn')))return;
	if(!rdEndAgeValidate($('#txtFldDlgprojIRAgePaySts'),$("#txtFldDlgprojIRAgePayends")))return;*/
	  return true; 
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgprojIRClsfy,#selDlgprojIRFreq," +
		"#selDlgprojIRAgeBsOn,#txtFldDlgprojIRAgePaySts").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  



/* Filling Model Fields*/
function RDincretfilldlgval($lastRow){
	  
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRClsfy').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRDesc').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#ProjOfInc_Dialog #selDlgprojIRFreq').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRAmtofInc').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIREslrate').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRRoi').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#ProjOfInc_Dialog #selDlgprojIRAgeBsOn').val($lastRow.find("td:eq(8)").find('select:eq(0)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRAgePaySts').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRAgePayends').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRCrtdBy').val($lastRow.find("td:eq(10)").find('input:eq(1)').val());
	  $('#ProjOfInc_Dialog #txtFldDlgprojIRCrtdDate').val($lastRow.find("td:eq(10)").find('input:eq(2)').val());
	
}

/* Filling Table Fields*/
function RDincretfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgprojIRClsfy").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgprojIRDesc").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgprojIRFreq").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgprojIRAmtofInc").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgprojIREslrate").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgprojIRRoi").val()); 
	$row.find("td:eq(8)").find('select:eq(0)').val($("#selDlgprojIRAgeBsOn").val());  
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgprojIRAgePaySts").val());  
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgprojIRAgePayends").val());   
		
}

   


/*Datatable Initialisation*/
//var RDIncAsstbl = $('#RDIncAsstbl').DataTable( {
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
	

  
$("#RDIncAssFilterRow").on("click",function(){
	
})

/*Add Row Click */
$("#RDIncAssAddRow").on("click",function(){
//	if(!validationRetirementPlnSection())return;
		$('#generatetoamendincExp').html("");
		$("#generatetoamendincExpAccm").html("");
		d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
			RDincAssretClearFlds();
			showFIPAModel('ProjOfIncAss_Dialog','Income and assets available for retirement');   
			loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
			
				$('#ProjOfIncAss_Dialog').on('shown.bs.modal', function () {
//				$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#ProjOfIncAss_Dialog").find("input[id=txtFldDlgprojIncAssClsfy]").focus();
				$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatRDincAssretDetails())return;
					   	RDincAssretRdlyflds(INS_MODE);  
					   	getRDincAssretRows(null); 
						$('#ProjOfIncAss_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getRDincAssretRows(dataset){ 

	var cell0 = '<span></span>'+
	'<input type="hidden" name="txtFldRDincAssretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldprojIncAssId">';
	 
	var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radRDincAssretSelect"/><label>&nbsp;</label></div>'; 
	var cell2 = '<input type="text" name="txtFldprojIncAssClsfy" class="form-control editable"   onmouseover="fipaTooltip(this);" />'; 
	var cell3 = '<input type="text" name="txtFldprojIncAssDesc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell4 = '<select type="text" name="selprojIncAssFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
	var cell5 = '<input type="text" name="txtFldprojIncAssAmtofInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell6 = '<input type="text" name="txtFldprojIncAssEslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell7 = '<input type="text" name="txtFldprojIncAssRoi" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell8 = '<select type="text" name="selprojIncAssAgeBsOn" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
	var cell9 = '<input type="text" name="txtFldprojIncAssAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
	var cell10 ='<input type="text" name="txtFldprojIncAssAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);" />'+
	'<input type="hidden" name="txtFldprojIncAssCrtdBy"/><input type="hidden" name="txtFldprojIncAssCrtdDate"/>'; 


	RDIncAsstbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

	var rowCount = $('#RDIncAsstbl tbody tr:visible').length;	
	rowCount =  (rowCount == 0) ? $('#RDIncAsstbl tbody tr').length : rowCount;
	var $lastRow = $("#RDIncAsstbl tbody tr:last");	

	$lastRow.find("td:first").find('span').text(rowCount); 

	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
	})

	$lastRow.find("td:eq(1)").find("input:first").attr('id',"radRDincAssret"+$lastRow.index())
	.parent().find('label').attr('for',"radRDincAssret"+$lastRow.index());

	$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgprojIncAssClsfy").val());
	$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){ 
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 
	
	$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgprojIncAssDesc").val());
	$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){ 
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});


	var irfreq = $("#selDlgprojIncAssFreq > option").clone();
	$lastRow.find("td:eq(4)").find('select:eq(0)').append(irfreq);
	$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#selDlgprojIncAssFreq").val());
	$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
		if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$(this)))return;
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 
	
	
	$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgprojIncAssAmtofInc").val());
	$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
	$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){ 
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});
	
	
	$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgprojIncAssEslrate").val());
	$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");
	$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){ 
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});
	
	$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgprojIncAssRoi").val());
	$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");
	$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){ 
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	});

	var iragebsed =  $("#selDlgprojIncAssAgeBsOn > option").clone();
	$lastRow.find("td:eq(8)").find('select:eq(0)').append(iragebsed);
	$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#selDlgprojIncAssAgeBsOn").val());
	$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){ 
		if(!rdStartAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 
	
	
	$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgprojIncAssAgePaySts").val());
	$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");
	$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
		if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(8)").find('select:eq(0)')))return;
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 
	
	$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgprojIncAssAgePayends").val());
	$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntYrs");
	$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
		if(!rdEndAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
		if(!isEmpty($(this).val()) ){getRDcfIncDets();}
	}); 
	
 
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

	
	
//	DHTML CRUD ICONS
	$lastRow.click(function(){
		/*toggleSingleRow($lastRow);*/
		crudicons(this,'RDIncAsstbl','SelRDIncAss','RDIncAssEditRow','RDIncAssDelRow');
				
	});
//	DHTML CRUD ICONS
	
	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
//		DHTML CRUD ICONS
		crudicons(this,'RDIncAsstbl','SelRDIncAss','RDIncAssEditRow','RDIncAssDelRow');
	});
	if(dataset == null){
//		$lastRow.addClass("newrow");
		$lastRow.addClass("rpincassetnew");
	}

	
	var intretslfage=Number($("#txtFldRDSlfIntAge").val());
	var intretspsage=Number($("#txtFldRDSpsIntAge").val());

	var totAge=Number($("#txtFldRDSlfProjLfe").val());
	
	
	if(dataset != null){

		rowCount = $('#RDIncAsstbl tbody tr').length;	
		

		$lastRow.find("td:first").find('span').text(rowCount); 
				if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
						$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
				}
				
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			
			switch(data){
			
			case "txtFldIncAssId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "txtFldIncAssClsfy": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				
				break;
				
				
			case "txtFldIncAssDesc": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				
				break;
				
			case "selIncAssFreq": 
				var value=(isEmpty(col)? "REGULAR" : col);
				selectNullvalChk($lastRow.find("td:eq(4)"),value);   
				break;
			 
			case "txtFldIncAssAmtofInc": 
				var value=(isEmpty(col)? Number("0") : col);
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(value); 
				break;
			 
			case "txtFldIncAssEslrate": 
				var value=(isEmpty(col)? Number("0") : col);
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(value); 
				break;
			 
			 
			case "txtFldIncAssRoi": 
				var value=(isEmpty(col)? Number("0") : col);
				$lastRow.find("td:eq(7)").find('input:eq(0)').val(value); 
				break;
			 
			 
			case "selIncAssAgeBsOn": 
				var value=(isEmpty(col)? "SELF" : col);
				selectNullvalChk($lastRow.find("td:eq(8)"),value);   
				break;
			 
			 
			case "txtFldIncAssAgePaySts": 
				var value=(isEmpty(col)? intretslfage : col);
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(value); 
				break;
				
			case "txtFldIncAssAgePayends": 
				var value=(isEmpty(col)? totAge : col);
				$lastRow.find("td:eq(10)").find('input:eq(0)').val(value); 
				break;
			  
			  
			case "txtFldIncAssCrtdBy": 
				$lastRow.find("td:eq(10)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "txtFldIncAssCrtdDate":
				$lastRow.find("td:eq(10)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "txtFldIncAssModBy":
				infoDetsArr.push(col);
				break;
				
			case "txtFldIncAssModDate":
				infoDetsArr.push(col);
				break;	
			}			 
			 
		}
		}else{
//			DHTML CRUD ICONS
			crudicons(null,'RDIncAsstbl','SelRDIncAss','RDIncAssEditRow','RDIncAssDelRow');
		}
	if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('select:eq(0)')))return;
	getRDcfIncDets(); 
	
	
	   
	
	
	

}

function existHeader(array,crthdr){
	var flg=false;
		$.each(array, function( index, value ) {
			 
			  if(value.data == crthdr){
				 flg=true;
			  return false;
			  }
		});
		
		return flg;
}

var incomedataforALL = [];

function getRDcfIncDets(){
 
	
	var projOfIncdata = []; 
	var incomedata = [];
	incomedataforALL = [];
	
	$("#generateproIncometbl tbody").html("");
	 $("#projOfIncometblediv").css("display","block");
	 var agebasedon=$("#selRDRetAgebasedOn").val().toUpperCase();
	 var headlist=[];  
	 var subheadlist=[];
	 var groupheader =[];
	 
	 
	 var dataHeader=[
	                 {"data":"Self Age","title":"Self <br/> Age","width":"10px","className":"dt-head-center"},
	                 {"data":"Spouse Age","title":"Spouse <br/> Age","width":"10px","className":"dt-head-center"}  
	                 ];
   
	 var dupChk=[];


	 var cola=subheadlist.length;
	 var asstblcount=RDIncAsstbl.rows().count();	 
	 var inctblcount=RDInctbl.rows().count();

	 if(inctblcount>0){
//		 var colb=0;
//		 cola=subheadlist.length;
		 
	 $("#RDInctbl tbody tr").each(function(j,row){
		 
		 	var rind = $(this).index();
		 
		 	var mode_r = $(this).find("td:first").find('input:eq(0)').val();
		 	var crnthd=$(this).find("td:eq(2)").find("input:eq(0)").val(); 
		 	var crntdesc=$(this).find("td:eq(3)").find("input:eq(0)").val(); 
		 	
		 	 if(mode_r != "D"){
		 		 
			 		var my_item = {};
			 		
			 		my_item.data=crntdesc+"-a-"+rind;
			 		my_item.title=crnthd +"<br/><hr/>"+crntdesc ;//+"_"+cola;
			 		my_item.width="15px";
			 		my_item.className="dt-right";
					my_item.render= $.fn.dataTable.render.number(',', '.', 0, '$');
			 	
			 		headlist.push(crnthd+"-a-"+rind);
			 		subheadlist.push(crntdesc+"-a-"+rind);
			 		dataHeader.push(my_item); 
			 		groupheader.push({"group":crnthd+"-a-"+rind,"desc":crntdesc+"-a-"+rind});
			 	
			 	dupChk.push(crnthd+"-a-"+rind);
//			 	cola=subheadlist.length;
			 	
		 	 }

		 	
		 });
	 }
	 
	 
	 if(asstblcount>0){
		
	 $("#RDIncAsstbl tbody tr").each(function(i,row){
		 
		 var rind = $(this).index();
		 cola=subheadlist.length;
		 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
		 var crnthd=$(this).find("td:eq(2)").find("input:eq(0)").val();
		 var crntdesc =$(this).find("td:eq(3)").find("input:eq(0)").val();
//		 var crntId=$(this).find("td:eq(0)").find("input:eq(2)").val();
		
		 if(mode_r != "D"){
			 
			 var my_item = {}; 
			 my_item.data=crntdesc+"-b-"+rind;
			 my_item.title=crnthd +"<br/><hr/>"+crntdesc ;//+"_"+cola;
			 my_item.width="15px";
			 my_item.className="dt-right";
			 my_item.render= $.fn.dataTable.render.number(',', '.', 0, '$');
	 	
			 headlist.push(crnthd+"-b-"+rind);//my_item
			 subheadlist.push(crntdesc+"-b-"+rind);
			 dataHeader.push(my_item); 
			 groupheader.push({"group":crnthd+"-b-"+rind,"desc":crntdesc+"-b-"+rind});
			 dupChk.push(crnthd+"-b-"+rind);
	 	
			 cola=subheadlist.length;
	 	
		}

	 	
	 });
	 }


	 dataHeader.push({"data":"Total Annual Income","title":"Total<br/> Annual<br/> Income($)","width":"20px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"});
	 dataHeader.push({"data":"Total Accumulation Income","title":"Total<br/> Accumulation <br/>Income($)","width":"20px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"}); 

	 /*Data Set*/
	  
	 var intretslfage=Number($("#txtFldRDSlfIntAge").val());
	 var intretspsage=Number($("#txtFldRDSpsIntAge").val());

	 var totAge=Number($("#txtFldRDSlfProjLfe").val());

	 var dataset=[];
	 
	 $("#RetirementValueBasedOnInc").val(agebasedon).prop("readonly",true);;
//	 var $lastRow = $("#RDExptbl tbody tr:last");
	 
	 var count=0;
	 var oldval=0;
	 
	 if(intretslfage > 0 && totAge >= intretslfage){
//		 if(inctblcount > 0 || asstblcount > 0){
		 $("#projOfIncometblediv").css("display","block");

		 var spouseage=intretspsage;
		 for(var i=intretslfage;i<=totAge;i++){
			 var arrlist={};
			 arrlist["Self Age"]=i+'<input type="hidden" value="'+(count+1)+'"/>'; //self age
			 arrlist["Spouse Age"]=spouseage; //spouse age
			 
			 var totAnlExp=0;var colc=0,cold=0;
			 
			 $.each(subheadlist,function(j,hdr){
				 
				 var arrHdr='';	var arrHdr2='';
				 
				 $("#RDInctbl tbody tr").each(function(count,value){
					 
					 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
					 var rind = $(this).index();
					 
					 if(mode_r != "D"){
						 
						 var $class 	  = $(this).find("td:eq(2)").find("input:eq(0)").val();
						 var $desc 	  = $(this).find("td:eq(3)").find("input:eq(0)").val();
						 var $freq 	  = $(this).find("td:eq(4)").find("select:eq(0)").val();
						 var $anlinc   = (isEmpty($(this).find("td:eq(5)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(5)").find("input:eq(0)").val());
						 var $esclrate = (isEmpty($(this).find("td:eq(6)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(6)").find("input:eq(0)").val());
						 var $roi	   = (isEmpty($(this).find("td:eq(7)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(7)").find("input:eq(0)").val());		 					 
						 var $agebased = $(this).find("td:eq(8)").find("select:eq(0)").val(); 
						 var $startslfage = Number($(this).find("td:eq(9)").find("input:eq(0)").val());  
						 var $endage   = (isEmpty($(this).find("td:eq(10)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(10)").find("input:eq(0)").val());	 	 						 
						 
						 var $noofyrs=Math.abs($startslfage-$endage);
						 var $startspsage = intretslfage-intretspsage;
						 $startspsage=$startspsage+intretslfage;
						 
//						 var test1=hdr in arrlist;
//						 var hdrTest1=hdr;
						 arrHdr2=hdr;//(test1)?(hdrTest1+"-"+count):hdr;
		 				 
						 if(($desc+"-a-"+rind) == arrHdr2){
							 if($agebased == "SELF"){
								 if($freq == "REGULAR"){
									 if(i >= $startslfage &&  (i<=$endage)){
										 if(i==$startslfage){
											 arrlist[arrHdr2]=(isNaN($anlinc)) ? 0 : roundNumber(Number($anlinc));  
										 }else{
											 var olddataAno=dataset[dataset.length-1][arrHdr2]; 
											 olddataAno*=(1+($esclrate/100));
											 arrlist[arrHdr2]=(isNaN(olddataAno)) ? 0 : roundNumber(Number(olddataAno));  
										 }
									 }else{
										 arrlist[arrHdr2]='';
									 }
								 }else if($freq == "SINGLE"){
									 if(i == $startslfage){
										 if(i==$startslfage){ 
											 arrlist[arrHdr2]=(isNaN($anlinc)) ? 0 : roundNumber(Number($anlinc));   
										 }else{   
											 var olddataAno=dataset[dataset.length-1][arrHdr2]; 
											 olddataAno*=(1+($esclrate/100));
											 arrlist[arrHdr2]=(isNaN(olddataAno)) ? 0 : roundNumber(Number(olddataAno));  
										 }
									 }else{
										 arrlist[arrHdr2]=''; 
									 }
								 }
							 }else if($agebased == "SPOUSE"){
								 if($freq == "REGULAR"){
									 if(spouseage >= $startslfage &&  (spouseage<=$endage)){ 
										 if($startslfage==spouseage){ 
											 arrlist[arrHdr2]=(isNaN($anlinc)) ? 0 : roundNumber(Number($anlinc));   
										 }else{   
											 var olddataAno=dataset[dataset.length-1][arrHdr2]; 
											 olddataAno*=(1+($esclrate/100));
											 arrlist[arrHdr2]=(isNaN(olddataAno)) ? 0 : roundNumber(Number(olddataAno));  
										 }
		 									
									 }else{
										 arrlist[hdr]=''; 
									 }
		 									
								 }else if($freq == "SINGLE"){
									 if(spouseage == $startslfage){ 
										 if($startslfage==spouseage){ 
											 arrlist[arrHdr2]=(isNaN($anlinc)) ? 0 : roundNumber(Number($anlinc));     
										 }else{   
											 var olddataAno=dataset[dataset.length-1][arrHdr2]; 
											 olddataAno*=(1+($esclrate/100));
											 arrlist[arrHdr2]=(isNaN(olddataAno)) ? 0 : roundNumber(Number(olddataAno));  
										 } 
									 }else{
										 arrlist[arrHdr2]=''; 
									 }
								 }
							 }
						 }
					 }	
				 }); 
				 
				 $("#RDIncAsstbl tbody tr").each(function(count,value){
					 
					 var rind = $(this).index();
					 
					 var mode_r = $(this).find("td:first").find('input:eq(0)').val();		 					 
					 if(mode_r != "D"){
		 						
						 var $classlt 	  = $(this).find("td:eq(2)").find("input:eq(0)").val();
						 var $desclt 	  = $(this).find("td:eq(3)").find("input:eq(0)").val();
						 var $freqlt 	  = $(this).find("td:eq(4)").find("select:eq(0)").val();
						 var $anlinclt	  = (isEmpty($(this).find("td:eq(5)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(5)").find("input:eq(0)").val());
						 var $esclratelt  = (isEmpty($(this).find("td:eq(6)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(6)").find("input:eq(0)").val());
						 var $roilt	  	  = (isEmpty($(this).find("td:eq(7)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(7)").find("input:eq(0)").val()); 
						 var $agebasedlt = $(this).find("td:eq(8)").find("select:eq(0)").val(); 
						 var $startslfagelt = Number($(this).find("td:eq(9)").find("input:eq(0)").val());  
						 var $endagelt   = (isEmpty($(this).find("td:eq(10)").find("input:eq(0)"))) ? 0 : Number($(this).find("td:eq(10)").find("input:eq(0)").val()); 
						 var $noofyrslt=Math.abs($startslfagelt-$endagelt);
						 var $startspsagelt = intretslfage-intretspsage;
						 $startspsagelt=$startspsagelt+intretslfage;
			 				  
//						 var test=hdr in arrlist;
//						 var hdrTest=hdr;
						 arrHdr=hdr;//(test)?(hdrTest+"-"+count):hdr;
						 
						 if(($desclt+"-b-"+rind) == hdr){			 						 
							 if($agebasedlt == "SELF"){ 
								 if($freqlt == "REGULAR"){
									 if(i >= $startslfagelt &&  (i<=$endagelt)){ 
										 if(i==$startslfagelt){ 
											 arrlist[arrHdr]=(isNaN($anlinclt)) ? 0 : roundNumber(Number($anlinclt));   
										 }else{   
											 var olddata=dataset[dataset.length-1][arrHdr]; 
											 olddata*=(1+($esclratelt/100));
											 arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata)); 
										 }			 											
									 }else{
										 arrlist[arrHdr]=''; 
									 }
								 }else if($freqlt == "SINGLE"){
									 if(i == $startslfagelt){
										 if(i==$startslfagelt){ 
											 arrlist[arrHdr]=(isNaN($anlinclt)) ? 0 : roundNumber(Number($anlinclt)); 
										 }else{   
											 var olddata=dataset[dataset.length-1][arrHdr]; 
											 olddata*=(1+($esclratelt/100));
											 arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata));  
										 }
									 }else{
										 arrlist[arrHdr]=''; 
									 }
								 }
							 }else if($agebasedlt == "SPOUSE"){
								 if($freqlt == "REGULAR"){
									 if(spouseage >= $startslfagelt &&  (spouseage<=$endagelt)){ 
										 if($startslfagelt==spouseage){ 
											 arrlist[arrHdr]=(isNaN($anlinclt)) ? 0 : roundNumber(Number($anlinclt));   
										 }else{   
											 var olddata=dataset[dataset.length-1][arrHdr]; 
											 olddata*=(1+($esclratelt/100));
											 arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata));   
										 }
									 }else{
										 arrlist[arrHdr]=''; 
									 }
								 }else if($freqlt == "SINGLE"){
									 if(spouseage == $startslfagelt){ 
										 if($startslfagelt==spouseage){ 
											 arrlist[arrHdr]=(isNaN($anlinclt)) ? 0 : roundNumber(Number($anlinclt));   
										 }else{   
											 var olddata=dataset[dataset.length-1][arrHdr]; 
											 olddata*=(1+($esclratelt/100));
											 arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata));  
										 } 
									 }else{
										 arrlist[arrHdr]=''; 
									 }
								 }
							 }
						 }
					 }
				 });
				 
				 totAnlExp=Number(totAnlExp)+Number(arrlist[hdr]) ;
		 				colc++;
			 });
		 			 
			 var annlincome = (isNaN(totAnlExp)) ? 0 : roundNumber(Number(totAnlExp));
			 var accmincome = 0;		 			
			 arrlist["Total Annual Income"]=  annlincome;

			 if(i==intretslfage){ 
				 arrlist["Total Accumulation Income"]=(isNaN(totAnlExp)) ? 0 : roundNumber(Number(totAnlExp));
				 oldval=(isNaN(totAnlExp)) ? 0 : Number(totAnlExp);
				 accmincome=oldval;
			 }else{     
				 arrlist["Total Accumulation Income"]=(isNaN(totAnlExp+oldval)) ? 0 : roundNumber(Number(totAnlExp+oldval));
				 oldval=(isNaN(totAnlExp+oldval)) ? 0 : Number(totAnlExp+oldval);
				 accmincome=oldval;
			 }

			 dataset.push(arrlist);
			 spouseage++;
			 count++;
			 projOfIncdata.push({rdinclineAge:i, rdinclineAmt : oldval ,rdincbarAge:i, rdincbarAmt : totAnlExp });
			 incomedata.push({"Age":i,"Annual Income":annlincome,"Accumlation Income":accmincome});
			 
			 incomedataforALL.push({"Age":i,"AnnualIncome":annlincome,"AccumlationIncome":accmincome});
		 }
			
			 
		 if ($.fn.DataTable.isDataTable( '#generateproIncometbl') ) {
			 rdcflwIncAssTbl.destroy();
		 	$('#generateproIncometbl').html("");
		 }			 
	 
	//	 if(dupChk.length >= 1){
		 /*Generate Proper header*/
		 rdcflwIncAssTbl=$('#generateproIncometbl').DataTable( {
			 language: { "decimal": ".","thousands": ","},
			 destroy: true,
			 responsive: false,         
			 ordering: false,
			 searching: false,     
			 scrollY:  "50vh",
			 scrollX: "auto",
			 scroller: true,
			 scrollCollapse:true,
			 paging:false, 
			 filter:false,   	 	   
			 dom: '<<"top" ip>flt>', 
			 columns: dataHeader,   
			 data:dataset, 
			 columnDefs: [{"targets": [0,1],"width": "10px","className":"dt-head-center"},
			              {"targets": "_all","className": "dt-head-center","orderable": false,"searchable": false}],
			 fixedColumns:   {leftColumns: 2 ,  rightColumns: 2  },
			 fnDrawCallback: function(oSettings) {
				 if(this.fnSettings().bSorted){
					 reOrderVisibleRows('generateproIncometbl');
				 }
			 }    	
		 }).draw();
		 
		 
		 var incomechart = c3.generate({
			 bindto: '#projectionOfInc',
			 title: { show : false,text : 'Projection of Income',position : 'top-center',padding : { top: 20, right: 20, bottom: 40, left: 50}},
			 grid: { x: { show: true },y: { show: true }},
			 zoom: { enabled: true},
			 legend: {position: 'right'},
			 data: { json: incomedata,	
				 	 keys :{x: 'Age',
				 		 	value: ['Annual Income', 'Accumlation Income']},
				 		 	type: 'bar',
				 		 	colors: {'Annual Income': function(d) { 
				 		 		return d.value < 0 ? 'red' : '#97BC62FF'; 
				 		 	},
				 		 	'Accumlation Income': function(d) { 
				 		 		return d.value < 0 ? 'red' : '#EA738DFF'; }}
				 		 },
			 axis: { x: { label: 'Age'}, y : {label: 'Income Amount',tick: {format: d3.format("$,")},show: true}},
			 tooltip: {format: {title: function (d) { return 'Income at Age ' + d; },value: function (value, ratio, id) {var format =  d3.format('$,');return format(value);} }},////value: d3.format(',') // apply this format to both y and y2
			 size: {height: 450,width: 890}
		 });
		 
		 
		 d3.selectAll('#projectionOfInc *').each(function (e) {
			    if (d3.select(this).style('fill-opacity') == 0)
			        d3.select(this).style('opacity', 0);
			    d3.select(this).style('fill', d3.select(this).style('fill'));
			    d3.select(this).style('stroke', d3.select(this).style('stroke'));
			});
		d3.selectAll('#projectionOfInc text').each(function (e) {
		    d3.select(this).style('font-size', d3.select(this).style('font-size'));
		    d3.select(this).style('font-family', d3.select(this).style('font-family'));
		});
	
			// html2canvas does not recognize dy
		d3.selectAll('#projectionOfInc tspan').each(function (e) {
		    // convert em to px
		    if (d3.select(this).attr('dy').indexOf('em') !== -1 && d3.select(this).style('font-size').indexOf('px') !== -1) {
		        d3.select(this).attr('dy', d3.select(this).attr('dy').replace('em', '') * d3.select(this).style('font-size').replace('px', ''));
		    }
		    if (d3.select(this).attr('dy') != 0) {
		    	d3.select(this.parentNode).attr('y', Number(d3.select(this.parentNode).attr('y')) + Number(d3.select(this).attr('dy')));
			    d3.select(this).attr('dy', 0);
		    }
		});
		loadProjectionofIncomeDynamicChart();
	}

	
	 var newgrpth = '<tr role="row" style="height: 0px;"><th colspan="2" class="sorting_disabled dt-head-center" style="width: 20px;">Classification</th>';
	 var newgrpdetth = '<tr role="row" style="height: 0px;">';
	 var totalhdr = dataHeader.length;
	 
	 $("#generateproIncometbl thead tr th").each(function(jv,row){
		 
		 var mnheader=$(this).text();
		 $(this).prop("title",mnheader);
		 
		 if(jv<(totalhdr-2)){
			 var lbl = mnheader.indexOf("_") >0 ? mnheader.substring(0,mnheader.indexOf("_")) : mnheader;
			 $(this).prop("title",lbl);
			 newgrpdetth += '<th class="sorting_disabled dt-head-center shortlen" >'+lbl+'</th>';
		 }
		 		 		 
		 
		 for (var i = 0; i < groupheader.length; i++){
			 var grp = groupheader[i].group;
			 var desc = groupheader[i].desc;
			 if(mnheader == desc){
				 var lbl = grp.indexOf("_") > 0 ? grp.substring(0,grp.indexOf("_")) : grp;
				 $(this).prop("title",lbl);
				 newgrpth += '<th class="sorting_disabled dt-head-center shortlen">'+lbl+'</th>';
			 }			    //$(this).prop("title",rowonehrtxt);
		}	 
	 });
	 newgrpth += '<th rowspan="2" class="sorting_disabled dt-head-center shortlen" style="background-color:#337AB7;color:white"> Total<br/> Annual<br/> Income($)</th><th rowspan="2" class="sorting_disabled dt-head-center" style="width:20px;;background-color:#337AB7;color:white">Total<br/> Accumulation <br/>Income($)</th></tr>';
	 newgrpdetth += '</tr>';
	 
	 
//	 $("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").remove();
//	 $("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead").append(newgrpth);
//	 $("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead").append(newgrpdetth);
	 
		var len=Number($("#generateproIncometbl thead tr:eq(0)").find("th").length);
		
		$("#generateproIncometbl_wrapper").css("width","100%");
//		$("#generateproIncometbl_wrapper").css("width","auto");
		$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th").css("text-align","center");
//		$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th").addClass("shortlens");	
	

//		$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th").css("text-align","center");		
//		$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr:eq(0)").find("th:eq('"+(Number(len)-1)+"')").css("background-color","#337AB7").css("color","white").css("border-bottom","none");
//		$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr:eq(0)").find("th:eq('"+(Number(len))+"')").css("background-color","#337AB7").css("color","white").css("border-bottom","none");
		 
		/*$("#generateproIncometbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").each(function(){
			$(this).find("td:eq(0)").css("text-align","left");
			$(this).find("td:eq(1)").css("text-align","left");
		});*/
		
		$("#generateproIncometbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").each(function(){
			$(this).find("td:eq(0)").css("text-align","center");
			$(this).find("td:eq(1)").css("text-align","center");
//			$(this).find("td:eq(5)").css("width","9%");
		});
	
		
		$("#generateproIncometbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+(Number(len)-2)+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
		$("#generateproIncometbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+(Number(len)-1)+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
		
		$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner table thead tr:eq(0) th").each(function(i,row){
//			var rowonehrtxt=$(this).text(); 
//			if(rowonehrtxt.indexOf('-') > -1){
//				var split=rowonehrtxt.split("-")[0]; 
//				$(this).text("");
//				$(this).text(split.substr(0,5)+"<sup>**</sup>");
//				$(this).prop("title",split);
//			}
//			
//			$(this).text("");
//			$(this).html(rowonehrtxt);
//			$(this).prop("title",rowonehrtxt);
			$(this).addClass("midlen");
//			$(this).css("max-width","150px !important");
		});
	 	 
		//$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr:eq(1)").remove(); 
//		var tablApd=$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead").append("<tr><th style='text-align:center'>Self Age</th><th style='text-align:center'>Spouse Age</th>"); 
//	$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr:eq(0)").find("th:eq(1)").remove();
//	$("#generateproIncometbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr:eq(0)").find("th:eq(0)").attr("colspan","2").text("Classification");
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
  
  
  showLoader();
  setTimeout(function(){
	  getRDIncomeAndExp();
	  hideLoader();
  }, 1500);
			
}
//DHTML SELECT ALL

var count=0;

function loadProjectionofIncomeDynamicChart(){       
    var ProjectionofIncomecanvasDiv = document.getElementById("ProjectionofIncomecanvasDiv");
    ProjectionofIncomecanvasDiv.innerHTML="";
    ProjectionofIncomecanvasDiv.innerHTML="<canvas id='ProjectionofIncomecanvas' class=''></canvas>";
    var chart;
    var config;
     
    //Filter data here based on the condition
    
    var ProfIncomecanvas = document.getElementById("ProjectionofIncomecanvas");
    var ProjectionofIncomechartType;

    

   
    var labels = incomedataforALL.map(function (e) {
        return e.Age;
    });
    var data1 = incomedataforALL.map(function (e) {
        return e.AnnualIncome;
    });
    var data2 = incomedataforALL.map(function (e) {
        return e.AccumlationIncome;
    });

   
    var randomColorGenerator = () => {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };

    len = data1.length;
    var bgColors = function (len) {
        var bgArray = new Array(len);
        for (var j = 0; j < len; j++) {
            bgArray[j] = randomColorGenerator();
        }
        return bgArray;
    }

    //Line chart

    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
        draw: function (ease) {
            Chart.controllers.line.prototype.draw.call(this, ease);

            if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
                var activePoint = this.chart.tooltip._active[0],
                ctx = this.chart.ctx,
                    x = activePoint.tooltipPosition().x,
                    topY = this.chart.legend.bottom,
                    bottomY = this.chart.chartArea.bottom;

                // draw line
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#4aa2eb';
                ctx.stroke();
                ctx.restore();
            }
        }
    });
    

        ProjectionofIncomechartType = document.getElementById("ProjectionofIncomechartType").value;

         //BarChart

         if (ProjectionofIncomechartType == "Bar") {
            var fund1data = {
                label: 'Annual Income',
                data: data1,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(0, 99, 132, 0.9)',
                hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
            };


            var fund2data = {
                label: 'Accumlation Income',
                data: data2,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(99, 132, 0, 0.9)',
                hoverBackgroundColor: 'rgba(99, 132, 0, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
            };

            var fundData = {
                labels: labels,
                datasets: [fund1data, fund2data],
                //datasets: [fund1data],

            };

            config = {
                type: 'bar',
                data: fundData,
                options: {
                	 
                    tooltips: {
                        mode: 'label',
                        callbacks: {
                        	 title: function(tooltipItem, data) {
                                 return 'Age: ' + tooltipItem[0].xLabel ;
                                 },
                            label: (tooltipItem, data) => {
                                return data.datasets[tooltipItem.datasetIndex].label + ": $ " + tooltipItem.yLabel;
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return 'Total: $ ' + total.toFixed(3);
                            }
                        }
                    },
                    plugins: {
                        labels: false
                },
                    scales: {

                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Age'
                            }, ticks: {

                                minRotation: 0,
                                maxRotation: 80,
                            },
                            //  stacked:true//Stacked bar chart

                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Annual Income'
                            },
                            
                            id: "y-axis-AnnualIncome",
                            ticks: {
                                beginAtZero: true,
                                 callback: function(value, index, values) {
                                    return '$ ' + value;
                                }
                            }
                            // stacked:true//Stacked bar chart
                        } 
                        ]
                    },
                    pan: {
                        enabled: true,
                        mode: "x",
                        speed: 10,
                        threshold: 10,
                        onPan: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        onZoom: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "default"; }


                    }
                }
            };

        }
        //line chart
        if (ProjectionofIncomechartType == "Line") {
            config = {
                type: 'LineWithLine',
                data: {
                    labels: labels,
                    datasets: [
                    {
                        label: 'Annual Income',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: data1,
                        fill: false,
                        lineTension: 0,
                    }, {
                        label: 'Accumlation Income',
                        fill: false,
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: data2,
                        lineTension: 0,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: ' '
                    },
                    tooltips: {
                        mode: 'index',
                        callbacks: {
                        	 title: function(tooltipItem, data) {
                                 return 'Age: ' + tooltipItem[0].xLabel ;
                                 },
                            label: (tooltipItem, data) => {
                                return data.datasets[tooltipItem.datasetIndex].label + ": $ " + tooltipItem.yLabel;
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return 'Total: $ ' + total.toFixed(3);
                            }
                        },
                        intersect: false
                    },
                    plugins: {
                        labels: false
                },
                    hover: {
                        mode: 'index',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Age'
                            },
                            ticks: {
                                minRotation: 0,
                                maxRotation: 80,
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Annual Income'
                            },
                            id: "y-axis-AnnualIncome",
                            ticks: {
                                beginAtZero: true,
                                 callback: function(value, index, values) {
                                    return '$ ' + value;
                                }
                            }
                        }]
                    },
                    pan: {
                        enabled: true,
                        mode: "xy",
                        speed: 10,
                        threshold: 10,
                        onPan: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        sensitivity: 3,
                        speed: 0.1,
                        threshold: 2,
                        onZoom: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { ProjectionofIncomecanvas.style.cursor = "default"; }

                    }
                }
            };
        }
        //Pie chart

        if (ProjectionofIncomechartType == "Pie") {

            config = {
                type: 'pie',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColors(len),
                        label: 'Annual Income'
                    },{
                        data: data2,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Accumlation Income'

                    }],
                    labels: labels
                },
                options: {
                	 
                    responsive: true,
                    
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Annual Income and Accumlation Income Chart'
                    },
                    
                    tooltips: {
                        callbacks: {
                        	
                            label: function (item, data) {
                                return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                            }
                        }
                    },
                    plugins: {
                        labels: false
                }
                },
            };

        }
        //Donut chart
        if (ProjectionofIncomechartType == "Doughnut") {

            var bgColor = bgColors(len);
            config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Annual Income'

                    }, {
                        data: data2,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Accumlation Income'

                    }],
                    labels: labels
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Annual Income'
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    tooltips: {
                        callbacks: {
                            label: function (item, data) {
                                return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                            }
                        }
                    },
                    plugins: {
                        labels: false
                }
                }
            };
        }
         
        window.resetZoom = function () {
            chart.resetZoom();
        };

        
        var ctx = document.getElementById('ProjectionofIncomecanvas').getContext('2d');
        chart = new Chart(ctx, config);
        chart.destroy();
        
        chart = new Chart(ctx, config);

        let datasetLength = config.data.datasets.length;

//        var labels = incomedataforALL.map(function (e) {
//        return e.Age;
//    });
//    var data1 = incomedataforALL.map(function (e) {
//        return e.AnnualIncome;
//    });
//    var data2 = incomedataforALL.map(function (e) {
//        return e.AccumlationIncome;
//    });



         
        var bgColor;
        if (config.type == "doughnut" || config.type == "pie") {
            bgColor = bgColors(data1.length);
        }
        config.data.datasets[0].data = data1;
        if (bgColor != undefined) {
            config.data.datasets[0].backgroundColor = bgColor;

        }

        if (datasetLength == 2) {
            let  data2 = incomedataforALL.map(function (e) {
               return e.AccumlationIncome;
            });

            config.data.datasets[1].data = data2;
            if (bgColor != undefined) {
                config.data.datasets[1].backgroundColor = bgColor;

            }


        }

        config.data.labels = labels;
        chart.update();
        chart.resetZoom();
        

}



function SelAllRDIncAss(obj){
	
	if($(obj).is(":checked")){
		
		$('#RDIncAsstbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#RDIncAssDelRow").attr("disabled",false);
		$('#RDIncAsstbl tbody tr').addClass("selected");
		
		var $rowCount = $('#RDIncAsstbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#RDIncAssEditRow").attr("disabled",true);
			$("#RDIncAssDelRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#RDIncAssEditRow").attr("disabled",false);
			$("#RDIncAssDelRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#RDIncAssEditRow").attr("disabled",true);*/
			$("#RDIncAssDelRow").attr("disabled",false);
		}
		
	}else{
		
		$('#RDIncAsstbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#RDIncAsstbl tbody tr').removeClass("selected");
		
		/*$("#RDIncAssEditRow").attr("disabled",true);
		$("#RDIncAssDelRow").attr("disabled",true);*/
		
	}
}

/*Edit Row Click */
$("#RDIncAssEditRow").on("click",function(){
	var isOneRowSelected=0;
	var $rowCount = $('#RDIncAsstbl tbody tr').length;	
	var $lastRow = $("#RDIncAsstbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDIncAsstbl tbody").find('input[name="radRDincAssretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDIncAsstbl tbody").find('input[name="radRDincAssretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDincAssretRdlyflds($mode);
					RDincAssretfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgprojIncAssAgePayends'),$("#txtFldDlgprojIncAssEslrate"),$("#selDlgprojIncAssFreq")))return; 
					showFIPAModel('ProjOfIncAss_Dialog','Income and assets available for retirement'); 
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#ProjOfIncAss_Dialog').on('shown.bs.modal', function () {
//						$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#ProjOfIncAss_Dialog").find("input[id=txtFldDlgprojIncAssClsfy]").focus();
						$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatRDincAssretDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDincAssretfilldomval($RowId,$row); 
					     		}  
					     		if(!rdFrequencyValidation($row.find("td:eq(10)").find('input:eq(0)'),$row.find("td:eq(6)").find('input:eq(0)'),$row.find("td:eq(4)").find('select:eq(0)')))return;
					     		getRDcfIncDets();
								$('#ProjOfIncAss_Dialog').modal('hide'); 
								RDincAssretClearFlds();
							
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
$("#RDIncAssViewRow").on("click",function(){
	var isOneRowSelected=0;
	var $rowCount = $('#RDIncAsstbl tbody tr').length;	
	var $lastRow = $("#RDIncAsstbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDIncAsstbl tbody").find('input[name="radRDincAssretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDIncAsstbl tbody").find('input[name="radRDincAssretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDincAssretRdlyflds($mode);
					RDincAssretfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgprojIncAssAgePayends'),$("#txtFldDlgprojIncAssEslrate"),$("#selDlgprojIncAssFreq")))return; 
					showFIPAModel('ProjOfIncAss_Dialog','Income and assets available for retirement');  
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#ProjOfIncAss_Dialog').on('shown.bs.modal', function () {
//						$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#ProjOfIncAss_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatRDincAssretDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDincAssretfilldomval($RowId,$row); 
					     		}  
					     		if(!rdFrequencyValidation($row.find("td:eq(10)").find('input:eq(0)'),$row.find("td:eq(6)").find('input:eq(0)'),$row.find("td:eq(4)").find('select:eq(0)')))return;
					     		getRDcfIncDets();
								$('#ProjOfIncAss_Dialog').modal('hide'); 
								RDincAssretClearFlds();
							
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
$("#RDIncAssDelRow").on("click",function(){  
	datatableDeleteRow("RDIncAsstbl",RDIncAsstbl,'SelRDIncAss','RDIncAssEditRow','RDIncAssDelRow'); 
/*//	DHTML CRUD ICONS
	var rc = RDIncAsstbl.row().count();
	if(rc ==0){
		$("#SelRDIncAss").prop("checked",false);
		crudicons(null,'RDIncAsstbl','SelRDIncAss','RDIncAssEditRow','RDIncAssDelRow');
	}
//	DHTML CRUD ICONS
*/	

});

/*Clear Fields */
function RDincAssretClearFlds(){
	$("#ProjOfIncAss_Dialog").find("input[type=text]").val("");
	$("#ProjOfIncAss_Dialog").find("textarea").val("");
	$("#ProjOfIncAss_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function RDincAssretRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#ProjOfIncAss_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#ProjOfIncAss_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatRDincAssretDetails(){
	   

	/*if(!(validateFocusFlds('ProjOfIncAss_Dialog','txtFldDlgprojIncAssClsfy', INCASS_CLSFY))) return;
	if(!(validateFocusFlds('ProjOfIncAss_Dialog','selDlgprojIncAssFreq', INCASS_FREQ))) return;
	if(!(validateFocusFlds('ProjOfIncAss_Dialog','selDlgprojIncAssAgeBsOn', INCASS_AGEBSD))) return;
	if(!(validateFocusFlds('ProjOfIncAss_Dialog','txtFldDlgprojIncAssAgePaySts',INCASS_AGESTS))) return;
	if(!rdFrequencyValidation($('#txtFldDlgprojIRAgePayends'),$("#txtFldDlgprojIncAssEslrate"),$("#selDlgprojIncAssFreq")))return; 
	if(!rdStartAgeValidate($('#txtFldDlgprojIRAgePaySts'),$('#selDlgprojIRAgeBsOn')))return;
	if(!rdEndAgeValidate($('#txtFldDlgprojIRAgePaySts'),$("#txtFldDlgprojIncAssAgePayends")))return;*/
	  return true; 
}



/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgprojIncAssClsfy," +
		"#selDlgprojIncAssFreq," +
		"#selDlgprojIncAssAgeBsOn,#txtFldDlgprojIncAssAgePaySts").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});


/* Filling Model Fields*/
function RDincAssretfilldlgval($lastRow){
	  
	  
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssClsfy').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssDesc').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #selDlgprojIncAssFreq').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssAmtofInc').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssEslrate').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssRoi').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #selDlgprojIncAssAgeBsOn').val($lastRow.find("td:eq(8)").find('select:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssAgePaySts').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssAgePayends').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssCrtdBy').val($lastRow.find("td:eq(10)").find('input:eq(1)').val());
	  $('#ProjOfIncAss_Dialog #txtFldDlgprojIncAssCrtdDate').val($lastRow.find("td:eq(10)").find('input:eq(2)').val());
	
}

/* Filling Table Fields*/
function RDincAssretfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgprojIncAssClsfy").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgprojIncAssDesc").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgprojIncAssFreq").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgprojIncAssAmtofInc").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgprojIncAssEslrate").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgprojIncAssRoi").val()); 
	$row.find("td:eq(8)").find('select:eq(0)').val($("#selDlgprojIncAssAgeBsOn").val());  
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgprojIncAssAgePaySts").val());  
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgprojIncAssAgePayends").val());  
			
}

   
/*Synchronizatin to Retirement to RPCF Analysis*/

//Income to be received during retirement

function syncToRpcf2(){
	
	 var intretslfage=Number($("#retSelfAge").val());
	 var basedon=$("#retAgeBasedon").val().toUpperCase();

	 var totAge=Number($("#retSelfProjage").val());
	

	 
		var cell0 = '<span></span>'+
		'<input type="hidden" name="txtFldRDincretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldprojIRId">';
		 
		var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radRDincretSelect"/><label>&nbsp;</label></div>'; 
		var cell2 = '<input type="text" name="txtFldprojIRClsfy" class="form-control editable"   onmouseover="fipaTooltip(this);" />'; 
		var cell3 = '<input type="text" name="txtFldprojIRDesc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell4 = '<select type="text" name="selprojIRFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
		var cell5 = '<input type="text" name="txtFldprojIRAmtofInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell6 = '<input type="text" name="txtFldprojIREslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell7 = '<input type="text" name="txtFldprojIRRoi" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell8 = '<select type="text" name="selprojIRAgeBsOn" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
		var cell9 = '<input type="text" name="txtFldprojIRAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell10 ='<input type="text" name="txtFldprojIRAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);" />'+
		'<input type="hidden" name="txtFldprojIRCrtdBy"/><input type="hidden" name="txtFldprojIRCrtdDate"/>'; 



		 var rowCount;
		 var $lastRow;	
		 
		 var $rowCount = IncRetPlgtbl.rows().count();

		 
		 if($rowCount >0){
			 
			 $("#IncRetPlgtbl tbody tr").each(function(i,row){ 
				 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
				 if(mode_r != "D"){
					 RDInctbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

					var rowCount = $('#RDInctbl tbody tr:visible').length;	
					rowCount =  (rowCount == 0) ? $('#RDInctbl tbody tr').length : rowCount;
					var $lastRow = $("#RDInctbl tbody tr:last");	
						  
					$lastRow.find("td:first").find('span').text(rowCount); 
					
					 
					 var irfreq = $("#selDlgIRFreq > option").clone();
					var iragebsed =  $("#selDlgIRAgeBsOn > option").clone();

					$lastRow.find("td:eq(1)").find("input:first").click(function(){
						selectSingleRow(this);
					});

					$lastRow.find("td:eq(1)").find("input:first").attr('id',"radRDincret"+$lastRow.index())
					.parent().find('label').attr('for',"radRDincret"+$lastRow.index());


					$lastRow.find("td:eq(2)").find('input:eq(0)').val($(this).find("td:eq(2)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(2)").find('input:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(3)").find('input:eq(0)').val($(this).find("td:eq(3)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(3)").find('input:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(4)").find('select:eq(0)').append(irfreq);
					$lastRow.find("td:eq(4)").find('select:eq(0)').val(isEmpty($(this).find("td:eq(4)").find('select:eq(0)').val())? "REGULAR" : $(this).find("td:eq(4)").find('select:eq(0)').val());
//					$lastRow.find("td:eq(4)").find('select:eq(0)').prop("disabled",true);
					

					$lastRow.find("td:eq(5)").find('input:eq(0)').val(isEmpty($(this).find("td:eq(5)").find('input:eq(0)').val())? Number("0") : $(this).find("td:eq(5)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(5)").find('input:eq(0)').prop("disabled",true);
					$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
					
					$lastRow.find("td:eq(6)").find('input:eq(0)').val(isEmpty($(this).find("td:eq(6)").find('input:eq(0)').val())? Number("0") : $(this).find("td:eq(6)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(6)").find('input:eq(0)').prop("disabled",true);
					$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");
					
					$lastRow.find("td:eq(7)").find('input:eq(0)').val(isEmpty($(this).find("td:eq(7)").find('input:eq(0)').val())? Number("0") : $(this).find("td:eq(7)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(7)").find('input:eq(0)').prop("disabled",true);
					$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");
					
					$lastRow.find("td:eq(8)").find('select:eq(0)').append(iragebsed);
					$lastRow.find("td:eq(8)").find('select:eq(0)').val(isEmpty($(this).find("td:eq(8)").find('select:eq(0)').val())?  basedon : $(this).find("td:eq(8)").find('select:eq(0)').val());
//					$lastRow.find("td:eq(8)").find('select:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(9)").find('input:eq(0)').val(isEmpty($(this).find("td:eq(9)").find('input:eq(0)').val())? Number("0") :$(this).find("td:eq(9)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(9)").find('input:eq(0)').prop("disabled",true);
					
					
					$lastRow.find("td:eq(10)").find('input:eq(0)').val(isEmpty($(this).find("td:eq(10)").find('input:eq(0)').val())?  Number("0") : $(this).find("td:eq(10)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					}); 					

					$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					}); 
					
					$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
						if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$(this)))return;  
						getRDcfIncDets();
					}); 

					$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});

					$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});

					$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});
				

					$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){
						if(!rdStartAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
						getRDcfIncDets();
					}); 

					$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
						if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(8)").find('select:eq(0)')))return;
						getRDcfIncDets();
					}); 

					$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
						if(!rdEndAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
						getRDcfIncDets();
					}); 

					rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('select:eq(0)'));
					applyEventHandlers();
			 }
				 
			});
			 
		 }
		
}



//Income and assets available for retirement

function syncToRpcf3(){
	
	 var intretslfage=Number($("#retSelfAge").val());
	 var basedon=$("#retAgeBasedon").val().toUpperCase();

	 var totAge=Number($("#retSelfProjage").val());
	
		var cell0 = '<span></span>'+
		'<input type="hidden" name="txtFldRDincAssretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldprojIncAssId">';
		 
		var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radRDincAssretSelect"/><label>&nbsp;</label></div>'; 
		var cell2 = '<input type="text" name="txtFldprojIncAssClsfy" class="form-control editable"   onmouseover="fipaTooltip(this);" />'; 
		var cell3 = '<input type="text" name="txtFldprojIncAssDesc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell4 = '<select type="text" name="selprojIncAssFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
		var cell5 = '<input type="text" name="txtFldprojIncAssAmtofInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell6 = '<input type="text" name="txtFldprojIncAssEslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell7 = '<input type="text" name="txtFldprojIncAssRoi" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell8 = '<select type="text" name="selprojIncAssAgeBsOn" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
		var cell9 = '<input type="text" name="txtFldprojIncAssAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell10 ='<input type="text" name="txtFldprojIncAssAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);" />'+
		'<input type="hidden" name="txtFldprojIncAssCrtdBy"/><input type="hidden" name="txtFldprojIncAssCrtdDate"/>'; 



		
		 var $rowCount = IncAssRetPlgtbl.rows().count();
		 
		 if($rowCount >0){
			 $("#IncAssRetPlgtbl tbody tr").each(function(i,row){  
				 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
				 
				 if(mode_r != "D"){
					
					RDIncAsstbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

					var rowCount = $('#RDIncAsstbl tbody tr:visible').length;	
					rowCount =  (rowCount == 0) ? $('#RDIncAsstbl tbody tr').length : rowCount;
					var $lastRow = $("#RDIncAsstbl tbody tr:last");	

					$lastRow.find("td:first").find('span').text(rowCount); 

					$lastRow.find("td:eq(1)").find("input:first").click(function(){
						selectSingleRow(this);
					})

					$lastRow.find("td:eq(1)").find("input:first").attr('id',"radRDincAssret"+$lastRow.index())
					.parent().find('label').attr('for',"radRDincAssret"+$lastRow.index());


					var clasification  = $(this).find("td:eq(2)").find('input:eq(0)').val();
					$lastRow.find("td:eq(2)").find('input:eq(0)').val(clasification);
					$("#rpcfIncomeAssetList").append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="showRPCFIncomeAssetRow(this)">'+clasification+'</a></li>')
//					$lastRow.find("td:eq(2)").find('input:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(3)").find('input:eq(0)').val($(this).find("td:eq(3)").find('input:eq(0)').val());
//					$lastRow.find("td:eq(3)").find('input:eq(0)').prop("disabled",true);
					
					var iasfreq = $("#selDlgIncAssFreq > option").clone();
					$lastRow.find("td:eq(4)").find('select:eq(0)').append(iasfreq);
					$lastRow.find("td:eq(4)").find('select:eq(0)').val((isEmpty($(this).find("td:eq(4)").find('select:eq(0)').val())? "REGULAR" :  $(this).find("td:eq(4)").find('select:eq(0)').val()) );
//					$lastRow.find("td:eq(4)").find('select:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(5)").find('input:eq(0)').val())? Number("0") :  Number($(this).find("td:eq(5)").find('input:eq(0)').val())));
//					$lastRow.find("td:eq(5)").find('input:eq(0)').prop("disabled",true);
					$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
					
					$lastRow.find("td:eq(6)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(6)").find('input:eq(0)'))? Number("0") :  Number($(this).find("td:eq(6)").find('input:eq(0)').val())));
//					$lastRow.find("td:eq(6)").find('input:eq(0)').prop("disabled",true);
					$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");
					
					$lastRow.find("td:eq(7)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(7)").find('input:eq(0)').val())? Number("0") :  Number($(this).find("td:eq(7)").find('input:eq(0)').val()))); 
//					$lastRow.find("td:eq(7)").find('input:eq(0)').prop("disabled",true);
					$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");
					
					var iassagebsed =  $("#selDlgIncAssAgeBsOn > option").clone();
					$lastRow.find("td:eq(8)").find('select:eq(0)').append(iassagebsed);
					$lastRow.find("td:eq(8)").find('select:eq(0)').val((isEmpty($(this).find("td:eq(8)").find('select:eq(0)').val())? basedon :  $(this).find("td:eq(8)").find('select:eq(0)').val()));
//					$lastRow.find("td:eq(8)").find('select:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(9)").find('input:eq(0)').val())? intretslfage : Number($(this).find("td:eq(9)").find('input:eq(0)').val())));
//					$lastRow.find("td:eq(9)").find('input:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(10)").find('input:eq(0)').val())? totAge : Number($(this).find("td:eq(10)").find('input:eq(0)').val())));
//					$lastRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
					
					$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});

					$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});

					$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
						if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$(this)))return;
						getRDcfIncDets();
					}); 

					$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});
					

					$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});

					$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
						getRDcfIncDets();
					});

					$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){ 
						if(!rdStartAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
						getRDcfIncDets();
					}); 

					$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
						if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(8)").find('select:eq(0)')))return;
						getRDcfIncDets();
					}); 

					$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
						if(!rdEndAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
						getRDcfIncDets();
					}); 

					rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('select:eq(0)'));
					
					applyEventHandlers();
					
			 }
					  
			});  	
			 
			 
			 var inner = [];
			 $('#rpcfIncomeAssetList li').each( function(index, Element){
			     if (jQuery.inArray(this.innerHTML, inner) == -1){
			       inner.push(this.innerHTML);
			     }
			     else {
			       $(this).remove();
			     }
			 });
			 
		 }
		 
		 
			 
} 


function syncToRpcf4(){
	
	 var intretslfage=Number($("#retSelfAge").val());
	 var basedon=$("#retAgeBasedon").val().toUpperCase();

	 var totAge=Number($("#retSelfProjage").val());
	

	 
		var cell0 = '<span></span>'+
		'<input type="hidden" name="txtFldRDincretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldprojIRId">';
		 
		var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radRDincretSelect"/><label>&nbsp;</label></div>'; 
		var cell2 = '<input type="text" name="txtFldprojIRClsfy" class="form-control editable"   onmouseover="fipaTooltip(this);" />'; 
		var cell3 = '<input type="text" name="txtFldprojIRDesc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell4 = '<select type="text" name="selprojIRFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
		var cell5 = '<input type="text" name="txtFldprojIRAmtofInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell6 = '<input type="text" name="txtFldprojIREslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell7 = '<input type="text" name="txtFldprojIRRoi" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell8 = '<select type="text" name="selprojIRAgeBsOn" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
		var cell9 = '<input type="text" name="txtFldprojIRAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
		var cell10 ='<input type="text" name="txtFldprojIRAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);" />'+
		'<input type="hidden" name="txtFldprojIRCrtdBy"/><input type="hidden" name="txtFldprojIRCrtdDate"/>'; 



		 
		 var $rowCount = IncAssRetPlgtbl.rows().count();
		 
		 if($rowCount >0){
			 
			 $("#IncAssRetPlgtbl tbody tr").each(function(i,row){ 
				 
				 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
				 if(mode_r != "D"){
				var subclasify =  $(this).find("td:eq(2)").find('input:eq(1)').val();
				var description =  $(this).find("td:eq(2)").find('input:eq(0)').val();
				
					if(description == "Investment" || description == "Insurance"){
						 
						
						RDIncDisImbtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

						var rowCount = $('#RDIncAsstbl tbody tr').length;	
						rowCount =  (rowCount == 0) ? $('#RDIncAsstbl tbody tr').length : rowCount;
						var $lastRow = $("#RDIncDisImbtbl tbody tr:last");	

						$lastRow.find("td:first").find('span').text(rowCount); 

						$lastRow.find("td:eq(1)").find("input:first").click(function(){
							selectSingleRow(this);
						})

						$lastRow.find("td:eq(1)").find("input:first").attr('id',"radRDincAssret"+$lastRow.index())
						.parent().find('label').attr('for',"radRDincAssret"+$lastRow.index());


						$lastRow.find("td:eq(2)").find('input:eq(0)').val($(this).find("td:eq(2)").find('input:eq(0)').val());
//						$lastRow.find("td:eq(2)").find('input:eq(0)').prop("disabled",true);
						
						$lastRow.find("td:eq(3)").find('input:eq(0)').val($(this).find("td:eq(3)").find('input:eq(0)').val());
//						$lastRow.find("td:eq(3)").find('input:eq(0)').prop("disabled",true);
						
						var iasfreq = $("#selDlgIncAssFreq > option").clone();
						$lastRow.find("td:eq(4)").find('select:eq(0)').append(iasfreq);
						$lastRow.find("td:eq(4)").find('select:eq(0)').val((isEmpty($(this).find("td:eq(4)").find('select:eq(0)').val())? "REGULAR" :  $(this).find("td:eq(4)").find('select:eq(0)').val()) );
//						$lastRow.find("td:eq(4)").find('select:eq(0)').prop("disabled",true);
						
						$lastRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(5)").find('input:eq(0)').val())? Number("0") :  Number($(this).find("td:eq(5)").find('input:eq(0)').val())));
//						$lastRow.find("td:eq(5)").find('input:eq(0)').prop("disabled",true);
						$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
						
						$lastRow.find("td:eq(6)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(6)").find('input:eq(0)'))? Number("0") :  Number($(this).find("td:eq(6)").find('input:eq(0)').val())));
//						$lastRow.find("td:eq(6)").find('input:eq(0)').prop("disabled",true);
						$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");
						
						$lastRow.find("td:eq(7)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(7)").find('input:eq(0)').val())? Number("0") :  Number($(this).find("td:eq(7)").find('input:eq(0)').val()))); 
//						$lastRow.find("td:eq(7)").find('input:eq(0)').prop("disabled",true);
						$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");
						
						var iassagebsed =  $("#selDlgIncAssAgeBsOn > option").clone();
						$lastRow.find("td:eq(8)").find('select:eq(0)').append(iassagebsed);
						$lastRow.find("td:eq(8)").find('select:eq(0)').val((isEmpty($(this).find("td:eq(8)").find('select:eq(0)').val())? basedon :  $(this).find("td:eq(8)").find('select:eq(0)').val()));
//						$lastRow.find("td:eq(8)").find('select:eq(0)').prop("disabled",true);
						
						$lastRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(9)").find('input:eq(0)').val())? intretslfage : Number($(this).find("td:eq(9)").find('input:eq(0)').val())));
//						$lastRow.find("td:eq(9)").find('input:eq(0)').prop("disabled",true);
						
						$lastRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(10)").find('input:eq(0)').val())? totAge : Number($(this).find("td:eq(10)").find('input:eq(0)').val())));
//						$lastRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
						
						$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
							getRDcfIncDets();
						});

						$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
							getRDcfIncDets();
						});

						$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
							if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$(this)))return;
							getRDcfIncDets();
						}); 

						$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
							getRDcfIncDets();
						});
						

						$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
							getRDcfIncDets();
						});

						$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
							getRDcfIncDets();
						});

						$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){ 
							if(!rdStartAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
							getRDcfIncDets();
						}); 

						$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
							if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(8)").find('select:eq(0)')))return;
							getRDcfIncDets();
						}); 

						$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
							if(!rdEndAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
							getRDcfIncDets();
						}); 

						rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('select:eq(0)'));
						
						applyEventHandlers();
						  
				
						
						
					}
			 }
				 
			});
			 
		 }
		
		   	 
			 
}


/*Auto complete*/
$("#txtFldDlgprojIRAgePaySts").on("change",function(){
	
	var array=[];
	var selfAge=isEmpty($("#txtFldDlgprojIRAgePaySts").val()) ? "" : Number($("#txtFldDlgprojIRAgePaySts").val());
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	
	if (selfAge <= selfProjage) {
		   var option = ''; 
		   array=[];
		  for(var i= selfAge; i<=selfProjage;i++)
			  { 
				
				  array.push(""+i+"");
			  }  
	 } 
	 

	$("#txtFldDlgprojIRAgePayends").val("");
//	 var autocomplete = $('#txtFldDlgprojIRAgePayends').typeahead(); 
//	autocomplete.data('typeahead').source = array;

}); 

$("#txtFldDlgprojIncAssAgePaySts").on("change",function(){
	
	var array=[];
	var IncAssAgePaySts=isEmpty($("#txtFldDlgprojIncAssAgePaySts").val()) ? "" : Number($("#txtFldDlgprojIncAssAgePaySts").val());
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	
	if (IncAssAgePaySts <= selfProjage) {
		   var option = ''; 
		   array=[];
		  for(var i= IncAssAgePaySts; i<=selfProjage;i++)
			  { 
				
				  array.push(""+i+"");
			  }  
	 }  

	$("#txtFldDlgprojIncAssAgePayends").val("");
//	 var autocomplete = $('#txtFldDlgprojIncAssAgePayends').typeahead(); 
//	autocomplete.data('typeahead').source = array;

}); 
/**/

$("#btnRPCFShowInv").on("click",function(){
	
	$("#RDIncDisImbtbl tbody tr").each(function(i,row){
		var mode_r = $(this).find("td:first").find('input:eq(0)').val();
		if(mode_r != "D"){
			var classify = $(this).find("td:eq(2)").find("input:eq(0)").val();
			
			if(classify.toUpperCase() == "INVESTMENT"){
				$(this).show();
			}else{
				$(this).hide();
			}
		}
		
	});
});



$("#btnRPCFShowIns").on("click",function(){
	
	$("#RDIncDisImbtbl tbody tr").each(function(i,row){
		 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
		 if(mode_r != "D"){
			 var classify = $(this).find("td:eq(2)").find("input:eq(0)").val();
				
				if(classify.toUpperCase() == "INSURANCE"){
					$(this).show();
				}else{
					$(this).hide();
				}
		 }
		
	});
});

function showRPCFIncomeAssetRow(obj){
//	alert($(obj).text())
	var filter = $(obj).text();
	
//	var rowCount = $('#RDIncAsstbl tbody tr').length;	
//	var $lastRow = $("#RDIncAsstbl tbody tr:last");
	
	if(filter == "Show All"){
		$("#RDIncAsstbl tbody tr").each(function(){
			var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			 if(mode_r != "D"){
				 $(this).show();
			 }
		});
	}else{
		

		$("#RDIncAsstbl tbody tr").each(function(){
			var clasif = $(this).find("td:eq(2)").find("input:eq(0)").val();
			var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			if(mode_r != "D"){
			
				if(clasif.toUpperCase() == filter.toUpperCase()){
					$(this).show();
				}else{
					$(this).hide();
				}
			}
			
		});
		
	}
	
	
	
	reOrderVisibleRows("RDIncAsstbl");

	
}
