


function game(){
    
    let computerscore=0;
    let playerscore=0;
    
   
    function playRound(){

        const list = ["rock", "paper", "scissors"];
        var computerSelection = list[Math.floor(Math.random()*list.length)];
        console.log(computerSelection);
        let playerSelection = prompt("Rock, Paper, Scissors!")

        if(playerSelection=="rock" && computerSelection=="paper" )
        {
            console.log("You lose " + computerSelection + " beats " + playerSelection);
            computerscore++;
        }
        else if(computerSelection=="scissors" && playerSelection=="paper" )
        {
            console.log("You lose " + computerSelection + " beats " + playerSelection);
            computerscore++;
        }
        else if(computerSelection=="rock" && playerSelection=="scissors" )
        {
            console.log("You lose " + computerSelection + " beats " + playerSelection);
            computerscore++;
        }
        else if(computerSelection=="scissors" && playerSelection=="rock" )
        {
            console.log("You win " + playerSelection + " beats " + computerSelection);
            playerscore++;
        }
        else if(computerSelection=="rock" && playerSelection=="paper" )
        {
            console.log("You win " + playerSelection + " beats " + computerSelection);
            playerscore++;
        }
        else if(computerSelection=="paper" && playerSelection=="scissors" )
        {
            console.log("You win " + playerSelection + " beats " + computerSelection);
            playerscore++;
        }
        else if(computerSelection==playerSelection){
            console.log("Tie!");
            playerscore++;
            computerscore++;
        }
        
    }

    for (let i = 0; i < 5; i++) {
        playRound()
      }
    if (computerscore>playerscore){
        console.log("You Lose The Game! "+ computerscore + ":"+playerscore);
    }
    else{
        console.log("You Win The Game! "+ playerscore + ":"+computerscore);
    }
}
