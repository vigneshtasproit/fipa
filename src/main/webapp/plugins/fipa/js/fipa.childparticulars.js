/**
 * FnachildParticulars Script
 */
/*$("#ChildParCancelbtn").on("click",function(){
	    $("#txtFldDlgChldName,#txtFldDlgChldAge,#txtFldDlgChildDob,#txtFldDlgChldRel").removeClass("mandatoryFillFlds");
		$("#txtFldDlgChldName,#txtFldDlgChldAge,#txtFldDlgChildDob,#txtFldDlgChldRel").qtip('disable');
		$("#txtFldDlgChldName,#txtFldDlgChldAge,#txtFldDlgChildDob,#txtFldDlgChldRel").qtip('destroy',true);
		childRdlyflds(INS_MODE); 
		getChildRows(null); 
   	    childclearFlds();	
   	    $("#child_Dialog").modal('hide'); 
	
});*/

	
		
		
/*Add Row Click */
$("#AChldPt").on("click",function(){
	//if(!valchildTbl())return; 
	childclearFlds();
	$("#txtFldDlgFnaChldId").val(makeid(17));
	
	$("#child_Dialog #txtFldDlgChldAge").prop('readonly', true); 
	showFIPAModel('child_Dialog',"Children's Particulars");
		$('#child_Dialog').on('shown.bs.modal', function() {
			
		$("#child_Dialog").find("input[id=txtFldDlgChldName]").focus(); 
		$("#child_Dialog").find(".modal-footer").find("button:eq(0)").click(function (){
//			if(!$("#txtFldDlgChldName").val() || !$("#txtFldDlgChildDob").val() || !$("#txtFldDlgChldRel").val() ){
//				var htmlComp="<label class='control-label mandFldastrks pull-right text-right'>" + "Insert Details without Mandatory</label>";
//				
//				$("#confirmationalertmsgdiv #confalertimg").html(""); 
//				$("#confirmationalertmsgdiv #confalertmsg").html(htmlComp);
//				 $('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message"); 
//				$('#confirmationalertmsgdiv').modal({
//					  backdrop: 'static',
//					  keyboard: false,
//					  show:true,
//				});
//				var count=0;
//				$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {
//					$("#confirmationalertmsgdiv").find(".modal-footer").find("button:eq(0)").click(function (event){
//						alert("on click row count------"+count++);
//						$("#txtFldDlgChldName,#txtFldDlgChldAge,#txtFldDlgChildDob,#txtFldDlgChldRel").removeClass("mandatoryFillFlds");
//						$("#txtFldDlgChldName,#txtFldDlgChldAge,#txtFldDlgChildDob,#txtFldDlgChldRel").qtip('disable');
//						$("#txtFldDlgChldName,#txtFldDlgChldAge,#txtFldDlgChildDob,#txtFldDlgChldRel").qtip('destroy',true);
//						  childRdlyflds(INS_MODE); 
//			        	  getChildRows(null); 
//			        	  childclearFlds();	
//			        	$("#child_Dialog").modal('hide'); 
//					    $("#confirmationalertmsgdiv").modal('hide'); 
//					    event.stopImmediatePropagation();
//					   }); 
//					
//					});
//			}
//			else{
//				if(!childvalidateDets())return; 
//	        	  childRdlyflds(INS_MODE); 
//	        	  getChildRows(null); 
//	        	  childclearFlds();	
//	        	  $("#child_Dialog").modal('hide');
//			}
			 if(!childvalidateDets())return; 
        	  childRdlyflds(INS_MODE); 
        	  getChildRows(null); 
        	  childclearFlds();	
        	  $("#child_Dialog").modal('hide'); 
        	  
		   }); 
		});
	
}); 
 


