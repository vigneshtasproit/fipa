<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>




<form name="frmCpfContribution" id="frmCpfContribution" method="post">  

       <div class="col-md-12">  
        
 <div class="row"> 
 <div class="clearspace20"></div> 
  <div class="col-md-2"><span class="grpBoxTextTitle"> Search Criteria </span> 
  </div>
  <div class="col-md-2">
   <label class="fipaFldLblText" for="srchcpfconeffFrom">Effective From
					<small>(DD/MM/YYYY)</small> </label> 
    <div class="input-group input-group-sm fld-resp-mm date"  id="cpfconeffFrompicker"> 
                  <input id="srchcpfconeffFrom" name="srchcpfconeffFrom" class="form-control" 
							 onmouseover="fipaTooltip(this);" 
							 type="text" maxlength="10" /> 
                  <div class="input-group-addon"   > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                </div> 
  </div>
  <div class="col-md-2">
  <label class="fipaFldLblText" for="srchcpfconageGrp">Employee Age Group</label> 
    <select class="form-control fld-resp-mm" id="srchcpfconageGrp"  name="srchcpfconageGrp" >
			<option value="">--SELECT--</option>
							<c:if test="${not empty CPF_EMPAGEGRP_LIST}">
							  <c:forEach var="cpfagegrp" items="${CPF_EMPAGEGRP_LIST}">
							    <option value="${cpfagegrp}">${cpfagegrp}</option>
							  </c:forEach>
						</c:if>
			</select> 
  </div>
  <div class="col-md-2">
  <label class="fipaFldLblText" for="srchcpfconwageGrp">Employee Wage Group</label>
    <select class="form-control fld-resp-md" id="srchcpfconwageGrp"  name="srchcpfconwageGrp" >
			<option value="">--SELECT--</option>
				<c:if test="${not empty CPF_EMPWAGEGRP_LIST}">
				  <c:forEach var="cpfwagegrp" items="${CPF_EMPWAGEGRP_LIST}">
				    <option value="${cpfwagegrp}">${cpfwagegrp}</option>
				  </c:forEach>
			</c:if>
	</select> 
  </div>
  <div class="col-md-4">
  <div class="row"><div class="col-md-3 hidden">
					<div class="btnStyle"> 
						    <button type="button"  id="btnCpfConSave" class="btn BtnFIPASRCH StylishSAVE">
						      <span class="txt">Save</span>
						      <span class="round"><i class="fa fa-floppy-o"></i></span>
						    </button> 
					 </div> </div>
					 <div class="col-md-3">  
					<div class="btnStyle"> 
						    <button type="button"  id="btnCpfConSrch" class="btn BtnFIPASRCH StylishSRCH">
						      <span class="txt">Search</span>
						      <span class="round"><i class="fa fa-search"></i></span>
						    </button> 
					 </div>  
					 </div>
					</div> 
  </div>
</div>
</div> 

		
			<div class="col-md-12">	
			
			<div class="clearspace20"></div> 
			<div class="middle-line"></div>
			
			<div class="clearspace20"></div> 
				<div class="table-responsive">
				
			<div class="btn-group pull-right funcToDisable hidden" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DmsCpfCon" ></button>
				 </div>
				<div class="btn-group pull-right funcToDisable hidden" role="group" style="margin-right: 10px;">
					<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AmsCpfCon"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EmsCpfCon"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VmsCpfCon"></button> -->
						 </div>
				<div class="">
					<img src="images/menuicons/wealthgoals.png" class="img-rounded" width="30"
						height="30" style="display: inline-block;"> 
						<span class="grpBoxTextTitle">CPF Contribution Rates</span> 
				</div>
			</div> 
			
				
					 
			<div class="table-responsive fieldsetCls">
