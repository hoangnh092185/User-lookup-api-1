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
