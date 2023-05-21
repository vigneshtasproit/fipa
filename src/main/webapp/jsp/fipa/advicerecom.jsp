<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div id="accordion" class="panel-group">
	<div id="adrecomprodiv" class="accord-content">
		<span class="panelHeaderTitle"> 
			 Advice & Recommendations  
		</span>
		 <br>
		<div class="panel-body">
		
		<span class="panelHeaderSubTitle" style="margin-left:0;">Products Recommended <br>
				<small>Recommendations made are
				dependent upon the completeness and accuracy of the information
				furnished by you.</small></span>
				
		<br/><br/>		
		
			<fieldset class="fieldsetClsborder"> 
				<br>
				 <div class="table-responsive"> 
				 <table class="table table-borderless table-hover">
				 <tr>
						<td>
						<div class="checkbox checkbox-primary">
                   <input type="checkbox"  id="chkArNewRecomFam" name="chkArNewRecom"
							onclick="setChkBoxValue(this)" data-attr="FAMINCPRO"/>
							<label class="control-label" for="chkArNewRecomFam">Protection Needs</label>
                    </div>
                    
                    <td><div class="checkbox checkbox-primary">
                   <input type="checkbox" name="chkArNewRecom" id="chkArNewRecomEdu" data-attr="RECSVEDU"
							onclick="setChkBoxValue(this)" />
							<label class="control-label" for="chkArNewRecomEdu">Savings Needs / Wealth Accumulation</label>
                    </div> 
                    </td>
                    
                    <td><div class="checkbox checkbox-primary">
                  <input type="checkbox" name="chkArNewRecom" id="chkArNewRecomRet" data-attr="RECRETRMT"
							onclick="setChkBoxValue(this)" />
							<label class="control-label" for="chkArNewRecomRet">Retirement</label>
                    </div> 
                    </td>
                     
					<td><div class="checkbox checkbox-primary">
                   <input type="checkbox" name="chkArNewRecom" id="chkArNewRecomMed" data-attr="MEDDISINC"
							onclick="setChkBoxValue(this)" />
					<label class="control-label" for="chkArNewRecomMed">  Health Insurance Needs</label>
                    </div> 
                    </td>
                    
                     <td><div class="checkbox checkbox-primary">
                  <input type="checkbox" name="chkArNewRecom" id="chkArNewRecomInv" data-attr="RECINVST"
							onclick="setChkBoxValue(this)" />
							<label class="control-label" for="chkArNewRecomInv">Investment</label>
                    </div> 
                    </td>
                    
					
					 <td><div class="checkbox checkbox-primary" style="display:none;">
                  <input type="checkbox" name="chkArNewRecom" id="chkArNewRecomOth" data-attr="RECOTHRS" onclick="setChkBoxValue(this)" />
							<label class="control-label" for="chkArNewRecomOth">Others</label>
                    </div> 
                    </td> 
					</tr>
				 
				 </table>
				 <input type="hidden" name="arNewRecomm" id="arNewRecomm" >  
				</div>
				<br>
			</fieldset>
			<div class="clearspace40"></div>
			
 <!--  Products Recommended  -->
				<span class="panelHeaderSubTitle">FOR LIFE & HEALTH INSURANCE (PLAN DETAILS)</span>

			<div class="table-responsive">
<!-- 			style="display:none" -->
				<div class="btn-group pull-right funcToDisable" role="group" id="lifeInsurancePlanDets" >
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="ArtuPlanARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="ArtuPlanERow"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="ArtuPlanDRow"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="ArtuPlanVRow"></button> -->
					 </div>
				</div>
				 
				<table class="dataTable table-bordered table-striped display hover" id="fnaartuplanTbl" style="width:100%" >
					<thead>
						<tr>
							<th><div style="width:30px;">#</div></th> 
							<th><div style="width:60px;">Select</div></th>
							<th><div style="width:90px;">Product LOB</div></th>
							<th><div style="width:170px;">Company</div>
							</th>
							<th><div style="width:170px;">Product Name</div>
							</th>
							<th><div style="width:90px;">Product Type</div>
							</th>
							<th><div style="width:170px;">Sum Assured / Benefit<small>($)</small></div>
							</th>
							<th><div style="width:90px;">Payment Method</div></th>
							<th><div style="width:90px;">Plan Term <small>(yrs)</small></div>
							</th>
							<th><div style="width:170px;">Payment Term<small>(yrs)</small></div>
							</th>
							<th><div style="width:150px;">Premium(Optional)<small>($)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table> 
			


			<div class="clearspace40"></div>
			
			
			<span class="panelHeaderSubTitle"> For UT and ILP (PRODUCT/FUND DETAILS) </span>

			<div class="table-responsive">
				<div class="btn-group pull-right funcToDisable" role="group" id="UtIlpFundDets" >
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="ArtuFundARow"></button>
						<button type="button"   class="btn btn-default navbar-btn editRow-icon" id="ArtuFundERow"></button>
						<button type="button"    class="btn btn-default navbar-btn delRow-icon" id="ArtuFundDRow"></button>
