// Initialize scores from local storage or default to 0
let { userScore, computerScore, matchTie } = initializeScores();

function initializeScores() {
  return {
    userScore: parseInt(localStorage.getItem('userScore')) || 0,
    computerScore: parseInt(localStorage.getItem('computerScore')) || 0,
    matchTie: parseInt(localStorage.getItem('matchTie')) || 0
  };
}

function cricketProcess() {
  document.querySelector("#bat").addEventListener("click", () => {
    playMatch("Bat");
  });

  document.querySelector("#ball").addEventListener("click", () => {
    playMatch("Ball");
  });

  document.querySelector("#stump").addEventListener("click", () => {
    playMatch("Stump");
  });

  document.querySelector("#reset").addEventListener("click", () => {
    localStorage.clear();
    ({ userScore, computerScore, matchTie } = initializeScores());
    updateScoreboard();
    location.reload(); // Reload the page
  });
}

function playMatch(userChoice) {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }

  let resultMsg;
  if (userChoice === computerChoice) {
    matchTie++;
    resultMsg = `Match is tie. Please play again 🙃.`;
  } else if (
    (userChoice === "Bat" && computerChoice === "Ball") ||
    (userChoice === "Ball" && computerChoice === "Stump") ||
    (userChoice === "Stump" && computerChoice === "Bat")
  ) {
    userScore++;
    resultMsg = `User is Won. Please play again 🙃.`;
  } else {
    computerScore++;
    resultMsg = `Computer is won. Please play again 🙃.`;
  }

  // Update local storage
  localStorage.setItem('userScore', userScore);
  localStorage.setItem('computerScore', computerScore);
  localStorage.setItem('matchTie', matchTie);

  updateScoreboard();
  document.querySelector(
    "#result-msg"
  ).textContent = `User choice is ${userChoice} and computer is ${computerChoice}, so ${resultMsg}`;
}

function updateScoreboard() {
  document.querySelector(".userScoreBoard span").textContent = `User score is : ${userScore}`;
  document.querySelector(".computerScoreBoard span").textContent = `Computer score is : ${computerScore}`;
  document.querySelector(".matchTie span").textContent = `Match Tie is : ${matchTie}`;
}

cricketProcess();
