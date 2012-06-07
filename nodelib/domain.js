/// <reference path="./events.js"/>

var Domain = function () {
    this.create = function () { return new Domain(); };
    this.run = function (fn) { };
    this.members = new Array();
    this.add = function (emitter) { };
    this.remove = function (emitter) { };
    this.bind = function (cb) { return new Function(); };
    this.intercept = function (cb) { return new Function(); };
    this.dispose = function () { };
};
Domain.prototype = new Events.EventEmitter();

