/*Datatable Initialisation*/
 
/*Add Row Click */
$("#lfEduPlgARow").on("click",function(){
	
//	if(isEmpty($("#hPlanName").val()) || isEmpty($("#hInceptionDate").val()) ){ 
//		 $('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
//		 applyToastrAlert("Please Select any of the plans in Plan Details");
//		 return;
//	}
			eduplgClearFlds();
			showFIPAModel('liEducationPlg_Dialog','Life Insurance - Education Planning Details'); 
			$("#txtFldDlgEdPlgBankIntRate").val($("#caSavingDeprate").val());
			$("#txtFldDlgEdPlgInfRate").val($("#caEdnInfrate").val());

//			getRefId(); 
			
			var prevChildDets = [];
			var prevChildRows = liEducationtbl.row().count();
			if(prevChildRows>0){
				
				 $('#liEducationtbl tbody tr:visible').each(function(){
					 var curRow = $(this);
					 var mode = curRow.find("td:eq(0)").find("input:eq(0)").val();
					 if(mode != "D"){
						 var chid = curRow.find("td:eq(0)").find("input:eq(0)").val();
						 var chname= curRow.find("td:eq(2)").find("select:eq(0)").val();
						 prevChildDets.push({"childName":chname,"childid":chid}) ;
					 }
				 });
				
			}
			
			var planRefId = $("#covRef").val();
//			console.log(planRefId +"<----------------------------- planRefId in child edu");
			
			$("#txtFldDlgEduPlgId").val(makeid(17));
			$("#txtFldDlgRefId").val(planRefId);
			
			$('#liEducationPlg_Dialog').on('shown.bs.modal', function () {
				childexist();
				defaultRetEd();
				fetchEdcPlgPlanDetails(); 
//				$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#liEducationPlg_Dialog").find("select[id=selDlgEdPlgChldName]").focus();//Aravindh
				
				$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateeduplgDetails())return;
					   	eduplgRdlyflds(INS_MODE);  
					   	
					   	var rowlength = liEduPayoutstbl.row().count();
						if(rowlength == 0){
							showAlert("No Payout rows found!.Add atleast one payout details", null);
							return false;
						}
						
					   	getlieduplgRows(null,prevChildDets); 
						$('#liEducationPlg_Dialog').modal('hide'); 
				  });  
			});
			
			
});

$("#txtFldDlgEdPlgBankIntRate,#txtFldDlgEdPlgInfRate").on("change",function(){
	defaultRetEd();
});

function defaultRetEd(){
	var bankIntrate=$("#caSavingDeprate").val();
	var infIntrate=$("#caEdnInfrate").val(); 
	
//	$("#txtFldDlgEdPlgBankIntRate").val(bankIntrate);
//	$("#txtFldDlgEdPlgInfRate").val(infIntrate);
	
	if(isEmpty(bankIntrate) || bankIntrate == "100"){  
		$(".bankratedefault").removeClass("hidden");
//		$("#txtFldDlgEdPlgBankIntRate").val("100");
	}else{
		$(".bankratedefault").addClass("hidden");  
//		$("#txtFldDlgEdPlgBankIntRate").val(bankIntrate);
	}
	
	if(isEmpty(infIntrate) || infIntrate == "100"){
		$(".infratedefault").removeClass("hidden");
//		$("#txtFldDlgEdPlgInfRate").val("100");
	}else{
		$(".infratedefault").addClass("hidden"); 
//		$("#txtFldDlgEdPlgInfRate").val(infIntrate);
	}
}

function getRefId(){ 
	 var rowlen=liEducationtbl.rows().count();
	if(rowlen > 0){ 
		var genId=0; 
		$("[name=selEdPlgChldName]:visible").each(function(){
			var $row=$(this).closest("tr");
			var refId=$row.find("td:first").find("input:eq(2)").val(); 
			 if(!isEmpty(refId)){ 
				 var split=Number(refId.split("_")[1]); //1
				 if(genId == split){
					 genId+=1;
				 }else if(split>genId){
					 genId=split+1;
				 }
				 
			 }else if(isEmpty(refId) && genId == 0){
				 genId=1;
			 }
			
		});
		
		 $("#liEducationPlg_Dialog").find("input[name=txtFldDlgRefId]").val("PAY_"+genId); 
		
	}else{
		$("#liEducationPlg_Dialog").find("input[name=txtFldDlgRefId]").val("PAY_1"); 
	}
}

function chkChildEduPlgRowExist(pkid){
	
	var rowexist = null;
	var prevChildRows = liEducationtbl.row().count();
	if(prevChildRows>0){
		
//		 $('#liEducationtbl tbody tr ').each(function(){
//			 var curElem = $(this);
//			 var curRow = curElem.closest("tr");
//			 var mode = curElem.closest("tr").find("td:eq(0)").find("input:eq(0)").val();
//			 if(mode != "D"){
//				 var curval = curElem.find("td:eq(0) input[name=txtFldEduPlgId]").val(); 
//				 if(pkid == curval){
//					 rowexist = curRow;
//				 }
//			 }
//		 });
		$('#liEducationtbl tbody tr').find("td:eq(0)").find("input[name=txtFldEduPlgId]").each(function(i){
			var curval = $(this);
			var curRow = curval.closest("tr");
			var mode = curval.closest("tr").find("td:eq(0)").find("input:eq(0)").val();
			if(mode != "D"){
			  if(pkid == curval.val()){
				  rowexist = curRow;
			  }
			}
		});
	}
	
	return rowexist;
}

