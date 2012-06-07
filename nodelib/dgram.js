var Dgram = function () {
    this.createSocket = function (type, callback) { return new Dgram.Socket();};
};

Dgram.Socket = function () {
    ////Event: 'message'
    ////Event: 'listening'
    ////Event: 'close'
    ////Event: 'error'
    this.send = function (buf, offset, length, port, address, callback) { };
    this.bind = function (port, address) { };
    this.close = function () { };
    this.address = function () { return new Object(); };
    this.setBroadcast = function (flag) { };
    this.setTTL = function (ttl) { };
    this.setMulticastTTL = function (ttl) { };
    this.setMulticastLoopback = function (flag) { };
    this.addMembership = function (multicastAddress, multicastInterface) { };
    this.dropMembership = function (multicastAddress, multicastInterface) { };
};
