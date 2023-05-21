 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  
<div id="accordion" class="panel-group">
<!-- End of Self Particular --> 
<div id="spousesection" class="accord-content"  style="">
 <!-- <fieldset class="fieldsetClsborder"> -->
 <div class=""> 
		<img src="images/menuicons/romance.png" class="img-rounded" width="40" height="40">
		<span class="panelHeaderTitle"> Spouse Particulars</span>
	</div>
  <span class="fipaFldLblText"><img src="images/menuicons/canvas.png" width="15" class="info"/><small>&nbsp;&nbsp;(Fields denoted in 
  <span class="mandFldastrks">*</span> 
  requires documentation for successful updates)</small></span> 
  <span class="panelHeaderTitle"> <small>
  <input type="text" name="updlstdateSps" id="updlstdateSps" class="txtlastupdated" readonly="true"/></small>
  </span>
  
  		<!--changes done 19/06/2019 --> 
      <div class="panel-body"> 
      <div class="row vertical-divider">  
	<div class="col-md-6">  
	
	<fieldset class="fieldsetClsborder" id="spouseinformation">
    	<legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ClientSps.png" height="30" width="30"></span> Spouse Information</legend>
	  		
	  		<div class="form-group required">
			 <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                   <label class="control-label mandFldastrks pull-right text-right" for="dfSpsName">
                   Name (As per NRIC)<span class="mandFldastrks">*</span></label>
                   </div>
                    <div class="col-md-6 col-sm-6 col-xs-6">
                  <input id="dfSpsName" name="dfSpsName"  class="form-control clsfipaSpouse"  
                  type="text" maxlength="75"  onmouseover="fipaTooltip(this);" 
                    autofocus onchange="loadSlfSpsName();"/>
                    </div>
                </div>
                </div> 
                
                
                <div class="form-group  required">
                 <div class="row">
                   <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label mandFldastrks pull-right text-right" for="dfSpsDob"> 
                Date of Birth<small>(DD/MM/YYYY)</small> <span class="mandFldastrks">*</span> </label>
                </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                  <div class="input-group input-group-sm date"  id="dobSpspicker" > 
                  <input type='text' class="form-control clsfipaSpouse" id="dfSpsDob"   
 						name="dfSpsDob"   
 					  maxlength="10"    >  
                  <div class="input-group-addon" > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                </div>  
                 </div>
					</div>	
				</div>
				
				
				<div class="form-group"> 
                  <div class="row">
                     <div class="col-md-6 col-sm-6 col-xs-6">
                   <label class="control-label pull-right text-right" for="dfSpsAge">Age</label>
                    </div>
                       <div class="col-md-4 col-sm-4 col-xs-4">
                        <div class="input-group input-group-sm fld-resp-sm">
				 <input id="dfSpsAge" name="dfSpsAge" readonly="true"  
				 class="form-control numbers applyEvntYrs readOlyCursor clearfipaSpouse" type="text" onchange="calcRtrmntPln(this);" />
				 <div class="input-group-addon" > 
 					 <span id="symbolYrs"></span> </div>
				  </div>
            	</div>
                </div>
                </div>
				 
			 <div class="form-group required">
			   <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                  <label class="control-label mandFldastrks pull-right text-right" for="dfSpsNationality">Nationality 
                  <span class="mandFldastrks">*</span>  </label>
                   </div>
                   <div class="col-md-4 col-sm-4 col-xs-4">
                  <select class="form-control clsfipaSpouse" id="dfSpsNationality" 
                  name="dfSpsNationality"  > 
				 						<option value="">--SELECT--</option>
				 						<option value="Singaporean">Singaporean</option>
				 						<c:if test="${not empty NATIONALITY}">
										  <c:forEach var="nationality" items="${NATIONALITY}">
										    <option value="${nationality}">${nationality}</option>
										  </c:forEach>
										</c:if>
									</select>
									</div>
                </div>
                </div>
                
                
                
                <div class="form-group required"> 
                    <div class="row"> 
                        <div class="col-md-6 col-sm-6 col-xs-6 ">
                        <div> 
					 <label class="control-label pull-right text-right"> 
                        </label>
                        </div>  
                         <div> 
                         <label class="control-label pull-right text-right"> 
                  <select class="form-control " id="dfSpsIdtype" name="dfSpsIdtype"  
                  onchange="focusId(this,dfSpsNric)"  >
									<option value="NRIC" selected>NRIC</option>
									<option value="FIN">FIN No.</option>
									<option value="PASSPORT">Passport No.</option>
									</select> </label>
					 </div> 
					 
									</div>   
				  <div class="col-md-3 col-sm-3 col-xs-3"> 
				  	 <input id="dfSpsNric" name="dfSpsNric"  
				  	 class="form-control clsfipaSpouse" type="text" 
				  	 maxlength="20" 
				  	 onmouseover="fipaTooltip(this);"  />
				  </div>  
                </div>
                </div>
                
                
                
                 <div class="form-group">
                  <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"> 
                    <label class="control-label pull-right text-right" for="dfSpsGender">Gender</label>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                  <select class="form-control clsfipaSpouse" id="dfSpsGender" name="dfSpsGender"  >
				 						<option value="">--SELECT--</option>
										<c:if test="${not empty GENDER_LIST}">
										  <c:forEach var="gender" items="${GENDER_LIST}">
										    <option value="${gender.key}">${gender.value}</option>
										  </c:forEach>
										</c:if>	
									</select>
									</div>
                </div>
                </div>
                
                
                
                
                  <div class="form-group">  
                   <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                 <label class="control-label pull-right text-right" for="dfSpsMartsts">Martial Status  </label>
                 </div>
                       <div class="col-md-3 col-sm-3 col-xs-3">
				 <select class="form-control clsfipaSpouse" id="dfSpsMartsts" 
				 				name="dfSpsMartsts"  >
								     <option value="Married">Married</option> 
									</select>
									</div>
									</div>
                </div>
                
                <div class="form-group">  
                <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"> 
                  <label class="control-label pull-right text-right" for="dfSpsSrcfund">Source of Fund </label>
                  </div>
                       <div class="col-md-4 col-sm-4 col-xs-4"> 
				<select class="form-control clsfipaSpouse" id="dfSpsSrcfund" 
				name="dfSpsSrcfund"  >
				 						<option value="">--SELECT--</option>
				 						 <option value="EARNINC">Earned&nbsp;Income</option>
				 						 <option value="INVINC">Investment&nbsp;Income</option>
				 						 <option value="PERSSAVE">Personal&nbsp;Savings</option>
				 						 <option value="CPFSAVE">CPF&nbsp;Savings</option> 
				 				</select>
                </div>
                </div>
                
                </div> 
                
                
                 <div class="form-group">  
                <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6"> 
                 <label class="control-label pull-right text-right" for="dfSpsSmoking">Smoking </label>
                  </div>
                         <div class="col-md-2 col-sm-2 col-xs-2"> 
				<select class="form-control clsfipaSpouse" id="dfSpsSmoking" name="dfSpsSmoking"  >
				 						<option value="">--SELECT--</option>
				 						 <option value="NO">No</option>
				 						 <option value="YES">Yes</option> 
				 				</select>
                </div>
                </div>
                
                </div> 
                
     </fieldset>           
      
     <br/>           
               
     <fieldset class="fieldsetClsborder">
    	<legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ContactInfo.png" height="30" width="30"></span>Contact Information</legend>        
                
                <div class="form-group">  
                 <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6">
                 <label class="control-label pull-right text-right" for="dfSpsHp">Mobile</label>
				</div>
				 <div class="col-md-4 col-sm-4 col-xs-4">
			<input id="dfSpsHp" name="dfSpsHp"  class="form-control clsfipaSpouse"   type="text"  
			 maxlength="60"   onmouseover="fipaTooltip(this);"   />
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                 <div class="row">
                     <div class="col-md-6 col-sm-6 col-xs-6">  
                  <label class="control-label pull-right text-right" for="dfSpsHome">Home  </label>
				</div>
				    <div class="col-md-4 col-sm-4 col-xs-4">
				<input id="dfSpsHome" name="dfSpsHome"  class="form-control clsfipaSpouse"   
				type="text"  maxlength="60"   />
                </div>
                </div>
                </div>
                
                <div class="form-group">  
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label pull-right text-right" for="dfSpsOffice">Office </label>
				</div>
				   <div class="col-md-4 col-sm-4 col-xs-4"> 
                <input id="dfSpsOffice" name="dfSpsOffice"  class="form-control clsfipaSpouse"  
                type="text"  maxlength="60"  />
                </div>
                </div>
                </div>
                
                <div class="form-group">  
                <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"> 
                   <label class="control-label pull-right text-right" for="dfSpsFax">Fax   </label>
				</div>
				  <div class="col-md-4 col-sm-4 col-xs-4">
				<input id="dfSpsFax" name="dfSpsFax"   class="form-control clsfipaSpouse"  
				type="text"  maxlength="60"  />
                </div>
                </div>
                </div>
                
                <div class="form-group">  
                <div class="row">
                     <div class="col-md-6 col-sm-6 col-xs-6"> 
                <label class="control-label pull-right text-right" for="dfSpsPersemail">Email</label>
				</div>
				      <div class="col-md-6 col-sm-6 col-xs-6"> 
				      <div class="input-group input-group-sm">
               <input type='text'  id="dfSpsPersemail" name="dfSpsPersemail" class="form-control clsfipaSpouse"
                maxlength="60" onblur="EmailCheck(dfSpsPersemail)" onmouseover="fipaTooltip(this);"  />
                <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"  ></span> </div>
                 </div>
                </div>
                </div>
                </div>
                
          </fieldset>    
          
           <br/>
   
   <fieldset class="fieldsetClsborder">
    	<legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ClientEmp.png" height="30" width="30"></span>Employment Info</legend>
    	        
    	              <div class="form-group"> 
                 <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"> 
                  <label class="control-label pull-right text-right" for="dfSpsEmpsts">Employment Status  </label>
                    </div>
                     <div class="col-md-4 col-sm-4 col-xs-4">
				<select class="form-control clsfipaSpouse" id="dfSpsEmpsts" name="dfSpsEmpsts"   >
				 						<option value="">--SELECT--</option>
				 						<c:if test="${not empty EMPLOYMENT_STATUS}">
										  <c:forEach var="empsts" items="${EMPLOYMENT_STATUS}">
										    <option value="${empsts}">${empsts}</option>
										  </c:forEach>
										</c:if>								  		
									</select>
									</div>
									</div>
                </div>
                
                 <div class="form-group">  
                  <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6">
                    <label class="control-label pull-right text-right" for="dfSpsOccpn">Occupation </label>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6">
                  <input id="dfSpsOccpn" name="dfSpsOccpn" class="form-control clsfipaSpouse"
                   type="text" maxlength="60"   />
				</div>
				</div>
				 </div>
               
                <div class="form-group">   
                  <div class="row">
                     <div class="col-md-6 col-sm-6 col-xs-6">
                  <label class="control-label pull-right text-right" for="dfSpsCompname">Employer </label>
				</div>
				  <div class="col-md-6 col-sm-6 col-xs-6">
				<input id="dfSpsCompname" name="dfSpsCompname" class="form-control clsfipaSpouse" 
				type="text" maxlength="60"    />
                </div>
                </div>
                </div>
                 
                 
                 <div class="form-group"> 
                 <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                    <label class="control-label pull-right text-right" for="dfSpsempcat">Employment category </label>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
				<select class="form-control clsfipaSpouse" id="dfSpsempcat" name="dfSpsempcat"  > 
				<option value="">--SELECT--</option>
				 						<c:if test="${not empty EMPLOYEE_CATEGRY}">
										  <c:forEach var="empcat" items="${EMPLOYEE_CATEGRY}">
										    <option value="${empcat}">${empcat}</option>
										  </c:forEach>
										</c:if>								  		
									</select>
									</div>
									</div>
                </div>
    	        
    	          <div class="form-group">  
                <div class="row">
                     <div class="col-md-6 col-sm-6 col-xs-6"> 
                <label class="control-label pull-right text-right" for="dfSpsAnnlincome">Estd Monthly Income
                    <a class="btn btn-default addinfoicon" id="popdfSpsAnnlincome"></a></label>
				</div>
				
             
				    <div class="col-md-6 col-sm-6 col-xs-6"> 
				     <div class="input-group input-group-sm">
				     <div class="input-group-addon" > 
				     <span class="glyphicon" id="symbolUsd"></span>
				     </div>
                <input type="text" name="dfSpsAnnlincome"  id="dfSpsAnnlincome" 
                onmouseover="fipaTooltip(this);"
                class="form-control numbers clsfipaSpouse applyEvntUsd"   
                 onchange="prtclrMnthInc(this,'Spouse')"/>
                </div>
                </div>
                </div>
                </div>
                 
       </fieldset> 
                
	</div> 
	

	<div class="col-md-6">
	
	
	<fieldset class="fieldsetClsborder" id="spouseaddress">
    	<legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ClientAddr.png" height="30" width="30"></span>Residential Address</legend>

	  			<!-- <div class="form-group">   
                 <label class="control-label mandFldastrks" for="txtFldDfSpsResidential">
                 Registered Residential Address <span class="mandFldastrks">*</span> </label>
                </div> -->
                