/*Populate Data */
function getlieduplgRows(dataset,prevChildDets){ 
  
	   var prevChildDets = [];
	var prevChildRow = null;
	var prevChildRows = liEducationtbl.row().count();
	var chname; 
	 
	if(prevChildRows>0){  
//		if(dataset ==null){
		   var orichname=$("#selDlgEdPlgChldName").val(); 
		   var bool=false;
		   
		   if(dataset !=null){
			   $.each(dataset , function (key, value) { 
				   orichname = dataset["childName"]; 
				}); 
		   }
		   

		   $('#liEducationtbl tbody tr:visible').each(function(){
				 var curRow = $(this);
				 var mode = curRow.find("td:eq(0)").find("input:eq(0)").val();
				 if(mode != "D"){
					 var chid = curRow.find("td:eq(0)").find("input:eq(0)").val();
					 var chname= curRow.find("td:eq(2)").find("select:eq(0)").val();
					 prevChildDets.push({"childName":chname,"childid":chid}) ;
				 
				 }
			 });
		 
		  
		   $.each(prevChildDets , function (key, value) {
		      if(prevChildDets[key].childName == orichname){
		    	  bool =true;
		      } 
		   });
		   
		   
		    
		   
		   if(bool){//Exist 
				  $('#liEducationtbl tbody tr').each(function(){
					 var curRow = $(this);
					 var mode = curRow.find("td:eq(0)").find("input:eq(0)").val();
					 if(mode != "D"){
						    chname= curRow.find("td:eq(2)").find("select:eq(0)").val(); 
						   if(chname == orichname){
							   prevChildRow = curRow;  
						   }
					 }
				 }); 
		   } 
//		}ELSE{}
		   
		
	}
	
	
	var nestedtable = '<div class="divliketable">';
	nestedtable += '<div class="divheadtemp">'+
					    '<div>Payout Age</div>'+
					    '<div>Payout Amount</div>'+
					    '<div>FV Amount</div>'+
				    '</div>';

//	if($.inArray(dataset["childName"], prevChildDets) == -1){
	if(prevChildRow == null){
		
		var cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10; 
		cell0 = '<span></span>'+
		'<input type="hidden" name="txtFldEduPlgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldEduPlgId"/><input type="hidden" name="txtFldRefId"><input type="hidden" name="txtFldChildRefId">';
		cell1 ='<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radeduplgSelect"/><label>&nbsp;</label></div>'; 
		cell2 ='<select  name="selEdPlgChldName"  onmouseover="fipaTooltip(this);" class="form-control editable" ></select>';	 
		cell3 ='<input type="text" name="txtFldChldPlanName"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	 
		cell4 ='<input type="text" name="txtFldChldIncDate" onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
		cell5 ='<input type="text" name="txtFldChldExpDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
		cell6 ='<input type="text" name="txtFldEdPlgChldAge"onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
		cell7 ='<input type="text" name="txtFldEdPlgTerEdcAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />';	
		cell8 ='<input type="text" name="txtFldEdPlgBankIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
		cell9 ='<input type="text" name="txtFldEdPlgLoanIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
		cell10 ='<input type="text" name="txtFldEdPlgInfRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';
		
			$("#liEduPayoutstbl tbody").find("tr").each(function(c,r){
				var pkid = $(this).find("td:eq(0)").find("input:eq(1)").val();
				var begAge= $(this).find("td:eq(2)").find("input:eq(0)").val();
				var totpaid=$(this).find("td:eq(3)").find("input:eq(0)").val();
				var tereduage=$(this).find("td:eq(4)").find("input:eq(0)").val();
				
				
				nestedtable += '<div  class="divdatatemp">'+
				            	'<div><input type="text" name="txtFldEduPlgChlBegAge" maxlength="3"  class="form-control editable " value="'+begAge+'"/></div>'+
				            	'<div><input type="text" name="txtFldEduPlgTotProPaid"  class="form-control editable" value="'+totpaid+'"/></div>'+
				            	'<div><input type="text" name="txtFldEduPlgChldTerAge"  readonly=true  class="form-control editable" readonly=true value="'+tereduage+'"/></div>'+
			            	'</div>';
				
				$(cell0).find("input:eq(1)").val(pkid);
				
				if(c > 0){
					
					 cell0 +='<i></i>'+
					'<input type="hidden" name="txtFldEduPlgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldEduPlgId" value="'+pkid+'"/><input type="hidden" name="txtFldRefId"><input type="hidden" name="txtFldChildRefId">';
					 cell1 +='<div class="checkbox checkbox-primary text-center" style="display:none"><input type="checkbox" name="radeduplgSelect"/><label>&nbsp;</label></div>';
					 cell2 +='<select  name="selEdPlgChldName"  onmouseover="fipaTooltip(this);" class="form-control editable" style="display:none" ></select>';	 
					 cell3 +='<input type="hidden" name="txtFldChldPlanName"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	 
					 cell4 +='<input type="hidden" name="txtFldChldIncDate"   onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
					 cell5 +='<input type="hidden" name="txtFldChldExpDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
					 cell6 +='<input type="hidden" name="txtFldEdPlgChldAge"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
					 cell7 +='<input type="hidden" name="txtFldEdPlgTerEdcAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />';	
					 cell8 +='<input type="hidden" name="txtFldEdPlgBankIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
					 cell9 +='<input type="hidden" name="txtFldEdPlgLoanIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
					 cell10+='<input type="hidden" name="txtFldEdPlgInfRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
				}
				
				
				
		});
			
			nestedtable += '</div>';
			
			
			var cell11 = nestedtable + '<input type="hidden" name="txtFldEduPlgChlBegAgeDummy" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable " />';	
			var cell12 = '<input type="hidden" name="txtFldEduPlgTotProPaidD"  onmouseover="fipaTooltip(this);" class="form-control editable" />';	
			var cell13='<input type="hidden" name="txtFldEduPlgChldTerAgeD"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly=true/>'+
			'<input type="hidden" name="txtFldEduPlgCrtdBy"/><input type="hidden" name="txtFldEduPlgCrtdDate"/>';
			
			liEducationtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13] ).draw( false );
			
			


		
	}else{
		
//		prevChildRow.find("div.divliketable").append( '<div>'+
//            	'<div><input type="text" name="txtFldEduPlgChlBegAge" maxlength="3"  class="form-control editable " value="'+begAge+'"/></div>'+
//            	'<div><input type="text" name="txtFldEduPlgTotProPaid"  class="form-control editable" value="'+totpaid+'"/></div>'+
//            	'<div><input type="text" name="txtFldEduPlgChldTerAge"  readonly=true  class="form-control editable" readonly=true value="'+tereduage+'"/></div>'+
//        	'</div>');

		
		
		if(dataset != null){
			
			var cell0 = prevChildRow.find("td:eq(0)"),
			cell1 =  prevChildRow.find("td:eq(1)"),
			cell2 = prevChildRow.find("td:eq(2)"),
			cell3 = prevChildRow.find("td:eq(3)"),
			cell4 = prevChildRow.find("td:eq(4)"),
			cell5 = prevChildRow.find("td:eq(5)"),
			cell6 = prevChildRow.find("td:eq(6)"),
			cell7 = prevChildRow.find("td:eq(7)"),
			cell8 = prevChildRow.find("td:eq(8)"),
			cell9 = prevChildRow.find("td:eq(9)"),
			cell10 = prevChildRow.find("td:eq(10)"),
			cell11 = prevChildRow.find("td:eq(11)");
			
			
			 cell0.append('<i></i>'+
						'<input type="hidden" name="txtFldEduPlgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldEduPlgId"/><input type="hidden" name="txtFldRefId"><input type="hidden" name="txtFldChildRefId">');
			cell1.append('<div class="checkbox checkbox-primary text-center" style="display:none"><input type="checkbox" name="radeduplgSelect"/><label>&nbsp;</label></div>');
			cell2.append('<select  name="selEdPlgChldName"  onmouseover="fipaTooltip(this);" class="form-control editable" style="display:none" ></select>');	 
			cell3.append('<input type="hidden" name="txtFldChldPlanName"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	 
			cell4.append('<input type="hidden" name="txtFldChldIncDate"   onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	
			cell5.append('<input type="hidden" name="txtFldChldExpDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	
			cell6.append('<input type="hidden" name="txtFldEdPlgChldAge"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	
			cell7.append('<input type="hidden" name="txtFldEdPlgTerEdcAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />');	
			cell8.append('<input type="hidden" name="txtFldEdPlgBankIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>');	
			cell9.append('<input type="hidden" name="txtFldEdPlgLoanIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>');	
			cell10.append('<input type="hidden" name="txtFldEdPlgInfRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>');	
						 
//			console.log("liEduPayoutstbl rows count --->"+liEduPayoutstbl.row().count());
			
			prevChildRow.find("div.divliketable").append( '<div  class="divdatatemp">'+
			    	'<div><input type="text" name="txtFldEduPlgChlBegAge" maxlength="3"  class="form-control editable"/></div>'+
			    	'<div><input type="text" name="txtFldEduPlgTotProPaid"  class="form-control editable"/></div>'+
			    	'<div><input type="text" name="txtFldEduPlgChldTerAge"  readonly=true  class="form-control editable" readonly=true/></div>'+
				'</div>');
			
		}else{
			
			
			var currrow = null;
			
			$("#liEduPayoutstbl tbody").find("tr").each(function(c,r){
				
//				console.log("liEduPayoutstbl tbody----------->"+c);
				
				var chldplanpkid = $(this).find("td:eq(0)").find("input:eq(1)").val();
					
				currrow = chkChildEduPlgRowExist(chldplanpkid);
					
				var pkid = $(this).find("td:eq(0)").find("input:eq(1)").val();
				var begAge= $(this).find("td:eq(2)").find("input:eq(0)").val();
				var totpaid=$(this).find("td:eq(3)").find("input:eq(0)").val();
				var tereduage=$(this).find("td:eq(4)").find("input:eq(0)").val();
				
			
				if(currrow){
					currrow.find("td:eq(0) input[name=txtFldEduPlgId]:eq("+c+")").val(pkid);
					
					if(currrow.find("div.divliketable").find("div.divdatatemp:eq("+c+")")){
					 
						currrow.find("div.divliketable").find("div.divdatatemp:eq("+c+") div:eq(0) input:eq(0)").val(begAge).attr("value",begAge);
						currrow.find("div.divliketable").find("div.divdatatemp:eq("+c+") div:eq(1) input:eq(0)").val(totpaid).attr("value",totpaid);
						currrow.find("div.divliketable").find("div.divdatatemp:eq("+c+") div:eq(2) input:eq(0)").val(tereduage).attr("value",tereduage);
					 
					}else{ 
						currrow.find("div.divliketable").append( '<div  class="divdatatemp">'+
						    	'<div><input type="text" name="txtFldEduPlgChlBegAge" maxlength="3"  class="form-control editable" value="'+begAge+'"/></div>'+
						    	'<div><input type="text" name="txtFldEduPlgTotProPaid"  class="form-control editable" value="'+totpaid+'"/></div>'+
						    	'<div><input type="text" name="txtFldEduPlgChldTerAge"  readonly=true  class="form-control editable" readonly=true value="'+tereduage+'"/></div>'+
							'</div>');
					}
					
					
					
					
				}else{
					
					prevChildRow.find("div.divliketable").append( '<div  class="divdatatemp">'+
					    	'<div><input type="text" name="txtFldEduPlgChlBegAge" maxlength="3"  class="form-control editable" value="'+begAge+'"/></div>'+
					    	'<div><input type="text" name="txtFldEduPlgTotProPaid"  class="form-control editable" value="'+totpaid+'"/></div>'+
					    	'<div><input type="text" name="txtFldEduPlgChldTerAge"  readonly=true  class="form-control editable" readonly=true value="'+tereduage+'"/></div>'+
						'</div>');
					
					currrow = prevChildRow;
					
					var cell0 = currrow.find("td:eq(0)"),
					cell1 =  currrow.find("td:eq(1)"),
					cell2 = currrow.find("td:eq(2)"),
					cell3 = currrow.find("td:eq(3)"),
					cell4 = currrow.find("td:eq(4)"),
					cell5 = currrow.find("td:eq(5)"),
					cell6 = currrow.find("td:eq(6)"),
					cell7 = currrow.find("td:eq(7)"),
					cell8 = currrow.find("td:eq(8)"),
					cell9 = currrow.find("td:eq(9)"),
					cell10 = currrow.find("td:eq(10)"),
					cell11 = currrow.find("td:eq(11)");

//					$lastRow.find("td:first").find('input[name=txtFldEduPlgId]')
					 cell0.append('<i></i>'+
						'<input type="hidden" name="txtFldEduPlgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldEduPlgId" value="'+pkid+'"/><input type="hidden" name="txtFldRefId"><input type="hidden" name="txtFldChildRefId">');
						 cell1.append('<div class="checkbox checkbox-primary text-center" style="display:none"><input type="checkbox" name="radeduplgSelect"/><label>&nbsp;</label></div>');
						 cell2.append('<select  name="selEdPlgChldName"  onmouseover="fipaTooltip(this);" class="form-control editable" style="display:none" ></select>');	 
						 cell3.append('<input type="hidden" name="txtFldChldPlanName"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	 
						 cell4.append('<input type="hidden" name="txtFldChldIncDate"   onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	
						 cell5.append('<input type="hidden" name="txtFldChldExpDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	
						 cell6.append('<input type="hidden" name="txtFldEdPlgChldAge"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>');	
						 cell7.append('<input type="hidden" name="txtFldEdPlgTerEdcAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />');	
						 cell8.append('<input type="hidden" name="txtFldEdPlgBankIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>');	
						 cell9.append('<input type="hidden" name="txtFldEdPlgLoanIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>');	
						 cell10.append('<input type="hidden" name="txtFldEdPlgInfRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>');	
					
				}
					
				
		});
			
			
		}
		

		

		
//		nestedtable += '</div>';		
//		cell11 += nestedtable + '<input type="hidden" name="txtFldEduPlgChlBegAgeDummy" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable " />';	
	
		
		
	}
				
//		$("#liEduPayoutstbl tbody").find("tr").each(function(c,r){
			
//				var uniqId =$(this).find("td:eq(0)").find("input:eq(1)").val();
//				var begAge= ""//$(this).find("td:eq(2)").find("input:eq(0)").val();
//				var totpaid=""//$(this).find("td:eq(3)").find("input:eq(0)").val();
//				var tereduage=""//$(this).find("td:eq(4)").find("input:eq(0)").val();
//				
				
//				var cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8; 
					 
//			if(c == 0){ 
//				cell0 = '<span></span>'+
//				'<input type="hidden" name="txtFldEduPlgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldEduPlgId"/><input type="hidden" name="txtFldRefId"><input type="hidden" name="txtFldChildRefId">';
//				cell1 ='<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radeduplgSelect"/><label>&nbsp;</label></div>'; 
//				cell2 ='<select  name="selEdPlgChldName"  onmouseover="fipaTooltip(this);" class="form-control editable" ></select>';	 
//				cell3 ='<input type="text" name="txtFldChldPlanName"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	 
//				cell4 ='<input type="text" name="txtFldChldIncDate" onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
//				cell5 ='<input type="text" name="txtFldChldExpDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
//				cell6 ='<input type="text" name="txtFldEdPlgChldAge"onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
//				cell7 ='<input type="text" name="txtFldEdPlgTerEdcAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />';	
//				cell8 ='<input type="text" name="txtFldEdPlgBankIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
//				cell9 ='<input type="text" name="txtFldEdPlgLoanIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
//				cell10 ='<input type="text" name="txtFldEdPlgInfRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
//			} 
			
//			else{
//				 cell0 ='<i></i>'+
//				'<input type="hidden" name="txtFldEduPlgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldEduPlgId"/><input type="hidden" name="txtFldRefId"><input type="hidden" name="txtFldChildRefId">';
//				 cell1 ='<div class="checkbox checkbox-primary text-center" style="display:none"><input type="checkbox" name="radeduplgSelect"/><label>&nbsp;</label></div>';
//				 cell2 ='<select  name="selEdPlgChldName"  onmouseover="fipaTooltip(this);" class="form-control editable" style="display:none" ></select>';	 
//				 cell3 ='<input type="hidden" name="txtFldChldPlanName"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	 
//				 cell4 ='<input type="hidden" name="txtFldChldIncDate"   onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
//				 cell5 ='<input type="hidden" name="txtFldChldExpDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
//				 cell6 ='<input type="hidden" name="txtFldEdPlgChldAge"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
//				 cell7 ='<input type="hidden" name="txtFldEdPlgTerEdcAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />';	
//				 cell8 ='<input type="hidden" name="txtFldEdPlgBankIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
//				 cell9 ='<input type="hidden" name="txtFldEdPlgLoanIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
//				 cell10='<input type="hidden" name="txtFldEdPlgInfRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
//			}
			
			var rowCount = $('#liEducationtbl tbody.maintable tr').length;	
			rowCount =  (rowCount == 0) ? $('#liEducationtbl tbody.maintable tr').length : rowCount;
			var $lastRow = $("#liEducationtbl tbody.maintable tr:last");	 	 
 
			 if(prevChildRow!=null){
				$lastRow = prevChildRow;
			}else{
				$lastRow=$("#liEducationtbl tbody.maintable tr:last");  
			} 
			
			$lastRow.find("td:first").find('span').text(rowCount); 
			$lastRow.find("td:first").find('i').text(""); 
			
			$lastRow.find("td:eq(1)").find("input:first").click(function(){
			//	selectEduPlgSingleRow(this);
				selectSingleRow(this);
			});
			
			var sel1 = $("#selDlgEdPlgChldName > option").clone();
			$lastRow.find("td:eq(2)").find('select[name=selEdPlgChldName] option').remove(0);
			$lastRow.find("td:eq(2)").find('select[name=selEdPlgChldName]').append(sel1);

			
			if(dataset == null){
				
//				$lastRow.find("td:first").find('input:eq(1)').val($("#txtFldDlgEduPlgId").val()); 
				$lastRow.find("td:first").find('input[name=txtFldEduPlgId]').each(function(){
					if(isEmpty($(this).val())){
						$(this).val(makeid(17));
					}
				}); 
				$lastRow.find("td:first").find('input[name=txtFldRefId]').val($("#txtFldDlgRefId").val()); 
//				$lastRow.find("td:first").find('input:eq(3)').val(chid); 
				
				$lastRow.find("td:eq(2)").find('select[name=selEdPlgChldName]').val($("#selDlgEdPlgChldName").val()); 
				$lastRow.find("td:eq(2)").find('select[name=selEdPlgChldName]').on("change",function(){
					dhtmlModChange($(this).closest("tr")); 
					teritaryAgeCal($(this),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'));
					calPVFVRetEduPlg($(this).closest("tr"));
				});


				$lastRow.find("td:eq(3)").find('input[name=txtFldChldPlanName]').val($("#txtFldDlgEduPlgPlanName").val()); 
				$lastRow.find("td:eq(4)").find('input[name=txtFldChldIncDate]').val($("#txtFldDlgEduPlgIncepDate").val()); 
				$lastRow.find("td:eq(5)").find('input[name=txtFldChldExpDate]').val($("#txtFldDlgEduPlgExpDate").val()); 
				$lastRow.find("td:eq(6)").find('input[name=txtFldEdPlgChldAge]').val($("#txtFldDlgEdPlgChldAge").val());
				
				$lastRow.find("td:eq(7)").find('input[name=txtFldEdPlgTerEdcAge]').val($("#txtFldDlgEdPlgTerEdcAge").val()); 
				$lastRow.find("td:eq(7)").find('input[name=txtFldEdPlgTerEdcAge]').addClass("applyEvntYrs");
				$lastRow.find("td:eq(7)").find('input[name=txtFldEdPlgTerEdcAge]').on("change",function(){
					dhtmlModChange($(this).closest("tr")); 
					calPVFVRetEduPlg($(this).closest("tr"));
				});
				
				
				$lastRow.find("td:eq(8)").find('input[name=txtFldEdPlgBankIntRate]').val($("#txtFldDlgEdPlgBankIntRate").val());
				$lastRow.find("td:eq(8)").find('input[name=txtFldEdPlgBankIntRate]').addClass("applyEvntpCent26");
				$lastRow.find("td:eq(8)").find('input[name=txtFldEdPlgBankIntRate]').on("change",function(){
					dhtmlModChange($(this).closest("tr")); 
					calPVFVRetEduPlg($(this).closest("tr"));
				});
				
				$lastRow.find("td:eq(9)").find('input[name=txtFldEdPlgLoanIntRate]').val($("#txtFldDlgEdPlgLoanIntRate").val());
				$lastRow.find("td:eq(9)").find('input[name=txtFldEdPlgLoanIntRate]').addClass("applyEvntpCent26");
				$lastRow.find("td:eq(9)").find('input[name=txtFldEdPlgLoanIntRate]').on("change",function(){
					dhtmlModChange($(this).closest("tr")); 
					calPVFVRetEduPlg($(this).closest("tr"));
				});
				
				$lastRow.find("td:eq(10)").find('input[name=txtFldEdPlgInfRate]').val($("#txtFldDlgEdPlgInfRate").val());
				$lastRow.find("td:eq(10)").find('input[name=txtFldEdPlgInfRate]').addClass("applyEvntpCent26");
				$lastRow.find("td:eq(10)").find('input[name=txtFldEdPlgInfRate]').on("change",function(){
					dhtmlModChange($(this).closest("tr")); 
					calPVFVRetEduPlg($(this).closest("tr"));
				});


				
			}
			
			
			
			
		
			
			
			
			
			
//			$lastRow.find("td:eq(11)").find('input:eq(0)').val(begAge);
//			$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntYrs");
//			$lastRow.find("td:eq(11)").find('input:eq(0)').on("change",function(){
//				dhtmlModChange($(this).closest("tr")); 
//				calPVFVRetEduPlg($(this).closest("tr"));
//			});
//			
//			$lastRow.find("td:eq(12)").find('input:eq(0)').val(totpaid);
//			$lastRow.find("td:eq(12)").find('input:eq(0)').addClass("applyEvntUsd");
//			$lastRow.find("td:eq(12)").find('input:eq(0)').on("change",function(){
//				dhtmlModChange($(this).closest("tr")); 
//				calPVFVRetEduPlg($(this).closest("tr"));
//			});
//			
//			$lastRow.find("td:eq(13)").find('input:eq(0)').val(tereduage);
//			$lastRow.find("td:eq(13)").find('input:eq(0)').addClass("applyEvntUsd");
//			$lastRow.find("td:eq(13)").find('input:eq(0)').on("change",function(){
//				dhtmlModChange($(this).closest("tr")); 
//				calPVFVRetEduPlg($(this).closest("tr"));
//			});

			
//		});
			

	applyEventHandlers();

	//
	//$lastRow.find("input,select").on("click",function(event){
//		event.stopPropagation();
	//});
	//$lastRow.click(function() {
//	    var checkbox = $(this).find("td:eq(1)").find("input");
//	    var c1 =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID  
//	    if(checkbox.is(":checked")) { 
//	    	$('#liEducationtbl tbody tr').each(function(){
//				var c2  =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID 
//				if(c1 == c2){ 
//					$(this).find("td:eq(1)").find("input").prop("checked", false);
//			        $(this).removeClass("selected");
//				} 
//			});
//	    	
//	    }else { 
//	        $('#liEducationtbl tbody tr').each(function(){
//				var c2  =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID  
//				if(c1 == c2){
//					$(this).find("td:eq(1)").find("input").prop("checked", true);
//					 $(this).addClass("selected");	
//				} 
//			}); 
//	    }
//		 
	//});

	$lastRow.find("input,select").on("click",function(event){
		event.stopPropagation();
	});
	/*$lastRow.click(function() {
	    var checkbox = $(this).find("td:eq(1)").find("input");
	    if(checkbox.is(":checked")) {
	        checkbox.prop("checked", false);
		$lastRow.removeClass("selected");
	    }else {
	        checkbox.prop("checked", true);
		$lastRow.addClass("selected");
	    }
	});*/

	//DHTML CRUD ICONS
	$lastRow.click(function(){
		/*toggleSingleRow($lastRow);*/
		crudicons(this,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
				
	});
	//DHTML CRUD ICONS

	$lastRow.find("td:eq(1)").find("input:first").click(function(){ 
//		DHTML CRUD ICONS
		crudicons(this,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
	});


	if(dataset != null){

		 
		$lastRow.find("td:eq(0)").find('input[name=txtFldEduPlgMode]').val(UPD_MODE);
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			 
			switch(data){
			
				case "chliId": 
					$lastRow.find("td:eq(0)").find('input[name=txtFldEduPlgId]:last').val(col);  
					break; 

				case "chliRefId":
					$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);  
					break; 
					
				case "childName":
//					console.log(col);
//					selectNullvalChk($lastRow.find("td:eq(2)"),col);  
					$lastRow.find("td:eq(2)").find('select[name=selEdPlgChldName]:last').val(col);
					break; 
					
				case "chliPlanName":
					$lastRow.find("td:eq(3)").find('input[name=txtFldChldPlanName]:last').val(col);  
					break;
					
				case "chliIncDate":
					$lastRow.find("td:eq(4)").find('input[name=txtFldChldIncDate]:last').val(col);  
					break;
					
				case "chliExpDate":
					$lastRow.find("td:eq(5)").find('input[name=txtFldChldExpDate]:last').val(col);  
					break;
					
				case "childAge": 
					$lastRow.find("td:eq(6)").find('input[name=txtFldEdPlgChldAge]:last').val(col); 
					break; 
					
				case "terEdcAge":
					$lastRow.find("td:eq(7)").find('input[name=txtFldEdPlgTerEdcAge]:last').val(col);  
					break;
					 
				case "bankIntRate": 
					$lastRow.find("td:eq(8)").find('input[name=txtFldEdPlgBankIntRate]:last').val(col);  
					break;
					
				case "loanIntRate": 
					$lastRow.find("td:eq(9)").find('input[name=txtFldEdPlgLoanIntRate]:last').val(col);  
					break;
				 
				case "inflationRate": 
					$lastRow.find("td:eq(10)").find('input[name=txtFldEdPlgInfRate]:last').val(col);  
					break;
				 
				case "startAge": 
					var startAge= col;
					$lastRow.find("td:eq(11)").find('input[name=txtFldEduPlgChlBegAge]:last').val(startAge).attr("value",startAge);  
					break;
					
				case "paidByPolicy":
					var paidByPolicy=col;
					$lastRow.find("td:eq(11)").find('input[name=txtFldEduPlgTotProPaid]:last').val(paidByPolicy).attr("value",paidByPolicy);  
					break;  
					
				case "convertVal": 
					var convertVal=col;
					$lastRow.find("td:eq(11)").find('input[name=txtFldEduPlgChldTerAge]:last').val(convertVal).attr("value",convertVal);  
					break; 
					
					
				case "chliCrtdBy": 
					$lastRow.find("td:eq(13)").find('input:eq(1)').val(col);
					infoDetsArr.push(col);				
					break;
					
				case "chliCrtdDate":
					$lastRow.find("td:eq(13)").find('input:eq(2)').val(col);
					infoDetsArr.push(col);
					break;
					
				case "chliModBy":
					infoDetsArr.push(col);
					break;
					
				case "chliModDate":
					infoDetsArr.push(col);
					break;	
			}			 
			 
		}
		
		}
	else{
//		DHTML CRUD ICONS
		crudicons(null,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
	}
	  /*
	//instant save added line 
	if(dataset == null){
		instantEduPlgSave($lastRow,INS_MODE);	
	}
	*/
	//backgroundSetEduPlg();
	totalPvRetEdPlgTerEdAge(); 


	/*

	$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
	$lastRow.find("select").prop("disabled",true);//instant save added line
	*/
	reOrderVisibleRows('liEducationtbl');
	
		
//	}


}

function selectEduPlgSingleRow(obj){
	var $row = $(obj).closest('tr'); 
	var c1 	 =$row.find("td:eq(0)").find('input:eq(2)').val();//ref ID  
   if($(obj).is(":checked")){
		$('#liEducationtbl tbody tr').each(function(){
			var c2  =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID 
			if(c1 == c2){
				$(this).addClass('selected');	
				$(this).find("td:eq(1)").find('input[type=checkbox]').prop("checked",true);
			} 
		});
		
	}else{
		$('#liEducationtbl tbody tr').each(function(){
			var c2  =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID  
			if(c1 == c2){
				$(this).removeClass('selected');	
				$(this).find("td:eq(1)").find('input[type=checkbox]').prop("checked",false);
			} 
		});
		
	}
}


function calPVFVRetEduPlg($lastRow){
	var begAge=Number($lastRow.find("td:eq(11)").find('input:eq(0)').val());//by default it takes 0 if empty
	var anlpaidOut=Number($lastRow.find("td:eq(12)").find('input:eq(0)').val()); 
	var terAge=Number($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	var totTeEdAge=0;
	var bkrate=isEmpty($lastRow.find("td:eq(8)").find('input:eq(0)').val())? (100/100) : Number($lastRow.find("td:eq(8)").find('input:eq(0)').val())/100;//Bank Rate
	var infrate=isEmpty($lastRow.find("td:eq(10)").find('input:eq(0)').val())? (100/100) : Number($lastRow.find("td:eq(10)").find('input:eq(0)').val())/100;//Inflation rate
	var loanrate=isEmpty($lastRow.find("td:eq(9)").find('input:eq(0)').val())? (100/100) : Number($lastRow.find("td:eq(9)").find('input:eq(0)').val())/100;//Loan interest rate
	
	if(!isEmpty(begAge)){
		
		if(begAge < terAge){  
			totTeEdAge  =Number(Math.round(FVCalculation(loanrate, (terAge-begAge),0, -1*(anlpaidOut), 0 ))); 
		}else if(begAge == terAge){  
			totTeEdAge  =Number(Math.round(anlpaidOut)); 
		}else if(begAge > terAge){  
			totTeEdAge = Number(Math.round(PVCalculation((bkrate),(begAge-terAge),0,-1*anlpaidOut,1)));
		}  
	}
	
	
	$lastRow.find("td:eq(13)").find('input:eq(0)').val(roundNumber(totTeEdAge));
	totalPvRetEdPlgTerEdAge();
}

 function totalPvRetEdPlgTerEdAge(){
		var sum=0;
		 var count  = liEducationtbl.rows().count();
		 if(count >0){
			 $("#liEducationtbl tbody tr:visible").each(function(){
				 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
				 if(mode_r != "D"){

					 var terage  = Number($(this).find("td:eq(13)").find("input:eq(0)").val());
					  var pv  = (isNaN(terage)?0:terage);
					  sum=sum+pv;
					  
				 }
			  }); 
		 }
		  
		 
		$("#retEduPlgAgeCalTablefooter #txtFldRetEdPlgTotalPVCal").val(Math.round(sum));
		reOrderVisibleRows('liEducationtbl');
 }
 

//DHTML SELECT ALL
 function SelAllliEducation(obj){
 	
 	if($(obj).is(":checked")){
 		
 		$('#liEducationtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
 		
 		$("#lfEduPlgDRow").attr("disabled",false);
 		$('#liEducationtbl tbody tr').addClass("selected");
 		
 		var $rowCount = $('#liEducationtbl tbody tr').length;
 		
 		if($rowCount == 0){
 			$(obj).prop("checked",false);
 			$("#lfEduPlgERow").attr("disabled",false);//changed
 			/*$("#lfEduPlgDRow").attr("disabled",true);*/
 		}else if($rowCount == 1){
 			$("#lfEduPlgERow").attr("disabled",false);
 			$("#lfEduPlgDRow").attr("disabled",false);
 		}else if($rowCount > 1){
 			$("#lfEduPlgERow").attr("disabled",false);//changed
 			$("#lfEduPlgDRow").attr("disabled",false);
 		}
 		
 	}else{
 		
 		$('#liEducationtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
 		
 		$('#liEducationtbl tbody tr').removeClass("selected");
 		
 		$("#lfEduPlgERow").attr("disabled",false);//changed
 		/*$("#lfEduPlgDRow").attr("disabled",true);*/
 		
 	}
 	
 }
/*Edit Row Click */
$("#lfEduPlgERow").on("click",function(){
	lfEduPlgVRow(); 
});


/*View Row Click */
function lfEduPlgVRow(){
	eduplgClearFlds();
	
	var isOneRowSelected=0;
	var $rowCountTotal = liEducationtbl.row().count();
	var $rowCount = $('#liEducationtbl tbody tr:visible').length;	
	var $lastRow = $("#liEducationtbl tbody tr:visible:last");	
	
	if($rowCountTotal <1 ||  $rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	/*var lifeRecode=[];
	$("#liEducationtbl tbody").find('input[name="radeduplgSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		var refId=$curElm.closest("tr").find("td:first").find('input:eq(2)').val();
		 if(lifeRecode.indexOf(refId) === -1){
			 if($curElm.is(":checked")){ 
					isOneRowSelected++;
			 }
			 lifeRecode.push(refId);
		  } 
	});*/
	
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	var lifeEditRecode=[];
	$("#liEducationtbl tbody tr:visible").find('input[name="radeduplgSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
	     	 var pkid=$row.find("td:first").find('input:eq(1)').val();  //planrefid
	     	 var refId=$row.find("td:first").find('input:eq(2)').val();  //planrefid
	     	 var childrefId=$row.find("td:first").find('input:eq(3)').val();  //childrefId
	     	 
//	     	 $("#liEducationPlg_Dialog").find("input[name=txtFldDlgRefId]").val(refId);
	     	
//	     	 if(lifeEditRecode.indexOf(childrefId) === -1){
	     		 
	     		 if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 
				 $("#liEducationtbl tbody tr").each(function(){
					 
					 if(childrefId == $(this).find("td:first").find('input:eq(3)').val()){
						 $(this).find("td:first").find('input:eq(0)').val($mode); 
					 }
				 });
				 
				     				    
				 	eduplgRdlyflds($mode);
				 	
					eduplgfilldlgval($row); 
					
					showFIPAModel('liEducationPlg_Dialog','Life Insurance - Education Planning Details');
					
					$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
					
					$('#liEducationPlg_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line					
//						fetchEdcPlgPlanDetails();
//						$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						
						$("#liEducationPlg_Dialog").find("select[id=selDlgEdPlgChldName]").focus();//Aravindh
						
						$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							
							
							if(!validateeduplgDetails())return;
						   	eduplgRdlyflds(INS_MODE);  
						   	
						   	var rowlength = liEduPayoutstbl.row().count();
							if(rowlength == 0){
								showAlert("No Payout rows found!.Add atleast one payout details", null);
								return false;
							}
							
							
							
						   	getlieduplgRows(null,[]); 
							$('#liEducationPlg_Dialog').modal('hide'); 
							
//							 	if(!validateeduplgDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			eduplgfilldomval($RowId,$row); 
//					     		}  
					     		totalPvRetEdPlgTerEdAge();
//					     		instantEduPlgSave($row,UPD_MODE); //instant save added line
//								$('#liEducationPlg_Dialog').modal('hide'); 
								eduplgClearFlds();
								crudicons(null,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
							
						});
						
						$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
						});
					});
					 
			} 
			
			if(($mode == QRY_MODE)){
				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);  
				 $("#liEducationtbl tbody tr:visible").each(function(){
					 if(refId == $(this).find("td:first").find('input:eq(2)').val()){
						 $(this).find("td:first").find('input:eq(0)').val(UPD_MODE); 
					 }
				 });
				 
				 	eduplgRdlyflds($mode);
					eduplgfilldlgval($row); 
					showFIPAModel('liEducationPlg_Dialog','Life Insurance - Education Planning Details');  
					$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#liEducationPlg_Dialog').on('shown.bs.modal', function () {
				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
		//				$row.find("select").prop("disabled",true);//instant save added line
					
//						fetchEdcPlgPlanDetails();
//						$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").text("OK");
						$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							
							
							 if(!validateeduplgDetails())return; 
								var rowlength = liEduPayoutstbl.row().count();
								if(rowlength == 0){
									showAlert("No Payout rows found!.Add atleast one payout details", null);
									return false;
								}
								
								
								var prevChildDets = [];
							   	getlieduplgRows(null,prevChildDets);
//							 
//							 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			eduplgfilldomval($RowId,$row); 
//					     		}  
					     		totalPvRetEdPlgTerEdAge();
					     		
					     		
					     		
//					     		instantEduPlgSave($row,UPD_MODE); //instant save added line
//								$('#liEducationPlg_Dialog').modal('hide');
								
								
								eduplgClearFlds();
								
								
								crudicons(null,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
						});
						

						$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
						});
					});
					 
			} 
			
				lifeEditRecode.push(refId);
//	     	 }
	     	
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}


/*Delete Row Click */
$("#lfEduPlgDRow").on("click",function(){  

	
	//	datatableDeleteRow('liEducationtbl',liEducationtbl,'SelliEducation','lfEduPlgERow','lfEduPlgDRow');  

	
 
	
	var flg=true;
	var rowCount = liEducationtbl.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	
	$('#liEducationtbl tbody').find('input[type=checkbox],input[type=radio]').each(function(){
		if($(this).is(":checked")){
			isOneRowSelected=true;
		}
	});
	

	if(!isOneRowSelected){ 		
		applyToastrAlert("No Rows Selected");
		flg=false;
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
					
					$('#liEducationtbl tbody').find('input[type=checkbox],input[type=radio]').each(function(){
						
						if($(this).is(":checked")){
		
							var row = $(this).parents("tr");                                    
							var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
		
							if(mode == INS_MODE){ 
								
								$(this).parents("tr").hide();
								$(this).parents("tr").find("td:first").find('input[name=txtFldEduPlgMode]').val(DEL_MODE);
								
							}else if (mode == QRY_MODE || mode == UPD_MODE){  
								$(this).parents("tr").hide();
								$(this).parents("tr").find("td:first").find('input[name=txtFldEduPlgMode]').val(DEL_MODE);     		     			
							} 
		
							reOrderVisibleRows("liEducationtbl");
							$(this).attr("checked",false);
							isOneRowSelected=true;
							
						}
					});
					
					   
						reOrderVisibleRows("liEducationtbl");
						recalculateFooters("liEducationtbl");
					
						$('#confirmationalertmsgdiv').modal('hide');  
						
						var rc = liEducationtbl.row().count();
//						if(rc ==0 ){
							$('#SelliEducation').prop("checked",false);
							crudicons(null,'liEducationtbl','SelliEducation','','lfEduPlgDRow');
//						}
					  	
				  });
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
					  	$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				
			});
	}


});

