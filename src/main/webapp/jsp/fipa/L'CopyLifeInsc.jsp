<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 
<%-- <div  class="panel-group">

	<div id="lifeinscsecion" class="accord-content">
		<div class="panel-body" style="padding-top: 40px;">
<!-- Dialog pop up -->


<div class="font_dialogbox" id="listofLifeIns_Dialog">
<div class="nav-tabs-custom">

	<ul class="nav nav-pills-blue navbar-static-top navg-bar" id="lifeInsNavTabsDets">
		<li class="active" id="li_existpolicy">
			<a href="#existPolicyDetstab" data-toggle="tab"> 
				<span class="glyphicon glyphicon-home"></span>&nbsp;Existing policies
			</a>
		</li>
		<li id="li_lifeInsurance">
			<a href="#lifeInsdetstab" data-toggle="tab">
				<span class="glyphicon glyphicon-grain"></span>&nbsp;Life Insurance
			</a>
		</li>
		<li id="li_plandetails">
			<a href="#liplandetails" data-toggle="tab"> 
				<span class="glyphicon glyphicon-compressed"></span>&nbsp;Plan Details
			</a>
		</li>
		
		<!--***************************Types Of Coverage Links ***************************-->
		<li id="li_deathbenf"><a href="#li_DeathBenef_tab" data-toggle="tab"
			style="display: none"> <span
				class="glyphicon glyphicon-record"></span>&nbsp;Death Benefit
		</a></li>
		<li id="li_disability"><a href="#li_Disability_tab" data-toggle="tab"
			style="display: none"> <span
				class="glyphicon glyphicon-object-align-left"></span>&nbsp;Disability
		</a></li>
		<li  id="li_criticalill"><a href="#li_CriticalIllness_tab" data-toggle="tab"
			style="display: none"> <span class="glyphicon glyphicon-erase"></span>&nbsp;Critical
				Illness
		</a></li>
		<li id="li_hospitality"><a href="#li_Hospitalisation_tab" data-toggle="tab"
			style="display: none"> <span
				class="glyphicon glyphicon-plus-sign"></span>&nbsp;Hospitalisation
		</a></li>
		<!--***************************Objective Of Insurance Links ***************************-->
		<li id="li_retirement"><a href="#li_RetirementPlg_tab" data-toggle="tab"
			style="display: none"> <span class="glyphicon glyphicon-lock"></span>&nbsp;Retirement
				Plg
		</a></li>
		<li id="li_education"><a href="#li_EducationPlg_tab" data-toggle="tab"
			style="display: none"> <span
				class="glyphicon glyphicon-education"></span>&nbsp;Education Plg
		</a></li>
		<li id="li_healthinsurance"><a href="#healthInsdetstab"
			data-toggle="tab"> <span class="glyphicon glyphicon-leaf"></span>&nbsp;Health
				Insurance
		</a></li>
	</ul>

	<div class="tab-content">
		<div class="clearspace20"></div>

		<!-- ****************************************************** Existing Policy Tab ************************************************ -->
		<div class="tab-pane active fade in" id="existPolicyDetstab" style="height:80vh"> 
			
			<div class="col-md-12"> 
				<span class="panelHeaderTitle"> Existing Policies</span>
				<small	class="fipaFldLblText">(Below information are retrieved from FPMS. For more policy details, 
							please click   <img	src="images/menuicons/green-f.png" width="25px"	id="FipaLinkToFpms" /> ) <!--  FIPAlinkToFPMS() --> <!-- commented  by thulasy 03.11.2017-->
				</small>
			</div>
			
			<div class="col-md-12">
				<span class="panelHeaderTitle">  Life & Health
				Insurance (Plan Details)</span>
				<div class="btn-group" role="group">
					<a class="btn btn-default addnewlife" id="addnewlife" onclick="openLifeScreen();"></a>
					<a class="btn btn-default backToFdFlow" id="backToFdFlowLife"  onclick="openBackToFundFlow('expdSelfInsurance');"></a>
					
						</div>
			</div>			
			
			
			
			<div class="clearspace20"></div>
			<table id="existPolicyLHIns" class="dataTable table-bordered table-striped display hover" style="width: 100%">
				<thead class="fipaFldLblTextbold">
					<tr>
						<th class="text-center">#</th>
						<th class="text-center"><div style="width: 150px">Application</div></th>
						<th class="text-center"><div style="width: 200px">Insurer</div></th>
						<th class="text-center"><div style="width: 160px">Proposed</div></th>
						<th class="text-center"><div style="width: 160px">Life Assured</div></th>
						<th class="text-center"><div style="width: 80px">Policy No.</div></th>
						<th class="text-center"><div style="width: 200px">Plan Name</div></th>
						<th class="text-center"><div style="width: 200px">Coverage Benefits</div></th>
						<th class="text-center"><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
						<th class="text-center"><div style="width: 80px">Policy Status</div></th>
						<th class="text-center"><div style="width: 80px">Sum Assured<small>($)</small></div></th>
						<th class="text-center"><div style="width: 80px">Annual Premium<small>($)</small></div></th>
						<th class="text-center"><div style="width: 160px">LOB</div></th>

					</tr>
				</thead>
				<tbody></tbody>
			</table>


			<br>
			<div class="clearspace40"></div>
<span class="panelHeaderTitle">UT and ILP (Fund
				Details)</span> <br /><br />

			<table id="existPolicyUtlip" class="dataTable table-bordered table-striped display hover" style="width: 100%">
				<thead>
					<tr>						
						
						<th class="text-center">#</th>
						<!-- <th class="hidden text-center"><div style="width: 60px"></div></th> -->
						<th class="text-center"><div style="width: 150px">Application</div></th>
						<th class="text-center"><div style="width: 200px">Insurer</div></th>
						<th class="text-center"><div style="width: 160px">Proposed</div></th>
						<th class="text-center"><div style="width: 160px">Life Assured</div></th>
						<th class="text-center"><div style="width: 80px">Policy No.</div></th>
						<th class="text-center"><div style="width: 200px">Plan Name</div></th>
						<th class="text-center"><div style="width: 200px">Coverage Benefits</div></th>
						<th class="text-center"><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
						<th class="text-center"><div style="width: 80px">Policy Status</div></th>
						<th class="text-center"><div style="width: 80px">Sum Assured<small>($)</small></div></th>
						<th class="text-center"><div style="width: 80px">Annual Premium<small>($)</small></div></th>
						<th class="text-center"><div style="width: 160px">LOB</div></th>
						

					</tr>
				</thead>
				<tbody></tbody>
			</table>






		</div>
		<!-- 				******************************************Life Insurance Details TAB1*****************************    -->
		<div class="tab-pane fade" id="lifeInsdetstab"> 
			<fieldset class="fieldsetClsborder">
			<div id="LIFE_APD" > 
   <div id="lifeMandatoryFlds">
			<div class="col-md-12">
			<span class="popupheader">
    <img src="images/menuicons/canvas.png" class="info" width="15" ><small>
		All fields marked in maroon are required</small></span>
		<div class="clearspace50"></div> 
        </div>
        
				<div class="col-md-6"  id="focusonlifepartleft">
					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label for="lipOwner" class="control-label  mandFldastrks pull-right text-right">
									 Owner / Proposed* 
								</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="lipOwner" id="lipOwner" class="form-control fld-resp-sm"
									autofocus="true">
											 <option value="">--SELECT--</option> 
											<option value="Self">Self</option> 
											<option value="Spouse">Spouse</option> 
											<option value="Joint">Joint</option>
											<option value="Parents">Parents</option>
								</select>


							</div>
						</div>
					</div>



					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label for="lipAssured" class="control-label pull-right text-right">
									 <span class="mandFldastrks">Life Assured*</span> 
									<a class="btn btn-default addinfoicon" id="poplipAssured"  ></a>
								</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="lipAssured" id="lipAssured"
									class="form-control" onmouseover="fipaTooltip(this);">
									<option value="">--SELECT--</option>
								</select>
								<small class="chkchildexist hidden">No child found!</small>
							</div>
						</div>
					</div>




					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label  mandFldastrks pull-right text-right" for="lipCompany">
									 Insurance Company*
								</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">

					<select name="lipCompany" id="lipCompany" class="form-control" >
									<option value="">--SELECT--</option>
							<c:if test ="${not empty INV_MASTPRIN_LIST}">
				 				<c:forEach var="invprinlist" items="${INV_MASTPRIN_LIST}">
									<option value="${invprinlist[0]}">${invprinlist[1]}</option>
								</c:forEach>
							</c:if>
								</select> 
							</div>
						</div>

					</div>



					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label  mandFldastrks pull-right text-right" for="lipPolicyno">
									 Policy No.*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<input type='text' class="form-control" id="lipPolicyno"
									name="lipPolicyno" maxlength="20"
									onmouseover="fipaTooltip(this);" />

							</div>
						</div>

					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label mandFldastrks pull-right text-right" for="policyStatus">
									 Policy Status*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select class="form-control fld-resp-md" id="policyStatus"
									name="policyStatus" onmouseover="fipaTooltip(this);">
									<option value="">--SELECT--</option>
									<option value="INFORCE">INFORCE</option>
									<option value="NFL">Non-Forfeiture Loan</option>
									<option value="APL">Automatic Premium Loan</option>
								</select>

							</div>
						</div>

					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label  pull-right text-right" for="lipPlantype">Type
									of Plan </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="lipPlantype" id="lipPlantype"
									class="form-control fld-resp-mm">
									<option value="">--SELECT--</option>
									<c:if test="${not empty LI_TYPEOFPLAN_LIST}">
										<c:forEach var="typeofplan" items="${LI_TYPEOFPLAN_LIST}">
											<option value="${typeofplan}">${typeofplan}</option>
										</c:forEach>
									</c:if>
								</select>
							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label mandFldastrks pull-right text-right"
									for="lipIncepdate">Inc. Date of policy 
									<small>(DD/MM/YYYY)</small>
								*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm fld-resp-mm date"
									id="LIIncptDatepicker">
									<input id="lipIncepdate" name="lipIncepdate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" />
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right"
									for="lipExpdate">  Expiry Date
									<small>(DD/MM/YYYY)</small>
								 </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm fld-resp-mm date"
									id="LIExpiryDatepicker">
									<input id="lipExpdate" name="lipExpdate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" />
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
							</div>
						</div>
					</div>



					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipPaymentfreq">Frequency
									of payments</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="lipPaymentfreq" id="lipPaymentfreq"
									class="form-control fld-resp-mm">
									<option value="">--SELECT--</option>
							<option value="ANNUALLY">ANNUALLY</option>
							<option value="HALF YEARLY">HALF YEARLY</option>
							<option value="QUARTERLY">QUARTERLY</option>
							<option value="MONTHLY">MONTHLY</option>  
							<option value="SINGLE">SINGLE</option>
<!-- 									<option value="">--SELECT--</option> -->
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
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right"
									for="lipPaymentmethod">Payment method</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="lipPaymentmethod" id="lipPaymentmethod"
									class="form-control fld-resp-mm">
									<option value="">--SELECT--</option>
									<c:if test="${not empty LI_PAYMETHODS_LIST}">
										<c:forEach var="paymthds" items="${LI_PAYMETHODS_LIST}">
											<option value="${paymthds}">${paymthds}</option>
										</c:forEach>
									</c:if>
								</select>
							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipPremiumsrc">Source
									of Premium </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="lipPremiumsrc" id="lipPremiumsrc"
									class="form-control fld-resp-sm">
									<option value="">--SELECT--</option>
									<c:if test="${not empty LI_PAYMETHODS_LIST}">
										<c:forEach var="paymthds" items="${LI_PAYMETHODS_LIST}">
											<option value="${paymthds}">${paymthds}</option>
										</c:forEach>
									</c:if>
								</select>
							</div>
						</div>
					</div>






					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipSa">
									 Sum Assured </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm">
									<div class="input-group-addon">
										<span class="glyphicon" id="symbolUsd"></span>
									</div>
									<input type="text" onmouseover="fipaTooltip(this);"
										name="lipSa" id="lipSa"
										class="form-control numbers applyEvntUsd" />
								</div>
							</div>
						</div>
					</div>
				</div>


				<div class="col-md-6" id="focusonlifepartright">




					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipPlanname">
								Name of Main Plan</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