function getChildRows(dataset){
	var cell0 = '<span></span>'+
				'<input type="hidden" name="txtFldChildMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldFnaChldId">';
	var cell1= '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radChildSelect"/><label>&nbsp;</label></div>';
	var cell2='<input type="text" name="txtFldChldName" onmouseover="fipaTooltip(this);" class="form-control editable" />';	 
	var cell3= '<input type="text" name="txtFldChldDob" onmouseover="fipaTooltip(this);" maxlength="10" class="form-control editable" />'; 
	var cell4= '<input type="text" name="txtFldChldAge" onmouseover="fipaTooltip(this);" readonly="true" class="form-control editable" />';	
	var cell5='<select name="txtFldChldRel" onmouseover="fipaTooltip(this);" class="form-control editable" > </select>';
	var cell6='<select name="txtFldChldGender" onmouseover="fipaTooltip(this);" disabled="true" class="form-control editable" ></select>';
	var cell7='<input type="text" name="txtFldChldYrs2ter" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntYrs"/>';
	var cell8='<input type="text" name="txtFldChldPerAnnEduCost" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd"/>';
	var cell9='<input type="text" name="txtFldChldYrsofEdu" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntYrs"/>';	
	var cell11='<input type="text" name="txtFldChldAvailEdnFund"  onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd"/>'+
	'<input type="hidden" name="txtFldChldCrtdBy"/><input type="hidden" name="txtFldChldCrtdDate"/>';
	var cell10='<input type="text" name="txtFldChldRemrks" onmouseover="fipaTooltip(this);" class="form-control editable"  />';

	chldpartTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell11,cell10] ).draw( false );

	var rowCount = $('#childParticularsTable tbody tr:visible').length;
	rowCount =  (rowCount == 0) ? $('#childParticularsTable tbody tr').length : rowCount;
	var $lastRow = $("#childParticularsTable tbody tr:last");	 
	$lastRow.find("td:first").find('span').text(rowCount);
	
	
	$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgFnaChldId").val());
		
	$lastRow.find("td:eq(1)").find("input:first").attr('id',"radChild"+$lastRow.index())
	.parent().find('label').attr('for',"radChild"+$lastRow.index());

	var existingValChldname=$lastRow.find("td:eq(2)").find('input:eq(0)').val();
	$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgChldName").val());
	$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
		var newvalchld=$(this).val();
		addChildNameDyn($lastRow.find("td:eq(2)").find('input:eq(0)'),'UPD'); 
		updateToAllDomTables(existingValChldname,newvalchld); 
	});
		
	 
	$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgChildDob").val());
	$lastRow.find("td:eq(3)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
		 checkDateFormat($(this));  
	});
	$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
		getdob(this,$lastRow.find("td:eq(4)").find('input:eq(0)'),true);
		ChgeChildyrToTeritary($lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'));
	});
	 
	
	$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgChldAge").val());
	$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntYrs");
	$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){ 
		ChgeChildyrToTeritary($lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'));
	});

	
	var chldrel = $("#txtFldDlgChldRel > option").clone();
	$lastRow.find("td:eq(5)").find('select:eq(0)').append(chldrel);
	$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#txtFldDlgChldRel").val());
	$lastRow.find("td:eq(5)").find('select:eq(0)').on("change",function(){ 
		ChgeChildGender(this,$lastRow.find("td:eq(6)").find('select:eq(0)'));
		ChgeChildyrToTeritary($lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'));
	});

	
	var chldgen = $("#txtFldDlgChldGender > option").clone();
	$lastRow.find("td:eq(6)").find('select:eq(0)').append(chldgen);
	$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgChldGender").val());

	$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgChldYrs2ter").val()); 
//	$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");-------add class directly???any issue in direct class
	
	$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgChldPerAnnEduCost").val());
//	$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd");-------add class directly????any issue in direct class
	
	$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgChldYrsofEdu").val());
//	$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");-------add class directly????any issue in direct class
	
	$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgChldAvailEdnFund").val());
//	$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntUsd");-------add class directly????any issue in direct class
	
	$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgChldRemrks").val());
	
	applyEventHandlers();

	$lastRow.find("input,select").on("click",function(event){
		event.stopPropagation();
	});
	
	
//	DHTML CRUD ICONS
	$lastRow.click(function(){
		toggleSingleRow($lastRow);
		crudicons(this,'childParticularsTable','SelchildParticulars','EChldPt','DChldPt');
				
	});
//	DHTML CRUD ICONS
	
	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
//		DHTML CRUD ICONS
		crudicons(this,'childParticularsTable','SelchildParticulars','EChldPt','DChldPt');
	});
	
	 
	
		if(dataset != null){
			rowCount = $('#childParticularsTable tbody tr').length;	
				 
			$lastRow.find("td:first").find('span').text(rowCount);
			
			if($("#hTxtFldFnaReviewFlag").val() == "U" || $("#hTxtFldFnaReviewFlag").val() == ""){
				$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			} 
			
			var infoDetsArr = new Array();
			
			for(var data in dataset){
				var col = dataset[data];
				  
				switch(data){
				
					case "fnaChildId": 
						$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
						break;
						
					case "childName":
						$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
						break;
						 
					case "childDob":
						$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
						break;
						
					case "childAge":
						$lastRow.find("td:eq(4)").find('input:eq(0)').val(col);
//						$lastRow.find("td:eq(4)").find('input:eq(0)').prop("readonly",true);
						break;

					case "childRelation":
						selectNullvalChk($lastRow.find("td:eq(5)"),col);   
						break;
						 
					case "childGender": 
						selectNullvalChk($lastRow.find("td:eq(6)"),col);   
//						$lastRow.find("td:eq(4)").find('input:eq(0)').prop("disabled",true); 
						break;
						
						
					case "childYrs2tertiary":
						$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
						break;
						

					case "childPerannEducost":
						$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 			
						break;
						
						
					case "childYrsofeducation":
						$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 			
						break;
						 

					case "childRemarks":
						$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 		
						break;
						 
					case "childAvailEdnfund":
						$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 	
						break;
						 
						
					case "childCrtdBy": 
						$lastRow.find("td:eq(10)").find('input:eq(1)').val(col);  
						infoDetsArr.push(col);
						break;		
						
					case "childCrtdDate": 
						$lastRow.find("td:eq(10)").find('input:eq(2)').val(col); 
						infoDetsArr.push(col);
						break;
						
					case "childModifiedBy":
						infoDetsArr.push(col);
						break;
						
					case "childModifiedDate":
						infoDetsArr.push(col);   
						 
						var modDate = isEmpty(col) ? $lastRow.find("td:eq(10)").find('input:eq(2)').val() : col; 
						$("input[name='updlstdatefrChld']").val("Last updated on "+modDate +"");
						$("input[name='updlstdatefrChld']").css("display","");
						break;				
				}	
				  
				
			}
		 
		}else{
//			DHTML CRUD ICONS
			crudicons(null,'childParticularsTable','SelchildParticulars','EChldPt','DChldPt');
		}	

		
		addChildNameDyn($lastRow.find("td:eq(2)").find('input:eq(0)').val(),'INS'); 
		
		/*Age Update*/
		getdob($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),false);
		ChgeChildyrToTeritary($lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'));
		/*EOL*/
		
		
		
}

