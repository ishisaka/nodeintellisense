/// <reference path="./net.js"/>
/// <reference path="./stream.js"/>

var TLS = function () {
    var SecurePair = function () { };
    this.createServer = function (options, secureConnectionListener) { return new TLS.Server(); };
    this.connect = function (args) { return new TLS.CleartextStream(); };
    this.createSecurePair = function (credentials, isServer, requestCert, rejectUnauthorized) { return new SecurePair(); };
};

TLS.Server = function () {
    this.listen = function (port, host, callback) { };
    this.close = function () { };
    this.address = function () { };
    this.addContext = function (hostname, credentials) { };
    this.maxConnections = new Number();
    this.connections = new Number();
};

TLS.Server.prototype = new Net.Server();

TLS.CleartextStream = function () {
    this.authorized = new Boolean();
    this.authorizationError = new String();
    this.getPeerCertificate = function () { };
    this.getCipher = function () { };
    this.address = function () { };
    this.remoteAddress = new String();
    this.remotePort = new Number();
};

TLS.CleartextStream.prototype = new Stream();