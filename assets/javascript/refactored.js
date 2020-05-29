console.log("BOWSER RULEZ!!!");

const questions = [
  {
    question: "WHAT WAS MARIO'S ORIGINAL NAME?",
    options: ["MARIO", "MR. VIDEO", "OSSAN", "JUMPMAN"],
    correctOption: 3,
  },
  {
    question: "WHO WAS MARIO'S FIRST ENEMY?",
    options: ["LUIGI", "DONKEY KONG", "BOWSER", "WARIO"],
    correctOption: 2,
  },
  {
    question: "WHEN WAS SUPER MARIO BROS. RELEASED?",
    options: ["1982", "1983", "1984", "1985"],
    correctOption: 4,
  },
  {
    question: "WHAT WAS MARIO'S ORIGINAL PROFESSION?",
    options: ["CARPENTER", "PLUMBER", "ELECTRICIAN", "PAINTER"],
    correctOption: 1,
  },
  {
    question: "WHAT MAKES MARIO GROW IN SIZE?",
    options: ["COIN", "FIRE FLOWER", "MUSHROOM", "STAR"],
    correctOption: 3,
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

const normalMusic = document.createElement("audio");
normalMusic.setAttribute("src", "assets/audio/music/overworld.mp3");
const hurryMusic = document.createElement("audio");
hurryMusic.setAttribute("src", "assets/audio/music/overworld-hurry.mp3");
const loseLifeSound = document.createElement("audio");
loseLifeSound.setAttribute("src", "assets/audio/sounds/lose-life.wav");
const jumpSound = document.createElement("audio");
jumpSound.setAttribute("src", "assets/audio/sounds/jump.wav");
const flagDownSound = document.createElement("audio");
flagDownSound.setAttribute("src", "assets/audio/sounds/flag-down.wav");

const timeLeftElement = $(".time-left");
const currentRoundElement = $(".current-round");
const currentQuestionElement = $(".current-question");
const logoElement = $(".logo");
const ctaElement = $(".cta");
const triviaContainerElement = $(".trivia-container");

timeLeftElement.text(timeLeft);
currentRoundElement.text(currentRound);
currentQuestionElement.text(currentQuestion);

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
  currentQuestionElement.text(currentQuestion);
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = questions.length;
  resetMusic();
};

const startGame = () => {
  gameOver = false;
  countdown = setInterval(doEverySecond, 1000);
  normalMusic.play();
  logoElement.hide();
  ctaElement.hide();
  triviaContainerElement.show();
};

const changeMusic = () => {
  normalMusic.pause();
  hurryMusic.play();
};

const pauseMusic = () => {
  normalMusic.pause();
  hurryMusic.pause();
};

const resetMusic = () => {
  normalMusic.load();
  hurryMusic.load();
};

const onClickOptions = () => {
  $("#option1").on("click", function () {
    chosenAnswer = 1;
    console.log(chosenAnswer);
  });
  $("#option2").on("click", function () {
    chosenAnswer = 2;
    console.log(chosenAnswer);
  });
  $("#option3").on("click", function () {
    chosenAnswer = 3;
    console.log(chosenAnswer);
  });
  $("#option4").on("click", function () {
    chosenAnswer = 4;
    console.log(chosenAnswer);
  });
};

const doEverySecond = () => {
  timeLeft--;
  timeLeft === 20 && changeMusic();
  timeLeft === 0 && loseLifeSound.play();
  timeLeft >= 10
    ? timeLeftElement.text(timeLeft)
    : timeLeftElement.text("0" + timeLeft);
  checkGameOver();
  ifGameOver();
};

const checkGameOver = () => {
  if (timeLeft === 0 || unansweredQuestions === 0) {
    gameOver = true;
  }
};

const ifGameOver = () => {
  if (gameOver) {
    clearInterval(countdown);
    pauseMusic();
    showResults();
  }
};

const showResults = () => {
  console.log("Results are shown.");
};
