
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div id="accordion" class="panel-group">
	<div id="clientsdeclrdiv" class="accord-content">
		<span class="panelHeaderTitle"> Client's Declaration<small>
				<small> <input type="text" name="updlstdateChldDecl" id="updlstdateChldDecl"
					class="txtlastupdated" readonly="true"/></small>
		</small>
		</span> <small class="fipaFldLblText" style="margin-left: 15px;">
			(The following information is required under AML rules in Singapore)
		</small>

  <!-- <fieldset class="fieldsetClsborder"> -->
<div class="panel-body">  
<div class="row"> 
<div class="col-md-6 form-inline"> 
	<div class="form-group">
<!-- 	<div class="row required" > -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6 ">  -->
             <label class="fipaFldLblText" for="txtFldIntLanguages" style="vertical-align:baseline;"> Language Use</label>
<!--              </div>  -->
<!--            <div class="col-md-6 col-sm-6 col-xs-6"> -->
           
			<select name="selamlLanguageUse" id="selamlLanguageUse" class="form-control" multiple="multiple" >  
					<option value="ENG">English</option>
							<option value="MAN">Mandarin</option>
							<option value="MAL">Malay</option>
							<option value="TAM">Tamil</option>
							<option value="OTH">Others</option>
				</select>
				<input type="hidden" name="amlLanguageUse" id="amlLanguageUse"/>
		
<!--             </div>  -->
<!--             </div> -->
      </div>
      
      <div class="form-group">
      <input type="text" class="form-control" id="txtFldAmlOtherLang" name="txtFldAmlOtherLang" disabled="disabled" placeholder="others">
      </div>
</div> 
<div class="col-md-6 form-inline" style=""> 
		<div class="form-group">
<!-- 	<div class="row required" > -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6 ">  -->
             <label class="fipaFldLblText" for="amlIntprtExist" style="vertical-align:baseline;"> Any Interpreter Present</label>
<!--              </div>  -->
<!--            <div class="col-md-6 col-sm-6 col-xs-6">  -->
         <select class="form-control" id="amlIntprtExist" name="amlIntprtExist" onchange="chgIntrptrPrsnt(this);">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option>
							<option value="N">No</option>
		 </select>
<!--             </div>  -->
<!--             </div> -->
      </div>
</div>   
    
	       
                 
</div>   
   
   
<!-- <div class="clearspace40"></div> -->
                    
<h3 class="panelHeaderTitle" style="margin-left:0">Interpreter</h3>

<div class="col-md-6 form-horizontal" id="amlinterpreter"> 
        
	<div class="form-group clearfix">
<!-- 	<div class="row"> -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6"> -->
            <label for="amlIntprtName" class="control-label col-sm-4  pull-left">
            Name
       </label>
<!--              </div> -->
           <div class="col-sm-8"> 
               <input type="text" id="amlIntprtName"
						name="amlIntprtName" class="form-control fld-resp-mm readOlyCursor"
						maxlength="20" readonly="true" /> 
<!-- 						 </div> -->
            </div>
     </div>       
         
         
  <div class="form-group clearfix">
<!--          <div class="row"> -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6"> -->
            <label for="amlIntprtNric" class="control-label col-sm-4  pull-left">
           NRIC&nbsp;/&nbsp;Passport
       </label>
<!--              </div> -->
           <div class="col-sm-8"> 
               <input type="text" name="amlIntprtNric"
						id="amlIntprtNric" class="form-control fld-resp-mm readOlyCursor"
						maxlength="20" readonly="true" />
<!-- 						 </div> -->
            </div>
            
            </div>
               
          <div class="form-group clearfix">
<!--          <div class="row"> -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6"> -->
            <label for="amlIntprtMobile" class="control-label col-sm-4  pull-left">
          <!-- Mobile -->Contact No.	
       </label>
<!--              </div> -->
           <div class="col-sm-8"> 
               <input type="text" name="amlIntprtMobile"
						id="amlIntprtMobile" class="form-control fld-resp-mm readOlyCursor"
						maxlength="20" readonly="true" />
<!-- 						 </div> -->
            </div>
            
            </div>   
           
          <div class="form-group clearfix" style="display:none;">
<!--          <div class="row"> -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6"> -->
            <label for="amlIntprtHome" class="control-label col-sm-4 pull-left">
          Home
       </label>
