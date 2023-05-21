<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<div id="accordion" class="panel-group">   
<div id="goalssection" class="accord-content" style="">  
   <div class="panel-body">   
   <div class="table-responsive">
   <div class="col-md-12" > 
					<div class="btn-group pull-right funcToDisable" role="group"> 
					<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="DfinGls" disabled="true" ></button>
						</div>
					<div class="btn-group pull-right funcToDisable" role="group" >
						&nbsp;&nbsp; 
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="AfinGls"  ></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EfinGls" disabled="true"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VfinGls" ></button> -->
						</div>
						<div class=""> 
						<img src="images/menuicons/goals.png" class="img-rounded" width="40" height="40" />
						<span class="panelHeaderTitle"> Financial Goals/ Concerns</span>
						</div>
						</div>
						</div> 
						<div class="table-responsive">
					<div class="col-md-12" >
					<table id="finGoalsTable" class="dataTable table-bordered table-striped display hover" style="width:100%" >
   						<thead>
							<tr> 
								<th>#</th>  
								<th>
								<div  class="checkbox checkbox-primary text-center">
									<input type="checkbox" id="Selfingoals" name="Selfingoals" onclick="SelAllSelfingoals(this)">
									<label for="Selfingoals">&nbsp;</label>
								</div>
								</th>
								<th><div style="width:300px">Type of Financial Goals<span class="mandFldastrks">*</span></div></th> 
								<th><div style="width:300px">Financial Goals/Concerns<span class="mandFldastrks">*</span></div></th> 
								<th><div style="width:80px">Priority</div></th>
<!-- 								<th>Priority</th>   -->
							</tr> 
						</thead>
						<tbody></tbody>
					</table>
					</div>
					<div class="col-md-1" >&nbsp;						</div>
					</div>
					
					
					
				 <div class="clearspace40"></div> 
      				 <!--  Wealth Accumulation Goals   --> 
      				 
      				 <div class="table-responsive">
      				 <div class="col-md-12" > 
					<div class="btn-group pull-right funcToDisable" role="group"> 
					<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="WAcDRow" disabled="true"></button>
				</div>
					<div class="btn-group pull-right funcToDisable" role="group" >
						&nbsp;&nbsp; 
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="WAcARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="WAcERow" disabled="true"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="WAcVRow"></button> -->
				  		</div>
						<div class=""> 
						<img src="images/menuicons/wealthgoals.png" class="img-rounded" width="40" height="40" />
						<span class="panelHeaderTitle"> Wealth Accumulation Goals</span>
						</div>
						</div>
					</div>   
					<div class="col-md-12" >
					
			<table id="wealthAccmltTable" class="dataTable table-bordered table-striped display hover"  style="width:100%;"  >
						<thead valign="center">
							<tr> <!--changes done 19/06/2019 -->
								<th>#</th>   
									<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelweathAccgoals" name="SelweathAccgoals" onclick="SelAllweathAccgoals(this)"><label for="SelweathAccgoals">&nbsp;</label></div></th>
								<th><div style="width:420px">Purpose<span class="mandFldastrks">*</span></div></th> 
								<th><div style="width:50px;">When<br/><small>(No.of Years)</small><span class="mandFldastrks">*</span></div></th> 
								<th><div style="width:60px;">Amount<br/>Needed<small>($)</small><span class="mandFldastrks">*</span></div></th>  
								<th>Priority</th>  
								<th>Risk Level</th>  
							</tr> 
						</thead>
						<tbody></tbody>
					</table>
					</div>
					<div class="col-md-1" >&nbsp;						</div>  
				</div> 
      	</div>   

</div> 
 
 
  <!-- Financial Goals/Concern -  Modal  -->
