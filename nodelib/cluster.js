/// <reference path="./child_process.js"/>

var Cluster = function () {
    this.settings = new Object();
    this.isMaster = new Boolean();
    this.isWorker = new Boolean();
    this.setupMaster = function (settings) { };
    this.fork = function (env) { new Cluster.Worker(); };
    this.disconnect = function (callback) { };
    this.workers = new Object();
    ////Event: 'fork'
    ////Event: 'online'
    ////Event: 'listening'
    ////Event: 'disconnect'
    ////Event: 'exit'
    ////Event: 'setup'
};

Cluster.Worker = function () {
    this.uniqueID = new String();
    this.process = new ChildProcess();
    this.suicide = new Boolean();
    this.send = function (message, sendHandle) { };
    this.destroy = function () { };
    this.disconnect = function () { };
    ////Event: 'message'
    ////Event: 'online'
    ////Event: 'listening'
    ////Event: 'disconnect'
    ////Event: 'exit'
};
