function getComputerChoice() {
    let randomNb = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch(randomNb){
        case 0 :
            computerChoice = "rock";
            break;
        case 1 :
            computerChoice = "paper";
            break;
        case 2 :
            computerChoice = "scissors";
            break;
        default :
            console.log(`randomNb = ${randomNb}`)
            computerChoice = "Error default in getComputerChoice";
            break;
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt(`Round ${actualRound} / ${nbRounds}\nEnter your choice`).toLowerCase();
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        console.log(`humanChoice = ${humanChoice}`)
        console.log("Your choice hasn't been approved by the counsil");
        humanChoice = prompt("Enter your choice again, a good one this time ...").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "rock":
            if(computerChoice == "rock"){
                console.log("Rock against rock, no one wins/loses");
            }else if(computerChoice == "paper"){
                computerScore+=1;
                console.log("Paper beats rock, computer wins");
            }else if(computerChoice == "scissors"){
                humanScore+=1;
                console.log("Rock beats scissors, you win");
            }
            break;
        
        case "paper":
            if(computerChoice == "rock"){
                humanScore+=1;
                console.log("Paper beats rock, you win");
            }else if(computerChoice == "paper"){
                console.log("Paper against paper, no one wins")
            }else if(computerChoice == "scissors"){
                computerScore+=1;
                console.log("Scissors beats paper, computer wins")
            }
            break;

        case "scissors":
            if(computerChoice == "rock"){
                computerScore+=1;
                console.log("Rock beats scissors, computer wins")
            }else if(computerChoice == "paper"){
                humanScore+=1;
                console.log("Scissors beats paper, you win")
            }else if(computerChoice == "scissors"){
                console.log("Scissors against scissors, no one wins")
            }
            break;
    }
}


function playGame(nbRounds){
    let humanChoice;
    let computerChoice;

    for(i = 1; i <= nbRounds; i++){
        actualRound = i;
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        console.log(`getComputerChoice result = ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Your score : ${humanScore}`);
        console.log(`Computer score : ${computerScore}`)
        console.log("\n\n");
    }
    
}


let humanScore = 0;
let computerScore = 0;
let nbRounds = 5;
let actualRound;

playGame(nbRounds);