Node.js IntelliSense for Visual Studio
===

- Require VisualStudio 2012 / Visual Studio 2010
- This project adds definitions for Node.js libraries to Visual Studio's Javascript IntelliSense. 

##Installation
Copy the `nodelib` folder from this repository to the root directory of your website project.

##Usage

Add

	/// <reference path="~/nodelib/node.js"/>

to `~/Scripts/_references.js`.

###Adding custom modules
To add IntelliSense for non-built-in modules, set <code>require.modules.<i>module name</i></code> to the object exported by the module.  Calling <code>require("<i>module name</i>")</code> will then return that object.

You can usually expose existing files by creating a separate file that looks like this:

```js
/// <reference path="../node_modules/q/q.js" />
require.modules.q = exports;
exports = module.exports = {};
```

And referencing that file in `~/Scripts/_references.js`.

##Licence

Copylight &copy; 2013 Tadahiro Ishisaka (http://isisaka.com/)

See below "LICENSE" file.


##Original

Originally written by kurouninn.

As for the original source code, the MIT license is former-distributed. See below "Original License" file.

URL: <https://bitbucket.org/kurouninn/node.js-visualstudio-intellisense>

Very, very thanks kuroninn.

##History

###v0.2
 * Add support for custom modules defined in `require.modules`.  (by [SLaks](https://github.com/SLaks))

###v0.1.1

* Alpha Release.
* Target Node.js version 0.8.19

###v0.1.0: 2013/01/20

* Alpha Release.
* Target Node.js version 0.8.17
* The addition of summary comments from original codes.
* The addition of Punycode library codes.
* All Classes and functions are modified from original code.
* Author changed.