//DHTML SELECT ALL
function SelAllSelchildParticulars(obj){
	
	if($(obj).is(":checked")){
		
		$('#childParticularsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#DChldPt").attr("disabled",false);
		$('#childParticularsTable tbody tr').addClass("selected");
		
		var $rowCount = $('#childParticularsTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			$("#EChldPt").attr("disabled",true);
			$("#DChldPt").attr("disabled",true);
		}else if($rowCount == 1){
			$("#EChldPt").attr("disabled",false);
			$("#DChldPt").attr("disabled",false);
		}else if($rowCount > 1){
			$("#EChldPt").attr("disabled",true);
			$("#DChldPt").attr("disabled",false);
		}
		
	}else{
		
		$('#childParticularsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#childParticularsTable tbody tr').removeClass("selected");
		
		$("#EChldPt").attr("disabled",true);
		$("#DChldPt").attr("disabled",true);
		
	}

}

/*Edit Row Click */
$("#EChldPt").on("click",function(){ 
	VChldPt(); 
});


/*View Row Click */
function VChldPt(){
	
	var isOneRowSelected=0;
	var $rowCount = $('#childParticularsTable tbody tr').length;	
//	var $lastRow = $("#childParticularsTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	/*$("#childParticularsTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});*/
	
	
	$("#childParticularsTable tbody").find('input[name="radChildSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
		
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	
	$("#childParticularsTable tbody").find('input[name="radChildSelect"]').each(function(){ //Checkbox selection 
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
 
				 
				 childRdlyflds($mode);
				
				 childfilldlgboxval($row); 
			
				 var existingValChldname=$curElm.parents("tr").find("td:eq(2)").find('input:eq(0)').val();
				 showFIPAModel('child_Dialog',"Children's Particulars"); 
				 $("#child_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					$('#child_Dialog').on('shown.bs.modal', function () {

						$("#child_Dialog").find("input[id=txtFldDlgChldName]").focus(); 
						$("#child_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							
							 if(!childvalidateDets())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			childfilldomtblval($RowId,$row); 
					     		}  
					     		
					     		var newvalchld=$row.find("td:eq(2)").find('select:eq(0)').val();    
					      		addChildNameDyn($curElm.parents("tr").find("td:eq(2)").find('input:eq(0)').val(),'UPD'); 
					      		updateToAllDomTables(existingValChldname,newvalchld);  
///					      		instantChildSave($row,UPD_MODE); //instant save added line
					      		childclearFlds();    
					      		$("#child_Dialog").modal('hide');  
					      		crudicons(null,'childParticularsTable','SelchildParticulars','EChldPt','DChldPt');
							
						});
						$("#child_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'childParticularsTable','SelchildParticulars','EChldPt','DChldPt');
							
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
$("#DChldPt").on("click",function(){  
	var rowCount = $('#childParticularsTable tbody tr').length;	 
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	}
	var isOneRowSelected=false;
	
	
	$('#childParticularsTable tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){ 
			isOneRowSelected=true;
		}
	});
 

	
	if(!isOneRowSelected){
		applyToastrAlert("No Rows Selected");
	} 
	
	if(isOneRowSelected) {
		
		
//		clearEmptyRows('fnaInvestmentTbl');//This cause 1st,3rd,5th,... odd row from Investment Table--??
//		clearEmptyRows('cashOfBanksTable'); //--do---
		 
		var  Invindex = $("#fnaInvestmentTbl tbody").find("tr").length;
		var cobindex = $("#cashOfBanksTable tbody").find("tr").length;
		
		 
		
		var deleteFlag = 0;
		var alertFlagInv = 0; 
		var alertFlagCob = 0;
		var alertFlagEduPlg=0;
		var alertFlagDlgEduPlg=0;
		var alertFlagLifeInsurance=0; 
		
		var childname = "" ,delval ="";
		
		$('#childParticularsTable tbody').find('input[type=checkbox]').each(function(){
			if($(this).is(":checked")){ 
				childname = $(this).parents("tr").find("td:eq(2)").find('input:eq(0)').val();
				
				delval=childname;
				deleteFlag=1;
			}
		});
		
		 
		if(deleteFlag){  
			 
			if(Invindex>0){
				$('#fnaInvestmentTbl tbody').find('tr').each(function(){
					var invname=$(this).find("td:eq(28)").find("select:eq(0)").val();
					if(childname == invname){ 					
						alertFlagInv=1;
					}
					
				}); 
			} 
			
			
			if(cobindex>0){
				$('#cashOfBanksTable tbody').find('tr').each(function(){
					var cobname=$(this).find("td:eq(16)").find("select:eq(0)").val();
					if(childname == cobname){ 
						alertFlagCob=1;
					} 
				});
			 } 
			
			
			var EduPlgChldNameVal = $("#liEducationPlg_Dialog #selDlgEdPlgChldName").val();
			if(!(EduPlgChldNameVal == "")){
				if(childname == EduPlgChldNameVal){
					alertFlagEduPlg=1;
				}
			}
			
			
			var DlgEduPlgChldNameVal = $("#dlgli_EducationPlg_tab #txtFldDlgChildName").val();
			if(!(DlgEduPlgChldNameVal == "")){
				if(childname == DlgEduPlgChldNameVal){
					alertFlagDlgEduPlg=1;
				}
			}
			
			var LifeInsChldNameVal = $("#lifeInsdetstab #lipAssured").val();
			if(!(LifeInsChldNameVal == "")){
				if(childname == LifeInsChldNameVal){
					alertFlagLifeInsurance=1;
				}
			}
		 
		
		 }	 
		
		if( alertFlagInv == 1 || alertFlagCob == 1  || alertFlagEduPlg == 1 || alertFlagDlgEduPlg==1 ||alertFlagLifeInsurance ==1){
		 	 applyErrorToastrAlert("Cant Able to Delete,This Child Name Existed in Sub Screens ");
   		  
		}else{  
			
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
					addChildNameDyn(delval,'DEL'); 
					$('#childParticularsTable tbody').find('input[type=checkbox]').each(function(){
						if($(this).is(":checked")){

							var row = $(this).parents("tr");                                    
							var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();

							if(mode == INS_MODE){
								 
//								chldpartTbl.row($(this).parent().parent()).remove().draw(); 
								
								$(this).closest("tr").hide();
								$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");

							}else if (mode == QRY_MODE){    
//								$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);
//								row.find("td").css({border:'1px solid red'});
								
								$(this).closest("tr").hide();
								$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
								
								
							}
							isOneRowSelected=true;
							$(this).attr("checked",false);
						}
					});

					reOrderVisibleRows('childParticularsTable'); 
						$('#confirmationalertmsgdiv').modal('hide');  
						
						
//						DHTML CRUD ICONS
						var rc = chldpartTbl.row().count();
						if(rc ==0){
							$("#SelchildParticulars").prop("checked",false);
							
							crudicons(null,'childParticularsTable','SelchildParticulars','EChldPt','DChldPt');
						}
//						DHTML CRUD ICONS
					  	
				  });
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
					  	$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				
			});
			
			
			$(this).attr("checked",false); 
		 }
		

		
	}
	reOrderVisibleRows('childParticularsTable'); 
	

	
	
});
 
  
	
