package com.fipa.util;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Map;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
//import org.apache.commons.logging.Log;
//import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
/**
 * TokenHelper
 *
 */
public class TokenHelper {
    /**
     * The default namespace for storing token session values
     */
    public static final String TOKEN_NAMESPACE = "spring";
    /**
     * The default name to map the token value
     */
    public static final String DEFAULT_TOKEN_NAME = "token";
    /**
     * The name of the field which will hold the token name
     */
    public static final String TOKEN_NAME_FIELD = "spring.token";
    private static final Logger LOG = LoggerFactory.getLogger(TokenHelper.class);
    private static final Random RANDOM = new SecureRandom();
    /**
     * Sets a transaction token into the session using the default token name.
     *
     * @return the token string
     */
    public static String setToken(HttpServletRequest request) {
        return setToken(DEFAULT_TOKEN_NAME,request);
    }
    /**
     * Sets a transaction token into the session based on the provided token name.
     *
     * @param tokenName the token name based on which a generated token value is stored into session; for actual session
     *                  store, this name will be prefixed by a namespace.
     *
     * @return the token string
     */
    private static String setToken( String tokenName ,HttpServletRequest request) {
        String token = generateGUID(); 
        setSessionToken(tokenName, token,request);
        return token;
    }
    /**
     * Put a given named token into the session map. The token will be stored with a namespace prefix prepended.
     *
     * @param tokenName the token name based on which given token value is stored into session; for actual session store,
     *                  this name will be prefixed by a namespace.
     * @param token     the token value to store
     */
    private static void setSessionToken( String tokenName, String token ,HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        try {
            session.setAttribute(buildTokenSessionAttributeName(tokenName), token);
        } catch ( IllegalStateException e ) {
            // WW-1182 explain to user what the problem is
            String msg = "Error creating HttpSession due response is commited to client. You can use the CreateSessionInterceptor or create the HttpSession from your action before the result is rendered to the client: " + e.getMessage();
            if (LOG.isErrorEnabled()) {
                LOG.error(msg, e);
            }
            throw new IllegalArgumentException(msg);
        }
    }
    /**
     * Build a name-spaced token session attribute name based on the given token name.
     *
     * @param tokenName the token name to prefix
     *
     * @return the name space prefixed session token name
     */
    private static String buildTokenSessionAttributeName( String tokenName ) {
        return TOKEN_NAMESPACE + "." + tokenName;
    }
    /**
     * Gets a transaction token from the params in the ServletActionContext using the default token name.
     *
     * @return token
     */
    public static String getToken(HttpServletRequest request) {
        return getToken(DEFAULT_TOKEN_NAME,request);
    }
    /**
     * Gets the Token value from the params in the ServletActionContext using the given name
     *
     * @param tokenName the name of the parameter which holds the token value
     * @return the token String or null, if the token could not be found
     */
    private static String getToken(String tokenName,HttpServletRequest request) { 
        if (tokenName == null ) {
            return null;
        }
        String[] tokens = request.getParameterValues(tokenName);
        String token;
        if ((tokens == null) || (tokens.length < 1)) {
            if (LOG.isWarnEnabled()) {
            LOG.warn("Could not find token mapped to token name " + tokenName);
            }
            return null;
        }
        token = tokens[0];
        return token;
    }
    /**
     * Gets the token name from the Parameters in the ServletActionContext
     *
     * @return the token name found in the params, or null if it could not be found
     */
    public static String getTokenName(HttpServletRequest request) {
        return DEFAULT_TOKEN_NAME;
    }
    /**
     * Checks for a valid transaction token in the current request params. If a valid token is found, it is
     * removed so the it is not valid again.
     *
     * @return false if there was no token set into the params (check by looking for {@link #TOKEN_NAME_FIELD}), true if a valid token is found
     */
    public static boolean validToken(HttpServletRequest request) {
        String tokenName = getTokenName(request); 
        if (tokenName == null) {
            if (LOG.isDebugEnabled()) {
                LOG.debug("no token name found -> Invalid token ");
            }
            return false;
        }
        String token = getToken(tokenName,request); 
        if (token == null) {
            if (LOG.isDebugEnabled()) {
                LOG.debug("no token found for token name "+tokenName+" -> Invalid token ");
            }
            return false;
        }
        HttpSession session = request.getSession(false);
        String tokenSessionName = buildTokenSessionAttributeName(tokenName);
        String sessionToken = (String) session.getAttribute(tokenSessionName);
        if (!token.equals(sessionToken)) {
            if (LOG.isWarnEnabled()) {
                LOG.warn(TokenHelper.class.toString());
            }
            return false;
        }
        // remove the token so it won't be used again
        session.removeAttribute(tokenSessionName);
        return true;
    }
    private static String generateGUID() {
        return new BigInteger(165, RANDOM).toString(36).toUpperCase();
    }
}