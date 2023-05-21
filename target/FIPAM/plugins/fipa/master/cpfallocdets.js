var stafftype = $('#hTxtFldLoggedStfType').val();
var frmCpfAllocation;

/*Datatable Initialisation*/
var CpfAllocRateSearch = $('#CpfAllocRateSearch').DataTable( {
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
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"orderable": false,"searchable": false}],		 
		 fnDrawCallback: function(oSettings) {
			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
				 
			    } 
    
		 }, 
}).draw();

  
function fipaInitPage(){ 
	frmCpfAllocation = document.forms[0];
	
	if(stafftype == STAFFTYPE_STAFF){ //Amin
		$("#btnAllocSave").addClass("hidden"); 
	}
	if(stafftype == STAFFTYPE_ADVISER){
		$("#btnAllocSave").addClass("hidden"); 
	}
	loadAllSymbols();
	applyEventHandlers(); 
	   showTooltip('btnAllocSrch','Search');
	   showTooltip('btnAllocSave','Save');
//	   showTooltip('btnDel','Delete');
	   
	   showTooltip('AmsCpfAlloc','Add Row For Master CPF Allocation');
	   showTooltip('EmsCpfAlloc','Edit Row For Master CPF Allocation');
	   showTooltip('DmsCpfAlloc','Delete Row For Master CPF Allocation'); 
	   showTooltip('VmsCpfAlloc','View Row For Master CPF Allocation');
	   
	   
	   showTooltip('btnFipaHome',STR_FIPA_HOME);
	   showTooltip('btnLogout',STR_FIPA_LOGOUT);
	   
	   
//   $("#btnSaveProfile").removeClass("hidden");
   $('.accordHeaderDiv').css("display","none");   
   $("#sidebar-menu ul li[id='mastercpf_li']").click(); 
   $("#sidebar-menu ul li[id='masteraccallorates']").parent().removeClass("sideMenuHighlight nv");
   $("#sidebar-menu ul li[id='masteraccallorates']").addClass("sideMenuHighlight nv");
   
   $("#SrchCpfAllocEffFrompicker,#dlgCpfAllocEffFrompicker").datetimepicker(dateOptions).on("change",function(){
		 checkDateFormat($(this));   
   });
	  
   $("#txtFldSrchCpfAllocEffFrom,#txtFldDlgCPFAllocEffFrom").on("change",function(){
		 checkDateFormat($(this));  
	 }); 
   $('#mastercpf_li').removeClass("hidden");
	$('#mastercpf_li').css("display", "block");
   hideLoader();
}


$("#btnSave").on("click",function(){ 


	var table = document.getElementById("CpfAllocRateSearch");
	var tbody = table.tBodies[0]; 
	
	var rowCount = $("#CpfAllocRateSearch tbody").find("tr").length;
	

	if(rowCount > 0){
		
		enableComboWhenSubmit(frmCpfAllocation);

		frmCpfAllocation.action = "CpfAllocationSave.do";
		frmCpfAllocation.submit();

	}

});


