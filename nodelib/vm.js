var VM = function () {
    this.runInThisContext = function (code, filename) { return new Object();};
    this.runInNewContext = function (code, sandbox, filename) { return new Object(); };
    this.runInContext = function (code, context, filename) { return new Object(); };
    this.createContext = function (initSandbox) { return new Object(); };
    this.createScript = function (code, filename) { return new VM.Script();};
};

VM.Script = function () {
    script.runInThisContext = function () { };
    script.runInNewContext = function (sandbox) { };
};
