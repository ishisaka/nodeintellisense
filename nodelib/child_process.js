/// <reference path="./events.js"/>
/// <reference path="./stream.js"/>

var Child_Process = function () {
    this.spawn = function (command, args, options) { return new ChildProcess(); };
    this.exec = function (command, options, callback) { return new ChildProcess(); };
    this.execFile = function (file, args, options, callback) { return new ChildProcess(); };
    this.fork = function (modulePath, args, options) { return new ChildProcess(); };
};

var ChildProcess = function () {
    ////Event: 'exit'
    ////Event: 'close'
    ////Event: 'disconnect'
    ////Event: 'message'    this.stdin = new Stream();
    this.stdout = new Stream();
    this.stderr = new Stream();
    this.pid = new Number();
    this.kill = function (signal) { };
    this.send = function (message, sendHandle) { };
    this.disconnect = function () { };
}

ChildProcess.prototype = new Events.EventEmitter();
