<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<div id="accordion" class="panel-group">
	<div id="srsdiv" class="accord-content">
		
		<div class="panel-body" id="INVSUM_NORECFOUND" >   
  <span class="panelHeaderTitle">SRS</span> 
		<small>  (Investment Summary)  </small>
		<div class="clearspace10"></div>
		<span class="panelHeaderSubTitle">&nbsp;</span> 
		<div class="table-responsive">
		<div class="clearspace20"></div>
		<div class="col_md_12 text-center">
		<span class="panelHeaderSubTitle" style="color:maroon">---  NO RECORD FOUND IN INVESTMENT SECTION TO GENERATE INVESTMENT SUMMARY ---		</span> 
		</div>
		
		</div>
	</div>
	
		
		<div class="panel-body" id="divforSRSSummary" style="display:none">   
  		<span class="panelHeaderTitle"></span> 
		<span class="panelHeaderTitle"> Investments - Summary  </span>
		<div class="clearspace10"></div>
		<span class="panelHeaderSubTitle">&nbsp;</span> 
		<div class="table-responsive">
		
		<div class="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="..." id="invsrsbtngrp">
	        <div class="btn-group" role="group">
	            <button type="button" class="btn btn-primary" href="#tabselfinvSrs" data-toggle="tab"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
	                <div class="hidden-xs">Self</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button" class="btn btn-default" href="#tabspouseinvSrs" data-toggle="tab"><i class="fa fa-user-plus" aria-hidden="true"></i>
	                <div class="hidden-xs">Spouse</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button"class="btn btn-default" href="#tabfamilyinvSrs" data-toggle="tab"><i class="fa fa-users" aria-hidden="true"></i>
	                <div class="hidden-xs">Joint/Family</div>
	            </button>
	        </div>
    	</div>
    	
    	<div class="well">
	      <div class="tab-content">
	        <div class="tab-pane fade in active" id="tabselfinvSrs" style="min-height:300px;">
	          <div id="genSRSSummarySelf"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabspouseinvSrs" style="min-height:300px;">
	          <div id="genSRSSummarySpouse"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabfamilyinvSrs" style="min-height:300px;">
	          <div id="genSRSSummaryFamily"></div> 
	        </div>
	      </div>
	    </div>
		
		
		
		
		</div>
	</div>
	
	
	
		</div>
		
		<div class="" >    


<div class="middle-line"></div>

<div class="clearspace20"></div>	
			
			
		<div class="table-responsive"> 
		
			<div class="col-md-3 pull-left">
			
					<img src="images/menuicons/srscash.png"  class="img-rounded" width="50" height="50"/> 
					<span class="panelHeaderTitle">SRS</span> 
			
			</div>
			
			<div class="col-md-4 pull-left">
				&nbsp;
			</div>
			
			<div class="col-md-5 pull-right">
			
			<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="SrsDRow" disabled="true"></button>
					</div>
					 
	  				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="SrsARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="SrsERow" disabled="true"></button>
 					</div>
	  				
			</div>
					
					
					</div>  
			<div id="SRS_APD" > 
   <div id="srsMandatoryFlds"> 		    
	  
					<table id="srsTable" class="dataTable table-bordered table-striped display hover" style="width: 100%;">
					<thead>
						<tr> 
							<th rowspan="2">#</th>  
							<th rowspan="2"><div  class="checkbox checkbox-primary text-center">
							<input type="checkbox" id="SelSrsDets" name="SelSrsDets" onclick="SelAllSRS(this)"><label for="SelSrsDets">&nbsp;</label></div></th>
							<th rowspan="2"><div style="width: 140px;">Classification</div></th>
							<th rowspan="2"><div style="width: 172px;">Description</div></th>
							<th rowspan="2"><div style="width: 80px;">Frequency</div></th>
							<th rowspan="2"><div style="width: 150px;">Amount</div></th>
							<th rowspan="2"><div style="width: 80px;">Period From</div></th>
							<th rowspan="2"><div style="width: 80px;">Period To</div></th>
							<th colspan="4"><div class="text-center">Withdrawal Details</div></th>  
						</tr>
						 <tr>
							<th><div style="width: 60px;">Start Age</div></th>
							<th><div style="width: 60px;">Payout Period</div></th>
			</tr>
					</thead>
					<tbody></tbody> 
				</table> 
				</div>
				</div>
				</div>
		
		</div>
		 <!-- SRS Modal  -->
