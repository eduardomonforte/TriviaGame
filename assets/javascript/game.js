$(document).ready(); {

console.log("I'm linked!")

var bgMusic = document.createElement("audio");
    bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
/*    bgMusic.autoplay = true;
    bgMusic.load();
    bgMusic.addEventListener("load", function() {
        bgMusic.play();
    }, true); */

$("#play-button").on("click", function() {
    bgMusic.play();
})

}