<!-- 								<input type='text' class="form-control" id="lipPlanname" -->
<!-- 									name="lipPlanname" maxlength="150" -->
<!-- 									onmouseover="fipaTooltip(this);" /> -->

							<select name="lipPlanname" id="lipPlanname"
									class="form-control"> 
								</select>
							</div>
						</div>
					</div>


					<div class="form-group hidden">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right"
									for="sellipCoveragetype"> Types of benefit /
									Coverage </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="sellipCoveragetype" id="sellipCoveragetype"
									class="form-control" multiple="multiple">
									<c:if test="${not empty LI_TYPEOFCOVERAGE_LIST}">
										<c:forEach var="typeofcovrgelist"
											items="${LI_TYPEOFCOVERAGE_LIST}">
											<option value="${typeofcovrgelist.key}">${typeofcovrgelist.value}</option>
										</c:forEach>
									</c:if>
								</select> <input type="hidden" name="lipCoveragetype"
									id="lipCoveragetype" />
									
							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right"
									for="sellipIsnurObject"> Obj. of Insurance </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="sellipIsnurObject" id="sellipIsnurObject"
									class="form-control" multiple="multiple">
									<c:if test="${not empty LI_OBJOFINS_LIST}">
										<c:forEach var="objofinsurnce" items="${LI_OBJOFINS_LIST}">
											<option value="${objofinsurnce.key}">${objofinsurnce.value}</option>
										</c:forEach>
									</c:if>
								</select> <input type="hidden" name="lipIsnurObject"
									id="lipIsnurObject" />
							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipCurrBonusAcc">
									Current Bonus accumulation</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm">
									<div class="input-group-addon">
										<span class="glyphicon" id="symbolUsd"></span>
									</div>
									<input type="text" onmouseover="fipaTooltip(this);"
										name="lipCurrBonusAcc" id="lipCurrBonusAcc"
										class="form-control numbers applyEvntUsd26" />
								</div>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipCurrCashVal">
									 Current Cash Value </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm">
									<div class="input-group-addon">
										<span class="glyphicon" id="symbolUsd"></span>
									</div>
									<input type="text" onmouseover="fipaTooltip(this);"
										name="lipCurrCashVal" id="lipCurrCashVal"
										class="form-control numbers applyEvntUsd26" />
								</div>
							</div>
						</div>
					</div>





					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipMaturityVal">
									Maturity Value</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm">
									<div class="input-group-addon">
										<span class="glyphicon" id="symbolUsd"></span>
									</div>
									<input type="text" onmouseover="fipaTooltip(this);"
										name="lipMaturityVal" id="lipMaturityVal"
										class="form-control numbers applyEvntUsd26" />
								</div>
							</div>
						</div>
					</div>



					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label  pull-right text-right"
									for="lipMaturityDate"> Maturity Date<small>(DD/MM/YYYY)</small>
								</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm fld-resp-mm date"
									id="LIMaturityDatepicker">
									<input id="lipMaturityDate" name="lipMaturityDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10">
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
							</div>
						</div>
					</div>










					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="osLoan">
									Outstanding Loan </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm">
									<div class="input-group-addon">
										<span class="glyphicon" id="symbolUsd"></span>
									</div>
									<input type="text" onmouseover="fipaTooltip(this);"
										name="osLoan" id="osLoan"
										class="form-control numbers applyEvntUsd26" />
								</div>
							</div>
						</div>
					</div>




					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="nominationType">
									Types Of Nominee
									<a class="btn btn-default addinfoicon" id="popnominationType"  ></a>
									</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="nominationType" id="nominationType"
									class="form-control fld-resp-sm" onchange="enableNomineeDiv(this)">
									<option value="">--SELECT--</option>
									<c:if test="${not empty LI_TYPEOFNOM_LIST}">
										<c:forEach var="typeofnom" items="${LI_TYPEOFNOM_LIST}">
											<option value="${typeofnom}">${typeofnom}</option>
										</c:forEach>
									</c:if>
								</select>


							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right"
									for="selThirdPartName"> Third Party Name</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="thirdpartyName" id="thirdpartyName"
									class="form-control fld-resp-mm">
									<option value="">--SELECT--</option>
									<c:if test="${not empty LI_THIRDPARTY_LIST}">
										<c:forEach var="thirdpartylist"
											items="${LI_THIRDPARTY_LIST}">
											<option value="${thirdpartylist.key}">${thirdpartylist.value}</option>
										</c:forEach>
									</c:if>
								</select>


							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right" for="lipRemarks">
									Remarks </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
							<textarea name="lipRemarks" id="lipRemarks" class="form-control" 
							rows="5" maxlength="300"></textarea> 
							</div>
						</div>
					</div>





					

				</div>
				
				
				<div id="NomineesTblDiv" class="NomineesTblDiv pull-right"
						style="display: none">
						<hr class="border">
						<div class="form-group">
							<div class="row">
								<div class="col-md-10 col-sm-10 col-xs-10">
				<div class="table-responsive"> 
					<div class="btn-group pull-right funcToDisable" role="group"> 
					<button type="button"
												class="btn btn-default navbar-btn delRow-icon"
												id="NomDRow"></button>
													</div>
					<div class="btn-group pull-right funcToDisable" role="group" >
						&nbsp;&nbsp; 
					<button type="button"
												class="btn btn-default navbar-btn addRow-icon"
												id="NomARow"></button>
											<button type="button"
												class="btn btn-default navbar-btn editRow-icon"
												id="NomERow"></button>
<!-- 												<button type="button" -->
<!-- 												class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 												id="NomVRow"></button> -->
					</div>
						<div class="container"> 
						<img src="images/menuicons/nomine.png" class="img-rounded" width="40" height="40" />
						<span class="panelHeaderTitle">Add Nominee Name</span>
						</div>
					</div>  
					
					

									 
								</div>
							</div>
						</div>

						<!-- 	<div class="row clearfix ">   -->
						<div style="width: 440px;">
							<table id="fnaLINomineesTbl" class="dataTable table-bordered table-striped display hover"
								style="width: 100%">
								<thead>
									<tr>
										<th>#</th> 
										<th>Select</th>
										<th><div style="width:130px">Nominee Name<span class="mandFldastrks">*</span></div></th>
										<th><div style="width:70px">Percentage<small>(%)</small></div></th>
									</tr>
								</thead>
							</table>
						</div>

						<!-- 		</div>			 -->
					</div>
</div>
</div>
			</fieldset>


		</div>
		<!-- End lifeInsdetstab -->


		<!-- 				******************************************Life Insurance Details TAB1*****************************    -->
		<div class="tab-pane fade" id="liplandetails"  style="height:80vh">

			<div class="form-group"> 
			<div class="clearspace10"></div> 
		 
			<div class="col-md-12  planTotDivFixed pull-left" style="width:auto;">  
				<table class="dataTable table-borderless table-striped display hover" id="plandetailsfooter"  style="display:block;width:100%" border="1">					
					<tbody>
					
					<tr>
						<td class="text-primary bg-info bold text-right" valign="top" style="width:8%">Policy No.</td>
						<td class="text-default bg-info bold">
						<textarea id="txtFldLifeinsPolicyNo" class="form-control readOlyCursor totalFields" onmouseover="fipaTooltip(this);" style="background: #d9edf7;" readonly="true"></textarea>
						</td>
						<td class="text-primary bg-info bold text-right" valign="top" style="width:8%">Insurer Name</td>
						<td class="text-default bg-info bold">
						<textarea id="txtFldLifeinsInsurerName" class="form-control readOlyCursor totalFields" onmouseover="fipaTooltip(this);" style="background: #d9edf7;" readonly="true"></textarea></td>
					</tr>
					
					<tr>
					<td colspan="4" class="text-primary bold"> Sum Assured and Premium Calculation - Basic(B) & Rider (R)
					</td>
					</tr>
						<tr>
							<td class="text-primary">
								<div style="text-align: right; font-weight: bold;width:250px">Total Sum Assured(B):</div>
							</td>
							<td>
							<input type="text"
								class="form-control readOlyCursor totalFields"
								onmouseover="fipaTooltip(this);" id="visibleretTotalSa" 
								name="visibleretTotalSa" />
								<input type="hidden"
								class="form-control readOlyCursor totalFields"
								onmouseover="fipaTooltip(this);" id="retTotalSa" 
								name="retTotalSa" /></td>
								
						 
							<td>
								<div class="text-primary" style="text-align: right; font-weight: bold;width:250px">
								Total Annual Premium(B+R):
								&nbsp;<a class="btn btn-default addinfoicon" id="popvisibleretTotalPrem"> </a></div>
								 
							</td>							
							<td> 
							<input type="text"
								class="form-control readOlyCursor  totalFields"
								onmouseover="fipaTooltip(this);" id="visibleretTotalPrem"
								name="visibleretTotalPrem"  />
								<input type="hidden"
								class="form-control readOlyCursor  totalFields"
								onmouseover="fipaTooltip(this);" id="retTotalPrem"
								name="retTotalPrem"  />
							</td>
							 
						</tr>
						
						<!-- <tr>
							<td>
								<div class="text-primary" style="text-align: right; font-weight: bold;width:250px">
								Total Annual Premium(B+R):
								&nbsp;<a class="btn btn-default addinfoicon" id="popvisibleretTotalPremOngoing"> </a></div>
								 
							</td>							
							<td> 
							<input type="text"
								class="form-control readOlyCursor  totalFields"
								onmouseover="fipaTooltip(this);" id="visibleretTotalPremOnGo"
								name="visibleretTotalPremOnGo"  />
								<input type="hidden"
								class="form-control readOlyCursor  totalFields"
								onmouseover="fipaTooltip(this);" id="retTotalPrem"
								name="retTotalPrem"  />
							</td>
							 
						</tr> -->
					</tbody>
					  
				</table> 
		</div>
		
		
		
			<div class="col-md-12"> 
			<!-- <div class="clearspace100"></div> -->   
			<div class="clearspace60"></div>   
			<div class="alert alert-danger hidden"  id="noplanavailable"  role="alert" >
					  <strong>No Basic and Rider Plans Available</strong>  
<!-- 					  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> -->
<!-- 					    <span aria-hidden="true">&times;</span> -->
<!-- 					  </button> -->
					</div>

		 
				
				<div class="table-responsive">
				<span class="panelHeaderTitle"> Basic Plan</span>
		<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon-dup"
							id="lfplnDRow"></button>
					</div>
					<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="lfplnARow"></button>
						<button type="button"
							class="btn btn-default navbar-btn editRow-icon-dup"
							id="lfplnERow"></button>
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn delRow-icon" -->
<!-- 							id="lfplnDRow"></button> -->
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 							id="lfplnVRow"></button> -->
					</div>
				</div>
			<div class="table-responsive">
				<table id="liPlanDetailstbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					<thead class="fipaFldLblTextbold">
						<tr>
							<th>#</th> 
							<th>Select</th>
							<th><div style="width: 180px">Plan Name<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px"> Basic<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 90px">Premium Term<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Sum Assured<small>($)</small></div></th>
							<th><div style="width: 80px">Premium Amount<small>($)</small></div></th>
							<th><div style="width: 90px">Payment Mode</div></th>
							<th><div style="width: 90px">Payment Method</div></th>
							<th><div style="width: 150px">Coverage Benefits</div></th>
							<th><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 150px">Remarks</div></th>
							
						</tr>
					</thead>
					<tbody></tbody>
				</table>
				</div>
				
			<div class="clearspace40"></div> 
<div class="middle-line"></div>
				<div class="col-md-12">  
<div class="clearspace10"></div>  
				<div class="table-responsive">
				<div class="col-md-6">
				<span class="panelHeaderTitle"> Rider Plan   
				</span> 
				<span class="popupheader">
    			<img src="images/menuicons/canvas.png" class="info" width="15" data-hasqtip="21" aria-describedby="qtip-21"><small>
		Select any one basic plan(in above) to add new rider/benefits plan details</small>
		
		</span>
		</div> 
               <div class="col-md-6">     
				
				<div id="raiderToggle" style="display: none">