<!-- 						<button type="button"   class="btn btn-default navbar-btn viewRow-icon" id="ArtuFundVRow"></button> -->
				</div>   
				<div class="col-md-12"> 
					<div class="col-md-4">
					<span class="control-label pull-right">Investment
					Advisory Fee (IAF)&nbsp;</span>
					</div>
					<div class="col-md-4">
					<div class="input-group input-group-sm"> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
						<input type="text" onmouseover="fipaTooltip(this);" 
							name="txtFldRecomFfIaffee" id="txtFldRecomFfIaffee"
							class="form-control fld-resp-md numbers applyEvntUsd"
							style="color: #161616; font-weight: normal;"  
							 />
							</div>
					
					</div>
					<div class="col-md-4 pull-right">
					&nbsp;for <span class="fipaFldLblTextbold">PAM</span>
							investment
					</div>
					 
				</div>
				</div>
				<br> 
				 
				<table class="dataTable table-bordered table-striped display hover"
					id="fnaartufundTbl" style="width:100%" >
					<thead>

						<tr>
							<th rowspan="2"><div style="width:30px;">#</div></th> 
							<th rowspan="2"><div style="width:50px;">Select</div></th>
							<th rowspan="2"><div style="width:90px;">Product LOB</div></th>
							<th rowspan="2"><div style="width:180px;">Fund Manager</div></th>
							<th rowspan="2"><div style="width:180px;">Fund</div></th>
							<th rowspan="2"><div style="width:180px;">Avallis Fund Risk Rating</div></th>
							<th rowspan="2"><div style="width:90px;">Payment Method</div></th>
							<th colspan="3"><div style="width:370px;text-align: center">Purchase</div></th>
						</tr>
						<tr>
							<th><div style="width:100px;">Sales Charges %</div></th>
							<th><div style="width:100px;">Amount $</div></th>
							<th><div style="width:100px;">Purchase %</div></th>
						</tr>

					</thead>
					<tbody></tbody>
				</table> 
			</div>

		</div>
	</div>


 <!-- Modal  -->
<div class="modal fade" id="RecomPPlan_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
        <span class="popupheader">
    <img src="images/menuicons/canvas.png" class="info" width="5%" ><small>
		All fields marked in maroon are required</small></span>
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60">
     
		<div class="col-md-6"> 
		<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpProdType"><font color="maroon">Product
							LOB  </font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <select class="form-control fld-resp-md" name="txtFldDlgRecomPpProdType"
							id="txtFldDlgRecomPpProdType"  
							onmouseover="fipaTooltip(this);"    autofocus="true">
							<option value="">--SELECT--</option>
							<c:if test="${not empty PROTYPEPLN_LIST}">
								<c:forEach var="prodtypepln" items="${PROTYPEPLN_LIST}">
									<option value="${prodtypepln}">${prodtypepln}</option>
								</c:forEach>
							</c:if>
						</select>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpCompany"><font color="maroon">Company
					</font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input type="text" id="txtFldDlgRecomPpCompany"
					name="txtFldDlgRecomPpCompany" class="form-control fld-resp-md"
					 maxlength="60"  onmouseover="fipaTooltip(this);" />
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpProdName"><font color="">
							Product Name  </font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input id="txtFldDlgRecomPpProdName"
					name="txtFldDlgRecomPpProdName" class="form-control fld-resp-md"
					type="text" maxlength="20"  onmouseover="fipaTooltip(this);" />
            </div> 
            </div>
      </div>
      
         <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="selFldDlgRecomPpBasRid"><font color="">Product Type
					</font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <select id="selFldDlgRecomPpBasRid" name="selFldDlgRecomPpBasRid" class="form-control fld-resp-md" onmouseover="fipaTooltip(this);">
            <option value="">--SELECT--</option>
            <option value="B">Basic</option>
            <option value="R">Rider</option>
          </select>  
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpSumAssr">Sum Assured / Benefit </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md"> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
				 <input type='text' onmouseover="fipaTooltip(this);"  
					class="form-control numbers applyEvntUsd" id="txtFldDlgRecomPpSumAssr"
					name="txtFldDlgRecomPpSumAssr"  />
					</div> 
            </div> 
            </div>
      </div>
      
  </div>
       
      <div class="col-md-6">
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpPayMode">Payment Method  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <select class="form-control fld-resp-md"
					name="txtFldDlgRecomPpPayMode" id="txtFldDlgRecomPpPayMode"
					onmouseover="fipaTooltip(this);"  >
						<option value="">--SELECT--</option>
						<c:if test="${not empty PAYMENTMODE_LIST}">
							<c:forEach var="paymentmode" items="${PAYMENTMODE_LIST}">
								<option value="${paymentmode}">${paymentmode}</option>
							</c:forEach>
						</c:if>
				</select>  
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpPlanTerm"> Plan Term </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-mm" > 
					
					<input type='text' onmouseover="fipaTooltip(this);"  
					class="form-control" id="txtFldDlgRecomPpPlanTerm"
					name="txtFldDlgRecomPpPlanTerm" />
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpPayTerm">Payment Term </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-mm">  
					<input type='text' onmouseover="fipaTooltip(this);"   
					class="form-control numbers applyEvntYrs" id="txtFldDlgRecomPpPayTerm"
					name="txtFldDlgRecomPpPayTerm"  /> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgRecomPpPremium"> Premium (Optional) </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md" > 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type='text' onmouseover="fipaTooltip(this);" 
					class="form-control numbers applyEvntUsd" id="txtFldDlgRecomPpPremium"
					name="txtFldDlgRecomPpPremium" 
					/> 
					</div>
            </div> 
            </div>
      </div> 
      
      
      
      
      
      <div class="form-group required"><input type="hidden"
					name="txtFldDlgRecomPpCrtdBy" />    <input type="hidden"
					name="txtFldDlgRecomPpCrtdDate" /> <input type="hidden"
					name="txtFldDlgRecomPpId" /> 
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
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>



 <!-- Modal  -->
