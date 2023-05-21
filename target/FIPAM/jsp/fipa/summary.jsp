 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div id="accordion" class="panel-group">
	<div id="summarydiv" class="accord-content" style="display:none">
	<span class="panelHeaderTitle"> Our Advice and Reasons</span>
		 <!-- <fieldset class="fieldsetClsborder"> -->
		<div class="panel-body"> 
				 <div class="col-md-12">   
				  <div class="form-group">
				   <div class="row">
                    <div class="col-md-4">
                    <label for="txtFldClientName" class="control-label  pull-right">
                    <font color="maroon">Name of Client </font></label>
                   </div>
                    <div class="col-md-4">
                   <input id="txtFldClientName" name="txtFldClientName"  
                   class="form-control fld-resp readOlyCursor"  onmouseover="fipaTooltip(this);" 
                   type="text" maxlength="75"   readonly="true" /> 
                    </div> 
                    </div>
                  </div>
                 
                  <div class="form-group">
                   <div class="row">
                    <div class="col-md-4">
                    <label for="txtFldSpouseName" class="control-label  pull-right">
                     Name of Spouse </label>
                   </div>
                    <div class="col-md-4">
                   <input id="txtFldSpouseName" name="txtFldSpouseName"  
                   class="form-control fld-resp readOlyCursor"  onmouseover="fipaTooltip(this);" 
                   type="text" maxlength="75"   readonly="true" /> 
                    </div>
                    </div>
                </div>
              
                 
                  <div class="form-group">
                   <div class="row">
                    <div class="col-md-4">
                    <label for="txtFldAdviserName" class="control-label  pull-right">
                     Name of Representative </label>
                   </div>
                    <div class="col-md-4">
                   <input id="txtFldAdviserName" name="txtFldAdviserName"  value="${LOGGED_ADVSTFNAME}" 
                   class="form-control fld-resp readOlyCursor"  onmouseover="fipaTooltip(this);" 
                   type="text" maxlength="75"   readonly="true" />  
                   </div>
             </div>
             
 			</div>
 			</div>
			 <div class="col-md-11">  		 
					<div class="panel panel-default">
					<div class="panel-heading">Statement by Adviser </div>
					<div class="panel-body"> 
					<h5 style="text-align: center;margin-left: 22px;  margin-right: 22px;">
										The recommendations in this document are based on the
										information collected in the Financial Needs<br />Analysis
										form. In order to ensure that appropriate advice can be given,
										you should notify your adviser of<br />any change in your
										financial circumstances before the implementation of your
										financial plans.<br />Inaccurate information and lack of
										adequate data may also affect the effectiveness of the
										financial<br />plans recommended.
									</h5>
					 </div>
					
					</div>
			 </div> 
		<!-- <br> -->	 
		<div class="col-md-5">
   <span class="panelHeaderTitle"> <br>Summary of Needs Analysis Worksheet </span>