<!-- 			stripe row-border order-column nowrap hover -->
				<table id="mastContRateTbl" class="dataTable table-bordered table-striped display hover" style="width: 100%;">
					<thead> 
						<tr>
							<th rowspan="2">#</th>
							<th rowspan="2">Select</th>
							<th rowspan="2"><div style="width:100px">Effective From<small>(DD/MM/YYYY)</small></div></th> 
							<th rowspan="2"><div style="width:100px">Effective To<small>(DD/MM/YYYY)</small></div></th>
							<th rowspan="2"><div style="width:130px">Employee Age Group</div></th>
							<th rowspan="2"><div style="width:130px">Employee's Total Wage Group</div></th>
							<th colspan="6" style="text-align:center">Total CPF contributions (employer's and Employee's share)</th>
							<th colspan="6" style="text-align:center">Employee's share of CPF contributions</th>	
							<th rowspan="2"><div style="width:200px">Remarks</div></th>					
						</tr>
						<tr>
						<th><div style="width:100px">Base Value<small>(%)</small></div></th>
						<th><div style="width:100px">Base On</div></th>
						<th><div style="width:100px">Bonus value<small>(%)</small></div></th>
						<th><div style="width:100px">Bonus On</div></th>
						<th><div style="width:100px">Bonus Less<small>($)</small></div></th>
						<th><div style="width:100px">Max Limit<small>($)</small></div></th>
						
						<th><div style="width:100px">Base Value<small>(%)</small></div></th>
						<th><div style="width:100px">Base On</div></th>
						<th><div style="width:100px">Bonus value<small>(%)</small></div></th>
						<th><div style="width:100px">Bonus On</div></th>
						<th><div style="width:100px">Bonus Less<small>($)</small></div></th>
						<th><div style="width:100px">Max Limit<small>($)</small></div></th>
						
							
						</tr>
						</thead> 
						<tbody></tbody>
					</table>
					</div>
					</div>
					 
</form>

 
 
 
  <!-- Modal  -->
<div class="modal fade" id="MasterCpfContr_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60">
    <!-- 	dlgBdyWidth450 -->
		<div class="col-md-6"> 
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="fipaFldLblText pull-right"	for="dlgmscpfconeffFrom">
					<font color="maroon">Effective From
					<small>(DD/MM/YYYY)</small> </font>
					</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-mm date"  id="dlgMsCpfContEffFrmpickr"> 
                  <input id="dlgmscpfconeffFrom" name="dlgmscpfconeffFrom" class="form-control" 
							 onmouseover="fipaTooltip(this);" 
							 type="text" maxlength="10" tabindex=1 /> 
                  <div class="input-group-addon"   > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                </div> 
                 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="fipaFldLblText pull-right"	for="dlgmscpfconeffTo">
					Effective To<small>(DD/MM/YYYY)</small>
					</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-mm date"  id="dlgMsCpfContEffTopickr"> 
                  <input id="dlgmscpfconeffTo" name="dlgmscpfconeffTo" class="form-control" 
							 onmouseover="fipaTooltip(this);" 
							 type="text" maxlength="10"  tabindex=2/> 
                  <div class="input-group-addon"   > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                </div> 
                 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
      <fieldset  id="cpfcontribution"><legend class="customFIPAStyle">Total CPF contributions (employer's and Employee's share)</legend>
      
      <div class="col-md-12">
      
