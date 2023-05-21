
/**
 * Master CPF Interest Rate Script 
 */


var stafftype = $('#hTxtFldLoggedStfType').val();
var frmCpfIntRates;

function fipaInitPage(){
	
	frmCpfIntRates = document.forms[0];
	
	if(stafftype == STAFFTYPE_STAFF){ //Amin
//		$('#mastercpf_li').removeClass("hidden");
		$("#btnSave").addClass("hidden"); 
		$("#btnDel").addClass("hidden"); 
	}
	if(stafftype == STAFFTYPE_ADVISER){
		$("#btnSave").addClass("hidden"); 
		$("#btnDel").addClass("hidden"); 
		}
	loadAllSymbols();
	applyEventHandlers(); 
  
       showTooltip('btnSrch','Search');
	   showTooltip('btnSave','Save');
	   showTooltip('btnDel','Delete');
	   showTooltip('btnFipaHome',STR_FIPA_HOME);
	   showTooltip('btnLogout',STR_FIPA_LOGOUT);
	   
	   
   $('.accordHeaderDiv').css("display","none");   
   $("#sidebar-menu ul li[id='mastercpf_li']").click(); 
   $("#sidebar-menu ul li[id='masteraccintrates']").parent().removeClass("sideMenuHighlight nv");
   $("#sidebar-menu ul li[id='masteraccintrates']").addClass("sideMenuHighlight nv");

   

   $("#SrchCpfIntMthpicker,#dlgCpfIntMthpicker").datetimepicker(dateOptions).on("change",function(){
		 checkDateFormat($(this));   
   });
	  
   $("#txtFldSrchCpfIntMth,#txtFldDlgCpfIntMonth").on("change",function(){
		 checkDateFormat($(this));  
	 }); 
   
   $('#mastercpf_li').removeClass("hidden");
	$('#mastercpf_li').css("display", "block");
   hideLoader();
}


function fipaSave(){


	var table = document.getElementById("CpfSearchDetail");
	var tbody = table.tBodies[0]; 
	
	var rowCount = $("#CpfSearchDetail tbody").find("tr").length;
	

	if(rowCount > 0){
		
		enableComboWhenSubmit(frmCpfIntRates);

		frmCpfIntRates.action = "MasterCpfIntRateSave.do";
		frmCpfIntRates.submit();

	}

}


function validateCpfAcIsExisted(cpfAcId,cpfMthId,focusId){ 
	
	$("#CpfSearchDetail tbody").find('tr.odd').each(function(){
        $(this).remove();        
      
    });
	  
		var table = document.getElementById("CpfSearchDetail");
		var tbody = table.tBodies[0];
		var rowCount = tbody.rows.length; 
		
		
	  
	var respText;
	var srchCpfParams="";
	srchCpfParams += "&strSrchCpfAccount="+encodeURIComponent(escape(cpfAcId.value));
	srchCpfParams += "&strSrchCpfIntMth="+encodeURIComponent(escape(cpfMthId.value));
	 
	var mode ; 
	var parameter = "DBCALLFOR=CPF_SRCH_EXIST"+srchCpfParams;
	var validateFlag;

	for(var validate=0;validate<rowCount;validate++){ 
		var chkbox = tbody.rows[validate].cells[1].childNodes[0];  
			mode = tbody.rows[validate].cells[1].childNodes[0].value;
			var acct = tbody.rows[validate].cells[3].childNodes[0].value;
			  
			if( mode!='D' && false == chkbox.checked){
				validateFlag = 1;
			} 
			
			if(!validateFlag){
				
				if(!isEmpty(cpfAcId.value) && !isEmpty(cpfMthId.value) && !(mode == 'D')){
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

					if (key == "CPF_ACCOUNT_EXISTED"){
						   
						 applyToastrAlert("Already Exist",focusId);
						 document.getElementById("selDlgCpfAccount").value=""; 
						 document.getElementById("txtFldDlgCpfIntMonth").value=""; 
						 focusId.focus();
						 return false;
							 	 
				}
			}
		} 
   }  	
	
}
 