<div class="btn-group pull-right funcToDisable" role="group">
<!--changes done 19/06/2019 -->
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon-dup"
							id="lfraidDRow"></button>
					</div>
					<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="lfraidARow"></button>
						<button type="button"
							class="btn btn-default navbar-btn editRow-icon-dup"
							id="lfraidERow"></button>
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn delRow-icon" -->
<!-- 							id="lfplnDRow"></button> -->
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 							id="lfplnVRow"></button> -->
					</div>
					</div>
				</div>
				</div>
			<div class="table-responsive">
			<div class="checkbox checkbox-primary">
                       <input type="checkbox" name="chkAllRiderPlans" id="chkAllRiderPlans"  
                       class="analysischkbox" onclick="setDisplayAllRiderPlans(this);"  />
                        <label class="control-label" for="chkAllRiderPlans">Check to display all rider plans</label>
                    </div>
                    
				<table id="liRaiderDetailstbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					<thead class="fipaFldLblTextbold">
						<tr>
							<th>#</th> 
							<th>Select</th>
							<th><div style="width: 180px">Plan Name<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px"> Rider/Benefit<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 90px">Premium Term<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Sum Assured<small>($)</small></div></th>
							<th><div style="width: 80px">Premium Amount<small>($)</small></div></th>
							<th><div style="width: 90px">Payment Mode</div></th>
							<th><div style="width: 90px">Payment Method</div></th>
							<th><div style="width: 150px">Coverage Benefits</div></th>
							<th><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 150px">Remarks</div></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
				</div>
				</div>
				
		</div>
				<!-- col2 end -->

			</div>



		</div>

		<!-- 				******************************************Life Insurance Details TAB1*****************************    -->
		<!-- ****************************************************** Health Insurance Tab ************************************************ -->
		<div class="tab-pane fade" id="healthInsdetstab"  style="height:80vh">

			<span class="panelHeaderTitle"> Information on Health
				Insurance Needs</span><br>
<!-- 			<div class="table-responsive"> -->
<!-- 				<div class="btn-group pull-right funcToDisable" role="group"> -->
<!-- 					<button type="button" -->
<!-- 						class="btn btn-default navbar-btn addRow-icon" -->
<!-- 						id="HlthARow"></button> -->
<!-- 					<button type="button" -->
<!-- 						class="btn btn-default navbar-btn editRow-icon" -->
<!-- 						id="HlthERow"></button> -->
<!-- 					<button type="button" -->
<!-- 						class="btn btn-default navbar-btn delRow-icon" -->
<!-- 						id="HlthDRow"></button> -->
<!-- 					<button type="button" -->
<!-- 						class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 						id="HlthVRow"></button> -->
<!-- 				</div> -->

<!-- 			</div> -->



<!-- 			<table id="fnahlthinsTbl" -->
<!-- 				class="dataTable table-bordered table-striped display hover" -->
<!-- 				style="width: 100%"> -->
<!-- 				<thead> -->
<!-- 					<tr> -->
<!-- 						<th>#</th>  -->
<!-- 						<th>Select</th> -->
<!-- 						<th><div style="width: 100px">Policy type</div></th> -->
<!-- 						<th><div style="width: 100px">Insured</div></th> -->
<!-- 						<th><div style="width: 100px">Benefit type</div></th> -->
<!-- 						<th><div style="width: 100px">Amount($)</div></th> -->
<!-- 						<th><div style="width: 100px">Expiry<br>(DD/MM/YYYY)</div></th> -->
<!-- 						<th><div style="width: 150px">Annual Premium($)</div></th> -->
<!-- 						<th><div style="width: 200px">Remarks - Health -->
<!-- 								condition?</div></th> -->
<!-- 					</tr> -->
<!-- 				</thead> -->
<!-- 				<tbody></tbody> -->
<!-- 			</table> -->







			<div class="table-responsive">
				<fieldset class="fieldsetClsborder">
					<table class="display table table-borderless">
						<col style="width: 15%;"></col>
						<col style="width: 1%;"></col>
						<col style="width: 15%;"></col>
						<tbody>
							<tr>
								<td><span class="fipaFldLblTextbold">Personal
										Priorities - </span><small class="fipaFldLblText">select
										your health insurance concerns</small></td>
								<td></td>
								<td><small class="fipaFldLblText">High / Med /
										Low</small></td>
							</tr>
							<tr>
								<td style="text-align: right;">
									<div class="fipaFldLblText">Cover For Hospitalisation
										Expenses</div>
								</td>
								<td></td>
								<td><select name="ppHospexp" id="ppHospexp"
									class="form-control fld-resp-sm">
										<option value="">--SELECT--</option>
										<option value="H">High</option>
										<option value="M">Med</option>
										<option value="L">Low</option>
								</select></td>
							</tr>
							<tr>
								<td style="text-align: right;">
									<div class="fipaFldLblText">Cover For Outpatient
										Medical Expenses</div>
								</td>
								<td></td>
								<td><select name="ppOutpexp" id="ppOutpexp"
									class="form-control fld-resp-sm">
										<option value="">--SELECT--</option>
										<option value="H">High</option>
										<option value="M">Med</option>
										<option value="L">Low</option>
								</select></td>
							</tr>
							<tr>
								<td style="text-align: right;">
									<div class="fipaFldLblText">Cover For Major
										Illnesses(eg. Cancer, kidney dialysis,etc)</div>
								</td>
								<td></td>
								<td><select name="ppMajorill" id="ppMajorill"
									class="form-control fld-resp-sm">
										<option value="">--SELECT--</option>
										<option value="H">High</option>
										<option value="M">Med</option>
										<option value="L">Low</option>
								</select></td>
							</tr>
							<tr>
								<td style="text-align: right;">
									<div class="fipaFldLblText">Cover Dental Expenses</div>
								</td>
								<td></td>
								<td><select name="ppDentalexp" id="ppDentalexp"
									class="form-control fld-resp-sm">
										<option value="">--SELECT--</option>
										<option value="H">High</option>
										<option value="M">Med</option>
										<option value="L">Low</option>
								</select></td>
							</tr>
							<tr>
								<td style="text-align: right;">
									<div class="fipaFldLblText">Cover For Old Age
										Disabilities</div>
								</td>
								<td></td>
								<td><select name="ppOldagedisable" id="ppOldagedisable"
									class="form-control fld-resp-sm">
										<option value="">--SELECT--</option>
										<option value="H">High</option>
										<option value="M">Med</option>
										<option value="L">Low</option>
								</select></td>
							</tr>
							<tr>
								<td style="text-align: right;">
									<div class="fipaFldLblText">Cover For Loss Income Due
										To Illness Or Sickness</div>
								</td>
								<td></td>
								<td><select name="ppLossincome" id="ppLossincome"
									class="form-control fld-resp-sm">
										<option value="">--SELECT--</option>
										<option value="H">High</option>
										<option value="M">Med</option>
										<option value="L">Low</option>
								</select></td>
							</tr>
							<tr>
								<td colspan="3" class="fipaFldLblTextbold">Replacement
									Of Health Insurance Policies</td>
							</tr>
							<tr>
								<td colspan="2" class="fipaFldLblText"
									style="text-align: right">Are you intending to replace
									any existing health insurance policy?If yes, Why?</td>
								<td><select id="ppInspolicyflg" name="ppInspolicyflg"
									class="form-control fld-resp-sm">
										<option value="">--SELECT--</option>
										<option value="N">No</option>
										<option value="Y">Yes</option>
								</select></td>
<!-- 								onchange="enableInsPolTxtArea(this,ppInspolicydets)" -->
							</tr>

						</tbody>
					</table>
					<div id="healthinsurancepp">
					<textarea name="ppInspolicydets" id="ppInspolicydets" rows="5"
						class="form-control" style='width: 99%;' maxlength="300"></textarea>
						</div>
				</fieldset>
			</div>
		</div>


		<!-- ****************************************************** TAB 2 ************************************************ -->


		<div class="tab-pane fade" id="li_DeathBenef_tab"  style="height:80vh">
		
		<div class="col-md-9">
		
					<div class="form-group">
				<div class="table-responsive">
<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon"
							id="DthDRow" disabled="true"></button>
					</div>

					 <div class="btn-group pull-right funcToDisable" role="group"  style="margin-right: 10px;" >
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="DthARow"></button>
						<button type="button"
							class="btn btn-default navbar-btn editRow-icon"
							id="DthERow" disabled="true"></button>
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn delRow-icon" -->
<!-- 							id="DthDRow"></button> -->
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 							id="DthVRow"></button> -->
					</div>
				</div>
				<table id="liDeathBenefittbl"
					class="dataTable table-bordered table-striped display hover"
					style="width: 100%">
					<thead>
						<tr>
							<th>#</th> 
							<!-- <th>Select</th> -->
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliDeathBenefit" name="SelliDeathBenefit" onclick="SelAllliDeathBenefit(this)"><label for="SelliDeathBenefit" >&nbsp;</label></div></th>
							<th><div style="width: 180px">Plan Name</div></th>
							<th><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 100px">Term of coverage<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 100px">Death Benefit<small>($)</small><span class="mandFldastrks">*</span></div></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
		
		</div>
		

				<!-- col2 end -->

			</div>


		</div>
		<!-- End li_DeathBenef_tab -->

		<!-- ******************************************************TAB 3************************************************ -->
		<div class="tab-pane fade" id="li_Disability_tab"  style="height:80vh">

			<div class="form-group">
				<div class="table-responsive">
					 <div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon"
							id="DsbltyDRow" disabled="true"></button>
					</div>
<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;">
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="DsbltyARow"></button>
						<button type="button"
							class="btn btn-default navbar-btn editRow-icon"
						 	id="DsbltyERow" disabled="true"></button>
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn delRow-icon" -->
<!-- 							id="DsbltyDRow"></button> -->
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 							id="DsbltyVRow"></button> -->
					</div>
				</div>

				<table id="liDisabilitytbl"
					class="dataTable table-bordered table-striped display hover"
					style="width: 100%">
					<thead>
						<tr>
						<!--changes done 19/06/2019 -->
							<th rowspan="2">#</th>  
							<!-- <th rowspan="2">Select</th> -->
							<th rowspan="2"><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliDisability" name="SelliDisability" onclick="SelAllliDisability(this)"><label for="SelliDisability">&nbsp;</label></div></th>
							<th rowspan="2"><div style="width: 180px">Plan Name</div></th>
							<th rowspan="2"><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th rowspan="2"><div style="width: 80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th rowspan="2"><div style="width: 150px">Types of
									Disability<span class="mandFldastrks">*</span></div></th>
							<th colspan="2" style="text-align:center;"><div style="text-align: center;">Yr benefit to be
									payable</div></th>
							<th rowspan="2"><div style="width: 90px">Benefits<small>($)</small></div></th>
							<th rowspan="2"><div style="width: 80px">Increment of Benefits<small>($)</small></div></th>
						</tr>
						<tr>
							
							<th><div style="width: 60px">Begins<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 60px">Ceases<span class="mandFldastrks">*</span></div></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>

				<!-- col2 end -->

			</div>



		</div>
		<!-- End of Disability-->


		<!-- ******************************************************TAB 4************************************************ -->
		<div class="tab-pane fade" id="li_CriticalIllness_tab"  style="height:80vh">

			<div class="form-group">
				<div class="table-responsive">
					 <div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon"
							id="CrtlDRow" disabled="true"></button>
					</div>
