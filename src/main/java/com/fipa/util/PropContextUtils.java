package com.fipa.util;

import java.io.InputStream;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
 
public class PropContextUtils {
	
	public PropContextUtils(){
		
	}
	
	Properties properties;
	
	public void setProperties(Properties properties) {
		this.properties = properties;
	}
	
	public Object getProperty(String key) {
		return properties.getProperty(key);
	}
	
	public List<String> getPropertyAsList(String key) {
		String  strValue = properties.getProperty(key);

		List<String> items = Arrays.asList(strValue.split("\\s*,\\s*"));
		
		return items;
	}
	
	public Map<String,String> getKeyValueAsList(String key) {
		
		Map<String,String> keyValueList = new HashMap<String,String>();
		String  strValue = properties.getProperty(key);
 
		String[] keyValueStrArr = FipaUtils.splitSplChars(strValue, "^");	
		
		for(String str : keyValueStrArr){
			keyValueList.put(FipaUtils.splitSplChars(str, "~")[0], FipaUtils.splitSplChars(str, "~")[1]);
		}	
		 
		return keyValueList;
	}

	
	public String getPropertyAsString(String key) {
		
		String  strKeyValue = properties.getProperty(key);
		
		
		return strKeyValue;
		
	}
	
	
}