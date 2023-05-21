

<%
		session.invalidate();
	%>

<form>
<div class="container container-table">
	<div class="row vertical-center-row">
		<div class="panel panel-standard">
			<div class="panel-heading" style="background-color: #243665;border-color: #243665;">
				<h3 class="panel-title">
					<strong style="color:white">Session</strong>
				</h3>
			</div>
			<div class="panel-body" style="text-align: center;">
				<h1>Session Timeout</h1>
				<h2>Your Session has been Expired. Please Try Again .</h2>
				<br /> <br />
			</div>
			<div class="panel-footer panel-footer-standard"
				style="text-align: center;background-color: #243665;border-color: #243665;">
<!-- 				<button class="btn btn-default hidden" role="button" value=" Login " title="Logout" id="btnReLogin" onclick="relogin()"> -->
<!-- 						Login Again -->
<!-- 					</button> -->
<!-- 					<button class="btn btn-default" role="button" value=" Close " title="Close" id="btnReclose" onclick="javascript:window.close();"> -->
<!-- 						Close -->
<!-- 					</button>  -->
				<div class="btnStyle">
					<button type="button"  class="btn BtnFIPACAN StylishCAN" id="btnReclose" onclick="javascript:window.close();">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					    </div>
			</div>
		</div>
	</div>
</div>
</form>

 <script src="plugins/fipa/js/fipa.login.js"></script>