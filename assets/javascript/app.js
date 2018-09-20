$(document).ready(); {

console.log("BOWSER WAS HERE!");

var round = 1;

$("#trivia-container").hide();

// Audio Variables:

var bgMusic = document.createElement("audio");
    bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
var hurryMusic = document.createElement("audio");
    hurryMusic.setAttribute("src", "assets/audio/music/overworld-hurry.mp3");
var loseLife = document.createElement("audio");
    loseLife.setAttribute("src", "assets/audio/sounds/lose-life.wav");

// This function runs when you press the Enter key:

    $(document).keyup(function(keyPressed) {

    if (keyPressed.keyCode == 13) {

    var time = 60;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        time--;
        $("#time-left").html(time);
        if (time < 10) {
            $("#time-left").html("0" + time);
        }
        if (time === 0) {
            stop();
            loseLife.play();
            loseLife.onended = function() {
            $("#press-enter").show();
            $("#logo").show();
            $("#trivia-container").hide();
            $("#time-left").html("60");
        }
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    run();

    $("#trivia-container").show();
    $("#question-round").html(round++);
    $("#press-enter").hide();
    $("#logo").hide();
    bgMusic.load();
    hurryMusic.load();
    loseLife.load();
    bgMusic.play();
    function fortySeconds() {
        bgMusic.pause();
        hurryMusic.play();
    }
    function sixtySeconds() {
        hurryMusic.pause();
    }

// Timeouts are defined here:

    setTimeout (fortySeconds, 40000);
    setTimeout (sixtySeconds, 60000);

    }

    });

}