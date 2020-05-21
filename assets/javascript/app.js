console.log("BOWSER WAS HERE!");

const questions = [
  {
    question: "WHAT WAS MARIO'S ORIGINAL NAME?",
    options: ["MARIO", "MR. VIDEO", "OSSAN", "JUMPMAN"],
    correct: "OSSAN",
  },
  {
    question: "WHO WAS MARIO'S FIRST ENEMY?",
    options: ["LUIGI", "DONKEY KONG", "BOWSER", "WARIO"],
    correct: "DONKEY KONG",
  },
  {
    question: "WHEN WAS SUPER MARIO BROS. RELEASED?",
    options: ["1982", "1983", "1984", "1985"],
    correct: "1985",
  },
  {
    question: "WHAT WAS MARIO'S ORIGINAL PROFESSION?",
    options: ["CARPENTER", "PLUMBER", "ELECTRICIAN", "PAINTER"],
    correct: "CARPENTER",
  },
  {
    question: "WHAT MAKES MARIO GROW IN SIZE?",
    options: ["COIN", "FIRE FLOWER", "MUSHROOM", "STAR"],
    correct: "MUSHROOM",
  },
];

const bgMusic = document.createElement("audio");
bgMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
const hurryMusic = document.createElement("audio");
hurryMusic.setAttribute("src", "assets/audio/music/overworld-hurry.mp3");
const loseLife = document.createElement("audio");
loseLife.setAttribute("src", "assets/audio/sounds/lose-life.wav");
const jumpSound = document.createElement("audio");
jumpSound.setAttribute("src", "assets/audio/sounds/jump.wav");
const flagDown = document.createElement("audio");
flagDown.setAttribute("src", "assets/audio/sounds/flag-down.wav");

let round = 1;
let questionNumber = 1;
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let running = false;
let gameOver = false;
let roundReset = false;
let time = 60;
let intervalId;

function run() {
  console.log("Hi");
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
}

function clickOptions() {
  if (!gameOver) {
    if (!roundReset) {
      $("#option1").on("click", function () {
        console.log("Option 1");
      });
      $("#option2").on("click", function () {
        console.log("Option 2");
      });
      $("#option3").on("click", function () {
        console.log("Option 3");
      });
      $("#option4").on("click", function () {
        console.log("Option 4");
      });
      $(".button").on("click", function () {
        if (questionNumber < questions.length) {
          jumpSound.play();
        }
        if (questionNumber === 1) {
          $("#mario1").hide();
          $("#mario2").show();
        }
        if (questionNumber === 2) {
          $("#mario2").hide();
          $("#mario3").show();
        }
        if (questionNumber === 3) {
          $("#mario3").hide();
          $("#mario4").show();
        }
        if (questionNumber === 4) {
          $("#mario4").hide();
          $("#mario5").show();
        }
        if (questionNumber === questions.length) {
          gameOver = true;
          roundReset = true;
          clearInterval(intervalId);
          $("#mario5").hide();
          $("#flagpole-down").show();
          $("#flagpole-up").hide();
          bgMusic.pause();
          hurryMusic.pause();
          flagDown.play();
          flagDown.onended = function () {
            running = false;
            $("#press-enter").show();
            $("#logo").show();
            $("#flagpole-up").show();
            $("#mario1").show();
            $("#trivia-container").hide();
            $("#question-box").hide();
            $("#option1").hide();
            $("#option2").hide();
            $("#option3").hide();
            $("#option4").hide();
            $("#flagpole-down").hide();
            $("#time-left").html("60");
            questionNumber = 1;
            $(".question-number").html(questionNumber);
          };
        }
        questionNumber++;
        $(".question-number").html(questionNumber);
      });
    }
  }
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
    loseLife.onended = function () {
      running = false;
      $("#press-enter").show();
      $("#logo").show();
      $("#trivia-container").hide();
      $("#time-left").html("60");
      questionNumber = 1;
      $(".question-number").html(questionNumber);
    };
  }
}

$(document).keyup(function (keyPressed) {
  if (keyPressed.keyCode == 13 && running == false) {
    running = true;
    roundReset = false;
    time = 60;
    run();
  }
});
