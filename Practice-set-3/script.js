let userScore = 0;
let computerScore = 0;
let scoreboard = document.querySelector(".scoreboard");

function batProcess(){
  
  document.querySelector("#bat").addEventListener("click", ()=>{

    
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
    if (computerChoice === "Ball") {
      resultMsg = `User is Won. Please play again 🙃.`;
    } else if (computerChoice === "Bat") {
      resultMsg = `Match is tie. Please play again 🙃.`;
    } else if (computerChoice === "Stump") {
      resultMsg = `computer is won Please play again 🙃.`;
    }
    document.querySelector("#result-msg").textContent = `User choice is Ball and computer is ${computerChoice}, so ${resultMsg}`;
    
    })
  
       
}

function ballProcess(){
    document.querySelector("#ball").addEventListener("click", ()=>{

    
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
        if (computerChoice === "Ball") {
          resultMsg = `Match is tie. Please play again 🙃.`;
        } else if (computerChoice === "Bat") {
          resultMsg = `computer is won. Please play again 🙃.`;
        } else if (computerChoice === "Stump") {
          resultMsg = `User is Won. Please play again 🙃.`;
        }
        document.querySelector("#result-msg").textContent = `User choice is Ball and computer is ${computerChoice}, so ${resultMsg}`;
        
        })
}

function stumpProcess(){
    document.querySelector("#stump").addEventListener("click", ()=>{

    
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
        if (computerChoice === "Ball") {
          resultMsg = `computer is won. Please play again 🙃.`;
        } else if (computerChoice === "Bat") {
          resultMsg = `User is won. Please play again 🙃.`;
        } else if (computerChoice === "Stump") {
          resultMsg = `Match is tie. Please play again 🙃.`;
        }
        document.querySelector("#result-msg").textContent = `User choice is stump and computer is ${computerChoice}, so ${resultMsg}`;
        
        })
}


batProcess();
ballProcess();
stumpProcess();