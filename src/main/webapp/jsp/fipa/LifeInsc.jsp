<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div  class="panel-group">
  <div id="lifeinscsecion" class="accord-content">
    <div class="panel-body">
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
              <a id="liplandetails_id" href="#liplandetails" data-toggle="tab"> 
              <span class="glyphicon glyphicon-compressed"></span>&nbsp;Plan Details
              </a>
            </li>
            <!--***************************Types Of Coverage Links ***************************-->
            <!-- <li id="li_deathbenf"><a href="#li_DeathBenef_tab" data-toggle="tab"
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
              ***************************Objective Of Insurance Links ***************************
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
              </a></li> -->
          </ul>
          <div class="tab-content">
            <!-- ****************************************************** Existing Policy Tab ************************************************ -->
            <div class="tab-pane active fade in" id="existPolicyDetstab" style="height:130vh">
              <div class="col-md-12"> 
                <span class="panelHeaderTitle"> Existing Policies</span>
                <small	class="fipaFldLblText">
                ( <img src="images/menuicons/green-f.png" width="25px"	id="FipaLinkToFpms" /> denoted policy informations are retrieved from FPMS. For more policy details, click on the <img src="images/menuicons/green-f.png" width="25px"/>)
                </small>
              </div>
              <div class="col-md-12">
                <span class="panelHeaderTitle">  Life & Health Insurance (Plan Details)</span>
                <div class="btn-group" role="group">
                  <a class="btn btn-default addnewlife" id="addnewlife" onclick="openLifeScreen();"></a>
                  <a class="btn btn-default backToFdFlow" id="backToFdFlowLife"  onclick="openBackToFundFlow('expdSelfProploan');"></a>
                </div>
              </div>
              <div class="clearspace20"></div>
              
               <div class="row"> 
            <div class="col-sm-2 col-xs-2 col-md-2 col-lg-2 LifeHealthCardbgcol" id="deathCovBackground">
                <div class="bbb_adv d-flex flex-row align-items-center justify-content-start" >
                    <div class="bbb_adv_content">
                        <div class="bbb_adv_title">Death Coverage</div>
                        <div class="bbb_adv_text"><span class = "spanclasone" id="deathCoverages"> $0 </span> of <span class = "spanclastwo">$2,500,000</span></div>
                        <div class="bbb_adv_text">% covered</div>
                    </div>
                </div>
            </div>
          
            <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1 ">
            </div>
            
            <div class="col-sm-2 col-xs-2 col-md-2 col-lg-2 LifeHealthCardbgcol" id="tpdCovBackground">
                <!-- bbb_adv Item -->
                <div class="bbb_adv d-flex flex-row align-items-center justify-content-start">
                    <div class="bbb_adv_content">
                        <div class="bbb_adv_title">TPD Coverage</div>
                        <div class="bbb_adv_text"><span class = "spanclasone" id="tpdCoverages">$0</span> of <span class = "spanclastwo">$500,000</span></div>
                        <div class="bbb_adv_text">% covered</div>
                    </div>
                </div>
            </div>
            
            <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1 ">
            </div>
            
            <div class="col-sm-2 col-xs-2 col-md-2 col-lg-2 LifeHealthCardbgcol" id="earlyCiCovBackground">
                <div class="bbb_adv d-flex flex-row align-items-center justify-content-start">
                    <div class="bbb_adv_content">
                        <div class="bbb_adv_title">Early CI Coverage</div>
                        <div class="bbb_adv_text"><span class = "spanclasone" id="earlyCICoverages">$0 </span>of<span class = "spanclastwo"> $300,000</span></div>
                        <div class="bbb_adv_text">% covered</div>
                    </div>
                    
                </div>
            </div>
            
            <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1 ">
            </div>
            
            <div class="col-sm-2 col-xs-2 col-md-2 col-lg-2 LifeHealthCardbgcol" id="advCiCovBackground">
                <div class="bbb_adv d-flex flex-row align-items-center justify-content-start">
                    <div class="bbb_adv_content">
                        <div class="bbb_adv_title">Advance CI Coverage</div>
                        <div class="bbb_adv_text"><span class = "spanclasone" id="advancedCICoverages">$0 </span>of <span class = "spanclastwo">$500,000</span></div>
                        <div class="bbb_adv_text">% covered</div>
                    </div>
                    
                </div>
            </div>
            
             <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1">
            </div>
           
        </div>
        <div class="clearspace20"></div>
              <table id="existPolicyLHIns" class="dataTable table-bordered table-striped display hover" style="width: 100%">
                <thead class="fipaFldLblTextbold">
                  <!-- <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">
                      <div style="width: 150px">Application</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Insurer</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">Proposed</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">Life Assured</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy No.</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Plan Name</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Coverage Benefits</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy Status</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Sum Assured<small>($)</small></div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Annual Premium<small>($)</small></div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">LOB</div>
                    </th>
                  </tr> -->
                  <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">
                      <div style="width: 150px">Application</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Plan Name</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">Client Details</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy Number</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Coverage Benefits</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy Status</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Sum Assured</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Annual Premium</div>
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <div class="clearspace40"></div>
              <span class="panelHeaderTitle">UT and ILP (Fund	Details)</span> <br /><br />
              <table id="existPolicyUtlip" class="dataTable table-bordered table-striped display hover" style="width: 100%">
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">
                      <div style="width: 150px">Application</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Insurer</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">Proposed</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">Life Assured</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy No.</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Plan Name</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Coverage Benefits</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Inception Date<br><small>(DD/MM/YYYY)</small></div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy Status</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Sum Assured<small>($)</small></div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Annual Premium<small>($)</small></div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">LOB</div>
                    </th>
                  </tr>
                   <!-- <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">
                      <div style="width: 150px">Application</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Plan Name</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 160px">Client Details</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy Number</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 200px">Coverage Benefits</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Policy Status</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Sum Assured</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 80px">Annual Premium</div>
                    </th>
                  </tr> -->
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <!--******************************************Life Insurance Details TAB1*****************************    -->
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
                    <button type="button" class="btn btn-primary floatbtn rp-cf-btn-float hidden" id="btnSavePolicyPlan">
                    <span class="fa fa-bar-chart"></span>&nbsp;Save policy
                    </button>
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
                            <input type="hidden" id="retTotalSa" name="retTotalSa" />
                            <input type="hidden" id="retTotalPrem" name="retTotalPrem"  />
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
                          <!--   <small class="chkchildexist hidden">No child found!</small> -->
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
                              <%-- 									<c:if test="${not empty LI_PAYMENTS_LIST}"> --%>
                              <%-- 										<c:forEach var="payment" items="${LI_PAYMENTS_LIST}"> --%>
                              <%-- 											<option value="${payment}">${payment}</option> --%>
                              <%-- 										</c:forEach> --%>
                              <%-- 									</c:if> --%>
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
                    <!-- Col 6 end -->
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
                            <div class="autocomplete">
                              <input name="lipPlanname" id="lipPlanname"
                                class="form-control" type="text" maxlength="150"
                                onmouseover="fipaTooltip(this);" />
                            </div>
                            <!-- 							<select name="lipPlanname" id="lipPlanname" -->
                            <!-- 									class="form-control">  -->
                            <!-- 								</select> -->
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
                            </select>
                            <input type="hidden" name="lipCoveragetype"
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
                            </select>
                            <input type="hidden" name="lipIsnurObject"
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
                    <!-- col-6 end -->  
                  </div>
                  <div class="col-md-6">
                    <div id="NomineesTblDiv" class="NomineesTblDiv" style="display: none">
                      <!-- 						<hr class="border"> -->
                      <!-- 						<div class="form-group"> -->
                      <!-- 							<div class="row"> -->
                      <!-- 								<div class="col-md-10 col-sm-10 col-xs-10"> -->
                      <!-- 				<div class="table-responsive">  -->
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
                      <div class=""> 
                        <img src="images/menuicons/nomine.png" class="img-rounded" width="40" height="40" />
                        <span class="panelHeaderTitle">Add Nominee Name</span>
                      </div>
                      <!-- 					</div>   -->
                      <!-- 								</div> -->
                      <!-- 							</div> -->
                      <!-- 						</div> -->
                      <!-- 	<div class="row clearfix ">   -->
                      <!-- 						<div style="width: 440px;"> -->
                      <table id="fnaLINomineesTbl" class="dataTable table-bordered table-striped display hover"
                        style="width: 100%">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Select</th>
                            <th>
                              <div style="width:130px">Nominee Name<span class="mandFldastrks">*</span></div>
                            </th>
                            <th>
                              <div style="width:70px">Percentage<small>(%)</small></div>
                            </th>
                          </tr>
                        </thead>
                      </table>
                      <!-- 						</div> -->
                      <!-- 		</div>			 -->
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <!-- End lifeInsdetstab -->
            <!-- 				******************************************Life Insurance Details TAB1*****************************    -->
            <div class="tab-pane fade" id="liplandetails">
              <div class="headerFixDivision col-md-12" style="    margin-top: -11px;">
                <div class="">
                  <div class="">
                    <div class="col-md-3">
                      <small><img src="images/menuicons/canvas.png" class="info" width="15" >
                      Fields denoted <span class="mandFldastrks">*</span> is mandatory</small>
                    </div>
                    <div class="col-md-2" style="text-align:right;">
                      <span class="grpBoxTextTitle">Policy no:</span> 
                    </div>
                    <div class="col-md-2" style="text-align:left;">
                      <span id="newlifepolicyno"></span>
                    </div>
                    <div class="col-md-2" style="text-align:right;">
                      <span class="grpBoxTextTitle">Principal Name:</span> 
                    </div>
                    <div class="col-md-3" style="text-align:left;">
                      <span id="newlifeprinname"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12" style="top: 4px; left: -10px;">
                <div class="alert alert-danger hidden" id="noplanavailable" role="alert">
                  <strong>No Basic and Rider Plans Available</strong>  
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="row row-eq-height">
                  <div class="col-md-2 cvbgcync">
                     <table class="table hover no-border">
                      <tbody>
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                  <label for="" class="text-right">Type of plan</label>&nbsp;<a class="btn btn-default pull-right genAddBProicon" id="genBasicicon" ></a> 
                                  
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">                              
                                <label for="" class="text-right">Plan name<span style="color:white;font-weight:bold;">*</span></label>                              
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lbltypesofbenefits" class="text-right">Types of Benefits</label>
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">                              
                                <label for="lblsumassured" class="text-right">Sum Assured<span style="color:white;font-weight:bold;">*</span></label>                              
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">                            
                                <label for="lblpremium" class="text-right">Premium<span style="color:white;font-weight:bold;">*</span></label>                            
                            </div>
                          </td>
                        </tr>
                        
                        
                        
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblinceptdate" class="text-right">Inception Date<span style="color:white;font-weight:bold;">*</span></label>
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblpremterm" class="text-right">Premium Term<span style="color:white;font-weight:bold;">*</span></label>
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblpoldate" class="text-right">Policy Expiry Date</label>
                            </div>
                          </td>
                        </tr>                        
                        
                        
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblpaymode" class="text-right">Payment Mode</label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblpaymethod" class="text-right">Source of Payment</label>
                            </div>
                          </td>
                        </tr>  
                        
                         <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblpaymethod" class="text-right">Payment Method</label>
                            </div>
                          </td>
                        </tr>
			
			<tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblinscashvalue" class="control-label">Insurance Cash Value</label>
                            </div>
                          </td>
                        </tr>
			
			<tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lbllifeinsloans" class="control-label">Life insurance loans</label>
                            </div>
                          </td>
                        </tr>
			
			                      
                        <tr>
                          <td class="cvborder-topbottom-head">
                            <div class="height4vh">
                                <label for="lblremarks" class="text-right">Remarks</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div class="col-md-10 cvplnleftpanel">
                      <table id="cvplnleftpaneltbl" class="table hover no-border">
                        <tbody>
                          <tr>
                            <td class="cvborder-bottom basicplantd">
                              <div class="hiddens">
                                <input type="hidden" name="txtFldplanRefId" id="txtFldplanTefIdB01" class="defaultvalues"/><!--0Created By -->
                                <input type="hidden" name="txtFldplanCtBy" id="txtFldplanCtByB01"/><!-- 1Created By -->
                                <input type="hidden" name="txtFldplanCtDate" id="txtFldplanCtDateB01" class="defaultvalues"/><!-- 2Created Date -->
                                <input type="hidden" name="txtFldplanYsto" id="txtFldplanYstoB01"/><!-- 3Yrs to ret -->
                                <input type="hidden" name="txtFldplanSelfAge" id="txtFldplanSelfAgeB01" class="defaultvalues"/><!-- 4Co-self age -->
                                <input type="hidden" name="txtFldplanSpouseAge" id="txtFldplanSpouseAgeB01" class="defaultvalues"/><!-- 5Co-spouse age -->
                                <input type="hidden" name="txtFldplanMultion" id="txtFldplanMultionB01"/> <!-- 6Mulition  -->
                                <input type="hidden" name="txtFldplanCashvalon" id="txtFldplanCashvalonB01"/><!-- 7Cash value on Ret -->
                                <input type="hidden" name="txtFldplanIntrateused" id="txtFldplanIntrateusedB01"/><!-- 8Int rate used -->
                                <input type="hidden" name="txtFldplanPrcnttoused" id="txtFldplanPrcnttousedB01"/><!-- 9Prct used-->
                                <input type="hidden" name="txtFldplanCashvalAge" id="txtFldplanCashvalAgeB01"/><!-- 10Cash value on ret -->
                                <input type="hidden" name="txtFldplanCashvalTefId" id="txtFldplanCashvalTefIdB01"/><!-- 11Cash val Ref Id --> 
                                <input type="hidden" name="txtFldplnDetMode" id="txtFldplnDetModeB01"  class="defaultvalues"/><!-- 12-->
                                <input type="hidden" name="txtFldliplnId" id="txtFldliplnIdB01" class="pkidclass defaultvalues"/><!-- 13 -->
                                <input type="hidden" name="txtFldBasicRefId" id="txtFldBasicRefIdB01"  class="defaultvalues"/><!-- 14 -->
                                <input type="hidden" name="txtFldfnaId" id="txtFldfnaIdB01" /><!-- 15 -->
                                <input type="hidden" name="txtFldlipId" id="txtFldlipIdB01" /><!-- 16 -->
                                <input type="hidden" name="txtFldTotalRiders" id="txtFldTotalRidersB01"  class="defaultvalues"/><!-- 17 -->
                                <input type="hidden" name="txtFldlipplanSyncId" id="txtFldlipplanSyncIdB01"  class="defaultvalues"/><!-- 18 -->
                              </div>
                              <div class="covM0 height4vh">
                                  <div class="input-group input-group-sm fld-resp-mm">
                                    <input type="text" name="txtFldTfplan"  id="txtFldTfplanB00"  onmouseover="fipaTooltip(this);" 
                                      class="form-control fld-resp-sm br-none basiclabel defaultvalues"  value="Basic" maxlength="20" readonly="true" onchange="onchangePlanMode(this)">
                                    <span class="label label-success lblbadgeSuc" >B1</span> 
                                    <div class="input-group-addon bgwhite">
                                      <a class="btn btn-default genAddRProicon" id="genRidericon"  onclick="genRiderfn(this,true,null);" ></a>
                                      <a class="btn btn-default basicDelIcon" id="basicDelbtn"  onclick="delBRfn(this);" ></a>
                                    </div>
                                  </div>
                              </div>
                            </td>
                          </tr>
                          <!-- row2 -->
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh" >                                  
                                  <div class="autocomplete">
                                    <input name="selplan" id="selplanB00" class="form-control fld-resp-md" type="text" maxlength="150" 
                                    onmouseover="fipaTooltip(this);"  onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);newlifeRetPlan(this);"/>
                                  </div>
                              </div>
                            </td>
                          </tr>
                          <!-- row3 -->
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <div class="input-group input-group-sm fld-resp-mm" >
                                    <select name="selCoverages" id="selCoveragesB00"
                                      class="form-control fld-resp-mm multibenefits"   
                                      multiple="multiple" onchange="multibenefits(this);onchangePlanMode(this)">
                                      <%-- 									<c:if test="${not empty LI_TYPEOFCOVERAGE_PROLIST}"> --%>
                                      <%-- 										<c:forEach var="typeofcovrgelist" --%>
                                      <%-- 											items="${LI_TYPEOFCOVERAGE_PROLIST}"> --%>
                                      <%-- 											<option value="${typeofcovrgelist.key}">${typeofcovrgelist.value}</option> --%>
                                      <%-- 										</c:forEach> --%>
                                      <%-- 									</c:if> --%>
                                      <option value="DB">Death Benefit</option>
                                      <option value="DIS">Disability</option>
                                      <option value="TPD">TPD</option>
                                      <option value="CIA">Critical Illness Advance</option>
                                      <option value="CIE">Critical Illness Early</option>
                                      <option value="PA">PA</option>
                                      <option value="HP">Hospitalisation</option>
                                      <option value="RP">Retirement</option>
                                      <option value="EP">Education</option>
                                    </select>
                                    <input type="hidden" name="hselCoverages"  id="hselCoveragesB00"/> 
                                    <div class="input-group-addon bgwhite">
                                      <a class="btn btn-default covrgico" id="covrgico" onclick="ForCoverageClone(this);" ></a>
                                    </div>
                                  </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <div class="input-group input-group-sm" >
                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                                    <input name="txtFldSA" id="txtFldSAB00"  class="form-control fld-resp-sm numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this);ilifeInsPremium(null);calcTotSAPremPlandetails();">
                                  </div>
                              </div>
                            </td>
                          </tr>
                           <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <div class="input-group input-group-sm fld-resp-mm">
                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                                    <input name="txtFldPrem"  id="txtFldPremB00" class="form-control fld-resp-sm numbers applyEvntUsd cashflowst" type="text" onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
                                  </div>
                              </div>
                            </td>
                          </tr>
                          <!-- row4 -->		
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <div class="input-group input-group-sm fld-resp-mm date" id="txtFldIncDatePickeB00">
                                    <input name="txtFldIncDate"  id="txtFldIncDateB00" class="form-control fld-resp-mm cashflowst" onmouseover="fipaTooltip(this);" type="text" maxlength="10" onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);changeNRExpDate(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
                                    <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div>
                                  </div>
                              </div>
                            </td>
                          </tr>
                          <!-- row5 --> 
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <div class="input-group input-group-sm fld-resp-mm " >
                                    <div class="input-group-addon"><span><label class="switchs" style="float:left">
                                      <input id="txtFldswtPremTermB00" class="csscheckbox cashflowst" type="checkbox" checked onchange="onchangePremTerm(this);onchangePlanMode(this);changeNRExpDate(this);ilifeInsPremium(null);calcTotSAPremPlandetails();">
                                      <span class="sliders round"></span>
                                      <span class="absolute-no"><small>WHOLE LIFE</small></span>
                                      </label></span>
                                    </div>
                                    <input name="txtFldPremTr"  id="txtFldPremTrB00" class="form-control fld-resp-sm font10 cashflowst" type="text" maxlength="75" onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);changeNRExpDate(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
                                  </div>
                              </div>
                            </td>
                          </tr>
                          <tr> 
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <div class="input-group input-group-sm fld-resp-mm date" id="txtFldPolExpDatePickeB00">
                                    <input  name="txtFldPolExpDate" id="txtFldPolExpDateB00" class="form-control fld-resp-mm" onmouseover="fipaTooltip(this);" type="text" maxlength="10" onchange="onchangePlanMode(this);onchangeExpDate(this);newlifesyncCPF(this);newlifesyncSRS(this);newlifeRetPlan(this);">
                                    <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div>
                                  </div>
                              </div>
                            </td>
                          </tr>
                          <!-- row8 -->  
                           
                          <!-- row9 --> 
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <select name="selPaymode" id="selPaymodeB00"
                                    class="form-control fld-resp-mm cashflowst" onchange="chkPaymentMode(this);onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
                                    <option value="">--SELECT--</option>
                                    <option value="ANNUALLY">ANNUALLY</option>
                                    <option value="HALF YEARLY">HALF YEARLY</option>
                                    <option value="QUARTERLY">QUARTERLY</option>
                                    <option value="MONTHLY">MONTHLY</option>
                                    <option value="SINGLE">SINGLE</option>
                                  </select>
                              </div>
                            </td>
                          </tr>
                          <!-- row10 -->
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <select name="selPaymtd" id="selPaymtdB00"
                                    class="form-control fld-resp-mm cashflowst" onchange="onchangePlanMode(this);chkPrevMandatory(this);newlifesyncCPF(this);newlifesyncSRS(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
                                    <option value="">--SELECT--</option>
                                    <%-- <c:if test="${not empty LI_PAYMETHODS_LIST}">
                                      <c:forEach var="paymthds" items="${LI_PAYMETHODS_LIST}">
                                        <option value="${paymthds}">${paymthds}</option>
                                      </c:forEach>
                                    </c:if> --%>
                                    
                                    <option value="CASH">Cash/CHQ</option>
                              		<option value="SRS">SRS</option>
                             		<option value="CPFOA">CPFOA</option>
                              		<option value="CPFSA">CPFSA</option>
                              		<option value="CPFMA">CPFMA</option>
                                  </select>
                              </div>
                            </td>
                          </tr>
                          
                          <tr>
                            <td class="cvborder-topbottom">
                              <div class="covM0 height4vh">
                                  <select name="selPaymtdBy" id="selPaymtdByB00"
                                    class="form-control fld-resp-mm " onchange="">
                                    <option value="">--SELECT--</option>
                                   <%--  <c:if test="${not empty LI_PAYMETHODS_LIST}">
                                      <c:forEach var="paymthds" items="${LI_PAYMETHODS_LIST}">
                                        <option value="${paymthds}">${paymthds}</option>
                                      </c:forEach>
                                    </c:if> --%>
                                    <option value="CASH">Cash</option>
                              		<option value="GIRO">GIRO</option>
	                             	 <option value="INTERNET">Internet</option>
	                              	<option value="CRDTCARD">Credit Card</option>
                                  </select>
                              </div>
                            </td>
                          </tr>
			  
			  	<!-- row12 -->
		<tr><td class="cvborder-topbottom">
                              <div class="covM0 height4vh">	
         <div class="input-group input-group-sm fld-resp-mm" >
        <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
   		  <input name="txtFldInsCashVal" id="txtFldInsCashValB00"  class="form-control fld-resp-sm numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this)">
   		 </div> 
   		 </div>
   		</td></tr>
		
		<!-- row13 -->
		<tr><td class="cvborder-topbottom">
                              <div class="covM0 height4vh">	
        <div class="input-group input-group-sm fld-resp-mm" >
        <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
   		  <input name="txtFldLifeInsLoans" id="txtFldLifeInsLoansB00"  class="form-control fld-resp-sm numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this)">
   		 </div> 
   		 </div>
   		</td></tr>
		
                          <!-- row14 -->						
                          <tr>
                            <td class="cvborder-top">
                              <div class="covM0 height4vh">
                                <textarea name="selmarks" id="selmarksB00" class="form-control fld-resp-mm" rows="1" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this)"></textarea>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                  
                  
                  
                </div>
                <div id="PLANCOV_APD"  >
                  <div id="plancovMandatoryFlds">
                    <div id="visCover" style="display:none;">
                    <div class="row">
                    
                    <table class="table table-bordered display hover" style="min-width:35%;max-width:75%">                    	
                    	<tbody>                        
                        <tr>
                          <td align="right"><strong>Plan Name :</strong> </td>
                          <td colspan="5"><span class='control-label' id='covPlanName'></span></td>
                        </tr>
                        <tr>
                          <td align="right"><strong>Type of Benefit :</strong> </td>                          
                          <td  colspan="5"><span class='control-label  ' id='covTypeofbenefit'></span></td>
                        </tr>
                        <tr>
                          <td align="right"><strong>Basic/Rider :</strong> </td>
                          <td><span class='control-label  ' id='covBasicRider'></span></td>
                          
                          <td align="right"><strong>Inception Date :</strong> </td>
                          <td><span class='control-label  ' id='covInception'></span></td>
                          
                          <td align="right"><strong>Expiry Date :</strong> </td>
                          <td><span class='control-label' id='covExpiry'>
                            </span>
                            <input type="hidden"  id="covRef"/><input type="hidden"  id="syncRef"/><input type="hidden"  id="tdindex"/>
                            <input type="hidden"  id="covMode" value="I"/>
                            <input type="hidden"  id="covPayMtd" value=""/>
                            <input type="hidden"  id="covMultion" value=""/>
			     			<input type="hidden"  id="covSA" value=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </td>
                          
                        </tr>
                        </tbody>
                      </table>
                    
                    </div>
                      
                      <div class="clearspace10"></div>
                      <div class="row">
                  		<div style="overflow:auto;">
                     <table id="plancoveragetbl" class="dataTable table-bordered display hover" style="width:40%;min-width:40%" >
                       <thead>
                         <tr>
                           <th style="background: #74828a;color: #fff;width:18%"  class="coverageTh" >
                             <div style="width:200px;">
                               Types of Benefit/Coverages 
