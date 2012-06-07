var Readline = function(){
    this.createInterface = function (options) { return new Readline.Interface(); };
    ////Event: 'line'
    ////Event: 'pause'
    ////Event: 'resume'
    ////Event: 'close'
    ////Event: 'SIGINT'
    ////Event: 'SIGTSTP'
    ////Event: 'SIGCONT'
};

Readline.Interface = function(){
    this.setPrompt = function (prompt, length){};
    this.prompt = function (preserveCursor){};
    this.question = function (query, callback){};
    this.pause = function (){};
    this.resume = function (){};
    this.close = function (){};
    this.write = function (data, key){};
};
