$(document).ready(function(){
  console.log('page ready!');
  var myName;

  var callBack = function(data) {
    console.log('got it!');
    myName = 'cool';

    $('#time').html(data.one);
  };

  console.log('requesting hi.json');
  $.getJSON('/hi.json', callBack);  // makes a request to /hi.json

  console.log('life goes on..')





  var timer = setInterval(function() {

    console.log('requesting time');

    $.ajax('/time.json').done(function(data){

      var $stamp = $('<p>').html(data.now);
      $('#time').append($stamp);

    });

  }, 9000);

  callBack();

  console.log('my name is: ' + myName);




  $.getJSON('/time.json', function(response){

    console.log(response.now);

  });





  var bigRequest = function() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      console.log('this.readyState');
    }

    request.open('GET', '/time.json', true);
    // request.open('GET', '/time.json', false); // this will wait for the json request to come back
    request.send(null); 
    console.log('request sent!');
  }

  bigRequest();




  // $('#get-time').on('click', function(){
  //   $.ajax('/time.json').done(function(data){
  //     $('#time').html(data.now);

  //   });

  // });

});





















