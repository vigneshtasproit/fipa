/**
 * 
 */


 
function isValidObject(objToTest) 
{
	
  if (objToTest == null || objToTest == "undefined") 
  {
	  
    return false;
  }

 return true;
}//end isValidObject

function isEmpty(strVal) 
{
   if ((strVal.length==0) || (strVal == null)) 
   {
      return true;
   }
   else 
   { 
      return false; 
   }
}//end IsEmpty

function validateMandatoryFlds(fld,message){

	if(isEmpty(fld.val())){
		
		showAlert(message,fld);
//		fld.focus();
		
		return false;
		
	}//end of if
	
	return true;
}//end of validateMandatoryFlds

//Does Insert Booking Details
function doCancel(){
	  $("#createItEventMod").modal('hide');
//	  alert("Event/Announcement Booking Cancelled!!");
	  location.href = "itevents.jsp";
	 
}

//Does Insert Booking Details
function doInsertItDets(){
	

	  $("#createItEventMod").modal('hide'); 
////	  $(".se-pre-con").show(); 
//    var ITEvtAnnc=$('#txtFldITEvtAnncId').val();
//	var eventType=$('#selEventType').val();
//	var eventView=$('#selEventView').val();
//	var descHeader=$('#txtFldITEvtDescHeader').val();
//	var descCont=$('#txtFldITEvtDescCont').val();
//	var Start=$('#txtFldITEvtStartTime').val();
//    var End=$('#txtFldITEvtEndTime').val();
//    var allDay=  ($('#txtFldITEvtAllDay').val() == "true");
//    var remarks= ($('#txtFldITEvtRemarks').val());
 

//	 var param = 'hActionType=ITEVTType'+
//   '&selEventType='+encodeURIComponent(eventType)+
//   '&selEventView='+encodeURIComponent(eventView)+
//   '&txtFldITEvtDescHeader='+encodeURIComponent(descHeader)+
//   '&txtFldITEvtDescCont='+encodeURIComponent(descCont)+
//   '&txtFldITEvtStartTime='+encodeURIComponent(Start)+
//   '&txtFldITEvtEndTime='+encodeURIComponent(End)+
//   '&txtFldITEvtAllDay='+encodeURIComponent(allDay)+
//   '&txtFldITEvtRemarks='+encodeURIComponent(remarks);  
   
	 
//	 var data = calendarAjax(param);//calendarAjax function call
	

//	  $("#calendar").fullCalendar('renderEvent', //its stick to the calendar
//		        {
//		     
//		            title: $('#selEventType').val(),
//		            start: $('#txtFldITEvtStartTime').val(),
//		            end: $('#txtFldITEvtEndTime').val(),
//		            allDay: ($('#txtFldITEvtAllDay').val() == "false"),
//		            eventView:eventView,
//		            descHeader:descHeader,
//		            descCont:descCont,
//		            remarks:remarks,
//		            
//		        },
//		        true);
	  
	  
	  
	  alert("eCalendar Details Recorded Successfully!");
//	  location.href = "itevents.jsp";
//	  $(".se-pre-con").hide();
	 
	 }
	
	
//End Insert


//Does Update Booking Details
function doUpdateITDets(id){
	
	  $("#createItEventMod").modal('hide');
	   
	  $(".se-pre-con").show();
	 
	  	var ITEvtAnnc=$('#txtFldITEvtAnncId').val();
		var eventType=$('#selEventType').val();
		var eventView=$('#selEventView').val();
		var descHeader=$('#txtFldITEvtDescHeader').val();
		var descCont=$('#txtFldITEvtDescCont').val();
		var Start=$('#txtFldITEvtStartTime').val();
	    var End=$('#txtFldITEvtEndTime').val();
	    var allDay=  ($('#txtFldITEvtAllDay').val() == "false");
	    var remarks= ($('#txtFldITEvtRemarks').val());
  
	 var updITparam = 'hActionType=ITEVTUPD'+ 
	   '&txtFldITEvtAnncId='+encodeURIComponent(id)+
	   '&selEventType='+encodeURIComponent(eventType)+
	   '&selEventView='+encodeURIComponent(eventView)+
	   '&txtFldITEvtDescHeader='+encodeURIComponent(descHeader)+
	   '&txtFldITEvtDescCont='+encodeURIComponent(descCont)+
	   '&txtFldITEvtStartTime='+encodeURIComponent(Start)+
	   '&txtFldITEvtEndTime='+encodeURIComponent(End)+
	   '&txtFldITEvtAllDay='+encodeURIComponent(allDay)+
	   '&txtFldITEvtRemarks='+encodeURIComponent(remarks); 
    
//	 var data = updcalendarAjax(updITparam);//calendarAjax function call
//	 alert("Update Records submitted");
//	 location.href = "itevents.jsp";
//	 $(".se-pre-con").hide();
}
//End Update



function calendarAjax(param)//To Insert Booking Details
{
   
	var response = '';var result='';
	$.ajax({
		url            : 'ITEventServlet',
		data           : param,
		dataType       : 'json',
		type           : 'POST',
		async          : false,
		success        :function(data){
		                response = data;
		             
		},complete     : function(){
			
		},error        : function(){
			
		}
	});
	return response;
}//end of calendarAjax

function updcalendarAjax(updparam){//To Update Booking Details
	var response = '';var result='';
	$.ajax({
		url            : 'ITEventServlet',
		data           : updparam,
		dataType       : 'json',
		type           : 'POST',
		async          : false,
		success        :function(data){
		                response = data;
		                
		},complete     : function(){
			
		},error        : function(){
			
		}
	});
	return response;
}

function getITEvntAjax(srchparam){ //To Search Booking Details
	
		var response = '';var result='';
//		$.ajax({
//			url            : 'ITEventServlet',
//			data           : srchparam,
//			dataType       : 'json',
//			type           : 'POST',
//			async          : false,
//			success        :function(data){
//			                response = data;
//			              
//			},complete     : function(){
//				
//			},error        : function(){
//				
//			}
//		});
		return response;
}


function delITEvtAccAjax(delITparam){ //To Delete Booking Details
	
	var response = '';var result='';
//	$.ajax({
//		url            : 'ITEventServlet',
//		data           : delITparam,
//		dataType       : 'json',
//		type           : 'POST',
//		async          : false,
//		success        :function(data){
//		                response = data;
//		            
//		},complete     : function(){
//			
//		},error        : function(){
//			
//		}
//	});
	return response;
	
}


function validateDetails(){

	//validates Booking details
	if(!(validateMandatoryFlds(document.getElementById("selEventType"), "Please Keyin Event Type!!!"))) return;
	if(!(validateMandatoryFlds(document.getElementById("selEventView"), "Please Keyin Event View!!!"))) return;
	if(!(validateMandatoryFlds(document.getElementById("txtFldITEvtDescHeader"), "Please Keyin Event Desc. Header!!!"))) return;
	if(!(validateMandatoryFlds(document.getElementById("txtFldITEvtDescCont"), "Please Keyin Event Desc. Content!!!"))) return;
 
	return true;

}



function evtdeterminCalcHt(){
	var calHt=$(window).height()-150;
	return calHt;
}
$(window).resize(function (){
	$('#calendar').fullCalendar('option','height',evtdeterminCalcHt());
	});
