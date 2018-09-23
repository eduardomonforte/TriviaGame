console.log("BOWSER WAS HERE!");

// Audio Variables

var bgMusic = document.createElement("audio");
bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
var hurryMusic = document.createElement('audio');
hurryMusic.setAttribute("src", "assets/audio/music/overworld-hurry.mp3");
var loseLife = document.createElement("audio");
loseLife.setAttribute("src", "assets/audio/sounds/lose-life.wav");
var jumpSound = document.createElement("audio");
jumpSound.setAttribute("src", "assets/audio/sounds/jump.wav");

$(document).ready(); {

    // Initial State Variables

    var round = 1;
    var question = 1;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var running = false;
    var gameOver = false;
    var roundReset = false;

    // This function runs when you press a key:

    $(document).keyup(function(keyPressed) {

        // This function only runs if you press the Enter key:

        if (keyPressed.keyCode == 13 && running == false) {

            // Changing the boolean blocks the Enter key during the game:

            running = true;

            // This boolean, along with gameOver, prevents a glitch after the first round.

            roundReset = false;

            var time = 60;
            var intervalId;

            run();

            function run() {
                
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
                $("#trivia-container").show();
                $("#question-box").show();
                $("#option1").show();
                $("#option2").show();
                $("#option3").show();
                $("#option4").show();
                $("#press-enter").hide();
                $("#logo").hide();
                $("#question-round").html(round++);
                bgMusic.load();
                hurryMusic.load();
                loseLife.load();
                bgMusic.play();

                clickOptions();

                function clickOptions() {

                    if (!gameOver) {

                        $("#option1").on("click", function() {

                            console.log("Option 1");

                        });

                        $("#option2").on("click", function() {

                            console.log("Option 2");

                        });

                        $("#option3").on("click", function() {

                            console.log("Option 3");

                        })

                        $("#option4").on("click", function() {

                            console.log("Option 4");

                        })

                        $(".button").on("click", function() {

                            jumpSound.play();
                        
                            if (!roundReset) {

                                question++;
                                $(".question-number").html(question);

                            };

                        });

                    };

                };

            };

            function decrement() {

                time--;
                $("#time-left").html(time);

                if (time < 10) {

                    $("#time-left").html("0" + time);

                };

                if (time === 20) {

                    bgMusic.pause();
                    hurryMusic.play();

                };

                if (time === 0) {

                    gameOver = true;
                    roundReset = true;
                    clearInterval(intervalId);
                    $("#question-box").hide();
                    $("#option1").hide();
                    $("#option2").hide();
                    $("#option3").hide();
                    $("#option4").hide();
                    hurryMusic.pause();
                    loseLife.play();

                    loseLife.onended = function() {

                        running = false;
                        $("#press-enter").show();
                        $("#logo").show();
                        $("#trivia-container").hide();
                        $("#time-left").html("60");
                        question = 1;
                        $(".question-number").html(question);

                    };

                };

            };

        };

    });

};