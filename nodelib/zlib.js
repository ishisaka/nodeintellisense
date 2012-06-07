/// <reference path="./stream.js"/>

var Zlib = function () {
    this.createGzip = function (options) { return new Zlib.Gzip();};
    this.createGunzip = function (options) { return new Zlib.Gunzip(); };
    this.createDeflate = function (options) { return new Zlib.Deflate(); };
    this.createInflate = function (options) { return new Zlib.Inflate(); };
    this.createDeflateRaw = function (options) { return new Zlib.DeflateRaw(); };
    this.createInflateRaw = function (options) { return new Zlib.InflateRaw(); };
    this.createUnzip = function (options) { return new Zlib.Unzip(); };
    this.deflate = function (buf, callback) { };
    this.deflateRaw = function (buf, callback) { };
    this.gzip = function (buf, callback) { };
    this.gunzip = function (buf, callback) { };
    this.inflate = function (buf, callback) { };
    this.inflateRaw = function (buf, callback) { };
    this.unzip = function (buf, callback) { };
};

Zlib.Gzip = function () { };
Zlib.Gzip.prototype = new Stream();
Zlib.Gunzip = function () { };
Zlib.Gunzip.prototype = new Stream();
Zlib.Deflate = function () { };
Zlib.Deflate.prototype = new Stream();
Zlib.Inflate = function () { };
Zlib.Inflate.prototype = new Stream();
Zlib.DeflateRaw = function () { };
Zlib.DeflateRaw.prototype = new Stream();
Zlib.InflateRaw = function () { };
Zlib.InflateRaw.prototype = new Stream();
Zlib.InflateRaw = function () { };
Zlib.InflateRaw.prototype = new Stream();
Zlib.Unzip = function () { };
Zlib.Unzip.prototype = new Stream();

