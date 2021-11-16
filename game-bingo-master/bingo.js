$(function(){
  "use strict";

  var
    max = 50,
    bingo = [],
    status = true,
    roulette,
    random,
    number,
    result,
    $number = $("#number"),
    $result = $("#result"),
    $sound_play = $("#sound-play"),
    $sound_pause = $("#sound-pause");

  // for(var i = 1; i <= max; i++) {
  //   bingo.push(i);
  //   $number.append($("<li>").text(("0" + i).slice(-2)));
  // }

  const imageArea = document.getElementById('img_result');
  const images = [
    "./preapp.jpg",
    "./tokyo_image.jpeg",
    "./tokyo_image2.jpeg",
    "./tokyo_image3.jpeg"
  ];

  
  

  // console.log(imageArea.src)

  $("#button").on("click", function(){
    if(status) {
      status = false;
      $(this).text("STOP");
      // $sound_play.trigger("play");
      // $sound_pause.trigger("pause");
      // $sound_pause[0].currentTime = 0;

      roulette = setInterval(function(){
        // random = Math.floor(Math.random() * bingo.length);
        // number = bingo[random];
        // $result.text(imageArea.src);
        const imageNo = Math.floor( Math.random() * images.length)
        imageArea.src = images[imageNo];
      }, 10);
    } else {
      status = true;
      $(this).text("START");
      // $sound_pause.trigger("play");
      // $sound_play.trigger("pause");
      // $sound_play[0].currentTime = 0;

      clearInterval(roulette);

      result = bingo[random];
      bingo.splice(random, 1);

      $result.text(result);
      $number.find("li").eq(parseInt(result, 10) - 1).addClass("hit");
    }
  });
});