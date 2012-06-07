/// <reference path="./events.js"/>
/// <reference path="./net.js"/>

var HTTP = function(){
    this.STATUS_CODES
    this.createServer = function (requestListener) { return new HTTP.Server(); };
    ////http.createClient = function(port, host){};deprecated 
    this.request = function (options, callback) { new HTTP.ClientRequest(); };
    this.get = function (options, callback) { new HTTP.ClientRequest(); };
    this.globalAgent = new HTTP.Agent();
};

HTTP.Server = function(){
    ////Event: 'request'
    ////Event: 'connection'
    ////Event: 'close'
    ////Event: 'checkContinue'
    ////Event: 'connect'
    ////Event: 'upgrade'
    ////Event: 'clientError'
    this.listen = function(args){};
    this.close = function(cb){};
    this.maxHeadersCount = new Number();
};
HTTP.Server.prototype = new Events.EventEmitter();

HTTP.ServerRequest = function(){
    ////Event: 'data'
    ////Event: 'end'
    ////Event: 'close'
    this.method = new String();
    this.url = new String();
    this.headers = new Object();
    this.trailers = new Object();
    this.httpVersion = new Number();
    this.httpVersionMajor = new Number();
    this.httpVersionMinor = new Number();
    this.setEncoding = function(encoding){};
    this.pause = function(){};
    this.resume = function(){};
    this.connection = new Net.Socket();
};
HTTP.ServerRequest.prototype = new Events.EventEmitter();


HTTP.ServerResponse = function(){
    ////Event: 'close'
    this.writeContinue = function(){};
    this.writeHead = function(statusCode, reasonPhrase, headers){};
    this.statusCode = new Number();
    this.setHeader = function(name, value){};
    this.sendDate = new Boolean();
    this.getHeader = function(name){return new String();};
    this.removeHeader = function(name){};
    this.write = function(chunk, encoding){};
    this.addTrailers = function(headers){};
    this.end = function(data, encoding){};
};
HTTP.ServerResponse.prototype = new Events.EventEmitter();

HTTP.Agent = function(){
    this.maxSockets = new Number();
    this.sockets = new Array();
    this.requests = new Object();
};

HTTP.ClientRequest = function(){
    //Event 'response'
    //Event: 'socket'
    //Event: 'connect'
    //Event: 'upgrade'
    //Event: 'continue'
    this.write = function(chunk, encoding){};
    this.end = function (data, encoding) { };
    this.abort = function () { };
    this.setTimeout = function (timeout, callback) { };
    this.setNoDelay = function (noDelay) { };
    this.setSocketKeepAlive = function (enable, initialDelay) { };
};
HTTP.ClientRequest.prototype = new Events.EventEmitter();

HTTP.ClientResponse = function () {
    //Event: 'data'
    //Event: 'end'
    //Event: 'close'
    this.statusCode = new Number();
    this.httpVersion = new Number();
    this.httpVersionMajor = new Number();
    this.httpVersionMinor = new Number();
    this.headers = new Object();
    this.trailers = new Object();
    this.setEncoding = function (encoding) { };
    this.pause = function () { };
    this.resume = function () { };
};
HTTP.ClientResponse.prototype = new Events.EventEmitter();