<!--                                <a class="btn btn-default covrgicoAdd" id="incovrgicoAdd" rel="popover"  data-popover-content="#covAddPopContent" ></a> -->
<!--                               --> 
									
	                                </div>
	                              </th>
	                              <th>
	                                <div >Death Benefit
	                                  <input type="hidden"  id="hdeathbenf" name="hCoverageType" value="Death_Benefit">
	                                </div>
	                              </th>
	                              <th>
	                                <div >Disability
	                                  <input type="hidden"  id="hdisability" name="hCoverageType" value="Disability">
	                                </div>
	                              </th>
	                              <th>
	                                <div >TPD
	                                  <input type="hidden"  id="hTpd" name="hCoverageType" value="TPD">
	                                </div>
	                              </th>
	                              <th>
	                                <div >CI - Advanced
	                                  <input type="hidden"  id="hCIAdvanced" name="hCoverageType" value="CI-Advanced">
	                                </div>
	                              </th>
	                              <th>
	                                <div >CI - Early
	                                  <input type="hidden"  id="hCIEarly" name="hCoverageType" value="CI-Early">
	                                </div>
	                              </th>
	                              <th>
	                                <div >PA</div>
	                                <input type="hidden"  id="hPA" name="hCoverageType" value="PA">
	                              </th>
	                              <th>
	                                <div >HSP</div>
	                                <input type="hidden"  id="hHSP" name="hCoverageType" value="Hospitalisation">
	                              </th>
	                              <th>
	                                <div >Retirement
	                                  <input type="hidden"  id="hRetirement" name="hCoverageType" value="Retirement_Planning">
	                                </div>
	                              </th>
	                              <th>
	                                <div >Education
	                                  <input type="hidden"  id="hEducation" name="hCoverageType" value="Education_Planning">
	                                </div>
	                              </th>
	                            </tr>
	                          </thead>
	                          <tbody>
	                            <tr>
	                              <td  class="coverageTh selectedd" align="right">
	                                <div style="width:200px;">Multiplier/Booster Factor
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmulBootDeath">
	                                     
	                                    <input id="mulBootDeath" name="mulBootDeath" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();toCalMAA('mulBootDeath','maaDeath')">   		  
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmulTPD">
	                                    
	                                    <input id="mulTPD" name="mulTPD" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();toCalMAA('mulTPD','maaTPD')">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmulCriIllAdv">
	                                    
	                                    <input id="mulCriIllAdv" name="mulCriIllAdv" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();toCalMAA('mulCriIllAdv','maaCriIllAdv')">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmulCriIllErly">
	                                     
	                                    <input id="mulCriIllErly" name="mulCriIllErly" class="form-control numbers applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();toCalMAA('mulCriIllErly','maaCriIllErly')">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmulPA">
	                                     <input id="mulPA" name="mulPA" class="form-control numbers applyEvntUsd" type="text"   onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();toCalMAA('mulPA','maaPA')">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmulHSP">
	                                      <input id="mulHSP" name="mulHSP" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();toCalMAA('mulHSP','maaHSP')">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center" rowspan="12" style="background: #00a78673;">
	                                <div >
	                                  <div id="btnForRetirementClone">
	                                    <button type="button" class="btn btn-default retirementclone" onclick="ForRetirementClone()">--More in Detail--</button>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center" rowspan="12" style="background: #00a78673;">
	                                <div >
	                                  <div id="btnForEducationClone">
	                                    <button type="button" class="btn btn-default educationclone" onclick="ForEducationClone()">--More in Detail--</button>
	                                  </div>
	                                </div>
	                              </td>
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">
	                                  Min Amt Assured(MAA) after Multi./Booster
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaaDeath">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="maaDeath" name="maaDeath" class="form-control numbers applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaaTPD">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="maaTPD" name="maaTPD" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaaCriIllAdv">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="maaCriIllAdv" name="maaCriIllAdv" class="form-control numbers applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaaCriIllErly">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="maaCriIllErly" name="maaCriIllErly" class="form-control numbers applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaaPA">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="maaPA" name="maaPA" class="form-control numbers applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaaHSP">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="maaHSP" name="maaHSP" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                     <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td>		  -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">
	                                  Expiry Age of MAA 
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divexpDeath">
	                                    <input id="expDeath" name="expDeath" class="form-control applyEvntYrs" type="text"   onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrsOld">yrs old</span>
	                                    </div>
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divexpTPD">
	                                    <input id="expTPD" name="expTPD" class="form-control applyEvntYrs" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                     <span id="symbolYrsOld">yrs old</span>
	                                    </div>
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divexpCriIllAdv">
	                                    <input id="expCriIllAdv" name="expCriIllAdv" class="form-control applyEvntYrs" type="text" maxlength="20" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrsOld">yrs old</span>
	                                    </div>
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm " id="divexpCriIllErly">
	                                    <input id="expCriIllErly" name="expCriIllErly" class="form-control applyEvntYrs" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrsOld">yrs old</span>
	                                    </div>
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divexpPA" >
	                                    <input id="expPA" name="expPA" class="form-control applyEvntYrs" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrsOld">yrs old</span>
	                                    </div>
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div  >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divexpHSP">
	                                    <input id="expHSP" name="expHSP" class="form-control applyEvntYrs" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrsOld">yrs old</span>
	                                    </div>
	                                   <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td>	  -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">
	                                 Benefit Pay Out Period
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divyrPayDeath">
	                                    <input id="yrPayDeath" name="yrPayDeath" class="form-control applyEvntYrs" type="text" value="1" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrs"></span>
	                                    </div>
	                                  </div>
	                                </div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divyrPayCriIllErly">
	                                    <input id="yrPayCriIllErly" name="yrPayCriIllErly" class="form-control applyEvntYrs" type="text" value="1" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrs"></span>
	                                    </div>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divyrPayPA">
	                                    <input id="yrPayPA" name="yrPayPA" class="form-control applyEvntYrs" type="text"  onmouseover="fipaTooltip(this);"  value="1" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrs"></span>
	                                    </div>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divyrPayHSP">
	                                    <input id="yrPayHSP" name="yrPayHSP" class="form-control applyEvntYrs" type="text"  value="1" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon">
	                                      <span id="symbolYrs"></span>
	                                    </div>
	                                  </div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td>		  -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Disability Benefit</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divdisBenefit">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="disBenefit" name="disBenefit" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divdisTPD">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="disTPD" name="disTPD" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divdisCriIllAdv">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="disCriIllAdv" name="disCriIllAdv" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                  </div>
	                                </div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td>		  -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Yrs of disability payout (yr)</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divdisPayout">
	                                    <input id="disPayout" name="disPayout" class="form-control applyEvntYrs" type="text"   onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divdisPayoutTPD">
	                                    <input id="disPayoutTPD" name="disPayoutTPD" class="form-control applyEvntYrs" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divdisPayoutCriIllAdv">
	                                    <input id="disPayoutCriIllAdv" name="disPayoutCriIllAdv" class="form-control applyEvntYrs" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
	                                  </div>
	                                </div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td>		  -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Max payout age (age)</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaxPayout">
	                                    <input id="maxPayout" name="maxPayout" class="form-control applyEvntYrs" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
	                                    <span class="mandFldastrks" style="position: absolute;">*</span>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaxPayoutTPD">
	                                    <input id="maxPayoutTPD" name="maxPayoutTPD" class="form-control applyEvntYrs" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divmaxPayoutCriIllAdv">
	                                    <input id="maxPayoutCriIllAdv" name="maxPayoutCriIllAdv" class="form-control applyEvntYrs" type="text" maxlength="20" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
	                                  </div>
	                                </div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Type of HS benefit</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divtypHSBenefit"><input id="typHSBenefit" name="typHSBenefit" class="form-control" type="text" maxlength="150" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();"></div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Deductible Benefits</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divdedHSBenefit">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="dedHSBenefit" name="dedHSBenefit" class="form-control applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                  </div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Co-Insurance Benefits</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div class="input-group input-group-sm fld-resp-mm" id="divinsHSBenefit">
	                                    <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
	                                    <input id="insHSBenefit" name="insHSBenefit" class="form-control applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                  </div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Descriptions</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td>
	                                <div >&nbsp;</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divdesHSBenefit">
	                                    <input id="desHSBenefit" name="desHSBenefit" class="form-control" type="text" maxlength="150" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                  </div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                            </tr>
	                            <tr>
	                              <td  class="coverageTh" align="right">
	                                <div style="width:200px;">Remarks</div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divremarks1">
	                                    <input id="remarks1" name="remarks" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <input type="hidden"  id="hdeathbenfPK" name="hCoveragePKId"> 
	                                    
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divremarks2">
	                                    <input id="remarks2" name="remarks" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <input type="hidden"  id="hdisablebenfPK" name="hCoveragePKId">
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divremarks3">
	                                    <input id="remarks3" name="remarks" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <input type="hidden"  id="hTPDbenfPK" name="hCoveragePKId">
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divremarks4">
	                                    <input id="remarks4" name="remarks" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <input type="hidden"  id="hciadvancedbenfPK" name="hCoveragePKId">
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divremarks5">
	                                    <input id="remarks5" name="remarks" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <input type="hidden"  id="hciearlybenfPK" name="hCoveragePKId">
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divremarks6">
	                                    <input id="remarks6" name="remarks" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <input type="hidden"  id="hpabenfPK" name="hCoveragePKId">
	                                  </div>
	                                </div>
	                              </td>
	                              <td align="center">
	                                <div >
	                                  <div id="divremarks7">
	                                    <input id="remarks7" name="remarks" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
	                                    <input type="hidden"  id="hhospbenfPK" name="hCoveragePKId">
	                                  </div>
	                                </div>
	                              </td>
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                              <!-- 									<td><div >&nbsp;</div></td> -->
	                            </tr>
	                          </tbody>
	                        </table>
                      </div>
                      
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
              <!-- end of col-md-12-->  
            </div>
            <!-- 				******************************************Life Insurance Details TAB1*****************************    -->
            <!-- ******************************************************TAB 6************************************************ -->
            <div class="tab-pane fade" id="li_RetirementPlg_tab" style="height:80vh">
              <!-- <fieldset class="fieldsetClsborder"> -->
              <div id="PLANCOVRET_APD"  >
                <div id="plancovRetMandatoryFlds">
                  <div id="visCoverRet" style="height: 78vh;overflow: scroll;">
                    <div class="col-md-12" >
                      <span class="panelHeaderTitle"> Types of Benefits : Retirement Planning</span>
                      <div class="clearspace10"></div>
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
                                  class="control-label  pull-right text-right"> Disburesment of Income at Retirement </label>
                              </div>
                              <div class="col-md-6 col-sm-6 col-xs-6">
                                <select name="retMultionret" id="retMultionret"
                                  class="form-control fld-resp-sm" >
                                  <option value="">--SELECT--</option>
                                  <option value="Y">Multiple Disbursement</option>
                                  <option value="N">Lump Sum</option>
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
                                    class="form-control numbers readOlyCursor  applyEvntUsd26"
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
                        </div>
                      </div>
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
                                  <th>
                                    <div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliRetirementPlg" name="SelliRetirementPlg" onclick="SelAllliRetirementPlg(this)"><label for="SelliRetirementPlg">&nbsp;</label></div>
                                  </th>
                                  <th>
                                    <div style="width:160px">Plan Name</div>
                                  </th>
                                  <th>
                                    <div style="width:80px">Inception Date<br><small>(DD/MM/YYYY)</small></div>
                                  </th>
                                  <th>
                                    <div style="width:80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div>
                                  </th>
                                  <th>
                                    <div style="width:60px">Age Income Starts<small>(yrs)</small><span class="mandFldastrks">*</span></div>
                                  </th>
                                  <th>
                                    <div style="width:60px">Age Income Ends<small>(yrs)</small><span class="mandFldastrks">*</span></div>
                                  </th>
                                  <th>
                                    <div style="width:70px">Escalation Rate<small>(%)</small><span class="mandFldastrks">*</span></div>
                                  </th>
                                  <th>
                                    <div style="width:90px">Annual Guaranteed Income<small>($)</small></div>
                                  </th>
                                  <th>
                                    <div style="width:100px">Annual Non-Guaranteed Income<small>($)</small></div>
                                  </th>
                                  <th>
                                    <div style="width:100px">Total Annual Income Received<small>($)</small></div>
                                  </th>
                                  <!-- <th><div style="width:130px">PV at inception of income payable<small>($)</small></div></th>
                                    <th><div style="width:120px">PV /FV to value at retirement age<small>($)</small></div></th> -->
                                  <th>
                                    <div style="width:80px">Assumed Bank Int. rate<small>(%)</small></div>
                                  </th>
                                  <th>
                                    <div style="width:150px">Remarks</div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                              </tbody>
                              <tfoot id="fnaLIRetPlgTblfooter">
                                <tr>
                                  <th colspan="8">
                                    <div style="text-align: right;" class="pull-right">
                                      PV of income at retirement age($)
                                    </div>
                                  </th>
                                  <!-- <th><input type="text" id="txtFldTotEndAge"
                                    name="txtFldTotEndAge" onmouseover="fipaTooltip(this);"
                                    readonly="true" class="form-control applyEvntUsd readOlyCursor hidden" /></th> -->
                                  <th>
                                    <!-- <input type="text" id="txtFldTotEscalRate"
                                      name="txtFldTotEscalRate" onmouseover="fipaTooltip(this);"
                                      readonly="true" class="form-control applyEvntUsd readOlyCursor hidden" /> -->
                                    <input type="text" id="txtFldTotGtdIncome"
                                      name="txtFldTotGtdIncome" onmouseover="fipaTooltip(this);"
                                      readonly="true" class="form-control applyEvntUsd readOlyCursor" />
                                  </th>
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
                  </div>
                </div>
              </div>
              <!-- </fieldset> -->
            </div>
            <!-- ******************************************************TAB 7************************************************ -->
            <div class="tab-pane fade" id="li_EducationPlg_tab"  style="height:80vh">
              <div id="PLANCOVEDU_APD"  >
                <div id="plancovEduMandatoryFlds">
                  <div id="visCoverEdu" >
                    <div class="form-group">
                      <span class="panelHeaderTitle">Types of Benefits : Education Planning</span>
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
                        </div>
                      </div>
                      <table id="liEducationtbl"
                        class="dataTable table-bordered table-striped display hover"
                        style="width: 100%">
                        <thead>
                          <tr>
                            <th>#</th>
                            <!-- <th>Select</th> -->
                            <th>
                              <div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelliEducation" name="SelliEducation" onclick="SelAllliEducation(this)"><label for="SelliEducation" >&nbsp;</label></div>
                            </th>
                            <th>
                              <div style="width:150px">Name of child<span class="mandFldastrks">*</span></div>
                            </th>
                            <th>
                              <div style="width:160px">Plan Name</div>
                            </th>
                            <th>
                              <div style="width:80px">Inception Date<br><small>(DD/MM/YYYY)</small></div>
                            </th>
                            <th>
                              <div style="width:80px">Expiry Date<br><small>(DD/MM/YYYY)</small></div>
                            </th>
                            <th>
                              <div style="width:70px">Child Age<span class="mandFldastrks">*</span></div>
                            </th>
                            <th>
                              <div style="width:70px">Tertiary education
                                age(yrs)<span class="mandFldastrks">*</span>
                              </div>
                            </th>
                            <th>
                              <div style="width:70px">Bank interest rate<small>(%)</small><span class="mandFldastrks">*</span></div>
                            </th>
                            <th>
                              <div style="width:70px">Loan interest rate<small>(%)</small><span class="mandFldastrks">*</span></div>
                            </th>
                            <th>
                              <div style="width:70px">Inflation rate<small>(%)</small></div>
                            </th>
                            <th>
                              <div style="width:250px">Payout Details</div>
                            </th>
                            <th>
                              <div style="width:100px">Annual Pay Out Amount<small>($)</small></div>
                            </th>
                            <th>
                              <div style="width:100px">PV/FV of Teritary Education  Pay Out<small>($)</small></div>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="maintable"></tbody>
                        <tfoot id="retEduPlgAgeCalTablefooter">
                          <tr>
                            <th colspan="13">
                              <div style="text-align: right;" class="pull-right">