<div class="form-group"> 
		<div class="row">
			<div class="formulateText hidden" id="totcpfcont" ><span class="customFIPAStyle">Formula:-</span>
			<!--1--><span id="tbaseval" class="hidden">[Base value <span></span>% 
			<!--2--> <span id="tbaseon" class="hidden"> on (<span></span>)</span><!--2end  --> ]</span><!--1end  -->
			<!--3--><span id="tbonval" class="hidden">[Bonus value <span></span>%
			<!--4--> <span id="tbonon" class="hidden"> on (<span></span> )
			<!--5--><span id="tbonless" class="hidden">-<span></span> </span><!--5end-->  </span><!--4end  --> ]</span><!--3end  -->
			<!--6--><div id="tmaxlen" style="word-break: break-all;" class="hidden">*Max Limit of $<span></span></div><!--6end  -->
			</div>
			
		</div>
	</div>
       <div class="form-group"> 
      <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfcontotBaseValue">
					Base val.
					</label> 
				</div>
				<div class="col-md-4"> 
			<div class="input-group input-group-sm"> 
               <input name="dlgmscpfcontotBaseValue" id="dlgmscpfcontotBaseValue"  tabindex=5 onmouseover="fipaTooltip(this);" 
               class="form-control fld-resp-sm applyEvntpCent3"  type="text">
				<div class="input-group-addon">
			       <span class="glyphicon addPercentSign" id="symbolprCent"></span> 
			    </div>
            </div>
				</div>
				<div class="col-md-1"> 
            <label class="fipaFldLblText pull-right text-right" for="dlgmscpfcontotBaseOn">
					on
			</label> 	
				</div>
				<div class="col-md-4"> 
			<select class="form-control" id="dlgmscpfcontotBaseOn" name="dlgmscpfcontotBaseOn"  tabindex=6 onmouseover="fipaTooltip(this);"> 
				<option value="">--SELECT--</option>
				<option value="AW">Addition Wages</option>
				<option value="OW">Other Wages</option>
				<option value="TW">Total Wages</option>
			</select>
             </div> 
           
            </div> 
            </div>
             
            <!-- 3part  -->
             <div class="form-group">
            <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfcontotBonusValue">
					Bonus val
					</label> 
				</div>
				<div class="col-md-4"> 
			<div class="input-group input-group-sm"> 
               <input name="dlgmscpfcontotBonusValue" id="dlgmscpfcontotBonusValue"  
               onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm applyEvntpCent3" 
                type="text"  tabindex=7>
				<div class="input-group-addon">
			       <span class="glyphicon addPercentSign" id="symbolprCent"></span> 
			    </div>
            </div>
				</div>
				<div class="col-md-1"> 
            <label class="fipaFldLblText pull-right text-right" for="dlgmscpfcontotBonusOn">
					on
			</label> 	
				</div>
				<div class="col-md-4"> 
			<select class="form-control" id="dlgmscpfcontotBonusOn" name="dlgmscpfcontotBonusOn" tabindex=8  onmouseover="fipaTooltip(this);"> 
				<option value="">--SELECT--</option>
				<option value="AW">Addition Wages</option>
				<option value="OW">Other Wages</option>
				<option value="TW">Total Wages</option>
			</select>
             </div> 
           
            </div> 
            </div>
            
            
             <!-- 4part --> 
              <div class="form-group">
            <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfcontotBonusLess" >
					Bonus Less
					</label> 
				</div>
				<div class="col-md-4"> 
				<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="dlgmscpfcontotBonusLess" tabindex=9 onmouseover="fipaTooltip(this);"
								id="dlgmscpfcontotBonusLess" class="form-control numbers fld-resp-sm applyEvntUsd126" />
						</div>
				</div> 
            </div> 
            </div>
            
            
            <!-- 5part --> 
             <div class="form-group">
            <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfcontotMaxLimit">
					Max Limit
					</label> 
				</div>
				<div class="col-md-4"> 
			<input type='text' class="form-control" onmouseover="fipaTooltip(this);"  tabindex=10 name="dlgmscpfcontotMaxLimit"   id="dlgmscpfcontotMaxLimit" maxlength="150"> 
				</div> 
            </div>
            </div> 
      </div>
       
      
      </fieldset>
      </div>
       
      <div class="form-group">
            <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfconRmrks">
					Remarks</label> 
				</div>
				<div class="col-md-9"> 
			<textarea name="dlgmscpfconRmrks" id="dlgmscpfconRmrks"  tabindex=11 onmouseover="fipaTooltip(this);"  class="form-control"  rows="5" maxlength="300"  
					onmouseover="fipaTooltip(this);"></textarea> 
				</div> 
            </div>
            </div> 
      
       
      </div>
      
      <!-- Second div -->
      <div class="col-md-6"> 
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="fipaFldLblText pull-right"	for="dlgmscpfconageGrp">
					<font color="maroon">Employee Age Group</font>
					</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select class="form-control  fld-resp-mm" id="dlgmscpfconageGrp"  name="dlgmscpfconageGrp"  tabindex=3 onmouseover="fipaTooltip(this);" >
			<option value="">--SELECT--</option>
							<c:if test="${not empty CPF_EMPAGEGRP_LIST}">
							  <c:forEach var="cpfagegrp" items="${CPF_EMPAGEGRP_LIST}">
							    <option value="${cpfagegrp}">${cpfagegrp}</option>
							  </c:forEach>
						</c:if>
			</select> 
                 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="fipaFldLblText pull-right"	for="dlgmscpfconwageGrp">
					<font color="maroon">Employee Wage Group</font>
					</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select class="form-control  fld-resp-md" id="dlgmscpfconwageGrp"  name="dlgmscpfconwageGrp"  tabindex=4 onmouseover="fipaTooltip(this);" >
			<option value="">--SELECT--</option>
				<c:if test="${not empty CPF_EMPWAGEGRP_LIST}">
				  <c:forEach var="cpfwagegrp" items="${CPF_EMPWAGEGRP_LIST}">
				    <option value="${cpfwagegrp}">${cpfwagegrp}</option>
				  </c:forEach>
			</c:if>
			</select> 
                 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
      <fieldset id="employeeshare"><legend class="customFIPAStyle">Employee's share of CPF contributions</legend>
      
      <div class="col-md-12">
      
