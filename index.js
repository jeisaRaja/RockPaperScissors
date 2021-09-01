    const result = document.createElement('h1');
    const compick = document.createElement('h3');
    const buttons = document.querySelectorAll('button');
    const compickdiv = document.querySelector('.compickdiv');
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {
            console.log(button.id);
          playRound(playerSelection=button.id);
        });
      });
    const resultdiv = document.querySelector('.result');

      let computerscore=0;
      let playerscore=0;
    function playRound(){
        result.textContent=`${playerscore}:${computerscore}`;
        
        const list = ["rock", "paper", "scissors"];
        var computerSelection = list[Math.floor(Math.random()*list.length)];
        // console.log(computerSelection);
        // let playerSelection = prompt("Rock, Paper, Scissors!")

        if(playerSelection=="rock" && computerSelection=="paper" )
        {
            console.log("You lose " + computerSelection + " beats " + playerSelection);
            computerscore++;
            computerpick();
        }
        else if(computerSelection=="scissors" && playerSelection=="paper" )
        {
            console.log("You lose " + computerSelection + " beats " + playerSelection);
            computerscore++;
            computerpick();
        }
        else if(computerSelection=="rock" && playerSelection=="scissors" )
        {
            console.log("You lose " + computerSelection + " beats " + playerSelection);
            computerscore++;
            computerpick();
        }
        else if(computerSelection=="scissors" && playerSelection=="rock" )
        {
            console.log("You win " + playerSelection + " beats " + computerSelection);
            playerscore++;
            computerpick();
        }
        else if(computerSelection=="rock" && playerSelection=="paper" )
        {
            console.log("You win " + playerSelection + " beats " + computerSelection);
            playerscore++;
            computerpick();
        }
        else if(computerSelection=="paper" && playerSelection=="scissors" )
        {
            console.log("You win " + playerSelection + " beats " + computerSelection);
            playerscore++;
            computerpick();
        }
        else if(computerSelection==playerSelection){
            console.log("Tie!");
            computerpick();

        }

        result.textContent=`${playerscore}:${computerscore}`;
        resultdiv.appendChild(result);

        function computerpick(){
            compick.textContent = `The computer picked ${computerSelection}`;
            compickdiv.appendChild(compick);
        }



        console.log(computerscore," ",playerscore);
        if(computerscore==5 || playerscore==5){
        
            
            if(computerscore>playerscore){
                result.textContent=`You Lose! ${playerscore}:${computerscore}`;
                resultdiv.appendChild(result);
            }
    
            else if(computerscore<playerscore){
                result.textContent=`You Win! ${playerscore}:${computerscore}`;
                resultdiv.appendChild(result);
            }
            
            

            computerscore=0;
            playerscore=0;
        }
    }
