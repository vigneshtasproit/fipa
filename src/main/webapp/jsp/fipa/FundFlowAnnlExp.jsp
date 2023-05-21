<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  
<div id="accordion" class="panel-group">
	<div id="dependantsection" class="accord-content"
		style="">
		
<!-- 		<span class="panelHeaderTitle">Other -->
<!-- 			than family members </span> -->
			
		<div class="panel-body">
			<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="DeptDRow" disabled="true"></button>
  				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="DeptARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="DeptERow" disabled="true"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="DeptDRow"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="DeptVRow"></button> -->
  				 </div>
				<div class="">
					<img src="images/menuicons/dep.png" class="img-rounded" style="height:45px;width:55px"> 
					<img src="images/menuicons/dept.png" class="img-rounded" style="height:45px;width:55px" />
					<span class="panelHeaderTitle">Other than immediate Family Members</span>
				</div>
	<div class="col-md-12" >
	<div class="table-responsive"  style="min-height:360px">
	<!-- <div class="col-md-12" > -->
	
	<table id="deptParticularsTable"
					class="dataTable table-bordered table-striped display hover" style="width: 100%">
					<thead valign="middle">
						<tr>
							<th rowspan="2">#</th> 
							<!--changes done 19/06/2019 -->
<!-- 							<th rowspan="2">Select</th> -->
							<th rowspan="2"><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SeldeptParticulars" name="SeldeptParticulars" onclick="SelAlldeptParticulars(this)"><label for="SeldeptParticulars">&nbsp;</label></div></th>
							<th rowspan="2"><div style="width: 130px;">Dependent Name<span class="mandFldastrks">*</span></div></th>
							<th rowspan="2"><div style="width: 130px;">Relationship<span class="mandFldastrks">*</span></div></th>
							<th rowspan="2"><div style="width: 85px;">DOB<br><small>(DD/MM/YYYY)</small><span class="mandFldastrks">*</span></div></th>
							<th rowspan="2"><div style="width: 35px;">Age<br/><small>(yrs)</small></div></th>
							<th rowspan="2"><div style="width: 65px;">Gender</div></th>
							<th rowspan="2"><div style="width: 50px;">
									Years to Support<br><small>(yrs)</small>
								</div></th> 
							<th colspan="3" style="text-align:center;">
								<div style="width:220px;text-align:center">
							Monthly Amount<small>($)</small></div></th>
<!-- 							<th rowspan="2"><div style="width: 150px;">Monthly Contribution</div></th> -->
						</tr>
						<tr>
							<th><div style="width:70px;">By Self <br/><small>($)</small></div></th>
							<th><div style="width:70px;">By Spouse<br/><small>($)</small></div></th>
							<th><div style="width:70px;">Total Contribution<br/><small>($)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
					
				</table>
				
				
				<table class="dataTable table-bordered  display" id="deptParticularsTablefooter"  style="width:100%">
						
					<tbody>
						<tr>
							<td>
								<div style="text-align: right;width:300px" class="pull-right">
									Total Monthly Contribution&nbsp;<span class="label label-info">$</span> 
								</div>
							</td> 
							<td><input type="text" id="txtFldDepdTotMASelf"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
							<td><input type="text" id="txtFldDepdTotMASps"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
							<td><input type="text" id="txtFldDepdTotMthContr"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
						</tr>
						
						<tr>
							<td >
								<div style="text-align: right;" class="pull-right">
									Total Annual Contribution&nbsp;<span class="label label-info">$</span> 
								</div>
							</td> 
							<td><input type="text" id="txtFldDepdTotAnnlSelf"
								  readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
							<td><input type="text" id="txtFldDepdTotAnnlSps"
								 readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
							<td>&nbsp;</th>
						</tr>
					</tbody>	
					
				</table>
	
	
	<!-- </div> -->
							</div>
			</div>
			
		</div>
	</div>

</div>


 <!--Depandant Particulars -  Modal  -->