<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;">
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="CrtlARow"></button>
						<button type="button"
							class="btn btn-default navbar-btn editRow-icon"
							id="CrtlERow" disabled="true"></button>
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn delRow-icon" -->
<!-- 							id="CrtlDRow"></button> -->
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 							id="CrtlVRow"></button> -->
					</div>
				</div>

				<table id="liCriticalIllnesstbl"
					class="dataTable table-bordered table-striped display hover"
					style="width: 100%">
					<thead>
						<tr>
							<th>#</th> <!--changes done 19/06/2019 -->
							<!-- <th>Select</th> -->
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliCriticalIllness" name="SelliCriticalIllness" onclick="SelAllCriticalIllness(this)"><label for="SelliCriticalIllness">&nbsp;</label></div></th>
							<th><div style="width: 180px">Plan Name</div></th>
							<th><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 150px">Stages / Level of DD<span class="mandFldastrks">*</span></div></th> 
							<th><div style="width: 90px">Benefit Amount<small>($)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Term Of Benefit<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 150px">Remarks</div></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>

				<!-- col2 end -->

			</div>



		</div>
		<!-- end of li_CriticalIllness_tab -->

		<!-- ******************************************************TAB 5************************************************ -->
		<div class="tab-pane fade" id="li_Hospitalisation_tab"  style="height:80vh">

			<div class="form-group">
				<div class="table-responsive">
					<div class="btn-group pull-right funcToDisable" role="group" >
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon"
							id="HospDRow" disabled="true"></button>
					</div>
 <div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="HospARow"></button>
						<button type="button"
							class="btn btn-default navbar-btn editRow-icon"
							id="HospERow" disabled="true"></button>
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn delRow-icon" -->
<!-- 							id="HospDRow"></button> -->
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 							id="HospVRow"></button> -->
					</div>
				</div>

				<table id="liHospitilisationtbl"
					class="dataTable table-bordered table-striped display hover"
					style="width: 100%">
					<thead>
						<tr>
							<th>#</th> 
						<!-- 	<th>Select</th> -->
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliHospitilisation" name="SelliHospitilisation" onclick="SelAllliHospitilisation(this)"><label for="SelliHospitilisation">&nbsp;</label></div></th>
							<th><div style="width: 160px">Plan Name</div></th>
							<th><div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 90px">Annual Premium<small>($)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 90px">Class of Benefit<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Term of Coverage<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Deductible<small>($)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px">Co-insurance<small>(%)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>

				<!-- col2 end -->

			</div>


		</div>
		<!-- end of li_Hospitalisation_tab -->
		<!-- ******************************************************TAB 6************************************************ -->
		<div class="tab-pane fade" id="li_RetirementPlg_tab"
			 style="height:80vh">
			<!-- <fieldset class="fieldsetClsborder"> -->
			
			<div class="col-md-12">
			<div class="row">
					<div class="col-md-6">
					
					<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label for="retSelfretage"
											class="control-label  pull-right text-right">
											Coordinated Retirement age of Self
											&nbsp;
            <a class="btn btn-default addinfoicon" id="popretSelfretage"></a></label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="input-group input-group-sm fld-resp-sm">
											<input onmouseover="fipaTooltip(this);" id="retSelfretage"
												name="retSelfretage" class="form-control applyEvntYrs clsfipaClient calclifemvpvretage"
												type="text" />
											<div class="input-group-addon">
												<span id="symbolYrs"></span>
											</div>
										</div>


									</div>
								</div>
							</div>
							
							<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label for="retSpouseretage"
											class="control-label  pull-right text-right">
											Coordinated Retirement age of Spouse&nbsp;
            <a class="btn btn-default addinfoicon" id="popretSpouseretage"></a></label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="input-group input-group-sm fld-resp-sm">
											<input type="text" onmouseover="fipaTooltip(this);"
												id="retSpouseretage" name="retSpouseretage"
												class="form-control clsfipaSpouse applyEvntYrs" />
											<div class="input-group-addon">
												<span id="symbolYrs"></span>
											</div>
										</div>


									</div>
								</div>
							</div>
							
							
							<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label for="lfretYrstoret"
											class="control-label  pull-right text-right">
											Years to retirement&nbsp;
            <a class="btn btn-default addinfoicon" id="poplfretYrstoret"></a></label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="input-group input-group-sm fld-resp-sm">
											<input onmouseover="fipaTooltip(this);" type="text"
												id="lfretYrstoret" name="lfretYrstoret"
												class="form-control applyEvntYrs" />
											<div class="input-group-addon">
												<span id="symbolYrs"></span>
											</div>
										</div>


									</div>
								</div>
							</div>
							
							
							<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label class="control-label pull-right text-right"
											for="retIntrateused"> Interest Rate Used&nbsp;
            <a class="btn btn-default addinfoicon" id="poplfretIntrateused"></a></label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="input-group input-group-sm fld-resp-sm">
											<input type="text" onmouseover="fipaTooltip(this);"
												id="retIntrateused" name="retIntrateused"
												class="form-control applyEvntpCent" />
											<div class="input-group-addon">
												<span id="symbolprCent"></span>
											</div>
										</div>

									</div>
								</div>
							</div>
							
							
					
					</div>
					
					<div class="col-md-6">
					<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label for="retMultionret"
											class="control-label  pull-right text-right"> Will
											there be multiple disbursment of income at retirement </label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<select name="retMultionret" id="retMultionret"
											class="form-control fld-resp-sm" >
											<option value="">--SELECT--</option>
											<option value="Y">Yes</option>
											<option value="N">No</option>
										</select>
								<input type="hidden" name="lipRetRefId" id="lipRetRefId">
									</div>
								</div>
							</div>
							
							<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label class="control-label pull-right text-right"
											for="retCashvalonret"> Cash Value On Retirement
											 <span class="mandFldastrks">*</span></label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="input-group input-group-sm fld-resp-sm">
											<div class="input-group-addon">
												<span class="glyphicon" id="symbolUsd"></span>
											</div>
											<input type="text" onmouseover="fipaTooltip(this);"
												name="retCashvalonret" id="retCashvalonret"
												class="form-control numbers readOlyCursor clearfipaClient applyEvntUsd26"
												readonly="true" />
										</div>
									</div>
								</div>
							</div>
							
							
					<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label class="control-label pull-right text-right"
											for="retPrcnttoused"> % to be used for Retirement</label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="input-group input-group-sm fld-resp-sm">
											<input type="text" onmouseover="fipaTooltip(this);"
												id="retPrcnttoused" name="retPrcnttoused"
												class="form-control applyEvntpCent" />
											<div class="input-group-addon">
												<span id="symbolprCent"></span>
											</div>
										</div>

									</div>
								</div>
							</div>
							
							
							
							<div class="form-group">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<label class="control-label pull-right text-right"
											for="cashvalRetAge"> Income received age</label>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="input-group input-group-sm fld-resp-sm">
											<input onmouseover="fipaTooltip(this);" type="text"
												id="cashvalRetAge" name="cashvalRetAge"
												class="form-control applyEvntYrs" />
											<div class="input-group-addon">
												<span id="symbolYrs"></span>
											</div>
										</div>


									</div>
								</div>
							</div>
							
							
					
					</div></div>
					
					
					<div class="row">
					<div class="col-md-12" id="divRetirementPlgtbl">

						<div class="clearspace20"></div>
						<span class="panelHeaderTitle"> Input Multiple Income
							and Maturity values to be received on retirement</span>
							
							<div class="table-responsive">
				<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"
									class="btn btn-default navbar-btn delRow-icon"
									id="lfRetPlgDRow" disabled="true"></button>
				</div>
  				<div class="btn-group pull-right funcToDisable" role="group"  style="margin-right: 10px;">
					 <button type="button" class="btn btn-default navbar-btn addRow-icon" 	id="lfRetPlgARow"></button>
					 <button type="button" class="btn btn-default navbar-btn editRow-icon"    id="lfRetPlgERow" disabled="true"></button>
  				</div>
				 
				</div>  
				
				
<!-- 						<div class="table-responsive"> -->
<!-- 							<div class="btn-group pull-right funcToDisable" role="group"> -->
								
								
<!-- <!-- 								<button type="button" -->  
<!-- <!-- 									class="btn btn-default navbar-btn viewRow-icon" -->  
<!-- <!-- 									id="lfRetPlgVRow"></button> --> 
<!-- 							</div> -->
<!-- 						</div> -->



						<div class="table-responsive ">
							<table id="liRetirementPlgtbl" class="dataTable table-bordered table-striped display hover" 	style="width: 100%">
								<thead>
									<tr>
										<th>#</th> 
										<!-- <th>Select</th> -->
										<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliRetirementPlg" name="SelliRetirementPlg" onclick="SelAllliRetirementPlg(this)"><label for="SelliRetirementPlg">&nbsp;</label></div></th>
										<th><div style="width:160px">Plan Name</div></th>
										<th><div style="width:80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
										<th><div style="width:80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
										<th><div style="width:60px">Age Income Starts<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
										<th><div style="width:60px">Age Income Ends<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
										<th><div style="width:70px">Escalation Rate<small>(%)</small><span class="mandFldastrks">*</span></div></th>
										<th><div style="width:90px">Guaranteed Income<small>($)</small></div></th>
										<th><div style="width:100px">Non-Guaranteed Income<small>($)</small></div></th>
										<th><div style="width:100px">Total Income Received<small>($)</small></div></th>
										<!-- <th><div style="width:130px">PV at inception of income payable<small>($)</small></div></th>
										<th><div style="width:120px">PV /FV to value at retirement age<small>($)</small></div></th> -->
										<th><div style="width:80px">Assumed Bank Int. rate<small>(%)</small></div></th>
										<th><div style="width:150px">Remarks</div></th>
									</tr>
								</thead>
								<tbody>
								</tbody>
								<tfoot id="fnaLIRetPlgTblfooter">
									<tr>
										<th colspan="8">
										<div style="text-align: right;" class="pull-right">
										PV of income at retirement age($)</div>
										</th>
										<!-- <th><input type="text" id="txtFldTotEndAge"
											name="txtFldTotEndAge" onmouseover="fipaTooltip(this);"
											readonly="true" class="form-control applyEvntUsd readOlyCursor hidden" /></th> -->
										<th><!-- <input type="text" id="txtFldTotEscalRate"
											name="txtFldTotEscalRate" onmouseover="fipaTooltip(this);"
											readonly="true" class="form-control applyEvntUsd readOlyCursor hidden" /> -->
											<input type="text" id="txtFldTotGtdIncome"
											name="txtFldTotGtdIncome" onmouseover="fipaTooltip(this);"
											readonly="true" class="form-control applyEvntUsd readOlyCursor" /></th>
										<th><input type="text" id="txtFldTotNGtdIncome"
											name="txtFldTotNGtdIncome"
											onmouseover="fipaTooltip(this);" readonly="true"
											class="form-control applyEvntUsd readOlyCursor" /></th>
										<th  colspan="3">&nbsp;</th>
										<!-- <th>&nbsp;<input type="text" id="txtFldTotComuteIncome"
											name="txtFldTotComuteIncome"
											onmouseover="fipaTooltip(this);" readonly="true"
											class="form-control applyEvntUsd readOlyCursor" />  </th> -->
										<!--<th>&nbsp; <input type="text" id="txtFldTotComutePVFV"
											name="txtFldTotComutePVFV"
											onmouseover="fipaTooltip(this);" readonly="true"
											class="form-control applyEvntUsd readOlyCursor" /></th> -->
										<!-- <th>&nbsp;</th> -->
									</tr>
								</tfoot>
							</table>
						</div>



					</div>
					
					
					</div>
					
					
					</div>
					
			<!-- </fieldset> -->
		</div>

		<!-- ******************************************************TAB 7************************************************ -->
		<div class="tab-pane fade" id="li_EducationPlg_tab"  style="height:80vh">

			<div class="form-group">
				<div class="table-responsive">
					 <div class="btn-group pull-right funcToDisable" role="group">
						
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon"
							id="lfEduPlgDRow" disabled="true"></button>
					
					</div>
<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="lfEduPlgARow"></button>
						<button type="button"
							class="btn btn-default navbar-btn editRow-icon-dup"
							id="lfEduPlgERow"></button>
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn delRow-icon" -->
<!-- 							id="lfEduPlgDRow"></button> -->
<!-- 						<button type="button" -->
<!-- 							class="btn btn-default navbar-btn viewRow-icon" -->
<!-- 							id="lfEduPlgVRow"></button> -->

					</div>
				</div>

				<table id="liEducationtbl"
					class="dataTable table-bordered table-striped display hover"
					style="width: 100%">
					<thead>
						<tr>
							<th>#</th> 
							<!-- <th>Select</th> -->
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliEducation" name="SelliEducation" onclick="SelAllliEducation(this)"><label for="SelliEducation" >&nbsp;</label></div></th>
							<th><div style="width:150px">Name of child<span class="mandFldastrks">*</span></div></th>
							<th><div style="width:160px">Plan Name</div></th>
							<th><div style="width:80px">Inception Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width:80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width:70px">Child Age<span class="mandFldastrks">*</span></div></th>
							<th><div style="width:70px">Tertiary education
									age(yrs)<span class="mandFldastrks">*</span></div></th>
							<th><div style="width:70px">Bank interest rate<small>(%)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width:70px">Loan interest rate<small>(%)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width:70px">Inflation rate<small>(%)</small></div></th>
							<th><div style="width:70px">Income Pay Out Age<small>(yrs)</small></div></th>
							<th><div style="width:100px">Annual Pay Out Amount<small>($)</small></div></th>
							<th><div style="width:100px">PV/FV of Teritary Education Age<small>($)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
					<tfoot id="retEduPlgAgeCalTablefooter">  
						<tr>
							<th colspan="13">
								<div style="text-align: right;" class="pull-right">
									PV of Fund Available at Tertiary Age ($): 
								</div>
							</th> 
							<th><input type="text" id="txtFldRetEdPlgTotalPVCal" name="txtFldRetEdPlgTotalPVCal"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th> 
						</tr>
					</tfoot>
				</table>

				<!-- col2 end -->

			</div>


		</div>

		<!-- ******************************************************TAB 8************************************************ -->
	</div>
	<!-- End tab content(Model Body) -->
	<!-- 	</fieldset> -->
</div>
</div>
<!-- End Dialog pop up -->
		</div>
	</div>
</div>




<!-- Plan Details Dialog -->
<!-- Modal  -->

