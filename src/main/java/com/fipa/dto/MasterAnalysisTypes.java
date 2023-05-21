package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * MasterAnalysisTypes generated by hbm2java
 */
public class MasterAnalysisTypes implements java.io.Serializable {

	private String anaPkid;//
	private String analysis;//
	private String anaReportId;
	private String anaCrtdBy;
	private Date anaCrtdDate;
	private String anaModifiedBy;
	private Date anaModifiedDate;
	private Set<FnaApptypes> fnaApptypeses = new HashSet<FnaApptypes>(0);

	public MasterAnalysisTypes() {
	}

	public MasterAnalysisTypes(String anaPkid, String analysis,
			String anaCrtdBy, Date anaCrtdDate) {
		this.anaPkid = anaPkid;
		this.analysis = analysis;
		this.anaCrtdBy = anaCrtdBy;
		this.anaCrtdDate = anaCrtdDate;
	}

	public MasterAnalysisTypes(String anaPkid, String analysis,
			String anaReportId, String anaCrtdBy, Date anaCrtdDate,
			String anaModifiedBy, Date anaModifiedDate,
			Set<FnaApptypes> fnaApptypeses) {
		this.anaPkid = anaPkid;
		this.analysis = analysis;
		this.anaReportId = anaReportId;
		this.anaCrtdBy = anaCrtdBy;
		this.anaCrtdDate = anaCrtdDate;
		this.anaModifiedBy = anaModifiedBy;
		this.anaModifiedDate = anaModifiedDate;
		this.fnaApptypeses = fnaApptypeses;
	}

	public String getAnaPkid() {
		return this.anaPkid;
	}

	public void setAnaPkid(String anaPkid) {
		this.anaPkid = anaPkid;
	}

	public String getAnalysis() {
		return this.analysis;
	}

	public void setAnalysis(String analysis) {
		this.analysis = analysis;
	}

	public String getAnaReportId() {
		return this.anaReportId;
	}

	public void setAnaReportId(String anaReportId) {
		this.anaReportId = anaReportId;
	}

	public String getAnaCrtdBy() {
		return this.anaCrtdBy;
	}

	public void setAnaCrtdBy(String anaCrtdBy) {
		this.anaCrtdBy = anaCrtdBy;
	}

	public Date getAnaCrtdDate() {
		return this.anaCrtdDate;
	}

	public void setAnaCrtdDate(Date anaCrtdDate) {
		this.anaCrtdDate = anaCrtdDate;
	}

	public String getAnaModifiedBy() {
		return this.anaModifiedBy;
	}

	public void setAnaModifiedBy(String anaModifiedBy) {
		this.anaModifiedBy = anaModifiedBy;
	}

	public Date getAnaModifiedDate() {
		return this.anaModifiedDate;
	}

	public void setAnaModifiedDate(Date anaModifiedDate) {
		this.anaModifiedDate = anaModifiedDate;
	}

	public Set<FnaApptypes> getFnaApptypeses() {
		return this.fnaApptypeses;
	}

	public void setFnaApptypeses(Set<FnaApptypes> fnaApptypeses) {
		this.fnaApptypeses = fnaApptypeses;
	}

}