</div>
	<!-- <span class="panelHeaderTitle"> Summary of Needs Analysis Worksheet </span>  -->
		<div class="panel-body">  
 <div class="col-md-12">  
					<div class="table-responsive">
					<table class="display nowrap table table-borderless" style="width: 98%"> 
						<thead >  
							<tr class="fipaFldLblTextbold" valign="top" align="left">

								<td style="width: 40%"></td>
								<td>
									<div style="text-align: center;">Client</div>
								</td>
								<td>
									<div style="text-align: center;">Spouse</div>
								</td>

							</tr>
						</thead>
						<tbody>
						 
							<tr valign="top" align="left">

								<td colspan="3" class="fipatblHeader">
									<div style="text-align:left;">Income protection</div>
								</td>
							</tr>
							<tr valign="top" align="left">

								<td valign="middle">
									<div >Family Income Protection Needs</div>
								</td>
								<td>
									<!-- <input type="text" name="txtFldOARFamIncSelf" class="writableFieldForm"/> -->
									
									<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfFamprot" id="saSelfFamprot" 
					         class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
								</td>
								<td>
									<!-- 		<input type="text" name="txtFldOARFamIncSps" class="writableFieldForm"/> -->
									<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSpsFamprot" id="saSpsFamprot" 
					         class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
								</td>
							</tr>
							<tr valign="top" align="left">

								<td valign="middle">
									<div>Annual Disability Income Needs</div>
								</td>
								<td>
									<!-- 	<input type="text" name="txtFldOARDisIncSelf" class="writableFieldForm"/> -->
									<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfAnnldisability" id="saSelfAnnldisability" 
					         class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
								</td>
								<td style="">
									<!-- 	<input type="text" name="txtFldOARDisIncSps" class="writableFieldForm"/> -->
									<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSpsAnnldisability" id="saSpsAnnldisability" 
					         class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
								</td>
							</tr>
							<tr valign="top" align="left">

								<td valign="middle">
									<div id=" ">Major Illness Needs</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
									<!-- <input type="text" name="txtFldOARIllNeedSelf" class="writableFieldForm"/> -->
									<input type="text" name="saSelfMajorill"
									id="saSelfMajorill" class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
								</td>

								<td style="">
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
									<!-- <input type="text" name="txtFldOARIllNeedSps" class="writableFieldForm"/> -->
									<input type="text" name="saSpsMajorill"
									id="saSpsMajorill" class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
								</td>
							</tr>
							<tr valign="top" align="left">

								<td valign="middle"></td>
								<td></td>
								<td style=""></td>
							</tr>
							<tr valign="top" align="left">

								<td colspan="3" class="fipatblHeader">
									<div  style="text-align: left;">Medical Expenses</div>
								</td>
							</tr>
							<tr valign="middle" align="left">

								<td>
									<div >Type of hospital to be covered</div>
								</td>
								<td><select class="form-control fld-resp-sm clsfipaClient"
									name="saSelfHosptype" id="saSelfHosptype">
										<option value="">--SELECT--</option>
										<c:if test="${not empty HOSPTYPE_LIST}">
											<c:forEach var="hosptype" items="${HOSPTYPE_LIST}">
												<option value="${hosptype}">${hosptype}</option>
											</c:forEach>
										</c:if>
								</select></td>
								<td style=""><select name="saSpsHosptype"
									id="saSpsHosptype"
									class="form-control fld-resp-sm clsfipaSpouse">
										<option value="">--SELECT--</option>
										<c:if test="${not empty HOSPTYPE_LIST}">
											<c:forEach var="hosptype" items="${HOSPTYPE_LIST}">
												<option value="${hosptype}">${hosptype}</option>
											</c:forEach>
										</c:if>
								</select></td>
							</tr>
							<tr valign="middle" align="left">

								<td>
									<div >Type of ward to be covered</div>
								</td>
								<td><select class="form-control fld-resp-sm clsfipaClient"
									name="saSelfWardtype" id="saSelfWardtype">
										<option value="">--SELECT--</option>
										<c:if test="${not empty WARD_LIST}">
											<c:forEach var="wardlst" items="${WARD_LIST}">
												<option value="${wardlst}">${wardlst}</option>
											</c:forEach>
										</c:if>
								</select></td>
								<td><select class="form-control fld-resp-sm clsfipaSpouse"
									name="saSpsWardtype" id="saSpsWardtype">
										<option value="">--SELECT--</option>
										<c:if test="${not empty WARD_LIST}">
											<c:forEach var="wardlst" items="${WARD_LIST}">
												<option value="${wardlst}">${wardlst}</option>
											</c:forEach>
										</c:if>
								</select></td>
							</tr>
							<tr valign="middle" align="left">

								<td>
									<div >Existing type of hospital plan covered</div>
								</td>
								<td><input type="text" name="saSelfExisthosptype"
									id="saSelfExisthosptype" class="form-control fld-resp-mm clsfipaClient"
									maxlength="20" /></td>
								<td><input type="text" name="saSpsExisthosptype"
									id="saSpsExisthosptype" class="form-control fld-resp-mm clsfipaSpouse"
									maxlength="20" /></td>
							</tr>
							<tr valign="middle" align="left">

								<td>
									<div >Existing policy type</div>
								</td>
								<td><input type="text" name="saSelfExistpoltype"
									id="saSelfExistpoltype" class="form-control fld-resp-mm clsfipaClient"
									maxlength="20" /></td>
								<td><input name="saSpsExistpoltype"
									id="saSpsExistpoltype" class="form-control fld-resp-mm clsfipaSpouse"
									maxlength="20" /></td>
							</tr>
							<tr valign="top" align="left">

								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr valign="top" align="left">

								<td colspan="3" class="fipatblHeader">
									<div  style="text-align: left;">Retirement</div>
								</td>
							</tr>
							<tr valign="top" align="left">

								<td valign="middle">
									<div >Estimated Lump Sum Retirement Fund Needed</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfLumpsumret"
									id="saSelfLumpsumret" class="form-control fld-resp numbers clsfipaClient applyEvntUsd"
									 />
									</div>
									</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSpsLumpsumret"
									id="saSpsLumpsumret" class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd"
									onkeyup="chkDecimal(this,17,4);"
									onkeydown="chkDecimal(this,17,4);"
									onkeypress="return isNumberKeydec(event,this)" 
									maxlength="22"/>
									</div>
									</td>
							</tr>
							<tr valign="top" align="left">

								<td colspan="3">
									<div  style="text-align: left;">Savings</div>
								</td>
							</tr>
							<tr valign="middle" align="left">

								<td>
									<div >Total targeted savings for children's
										education Less</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfEdntotsaving" id="saSelfEdntotsaving" 
					         class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
									</td>
								<td style="">
									<!-- <input type="text" name="txtFldOARChildEdnSps" class="writableFieldForm"/> -->
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         	<input type="text" name="saSpsEdntotsaving" id="saSpsEdntotsaving" 
					         	class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
								</td>
							</tr>
							<tr valign="middle" align="left">

								<td valign="middle">
									<div>Current savings for children's education</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfEdncursaving"
									id="saSelfEdncursaving" class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
									</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span><input type="text" name="saSpsEdncursaving"
									id="saSpsEdncursaving" class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
									</td>
							</tr>
							<tr valign="middle" align="left">

								<td>
									<div >Estimated level of savings for education
										needed</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfEdnestsaving"
									id="saSelfEdnestsaving" class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
									</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSpsEdnestsaving"
									id="saSpsEdnestsaving" class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
									</td>
							</tr>
							<tr valign="top" align="left">

								<td colspan="3" class="fipatblHeader">
									<div  style="text-align: left;">For other purposes</div>
								</td>
							</tr>
							<tr valign="middle" align="left">

								<td valign="middle">
									<div >
										Total targeted savings for other purposes<br />Less  
									</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfOthtotsaving"
									id="saSelfOthtotsaving" class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
									</td>
								<td><div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span><input type="text" name="saSpsOthtotsaving"
									id="saSpsOthtotsaving" class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
									</td>
							</tr>
							<tr valign="middle" align="left">

								<td valign="middle">
									<div>Current savings for other purposes</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfOthcursaving"
									id="saSelfOthcursaving" class="form-control fld-resp numbers clsfipaClient applyEvntUsd" />
									</div>
									</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSpsOthcursaving"
									id="saSpsOthcursaving" class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
									</td>
							</tr>
							<tr valign="middle" align="left">

								<td valign="middle">
									<div >Estimated level of savings needed</div>
								</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSelfOthestsaving"
									id="saSelfOthestsaving" class="form-control fld-resp numbers clsfipaClient applyEvntUsd" /></div>
									</td>
								<td>
								<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="saSpsOthestsaving"
									id="saSpsOthestsaving" class="form-control fld-resp numbers clsfipaSpouse applyEvntUsd" />
									</div>
									</td>
							</tr>
						</tbody>
					</table>
					</div>
			 
				 
		</div>  
					
					
		</div>
				 
			</div>
			<!-- </fieldset> -->
		</div>
	</div>
	<div></div> 