<!--                                	PV of Fund Available at Tertiary Education Pay Out($):  -->
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
                </div>
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
<!-- Retirement Plg Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liRetirementPlg_Dialog"
  style="display: none;    z-index: 1060;" tabindex="-1" role="dialog"
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
            <fieldset  id="plan_details">
              <legend class="customFIPAStyle">Plan Details&nbsp;<a class="btn btn-default addinfoicon" id="popRetplgdets"></a></legend>
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
            <fieldset  id="plan_details">
              <legend class="customFIPAStyle">Retirement Planning</legend>
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
                        for="txtFldDlgRetPlgGTDIncome"> Annual Gtd Income to be
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
                        for="txtFldDlgRetPlgNonGTDIncome"> Annual Non-Gtd Income to
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
                        for="txtFldDlgRetPlgTotalIncome"> Total Annual Income received </label>
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
<!-- Education Plg Dialog -->
<!-- Modal  -->
<div class="modal fade" id="liEducationPlg_Dialog"
  style="display: none;    z-index: 1060;" tabindex="-1" role="dialog"
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
                      <th>PV/FV of Tertiary Education Pay Out<small>($)</small></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tfoot id="pvEdAgeCalTablefooter">
                    <tr>
                      <th colspan="4">
                        <div style="text-align: right;" class="pull-right">
                          PV of Fund Available at Tertiary Pay Out<small>($)</small>: 
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
         <!--  <h4> Do You want to clear existing policy information ?</h4> -->
        <h4>  Do you want to exit the existing policy information selection</h4>
        </div>
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
         </h4> Are you sure want to delete the selected policy information?</h4>
        </div>
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
<!-- End -->
<!--******************************************************************************************************************************* -->
<!-- Life Insurance Details --> 
<!-- <input type="hidden" name="lipRefId" id="lipRefId" class="formHiddenIds"> -->
<input type="hidden" name="lipRefId" id="lipRefId" class="">
<input type="hidden" name="lipCreatedBy" id="lipCreatedBy" class="formHiddenIds"/>
<input type="hidden" name="lipCreatedDate" id="lipCreatedDate" class="formHiddenIds"/>
<!-- Life Insurance Coverage Details -->
<input type="hidden" name="txtFldCoverCrtdBy" id="txtFldCoverCrtdBy" class="formHiddenIds"/>
<input type="hidden" name="txtFldCoverCrtdDate" id="txtFldCoverCrtdDate" class="formHiddenIds"/>
<!--  -->
<input type="hidden" id="hPlanName" name="hPlanName" class="formHiddenIds"/>
<input type="hidden" id="hInceptionDate" name="hInceptionDate" class="formHiddenIds"/> 
<input type="hidden" id="hExpiryDate" name="hExpiryDate" class="formHiddenIds"/> 
<input type="hidden" id="hPaymentMtd" name="hPaymentMtd" class="formHiddenIds"/> 
<input type="hidden" id="hPlanRefId" name="hPlanRefId" class="formHiddenIds"/>
<!-- mandatoryDlgs -->
<div class="modal modal-fullscreen fade"  id="coveragesDialog"  style="margin:10px;display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-sm" role="document" >
    <div class="modal-content">
      <div class="modal-header">
      	<div class="col-md-9">
            <h4 class="modal-title" id="gridSystemModalLabel"></h4>
            <span class="mandFldastrks">
        		<img src="images/menuicons/canvas.png" class="info" width="15" data-hasqtip="20">
        		<small>All fields marked in * are required</small>
        	</span>
            <span id="currentCoverPlan"></span>
        </div>
       
        <div class="col-md-3 text-right"> 
        <div class="btnStyle">
        
        <button type="button"  class="btn BtnFIPASRCH StylishSRCH hidden" id="covback00">
					      <span class="txt">Back to Coverage Section</span>
					      <span class="round"><i class="fa fa-arrow-left"></i></span>
					    </button>
        
        <button type="button"  class="btn BtnFIPASRCH StylishSRCH hidden"  id="covSave00" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
		 <button type="button"  class="btn BtnFIPACAN StylishCAN hidden"   id="covClose00" data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
        
        
        
          </div>
        
      </div>
      <div class="modal-body" style="min-height:85vh;top:0px;margin:5px">
        <div class="col-md-12" >
          <div id="APD">
            <div id="coverageCloneModel"> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- NEW PLAN DETAILS -->
