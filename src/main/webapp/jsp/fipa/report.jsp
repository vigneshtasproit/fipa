<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="accordion" class="panel-group">
	<div id="clntreportdiv" class="accord-content">
		<!-- 		<span class="panelHeaderTitle"> Analysis Report</span> <br> -->
		<div class="panel-body" style="margin-left: 35px;">
		
		<div class="pagecontentClone"> 
		<div class="row">
						<div class="col-md-9 bg-warning"
							style="box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19);left:20px">
							<div class="checkbox checkbox-primary bold">
								To view Single or multiple reports, click the respective icon(s) and Click Generate Report Button.<br/>
								
								To Generate all reports at one go,
								 <input	id="chkAllReport" name="chkAllReport" type="checkbox"value="Select All" onclick="reportCheckEvent(this,'rpt')">
								<label for="chkAllReport">Select All </label> here and Click Generate Report Button.
								<small>Note: RP-CF Analysis Report can be generated individually</small>
							</div>
						</div>
						<div class="col-md-3">

<!-- 							<button type="button" class="btn btn-primary pull-right" -->
<!-- 								onclick="GenSelReport()" id="btnReport"> -->
<!-- 								<span class="glyphicon glyphicon-export"></span> Generate Report -->
<!-- 							</button> -->
							
							
							<div class="btnStyle"> 
					    <button type="button" id="btnReport" class="btn btn BtnFIPACAN StylishCAN pull-right" onclick="GenSelReport()" >
					      <span class="txt">Generate Report</span>
					      <span class="round"><i class="fa fa-share-square-o"></i></span>
					    </button> 
			    	</div>
			    	
			    	
			    	

						</div>
					</div>



			<c:if test="${not empty ALL_ANALYSIS_TYPES}">
			<div class="row">
				<div class="col-md-12" id="analysisTypesdiv">
					<div class="clearspace20"></div>
					
					<div class="row">
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport0" name="chkrpt" type="checkbox" value="CFA">
								<label for="chkreport0" onclick="reportCheckEvent(this,'All')">
									<img src="images/menuicons/Picture42.png" class="img-thumbnail"  target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">Cash Flow Analysis</div>
						</div>
						
						<!-- <div class="col-sm-1">&nbsp;</div> -->
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport6" name="chkrpt" type="checkbox" value="CPF">
								<label for="chkreport6" onclick="reportCheckEvent(this,'All')">
									<img src="images/menuicons/Picture47.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">CPF Projections Analysis</div>
						</div>

						<!-- <div class="col-sm-1">&nbsp;</div> -->
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport2" name="chkrpt" type="checkbox" value="NWA"
									onclick="reportCheckEvent(this,'All')"> <label
									for="chkreport2"> <img
									src="images/menuicons/Picture43.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">Net Worth Analysis</div>
						</div>


						<!-- <div class="col-sm-1">&nbsp;</div> -->
						
						
						
						<!-- <div class="col-md-2 col-md-2 col-md-2 box-line">
						<div class="btnStyle text-center"> 
						    <button type="button" id="btnRPCFAnalysisRep" class="btn BtnFIPASRCH StylishSRCH text-center"  style="top:0px !important">
						      <span class="txt">RP CF Analysis</span>
						      <span class="round"><i class="fa fa-bar-chart"></i></span>
						    </button>
						    <img src="images/menuicons/Picture41.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
						   <label>&nbsp;</label>
						    <div class="caption"><small>Note: RP-CF Analysis Report Can generate individually</small></div>  
			    		</div>
			    		</div> -->
			    		
			    		
			    		<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport4" name="chkrpt" type="checkbox"
									value="BANK" onclick="reportCheckEvent(this,'All')"> <label
									for="chkreport4"> <img
									src="images/menuicons/repfinliab.png" class="img-thumbnail"  target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">Cash At Banks</div>
						</div>
						
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport5" name="chkrpt" type="checkbox" value="CEP"
									onclick="reportCheckEvent(this,'All')"> <label
									for="chkreport5"> <img
									src="images/menuicons/repchild.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">Child Education</div>
						</div>
			    		
			    	
					</div>
					
					<div class="clearspace20"></div>

					<div class="row">



						


						<!-- <div class="col-sm-1">&nbsp;</div> -->
						


						<!-- <div class="col-sm-1">&nbsp;</div> -->
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport7" name="chkrpt" type="checkbox" value="INV"
									onclick="reportCheckEvent(this,'All')"> <label
									for="chkreport7"> <img
									src="images/menuicons/Picture45.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">Investments Details</div>
						</div>

						<!-- <div class="col-sm-1">&nbsp;</div> -->
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport8" name="chkrpt" type="checkbox"
									value="LIFE" onclick="reportCheckEvent(this,'All')"> <label
									for="chkreport8"> <img
									src="images/menuicons/Picture34.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">Insurance Policy</div>
						</div>
						
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport9" name="chkrpt" type="checkbox"
									value="SNASELF" onclick="reportCheckEvent(this,'All')">
								<label for="chkreport9"> <img
									src="images/menuicons/Picture44.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">SNA - Self </div>
						</div>
						
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport10" name="chkrpt" type="checkbox"
									value="SNASPOUSE" onclick="reportCheckEvent(this,'All')">
								<label for="chkreport10"> <img
									src="images/menuicons/Picture48.png" class="img-thumbnail"  target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">SNA - Spouse</div>
						</div>
						
						
						<div class="col-md-2 col-md-2 col-md-2 box-line">
							<div class="checkbox checkbox-primary">
								<input id="chkreport11" name="chkrpt" type="checkbox"
									value="SRS" onclick="reportCheckEvent(this,'All')"> <label
									for="chkreport11"> <img
									src="images/menuicons/Picture39.png" class="img-thumbnail" target="_new" style="margin-top: -6px;">
								</label>
							</div>
							<div class="caption">SRS</div>
						</div>


					</div>

					
				</div>
				
				</div>
			</c:if>
		</div>


					
<div class="pagecontentClone"> 
<div class="row">

		
			<div class="col-md-2 box-line">
							<div class="pull-left">
								
								<!-- <input id="chkreport3" name="chkrpt" type="checkbox" value="RET" onclick="reportCheckEvent(this,'All')"> -->
								
								 <label
									for="chkreport3"> <img
									src="images/menuicons/Picture41.png" class="img-thumbnail" target="_new" style="margin-top: -6px;  width: 80px;    padding: 11px;    margin-left: 50px;">
								</label>
							</div>
							<div class="caption"><button type="button" id="btnRPCFAnalysisRep" class="btn BtnFIPASRCH StylishSRCH text-center"  style="top:-5px !important">
						      <span class="txt">RP CF Analysis</span>
						      <span class="round"><i class="fa fa-bar-chart"></i></span>
						    </button></div>
						</div> 
						
						
		</div>

</div>



		</div>
	</div>
	
		
		
		
		
		
		
	
	

</div>


