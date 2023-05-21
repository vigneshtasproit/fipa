// * Date picker
var dobid = "";
var ageid = "";
var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

var stafftype = $('#hTxtFldLoggedStfType').val();

function getdob(dateid, ageeid, flg) {
	checkDateFormat($(dateid));
	var findId = $(dateid).attr("id");/* RP CF */
	var birth = $(dateid).val(); 
	if (!(birth == undefined || birth == "" || birth == null)) {
		if (birth.match(dateformat)) {
 
			var date = birth.substring(0, 2);
			var month = birth.substring(3, 5);
			var year = birth.substring(6, 10);

			
			var d = new Date();
			var cmonth = d.getMonth() + 1;
			var day = d.getDate();

			var output = (('' + day).length < 2 ? '0' : '') + day + '/'
					+ (('' + month).length < 2 ? '0' : '') + month + '/'
					+ d.getFullYear();
			var y = d.getFullYear();
			var age;

			if (month > cmonth) {
				age = y - year - 1;
			} else if (month < cmonth) {
				age = y - year;
			} else if (month == cmonth) {
				if (Number(date) > day) {
					age = y - year - 1;
				} else {
					age = y - year;
				}
			}
			ageeid.val(age);
			calcRtrmntPln();//Retirement details calculate
		}
	}

	else if (birth == undefined || birth == "" || birth == null) {
		ageeid.val("");

	}

}

$(function() {
	// DOB Picker
	if (stafftype == STAFFTYPE_ADVISER) {

		// Date Of Birth - Date picker Initialization and Format validation
		$(
				"#dobSlfpicker,#dobSpspicker,#DateChildDatepicker,#DateDeptDatePpicker")
				.datetimepicker(dobOptions).on("change", function() {
					checkDateFormat($(this));
				});
		 

		// Normal date - Date picker Initialization and Format validation
		$(
				'#txtFldRDDatepicker,#COBPerFrmpicker,#COBPerTopicker,#SRSPerFrmpicker,#SRSPerTopicker,#InvDateInvstDatepicker,#InvDateInvstDatepicker,'
						+ '#LIIncptDatepicker,#DsblIncptDatepicker,#CrtlsIncptDatepicker,#DsblExpryDatepicker,#LIExpiryDatepicker,'
						+ '#PlnIncDatepicker,#PlnExpDatepicker,#LIMaturityDatepicker,#DfIncepDatepicker,#DfExpiryDatepicker,'
						+ '#CrtlnsExpDatepicker,#HospIncptDatepicker,#HospExpDatepicker,#txtFldIncDatePickeB00,#txtFldPolExpDatePickeB00,#txtFldPremTrDatePickeB00,'
						+ '#txtFldIncDatePickeR00,#txtFldPolExpDatePickeR00,#txtFldPremTrDatePickeR00,'
						+ '#HIExpirypicker, #SrchCpfAllocEffFrompicker,#dlgCpfAllocEffFrompicker,#SrchCpfIntMthpicker,#dlgCpfIntMthpicker,#dlgMsCpfContEffFrmpickr,#dlgMsCpfContEffTopickr')
				.datetimepicker(dateOptions).on("change", function() {
					checkDateFormat($(this));
				});

		$("#dobSlfpicker").datetimepicker(dobOptions).on("change", function() {
			calSelfCpfMastMthContr();
		});
		$("#dobSpspicker").datetimepicker(dobOptions).on("change", function() {
			calSpsCpfMastMthContr();
		});
		$("#dfSelfDob").on("change", function() {
			calSelfCpfMastMthContr();
		});

		$("#dfSpsDob").on("change", function() {
			calSpsCpfMastMthContr();
		});

		// Normal date - Field initialize date format validation
		$("#txtFldDlgChildDob,#txtFldDlgDepnDob,#txtFldDlgInvDateInvst,#txtFldDlgSRSPerFrom,#txtFldDlgSRSPerTo,"
						+ "#txtFldDlgCOBPerFrom,#txtFldDlgCOBPerTo,#txtFldDlgHospIncepDate,#txtFldDlgHospExpDate,"
						+ "#txtFldDlgInvDateInvs,#lipIncepdate,#txtFldDlgDsIncepDate,#txtFldDlgCrtlsIncepDate,#txtFldDlgDsExpryDate,#txtFldDlgPlanExpDate,#txtFldDlgPlanExpDate,#lipExpdate,"
						+ "#lipMaturityDate,#txtFldDlgDfIncepDate,#txtFldDlgDfExpiryDate,"
						+ "#txtFldDlgCrtlnsExpDate,#txtFldDlgHIExpiry,#txtFldSrchCpfAllocEffFrom,"
						+ "#txtFldDlgCPFAllocEffFrom,#txtFldSrchCpfIntMth,#txtFldDlgCpfIntMonth,#dlgmscpfconeffFrom,#dlgmscpfconeffTo," +
								"#txtFldIncDateB00,#txtFldPolExpDateB00,#txtFldPremTrDateB00")
				.on("change", function() {
					checkDateFormat($(this));
				});
		
		$("#dfSelfDob").on("change", function() {
			checkDateFormat($(this));
			getdob(this, $('#dfSelfAge'), true);
		});

		$("#dfSpsDob").on("change", function() {
			checkDateFormat($(this));
			getdob(this, $('#dfSpsAge'), true);
		});

		/* Cash At Banks */
		$('#COBPerTopicker')
				.datetimepicker(dateOptions)
				.on(
						"change",
						function() {
							if (!chkFromToDateValidation('txtFldDlgCOBPerFrom',
									'txtFldDlgCOBPerTo',
									"Period To Date should greater than the Period From Date"))
								;
						});
		$('#COBPerFrmpicker').datetimepicker(dateOptions).on("change",
						function() {
							if (!chkFromToDateValidation('txtFldDlgCOBPerFrom',
									'txtFldDlgCOBPerTo',
									"Period To Date should greater than the Period From Date"))
								;
						});

		/* SRS */
		$('#SRSPerTopicker').datetimepicker(dateOptions)
				.on(
						"change",
						function() {
							if (!chkFromToDateValidation('txtFldDlgSRSPerFrom',
									'txtFldDlgSRSPerTo',
									"Period To Date should greater than the Period From Date"))
								;
						});
		$('#SRSPerFrmpicker').datetimepicker(dateOptions)
				.on(
						"change",
						function() {
							if (!chkFromToDateValidation('txtFldDlgSRSPerFrom',
									'txtFldDlgSRSPerTo',
									"Period To Date should greater than the Period From Date"))
								;
						});
		/* Death benefit */
		$('#DfIncepDatepicker')
				.datetimepicker(dateOptions)
				.on(
						"change",
						function() {
							if (!chkFromToDateValidation(
									'txtFldDlgDfIncepDate',
									'txtFldDlgDfExpiryDate',
									"Inception Date should be lesser than the Expiry Date"))
								;
						});
		$('#DfExpiryDatepicker')
				.datetimepicker(dateOptions)
				.on(
						"change",
						function() {
							if (!chkFromToDateValidation(
									'txtFldDlgDfIncepDate',
									'txtFldDlgDfExpiryDate',
									"Expiry Date should be greater than the Inception Date"))
								;
						});

		/* Central provident fund */
		$('#CADPerFrmpicker')
				.datetimepicker(dateOptions)
				.on(
						"change",
						function() {
							if (!chkFromToDateValidation('CADPerFrmpicker',
									'CADPerTopicker',
									"Period To Date should greater than the Period From Date"))
								;
						});
		$('#CADPerTopicker')
				.datetimepicker(dateOptions)
				.on(
						"change",
						function() {
							if (!chkFromToDateValidation('CADPerFrmpicker',
									'CADPerTopicker',
									"Period To Date should greater than the Period From Date"))
								;
						});

	
	}

});

