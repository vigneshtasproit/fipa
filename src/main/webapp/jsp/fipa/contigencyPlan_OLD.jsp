<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div  class="panel-group">
	<div id="contingencysection" class="accord-content"> 
	<div class="fipaFldLblText">  &nbsp;&nbsp;
		<img src="images/menuicons/canvas.png" width="15" class="canvas_info"/> 
		Ensure that your loved ones are provided for according to your wishes in the event of unforeseen circumstances
  	</div> 
		<div class="panel-body"> 
   <div class="col-md-12">
   <div class="row">
   <span  class="fipaFldLblTextbold">
   In the event of your death, Total Permanent Disability or diagnosis with critical illness, 
   how much money would you like to have annually for yourself and loved ones?
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
          <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
                <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					                <input type="text" name="tpdSpsAmt"
							id="tpdSpsAmt" class="form-control numbers clsfipaSpouse applyEvntUsd" />
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
           <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
                <div class="fld-resp-md input-group input-group-sm" > 
					        <span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
					                <input type="text" class="form-control clsfipaSpouse numbers applyEvntUsd"
							name="tpdChildAmt" id="tpdChildAmt" />
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
	<div class="fipaFldLblText">  
		<img src="images/menuicons/canvas.png" width="15"  class="canvas_info"/>
			 &nbsp;&nbsp;The amount is based on assumption of annual expenditure required</div>
		</div> 
  	 
	  
	  
	  <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	<div class="row">
   		<div class="container">
			<img src="images/menuicons/contg2.png" style="width:50px;height:50px"/>
			<span  class="fipaFldLblText">1a. What is the % of
							living needs you would like to provide for your loved ones
							annually in order to live comfortably after  <span class="label label-info">you&nbsp;</span> 
							are gone?</span>
	    </div>   
	 </div>
	 
	 
	   
	   <div class="clearspace20"></div>
	   
   	  <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Children's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control clsfipaClient numbers applyEvntpCent3"
							name="sdLivingneedChildPrcnt" id="sdLivingneedChildPrcnt"/>
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
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
			<div class="fipaFldLblText" style="text-align: left;">How
								many years do you intend to provide for your loved ones?</div>
	    
	 </div>
	 
	 
	  <div class="clearspace20"></div>
	 
	 
	 <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
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
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntYrs"
							name="sdIntendChildYrs" id="sdIntendChildYrs" ></input>
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
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
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
			<div class="fipaFldLblText" style="text-align: left;">
			Would your spouse be receiving any income in the event of your death?</div>
	  </div>
	 
	  <div class="clearspace20"></div>
	  
	  
	 <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by spouse</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-md input-group input-group-sm" > 
						<span class="input-group-addon">
					                <span class="glyphicon" id="symbolUsd"></span>
					                </span>
						<input class="form-control  numbers clsfipaSpouse applyEvntUsd"
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
            <span class="fipaFldLblText  pull-right">Number of Years</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >   
					                <input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
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
	 
	 
	 <div class="row">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="sdLivingneedSelfRemark" id="sdLivingneedSelfRemark"   
					class="form-control clsfipaClient" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	   
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	  
	  
   <div class="row">
   		<span  class="fipaFldLblText">1b. What is the % of
							living needs you would like to provide for yourself & loved ones
							annually in order to live comfortably after <span class="label label-info">your
								spouse </span>&nbsp;is gone?</span>
	       
	 </div>
	 
	 
	   
	   <div class="clearspace20"></div>
	   
   	  <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm" >    
					                <input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="spdLivingneedSpsPrcnt" id="spdLivingneedSpsPrcnt"/>
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
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Children's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm" >    
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntpCent3"
							name="spdLivingneedChildPrcnt" id="spdLivingneedChildPrcnt"/>
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
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
			<div class="fipaFldLblText" style="text-align: left;">How
								many years do you intend to provide for yourself & love ones?</div>
	    
	 </div>
	 
	 
	  <div class="clearspace20"></div>
	 <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm" >  
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="spdIntendSelfYrs" id="spdIntendSelfYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon addYearSign" id="symbolYrs"></span>
					                </span>
							</div>		
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="spdIntendChildYrs" id="spdIntendChildYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon addYearSign" id="symbolYrs"></span>
					                </span>
							</div>
			</div>
            </div>
      </div>
      </div>
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" > 
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="spdIntendFamilyYrs" id="spdIntendFamilyYrs"
							 />
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
			<div class="fipaFldLblText" style="text-align: left;">
			Would you be receiving any income in the event of your Self
								death?</div>
	  </div>
	 
	  <div class="clearspace20"></div>
	 
	 <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by you</span>
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
            <span class="fipaFldLblText  pull-right">Number of Years</span>
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
	 
	 
	 <div class="row">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div> 
		<textarea name="sdLivingneedSpsRemark" id="sdLivingneedSpsRemark"  
					class="form-control clsfipaSpouse" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
   
   
   
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  <!-- Section 2 -->
	   
	<div class="row">
   		<div class="container">
			<img src="images/menuicons/contg2a.png" style="width:50px;height:50px"/>
			<span  class="fipaFldLblText">2a. What is the % of living needs you would like to provide for your loved ones annually if
								 <span class="label label-info">you&nbsp;
								 </span> are not able to work due to total permanent disability (TPD)?</span>
	    </div>   
	 </div>
	 
	 
	   
	   <div class="clearspace20"></div>
	   
   	  <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self's Living needs </span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm" >  
						<input class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="tpdSelfLivingneedPrcnt" id="tpdSelfLivingneedPrcnt" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>		
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse's Living needs </span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" > 
							<input name="tpdSpsLivingneedPrcnt"
							id="tpdSpsLivingneedPrcnt" class="form-control  numbers clsfipaSpouse applyEvntpCent3" />
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
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Children's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" > 
							<input type="text" class="form-control clsfipaSpouse numbers applyEvntpCent3"
							name="tpdChildLivingneedPrcnt" id="tpdChildLivingneedPrcnt" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>
			</div>
            </div>
      </div>
      </div>
      
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" > 
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntpCent3"
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
			<div class="fipaFldLblText" style="text-align: left;">How
								many years do you intend to provide for your loved ones?</div>
	    
	 </div>
	 
	 
	  <div class="clearspace20"></div>
	 
	 
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input class="form-control  numbers clsfipaClient applyEvntYrs"
							name="tpdSelfIntendYrs" id="tpdSelfIntendYrs" />
						<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="tpdSpsIntendYrs" id="tpdSpsIntendYrs" />
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
            <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input type="text" class="form-control numbers clsfipaSpouse applyEvntYrs"
							name="tpdChildIntendYrs" id="tpdChildIntendYrs" />
							<span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Family</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntYrs"
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
			<div class="fipaFldLblText" style="text-align: left;">
			Would you be receiving any income in the event of TPD?</div>
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
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
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
            <span class="fipaFldLblText  pull-right">Annual medical expenses to provide for Self</span>
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
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
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
	  
	 
	 <div class="row">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="tpdSelfRemark" id="tpdSelfRemark"   
					class="form-control clsfipaClient" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	   
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	  
	  
   <div class="row">
   		<span  class="fipaFldLblText">2b. What is the % of
							living needs you would like to provide for your loved ones
							annually if <span class="label label-info">your spouse </span>&nbsp;is not
							able to work due to total permanent disability?</span>
	       
	 </div>
	 
	 
	   
	   <div class="clearspace20"></div>
	   
   	  <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="tpdsSelfLivingneedPrcnt" id="tpdsSelfLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					          </span>
					           </div>		
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
   </div>
   
   
   
   
    <div class="clearspace20"></div>
   
   
   <div class="row">
    <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Children's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" > 
						<input type="text" class="form-control clsfipaSpouse  numbers applyEvntpCent3"
							name="tpdsChildLivingneedPrcnt" id="tpdsChildLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					          </span>
					          </div>
			</div>
            </div>
      </div>
      </div>
      
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
			<div class="fipaFldLblText" style="text-align: left;">How
								many years do you intend to provide for yourself & loved ones?</div>
	    
	 </div>
	 
	 
	  <div class="clearspace20"></div>
	 
	 
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" > 
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="tpdsSelfIntendYrs" id="tpdsSelfIntendYrs" />
								<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					          </span>
					          </div>	
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
   </div>
    <div class="clearspace20"></div> 
   
   
   <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntYrs"
							name="tpdsChildIntendYrs" id="tpdsChildIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					          </span>
					          </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Family</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
			<div class="fipaFldLblText" style="text-align: left;">
			Would your spouse be receiving any income in the event of TPD?</div>
	  </div>
	 
	  <div class="clearspace20"></div>
	 
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by spouse</span>
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
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
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
            <span class="fipaFldLblText  pull-right">Annual medical expenses to provide for spouse</span>
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
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number of Years</span>
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
	 
	 
	 <div class="row">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div> 
		<textarea name="tpdSpsRemark" id="tpdSpsRemark"   
					class="form-control clsfipaSpouse" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
   
   
   
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	  <!-- Section 3 -->
	   
	<div class="row">
   		<div class="container">
			<img src="images/menuicons/contg1.png" style="width:50px;height:50px"/>
			<span  class="fipaFldLblText">3a. What is the % of
							living needs you would like to provide for your loved ones
							annually if <span class="label label-info">you </span>&nbsp;are diagnosed
							with critical illness?</span>
	    </div>   
	 </div>
	 
	 
	   
	   <div class="clearspace20"></div>
	   
	   <!-- start here... -->
   	  <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self's Living needs </span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm" >
						<input class="form-control  numbers clsfipaClient applyEvntpCent3"
							name="ciSelfLivingneedPrcnt" id="ciSelfLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span>
					       </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse's Living needs </span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" >
						<input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="ciSpsLivingneedPrcnt" id="ciSpsLivingneedPrcnt"  />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span>
					       </div>
			</div>
            </div>
      </div>
      </div> 
   </div>
   <!--  -->
   
   
   
   <div class="clearspace20"></div>
   
   <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Children's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" >
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntpCent3"
							name="ciChildLivingneedPrcnt" id="ciChildLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span>
					       </div>
			</div>
            </div>
      </div>
      </div>
      
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" >
						<input type="text" class="form-control  numbers clsfipaSpouse applyEvntpCent3"
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
			<div class="fipaFldLblText" style="text-align: left;">How
								many years do you intend to provide for your loved ones?</div>
	    
	 </div>
	 
	 
	  <div class="clearspace20"></div>
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input class="form-control  numbers clsfipaClient applyEvntYrs"
							name="ciSelfIntendYrs" id="ciSelfIntendYrs" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					       </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="ciSpsIntendYrs" id="ciSpsIntendYrs" />
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
            <span class="fipaFldLblText  pull-right">Children</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntYrs"
							name="ciChildIntendYrs" id="ciChildIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span>
					       </div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Family</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
               <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
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
	 
	  <div class="row">  
			<div class="fipaFldLblText" style="text-align: left;">
			Additional Expenses to be provided in the event of Diagnosis of critical illness?</div>
	  </div>
	 
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
      <div class="col-md-6">     
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
      <div class="col-md-6">     
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
	  
	 
	 <div class="row">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div>
		
		<textarea name="ciSelfRemark" id="ciSelfRemark"   
					class="form-control clsfipaClient" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
	  
	   
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	  
	  
   <div class="row">
   		<span  class="fipaFldLblText">3b. What is the % of
							living needs you would like to provide for your loved ones
							annually if <span class="label label-info">your spouse&nbsp;</span>is
							diagnosed with critical illness?</span>
	       
	 </div>
	 
	 
	   
	   <div class="clearspace20"></div>
	   
   	  <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm" >  
					        <input class="form-control  numbers clsfipaSpouse applyEvntpCent3"
							name="cisSelfLivingneedPrcnt" id="cisSelfLivingneedPrcnt"
							 />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span> 
							</div>	
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
   </div>
   
   
   
   
    <div class="clearspace20"></div>
   
   
   <div class="row">
    <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Children's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
                <div class="fld-resp-sm input-group input-group-sm" >  
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntpCent3"
							name="cisChildLivingneedPrcnt" id="cisChildLivingneedPrcnt" />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolprCent"></span>
					        </span> 
							</div>
			</div>
            </div>
      </div>
      </div>
      
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family's Living needs</span>
             </div>
           <div class="col-md-4 col-sm-4 col-xs-4"> 
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
			<div class="fipaFldLblText" style="text-align: left;">How
								many years do you intend to provide for yourself & loved ones?</div>
	    
	 </div>
	 
	 
	  <div class="clearspace20"></div>
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self</span>
             </div>
          <div class="col-md-4 col-sm-4 col-xs-4"> 
            <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >  
						<input class="form-control  numbers clsfipaSpouse applyEvntYrs"
							name="cisSelfIntendYrs" id="cisSelfIntendYrs"
							 />
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					        </span> 
							</div>
			  </div>
            </div>
      </div>
      </div>
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse</span>
             </div>
         <div class="col-md-4 col-sm-4 col-xs-4"> 
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
      </div>
      
        <div class="clearspace20"></div>
	 
	 <div class="row">
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Children</span>
             </div>
         <div class="col-md-4 col-sm-4 col-xs-4">
                <div class="fld-resp-sm input-group input-group-sm fld-resp-sm" >
						<input type="text" class="form-control clsfipaSpouse numbers applyEvntYrs"
							name="cisChildIntendYrs" id="cisChildIntendYrs" ></input>
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolYrs"></span>
					       </span> 
						 </div>
			</div>
            </div>
      </div>
      </div>
      
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
           <span class="fipaFldLblText  pull-right">Family</span>
             </div>
         <div class="col-md-4 col-sm-4 col-xs-4">
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
	 
	  <div class="row">  
			<div class="fipaFldLblText" style="text-align: left;">
			Additional Expenses to be provided in the event of Diagnosis of critical illness?</div>
	  </div>
	 
	  <div class="clearspace20 hidden"></div>
	 
	 <div class="row hidden">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Annual Income to be received by spouse </span>
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
      <div class="col-md-6">     
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
	 
	 
	  <div class="clearspace20"></div>
	 
	 <div class="row">
   <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Other annual expenses for critical illness of spouse</span>
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
      <div class="col-md-6">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Number	of Years</span>
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
								sum medical cost for critical illness of spouse</span>
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
	 
	 
	 <div class="row">  
		<div class="fipaFldLblText" style="text-align: left;">
		Remarks</div> 
		<textarea name="ciSpsRemark" id="ciSpsRemark"   
					class="form-control clsfipaSpouse" style="width: 97%;" rows="5" maxlength="300"></textarea>
	  </div>
   
   
   
    
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	  
     <div class="clearspace20"></div>
     <div class="row">
   		<div class="container">
			<img src="images/menuicons/edu.png" style="width:50px;height:50px"/>
			<span  class="fipaFldLblText">4a. Education funds
							to provide in the event of death/ TPD of self / spouse</span>
	    </div>   
	 </div>
	 
       
	 <div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">&nbsp;</span>
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
      </div>
     
	  
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	  
	  <div class="clearspace20"></div>
     <div class="row"> 
			<span  class="fipaFldLblText">5. % of liabilities
							to be offset in event of death/TPD of self /spouse</span>
	   
	 </div>
	 
       <div class="clearspace20"></div>
	<div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self</span>
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
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse</span>
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
   </div>
      
    <div class="row">
	  <hr class="border"/>
	  </div>
	  
	<div class="clearspace20"></div>
	   
	  
	  
	  
	  <!-- Section 4 -->
	  
	  <div class="row">
   		<div class="container">
			<img src="images/menuicons/contg6.png" style="width:40px;height:40px"/>
			<span  class="fipaFldLblText">6. Last expenses $</span>
	    </div>   
	 </div>
	 
       <div class="clearspace20"></div>
	<div class="row">
   <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Self</span>
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
      <div class="col-md-4">     
	<div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
            <span class="fipaFldLblText  pull-right">Spouse</span>
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
	   
  
      </div>
      		
	
	
	
		
		
 </div> 
 </div>
 </div>
 


 
