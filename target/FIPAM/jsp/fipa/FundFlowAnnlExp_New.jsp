<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div  class="col-md-6">
</div>
<div class="row">
<div class="col-md-12"> 
		<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="DepntDRow"></button>
  				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"   id="DepntARow"></button>
						<!-- <button type="button"  class="btn btn-default navbar-btn editRow-icon"  id="DepntERow" ></button> -->
  				 </div>
				<div class="">
					<img src="images/menuicons/dep.png" class="img-rounded" style="height:45px;width:55px"> 
					<!-- <img src="images/menuicons/dept.png" class="img-rounded" style="height:45px;width:55px" /> -->
					<span class="panelHeaderTitle">Other than immediate Family Members</span>
				</div>			   
</div>
</div>

<div class="col-md-13" >
	<table id="deptParticularsTableNew" class="table-striped table-bordered display no-footer dataTable" style="width:100%;border-spacing: 1px !important;border-bottom: none;" >
	</table>
	<table class="dataTable table-bordered  display" id="deptParticularsTablefooterNew"  style="width:100%">
						
					<tbody>
					<tr>
							<td>
							<div><span class="label label-info"></span> 
							</div>
							</td> 
							<td>
							<div style="text-align: center;width: 250px;">
							<span class="">Self</span> 
							</div>
							</td>
							<td>
							<div style="width: 250px;text-align: center;">
							<span class="">Spouse</span> 
							</div>
							</td>
							<td>
							<div style="width: 250px;text-align: center;">
							<span class="">Total</span> 
							</div>
							</td>
					</tr>
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
							<!-- <td>&nbsp;</th> -->
							<td><input type="text" id="txtFldDepdTotAnnlContr"
								 readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
						</tr>
					</tbody>	
					
				</table>
</div>