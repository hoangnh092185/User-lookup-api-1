var Lookup = require('./../js/Lookup.js').lookupModule;


$(document).ready(function() {
  var currentUserNameObject = new Lookup();
  $('#find-username').click(function(event) {
    event.preventDefault();
    $('#showUserName').text("");
    $('#showInfo').text("");
    var username = $('#userName').val();
    $('#userName').val("");
    currentUserNameObject.getUserInfo(username);
    currentUserNameObject.getRepositories(username);
  });
});