<div class="modal fade" id="finGoals_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="finGoalsCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
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
      
  <div class="col-md-12"> 
		<div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label mandFldastrks pull-right text-right" for="selDlgFinGoalType">
			  Types Of Financial Goals*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm">
				       
				<select class="form-control fld-resp-md" id="selDlgFinGoalType" name="selDlgFinGoalType">
				 						<option value="">--SELECT--</option> 
										   <c:if test="${not empty FINGLS_PROP}">
                                          <c:forEach var="fingls" items="${FINGLS_PROP}">
                                            <option value="${fingls.propValue}">${fingls.propValue}</option>
                                          </c:forEach>
                                        </c:if>              				  		
									</select>
                 <div style="background: rgb(255, 255, 255) none repeat scroll 0% 0%;" class="input-group-addon">
                 <img id="finglspropIcon" src="images/masterPopup.png" width="20px"> </div>
                 </div>
	
	
           
            </div>  
         	 </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6">  
			 <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgFinGoal">
                  Financial Goals/Concerns*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">
           <textarea name="txtFldDlgFinGoal" id="txtFldDlgFinGoal"   
					class="form-control"  rows="5" maxlength="300"  
					onmouseover="fipaTooltip(this);"></textarea>
					  
            </div> 
            </div>
      </div>
      
       
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="selDlgFinGoalPrio">
			Priority</label> 
             </div> 
           <div class="col-md-3 col-sm-3 col-xs-3"> 
           <select id="selDlgFinGoalPrio" name="selDlgFinGoalPrio"  class="form-control">
										<option value="">--SELECT--</option>
										<option value="LOW">Low</option>
										<option value="MED">Medium</option>
										<option value="HIGH">High</option>
										</select>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">		 
					  <input type="hidden" name="txtFldDlgFnaGoalId" id="txtFldDlgFnaGoalId"/>
			          <input type="hidden" name="txtFldDlgFGCrtdBy" id="txtFldDlgFGCrtdBy"/>
					  <input type="hidden" name="txtFldDlgFGCrtdDate" id="txtFldDlgFGCrtdDate"/>
					  <input type="hidden" name="txtFldDlgFGMode" id="txtFldDlgFGMode"/>
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
					    <!-- <button type="button" id="finGoalsCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 		</button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div>

		  
 <!-- Modal  -->
<div class="modal" id="fnaMasterProperty" style="display: none;"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>  
      </div>
      <div class="modal-body scrollModelBody60"> 
       
     <fieldset class="fieldsetClsborder"> 
     <div class="alert-box failure" id="masterdeletealert"><button type="button" class="close" data-dismiss="alert"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>Select Any Row to Delete</div>
      <div class="col-md-5">
     	<div class="form-group">
	<div class="row">
	<div class="col-md-3 col-sm-3 col-xs-3"> 
         <label class="control-label mandFldastrks pull-right text-right" for="finglsnewval"> 
		  New Value*</label>  
             </div> 
           <div class="col-md-8 col-sm-8 col-xs-8">
           	<input id="finglsnewval" name="finglsnewval"  
					class="form-control" type="text" 
					maxlength="150"   />
								 
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row">
	<div class="col-md-3 col-sm-3 col-xs-3"> 
         <label class="control-label pull-right text-right" for="finglsRemarks"> 
		  remarks</label>  
             </div> 
         <div class="col-md-8 col-sm-8 col-xs-8">
           	<textarea  name="finglsRemarks" id="finglsRemarks"  class="form-control" rows="4"  maxlength="300" ></textarea>
								 
            </div> 
            </div>
      </div>
      
      <div class="form-group" style="display:none">
	<div class="row">
	<div class="col-md-3 col-sm-3 col-xs-3"> 
         <label class="control-label mandFldastrks pull-right text-right" for="finglsstatus"> 
		   Status*</label>  
             </div> 
           <div class="col-md-8 col-sm-8 col-xs-8">
           	<input id="finglsstatus" name="finglsstatus"  class="form-control" type="text" maxlength="20" />
								 
            </div> 
            </div>
      </div> 
      <div class="form-group" >
          <input type="hidden" class="form-control" id="fid" name="fid" class="control-label pull-left text-left" >
          <input type="hidden" class="form-control" id="finglscrtdby" name="finglscrtdby" class="control-label pull-left text-left" >
          <input type="hidden" class="form-control" id="finglscrtddate" name="finglscrtddate" class="control-label pull-left text-left" >
     </div> 
	</div>
	<div class="col-md-1"> 
	<a class="btn btn-default finglsaddicon" id="propAddbtn"></a>
	<a class="btn btn-default finglsdelicon" id="propdelbtn"></a> 
	</div>
	
     <div class="col-md-4">  
		 				<table id="finGoalsMasterTable" class="dataTable table-bordered table-striped display hover"  style="width: 100%;clear: both;word-wrap:break-word;white-space: nowrap !important;">
   	
						<thead>
							<tr> 
								<th>Types Of Financial Goals</th> 
							</tr> 
						</thead>
						<tbody></tbody>
					</table>  
	</div> 
	</fieldset>
