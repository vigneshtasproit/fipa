<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div class="panel-group">  
 <div id="typesofappsec" class="accord-content"  >  
      <div class="panel-body" style="border: 1px solid #1D655C;"> 
     <!--  <div class="table-responsive">  -->
      <div class="col-md-6">   
			
			<div class="row"> 
		<div class="col-md-5" style="padding-left: 2px;">  
		<div class="custom-panel custom-panel-default" id="divAnalysisFor">
					<div class="panel-heading"><span class="custompanelHeaderTitle"><small>Analysis For</small></span>  </div>
					<div class="custom-panel-body">
					<div class="clearspace20"></div>
					<!-- <div class="checkbox checkbox-primary">
                       <input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForClient"  class="analysischkbox" data-attr="ANALYS_SLF"  disabled="true" data-class="clsfipaClient"
                   onclick="setChkBoxValue(this);"  />
                        <label class="control-label" for="txtFldAnalyisForClient">Client</label>
                    </div> -->
                     <label class="checkbox-container" for="txtFldAnalyisForClient">Client<input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForClient"  class="analysischkbox" data-attr="ANALYS_SLF"  disabled="true" data-class="clsfipaClient"
                   onclick="setChkBoxValue(this);"  />
					  <span class="checkmark"></span>
					</label> 
					 
                     <!-- <div class="checkbox checkbox-primary">
                     <input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForSpouse"  class="analysischkbox" data-attr="ANALYS_SPS" data-class="clsfipaSpouse"
                   onclick="setChkBoxValue(this);"  />
                        <label class="control-label" for="txtFldAnalyisForSpouse">Spouse</label>
                    </div> -->
                    <label class="checkbox-container" for="txtFldAnalyisForSpouse">Spouse<input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForSpouse"  class="analysischkbox" data-attr="ANALYS_SPS" data-class="clsfipaSpouse"
                   onclick="setChkBoxValue(this);"  />
					  <span class="checkmark"></span>
					</label>
                    <!-- <div class="checkbox checkbox-primary">
                      <input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForFamily"  class="analysischkbox" data-attr="ANALYS_FAM" data-class="clsfipaFamily"
                   onclick="setChkBoxValue(this);"  />
                        <label class="control-label" for="txtFldAnalyisForFamily">Family</label>
                    </div> -->
                      <label class="checkbox-container" for="txtFldAnalyisForFamily">Family<input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForFamily"  class="analysischkbox" data-attr="ANALYS_FAM" data-class="clsfipaFamily"
                   onclick="setChkBoxValue(this);"  />
					  <span class="checkmark"></span>
					</label>
				  <input type="hidden" name="appAnalysisFor" id="appAnalysisFor" value="{&quot;ANALYS_SLF&quot;:&quot;Y&quot;,&quot;ANALYS_SPS&quot;:&quot;Y&quot;,&quot;ANALYS_FAM&quot;:&quot;Y&quot;}">
            </div>  
            </div>
           
        </div> 
			<div class="col-md-7" style="padding-right: 2px;"> 
			<div class="custom-panel custom-panel-default">
					<div class="panel-heading"><span class="custompanelHeaderTitle"><small>Purpose</small></span> </div>
					<div class="custom-panel-body" style="height: 104px;">
					<div class="clearspace20"></div>
					<!-- <div class="checkbox checkbox-primary">
                    <input type="checkbox" name="txtFldPurpose" id="txtFldPurposeRpt" data-attr="FIN_PLN_RPT"  onclick="setChkBoxValue(this)"/>
					 <label class="control-label" for="txtFldPurposeRpt"> Financial Planning Reports</label>
                    </div> -->
                      <label class="checkbox-container" for="txtFldPurposeRpt">Financial Planning Reports<input type="checkbox" name="txtFldPurpose" id="txtFldPurposeRpt" data-attr="FIN_PLN_RPT"  onclick="setChkBoxValue(this)"/>
					  <span class="checkmark"></span>
					</label>
                    <!-- <div class="checkbox checkbox-primary">
                    <input type="checkbox" name="txtFldPurpose" id="txtFldPurposeAvy"  data-attr="FIN_ADVSRY" onclick="setChkBoxValue(this)" />
					 <label class="control-label" for="txtFldPurposeAvy">Financial Advisory</label>
                    </div> -->
                      <label class="checkbox-container" for="txtFldPurposeAvy">Financial Advisory<input type="checkbox" name="txtFldPurpose" id="txtFldPurposeAvy" data-attr="FIN_ADVSRY"  onclick="setChkBoxValue(this)"/>
					  <span class="checkmark"></span>
					</label>
				  <input type="hidden" name="appPurpose" id="appPurpose" value="{&quot;FIN_PLN_RPT&quot;:&quot;N&quot;,&quot;FIN_ADVSRY&quot;:&quot;N&quot;}">
               <div class="clearspace20"></div> 
              </div> 
            </div> 
			</div>
			
		</div>
		 <div class="clearspace20"></div>
		<div class="row">
		
		<div class="custom-panel custom-panel-default">
			
			<div class="panel-heading"><span class="custompanelHeaderTitle"><small>Is this application intended to replace in part of in full any existing designated
										investment/ A&H product?</small></span> </div>
			<div class="panel-body">
			<!-- <label class="control-label">Is this application intended to replace in part of in full any existing designated
										investment/ A&H product?</label> -->
										
										<div class="radio radio-primary">
											<div class="col-md-2">
											<input type="radio" name="appReplacePrdt" id="appReplacePrdtY" value="Y"></input>
		                                <label  class="control-label" for="appReplacePrdtY">
		                                    Yes
		                                </label>
											</div>
											<div class="col-md-2">
											<input type="radio" name="appReplacePrdt" id="appReplacePrdtN" value="N">
		                                <label  class="control-label" for="appReplacePrdtN">
		                                    No
		                                </label>
											</div>
											<div class="col-md-8"></div>
		                                
		                            </div>
		                            
		                            
		                            
										
			</div>
		</div>
		<div class="clearspace20"></div>
		<div class="custom-panel custom-panel-default">
					<div class="panel-heading"><span class="custompanelHeaderTitle">
					<small>Application Type&nbsp;(Client's Choice) </small></span></div>
					<div class="custom-panel-body"> 
					<div class="table-responsive">
					<table class="table table-striped table-hover table-bordered">
					<tr>
					<td align="center">&nbsp;</td>
					<td align="left"><label class="control-label">Simplified</label></td>
 					<td align="left"><label class="control-label">Full Fact</label></td> 
					</tr>
					<tr>
					<td><label class="control-label">Life & Non-Insurance Products</label></td>
					<td align="center">
						<div>
						  <label class="checkbox-container" for="txtFldClientChoiceLifeSimplified"><input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoiceLifeSimplified"  data-attr="LS"  onclick="setFNAType(this,'SIMPLIFIED')" disabled="true" onchange="fillLifeInsUtIlpProdt(this);"/>
						   <span class="checkmark"></span>
						  </label>
						</div>
					</td>
 					<td align="center">
 					<!-- <div class="checkbox checkbox-primary"> 
                    				<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice"   data-attr="LF" onclick="setFNAType(this,'FULLFACT')"  onchange="fillLifeInsUtIlpProdt(this);"/> 
 							 <label>&nbsp;</label> 
 							  </div> -->
	 							  <div>
	 							   <label class="checkbox-container" for="txtFldClientChoiceLifeFact"><input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoiceLifeFact"   data-attr="LF" onclick="setFNAType(this,'FULLFACT')"  onchange="fillLifeInsUtIlpProdt(this);"/> 
									  <span class="checkmark"></span>
									</label>
								  </div>
 							  </td> 
					</tr> 
					<tr>
					<td><label class="control-label">Accident and Health (A&H) Products</label></td>
					<td align="center">
					<div>
						<label class="checkbox-container" for="txtFldClientChoiceAccidentSimplied"><input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoiceAccidentSimplied"  data-attr="AS"  onclick="setFNAType(this,'SIMPLIFIED')" disabled="true" onchange="fillLifeInsUtIlpProdt(this);"/>
						  <span class="checkmark"></span>
						</label>
					</div>
				   </td>
 					<td align="center">
 					<!-- <div class="checkbox checkbox-primary"> 
                    			<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice"   data-attr="AF"  onclick="setFNAType(this,'FULLFACT')"  onchange="fillLifeInsUtIlpProdt(this);"/> 
 							 <label>&nbsp;</label> 
 							  </div>  -->
	 							  <div>
								    <label class="checkbox-container" for="txtFldClientChoiceAccidentFact"><input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoiceAccidentFact"   data-attr="AF"  onclick="setFNAType(this,'FULLFACT')"  onchange="fillLifeInsUtIlpProdt(this);"/> 
									  <span class="checkmark"></span>
									</label>
								  </div>
							  </td>
					</tr> 
					<tr>
					<td><label class="control-label">Investments</label></td>
					<td align="center">
					    <div>
							<label class="checkbox-container" for="txtFldClientChoiceInvestSimplied"><input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoiceInvestSimplied"  data-attr="IS"  onclick="setFNAType(this,'SIMPLIFIED')" disabled="true" onchange="setFNAType(this,'SIMPLIFIED')"/>
							  <span class="checkmark"></span>
							</label>
							  <input type="hidden" name="appClientChoice" id="appClientChoice"   value="{&quot;LF&quot;:&quot;Y&quot;,&quot;AF&quot;:&quot;Y&quot;,&quot;IF&quot;:&quot;Y&quot;}">
						</div>
							  </td>
 					<td align="center">
 					<!-- <div class="checkbox checkbox-primary"> 
                    			<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice" data-attr="IF" onclick="setFNAType(this,'FULLFACT')"   /> 
 							 <label>&nbsp;</label> 
						  </div>  -->
						  <div>
							 <label class="checkbox-container" for="txtFldClientChoiceInvestmentFact"><input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoiceInvestmentFact" data-attr="IF" onclick="setFNAType(this,'FULLFACT')"   /> 
					 			 <span class="checkmark"></span>
							</label>
						 </div>	
							  </td> 
					</tr> 
					</table>
					</div> 
        </div>
        </div> 	
		</div> 
		 <div class="clearspace20"></div>
		 
		</div>
		
<div class="col-md-6">
<div class="custom-panel custom-panel-default" id="divAnalysisTypes" style="height:515px">
					<div class="panel-heading"><small><span class="custompanelHeaderTitle">
  					       Analysis Type <span class="mandFldastrks">*</span></span></small></div>
					<div class="custom-panel-body">
					<div class="clearspace20"></div>
							
								<table
									style="border-collapse: collapse; empty-cell show; width: 70%;table-layout: fixed;">
									<c:if test="${not empty ALL_ANALYSIS_TYPES}">
									<tr valign="top" align="left">

											<td class="fipaFldLblText">
											<div>
											 <label class="checkbox-container" for="txtFldAnalysisSelAllid">Select All<input type="checkbox" name="txtFldAnalysisSelAll" id="txtFldAnalysisSelAllid" value="Select All" onclick="analysisCheckEvent(this,'evt')" />
					  						<span class="checkmark"></span>
											</label>
												</div>
											<c:forEach
													var="anatype" items="${ALL_ANALYSIS_TYPES}" varStatus="inc">
													<c:if test="${inc.index<4}">

														<div>
														  <label class="checkbox-container" for="analysis${inc.index}">${anatype.analysis}<input type="checkbox" name="analysis" id="analysis${inc.index}" value="${anatype.anaPkid}" class="analyTypeChkbox" onclick="analysisCheckEvent(this,'All')" /> 
									  						<span class="checkmark"></span>
														  </label>
														 <input type="hidden" name="txtFldAppTypeIds" id="txtFldAppTypeIds"/>
														</div>
													</c:if>
												</c:forEach>
											<c:forEach
													var="anatype" items="${ALL_ANALYSIS_TYPES}" varStatus="inc">
													<c:if test="${inc.index>=4}">

														<div>
														 <label class="checkbox-container" for="analysis${inc.index}">${anatype.analysis}<input type="checkbox" name="analysis" id="analysis${inc.index}" value="${anatype.anaPkid}" class="analyTypeChkbox" onclick="analysisCheckEvent(this,'All')" />
									  						<span class="checkmark"></span>
														  </label>
														 <input type="hidden" name="txtFldAppTypeIds" id="txtFldAppTypeIds" /> 
														</div>

													</c:if>
												</c:forEach></td>
										</tr>

									</c:if>
								</table>
								
								
								 
 	  
	  
							</div>
				 </div>

  </div>
       <!--  <div class="col-md-6">  
					
				 
				 </div>  -->
					<!-- </div> -->
					
				 
	 </div>
	 </div>
	 </div>