<!--  toAppendCVPlan (Rider)-->
<div id="toAppendCVPlan" style="display:none">
  <!-- row1 -->
  <table id="riderAppendTable">
    <tbody>
      <tr>
        <td width="1%" class="cvborder-bottom">
          <div class="hiddens">          
            <input type="hidden" name="txtFldplanRefId" id="txtFldplanTefIdR01" /><!-- 0 -->
            <input type="hidden" name="txtFldplanCtBy" id="txtFldplanCtByR01"  /><!-- 1 Created By -->
            <input type="hidden" name="txtFldplanCtDate" id="txtFldplanCtDateR01"  /><!--2 Created Date -->
            <input type="hidden" name="txtFldplanYsto" id="txtFldplanYstoR01"  /><!--3 Yrs to ret -->
            <input type="hidden" name="txtFldplanSelfAge" id="txtFldplanSelfAgeR01"  /><!--4 Co-self age -->
            <input type="hidden" name="txtFldplanSpouseAge" id="txtFldplanSpouseAgeR01"  /><!-- 5Co-spouse age -->
            <input type="hidden" name="txtFldplanMultion" id="txtFldplanMultionR01"  /> <!-- 6Mulition  -->
            <input type="hidden" name="txtFldplanCashvalon" id="txtFldplanCashvalonR01"  /><!-- 7Cash value on Ret -->
            <input type="hidden" name="txtFldplanIntrateused" id="txtFldplanIntrateusedR01"  /><!-- 8Int rate used -->
            <input type="hidden" name="txtFldplanPrcnttoused" id="txtFldplanPrcnttousedR01"  /><!-- 9Prct used -->
            <input type="hidden" name="txtFldplanCashvalAge" id="txtFldplanCashvalAgeR01"  /><!-- 10Cash value on ret -->
            <input type="hidden" name="txtFldplanCashvalTefId" id="txtFldplanCashvalTefIdR01"  /><!-- 11Cash val Ref Id --> 
            <input type="hidden" name="txtFldplnDetMode" id="txtFldplnDetModeR01"  /><!-- 12 -->
            <input type="hidden" name="txtFldliplnId" id="txtFldliplnIdR01"  class="pkidclass"  /><!-- 13 -->
            <input type="hidden" name="txtFldBasicRefId" id="txtFldBasicRefIdR01"  /><!-- 14 -->
            <input type="hidden" name="txtFldfnaId" id="txtFldfnaIdR01"  /><!-- 15 -->
            <input type="hidden" name="txtFldlipId" id="txtFldlipIdR01"  /><!-- 16 -->
            <input type="hidden" name="txtFldlipDummy11" id="txtFldlipDummy11"  /><!-- 17 -->
            <input type="hidden" name="txtFldlipplanSyncId" id="txtFldlipplanSyncIdR01"  /><!-- 18 -->
          </div>
          <div class="covM0 height4vh">
              <div class="input-group input-group-sm fld-resp-mm">
                <input type="text" name="txtFldTfplan" id="txtFldTfplanR00" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm"
                   value = "Rider" maxlength="20"  disabled="true" onchange="onchangePlanMode(this);"  >
                <span class="label label-info lblbadge" >B1</span> 
                <div class="input-group-addon bgwhite"> 
                  <a class="btn btn-default basicDelIcon" id="riderDelbtn"  onclick="delRidfn(this);" ></a>
                </div>
              </div>
          </div>
        </td>
      </tr>
      <!-- row2 -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh" >
              <input name="selplan" id="selplanR00"
                class="form-control fld-resp-mm" type="text" maxlength="150"
                onmouseover="fipaTooltip(this);" autofocus="true" onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);newlifeRetPlan(this);"  />
          </div>
        </td>
      </tr>
      
      <!-- row3 -->
      
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <div class="input-group input-group-sm fld-resp-mm">
                <select name="selCoverages" id="selCoveragesR00"
                  class="form-control fld-resp-mm multibenefits"   
                  multiple="multiple" onchange="multibenefits(this);onchangePlanMode(this)"  >
                  <%-- 									<c:if test="${not empty LI_TYPEOFCOVERAGE_PROLIST}"> --%>
                  <%-- 										<c:forEach var="typeofcovrgelist" --%>
                  <%--  											items="${LI_TYPEOFCOVERAGE_PROLIST}">  --%>
                  <%--  											<option value="${typeofcovrgelist.key}">${typeofcovrgelist.value}</option>  --%>
                  <%--  										</c:forEach>  --%>
                  <%--  									</c:if>  --%>
                  <option value="DB">Death Benefit</option>
                  <option value="DIS">Disability</option>
                  <option value="TPD">TPD</option>
                  <option value="CIA">Critical Illness Advance</option>
                  <option value="CIE">Critical Illness Early</option>
                  <option value="PA">PA</option>
                  <option value="HP">Hospitalisation</option>
                  <option value="RP">Retirement</option>
                  <option value="EP">Education</option>
                </select>
                <input type="hidden" name="hselCoverages" id="hselCoveragesR00" />
                <div class="input-group-addon bgwhite">
                  <a class="btn btn-default covrgico" id="covrgico" onclick="ForCoverageClone(this);" ></a>
                </div>
              </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <div class="input-group input-group-sm fld-resp-mm " >
                <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                <input name="txtFldSA" id="txtFldSAR00" class="form-control fld-resp-sm numbers applyEvntUsd" type="text"    onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
              </div>
          </div>
        </td>
      </tr>
      
      <!-- row6 -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <div class="input-group input-group-sm fld-resp-mm " >
                <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                <input name="txtFldPrem" id="txtFldPremR00"  class="form-control fld-resp-sm numbers applyEvntUsd cashflowst" type="text" onmouseover="fipaTooltip(this);"    onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
              </div>
          </div>
        </td>
      </tr>
      
      <!-- row4		 -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <div class="input-group input-group-sm fld-resp-mm date" id="txtFldIncDatePickeR00">
                <input name="txtFldIncDate" id="txtFldIncDateR00"  class="form-control fld-resp-mm cashflowst" onmouseover="fipaTooltip(this);"    type="text" maxlength="10" onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);changeNRExpDate(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);">
                <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div>
              </div>
          </div>
        </td>
      </tr>
      <!--    		row7  -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <div class="input-group input-group-sm" >
                <div class="input-group-addon"><span><label class="switchs" style="float:left">
                  <input id="swtDlgliplnPremTerm" class="csscheckbox cashflowst" type="checkbox" checked onchange="onchangePremTerm(this);onchangePlanMode(this);changeNRExpDate(this);calcTotSAPremPlandetails();"  >
                  <span class="sliders round"></span>
                  <span class="absolute-no"><small>WHOLE LIFE</small></span>
                  </label></span>
                </div>
                <input name="txtFldPremTr" id="txtFldPremTrR00"  class="form-control fld-resp-sm font10 cashflowst" type="text" maxlength="12" onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);changeNRExpDate(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);"  >
              </div>
          </div>
        </td>
      </tr>
      
      <!-- row5  -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <div class="input-group input-group-sm fld-resp-mm date" id="txtFldPolExpDatePickeR00">
                <input name="txtFldPolExpDate" id="txtFldPolExpDateR00" class="form-control fld-resp-mm" onmouseover="fipaTooltip(this);" type="text"   maxlength="10" onchange="onchangePlanMode(this);onchangeExpDate(this);newlifesyncCPF(this);newlifesyncSRS(this);newlifeRetPlan(this);">
                <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div>
              </div>
          </div>
        </td>
      </tr>
      
      
      <!--    		row8   -->
       
      <!-- row9  -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <select name="selPaymode" id="selPaymodeR00" class="form-control fld-resp-mm cashflowst" onchange="chkPaymentMode(this);onchangePlanMode(this);newlifesyncCPF(this);newlifesyncSRS(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);"  >
                <option value="">--SELECT--</option>
                <option value="ANNUALLY">ANNUALLY</option>
                <option value="HALF YEARLY">HALF YEARLY</option>
                <option value="QUARTERLY">QUARTERLY</option>
                <option value="MONTHLY">MONTHLY</option>
                <option value="SINGLE">SINGLE</option>
              </select>
          </div>
        </td>
      </tr>
      <!-- row10 -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <select name="selPaymtd" id="selPaymtdR00" 	class="form-control fld-resp-mm cashflowst" onchange="onchangePlanMode(this);chkPrevMandatory(this);newlifesyncCPF(this);newlifesyncSRS(this);ilifeInsPremium(null);calcTotSAPremPlandetails();newlifeRetPlan(this);"  >
                <option value="">--SELECT--</option>
                <%-- <c:if test="${not empty LI_PAYMETHODS_LIST}">
                  <c:forEach var="paymthds" items="${LI_PAYMETHODS_LIST}">
                    <option value="${paymthds}">${paymthds}</option>
                  </c:forEach>
                </c:if> --%>
                  <option value="CASH">Cash/CHQ</option>
                  <option value="SRS">SRS</option>
                  <option value="CPFOA">CPFOA</option>
                  <option value="CPFSA">CPFSA</option>
                  <option value="CPFMA">CPFMA</option>
              </select>
          </div>
        </td>
      </tr>
      
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
              <select name="selPaymtdBy" id="selPaymtdByR00" 	class="form-control fld-resp-mm" onchange=""  >
                <option value="">--SELECT--</option>
                
                 <option value="CASH">Cash</option>
                              		<option value="GIRO">GIRO</option>
	                             	 <option value="INTERNET">Internet</option>
	                              	<option value="CRDTCARD">Credit Card</option>
              </select>
          </div>
        </td>
      </tr>
      <!-- row11			 -->
      	<tr><td class="cvborder-topbottom">
                              <div class="covM0 height4vh">	
         <div class="input-group input-group-sm fld-resp-mm" >
        <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
   		  <input name="txtFldInsCashVal" id="txtFldInsCashValR00"  class="form-control fld-resp-sm numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this)">
   		 </div> 
   		 </div>
   		</td></tr>
		
		<!-- row12 -->
		<tr><td class="cvborder-topbottom">
                              <div class="covM0 height4vh">	
         <div class="input-group input-group-sm fld-resp-mm" >
        <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
   		  <input name="txtFldLifeInsLoans" id="txtFldLifeInsLoansR00"  class="form-control fld-resp-sm numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this)">
   		 </div> 
   		 </div>
   		</td></tr>
		
      <!-- row12						 -->
      <tr>
        <td class="cvborder-topbottom">
          <div class="covM0 height4vh">
            <textarea name="selmarks" id="selmarksR00" class="form-control fld-resp-mm" rows="1" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onchangePlanMode(this)"  ></textarea>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="appendRMultselect" class="covM0" style="display:none">
  <div class="row">
    <div class="input-group input-group-sm fld-resp-mm" >
      <select name="selCoverages" id="selCoveragesR00Hidden"
        class="form-control fld-resp-mm multibenefits"   
        multiple="multiple" onchange="multibenefits(this);onchangePlanMode(this)"  >
        <%-- 									<c:if test="${not empty LI_TYPEOFCOVERAGE_PROLIST}"> --%>
        <%-- 										<c:forEach var="typeofcovrgelist" --%>
        <%--  											items="${LI_TYPEOFCOVERAGE_PROLIST}">  --%>
        <%--  											<option value="${typeofcovrgelist.key}">${typeofcovrgelist.value}</option>  --%>
        <%--  										</c:forEach>  --%>
        <%--  									</c:if>  --%>
        <option value="DB">Death Benefit</option>
        <option value="DIS">Disability</option>
        <option value="TPD">TPD</option>
        <option value="CIA">Critical Illness Advance</option>
        <option value="CIE">Critical Illness Early</option>
        <option value="PA">PA</option>
        <option value="HP">Hospitalisation</option>
        <option value="RP">Retirement</option>
        <option value="EP">Education</option>
      </select>
      <input type="hidden" name="hselCoverages"
        id="hselCoveragesR00"    />
      <div class="input-group-addon bgwhite">
        <a class="btn btn-default covrgico" id="covrgico" onclick="ForCoverageClone(this);" ></a>
      </div>
    </div>
  </div>
