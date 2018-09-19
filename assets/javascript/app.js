$(document).ready(); {

console.log("I'm linked!")

var bgMusic = document.createElement("audio");
    bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
var hurryMusic = document.createElement("audio");
    hurryMusic.setAttribute("src", "assets/audio/music/hurry.mp3")
var loseLife = document.createElement("audio");
    loseLife.setAttribute("src", "assets/audio/sounds/loselife.wav")

$("#play-button").on("click", function() {

    $("#play-button").hide();
    bgMusic.load();
    bgMusic.play();
    function thirtySeconds() {
        bgMusic.pause();
        hurryMusic.load();
        hurryMusic.play();
    }
    function sixtySeconds() {
        hurryMusic.pause();
        loseLife.play();
        $("#play-button").show();
    }

    setTimeout (thirtySeconds, 30000);
    setTimeout (sixtySeconds, 60000)

})

}