<div class="modal fade" id="liPlandets_Dialog" style="display: none"
tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog scrollModelBodyWidth1000" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4> 
		</div>
		<div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody60">
 
				<div class="col-md-6">
					<div class="form-group hidden" id="toggleBPlanName">
					
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label mandFldastrks pull-right text-right"
									for="txtFldDlgliplnName"> Plan
										Name*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
							<div class="autocomplete" style="width:300px;">
								<input id="txtFldDlgliplnName" name="txtFldDlgliplnName"
									class="form-control" type="text" maxlength="150"
									onmouseover="fipaTooltip(this);" autofocus="true" />
							  </div>
					</div>
				</div>
			</div>
			
			<div class="form-group hidden" id="toggleRPlanName">
					
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label mandFldastrks pull-right text-right"
									for="txtFldDlgRliplnName"> Plan
										Name*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
							<div class="autocomplete" style="width:300px;">
								<input id="txtFldDlgRliplnName" name="txtFldRDlgliplnName"
									class="form-control" type="text" maxlength="150"
									onmouseover="fipaTooltip(this);" autofocus="true" />
							  </div>
					</div>
				</div>
			</div>


			<div class="form-group hidden" id="toggleBasicPlans" >
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right text-right"
							for="selDlgliplntype"> Basic
								/ Rider*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<select name="selDlgliplntype" id="selDlgliplntype"
							class="form-control fld-resp-sm">
							<option value="">--SELECT--</option>
							<option value="B">BASIC</option>
<!-- 							<option value="R">RIDER</option> -->
						</select>
					</div>
				</div>
			</div>
			
			<div class="form-group hidden" id="toggleRiderPlans">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right text-right"
							for="selDlgliRdrplntype"> Rider / Benefit*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<select name="selDlgliRdrplntype" id="selDlgliRdrplntype"
							class="form-control fld-resp-sm">
							<option value="">--SELECT--</option> 
							<option value="R">RIDER</option>
							<option value="B">BENEFIT</option>
						</select>
					</div>
				</div>
			</div>


			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right text-right"
							for="txtFldDlgliplnPremTerm">Premium
								Term*
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
					<div class="input-group input-group-sm"> 
 							<label class="switchs" style="float:left">
								<input id="swtDlgliplnPremTerm" class="csscheckbox" type="checkbox" checked>
									 <span class="sliders round"></span>
									 <span class="absolute-no">WHOLE LIFE</span>
							</label>
						<input id="txtFldDlgliplnPremTerm" name="txtFldDlgliplnPremTerm"
									class="form-control applyEvntYrs" type="text" maxlength="20"
									onmouseover="fipaTooltip(this);" autofocus="true" style="width:100px;" />
                  					</div>
					</div>
				</div>
			</div>


			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right text-right"
							for="txtFldDlgliplnSA"> Sum Assured </label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" onmouseover="fipaTooltip(this);"
								name="txtFldDlgliplnSA" id="txtFldDlgliplnSA"
								class="form-control numbers applyEvntUsd" />
						</div>
					</div>
				</div>
			</div>

			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right text-right"
							for="txtFldDlgliplnPremAmt"> Premium Amount </label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" onmouseover="fipaTooltip(this);"
								name="txtFldDlgliplnPremAmt" id="txtFldDlgliplnPremAmt"
								class="form-control numbers applyEvntUsd" />
						</div>
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right"
							for="selDlgliplnPayMode">Payment Mode</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<select name="selDlgliplnPayMode" id="selDlgliplnPayMode"
							class="form-control fld-resp-mm">
							<option value="">--SELECT--</option>
							<option value="ANNUALLY">ANNUALLY</option>
							<option value="HALF YEARLY">HALF YEARLY</option>
							<option value="QUARTERLY">QUARTERLY</option>
							<option value="MONTHLY">MONTHLY</option>
							<option value="SINGLE">SINGLE</option>
							<c:if test="${not empty FREQUENCY_LIST}">
								<c:forEach var="paymode" items="${FREQUENCY_LIST}">
									<option value="${paymode.value}">${paymode.value}</option>
								</c:forEach>
							</c:if>
						</select>
					</div>
				</div>
			</div>


		</div>


		<div class="col-md-6">
 

			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right" for="selDlgliplnPayMtd">Payment
							method</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<select name="selDlgliplnPayMtd" id="selDlgliplnPayMtd"
							class="form-control fld-resp-mm">
							<option value="">--SELECT--</option>
							<c:if test="${not empty PAYMENTMODE_LIST}">
								<c:forEach var="paymthds" items="${PAYMENTMODE_LIST}">
									<option value="${paymthds}">${paymthds}</option>
								</c:forEach>
							</c:if> 
							
						</select>
					</div>
				</div>
			</div>


<!-- 			<div class="form-group"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgliplnCoverages"> Coverages</label> -->
<!-- 					</div> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6">   -->
<!-- 						<input id="txtFldDlgliplnCoverages" name="txtFldliplnCoverages" -->
<!-- 							class="form-control" type="text" maxlength="300" -->
<!-- 							onmouseover="fipaTooltip(this);" autofocus="true" /> -->

<!-- 								</div> -->
<!-- 							</div> -->
<!-- 						</div> -->
						
						
						<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right text-right"
							for="selDlgliplnCoverages">Coverage Benefits</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">  
						<select name="selDlgliplnCoverages" id="selDlgliplnCoverages"
									class="form-control" multiple="multiple">
									<c:if test="${not empty LI_TYPEOFCOVERAGE_LIST}">
										<c:forEach var="typeofcovrgelist"
											items="${LI_TYPEOFCOVERAGE_LIST}">
											<option value="${typeofcovrgelist.key}">${typeofcovrgelist.value}</option>
										</c:forEach>
									</c:if>
								</select> 
							<input type="hidden" name="hidDlgCoveragetype" id="hidDlgCoveragetype" /> 
								</div>
							</div>
						</div>
						
						<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label  pull-right text-right"
									for="txtFldDlgPlanIncDate"><span class="mandFldastrks">Inception Date
									<small>(DD/MM/YYYY)</small>*</span>
									&nbsp;<a class="btn btn-default addinfoicon"  id="poptxtFldDlgPlanIncDate"></a>
							</label>
								
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm fld-resp-mm date"
									id="PlnIncDatepicker">
									<input id="txtFldDlgPlanIncDate" name="txtFldDlgPlanIncDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" />
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right"
									for="txtFldDlgPlanExpDate"> Expiry Date
									<small>(DD/MM/YYYY)</small>
									&nbsp;<a class="btn btn-default addinfoicon"  id="poptxtFldDlgPlanExpDate"></a>
								 </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="input-group input-group-sm fld-resp-mm date"
									id="PlnExpDatepicker">
									<input id="txtFldDlgPlanExpDate" name="txtFldDlgPlanExpDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" />
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
							</div>
						</div>
					</div>




						<div class="form-group">
							<div class="row">
								<div class="col-md-6 col-sm-6 col-xs-6">
									<label class="control-label pull-right text-right"
										for="txtFldDlgliplnRemarks"> Remarks</label>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-6">
									<textarea name="txtFldDlgliplnRemarks"
										id="txtFldDlgliplnRemarks" class="form-control" rows="5"
										maxlength="300"></textarea>
 										

								</div>
							</div>
						</div>
						




					</div>


					<div class="form-group">
						<input type="hidden" name="txtFldDlgliplnId"  id="txtFldDlgliplnId" />
						 <input type="hidden" name="txtFldDlgliplnCrtdBy"  id="txtFldDlgliplnCrtdBy"/> 
						 <input	type="hidden" name="txtFldDlgliplnCrtdDate" id="txtFldDlgliplnCrtdDate"/>
							<input	type="hidden" name="txtFldDlgliplnMode" id="txtFldDlgliplnMode"/>
							<input type="hidden" id="hDlgPlanRefId" name="hDlgPlanRefId" />
							<input type="hidden" id="txtFldDlgliplnRefId" name="txtFldDlgliplnRefId" />
							
					</div>


				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>






<!-- Death Benefit Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liDeathBenf_Dialog" style="display: none;"
tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog scrollModelBodyWidth1000" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4> 
		</div>
		<div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody60">
 
				<div class="col-md-6">
				<fieldset  id="plan_details"><legend class="customFIPAStyle">Plan Details&nbsp;<a class="btn btn-default addinfoicon" id="popdeathbefdets" ></a>
				  </legend>
					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label pull-right text-right"
									for="txtFldDlgliDfPlnName">Plan
										Name </label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<input id="txtFldDlgliDfPlnName" name="txtFldDlgliDfPlnName"
									class="form-control" type="text" maxlength="150"
									onmouseover="fipaTooltip(this);"    disabled="true"/>

					</div>
				</div>
			</div>


			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label  pull-right text-right"
							for="txtFldDlgDfIncepDate"> Inception
								Date <small>(DD/MM/YYYY)</small>
						 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-mm date"
							id="DfIncepDatepicker">
							<input id="txtFldDlgDfIncepDate" name="txtFldDlgDfIncepDate"
								class="form-control fld-resp-mm"
								onmouseover="fipaTooltip(this);" type="text" maxlength="10"   disabled="true" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label  pull-right text-right"
							for="txtFldDlgDfExpiryDate">  Expiry
								Date <small>(DD/MM/YYYY)</small>
						 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-mm date"
							id="DfExpiryDatepicker">
							<input id="txtFldDlgDfExpiryDate" name="txtFldDlgDfExpiryDate"
								class="form-control fld-resp-mm"
								onmouseover="fipaTooltip(this);" type="text" maxlength="10"   disabled="true"/>
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		 	</fieldset>
	



		</div>


		<div class="col-md-6"> 
	<fieldset  id="ds_details"><legend class="customFIPAStyle">Death Benefits </legend>
      	<div style="min-height: 130px;">
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right  text-right"
							for="txtFldDlgDfTermOfCov">Term of Coverage*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6"> 
						<div class="input-group input-group-sm fld-resp-sm">
 							<input type="text" onmouseover="fipaTooltip(this);"	name="txtFldDlgDfTermOfCov"
											id="txtFldDlgDfTermOfCov" class="form-control numbers applyEvntYrs" />
										<div class="input-group-addon">
											<span class="glyphicon" id="symbolYrs"></span>
										</div>
									</div>
					</div>
				</div>
			</div>



			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right text-right"
							for="txtFldDlgDfDeathBenefit"> Death Benefit*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="txtFldDlgDfDeathBenefit"
								onmouseover="fipaTooltip(this);" id="txtFldDlgDfDeathBenefit"
											class="form-control numbers applyEvntUsd" />
									</div>
								</div>
							</div>
						</div>
						
						</div>
						</fieldset>

					</div>



					<div class="form-group">
						<input type="hidden" name="txtFldDlgDfId" id="txtFldDlgDfId"/> 
						<input type="hidden" name="txtFldDlgDfCrtdBy" id="txtFldDlgDfCrtdBy"/> 
						<input type="hidden" name="txtFldDlgDfCrtdDate" id="txtFldDlgDfCrtdDate"/>
						<input type="hidden" name="txtFldDlgDfMode" id="txtFldDlgDfMode"/>
					</div>

				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>





<!-- Disability Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liDisabilty_Dialog" style="display: none;"
tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog scrollModelBodyWidth1000" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4> 
		</div>
		<div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody70">
		 
	
	<div class="col-md-6"> 
	
      <fieldset  id="plan_details">
      	<legend class="customFIPAStyle">Plan Details&nbsp;<a class="btn btn-default addinfoicon" id="popdsbltydets"></a></legend>
      <div class="form-group">
	<div class="row" > 
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgDsPlanName" class="control-label  pull-right text-right">
            Plan Details </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <input type='text' class="form-control" id="txtFldDlgDsPlanName"
					name="txtFldDlgDsPlanName" maxlength="150"  
					onmouseover="fipaTooltip(this);" disabled="true"/>		
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
               <label for="txtFldDlgDsIncepDate" 
            class="control-label  pull-right text-right">
             Inception Date<small>(DD/MM/YYYY)</small> 
             </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <div class="input-group input-group-sm fld-resp-mm date"
									id="DsblIncptDatepicker">
									<input id="txtFldDlgDsIncepDate" name="txtFldDlgDsIncepDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true"/>
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
            </div> 
            </div>
      </div> 
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              		<label class="control-label  pull-right text-right" 
				 					for="txtFldDlgDsExpryDate">
				 					 Expiry Date <small>(DD/MM/YYYY)</small> 
				 					 </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
				 	<div class="input-group input-group-sm fld-resp-mm date"
									id="DsblExpryDatepicker">
									<input id="txtFldDlgDsExpryDate" name="txtFldDlgDsExpryDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true"/>
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>	
												
				 			</div>
            </div> 
            </div>
      
      
       
            </fieldset>
            </div>
            
				<div class="col-md-6">
