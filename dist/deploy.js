!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.opsdui=e()}}(function(){return function e(n,t,r){function o(u,a){if(!t[u]){if(!n[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=t[u]={exports:{}};n[u][0].call(s.exports,function(e){var t=n[u][1][e];return o(t?t:e)},s,s.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){angular.module("ngify",[]),n.exports=opsdui=angular.module("idsearch",[]).controller("id-search-controller",["$scope","ExampleDataService",function(e,n){n.getTest("idsearch").then(function(n){e.test=n})}]).constant("__env",window.__env).config([function(){}]),e("./services"),e("./controllers"),e("./filters"),e("./directives")},{"./controllers":2,"./directives":3,"./filters":4,"./services":6}],2:[function(e,n,t){"use strict";window.angular.module("idsearch")},{}],3:[function(e,n,t){arguments[4][2][0].apply(t,arguments)},{dup:2}],4:[function(e,n,t){"use strict";window.angular.module("idsearch")},{}],5:[function(e,n,t){n.exports=ExampleDataService=["AbstractDataService",function(e){return{getTest:function(n){return e.test(n).then(function(e){return console.log(e),e})}}}]},{}],6:[function(e,n,t){"use strict";var r=window.angular.module("idsearch");r.factory("ExampleDataService",e("./ExampleDataService/ExampleDataService"))},{"./ExampleDataService/ExampleDataService":5}]},{},[1])(1)});