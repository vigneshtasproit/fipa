<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<div  class="panel-group">

	<div id="inputinvstsection" class="accord-content"> 
		
<div class="panel-body">  
		<div class="table-responsive"> 
			<!-- <div class="col-md-3 pull-left"> 
			<img src="images/menuicons/investment.png" class="img-rounded" style="width: 40px;height: 40px"/>
				<span class="panelHeaderTitle"> Investment</span>
			</div> -->
			
			
			<div class="col-md-3 pull-left"> 
				<div class="btn-group pull-left" role="group">
					 <a class="btn btn-default addInflwOutflw" id="backToFdFlowInv" onclick="openBackToFundFlowFromInv('incsrcSelfNempDivdamt');"></a>
		   	 	 <a class="btn btn-default backToInvCash" id="backNavInvCash" onclick="openBackToCOB()"></a>
	  	
						</div>
			</div>		
			
			
			<div class="col-md-3 pull-left">
				&nbsp;
			</div>	
			
			<div class="col-md-6 pull-right">
			<div class="btn-group pull-right funcToDisable" role="group">	
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="InvestDRow" disabled="true"></button>
  				 </div>
			<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >			
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="InvestARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="InvestERow" disabled="true"></button>
 						<!-- <button type="button"  class="btn btn-default navbar-btn "  id="InvestXRow" style="display:none"></button>  -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="InvestVRow"></button> -->
  				 </div>
			</div>
		</div>
		 
				  
					
					
		<div class="">  
	<div class="col-md-12" >
				<table id="fnaInvestmentTbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					 <thead  valign="top"> 
							<tr><!--changes done 19/06/2019 -->
								<th rowspan="2"  valign="middle">#</th>  
								<!-- <th rowspan="2">Select</th> -->
								<th rowspan="2" valign="middle"><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelfnaInvestment" name="SelfnaInvestment" onclick="SelAllSelfnaInvestment(this)"><label for="SelfnaInvestment">&nbsp;</label></div></th>
							
								<th colspan="9"><div style="text-align:center">Investment Details<span class="mandFldastrks">*</span></div></th>
								<th colspan="5"><div style="text-align:center">NAV Details</div></th>
								<th colspan="6"><div style="text-align:center">Dividend Details</div></th> 
								<th colspan="4"><div style="text-align:center">Regular Investment Plan</div></th>
								<th colspan="5"><div style="text-align:center">Investment Objectives</div></th>
								<th colspan="3"><div style="text-align:center">Disbursement plan</div></th>
							  </tr>
							<tr>
							<!-- Investment details -->
								<th><div style="width:70px">Ownership<span class="mandFldastrks">*</span></div></th>
								<th><div style="width:80px">Types<span class="mandFldastrks">*</span></div></th>
								<th><div style="width:200px">Name of FA/Broker/Secruity house</div></th>
								<th><div style="width:50px">Analysis <br/>By Portfolio</div></th>
								<th><div style="width:300px">Name of Institution</div></th>
								<th><div style="width:300px">Description</div></th>
								<th><div style="width:80px">Estd. rate<br/><small>(%)</small></div></th> 
								<th><div style="width:100px">Amount<br/>Invested<br/><small>($)</small></div></th>  
								<th><div style="width:70px">Payment<br/>Method</div></th>
							<!-- NAV details -->	
								<th><div style="width:90px">Date Invested<br><small>(DD/MM/YYYY)</small><span class="mandFldastrks">*</span></div></th>
								<th><div style="width:130px">Last NAV price<br/><small>($)</small></div></th>
								<th><div style="width:90px">No. of units</div></th>
								<th><div style="width:120px">Current NAV<br/><small>($)</small></div></th>
								<th><div style="width:130px">Remarks</div></th> 
							<!-- Dividend details -->	
								<th><div style="width:50px">Re-Invested</div></th>
								<th><div style="width:50px">Based on</div></th>
								<th><div style="width:120px">PAR value<br/><small>($)</small></div></th>
								<th><div style="width:90px">Dividend<br/>Rate<br/><small>(%)</small></div></th>
								<th><div style="width:110px">Payment<br/>Mode</div></th>
								<th><div style="width:100px">Amount/Annum.<br/><small>($)</small></div></th>
							<!-- Regular investment plan details -->	
								<th><div style="width:50px">Any RSP?</div></th>
								<th><div style="width:110px">Frequency</div></th>
								<th><div style="width:100px">Amount</div></th>
								<th><div style="width:80px">No of yrs of RSP<br/><small>(yrs)</small></div></th>
							<!-- Investment objective details -->	
								<th><div style="width:140px">Obj.of<br/>Investment</div></th> 
								<th><div style="width:100px">Yrs in Ter. Edu./<br/>Yrs.to Retirement<small>(yrs)</small></div></th>
								<th><div style="width:100px">Name of child</div></th>
								<th><div style="width:100px">Accumulation<br/><small>(%)</small></div></th>
								<th><div style="width:80px">Period of Investment<small>(yrs)</small></div></th>
							<!-- Disbursement plan details -->	
								<th><div style="width:100px">Basis of Disbursement</div></th><!-- of Inv after end of Inv period -->
								<th><div style="width:120px">Amount<br/><small>($)</small></div></th>
								<th><div style="width:80px">Yrs. of Disbursement<small>(yrs)</small></div></th> 
							
							</tr>
					</thead>
					<tbody></tbody>
					</table>
					</div> 
					</div>

 
  <div class="panel-body" id="divforInvestmentSummary">   
  	<span class="panelHeaderTitle"></span>
	<div class="clearspace10"></div>
	<span class="panelHeaderTitle"> Investments - Summary  </span>
	<div class="clearspace10"></div>
	<span class="panelHeaderSubTitle">&nbsp;</span> 
	<div class="table-responsive">
	
		<div class="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="..." id="invbtngrp">
	        <div class="btn-group" role="group">
	            <button type="button" class="btn btn-primary" href="#tabselfinv" data-toggle="tab"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
	                <div class="hidden-xs">Self</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button"  class="btn btn-default" href="#tabspouseinv" data-toggle="tab"><i class="fa fa-user-plus" aria-hidden="true"></i>
	                <div class="hidden-xs">Spouse</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button" class="btn btn-default" href="#tabfamilyinv" data-toggle="tab"><i class="fa fa-users" aria-hidden="true"></i>
	                <div class="hidden-xs">Joint/Family</div>
	            </button>
	        </div>
    	</div>
    	
    	<div class="well">
	      <div class="tab-content">
	        <div class="tab-pane fade in active" id="tabselfinv">
	          <div id="genInvestSummarySelf"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabspouseinv">
	          <div id="genInvestSummarySpouse"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabfamilyinv">
	          <div id="genInvestSummaryFamily"></div> 
	        </div>
	      </div>
	    </div>
		
		
		
		
	</div>
		 
 </div>
			
    </div>
 </div>
