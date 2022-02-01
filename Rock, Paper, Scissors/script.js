function getUserChoice() {
    userInput = document.getElementById("userInput").value; 
     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
       document.getElementById("inputResult").innerHTML = `You chose ${userInput}`;
     }
    else if (userInput === 'emp' || userInput === 'EMP'){
        document.getElementById("inputResult").innerHTML = `You chose ${userInput}...  OH GOD YOU KILLED THE COMPUTER... I guess that means you win? Cheater.`
     
     } else {
        document.getElementById("inputResult").innerHTML = `Ok what does ${userInput} even mean, I'm just a Rock Paper Scissors script dude`;
     }
    
   }

   
   function getComputerChoice() {
     
     
     switch (Math.floor(Math.random() * 3)) {
       case 0:
         return 'rock';
       case 1:
         return 'paper';
       case 2:
         return 'scissors';
       }
   }

   function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } 
      
    else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
         return 'Computer Won!';
      } else {
         return 'You won!';
     } 
    }
    
    else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    } 
    else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'You won!';
        
      }
     }
    }