</div>

<div style="display:none">
                    <table id="planCoveragestbl" class="dataTable table-bordered table-striped display hover" style="width: 100%;" >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>
                            <div style="width: 160px">Plan Name</div>
                          </th>
                          <th>
                            <div style="width: 160px">Inception Date</div>
                          </th>
                          <th>
                            <div style="width: 160px">Expiry Date</div>
                          </th>
                          <th>
                            <div style="width: 160px">Basic/Rider Ref</div>
                          </th>
                          <th>
                            <div style="width: 160px">Type of Coverage</div>
                          </th>
                          <th>
                            <div style="width: 160px">Multiplier/Booster Factor</div>
                          </th>
                          <th>
                            <div style="width: 160px">Min Amt Assured(MAA) after Mult/Boost</div>
                          </th>
                          <th>
                            <div style="width: 160px">Expiry Age of MAA</div>
                          </th>
                          <th>
                            <div style="width: 160px">Benefit Pay Out Period (by default 1yr)</div>
                          </th>
                          <th>
                            <div style="width: 160px">Disability Benefit</div>
                          </th>
                          <th>
                            <div style="width: 160px">Yrs of disability payout (yr)</div>
                          </th>
                          <th>
                            <div style="width: 160px">Max payout age (age)</div>
                          </th>
                          <th>
                            <div style="width: 160px">Type of HS benefit</div>
                          </th>
                          <th>
                            <div style="width: 160px">Deductible benefits</div>
                          </th>
                          <th>
                            <div style="width: 160px">Co insurance benefits</div>
                          </th>
                          <th>
                            <div style="width: 160px">Descriptions</div>
                          </th>
                          <th>
                            <div style="width: 160px">Remarks</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                    