<div class="modal fade" id="Srs_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="srsCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
         
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
		<div class="col-md-6"> 
		 <div class="form-group">
      <fieldset  id="srsdetails"><legend class="customFIPAStyle">SRS Details</legend>
       
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
                <label for="selDlgSRSClassify" class="control-label mandFldastrks pull-right text-right">
			  Classification<span class="mandFldastrks">*</span></label>
             </div> 
           <div class="col-md-5 col-sm-5 col-xs-5"> 
			 <select class="form-control" id="selDlgSRSClassify" name="selDlgSRSClassify"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty SRS_CLASSIFICATION_LIST}">
						<c:forEach var="srsclassify" items="${SRS_CLASSIFICATION_LIST}">
							<option value="${srsclassify}">${srsclassify}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
                <label for="txtFldDlgSRSDesc" class="control-label mandFldastrks pull-right text-right">
			  Description<span class="mandFldastrks">*</span></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
			 <input  type="text" id="txtFldDlgSRSDesc" name="txtFldDlgSRSDesc"  
			 class="form-control fld-resp-md"  maxlength="150" />
            </div> 
            </div>
      </div>
      
       
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
                <label for="txtFldDlgSRSFreq" class="control-label mandFldastrks pull-right text-right">
			  Frequency<span class="mandFldastrks">*</span></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
			 <select class="form-control fld-resp-sm" id="txtFldDlgSRSFreq" name="txtFldDlgSRSFreq">
					<option value="">--SELECT--</option>
					<c:if test="${not empty SRS_FREQUENCY_LIST}">
						<c:forEach var="frequency" items="${SRS_FREQUENCY_LIST}">
							<option value="${frequency}">${frequency}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div>
    
       
       
      
      </fieldset>
      </div>
      </div>
      
      <!-- Second div -->
      <div class="col-md-6"> 
       <div class="form-group">
      <fieldset  id="classfydetails"><legend class="customFIPAStyle">
      	<span id="classificationSpan">Annual Addition</span></legend>
       
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgSRSAmount" class="control-label pull-right text-right">
             Amount </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
				<div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon"> 
               <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
               <input type="text" id="txtFldDlgSRSAmount" name="txtFldDlgSRSAmount"
                class="form-control numbers applyEvntUsd26"  maxlength="126">  
               </div>
            </div> 
            </div>
      </div>
      <div id="srsAnnualAddition">
      <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgSRSPerFrom">Period From
             <small>(DD/MM/YYYY)</small></label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-mm date" id="SRSPerFrmpicker">
							<input type="text"  id="txtFldDlgSRSPerFrom" name="txtFldDlgSRSPerFrom" 
							 class="form-control"  maxlength="10" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
				</div> 
				</div> 
            </div> 
            </div>
             <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgSRSPerTo">Period To
             <span class="mandFldastrks">*</span>
             <small>(DD/MM/YYYY)</small></label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-mm date" id="SRSPerTopicker">
							<input type="text" id="txtFldDlgSRSPerTo" name="txtFldDlgSRSPerTo"
							  class="form-control" 	 maxlength="10"  />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
             </div> 
				</div> 
            </div> 
            </div>
           </div> 
           
           
           <div id="srsAnnualWithdrawals" class="hidden">
      <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="txtFldDlgSRSAge">Age</label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-sm">
				 <input type="text" name="txtFldDlgSRSAge" 	id="txtFldDlgSRSAge" 
				                      class="form-control numbers applyEvntYrs"  />
								<div class="input-group-addon">
									<span id="symbolYrs"></span>
								</div>
							</div>
				</div> 
            </div> 
            </div>
             <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="txtFldDlgSRSPayoutPerd">
             		Payout Period</label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-sm">
				 <input type="text" name="txtFldDlgSRSPayoutPerd" id="txtFldDlgSRSPayoutPerd" 
				         class="form-control numbers applyEvntYrs"  />
								<div class="input-group-addon">
									<span id="symbolYrs"></span>
								</div>
							</div>
				</div> 
            </div> 
            </div>
           </div> 
            

    
            <div class="form-group">
	          	<input type="hidden" name="txtFldDlgSRSCrtdBy" 	 id="txtFldDlgSRSCrtdBy" /> 
				<input type="hidden" name="txtFldDlgSRSCrtdDate" id="txtFldDlgSRSCrtdDate" />
				<input type="hidden" name="txtFldDlgSRSId" 		 id="txtFldDlgSRSId"/> 
				<input type="hidden" name="txtFldDlgSRSRefId" 	 id="txtFldDlgSRSRefId"/>
				<input type="hidden" name="txtFldDlgSRSMode" 	 id="txtFldDlgSRSMode"/>  
            </div>  
            </fieldset>
            </div>
            
       
      </div>
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					     <!-- <button type="button" id="srsCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
					    </div>
		   
      </div>
    </div>
  </div>
</div> 