function childclearFlds(){
  
	 
	$("#child_Dialog").find("input[type=text]").val("");
	$("#child_Dialog").find("textarea").val("");
	$("#child_Dialog").find("select").val(""); 
	
}

function childRdlyflds(mode){ 
	if(mode == QRY_MODE){
		$("#child_Dialog :input").prop('disabled', true); 
	}else
	if(mode == UPD_MODE || mode == INS_MODE){ 
		$("#child_Dialog :input").prop('disabled', false);
	}  

	$("#child_Dialog #txtFldDlgChldGender").prop('disabled', true); 
	$("#child_Dialog #txtFldDlgChldAge").prop('readonly', true); 
}

function childvalidateDets(){
	
/*	var ss = window.confirm("Do you want to ignore mandatory inputs?")
	if(ss)
		return true;
	else{
		if(!(validateFocusFlds('child_Dialog','txtFldDlgChldName',CHILD_NAME))) return;  
		if(!(validateFocusFlds('child_Dialog','txtFldDlgChildDob', CHILD_DOB))) return;
		if(!(validateFocusFlds('child_Dialog','txtFldDlgChldRel', CHILD_RELATION))) return;
		
		return true;
	}*/
	
	
	/*if(!(validateFocusFlds('child_Dialog','txtFldDlgChldName',CHILD_NAME))) return;  
	if(!(validateFocusFlds('child_Dialog','txtFldDlgChildDob', CHILD_DOB))) return;
	if(!(validateFocusFlds('child_Dialog','txtFldDlgChldRel', CHILD_RELATION))) return; 
	*/
	
	return true;
		
				
}



