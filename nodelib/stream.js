var Stream = function(){
    this.readable = new Boolean();
    this.setEncoding = function (encoding) { };
    this.pause = function () { };
    this.resume = function () { };
    this.destroy = function () { };
    this.pipe = function (destination, options) { };

    this.writable = new Boolean();
    this.write = function (args) { };
    this.end = function (args) { };
    this.destroy = function () { };
    this.destroySoon = function () { };
};