</div>		









 <!-- Modal  -->
<div class="modal fade" id="Investment_Dialog" style="display: none;"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1300" role="document">
    <div class="modal-content">
      <div class="modal-header">
     <!--  <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="investCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
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
      <div class="clearspace20"></div>
    <!-- 	dlgBdyWidth450 -->
		<div class="col-md-4"> 
	
      <fieldset  id="investment_details"><legend class="customFIPAStyle">Investment Details</legend>
      	<div style="min-height: 623px;">
      <div class="form-group">
	<div class="row" > 
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="selDlgInvOwnership" 
            class="control-label mandFldastrks  pull-right text-right">
             Ownership of Investment*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <select name="selDlgInvOwnership"
					id="selDlgInvOwnership" class="form-control fld-resp-sm"
					autofocus="true"   >
					<option value="">--SELECT--</option>
					<c:if test="${not empty OWNERSHIP_LIST}">
						<c:forEach var="ownership" items="${OWNERSHIP_LIST}">
							<option value="${ownership}">${ownership}</option>
						</c:forEach>
					</c:if>
				</select>
			 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
               <label for="selDlgInvTypesOfInvst" 
            class="control-label mandFldastrks pull-right text-right">
             Types of Investment*
             </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <select name="selDlgInvTypesOfInvst"
					id="selDlgInvTypesOfInvst" class="form-control fld-resp-sm"
					 >
					<option value="">--SELECT--</option>
					<c:if test="${not empty INV_TYPEOFINVST_LIST}">
						<c:forEach var="typesofinvst" items="${INV_TYPEOFINVST_LIST}">
							<option value="${typesofinvst}">${typesofinvst}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div> 
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              		<label class="control-label  pull-right text-right" 
				 					for="txtFldDlgInvFABrokerName">
				 					Name of FA/Broker/Secu.house
				 					 </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
				 			<input type='text'
					class="form-control" id="txtFldDlgInvFABrokerName"
					name="txtFldDlgInvFABrokerName" maxlength="60"  
					onmouseover="fipaTooltip(this);"/>		
												
				 			</div>
            </div> 
            </div>
      
      
      <div class="form-group"> 
      <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="txtFldDlgAnalsByPortfolio"> 
                Analysis By Portfolio</label>
				</div>
				<div class="col-md-6"> 
				 <select name="txtFldDlgAnalsByPortfolio"
					id="txtFldDlgAnalsByPortfolio" class="form-control fld-resp-sm" >
					<option value="">--SELECT--</option>
					<option value="Y">Yes</option>
					<option value="N">No</option>
				</select>
				</div>	 
            </div> 
            </div>
            
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right" for="txtFldDlgInvInstitution">
					 Names of Institutions&nbsp;
                   <a class='btn btn-default addinfoicon' id='poptxtFldDlgInvInstitution'></a></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
                  <select name="txtFldDlgInvInstitution"
					id="txtFldDlgInvInstitution" class="form-control" >
					<option value="">--SELECT--</option>
<!-- 					<optgroup label="------------------------Avallis Portfolio------------------------"> -->
					<c:if test="${not empty INV_FUNDMGR_LIST}">
						<c:forEach var="invfundmagrlist" items="${INV_FUNDMGR_LIST}">
						    <option value="${invfundmagrlist[0]}">${invfundmagrlist[0]} - ${invfundmagrlist[1]}</option> 
						</c:forEach>
					</c:if>
<!-- 					</optgroup> -->
				</select>
            </div>
      </div> 
      </div>
      
      
      
      
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label  pull-right text-right" 
                   for="txtFldDlgInvDesc">
                   Description of Investment&nbsp;
                   <a class='btn btn-default addinfoicon' id='popselhidFundName'></a>
                    </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
               <select name="selhidFundName"
					id="selhidFundName" class="form-control" style="display:none">
<!-- 					<option value="">--SELECT--</option> -->
					<optgroup label="Fund Name List">
					<option value="">--SELECT--</option> 
					<c:if test ="${not empty INV_FUNDNAME_LIST}">
		 		<c:forEach var="invfundnamelist" items="${INV_FUNDNAME_LIST}">
							<option value="${invfundnamelist[0]}^${invfundnamelist[1]}">${invfundnamelist[2]}</option>
						</c:forEach>
					</c:if>
					</optgroup>
				</select>
				
				 <select name="selhidPortfolio"
					id="selhidPortfolio" class="form-control" style="display:none">
<!-- 					<option value="">--SELECT--</option> -->
					<optgroup label="Portfolio List">
					<c:if test ="${not empty PORTFOLIO_CATG_LIST}">
		 		<c:forEach var="invportfoliolist" items="${PORTFOLIO_CATG_LIST}">
							<option value="${invportfoliolist[0]}-${invportfoliolist[1]}">${invportfoliolist[0]}-${invportfoliolist[1]}</option>
						</c:forEach>
					</c:if>
					</optgroup>
				</select>
				
				
<!-- 				PORTFOLIO_CATG_LIST -->
				<select name="txtFldDlgInvDesc"	id="txtFldDlgInvDesc" class="form-control"> 
						<option value="">--SELECT--</option> 
				</select>
					
            </div>
      </div> 
      </div>
      
      
      
      
      <div class="form-group">
	<div class="row" >
