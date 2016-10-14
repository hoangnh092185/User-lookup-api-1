var apiKey = require('./../.env').apiKey;


$(document).ready(function(){
  $('#find-username').click(function(event){
    event.preventDefault();
    $('#showUserName').append(" ");
    console.log("Hi, i'm an object.");
    var userName = $('#userName').val();
    $('#userName').val("");
    $.get('https://api.github.com/users/'+userName+'?access_token=' + apiKey).then(function(response){
     console.log(response.name);
     $('#showUserName').append("User Name : "+ response.name);
   }).fail(function(error){
     console.log(error.responseJSON.message);
   });
});
});
