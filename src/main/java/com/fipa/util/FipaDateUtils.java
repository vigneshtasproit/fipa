package com.fipa.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



public class FipaDateUtils {
	
	final static Logger fipalog = LoggerFactory.getLogger(FipaDateUtils.class);
	
	
	private static String strddMMyyyy ="dd/MM/yyyy";
	private static String stdyyyy="yyyy";
	private static String strDateTime ="dd/MM/yyyy hh:mm:ss";
	
	private static SimpleDateFormat standardDateFormat = new SimpleDateFormat(strddMMyyyy);
	private static DateFormat stdDateFormat = new SimpleDateFormat("dd/MM/yyyy");

	public static String formatDate(Date date) {
		
		String formatdate = "";

		try {
			if (date != null) { 
				SimpleDateFormat format = new SimpleDateFormat(strddMMyyyy);
				formatdate = format.format(date);
			} else
				formatdate = null;

		} catch (Exception ex) {
			fipalog.error("",ex);
		}

		return formatdate;
	}

	public static String formatYear(Date date) {
		
		String formatYear = "";

		try {
			if (date != null) { 
				SimpleDateFormat format = new SimpleDateFormat(stdyyyy);
				formatYear = format.format(date);
			} else
				formatYear = null;

		} catch (Exception ex) {
			fipalog.error("",ex);
		}

		return formatYear;
	}

	
public static String formatDateTime(Date date) {
		
		String formatdate = "";

		try {
			if (date != null) {
 
				SimpleDateFormat format = new SimpleDateFormat(strDateTime);
				formatdate = format.format(date);
			} else
				formatdate = null;

		} catch (Exception ex) {
			fipalog.error("",ex);
		}

		return formatdate;
	}

	public static String formatDateString(String date, String flag) {

		SimpleDateFormat dbFormat = new SimpleDateFormat("yyyy-MM-dd");

		String formatdate = "";

		try {

			Date dateobj = date != null ? dbFormat.parse(date) : null;

			if (dateobj != null) {
				if (flag.equalsIgnoreCase("Q")) {
					SimpleDateFormat format = new SimpleDateFormat(strddMMyyyy);
					formatdate = format.format(dateobj);
				} else if (flag.equalsIgnoreCase("I")) {
					SimpleDateFormat format = new SimpleDateFormat(
							"dd-MMM-yyyy");
					formatdate = format.format(date);

				}
			}

		} catch (Exception ex) {
			fipalog.error("",ex);
		}

		return formatdate;
	}
	

	public static Date formatStringToDate(String dateStr) {

		SimpleDateFormat stdFormat = new SimpleDateFormat(strddMMyyyy);

		try {
			// return standardDateFormat.parse(dateStr);
			return (FipaUtils.nullOrBlank(dateStr) ? null : stdFormat.parse(dateStr));
		} catch (ParseException pe) {
			fipalog.error("",pe);
			return null;
		}

	}

	public static Date convertDateStringToDate(String dateStr) {
		try {
			// return standardDateFormat.parse(dateStr);
			return (FipaUtils.nullOrBlank(dateStr) ? null : standardDateFormat
					.parse(dateStr));
		} catch (ParseException pe) {
			fipalog.error("",pe);
			return null;
		}
	}

	public static String convertDateToDateString(Date date) {
		return (FipaUtils.checkNullVal(date) ? "" : stdDateFormat
				.format(date));
	}
	public static Date convertStringToDate(String dateStr) {
		Date date = null;
		if(!FipaUtils.nullOrBlank(dateStr)){
			SimpleDateFormat originalFormat = new SimpleDateFormat(strddMMyyyy);
//			SimpleDateFormat targetFormat = new SimpleDateFormat("yyyy-MM-ddTHH:mm:ss");
			
			try {
				date = originalFormat.parse(dateStr); 

			} catch (ParseException ex) {
				fipalog.error("",ex);
			}
		}

		return date;
	}
	
	public static Date convertStringToDateTime(String dateStr) {
		Date date = null;
		if(!FipaUtils.nullOrBlank(dateStr)){
			SimpleDateFormat originalFormat = new SimpleDateFormat(strDateTime);
//			SimpleDateFormat targetFormat = new SimpleDateFormat("yyyy-MM-ddTHH:mm:ss");
			
			try {
				date = originalFormat.parse(dateStr); 

			} catch (ParseException ex) {
				fipalog.error("",ex);	
			}
		}

		return date;
	}


}
