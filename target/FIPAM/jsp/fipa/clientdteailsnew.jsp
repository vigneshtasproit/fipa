  <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
      <link href="jsp/fipa/Materialize/icon.css" rel="stylesheet">
      
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="jsp/fipa/Materialize/materialize.min.css"  media="screen,projection"/> 

       <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       </head>
       <style>
    
		.hide{
		display: none;
	  } 
	  
	  .show{
	    display : block;
	  }
	  
 </style>

  <body>
    
    <div class="container-fluid">
        <div class="row">
           <div class="col m4">
               <div class="card hoverable z-depth-5">
                    <div class="card-panel teal lighten-2"><span class="white-text">Client / Self Details</span></div>
               <!--  -->
          <div class="card-content" style="height :100px;"><!--grey lighten-5 z-depth-1  -->
              <div class="row "><!-- valign-wrapper z-depth-5 hoverable grey lighten-5 -->
              <div class="col s2">
              <img src="images/client.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class=" col s10">
              <!-- <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span> -->
              <!-- <input id="first_name" type="text" class="validate" placeholder="Name (as per NRIC)">  -->
              
               <div class="row">
               
                         <div class=" input-field col s12">
                                 <!-- <i class="material-icons prefix">account_circle</i> -->
                                 <input  id="txtFldClntName" type="text" class="validate">
                                 <label for="txtFldClntName">Name (as per NRIC)</label>
                         </div>
                         
                        <!--  <div class=" input-field col s3">
                                 <i class="material-icons prefix">spellcheck</i>
                                <input  id="age" type="text" class="validate" data-length="3">
                                <label for="">Age</label>
                         </div>-->
                
               </div>
               
              <!--  <div class="row">
               
                         <div class=" input-field col s3">
                                 <input  id="txtFldClntName" type="text" class="validate">
                                 <label for="txtFldClntName">Name</label>
                         </div>
                         
                         <div class=" input-field col s3">
                                <input  id="" type="text" class="validate">
                                <label for="">Age</label>
                         </div>
                         
                         <div class=" input-field col s3">
                                <input  id="" type="text" class="validate">
                                <label for="">Age</label>
                         </div>
                         
                         <div class=" input-field col s3">
                                <input  id="" type="text" class="validate">
                                <label for="">Age</label>
                         </div>
               </div> -->
               
               
                <!-- <div class=" input-field col s7"></div>
               <input placeholder="Placeholder" id="first_name" type="text" class="validate">
               <label for="first_name">Name (as per NRIC)</label> -->
            </div>
          </div>
        </div>
               <!--  -->
               
               
                   <div class="card-content hoverable"><!-- z-depth-4   -->
                   
                  <!--  <a class="btn-floating btn-large pulse"><i class="material-icons">cloud</i></a> -->
                   
                 <div class="row">
                    <form class="col s12">
                    
                           <!-- <div class="row">
                                <div class="input-field col s12">
                                    <input id="first_name" type="text" class="validate" placeholder="Name (as per NRIC)"> 
                                </div>
                           </div> -->
                    
                           <div class="row">
                               
                                <div class="input-field col s3">
                                        <!--  <i class="material-icons prefix">date_range</i> -->
                                       <input type="text" class="datepicker validate" id="first_name"  >
                                       <label for="first_name">DOB</label> 
                                </div>
                               
                                <div class=" input-field col s2">
                                 <!-- <i class="material-icons prefix">spellcheck</i -->
                                <input  id="age" type="text" class="validate" data-length="3">
                                <label for="">Age</label>
                                </div>
                                
                                  <div class="input-field col s4">
                                <!--  <i class="material-icons prefix">euro_symbol</i> -->
                                      <input type="text" class="validate" id="first_name" >
                                       <label for="first_name">NRIC</label>   
                                </div>
                                
                                 <div class="input-field col s3">  
                                     <!--  <i class="material-icons prefix">wc</i>  -->                        
                                    <label> Gender</label> <br> <br>
 
                                   <p>
                                   <label>
                                      <input name="group1" type="radio" />
                                      <span>Male</span>
                                    </label>
                                    <br>
                                    <label>
                                      <input name="group1" type="radio" />
                                      <span>Female</span>
                                    </label>
                                    </p>
                                 </div>
                         
                                <!--  <div class="input-field col s4">
                                       <input type="text" class="validate" id="first_name" >
                                       <label for="first_name">Age</label> 
                                </div> -->
                                
                               <!--   <div class="input-field col s4">
                                        <select>
                                            <option value="" disabled selected>Gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                 </div>   -->
    
                               <!-- <div class=" input-field col s3">
                                 <i class="material-icons prefix">spellcheck</i>
                                <input  id="age" type="text" class="validate" data-length="3">
                                <label for="">Age</label><</div>
     -->
                          <!--    <div class="input-field col s4">  
                              <i class="material-icons prefix">wc</i>                         
                                 <label> Gender</label> <br> <br>
 
                                   <p>
                                   <label>
                                      <input name="group1" type="radio" />
                                      <span>Male</span>
                                    </label>
                                    
                                    <label>
                                      <input name="group1" type="radio" />
                                      <span>Female</span>
                                    </label>
                                    </p>
                                 </div>  -->    
                            </div>
                             
                             
                             <div class="row">
                               
                                    <!-- <div class="input-field col s2">  
                                      <i class="material-icons prefix">wc</i>                         
                                    <label> Gender</label> <br> <br>
 
                                   <p>
                                   <label>
                                      <input name="group1" type="radio" />
                                      <span>Male</span>
                                    </label>
                                    <br>
                                    <label>
                                      <input name="group1" type="radio" />
                                      <span>Female</span>
                                    </label>
                                    </p>
                                 </div> -->
                                 
                                 
                                 <div class="input-field col s4">
                                        <select>
                                            <option value="" disabled selected>Marital Status</option>
                                            <option value="">Single</option>
                                            <option value="">Married</option>
                                        </select>
                                </div>
                                
                                
                                 <div class="input-field col s4">
                                        <select>
                                            <option value="" disabled selected>Nationality</option>
                                            <option value="">Singaporean</option>
                                            <option value="">Indian</option>
                                        </select>
                                 </div>
                                 
                                 
                                 
                                 
                                 
                                 <div class="input-field col s4">
                                 <!-- Address & Other INfo. width:180px;  -->
                                  <a class="waves-effect waves-teal lighten-3 btn"  id="btnFldClntAdr">Address Info.<i class="material-icons right">forward</i></a>                           
                                      <!-- <a class="btn-floating btn-large pulse" onclick="showHideTabSec()" ><i class="material-icons">zoom_out_map</i></a> -->
                                </div>  
                                
     
                             </div>
                  </form>
            </div>
   
   
   <ul class="collapsible popout hide"  id="AddrAccrSec">
   
   
   <li>
      <div class="collapsible-header" style="background: #4db6ac;color:#fff"><i class="material-icons">place</i>Address</div>
      <div class="collapsible-body">
             <!--  -->
                    <div id="test4">
                 
                 <!--  -->
                         <div class="row">
                         <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">home</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Residential Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                
                                <div class="input-field col s4">
                                   <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Singapore</option>
                                            <option value="">India</option>
                                  </select>
                                
                                    
                                  </div>
                           </div>
                           
                           <div class="input-field col s12">
                                       <div class="switch">
                                           <label><strong>No</strong> 
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                <strong>Same as Registered Residential Address</strong>
                                          </label>
                                       </div>
                           </div> 
                           
                           
                           
                           
                            <div class="row">
                                <!-- <div class="input-field col s8">
                                       <div class="switch">
                                           <label> No
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                Same as  Residential Address
                                          </label>
                                       </div>
                                </div> -->
                                
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">contact_mail</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Mailing Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                           <option value="">Singapore</option>
                                            <option value="">India</option>
                                        </select>
                               </div>
                        </div>
                           
                           <div class="row">
                                <!-- <div class="input-field col s12">
                                     <i class="material-icons prefix">contact_mail</i>
                                    <input id="first_name" type="text" class="validate"> 
                                     <label for="first_name">Mailing Address</label>   
                                </div> -->
                                
                                <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                           	<option value="">Singapore</option>
                                            <option value="">India</option>
                                        </select>
                                </div>   
    
                           </div>
                           
                           
                           <div class="row">
                           
                                <div class="input-field col s8">
                                     <i class="material-icons prefix">contact_phone</i>
                                       <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Corr. Address</label>
                                   <!--  <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Corr. Address</label>    --> 
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Singapore</option>
                                            <option value="">India</option>
                                        </select>
                               </div>
                                
                                
                           </div>
                    
                    
                           <div class="row">
                               
                              <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                              </div>   
    
                                
                            </div>
                         
                  </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
              <!--  -->
      </div>
    </li>
    
      <li>
		      <div class="collapsible-header" style="background: #4db6ac;color:#fff;"><i class="material-icons">phone</i>Contact</div>
		      <div class="collapsible-body">
             
              <div id="test6 show">
      
             <!--  -->
                         <div class="row">
                    <form class="col m12">
                    
                           <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">phone_iphone</i>
                                    <input id="phone" type="text" class="validate" data-length="10">
                                     <label for="first_name">Mobile No</label> 
                                </div>
                                
                                <div class="input-field col s6">
                                     <i class="material-icons prefix">phone</i>
                                     <input id="phone" type="text" class="validate" data-length="10">
                                      <label for="first_name">Home No</label> 
                                </div>
                                
                               
                           </div>
                           
                           
                           <div class="row">
                           
                                   <div class="input-field col s6">
                                    <i class="material-icons prefix">confirmation_number</i>
                                    <input id="phone" type="text" class="validate" data-length="10"> 
                                     <label for="first_name">Office No</label> 
                                  </div>
                           
                                  <div class="input-field col s6">
                                      <i class="material-icons prefix">print</i>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Fax</label> 
                                </div>
                           </div>
                           <div class="row">
                                
                                
                                <div class="input-field col s6">
                                      <i class="material-icons prefix">mail</i>
                                     <input id="email" type="email" class="validate" data-length="25">
                                      <label for="first_name">Email(p)</label> 
                                      <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email </span>
                                </div>
                                
                                <div class="input-field col s6">
                                     <i class="material-icons prefix">drafts</i>
                                    <input id="email" type="email" class="validate" data-length="25"> 
                                     <label for="first_name">Email(O)</label>
                                     <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email</span> 
                                     
                                </div>
                           </div>
                           
                           
                            
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div> 
            
      </div>
    </li>
    
    
    
    
    <li>
      <div class="collapsible-header" style="background: #4db6ac;color:#fff"><i class="material-icons">person_add</i>Emp Details</div>
      <div class="collapsible-body">
           
           <!--  -->
                 <div id="">
              
                 <!--  -->
                     <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s6">
                                     <select>
                                            <option value="" disabled selected>Emp.Status</option>
                                            <option value="">Active</option>
                                            <option value="">Retired</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s6">
                                    <select>
                                            <option value="" disabled selected>Emp.Category</option>
                                            <option value="">NRIC</option>
                                            <option value=""></option>
                                        </select>
                                </div>
                                
                                
                           </div>
                           
                           
                           
                           
                           <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin_circle</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Occupation</label>    
                                </div>
                                
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Employeer</label>    
                                </div>
                                
                                <div class="row">
                                
                                       <div class="input-field col s12">
                                     <i class="material-icons prefix">monetization_on</i>
                                    <input id="first_name" type="text" class="validate"> 
                                    <label for="first_name">Estd.Monthly Income</label>    
                                </div>
                                </div>
                                
                           </div>     
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
           <!--  -->
      
      </div>
    </li>
  </ul>
        
   
    <!-- </div> --><!-- card Content End -->
    
    <div class="card-panel z-depth-4 hide" id="ClntTabAddrSection">
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width teal darken-1"><!-- teal darken-3 --><!-- style="display: none; -->
          
          
  <!-- <li class="tab"><a class="waves-effect waves-light btn-large" href="#"><span class="white-text text-darken-2">Wave</span></a></li> -->
      
        <li class="tab"><a  class="white-text" href="#test6"><i class="material-icons">perm_phone_msg</i> Contact </a></li>
        <li class="tab"><a  class="active white-text" href="#test4"><i class="material-icons">add_location</i> Address</a></li>
        <li class="tab"><a  class="white-text" href="#test5"><i class="material-icons">person_add</i> Emp Details</a></li>
      </ul>
    </div>
    
    <div class="card-content ">
      <div id="test4">
                 
                 <!--  -->
                         <div class="row">
                         <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">home</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Residential Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                
                                <div class="input-field col s4">
                                   <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                  </select>
                                
                                    
                                  </div>
                           </div>
                           
                           <div class="input-field col s12">
                                       <div class="switch">
                                           <label><strong>No</strong> 
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                <strong>Same as Registered Residential Address</strong>
                                          </label>
                                       </div>
                           </div> 
                           
                           
                           
                           
                            <div class="row">
                                <!-- <div class="input-field col s8">
                                       <div class="switch">
                                           <label> No
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                Same as  Residential Address
                                          </label>
                                       </div>
                                </div> -->
                                
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">contact_mail</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Mailing Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                        </div>
                           
                           <div class="row">
                                <!-- <div class="input-field col s12">
                                     <i class="material-icons prefix">contact_mail</i>
                                    <input id="first_name" type="text" class="validate"> 
                                     <label for="first_name">Mailing Address</label>   
                                </div> -->
                                
                                <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>   
    
                           </div>
                           
                           
                           <div class="row">
                           
                                <div class="input-field col s8">
                                     <i class="material-icons prefix">contact_phone</i>
                                       <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Corr. Address</label>
                                   <!--  <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Corr. Address</label>    --> 
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                                
                                
                           </div>
                    
                    
                           <div class="row">
                               
                              <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                              </div>   
    
                                
                            </div>
                         
                  </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
      
      <div id="test5">
              
                 <!--  -->
                     <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s3">
                                     <select>
                                            <option value="" disabled selected>Emp.Status</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Emp.Category</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s5">
                                     <i class="material-icons prefix">monetization_on</i>
                                    <input id="first_name" type="text" class="validate"> 
                                    <label for="first_name">Estd.Monthly Income</label>    
                                </div>
                           </div>
                           
                           
                           <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin_circle</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Occupation</label>    
                                </div>
                                
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Employeer</label>    
                                </div>
                                
                           </div>     
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
      
      <div id="test6">
      
             <!--  -->
                         <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s4">
                                    <i class="material-icons prefix">phone_iphone</i>
                                    <input id="phone" type="text" class="validate" data-length="10">
                                     <label for="first_name">Mobile No</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                     <i class="material-icons prefix">phone</i>
                                     <input id="phone" type="text" class="validate" data-length="10">
                                      <label for="first_name">Home No</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                    <i class="material-icons prefix">confirmation_number</i>
                                    <input id="phone" type="text" class="validate" data-length="10"> 
                                     <label for="first_name">Office No</label> 
                                </div>
                           </div>
                           
                           <div class="row">
                                <div class="input-field col s4">
                                      <i class="material-icons prefix">print</i>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Fax</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                      <i class="material-icons prefix">mail</i>
                                     <input id="email" type="email" class="validate" data-length="25">
                                      <label for="first_name">Email(p)</label> 
                                      <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email </span>
                                </div>
                                
                                <div class="input-field col s4">
                                     <i class="material-icons prefix">drafts</i>
                                    <input id="email" type="email" class="validate" data-length="25"> 
                                     <label for="first_name">Email(O)</label>
                                     <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email</span> 
                                     
                                </div>
                           </div>
                           
                           
                            
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
      
    </div>
    
    </div><!--collapse content end here  -->
    
    
    </div><!-- card-content end -->
    
  </div>
  </div>
  
  <!--self/client section end here  -->
  
  
          
     <!-- Spouse Section Start -->     
                  
    <div class="col m4">
               <div class="card hoverable z-depth-5">
                    <div class="card-panel teal lighten-2"><span class="white-text">Spouse Details</span></div>
               <!--  -->
          <div class="card-content" style="height :100px;"><!--grey lighten-5 z-depth-1  -->
              <div class="row "><!-- valign-wrapper z-depth-5 hoverable grey lighten-5 -->
              <div class="col s2">
              <img src="images/client.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class=" col s10">
              <!-- <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span> -->
              <!-- <input id="first_name" type="text" class="validate" placeholder="Name (as per NRIC)">  -->
              
               <div class="row">
               
                         <div class=" input-field col s12">
                                 <!-- <i class="material-icons prefix">account_circle</i> -->
                                 <input  id="txtFldClntName" type="text" class="validate">
                                 <label for="txtFldClntName">Name (as per NRIC)</label>
                         </div>
                         
                        <!--  <div class=" input-field col s3">
                                 <i class="material-icons prefix">spellcheck</i>
                                <input  id="age" type="text" class="validate" data-length="3">
                                <label for="">Age</label>
                         </div>-->
                
               </div>
               
              <!--  <div class="row">
               
                         <div class=" input-field col s3">
                                 <input  id="txtFldClntName" type="text" class="validate">
                                 <label for="txtFldClntName">Name</label>
                         </div>
                         
                         <div class=" input-field col s3">
                                <input  id="" type="text" class="validate">
                                <label for="">Age</label>
                         </div>
                         
                         <div class=" input-field col s3">
                                <input  id="" type="text" class="validate">
                                <label for="">Age</label>
                         </div>
                         
                         <div class=" input-field col s3">
                                <input  id="" type="text" class="validate">
                                <label for="">Age</label>
                         </div>
               </div> -->
               
               
                <!-- <div class=" input-field col s7"></div>
               <input placeholder="Placeholder" id="first_name" type="text" class="validate">
               <label for="first_name">Name (as per NRIC)</label> -->
            </div>
          </div>
        </div>
               <!--  -->
               
               
                   <div class="card-content hoverable"><!-- z-depth-4   -->
                   
                  <!--  <a class="btn-floating btn-large pulse"><i class="material-icons">cloud</i></a> -->
                   
                 <div class="row">
                    <form class="col s12">
                    
                           <!-- <div class="row">
                                <div class="input-field col s12">
                                    <input id="first_name" type="text" class="validate" placeholder="Name (as per NRIC)"> 
                                </div>
                           </div> -->
                    
                           <div class="row">
                               
                                <div class="input-field col s3">
                                        <!--  <i class="material-icons prefix">date_range</i> -->
                                       <input type="text" class="datepicker validate" id="first_name"  >
                                       <label for="first_name">DOB</label> 
                                </div>
                               
                                <div class=" input-field col s2">
                                 <!-- <i class="material-icons prefix">spellcheck</i -->
                                <input  id="age" type="text" class="validate" data-length="3">
                                <label for="">Age</label>
                                </div>
                                
                                  <div class="input-field col s4">
                                <!--  <i class="material-icons prefix">euro_symbol</i> -->
                                      <input type="text" class="validate" id="first_name" >
                                       <label for="first_name">NRIC</label>   
                                </div>
                                
                                 <div class="input-field col s3">  
                                     <!--  <i class="material-icons prefix">wc</i>  -->                        
                                    <label> Gender</label> <br> <br>
 
                                   <p>
                                   <label>
                                      <input name="group1" type="radio" />
                                      <span>Male</span>
                                    </label>
                                    <br>
                                    <label>
                                      <input name="group1" type="radio" />
                                      <span>Female</span>
                                    </label>
                                    </p>
                                 </div>
                         
                                <!--  <div class="input-field col s4">
                                       <input type="text" class="validate" id="first_name" >
                                       <label for="first_name">Age</label> 
                                </div> -->
                                
                               <!--   <div class="input-field col s4">
                                        <select>
                                            <option value="" disabled selected>Gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                 </div>   -->
    
                               <!-- <div class=" input-field col s3">
                                 <i class="material-icons prefix">spellcheck</i>
                                <input  id="age" type="text" class="validate" data-length="3">
                                <label for="">Age</label><</div>
     -->
                          <!--    <div class="input-field col s4">  
                              <i class="material-icons prefix">wc</i>                         
                                 <label> Gender</label> <br> <br>
 
                                   <p>
                                   <label>
                                      <input name="group1" type="radio" />
                                      <span>Male</span>
                                    </label>
                                    
                                    <label>
                                      <input name="group1" type="radio" />
                                      <span>Female</span>
                                    </label>
                                    </p>
                                 </div>  -->    
                            </div>
                             
                             
                             <div class="row">
                               
                                    <!-- <div class="input-field col s2">  
                                      <i class="material-icons prefix">wc</i>                         
                                    <label> Gender</label> <br> <br>
 
                                   <p>
                                   <label>
                                      <input name="group1" type="radio" />
                                      <span>Male</span>
                                    </label>
                                    <br>
                                    <label>
                                      <input name="group1" type="radio" />
                                      <span>Female</span>
                                    </label>
                                    </p>
                                 </div> -->
                                 
                                 
                                 <div class="input-field col s4">
                                        <select>
                                            <option value="" disabled selected>Marital Status</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                
                                 <div class="input-field col s4">
                                        <select>
                                            <option value="" disabled selected>Nationality</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                 </div>
                                 
                                 
                                 
                                 
                                 
                                 <div class="input-field col s4">
                                 <!-- Address & Other INfo. width:180px;  -->
                                  <a class="waves-effect waves-teal lighten-3 btn"  id="btnFldSpsAdr">Address INfo.<i class="material-icons right">forward</i></a>                           
                                      <!-- <a class="btn-floating btn-large pulse" onclick="showHideTabSec()" ><i class="material-icons">zoom_out_map</i></a> -->
                                </div>  
                                
     
                             </div>
                  </form>
            </div>
   
   
   
   
   
   <ul class="collapsible popout hide" style="width: 382px;" id="AddrAccrSpouseSec">
      <li>
		      <div class="collapsible-header" style="background: #4db6ac;"><i class="material-icons">phone</i>Contact</div>
		      <div class="collapsible-body">
             
              <div id="test6 show">
      
             <!--  -->
                         <div class="row">
                    <form class="col m12">
                    
                           <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">phone_iphone</i>
                                    <input id="phone" type="text" class="validate" data-length="10">
                                     <label for="first_name">Mobile No</label> 
                                </div>
                                
                                <div class="input-field col s6">
                                     <i class="material-icons prefix">phone</i>
                                     <input id="phone" type="text" class="validate" data-length="10">
                                      <label for="first_name">Home No</label> 
                                </div>
                                
                               
                           </div>
                           
                           
                           <div class="row">
                           
                                   <div class="input-field col s6">
                                    <i class="material-icons prefix">confirmation_number</i>
                                    <input id="phone" type="text" class="validate" data-length="10"> 
                                     <label for="first_name">Office No</label> 
                                  </div>
                           
                                  <div class="input-field col s6">
                                      <i class="material-icons prefix">print</i>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Fax</label> 
                                </div>
                           </div>
                           <div class="row">
                                
                                
                                <div class="input-field col s6">
                                      <i class="material-icons prefix">mail</i>
                                     <input id="email" type="email" class="validate" data-length="25">
                                      <label for="first_name">Email(p)</label> 
                                      <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email </span>
                                </div>
                                
                                <div class="input-field col s6">
                                     <i class="material-icons prefix">drafts</i>
                                    <input id="email" type="email" class="validate" data-length="25"> 
                                     <label for="first_name">Email(O)</label>
                                     <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email</span> 
                                     
                                </div>
                           </div>
                           
                           
                            
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div> 
            
      </div>
    </li>
    
    <li>
      <div class="collapsible-header" style="background: #4db6ac;"><i class="material-icons">place</i>Address</div>
      <div class="collapsible-body">
             <!--  -->
                    <div id="test4">
                 
                 <!--  -->
                         <div class="row">
                         <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">home</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Residential Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                
                                <div class="input-field col s4">
                                   <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                  </select>
                                
                                    
                                  </div>
                           </div>
                           
                           <div class="input-field col s12">
                                       <div class="switch">
                                           <label><strong>No</strong> 
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                <strong>Same as Registered Residential Address</strong>
                                          </label>
                                       </div>
                           </div> 
                           
                           
                           
                           
                            <div class="row">
                                <!-- <div class="input-field col s8">
                                       <div class="switch">
                                           <label> No
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                Same as  Residential Address
                                          </label>
                                       </div>
                                </div> -->
                                
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">contact_mail</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Mailing Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                        </div>
                           
                           <div class="row">
                                <!-- <div class="input-field col s12">
                                     <i class="material-icons prefix">contact_mail</i>
                                    <input id="first_name" type="text" class="validate"> 
                                     <label for="first_name">Mailing Address</label>   
                                </div> -->
                                
                                <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>   
    
                           </div>
                           
                           
                           <div class="row">
                           
                                <div class="input-field col s8">
                                     <i class="material-icons prefix">contact_phone</i>
                                       <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Corr. Address</label>
                                   <!--  <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Corr. Address</label>    --> 
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                                
                                
                           </div>
                    
                    
                           <div class="row">
                               
                              <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                              </div>   
    
                                
                            </div>
                         
                  </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
              <!--  -->
      </div>
    </li>
    
    
    <li>
      <div class="collapsible-header" style="background: #4db6ac;"><i class="material-icons">person_add</i>Emp Details</div>
      <div class="collapsible-body">
           
           <!--  -->
                 <div id="">
              
                 <!--  -->
                     <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s6">
                                     <select>
                                            <option value="" disabled selected>Emp.Status</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s6">
                                    <select>
                                            <option value="" disabled selected>Emp.Category</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                
                           </div>
                           
                           
                           
                           
                           <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin_circle</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Occupation</label>    
                                </div>
                                
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Employeer</label>    
                                </div>
                                
                                <div class="row">
                                
                                       <div class="input-field col s12">
                                     <i class="material-icons prefix">monetization_on</i>
                                    <input id="first_name" type="text" class="validate"> 
                                    <label for="first_name">Estd.Monthly Income</label>    
                                </div>
                                </div>
                                
                           </div>     
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
           <!--  -->
      
      </div>
    </li>
  </ul>
        
   
    <!-- </div> --><!-- card Content End -->
    
    <div class="card-panel z-depth-4 hide" id="SpsTabAddrSection">
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width teal darken-1"><!-- teal darken-3 --><!-- style="display: none; -->
          
          
  <!-- <li class="tab"><a class="waves-effect waves-light btn-large" href="#"><span class="white-text text-darken-2">Wave</span></a></li> -->
      
        <li class="tab"><a  class="white-text" href="#test7"><i class="material-icons">perm_phone_msg</i> Contact </a></li>
        <li class="tab"><a  class="active white-text" href="#test8"><i class="material-icons">add_location</i> Address</a></li>
        <li class="tab"><a  class="white-text" href="#test9"><i class="material-icons">person_add</i> Emp Details</a></li>
      </ul>
    </div>
    
    <div class="card-content ">
      <div id="test8">
                 
                 <!--  -->
                         <div class="row">
                         <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">home</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Residential Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                
                                <div class="input-field col s4">
                                   <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                  </select>
                                
                                    
                                  </div>
                           </div>
                           
                           <div class="input-field col s12">
                                       <div class="switch">
                                           <label><strong>No</strong> 
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                <strong>Same as Registered Residential Address</strong>
                                          </label>
                                       </div>
                           </div> 
                           
                           
                           
                           
                            <div class="row">
                                <!-- <div class="input-field col s8">
                                       <div class="switch">
                                           <label> No
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                Same as  Residential Address
                                          </label>
                                       </div>
                                </div> -->
                                
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">contact_mail</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Mailing Address</label>
                                      <!-- 
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>    -->
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                        </div>
                           
                           <div class="row">
                                <!-- <div class="input-field col s12">
                                     <i class="material-icons prefix">contact_mail</i>
                                    <input id="first_name" type="text" class="validate"> 
                                     <label for="first_name">Mailing Address</label>   
                                </div> -->
                                
                                <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>   
    
                           </div>
                           
                           
                           <div class="row">
                           
                                <div class="input-field col s8">
                                     <i class="material-icons prefix">contact_phone</i>
                                       <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Corr. Address</label>
                                   <!--  <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Corr. Address</label>    --> 
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                                
                                
                           </div>
                    
                    
                           <div class="row">
                               
                              <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                              </div>   
    
                                
                            </div>
                         
                  </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
      
      <div id="test9">
              
                 <!--  -->
                     <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s3">
                                     <select>
                                            <option value="" disabled selected>Emp.Status</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Emp.Category</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s5">
                                     <i class="material-icons prefix">monetization_on</i>
                                    <input id="first_name" type="text" class="validate"> 
                                    <label for="first_name">Estd.Monthly Income</label>    
                                </div>
                           </div>
                           
                           
                           <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin_circle</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Occupation</label>    
                                </div>
                                
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Employeer</label>    
                                </div>
                                
                           </div>     
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
      
      <div id="test7">
      
             <!--  -->
                         <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s4">
                                    <i class="material-icons prefix">phone_iphone</i>
                                    <input id="phone" type="text" class="validate" data-length="10">
                                     <label for="first_name">Mobile No</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                     <i class="material-icons prefix">phone</i>
                                     <input id="phone" type="text" class="validate" data-length="10">
                                      <label for="first_name">Home No</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                    <i class="material-icons prefix">confirmation_number</i>
                                    <input id="phone" type="text" class="validate" data-length="10"> 
                                     <label for="first_name">Office No</label> 
                                </div>
                           </div>
                           
                           <div class="row">
                                <div class="input-field col s4">
                                      <i class="material-icons prefix">print</i>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Fax</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                      <i class="material-icons prefix">mail</i>
                                     <input id="email" type="email" class="validate" data-length="25">
                                      <label for="first_name">Email(p)</label> 
                                      <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email </span>
                                </div>
                                
                                <div class="input-field col s4">
                                     <i class="material-icons prefix">drafts</i>
                                    <input id="email" type="email" class="validate" data-length="25"> 
                                     <label for="first_name">Email(O)</label>
                                     <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email</span> 
                                     
                                </div>
                           </div>
                           
                           
                            
                      </form>
            </div>
   
                 
                 <!--  -->
      
      </div>
      
    </div>
    
    </div><!--collapse content end here  -->
    
    
    </div><!-- card-content end -->
    
  </div>
  </div>
 
 <!-- Spouse Section End here -->
 
 
 <!-- Children Section Start -->     
       
       
       <div class="col m4">
           <div class="card hoverable z-depth-5">
                    <div class="card-panel teal lighten-2" style="height: 11vh;">
                  
                 <div class="row "> <!-- valign-wrapper z-depth-5 hoverable grey lighten-5 -->
					              <div class="col s6">
					              <span class="white-text">Children Details</span><br>
					              <span class="new badge blue left" style="margin-left: 0px;" id="childCount"> 1 child added</span>
					            </div>
					            <div class=" col s4">
					                 <a class="btn-floating btn waves-effect waves-light teal accent-3 secondary-content" style="margin-right: -70px;" onclick="addChild()" title="Add Children Details"><i class="material-icons">add</i></a>
					            </div>
             </div> 
                 
                 
                  
                   </div>
           
               <ul class="collapsible"  id="divChldDetls">
                    <li class="show" id="child1Show">
							    <div class="collapsible-header">
							    
							    <div class="row">
							          <div class="col s2"><a class="btn-floating btn waves-effect waves-light teal " onclick="addChild()"><i class="material-icons">person</i></a></div>
							           <div class="col s4"><span>Child 1</span> </div>
							           <div class="col s2"></div>
							            <div class="col s2">
							             <span><a class="btn-floating small  waves-effect waves-light blue" style="margin-left: 25px;" title="Edit Child 1 Details" id="editChild1"><i class="material-icons">edit</i></a></span></div>
							           <div class="col s2">
							           
							           <span><a class="btn-floating small waves-effect waves-light orange" style="margin-right:140px ;"title="Delete Child 1 Details" id="deleteChild1"><i class="material-icons">delete_forever</i></a></span></div>
							    
							    </div>
							 </div>
				      
				            <div class="collapsible-body">
				            
				                   <div class="">
				                         <div class="">
				                               <!--card-content -->
				                                  <div class="row">
														    <form class="col s12">
														      <div class="row">
														        <div class="input-field col s9">
														          <input  id="txtFldChldName" type="text" class="validate" value="TestChild">
														          <label for="first_name">Name of Child</label>
														        </div>
														       <div class="input-field col s3">
														          <input id="txtFldAge" type="text" class="validate" value="18">
														          <label for="last_name">Age</label>
														        </div> 
														      </div>
														      <div class="row">
														       <div class="input-field col s4">
														          <input id="txtFldDob" type="text" class="datepicker validate" value="5 june 2020">
														          <label for="last_name">DOB</label>
														          <span class="helper-text">Format:MM-DD-YYY</span>
														        </div>
														        
														       <div class="input-field col s4">
														         <label> Gender</label> <br> <br>
 
									                                   <p>
									                                   <label>
									                                      <input name="group1" type="radio" checked/>
									                                      <span>Male</span>
									                                    </label>
									                                   
									                                    <label>
									                                      <input name="group1" type="radio" />
									                                      <span>Female</span>
									                                    </label>
									                                    </p>
														        </div>
														        
														        <div class="input-field col s4">
														          <label>Relationship</label> <br> <br>
 
									                                   <p>
									                                   <label>
									                                      <input name="group2" type="radio" checked />
									                                      <span>Son</span>
									                                    </label>
									                                    <br>
									                                    <label>
									                                      <input name="group2" type="radio" />
									                                      <span>Daughter</span>
									                                    </label>
									                                    </p>
														        </div>
														        
														      </div>
														      
														   <div class="row">
														      														        
														        <div class="input-field col s4">
														          <input id= "txtFldYrs" type="text" class="validate" value="25">
														          <label for="password">Yrs to Tertiary</label>
														        </div>
														        
														        <div class="input-field col s8">
														          <input id="txtFldAnnCostEdn" type="text" class="validate" value="$.9689565454">
														          <label for="password">Esd.Annual cost of Tertiary Edn.</label>
														        </div>
														      </div>
														      
														        <div class="row">
														        <div class="input-field col s8">
														          <input id="txtFldAvilFundEdn" type="text" class="validate" value="$.67876876.00">
														          <label for="password">Available Edn.Fund Provided</label>
														        </div>
														        
														        <div class="input-field col s4">
														          <input id="txtFldYrToEdn" type="text" class="validate" value="45">
														          <label for="password">Yrs to Tertiary Edn.</label>
														        </div>
														      </div>
														      
														      <div class="row">
															        <div class="input-field col s12">
															          <textarea id="tetFldRemaks" class="materialize-textarea">verify child 1 details...</textarea>
                                                                      <label for="textarea1">Remarks</label>
															        </div>
														      </div>
														      
														       <div class="row">
														      <div class="input-field col s4"><a class="waves-effect waves-light btn hide" id="btnAddChld1"><i class="material-icons right">add</i>Add</a></div>
														      
														    <div class="input-field col s8"> <a class="waves-effect waves-light btn blue" id="btnEditChld1"><i class="material-icons right">edit</i>confirm Edit</a></div>
														      </div>
														</form>
														  </div>
        
				                               <!--  -->
				                   		</div>
				                   
				                   </div>
				            
				            </div>
                   </li> 
                   
                   <li class="hide" id="child2Show">
							    <div class="collapsible-header">
							    
							    <div class="row">
							          <div class="col s2"><a class="btn-floating btn waves-effect waves-light teal " onclick="addChild()"><i class="material-icons">person</i></a></div>
							           <div class="col s4"><span>Child 2</span> </div>
							           <div class="col s2"></div>
							            <div class="col s2">
							             <span><a class="btn-floating small  waves-effect waves-light blue " style="margin-left: 25px;" id="editChild2" title="Edit Child 2 Details"><i class="material-icons">edit</i></a></span></div>
							           <div class="col s2">
							           
							           <span><a class="btn-floating small waves-effect waves-light orange" style="margin-right:140px;" id="deleteChild2"title="Delete Child 2 Details"><i class="material-icons">delete_forever</i></a></span></div>
							    
							    </div>
							 </div>
				      
				            <div class="collapsible-body">
				            
				                   <div class="">
				                         <div class="">
				                               <!--card-content -->
				                                  <div class="row">
														    <form class="col s12">
														      <div class="row">
														        <div class="input-field col s9">
														          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
														          <label for="first_name">Name of Child</label>
														        </div>
														       <div class="input-field col s3">
														          <input id="last_name" type="text" class="validate">
														          <label for="last_name">Age</label>
														        </div> 
														      </div>
														      <div class="row">
														       <div class="input-field col s4">
														          <input id="last_name" type="text" class="datepicker validate">
														          <label for="last_name">DOB</label>
														        </div>
														        
														       <div class="input-field col s4">
														         <label> Gender</label> <br> <br>
 
									                                   <p>
									                                   <label>
									                                      <input name="group1" type="radio" />
									                                      <span>Male</span>
									                                    </label>
									                                   
									                                    <label>
									                                      <input name="group1" type="radio" />
									                                      <span>Female</span>
									                                    </label>
									                                    </p>
														        </div>
														        
														        <div class="input-field col s4">
														          <label>Relationship</label> <br> <br>
 
									                                   <p>
									                                   <label>
									                                      <input name="group2" type="radio" />
									                                      <span>Son</span>
									                                    </label>
									                                    <br>
									                                    <label>
									                                      <input name="group2" type="radio" />
									                                      <span>Daughter</span>
									                                    </label>
									                                    </p>
														        </div>
														        
														      </div>
														      
														   <div class="row">
														      														        
														        <div class="input-field col s4">
														          <input id="password" type="text" class="validate">
														          <label for="password">Yrs to Tertiary</label>
														        </div>
														        
														        <div class="input-field col s8">
														          <input id="password" type="text" class="validate">
														          <label for="password">Esd.Annual cost of Tertiary Edn.</label>
														        </div>
														      </div>
														      
														        <div class="row">
														        <div class="input-field col s8">
														          <input id="password" type="text" class="validate">
														          <label for="password">Available Edn.Fund Provided</label>
														        </div>
														        
														        <div class="input-field col s4">
														          <input id="password" type="text" class="validate">
														          <label for="password">Yrs to Tertiary Edn.</label>
														        </div>
														      </div>
														      
														      <div class="row">
															        <div class="input-field col s12">
															          <textarea id="textarea1" class="materialize-textarea"></textarea>
                                                                      <label for="textarea1">Remarks</label>
															        </div>
														      </div>
														      
														      <div class="row">
														      <div class="input-field col s4"><a class="waves-effect waves-light btn " id="btnAddChld2"><i class="material-icons right">add</i>Add</a></div>
														      
														    <div class="input-field col s8"> <a class="waves-effect waves-light btn blue hide" id="btnEditChld2"><i class="material-icons right">edit</i>confirm Edit</a></div>
														      </div>
														</form>
														  </div>
        
				                               <!--  -->
				                   		</div>
				                   
				                   </div>
				            
				            </div>
                   </li> 
               
                 
               
                
                 
               
               
  
  
