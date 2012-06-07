/// <reference path="./stream.js"/>

var Fs = function () {
    this.rename = function (oldPath, newPath, callback) { };
    this.renameSync = function (oldPath, newPath) { };
    this.truncate = function (fd, len, callback) { };
    this.truncateSync = function (fd, len) { };
    this.chown = function (path, uid, gid, callback) { };
    this.chownSync = function (path, uid, gid) { };
    this.fchown = function (fd, uid, gid, callback) { };
    this.fchownSync = function (fd, uid, gid) { };
    this.lchown = function (path, uid, gid, callback) { };
    this.lchownSync = function (path, uid, gid) { };
    this.chmod = function (path, mode, callback) { };
    this.chmodSync = function (path, mode) { };
    this.fchmod = function (fd, mode, callback) { };
    this.fchmodSync = function (fd, mode) { };
    this.lchmod = function (path, mode, callback) { };
    this.lchmodSync = function (path, mode) { };
    this.stat = function (path, callback) { };
    this.lstat = function (path, callback) { };
    this.thistat = function (fd, callback) { };
    this.statSync = function (path) { return new Fs.Stats();};
    this.lstatSync = function (path) { return new Fs.Stats(); };
    this.thistatSync = function (fd) { return new Fs.Stats(); };
    this.link = function (srcpath, dstpath, callback) { };
    this.linkSync = function (srcpath, dstpath) { };
    this.symlink = function (destination, path, type, callback) { };
    this.symlinkSync = function (destination, path, type) { };
    this.readlink = function (path, callback) { };
    this.readlinkSync = function (path) { return new String(); };
    this.realpath = function (path, cache, callback) { };
    this.realpathSync = function (path, cache) { return new String(); };
    this.unlink = function (path, callback) { };
    this.unlinkSync = function (path) { };
    this.rmdir = function (path, callback) { };
    this.rmdirSync = function (path) { };
    this.mkdir = function (path, mode, callback) { };
    this.mkdirSync = function (path, mode) { };
    this.readdir = function (path, callback) { };
    this.readdirSync = function (path) { return new Array(); };
    this.close = function (fd, callback) { };
    this.closeSync = function (fd) { };
    this.open = function (path, flags, mode, callback) { };
    this.openSync = function (path, flags, mode) { };
    this.utimes = function (path, atime, mtime, callback) { };
    this.utimesSync = function (path, atime, mtime) { };
    this.futimes = function (fd, atime, mtime, callback) { };
    this.futimesSync = function (fd, atime, mtime) { };
    this.thisync = function (fd, callback) { };
    this.thisyncSync = function (fd) { };
    this.write = function (fd, buffer, ofthiset, length, position, callback) { };
    this.writeSync = function (fd, buffer, ofthiset, length, position) { return new Number(); };
    this.read = function (fd, buffer, ofthiset, length, position, callback) { };
    this.readSync = function (args) { return new Array();};
    this.readFile = function (filename, encoding, callback) { };
    this.readFileSync = function (filename, encoding) { return new Object(); };
    this.writeFile = function (filename, data, encoding, callback) { };
    this.writeFileSync = function (filename, data, encoding) { };
    this.appendFile = function (filename, data, encoding, callback) { };
    this.appendFileSync = function (filename, data, encoding) { };
    this.watchFile = function (filename, options, listener) { };
    this.unwatchFile = function (filename) { };
    this.watch = function (filename, options, listener) { };
    this.exists = function (path, callback) { };
    this.existsSync = function (path) { return new Boolean(); };
    this.createReadStream = function (path, options) { return new this.ReadStream(); };
    this.createWriteStream = function (path, options) { return new this.WriteStream(); };
}

Fs.Stats = function () {
    this.isFile() = function () { return new Boolean(); };
    this.isDirectory() = function () { return new Boolean(); };
    this.isBlockDevice() = function () { return new Boolean(); };
    this.isCharacterDevice() = function () { return new Boolean(); };
    this.isSymbolicLink() = function () { return new Boolean(); };
    this.isFIFO() = function () { return new Boolean(); };
    this.isSocket() = function () { return new Boolean(); };
}

Fs.ReadStream = function () { return new Stream(); }

Fs.WriteStream = function () {
    var file = new Stream();
    file.bytesWritten = new Number();
    return file;
}

Fs.FSWatcher = function () { this.close = function () { }; }