<!-- 	<div class="clearspace50"></div> -->
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
                     for="txtFldDlgInvEstInvRate">
                    Estimated Investment rate
                    &nbsp;
                    <a class="btn btn-default addinfoicon" id="poptxtFldDlgInvEstInvRate"></a></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
              <div class="input-group input-group-sm fld-resp-sm">
                <input type="text" onmouseover="fipaTooltip(this);" name="txtFldDlgInvEstInvRate"
					id="txtFldDlgInvEstInvRate" class="form-control numbers  applyEvntpCent3" /> 
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolprCent"></span> 
				       </div>
				       </div>
				       
					
            </div>
      </div> 
      </div>
      
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right" for="txtFldDlgInvAmt">
                 Amount Invested
				</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm">
				       <div class="input-group-addon">
				       <span class="glyphicon" id="symbolUsd"></span> </div>
                <input type="text" name="txtFldDlgInvAmt" onmouseover="fipaTooltip(this);" 
					id="txtFldDlgInvAmt" class="form-control numbers applyEvntUsd" 
					/>
                </div>                
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right" for="txtFldDlgInvSource">
					Payment Method </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select name="txtFldDlgInvSource"
					id="txtFldDlgInvSource" class="form-control fld-resp-sm" >
					<option value="">--SELECT--</option>
					<c:if test="${not empty LI_SRCOFPREM_LIST}">
						<c:forEach var="sourceofprem" items="${LI_SRCOFPREM_LIST}">
							<option value="${sourceofprem}">${sourceofprem}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div> 
      
      
             
    
        </div>
        
      </fieldset>
   
       
      </div>
      
      <!-- Second div -->
      <div class="col-md-4">  
      <div class="form-group"> 
        <fieldset  id="invNav_details"><legend class="customFIPAStyle">NAV Details</legend>
      	<div>
		<div class="form-group">
	<div class="row" > 
	<div class="col-md-5 col-sm-5 col-xs-5"> 
             <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgInvDateInvst">
                Date Invested
                <small>(DD/MM/YYYY)</small>*
               </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-mm date"  id="InvDateInvstDatepicker" > 
                  <input id="txtFldDlgInvDateInvst" name="txtFldDlgInvDateInvst" 
							 class="form-control fld-resp-mm" 
							 onmouseover="fipaTooltip(this);" 
				type="text" maxlength="10" /> 
                  <div class="input-group-addon"   > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                  </div>  	 
            </div> 
            </div>
      </div> 
      
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-5 col-xs-5"> 
              <label class="control-label pull-right text-right" for="txtFldDlgInvCurBid">
                Last NAV price
				</label>
             </div> 
           <div class="col-md-7 col-sm-7 col-xs-7"> 
		<div class="input-group input-group-sm">
				       <div class="input-group-addon">
				       <span class="glyphicon" id="symbolUsd"></span> </div>
                <input type="text" name="txtFldDlgInvCurBid" style="width: 112px; " onmouseover="fipaTooltip(this);"  
					id="txtFldDlgInvCurBid" class="form-control numbers applyEvntUsd"  />
					<a class="btn btn-default genNavicon" id="genNavicon" style="margin-left: 3px;"></a>
		                </div>
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-5 col-xs-5"> 
               <label class="control-label pull-right text-right" for="txtFldDlgInvNoOfUnits"> 
                 No. of units</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<input type="text" 	onmouseover="fipaTooltip(this);"  name="txtFldDlgInvNoOfUnits"
					id="txtFldDlgInvNoOfUnits" class="form-control numbers applyEvntUsd"  />
					
            </div> 
            </div>
      </div> 
      
      
      
      <div class="form-group" id="currentnavdiv">
	<div class="row" >
	<div class="col-md-5 col-sm-5 col-xs-5"> 
               <label id="currentnavlabelchange" class="control-label pull-right text-right" for="txtFldDlgInvNAV"> 
                 Current NAV</label>
             </div> 
             
             <div class="col-md-6 col-sm-6 col-xs-6"> 
		 
                <input type="text" name="txtFldDlgInvNAV" onmouseover="fipaTooltip(this);"  
					id="txtFldDlgInvNAV" class="form-control numbers applyEvntUsd" style="width:140px" /> 
            </div>  
           
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-5 col-xs-5"> 
               <label class="control-label pull-right text-right" for="selDlgInvRemarks"> 
                 Remarks</label>
             </div> 
             
             <div class="col-md-6 col-sm-6 col-xs-6"> 
		 
               <textarea name="selDlgInvRemarks" id="selDlgInvRemarks"   
					class="form-control"  rows="5" maxlength="300" ></textarea> 
			 
            </div>  
           
            </div>
      </div> 
        
            
            <div class="form-group">
	          	<input type="hidden" name="txtFldDlgInvtmntCrtdBy" id="txtFldDlgInvtmntCrtdBy"/> 
				<input type="hidden" name="txtFldDlgInvtmntCrtdDate" id="txtFldDlgInvtmntCrtdDate"/>
				 <input type="hidden" name="txtFldDlgInvtmntId" id="txtFldDlgInvtmntId"/> 
				 <input type="hidden" name="txtFldDlgInvtmntRefId" id="txtFldDlgInvtmntRefId"/> 
				 <input type="hidden" name="txtFldDlgInvtmntMode" id="txtFldDlgInvtmntMode"/> 
            </div>
            
       
      </div>
      </fieldset> 
      </div>
      
      
      <div class="form-group">
      <fieldset  id="dividendDets"><legend class="customFIPAStyle">Dividend Details</legend>
      	<div style="min-height: 327px;">
      <div class="col-md-12">  
         <div class="row" id="invAnlDivid"><!--  style="display:none" -->
         
         
         
      
      <div class="form-group"> 
        <div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right" for="selDlgDivdReInv">
                  Dividend Reinvested
				</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select name="selDlgDivdReInv" id="selDlgDivdReInv" class="form-control fld-resp-mm" >
					<option value="">--SELECT--</option>
					 <option value="Y">Yes</option>
					 <option value="N">No</option>
				</select>               
            </div>  
            </div>
      </div>
      
       <div class="form-group"> 
        <div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right" for="selDlgDivdBasedOn">
                  Dividend Based On&nbsp;
                  <a class="btn btn-default addinfoicon" id="popselDlgDivdBasedOn"  ></a>
				</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select name="selDlgDivdBasedOn" id="selDlgDivdBasedOn" class="form-control fld-resp-mm" disabled="true" >
					<option value="">--SELECT--</option>
					 <option value="PAR">PAR</option>
					 <option value="NAV">NAV</option>
				</select>               
            </div>  
            </div>
      </div>
      
      
      <div class="form-group" id="PARKeyin" > 
        <div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right" for="txtFldDlgDividendPAR">
                 PAR value($)
				</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm">
				       <div class="input-group-addon">
				       <span class="glyphicon" id="symbolUsd"></span> 
				       </div>
                <input type="text" 	onmouseover="fipaTooltip(this);"  name="txtFldDlgDividendPAR"
					id="txtFldDlgDividendPAR" class="form-control numbers fld-resp-sm applyEvntUsd" 
					 disabled="true" />
                		</div>            
            </div>  
            </div>
      </div>
      
      
      
    <div class="form-group"> 
      <div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right" for="txtFldDlgAnlDivdRate">
                  Dividend Rate
				</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"><!--NOTE:onchange event used here because event is not binding in jquery  -->
           <div class="input-group input-group-sm fld-resp-sm"> 
                <input type="text" name="txtFldDlgAnlDivdRate"
					id="txtFldDlgAnlDivdRate" onmouseover="fipaTooltip(this);"   
					class='form-control numbers applyEvntpCent3' onchange="calcDividendAmount($('#txtFldDlgAnlDivdRate'),$('#selDlgDivdPaymode'),$('#selDlgDivdBasedOn'),$('#selDlgDivdReInv'),$('#txtFldDlgDividendPAR'),$('#txtFldDlgInvNAV'),$('#selDlgDividendAmt'))" />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolprCent"></span> 
				       </div>
                		</div>  
                		
