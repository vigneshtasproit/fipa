/**
 * 
 */

var fpmsevents = [];
function fipaCalendarElInit(){ 
	
//			showFIPAModel('calendarEl_Dialog',""); 
	
	var custid = $("#fpmsCustid").val();
	var fnaid = $("#fnaId").val();
	
	if(isEmpty(custid) && isEmpty(fnaid)){
		
		alert("To view Customer - Calendar Activities,\nPlease select any client profile!");
		return false;
	}
	
	
	
	
	$('#calendarEl_Dialog').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true,
	});	
	
	
			$('#calendarEl_Dialog').on('shown.bs.modal', function() { 
				
				$("#txtFldfipaCalElm").prop("readonly",true);
				
				calCalendar();
				
				
				
				
				
//				$('#calendar').find("button:eq(4)").click();
				
				
				$("#calendarEl_Dialog").find(".modal-footer").find("button:eq(0)").click(function (){
				 
	        	  $("#calendarEl_Dialog").modal('hide'); 
	        	  
			   }); 
				
				
			});
}


function calCalendar(){ 
	
	$('#calendar').fullCalendar({ 
		  aspectRatio: 1.8,
		  height:460,
		  theme: true,      
		  themeButtonIcons:true, 
		  header: { 
			    left: 'prevYear,prev,next,nextYear  today',
				center: ' title',
				right: 'month,agendaWeek,agendaDay', 
		},
		eventLimit: true,
		  views: {
			     month: {
			       eventLimit: 3
			     },
			 },  
		views: {  
	        agendaFourDay: {
	            type: 'agenda',
	            duration: { days: 5 },
	            buttonText: '5 Days'
	        }
		 },
//		 viewRender: function(view, element) {
//		        var title = (view.title); 
//		        var stDate=moment(view.start).format('DD MMM');
//		        var edDate=moment(view.end).format('DD MMM , YYYY');
//		        $(".fc-center").text("");  
//		        if(view.name == 'agendaWeek'){  
//			        $(".fc-center").text(stDate+" - "+edDate);
//		        }else {
//		        	$(".fc-center").text(view.title);
//		        }   
//		 },
//	eventColor: '#99ffe8', 
	defaultView: 'month',
	minTime: "08:00:00",
	maxTime: "19:00:00",  
	businessHours: true, 
	defaultDate: new Date(), 
	weekNumbers: true, 
	selectable: true,
	selectHelper: true,
	selectConstraint:{
		  start: '00:01', 
		  end: '23:59', 
	},
	
	slotEventOverlap: false,
	 eventOverlap: function(stillEvent, movingEvent) {
		 
	        return stillEvent.allDay && movingEvent.allDay;
	    },
		select: function(start, end, allDay,view ) {
			  
			
			
		},
		loading: function(bool) {
			  if (bool) 
				$(".se-pre-con").fadeOut("slow");
			  else 
				$(".se-pre-con").hide();
			},
			
		
		editable: false, 
		eventLimit: true,
		viewRender: function(view, element) {
		        var title = (view.title); 
		        var stDate=moment(view.start).format('DD MMM');
		        var edDate=moment(view.end).format('DD MMM , YYYY');
		        $(".fc-center").text("");  
		        if(view.name == 'agendaWeek'){  
			        $(".fc-center").text(stDate+" - "+edDate);
		        }else {
		        	$(".fc-center").text(view.title);
		        }   
		        
		        
		        if(view.name == "agendaDay"){
		        	$('#calendar').find(".fc-prev-button").html("<i class='fa fa-angle-left'></i>&nbsp;Prev.Day");
		        	$('#calendar').find(".fc-prev-button").prop("title","Load Previous Month...");
		        	
		        	$('#calendar').find(".fc-next-button").html("Next Day&nbsp;<i class='fa fa-angle-right '></i>");
		        	$('#calendar').find(".fc-next-button").prop("title","Load Next Month...");
		        	
		        }
		        
		        if(view.name == "month"){
		        	
		        	$('#calendar').find(".fc-prev-button").html("<i class='fa fa-angle-left'></i>&nbsp;Prev.Month");
		        	$('#calendar').find(".fc-prev-button").prop("title","Load Previous Month...");
		        	
		        	$('#calendar').find(".fc-next-button").html("Next Month&nbsp;<i class='fa fa-angle-right '></i>");
		        	$('#calendar').find(".fc-next-button").prop("title","Load Next Month...");
		        	
		        }
		        
		        if(view.name == "agendaWeek"){
		        	
		        	$('#calendar').find(".fc-prev-button").html("<i class='fa fa-angle-left'></i>&nbsp;Prev.Week");
		        	$('#calendar').find(".fc-prev-button").prop("title","Load Previous Month...");
		        	
		        	$('#calendar').find(".fc-next-button").html("Next Week&nbsp;<i class='fa fa-angle-right '></i>");
		        	$('#calendar').find(".fc-next-button").prop("title","Load Next Month...");
		        	
		        }
 
 
		 },
		eventRender:function(event, element, view) { 
			  
			

			$(element).find(".fc-popover .fc-more-popover").css("display","inline-flex");  
			$(element).text(""); 
		
		if(event.evtsource == "FPMS POLICY RENEWAL"){
        	  
        	$(element).addClass("policy_inforcedClass"); 
            $(element).css("border","1px solid  #86b300");
            $(element).css("border-radius","3px");
            $(element).css("display","inline-flex");
        	  
         }
//		else if(event.evtsource == "FIPA POLICY RENEWAL"){
//       	  
//         	$(element).addClass("fipa_evntClass");   
//         	$(element).css("border","1px solid rgb(87, 146, 165)"); 
//         	$(element).css("border-radius","3px");
//         	$(element).css("display","inline-flex");
//         	  
//           } 
//		
		
		
//		var fipaPoltooltip = '<div class="">'
//	        + '<span style="font-weight:bold;color:#2c3e50">' 
//	    	+ ' FIPA Policy Details </span></br>' 
//	    	+ '<span style="font-weight:bold;color:#2c3e50">Inception Date:</span>'+ (((event.start == "Invalid date"))?"":moment(event.start).format('DD/MM/YYYY'))
////	    	+ '</br><span style="font-weight:bold;color:#2c3e50">Expiry Date:</span>'+(((event.end == "Invalid date"))?"":moment(event.end).format('DD/MM/YYYY')) 
//	    	+ '<br></br><span style="font-weight:bold;color:#2c3e50"> Policy Information : </span>'
//	    	+ '</br><span style="font-weight:bold;color:#2c3e50"> Proposer :</span>'+event.custproposd
//	    	+ '</br><span style="font-weight:bold;color:#2c3e50"> Assured :</span>'+event.custassd
//	    	+ '</br><span style="font-weight:bold;color:#2c3e50"> Plan Name :</span>'+event.planname
//	    	+ '</br><span style="font-weight:bold;color:#2c3e50"> Policy no :</span>'+event.polnumber 
//	    	+ '</br></div>';
           
		var policyRenwltooltip = '<div class="container">'
//	        + '<span style="font-weight:bold;color:#2c3e50">' + ' FPMS Policy Details</span></br>' 
	    	+ '<div class="row"><h6 style="font-weight:bold;color:#2c3e50"><i class="fa fa-calendar-check-o"></i>Effective Date:</h6><h6>'+ (!(event.start == "Invalid date")?moment(event.start).format('DD/MM/YYYY'):"")+"</h6></div>"
	    	+ '<div class="row"><h6 style="font-weight:bold;color:#2c3e50">Renewals On:</h6><h6>'+ (!(event.renewaldate == "Invalid date")?moment(event.renewaldate).format('DD/MM/YYYY'):"")  +"</h6></div>"
	    	+ '<div class="row"><h5 style="font-weight:bold;color:#2c3e50;text-decoration: underline;"> Policy Information :</h5>'+"</div>"
	    	+ '<div class="row"><h6 style="font-weight:bold;color:#2c3e50"> Proposer :</h6><h6>'+event.custproposd+"</h6></div>"
	    	+ '<div class="row"><h6 style="font-weight:bold;color:#2c3e50"> Assured :</h6><h6>'+event.custassd+"</h6></div>"
	    	+ '<div class="row"><h6 style="font-weight:bold;color:#2c3e50"> Plan Name :</h6><h6>'+event.planname+"</h6></div>"
	    	+ '<div class="row"><h6 style="font-weight:bold;color:#2c3e50"> Policy no :</h6><h6>'+event.polnumber +"</h6></div>"
	    	+'</div>';
		
//	    	+ '<br><div class="pull-right"><button type="button" name="sendMailbtn" id="sendMailbtn" class="btn btn-danger" onclick="senMailTo(&quot;'+moment(event.start).format('DD/MM/YYYY')+'&quot;,&quot;'+event.proposer+'&quot;,&quot;'+event.propemail+'&quot;);">Send Mail</button></div>';
		 
		 if(event.evtsource == "FPMS POLICY RENEWAL"){
             	if(!(event.title == "" || event.title == undefined)){ 
             		
             		
             		
             		$(element).popover({ 
            			html:'true',
            			trigger: "hover" ,
            			content:policyRenwltooltip,
            			container: 'body',
            			title:function () {
            			    return 'FPMS-POLICY Details';
            			  }, 
            			animation: 'true'
//            			placement:'auto',
//            			viewport:$(element)
            		}); 
             		
             		
//                	element.qtip({    
//                        content: {    
//                        	 title: "<h5 style='color:#23527C;font-weight:bold'> </h5>",
//                             text: policyRenwltooltip ,
//                             button: true
//                        } 
//                        , position: {
//                            my: 'top left',   
//                            at: 'bottom left', 
//                            viewport:  $(window) ,
//                            target: $(element) 
//                        } ,
//                        show: { solo: true  },
//                        
//                        style: {
//                            classes: 'qtip-fpmsRewCalgreen qtip-rounded qtip-shadow' 
//                        },
//                        hide: {
//                            event: 'unfocus'
//                        }
//                    });
                	}
            	
            }
//		if(event.evtsource == "FIPA POLICY RENEWAL"){
//            	console.log(event.end);
//            	if(!(event.title == "" || event.title == undefined)){ 
//            	
//                	element.qtip({    
//                        content: {    
//                        	 title: "<h5 style='color:#23527C;font-weight:bold'>FIPA-POLICY RENEWALS (INFORCED)</h5>",
//                            text: fipaPoltooltip,
//                            button: true
//                        } 
//                        , position: {
//                            my: 'top left',   
//                            at: 'bottom left', 
//                            viewport: $(window),
//                            target: $(element) 
//                        } ,
//                        show: { solo: true }, 
//                        style: {
//                            classes: 'qtip-fipapolCalgreen qtip-rounded qtip-shadow' 
//                        },
//                        hide: {
//                            event: 'unfocus'
//                        }
//                    });
//                  }
//                 
//                }
 
        
       
	    },  
	    eventClick: function(calEvent, event, view) {  
	    
	    },
	  
	    eventMouseover: function (data, event, view) { 
        },
        
        eventMouseout: function (data, event, view) { 
        },

    eventSources: [   
        {//FPMS policy renewals
        	events: function (start, end, callback) {
        		$('#calendar').fullCalendar('removeEvents');
            	//Calendar
        		showLoader();
            	$.post(servletName, {
            		DBCALLFOR   : "FPMS_POLICY", 
            		strAdviserID 	  : $("#hTxtFldLoggedAdvStfId").val(),
            		strCustID 	  	  : $("#fpmsCustid").val(), 
                }).done(function(data){  
                	var response = $.parseJSON(data); 
                	 $.each(response, function(key, getdata) {  
                		 $.each(getdata, function(tab, value) { 
                			 if(tab == "NO_POLICY"){
                				 suspErrorToastrAlert("NO FPMS POLICY EXIST!");
                				 hideLoader();
                			 }
                			 if(tab == "FPMS_POLICY_RENEWALS"){
                				
                				 $.each(value, function(len, val) { 
                					
               			 var title		=	!isEmpty(val["AppName"])?val["AppName"] +"Policy":"";			
               			 var advname	=	!isEmpty(val["AdviserName"])?val["AdviserName"]:"";	
               			 var advid  	=	!isEmpty(val["AdviserId"])?val["AdviserId"]:"";	
               			 var custname	=	!isEmpty(val["CustomerName"])?val["CustomerName"]:"";	
               			 var custnric	=	!isEmpty(val["CustomerNRIC"])?val["CustomerNRIC"]:"";	
               			 var planname	=	!isEmpty(val["PlanName"])?val["PlanName"]:"";	
               			 var polnumber	=	!isEmpty(val["PolicyNo"])?val["PolicyNo"]:"";	
               			 var prinname	=	!isEmpty(val["PrincipalName"])?val["PrincipalName"]:"";	
               			 var start		=	!isEmpty(val["EffectiveDate"])?val["EffectiveDate"]:"";	
               			 var renewaldate=	!isEmpty(val["RenewalDate"])?val["RenewalDate"]:"";	 
               			 var stsname	=	!isEmpty(val["PolicyStatus"])?val["PolicyStatus"]:"";
               			 var custproposd=	!isEmpty(val["CustomerProposed"])?val["CustomerProposed"]:"";               			
               			 var custassd	=	!isEmpty(val["CustomerAssured"])?val["CustomerAssured"]:"";
               			  
//               			 if(isValidObject(start) && !isEmpty(start)){
//               			 console.log(start);
//               				console.log(moment(start,'DD/MM/YYYY') )
               				eventsData = {
               						 title		:	title,
               						 start		:	moment(start).format('YYYY-MM-DD') ,
               						 renewaldate:	moment(renewaldate).format('YYYY-MM-DD') ,
               						 advname	:	advname,
               						 custname	:	custname,
               						 custnric	:	custnric,
               					     planname	:	planname, 
               					     polnumber	:	polnumber, 
               					     prinname	:	prinname, 
               					     stsname	:	stsname, 
               					     custproposd:   custproposd,
               					     custassd	:	custassd,
               					     evtsource	:	"FPMS POLICY RENEWAL",
               						 allDay		:	true,
               						
               		    	},
//               		    	alert(eventsData)
           			      	$('#calendar').fullCalendar('renderEvent', eventsData, true); 
           			  		 
//           				 }
               			 hideLoader();
               			
                		 });
                			 }   
               		});
                	 });
                });
            	

        	}
        	            	
        },
        /* {//FIPA policy renewals
        	events: function (start, end, callback) {
        		$('#calendar').fullCalendar('removeEvents');
            	//Calendar
        		showLoader();
            	$.post(calendarServlet, {
            		strSrchForParam   : "FIPA_POLICY", 
            		strAdviserID 	  : $("#hTxtFldLoggedAdvStfId").val(),
            		strFnaID 	  	  : $("#fnaId").val(), 
                }).done(function(data){  
                	var response = $.parseJSON(data); 
                	 $.each(response, function(key, getdata) {  
                		 $.each(getdata, function(tab, value) { 
                			 if(tab == "NO_POLICY"){
                				 suspErrorToastrAlert("NO FIPA POLICY EXIST!");
                				 hideLoader();
                			 }
                			 if(tab == "FIPA_POLICY_RENEWALS"){
                				
                				 $.each(value, function(len, val) { 
                					
               			 var title		=	!isEmpty(val["AppName"])?val["AppName"] +"Policy":"";	 
               			 var advid  	=	!isEmpty(val["AdviserId"])?val["AdviserId"]:"";	
               			 var custname	=	!isEmpty(val["CustomerName"])?val["CustomerName"]:"";	
               			 var custnric	=	!isEmpty(val["CustomerNRIC"])?val["CustomerNRIC"]:"";	
               			 var planname	=	!isEmpty(val["PlanName"])?val["PlanName"]:"";	
               			 var polnumber	=	!isEmpty(val["PolicyNo"])?val["PolicyNo"]:"";	
               			 var prinname	=	!isEmpty(val["PrincipalName"])?val["PrincipalName"]:"";	
               			 var start		=	!isEmpty(val["EffectiveDate"])?val["EffectiveDate"]:"";	
               			 var end        =	!isEmpty(val["ExpiryDate"])?val["ExpiryDate"]:"";	 
               			 var stsname	=	!isEmpty(val["PolicyStatus"])?val["PolicyStatus"]:"";
               			 var custproposd=	!isEmpty(val["CustomerProposed"])?val["CustomerProposed"]:"";               			
               			 var custassd	=	!isEmpty(val["CustomerAssured"])?val["CustomerAssured"]:"";
               			  
               			 if(isValidObject(start) && !isEmpty(start)){
               				eventsData = {
               						 title		:	title,
               						 start		:	moment(start).format('YYYY-MM-DD') ,
               						 end 		:	moment(end).format('YYYY-MM-DD') ,
               						 advid		:	advid,
               						 custname	:	custname,
               						 custnric	:	custnric,
               					     planname	:	planname, 
               					     polnumber	:	polnumber, 
               					     prinname	:	prinname, 
               					     stsname	:	stsname, 
               					     custproposd:   custproposd,
               					     custassd	:	custassd,
               					     evtsource	:	"FIPA POLICY RENEWAL",
               						 allDay		:	true,
               						
               		    	},
               		    	
           			      	$('#calendar').fullCalendar('renderEvent', eventsData, true); 
           			  		 
           				 }
               			 hideLoader();
               			
                		 });
                			 }   
               		});
                	 });
                });
            	

        	}
        	            	
        },*/
        ]
	  });
	
//	$("#calendar").find(".fc-button-group")
	
//	$("<fieldset><legend>Prev.</legend></fieldset>").insertBefore($('#calendar').find(".fc-prevYear-button"));
	
	$('#calendar').find(".fc-prevYear-button").html("<i class='fa fa-angle-double-left'></i>&nbsp;Prev.Year");
	$('#calendar').find(".fc-prevYear-button").prop("title","Load Previous Year...");
	
	$('#calendar').find(".fc-prev-button").html("<i class='fa fa-angle-left'></i>&nbsp;Prev.Month");
	$('#calendar').find(".fc-prev-button").prop("title","Load Previous Month...");
	
	$('#calendar').find(".fc-next-button").html("Next Month&nbsp;<i class='fa fa-angle-right '></i>");
	$('#calendar').find(".fc-next-button").prop("title","Load Next Month...");
	
	$('#calendar').find(".fc-nextYear-button").html("Next Year&nbsp;<i class='fa fa-angle-double-right'></i>");
	$('#calendar').find(".fc-nextYear-button").prop("title","Load Next Year...");
	
}