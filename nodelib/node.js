/// node.js 0.7.9

/// <reference path="./process.js"/>
/// <reference path="./console.js"/>
/// <reference path="./module.js"/>
/// <reference path="./events.js"/>
/// <reference path="./domain.js"/>
/// <reference path="./tls.js"/>
/// <reference path="./fs.js"/>
/// <reference path="./net.js"/>
/// <reference path="./path.js"/>
/// <reference path="./stream.js"/>
/// <reference path="./stringdecoder.js"/>
/// <reference path="./util.js"/>
/// <reference path="./crypto.js"/>
/// <reference path="./dgram.js"/>
/// <reference path="./dns.js"/>
/// <reference path="./http.js"/>
/// <reference path="./https.js"/>
/// <reference path="./url.js"/>
/// <reference path="./querystring.js"/>
/// <reference path="./readline.js"/>
/// <reference path="./repl.js"/>
/// <reference path="./vm.js"/>
/// <reference path="./child_process.js"/>
/// <reference path="./assert.js"/>
/// <reference path="./tty.js"/>
/// <reference path="./zlib.js"/>
/// <reference path="./os.js"/>
/// <reference path="./cluster.js"/>

/// <reference path="./socket.io/socket.io.js"/>


var global = new Object();
var process = new Process();
var console = new Console();
var module = new Module();
var exports = module.exports;

var Buffer = function (args) {
    var buf = new Array();
    buf.write = function (string, offset, length, encoding) { };
    //    buf.toString = function(encoding, start, end){};
    buf.copy = function (targetBuffer, targetStart, sourceStart, sourceEnd) { };
    //    buf.slice = function(start, end){};
    buf.readUInt8 = function (offset, noAssert) { return new Number(); };
    buf.readUInt16LE = function (offset, noAssert) { return new Number(); };
    buf.readUInt16BE = function (offset, noAssert) { return new Number(); };
    buf.readUInt32LE = function (offset, noAssert) { return new Number(); };
    buf.readUInt32BE = function (offset, noAssert) { return new Number(); };
    buf.readInt8 = function (offset, noAssert) { return new Number(); };
    buf.readInt16LE = function (offset, noAssert) { return new Number(); };
    buf.readInt16BE = function (offset, noAssert) { return new Number(); };
    buf.readInt32LE = function (offset, noAssert) { return new Number(); };
    buf.readInt32BE = function (offset, noAssert) { return new Number(); };
    buf.readFloatLE = function (offset, noAssert) { return new Number(); };
    buf.readFloatBE = function (offset, noAssert) { return new Number(); };
    buf.readDoubleLE = function (offset, noAssert) { return new Number(); };
    buf.readDoubleBE = function (offset, noAssert) { return new Number(); };
    buf.writeUInt8 = function (value, offset, noAssert) { };
    buf.writeUInt16LE = function (value, offset, noAssert) { };
    buf.writeUInt16BE = function (value, offset, noAssert) { };
    buf.writeUInt32LE = function (value, offset, noAssert) { };
    buf.writeUInt32BE = function (value, offset, noAssert) { };
    buf.writeInt8 = function (value, offset, noAssert) { };
    buf.writeInt16LE = function (value, offset, noAssert) { };
    buf.writeInt16BE = function (value, offset, noAssert) { };
    buf.writeInt32LE = function (value, offset, noAssert) { };
    buf.writeInt32BE = function (value, offset, noAssert) { };
    buf.writeFloatLE = function (value, offset, noAssert) { };
    buf.writeFloatBE = function (value, offset, noAssert) { };
    buf.writeDoubleLE = function (value, offset, noAssert) { };
    buf.writeDoubleBE = function (value, offset, noAssert) { };
    buf.fill = function (value, offset, end) { };
    return buf;
};
Buffer.isBuffer = function (obj) { return new Boolean(); };
Buffer.byteLength = function (string, encoding) { return new Number(); };
var INSPECT_MAX_BYTES = new Number(50);

var require = function (args) {
    

//    if (typeof args === 'string')
    if (typeof args === 'string' || args instanceof String)
        args = args.substr(args.lastIndexOf('/') + 1);

    switch (args) {
        case 'process': return process;
        case 'console': return console;
        case 'util': return new Util();
        case 'events': return new Events();
        case 'domain': return new Domain();
        case 'stringdecoder': return stringDecoder;
        case 'stream': return new Stream();
        case 'tls': return new TLS();
        case 'fs': return new Fs();
        case 'crypto': return new Crypto();
        case 'net': return new Net();
        case 'module': return new Module();
        case 'path': return new Path();
        case 'dgram': return new Dgram();
        case 'dns': return new DNS();
        case 'http': return new HTTP();
        case 'https': return new HTTPS();
        case 'url': return new URL();
        case 'querystring': return new QueryString();
        case 'readline': return new Readline();
        case 'repl': return new REPL();
        case 'vm': return new VM();
        case 'child_process': return new Child_Process();
        case 'assert': return new Assert();
        case 'tty': return new TTY();
        case 'zlib': return new Zlib();
        case 'os': return new OS();
        case 'cluster': return new Cluster();
            ////
        case 'socket.io': return new SocketIO();
    }
};
require.resolve = new Function();
require.cache = new Object();
require.extensions = new Array();

var __filename = new String();
var __dirname = new String();
var setTimeout = function (cb, ms) { };
var clearTimeout = function(t){};
var setInterval = function(cb, ms){};
var clearInterval = function (t) { };