<!-- 		<div class="input-group input-group-sm fld-resp-sm">  -->
<!--                 <input type="text" name="txtFldDlgAnlDivdRate" id="txtFldDlgAnlDivdRate" onmouseover="fipaTooltip(this);"    -->
<!-- 					class="form-control numbers applyEvntpCent3" disabled="true" /> -->
<!-- 					<div class="input-group-addon"> -->
<!-- 				       <span class="glyphicon" id="symbolprCent"></span>  -->
<!-- 				       </div> -->
<!--                 		</div>                -->
            </div> 
           </div>
      </div>
       
       
    <div class="form-group"> 
      <div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right" for="selDlgDivdPaymode">
                  Dividend Payment Mode
				</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select name="selDlgDivdPaymode" id="selDlgDivdPaymode" class="form-control fld-resp-mm" disabled="true">
					<option value="">--SELECT--</option>
					<c:if test="${not empty LI_PAYMENTS_LIST}">
						<c:forEach var="payment" items="${LI_PAYMENTS_LIST}">
							<option value="${payment}">${payment}</option>
						</c:forEach>
					</c:if>
				</select>               
            </div>
            </div>  
      </div>
      
      
      
      
      
      
      
      
      
      <div class="form-group"> 
        <div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right" for="selDlgDividendAmt">
                  Dividend Amount per Annum($)&nbsp;
                  <a class="btn btn-default addinfoicon" id="popselDlgDividendAmt"  ></a>
				</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm">
				       <div class="input-group-addon">
				       <span class="glyphicon" id="symbolUsd"></span> 
				       </div>
                <input type="text" 	onmouseover="fipaTooltip(this);"  name="selDlgDividendAmt"
					id="selDlgDividendAmt" class="form-control numbers fld-resp-sm applyEvntUsd" 
					 disabled="true" />
                		</div>            
            </div>  
            </div>
      </div>
      
      
      
      </div>
      
        </div>
        </div>
        </fieldset>
      </div>
     
             
      </div>
      
      
      <div class="col-md-4">
      <div class="form-group">
      <fieldset  id="invplan"><legend class="customFIPAStyle">Regular Investment Plan</legend>
      
      <div class="col-md-12">   
            <!-- 1 -->
       <div class="form-group"> 
      <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="txtFldDlgAnyRegInvPlan"> 
                 Any reg. inv. plan</label>
				</div>
				<div class="col-md-6"> 
				 <select name="txtFldDlgAnyRegInvPlan"
					id="txtFldDlgAnyRegInvPlan" class="form-control fld-resp-sm" >
					<option value="">--SELECT--</option>
					<option value="Y">Yes</option>
					<option value="N">No</option>
				</select>
				</div>	 
            </div> 
            </div>
            
            
            <div class="form-group"> 
      <div class="row">
	<div class="col-md-6"> 
              <label class="control-label  pull-right text-right" for="txtFldDlgAnyRegInvPlanAmt">RSP Amount
                </label>
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm">
				       <div class="input-group-addon">
				       <span class="glyphicon" id="symbolUsd"></span> 
				       </div>
                <input type="text" 	onmouseover="fipaTooltip(this);"  name="txtFldDlgAnyRegInvPlanAmt"
					id="txtFldDlgAnyRegInvPlanAmt" class="form-control numbers fld-resp-sm applyEvntUsd" 
					 disabled="true" />
                		</div>         
				</div>	 
            </div> 
            </div>
            
            <div class="form-group"> 
      <div class="row">
	<div class="col-md-6"> 
            <label class="control-label pull-right text-right" for="selDlgInvFreq">Frequency</label>
				</div>
				<div class="col-md-6"> 
				<select name="selDlgInvFreq"
					id="selDlgInvFreq" class="form-control fld-resp-mm" disabled="true">
					<option value="">--SELECT--</option>
					<c:if test="${not empty LI_PAYMENTS_LIST}">
						<c:forEach var="payment" items="${LI_PAYMENTS_LIST}">
							<option value="${payment}">${payment}</option>
						</c:forEach>
					</c:if>
				</select>            
				</div>	 
            </div> 
            </div>
             
            
            
        <div class="form-group"> 
      <div class="row">
	<div class="col-md-6"> 
            <label class="control-label pull-right text-right" 
                    for="txtFldDlgNoOfYrsRegInv">
                   No.of Yrs of Regular Investment </label>	
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm fld-resp-sm">
				       
                <input type="text" onmouseover="fipaTooltip(this);"  name="txtFldDlgNoOfYrsRegInv"
					id="txtFldDlgNoOfYrsRegInv" class="form-control numbers applyEvntYrs" 
					disabled="true"/>
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolYrs"></span> 
				       </div>
				       </div>       
				</div>	 
            </div> 
            </div>
             
            <div class="form-group hidden"> 
      <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right  text-right"
                     for="txtFldDlgTotNoOfYrsStayInv">Tot No.of Yrs to Stay Invested</label>
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm fld-resp-sm">
				       
                <input type="text" onmouseover="fipaTooltip(this);" name="txtFldDlgTotNoOfYrsStayInv"
					id="txtFldDlgTotNoOfYrsStayInv" class="form-control numbers applyEvntYrs" disabled="true"
					 />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolYrs"></span> 
				       </div> 
				       </div>        
				</div>	 
            </div> 
            </div>
              
             
      </div>
       
      
      </fieldset>
      </div>
      </div>
      
      <div class="col-md-4"> 
      <fieldset  id="investmentobj"><legend class="customFIPAStyle">Investment Objective</legend> 
     
      <div class="col-md-12" style="min-height: 227px;">  
            <!-- 3part  -->
             <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
            <label class="control-label pull-right text-right" for="selDlgInvObjInvst">
                 Obj. of investment 
                 </label>
				</div>
				<div class="col-md-6"> 
			 <select name="selDlgInvObjInvst" id="selDlgInvObjInvst" class="form-control"	 >
					<option value="">--SELECT--</option>
					<c:if test="${not empty INV_OBJOFINS_LIST}">
						<c:forEach var="typesofinvst" items="${INV_OBJOFINS_LIST}">
							<option value="${typesofinvst}">${typesofinvst}</option>
						</c:forEach>
					</c:if>
				</select>
				</div> 
            </div> 
            </div>
            
            
            <div class="form-group" id="invNameofChilddiv" style="display:none" >
            <div class="row">
		<div class="col-md-6"> 
           <label class="control-label pull-right text-right" for="selDlgInvNameOfChild">
                    Name of child</label>
				</div>
				<div class="col-md-6"> 
			<select name="selDlgInvNameOfChild"
					id="selDlgInvNameOfChild" class="form-control"  >
					<option value="">--SELECT--</option>
					</select>
						<small class="chkchildexist hidden">No child found!</small>
				</div> 
            </div> 
            </div>
            
            
            <div class="form-group" id="invChildYrtoterdiv"  style="display:none" > 
      <div class="row">
	<div class="col-md-6"> 
             <label id="objofinvlabelchange" class="control-label pull-right text-right" for="selDlgInvYrToRet">
                    Years to Tertiary 
                   <!--  Yrs in Tertiary Education -->
                   </label>
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm fld-resp-mm"> 
                <input type="text" onmouseover="fipaTooltip(this);"  name="selDlgInvYrToRet"
					id="selDlgInvYrToRet" class="form-control numbers applyEvntYrs" 
					 />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolYrs"></span> 
				       </div>
				       </div>      
				</div>	
				<div id="alertRetyrMsg" class="hidden">
      <span class="alertmessage"><img src="images/menuicons/canvas.png" width="6%"/>
      Yr to Retirement value exceeds from Retirement Screen value</span>
      <div class="clearspace20"></div>
      </div> 
            </div> 
            </div>
            
            <div id="invPerOfAccmldiv"  style="display:none"> 
            <div class="form-group" > 
      <div class="row">
	<div class="col-md-6"> 
            <label class="control-label pull-right text-right" for="selDlgInvPercntAcc">
                   % of accumulation</label>
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm fld-resp-sm"> 
                <input type="text" name="selDlgInvPercntAcc"
					id="selDlgInvPercntAcc" onmouseover="fipaTooltip(this);"   
					class="form-control numbers applyEvntpCent3" />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolprCent"></span> 
				       </div>
                		</div>       
				</div>	 
            </div> 
            </div>
            
            
           
           </div>
           
            <div class="form-group" id="divInvPerd" style="display:none"> 
      <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="selDlgInvDivPeriod">
                   Period of investment</label>
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm fld-resp-mm"> 
                <input type="text" onmouseover="fipaTooltip(this);"  name="selDlgInvDivPeriod"
					id="selDlgInvDivPeriod" class="form-control numbers applyEvntYrs" 
					 />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolYrs"></span> 
				       </div>
				       </div>      
				</div>	 
            </div> 
            </div>
             
             
      </div> 
      </fieldset>
      <fieldset  id="dstrsbplan"><legend class="customFIPAStyle">Disbursement Plan</legend>
      
      <div class="col-md-12" style="min-height: 160px;">   
            <!-- 1 -->
       <div class="form-group"> 
      <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="txtFldDlgBscDsbrseOf"> 
                 Basis of Disbursement of Investment after end of Investment period</label>
				</div>
				<div class="col-md-6"> 
				 <select name="txtFldDlgBscDsbrseOf"
					id="txtFldDlgBscDsbrseOf" class="form-control fld-resp-sm" >
					<option value="">--SELECT--</option>
					<option value="Years">No of Years</option>
					<option value="Amount">Amount</option>
				</select>
				</div>	 
            </div> 
            </div>
            
            
            <div class="form-group hidden" id="disburseAmtdiv"> 
      <div class="row">
	<div class="col-md-6"> 
              <label class="control-label  pull-right text-right" for="txtFldDlgDsbsAmt">Amount
                </label>
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm">
				       <div class="input-group-addon">
				       <span class="glyphicon" id="symbolUsd"></span> 
				       </div>
                <input type="text" 	onmouseover="fipaTooltip(this);"  name="txtFldDlgDsbsAmt"
					id="txtFldDlgDsbsAmt" class="form-control numbers fld-resp-sm applyEvntUsd"  />
                		</div>         
				</div>	 
            </div> 
            </div>
            
             
            
            
        <div class="form-group hidden"  id="disburseYrdiv"> 
      <div class="row">
	<div class="col-md-6"> 
            <label class="control-label pull-right text-right" 
                    for="txtFldDlgDsbsYrs">
                   Years of Disbursement </label>	
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm fld-resp-sm">
				       
                <input type="text" onmouseover="fipaTooltip(this);"  name="txtFldDlgDsbsYrs"
					id="txtFldDlgDsbsYrs" class="form-control numbers applyEvntYrs" 
					disabled="true"/>
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolYrs"></span> 
				       </div>
				       </div>       
				</div>	 
            </div> 
            </div>
               
      </div>
       
      
      </fieldset>
      
      
      
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
					     <!-- <button type="button" id="investCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div> 


