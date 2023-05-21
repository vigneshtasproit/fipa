 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  
<div id="accordion" class="panel-group">   
<div id="childsection" class="accord-content" style="">  
   <div class="panel-body">    
<div class=""> 
					<div class="btn-group pull-right funcToDisable" role="group"> 
						<button type="button" class="btn btn-default navbar-btn delRow-icon"  id="DChldPt" disabled="true"></button>
						</div>
					<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" > 
						<button type="button" class="btn btn-default navbar-btn addRow-icon"  id="AChldPt"></button>
						<button type="button" class="btn btn-default navbar-btn editRow-icon" id="EChldPt" disabled="true"></button>
<!-- 						<button type="button" class="btn btn-default navbar-btn delRow-icon"  id="DChldPt"></button> -->
<!-- 						<button type="button" class="btn btn-default navbar-btn viewRow-icon" id="VChldPt"></button> -->
						</div>
						<div class="container"> 
						<img src="images/menuicons/child.png" class="img-rounded" width="60" height="60" /> 
						</div>
					</div>  
					<div class="table-responsive">  
	<div class="col-md-12" >
					<table id="childParticularsTable" class="dataTable table-bordered table-striped display hover" style="width:100%" >
							<thead>
								<tr>
									<th>#</th>
									<th>
										<div class="checkbox checkbox-primary text-center">
											<input type="checkbox" id="SelchildParticulars" name="SelchildParticulars" onclick="SelAllSelchildParticulars(this)">
											<label for="SelchildParticulars">&nbsp;</label>
										</div>
									</th>
									<!--changes done 19/06/2019 -->
									<th><div style="width:200px;">Name of Child<span class="mandFldastrks">*</span></div></th>
									<th><div style="width:85px;">DOB<br><small>(DD/MM/YYYY)</small><span class="mandFldastrks">*</span></div></th> 
									<th><div style="width:35px;">Age<br><small>(yrs)</small></div></th>  
									<th><div style="width:75px;">Relationship<span class="mandFldastrks">*</span></div></th>
									<th><div style="width:65px;">Gender</div></th>
									<th><div style="width:45px;">Yrs to Tertiary<br><small>(yrs)</small></div></th>
									<th><div style="width:85px;">Est. Annl.<br/>Cost of Tertiary Edn.<br><small>($)</small></div></th>
									<th><div style="width:45px;">Yrs in Tertiary Education<br><small>(yrs)</small></div></th> 
									<th><div style="width:85px;">Available Edn.<br/>Funds Provided<br><small>($)</small></div></th>
									<th><div style="width:180px;">Remarks</div></th>
					     		</tr>							 
							</thead>
					<tbody>
					</tbody>							 
						</table>
						</div>
					</div>
				 
      
      	</div> 
      	  
</div>
    </div> 
    
 
 <!-- Modal  -->