<fieldset  id="disblity_details"><legend class="customFIPAStyle">Disability Details</legend>
<div>
					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label mandFldastrks pull-right text-right"
									for="selDlgliDsbltyTypes"> Types
										of Disability*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="selDlgliDsbltyTypes" id="selDlgliDsbltyTypes"
									class="form-control fld-resp-md">
									<option value="">--SELECT--</option>
									<c:if test="${not empty LI_DISABILITY_LIST}">
										  <c:forEach var="disability" items="${LI_DISABILITY_LIST}">
										    <option value="${disability.key}">${disability.value}</option>
										  </c:forEach>
										</c:if>	 
						</select>
					</div>
				</div>
			</div>
			
			
				<div class="form-group">
<fieldset  id="benefits"><legend class="customFIPAStyle">Year benefit to be payable</legend> 
<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right  text-right"
							for="txtFldDlgliDsbltyYrBegins"> 
								 Year Begins*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
					<input id="txtFldDlgliDsbltyYrBegins" name="txtFldDlgliDsbltyYrBegins"
									class="form-control  fld-resp-mm" type="text" maxlength="20"
									onmouseover="fipaTooltip(this);"  />
									 
					</div>
				</div>
			</div>

			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right  text-right"
							for="txtFldDlgliDsbltyYrCeases"> 
								Year Ceases*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
					<input id="txtFldDlgliDsbltyYrCeases" name="txtFldDlgliDsbltyYrCeases"
									class="form-control  fld-resp-mm" type="text" maxlength="20"
									onmouseover="fipaTooltip(this);"  />
						 
					</div>
				</div>
			</div> 
</fieldset>
</div>
			
			
			
			
		<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right text-right"
							for="txtFldDlgliDsbltyBenf"> Benefit </label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm  fld-resp-md">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="txtFldDlgliDsbltyBenf"
								onmouseover="fipaTooltip(this);" id="txtFldDlgliDsbltyBenf"
								class="form-control numbers applyEvntUsd" />
						</div>
					</div>
				</div>
			</div>

			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right text-right"
							for="txtFldDlgliDsbltyIncBenf"> Increment of Benefits
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm"> 
							<input type="text" name="txtFldDlgliDsbltyIncBenf"
								onmouseover="fipaTooltip(this);"
								id="txtFldDlgliDsbltyIncBenf"
											class="form-control numbers applyEvntpCent" />
											<div class="input-group-addon">
								<span class="glyphicon" id="symbolprCent"></span>
							</div>
									</div>
								</div>
							</div>
						</div>	
						
						
</div>
</fieldset>


			

					</div>


					<div class="form-group">
						<input type="hidden" name="txtFldDlgliDsbltyId" id="txtFldDlgliDsbltyId"/> 
						<input type="hidden" name="txtFldDlgliDsbltyCrtdBy" id="txtFldDlgliDsbltyCrtdBy"/> 
						<input type="hidden" name="txtFldDlgliDsbltyCrtdDate" id="txtFldDlgliDsbltyCrtdDate"/>
						<input type="hidden" name="txtFldDlgliDsbltyMode" id="txtFldDlgliDsbltyMode"/>
					</div>


				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>





<!-- Critical Illness Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liCrtclIllns_Dialog" style="display: none;"
tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog scrollModelBodyWidth1000" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4> 
</div>
		<div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody70">
			 
				<div class="col-md-6">
				<fieldset  id="plan_details"><legend class="customFIPAStyle">Plan Details&nbsp;<a class="btn btn-default addinfoicon" id="popcrtlildets"></a>
				</legend>
      	
      	<div class="form-group">
	<div class="row" > 
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgCrtlPlanName" class="control-label  pull-right text-right">
            Plan Details</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <input type='text' class="form-control" id="txtFldDlgCrtlPlanName"
					name="txtFldDlgCrtlPlanName" maxlength="150"  
					onmouseover="fipaTooltip(this);" disabled="true"/>		
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
               <label for="txtFldDlgCrtlsIncepDate" 
            class="control-label  pull-right text-right">
             Inception Date<small>(DD/MM/YYYY)</small> 
             </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <div class="input-group input-group-sm fld-resp-mm date"
									id="CrtlsIncptDatepicker">
									<input id="txtFldDlgCrtlsIncepDate" name="txtFldDlgCrtlsIncepDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true"/>
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label  pull-right text-right"
							for="txtFldDlgCrtlnsExpDate"> Expiry
								Date <small>(DD/MM/YYYY)</small>
					 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-mm date"
							id="CrtlnsExpDatepicker">
							<input id="txtFldDlgCrtlnsExpDate"
								name="txtFldDlgCrtlnsExpDate"
								class="form-control fld-resp-mm"
								onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
      	
      	</fieldset>
				</div>
				
				<div class="col-md-6">
<fieldset  id="crtls_details"><legend class="customFIPAStyle">Critical Illness</legend>
      	<div>
					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label mandFldastrks pull-right text-right"
									for="selDlgCrtlnsLvlDD"> Stages
										/ Level of DD*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="selDlgCrtlnsLvlDD" id="selDlgCrtlnsLvlDD"
									class="form-control fld-resp-md">
									<option value="">--SELECT--</option>
									<option value="ES">Early Stage</option>
									<option value="IS">Intermediate Stage</option> 
									<option value="AS">Advanced Stage</option>  
						</select>
					</div>
				</div>
			</div>



			





			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right text-right"
							for="txtFldDlgCrtlnsBenfAmt">  Benefit
								Amount*
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="txtFldDlgCrtlnsBenfAmt"
								onmouseover="fipaTooltip(this);" id="txtFldDlgCrtlnsBenfAmt"
								class="form-control numbers applyEvntUsd" />
						</div>
					</div>
				</div>
			</div>

			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right  text-right"
							for="txtFldDlgCrtlnsTermofBenf">
						 Term of Benefit*
							 </label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">

							<input type="text" onmouseover="fipaTooltip(this);"
								name="txtFldDlgCrtlnsTermofBenf"
											id="txtFldDlgCrtlnsTermofBenf"
											class="form-control numbers applyEvntYrs" />
										<div class="input-group-addon">
											<span class="glyphicon" id="symbolYrs"></span>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div class="form-group">
							<div class="row">
								<div class="col-md-6 col-sm-6 col-xs-6">
									<label class="control-label pull-right text-right"
										for="txtFldDlgCrtlnsRemarks"> Remarks </label>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-6">
									<textarea name="txtFldDlgCrtlnsRemarks"
										id="txtFldDlgCrtlnsRemarks" class="form-control" rows="3"
										maxlength="300"></textarea>


								</div>
							</div>
						</div>
						</div>
						</fieldset>


					</div>


					<div class="form-group">
						<input type="hidden" name="txtFldDlgCrtlnsId" id="txtFldDlgCrtlnsId"/> 
						<input type="hidden" name="txtFldDlgCrtlnsCrtdBy" id="txtFldDlgCrtlnsCrtdBy"/>
						 <input type="hidden" name="txtFldDlgCrtlnsCrtdDate" id="txtFldDlgCrtlnsCrtdDate"/>
						 <input type="hidden" name="txtFldDlgCrtlnsMode" id="txtFldDlgCrtlnsMode"/>
					</div>


				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>





<!-- Hospitalisation Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liHospitalisation_Dialog"
	style="display: none;" tabindex="-1" role="dialog"
aria-labelledby="myModalLabel">
<div class="modal-dialog scrollModelBodyWidth1000" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4> 
		</div>
		<div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody70">
			 
	
	<div class="col-md-6">
				<fieldset  id="plan_details"><legend class="customFIPAStyle">Plan Details&nbsp;<a class="btn btn-default addinfoicon" id="pophospdets"></a>
				</legend>
      	
      	<div class="form-group">
	<div class="row" > 
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgHospPlanName" class="control-label  pull-right text-right">
            Plan Details</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <input type='text' class="form-control" id="txtFldDlgHospPlanName"
					name="txtFldDlgHospPlanName" maxlength="150"  
					onmouseover="fipaTooltip(this);" disabled="true"/>		
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
               <label for="txtFldDlgHospIncepDate" 
            class="control-label  pull-right text-right">
             Inception Date<small>(DD/MM/YYYY)</small> 
             </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <div class="input-group input-group-sm fld-resp-mm date"
									id="HospIncptDatepicker">
									<input id="txtFldDlgHospIncepDate" name="txtFldDlgHospIncepDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true"/>
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label  pull-right text-right"
							for="txtFldDlgCrtlnsExpDate"> Expiry
								Date <small>(DD/MM/YYYY)</small>
					 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-mm date"
							id="HospExpDatepicker">
							<input id="txtFldDlgHospExpDate"
								name="txtFldDlgHospExpDate"
								class="form-control fld-resp-mm"
								onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
      	
      	</fieldset>
				</div>
				<div class="col-md-6">
<fieldset  id="hosp_details"><legend class="customFIPAStyle">Hospitality</legend>
      	<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right text-right"
							for="txtFldDlgHospAnnPrem">  
								Annual Premium ($)*
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="txtFldDlgHospAnnPrem"
								onmouseover="fipaTooltip(this);" id="txtFldDlgHospAnnPrem"
								class="form-control numbers applyEvntUsd" />
						</div>
					</div>
				</div>
			</div>
			
			
					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label class="control-label mandFldastrks pull-right text-right"
									for="txtFldDlgHospClsOfBenf"> Class
										of Benefit*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<input id="txtFldDlgHospClsOfBenf"
									name="txtFldDlgHospClsOfBenf" class="form-control fld-resp-sm" type="text"
									maxlength="10" onmouseover="fipaTooltip(this);"
							autofocus="true" />

					</div>
				</div>
			</div>




			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right  text-right"
							for="txtFldDlgHospTermOfCov">Term
								of Coverage*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">

							<input type="text" onmouseover="fipaTooltip(this);"
								name="txtFldDlgHospTermOfCov" id="txtFldDlgHospTermOfCov"
								class="form-control numbers applyEvntYrs" />
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolYrs"></span>
							</div>
						</div>
					</div>
				</div>
			</div>





			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label mandFldastrks pull-right text-right"
							for="txtFldDlgHospDedctble">  
								Deductible ($)*
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="txtFldDlgHospDedctble"
								onmouseover="fipaTooltip(this);" id="txtFldDlgHospDedctble"
								class="form-control numbers applyEvntUsd" />
						</div>
					</div>
				</div>
			</div>


			<div class="form-group">
				<div class="row required">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label class="control-label pull-right text-right"
							for="txtFldDlgHospCoIns"> Co-insurance(%) </label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">
							<input type='text' onmouseover="fipaTooltip(this);"
								class="form-control numbers applyEvntpCent"
											id="txtFldDlgHospCoIns" name="txtFldDlgHospCoIns" /> <span
											class="input-group-addon"> <span class="glyphicon"
											id="symbolprCent"></span>
										</span>
									</div>
								</div>
							</div>
						</div>

				<div class="form-group">
						<input type="hidden" name="txtFldDlgHospId" id="txtFldDlgHospId"/> 
						<input type="hidden" name="txtFldDlgHospCrtdBy" id="txtFldDlgHospCrtdBy"/> 
						<input type="hidden" name="txtFldDlgHospCrtdDate"  id="txtFldDlgHospCrtdDate" />
						<input type="hidden" name="txtFldDlgHospMode"  id="txtFldDlgHospMode" />
					</div>


</fieldset>
</div>


					


				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>


<!-- Retirement Plg Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liRetirementPlg_Dialog"
	style="display: none;" tabindex="-1" role="dialog"
aria-labelledby="myModalLabel">
<div class="modal-dialog scrollModelBodyWidth1000" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4>
		</div>
		<div class="modal-body ">
			<fieldset class="fieldsetClsborder" style="max-height: 65vh;padding: 4px;">
			 
				<div class="col-md-6">
				<fieldset  id="plan_details"><legend class="customFIPAStyle">Plan Details&nbsp;<a class="btn btn-default addinfoicon" id="popRetplgdets"></a></legend>
      	<div class="form-group">
	<div class="row" > 
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgRetPlgPlanName" class="control-label  pull-right text-right">
            Plan Details</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <input type='text' class="form-control" id="txtFldDlgRetPlgPlanName"
					name="txtFldDlgRetPlgPlanName" maxlength="150"  
					onmouseover="fipaTooltip(this);" disabled="true"/>		
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
               <label for="txtFldDlgRetPlgIncepDate" 
            class="control-label  pull-right text-right">
             Inception Date<small>(DD/MM/YYYY)</small> 
             </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <div class="input-group input-group-sm fld-resp-mm date"
									id="RetPlgncptDatepicker">
									<input id="txtFldDlgRetPlgIncepDate" name="txtFldDlgRetPlgIncepDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true"/>
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label  pull-right text-right"
							for="txtFldDlgRetPlgExpDate"> Expiry
								Date <small>(DD/MM/YYYY)</small>
					 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-mm date"
							id="RetPlgExpDatepicker">
							<input id="txtFldDlgRetPlgExpDate"
								name="txtFldDlgRetPlgExpDate"
								class="form-control fld-resp-mm"
								onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
      	
      	</fieldset>
      		
      		<fieldset  id="plan_details"><legend class="customFIPAStyle">Retirement Planning</legend>
      	<div>
      	<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6 ">
								<label class="control-label mandFldastrks pull-right text-right"
									for="txtFldDlgRetPlgCommOfAge"> Age Income Starts*
								</label>
							</div>

							<div class="col-md-6 col-sm-6 col-xs-6 ">
