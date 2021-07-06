var buttoncolors = ["red", "blue","green","yellow"];
var gamepattern = [];
var userclickedpattern = [];
var level = 0;
var t = true;

function nextsequence(){
  userclickedpattern = [];
   level++;
   $("h1").text("Level " + level);
    var randomnumber = Math.floor(Math.random()*4);
  
  var randomChosenColour = buttoncolors[randomnumber];
 gamepattern.push(randomChosenColour);
 playSound(randomChosenColour);
 animatepress(randomChosenColour);
 
 


}


$(".btn").click(function handler(){
    var userchosencolor = $(this).attr("id");
    userclickedpattern.push(userchosencolor);
    
    playSound(userchosencolor);
    animatepress(userchosencolor);
    checkanswer(userclickedpattern.length - 1);
    
});
$(document).keypress(function(){
  
  if (t) {
    $("#level-title").text("Level " + level);
    nextsequence();
    t = false;
  }
  
  
});
function animatepress(nomnom){
  $("#" + nomnom).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function checkanswer(currentLevel){
  if (gamepattern[currentLevel] === userclickedpattern[currentLevel]) {
    console.log("success");
    if (userclickedpattern.length === gamepattern.length){
      setTimeout(function () {
        nextsequence();
      }, 1000);
    }

  } else {
           var wrong = new Audio('sounds/wrong.mp3');
           wrong.play();
    gameover();
    $("h1").text("Game Over, Press Any Key to Restart");
    startover();

  }
}
function gameover(){
  $(".body").addClass("game-over");
  setTimeout( function(){
    $(".body").removeClass("game-over");
  },200);
}
function startover(){
  level = 0;
  t = true;
  gamepattern = [];
}