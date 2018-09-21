console.log("BOWSER WAS HERE!");

// Audio Variables

var bgMusic = document.getElementById("bg-music");
var hurryMusic = document.getElementById("hurry-music");
var loseLife = document.getElementById("lose-life");

$(document).ready(); {

    // Initial State Variables

    var round = 1;
    var question = 1;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var running = false;

    // This function runs when you press a key:

    $(document).keyup(function(keyPressed) {

        // This function runs only if you press the Enter key:

        if (keyPressed.keyCode == 13 && running == false) {

            // Changing the boolean blocks the Enter key during the game:

            running = true;

            var time = 60;
            var intervalId;

            run();

            function run() {
                
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
                $("#trivia-container").show();
                $("#press-enter").hide();
                $("#logo").hide();
                $("#question-round").html(round++);
                bgMusic.load();
                hurryMusic.load();
                loseLife.load();
                bgMusic.play();

            }

            function decrement() {

                time--;
                $("#time-left").html(time);

                if (time < 10) {

                    $("#time-left").html("0" + time);

                }

                if (time === 20) {

                    bgMusic.pause();
                    hurryMusic.play();

                }

                if (time === 0) {

                    clearInterval(intervalId);
                    hurryMusic.pause();
                    loseLife.play();

                    loseLife.onended = function() {

                        $("#press-enter").show();
                        $("#logo").show();
                        $("#trivia-container").hide();
                        $("#time-left").html("60");
                        running = false;

                    }

                }

            }

        }

    });

}