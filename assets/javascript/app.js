$(document).ready(); {

console.log("BOWSER WAS HERE!")

// Audio Variables:

var bgMusic = document.createElement("audio");
    bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
var hurryMusic = document.createElement("audio");
    hurryMusic.setAttribute("src", "assets/audio/music/overworld-hurry.mp3")
var loseLife = document.createElement("audio");
    loseLife.setAttribute("src", "assets/audio/sounds/lose-life.wav")

// This function runs when you click the Play button.

$("#play-button").on("click", function() {

    $("#play-button").hide();
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
        loseLife.play();
        loseLife.onended = function() {
            $("#play-button").show();
        }
    }

// Timeouts are defined here:

    setTimeout (thirtySeconds, 30000);
    setTimeout (sixtySeconds, 60000);

})

}