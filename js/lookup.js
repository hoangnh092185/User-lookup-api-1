var apiKey = require('./../.env').apiKey;

function Lookup(){
}

Lookup.prototype.getUserInfo = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    console.log(response.name);
    $('#showUserName').append(response.name);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#showUserName').text("Oops!, Can't seem to find user info.");
  });
};
Lookup.prototype.getRepositories = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(responseinfo) {
    console.log(responseinfo);
    for(var i = 0; i < responseinfo.length; i++){
      // console.log(responseinfo[i].name);
      var respositories = responseinfo[i].name
      $('#showInfo').append(respositories + '<br>');
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#showInfo').text("Oops! No respositories were found.");
  });
}
exports.lookupModule = Lookup;
