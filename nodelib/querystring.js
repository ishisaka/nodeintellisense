var QueryString = function () {
    /// <summary>
    /// This module provides utilities for dealing with query strings.
    /// </summary>
    
    querystring.stringify = function (obj, sep, eq) {
        /// <summary>
        /// Serialize an object to a query string. Optionally override the <br />
        /// default separator ('&') and assignment ('=') characters.
        /// </summary>
        /// <param name='obj' type='String'></param>
        /// <param name='sep' type='String' optional='true'>separator.</param>
        /// <param name='eq' type='String' optional='true'>assignment.</param>
        /// <returns type='String' />
        return new String();
    };
    querystring.parse = function (str, sep, eq, options) {
        /// <summary>
        /// Deserialize a query string to an object. Optionally override the <br />
        /// default separator ('&') and assignment ('=') characters.
        /// </summary>
        /// <param name='obj' type='String' />
        /// <param name='sep' type='String' optional='true'>separator.</param>
        /// <param name='eq' type='String' optional='true'>assignment.</param>
        /// <returns type='Object' />
        return new Object();
    };
    querystring.escape = new function() {
    	/// <summary>
        /// The escape function used by querystring.stringify, provided so that <br />
    	/// it could be overridden if necessary.
    	/// </summary>
    };
    querystring.unescape = new function() {
        /// <summary>
        /// The unescape function used by querystring.parse, provided so that <br />
        /// it could be overridden if necessary.
        /// </summary>
    };
};