<!--              </div> -->
           <div class="col-sm-8"> 
               <input type="text" name="amlIntprtHome"
						id="amlIntprtHome" class="form-control readOlyCursor"
						maxlength="300" readonly="true" />
<!-- 						 </div> -->
            </div>
            
            </div> 
          
            
      
      </div>
      
 <div class="col-md-6 form-horizontal">   
      
	<div class="form-group clearfix">
<!-- 	<div class="row"> -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6"> -->
            <label for="amlIntprtRelat" class="control-label pull-left col-sm-4">
            Relationship
       </label>
<!--              </div> -->
           <div class="col-sm-8"> 
                <select name="amlIntprtRelat" id="amlIntprtRelat"
						class="form-control fld-resp-mm disabledCursor" disabled="true">
						<option value="">--SELECT--</option>
				 						<c:if test="${not empty RELATIONSHIP}">
										  <c:forEach var="depnrelation" items="${RELATIONSHIP}">
										    <option value="${depnrelation[1]}">${depnrelation[1]}</option>
										  </c:forEach>
										</c:if>
										 
					</select>
<!-- 					</div> -->
            </div>
          </div>  
            
  <div class="form-group clearfix">
<!--      <div class="row"> -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6"> -->
            <label for="txtFldClientName" class="control-label pull-left col-sm-4">
            Signature
       </label>
<!--              </div> -->
           <div class="col-sm-8"> 
                 
					</div>
<!--             </div>        -->
            </div>
      </div>
     
      </div> 
      
  <!--  </fieldset> -->  
                     
<br/>                         
<!--  <div class="clearspace20"></div> -->
  <!-- <fieldset class="fieldsetClsborder"> -->
