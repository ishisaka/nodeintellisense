/// node.js 0.8.18

function require(name) {
    return require.modules[name];
};

// Contains modules recognized by require()
// Add a property to this object to support
// other modules.
require.modules = {};

require.resolve = new Function();
require.cache = new Object();
require.extensions = new Array();