function validateCpfAllocAcIsExisted(cpfEFrmId,cpfAgeGrpId,cpfAccId,focusId){
	 
		var table = document.getElementById("CpfAllocRateSearch");
		var tbody = table.tBodies[0];
		var rowCount = tbody.rows.length; 
	 
	var respText;
	var srchCpfParams="";
	srchCpfParams += "&strSrchCpfAllocEFrm="+encodeURIComponent(escape(cpfEFrmId.value));
	srchCpfParams += "&strSrchCpfAllocAgeGrp="+encodeURIComponent(escape(cpfAgeGrpId.value));
	srchCpfParams += "&strSrchCpfAllocAcType="+encodeURIComponent(escape(cpfAccId.value));
	var mode ; 
	var parameter = "DBCALLFOR=CPF_ALLOC_SRCH_EXIST"+srchCpfParams;
	var validateFlag;
	
	
	if(rowCount == 0){
		if(!isEmpty(cpfEFrmId.value) && !isEmpty(cpfAgeGrpId.value) && !isEmpty(cpfAccId.value)){
			 respText = ajaxCall(parameter,servletName);
		}
	}
	
	
	
	for(var validate=0;validate<rowCount;validate++){ 
		var chkbox = tbody.rows[validate].cells[2].childNodes[0];  
			mode = tbody.rows[validate].cells[1].childNodes[0].value;
			var acct = tbody.rows[validate].cells[5].childNodes[0].value;
			  
			if( mode!='D' && false == chkbox.checked){
				validateFlag = 1; 
			} 
			
			if(!validateFlag){ 
				
				if(!isEmpty(cpfEFrmId.value) && !isEmpty(cpfAgeGrpId.value) && !isEmpty(cpfAccId.value) && (mode != 'D')){
					
					respText = ajaxCall(parameter,servletName);
				}
				return;
			}	
	   }  
	 
		var retval = respText;
		

		for ( var val in retval) {

			var tabdets = retval[val];
			
			
			if (tabdets["SESSION_EXPIRY"]) {
				window.location = BASE_URL +  SESSION_EXP_JSP;
				return;
			}
			
			if (tabdets["DB_ERROR"]) {
				window.location = BASE_URL +  DB_EXP_JSP;
				return;
			}

			for ( var tab in tabdets) {
				

				if (tabdets.hasOwnProperty(tab)) {
					
					var key = tab;
					var value = tabdets[tab];
					 
					if (key == "NOREC_FOUND") {
					
		        		 return true;
					 
					}				

					if (key == "CPF_ALLOC_AC_EXIST"){
 
						applyErrorToastrAlert("Already Exist",focusId);
						$("#txtFldDlgCPFAllocEffFrom").val("");  
						$("#selDlgCPFAllocAgeGrp").val(""); 
						$("#selDlgCPFAllocAccType").val("");  
						focusId.focus();
						return false;
					
				}
			}
		}
		
		}
		
	
}
 
			
function validateAllocDatatables(cpfEFrmId,cpfAgeGrpId,cpfAccId){
 
var table = document.getElementById("CpfAllocRateSearch");
var tbody = table.tBodies[0]; 
  
	var rowCount = tbody.rows.length;
 
	var mode;
	var validateFlag;
	
for(var edit=0;edit<rowCount;edit++){
	
	var row = tbody.rows[edit];
	var chkbox = row.cells[2].childNodes[0];
	var fstElm = row.cells[3].childNodes[0].value;
	var sndElm = row.cells[4].childNodes[0].value;
	var trdElm = row.cells[5].childNodes[0].value;
	mode = row.cells[1].childNodes[0].value; 
	
	if( mode!= 'D' && false == chkbox.checked){
		validateFlag = 1;
		 
	} 
	
	
	if(!isEmpty(cpfEFrmId.value) && !isEmpty(cpfAgeGrpId.value)  && !isEmpty(cpfAccId.value) && !(mode == DEL_MODE)){
		 
	if (cpfEFrmId.value == fstElm && cpfAgeGrpId.value == sndElm && cpfAccId.value == trdElm){
		applyErrorToastrAlert("Already Exist",cpfEFrmId);
		$("#txtFldDlgCPFAllocEffFrom").val("");   
		$("#selDlgCPFAllocAgeGrp").val(""); 
		$("#selDlgCPFAllocAccType").val("");   
		cpfEFrmId.focus();
		return false;
		
	} 

 }

	
}
 

}



