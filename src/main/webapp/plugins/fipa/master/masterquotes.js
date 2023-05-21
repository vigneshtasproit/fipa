var stafftype = $('#hTxtFldLoggedStfType').val();
var frmQuotes;
/*Datatable Initialisation*/
var masterQuotestbl = $('#masterQuotestbl').DataTable( {
   destroy: true,
   responsive: false,         
   ordering: false,
   sequotehing: false,     
   scrollY:  "65vh",
   scrollX: true,
   scroller: false,
   scrollCollapse:false,
   paging:false, 
   filter:false,   
   columnDefs: [], 
   dom: '<<"top" ip>flt>',  
   columnDefs: [  { width: '20px', targets: [0,1]},
  	             {"className": "dt-head-center text-center",targets: [0,1,2,3],"orderable": false,"sequotehable": false}],		 
		 fnDrawCallback: function(oSettings) {
			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
				 
			    } 
   
		 }, 
}).draw();
	

		
function fipaInitPage(){
	
	frmQuotes = document.forms[0];
	
	if(stafftype == STAFFTYPE_STAFF){ //Amin
//		$('#mastercpf_li').removeClass("hidden");
		$("#QuoteARow").addClass("hidden"); 
		$("#QuoteERow").addClass("hidden"); 
		
	}
	if(stafftype == STAFFTYPE_ADVISER){ 
		$("#QuoteARow").addClass("hidden"); 
		$("#QuoteERow").addClass("hidden"); 
	}
	
	 showTooltip('QuoteARow','Add Quotes');
	   showTooltip('QuoteERow','Edit Quotes');
	   
	   
	   $('.accordHeaderDiv').css("display","none");  
	   $("#sidebar-menu ul li[id='mastercpf_li']").click(); 
	   $("#sidebar-menu ul li[id='masterquotes']").parent().addClass("sideMenuHighlight nv"); 
	   callAjaxQuotes();
	   $('#mastercpf_li').removeClass("hidden");
		$('#mastercpf_li').css("display", "block");
		
		/*Master Pop Up URL*/

		$("#btnURL").css("display","none");
		$("#mainlayout #headerlayout").css("display","none");
		$("#mainlayout #sidebar-wrapper").css("display","none");
		$("#mainlayout #footerLayout").css("display","none");
		$("#layoutbody").removeAttr("class");
		$("#layoutbody").attr("class","col-md-12");
		
	 
		/**/
		
		
	   hideLoader();
}

$("#btnQuotesSave").on("click",function(){
	saveQuotes();
});

function saveQuotes(){
  
	var rowCount = masterQuotestbl.row().count();	  
	if(rowCount > 0){
		enableComboWhenSubmit(frmQuotes); 
		frmQuotes.action = "SaveMasterOuotes.do";
		frmQuotes.submit();
	}
 
}

function callAjaxQuotes(){ 
	
	masterQuotestbl.clear().draw(); 
	var parameter = "DBCALLFOR=GET_DBQUOTES";
	 

	ajaxCall(parameter,servletName,function(Data){
		
	var	retval=Data;
	

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
				

				if (key == "QUOTES_NOREC") { 
//					clearDataTable('masterQuotestbl'); 
					masterQuotestbl.clear().draw();
					hideLoader();
					return true;
				}				

				if (key == "ALL_QUOTES"){   
					for ( var cont in value) {  
						var contvalue = value[cont]; 
						getQuotesRows(contvalue);
					}
					
				}
				
			}
		}
	}
	
	hideLoader();
	 
	 
	});
	
}