<!-- 	                               BENEFITS / COVERAGES POPOVER CONTENT --> 
                  
                  <div id="covAddPopContent" class="hidden"  >
						<div class="panel">
							<div class="panel-heading btn-primary">Add Benefits /
								Coverages</div>
							<div class="panel-body"> 
								<div class="form-group">
								<div class="row">
								<label for="txtFldLifePlanCoverages">Add Benefits / Coverages <span class="mandFldastrks">*</span></label> 
								<input id="txtFldLifePlanCoverages" name="txtFldLifePlanCoverages" class="form-control" type="text"  onmouseover="fipaTooltip(this);" maxlength="150" />   		  
                                 </div> 
								</div>
							
							
							<div class="form-group">
								<div class="row">
								<div class=" bg-warning" style="box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19);">
							<div class="checkbox checkbox-primary bold" onclick="coveragesCheckEvent(this,'All')">
								Select necessary fields for keyed in benefit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
								&nbsp;&nbsp;&nbsp;
								<input id="chkAllCoverages" name="chkAllCoverages" type="checkbox" value="Select All"   >
								<label for="chkAllCoverages">Select All </label>
							</div>
						</div>
								</div>
								</div>
								
								
								<div class="form-group">
								<div class="row">
								<table style="dataTable table-bordered display hover"> 
									<tr valign="top"  > 
											<td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary" onclick="coveragesCheckEvent(this,'All')">
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov01"  value="0"  />
												 <label class="control-label" for="txtFldCov01"  >Multiplier/Booster Factor</label>
											 </div> 
												</div> 
												</td>
												
											 <td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary" onclick="coveragesCheckEvent(this,'All')">
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov02"   value="1"  />
												 <label class="control-label" for="txtFldCov02"  >Min Amt Assured(MAA) after Mult/Boost</label>
											 </div> 
												</div> 
												</td>
												
												
												</tr> 
												
												
												
								<tr valign="top"  > 
											<td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary" onclick="coveragesCheckEvent(this,'All')">
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov03" value="2"   />
												 <label class="control-label" for="txtFldCov03"  >Expiry Age of MAA</label>
											 </div> 
												</div> 
												</td>
												
											 <td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary" onclick="coveragesCheckEvent(this,'All')">
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov04"   value="3"  />
												 <label class="control-label" for="txtFldCov04" >Benefit Pay Out Period</label>
											 </div> 
												</div> 
												</td>
												
												
												</tr> 				
												
												
								<tr valign="top"  > 
											<td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary" onclick="coveragesCheckEvent(this,'All')">
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov05"  value="4"  />
												 <label class="control-label" for="txtFldCov05"  >Disability Benefit</label>
											 </div> 
												</div> 
												</td>
												
											 <td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary" onclick="coveragesCheckEvent(this,'All')">
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov06"  value="5"  />
												 <label class="control-label" for="txtFldCov06"  >Yrs of disability payout (yr)</label>
											 </div> 
												</div> 
												</td>
												
												
												</tr> 				
												
												
												
												
								<tr valign="top"  > 
											<td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary">
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov07"  value="6"   onclick="coveragesCheckEvent(this,'All')"/>
												 <label class="control-label" for="txtFldCov07"  >Max payout age (age)</label>
											 </div> 
												</div> 
												</td>
												
											 <td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary"  >
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov08"  value="7"   onclick="coveragesCheckEvent(this,'All')"/>
												 <label class="control-label" for="txtFldCov08"  >Type of HS benefit</label>
											 </div> 
												</div> 
												</td>
												
												
												</tr> 				
												

								<tr valign="top"  > 
											<td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary" >
					                   			<input type="checkbox" name="chkcovbenf" id="txtFldCov09" value="8"   onclick="coveragesCheckEvent(this,'All')" />
												 <label class="control-label" for="txtFldCov09"  >Deductible benefits</label>
											 </div> 
												</div> 
												</td>
												
											 <td class="fipaFldLblText">
											<div>
										<div class="checkbox checkbox-primary"  >
                 			<input type="checkbox" name="chkcovbenf" id="txtFldCov10"  value="9"  onclick="coveragesCheckEvent(this,'All')" />
												 <label class="control-label" for="txtFldCov10" >Co insurance benefits</label>
											 </div> 
												</div> 
												</td>
												
												
												</tr> 				
					<tr valign="top"  > 
				<td class="fipaFldLblText">
				<div>
				<div class="checkbox checkbox-primary" >
                 			<input type="checkbox" name="chkcovbenf" id="txtFldCov10" value="10"   onclick="coveragesCheckEvent(this,'All')" />
					 <label class="control-label" for="txtFldCov10"  >Description</label>
				 </div> 
					</div> 
					</td>
					
				 <td class="fipaFldLblText">
				<div>
				<div class="checkbox checkbox-primary"  >
                 			<input type="checkbox" name="chkcovbenf" id="txtFldCov11"  value="11"  onclick="coveragesCheckEvent(this,'All')" />
					 <label class="control-label" for="txtFldCov11"  >Remarks</label>
				 </div> 
					</div> 
					<input type="hidden" id="hcoverageClientChoice" name="hcoverageClientChoice">
					</td>
					
					
					</tr> 				
																							
												</table>
												
								</div>
								</div> 
							</div>
							<div class="panel-footer col-md-12 text-center"> 
								<div class="btnStyle">
