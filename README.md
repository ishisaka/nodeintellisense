Node.js IntelliSense for Visual Studio
===

- Require VisualStudio 2012 / Visual Studio 2010
- This project adds definitions for Node.js libraries to Visual Studio's Javascript IntelliSense. 

##Installation
	Create folder named 'nodelib' under the web site root directory.
	The nodelib folder included files copy to the folder made a while ago.

##Usage
Create Directory whith named 'Scripts' under the site root directory.

your javascript file

	/// <reference path="~/nodelib/node.js"/>

	--your codes
##Licence

Copylight &copy; 2013 Tadahiro Ishisaka (http://isisaka.com/)

See below "LICENSE" file.


##Original

Originally written by kurouninn.

As for the original source code, the MIT license is former-distributed. See below "Original License" file.

URL: <https://bitbucket.org/kurouninn/node.js-visualstudio-intellisense>

Very, very thanks kuroninn.

##History

###v.0.1.1

* Alpha Release.
* Target Node.js version 0.8.19

#### Bug
* Corrected line feed code.

###v.0.1.0: 2013/01/20

* Alpha Release.
* Target Node.js version 0.8.17
* The addition of summary comments from original codes.
* The addition of Punycode library codes.
* All Classes and functions are modified from original code.
* Author changed.