<!-- 							<select name="txtFldDlgRetPlgCommOfAge" id="txtFldDlgRetPlgCommOfAge" -->
<!-- 							class="form-control fld-resp-mm"> -->
<!-- 							<option value="">--SELECT--</option> -->
<!-- 							</select> -->
								 <div class="input-group input-group-sm fld-resp-sm">
									<input type="text" onmouseover="fipaTooltip(this);"
								id="txtFldDlgRetPlgCommOfAge" name="txtFldDlgRetPlgCommOfAge"
								class="form-control numbers applyEvntYrs calclifemvpvincome calclifemvpvretage" />
							<div class="input-group-addon">
								<span id="symbolYrs"></span>
							</div>
						</div> 
					</div>
				</div>
			</div>

			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label class="control-label mandFldastrks pull-right text-right"
							for="txtFldDlgRetPlgEndOfAge">  Age Income Ends*</label>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 ">
					<!-- <select name="txtFldDlgRetPlgEndOfAge" id="txtFldDlgRetPlgEndOfAge"
							class="form-control fld-resp-mm">
							<option value="">--SELECT--</option>
							</select> -->
 					<div class="input-group input-group-sm fld-resp-sm"> 
							<input onmouseover="fipaTooltip(this);" type="text"
								id="txtFldDlgRetPlgEndOfAge" name="txtFldDlgRetPlgEndOfAge"
								class="form-control numbers applyEvntYrs calclifemvpvincome" />
							<div class="input-group-addon">
								<span id="symbolYrs"></span>
							</div>
						</div>  
					</div>
				</div>
			</div>

			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label class="control-label mandFldastrks pull-right text-right"
							for="txtFldDlgRetPlgEscaltAge"> Escalation
								rate*</label>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<div class="input-group input-group-sm fld-resp-sm">
							<input onmouseover="fipaTooltip(this);"
								id="txtFldDlgRetPlgEscaltAge" name="txtFldDlgRetPlgEscaltAge"
								class="form-control numbers applyEvntpCent3" type="text" />
							<div class="input-group-addon">
								<span id="symbolprCent"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
      	
      	</div>
      	</fieldset>
		</div>


		<div class="col-md-6">
			<fieldset  id="retplg_details">
			<legend class="customFIPAStyle">Retirement Planning</legend>
      	<div style="min-height: 310px;"> 
					
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label class="control-label pull-right text-right"
							for="txtFldDlgRetPlgGTDIncome"> Gtd Income to be
							received fr policy </label>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" onmouseover="fipaTooltip(this);"
								name="txtFldDlgRetPlgGTDIncome" id="txtFldDlgRetPlgGTDIncome"
								class="form-control numbers applyEvntUsd26 calclifemvpvincome calclifemvpvretage calctotgtdamt" />
						</div>
					</div>
				</div>
			</div>
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label class="control-label pull-right text-right"
							for="txtFldDlgRetPlgNonGTDIncome"> Non-Gtd Income to
							be received fr policy </label>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" onmouseover="fipaTooltip(this);"
								name="txtFldDlgRetPlgNonGTDIncome"
								id="txtFldDlgRetPlgNonGTDIncome"
								class="form-control numbers applyEvntUsd26 calclifemvpvincome calclifemvpvretage calctotgtdamt" />
						</div>
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label class="control-label pull-right text-right"
							for="txtFldDlgRetPlgTotalIncome"> Total Income received </label>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" onmouseover="fipaTooltip(this);"
								name="txtFldDlgRetPlgTotalIncome"
								id="txtFldDlgRetPlgTotalIncome"
								class="form-control numbers applyEvntUsd26" />
						</div>
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label class="control-label pull-right text-right"
							for="txtFldDlgRetPlgAssBankIntRate"> Assumed Bank Interest Rate
							&nbsp;<a class="btn btn-default addinfoicon" id="poptxtFldDlgRetPlgAssBankIntRate"></a></label>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<div class="input-group input-group-sm fld-resp-sm">
							<input onmouseover="fipaTooltip(this);" type="text"
											id="txtFldDlgRetPlgAssBankIntRate"
											name="txtFldDlgRetPlgAssBankIntRate"
											class="form-control numbers applyEvntpCent3 calclifemvpvincome calclifemvpvretage">
										<div class="input-group-addon">
											<span id="symbolprCent"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						<div class="form-group">
							<div class="row" >
							   <div class="col-md-6 col-sm-6 col-xs-6 ">
						         <label class="control-label pull-right text-right" for="selDlgRetPlgRemarks"> 
						              Remarks</label>
						        </div> 
						        <div class="col-md-6 col-sm-6 col-xs-6"> 
							           <textarea name="selDlgRetPlgRemarks" id="selDlgRetPlgRemarks"   
											class="form-control"  rows="5" maxlength="300" ></textarea> 
							    </div>  
						   </div>
      				</div> 
      
      
<!-- 			<div class="form-group"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgRetPlgPVIncOfIncomePay">PV at inception of income payable </label> -->
<!-- 					</div> -->

<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<div class="input-group input-group-sm"> -->
<!-- 							<div class="input-group-addon"> -->
<!-- 								<span class="glyphicon" id="symbolUsd"></span> -->
<!-- 							</div> -->
<!-- 							<input type="text" onmouseover="fipaTooltip(this);" -->
<!-- 								name="txtFldDlgRetPlgPVIncOfIncomePay" -->
<!-- 								id="txtFldDlgRetPlgPVIncOfIncomePay" -->
<!-- 								class="form-control numbers applyEvntUsd26 calclifemvpvretage" /> -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->

<!-- 			<div class="form-group"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgRetPlgPVFValAtRetRate"> PV/FV to value at retirement age </label> -->
<!-- 					</div> -->

<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<div class="input-group input-group-sm"> -->
<!-- 							<div class="input-group-addon"> -->
<!-- 								<span class="glyphicon" id="symbolUsd"></span> -->
<!-- 							</div> -->
<!-- 							<input type="text" onmouseover="fipaTooltip(this);" -->
<!-- 								name="txtFldDlgRetPlgPVFValAtRetRate" -->
<!-- 								id="txtFldDlgRetPlgPVFValAtRetRate" -->
<!-- 								class="form-control numbers applyEvntUsd26" /> -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->

			

						<div class="form-group">
							<input type="hidden" name="txtFldDlgRetPlgCrtdBy" id="txtFldDlgRetPlgCrtdBy"/> 
							<input type="hidden" name="txtFldDlgRetPlgCrtdDate" id="txtFldDlgRetPlgCrtdDate" /> 
							<input type="hidden" name="txtFldDlgRetPlgId" id="txtFldDlgRetPlgId"/>
							<input type="hidden" name="txtFldDlgRetPlgMode" id="txtFldDlgRetPlgMode"/>
							<input type="hidden" name="txtFldDlgRetPlgRefId" id="txtFldDlgRetPlgRefId"/>
						</div>
						</div>
				</fieldset>		
					</div>

				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>


<!-- Education Plg Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liEducationPlg_Dialog"
	style="display: none;" tabindex="-1" role="dialog"
aria-labelledby="myModalLabel">
<div class="modal-dialog scrollModelBodyWidth1000" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4>
 
		</div>
		<div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody60">
			 
				<div class="row col-md-12">
				<div class="col-md-6">
					<fieldset  id="plan_details">
			<legend class="customFIPAStyle">Plan Details&nbsp;<a class="btn btn-default addinfoicon" id="popEduplgdets"></a></legend>
      	<div class="form-group">
	<div class="row" > 
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgEduPlgPlanName" class="control-label  pull-right text-right">
            Plan Details</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <input type='text' class="form-control" id="txtFldDlgEduPlgPlanName"
					name="txtFldDlgEduPlgPlanName" maxlength="150"  
					onmouseover="fipaTooltip(this);" disabled="true"/>		
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
               <label for="txtFldDlgEduPlgIncepDate" 
            class="control-label  pull-right text-right">
             Inception Date<small>(DD/MM/YYYY)</small> 
             </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <div class="input-group input-group-sm fld-resp-mm date"
									id="EduPlgcptDatepicker">
									<input id="txtFldDlgEduPlgIncepDate" name="txtFldDlgEduPlgIncepDate"
										class="form-control fld-resp-mm"
										onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true"/>
									<div class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</div>
								</div>
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label  pull-right text-right"
							for="txtFldDlgEduPlgExpDate"> Expiry
								Date <small>(DD/MM/YYYY)</small>
					 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-mm date"
							id="EduPlgExpDatepicker">
							<input id="txtFldDlgEduPlgExpDate"
								name="txtFldDlgEduPlgExpDate"
								class="form-control fld-resp-mm"
								onmouseover="fipaTooltip(this);" type="text" maxlength="10" disabled="true" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
      	
      	
      	</fieldset>
			
			
				</div>
				<div class="col-md-6"> 
					<fieldset  id="edu_details">
			<legend class="customFIPAStyle">Education Planning</legend>
				<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label for="selDlgEdPlgChldName"
									class="control-label pull-right"><span class="mandFldastrks">Name of child*</span>
									&nbsp;<a class="btn btn-default addinfoicon" id="popselDlgEdPlgChldName"></a></label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<select name="selDlgEdPlgChldName" id="selDlgEdPlgChldName"
									class="form-control">
									<option value="">--SELECT--</option>
								</select>
								<small class="chkchildexist hidden">No child found!</small>
							</div>


						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label for="txtFldDlgEdPlgTerEdcAge"
									class="control-label  pull-right"> <span
									class="mandFldastrks">Child Age(yrs)</span>
									&nbsp;<a class="btn btn-default addinfoicon" id="poptxtFldDlgEdPlgChldAge"></a></label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
							
							<div class="input-group input-group-sm fld-resp-sm">  
					           <input id="txtFldDlgEdPlgChldAge" name="txtFldDlgEdPlgChldAge"
									class="form-control fld-resp-mm" type="text" maxlength="20"
									onmouseover="fipaTooltip(this);" disabled="true" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div> 
							 
					</div>
				</div>
			</div>

					<div class="form-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<label for="txtFldDlgEdPlgTerEdcAge"
									class="control-label  pull-right"> <span
									class="mandFldastrks">Tertiary education age(yrs)*</span>
									&nbsp;<a class="btn btn-default addinfoicon" id="poptxtFldDlgEdPlgTerEdcAge"></a></label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
							
							<div class="input-group input-group-sm fld-resp-sm">  
					           <input id="txtFldDlgEdPlgTerEdcAge" name="txtFldDlgEdPlgTerEdcAge"
									class="form-control fld-resp-mm" type="text" maxlength="20"
									onmouseover="fipaTooltip(this);" autofocus="true" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div> 
							 
					</div>
				</div>
			</div>
			
			 
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label for="txtFldDlgEdPlgBankIntRate"
							class="control-label mandFldastrks  pull-right">Bank int rate*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">
							<input id="txtFldDlgEdPlgBankIntRate"
								name="txtFldDlgEdPlgBankIntRate"
								class="form-control applyEvntpCent26" type="text" />
							<div class="input-group-addon">
								<span id="symbolprCent"></span>
							</div>
						</div>
						<small class="bankratedefault highlightword hidden">By default 100%</small>
					</div>
				</div>
			</div>
			
			
			
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label for="txtFldDlgEdPlgLoanIntRate"
							class="control-label mandFldastrks  pull-right">Loan int rate*</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">
							<input id="txtFldDlgEdPlgLoanIntRate"
								name="txtFldDlgEdPlgLoanIntRate"
								class="form-control applyEvntpCent26" type="text" />
							<div class="input-group-addon">
								<span id="symbolprCent"></span>
							</div>
						</div> 
					</div>
				</div>
			</div>


			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label for="txtFldDlgEdPlgInfRate"
							class="control-label  pull-right"> Inflation rate