<!-- Thulasy Added on 14/11/2018 -->
<div id="generateItSelf"  style="display:none">
<table id="genInvSumrySelf"  class="dataTable table-bordered table-striped display hover" style="width:100%;" > 
		 <thead> 
		  <tr class="hidden">  
		   <th colspan="8"><div style="text-align:left">
		  <input type="text" class="form-control fld-resp-md readOlyCursor" readonly="true" id="txtFldISOwnership" style="background:#a8d4fa;font-weight: bold;border:none"></div></th>
		  </tr>
		 <tr >
			<th colspan="2"><div style="text-align:center">Investment Type</div></th>
			<th><div style="text-align:center">Cash<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">CPFOA<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">CPFSA<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">CPFRA<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">SRS<small><small>($)</small></small></div></th>
			<th ><div style="text-align:center">Total<small><small>($)</small></small></div></th>  
		</tr>
		</thead> 
		<tbody>
		<tr> 
			<td rowspan="2"><div style="text-align:center">Bonds<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsCurCash" name="txtFldISSelfbondsCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsCurCpfoa" name="txtFldISSelfbondsCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsCurCpfsa" name="txtFldISSelfbondsCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsCurCpfra" name="txtFldISSelfbondsCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsCursrs" name="txtFldISSelfbondsCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsCurTot" name="txtFldISSelfbondsCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsRegCash" name="txtFldISSelfbondsRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsRegCpfoa" name="txtFldISSelfbondsRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsRegCpfsa" name="txtFldISSelfbondsRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsRegCpfra" name="txtFldISSelfbondsRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsRegsrs" name="txtFldISSelfbondsRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfbondsRegTot" name="txtFldISSelfbondsRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Dividends<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivCurCash" name="txtFldISSelfdivCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivCurCpfoa" name="txtFldISSelfdivCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivCurCpfsa" name="txtFldISSelfdivCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivCurCpfra" name="txtFldISSelfdivCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivCursrs" name="txtFldISSelfdivCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivCurTot" name="txtFldISSelfdivCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivRegCash" name="txtFldISSelfdivRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivRegCpfoa" name="txtFldISSelfdivRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivRegCpfsa" name="txtFldISSelfdivRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivRegCpfra" name="txtFldISSelfdivRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivRegsrs" name="txtFldISSelfdivRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfdivRegTot" name="txtFldISSelfdivRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">ILP<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpCurCash" name="txtFldISSelfilpCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpCurCpfoa" name="txtFldISSelfilpCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpCurCpfsa" name="txtFldISSelfilpCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpCurCpfra" name="txtFldISSelfilpCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpCursrs" name="txtFldISSelfilpCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpCurTot" name="txtFldISSelfilpCurTot"   readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpRegCash" name="txtFldISSelfilpRegCash"   readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpRegCpfoa" name="txtFldISSelfilpRegCpfoa"   readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpRegCpfsa" name="txtFldISSelfilpRegCpfsa"   readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfilpRegCpfra" name="txtFldISSelfilpRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfilpRegsrs" name="txtFldISSelfilpRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfilpRegTot" name="txtFldISSelfilpRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Shares<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesCurCash" name="txtFldISSelfsharesCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesCurCpfoa" name="txtFldISSelfsharesCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesCurCpfsa" name="txtFldISSelfsharesCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesCurCpfra" name="txtFldISSelfsharesCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesCursrs" name="txtFldISSelfsharesCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesCurTot" name="txtFldISSelfsharesCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesRegCash" name="txtFldISSelfsharesRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesRegCpfoa" name="txtFldISSelfsharesRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesRegCpfsa" name="txtFldISSelfsharesRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesRegCpfra" name="txtFldISSelfsharesRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesRegsrs" name="txtFldISSelfsharesRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfsharesRegTot" name="txtFldISSelfsharesRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Stocks<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksCurCash" name="txtFldISSelfstocksCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksCurCpfoa" name="txtFldISSelfstocksCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksCurCpfsa" name="txtFldISSelfstocksCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksCurCpfra" name="txtFldISSelfstocksCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksCursrs" name="txtFldISSelfstocksCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksCurTot" name="txtFldISSelfstocksCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksRegCash" name="txtFldISSelfstocksRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksRegCpfoa" name="txtFldISSelfstocksRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksRegCpfsa" name="txtFldISSelfstocksRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksRegCpfra" name="txtFldISSelfstocksRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksRegsrs" name="txtFldISSelfstocksRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfstocksRegTot" name="txtFldISSelfstocksRegTot"  readonly="true"></div></td> 
		</tr>
		 
		 <tr> 
			<td rowspan="2"><div style="text-align:center">UT<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfutsCurCash" name="txtFldISSelfutsCurCash" readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfutsCurCpfoa" name="txtFldISSelfutsCurCpfoa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfutsCurCpfsa" name="txtFldISSelfutsCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfutsCurCpfra" name="txtFldISSelfutsCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfutsCursrs" name="txtFldISSelfutsCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfutsCurTot" name="txtFldISSelfutsCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfutsRegCash" name="txtFldISSelfutsRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfutsRegCpfoa" name="txtFldISSelfutsRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfutsRegCpfsa" name="txtFldISSelfutsRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfutsRegCpfra" name="txtFldISSelfutsRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSelfutsRegsrs" name="txtFldISSelfutsRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield"  id="txtFldISSelfutsRegTot" name="txtFldISSelfutsRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Others<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersCurCash" name="txtFldISSelfothersCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersCurCpfoa" name="txtFldISSelfothersCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersCurCpfsa" name="txtFldISSelfothersCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersCurCpfra" name="txtFldISSelfothersCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersCursrs" name="txtFldISSelfothersCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersCurTot" name="txtFldISSelfothersCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersRegCash" name="txtFldISSelfothersRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersRegCpfoa" name="txtFldISSelfothersRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersRegCpfsa" name="txtFldISSelfothersRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersRegCpfra" name="txtFldISSelfothersRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersRegsrs" name="txtFldISSelfothersRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelfothersRegTot" name="txtFldISSelfothersRegTot"  readonly="true"></div></td> 
		</tr>
		
		
		
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Total<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotCurCash" name="txtFldISSelftotCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotCurCpfoa" name="txtFldISSelftotCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotCurCpfsa" name="txtFldISSelftotCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotCurCpfra" name="txtFldISSelftotCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotCursrs" name="txtFldISSelftotCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center;display:none;"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelftotCurTot" name="txtFldISSelftotCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotRegCash" name="txtFldISSelftotRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotRegCpfoa" name="txtFldISSelftotRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotRegCpfsa" name="txtFldISSelftotRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotRegCpfra" name="txtFldISSelftotRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSelftotRegsrs" name="txtFldISSelftotRegsrs"  readonly="true"></div></td>  
			<td ><div style="text-align:center;display:none;"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSelftotRegTot" name="txtFldISSelftotRegTot"  readonly="true"></div></td> 
		</tr>
		</tbody>
		
		</table>
 
