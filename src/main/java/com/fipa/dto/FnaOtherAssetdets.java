package com.fipa.dto;
import java.util.Date;
public class FnaOtherAssetdets implements java.io.Serializable{
	private String othId;//
	private FnaSelfspouseDets fnaSelfspouseDets;
	private String otherasstItems;
	private String otherasstDescription;
	private Double otherasstSelf;//
	private Double otherasstSpouse;//
	private Double otherasstJoint;//
	private Double otherasstLoans;//
	private String otherasstCreatedBy;//
	private Date otherasstCreatedDate;//
	private String otherasstModifiedBy;//
	private Date otherasstModifiedDate;//
	
	public FnaOtherAssetdets() {
		//super();
		// TODO Auto-generated constructor stub
	}
	
	public FnaOtherAssetdets(String othId) {
		//super();
		this.othId = othId;
	}

	public FnaOtherAssetdets(String othId, FnaSelfspouseDets fnaSelfspouseDets, String otherasstItems,
			String otherasstDescription, Double otherasstSelf, Double otherasstSpouse, Double otherasstJoint,
			Double otherasstLoans, String otherasstCreatedBy, Date otherasstCreatedDate, String otherasstModifiedBy,
			Date otherasstModifiedDate) {
		
		this.othId = othId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.otherasstItems = otherasstItems;
		this.otherasstDescription = otherasstDescription;
		this.otherasstSelf = otherasstSelf;
		this.otherasstSpouse = otherasstSpouse;
		this.otherasstJoint = otherasstJoint;
		this.otherasstLoans = otherasstLoans;
		this.otherasstCreatedBy = otherasstCreatedBy;
		this.otherasstCreatedDate = otherasstCreatedDate;
		this.otherasstModifiedBy = otherasstModifiedBy;
		this.otherasstModifiedDate = otherasstModifiedDate;
	}
	


	public String getOthId() {
		return othId;
	}
	public void setOthId(String othId) {
		this.othId = othId;
	}
	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return fnaSelfspouseDets;
	}
	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}
	public String getOtherasstItems() {
		return otherasstItems;
	}
	public void setOtherasstItems(String otherasstItems) {
		this.otherasstItems = otherasstItems;
	}
	public String getOtherasstDescription() {
		return otherasstDescription;
	}
	public void setOtherasstDescription(String otherasstDescription) {
		this.otherasstDescription = otherasstDescription;
	}
	public Double getOtherasstSelf() {
		return otherasstSelf;
	}
	public void setOtherasstSelf(Double otherasstSelf) {
		this.otherasstSelf = otherasstSelf;
	}
	public Double getOtherasstSpouse() {
		return otherasstSpouse;
	}
	public void setOtherasstSpouse(Double otherasstSpouse) {
		this.otherasstSpouse = otherasstSpouse;
	}
	public Double getOtherasstJoint() {
		return otherasstJoint;
	}
	public void setOtherasstJoint(Double otherasstJoint) {
		this.otherasstJoint = otherasstJoint;
	}
	public Double getOtherasstLoans() {
		return otherasstLoans;
	}
	public void setOtherasstLoans(Double otherasstLoans) {
		this.otherasstLoans = otherasstLoans;
	}
	public String getOtherasstCreatedBy() {
		return otherasstCreatedBy;
	}
	public void setOtherasstCreatedBy(String otherasstCreatedBy) {
		this.otherasstCreatedBy = otherasstCreatedBy;
	}
	public Date getOtherasstCreatedDate() {
		return otherasstCreatedDate;
	}
	public void setOtherasstCreatedDate(Date otherasstCreatedDate) {
		this.otherasstCreatedDate = otherasstCreatedDate;
	}
	public String getOtherasstModifiedBy() {
		return otherasstModifiedBy;
	}
	
	public void setOtherasstModifiedBy(String otherasstModifiedBy) {
		this.otherasstModifiedBy = otherasstModifiedBy;
	}
	
	public Date getOtherasstModifiedDate() {
		return otherasstModifiedDate;
	}

	public void setOtherasstModifiedDate(Date otherasstModifiedDate) {
		this.otherasstModifiedDate = otherasstModifiedDate;
	}

	
}