function validateDatatables(cpfAcId,cpfMthId){
  
var table = document.getElementById("CpfSearchDetail");
var tbody = table.tBodies[0]; 
var rowCount = tbody.rows.length;
 
var mode;
var validateFlag;
for(var edit=0;edit<rowCount;edit++){
	
	var row = tbody.rows[edit]; 
	var chkbox = row.cells[2].childNodes[0];  
	mode = row.cells[1].childNodes[0].value;  
	
	var fstElm = row.cells[3].childNodes[0].value;
	var sndElm = row.cells[5].childNodes[0].value;
  
	if( mode!= 'D' && false == chkbox.checked){
		validateFlag = 1;
		 
	} 
	 
	
		  if(!isEmpty(cpfAcId.value) && !isEmpty(cpfMthId.value) && !(mode == DEL_MODE)){ 
				if (cpfAcId.value == fstElm && cpfMthId.value == sndElm){ 
					 
					applyToastrAlert("Already Exist",cpfAcId);
					document.getElementById("selDlgCpfAccount").value="";
					document.getElementById("txtFldDlgCpfIntMonth").value="";
					cpfAcId.focus();
					return false; 
				} 
	  }    
 
  }  
}


function CpfSearchDetails(){
	
	
	showLoader();	 
	
	 $('#CpfSearchDetail').dataTable().fnClearTable();
		removeTblRows('CpfSearchDetail');
		$("#CpfSearchDetail").dataTable().fnDestroy();
		
		 
		 
			var srchFldsArrCpfAll = ["selSrchCpfAccount","txtFldSrchCpfIntMth"];
			var isAnySelected=false;
			$.each( srchFldsArrCpfAll, function( index, value ) {		
				 		
					if(!isEmpty($("#"+srchFldsArrCpfAll[index]).val())){
						isAnySelected=true;								
					}
				 		
			});
			
			if(!isAnySelected){ 
				applyToastrAlert(INTRATE_SEARCH,selSrchCpfAccount);
				clearDataTable('CpfSearchDetail');  
				hideLoader(); 
				 return false;
			}else{
				
				
				var srchCpfParams="";
				srchCpfParams += "&strSrchCpfAccount="+encodeURIComponent(escape($("#selSrchCpfAccount").val()));
				srchCpfParams += "&strSrchCpfIntMth="+encodeURIComponent(escape($("#txtFldSrchCpfIntMth").val()));
				
				 
			
			var parameter = "DBCALLFOR=MASTER_CPF_SEARCH"+srchCpfParams;
				
			var tblId = document.getElementById("CpfSearchDetail");
			var tbody = tblId.tBodies[0];	
			 
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
						 
						if (key == "CPF_SEARCH_NOREC") { 
							applyToastrAlert("NO RECORD FOUND");
							clearDataTable('CpfSearchDetail'); 
							hideLoader(); 
							return true;
						}				

						if (key == "CPF_SEARCH"){ 
					      
							for ( var cont in value) {
								
								if (value.hasOwnProperty(cont)) {
									
									var contvalue = value[cont];
									  
									getMastCpfIntRateRows(contvalue);
									
								}
							}
							
	 				
										
						}
						
					}
				}
			}
			});
			$("#CpfSearchDetail").dataTable().fnDestroy();
			$("#CpfSearchDetail").dataTable({
				destroy: true,
			 	responsive: false,        
			    ordering: false,
			    searching: false,
				scrollY: 250,	        
				scrollX: true,
			    scroller: false,
			    scrollCollapse:true,
			    paging:false,
			    info : false,
			    filter:false, 			            
		        "aaSorting": [[ 1, "asc" ]],
//		        oLanguage: {"sEmptyTable": DATATABLE_ERROR,"sInfoEmpty": DATATABLE_ERROR },
			    fnDrawCallback: function(oSettings) {
			    	$("#hRecords").val(oSettings.fnRecordsTotal()); 
			        if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
			            $(oSettings.nTableWrapper).find('.dataTables_paginate').hide(); 
			        }  
			        ctrlOverFlowDataTable('CpfSearchDetail'); 
			    } 
			});  
 }
			
			
}