<!--                 class="clsfipaSpouse" -->
                <div class="form-group">  
                 <div class="row">
                    <div class="col-md-10 col-sm-10 col-xs-10"> 
                    <div class="checkbox checkbox-primary">
                       <input type="checkbox" id="dfSpsRegaddrAsSelf" name="dfSpsRegaddrAsSelf" 
                      onclick="setChkBoxValue(this)"     />
                        <label class="control-label" for="dfSpsRegaddrAsSelf">Same as Client's Registered Residential Address</label>
                    </div>
                     
                     </div>
                     </div>
                </div>
                
                
                <div class="form-group">
                 <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-4">
                 <label class="control-label  mandFldastrks pull-right text-right" for="dfSpsHomeaddr">Address1 </label>
                 </div>
                   <div class="col-md-8 col-sm-8 col-xs-8">
				<input id="dfSpsHomeaddr" name="dfSpsHomeaddr"  class="form-control clsfipaSpouse"  
				type="text" maxlength="450"  onmouseover="fipaTooltip(this);" onchange="chgRegAddrToMailAdd(this,'dfSpsMailaddr','dfSpsRegmailaddrSame')"    />
                </div>
                </div>
                </div>
                
                
                <div class="form-group">
                 <div class="row"> 
                <div class="col-md-4 col-sm-4 col-xs-4">
                   <label class="control-label pull-right text-right" for="dfSpsHomeaddr2">Address2 </label>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-8">
				<input id="dfSpsHomeaddr2" name="dfSpsHomeaddr2"  class="form-control clsfipaSpouse" 
				 type="text" maxlength="150"  onmouseover="fipaTooltip(this);" 
				 onchange="chgRegAddrToMailAdd(this,'dfSpsMailaddr2','dfSpsRegmailaddrSame')"  />
                </div>
                </div>
                </div>
                
                <div class="form-group">
                 <div class="row"> 
               <div class="col-md-4 col-sm-4 col-xs-4">
                  <label class="control-label  mandFldastrks pull-right text-right" for="dfSpsHomepostalcode">Postal Code</label>
                    </div>
                   <div class="col-md-4 col-sm-4 col-xs-4">
				<input id="dfSpsHomepostalcode" name="dfSpsHomepostalcode"  class="form-control clsfipaSpouse" 
				type="text" maxlength="20"   onmouseover="fipaTooltip(this);" onchange="chgRegAddrToMailAdd(this,'dfSpsMailpostal','dfSpsRegmailaddrSame')"  />
									</div>
									</div>
                </div>
                
                <div class="form-group">  
                <div class="row"> 
               <div class="col-md-4 col-sm-4 col-xs-4">
               <label class="control-label  mandFldastrks pull-right text-right" for="dfSpsHomecntry">Country</label> 
                </div> 
               <div class="col-md-4 col-sm-4 col-xs-4">