<div class="table-responsive">
		<table class="display nowrap table table-borderless">
			<col style="width: 1%;"></col>
			<col style="width: 85%;"></col>
			<col style="width: 1%;"></col>
			<col style="width: 15%;"></col>
			<tbody>
				<tr style="border-bottom:1px solid #465a65" >
					<td></td>
					<td></td>
					<td align="center" valign="middle"><label
						class="fipaFldLblTextbold"> Yes </label></td>

					<td align="center" valign="middle"><label
						class="fipaFldLblTextbold"> No </label></td>
				</tr>
				<tr>
					<td align="right">
						<div class="fipaFldLblTextbold">Q1.</div>
					</td>
					<td>
						<div class="fipaFldLblTextbold">Beneficial Owner</div>
						<div class="fipaFldLblText">

							Is someone else expected to participate in, make decisions about,
							or benefit from this policy in any way? (This does not include
							someone named as Owner, Proposed Life Insured, Payer,
							Beneficiary or signing officer.)

						</div>

					</td>
					<td align="center" valign="middle">
					<div class="radio radio-primary">
		                <input type="radio" value="Y" id="amlIntprtBenfflg"	name="amlIntprtBenfflg" onchange="chgeBenTppPepFlg(this,'beneficialOwnerDiv','amlBenfName');"/>
		                <label  class="control-label"> &nbsp;</label>
		             </div>
		             </td>
		          <td align="center" valign="middle">
					<div class="radio radio-primary">
		              <input type="radio" value="N" id="amlIntprtBenfflg" name="amlIntprtBenfflg"  onchange="chgeBenTppPepFlg(this,'beneficialOwnerDiv','amlBenfName');"/>
					  <label  class="control-label"> &nbsp;</label>
		            </div>
		             </td>
		         </tr>
				<tr>

					<td align="right">
						<div class="fipaFldLblTextbold">Q2.</div>
					</td>
					<td>
						<div class="fipaFldLblTextbold">Third Party Payer</div>
						<div class="fipaFldLblText">Will anyone other than the Owner
							be paying for this policy / Investment account?</div>
					</td>
 
					<td align="center" valign="middle">
					<div class="radio radio-primary">
		             <input type="radio" value="Y" id="amlIntprtTppflg" name="amlIntprtTppflg"  onchange="chgeBenTppPepFlg(this,'ThirdPartyPayerDiv','amlTppName');"/> 
		             <label  class="control-label"> &nbsp;</label>
		            </div>
		             </td>
		             
		             <td align="center" valign="middle">
					<div class="radio radio-primary">
		            <input type="radio" value="N" id="amlIntprtTppflg" name="amlIntprtTppflg"  onchange="chgeBenTppPepFlg(this,'ThirdPartyPayerDiv','amlTppName');"/> 
		            <label  class="control-label"> &nbsp;</label>
		            </div>
		             </td>
		             
		      	</tr>

				<tr valign="top">
					<td align="right">
						<div class="fipaFldLblTextbold">Q3.</div>
					</td>
					<td>
						<div class="fipaFldLblTextbold">Political Exposed Person
							(PEP)</div>
						<div class="fipaFldLblText">Has this individual or any close
							relative ever held a senior position in a government, political
							party, military, tribunal or government-owned corporation?</div>
					</td>
					<td align="center" valign="middle">
					<div class="radio radio-primary">
		           <input type="radio" value="Y" id="amlIntprtPepflg" name="amlIntprtPepflg"  onchange="chgeBenTppPepFlg(this,'PolExpPersDiv','amlPepName');"/>
							 <label  class="control-label"> &nbsp;</label>
		            </div>
		             </td>
		             
		             
					<td align="center" valign="middle">
					<div class="radio radio-primary">
		           <input type="radio" value="N" id="amlIntprtPepflg" name="amlIntprtPepflg"  onchange="chgeBenTppPepFlg(this,'PolExpPersDiv','amlPepName');"/>
							 <label  class="control-label"> &nbsp;</label>
		            </div>
		             </td> 
		             
				</tr>
				<tr>
					<td><div class="clearspace20"></div></td>
				</tr>
				<tr>
					<td colspan="4"><label class="fipaFldLblTextbold">Remarks</label>
						<textarea name="amlIntprtRemarks" class="form-control"
							id="txtFldFnaCDRemark" rows="5" maxlength="300"></textarea></td>
				</tr>
			</tbody>
		</table>
	</div>	
	<!-- </fieldset> -->
		<div class="clearspace20"></div>
 <!-- <fieldset class="fieldsetClsborder"> -->
		<span class="fipaFldLblTextbold" style="color: #50907C;" >
			Beneficial Owner</span>
			<div id="beneficialOwnerDiv">
			<div class="table-responsive">
		<table class="display table table-borderless">
			<col style="width: 12%;"></col>
			<col style="width: 2%;"></col>
			<col style="width: 15%;"></col>

			<tbody>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Name</div>
					</td>
					<td></td>
					<td><input type="text" name="amlBenfName"
						id="amlBenfName" class="form-control fld-resp disabledCursor" maxlength="60" disabled="true">

					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Relationship</div>
					</td>
					<td></td>
					<td><select name="amlBenfRelat"
						id="amlBenfRelat" class="form-control fld-resp-mm  disabledCursor" disabled="true">
						<option value="">--SELECT--</option>
				 						<c:if test="${not empty RELATIONSHIP}">
										  <c:forEach var="depnrelation" items="${RELATIONSHIP}">
										    <option value="${depnrelation[1]}">${depnrelation[1]}</option>
										  </c:forEach>
										</c:if> 
						 
					</select></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">NRIC</div>
					</td>
					<td></td>
					<td><input type="text" name="amlBenfNric"
						id="amlBenfNric" class="form-control fld-resp-mm disabledCursor" maxlength="20" disabled="true">
					</td>
				</tr>

				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Incorporation No.</div>
					</td>
					<td></td>
					<td><input type="text" name="amlBenfIncno"
						id="amlBenfIncno" class="form-control fld-resp-mm disabledCursor"
						maxlength="20" disabled="true"></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Job/ Political/ Military Title
							of Position Held</div>
					</td>
					<td></td>
					<td><input type="text" name="amlBenfJob"
						id="amlBenfJob" class="form-control fld-resp-mm  disabledCursor" maxlength="30"  disabled="true">
					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">In what country is/ was the
							position held</div>
					</td>
					<td></td>
					<td><select name="amlBenfJobconty"
						id="amlBenfJobconty" class="form-control fld-resp-mm  disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
							<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
					</select></td>
				</tr>

				<tr>
					<td><div class="fipaFldLblTextbold">Registered Address</div></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Address 1</div>
					</td>
					<td></td>
					<td><input type="text" name="amlBenfAddr1"
						id="amlBenfAddr1" class="form-control fld-resp disabledCursor"
						maxlength="150" disabled="true"/></td>
				</tr>

				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Address 2</div>
					</td>
					<td></td>
					<td><input type="text" name="amlBenfAddr2"
						id="amlBenfAddr2" class="form-control fld-resp disabledCursor"
						maxlength="150" disabled="true"/></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Postal Code</div>
					</td>
					<td></td>
					<td><input type="text" name="amlBenfPostal"
						id="amlBenfPostal" class="form-control fld-resp-sm disabledCursor" maxlength="6" disabled="true"/>
					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Country</div>
					</td>
					<td></td>
					<td><select name="amlBenfConty"
						id="amlBenfConty" class="form-control fld-resp-mm disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
							<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
					</select></td>

				</tr>
			</tbody>
		</table>