<div class="modal fade" id="depn_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="depenParCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
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
     
		<div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgDepnName"> 
            Dependant Name*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <input id="txtFldDlgDepnName"
					name="txtFldDlgDepnName" class="form-control"
					onmouseover="fipaTooltip(this);" type="text" maxlength="60"
					autofocus="true"> 
            </div> 
            </div>
      </div>
      
			 
			<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
				<label class="control-label mandFldastrks pull-right text-right" for="selDlgDepnRelationship">
				  Relationship*</label> 
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select class="form-control fld-resp-mm" id="selDlgDepnRelationship"
					name="selDlgDepnRelationship" onmouseover="fipaTooltip(this);">
					<option value="">--SELECT--</option>
					<c:if test="${not empty RELATIONSHIP}">
						<c:forEach var="depnrelation" items="${RELATIONSHIP}">
							<option value="${depnrelation[1]}">${depnrelation[1]}</option>
						</c:forEach>
					</c:if>
				</select>
			</div>
      </div>
			</div>
			 


		     <div class="form-group" >
                 <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgInvDateInvst">
                 Date of Birth
                <small>(DD/MM/YYYY)*</small> 
               </label>
                </div>
                  <div class="col-md-4 col-sm-4 col-xs-4" >
                  <div class="input-group input-group-sm fld-resp-mm date"  id="DateDeptDatePpicker"> 
                  <input id="txtFldDlgDepnDob" name="txtFldDlgDepnDob" class="form-control fld-resp-mm" 
							 onmouseover="fipaTooltip(this);" 
							 type="text" maxlength="10"/> 
                  <div class="input-group-addon"   > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                </div> 
 			 </div>
			</div>
			</div>
			
				<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
				<label class="control-label pull-right text-right" for="txtFldDlgDepnAge"> 
				Age</label> 
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm">
          <input type='text'  onmouseover="fipaTooltip(this);"
					class="form-control numbers disabledCursor applyEvntYrs" id="txtFldDlgDepnAge" name="txtFldDlgDepnAge"
					 readonly="true" />
					<div class="input-group-addon" > 
 						<span id="symbolYrs"></span> </div>
 					</div>
			</div>
      </div>
      </div>
			





				<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="selDlgDepnGender">Gender </label>
					 </div> 
           <div class="col-md-4 col-sm-4 col-xs-4"> 
          <select class="form-control" id="selDlgDepnGender"
					name="selDlgDepnGender" onmouseover="fipaTooltip(this);">
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
			<div class="row" >
			<div class="col-md-6 col-sm-6 col-xs-6 ">
					<label class="control-label pull-right text-right" for="txtFldDlgDepnYrssupport">Years
							to Support </label>
							 </div> 
		           <div class="col-md-4 col-sm-4 col-xs-4"> 
		          <div class="input-group input-group-sm fld-resp-sm" >
							<input type="text"  onmouseover="fipaTooltip(this);" id="txtFldDlgDepnYrssupport" 
							name="txtFldDlgDepnYrssupport"
							class="form-control numbers applyEvntYrs"
							/>
							<div class="input-group-addon" > 
		               <span id="symbolYrs"></span> </div>
		               </div>
		 					</div>
					</div>
		      </div>
		      
			</div>
			<div class="col-md-6">
			
		

<fieldset  id="monthlyamnt"><legend class="customFIPAStyle">&nbsp;Monthly Contribution<span class="label label-info">$</span>&nbsp;</legend> 
<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="txtFldDlgDepnProvSlf"> 
					  By Self </label> 
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
               
            
					<input type="text" onmouseover="fipaTooltip(this);"   name="txtFldDlgDepnProvSlf"
					id="txtFldDlgDepnProvSlf" class="form-control clsfipaClient numbers applyEvntUsd"  />
<!-- onchange="deptMonthlyContb();" -->
               </div>
                
 					</div>
			</div>
      </div>
      

			
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="txtFldDlgDepnProvSps"> 
					  By Spouse</label> 
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input type="text" onmouseover="fipaTooltip(this);"   name="txtFldDlgDepnProvSps"
					id="txtFldDlgDepnProvSps" class="form-control clsfipaSpouse numbers applyEvntUsd"  />
<!-- 					 	onchange="deptMonthlyContb();"  -->
               </div>
 					</div>
			</div>
      </div>
 
 
 <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="txtFldDlgDepnMonthctr">Total
					Contribution</label> 
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
          <div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input type="text" onmouseover="fipaTooltip(this);" name="txtFldDlgDepnMonthctr"
					id="txtFldDlgDepnMonthctr" class="form-control numbers disabledCursor applyEvntUsd" 
					readonly="true" />
					
               </div>
 					</div>
			</div>
      </div>
</fieldset>


			<div class="form-group">
				<input type="hidden" name="txtFldDlgDepnCrtdBy" id="txtFldDlgDepnCrtdBy"/> 
				<input type="hidden" name="txtFldDlgDepnCrtdDate" id="txtFldDlgDepnCrtdDate"/>
				 <input type="hidden" name="txtFldDlgDepnId" id="txtFldDlgDepnId"/>
				 <input type="hidden" name="txtFldDlgDepnMode" id="txtFldDlgDepnMode"/>
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
               			 <!-- <button type="button" id="depenParCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
						 </button> -->
			</div>
		   
      </div>
    </div>
  </div>
</div>
