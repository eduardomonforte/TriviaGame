$(document).ready(); {

console.log("BOWSER WAS HERE!")

round = 1;

// Audio Variables:

var bgMusic = document.createElement("audio");
    bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
var hurryMusic = document.createElement("audio");
    hurryMusic.setAttribute("src", "assets/audio/music/overworld-hurry.mp3")
var loseLife = document.createElement("audio");
    loseLife.setAttribute("src", "assets/audio/sounds/lose-life.wav")

// This function runs when you click the Play button.

$("#play-button").on("click", function() {

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
            $("#time-left").html('0' + time);
        }
        if (time === 0) {
            stop();
            loseLife.play();
            loseLife.onended = function() {
            $("#play-button").show();
            $("#logo").show();
            $("#time-left").html("60");
        }
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    run();

    $("#question-round").html(round++)
    $("#play-button").hide();
    $("#logo").hide();
    bgMusic.load();
    hurryMusic.load();
    loseLife.load();
    bgMusic.play();
    function thirtySeconds() {
        bgMusic.pause();
        hurryMusic.play();
    }
    function sixtySeconds() {
        hurryMusic.pause();
    }

// Timeouts are defined here:

    setTimeout (thirtySeconds, 30000);
    setTimeout (sixtySeconds, 60000);

})

}