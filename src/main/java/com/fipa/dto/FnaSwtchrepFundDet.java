package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaSwtchrepFundDet generated by hbm2java
 */
public class FnaSwtchrepFundDet implements java.io.Serializable {

	private String swrepFfId;
	private FnaSelfspouseDets fnaSelfspouseDets;
	private String swrepFfProdtype;
	private String swrepFfProdname;
	private Double swrepFfFundriskrate;
	private String swrepFfPaymentmode;
	private Double swrepFfSoredmunits;
	private Short swrepFfSoredprcnt;
	private Double swrepFfSirepsaleschrg;
	private Double swrepFfSirepamt;
	private Short swrepFfSirepprcnt;
	private String swrepFfIaffee;
	private String createdBy;
	private Date createdDate;
	private String swrepPpPrin;
	private String swrepPpPlan;
	private String swrepFfBsrid;
	private String swrepFfOpt;

	public FnaSwtchrepFundDet() {
	}

	public FnaSwtchrepFundDet(String swrepFfId) {
		this.swrepFfId = swrepFfId;
	}

	public FnaSwtchrepFundDet(String swrepFfId,
			FnaSelfspouseDets fnaSelfspouseDets, String swrepFfProdtype,
			String swrepFfProdname, Double swrepFfFundriskrate,
			String swrepFfPaymentmode, Double swrepFfSoredmunits,
			Short swrepFfSoredprcnt, Double swrepFfSirepsaleschrg,
			Double swrepFfSirepamt, Short swrepFfSirepprcnt,
			String swrepFfIaffee, String createdBy, Date createdDate,
			String swrepPpPrin, String swrepPpPlan, String swrepFfBsrid,
			String swrepFfOpt) {
		this.swrepFfId = swrepFfId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.swrepFfProdtype = swrepFfProdtype;
		this.swrepFfProdname = swrepFfProdname;
		this.swrepFfFundriskrate = swrepFfFundriskrate;
		this.swrepFfPaymentmode = swrepFfPaymentmode;
		this.swrepFfSoredmunits = swrepFfSoredmunits;
		this.swrepFfSoredprcnt = swrepFfSoredprcnt;
		this.swrepFfSirepsaleschrg = swrepFfSirepsaleschrg;
		this.swrepFfSirepamt = swrepFfSirepamt;
		this.swrepFfSirepprcnt = swrepFfSirepprcnt;
		this.swrepFfIaffee = swrepFfIaffee;
		this.createdBy = createdBy;
		this.createdDate = createdDate;
		this.swrepPpPrin = swrepPpPrin;
		this.swrepPpPlan = swrepPpPlan;
		this.swrepFfBsrid = swrepFfBsrid;
		this.swrepFfOpt = swrepFfOpt;
	}

	public String getSwrepFfId() {
		return this.swrepFfId;
	}

	public void setSwrepFfId(String swrepFfId) {
		this.swrepFfId = swrepFfId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public String getSwrepFfProdtype() {
		return this.swrepFfProdtype;
	}

	public void setSwrepFfProdtype(String swrepFfProdtype) {
		this.swrepFfProdtype = swrepFfProdtype;
	}

	public String getSwrepFfProdname() {
		return this.swrepFfProdname;
	}

	public void setSwrepFfProdname(String swrepFfProdname) {
		this.swrepFfProdname = swrepFfProdname;
	}

	public Double getSwrepFfFundriskrate() {
		return this.swrepFfFundriskrate;
	}

	public void setSwrepFfFundriskrate(Double swrepFfFundriskrate) {
		this.swrepFfFundriskrate = swrepFfFundriskrate;
	}

	public String getSwrepFfPaymentmode() {
		return this.swrepFfPaymentmode;
	}

	public void setSwrepFfPaymentmode(String swrepFfPaymentmode) {
		this.swrepFfPaymentmode = swrepFfPaymentmode;
	}

	public Double getSwrepFfSoredmunits() {
		return this.swrepFfSoredmunits;
	}

	public void setSwrepFfSoredmunits(Double swrepFfSoredmunits) {
		this.swrepFfSoredmunits = swrepFfSoredmunits;
	}

	public Short getSwrepFfSoredprcnt() {
		return this.swrepFfSoredprcnt;
	}

	public void setSwrepFfSoredprcnt(Short swrepFfSoredprcnt) {
		this.swrepFfSoredprcnt = swrepFfSoredprcnt;
	}

	public Double getSwrepFfSirepsaleschrg() {
		return this.swrepFfSirepsaleschrg;
	}

	public void setSwrepFfSirepsaleschrg(Double swrepFfSirepsaleschrg) {
		this.swrepFfSirepsaleschrg = swrepFfSirepsaleschrg;
	}

	public Double getSwrepFfSirepamt() {
		return this.swrepFfSirepamt;
	}

	public void setSwrepFfSirepamt(Double swrepFfSirepamt) {
		this.swrepFfSirepamt = swrepFfSirepamt;
	}

	public Short getSwrepFfSirepprcnt() {
		return this.swrepFfSirepprcnt;
	}

	public void setSwrepFfSirepprcnt(Short swrepFfSirepprcnt) {
		this.swrepFfSirepprcnt = swrepFfSirepprcnt;
	}

	public String getSwrepFfIaffee() {
		return this.swrepFfIaffee;
	}

	public void setSwrepFfIaffee(String swrepFfIaffee) {
		this.swrepFfIaffee = swrepFfIaffee;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getSwrepPpPrin() {
		return this.swrepPpPrin;
	}

	public void setSwrepPpPrin(String swrepPpPrin) {
		this.swrepPpPrin = swrepPpPrin;
	}

	public String getSwrepPpPlan() {
		return this.swrepPpPlan;
	}

	public void setSwrepPpPlan(String swrepPpPlan) {
		this.swrepPpPlan = swrepPpPlan;
	}

	public String getSwrepFfBsrid() {
		return this.swrepFfBsrid;
	}

	public void setSwrepFfBsrid(String swrepFfBsrid) {
		this.swrepFfBsrid = swrepFfBsrid;
	}

	public String getSwrepFfOpt() {
		return this.swrepFfOpt;
	}

	public void setSwrepFfOpt(String swrepFfOpt) {
		this.swrepFfOpt = swrepFfOpt;
	}

}
