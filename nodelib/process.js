/// <reference path="./events.js"/>
/// <reference path="./stream.js"/>

var Process = function () {
    this.stdout = new Stream();
    this.stderr = new Stream();
    this.stdin = new Stream();
    this.argv = new Array();
    this.execPath = new String();
    this.abort = function () { };
    this.chdir = function (directory) { };
    this.cwd = function () { return new String(); };
    this.env = new String();
    this.exit = function (code) { };
    this.getgid = function () { return new Number(); };
    this.setgid = function (id) { };
    this.getuid = function () { return new Number(); };
    this.setuid = function (id) { };
    this.version = new Number();
    this.versions = new Number();
    this.config = new Object();
    this.installPrefix = new String();
    this.kill = function (pid, signal) { };
    this.pid = new Number();
    this.title = new String();
    this.arch = new String();
    this.platform = new String();
    this.memoryUsage = function () { return new Number(); };
    this.nextTick = function (callback) { };
    this.umask = function (mask) { return new Number(); };
    this.uptime = function () { return new Number(); };
    this.hrtime = function () { return new Array(); };
};

Process.prototype = new Events.EventEmitter();