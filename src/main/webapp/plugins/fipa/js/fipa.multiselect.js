/**
 * 
//**************************************Input Life Insurance*********************************************
 */

//var liRetirementPlgtbl = $('#liRetirementPlgtbl').DataTable( { 
//	destroy: true,       
//    ordering: false,
//    searching: false,     
//    scrollY:  "38vh",
//    scrollX: true,
//    scroller: false,
//    scrollCollapse:false,
//    paging:false, 
//    filter:false,   
//    columnDefs: [], 
//    dom: '<<"top" ip>flt>', 
//     fnDrawCallback: function(oSettings) {
//	        if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {  
//	        } 
//	    },
//
//	} );

	  
	
$(document).ready(function() { 
 
	$('#selamlLanguageUse').multiselect({ 
		 includeSelectAllOption: true, 
	        buttonWidth: '180px', 
	        onSelectAll: function() { 
	        	MultiSelectOption("selamlLanguageUse","amlLanguageUse","ALL",null); 
	        	 $("#txtFldAmlOtherLang").attr("disabled",false);
	        	
	        },
	        onDeselectAll: function() {
	        	MultiSelectOption("selamlLanguageUse","amlLanguageUse","NONE",null); 
	        	 $("#txtFldAmlOtherLang").attr("disabled",true);
           },
	        onChange: function(option, checked, select) { 
	            var SelLangTypes = [];  
	            var NtSelLangTypes = [];  
	            var DeSelLangTypes = []; 
	            
	            
	            if (checked == false) {  
	        		 $('#selamlLanguageUse option:selected').each(function() { 	
	        			 NtSelLangTypes.push($(this).val());    
	                  $.each( NtSelLangTypes, function( index, value ) { 
	                	  MultiSelectOption("selamlLanguageUse","amlLanguageUse","REMOVE",NtSelLangTypes); 
	                	 
	                	 }); 
	                  
	                 }); 
	        		 
	        		 if($.inArray("OTH",NtSelLangTypes)==-1)
	        			 $("#txtFldAmlOtherLang").attr("disabled",true);
	        		 else
	        			 $("#txtFldAmlOtherLang").attr("disabled",false);
	        	 }
	            
	            
	            
	            if(checked == true){
               $('#selamlLanguageUse option:selected').each(function() { 	
               	SelLangTypes.push($(this).val());    
                $.each( SelLangTypes, function( index, value ) { 
               	 MultiSelectOption("selamlLanguageUse","amlLanguageUse","SELECT",SelLangTypes); 
              	 }); 
                
               }); 
               
               	if($.inArray("OTH",SelLangTypes)==-1)
      			 $("#txtFldAmlOtherLang").attr("disabled",true);
      		 	else
      			 $("#txtFldAmlOtherLang").attr("disabled",false);
               	
	            }else{  
	            	$('#selamlLanguageUse option:not(:selected)').each(function() { 	
	            		DeSelLangTypes.push($(this).val());   
	                    $.each( DeSelLangTypes, function( index, value ) {   
	                   	  
	                  	 }); 
	            	});
	            }
	            
	            
	        } ,
	        
	    });
	 
	
	$('#sellipCoveragetype').multiselect({ 
		 includeSelectAllOption: true, 
	        buttonWidth: '180px',  
	        onSelectAll: function() {
	        	 var SelCovValOfIns = [];
	        	
	        	MultiSelectOption("sellipCoveragetype","lipCoveragetype","ALL",null);
//	        	typeOfCoverage("All","block");/*commented*/
	        	
	        	 $('#sellipCoveragetype option:selected').each(function() { 
	        		 SelCovValOfIns.push($(this).val());  
               });
	        	 
	        	 
//	        	 if($.inArray("RP",SelCovValOfIns) != -1){
//		            	
//	            	 $('#sellipCoveragetype').multiselect('deselect','RP');   
//	            	 $('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display","none");
//	            	  
//	            	 if (!valilifeinsurance())return; 
//	            	 	mandatoryFldForRetirement($(this),null,'LIFE'); 
//				  	  	$('#sellipCoveragetype').multiselect('select','RP'); 
//                }
	        	 
	        	
	        },
	        onDeselectAll: function() {
	        	 var SelCovValOfIns=[];
	        	MultiSelectOption("sellipCoveragetype","lipCoveragetype","NONE",null);
//	        	typeOfCoverage("All","none");/*commented*/
	        	
	        	 $('#sellipCoveragetype option:selected').each(function() {     
	        		 SelCovValOfIns.push($(this).val());  
	                }); 
	        	 
	        	  
            	 
            },
	        onChange: function(option, checked, select) { 
	            var SelCoverageTypes = [];  
	            var NtSelCoverageTypes = [];  
	            var DeSelCoverageTypes = []; 
	            var SelCovValOfIns=[];
	            
	            if (checked == false) {  
	        		 $('#sellipCoveragetype option:selected').each(function() { 	
	        			 NtSelCoverageTypes.push($(this).val());    
	                  $.each( NtSelCoverageTypes, function( index, value ) { 
	                	  MultiSelectOption("sellipCoveragetype","lipCoveragetype","REMOVE",NtSelCoverageTypes); 
	                	 
	                	 }); 
	                  
	                 }); 
	        	 }
	            
	            
	            
	            if(checked == true){
                $('#sellipCoveragetype option:selected').each(function() { 	
                	SelCoverageTypes.push($(this).val());    
                 $.each( SelCoverageTypes, function( index, value ) { 
                	 MultiSelectOption("sellipCoveragetype","lipCoveragetype","SELECT",SelCoverageTypes);
//                	 typeOfCoverage(value,"block");/* commented*/
                	 
                	 
               	 }); 
                 
                }); 
	            }else{  
	            	$('#sellipCoveragetype option:not(:selected)').each(function() { 	
	            		DeSelCoverageTypes.push($(this).val());   
	                    $.each( DeSelCoverageTypes, function( index, value ) {   
//	                   	 	typeOfCoverage(value,"none");/* commented*/
	                  	 }); 
	            	});
	            }
	            
	            
	            $('#sellipCoveragetype option:selected').each(function() {     
	            	SelCovValOfIns.push($(this).val());  
                }); 
	               
	            
//	            if($.inArray("RP",SelCovValOfIns) != -1){ 
//	            	 $('#sellipCoveragetype').multiselect('deselect','RP');  
//	            	  
//	            	 
//	            	 $('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display","none");   
// 
//	            	 if (!valilifeinsurance())return; 
//	            	 mandatoryFldForRetirement($(this),null,'LIFE');
//	            	   
//		  	  	$('#sellipCoveragetype').multiselect('select','RP');
//		  	  	 
//
//                }
	            
	        } 
	        
	    });

	$('#selCoveragesB00').multiselect({ 
		 	includeSelectAllOption: true, 
	        buttonWidth: '120px',  
	        maxHeight: "100%",
	        /*dropUp : true,*/
	        onSelectAll: function() {
	        	
	        	var SelCovValOfIns = [];
	        	var elmid =$(this).attr("id");
	        	var hid=$(this).closest("div").find("input"); 
	        	MultiselectCoverage(elmid,hid,"ALL",null);
	        	typeOfCoveragePro("All","block");/*commented Enable all*/

	        	 $("#"+elmid+'option:selected').each(function() { 
	        		 SelCovValOfIns.push($(this).val());  
	        	 });
	        	 
	        	 if($.inArray("RP",SelCovValOfIns) != -1){
		            	
	            	 $('#selCoveragesB00').multiselect('deselect','RP');    
//	            	 	mandatoryFldForRetirement($(this),null,'LIFE'); 
				  	  	$('#selCoveragesB00').multiselect('select','RP');  
				  	  loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
	        	 }	        	
	        },
	        onDeselectAll: function() {
	        		var SelCovValOfIns=[];
	        		var elmid =$(this).attr("id");
		        	var hid=$(this).closest("div").find("input"); 
		        	MultiselectCoverage($(this),hid,"NONE",null);
		        	typeOfCoveragePro("All","none");/*commented disable all*/
	        	
		        	$("#"+elmid+' option:selected').each(function() {     
		        		SelCovValOfIns.push($(this).val());  
	                });  
            },
            
	        onChange: function(option, checked, select) { 
	        	  
	        } 
	        
	    });

	/*Plan details - coverage*/
	
	$('#selDlgliplnCoverages').multiselect({ 
		 includeSelectAllOption: true, 
	        buttonWidth: '180px',
	        maxHeight: "100%",
	        onSelectAll: function() {
	        	 var SelCovValOfIns = [];
//	        	 typeOfCoverage("All","none");
	        	MultiSelectOption("selDlgliplnCoverages","hidDlgCoveragetype","ALL",null);
	        	typeOfCoverage("All","block");
	        	
	        	 $('#selDlgliplnCoverages option:selected').each(function() { 
	        		 SelCovValOfIns.push($(this).val());  
              });
	        	 

	        	 if($.inArray("RP",SelCovValOfIns) != -1){
		            	
	            	 $('#selDlgliplnCoverages').multiselect('deselect','RP');   
	            	 $('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display","none");
	            	  
//	            	 if (!valilifeinsurance())return; 
	            	 	 
	            	 	mandatoryFldForRetirement($(this),null,'LIFE'); 
				  	  	$('#selDlgliplnCoverages').multiselect('select','RP'); 
//				  	  enableRetCashValOnRet($("#retMultionret"),$("#retCashvalonret"),true);
				  	  loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
                }
	        	 
	        	 $("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
	        	
	        },
	        onDeselectAll: function() {
	        	 var SelCovValOfIns=[];
	        	MultiSelectOption("selDlgliplnCoverages","hidDlgCoveragetype","NONE",null);
	        	typeOfCoverage("All","none");
	        	
	        	 $('#selDlgliplnCoverages option:selected').each(function() {     
	        		 SelCovValOfIns.push($(this).val());  
	                }); 
	        	 $("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//	        	 reloadPlanDetails(SelCovValOfIns);
           	 
           },
	        onChange: function(option, checked, select) { 
	            var SelCoverageTypes = [];  
	            var NtSelCoverageTypes = [];  
	            var DeSelCoverageTypes = []; 
	            var SelCovValOfIns=[];
//	            typeOfCoverage("All","none");
	            if (checked == false) {  
	        		 $('#selDlgliplnCoverages option:selected').each(function() { 	
	        			 NtSelCoverageTypes.push($(this).val());    
	                  $.each( NtSelCoverageTypes, function( index, value ) { 
	                	  MultiSelectOption("selDlgliplnCoverages","hidDlgCoveragetype","REMOVE",NtSelCoverageTypes); 
	                	 
	                	 }); 
	                  
	                 }); 
	        	 }
	            
	            $("#liPlandets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
	            
	            if(checked == true){
               $('#selDlgliplnCoverages option:selected').each(function() { 	
               	SelCoverageTypes.push($(this).val());    
                $.each( SelCoverageTypes, function( index, value ) { 
               	 MultiSelectOption("selDlgliplnCoverages","hidDlgCoveragetype","SELECT",SelCoverageTypes);
               	 typeOfCoverage(value,"block"); 
               	 
               	 
              	 }); 
                
               }); 
	            }else{  
	            	$('#selDlgliplnCoverages option:not(:selected)').each(function() { 	
	            		DeSelCoverageTypes.push($(this).val());   
	                    $.each( DeSelCoverageTypes, function( index, value ) {   
	                   	 	typeOfCoverage(value,"none"); 
	                  	 }); 
	            	});
	            }
	            
	            
	            $('#selDlgliplnCoverages option:selected').each(function() {     
	            	SelCovValOfIns.push($(this).val());  
               });

	            
				    if($.inArray("RP",SelCovValOfIns) != -1){ 
			           	 $('#selDlgliplnCoverages').multiselect('deselect','RP');  
			           	  
			           	 
			           	 $('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display","none");   
			
//			           	 if (!valilifeinsurance())return; 
			           
			           	 mandatoryFldForRetirement($(this),null,'LIFE');
			           	   
				  	  	$('#selDlgliplnCoverages').multiselect('select','RP');
//				  	  	enableRetCashValOnRet($("#retMultionret"),$("#retCashvalonret"),true);
				  	  	
				  	  loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
			
			           }
	        } 
	        
	    });
	 
	
//	function reloadPlanDetails(SelCovValOfIns){
////		CI,DS,DB,HP,EP,RP
//		
//		 if($.inArray("CI",SelCovValOfIns) != -1){  
//			 
//		 }else  if($.inArray("DS",SelCovValOfIns) != -1){
//			 
//		 }else  if($.inArray("DB",SelCovValOfIns) != -1){
//			 
//		 }else  if($.inArray("HP",SelCovValOfIns) != -1){
//			 
//		 }else  if($.inArray("EP",SelCovValOfIns) != -1){
//			 
//		 }else  if($.inArray("RP",SelCovValOfIns) != -1){
//			 
//		 }
//	}
	/**/
	 $('#selmulCriticalLevelofDD').multiselect({ 
        includeSelectAllOption: true, 
        buttonWidth: '180px', 
        maxHeight: "100%",
        onSelectAll: function() {
        	MultiSelectOption("selmulCriticalLevelofDD","selCriticalLevelofDD","ALL",null);
        	CriticalLevelofDD("All","block");
        },
        onDeselectAll: function() {
        	MultiSelectOption("selmulCriticalLevelofDD","selCriticalLevelofDD","NONE",null);
        	CriticalLevelofDD("All","none");
        },
        onChange: function(option, checked, select) { 
        	 var SelCriticalDD = [];   
	         var NtSelCriticalDD=[];   
	         var DeSelCriticalDD = []; 
	            
	            if (checked == false) {  
	        		 $('#selmulCriticalLevelofDD option:selected').each(function() { 	
	        			 NtSelCriticalDD.push($(this).val());    
	                  $.each( NtSelCriticalDD, function( index, value ) { 
	                	  MultiSelectOption("selmulCriticalLevelofDD","selCriticalLevelofDD","REMOVE",NtSelCriticalDD);
	                	 }); 
	                  
	                 }); 
	        	 }
	            
	            
	            if(checked == true){
             $('#selmulCriticalLevelofDD option:selected').each(function() { 	
            	 SelCriticalDD.push($(this).val());  
             }); 
            	 $.each( SelCriticalDD, function( index, value ) {  
            	  MultiSelectOption("selmulCriticalLevelofDD","selCriticalLevelofDD","SELECT",SelCriticalDD);
            	  CriticalLevelofDD(value,"block",'NO',SelCriticalDD.length); 
            	 }); 
             
	       } else{ 
           	$('#selmulCriticalLevelofDD option:not(:selected)').each(function() { 	
           		DeSelCriticalDD.push($(this).val());   
           	}); 	
                $.each( DeSelCriticalDD, function( index, value ) {  
                	if(DeSelCriticalDD.length>1)
                	{	
                	CriticalLevelofDD(value,"none",'NO',DeSelCriticalDD.length); 
                	}else{
                	CriticalLevelofDD(value,"none",'YES',DeSelCriticalDD.length);	
                	}
                });
        }
	            
        },
    });
	  
	  
//	 
//		$('.multiselect-container li a label').removeClass("checkbox");
	 $('#sellipIsnurObject').multiselect({ 
         includeSelectAllOption: true, 
            buttonWidth: '180px', 
            maxHeight: "100%",
            nonSelectedText: 'Nil',
            onSelectAll: function() {
                var SelValOfIns = [];
                
                MultiSelectOption("sellipIsnurObject","lipIsnurObject","ALL",null);
                ObjOfInsurance("All","block");
                
                $('#sellipIsnurObject option:selected').each(function() { 
                	  SelValOfIns.push($(this).val());  
                }); 
                 
            },
            onDeselectAll: function() {
                MultiSelectOption("sellipIsnurObject","lipIsnurObject","NONE",null);
                ObjOfInsurance("All","none");
                
                $('#sellipIsnurObject option:selected').each(function() {     
                    SelValOfIns.push($(this).val());  
                }); 
                
                
            },
            onChange: function(option, checked, select) { 
                var SelObjOfIns = [];  
                var NtSelObjOfIns = [];  
                var DeSelObjOfIns = []; 
                var SelValOfIns = [];
                
                if (checked == false) {  
                     $('#sellipIsnurObject option:selected').each(function() {     
                         NtSelObjOfIns.push($(this).val());    
                      $.each( NtSelObjOfIns, function( index, value ) { 
                          MultiSelectOption("sellipIsnurObject","lipIsnurObject","REMOVE",NtSelObjOfIns);
                      }); 
                     }); 
                 }
                
                
                
                if(checked == true){
                    $('#sellipIsnurObject option:selected').each(function() {     
                        SelObjOfIns.push($(this).val());  
                        $.each( SelObjOfIns, function( index, value ) {  
                            MultiSelectOption("sellipIsnurObject","lipIsnurObject","SELECT",SelObjOfIns);
                            ObjOfInsurance(value,"block"); 
                        });
             
                    }); 
                }else{ 
                    $('#sellipIsnurObject option:not(:selected)').each(function() {     
                        DeSelObjOfIns.push($(this).val());  
                        $.each( DeSelObjOfIns, function( index, value ) {  
                            ObjOfInsurance(value,"none"); 
                           }); 
                    });
                } 
                
                $('#sellipIsnurObject option:selected').each(function() {     
                    SelValOfIns.push($(this).val());  
                }); 
                
                
            } 
            
        });
    
        $('.multiselect-container li a label').removeClass("checkbox"); 

        /*Mandatory Fields Tooltip*/ 
        $("#lipOwner,#lipPlanname,#lipAssured,#lipCompany,#lipPolicyno,#policyStatus,#lipIncepdate,#lipExpdate,#lipSa").on("change",function(){
        	if(!isEmpty($(this).val())){
        	$(this).removeClass("mandatoryFillFlds");
        	$(this).qtip('disable');
        	$(this).qtip('destroy',true);
        	}
        });
          
});



function typeOfCoverage(ElmVals,opt){ 

	
	if(ElmVals=="DB"){
 		$('#lifeInsNavTabsDets a[href="#li_DeathBenef_tab"]').css("display",opt); 
 	} 
	if(ElmVals=="DS"){
 		$('#lifeInsNavTabsDets a[href="#li_Disability_tab"]').css("display",opt);
 	} 
	if(ElmVals=="CI"){
 		$('#lifeInsNavTabsDets a[href="#li_CriticalIllness_tab"]').css("display",opt);
 	} 
	if(ElmVals=="HP"){
 		$('#lifeInsNavTabsDets a[href="#li_Hospitalisation_tab"]').css("display",opt);
 		$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').css("display",opt);
 	}
	if(ElmVals=="RP"){  
		$('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display",opt);  
		liRetirementPlgtbl.columns.adjust().draw(false); 
		setMainRPtoLifeRP();

 	} 
	if(ElmVals=="EP"){  
 		$('#lifeInsNavTabsDets a[href="#li_EducationPlg_tab"]').css("display",opt);
 	} 
	if(ElmVals=="All"){
		$('#lifeInsNavTabsDets a[href="#li_DeathBenef_tab"]').css("display",opt);
		$('#lifeInsNavTabsDets a[href="#li_Disability_tab"]').css("display",opt);
		$('#lifeInsNavTabsDets a[href="#li_CriticalIllness_tab"]').css("display",opt);
		$('#lifeInsNavTabsDets a[href="#li_Hospitalisation_tab"]').css("display",opt);
		$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').css("display",opt);
		$('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display",opt); 
 		$('#lifeInsNavTabsDets a[href="#li_EducationPlg_tab"]').css("display",opt);
 		setMainRPtoLifeRP();
	}  
	
}



function typeOfCoveragePro(ElmVals,opt){ 
	//RP~Retirement^EP~Education^TPD~TPD^DB~Death Benefit^LTDS~LT Disability^OCDS~Occ Disability^CIE~Critical Illness Early^CIA~Critical Illness Advance^HP~Hospitalisation^PA~PA
//	$('#mulTPD,#maaTPD,#expTPD,#disTPD,#disPayoutTPD,#maxPayoutTPD').hide();
//	$('#mulBootDeath,#maaDeath,#expDeath,#yrPayDeath').hide();
//	$('#disBenefit,#disPayout,#maxPayout').hide();
//	$('#mulCriIllErly,#maaCriIllErly,#expCriIllErly,#yrPayCriIllErly').hide();
//	$('#mulCriIllAdv,#maaCriIllAdv,#expCriIllAdv,#disCriIllAdv,#disPayoutCriIllAdv,#maxPayoutCriIllAdv').hide();
//	$('#desHSBenefit,#insHSBenefit,#dedHSBenefit,#typHSBenefit,#yrPayHSP,#expHSP,#maaHSP,#mulHSP').hide();
//	$('#mulPA,#maaPA,#expPA,#yrPayPA').hide();
	
	if(ElmVals=="All"){
		if(opt == 'block'){
		$('#divmulTPD,#divmaaTPD,#divexpTPD,#divdisTPD,#divdisPayoutTPD,#divmaxPayoutTPD').show();
		$('#divmulBootDeath,#divmaaDeath,#divexpDeath,#divyrPayDeath').show();
		$('#divdisBenefit,#divdisPayout,#divmaxPayout').show();
		$('#divmulCriIllErly,#divmaaCriIllErly,#divexpCriIllErly,#divyrPayCriIllErly').show();
		$('#divmulCriIllAdv,#divmaaCriIllAdv,#divexpCriIllAdv,#divdisCriIllAdv,#divdisPayoutCriIllAdv,#divmaxPayoutCriIllAdv').show();
		$('#divdesHSBenefit,#divinsHSBenefit,#divdedHSBenefit,#divtypHSBenefit,#divyrPayHSP,#divexpHSP,#divmaaHSP,#divmulHSP').show();
		$('#divmulPA,#divmaaPA,#divexpPA,#divyrPayPA').show();
		$('#divremarks1,#divremarks2,#divremarks3,#divremarks4,#divremarks5,#divremarks6,#divremarks7').show();
		$('#btnForRetirementClone').show();
		$('#btnForEducationClone').show();
		}
	}
	if(ElmVals=="RP"){
		if(opt == 'none'){
			$('#btnForRetirementClone').hide();
		}
		else{
			$('#btnForRetirementClone').show();
		}
 	} 
	if(ElmVals=="EP"){
		if(opt == 'none'){
			$('#btnForEducationClone').hide();
		}
		else{
			$('#btnForEducationClone').show();
		}
 	} 
	if(ElmVals=="TPD"){
		if(opt == 'none'){
			$('#divmulTPD,#divmaaTPD,#divexpTPD,#divdisTPD,#divdisPayoutTPD,#divmaxPayoutTPD,#divremarks3').hide();
		}
		else{
			$('#divmulTPD,#divmaaTPD,#divexpTPD,#divdisTPD,#divdisPayoutTPD,#divmaxPayoutTPD,#divremarks3').show();
		}
		
 	} 
	if(ElmVals=="DB"){
		if(opt == 'none'){
			$('#divmulBootDeath,#divmaaDeath,#divexpDeath,#divyrPayDeath,#divremarks1').hide();
		}
		else{
			$('#divmulBootDeath,#divmaaDeath,#divexpDeath,#divyrPayDeath,#divremarks1').show();
		}
		
		
 	}
	
	if(ElmVals=="DIS"){ 
		if(opt == 'none'){
			$('#divdisBenefit,#divdisPayout,#divmaxPayout,#divremarks2').hide();
		}
		else{
			$('#divdisBenefit,#divdisPayout,#divmaxPayout,#divremarks2').show();
		}
		
 	} 
	
	if(ElmVals=="CIE"){
		if(opt == 'none'){
			$('#divmulCriIllErly,#divmaaCriIllErly,#divexpCriIllErly,#divyrPayCriIllErly,#divremarks5').hide();
		}
		else{
			$('#divmulCriIllErly,#divmaaCriIllErly,#divexpCriIllErly,#divyrPayCriIllErly,#divremarks5').show();
		}
		
 	} 
	if(ElmVals=="CIA"){
		if(opt == 'none'){
			$('#divmulCriIllAdv,#divmaaCriIllAdv,#divexpCriIllAdv,#divdisCriIllAdv,#divdisPayoutCriIllAdv,#divmaxPayoutCriIllAdv,#divremarks4').hide();
		}
		else{
			$('#divmulCriIllAdv,#divmaaCriIllAdv,#divexpCriIllAdv,#divdisCriIllAdv,#divdisPayoutCriIllAdv,#divmaxPayoutCriIllAdv,#divremarks4').show();
		}
		
 	} 
	if(ElmVals=="HP"){
		if(opt == 'none'){
			$('#divdesHSBenefit,#divinsHSBenefit,#divdedHSBenefit,#divtypHSBenefit,#divyrPayHSP,#divexpHSP,#divmaaHSP,#divmulHSP,#divremarks7').hide();
		}
		else{
			$('#divdesHSBenefit,#divinsHSBenefit,#divdedHSBenefit,#divtypHSBenefit,#divyrPayHSP,#divexpHSP,#divmaaHSP,#divmulHSP,#divremarks7').show();
		}
		
 	}
	if(ElmVals=="PA"){  
		if(opt == 'none'){
			$('#divmulPA,#divmaaPA,#divexpPA,#divyrPayPA,#divremarks6').hide();
		}
		else{
			$('#divmulPA,#divmaaPA,#divexpPA,#divyrPayPA,#divremarks6').show();
		}
		
 	}
	
}





function CriticalLevelofDD(ElmVals,opt,chk,arrLen){
	if(ElmVals=="ES"){
		if(chk=='NO'){
		$('#LIDDCovergePanel').css("display",opt); 
		}
		$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').css("display",opt);  
			$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').parent().removeClass('active');
			$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').parent().removeClass('active');
			$('#li_EarlyStageCI_tab').removeClass('active');
			$('#li_AdvStageCI_tab').removeClass('active');
			$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').click(); 
	} 
	if(ElmVals=="AS"){
		if(chk=='NO'){
		$('#LIDDCovergePanel').css("display",opt); 
		}
		$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').css("display",opt); 
			$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').parent().removeClass('active');
			$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').parent().removeClass('active');
			$('#li_AdvStageCI_tab').removeClass('active');
			$('#li_EarlyStageCI_tab').removeClass('active');
			$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').click(); 
	} 
	if(ElmVals=="All"){
		$('#LIDDCovergePanel').css("display",opt); 
 		$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').css("display",opt); 
 		$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').css("display",opt); 
	}
	if(arrLen==1 && ElmVals=='ES' && opt=='none'){
		$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').parent().removeClass('active');
		$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').parent().removeClass('active');
		$('#li_AdvStageCI_tab').removeClass('active');
		$('#li_EarlyStageCI_tab').removeClass('active');
		$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').click();
	}
	if(arrLen==1 && ElmVals=='AS' && opt=='none'){
		$('#LIDDCovergeNavTabDets a[href="#li_AdvStageCI_tab"]').parent().removeClass('active');
		$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').parent().removeClass('active');
		$('#li_AdvStageCI_tab').removeClass('active');
		$('#li_EarlyStageCI_tab').removeClass('active'); 
		$('#LIDDCovergeNavTabDets a[href="#li_EarlyStageCI_tab"]').click();
	}
}

function ObjOfInsurance(ElmVals,opt){
	if(ElmVals=="RP"){  
//		$('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display",opt); 
 	} 
	if(ElmVals=="EP"){  
// 		$('#lifeInsNavTabsDets a[href="#li_EducationPlg_tab"]').css("display",opt);
 	} 
	if(ElmVals=="All"){ 
// 		$('#lifeInsNavTabsDets a[href="#li_RetirementPlg_tab"]').css("display",opt); 
// 		$('#lifeInsNavTabsDets a[href="#li_EducationPlg_tab"]').css("display",opt);
	}
}

function DisabilitySubDets (elmid){
	var disabilityInc = $("#"+elmid).val(); 
	 
	if(!isEmpty(elmid)){  
		if(disabilityInc == 'TPD'){
			 $('#liTypesOfCovBenefdiv').css("display","block");
		}else if(disabilityInc == 'Disability Income'){
			 $('#liTypesOfCovBenefdiv').css("display","block");
		}else if(disabilityInc == 'Long term disability'){
			 $('#liTypesOfCovBenefdiv').css("display","block");
		}else if(disabilityInc == ''){ 
			 $('#liTypesOfCovBenefdiv').css("display","none");
		} 
		
		  
	} else{
		 $('#liTypesOfCovBenefdiv').css("display","none");
	}
		  
}

function expandCoverOpts(elmId,flg){
	var selected=[];
	if(!isEmpty(elmId)){
	if(flg){ 
		 var multiSelSplit = elmId.split(',');
		 $.each(multiSelSplit, function( index, value ) {
			 var expTxt="";  
			 if(value == "PA") { 
				 expTxt="PA";  
			 }else if(value == "DIS") {
				 expTxt="Disability"; 
			 }else if(value == "HP") {
				 expTxt="Hospitalisation"; 
			 }else if(value == "TPD") {
				 expTxt="TPD"; 
			 }else if(value == "CIA") {
				 expTxt="CI-Advanced"; 
			 }else if(value == "EP") {
				 expTxt="Education_Planning"; 
			 } else if(value == "RP") {
				 expTxt="Retirement_Planning"; 
			 } else if(value == "DB") {
				 expTxt="Death_Benefit"; 
			 } else if(value == "CIE") {
				 expTxt="CI-Early"; 
			 }    
			 selected.push(expTxt); 
			 
			
			 
			 var curIndex = $("[value="+expTxt+"]").closest("th").index();   
				  $("[value='"+expTxt+"']").closest("th").addClass("selectedd");  
			$("#plancoveragetbl tbody tr").each(function(i){  
				$("#plancoveragetbl tbody").find("tr:eq("+i+")").find("td:eq("+curIndex+")").addClass("selectedd"); 
			});
			
		 }); 
	}else{
	
   elmId.find(" option:selected").each(function() {
	    var $this = $(this);
	    if ($this.length) {
	      var selText = $this.text();
			selected.push(selText);
		  }
	  });
	}
}
	
	$("#plancoveragetbl tbody td").each(function(i)
			{ 	 
				 if($(this).hasClass("selectedd")){
					 $(this).show();
				 }else{
					 if(!$(this).hasClass("coverageTh")){
						 $(this).hide();
					 }
				 
			}

			});
	
	
	$("#plancoveragetbl thead th").each(function(i)
			{ 	 
				 if($(this).hasClass("selectedd")){
					 $(this).show();
				 }else{
					 if(!$(this).hasClass("coverageTh")){
						 $(this).hide();
					 }
				 
			}

			});
	
	  return selected;
}

function MultiSelectOption(multiSelId,elmId,options,arrayList){
	
	if(multiSelId == "selamlLanguageUse"){
		if(options=="ALL"){ 
			$('#'+elmId).val("ENG,MAN,MAL,TAM,OTH"); 
			}else if(options=="NONE"){
			$('#'+elmId).val(""); 
			}else if(options=="SELECT"){  
			$('#'+elmId).val(arrayList);
			}else if(options=="REMOVE"){ 
			$('#'+elmId).val(arrayList);
			}
	}
	
	
	if(multiSelId == "sellipCoveragetype"){ 
		if(options=="ALL"){ 
		$('#'+elmId).val("CI,DS,DB,HP,EP,RP"); 
		}else if(options=="NONE"){
		$('#'+elmId).val(""); 
		}else if(options=="SELECT"){  
		$('#'+elmId).val(arrayList);
		}else if(options=="REMOVE"){ 
		$('#'+elmId).val(arrayList);
		}
	}
	
//	if(multiSelId == "dhtmlMultiSel"){ 
//		if(options=="ALL"){ 
//			elmId.val("CI,DS,DB,HP,EP,RP"); 
//		}else if(options=="NONE"){
//			elmId.val(""); 
//		}else if(options=="SELECT"){  
//			elmId.val(arrayList);
//		}else if(options=="REMOVE"){ 
//			elmId.val(arrayList);
//		}
//	}
	
	
	if(multiSelId == "selDlgliplnCoverages"){ 
		if(options=="ALL"){ 
		$('#'+elmId).val("CI,DS,DB,HP,EP,RP"); 
		}else if(options=="NONE"){
		$('#'+elmId).val(""); 
		}else if(options=="SELECT"){  
		$('#'+elmId).val(arrayList);
		}else if(options=="REMOVE"){ 
		$('#'+elmId).val(arrayList);
		}
	}
	
	if(multiSelId == "sellipIsnurObject"){ 
		if(options=="ALL"){  
		$('#'+elmId).val("RP,EP,SV,ES,DD,TPD,DI,LTC,PA,TI"); 
		}else if(options=="NONE"){
		$('#'+elmId).val(""); 
		}else if(options=="SELECT"){  
		$('#'+elmId).val(arrayList);
		}else if(options=="REMOVE"){ 
		$('#'+elmId).val(arrayList);
		}
	}
	
	
	
	if(multiSelId == "selmulCriticalLevelofDD"){ 
		if(options=="ALL"){ 
		$('#'+elmId).val("ES,AS"); 
		}else if(options=="NONE"){
		$('#'+elmId).val(""); 
		}else if(options=="SELECT"){  
		$('#'+elmId).val(arrayList);
		}else if(options=="REMOVE"){ 
			$('#'+elmId).val(arrayList);	
		}
	} 
}



function enableNomineeDiv(sel){  
	if(!isEmpty(sel)){
		if(sel.value == 'Revocable'){
			applyToastrAlert(NOMINEE_NAME);
			$("#lifeInsdetstab #NomineesTblDiv").css("display","block");
			$("#lifeInsurce").scrollTop(400);
		}else if(sel.value == 'Trust'){
			applyToastrAlert(NOMINEE_NAME);
			$("#lifeInsdetstab #NomineesTblDiv").css("display","block");
			$("#lifeInsurce").scrollTop(400);
		}else if(sel.value == 'None'){
			$("#lifeInsdetstab #NomineesTblDiv").css("display","none");
		}else if( sel.value == ''){ 
			$("#lifeInsdetstab #NomineesTblDiv").css("display","none");
		}
		
	} 
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
}



function setMainRPtoLifeRP(){
	
	
//	var lirpretageself = $("#retSelfretage");
//	var lirpretagesps = $("#retSpouseretage");
//	var lirpyrstoret = $("#lfretYrstoret");
//	var lirpinterstrate = $("#retIntrateused");
//	
//	
//	var rpretageself = $("#retSelfCoordinateage");
//	var rpretagesps = $("#retSpsCoordinateage");
//	var rpyrstoret = $("#retYrstoret");
//	var casavingdeprate = $("#caSavingDeprate");
//	
//	if(isEmpty(lirpretageself.val())){
//		lirpretageself.val(rpretageself.val());
//	}
//	
//	if(isEmpty(lirpretagesps.val())){
//		lirpretagesps.val(rpretagesps.val());
//	}
//	
//	if(isEmpty(lirpyrstoret.val())){
//		lirpyrstoret.val(rpyrstoret.val());
//	}
//	
//	if(isEmpty(lirpinterstrate.val())){
//		lirpinterstrate.val(casavingdeprate.val());
//	}
//	RetPlgcalculateRow(); 
}



function valilifeinsurance(){

	if (!(validateFocusFlds('focusonlifepartleft', 'lipOwner', Li_OWN)))
		return; 
	if (!(validateFocusFlds('focusonlifepartleft', 'lipAssured', Li_ASS)))
		return;
	if (!(validateFocusFlds('focusonlifepartleft', 'lipCompany', Li_INS)))
		return;
	if (!(validateFocusFlds('focusonlifepartleft', 'lipPolicyno', Li_POL)))
		return;
	if (!(validateFocusFlds('focusonlifepartleft', 'policyStatus', Li_POLSTS)))
		return;
	if (!(validateFocusFlds('focusonlifepartleft', 'lipIncepdate', Li_DATE)))
		return; 
//	if (!(validateFocusFlds('focusonlifepartright', 'lipPlanname', Li_PLAN)))
//		return; 
	
	if(!isEmpty($("#lipMaturityVal").val())){
		if (!(validateFocusFlds('focusonlifepartright', 'lipMaturityDate', Li_MATDATE)))
			return;
	}
	
	return true;
}