<!--                clsfipaSpouse -->
                <select class="form-control clsfipaSpouse" id="dfSpsHomecntry" name="dfSpsHomecntry"  
                onchange="chgRegAddrToMailAdd(this,'dfSpsMailcntry','dfSpsRegmailaddrSame')"   >
				 						<option value="">--SELECT--</option>
				 						<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
									</select>
               </div>
               </div>
                </div>
                
     </fieldset>           
<!--                  class="clsfipaSpouse" -->
<br/>

<fieldset class="fieldsetClsborder" id="spousemailaddress">
    	<legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ClientMail.png" height="30" width="30"></span>Mailing Address</legend>

                <div class="form-group">  
                <div class="row"> 
               <!--  <div class="col-md-4 col-sm-4 col-xs-4">
                     <label class="control-label" for="">Mailing Address </label>
                </div> -->
               <div class="col-md-8 col-sm-8 col-xs-8">
               
               <div class="checkbox checkbox-primary">
                        <input type="checkbox" id="dfSpsRegmailaddrSame" name="dfSpsRegmailaddrSame"   onchange="setChkBoxValue(this)" 
								  	 />
                         <label class="control-label" for="dfSpsRegmailaddrSame">  Different from registered residential address</label>
                    </div> 
                    
                     
                </div>
                </div>
                </div>
                
                
                <!-- <div class="form-group">  
                  <label class="control-label mandFldastrks" for="txtFldDfSpsMailingAddress">Mailing Address 
                  <span class="mandFldastrks">*</span></label>
                </div> -->
