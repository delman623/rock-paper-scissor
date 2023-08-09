function getComputerChoice(){
    let choice = Math.floor(Math.random() *3);
    
    if(choice === 2) return "sccior";
    if(choice === 1) return "paper";
    else return "rock";
}

function checkWinner(p1, p2){

    if(p1 === "sccior" && p2 === "sccior")
        return "Draw"
    if(p1 === "sccior" && p2 === "paper")
        return "P1 Wins"
    if(p1 === "sccior" && p2 === "rock")
        return "P1 Losses"

    if(p1 === "paper" && p2 === "sccior")
        return "P1 Losses"
    if(p1 === "paper" && p2 === "paper")
        return "Draw"
    if(p1 === "paper" && p2 === "rock")
        return "P1 Wins"
   
    if(p1 === "rock" && p2 === "sccior")
        return "P1 Wins"
    if(p1 === "rock" && p2 === "paper")
        return "P1 Losses"
    if(p1 === "rock" && p2 === "rock")
        return "Draw"

}

function getPlayerChoice(){
    let choice = prompt("Please select you choose, rock, paper, sccior.");
    choice = choice.toLowerCase();

    return choice;
}

function game(){
    let rounds = prompt("How many rounds to play?");
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i<rounds; i++){
        console.log("Rounds : "+(i+1));
        let player = getPlayerChoice();
        let computer = getComputerChoice();
        console.log(checkWinner(player, computer)+", player: "+player+ ", computer :"+computer);
        
        if(checkWinner(player, computer) === "P1 Wins"){
            playerScore ++;
        }

        if(checkWinner(player, computer) === "P1 Losses"){
            computerScore ++;
        }

        console.log("Player "+playerScore+" : "+computerScore+" Computer")
    }

}

game();