function valchildTbl(){  
	var $RowCount = chldpartTbl.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#childParticularsTable tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), CHILD_NAME,SCREEN_CHILD))){valid=false;return false;};  
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), CHILD_DOB,SCREEN_CHILD))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(5)").find('select:eq(0)'), CHILD_RELATION,SCREEN_CHILD))){valid=false;return false;};
		 
		});
	}*/  
	
	return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgChldName,#txtFldDlgChldAge,#txtFldDlgChildDob,#txtFldDlgChldRel").on("change",function(){
	if(!isEmpty($(this).val())){
		$(this).removeClass("mandatoryFillFlds");
		$(this).qtip('disable');
		$(this).qtip('destroy',true);
	}
});
 
	
 
 

function childfilldlgboxval($lastRow){ 
	
	 // $('#child_Dialog #txtFldDlgChildMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#child_Dialog #txtFldDlgFnaChldId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#child_Dialog #txtFldDlgChldName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val()); 
	  $('#child_Dialog #txtFldDlgChildDob').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());	
	  $('#child_Dialog #txtFldDlgChldAge').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());	  
	  $('#child_Dialog #txtFldDlgChldRel').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
	  $('#child_Dialog #txtFldDlgChldGender').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
	  $('#child_Dialog #txtFldDlgChldYrs2ter').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#child_Dialog #txtFldDlgChldPerAnnEduCost').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#child_Dialog #txtFldDlgChldYrsofEdu').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#child_Dialog #txtFldDlgChldRemrks').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#child_Dialog #txtFldDlgChldAvailEdnFund').val($lastRow.find("td:eq(10)").find('input:eq(0)').val()); 
      $('#child_Dialog #txtFldDlgChldCrtdBy').val($lastRow.find("td:eq(10)").find('input:eq(1)').val());
      $('#child_Dialog #txtFldDlgChldCrtdDate').val($lastRow.find("td:eq(10)").find('input:eq(2)').val());  

}