function CpfAddRow(dataset)
{
	mastCpfIRclearFlds();
	showFIPAModel('MasterCpfIntRate_Dialog','Master CPF Interest Rate'); 
	masCpfIRMethods('MasterCpfIntRate_Dialog',dataset,'INS','',''); 
 

}//end of deptaddRow



function getMastCpfIntRateRows(dataset){
	
	
	$("#CpfSearchDetail tbody").find('tr.odd').each(function(){
        $(this).remove();        
      
    });
	  
    var tbl = document.getElementById('CpfSearchDetail'),
	tblBody = tbl.tBodies[0],
    len = tblBody.rows.length;

    var row = tblBody.insertRow(len);
 
    if(len<1){
    	  removeInfoError('CpfSearchDetail');
   }
	var cell0 = row.insertCell(0);
	cell0.innerHTML = '<input type="text" name="txtFldCpfSlno" id="txtFldCpfSlno" readonly="true" value="'+(len+1)+'" class="writableFieldDHTML"/>';
//	cell0.style.width="5%";
	
	var cell1 = row.insertCell(1);
	cell1.innerHTML = '<input type="text" name="txtFldCpfMode" id="txtFldCpfMode" readonly="true" value="'+INS_MODE+'" class="writableFieldDHTML" /><input type="hidden" name="txtFldCpfIntId" id="txtFldCpfIntId">';
//	cell1.style.width="3%";
	cell1.style.display="none";
	 
	var cell2 = row.insertCell(2);
	cell2.innerHTML = '<input type="checkbox" name="radCpfSelect" id="radCpfSelect" readonly="true" class="writableFieldDHTML" onclick="setSelectedRow(this)"/>';
//	cell2.style.width="3%";
	
	
	var cell3 = row.insertCell(3);
	cell3.innerHTML = '<input type="text" name="selCpfAccount" id="selCpfAccount" class="writableFieldDHTML"   readonly="true"  />';
	cell3.childNodes[0].value = document.getElementById("selDlgCpfAccount").value;
//	cell3.style.width="6%";
	
	var cell4 = row.insertCell(4);
	cell4.innerHTML ='<input type="text" name="txtFldCpfIntRate" id="txtFldCpfIntRate" class="writableFieldDHTML" readonly="true" > </select>';
	cell4.childNodes[0].value = document.getElementById("txtFldDlgCpfIntRate").value;
//	cell4.style.width="6%";
	
	var cell5 = row.insertCell(5);
	cell5.innerHTML = '<input type="text" name="txtFldCpfIntMonth" id="txtFldCpfIntMonth" readonly="true" class="writableFieldDHTML" />'+
	'<input type="hidden" name="txtFldCpfCreatedBy"/><input type="hidden" name="txtFldCpfCreatedDate"/>';
	cell5.childNodes[0].value = document.getElementById("txtFldDlgCpfIntMonth").value;
//	cell5.style.width="6%";
	
 
	cell3.childNodes[0].focus(); 
	

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

//		 
			
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			cell1.childNodes[0].value = QRY_MODE; 
			var col = dataset[data];
			 

			switch(data){
			
				case "txtFldCpfIntId": 
					cell1.childNodes[1].value=col;
					break;
					
				case "selCpfAccount":
					cell3.childNodes[0].value=col;
					cell3.childNodes[0].readonly=true;
					break;
					
				case "txtFldCpfIntRate":
					cell4.childNodes[0].value=col;
					cell4.childNodes[0].readOnly=true;
					break;
					
				case "txtFldCpfIntMonth":
					cell5.childNodes[0].value=col;
					cell5.childNodes[0].readOnly=true;
					break;
				 	
					
				case "txtFldCpfCreatedBy":
					cell5.childNodes[1].value=col;
					infoDetsArr.push(col);
					break;
					
				case "txtFldCpfCreatedDate":
					cell5.childNodes[2].value=col;
					infoDetsArr.push(col);
					break;
					
				case "txtFldCpfModifiedBy":
					infoDetsArr.push(col);
					break;
					
				case "txtFldCpfModifiedDate":
					infoDetsArr.push(col);
					break;				
			}			
		}
		removeInfoError('CpfSearchDetail');
				
			} 
 

}
function CpfEditRow(){
	CpfViewRow();  
}

