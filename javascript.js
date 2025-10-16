// function getHumanChoice(){
//     let humanChoice = prompt(`Round ${actualRound} / ${nbRounds}\nEnter your choice`).toLowerCase();
//     while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
//         console.log(`humanChoice = ${humanChoice}`)
//         console.log("Your choice hasn't been approved by the counsil");
//         humanChoice = prompt("Enter your choice again, a good one this time ...").toLowerCase();
//     }
//     return humanChoice;
// }

// function playGame(nbRounds){
//     let humanChoice;
//     let computerChoice;

//     for(i = 1; i <= nbRounds; i++){
//         actualRound = i;
//         humanChoice = getHumanChoice();
//         computerChoice = getComputerChoice();

//         console.log(`getComputerChoice result = ${computerChoice}`);
//         whoWin(humanChoice, computerChoice);
//         console.log(`Your score : ${humanScore}`);
//         console.log(`Computer score : ${computerScore}`)
//         console.log("\n\n");
//     }

// }

function getHumanChoice(event) {
    switch (event.target.id) {
        case "rockBtn":
            return "rock";
            break;
        case "paperBtn":
            return "paper";
            break;
        case "scissorsBtn":
            return "scissors";
            break;
        default:
            console.log(`Default case met in getHumanChoice\n
                event.target.id === ${event.target.id}`);
    }
}

function getComputerChoice() {
    let randomNb = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch (randomNb) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log(`randomNb = ${randomNb}`)
            computerChoice = "Error default in getComputerChoice";
            break;
    }
    return computerChoice;
}

function reset(){
    humanScore = 0;
    nbHumanScore.textContent = "0";
    stringHumanChoice.textContent = "";

    computerScore = 0;
    nbComputerScore.textContent = "0";
    stringComputerChoice.textContent = "";

    stringRoundResult.textContent = "";

    delImageIfExist();


}

function delImageIfExist(){
    if(humanWeapon.querySelector(".imgChoice")){
        let imgHumanChoice = humanWeapon.querySelector(".imgChoice")
        humanWeapon.removeChild(imgHumanChoice);
    }
    if(computerWeapon.querySelector(".imgChoice")){
        let imgComputerChoice = computerWeapon.querySelector(".imgChoice")
        computerWeapon.removeChild(imgComputerChoice);
    }
}

function whoWin(humanChoice, computerChoice) {
    let stringRoundResult = document.querySelector("#stringRoundResult");
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                stringRoundResult.textContent = "Rock against Rock, you're evenly matched";
            } else if (computerChoice == "paper") {
                computerScore += 1;
                stringRoundResult.textContent = "Paper cover rock, computer wins";
            } else if (computerChoice == "scissors") {
                humanScore += 1;
                stringRoundResult.textContent = "Rock smash scissors, you win";
            }
            break;

        case "paper":
            if (computerChoice == "rock") {
                humanScore += 1;
                stringRoundResult.textContent = "Paper cover rock, you win";
            } else if (computerChoice == "paper") {
                stringRoundResult.textContent = "Paper against paper, you're evenly matched";
            } else if (computerChoice == "scissors") {
                computerScore += 1;
                stringRoundResult.textContent = "Scissors slice paper, computer wins";
            }
            break;

        case "scissors":
            if (computerChoice == "rock") {
                computerScore += 1;
                stringRoundResult.textContent = "Rock smash scissors, computer wins";
            } else if (computerChoice == "paper") {
                humanScore += 1;
                stringRoundResult.textContent = "Scissors slice paper, you win";
            } else if (computerChoice == "scissors") {
                stringRoundResult.textContent = "Scissors against scissors, you're evenly matched";
            }
            break;
    }
}

function chooseImage(choice) {
    switch (choice) {
        case "rock":
            return "./images/rock.png"
            break;
        case "paper":
            return "./images/paper.png"
            break;
        case "scissors":
            return "./images/scissors.png"
            break;
        default:
            console.log(`default case met in chooseImage function\n
            choice = ${choice}`)

    }
}

function playRound(event) {
    let humanChoice;
    let computerChoice;

    let imgPathHuman;
    let imgPathComputer;

    let imgHumanChoice;
    let imgComputerChoice;


    if(humanScore < maxScore && computerScore < maxScore) {
        delImageIfExist();

        humanChoice = getHumanChoice(event);
        computerChoice = getComputerChoice();

        stringHumanChoice.textContent = humanChoice;
        stringComputerChoice.textContent = computerChoice;

        imgPathHuman = chooseImage(humanChoice);
        imgHumanChoice = document.createElement("img");
        console.log(`imgPathHuman = ${imgPathHuman}`);
        imgHumanChoice.src = imgPathHuman;
        imgHumanChoice.classList.add("imgChoice")
        humanWeapon.appendChild(imgHumanChoice);


        imgPathComputer = chooseImage(computerChoice);
        imgComputerChoice = document.createElement("img");
        console.log(`imgPathComputer = ${imgPathComputer}`);
        imgComputerChoice.src = imgPathComputer;
        imgComputerChoice.classList.add("imgChoice")
        computerWeapon.appendChild(imgComputerChoice);

        whoWin(humanChoice, computerChoice);
        nbHumanScore.textContent = String(humanScore);
        nbComputerScore.textContent = String(computerScore);

    }
    if(humanScore === maxScore){
        setTimeout(() => {
            alert("You won !!!");
        },100)
        
    } else if(computerScore === maxScore){
        setTimeout(() => {
            alert("The computer won ...");
        },100)
    }
}

let humanScore = 0;
let computerScore = 0;
const maxScore = 3;
let stringHumanChoice = document.querySelector("#stringHumanWeapon");
let stringComputerChoice = document.querySelector("#stringComputerWeapon");

let humanWeapon = document.querySelector("#humanWeapon");
let computerWeapon = document.querySelector("#computerWeapon");

let roundResult = document.querySelector("#roundResult");
let nbHumanScore = document.querySelector("#nbHumanScore");
let nbComputerScore = document.querySelector("#nbComputerScore");
let btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click",reset);

let choices = document.querySelectorAll("#choiceContainer > button")

console.log(choices);
choices.forEach((choice) => {
    choice.addEventListener("click", playRound);
})