$("#btnAllocSrch").on("click",function(){ 
	showLoader();
	CpfAllocRateSearch.clear().draw();  
	var srchFldsArrCpfAll = ["selSrchCpfAllocAcType","txtFldSrchCpfAllocEffFrom","selSrchCPFAllocAgeGrp"];
			var isAnySelected=true;
			$.each( srchFldsArrCpfAll, function( index, value ) {		
				 		
					if(!isEmpty($("#"+srchFldsArrCpfAll[index]).val())){
						//isAnySelected=true;								
					}
				 		
			});
			
			if(!isAnySelected){ 
				hideLoader();
				return false;
			}else{
			
				var srchCpfParams="";
				srchCpfParams += "&strSrchCpfAllocAcType="+encodeURIComponent(escape($("#selSrchCpfAllocAcType").val()));
				srchCpfParams += "&strSrchCpfAllocEffFrom="+encodeURIComponent(escape($("#txtFldSrchCpfAllocEffFrom").val()));
				srchCpfParams += "&strSrchCpfAllocAgeGroup="+encodeURIComponent(escape($("#selSrchCPFAllocAgeGrp").val()));
			 	 			
				var parameter = "DBCALLFOR=CPF_ALLOC_SEARCH"+srchCpfParams;
				
				
		 
		ajaxCall(parameter,servletName,function(Data){
			var retval = Data;
			hideLoader()
		
		for ( var val in retval) {

			var tabdets = retval[val];
			
			  
			if (tabdets["SESSION_EXPIRY"]) {
				window.location = BASE_URL +  SESSION_EXP_JSP;
				return;
			}
			
			if (tabdets["DB_ERROR"]) {
				window.location = BASE_URL +  DB_EXP_JSP;
				return;
			}

			for ( var tab in tabdets) {
				

				if (tabdets.hasOwnProperty(tab)) {
					
					var key = tab;
					var value = tabdets[tab];
					  
					if (key == "CPF_ALLOC_SEARCH"){ 
				       
						
						for ( var cont in value) {
							
							if (value.hasOwnProperty(cont)) { 
								
								var contvalue = value[cont];

								getMastCpfAllocRows(contvalue); 
							
							}
						}				
									
					}
					
				}
			}
		}
			
		
		});
 	}
});
// 
//$("#btnAllocSrch").on("click",function(){ 
//	showLoader();
//	CpfAllocRateSearch.clear().draw();  
//			var srchFldsArrCpfAll = ["selSrchCpfAllocAcType","txtFldSrchCpfAllocEffFrom","selSrchCPFAllocAgeGrp"];
//			var isAnySelected=true;
//			$.each( srchFldsArrCpfAll, function( index, value ) {		
//				 		
//					if(!isEmpty($("#"+srchFldsArrCpfAll[index]).val())){
//						//isAnySelected=true;								
//					}
//				 		
//			});
//			
//			if(!isAnySelected){ 
//				hideLoader();
//				return false;
//			}else{
//			
//			var srchCpfParams="";
//			srchCpfParams += "&strSrchCpfAllocAcType="+encodeURIComponent(escape($("#selSrchCpfAllocAcType").val()));
//			srchCpfParams += "&strSrchCpfAllocEffFrom="+encodeURIComponent(escape($("#txtFldSrchCpfAllocEffFrom").val()));
//			srchCpfParams += "&strSrchCpfAllocAgeGroup="+encodeURIComponent(escape($("#selSrchCPFAllocAgeGrp").val()));
//		 	 			
//			var parameter = "DBCALLFOR=CPF_ALLOC_SEARCH"+srchCpfParams;
//			
//			
//			ajaxCall(parameter,servletName,function(Data){
//				var retval = Data;
//			 hideLoader();
//			 
//			
//			for ( var val in retval) {
//
//				var tabdets = retval[val];
//				
//				  
//				if (tabdets["SESSION_EXPIRY"]) {
//					window.location = BASE_URL +  SESSION_EXP_JSP;
//					return;
//				}
//				
//				if (tabdets["DB_ERROR"]) {
//					window.location = BASE_URL +  DB_EXP_JSP;
//					return;
//				}
//
//				for ( var tab in tabdets) {
//					
//
//					if (tabdets.hasOwnProperty(tab)) {
//						
//						var key = tab;
//						var value = tabdets[tab];
//						  
//
//						if (key == "CPF_ALLOC_SEARCH"){ 
//					      
//							for ( var cont in value) {
//								
//								if (value.hasOwnProperty(cont)) {
//									
//									var contvalue = value[cont];
//									 
//										getMastCpfAllocRows(contvalue);  
//										
//								}
//							} 			
//						}
//						
//					}
//				}
//			}
//			}); 
// 	}
//});
// 


/*Add Row Click */
$("#AmsCpfAlloc").on("click",function(){  
			mastCpfAllocclearFlds();
			mastCpfAllocRdlyflds(INS_MODE);    
			showFIPAModel('MasterCpfAlloc_Dialog','Master CPF Allocation');   
			$('#MasterCpfAlloc_Dialog').on('shown.bs.modal', function () {
				$("#MasterCpfAlloc_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#MasterCpfAlloc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){ 
					  if(!mastCpfAllocvalidateDets())return; 
					  getMastCpfAllocRows(null); 
						$('#MasterCpfAlloc_Dialog').modal('hide'); 
				  });  
			});
			
			
});

/*Populate Data */
function getMastCpfAllocRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCpfAllocMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldCPFAllocId">';
 
var cell1 = '<input type="checkbox" name="radCpfAllocSelect" />'; 
 
var cell2 = '<input type="text" name="txtFldCPFAllocEffFrom" id="txtFldCPFAllocEffFrom" class="form-control editable"   />';
  