</div>

<div id="generateItSpouse"  style="display:none">
<table id="genInvSumrySpouse"  class="dataTable table-bordered table-striped display hover" style="width:100%;" > 
		 <thead> 
		  <tr class="hidden">  
		   <th colspan="8"><div style="text-align:left">
		  <input type="text" class="form-control fld-resp-md  readOlyCursor" readonly="true" id="txtFldISOwnership" style="background:#a8d4fa;font-weight: bold;border:none"></div></th>
		  </tr>
		 <tr >
			<th colspan="2"><div style="text-align:center">Investment Type</div></th>
			<th><div style="text-align:center">Cash<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">CPFOA<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">CPFSA<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">CPFRA<small><small>($)</small></small></div></th>
			<th><div style="text-align:center">SRS<small><small>($)</small></small></div></th>
			<th ><div style="text-align:center">Total<small><small>($)</small></small></div></th>  
		</tr>
		</thead> 
		<tbody> 
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Bonds<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsCurCash" name="txtFldISSpsbondsCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsCurCpfoa" name="txtFldISSpsbondsCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsCurCpfsa" name="txtFldISSpsbondsCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsCurCpfra" name="txtFldISSpsbondsCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsCursrs" name="txtFldISSpsbondsCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsCurTot" name="txtFldISSpsbondsCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsRegCash" name="txtFldISSpsbondsRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsRegCpfoa" name="txtFldISSpsbondsRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsRegCpfsa" name="txtFldISSpsbondsRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsRegCpfra" name="txtFldISSpsbondsRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsRegsrs" name="txtFldISSpsbondsRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsbondsRegTot" name="txtFldISSpsbondsRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Dividends<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivCurCash" name="txtFldISSpsdivCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivCurCpfoa" name="txtFldISSpsdivCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivCurCpfsa" name="txtFldISSpsdivCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivCurCpfra" name="txtFldISSpsdivCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivCursrs" name="txtFldISSpsdivCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivCurTot" name="txtFldISSpsdivCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivRegCash" name="txtFldISSpsdivRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivRegCpfoa" name="txtFldISSpsdivRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivRegCpfsa" name="txtFldISSpsdivRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivRegCpfra" name="txtFldISSpsdivRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivRegsrs" name="txtFldISSpsdivRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsdivRegTot" name="txtFldISSpsdivRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">ILP<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpCurCash" name="txtFldISSpsilpCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpCurCpfoa" name="txtFldISSpsilpCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpCurCpfsa" name="txtFldISSpsilpCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpCurCpfra" name="txtFldISSpsilpCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpCursrs" name="txtFldISSpsilpCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpCurTot" name="txtFldISSpsilpCurTot"   readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpRegCash" name="txtFldISSpsilpRegCash"   readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpRegCpfoa" name="txtFldISSpsilpRegCpfoa"   readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpRegCpfsa" name="txtFldISSpsilpRegCpfsa"   readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsilpRegCpfra" name="txtFldISSpsilpRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsilpRegsrs" name="txtFldISSpsilpRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsilpRegTot" name="txtFldISSpsilpRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Shares<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesCurCash" name="txtFldISSpssharesCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesCurCpfoa" name="txtFldISSpssharesCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesCurCpfsa" name="txtFldISSpssharesCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesCurCpfra" name="txtFldISSpssharesCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesCursrs" name="txtFldISSpssharesCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesCurTot" name="txtFldISSpssharesCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesRegCash" name="txtFldISSpssharesRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesRegCpfoa" name="txtFldISSpssharesRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesRegCpfsa" name="txtFldISSpssharesRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesRegCpfra" name="txtFldISSpssharesRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesRegsrs" name="txtFldISSpssharesRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpssharesRegTot" name="txtFldISSpssharesRegTot"  readonly="true"></div></td> 
		</tr>
		
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Stocks<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksCurCash" name="txtFldISSpsstocksCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksCurCpfoa" name="txtFldISSpsstocksCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksCurCpfsa" name="txtFldISSpsstocksCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksCurCpfra" name="txtFldISSpsstocksCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksCursrs" name="txtFldISSpsstocksCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksCurTot" name="txtFldISSpsstocksCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksRegCash" name="txtFldISSpsstocksRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksRegCpfoa" name="txtFldISSpsstocksRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksRegCpfsa" name="txtFldISSpsstocksRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksRegCpfra" name="txtFldISSpsstocksRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksRegsrs" name="txtFldISSpsstocksRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsstocksRegTot" name="txtFldISSpsstocksRegTot"  readonly="true"></div></td> 
		</tr>
		
		
		
		 <tr> 
			<td rowspan="2"><div style="text-align:center">UT<small><small>($)</small></small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsutsCurCash" name="txtFldISSpsutsCurCash" readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsutsCurCpfoa" name="txtFldISSpsutsCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsutsCurCpfsa" name="txtFldISSpsutsCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsutsCurCpfra" name="txtFldISSpsutsCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsutsCursrs" name="txtFldISSpsutsCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsutsCurTot" name="txtFldISSpsutsCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsutsRegCash" name="txtFldISSpsutsRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsutsRegCpfoa" name="txtFldISSpsutsRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsutsRegCpfsa" name="txtFldISSpsutsRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsutsRegCpfra" name="txtFldISSpsutsRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISSpsutsRegsrs" name="txtFldISSpsutsRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield"  id="txtFldISSpsutsRegTot" name="txtFldISSpsutsRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Others<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersCurCash" name="txtFldISSpsothersCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersCurCpfoa" name="txtFldISSpsothersCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersCurCpfsa" name="txtFldISSpsothersCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersCurCpfra" name="txtFldISSpsothersCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersCursrs" name="txtFldISSpsothersCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersCurTot" name="txtFldISSpsothersCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersRegCash" name="txtFldISSpsothersRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersRegCpfoa" name="txtFldISSpsothersRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersRegCpfsa" name="txtFldISSpsothersRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersRegCpfra" name="txtFldISSpsothersRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersRegsrs" name="txtFldISSpsothersRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpsothersRegTot" name="txtFldISSpsothersRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Total<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotCurCash" name="txtFldISSpstotCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotCurCpfoa" name="txtFldISSpstotCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotCurCpfsa" name="txtFldISSpstotCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotCurCpfra" name="txtFldISSpstotCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotCursrs" name="txtFldISSpstotCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center;display:none;"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpstotCurTot" name="txtFldISSpstotCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotRegCash" name="txtFldISSpstotRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotRegCpfoa" name="txtFldISSpstotRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotRegCpfsa" name="txtFldISSpstotRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotRegCpfra" name="txtFldISSpstotRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISSpstotRegsrs" name="txtFldISSpstotRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center;display:none;"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISSpstotRegTot" name="txtFldISSpstotRegTot"  readonly="true"></div></td> 
		</tr>
		</tbody>
		
		</table>
 
