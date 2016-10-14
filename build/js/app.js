(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "22d9d2adc40fd56cda6306a9fac47bf182c6daee";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Lookup(){
}

Lookup.prototype.getUserInfo = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    console.log(response.name);
    $('#showUserName').text("User Name : " + response.name);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#showUserName').text("Oops!, Can't seem to find user info.");
  });
}

exports.lookupModule = Lookup;

},{"./../.env":1}],3:[function(require,module,exports){
var Lookup = require('./../js/Lookup.js').lookupModule;


$(document).ready(function() {
  var currentUserNameObject = new Lookup();
  $('#find-username').click(function(event) {
    event.preventDefault();
    $('#showUserName').text("");
    console.log("Hi, i'm an object.");
    var username = $('#userName').val();
    $('#userName').val("");
    currentUserNameObject.getUserInfo(username);
  });
});

},{"./../js/Lookup.js":2}]},{},[3]);