</div>
</div>
<!-- </fieldset> -->
		<div class="clearspace40"></div>
  
 <!-- <fieldset class="fieldsetClsborder"> -->
		<span class="fipaFldLblTextbold" style="color: #50907C;" > Third
			Party Payer (TPP)</span>
			<div id="ThirdPartyPayerDiv">
			<div class="table-responsive">
		<table class="display table table-borderless">
			<col style="width: 12%;"></col>
			<col style="width: 2%;"></col>
			<col style="width: 15%;"></col>

			<tbody>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Name (As per NRIC)</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppName"
						id="amlTppName" class="form-control fld-resp disabledCursor" maxlength="60" disabled="true">

					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Relationship</div>
					</td>
					<td></td>
					<td><select name="amlTppRelat"
						id="amlTppRelat" class="form-control fld-resp-mm disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
				 						<c:if test="${not empty RELATIONSHIP}">
										  <c:forEach var="depnrelation" items="${RELATIONSHIP}">
										    <option value="${depnrelation[1]}">${depnrelation[1]}</option>
										  </c:forEach>
										</c:if>
					</select></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">NRIC</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppNric"
						id="amlTppNric" class="form-control fld-resp-mm disabledCursor" maxlength="20" disabled="true">
					</td>
				</tr>

				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Incorporation No.</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppIncno"
						id="amlTppIncno" class="form-control fld-resp-mm disabledCursor"
						maxlength="20" disabled="true"></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Job/ Political/ Military Title
							of Position Held</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppJob"
						id="amlTppJob" class="form-control fld-resp-mm disabledCursor" maxlength="30" disabled="true">
					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">In what country is/ was the
							position held</div>
					</td>
					<td></td>
					<td><select name="amlTppJobconty"
						id="amlTppJobconty" class="form-control fld-resp-mm disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
							<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
					</select></td>
				</tr>

				<tr>
					<td><div class="fipaFldLblTextbold">Registered Address</div></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Address 1</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppAddr1"
						id="amlTppAddr1" class="form-control fld-resp disabledCursor"
						maxlength="150" disabled="true"/></td>
				</tr>

				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Address 2</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppAddr2"
						id="amlTppAddr2" class="form-control fld-resp disabledCursor"
						maxlength="150" disabled="true"/></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Postal Code</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppPostal"
						id="amlTppPostal" class="form-control fld-resp-sm disabledCursor" maxlength="6" disabled="true"/>
					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Country</div>
					</td>
					<td></td>
					<td><select name="amlTppConty" id="amlTppConty"
						class="form-control fld-resp-mm disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
							<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
					</select></td>

				</tr>
				<tr>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Mode of Payment</div>
					</td>
					<td></td>
					<td><select name="amlTppPaymode"
						id="amlTppPaymode" class="form-control fld-resp-mm disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
							<option value="CHQ">For Cheque</option>
							<option value="CASH">Cashier Order</option>
							<option value="CRDTCARD">Credit Card</option>
					</select></td>
				</tr>
				<tr>
					<td height="3px;"></td>
				</tr>