var cell3 ='<select  name="selCPFAllocAgeGrp" id="selCPFAllocAgeGrp" onmouseover="fipaTooltip(this);" class="form-control editable"  /> ';
  
var cell4 ='<select  name="selCPFAllocAccType" id="selCPFAllocAccType"class="form-control editable"  /> ';
  
var cell5 ='<input type="text" name="txtFldCPFAllocRate" id="txtFldCPFAllocRate" class="form-control editable" /> ';
  
var cell6 = '<input type="text" name="txtFldCPFAllocRemarks" id="txtFldCPFAllocRemarks" class="form-control editable"  />'+
'<input type="hidden" name="txtFldCPFCreatedBy"/><input type="hidden" name="txtFldCPFCreatedDate"/>';
  
 
CpfAllocRateSearch.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6] ).draw( false );

var rowCount = $('#CpfAllocRateSearch tbody tr').length;	
var $lastRow = $("#CpfAllocRateSearch tbody tr:last");	


$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radCpfAlloc"+$lastRow.index())
.parent().find('label').attr('for',"radCpfAlloc"+$lastRow.index());



$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgCPFAllocEffFrom").val());
$lastRow.find("td:eq(2)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
});


var sel1 = $("#selDlgCPFAllocAgeGrp > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(sel1);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgCPFAllocAgeGrp").val());

var sel2 = $("#selDlgCPFAllocAccType > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(sel2);
$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#selDlgCPFAllocAccType").val());


$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCPFAllocRate").val()); 

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldCPFAllocRemarks").val()); 


 
applyEventHandlers();


if(dataset != null){
 
	$lastRow.find("td:eq(0)").find('input:eq(0)').val(QRY_MODE);
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "txtFldCPFAllocId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "txtFldCPFAllocEffFrom":
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
			break;
			
		case "selCPFAllocAgeGrp":
			selectNullvalChk($lastRow.find("td:eq(3)"),col);
			break;
			
		case "selCPFAllocAccType":
			selectNullvalChk($lastRow.find("td:eq(4)"),col);
			break;
		 	
			
		case "txtFldCPFAllocRate":
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldCPFAllocRemarks":
			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldCPFCreatedBy":
			$lastRow.find("td:eq(6)").find('input:eq(1)').val(col); 
			infoDetsArr.push(col);
			break;
		 
		case "txtFldCPFCreatedDate":
			$lastRow.find("td:eq(6)").find('input:eq(2)').val(col); 
			infoDetsArr.push(col);
			break;
			
		case "txtFldCPFModifiedBy":
			infoDetsArr.push(col);
			break;
			
		case "txtFldCPFModifiedDate":
			infoDetsArr.push(col);
			break;	
			
			 
		}			 
		 
	}
	}

mastCpfAllocclearFlds();
 
}




 
/*Edit Row Click */
$("#EmsCpfAlloc").on("click",function(){
	
	var isOneRowSelected=false;
	$("#CpfAllocRateSearch tbody").find('input[name="radCpfAllocSelect"]').each(function(){  
		if($(this).is(":checked")){ 
			var $row = $(this).parents("tr"); 
			var $mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val(); 
			if($mode == QRY_MODE){ 
				$(this).parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE); 
				$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'});
				});  
			}
			
			$(this).attr("checked",false);
			isOneRowSelected=true;
		}
	});	    
	if(!isOneRowSelected){
		alert("No Rows Selected");
	}
});