<div class="modal fade" id="child_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
     <div class="col-md-6">
			<div class="form-group">
				<div class="row required">
					<div class="col-md-6 col-sm-6 col-xs-6 ">
						<label for="selDlgInvOwnership" class="control-label mandFldastrks pull-right text-right">
							 Name of Child<span class="mandFldastrks">*</span> 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<input id="txtFldDlgChldName" name="txtFldDlgChldName"
							class="form-control" type="text" maxlength="75" >
					</div>
				</div>
			</div>
			
			
			<div class="form-group" >
                 <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgChildDob">
                 Date of Birth
                <small>(DD/MM/YYYY)*</small> 
               </label>
                </div>
                  <div class="col-md-4 col-sm-4 col-xs-4" >
                  <div class="input-group input-group-sm fld-resp-mm date"  id="DateChildDatepicker"> 
                  <input id="txtFldDlgChildDob" name="txtFldDlgChildDob" class="form-control fld-resp-mm" 
							 onmouseover="fipaTooltip(this);"   
							 type="text" maxlength="10"  /> 
                  <div class="input-group-addon"   > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                </div> 
 			 </div>
			</div>
			</div>
			
			<div class="form-group">
				<div class="row required">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right" for="txtFldDlgChldAge">
							 Age 
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">
							<input type='text' class="form-control numbers applyEvntYrs"
								id="txtFldDlgChldAge" name="txtFldDlgChldAge" readonly="true"/>
							<div class="input-group-addon">
								<span id="symbolYrs"></span>
							</div>
						</div>
					</div>
				</div>
			</div>


      

			<div class="form-group">
				<div class="row required">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label for="selDlgInvTypesOfInvst"
							class="control-label mandFldastrks pull-right text-right"> 
							 Relationship*
						</label>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-4">
						<select class="form-control" id="txtFldDlgChldRel"
							name="txtFldDlgChldRel" >
							<option value="">--SELECT--</option>
							<option value="Son">Son</option>
							<option value="Daughter">Daughter</option>
						</select>
					</div>
				</div>
			</div>
 
 
		 <div class="form-group">
			<div class="row">
			<div class="col-md-6 col-sm-6 col-xs-6"> 
		            <label class="control-label pull-right text-right" for="txtFldDlgChldGender">Gender
						</label> 
		             </div> 
		           <div class="col-md-4 col-sm-4 col-xs-4"> 
		              <select class="form-control disabledCursor"
							id="txtFldDlgChldGender" name="txtFldDlgChldGender" disabled="true">
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
						<label class="control-label pull-right text-right" for="txtFldDlgChldYrs2ter">
							Years to Tertiary
 <a class="btn btn-default addinfoicon" id="poptxtFldDlgChldYrs2ter" > </a></label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm fld-resp-sm">
							<input id="txtFldDlgChldYrs2ter" name="txtFldDlgChldYrs2ter"
								class="form-control numbers applyEvntYrs" type="text"/>
							<div class="input-group-addon">
								<span id="symbolYrs"></span>
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
							<label class="control-label pull-right text-right" for="txtFldDlgChldPerAnnEduCost">
							 Est. Annual Cost of Tertiary Edn.</label>
						</div>
						<div class="col-md-6 col-sm-6 col-xs-6">
							<div class=" input-group input-group-sm">
								<div class="input-group-addon">
									<span class="glyphicon" id="symbolUsd"></span>
								</div>
								<input type="text" name="txtFldDlgChldPerAnnEduCost"
									id="txtFldDlgChldPerAnnEduCost" class="form-control numbers applyEvntUsd" />
							</div>
						</div>
					</div>
				</div>
				
				<div class="form-group">
					<div class="row">
						<div class="col-md-6 col-sm-6 col-xs-6">
							<label class="control-label pull-right text-right" for="txtFldDlgChldYrsofEdu"> 
							Years in Tertiary Edn.
							</label>
						</div>
						<div class="col-md-6 col-sm-6 col-xs-6">
							<div class="input-group input-group-sm fld-resp-sm">
								<input type="text" name="txtFldDlgChldYrsofEdu"
									id="txtFldDlgChldYrsofEdu" class="form-control numbers applyEvntYrs"
									 />
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
							for="txtFldDlgChldAvailEdnFund"> Available Education Funds Provided </label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="txtFldDlgChldAvailEdnFund"
								id="txtFldDlgChldAvailEdnFund" class="form-control numbers applyEvntUsd" />
						</div>
					</div>
				</div>
			</div>

 
 			<div class="form-group">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<label class="control-label pull-right text-right" for="txtFldDlgChldRemrks">Remarks
						</label>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<textarea name="txtFldDlgChldRemrks" id="txtFldDlgChldRemrks"   
					class="form-control"  rows="5" maxlength="300" ></textarea>
					 
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<input type="hidden" name="txtFldDlgChldCrtdBy"   id="txtFldDlgChldCrtdBy"/>
				<input type="hidden" name="txtFldDlgChldCrtdDate" id="txtFldDlgChldCrtdDate" /> 
				<input type="hidden" name="txtFldDlgFnaChldId"    id="txtFldDlgFnaChldId" />
				<input type="hidden" name="txtFldDlgChildMode"    id="txtFldDlgChildMode" />
			</div>

		</div>	
      </fieldset> 
      </div>
      <div class="modal-footer">  
      <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="ChildParCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div>  -->
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					     <!-- <button type="button" id="ChildParCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
						 </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div>


