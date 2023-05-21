<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

 <div class="loginpge-inner-bg" style="margin: 3px;background-image: url('images/singapore (2).jpg'); background-repeat: no-repeat;background-size: 100% 100%;"> 
 
	<!-- <div class="col-sm-5 ">
		<div class="form-box">
			<div>
				

			</div>
		</div>
	</div> -->

	<!-- <div class="col-sm-2"></div> -->

	<div class="col-sm-5" style="padding-top:100px;float: right;">
		<!-- <section id="content"> -->
		<form action="FipaHome.do" name="fipaLogin" method="post">
			<table style="border-collapse: separate; border-spacing: 1.02em; height: 50%;background-color: white;border-radius: 75px;width: 80%;">
				<tbody>
					<tr>
						<td><c:if test="${not empty message}">
								<div id="loginmsgdiv"
									class="alert alert-danger alert-dismissible fade in"
									role="alert" style="z-index: 1000;position:absolute;">
									<button type="button" class="close" data-dismiss="alert"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									${message}
								</div>
							</c:if></td>
					</tr>
					<tr>
						<td><img src="images/fipa_admin_logo.png"
							style="    max-width: 46%; margin-top: 0px;  margin-left: 100px;">
							</td>
					</tr>
					<tr></tr>
					<tr></tr>
					<!-- <tr style="text-indent: 6px;">
						<td><label for="txtFldUserId">&nbsp; </label></td>
					</tr> -->
					<!--<tr style="text-indent: 12px;">
						 <td>
						<h3 style="">User ID</h3>
						<div class="input-container">
					    <i class="fa fa-user icon" style="font-size:16px;color: #378aa2;"></i>&nbsp;&nbsp;
					    <input class="textfilds" id="txtFldUserId"
												name="txtFldUserId" required="required" data-toggle="popover" title="Login"  autocomplete="off" data-content="Key-in User Id"
												type="text" style="font-size:150%;background-color: #f1f1f1;border-bottom: #f1f1f1; width: 95%"/>
  					</div>
						
							
							</td> 
							
							
					</tr>-->
					<tr>
					<td>
					<center>
						<div class="floating-form">
						    <div class="floating-label">      
						      <input class="floating-input" type="text" placeholder=" " id="txtFldUserId" name="txtFldUserId" data-toggle="popover" required="required" title="Login"  autocomplete="off" data-content="Key-in User Id" style="font-size: 18px;">
						      <span class="highlight"></span>
						      <label style="font-size: 18px;">User ID</label>
						    </div>
						</div>
					</center>

					</td>
					</tr>
					<!-- <tr style="text-indent: 6px;">
						<td><label for="txtFldUserPassword">&nbsp;</label></td>
					</tr> -->
					<!-- <tr style="text-indent: 12px;">
						<td>
						<h3 style="">Password</h3>
					<div class="input-container">
						   <input class="textfilds" id="txtFldUserPassword"	
						   name="txtFldUserPassword" required="required" type="password"  data-toggle="popover" title="Login" data-content="Key-in Password" style="font-size:150%;background-color: #f1f1f1;border-bottom: #f1f1f1; width: 95%">
													
						  </div>
							</td> 
					</tr>-->
					<tr>
					<td>
					<center>
						<div class="floating-form">
							<div class="floating-label">      
								      <input class="floating-input" type="password" placeholder=" " id="txtFldUserPassword"	name="txtFldUserPassword" required="required" data-toggle="popover" title="Login" data-content="Key-in Password" style="font-size: 18px;" >
								      <span class="highlight"></span>
								      <label style="font-size: 18px;">Password</label>
							</div>
					    </div>
					</center>
					</td>
					</tr>

					<tr style="text-indent: 2px;display:none">

						<td><span style="margin-left: 175px;"> 
						<a style="cursor: help;">Forgot&nbsp;Password?</a></span>
							<!--                                 <input type="checkbox"/> &nbsp; Remember Me -->
						</td>

					</tr> 
					<tr style="">
						<td> 
						<center>
						<button type="button" id="btnloginId"  class="button button-4 button-4a icon-arrow-right" style="background: #243665;" onclick="submitLogin()">
						<i class="fa fa-arrow-right"></i>Log in</button>
						 <img src="images/loginload.gif" id="loadit" width="15%" class="hidden"> 
						 </center>
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</form>
		<!--  </section> -->
	</div>

</div> 
<!-- <script type="text/javascript">
 $(document).ready(function () {
	alert("sdsds");
		 setTimeout(function(){
			 alert("setTimeout");
		 $('.wrapper').attr('style', 'height: 99vh !important'); 
		 $(".wrapper").height("99vh");
		 }, 300); 
});
</script> -->