<!--         <div class="clearspace20"></div> -->
      </div>
      <div class="modal-footer">   
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
     
    </div>
  </div>
</div>

  
   
  <!-- Wealth Accumulation Goals-  Modal  --> 
   
   
   <div class="modal fade" id="svinvst_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
            <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="wealthAccCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
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
    
  <div class="col-md-12"> 
		<div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgSAPurpose">
			   Purpose*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <textarea name="txtFldDlgSAPurpose" id="txtFldDlgSAPurpose"   
					class="form-control"  rows="5" maxlength="300"  
					onmouseover="fipaTooltip(this);"></textarea> 
					   
            </div> 
            </div>
      </div>
      
      
      
      
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgSAWhen">
			   When(No.of Years)*</label> 
             </div> 
           <div class="col-md-4 col-sm-4 col-xs-4"> 
           <div class="input-group input-group-sm fld-resp-sm">
              <input type="text" id="txtFldDlgSAWhen" name="txtFldDlgSAWhen"  
              class="form-control numbers applyEvntYrs"  >  
               <div class="input-group-addon" > 
				 <span id="symbolYrs"></span> </div>
				 </div>
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
            <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgSAmount"> 
			 Amount</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-md">
			 <div class="input-group-addon" > 
				 <span id="symbolUsd"></span> </div>
             <input type='text'  id="txtFldDlgSAmount" name="txtFldDlgSAmount"  
              class="form-control numbers applyEvntUsd"  /> 
             </div> 
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="selDlgSAPriority">
			Priority</label> 
             </div> 
          <div class="col-md-3 col-sm-3 col-xs-3"> 
           <select id="selDlgSAPriority" name="selDlgSAPriority"  class="form-control " >
										<option value="">--SELECT--</option>
										<option value="Low">Low</option>
										<option value="Medium">Medium</option>
										<option value="High">High</option>
										</select>
            </div> 
            </div>
      </div>
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="selDlgSARiskLvl">
			Risk Level</label> 
             </div> 
           <div class="col-md-3 col-sm-3 col-xs-3"> 
           <select id="selDlgSARiskLvl" name="selDlgSARiskLvl"  class="form-control" >
										<option value="">--SELECT--</option>
										<option value="Low">Low</option>
										<option value="Medium">Medium</option>
										<option value="High">High</option>
										</select>
            </div> 
            </div>
      </div>
      
      <div class="form-group">  
					<input type="hidden" name="txtFldDlgSAInvId" id="txtFldDlgSAInvId"/> 
					<input type="hidden" name="txtFldDlgSACrtdDate" id="txtFldDlgSACrtdDate"/>
					<input type="hidden" name="txtFldDlgSACrtdBy" id="txtFldDlgSACrtdBy"/>
					<input type="hidden" name="txtFldDlgSAMode" id="txtFldDlgSAMode"/>
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
					    <!-- <button type="button" id="wealthAccCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				       </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div>
 