function fetchEdcPlgPlanDetails(){ 
	
	var strplanName	=	$("#covPlanName").text(); 
	var strInception=	$("#covInception").text();  
	var strExpiry	=	$("#covExpiry").text();
	var planPkid = $("#covRef").val();
	
	
	$("#liEducationPlg_Dialog #txtFldDlgEduPlgPlanName").prop("disabled",true);
	$("#liEducationPlg_Dialog #txtFldDlgEduPlgIncepDate").prop("disabled",true);
	$("#EduPlgcptDatepicker").datetimepicker("remove");
	$("#liEducationPlg_Dialog #txtFldDlgEduPlgExpDate").prop("disabled",true);
	$("#EduPlgExpDatepicker").datetimepicker("remove");
	$("#liEducationPlg_Dialog #txtFldDlgEdPlgChldAge").prop("disabled",true);
	
	$("#liEducationPlg_Dialog #txtFldDlgEdPlgChldAge").prop("disabled",true);
	
	$("#liEducationPlg_Dialog #txtFldDlgEduPlgPlanName").val(strplanName);
	$("#liEducationPlg_Dialog #txtFldDlgEduPlgIncepDate").val(strInception);
	$("#liEducationPlg_Dialog #txtFldDlgEduPlgExpDate").val(strExpiry);

	 
}
/*Clear Fields */
function eduplgClearFlds(){
	$("#liEducationPlg_Dialog").find("input[type=text]").val("");
	$("#liEducationPlg_Dialog").find("textarea").val("");
	$("#liEducationPlg_Dialog").find("select").val("");
	liEduPayoutstbl.clear().draw(); 
}