</ul>  
  </div>
  </div>
            
   <!-- <div class="col m4">
                          
      <div class="card horizontal">
      <div class="card-image">
        <img src="images/nature.jpeg">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>  -->
    
   <!--  <div class="card">
    
         <div class="card-content">
         
                <ul class="collapsible popout">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>Contact Details</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                            <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s4">
                                    <i class="material-icons prefix">phone_iphone</i>
                                    <input id="phone" type="text" class="validate" data-length="10">
                                     <label for="first_name">Mobile No</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                     <i class="material-icons prefix">phone</i>
                                     <input id="phone" type="text" class="validate" data-length="10">
                                      <label for="first_name">Home No</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                    <i class="material-icons prefix">confirmation_number</i>
                                    <input id="phone" type="text" class="validate" data-length="10"> 
                                     <label for="first_name">Office No</label> 
                                </div>
                           </div>
                           
                           <div class="row">
                                <div class="input-field col s4">
                                      <i class="material-icons prefix">print</i>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Fax</label> 
                                </div>
                                
                                <div class="input-field col s4">
                                      <i class="material-icons prefix">mail</i>
                                     <input id="email" type="email" class="validate" data-length="25">
                                      <label for="first_name">Email(p)</label> 
                                      <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email </span>
                                </div>
                                
                                <div class="input-field col s4">
                                     <i class="material-icons prefix">drafts</i>
                                    <input id="email" type="email" class="validate" data-length="25"> 
                                     <label for="first_name">Email(O)</label>
                                     <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email</span> 
                                     
                                </div>
                           </div>
                           
                           
                            
                      </form>
            </div>
      
      
      </div>
    </li>
    
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Address Details</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                     <div class="row">
                         <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">home</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Residential Address</label>
                                      
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>   
                                </div>
                                
                                
                                <div class="input-field col s4">
                                   <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                  </select>
                                
                                    
                                  </div>
                           </div>
                           
                           <div class="input-field col s12">
                                       <div class="switch">
                                           <label><strong>No</strong> 
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                <strong>Same as Registered Residential Address</strong>
                                          </label>
                                       </div>
                           </div> 
                           
                           
                           
                           
                            <div class="row">
                                <div class="input-field col s8">
                                       <div class="switch">
                                           <label> No
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                Same as  Residential Address
                                          </label>
                                       </div>
                                </div>
                                
                                <div class="input-field col s8">
                                      <i class="material-icons prefix">contact_mail</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Mailing Address</label>
                                      
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>   
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                        </div>
                           
                           <div class="row">
                                <div class="input-field col s12">
                                     <i class="material-icons prefix">contact_mail</i>
                                    <input id="first_name" type="text" class="validate"> 
                                     <label for="first_name">Mailing Address</label>   
                                </div>
                                
                                <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>   
    
                           </div>
                           
                           
                           <div class="row">
                           
                                <div class="input-field col s8">
                                     <i class="material-icons prefix">contact_phone</i>
                                       <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Corr. Address</label>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Corr. Address</label>    
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                                
                                
                           </div>
                    
                    
                           <div class="row">
                               
                              <div class="input-field col s12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                              </div>   
    
                                
                            </div>
                         
                  </form>
            </div>
      
      </div>
    </li>
    
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i> emp detls</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                 <div class="row">
                    <form class="col s12">
                    
                           <div class="row">
                                <div class="input-field col s3">
                                     <select>
                                            <option value="" disabled selected>Emp.Status</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s4">
                                    <select>
                                            <option value="" disabled selected>Emp.Category</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col s5">
                                     <i class="material-icons prefix">monetization_on</i>
                                    <input id="first_name" type="text" class="validate"> 
                                    <label for="first_name">Estd.Monthly Income</label>    
                                </div>
                           </div>
                           
                           
                           <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin_circle</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Occupation</label>    
                                </div>
                                
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">person_pin</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Employeer</label>    
                                </div>
                                
                           </div>     
                      </form>
            </div>   
         
      
      </div>
    </li>
  </ul>
        
         
         
         </div>
    
    </div> -->
                  
 </div> 
 
 <!-- Children Section End here -->
            
            </div>
    
    <!-- </div> -->
    
    <!-- modal-address -->
            <!-- Modal Trigger -->
  <!-- <a class="waves-effect waves-light btn modal-trigger" data-backdrop="static" href="#modal11">Modal</a> -->

  <!-- Modal Structure -->
  <!-- <div id="modal11" class="modal modal-fixed-footer">
        <div class="modal-header">
            <div class="card-panel teal z-depth-5">Address & Other Info</div>
        </div>
  
    <div class="modal-content" style="overflow : scroll;">
    
             <div class="card-panel z-depth-4 " id="ClntTabAddrSection">
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width teal darken-1">teal darken-3 --><!-- style="display: none;
          
          
  <li class="tab"><a class="waves-effect waves-light btn-large" href="#"><span class="white-text text-darken-2">Wave</span></a></li>
      
        <li class="tab"><a  class="white-text" href="#tab1"><i class="material-icons">perm_phone_msg</i> Contact </a></li>
        <li class="tab"><a  class="active white-text" href="#tab2"><i class="material-icons">add_location</i> Address</a></li>
        <li class="tab"><a  class="white-text" href="#tab3"><i class="material-icons">person_add</i> Emp Details</a></li>
      </ul>
    </div>
    
    <div class="card-content ">
      <div id="tab2">
                 
                 
                         <div class="row">
                         <form class="col m12">
                    
                           <div class="row">
                                <div class="input-field col m8">
                                      <i class="material-icons prefix">home</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Residential Address</label>
                                      
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>   
                                </div>
                                
                                
                                <div class="input-field col m4">
                                   <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                  </select>
                                
                                    
                                  </div>
                           </div>
                           
                           <div class="input-field col m12">
                                       <div class="switch">
                                           <label><strong>No</strong> 
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                <strong>Same as Registered Residential Address</strong>
                                          </label>
                                       </div>
                           </div> 
                           
                           
                           
                           
                            <div class="row">
                                <div class="input-field col s8">
                                       <div class="switch">
                                           <label> No
                                               <input type="checkbox">
                                               <span class="lever"></span>
                                                Same as  Residential Address
                                          </label>
                                       </div>
                                </div>
                                
                                <div class="input-field col m8">
                                      <i class="material-icons prefix">contact_mail</i>
                                      
                                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Mailing Address</label>
                                      
                                    <input id="first_name" type="text" class="validate" > placeholder="Residential Address"
                                     <label for="first_name">Residential Address</label>   
                                </div>
                                
                                <div class="input-field col m4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                        </div>
                           
                           <div class="row">
                                <div class="input-field col s12">
                                     <i class="material-icons prefix">contact_mail</i>
                                    <input id="first_name" type="text" class="validate"> 
                                     <label for="first_name">Mailing Address</label>   
                                </div>
                                
                                <div class="input-field col m12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>   
    
                           </div>
                           
                           
                           <div class="row">
                           
                                <div class="input-field col m8">
                                     <i class="material-icons prefix">contact_phone</i>
                                       <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Corr. Address</label>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Corr. Address</label>    
                                </div>
                                
                                <div class="input-field col m4">
                                    <select>
                                            <option value="" disabled selected>Country</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                               </div>
                                
                                
                           </div>
                    
                    
                           <div class="row">
                               
                              <div class="input-field col m12">
                                        <select>
                                            <option value="" disabled selected>Reason for different mailing Address</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                              </div>   
    
                                
                            </div>
                         
                  </form>
            </div>
   
                 
                 
      
      </div>
      
      <div id="tab3">
              
                 
                     <div class="row">
                    <form class="col m12">
                    
                           <div class="row">
                                <div class="input-field col m3">
                                     <select>
                                            <option value="" disabled selected>Emp.Status</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col m4">
                                    <select>
                                            <option value="" disabled selected>Emp.Category</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                </div>
                                
                                <div class="input-field col m5">
                                     <i class="material-icons prefix">monetization_on</i>
                                    <input id="first_name" type="text" class="validate"> 
                                    <label for="first_name">Estd.Monthly Income</label>    
                                </div>
                           </div>
                           
                           
                           <div class="row">
                                <div class="input-field col m6">
                                    <i class="material-icons prefix">person_pin_circle</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Occupation</label>    
                                </div>
                                
                                <div class="input-field col m6">
                                    <i class="material-icons prefix">person_pin</i>
                                    <input id="first_name" type="text" class="validate" > 
                                    <label for="first_name">Employeer</label>    
                                </div>
                                
                           </div>     
                      </form>
            </div>
   
                 
                 
      
      </div>
      
      <div id="tab1">
      
             
                         <div class="row">
                    <form class="col m12">
                    
                           <div class="row">
                                <div class="input-field col m4">
                                    <i class="material-icons prefix">phone_iphone</i>
                                    <input id="phone" type="text" class="validate" data-length="10">
                                     <label for="first_name">Mobile No</label> 
                                </div>
                                
                                <div class="input-field col m4">
                                     <i class="material-icons prefix">phone</i>
                                     <input id="phone" type="text" class="validate" data-length="10">
                                      <label for="first_name">Home No</label> 
                                </div>
                                
                                <div class="input-field col m4">
                                    <i class="material-icons prefix">confirmation_number</i>
                                    <input id="phone" type="text" class="validate" data-length="10"> 
                                     <label for="first_name">Office No</label> 
                                </div>
                           </div>
                           
                           <div class="row">
                                <div class="input-field col m4">
                                      <i class="material-icons prefix">print</i>
                                    <input id="first_name" type="text" class="validate">
                                     <label for="first_name">Fax</label> 
                                </div>
                                
                                <div class="input-field col m4">
                                      <i class="material-icons prefix">mail</i>
                                     <input id="email" type="email" class="validate" data-length="25">
                                      <label for="first_name">Email(p)</label> 
                                      <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email </span>
                                </div>
                                
                                <div class="input-field col m4">
                                     <i class="material-icons prefix">drafts</i>
                                    <input id="email" type="email" class="validate" data-length="25"> 
                                     <label for="first_name">Email(O)</label>
                                     <span class="helper-text" data-error="Error" data-success="Ok">Enter Valid Email</span> 
                                     
                                </div>
                           </div>
                           
                           
                            
                      </form>
            </div>
   
                 
                 
      
      </div>
      
    </div>
    
    </div>collapse content end here      
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat teal">Ok</a>
    </div>
  </div> -->
          
      <!--modal address end  -->       
  </body>
  <script type="text/javascript" src="jsp/fipa/Materialize/jquery.min.js"></script>
   <!--JavaScript at end of body for optimized loading-->
   <script type="text/javascript" src="jsp/fipa/Materialize/materialize.min.js"></script>
   <!--Customized script File  --> 
   <script type="text/javascript" src="jsp/fipa/Materialize/scripts.js"></script>
     
   <script>
   
    $(function(){
    	
        $('select').formSelect();
	    
	    $('.tabs').tabs();
	    
	    $('.collapsible').collapsible();
	     
	    $('input#age,input#email,input#phone').characterCounter();
	    
	    //$('.datepicker').datepicker();
	    
	    
	    $('.collapsible').collapsible();
	    
	    $('.modal').modal();
	    
	    //Show and hide client card address Tab Sections.
	    $("#btnFldClntAdr").click(function(){
	    	$("#AddrAccrSec").toggleClass("show hide");
	    });
	    
	   //Show and hide Spouse card address Tab Sections.
	    $("#btnFldSpsAdr").click(function(){
	    	$("#AddrAccrSpouseSec").removeClass("hide").addClass("show");
	    });
	   
	   
	    
	   
 });
    
    function addChild(){
    	
    	 $('#child2Show').removeClass("hide").addClass("show"); 
    	 $("#childCount").text("2 Childs added");
      }
    
    $("#deleteChild2").click(function(){
    	$('#child2Show').removeClass("show").addClass("hide"); 
    	M.toast({html: 'Child 2 Details Deleted Successfully!'})
    });
    
    $("#deleteChild1").click(function(){
    	$('#child1Show').removeClass("show").addClass("hide"); 
    	 M.toast({html: 'Child 1 Details Deleted Successfully!'})
    });
	 
    $("#editChild1").click(function(){
    	alert("Are you want to edit child 1 details")
    	$("#btnAddChld1").addClass("hide");
    });
    
   /*  $("#editChild2").click(function(){
    	alert("Are you want to edit child 2 details")
    	$("#btnAddChld2").addClass("hide");
    }); */
    
    $("#btnEditChld1").click(function(){
    	var strChldName =$("#txtFldChldName").val();
    	if(strChldName!= null){
    		
    		 M.toast({html: 'Child 1 Details Edited Successfully!'})
    	}
    })
    
    $('#btnAddChld2').click(function(){
    	
    	M.toast({html: 'Child 2 Details Inserted Successfully!'})
    	/* var strChldName2 =$("#first_name").val();
    	
    	if((strChldName2 != null)&&(strChldName2!="")){
    		M.toast({html: 'Child 2 Details Inserted Successfully!'})
    	}else{
          alert("Please fill the required Fields!!!");
    	} */
    });
    /* $("#btnEditChld2").click(function(){
    	var strChldName =$("#first-name").val();
    	if(strChldName!= null){
    		
    		 M.toast({html: 'Child 2 Details Edited Successfully!'})
    	}else{
    		
    		alert("Please fill the required Fields!!!");
    	}
    }) */
    
   </script>   
   
  </html>
        