function CpfDelRow(){

	$("#CpfSearchDetail tbody").find('tr.odd').each(function(){
        $(this).remove();        
      
    });
	  
	tableDeleteRow("CpfSearchDetail",false); 
	var table = document.getElementById("CpfSearchDetail");
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;	
	 
	 
	if(rowCount<1){
		showInfoError('CpfSearchDetail');
	}



}




function CpfAllocViewRow(){

	$("#CpfSearchDetail tbody").find('tr.odd').each(function(){
        $(this).remove();        
      
    });
	  
		var table = document.getElementById("CpfSearchDetail");
		var tbody = table.tBodies[0];
		var rowCount = tbody.rows.length;
		 
		
		var editFlag = 0;
		
		if(rowCount<1){ 
			applyToastrAlert("No rows to edit/view");
			return;
		}
		
		
		 
		
		for(var edit=0;edit<rowCount;edit++){
			
			var row = tbody.rows[edit];
			var chkbox = row.cells[2].childNodes[0];
			 
			if(null != chkbox && true == chkbox.checked) {
			        editFlag = 1;
			}
		}
	 
		
		if(!editFlag){ 
			applyToastrAlert("Select row to edit/view");
			return;
		}	
		
		for(var editrow=0;editrow<rowCount;editrow++){
			
			var editCurRow = tbody.rows[editrow];
		 
			var chkbox = editCurRow.cells[2].childNodes[0];
			
			var mode = editCurRow.cells[1].childNodes[0].value;
			 
			if(null != chkbox && true == chkbox.checked) {
				 
				if(mode == UPD_MODE || mode == INS_MODE){
					
					var RowId=editCurRow.rowIndex;
					 editCurRow.cells[1].childNodes[0].value = mode;
					 chkbox.checked = false;
					 
					 msCpfIRRdlyflds(mode);
					 msCpfIRfilldlgboxval(editCurRow);
					 showFIPAModel('MasterCpfIntRate_Dialog','Master CPF Interest Rate'); 
					 masCpfIRMethods('MasterCpfIntRate_Dialog','','INS/UPD',RowId,table);	
 
				}
				
				if(mode == QRY_MODE){
					
					  msCpfIRRdlyflds(mode);
					msCpfIRfilldlgboxval(editCurRow);
					showFIPAModel('MasterCpfIntRate_Dialog','Master CPF Interest Rate'); 
					masCpfIRMethods('MasterCpfIntRate_Dialog','','QRY',RowId,table);	
					 
				}
				
			}
			}
}




	
	
function mastCpfIRclearFlds(){
	$("#MasterCpfIntRate_Dialog").find("input[type=text]").val("");
	$("#MasterCpfIntRate_Dialog").find("textarea").val("");
	$("#MasterCpfIntRate_Dialog").find("select").val("");     
}

 
function msCpfIRRdlyflds(mode){
	if(mode == QRY_MODE){ 
		 
		$("#MasterCpfIntRate_Dialog :input").prop('disabled', true); 
		
	}else if(mode == UPD_MODE || mode == INS_MODE){
	 
		$("#MasterCpfIntRate_Dialog :input").prop('disabled', false);  

	} else{
		$("#MasterCpfIntRate_Dialog :input").prop('disabled', false); 
	}
	
		
	 
}

