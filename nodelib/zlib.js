/// <reference path="./stream.js"/>

var Zlib = function () {
    /// <summary>
    /// This provides bindings to Gzip/Gunzip, Deflate/Inflate, and DeflateRaw/InflateRaw classes. 
    /// Each class takes the same options, and is a readable/writable Stream.
    /// </summary>
    this.createGzip = function (options) {
        /// <summary>Returns a new Gzip object with an options.</summary>
        /// <param name="options" type="Object" optional="true"></param>
        /// <returns type="Zlib.Gzip" />
        return new Zlib.Gzip();
    };
    this.createGunzip = function (options) {
        /// <summary>Returns a new Gunzip object with an options.</summary>
        /// <param name="option" type="Sobject"></param>
        /// <returns type="Zlib.Gunzip" />
        return new Zlib.Gunzip();
    };
    this.createDeflate = function (options) {
        /// <summary>Returns a new Deflate object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.Deflate" />
        return new Zlib.Deflate();
    };
    this.createInflate = function (options) {
        /// <summary>Returns a new Inflate object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.Inflate" />
        return new Zlib.Inflate();
    };
    this.createDeflateRaw = function (options) {
        /// <summary>Returns a new DeflateRaw object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.DeflateRaw" />
        return new Zlib.DeflateRaw();
    };
    this.createInflateRaw = function (options) {
        /// <summary>Returns a new InflateRaw object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.InflateRaw" />
        return new Zlib.InflateRaw();
    };
    this.createUnzip = function (options) {
        /// <summary>Returns a new Unzip object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.Unzip" />
        return new Zlib.Unzip();
    };
    this.deflate = function (buf, callback) {
        /// <summary>Compress a string with Deflate.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.deflateRaw = function (buf, callback) {
        /// <summary>Compress a string with DeflateRaw.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.gzip = function (buf, callback) {
        /// <summary>Compress a string with Gzip.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.gunzip = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with Gunzip.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.inflate = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with Inflate.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.inflateRaw = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with InflateRaw.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.unzip = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with Unzip.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
};

Zlib.Gzip = function() {
	/// <summary>
    /// Compress data using gzip.
	/// </summary>
};
Zlib.Gzip.prototype = new Stream();
Zlib.Gunzip = function() {
	/// <summary>
    /// Decompress a gzip stream.
	/// </summary>
};
Zlib.Gunzip.prototype = new Stream();
Zlib.Deflate = function() {
	/// <summary>
    /// Compress data using deflate.
	/// </summary>
};
Zlib.Deflate.prototype = new Stream();
Zlib.Inflate = function() {
	/// <summary>
    /// Decompress a deflate stream.
	/// </summary>
};
Zlib.Inflate.prototype = new Stream();
Zlib.DeflateRaw = function() {
	/// <summary>
    /// Compress data using deflate, and do not append a zlib header.
	/// </summary>
};
Zlib.DeflateRaw.prototype = new Stream();
Zlib.InflateRaw = function() {
	/// <summary>
    /// Decompress a raw deflate stream.
	/// </summary>
};
Zlib.InflateRaw.prototype = new Stream();
Zlib.InflateRaw = function() {
	/// <summary>
    /// Decompress a raw deflate stream.
	/// </summary>
};
Zlib.InflateRaw.prototype = new Stream();
Zlib.Unzip = function() {
	/// <summary>
    /// Decompress either a Gzip- or Deflate-compressed stream by auto-detecting the header.
	/// </summary>
};
Zlib.Unzip.prototype = new Stream();

