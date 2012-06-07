/// <reference path="./tls.js"/>

var HTTPS = function () {
    this.createServer = function (options, requestListener) { return new HTTPS.Server();};
    this.request = function (options, callback) { return new Object(); };
    this.get = function (options, callback) { return new Object(); };
    this.globalAgent = new HTTPS.Agent();
};

HTTPS.Server = function () { };
HTTPS.Server.prototype = new TLS.Server();

HTTPS.Agent = function () { };

