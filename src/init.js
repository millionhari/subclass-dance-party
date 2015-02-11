$(document).ready(function(){
  window.dancers = [];


  $(".lineUp").on("click", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
  });
  $(".partyTime").on("click", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].step();
    }
  });

  $(".interact").on("click", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      for(var j = i+1; j < window.dancers.length; j++){
        if(Math.abs(window.dancers[i].collision() - window.dancers[j].collision()) < 50){
          console.log(Math.abs(window.dancers[i].collision() - window.dancers[j].collision()));
          window.dancers[i].stop();
          window.dancers[j].stop();
        }

      }
    }

  });

  var $dancerList = $(".addPoleDancer, .addBreakDancer, .addBlinkyDancer");

  $dancerList.on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );


    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $("body").on("click", "span", function(event){
    $(this).toggleClass("swing");
  });



  // $('img').mouseover(function(){
  //   console.log("test");
  // });

  // $(".addPoleDancer").on("click", function(event){
  //   var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
  //   var dancer = new dancerMakerFunction(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancer.$node);
  // });

  //   $(".addBreakDancer").on("click", function(event){
  //   var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
  //   var dancer = new dancerMakerFunction(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancer.$node);
  // });

});