</div>

<div id="generateItFamily"  style="display:none">
<table id="genInvSumryFamily"  class="dataTable table-bordered table-striped display hover" style="width:100%;" > 
		 <thead> 
		  <tr class="hidden">  
		   <th colspan="8"><div style="text-align:left">
		  <input type="text" class="form-control fld-resp-md readOlyCursor" readonly="true" id="txtFldISOwnership" style="background:#a8d4fa;font-weight: bold;border:none"></div></th>
		  </tr>
		 <tr >
			<th colspan="2"><div style="text-align:center">Investment Type</div></th>
			<th><div style="text-align:center">Cash<small>($)</small></div></th>
			<th><div style="text-align:center">CPFOA<small>($)</small></div></th>
			<th><div style="text-align:center">CPFSA<small>($)</small></div></th>
			<th><div style="text-align:center">CPFRA<small>($)</small></div></th>
			<th><div style="text-align:center">SRS<small>($)</small></div></th>
			<th ><div style="text-align:center">Total<small>($)</small></div></th>  
		</tr>
		</thead> 
		<tbody> 
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Bonds<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsCurCash" name="txtFldISFambondsCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsCurCpfoa" name="txtFldISFambondsCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsCurCpfsa" name="txtFldISFambondsCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsCurCpfra" name="txtFldISFambondsCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsCursrs" name="txtFldISFambondsCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFambondsCurTot" name="txtFldISFambondsCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsRegCash" name="txtFldISFambondsRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsRegCpfoa" name="txtFldISFambondsRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsRegCpfsa" name="txtFldISFambondsRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsRegCpfra" name="txtFldISFambondsRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsRegsrs" name="txtFldISFambondsRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFambondsRegTot" name="txtFldISFambondsRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Dividends<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivCurCash" name="txtFldISFamdivCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivCurCpfoa" name="txtFldISFamdivCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivCurCpfsa" name="txtFldISFamdivCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivCurCpfra" name="txtFldISFamdivCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivCursrs" name="txtFldISFamdivCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivCurTot" name="txtFldISFamdivCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivRegCash" name="txtFldISFamdivRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivRegCpfoa" name="txtFldISFamdivRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivRegCpfsa" name="txtFldISFamdivRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivRegCpfra" name="txtFldISFamdivRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivRegsrs" name="txtFldISFamdivRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamdivRegTot" name="txtFldISFamdivRegTot"  readonly="true"></div></td> 
		</tr>
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">ILPs<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpCurCash" name="txtFldISFamilpCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpCurCpfoa" name="txtFldISFamilpCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpCurCpfsa" name="txtFldISFamilpCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpCurCpfra" name="txtFldISFamilpCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpCursrs" name="txtFldISFamilpCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpCurTot" name="txtFldISFamilpCurTot"   readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpRegCash" name="txtFldISFamilpRegCash"   readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpRegCpfoa" name="txtFldISFamilpRegCpfoa"   readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpRegCpfsa" name="txtFldISFamilpRegCpfsa"   readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamilpRegCpfra" name="txtFldISFamilpRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamilpRegsrs" name="txtFldISFamilpRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamilpRegTot" name="txtFldISFamilpRegTot"  readonly="true"></div></td> 
		</tr>
		<tr> 
			<td rowspan="2"><div style="text-align:center">Shares<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesCurCash" name="txtFldISFamsharesCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesCurCpfoa" name="txtFldISFamsharesCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesCurCpfsa" name="txtFldISFamsharesCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesCurCpfra" name="txtFldISFamsharesCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesCursrs" name="txtFldISFamsharesCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesCurTot" name="txtFldISFamsharesCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesRegCash" name="txtFldISFamsharesRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesRegCpfoa" name="txtFldISFamsharesRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesRegCpfsa" name="txtFldISFamsharesRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesRegCpfra" name="txtFldISFamsharesRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesRegsrs" name="txtFldISFamsharesRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamsharesRegTot" name="txtFldISFamsharesRegTot"  readonly="true"></div></td> 
		</tr>
		<tr> 
			<td rowspan="2"><div style="text-align:center">Stocks<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksCurCash" name="txtFldISFamstocksCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksCurCpfoa" name="txtFldISFamstocksCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksCurCpfsa" name="txtFldISFamstocksCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksCurCpfra" name="txtFldISFamstocksCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksCursrs" name="txtFldISFamstocksCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksCurTot" name="txtFldISFamstocksCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksRegCash" name="txtFldISFamstocksRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksRegCpfoa" name="txtFldISFamstocksRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksRegCpfsa" name="txtFldISFamstocksRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksRegCpfra" name="txtFldISFamstocksRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksRegsrs" name="txtFldISFamstocksRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamstocksRegTot" name="txtFldISFamstocksRegTot"  readonly="true"></div></td> 
		</tr>
		 <tr> 
			<td rowspan="2"><div style="text-align:center">UTs<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamutsCurCash" name="txtFldISFamutsCurCash" readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamutsCurCpfoa" name="txtFldISFamutsCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamutsCurCpfsa" name="txtFldISFamutsCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamutsCurCpfra" name="txtFldISFamutsCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamutsCursrs" name="txtFldISFamutsCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamutsCurTot" name="txtFldISFamutsCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamutsRegCash" name="txtFldISFamutsRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamutsRegCpfoa" name="txtFldISFamutsRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamutsRegCpfsa" name="txtFldISFamutsRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamutsRegCpfra" name="txtFldISFamutsRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield"  id="txtFldISFamutsRegsrs" name="txtFldISFamutsRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield"  id="txtFldISFamutsRegTot" name="txtFldISFamutsRegTot"  readonly="true"></div></td> 
		</tr>
		<tr> 
			<td rowspan="2"><div style="text-align:center">Others<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersCurCash" name="txtFldISFamothersCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersCurCpfoa" name="txtFldISFamothersCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersCurCpfsa" name="txtFldISFamothersCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersCurCpfra" name="txtFldISFamothersCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersCursrs" name="txtFldISFamothersCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamothersCurTot" name="txtFldISFamothersCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersRegCash" name="txtFldISFamothersRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersRegCpfoa" name="txtFldISFamothersRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersRegCpfsa" name="txtFldISFamothersRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersRegCpfra" name="txtFldISFamothersRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamothersRegsrs" name="txtFldISFamothersRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center"><input type="text" class=" form-control numbers applyEvntUsd transfield" id="txtFldISFamothersRegTot" name="txtFldISFamothersRegTot"  readonly="true"></div></td> 
		</tr>
		
		
		
		<tr> 
			<td rowspan="2"><div style="text-align:center">Total<small>($)</small></div></td> 
			<td><div style="text-align:center">Current<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotCurCash" name="txtFldISFamtotCurCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotCurCpfoa" name="txtFldISFamtotCurCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotCurCpfsa" name="txtFldISFamtotCurCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotCurCpfra" name="txtFldISFamtotCurCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotCursrs" name="txtFldISFamtotCursrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center;display:none;"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotCurTot" name="txtFldISFamtotCurTot"  readonly="true"></div></td>  
		</tr>
		<tr> 
			<td><div style="text-align:center">Regular<small>($)</small></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotRegCash" name="txtFldISFamtotRegCash"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotRegCpfoa" name="txtFldISFamtotRegCpfoa"  readonly="true"></div></td>
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotRegCpfsa" name="txtFldISFamtotRegCpfsa"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotRegCpfra" name="txtFldISFamtotRegCpfra"  readonly="true"></div></td> 
			<td><div style="text-align:center"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotRegsrs" name="txtFldISFamtotRegsrs"  readonly="true"></div></td> 
			<td ><div style="text-align:center;display:none;"><input type="text" class="form-control numbers applyEvntUsd transfield" id="txtFldISFamtotRegTot" name="txtFldISFamtotRegTot"  readonly="true"></div></td> 
		</tr>
		</tbody>
		
		</table>
 
</div>
<!--  class="hidden" -->
<div  class="hidden">
<table id="AutoAlterTbl" class="dataTable table-bordered table-striped display hover" style="width:100%" >
							<thead>
								<tr>
									<th>#</th> 
									<th><div style="width:200px;">Model UId</div></th>
									<th><div style="width:80px;">Attribute Name</div></th> 
									<th><div style="width:100px;">Attribute Original Value</div></th>  
									<th><div style="width:100px;">Attribute New Value</div></th>
					     		</tr>							 
							</thead>
					<tbody>
					</tbody>							 
						</table>

</div>

 
 
