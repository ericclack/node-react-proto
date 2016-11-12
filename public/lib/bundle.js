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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	const PRISMIC_API_URL = "http://clack.prismic.io/api";

	function getNewsItemsFromPrismic(callback) {
	    // Fire off *async* call to get news and then
	    // call callback with processed news items
	    Prismic.api(PRISMIC_API_URL, function(error, api) {
	        var options = {}; 
	        api.query(Prismic.Predicates.at('document.type', 'news-panel'), 
	                  options, function(error, response) { 
	                      if (error) {
	                          console.log("Prismic error: ", err);
	                      }
	                      else {
	                          callback(processPrismicNewsItems(response.results));
	                      }
	                  });
	    });
	}

	function processPrismicNewsItems(items) {
	    return items.map( (item) => ({
	        title: item.getStructuredText('news-panel.title').asText(),
	        image: item.getImage('news-panel.image').url,
	        description: item.getStructuredText('news-panel.description').asText(),
	        
	    }) );
	}

	//getNewsItemsFromPrismic(console.log);


/***/ }
/******/ ]);