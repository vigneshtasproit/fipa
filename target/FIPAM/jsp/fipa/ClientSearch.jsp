<!--  <span class='panelHeaderTitle'>Search Client By</span> -->
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<div class="tabset" style="background: white;">

  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="ProSrchTab" aria-controls="ProfileSrch">
  <!-- <label for="ProSrchTab">Profile Search</label> -->
  <label for="ProSrchTab"><i class="fa fa-list-alt" title="Profile Search"></i>&nbsp;&nbsp;&nbsp;&nbsp;Profile Search</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="ArcProTab" aria-controls="ArchiveProfile">
  <!-- <label for="ArcProTab">Archive</label> -->
  <label for="ArcProTab"><i class="fa fa-archive" title="Archive"></i>&nbsp;&nbsp;&nbsp;&nbsp;Archive</label>
  
  <div class="tab-panels">
   <section id="ProfileSrch" class="tab-panel">
    <div class="panel-group" >   
      <div class="panel-body" > 
      
      	<div class="row">  
      		<div class="col-md-12">
      			<div class="col-md-4" style="width:30%">
      			
			  		<div class="input-container">
						 <label for="txtFldSrchCustName" class="control-label">Name</label>
						<input class="textfilds" id="txtFldSrchCustName" name="txtFldSrchCustName"  style="font-size: 14px;">
					</div>
      			</div>
      			
      			<div class="col-md-4" style="width:30%">
      				
      				<div class="input-container">
						 <label for="txtFldSrchCustNric" id="lblSrchNric" class="control-label">NRIC/ FIN / Passport</label>
						<input class="textfilds" id="txtFldSrchCustNric" name="txtFldSrchCustNric"  style="font-size: 14px;">
					</div>
      			</div>
      			
      			<div class="col-md-3" id="divSrchAdviser">
      				
      				<table>
      				<tr>
      				<td>
      				 <label for="selAdviserSrch"  class="control-label">Adviser: </label> 
      				</td>
      				<td>
      				<div class="input-container">
						 <select class="form-control srchtextflds textfilds"  id="selAdviserSrch" > 
								     <option value="">--SELECT--</option>
										<c:if test="${not empty ALL_ADVSTF_LIST}">
										  <c:forEach var="advstf" items="${ALL_ADVSTF_LIST}">
										  	<c:if test="${advstf[5] == 'ADVISER'}">
										  		<option value="${advstf[0]}">${advstf[1]}</option>
										  	</c:if>										    
										  </c:forEach>
										</c:if>
									</select>  
					</div>
      				</td>
      				</tr>
      				</table>
      				
      				
      			</div>
      					<button type="button"  id="btnSrchProfile" class="btn BtnFIPASRCH StylishSRCH" onclick="fipaSearch()" style="background-color: #243665;border-radius: 5px;top:0px !important;padding-left: 0px;" >
					     	 <span class="txt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search</span>
					      	<!--  <span class="round"><i class="fa fa-search"></i></span> -->
					    </button> 
    

					    
      		</div>
      		
		</div>
		
		 <div class="clearfix"></div>  
		 <div class="row">
		 <div class="col-md-12">
		
		 <br>
		 
			<table id="ClientSearchTable"
				 class="dataTable table-striped table-bordered display hover" 
				style="width: 100%;display:none">
				<thead style="border: 1px solid #1D655C !important">
		
					<tr>
						<th>#</th>
						<th>Select</th>
						<th><div style="width: 160px">Client Name</div></th>
						<th>NRIC</th>
						<th>Email</th>
						<th>Contacts</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							id="imgFIPAProspect" />FIPA</th>
						<th><img src="images/menuicons/green-f.png" width="20px"
							id="imgFPMSClient" />FPMS</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							style="margin-right: -10px" id="imgBoth1" /> &nbsp;<img
							src="images/menuicons/green-f.png" width="20px" id="imgBoth2" />Both
						</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>

		</div>
		 
		 </div>
		 
      
      
      	
		
      </div>

</div> 
  </section> 
    <section id="ArchiveProfile" class="tab-panel">
    	<jsp:include page="/jsp/fipa/profile.jsp"></jsp:include>
     </section>
  </div>
  
</div>