<div class="modal fade" id="RecomPFund_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
        <span class="popupheader">
    <img src="images/menuicons/canvas.png" class="info" width="5%" ><small>
		All fields marked in maroon are required</small></span>
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
      
		<div class="col-md-6"> 
		<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfProdType"><font color="maroon">Product
							LOB   </font></label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <select class="form-control fld-resp-md"
					name="txtFldDlgRecomFfProdType" id="txtFldDlgRecomFfProdType"
					onmouseover="fipaTooltip(this);"    autofocus="true">
						<option value="">--SELECT--</option>
						<c:if test="${not empty PROTYPEFD_LIST}">
							<c:forEach var="prodtypefd" items="${PROTYPEFD_LIST}">
								<option value="${prodtypefd}">${prodtypefd}</option>
							</c:forEach>
						</c:if>
				</select>
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfComp"><font color="maroon">Fund Manager</font></label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input id="txtFldDlgRecomFfComp"
					name="txtFldDlgRecomFfComp" class="form-control fld-resp-md"
					type="text" onmouseover="fipaTooltip(this);"  maxlength="60" /> 
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfPlan"><font color="">Fund</font></label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input id="txtFldDlgRecomFfPlan"
					name="txtFldDlgRecomFfPlan" class="form-control fld-resp-md"
					type="text" onmouseover="fipaTooltip(this);"  maxlength="300" /> 
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfFundRiskRate"> Avallis Fund Risk Rating  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md"> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type='text' onmouseover="fipaTooltip(this);" 
					class="form-control numbers applyEvntUsd"
					id="txtFldDlgRecomFfFundRiskRate"
					name="txtFldDlgRecomFfFundRiskRate" 
					/> 
					</div>
            </div> 
            </div>
      </div>
      
      
      </div>
      
      
      
      
      
      <div class="col-md-6"> 
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfPayMode">Payment Method   </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6 "> 
         <select class="form-control fld-resp-md" name="txtFldDlgRecomFfPayMode"
							id="txtFldDlgRecomFfPayMode" onmouseover="fipaTooltip(this);"
							data-container="body"  >
							<option value="">--SELECT--</option>
							<c:if test="${not empty PAYMENTMODE_LIST}">
								<c:forEach var="paymentmode" items="${PAYMENTMODE_LIST}">
									<option value="${paymentmode}">${paymentmode}</option>
								</c:forEach>
							</c:if>
						</select> 
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfSalChrg"> Sales Charges  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md" > 
          <input type='text' onmouseover="fipaTooltip(this);" 
				 	class="form-control numbers applyEvntpCent" id="txtFldDlgRecomFfSalChrg" name="txtFldDlgRecomFfSalChrg"   /> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div>
      
      
       
       
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfPurAmt">Purchase Amount </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md"> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type='text' onmouseover="fipaTooltip(this);"   
					class="form-control numbers applyEvntUsd" id="txtFldDlgRecomFfPurAmt"
					name="txtFldDlgRecomFfPurAmt" /> 
					</div>
            </div> 
            </div>
      </div> 
      
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgRecomFfPurPrcnt"> Purchase </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md" >  
					<input type='text' onmouseover="fipaTooltip(this);"  class="form-control numbers applyEvntpCent" 
					id="txtFldDlgRecomFfPurPrcnt" name="txtFldDlgRecomFfPurPrcnt" /> 	
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					</div>
            </div> 
            </div>
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
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>