<!-- 				<tr> -->
<!-- 					<td style="text-align: right;"> -->
<!-- 						<div class="fipaFldLblText">Supporting Document</div> -->
<!-- 					</td> -->
<!-- 					<td></td> -->
<!-- 					<td><input type="file" id="filecdTppNricCopy" -->
<!-- 						name="filecdTppNricCopy" class="form-control fld-resp" /></td> -->
<!-- 				</tr> -->

				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Name of Bank / Issuing Bank</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppBank"
						id="amlTppBank" class="form-control fld-resp disabledCursor"
						maxlength="60" disabled="true"></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Cheque/Cashier Order No.</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppChqno"
						id="amlTppChqno" class="form-control fld-resp-mm disabledCursor"
						maxlength="20" disabled="true"></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Mobile</div>
					</td>
					<td></td>
					<td><input type="text" name="amlTppMobile"
						id="amlTppMobile" class="form-control fld-resp-mm disabledCursor" maxlength="20" disabled="true">

					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Signature of 3 rd Party Payer</div>
					</td>
					<td rowspan="3"></td>
					<td>
						<div class="fieldsetClsborder" style="height: 50px; width: 70%;"></div>
					</td>
				</tr>

			</tbody>
		</table>
		</div>
		</div>
		<!-- </fieldset> -->
		
		<div class="clearspace40"></div>
		
		<!-- <fieldset class="fieldsetClsborder"> -->
		<span class="fipaFldLblTextbold" style="color: #50907C;" >
			Political Exposed Person (PEP)</span>
			<div id="PolExpPersDiv">
			<div class="table-responsive">
		<table class="display table table-borderless">
			<col style="width: 12%;"></col>
			<col style="width: 2%;"></col>
			<col style="width: 15%;"></col>

			<tbody>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Name (As per NRIC)</div>
					</td>
					<td></td>
					<td><input type="text" name="amlPepName"
						id="amlPepName" class="form-control fld-resp disabledCursor" maxlength="60" disabled="true">

					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Relationship</div>
					</td>
					<td></td>
					<td><select name="amlPepRelat"
						id="amlPepRelat" class="form-control fld-resp-mm disabledCursor" disabled="true">
						<option value="">--SELECT--</option>
				 						<c:if test="${not empty RELATIONSHIP}">
										  <c:forEach var="depnrelation" items="${RELATIONSHIP}">
										    <option value="${depnrelation[1]}">${depnrelation[1]}</option>
										  </c:forEach>
										</c:if>
					</select></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">NRIC</div>
					</td>
					<td></td>
					<td><input type="text" name="amlPepNric"
						id="amlPepNric" class="form-control fld-resp-mm disabledCursor" maxlength="20" disabled="true">
					</td>
				</tr>

				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Incorporation No.</div>
					</td>
					<td></td>
					<td><input type="text" name="amlPepIncno"
						id="amlPepIncno" class="form-control fld-resp-mm disabledCursor"
						maxlength="20" disabled="true"></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Job/ Political/ Military Title
							of Position Held</div>
					</td>
					<td></td>
					<td><input type="text" name="amlPepJob"
						id="amlPepJob" class="form-control fld-resp-mm disabledCursor" maxlength="30" disabled="true">
					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">In what country is/ was the
							position held</div>
					</td>
					<td></td>
					<td><select name="amlPepJobconty"
						id="amlPepJobconty" class="form-control fld-resp-mm disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
							<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
					</select></td>
				</tr>

				<tr>
					<td><div class="fipaFldLblTextbold">Registered Address</div></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Address 1</div>
					</td>
					<td></td>
					<td><input type="text" name="amlPepAddr1"
						id="amlPepAddr1" class="form-control fld-resp disabledCursor"
						maxlength="150" disabled="true"/></td>
				</tr>

				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Address 2</div>
					</td>
					<td></td>
					<td><input type="text" name="amlPepAddr2"
						id="amlPepAddr2" class="form-control fld-resp disabledCursor"
						maxlength="150" disabled="true"/></td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Postal Code</div>
					</td>
					<td></td>
					<td><input type="text" name="amlPepPostal"
						id="amlPepPostal" class="form-control fld-resp-sm disabledCursor" maxlength="6" disabled="true"/>
					</td>
				</tr>
				<tr>
					<td style="text-align: right;">
						<div class="fipaFldLblText">Country</div>
					</td>
					<td></td>
					<td><select name="amlPepConty" id="amlPepConty"
						class="form-control fld-resp-mm disabledCursor" disabled="true">
							<option value="">--SELECT--</option>
							<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
					</select></td>

				</tr>
			</tbody>
		</table>
   </div>
</div>
<!-- </fieldset> -->
	</div>
    </div>    
    
    
<input type="hidden" name="advDecCrtdDate" id="advDecCrtdDate"/>
<input type="hidden" name="advDecModDate" id="advDecModDate"/>

    
