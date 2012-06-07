
var OS = function () {
    this.hthistname = function () { return new String();};
    this.type = function () { return new String(); };
    this.platform = function () { return new String(); };
    this.arch = function () { return new String(); };
    this.release = function () { return new String(); };
    this.uptime = function () { return new Number(); };
    this.loadavg = function () { return new Array(); };
    this.totalmem = function () { return new Number(); };
    this.freemem = function () { return new Number(); };
    this.cpus = function () { return new Object(); };
    this.networkInterfaces = function () { return new Object(); };
    this.EOL = new String();
};
