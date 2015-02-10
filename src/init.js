$(document).ready(function(){
  window.dancers = [];


  $(".lineUp").on("click", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
  });

  $(".interact").on("click", function(event){
    for (var i = 0 ; i < window.dancers.length; i++){
      var $windowDancers = $(window.dancers[i]);
      console.log($windowDancers);
    }
  })

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
    console.log(window.dancers);
    console.log(dancer.left);
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

