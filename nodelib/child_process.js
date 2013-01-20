/// <reference path="./buffer.js"/>
/// <reference path="./events.js"/>
/// <reference path="./stream.js"/>

var Child_Process = function () {
    this.spawn = function (command, args, options) {
        ///<summary>
        /// Launches a new process with the given `command`, with command line arguments in `args`. <br />
        /// If omitted, `args` defaults to an empty Array.<br />
        /// </summary>
        /// <param name="command" type="String">The command to run.</param>
        /// <param name="args" type="Array" optional="true">Array List of string arguments.</param>
        /// <param name="options" type="Object" optional="true"></param>
        return new ChildProcess();
    };
    this.exec = function (command, options, callback) {
        /// <summary>
        /// Runs a command in a shell and buffers the output.
        /// </summary>
        /// <param name="command" type="String">The command to run, with space-separated arguments.</param>
        /// <param name="options" type="Object" optional="true"></param>
        /// <param name="callback" type="Function">Function called with the output when process terminates.</param>
        return new ChildProcess();
    };
    this.execFile = function (file, args, options, callback) {
        ///<summary>
        /// This is similar to `child_process.exec()` except it does not execute a subshell but rather the specified file directly. <br />
        /// This makes it slightly leaner than `child_process.exec`. It has the same options.
        /// </summary>
        /// <param name="file" type="String">The filename of the program to run.</param>
        /// <param name="args" type="Array">Array List of string arguments.</param>
        /// <param name="options" type="Object"></param>
        /// <param name="callback" type="Function">Function called with the output when process terminates.</param>
        /// <returns type='HTTP.ClientRequest' />
        return new ChildProcess();
    };
    this.fork = function (modulePath, args, options) {
        ///<summary>
        /// This is a special case of the `spawn()` functionality for spawning Node processes. <br />
        /// In addition to having all the methods in a normal ChildProcess instance, <br />
        /// the returned object has a communication channel built-in. <br />
        /// The channel is written to with `child.send(message)` and messages are recieved by a `'message'` event on the child.
        /// </summary>
        /// <param name="modulePath" type="String"></param>
        /// <param name="arguments" type="Array" optional="true">Array List of string arguments.</param>
        /// <param name="options" type="Object" optional="true"></param>
        /// <returns type='HTTP.ClientRequest' />
        return new ChildProcess();
    };
};

var ChildProcess = function () {
    /// <summary>An instance of a child process created by the child_process library.</summary>
    /// <field name="stdin">
    /// A Writable Stream that represents the child process's stdin. <br/> 
    /// Closing this stream via end() often causes the child process to terminate.
    /// </field>
    /// <field name="stdout">A Readable Stream that represents the child process's stdout.</field>
    /// <field name="stderr">A Readable Stream that represents the child process's stderr.</field>
    /// <field name="pid">The PID of the child process.</field>


    ////Event: 'exit'
    ////Event: 'close'
    ////Event: 'disconnect'
    ////Event: 'message'    
    this.stdin = new Stream();
    this.stdout = new Stream();
    this.stderr = new Stream();
    this.pid = new Number();
    this.kill = function (signal) {
        /// <summary>
        /// Send a signal to the child process. <br />
        /// If no argument is given, the process will be sent 'SIGTERM'. <br />
        /// See signal for a list of available signals.
        /// </summary>
        /// <param name='signal' type='String' optional='true' />
    };
    this.send = function (message, sendHandle) {
        /// <summary>Send a message (and, optionally, a handle object) to a child process.</summary>
        /// <param name='message' type='Object' />
        /// <param name='sendHandle' type='Object' optional='true' />
    };
    this.disconnect = function () { };

    this.on = function (event, listener) {
        /// <summary>
        /// event method. 
        /// </summary>
        /// <param name='event' type='String'>
        /// event name.<br />
        /// 'exit', 'close', 'disconnect', 'message'
        /// </param>  
        /// <param name='listener' type='Function'>listenr function.</param>
    };
    this.addListener = function (event, listener) {
        /// <summary>Adds a listener to the end of the listeners array for the specified event.</summary>
        /// <param name="event">event name.</param>
        /// <param name="listener">listener function.</param>
    };
    this.once = function (event, listener) {
        /// <summary>
        /// Adds a **one time** listener for the event.<br /> 
        /// This listener is invoked only the next time the event is fired, after which it is removed.
        /// </summary>
        /// <param name="event">event name.</param>
        /// <param name="listener">listener function.</param>
    };
    this.removeListener = function (event, listener) {
        /// <summary>
        /// Remove a listener from the listener array for the specified event. <br />
        /// **Caution**: changes array indices in the listener array behind the listener.
        /// </summary>
        /// <param name="event">event name.</param>
        /// <param name="listener">listener function.</param>
    };
    this.removeAllListeners = function (event) {
        /// <summary>
        /// Removes all listeners, or those of the specified event.
        /// </summary>
        /// <param name="event" optional="true">event name.</param>
    };
    this.setMaxListeners = function (n) {
        /// <summary>
        /// By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. <br />
        /// This is a useful default which helps finding memory leaks. <br />
        /// Obviously not all Emitters should be limited to 10. <br />
        /// This function allows that to be increased. Set to zero for unlimited.
        /// </summary>
        /// <param name="n"></param>
    };
    this.listeners = function (event) {
        /// <summary>
        /// Returns an array of listeners for the specified event. <br />
        /// This array can be manipulated, e.g. to remove listeners.</summary>
        /// <param name="event">event name.</param>
    };
    this.emit = function (event, arg1, arg2) {
        /// <summary>
        /// Execute each of the listeners in order with the supplied arguments.
        /// </summary>
        /// <param name="event">event name.</param>
        /// <param name="arg1" optional="true"></param>
        /// <param name="arg2" optional="true"></param>
    };

}

//ChildProcess.prototype = new Events.EventEmitter();