function checkDateFormat(date) {
	var txtVal = date.val();
	var day, month, year;
	var arr = [];
	var chgDateFormat = ""; 
	if (txtVal.indexOf('.') > 0 || txtVal.indexOf('-') > 0
			|| txtVal.indexOf(' ') > 0 || txtVal.indexOf('/') > 0) {
		chgDateFormat = chgOthSymToSlack(txtVal); 
	}else{
		if(!isEmpty(txtVal)){
			applyErrorToastrAlert('Invalid Date');
			date.val("");
		}
		return;
	}
    if (!isEmpty(chgDateFormat) && !isDate(chgDateFormat)) {
				applyErrorToastrAlert('Invalid Date');
				date.val("");
				return;
	 } 
	
	date.val(chgDateFormat);
}

function chgOthSymToSlack(txtVal) {
	var arr = [];
	var day, month, year;
	var symbol = "", date = "";
	if (txtVal.indexOf('.') > 0) {
		symbol = ".";
	}
	if (txtVal.indexOf('-') > 0) {
		symbol = "-";
	}
	if (txtVal.indexOf(' ') > 0) {
		symbol = " ";
	}
	if (txtVal.indexOf('/') > 0) {
		symbol = "/";
	}
	if (!isEmpty(symbol)) {
		arr = txtVal.split(symbol); 
		if (arr[0].length == 1) {
			day = arr[0].replace(arr[0], "0" + arr[0]);
		} else {
			day = arr[0];
		}

		if (arr[1].length == 1) {
			month = arr[1].replace(arr[1], "0" + arr[1]);
		} else {
			month = arr[1];
		}

		year = arr[2];
	}

	date = day + "/" + month + "/" + year;
	 
	return date;
}


function getAgeAtDate(dob,ageatdate){
	
	var from = dob.split("/");
	var to = ageatdate.split("/");
	
	var d1  = new Date(from[2], from[1] - 1, from[0]);
	var d2  = new Date(to[2], to[1] - 1, to[0]);
	
	
	var age = Math.floor((d2-d1) / (365.25 * 24 * 60 * 60 * 1000));
	return age;
	
	
	
}