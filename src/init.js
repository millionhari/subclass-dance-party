$(document).ready(function(){
  window.dancers = [];
  $('.lineUp').on("click", function(event){
    for(var i = 0; i<window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
  });
  $('a').on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var array = [];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(window.dancers.length);
    $('body').append(dancer.$node);
  });




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