<div class="form-group"> 
		<div class="row"> 
			<div class="formulateText hidden" id="totempshare" ><span class="customFIPAStyle">Formula:-</span>
			<!--1  --><span id="ebaseval" class="hidden">[Base value <span></span>% 
			<!--2  --> <span id="ebaseon" class="hidden"> on (<span></span>)</span><!--2end  --> ]</span><!--1end  -->
			<!--3  --><span id="ebonval" class="hidden">[Bonus value <span></span>%
			<!--4  --> <span id="ebonon" class="hidden"> on (<span></span> )
			<!--  5  --><span id="ebonless" class="hidden">-<span></span> </span><!--   5end  --> 
   </span><!--4end  --> ]</span><!--3end  -->
			<!--6  --><div id="emaxlen" style="word-break: break-all;" class="hidden">*Max Limit of $<span ></span></div><!--6end  -->
			</div>
		</div>
	</div>
       <div class="form-group"> 
      <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfconempBaseVal">
					Base val.
					</label> 
				</div>
				<div class="col-md-4"> 
			<div class="input-group input-group-sm"> 
               <input name="dlgmscpfconempBaseVal" id="dlgmscpfconempBaseVal" tabindex=12 onmouseover="fipaTooltip(this);" 
               class="form-control fld-resp-sm applyEvntpCent3"  type="text">
				<div class="input-group-addon">
			       <span class="glyphicon addPercentSign" id="symbolprCent"></span> 
			    </div>
            </div>
				</div>
				<div class="col-md-1"> 
            <label class="fipaFldLblText pull-right text-right" for="dlgmscpfconempBaseOn">
					on
			</label> 	
				</div>
				<div class="col-md-4"> 
			<select class="form-control" id="dlgmscpfconempBaseOn" name="dlgmscpfconempBaseOn" tabindex=13 onmouseover="fipaTooltip(this);">
				<option value="">--SELECT--</option>
				<option value="AW">Addition Wages</option>
				<option value="OW">Other Wages</option>
				<option value="TW">Total Wages</option>
			</select>
             </div> 
           
            </div> 
            </div>
             
            <!-- 3part  -->
             <div class="form-group">
            <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfconempBonusValue">
					Bonus val
					</label> 
				</div>
				<div class="col-md-4"> 
			<div class="input-group input-group-sm"> 
               <input name="dlgmscpfconempBonusValue" id="dlgmscpfconempBonusValue"
                onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm applyEvntpCent3" tabindex=14 type="text">
				<div class="input-group-addon">
			       <span class="glyphicon addPercentSign" id="symbolprCent"></span> 
			    </div>
            </div>
				</div>
				<div class="col-md-1"> 
            <label class="fipaFldLblText pull-right text-right" for="dlgmscpfconempBonusOn">
					on
			</label> 	
				</div>
				<div class="col-md-4"> 
			<select class="form-control" id="dlgmscpfconempBonusOn" name="dlgmscpfconempBonusOn" tabindex=15 onmouseover="fipaTooltip(this);"> 
				<option value="">--SELECT--</option>
				<option value="AW">Addition Wages</option>
				<option value="OW">Other Wages</option>
				<option value="TW">Total Wages</option>
			</select>
             </div> 
           
            </div> 
            </div>
            
            
             <!-- 4part --> 
              <div class="form-group">
            <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfconempBonusLess">
					Bonus Less
					</label> 
				</div>
				<div class="col-md-4"> 
				<div class="input-group input-group-sm">
							<div class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
							</div>
							<input type="text" name="dlgmscpfconempBonusLess" onmouseover="fipaTooltip(this);" tabindex=16
								id="dlgmscpfconempBonusLess" class="form-control numbers fld-resp-sm applyEvntUsd126" />
						</div>
				</div> 
            </div> 
            </div>
            
            
            <!-- 5part --> 
             <div class="form-group">
            <div class="row">
	<div class="col-md-3"> 
             <label class="fipaFldLblText pull-right text-right" for="dlgmscpfconempMaxLimit">
					Max Limit
					</label> 
				</div>
				<div class="col-md-4"> 
			<input type='text' class="form-control" name="dlgmscpfconempMaxLimit" id="dlgmscpfconempMaxLimit" tabindex=17  onmouseover="fipaTooltip(this);"  maxlength="150" > 
				</div> 
            </div>
            </div> 
      </div>
      
      
       
      
      
      </fieldset>
      </div>
     
            
            <div class="form-group">
	            <input type="hidden" id="dlgmscpfconcontrId" name="dlgmscpfconcontrId">
	            <input type="hidden" id="dlgmscpfconcrtdBy" name="dlgmscpfconcrtdBy">
	            <input type="hidden" id="dlgmscpfconcrtdDate" name="dlgmscpfconcrtdDate">
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
   
 <script>
	jQuery(document).ready(function() {
		fipaInitPage();
	});
</script>
<script src="plugins/fipa/master/cpfcontrbdets.js"></script>
