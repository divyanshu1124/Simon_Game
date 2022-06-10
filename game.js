var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern =[];
var userClickedPattern = [];

var level = 0; 
var start = false;
$(".start").click(function(){
    if(!start){
        // $("#level-title").text("Level "+level);
        nextSequence();
        start= true;
    }
});
$(document).keypress(function(){
    if(!start){
        // $("#level-title").text("Level "+level);
        nextSequence();
        start= true;
    }
});

function nextSequence() {
    level++;
    userClickedPattern = [];
    if(level%5 === 0){
    $("#level-title").html("Well Done. You are Doing Great Job. ");
    setTimeout(function(){
        $("#level-title").html("Level "+level);
        var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    }, 2000);}
   
    else  {
        $("#level-title").html("Level "+level);
   
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);}
    
}  
   
   $(".btn").click( function handler(){
       
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    // if(userClickedPattern.length === gamePattern.length)
    checkAnswer(userClickedPattern.length-1);
    
    
    
});

function checkAnswer(index){
    if(gamePattern[index]===userClickedPattern[index]){
    //  console.log("true");
     if(userClickedPattern.length === gamePattern.length)
     {
        var delay = 1000;  // 1 second
        setTimeout(function(){
            
            nextSequence();
        },delay);
     }
   }
    else {
        // console.log("false");
        $("#level-title").html("Game Over,Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        playSound("wrong");

        startOver();
    }
    
}

function startOver(){
    level = 0;
    start = false;
    gamePattern = [];
}

    



function playSound(name){
    var audio = new Audio ("sounds/"+name+".mp3");
    audio.play();
}

function animatePress (currentColor){
    $("#"+currentColor).addClass("pressed");
    var delayInMilliseconds = 100; // 0.1 second
setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
}, delayInMilliseconds);
}