function msCpfIRvalidateDets(){
	
	if(!(validateMandatoryFlds(selDlgCpfAccount, CPF_ACCOUNT))) return;
	if(!(validateMandatoryFlds(txtFldDlgCpfIntRate, CPF_INT_RATE))) return;
	if(!(validateMandatoryFlds(txtFldDlgCpfIntMonth, CPF_INT_MTH))) return;
	
	return true;
		 
}
 

function msCpfIRfilldlgboxval(editCurRow){
	  
	  $('#MasterCpfIntRate_Dialog #txtFldDlgCpfIntId').val(editCurRow.cells[1].childNodes[1].value); 
	  $('#MasterCpfIntRate_Dialog #selDlgCpfAccount').val(editCurRow.cells[3].childNodes[0].value);  
	  $('#MasterCpfIntRate_Dialog #txtFldDlgCpfIntRate').val(editCurRow.cells[4].childNodes[0].value);  
	  $('#MasterCpfIntRate_Dialog #txtFldDlgCpfIntMonth').val(editCurRow.cells[5].childNodes[0].value); 
	  $('#MasterCpfIntRate_Dialog #txtFldDlgCpfCreatedBy').val(editCurRow.cells[5].childNodes[1].value);
	  $('#MasterCpfIntRate_Dialog #txtFldDlgCpfCreatedDate').val(editCurRow.cells[5].childNodes[2].value);
	  
	
	  	  
	
}
function msCpfIRfilldomtblval(RowId,table){


	table.rows[RowId].cells[3].childNodes[0].value = document.getElementById("selDlgCpfAccount").value;
	table.rows[RowId].cells[4].childNodes[0].value= document.getElementById("txtFldDlgCpfIntRate").value ;
	table.rows[RowId].cells[5].childNodes[0].value = document.getElementById("txtFldDlgCpfIntMonth").value; 

}

function masCpfIRMethods(dialogId,dataset,Opts,RowId,table){
	if(Opts == 'INS'){
	$('#'+dialogId).on('shown.bs.modal', function() {   
		  $(this).find(".modal-footer").find("button:eq(0)").click(function (){
	              
	            if(!msCpfIRvalidateDets())return;

	        	  msCpfIRRdlyflds(INS_MODE);
	        	 
	        	  getMastCpfIntRateRows(dataset);
	        	  mastCpfIRclearFlds();	        	 
	      		 
				$('#'+dialogId).modal('hide'); 
		  });
		  
		});
	}//End of INS Options
	
	if(Opts == 'QRY/UPD'){
		$('#'+dialogId).on('shown.bs.modal', function() {   
			  $(this).find(".modal-footer").find("button:eq(0)").click(function (){
			     if(!msCpfIRvalidateDets())return;
					      		
			      		if(!isEmpty(RowId) && !(RowId==undefined)){ 
			      			
			      			 msCpfIRfilldomtblval(RowId,table); 
			      		 }
			      		mastCpfIRclearFlds();
			      	  $("#"+dialogId+" :input").prop('readonly', false);  
					$('#'+dialogId).modal('hide'); 
			  });
	  }); 
	}//End of QRY/UPD Options
	
	
	

	if(Opts == 'INS/UPD'){
		
		$('#'+dialogId).on('shown.bs.modal', function() {   
			  $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
	        	  if(!msCpfIRvalidateDets())return;
				      	
				      		if(!isEmpty(RowId) && !(RowId==undefined)){ 
				      			
				      			
				      			msCpfIRfilldomtblval(RowId,table); 
				      		}
				      		 
			      			 
					$('#'+dialogId).modal('hide'); 
				mastCpfIRclearFlds();
			  });
	  });  
	}//End of INS/UPD Options
	
	

	if(Opts == 'QRY'){ 
		$('#'+dialogId).on('shown.bs.modal', function() {   
			  $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
	        	   mastCpfIRclearFlds();
	        	  $("#"+dialogId+" :input").prop('readonly', false); 
				  $('#'+dialogId).modal('hide'); 
					
			  });
	  });  
	}//End of INS/UPD Options
	
}

 