/*Disabled/Readonly Fields */
function eduplgRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#liEducationPlg_Dialog :input").prop("disabled", false); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#liEducationPlg_Dialog :input").prop("disabled", false);
	 }
	 $("#liEducationPlg_Dialog #txtFldDlgEduPlgPlanName").prop("disabled",true);
		$("#liEducationPlg_Dialog #txtFldDlgEduPlgIncepDate").prop("disabled",true);
		$("#liEducationPlg_Dialog #txtFldDlgEduPlgExpDate").prop("disabled",true);
}

/*Validation */
function validateeduplgDetails(){
	 
/*	if(!(validateFocusFlds('liEducationPlg_Dialog','selDlgEdPlgChldName',LIEDU_CHLDNAME))) return; 
	if(!(validateFocusFlds('liEducationPlg_Dialog','txtFldDlgEdPlgTerEdcAge',LIEDU_TEREDAGE))) return;
	if(!(validateFocusFlds('liEducationPlg_Dialog','txtFldDlgEdPlgBankIntRate',LIEDU_BANKRATE))) return;
	if(!(validateFocusFlds('liEducationPlg_Dialog','txtFldDlgEdPlgLoanIntRate',LIEDU_LOANRATE))) return;*/
	  return true; 
}
 

/*Mandatory Fields Tooltip*/ 
$("#selDlgEdPlgChldName,#txtFldDlgEdPlgTerEdcAge,#txtFldDlgEdPlgBankIntRate").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  


