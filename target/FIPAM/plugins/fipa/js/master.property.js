/**
 * Master Property Scripts
 * 
 * 
 */ 
var currentSelected;
//var finGoalsMasterTable=$("#finGoalsMasterTable").DataTable({ 
//		scrollY:"23vh",
//		scrollX: true,
//		autowidth:false,
//        scrollCollapse:false,
//       	searching: false,
//       	ordering: false,
//       	bLengthChange: false,
//       	scrollCollapse:false,
//       	dom: 'lrtip', 
//       	paging:false,
//       	columnDefs: [  
//       	             {"className": "dt-center","targets": [0],"orderable": false,"searchable": false}],
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//			    } 
//    
//		 }, 
//}).draw();

$('#finGoalsMasterTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
        	finGoalsMasterTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected'); 
            currentSelected=$(this).find("td").find("input:eq(1)").val().trim(); 
          
        }
    } );
 
$('#fnaMasterProperty #propdelbtn').click( function () { 
	var flg=false;
	$("#finGoalsMasterTable").find("tr.selected").each(function(){
		flg=true;
	});
	
	if(!flg){
		applyErrorToastrAlert("Click on row to delete"); 
		$( "#masterdeletealert" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		return;
	}
	
	if(flg){
		$("#confirmationalertmsgdiv #confalertimg").html(""); 
		$("#confirmationalertmsgdiv #confalertmsg").html("Are you sure to delete the row?");
		$('#confirmationalertmsgdiv').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
			}); 
		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
			$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){ 
					 finGoalsMasterTable.row('.selected').remove().draw( false ); 
					 callAjaxPropDel('FINGLS',currentSelected);
					 callAjaxPropSearch('FINGLS');
					 $('#confirmationalertmsgdiv').modal('hide');  
			});
			
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
			  	$('#confirmationalertmsgdiv').modal('hide');  
			});
			
		});
		
		
		 
	}
	
	
});
    
    
$("#fnaMasterProperty #propAddbtn").click(function (){  
 	 var newval=$("#fnaMasterProperty #finglsnewval").val();
	 var remarks=$("#fnaMasterProperty #finglsRemarks").val();
	 var status=$("#fnaMasterProperty #finglsstatus").val(); 
	 newval=newval.replace("&","%26");
	 
	  if(!validateFinGoalsProperty())return;  
	  
parameter = "DBCALLFOR=PROP_INSERT&strKey=FINGLS&strNewValue="+newval+"&strRemarks="+remarks+"&strStatus="+status;
	 ajaxCall(parameter,servletName,function(Data){ 
		var retval = Data;  
		
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

 			if(tabdets["FINGLS"]){ 
 				var propval=tabdets["FINGLS"];     
 				callAjaxPropSearch('FINGLS');
			} 
 		}
 		hideLoader(); 
	}); 

	 $('#fnaMasterProperty').modal('hide');  
	 $("#fnaMasterProperty").find("input").val("");
	 $("#fnaMasterProperty").find("textarea").val("");  
});
    
/*Financial Goals Property Script*/ 
$('img#finglspropIcon').click( function () {
	callAjaxPropSearch('FINGLS');
	var parameter; 
	
	showFIPAModel('fnaMasterProperty','On Spot Master Entries');       
	
		 
});



function validateFinGoalsProperty(){
 
	if(!(validateFocusFlds('fnaMasterProperty','finglsnewval','Key in New Value'))) return; 
		return true;
		
}


function callAjaxPropSearch(key){ 
	var parameter = "DBCALLFOR=PROP_SEARCH&strKey="+key;
	
	finGoalsMasterTable.clear().draw();  
	
	$("#finGoals_Dialog #selDlgFinGoalType option").remove(0); 
	$('#finGoals_Dialog #selDlgFinGoalType').append( '<option value="">--SELECT--</option>' );
	 
	showLoader();	
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

					if (key == "FINGLS"){ 
						for ( var cont in value) {
							if (value.hasOwnProperty(cont)) {
								
								var contvalue = value[cont];	  
								
								cell0 = '<input type="text" readOnly="true" name="propval" id="propval" class="dhtmlTableText ptrcursor"/><input type="hidden" name="propid" id="propid"/>';
							 	
								finGoalsMasterTable.row.add( [cell0] ).draw( false );

								var rowCount = $('#finGoalsMasterTable tbody tr:visible').length;
								rowCount =  (rowCount == 0) ? $('#finGoalsMasterTable tbody tr').length : rowCount;
								var $lastRow = $("#finGoalsMasterTable tbody tr:last");	
  
								$lastRow.find("td:eq(0)").find('input:eq(0)').val(contvalue["propval"]);
								$lastRow.find("td:eq(0)").find('input:eq(1)').val(contvalue["propid"]);
								
								 
								$('#finGoals_Dialog #selDlgFinGoalType').append( '<option value="'+contvalue["propval"]+'">'+contvalue["propval"]+'</option>' ); 
							
							
							}
						} 			
						
					}
					
				}
			}
			hideLoader();   
			 
		}
		
		
		});
	 
	
}/*Financial Goals Property - End*/

function callAjaxPropDel(key,id){
	showLoader();
	var parameter = "DBCALLFOR=PROP_DELETE&strKey="+key+"&strid="+id;
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
 
		}
});
}