/*Add Row Click */
$("#QuoteARow").on("click",function(){ 
			quoteClearFlds();
			quoteRdlyflds(INS_MODE);  
			showFIPAModel('quotes_Dialog','Login Quotes');   
			$('#quotes_Dialog').on('shown.bs.modal', function () {
				$("#quotes_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#quotes_Dialog").find("input[id=txtFldDlgAuthor]").focus();
				$("#quotes_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatequoteDetails())return; 
					   	getQuotesRows(null); 
						$('#quotes_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getQuotesRows(dataset){ 

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldmasQuoteMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldQuotesId">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radquoteSelect"/><label>&nbsp;</label></div>'; 
 
cell2 = '<input type="text" name="txtFldAuthor" class="writableFieldDHTML"  onmouseover="fipaTooltip(this);" readonly="true" />';
   
cell3 = '<input type="text" name="txtFldLogMsg" class="writableFieldDHTML"  onmouseover="fipaTooltip(this);" readonly="true" />'+
	'<input type="hidden" name="txtFldQuotesFrom"/><input type="hidden" name="txtFldQuotesTo"/>';
 

masterQuotestbl.row.add( [cell0,cell1,cell2,cell3] ).draw( false );

var rowCount = $('#masterQuotestbl tbody tr').length;	
var $lastRow = $("#masterQuotestbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radquote"+$lastRow.index())
.parent().find('label').attr('for',"radquote"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgAuthor").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgLogMsg").val());


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

	
//			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
//					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
//			}
			
	$lastRow.find("td:eq(0)").find('input:eq(0)').val(QRY_MODE);
	
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "txtFldQuotesId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "txtFldAuthor": 
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);  
			break;
			
		case "txtFldLogMsg": 
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);  
			break; 
			 
		case "txtFldQuotesFrom": 
			$lastRow.find("td:eq(3)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "txtFldQuotesTo":
			$lastRow.find("td:eq(3)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);
			break;
			 
		}			 
		 
	}
	}

quoteClearFlds(); 
}


/*View Row Click */
$("#QuoteERow").on("click",function(){
	var isOneRowSelected=0;
	var $rowCount = $('#masterQuotestbl tbody tr').length;	
	var $lastRow = $("#masterQuotestbl tbody tr:last");	
	
	if($rowCount<1){ 
		 applyToastrAlert("Insert rows before edit/view"); 
		return;
	} 
	
	$("#masterQuotestbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	
	$("#masterQuotestbl tbody").find('input[name="radquoteSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){  
		applyToastrAlert("More than one rows selected.Select one row only"); 
		return;
	}
	
	$("#masterQuotestbl tbody").find('input[name="radquoteSelect"]').each(function(){ //Checkbox selection
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
				 	quoteRdlyflds($mode);
					quotefilldlgval($row); 
					showFIPAModel('quotes_Dialog','Login Quotes');  
					$('#quotes_Dialog').on('shown.bs.modal', function () {
						$("#quotes_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#quotes_Dialog").find("input[id=txtFldDlgAuthor]").focus();
						$("#quotes_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatequoteDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			quotefilldomval($RowId,$row); 
					     		}  
					     		 
								$('#quotes_Dialog').modal('hide'); 
								quoteClearFlds();
							
						});
					});
					 
			}  
		
			if(($mode == QRY_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'}); 
					});  
				 quoteRdlyflds($mode);
					quotefilldlgval($row); 
				 showFIPAModel('quotes_Dialog','Login Quotes');  
					$('#liPlandets_Dialog').on('shown.bs.modal', function () {
						$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").text("OK");
						$("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateLiPlanDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			quotefilldomval($RowId,$row); 
					     		}  
					     		$('#quotes_Dialog').modal('hide'); 
								quoteClearFlds();
							
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

	
});


/*Delete Row Click */
$("#quoteDRow").on("click",function(){  
	datatableDeleteRow('masterQuotestbl',masterQuotestbl); 	

});

/*Clear Fields */
function quoteClearFlds(){
	$("#quotes_Dialog").find("input[type=text]").val("");
	$("#quotes_Dialog").find("textarea").val("");
	$("#quotes_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function quoteRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#quotes_Dialog :input").prop("disabled", false); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#quotes_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatequoteDetails(){
	 
	if(!(validateFocusFlds('quotes_Dialog','txtFldDlgAuthor',QUOTES_AUTHOR))) return;
	if(!(validateFocusFlds('quotes_Dialog','txtFldDlgLogMsg',QUOTES_LOGMSG))) return;  
		  
	  return true; 
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgAuthor,#txtFldDlgLogMsg").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function quotefilldlgval($lastRow){
	  
	  $('#quotes_Dialog #txtFldDlgQuotesId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#quotes_Dialog #txtFldDlgAuthor').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());  
	  $('#quotes_Dialog #txtFldDlgLogMsg').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());  
	  $('#quotes_Dialog #txtFldDlgQuotesFrom').val($lastRow.find("td:eq(3)").find('input:eq(1)').val());
	  $('#quotes_Dialog #txtFldDlgQuotesTo').val($lastRow.find("td:eq(3)").find('input:eq(2)').val());
	   
}

/* Filling Table Fields*/
function quotefilldomval($RowId,$row){
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgAuthor").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgLogMsg").val()); 
		
}
/*###########################################################################################################################################################*/

