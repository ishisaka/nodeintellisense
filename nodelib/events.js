
var Events = {};

Events.EventEmitter = function () {
    this.addListener = function (event, listener) { };
    this.on = function (event, listener) { };
    this.once = function (event, listener) { };
    this.removeListener = function (event, listener) { };
    this.removeAllListeners = function (event) { };
    this.setMaxListeners = function (n) { };
    this.listeners = function (event) { return new Array(); };
    this.emit = function (event) { };
    return new EventEmitter();
};

