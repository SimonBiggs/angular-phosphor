/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var myapp = document.getElementById('my-app');
	myapp.parentNode.removeChild(myapp);
	var myappcontainer = document.getElementById('my-app-container');
	myappcontainer.appendChild(myapp);
	var myherodetail = document.getElementById('my-hero-detail');
	myherodetail.parentNode.removeChild(myherodetail);
	var myherodetailcontainer = document.getElementById('my-hero-detail-container');
	myherodetailcontainer.appendChild(myherodetail);
	var myheroform = document.getElementById('my-hero-form');
	myheroform.parentNode.removeChild(myheroform);
	var myheroformcontainer = document.getElementById('my-hero-form-container');
	myheroformcontainer.appendChild(myheroform);
	//# sourceMappingURL=index.js.map

/***/ }
/******/ ]);