<!--                 class="clsfipaSpouse" -->
                 <div class="form-group">  
                <div class="row">  
				<div class="col-md-10 col-sm-10 col-xs-10">
				
				<div class="checkbox checkbox-primary">
                       <input type="checkbox" id="dfSpsMailaddrAsSelf" name="dfSpsMailaddrAsSelf" 
				    onclick="setChkBoxValue(this)"   /> 
                        <label class="control-label" for="dfSpsMailaddrAsSelf">	 Same as Client's Registered Residential Address</label>
                    </div>   
				 
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                <div class="row"> 
                <div class="col-md-4 col-sm-4 col-xs-4">
                <label class="control-label  mandFldastrks pull-right text-right" for="dfSpsMailaddr">Address1</label>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-8">
				<input class="form-control readOlyCursor clearfipaSpouse"   id="dfSpsMailaddr"
				 name="dfSpsMailaddr"   maxlength="450"   onmouseover="fipaTooltip(this);" 
				  readonly="true"/>
                </div>
                </div>
                </div>
                
                <div class="form-group">  
                <div class="row"> 
               <div class="col-md-4 col-sm-4 col-xs-4">
                  <label class="control-label pull-right text-right" for="dfSpsMailaddr2">Address2</label>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-8">
                <input class="form-control readOlyCursor clearfipaSpouse"   id="dfSpsMailaddr2"
                 name="dfSpsMailaddr2"   maxlength="450"   onmouseover="fipaTooltip(this);" 
                  readonly="true"/>
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                <div class="row"> 
                <div class="col-md-4 col-sm-4 col-xs-4"> 
                 <label class="control-label  mandFldastrks pull-right text-right" for="dfSpsMailpostal">Postal Code</label>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-4">
				<input class="form-control readOlyCursor clearfipaSpouse"   id="dfSpsMailpostal" 
				name="dfSpsMailpostal"   maxlength="20"    onmouseover="fipaTooltip(this);" 
				  readonly="true"/>
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                <div class="row"> 
               <div class="col-md-4 col-sm-4 col-xs-4">
                  <label class="control-label  mandFldastrks pull-right text-right" for="dfSpsMailcntry">Country</label>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-4">