/*View Row Click */
$("#VmsCpfAlloc").on("click",function(){ 
	var isOneRowSelected=0;
	var $rowCount = $('#CpfAllocRateSearch tbody tr').length;	
	var $lastRow = $("#CpfAllocRateSearch tbody tr:last");	
	
	if($rowCount<1){ 
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	$("#CpfAllocRateSearch tbody").find('input[name="radCpfAllocSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 $curElm.prop("checked",false);
		     	 $curElm.parents("tr").removeClass('selected');
				 mastCpfAllocRdlyflds($mode);
				 mastCpfAllocfilldlgboxval($row);  
					showFIPAModel('MasterCpfAlloc_Dialog','Master CPF Allocation');  
					$('#MasterCpfAlloc_Dialog').on('shown.bs.modal', function () {
						$("#MasterCpfAlloc_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#MasterCpfAlloc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!mastCpfAllocvalidateDets())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			mastCpfAllocfilldomtblval($RowId,$row); 
					     		} 
					     		
								$('#MasterCpfAlloc_Dialog').modal('hide'); 
								mastCpfAllocclearFlds();
							
						});
					});
					 
			} 
			if(($mode == QRY_MODE) ){
				var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode); 
				 $curElm.prop("checked",false);
		     	 $curElm.parents("tr").removeClass('selected');
				 mastCpfAllocRdlyflds($mode);
				 mastCpfAllocfilldlgboxval($row); 
					showFIPAModel('MasterCpfAlloc_Dialog','Master CPF Allocation');  
					$('#MasterCpfAlloc_Dialog').on('shown.bs.modal', function () {
						$("#MasterCpfAlloc_Dialog").find(".modal-footer").find("button:eq(0)").text("ok");
						$("#MasterCpfAlloc_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!mastCpfAllocvalidateDets())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			mastCpfAllocfilldomtblval($RowId,$row); 
					     		} 
					     		
								$('#MasterCpfAlloc_Dialog').modal('hide'); 
								mastCpfAllocclearFlds();
							
						});
					});
			}
			
			
			$curElm.attr("checked",false);
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){ 
		applyToastrAlert("No Rows Selected");
		return;
	}
	if(isOneRowSelected > 1){  
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	
});


/*Delete Row Click */
$("#DmsCpfAlloc").on("click",function(){
	datatableDeleteRow('CpfAllocRateSearch',CpfAllocRateSearch); 
});

/*Clear Fields */
function mastCpfAllocclearFlds(){
	$("#MasterCpfAlloc_Dialog").find("input[type=text]").val("");
	$("#MasterCpfAlloc_Dialog").find("textarea").val("");
	$("#MasterCpfAlloc_Dialog").find("select").val(""); 
}

/*Disabled/Readonly Fields */
function mastCpfAllocRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#MasterCpfAlloc_Dialog :input").prop("disabled", true);
			$("#MasterCpfAlloc_Dialog :button").prop("disabled", false); 
			 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#MasterCpfAlloc_Dialog :input").prop("disabled", false); 
			 
	 }
	
}

/*Validation */
function mastCpfAllocvalidateDets(){
	 
	if(!(validateFocusFlds('MasterCpfAlloc_Dialog','txtFldDlgCPFAllocEffFrom',CPFALLOC_EFF))) return;  
	if(!(validateFocusFlds('MasterCpfAlloc_Dialog','selDlgCPFAllocAccType',CPFALLOC_ACTYPE))) return;
	if(!(validateFocusFlds('MasterCpfAlloc_Dialog','selDlgCPFAllocAgeGrp',CPFALLOC_AGEGRP))) return;
	if(!(validateFocusFlds('MasterCpfAlloc_Dialog','txtFldDlgCPFAllocRate',CPFALLOC_RATE))) return;
	 
	  return true; 
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgCPFAllocEffFrom,#selDlgCPFAllocAccType,#selDlgCPFAllocAgeGrp,#txtFldDlgCPFAllocRate").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});


/* Filling Model Fields*/
function mastCpfAllocfilldlgboxval($lastRow){ 
	  $('#MasterCpfAlloc_Dialog #txtFldDlgCPFAllocId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val()); 
	  $('#MasterCpfAlloc_Dialog #txtFldDlgCPFAllocEffFrom').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#MasterCpfAlloc_Dialog #selDlgCPFAllocAgeGrp').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
	  $('#MasterCpfAlloc_Dialog #selDlgCPFAllocAccType').val($lastRow.find("td:eq(4)").find('select:eq(0)').val()); 
	  $('#MasterCpfAlloc_Dialog #txtFldDlgCPFAllocRate').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#MasterCpfAlloc_Dialog #txtFldDlgCPFAllocRemarks').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#MasterCpfAlloc_Dialog #txtFldDlgCPFCreatedBy').val($lastRow.find("td:eq(6)").find('input:eq(1)').val());
	  $('#MasterCpfAlloc_Dialog #txtFldDlgCPFCreatedDate').val($lastRow.find("td:eq(6)").find('input:eq(2)').val()); 
}

/* Filling Table Fields*/
function mastCpfAllocfilldomtblval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgCPFAllocEffFrom").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgCPFAllocAgeGrp").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgCPFAllocAccType").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCPFAllocRate").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCPFAllocRemarks").val());
	 
		
}
