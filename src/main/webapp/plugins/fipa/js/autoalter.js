/**
 * Auto Alteration Script
 */
/*Datatable Initialisation*/
//var AutoAlterTbl = $('#AutoAlterTbl').DataTable( {
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


var altid,altval,autoalterflg=false;
$(".autoAlt").on("focus",function(){

	altid=$(this).attr("id");
	altval=$(this).val();   
	 
}).change(function(){   
		autoAlterationDef($(this),altid,altval);  
});

function autoAlterTooltip(obj,oldval,chgeval){  
	
		$(obj).isDisabled = true;
	      $(obj).qtip({ 
	         content: { 	 text : "Changed From "+oldval+" to "+chgeval+"", 
	         }, 
	         show: {solo: true, ready: false, when: 'mouseover'},
	         hide: { when: 'mouseout', fixed: true },
	         style: {
	        	 classes: 'qtip-green qtip-rounded qtip-shadow'
	            },
	            position: {
	                my: 'top left',   
	                at: 'bottom left', 
	                viewport: $(window),
	                target: $(obj)  
	            }    
	      });
	      
	       
	 
	 
}

function autoAlterationDef(elmId,altid,altval){ 
				var chgeval=$(elmId).val();
				var oldval=altval;  
				if(!isEmpty(chgeval)){  
				  if((chgeval!=oldval)){
					  if(oldval != undefined && oldval != "" && oldval != "0"){ 
						$("#"+altid).addClass("alterColor");   
						$("#"+altid).isDisabled = true;
						$("#"+altid).qtip({ 
					         content: { 	 text : "Changed From "+oldval+" to "+chgeval+"", 
					         }, 
					         show: {solo: true, ready: false, when: 'mouseover'},
					         hide: { when: 'mouseout', fixed: true },
					         style: {
					        	 classes: 'qtip-green qtip-rounded qtip-shadow'
					            },
					            position: {
					                my: 'top left',   
					                at: 'bottom left', 
					                viewport: $(window),
					                target: $("#"+altid)
					            }    
					      });
					      
				  }   
					  
					$("#"+altid).attr("data-attr",(isNaN(oldval)) ? $("#"+altid).removeAttr("data-attr") : oldval);
					$("#"+altid).val((isNaN(chgeval)) ? $("#"+altid).removeAttr("data-attr") : chgeval);
					
				  }
					
				}
				
				
				var ide="";
				if(isValidObject($(elmId).attr("data-attr"))){
				 
				var rowCount = $('#AutoAlterTbl tbody tr').length;	
				$('#AutoAlterTbl tbody tr').each(function(){   
					var exattrId=$(this).find("td:eq(2)").find("input:eq(0)").val(); 
					if(exattrId == altid){ 
						var rowID=$(this);
						 ide=rowID.find("td:eq(0)").find('input:eq(1)').val();  
						rowID.find("td:first").find('span').text(rowCount);  
						rowID.find("td:eq(0)").find('input:eq(1)').val(ide); 
						var oldattval="";
						if(!isEmpty(ide)){oldattval=getOldAutoAlrvalue(ide);} 
						rowID.find("td:eq(3)").find("input:eq(0)").val(oldattval);//Org Value 
						rowID.find("td:eq(4)").find("input:eq(0)").val(chgeval); //New Value 
						return;
					}  
				});
				}
				  
	 if(ide ==""){
		 getAutoAlterRows(elmId,ide,null);
	 } 
} 

/*Populate Data */
function getAutoAlterRows(elmId,id,dataset){ 

	var screenName=$("#hTxtMenuName").val();
	var oriAttrId=$(elmId).attr("id");
	var newAttrId=$(elmId).attr("data-attr");
	var oriAttrVal=$(elmId).val();
	
	 
	$('#AutoAlterTbl tbody tr').each(function(){   
		var exattrId=$(this).find("td:eq(2)").find("input:eq(0)").val(); 
		if(exattrId == altid){
			
		}
	});
	
var cell0 = '<span></span>'+
'<input type="hidden" name="altMode" readonly="true" class="fipaMode" value="'+INS_MODE+'" /><input type="hidden" name="altId">';
var cell1 = '<input type="text" name="modelUid" class="form-control editable"/>';
var cell2 = '<input type="text" name="attrName" class="form-control editable"/>';
var cell3 = '<input type="text" name="attrOrgValue" class="form-control editable"/>';
var cell4 = '<input type="text" name="attrNewValue" class="form-control editable"/>'+
'<input type="hidden" name="attrCrtdBy"/><input type="hidden" name="attrCrtdDate"/>'; 
 
 
 	AutoAlterTbl.row.add( [cell0,cell1,cell2,cell3,cell4] ).draw( false );
 

var rowCount = $('#AutoAlterTbl tbody tr').length;	
var $lastRow = $("#AutoAlterTbl tbody tr:last");
  
		$lastRow.find("td:first").find('span').text(rowCount); 
		$lastRow.find("td:eq(0)").find('input:eq(1)').val(id); 
		$lastRow.find("td:eq(1)").find('input:eq(0)').val(screenName)
		$lastRow.find("td:eq(1)").find('input:eq(0)').val(screenName); //Screen Name 
		$lastRow.find("td:eq(2)").find('input:eq(0)').val(oriAttrId); //Attr Name  
		var oldattval="";
		if(!isEmpty(id)){oldattval=getOldAutoAlrvalue(id);} 
		$lastRow.find("td:eq(3)").find('input:eq(0)').val(oldattval); //Org Value 
		$lastRow.find("td:eq(4)").find('input:eq(0)').val(oriAttrVal); //New Value 
 
 

}


