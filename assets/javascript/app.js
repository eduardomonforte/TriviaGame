$(document).ready(); {

    console.log("BOWSER WAS HERE!");

    // Initial State Variables

    var round = 1;
    var question = 1;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var running = false;

    // Audio Variables

    var bgMusic = document.createElement("audio");
    bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
    bgMusic.load();
    var hurryMusic = document.createElement("audio");
    hurryMusic.setAttribute("src", "assets/audio/music/overworld-hurry.mp3");
    hurryMusic.load();
    var loseLife = document.createElement("audio");
    loseLife.setAttribute("src", "assets/audio/sounds/lose-life.wav");
    loseLife.load();

    // The interface requires some elements to be hidden by default:

    $("#trivia-container").hide();
    $("#flagpole-down").hide();

    // This function runs when you press a key:

    $(document).keyup(function(keyPressed) {

        // This function runs only if you press the Enter key:

        if (keyPressed.keyCode == 13 && running == false) {

            // The boolean changes when the game is running.
            // Ths prevents the Enter key from having any effect during the game.

            running = true;

            var time = 60;
            var intervalId;

            run();

            function run() {
                
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
                $("#trivia-container").show();
                $("#question-round").html(round++);
                $("#press-enter").hide();
                $("#logo").hide();
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