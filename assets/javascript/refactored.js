console.log("BOWSER RULEZ!!!");

const questions = [
  {
    question: "WHAT WAS MARIO'S ORIGINAL NAME?",
    options: ["MARIO", "MR. VIDEO", "OSSAN", "JUMPMAN"],
    correctOption: "OSSAN",
  },
  {
    question: "WHO WAS MARIO'S FIRST ENEMY?",
    options: ["LUIGI", "DONKEY KONG", "BOWSER", "WARIO"],
    correctOption: "DONKEY KONG",
  },
  {
    question: "WHEN WAS SUPER MARIO BROS. RELEASED?",
    options: ["1982", "1983", "1984", "1985"],
    correctOption: "1985",
  },
  {
    question: "WHAT WAS MARIO'S ORIGINAL PROFESSION?",
    options: ["CARPENTER", "PLUMBER", "ELECTRICIAN", "PAINTER"],
    correctOption: "CARPENTER",
  },
  {
    question: "WHAT MAKES MARIO GROW IN SIZE?",
    options: ["COIN", "FIRE FLOWER", "MUSHROOM", "STAR"],
    correctOption: "MUSHROOM",
  },
];

let timeLeft = 60;
let currentRound = 1;
let currentQuestion = 1;
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = questions.length;
let correctOption = "";
let chosenOption = "";
let gameOver = true;
let countdown;

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

const timeLeftElement = $("#time-left");
const currentRoundElement = $("#question-round");
const currentQuestionElement = $(".question-number");

$(document).keyup(function (keyPressed) {
  if (keyPressed.keyCode == 13 && gameOver) {
    resetGame();
    startGame();
  }
});

const resetGame = () => {
  timeLeft = 60;
  currentRoundElement.text(currentRound);
  currentRound++;
  currentQuestion = 1;
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = questions.length;
  currentQuestionElement.text(currentQuestion);
};

const startGame = () => {
  gameOver = false;
  countdown = setInterval(doEverySecond, 1000);
};

const doEverySecond = () => {
  timeLeft--;
  timeLeft >= 10
    ? timeLeftElement.text(timeLeft)
    : timeLeftElement.text("0" + timeLeft);
  checkGameOver();
  isGameOver();
};

const checkGameOver = () => {
  if (timeLeft === 0 || unansweredQuestions === 0) {
    gameOver = true;
  }
};

const isGameOver = () => {
  if (gameOver) {
    clearInterval(countdown);
    showResults();
  }
};

const showResults = () => {
  console.log("Results are shown.");
};