function childfilldomtblval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgChldName").val());   
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgChildDob").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgChldAge").val());
	$row.find("td:eq(5)").find('select:eq(0)').val($("#txtFldDlgChldRel").val()) ;
	$row.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgChldGender").val()); 
//	$row.find("td:eq(6)").find('select:eq(0)').prop("disabled",true);
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgChldYrs2ter").val());
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgChldPerAnnEduCost").val());
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgChldYrsofEdu").val());
	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgChldRemrks").val());
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgChldAvailEdnFund").val());  
 
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line
		
}

//instant save added line
//$("#child_Dialog").find("input,select,textarea").on("change",function(){
//	$("#child_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//});



/*Validations----------------------------------> */
$("#txtFldDlgChildDob").on("change",function(){
	getdob(this,$('#txtFldDlgChldAge'),true); 
	ChgeChildyrToTeritary($("#txtFldDlgChldRel"),$("#txtFldDlgChldAge"),$("#txtFldDlgChldYrs2ter"));
});

$("#txtFldDlgChldAge").on("change",function(){ 
	ChgeChildyrToTeritary($("#txtFldDlgChldRel"),$("#txtFldDlgChldAge"),$("#txtFldDlgChldYrs2ter"));
});

 
$("#txtFldDlgChldRel").on("change",function(){ 
	ChgeChildGender(this,$("#txtFldDlgChldGender"));
	ChgeChildyrToTeritary($("#txtFldDlgChldRel"),$("#txtFldDlgChldAge"),$("#txtFldDlgChldYrs2ter"));
});



function ChgeChildGender(elmid,ChangeFld){
	  
		
		if($(elmid).val() == 'Son'){
			ChangeFld.val("M");
		}else if($(elmid).val() == 'Daughter'){ 
			ChangeFld.val("F"); 
		}else{
			ChangeFld.val(""); 
		}
		ChangeFld.prop("disabled",true);
 
	
}


function ChgeChildyrToTeritary(elmid,ageFld,ChangeFld){
	  
	
	if(!isEmpty($(elmid).val())){ 
		var yrtoter=0;
		if(!isEmpty(ageFld.val())){ 
			var childAge = Number(ageFld.val());  
			switch($(elmid).val()){
			case 'Son':
				yrtoter = ( (21-childAge) <0 ) ? 0 : (21-childAge);
				ChangeFld.val(yrtoter);
				break;
				
			case 'Daughter':
				yrtoter = ( (18-childAge) <0 ) ? 0 : (18-childAge);
				ChangeFld.val(yrtoter);
				break;
				
			case '': 
				ChangeFld.val(yrtoter);
				break;
			} 
		}else{ 
			ChangeFld.val(yrtoter);
		}
		
		
	} else{ 
		ChangeFld.val(yrtoter);
	}
	
	
}



function addChildNameDyn(elmid,mode){  
 
 if(mode == 'INS'){
 if(!isEmpty(elmid)){   
	 clearExistChildName();     
 	} 
 }else if(mode == 'DEL'){
		if(!isEmpty(elmid)){

	 $("#InptInvstDets_Dialog #txtFldDlgInvstChildName option[value='"+elmid+"']").remove(); 
	 $("#listofLifeIns_Dialog #lipAssured option[value='"+elmid+"']").remove();
	 $("#Cob_Dialog #selDlgCOBChildName option[value='"+elmid+"']").remove();
	 $("#Investment_Dialog #selDlgInvNameOfChild option[value='"+elmid+"']").remove();
	 $("#selDlgCPFNameOfChild  option[value='"+elmid+"']").remove();
	 
	 //Life Ins Education Plg
	 $("#liEducationPlg_Dialog #selDlgEdPlgChldName option[value='"+elmid+"']").remove();
	 $("#dlgli_EducationPlg_tab #txtFldDlgChildName option[value='"+elmid+"']").remove();
	 
		}
		
	}else if(mode == 'UPD'){ 
		if(!isEmpty(elmid)){  
			
			clearExistChildName();  

		}
	}
 childexist();
}