/* Filling Model Fields*/
function eduplgfilldlgval($lastRow){
	
//	 $('#liEducationPlg_Dialog #txtFldDlgEduMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	 
	  $('#liEducationPlg_Dialog #txtFldDlgEduPlgId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  
	  $('#liEducationPlg_Dialog #selDlgEdPlgChldName').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  
	  $('#liEducationPlg_Dialog #txtFldDlgEduPlgPlanName').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#liEducationPlg_Dialog #txtFldDlgEduPlgIncepDate').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#liEducationPlg_Dialog #txtFldDlgEduPlgExpDate').val($lastRow.find("td:eq(5)").find('input:eq(0)').val()); 
	  $('#liEducationPlg_Dialog #txtFldDlgEdPlgChldAge').val($lastRow.find("td:eq(6)").find('input:eq(0)').val()); 
	  
	  
	  $('#liEducationPlg_Dialog #txtFldDlgEdPlgTerEdcAge').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#liEducationPlg_Dialog #txtFldDlgEdPlgBankIntRate').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#liEducationPlg_Dialog #txtFldDlgEdPlgLoanIntRate').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#liEducationPlg_Dialog #txtFldDlgEdPlgInfRate').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());  
	  
	  $('#liEducationPlg_Dialog #txtFldDlgRefId').val($lastRow.find("td:eq(0)").find("input:eq(2)").val()); 
	  
//	  $('#liEducationtbl tbody tr:visible').each(function(){ 
		  var totalPayoutRows = $lastRow.find("div.divdatatemp").length;
		  var refId = $lastRow.find("td:eq(0) input:eq(2)").val();
		  var pkid = $lastRow.find("td:eq(0) input:eq(1)").val();
//		  if(refId == $lastRow.find("td:eq(0)").find('input:eq(2)').val()){
		  for(var lp = 0; lp < totalPayoutRows ; lp++){
			  getPayoutsRows($lastRow,lp);
		  }
			  
		  
//	  }); 
	   
	
}

/* Filling Table Fields*/
function eduplgfilldomval($RowId,$row){
	
//	var refId=$(this).attr("data-attr");
	var $rowrefid=$row.find("td:eq(0)").find("input:eq(3)").val(); 
	
	
	var refid = $("#liEducationPlg_Dialog").find("input[name=txtFldDlgRefId]").val();
	
	if(isEmpty(refid)){
//		  getRefId(); 
		  var genRef=$("#liEducationPlg_Dialog").find("input[name=txtFldDlgRefId]").val();
		  $row.find("td:eq(0)").find("input:eq(2)").val(genRef);
		  $("#liEducationPlg_Dialog").find("input[name=txtFldDlgRefId]").val(genRef);
	} 
	  
	  
	$('#liEduPayoutstbl tbody tr').each(function(){  
	
		var $payRow=$(this);
		var begAge=$payRow.find("td:eq(2)").find("input:eq(0)").val();
		var totpaid=$payRow.find("td:eq(3)").find("input:eq(0)").val();
		var tereduage=$payRow.find("td:eq(4)").find("input:eq(0)").val(); 
		var refId = $payRow.attr("data-attr");
		
		$('#liEducationtbl tbody tr:visible').each(function(){
			if(isValidObject(refId) && isValidObject($(this).attr("data-attr")) ){
			if(refId == $(this).attr("data-attr")){
				$(this).find("td:eq(2)").find('select:eq(0)').val($("#selDlgEdPlgChldName").val());
				$(this).find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgEduPlgPlanName").val());
				$(this).find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgEduPlgIncepDate").val());  
				$(this).find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgEduPlgExpDate").val()); 
				$(this).find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgEdPlgChldAge").val()); 
				
				$(this).find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgEdPlgTerEdcAge").val());
				$(this).find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgEdPlgBankIntRate").val());  
				$(this).find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgEdPlgLoanIntRate").val());
				$(this).find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgEdPlgInfRate").val());
				
				$(this).find("td:eq(11)").find('input:eq(0)').val(begAge); 
				$(this).find("td:eq(12)").find('input:eq(0)').val(totpaid);
				$(this).find("td:eq(13)").find('input:eq(0)').val(tereduage);   
				
			}
			}
			
			
		});

		if(!isValidObject(refId)){  
			addNewPayoutRow($payRow); 
		}  
		
	
		
	}); 
	
	totalPvRetEdPlgTerEdAge();
//	backgroundSetEduPlg();
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

}


//instant save added line
$("#liEducationPlg_Dialog").find("input,select,textarea").on("change",function(){
	$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

 



function addNewPayoutRow($payRow){ 
	
	  		var refid=$("#liEducationPlg_Dialog").find("input[name=txtFldDlgRefId]").val();
	  		var pkid=$("#liEducationPlg_Dialog").find("input[name=txtFldDlgEduPlgId]").val();
	 
			var begAge=$payRow.find("td:eq(2)").find("input:eq(0)").val();
			var totpaid=$payRow.find("td:eq(3)").find("input:eq(0)").val();
			var tereduage=$payRow.find("td:eq(4)").find("input:eq(0)").val(); 
			
			
			
			var cell0 = '<i></i>'+
			'<input type="hidden" name="txtFldEduPlgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldEduPlgId"><input type="hidden" name="txtFldRefId">';
			var cell1 ='<div class="checkbox checkbox-primary text-center" style="display:none"><input type="checkbox" name="radeduplgSelect"/><label>&nbsp;</label></div>';
			var cell2 ='<select  name="selEdPlgChldName"  onmouseover="fipaTooltip(this);" class="form-control editable" style="display:none" ></select>';	 
			
			var cell3 ='<input type="hidden" name="txtFldChldPlanName" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true" />';	
			var cell4 ='<input type="hidden" name="txtFldChldIncDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
			var cell5='<input type="hidden" name="txtFldChldExpDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
			var cell6='<input type="hidden" name="txtFldEdPlgChldAge"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	
			  
			
			var cell7 ='<input type="hidden" name="txtFldEdPlgTerEdcAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />';	
			var cell8 ='<input type="hidden" name="txtFldEdPlgBankIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
			var cell9 ='<input type="hidden" name="txtFldEdPlgLoanIntRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
			
			var cell10='<input type="hidden" name="txtFldEdPlgInfRate"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	
		    var cell11='<input type="text" name="txtFldEduPlgChlBegAge" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable" />';	
		    var cell12='<input type="text" name="txtFldEduPlgTotProPaid"  onmouseover="fipaTooltip(this);" class="form-control editable" />';	
		    var cell13='<input type="text" name="txtFldEduPlgChldTerAge"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly=true/>'+
		    '<input type="hidden" name="txtFldEduPlgCrtdBy"/><input type="hidden" name="txtFldEduPlgCrtdDate"/>';


		liEducationtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13] ).draw( false );

		  var row = $('#liEducationtbl tbody tr').length;	
		  
		  var $last = $("#liEducationtbl tbody tr:last");	
		   
		  
		   $last.find("td:first").find('span').text(""); 
		   $last.find("td:first").find('i').text(""); 
		   
		   
		   
		   $last.find("td:first").find('input:eq(1)').val(pkid); 
		   $last.find("td:first").find('input:eq(2)').val(refid); 


//		  console.log("inside loop selDlgEdPlgChldName"+$("#selDlgEdPlgChldName").val())
		  var sel1 = $("#selDlgEdPlgChldName > option").clone();
		  $last.find("td:eq(2)").find('select:eq(0)').append(sel1);
		  $last.find("td:eq(2)").find('select:eq(0)').val($("#selDlgEdPlgChldName").val()); 
		  $last.find("td:eq(2)").find('select:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });


		  $last.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgEduPlgPlanName").val()); 
		  $last.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgEduPlgIncepDate").val()); 
		  $last.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgEduPlgExpDate").val()); 
		  $last.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgEdPlgChldAge").val()); 
		   
		  
		  $last.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgEdPlgTerEdcAge").val()); 
		  $last.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");
		  $last.find("td:eq(7)").find('input:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });


		  $last.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgEdPlgBankIntRate").val());
		  $last.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntpCent26");
		  $last.find("td:eq(8)").find('input:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });
		  
		  $last.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgEdPlgLoanIntRate").val());
		  $last.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntpCent26");
		  $last.find("td:eq(9)").find('input:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });


		  $last.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgEdPlgInfRate").val());
		  $last.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntpCent26");
		  $last.find("td:eq(10)").find('input:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });
		  
		  //		  console.log("inside loop begAge"+begAge)
		  $last.find("td:eq(11)").find('input:eq(0)').val(begAge);
		  $last.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntYrs");
		  $last.find("td:eq(11)").find('input:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });


//		  console.log("inside loop totpaid"+totpaid)
		  $last.find("td:eq(12)").find('input:eq(0)').val(totpaid);
		  $last.find("td:eq(12)").find('input:eq(0)').addClass("applyEvntUsd");
		  $last.find("td:eq(12)").find('input:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });

//		  console.log("inside loop tereduage"+tereduage)
		  $last.find("td:eq(13)").find('input:eq(0)').val(tereduage);
		  $last.find("td:eq(13)").find('input:eq(0)').addClass("applyEvntYrs");
		  $last.find("td:eq(13)").find('input:eq(0)').on("change",function(){
		  	dhtmlModChange($last); 
		  });

		  tbleCollapse();
		  applyEventHandlers();


		  $last.find("input,select").on("click",function(event){
 	  	event.stopPropagation();
		  });
		  $last.click(function() {
//		      var checkbox = $(this).find("td:eq(1)").find("input");
//		      if(checkbox.is(":checked")) {
//		          checkbox.prop("checked", false);
//		          $last.removeClass("selected");
//		      }else {
//		          checkbox.prop("checked", true);
//		          $last.addClass("selected");
//		      }
			  var checkbox = $(this).find("td:eq(1)").find("input");
			    var c1 =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID  
			    if(checkbox.is(":checked")) { 
			    	$('#liEducationtbl tbody tr').each(function(){
						var c2  =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID 
						if(c1 == c2){ 
							$(this).find("td:eq(1)").find("input").prop("checked", false);
					        $(this).removeClass("selected");
						} 
					});
			    	
			    }else { 
			        $('#liEducationtbl tbody tr').each(function(){
						var c2  =$(this).find("td:eq(0)").find('input:eq(2)').val();//ref ID  
						if(c1 == c2){
							$(this).find("td:eq(1)").find("input").prop("checked", true);
							 $(this).addClass("selected");	
						} 
					}); 
			    }
		  });



	
}



function backgroundSetEduPlg(){

	$("[name=selEdPlgChldName]").each(function(){
		var $row=$(this).closest("tr");
		
		var flg=true;
		 if($(this).is(":visible")){
		 
			 flg=true;
		 }else{
			 flg=false;
		 }

		if(!flg){
 
			$row.find("td:eq(1)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(2)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(3)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(4)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(5)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(6)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(7)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(8)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(9)").css("background","#fff").css("border","#fff");
			$row.find("td:eq(10)").css("background","#fff").css("border","#fff");
		}else{
			$row.css("background","#ddd").css("border","#ccc");
		}

		});
	
}

$("#selDlgEdPlgChldName").on("change",function(){
	teritaryAgeCal($(this),$("#txtFldDlgEdPlgTerEdcAge"),$("#txtFldDlgEdPlgInfRate"),$("#txtFldDlgEdPlgChldAge"));
});

function teritaryAgeCal(chldname,terAge,infRate,childAge){
	terAge.val("");
	infRate.val(""); 
	if(!isEmpty(chldname.val())){ 
		$("[name=txtFldChldName]").each(function(){
			var tblChldname=$(this).val(); 
			if(tblChldname == chldname.val()){ 
				var age=Number($(this).closest("tr").find("td:eq(4)").find("input:eq(0)").val());
				var yrstoter=Number($(this).closest("tr").find("td:eq(7)").find("input:eq(0)").val()); 
				terAge.val(age+yrstoter);
				childAge.val(age);
				
			} 
		}); 
	} 
	infRate.val($("#caEdnInfrate").val());
	defaultRetEd();
}

 

function tbleCollapse(){
	var oldref="";
	$("#liEducationtbl tbody").find("tr").each(function(c,r){
		var refId=$(this).find("td:first").find("input:eq(2)").val(); 
		var childname=$(this).find("td:eq(2)").find("select:eq(0)").val(); 
		if(!isEmpty(refId) && refId == oldref  ){
 
				$(this).find("td:eq(0) span:eq(0)").hide(); 
				$(this).find("td:eq(1) div:eq(0)").hide();
				$(this).find("td:eq(2) select:eq(0)").hide();
				$(this).find("td:eq(3) input:eq(0)").hide();
				$(this).find("td:eq(4) input:eq(0)").hide();
				$(this).find("td:eq(5) input:eq(0)").hide(); 
				$(this).find("td:eq(6) input:eq(0)").hide();
				$(this).find("td:eq(7) input:eq(0)").hide();
				$(this).find("td:eq(8) input:eq(0)").hide();
				$(this).find("td:eq(9) input:eq(0)").hide();
				$(this).find("td:eq(10) input:eq(0)").hide();  
			
		}
		oldref=refId;
		
	});
	
	
}

//#########################################Education planning- Payouts ################################################

/*Datatable Initialisation*/
//var liEduPayoutstbl = $('#liEduPayoutstbl').DataTable( {
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
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();


$("#edPaytARow").on("click",function(){
	$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
	/*if(!validateeduplgDetails())return;
	if(!validatePayoutsDetails())return;*/ 
   	getPayoutsRows(null,null); 
});

/*Populate Data */
function getPayoutsRows(dataset,indx){
	 
	   
	var cell0 = '<span></span>'+
				'<input type="hidden" name="payoutMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden"/>';
		
	var cell1 ='<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radPaytSelect"/><label>&nbsp;</label></div>'; 
	 
	var cell2 ='<input type="text" name="ChlBegAge" class="form-control editable numbers applyEvntYrs" onmouseover="fipaTooltip(this);" maxlength="20"/>';

	var cell3 ='<input type="text" name="TotProPaid" class="form-control editable numbers applyEvntUsd26" onmouseover="fipaTooltip(this);" maxlength="126"/>';

	var cell4 ='<input type="text" name="EduPlgChldTerAge" class="form-control editable numbers applyEvntUsd26" onmouseover="fipaTooltip(this);" readonly=true maxlength="126"/>';

	liEduPayoutstbl.row.add( [cell0,cell1,cell2,cell3,cell4] ).draw( false );

	var rowCount = $('#liEduPayoutstbl tbody tr:visible').length;
	rowCount =  (rowCount == 0) ? $('#liEduPayoutstbl tbody tr').length : rowCount;
	var $lastRow = $("#liEduPayoutstbl tbody tr:last");	

	$lastRow.find("td:first").find('span').text(rowCount); 

	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
	})

	$lastRow.find("td:eq(1)").find("input:first").attr('id',"radPayt"+$lastRow.index())
	.parent().find('label').attr('for',"radPayt"+$lastRow.index()); 

	$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
		calculateTerEduAgeReachedOut();
		removeTooltip($(this));
		$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
	});
	$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
		calculateTerEduAgeReachedOut();
		removeTooltip($(this));
		$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
	});
	$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
		removeTooltip($(this));
		$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
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


	if(dataset != null){
//		var dte=new Date();
//		  var editref=dte.getDate()+dte.getMonth()+dte.getYear()+dte.getMinutes()+dte.getSeconds()+dte.getMilliseconds();
//		
//		  dataset.attr("data-attr",editref);
//		  $lastRow.attr("data-attr",editref);
		  
		$lastRow.find("td:eq(0)").find('input:eq(0)').val(UPD_MODE);
		$lastRow.find("td:eq(0)").find('input:eq(1)').val(dataset.find("td:eq(0) input[name=txtFldEduPlgId]:eq("+indx+")").val());
		$lastRow.find("td:eq(2)").find('input:eq(0)').val(dataset.find("td:eq(11) div.divdatatemp:eq("+indx+") div:eq(0) input:eq(0)").val());
		$lastRow.find("td:eq(3)").find('input:eq(0)').val(dataset.find("td:eq(11) div.divdatatemp:eq("+indx+") div:eq(1) input:eq(0)").val());
		$lastRow.find("td:eq(4)").find('input:eq(0)').val(dataset.find("td:eq(11) div.divdatatemp:eq("+indx+") div:eq(2) input:eq(0)").val());
	}else{
		$lastRow.find("td:first").find("input:eq(1)").val(makeid(17));
	}
	
	
	totalPvTerEdAge();
	
	
}


function calculateTerEduAgeReachedOut(){
	//PV/FV of Total Pay Out Amount
	var terAge=roundNumber(Number($("#txtFldDlgEdPlgTerEdcAge").val()));
	
	var bkrate=isEmpty($("#txtFldDlgEdPlgBankIntRate").val())? (100/100) :  (Number($("#txtFldDlgEdPlgBankIntRate").val()))/100;
	var infrate=isEmpty($("#txtFldDlgEdPlgInfRate").val())? (100/100) :  (Number($("#txtFldDlgEdPlgInfRate").val()))/100;
	var totTeEdAge=0;
	
	$("#liEduPayoutstbl tbody tr").each(function(){ 
		var mode_r = $(this).find("td:first").find('input:eq(0)').val();
		 if(mode_r != "D"){
		var begAge=Number($(this).find("td:eq(2)").find('input:eq(0)').val());
		var anlpaidOut=Number($(this).find("td:eq(3)").find('input:eq(0)').val()); 
		if(!isEmpty(begAge)){ 
			if(begAge < terAge){ 
//				console.log("1("+terAge+" < "+begAge+") ==> "+bkrate+"/"+(terAge-begAge)+"/"+0+"/"+(1*(anlpaidOut))+"/"+0+"");
				totTeEdAge  =Number((FVCalculation(bkrate, (terAge-begAge),0, -1*(anlpaidOut), 1 )));  
			}else if(begAge == terAge){ 
//				console.log("2("+begAge+" == "+terAge+") ==> "+anlpaidOut+"");
				totTeEdAge  =Number(Math.round(anlpaidOut)); 
			}else if(begAge > terAge){ 
//				console.log("3("+begAge+" > "+terAge+") ==> "+infrate+"/"+(begAge-terAge)+"/"+0+"/"+(-1*anlpaidOut)+"/"+1+"");
				totTeEdAge = Number((PVCalculation((infrate),(begAge-terAge),0,-1*anlpaidOut,1)));
			}  
		} 
		
		$(this).find("td:eq(4)").find('input:eq(0)').val(Math.round(totTeEdAge));
		
	}
		
	});
	
	
	totalPvTerEdAge();
	
}

$("#selDlgEdPlgChldName,#txtFldDlgEdPlgBankIntRate," +
		"#txtFldDlgEdPlgInfRate,#txtFldDlgEdPlgTerEdcAge").on("change",function(){
			calculateTerEduAgeReachedOut();
});






function totalPvTerEdAge(){ 
	//PV of Fund Available at Tertiary Age($) total Footer calculation
	var sum=0;
	$("[name=EduPlgChldTerAge]").each(function(){
		var mode_r = $(this).closest("tr").find("td:first").find('input:eq(0)').val();
		if(mode_r != "D"){
			sum=sum+Number($(this).val());	
		}
		
	}); 
	$("#pvEdAgeCalTablefooter #txtFldTotalPVCal").val(roundNumber(sum));
}
 
$("#edPaytDRow").on("click",function(){ 
	$("#liEducationPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
	var rowCount = $('#liEduPayoutstbl tbody tr').length;	 
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$('#liEduPayoutstbl tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){ 
			var row = $(this).parents("tr");   
			 var eduIndex =row.index();
			 var refId=$(this).parents("tr").find("td:first").find("input:eq(1)").val(); 
			 $('#liEducationtbl tbody tr:visible').find("td:eq(0)").find("input[name=txtFldEduPlgId]").each(function(i){
					var curval = $(this);
					var curRow = curval.closest("tr");  
					  if(refId == curval.val()){
						var  mode = curval.closest("tr").find("td:eq(0)").find("input[name=txtFldEduPlgMode]:eq("+eduIndex+")").val();
						if(mode == UPD_MODE){
							curval.closest("tr").find("td:eq(0)").find("input[name=txtFldEduPlgMode]:eq("+eduIndex+")").val(DEL_MODE);
						}else{
						  curval.closest("tr").find("td:eq(0)").find("input[name=txtFldEduPlgMode]:eq("+eduIndex+")").val("");
						 }
					  curval.closest("tr").find("td:last").find("[class=divdatatemp]:eq("+eduIndex+")").hide();
			 	}
					 
				});
		}
	}); 
	reOrderVisibleRows('liEducationtbl');  
	datatableDeleteRow('liEduPayoutstbl',liEduPayoutstbl,'','','');   
}); 
 
function validatePayoutsDetails(){
	var $lastRow = $("#liEduPayoutstbl tbody tr:last");	
	var $RowCount = liEduPayoutstbl.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), BEG_CHLDAGE,''))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), TOT_PROPOLICY,''))) {valid=false;return false;};
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), CVRT_TEREDUAGE))) return; 
	 
	} */
  return valid; 
}



