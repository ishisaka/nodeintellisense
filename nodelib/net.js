var Net = function () {
    this.createServer = function (options, connectionListener) { return new Net.Server();};
    this.connect = function (args) { return new Net.Socket();};
    this.createConnection = function (args) { return new Net.Socket(); };
    this.isIP = function (input) { return new Boolean();};
    this.isIPv4 = function (input) { return new Boolean(); };
    this.isIPv6 = function (input) { return new Boolean(); };
    this.Socket = Net.Socket;
};

Net.Socket = function () {
    this.connect = function (args) { };
    this.bufferSize = new Number();
    this.setEncoding = function (encoding) { };
    this.write = function (data, encoding, callback) { };
    this.end = function (data, encoding) { };
    this.destroy = function () { };
    this.pause = function () { };
    this.resume = function () { };
    this.setTimeout = function (timeout, callback) { };
    this.setNoDelay = function (noDelay) { };
    this.setKeepAlive = function (enable, initialDelay) { };
    this.address = function () { };
    this.remoteAddress = new Strin();
    this.remotePort = new Number();
    this.bytesRead = new Number();
    this.bytesWritten = new Number();

    ////Event: 'connect'
    ////Event: 'data'
    ////Event: 'end'
    ////Event: 'timeout'
    ////Event: 'drain'
    ////Event: 'error'
    ////Event: 'close'
};

Net.Server = function () {
    this.listen = function (args) { };
    this.close = function (cb) { };
    this.address = function () { return new Object();};
    this.maxConnections = new Number();
    this.connections = new Number();
    ////Event: 'listening'
    ////Event: 'connection'
    ////Event: 'close'
    ////Event: 'error'
};

Net.Server.prototype = new Net.Socket();