<!-- <div class="nav-tabs-prfsrc" >
			 	 <ul class="nav nav-tabs" style="padding-left: 15px;">
			 	 	<li class="active"><a href="#Profile_Srch_List" data-toggle="tab"  class="btn" style="padding: 0px 18px 0px 12px;"><span style="color:white">Profile Search</span></a><br></li>
			 	 	<li><a href="#Archive_List" data-toggle="tab"  class="btn" style="padding: 0px 33px 0px 33px;"><span style="color:white"> Archive </span></a><br></li>
			 	 </ul>
			 	 
	 </div> -->
	 <%--  <div class="tab-content" style="background: white;">
			 	<div class="tab-pane active" id="Profile_Srch_List" style="border: 1px solid #1D655C !important">
			 		<div class="panel-group" >   
      <div class="panel-body" > 
      
      	<div class="row">  
      		<div class="col-md-12">
      			<div class="col-md-4">
      			
			  		<div class="input-container">
						 <label for="txtFldSrchCustName" class="control-label">Name</label>
						<input class="textfilds" id="txtFldSrchCustName" name="txtFldSrchCustName"  style="font-size:150%;">
					</div>
      			</div>
      			
      			<div class="col-md-4">
      				
      				<div class="input-container">
						 <label for="txtFldSrchCustNric" id="lblSrchNric" class="control-label">NRIC/ FIN / Passport</label>
						<input class="textfilds" id="txtFldSrchCustNric" name="txtFldSrchCustNric"  style="font-size:150%;">
					</div>
      			</div>
      			
      			<div class="col-md-3" id="divSrchAdviser">
      				
      				<table>
      				<tr>
      				<td>
      				 <label for="selAdviserSrch"  class="control-label">Adviser: </label> 
      				</td>
      				<td>
      				<div class="input-container">
						 <select class="form-control srchtextflds textfilds"  id="selAdviserSrch" > 
								     <option value="">--SELECT--</option>
										<c:if test="${not empty ALL_ADVSTF_LIST}">
										  <c:forEach var="advstf" items="${ALL_ADVSTF_LIST}">
										  	<c:if test="${advstf[5] == 'ADVISER'}">
										  		<option value="${advstf[0]}">${advstf[1]}</option>
										  	</c:if>										    
										  </c:forEach>
										</c:if>
									</select>  
					</div>
      				</td>
      				</tr>
      				</table>
      				
      				
      			</div>
      					<button type="button"  id="btnSrchProfile" class="btn BtnFIPASRCH StylishSRCH" onclick="fipaSearch()" style="background-color: #243665;border-radius: 5px;top:0px !important" >
					     	 <span class="txt">Search</span>
					      
					    </button> 
    

					    
      		</div>
      		
		</div>
		
		 <div class="clearfix"></div>  
		 <div class="row">
		 <div class="col-md-12">
		
		 <br>
		 
			<table id="ClientSearchTable"
				 class="dataTable table-striped table-bordered display hover" 
				style="width: 100%;">
				<thead style="border: 1px solid #1D655C !important">
		
					<tr>
						<th>#</th>
						<th>Select</th>
						<th><div style="width: 160px">Client Name</div></th>
						<th>NRIC</th>
						<th>Email</th>
						<th>Contacts</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							id="imgFIPAProspect" />FIPA</th>
						<th><img src="images/menuicons/green-f.png" width="20px"
							id="imgFPMSClient" />FPMS</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							style="margin-right: -10px" id="imgBoth1" /> &nbsp;<img
							src="images/menuicons/green-f.png" width="20px" id="imgBoth2" />Both
						</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>

		</div>
		 
		 </div>
		 
      
      
      	
		
      </div>

</div> 
			 	</div>
			    <div class="tab-pane" id="Archive_List">
			 		<jsp:include page="/jsp/fipa/profile.jsp"></jsp:include>
			 	</div>
			 </div> --%>
			       
<%-- <div class="panel-group" >   
      <div class="panel-body" > 
      
      	<div class="row">  
      		<div class="col-md-12">
      			<div class="col-md-4">
			  		<div class="input-container">
						 <label for="txtFldSrchCustName" class="control-label">Name</label>
						<input class="textfilds" id="txtFldSrchCustName" name="txtFldSrchCustName"  style="font-size:150%;">
					</div>
      			</div>
      			
      			<div class="col-md-4">
      				
      				<div class="input-container">
						 <label for="txtFldSrchCustNric" id="lblSrchNric" class="control-label">NRIC/ FIN / Passport</label>
						<input class="textfilds" id="txtFldSrchCustNric" name="txtFldSrchCustNric"  style="font-size:150%;">
					</div>
      			</div>
      			
      			<div class="col-md-4" id="divSrchAdviser">
      				<div class="form-group">
      					<label for="selAdviserSrch " class="control-label">Adviser: </label>
      					 <select class="form-control srchtextflds"  id="selAdviserSrch"> 
								     <option value="">--SELECT--</option>
										<c:if test="${not empty ALL_ADVSTF_LIST}">
										  <c:forEach var="advstf" items="${ALL_ADVSTF_LIST}">
										  	<c:if test="${advstf[5] == 'ADVISER'}">
										  		<option value="${advstf[0]}">${advstf[1]}</option>
										  	</c:if>										    
										  </c:forEach>
										</c:if>
									</select> 
						
      				</div>
      			</div>
      					<button type="button"  id="btnSrchProfile" class="btn BtnFIPASRCH StylishSRCH" onclick="fipaSearch()" style="background-color: #243665;border-radius: 5px;top:0px !important" >
					     	 <span class="txt">Search</span>
					      	<!--  <span class="round"><i class="fa fa-search"></i></span> -->
					    </button> 
    

					    
      		</div>
      		
		</div>
		 <div class="clearfix"></div>  
		 <div class="row">
		 <div class="col-md-12">
		 <br>
			<table id="ClientSearchTable"
				class="dataTable table-striped table-bordered display hover"
				style="width: 100%;">
				<thead style="border: 1px solid #1D655C !important">
		
					<tr>
						<th>#</th>
						<th>Select</th>
						<th><div style="width: 160px">Client Name</div></th>
						<th>NRIC</th>
						<th>Email</th>
						<th>Contacts</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							id="imgFIPAProspect" />FIPA</th>
						<th><img src="images/menuicons/green-f.png" width="20px"
							id="imgFPMSClient" />FPMS</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							style="margin-right: -10px" id="imgBoth1" /> &nbsp;<img
							src="images/menuicons/green-f.png" width="20px" id="imgBoth2" />Both
						</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>

		</div>
		 
		 </div>
		 
      
      
      	
		
      </div>
</div> --%>