<div class="col-md-4">
									<button type="button" class="btn BtnFIPASRCH StylishSRCH"  onclick="benefitsAddedMtd();">
										<span class="txt">Done</span> <span class="round"><i
											class="fa fa-check"></i></span>
									</button>
								</div>
	<div class="col-md-4">
		<button type="button" class="btn BtnFIPACAN StylishCAN"  onclick="benefitsCancelMtd();">
					<span class="txt">Cancel</span> <span class="round"><i
						class="fa fa-times"></i></span>
				</button>
			</div>	</div>

		</div>
	</div>
</div>   

<!--  -->
 
                     <table id="covBodyTagging" class="hidden">
                     <tbody>
                      <tr> <!-- Row 0 -->
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                               
                              <input  name="" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();toCalMAA('mulBootDeath','maaDeath')">   		  
                              <span class="mandFldastrks" style="position: absolute;">*</span>
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr>  <!-- Row 1  --> 
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                              <input  name="" class="form-control numbers applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                              <span class="mandFldastrks" style="position: absolute;">*</span>
                            </div>
                          </div>
                        </td>  
                      </tr>
                      <tr> <!-- Row 2-->  
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <input  name="" class="form-control applyEvntYrs" type="text"   onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                              <div class="input-group-addon">
                                <span id="symbolYrs"></span>
                              </div>
                              <span class="mandFldastrks" style="position: absolute;">*</span>
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr>  <!-- Row 3 --> 
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <input  name="" class="form-control applyEvntYrs" type="text" value="1" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                              <div class="input-group-addon">
                                <span id="symbolYrs"></span>
                              </div>
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr>  <!-- Row 4--> 
                        
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                              <input  name="" class="form-control numbers applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                              <span class="mandFldastrks" style="position: absolute;">*</span>
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr> <!-- Row 5-->
                        
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <input  name="" class="form-control applyEvntYrs" type="text"   onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                              <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
                              <span class="mandFldastrks" style="position: absolute;">*</span>
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr> <!-- Row 6-->
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <input  name="" class="form-control applyEvntYrs" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                              <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolYrs"></span></div>
                              <span class="mandFldastrks" style="position: absolute;">*</span>
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr> <!-- Row 7-->
                        <td align="center">
                          <div >
                            <div ><input  name="" class="form-control" type="text" maxlength="150" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();"></div>
                          </div>
                        </td> 
                      </tr>
                      <tr> <!-- Row 8-->
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                              <input  name="" class="form-control applyEvntUsd" type="text" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr> <!-- Row 9-->
                        <td align="center">
                          <div >
                            <div class="input-group input-group-sm fld-resp-mm" >
                              <div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div>
                              <input  name="" class="form-control applyEvntUsd" type="text"  onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                            </div>
                          </div>
                        </td>  
                      </tr>
                      <tr> <!-- Row 10-->
                        <td align="center">
                          <div >
                            <div >
                              <input  name="" class="form-control" type="text" maxlength="150" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                            </div>
                          </div>
                        </td> 
                      </tr>
                      <tr> <!-- Row 11-->
                        <td align="center">
                          <div >
                            <div >
                              <input  name="" class="form-control" type="text" maxlength="300" onmouseover="fipaTooltip(this);" onchange="onChangeCovTextMode();">
                              <input type="hidden"   name="hCoveragePKId"> 
                            </div>
                          </div>
                        </td> 
                      </tr>
                    </tbody>
                      </table>