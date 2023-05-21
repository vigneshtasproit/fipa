package com.fipa.util;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.ArrayList;

public class FipaSessions implements HttpSessionListener {
    private List sessions = new ArrayList();

   public void sessionCreated(HttpSessionEvent event) {
    	
        HttpSession session = event.getSession(); 
        sessions.add(session.getId());

        session.setAttribute("fipasess", session.getId());
    }

    public void sessionDestroyed(HttpSessionEvent event) {
        HttpSession session = event.getSession();
  
        sessions.remove(session.getId());

        session.setAttribute("fipasess", session.getId());
    }

    public int getActiveSessionNumber() {
        return sessions.size();
//    	return 0;
    }
}