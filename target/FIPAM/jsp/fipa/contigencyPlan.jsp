<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<div class="tabset" style="background: white;">
		 <!-- Tab 1 -->
		  <input type="radio" name="tabset" id="contingencySelfTab" aria-controls="contingencySelf" >
		  <label for="contingencySelfTab"><i class="fa fa-user" title="Contingency Self Planning"></i>&nbsp;&nbsp;&nbsp;&nbsp;Self</label>
		  <!-- Tab 2 -->
		  <input type="radio" name="tabset" id="contingencySpouseTab" aria-controls="contingencySpouse">
		  <label for="contingencySpouseTab"><i class="fa fa-user-plus" title="Contingency Spouse Planning"></i>&nbsp;&nbsp;&nbsp;&nbsp;Spouse</label>
	  
		  <div class="tab-panels">
		<!--   Self Contingency start -->
		   	 <section id="contingencySelf" class="tab-panel">
		   <div  class="panel-group">
	<div id="contingencysection" class="accord-content"> 
		<div class="panel-body"> 
   <div class="col-md-12">
   <div class="row">
   <span  class="panelHeaderTitle">Contingency Planning</span>
   </div> 
   
   <div class="row">
	  <hr class="border"/>
	  </div>
	  
   <div class="row">
   <span  class="fipaFldLblTextbold">
   In the event of death, total permanent disability or diagnosis with critical illness, how much living needs would you like to provide for you and your loved ones, annually?
   </span>
   </div>   
   	<div class="clearspace20"></div>
   	  <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
       <span class="fipaFldLblText  pull-right">Self&nbsp;</span> 
          </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <div class="fld-resp-md input-group input-group-sm"> 
			  <span class="input-group-addon">
			   <span class="glyphicon" id="symbolUsd"></span>
			    </span><input name="tpdSelfAmt" id="tpdSelfAmt"
			class="form-control numbers clsfipaClient applyEvntUsd" /></div>							
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
           <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
                <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					               <!--  <input type="text" class="form-control clsfipaSpouse numbers applyEvntUsd"
							name="tpdChildAmt" id="tpdChildAmt" /> -->
							<input type="text" class="form-control clsfipaClient  numbers applyEvntUsd"
							name="tpdChildAmt" id="tpdChildAmt" />
							</div>
			</div>
            </div>
      </div>
      </div>
      </div>
      <div class="row"> 
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
          <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
                <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					                <!-- <input type="text" name="tpdSpsAmt"
							id="tpdSpsAmt" class="form-control numbers clsfipaSpouse applyEvntUsd" /> -->
							<input type="text" name="tpdSpsAmt"
							id="tpdSpsAmt" class="form-control numbers clsfipaClient  applyEvntUsd" />
							</div>
			</div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
           <span class="fipaFldLblText  pull-right">Family</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
          <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					                <input type="text" class="form-control  numbers clsfipaFamily applyEvntUsd"
							name="tpdFamilyAmt" id="tpdFamilyAmt" />
							</div>
		  </div>
            </div>
      </div>
      </div>
   </div>
   
      <div class="row">
	  <hr class="border"/>
	  </div>
	  
	<!-- <div class="row">
	<div class="fipaFldLblText">  
		<img src="images/menuicons/canvas.png" width="15"  class="canvas_info"/>
			 &nbsp;&nbsp;The amount is based on assumption of annual expenditure required</div>
		</div>  -->
  	 
	  
	  
	 
	  <div class="row">
		   <span  class="panelHeaderTitle">
		 		 Upon Death
		   </span>
       </div>
	  
	<div class="row">
   		<div class="col-md-12">
			<div class="col-md-3"> 
				 <div class="form-group">
					<div class="row">
					<div class="col-md-8 col-sm-4 col-xs-4" style="text-align: center;">
		           		<!--  <span class="fipaFldLblText fipaFldLblTextbold">Upon Death</span> -->
		             </div>
		            </div>
		      </div>
			</div>
			<div class="col-md-4">   
			<div class="form-group">
				<div class="row">
				<div class="col-md-6 col-sm-4 col-xs-4">
					    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;" >Self</span>       	
			     </div>
			           <div class="col-md-6 col-sm-4 col-xs-4"> 
			              <span class="fipaFldLblText fipaFldLblTextbold" style="padding-left: 15px;">Spouse</span>   		
						  </div>
			            </div>
			    </div>
			</div>
			<div class="col-md-5">  
			 <div class="form-group">
					<div class="row">
					<div class="col-md-5 col-sm-4 col-xs-4" >
						    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Children</span>       
				     </div>
				           <div class="col-md-2 col-sm-4 col-xs-4" style=""> 
				            		 <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Family</span>  		
							  </div>
				            </div>
			 </div>
			</div>
	    </div>   
	 </div>
	 
	 
	   
	   <div class="clearspace20"></div>
	   
   	  <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-9 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">% of Living Needs to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			            <div class="fld-resp-sm input-group input-group-sm" >  
								                <input name="" id="" class="form-control numbers clsfipaClient applyEvntpCent3 readOlyCursor " />
										 <span class="input-group-addon">
								                <span class="glyphicon" id="symbolprCent"></span>
								                </span>
										</div>	
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		 <div class="fld-resp-sm input-group input-group-sm" >  
						                <input name="sdLivingneedSpsPrcnt"
								id="sdLivingneedSpsPrcnt" class="form-control numbers clsfipaClient applyEvntpCent3" />
								 <span class="input-group-addon">
						                <span class="glyphicon" id="symbolprCent"></span>
						                </span>
								</div>		
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	           <div class="fld-resp-sm input-group input-group-sm" >  
							<input type="text" class="form-control clsfipaClient numbers applyEvntpCent3"
								name="sdLivingneedChildPrcnt" id="sdLivingneedChildPrcnt"/>
								 <span class="input-group-addon">
						                <span class="glyphicon" id="symbolprCent"></span>
						                </span>
								</div>	
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		<div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="sdLivingneedFamilyPrcnt" id="sdLivingneedFamilyPrcnt"/>
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	
			  </div>
          </div>
      </div>
      </div>
      
   </div>
   
    <div class="clearspace20"></div>
   
    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-8 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">Years to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			            <div class="fld-resp-sm input-group input-group-sm" >  
								                <input name=""
										id="" class="form-control numbers clsfipaClient readOlyCursor applyEvntpCent3" />
										 <span class="input-group-addon">
								                <span class="glyphicon" id="symbolprCent"></span>
								                </span>
										</div>	
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		<div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input class="form-control  numbers clsfipaClient  applyEvntYrs"
							name="sdIntendSpsYrs" id="sdIntendSpsYrs" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>		
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	           <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input type="text" class="form-control clsfipaClient  numbers applyEvntYrs"
							name="sdIntendChildYrs" id="sdIntendChildYrs" ></input>
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>	
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		 <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input type="text" class="form-control  numbers clsfipaClient applyEvntYrs"
							name="sdIntendFamilyYrs" id="sdIntendFamilyYrs" ></input>
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>	
			  </div>
          </div>
      </div>
      </div>
      
   </div>
   
   
	 
	  <div class="clearspace20"></div>
	  
	  
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by Spouse</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
						<input class="form-control  numbers clsfipaClient  applyEvntUsd"
							name="sdSpsAnnlIncome" id="sdSpsAnnlIncome" />
							
							</div>	
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Years to Receive</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >   
					                <input type="text" class="form-control  numbers clsfipaClient  applyEvntYrs"
							name="sdSpsAnnlIncomeYrs" id="sdSpsAnnlIncomeYrs" ></input>
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>
			</div>
            </div>
      </div>
      </div>
       
      
   </div>
   
   
	  <div class="clearspace20"></div>
	 
	 
	 <div class="row" style="display:none">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="sdLivingneedSelfRemark" id="sdLivingneedSelfRemark"   
					class="form-control clsfipaClient" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	   
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	
<!-- 	 Upon Total Permanent Disability (TPD) starts-->
 
	  <div class="row">
		   <span  class="panelHeaderTitle">
		 		 Upon Total Permanent Disability (TPD)
		   </span>
       </div>
       
	  <div class="row">
   		<div class="col-md-12">
			<div class="col-md-3"> 
				 <div class="form-group">
					<div class="row">
					<div class="col-md-8 col-sm-4 col-xs-4" style="text-align: center;">
		           		 
		             </div>
		            </div>
		      </div>
			</div>
			<div class="col-md-4">   
			<div class="form-group">
				<div class="row">
				<div class="col-md-6 col-sm-4 col-xs-4">
					    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Self</span>       	
			     </div>
			           <div class="col-md-6 col-sm-4 col-xs-4"> 
			              <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Spouse</span>   		
						  </div>
			            </div>
			    </div>
			</div>
			<div class="col-md-5">  
			 <div class="form-group">
					<div class="row">
					<div class="col-md-5 col-sm-4 col-xs-4" style="">
						    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Children</span>       
				     </div>
				           <div class="col-md-2 col-sm-4 col-xs-4" style=""> 
				            		 <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Family</span>  		
							  </div>
				            </div>
			 </div>
			</div>
	    </div>   
	 </div>
	 
	 
	  <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-9 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">% of Living Needs to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			             <div class="fld-resp-sm input-group input-group-sm" >  
						<input class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="tpdSelfLivingneedPrcnt" id="tpdSelfLivingneedPrcnt" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		 <div class="fld-resp-sm input-group input-group-sm" > 
							<input name="tpdSpsLivingneedPrcnt"
							id="tpdSpsLivingneedPrcnt" class="form-control  numbers clsfipaClient  applyEvntpCent3" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	            <div class="fld-resp-sm input-group input-group-sm" > 
							<input type="text" class="form-control clsfipaClient  numbers applyEvntpCent3"
							name="tpdChildLivingneedPrcnt" id="tpdChildLivingneedPrcnt" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		 <div class="fld-resp-sm input-group input-group-sm" > 
						<input type="text" class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="tpdFamilyLivingneedPrcnt" id="tpdFamilyLivingneedPrcnt" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>
			  </div>
          </div>
      </div>
      </div>
      
   </div>
    
    <div class="clearspace20"></div>
   
    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-8 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">Years to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			             <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input class="form-control  numbers clsfipaClient applyEvntYrs"
							name="tpdSelfIntendYrs" id="tpdSelfIntendYrs" />
						<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>	
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		<div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input class="form-control  numbers clsfipaClient applyEvntYrs"
							name="tpdSpsIntendYrs" id="tpdSpsIntendYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>			
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	           <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input type="text" class="form-control numbers clsfipaClient applyEvntYrs"
							name="tpdChildIntendYrs" id="tpdChildIntendYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            	   <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input type="text" class="form-control  numbers clsfipaClient applyEvntYrs"
							name="tpdFamilyIntendYrs" id="tpdFamilyIntendYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>	
			  </div>
          </div>
      </div>
      </div>
      
   </div>
   
	
		  <div class="clearspace20"></div>
	  
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
						<input class="form-control  numbers clsfipaClient applyEvntUsd"
							name="tpdSelfAnnlincome" id="tpdSelfAnnlincome" />
							
							</div>	
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Years to receive</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
					                <input type="text" class="form-control  numbers clsfipaClient applyEvntYrs"
							name="tpdSelfAnnlincomeYr" id="tpdSelfAnnlincomeYr" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
								</div>	
			</div>
            </div>
      </div>
      </div> 
   </div>
   
   
	
	 <div class="clearspace20"></div>
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Medical Expenses to provide for Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
						<input class="form-control  numbers clsfipaClient applyEvntUsd"
							name="tpdSelfMedicalexpannl" id="tpdSelfMedicalexpannl" /> 
						  </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Years to Receive</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
							<input type="text" class="form-control  numbers clsfipaClient"
							name="tpdSelfMedicalexpannlYr" id="tpdSelfMedicalexpannlYr" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					          </span>
					           </div>
			</div>
            </div>
      </div>
      </div> 
   </div>
   
   
	  <div class="clearspace20"></div>
	  
	 
	 <div class="row" style="display:none">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="tpdSelfRemark" id="tpdSelfRemark"   
					class="form-control clsfipaClient" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	 <!-- 	 Upon Total Permanent Disability (TPD) Ends-->  
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	<!--   Upon Diagnosis of Critical Illness (CI) Start-->
	    <div class="row">
		   <span  class="panelHeaderTitle">
		 		Upon Diagnosis of Critical Illness (CI)
		   </span>
       </div>
       
	  <div class="row">
   		<div class="col-md-12">
			<div class="col-md-3"> 
				 <div class="form-group">
					<div class="row">
					<div class="col-md-8 col-sm-4 col-xs-4" style="text-align: center;">
		           		 <!-- <span class="fipaFldLblText fipaFldLblTextbold">Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI</span> -->
		             </div>
		            </div>
		      </div>
			</div>
			<div class="col-md-4">   
			<div class="form-group">
				<div class="row">
				<div class="col-md-6 col-sm-4 col-xs-4">
					    <span class="fipaFldLblText fipaFldLblTextbold" style="padding-left: 15px;">Self</span>       	
			     </div>
			           <div class="col-md-6 col-sm-4 col-xs-4"> 
			              <span class="fipaFldLblText fipaFldLblTextbold" style="padding-left: 15px;">Spouse</span>   		
						  </div>
			            </div>
			    </div>
			</div>
			<div class="col-md-5">  
			 <div class="form-group">
					<div class="row">
					<div class="col-md-5 col-sm-4 col-xs-4">
						    <span class="fipaFldLblText fipaFldLblTextbold" style="padding-left: 15px;">Children</span>       
				     </div>
				           <div class="col-md-2 col-sm-4 col-xs-4" > 
				            		 <span class="fipaFldLblText fipaFldLblTextbold" style="padding-left: 15px;">Family</span>  		
							  </div>
				            </div>
			 </div>
			</div>
	    </div>   
	 </div>
	 
	    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-9 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">% of Living Needs to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			               <div class="fld-resp-sm input-group input-group-sm" >
						<input class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="ciSelfLivingneedPrcnt" id="ciSelfLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span>
					       </div>
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		  <div class="fld-resp-sm input-group input-group-sm" >
						<input class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="ciSpsLivingneedPrcnt" id="ciSpsLivingneedPrcnt"  />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span>
					       </div>	
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	            <div class="fld-resp-sm input-group input-group-sm" >
						<input type="text" class="form-control clsfipaClient numbers applyEvntpCent3"
							name="ciChildLivingneedPrcnt" id="ciChildLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span>
					       </div>
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		  <div class="fld-resp-sm input-group input-group-sm" >
						<input type="text" class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="ciFamilyLivingneedPrcnt" id="ciFamilyLivingneedPrcnt"
							 />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span>
					       </div>
			  </div>
          </div>
      </div>
      </div>
      
   </div>
    
	      <div class="clearspace20"></div>
   
    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-8 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">Years to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input class="form-control  numbers clsfipaClient applyEvntYrs"
							name="ciSelfIntendYrs" id="ciSelfIntendYrs" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					       </div>
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		<div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input class="form-control  numbers clsfipaClient applyEvntYrs"
							name="ciSpsIntendYrs" id="ciSpsIntendYrs" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					       </div>			
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control clsfipaClient numbers applyEvntYrs"
							name="ciChildIntendYrs" id="ciChildIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					       </div>
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            	    <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input class="form-control  numbers clsfipaClient applyEvntYrs"
							name="ciFamilyIntendYrs" id="ciFamilyIntendYrs" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					       </div>	
			  </div>
          </div>
      </div>
      </div>
      
   </div>
	  
	
	  <div class="clearspace20"></div>
	 
	 
	  <div class="clearspace20 hidden"></div>
	 <div class="row hidden">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					        </span> 
						<input class="form-control  numbers clsfipaClient applyEvntUsd"
							name="ciSelfAnnlincome" id="ciSelfAnnlincome" />
								
							   </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input type="text" class="form-control  numbers clsfipaClient applyEvntYrs"
							name="ciSelfAnnlincomeYr" id="ciSelfAnnlincomeYr" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span> 
					        </div>
			</div>
            </div>
      </div>
      </div> 
   </div> 
   
	 <div class="clearspace20"></div>
	 
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Other annual expenses for critical illness of self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					        </span> 
					        <input class="form-control  numbers clsfipaClient applyEvntUsd"
							name="ciSelfOthannlexp" id="ciSelfOthannlexp" />
							</div>	
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input type="text" class="form-control  numbers clsfipaClient applyEvntYrs"
							name="ciSelfOthannlexpYr" id="ciSelfOthannlexpYr">
								<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
							</div>
			</div>
            </div>
      </div>
      </div> 
   </div>
   
    <div class="clearspace20"></div>
     
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Lump
								sum medical cost for critical illness of self</span>
             </div>
          <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					        </span> 
					        <input class="form-control  numbers clsfipaClient applyEvntUsd"
							name="ciSelfLumpsummc" id="ciSelfLumpsummc"  />
							</div>
			  </div>
            </div>
      </div>
      </div>
      </div>
      
      
	  <div class="clearspace20"></div>
	  
	 
	 <div class="row" style="display:none">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="ciSelfRemark" id="ciSelfRemark"   
					class="form-control clsfipaClient" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	   <!--   Upon Diagnosis of Critical Illness (CI) Ends-->
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	   <!--   Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI Starts-->
	   
	   <div class="row">
		   <span  class="panelHeaderTitle">
		 		Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI
		   </span>
       </div>
       
        <div class="clearspace20"></div>
        
	  <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Education Fund</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
           <div class="fld-resp-md input-group input-group-sm" >
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
					       <input
							class="form-control  numbers clsfipaClient applyEvntUsd" name="eduFund"
							id="eduFund"   />
							</div>		
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">% of Liabilities to Offset</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm" > 
					       <input class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="liaboffsetSelfPrcnt" id="liaboffsetSelfPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					       </span> 
							</div>
			</div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-4 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Last Expenses</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-md input-group input-group-sm" >
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
						<input class="form-control numbers clsfipaClient applyEvntUsd"
							name="lastexpSelfAmt" id="lastexpSelfAmt" />
						
						 </div>
			</div>
            </div>
      </div>
      </div>
      
   </div>
	  
	 <!--   Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI Ends-->
	   
  
      </div>
      		
	
	
	
		
		
 </div> 
 </div>
 </div>
		  	 </section>
		 <!--  	 Self Contingency End -->
		     <section id="contingencySpouse" class="tab-panel">
		      <div  class="panel-group">
				<div id="contingencysection" class="accord-content"> 
					<div class="panel-body"> 
					 <div class="col-md-12">
	<div class="row">
      <span  class="panelHeaderTitle">Contingency Planning</span>
    </div> 
   
   <div class="row">
	  <hr class="border"/>
	  </div>
	<div class="row">
	   <span  class="fipaFldLblTextbold">
	   In the event of death, total permanent disability or diagnosis with critical illness, how much living needs would your spouse like to provide for you and their loved ones, annually?
	   </span>
   </div>   
   
   	<div class="clearspace20"></div>
   	  <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
       <span class="fipaFldLblText  pull-right">Self&nbsp;</span> 
          </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <div class="fld-resp-md input-group input-group-sm"> 
			  <span class="input-group-addon">
			   <span class="glyphicon" id="symbolUsd"></span>
			    </span><input name="tpdSpsSelfAmt" id="tpdSpsSelfAmt"
			class="form-control numbers clsfipaSpouse applyEvntUsd" /></div>							
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
           <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
                <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					                <input type="text" class="form-control clsfipaSpouse numbers applyEvntUsd"
							name="tpdSpsChildAmt" id="tpdSpsChildAmt" />
							</div>
			</div>
            </div>
      </div>
      </div>
      </div>
      <div class="row"> 
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
          <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
                <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					                <input type="text" name="tpdSpsSpsAmt"
							id="tpdSpsSpsAmt" class="form-control numbers clsfipaSpouse applyEvntUsd" />
							</div>
			</div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
           <span class="fipaFldLblText  pull-right">Family</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
          <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					                <input type="text" class="form-control  numbers clsfipaSpouse applyEvntUsd"
							name="tpdSpsFamilyAmt" id="tpdSpsFamilyAmt" />
							</div>
		  </div>
            </div>
      </div>
      </div>
   </div>
   
   <div class="row">
	  <hr class="border"/>
	  </div>
   <div class="row">
		   <span  class="panelHeaderTitle">
		 		Upon Death
		   </span>
       </div>
       
	  <div class="row">
   		<div class="col-md-12">
			<!-- <img src="images/menuicons/contg2.png" style="width:50px;height:50px"/> -->
			<!-- <span  class="fipaFldLblTextbold">Upon Death</span> -->
			<div class="col-md-3"> 
				 <div class="form-group">
					<div class="row">
					<div class="col-md-8 col-sm-4 col-xs-4" style="text-align: center;">
		           		 
		             </div>
		            </div>
		      </div>
			</div>
			<div class="col-md-4">   
			<div class="form-group">
				<div class="row">
				<div class="col-md-6 col-sm-4 col-xs-4">
					    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Self</span>       	
			     </div>
			           <div class="col-md-6 col-sm-4 col-xs-4"> 
			              <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Spouse</span>   		
						  </div>
			            </div>
			    </div>
			</div>
			<div class="col-md-5">  
			 <div class="form-group">
					<div class="row">
					<div class="col-md-5 col-sm-4 col-xs-4" style="">
						    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Children</span>       
				     </div>
				           <div class="col-md-2 col-sm-4 col-xs-4" style=""> 
				            		 <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Family</span>  		
							  </div>
				            </div>
			 </div>
			</div>
	    </div>   
	 </div>
	 
   	
	 
	 
	   
	   <div class="clearspace20"></div>
	   
   	  <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-9 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">% of Living Needs to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			             <div class="fld-resp-sm input-group input-group-sm" >    
					                <input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="spdLivingneedSpsPrcnt" id="spdLivingneedSpsPrcnt"/>
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		 <div class="fld-resp-sm input-group input-group-sm" >  
						                <input name=""
								id="" class="form-control numbers clsfipaSpouse readOlyCursor applyEvntpCent3" />
								 <span class="input-group-addon">
						                <span class="glyphicon" id="symbolprCent"></span>
						                </span>
								</div>		
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	             <div class="fld-resp-sm input-group input-group-sm" >    
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntpCent3"
							name="spdLivingneedChildPrcnt" id="spdLivingneedChildPrcnt"/>
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		  <div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="spdLivingneedFamilyPrcnt" id="spdLivingneedFamilyPrcnt" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	
			  </div>
          </div>
      </div>
      </div>
      
   </div>
   
    <div class="clearspace20"></div>
   
    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-8 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">Years to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			            <div class="fld-resp-sm input-group input-group-sm" >  
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="spdIntendSelfYrs" id="spdIntendSelfYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon addYearSign" id="symbolYrs"></span>
					                </span>
							</div>	
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		<div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input class="form-control  numbers clsfipaSpouse readOlyCursor applyEvntYrs"
							name="" id="" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>		
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	            <div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="spdIntendChildYrs" id="spdIntendChildYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon addYearSign" id="symbolYrs"></span>
					                </span>
							</div>	
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		  <div class="fld-resp-sm input-group input-group-sm" > 
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="spdIntendFamilyYrs" id="spdIntendFamilyYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon addYearSign" id="symbolYrs"></span>
					                </span>
							</div>	
			  </div>
          </div>
      </div>
      </div>
      
   </div>
   
   
	 
	  <div class="clearspace20"></div>
	  
	  
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by Spouse</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
             <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
						<input class="form-control  numbers clsfipaSpouse applyEvntUsd"
							name="spdSelfAnnlIncome" id="spdSelfAnnlIncome" />
							
							</div>	
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Years to Receive</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                 <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
					                <input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="spdSelfAnnlIncomeYrs" id="spdSelfAnnlIncomeYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>
			</div>
            </div>
      </div>
      </div>
       
      
   </div>
   
   
	  <div class="clearspace20"></div>
	 
	 
	 <div class="row" style="display:none">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="sdLivingneedSpsRemark" id="sdLivingneedSpsRemark"  
					class="form-control clsfipaSpouse" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	   
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	
	<!-- 	 Upon Total Permanent Disability (TPD) starts-->
	    <div class="row">
		   <span  class="panelHeaderTitle">
		 		 Upon Total Permanent Disability (TPD)
		   </span>
       </div>
       
	  <div class="row">
   		<div class="col-md-12">
			<div class="col-md-3"> 
				 <div class="form-group">
					<div class="row">
					<div class="col-md-8 col-sm-4 col-xs-4" style="text-align: center;">
		           		 
		             </div>
		            </div>
		      </div>
			</div>
			<div class="col-md-4">   
			<div class="form-group">
				<div class="row">
				<div class="col-md-6 col-sm-4 col-xs-4">
					    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Self</span>       	
			     </div>
			           <div class="col-md-6 col-sm-4 col-xs-4"> 
			              <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Spouse</span>   		
						  </div>
			            </div>
			    </div>
			</div>
			<div class="col-md-5">  
			 <div class="form-group">
					<div class="row">
					<div class="col-md-5 col-sm-4 col-xs-4" style="">
						    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Children</span>       
				     </div>
				           <div class="col-md-2 col-sm-4 col-xs-4" style=""> 
				            		 <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Family</span>  		
							  </div>
				            </div>
			 </div>
			</div>
	    </div>   
	 </div>
	 
	  <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-9 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">% of Living Needs to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			              <div class="fld-resp-sm input-group input-group-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="tpdsSelfLivingneedPrcnt" id="tpdsSelfLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					          </span>
					           </div>
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		 <div class="fld-resp-sm input-group input-group-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="tpdsSpsLivingneedPrcnt" id="tpdsSpsLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					          </span>
					           </div>	
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	           <div class="fld-resp-sm input-group input-group-sm" > 
						<input type="text" class="form-control clsfipaSpouse  numbers applyEvntpCent3"
							name="tpdsChildLivingneedPrcnt" id="tpdsChildLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					          </span>
					          </div>	
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		 <div class="fld-resp-sm input-group input-group-sm" > 
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="tpdsFamilyLivingneedPrcnt" id="tpdsFamilyLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					          </span>
					          </div>
			  </div>
          </div>
      </div>
      </div>
      
   </div>
    
    <div class="clearspace20"></div>
   
    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-8 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">Years to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="tpdsSelfIntendYrs" id="tpdsSelfIntendYrs" />
								<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					          </span>
					          </div>	
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		<div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="tpdsSpsIntendYrs" id="tpdsSpsIntendYrs"
							 />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					          </span>
					          </div>			
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	           <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntYrs"
							name="tpdsChildIntendYrs" id="tpdsChildIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					          </span>
					          </div>
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            	   <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="tpdsFamilyIntendYrs" id="tpdsFamilyIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					       </div>
			  </div>
          </div>
      </div>
      </div>
      
   </div>
   
	
		  <div class="clearspace20"></div>
	  
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
           <div class="fld-resp-md input-group input-group-sm" >
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					        </span>
						<input class="form-control  numbers clsfipaSpouse applyEvntUsd"
							name="tpdsSpsAnnlincome" id="tpdsSpsAnnlincome" />
							 </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Years to Receive</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
					        <input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="tpdsSpsAnnlincomeYr" id="tpdsSpsAnnlincomeYr"
							 />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
						  </div>
			</div>
            </div>
      </div>
      </div> 
   </div>
   
   
	
	 <div class="clearspace20"></div>
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Medical Expenses to provide for Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
           <div class="fld-resp-md input-group input-group-sm" >
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					        </span>
					        <input class="form-control  numbers clsfipaSpouse applyEvntUsd"
							name="tpdsSpsMedicalexpannl" id="tpdsSpsMedicalexpannl" />
							</div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Years to Receive</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                 <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="tpdsSpsMedicalexpannlYr" id="tpdsSpsMedicalexpannlYr" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					        </div>
			</div>
            </div>
      </div>
      </div> 
   </div>
   
   
	  <div class="clearspace20"></div>
	  
	 
	 <div class="row" style="display:none">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="tpdSpsRemark" id="tpdSpsRemark"   
					class="form-control clsfipaSpouse" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	 <!-- 	 Upon Total Permanent Disability (TPD) Ends-->  
   
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
   	<!--   Upon Diagnosis of Critical Illness (CI) Start-->
	  
	   <div class="row">
		   <span  class="panelHeaderTitle">
		 		Upon Diagnosis of Critical Illness (CI)
		   </span>
       </div>
       
	  <div class="row">
   		<div class="col-md-12">
			<div class="col-md-3"> 
				 <div class="form-group">
					<div class="row">
					<div class="col-md-8 col-sm-4 col-xs-4" style="text-align: center;">
		           		 <!-- <span class="fipaFldLblText fipaFldLblTextbold">Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI</span> -->
		             </div>
		            </div>
		      </div>
			</div>
			<div class="col-md-4">   
			<div class="form-group">
				<div class="row">
				<div class="col-md-6 col-sm-4 col-xs-4">
					    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Self</span>       	
			     </div>
			           <div class="col-md-6 col-sm-4 col-xs-4"> 
			              <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Spouse</span>   		
						  </div>
			            </div>
			    </div>
			</div>
			<div class="col-md-5">  
			 <div class="form-group">
					<div class="row">
					<div class="col-md-5 col-sm-4 col-xs-4" style="">
						    <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Children</span>       
				     </div>
				           <div class="col-md-2 col-sm-4 col-xs-4" style=""> 
				            		 <span class="fipaFldLblText fipaFldLblTextbold"  style="padding-left: 15px;">Family</span>  		
							  </div>
				            </div>
			 </div>
			</div>
	    </div>   
	 </div>
	 
	    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-9 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">% of Living Needs to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			               <div class="fld-resp-sm input-group input-group-sm" >  
					        <input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="cisSelfLivingneedPrcnt" id="cisSelfLivingneedPrcnt"
							 />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span> 
							</div>
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		   <div class="fld-resp-sm input-group input-group-sm" >  
						<input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="cisSpsLivingneedPrcnt" id="cisSpsLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span> 
							</div>	
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	            <div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntpCent3"
							name="cisChildLivingneedPrcnt" id="cisChildLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span> 
							</div>
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            		  <div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="cisFamilyLivingneedPrcnt" id="cisFamilyLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span> 
							</div>
			  </div>
          </div>
      </div>
      </div>
      
   </div>
    
	      <div class="clearspace20"></div>
   
    <div class="row">
   	  <div class="col-md-3">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-8 col-sm-4 col-xs-4">
	            <span class="fipaFldLblText  pull-right">Years to Provide</span>
	             </div>
	            </div>
	      </div>
      </div>
      
       <div class="col-md-4">     
		<div class="form-group">
		<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
			              <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="cisSelfIntendYrs" id="cisSelfIntendYrs"
							 />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span> 
							</div>
	     </div>
	           <div class="col-md-6 col-sm-4 col-xs-4"> 
	            		 <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="cisSpsIntendYrs" id="cisSpsIntendYrs" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span> 
							</div>			
				  </div>
	            </div>
	      </div>
      </div>
      
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-6 col-sm-4 col-xs-4">
	            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntYrs"
							name="cisChildIntendYrs" id="cisChildIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					       </span> 
						 </div>
	             </div>
           <div class="col-md-6 col-sm-4 col-xs-4"> 
            	     <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="cisFamilyIntendYrs" id="cisFamilyIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					       </span> 
						 </div>
			  </div>
          </div>
      </div>
      </div>
      
   </div>
	  
	
	  <div class="clearspace20"></div>
	 
	 
	  <div class="clearspace20 hidden"></div>
	 <div class="row hidden">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
           <div class="fld-resp-md input-group input-group-sm" >
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
						<input class="form-control  numbers clsfipaSpouse applyEvntUsd" 
							name="cisSpsAnnlincome" id="cisSpsAnnlincome" />
							
						 </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						
					       <input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="cisSpsAnnlincomeYr" id="cisSpsAnnlincomeYr" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					       </span> 
							</div>
			</div>
            </div>
      </div>
      </div> 
   </div> 
   
	
	 
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Other annual expenses for critical illness of self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" >
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
					       <input class="form-control  numbers clsfipaSpouse applyEvntUsd"
							name="cisSpsOthannlexp" id="cisSpsOthannlexp" />
							</div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						
					       <input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="cisSpsOthannlexpYr" id="cisSpsOthannlexpYr" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					       </span> 
					       </div>
			</div>
            </div>
      </div>
      </div> 
   </div>
   
    <div class="clearspace20"></div>
     
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Lump
								sum medical cost for critical illness of self</span>
             </div>
          <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" >
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
						<input class="form-control  numbers clsfipaSpouse applyEvntUsd"
							name="cisSpsLumpsummc" id="cisSpsLumpsummc" />
							</div>
			  </div>
            </div>
      </div>
      </div>
      </div>
      
      
	  <div class="clearspace20"></div>
	  
	 
	 <div class="row" style="display:none">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="ciSpsRemark" id="ciSpsRemark"   
					class="form-control clsfipaSpouse" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	   <!--   Upon Diagnosis of Critical Illness (CI) Ends-->
   
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
    <!--   Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI Start-->
    <div class="row">
		   <span  class="panelHeaderTitle">
		 		Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI
		   </span>
       </div>
       
        <div class="clearspace20"></div>
        
   <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Education Fund</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
           <div class="fld-resp-md input-group input-group-sm" >
						<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
					       <input
							class="form-control  numbers clsfipaSpouse applyEvntUsd" name="spseduFund"
							id="spseduFund"   />
							</div>		
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">% of Liabilities to Offset</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="liaboffsetSpsPrcnt" id="liaboffsetSpsPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					       </span> 
						 </div>
			</div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-4 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Last Expenses</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                 <div class="fld-resp-md input-group input-group-sm" >
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
					       <input class="form-control numbers clsfipaSpouse applyEvntUsd"
							name="lastexpSpsAmt" id="lastexpSpsAmt" />
							
							</div>
			</div>
            </div>
      </div>
      </div>
      
   </div>
   
       <!--   Other Funds/ Liabilities to provide in the event of Death/ TPD/ CI Ends-->
					 </div>
					</div>
				</div>
			 </div>
		  	 </section>
		  </div>
	</div>


 


 