function populateAutoAlter(dataset){
	
	if(dataset != null){

	var cell0 = '<span></span>'+
	'<input type="hidden" name="altMode" readonly="true" class="fipaMode" value="'+INS_MODE+'" /><input type="hidden" name="altId">';
	var cell1 = '<input type="text" name="modelUid" class="form-control editable"/>';
	var cell2 = '<input type="text" name="attrName" class="form-control editable"/>';
	var cell3 = '<input type="text" name="attrOrgValue" class="form-control editable"/>';
	var cell4 = '<input type="text" name="attrNewValue" class="form-control editable"/>'+
	'<input type="hidden" name="attrCrtdBy"/><input type="hidden" name="attrCrtdDate"/>'; 
	 
	 
	 	AutoAlterTbl.row.add( [cell0,cell1,cell2,cell3,cell4] ).draw( false );
	 
	 	var rowCount = $('#AutoAlterTbl tbody tr').length;	
	 	var $lastRow = $("#AutoAlterTbl tbody tr:last");

		 
		
		if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
			$lastRow.find("td:eq(0)").find('input:eq(0)').val(col); 
		}
	 
		
	 var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			var dataAttr;
			var dataval;
			var newval;
			switch(data){
			
				case "altId": 
					$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
					break;
					
				case "modelUid":  
					$lastRow.find("td:eq(1)").find('input:eq(0)').val(col); 
					
					break;
					
				case "attrName": 
					$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
					dataAttr=col;
					break;
				 
				case "attrOrgValue":  
					$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
					dataval=col;
					break;
				 
				case "attrNewValue":  
					$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
					newval=col;
					break;
				  
				case "attrCrtdBy": 
					$lastRow.find("td:eq(4)").find('input:eq(1)').val(col);
					infoDetsArr.push(col);				
					break;
					
				case "attrCrtdDate": 
					$lastRow.find("td:eq(4)").find('input:eq(2)').val(col);
					infoDetsArr.push(col);
					break;
					 
				
					
			} 
				  if((newval!=dataval)){
					  if(dataval != undefined && dataval != "0" && dataval != ""){
						  $("#"+dataAttr).addClass("alterColor");
						  $("#"+dataAttr).isDisabled = true;
						  $("#"+dataAttr).qtip({
							 		content: {text : "Changed From "+dataval+" to "+newval+""},   
							         style: {
							             classes: 'qtip-green qtip-rounded qtip-shadow'
							         }, position: {
							             my: 'top left',   
							             at: 'bottom left', 
							             viewport: $(window),
							             target: $("#"+dataAttr)  
							         }  
							     });

						  $("#"+dataAttr).attr("data-attr",(isNaN(dataval)) ? $("#"+dataAttr).removeAttr("data-attr") : dataval);
						  $("#"+dataAttr).val((isNaN(newval)) ? $("#"+dataAttr).removeAttr("data-attr"): newval);
					  } 
					 
					 	 
				 } 
				 
				
				
				
			 
		} 
		} 
}

function getOldAutoAlrvalue(AttrId){
 var retvalue=""; 
	if(AttrId != ""){
	var parameter = "DBCALLFOR=OLD_AUTOALTER&autoAlterId="+AttrId;
	ajaxAutoAlterCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
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

	 			if(tabdets["OLD_VALUE"]){ 
	 			
	 				retvalue=tabdets["OLD_VALUE"]; 
				} 
	 			
	 			if(tabdets["NO_OLD_VALUE"]){ 
	 				retvalue=""; 
				} 
	 			
	 			
	 		}
		});
		
	} 
	 return retvalue;
	
}



function ajaxAutoAlterCall(parameter,servletName,CallBack) {
	 
		$.ajax({
			type : "POST",
			url : servletName,
			data : parameter,
			dataType : "json",
			async : false,
			cache:false, 
			success : function(data,statusText) {	 
				CallBack(data);
			}, 
			error : function(request, status, error) { 
				applyErrorToastrAlert("Please Contact System Administrator"); 
				hideLoader();				
			}
		}); 
}