<!-- 				 disabledCursor clearfipaSpouse -->
              <select class="form-control disabledCursor" id="dfSpsMailcntry" name="dfSpsMailcntry"
                disabled="true">
				 						<option value="">--SELECT--</option>
				 					<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
									</select>
				</div>
                </div>
                </div>
                
                
                 
                <div class="form-group">  
                <div class="row"> 
               <div class="col-md-4 col-sm-4 col-xs-4">
                 <label class="control-label text-right" for="dfSpsAddrreason">Reason for different Mailing Address</label>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-8">
				<select class="form-control disabledCursor clearfipaSpouse" id="dfSpsAddrreason" 
				name="dfSpsAddrreason"    disabled="true">
				 						<option value="">--SELECT--</option>
				 						 <option value="OFFADDR">This is my office address</option>
				 						 <option value="APART">This is the address of the rented apartment that I am staying in</option>
				 						 <option value="OTHPROP">This is the address of my other property</option>
				 						 <option value="FFFS">I am currently staying with my friend or fiance or fiancee or spouse</option>
				 						 <option value="OVERSEAS">I am currently working or studying overseas</option>
				 						 <option value="SIBL">This is my parent's/child's/sibling's/spouse's address</option>
				 				</select>
                </div>
                </div>
                </div>
                
   </fieldset>         
                 
<!--                 <div class="form-group" style="display:none">   -->
<!--                 <div class="row">  -->
<!--                  <div class="col-md-5 col-sm-5 col-xs-5">  -->
<!--                 <label class="control-label pull-left" for="txtFldDfSpsSupportDoc"> -->
<!--                 Supporting Document</label> -->
<!-- 				</div> -->
<!-- 				 <div class="col-md-6 col-sm-6 col-xs-6">  -->
<!-- 				<input type="file" id="txtFldDfSpsSupportDoc"  name="txtFldDfSpsSupportDoc" -->
<!-- 				 class="form-control clsfipaSpouse" tabindex=31/> -->
<!--                 </div> -->
<!--                 </div> -->
<!--                 </div> -->
                
                
		 
		 
	</div>

 
				 		
				 			</div> 
      </div>
      <!-- </fieldset> -->
    </div>
    

<!-- End of Spouse Particular -->
  
</div>
