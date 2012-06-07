var QueryString = function () {
    querystring.stringify = function (obj, sep, eq) { return new String();};
    querystring.parse = function (str, sep, eq, options) { return new Object(); };
    querystring.escape = new Function();
    querystring.unescape = new Function();
};