function clearExistChildName(){
	 
	var selfname=$("#dfSelfName").val();
	var spousename=$("#dfSpsName").val();
	
	var invLen= $("#Investment_Dialog #selDlgInvNameOfChild option").length; 
	var cobLen= $("#Cob_Dialog #selDlgCOBChildName option").length;  
	var inptinsLen= $("#listofLifeIns_Dialog #lipAssured option").length;  
	var lifeInsChildNamelen= $("#liEducationPlg_Dialog #selDlgEdPlgChldName option").length;  
	var DlglifeInsChildNamelen=  $("#dlgli_EducationPlg_tab #txtFldDlgChildName  option").length;  
	var cpfChildLen = $("#selDlgCPFNameOfChild option").length; 
	 
	var rowCount = $("#childParticularsTable tbody").find("tr").length;
	
	 var tempName=$("#listofLifeIns_Dialog #lipAssured").val();
	 for(var i=1;i<=inptinsLen;i++){  
		 $("#listofLifeIns_Dialog #lipAssured option").remove(0);
	 }
	 for(var j=1;j<=invLen;j++){
		 $("#Investment_Dialog #selDlgInvNameOfChild option").remove(0);
	 } 
	 for(var k=1;k<=cobLen;k++){
		 $("#Cob_Dialog #selDlgCOBChildName option").remove(0);
	 }   
	 for(var k=1;k<=lifeInsChildNamelen;k++){
		 $("#liEducationPlg_Dialog #selDlgEdPlgChldName option").remove(0);
	 }   
	 
	 
	 for(var k=1;k<=DlglifeInsChildNamelen;k++){
		 $("#dlgli_EducationPlg_tab #txtFldDlgChildName option").remove(0);
	 }
	  
	 
	 for(var j=1;j<=cpfChildLen;j++){
		 $(" #selDlgCPFNameOfChild option").remove(0);
	 } 
	
	$('#listofLifeIns_Dialog #lipAssured').append( '<option value="">--SELECT--</option>' ); 
	if(!isEmpty(selfname)){$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+selfname+'">'+selfname+'</option>' );}
	if(!isEmpty(spousename)){$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+spousename+'">'+spousename+'</option>' );}

	
	$('#selDlgCPFNameOfChild').append( '<option value="">--SELECT--</option>' ); 
	$('#Investment_Dialog #selDlgInvNameOfChild').append( '<option value="">--SELECT--</option>' ); 
	$('#Cob_Dialog #selDlgCOBChildName').append( '<option value="">--SELECT--</option>' ); 
	$("#liEducationPlg_Dialog #selDlgEdPlgChldName").append( '<option value="">--SELECT--</option>' ); 
	$("#dlgli_EducationPlg_tab #txtFldDlgChildName").append( '<option value="">--SELECT--</option>' );
	 
	
	if(rowCount >0){
		
		$('#childParticularsTable tbody').find('tr').each(function(){
			var childname=$(this).find("td:eq(2)").find("input:eq(0)").val();
			$('#selDlgCPFNameOfChild').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#Investment_Dialog #selDlgInvNameOfChild').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#Cob_Dialog #selDlgCOBChildName').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+childname+'">'+childname+'</option>' ); 
			$('#listofLifeIns_Dialog #lipAssured').val(tempName);
			$("#liEducationPlg_Dialog #selDlgEdPlgChldName").append( '<option value="'+childname+'">'+childname+'</option>' );
			$("#dlgli_EducationPlg_tab #txtFldDlgChildName").append( '<option value="'+childname+'">'+childname+'</option>' ); 
		}); 
	}

}


function updateToAllDomTables(exstname,newchildname){ 
	UpdInvstmntChildName(exstname,newchildname); 
	UpdCastAtBankChildName(exstname,newchildname);  

} 