&nbsp;<a class="btn btn-default addinfoicon" id="poptxtFldDlgEdPlgInfRate"></a></label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">
							<input id="txtFldDlgEdPlgInfRate" name="txtFldDlgEdPlgInfRate"
								class="form-control applyEvntpCent26" type="text" />
							<div class="input-group-addon">
								<span id="symbolprCent"></span>
							</div>
						</div>
						<small class="infratedefault highlightword hidden">By default 100%</small> 
					</div>
				</div>
			</div>
				
				</fieldset>
				</div>

				


		</div>
		<div class="row col-md-12">
		<div class="form-group">
				<div class="table-responsive">
					<div class="  pull-right funcToDisable" role="group">
						<button type="button"
							class="btn btn-default navbar-btn addRow-icon"
							id="edPaytARow"></button> 
						<button type="button"
							class="btn btn-default navbar-btn delRow-icon-dup"
							id="edPaytDRow"></button> 
					</div>
				</div>
			<div class="table-responsive">
				<table id="liEduPayoutstbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					<thead class="fipaFldLblTextbold">
						<tr>
							<th>#</th> 
							<th>Select</th>
							<th>Income Pay Out Age<small>(yrs)</small></th>
							<th>Annual Pay Out Amount<small>($)</small></th>
							<th>PV/FV of Tertiary Education Age<small>($)</small></th> 
						</tr>
					</thead>
					<tbody></tbody>
					<tfoot id="pvEdAgeCalTablefooter">  
						<tr>
							<th colspan="4">
								<div style="text-align: right;" class="pull-right">
									PV of Fund Available at Tertiary Age<small>($)</small>: 
								</div>
							</th> 
							<th><input type="text" id="txtFldTotalPVCal" name="txtFldTotalPVCal"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th> 
						</tr>
					</tfoot>
				</table> 
			</div>
			
			
				<!-- col2 end -->

			</div>
			
			<div class="form-group">
							<input type="hidden" name="txtFldDlgEduPlgCrtdBy"  id="txtFldDlgEduPlgCrtdBy" /> 
							<input type="hidden" name="txtFldDlgEduPlgCrtdDate" id="txtFldDlgEduPlgCrtdDate"/>
							 <input type="hidden" name="txtFldDlgEduPlgId"  id="txtFldDlgEduPlgId"/>
							 <input type="hidden" name="txtFldDlgRefId" id="txtFldDlgRefId" />
							 <input type="hidden" name="txtFldDlgEduMode" id="txtFldDlgEduMode" />
						</div>
					</div>

				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>

 
<!-- Nominees -->
<!-- Modal  -->

<div class="modal fade" id="liNominees_Dialog" style="display: none"
tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title" id="myModalLabel"></h4> 
		</div>
		<div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody60">
		 
				<div class="col-md-12">
					<div class="form-group required">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6 ">
								<label class="control-label mandFldastrks pull-right text-right"
									for="txtFldDlgNomineeName">Nominee
										Name*</label>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<input type="text" id="txtFldDlgNomineeName"
									name="txtFldDlgNomineeName" class="form-control"
									onmouseover="fipaTooltip(this);" maxlength="150" />
								</div>
							</div>
						</div>

						<div class="form-group">
							<div class="row">
								<div class="col-md-6 col-sm-6 col-xs-6 ">
									<label class="control-label pull-right text-right"
										for="txtFldDlgNomineePercnt"> Percentage </label>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-6">
									<div class="input-group input-group-sm fld-resp-sm">
										<input type="text" name="txtFldDlgNomineePercnt"
											id="txtFldDlgNomineePercnt"
											class="form-control numbers applyEvntpCent" />
										<div class="input-group-addon">
											<span class="glyphicon" id="symbolprCent"></span>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div class="form-group">
							<input type="hidden" name="txtFldDlgNomineeId" id="txtFldDlgNomineeId" /> 
							<input type="hidden" name="txtFldDlgNomineeCrtdBy"  id="txtFldDlgNomineeCrtdBy"/>
							 <input type="hidden" name="txtFldDlgNomineeCrtdDate" id="txtFldDlgNomineeCrtdDate" />
							 <input type="hidden" name="txtFldDlgNomineeMode" id="txtFldDlgNomineeMode" />
						</div>
					</div>

				</fieldset>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>




<!-- Modal  -->
<!-- <div class="modal fade" id="HInsc_Dialog" style="display: none" -->
<!-- tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> -->
<!-- <div class="modal-dialog scrollModelBodyWidth1000" role="document"> -->
<!-- 	<div class="modal-content"> -->
<!-- 		<div class="modal-header"> -->
<!-- 			<button type="button" class="close" data-dismiss="modal" -->
<!-- 				aria-label="Close"> -->
<!-- 				<span aria-hidden="true">&times;</span> -->
<!-- 			</button> -->
<!-- 			<h4 class="modal-title" id="myModalLabel"></h4> -->
<!-- 		</div> -->
<!-- 		<div class="modal-body"> -->
<!-- 			<fieldset class="fieldsetClsborder scrollModelBody60"> -->
<!-- 			<div class="row col-md-12"> -->
<!-- 	 <span style="font-weight: bold;"><img src="images/menuicons/canvas.png" class="info" width="3%"><small> -->
<!-- 		All fields marked in maroon are required</small></span><div class="clearspace20"></div> -->
<!-- 	</div> -->
<!-- 				Col 1 -->
<!-- 		<div class="col-md-6"> -->
<!-- 			<div class="form-group"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgHIPolicyType"> <font color="maroon">Policy -->
<!-- 								type </font></label> -->
<!-- 					</div> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 						<input id="txtFldDlgHIPolicyType" name="txtFldDlgHIPolicyType" -->
<!-- 							class="form-control" type="text" maxlength="75" -->
<!-- 							onmouseover="fipaTooltip(this);" autofocus="true" /> -->

<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->


<!-- 			<div class="form-group"> -->
<!-- 				<div class="row required"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgHIInsured"> <font color="maroon"> -->
<!-- 								Insured </font></label> -->
<!-- 					</div> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 						<input id="txtFldDlgHIInsured" name="txtFldDlgHIInsured" -->
<!-- 							class="form-control" type="text" maxlength="60" -->
<!-- 							onmouseover="fipaTooltip(this);" /> -->

<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->



<!-- 			<div class="form-group"> -->
<!-- 				<div class="row required"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgHIBenfType"> <font color="maroon">Benefit -->
<!-- 								type </font></label> -->

<!-- 					</div> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 						<input type='text' class="form-control" -->
<!-- 							id="txtFldDlgHIBenfType" name="txtFldDlgHIBenfType" -->
<!-- 							maxlength="150" onmouseover="fipaTooltip(this);" /> -->

<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->





<!-- 			<div class="form-group"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgHIAmt">Amount </label> -->
<!-- 					</div> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 						<div class="input-group input-group-sm"> -->
<!-- 							<div class="input-group-addon"> -->
<!-- 								<span id="symbolUsd"></span> -->
<!-- 							</div> -->
<!-- 							<input type='text' onmouseover="fipaTooltip(this);" -->
<!-- 								class="form-control numbers applyEvntUsd" id="txtFldDlgHIAmt" -->
<!-- 								name="txtFldDlgHIAmt" /> -->

<!-- 						</div> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->


<!-- 		<div class="col-md-6"> -->

<!-- 			<div class="form-group"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgHIExpiry">Expiry <small>(DD/MM/YYYY)</small></label> -->

<!-- 					</div> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 						<div class="input-group input-group-sm fld-resp-mm date" -->
<!-- 							id="HIExpirypicker"> -->
<!-- 							<input id="txtFldDlgHIExpiry" name="txtFldDlgHIExpiry" -->
<!-- 								class="form-control fld-resp-mm" onmouseover="fipaTooltip(this);" -->
<!-- 								type="text" maxlength="10" /> -->
<!-- 							<div class="input-group-addon"> -->
<!-- 								<span class="glyphicon glyphicon-calendar"></span> -->
<!-- 							</div> -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->


<!-- 			<div class="form-group"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 						<label class="control-label pull-right text-right" -->
<!-- 							for="txtFldDlgHIAnnprem"> Annual Premium ($)</label> -->

<!-- 					</div> -->
<!-- 					<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 						<div class="input-group input-group-sm"> -->
<!-- 							<div class="input-group-addon"> -->
<!-- 								<span class="glyphicon" id="symbolUsd"></span> -->
<!-- 							</div> -->
<!-- 							<input type="text" name="txtFldDlgHIAnnprem" -->
<!-- 								id="txtFldDlgHIAnnprem" onmouseover="fipaTooltip(this);" -->
<!-- 								class="form-control numbers applyEvntUsd" /> -->
<!-- 									</div> -->
<!-- 								</div> -->
<!-- 							</div> -->
<!-- 						</div> -->


<!-- 						<div class="form-group"> -->
<!-- 							<div class="row"> -->
<!-- 								<div class="col-md-6 col-sm-6 col-xs-6 "> -->
<!-- 									<label class="control-label pull-right text-right" -->
<!-- 										for="txtFldDlgHIRmrks"> Remarks - Health condition? </label> -->

<!-- 								</div> -->
<!-- 								<div class="col-md-6 col-sm-6 col-xs-6"> -->
<!-- 									<textarea name="txtFldDlgHIRmrks" id="txtFldDlgHIRmrks" -->
<!-- 										class="form-control" rows="5" maxlength="300"></textarea> -->
<!-- 								</div> -->
<!-- 							</div> -->
<!-- 						</div> -->


<!-- 						<div class="form-group"> -->
<!-- 							<input type="hidden" name="txtFldDlgHICrtdBy" /> <input -->
<!-- 								type="hidden" name="txtFldDlgHICrtdDate" /> <input -->
<!-- 								type="hidden" name="txtFldDlgHInsId" /> -->
<!-- 						</div> -->

<!-- 					</div> -->

<!-- 				</fieldset> -->
<!-- 			</div> -->
<!-- 			<div class="modal-footer text-center"> -->
<!-- 				<button type="button" class="btn btn-primary">OK</button> -->
<!-- 				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
<!-- 			</div> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </div> -->



<div class="modal fade" id="clearmsglifeData"
	style="display: none;" tabindex="-1" role="dialog"
aria-labelledby="gridSystemModalLabel">
<div class="modal-dialog modal-sm" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title"></h4>
		</div>
		<div class="modal-body scrollModelBody60">
			<div  style="display: inline;"></div>
	<div id="msg" style="text-align: center; display: inline-block;">
					Do You want to clear existing policy information <font color="maroon">?</font>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div>



<div class="modal fade" id="deletemsglifeData"
	style="display: none;" tabindex="-1" role="dialog"
aria-labelledby="gridSystemModalLabel">
<div class="modal-dialog modal-sm" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h4 class="modal-title"></h4>
		</div>
		<div class="modal-body scrollModelBody60">
			<div  style="display: inline;"></div>
	<div id="msg" style="text-align: center; display: inline-block;">
					Are you sure want to delete the selected policy information<font color="maroon">?</font>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary">OK</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
</div> --%>

<!-- End -->
<!--******************************************************************************************************************************* -->

<!-- Life Insurance Details --> 
<!-- <input type="hidden" name="lipRefId" id="lipRefId" class="formHiddenIds"> -->
<!-- <input type="hidden" name="lipCreatedBy" id="lipCreatedBy" class="formHiddenIds"/> -->
<!-- <input type="hidden" name="lipCreatedDate" id="lipCreatedDate" class="formHiddenIds"/> -->
<!-- <!-- Life Insurance Coverage Details --> -->

<!-- <input type="hidden" name="txtFldCoverCrtdBy" id="txtFldCoverCrtdBy" class="formHiddenIds"/> -->
<!-- <input type="hidden" name="txtFldCoverCrtdDate" id="txtFldCoverCrtdDate" class="formHiddenIds"/> -->

<!-- <!--  --> -->

<!-- <input type="hidden" id="hPlanName" name="hPlanName" class="formHiddenIds"/> -->
<!-- <input type="hidden" id="hInceptionDate" name="hInceptionDate" class="formHiddenIds"/>  -->
<!-- <input type="hidden" id="hExpiryDate" name="hExpiryDate" class="formHiddenIds"/>  -->
<!-- <input type="hidden" id="hPaymentMtd" name="hPaymentMtd" class="formHiddenIds"/>  -->
<!-- <input type="hidden" id="hPlanRefId" name="hPlanRefId" class="formHiddenIds"/> -->
