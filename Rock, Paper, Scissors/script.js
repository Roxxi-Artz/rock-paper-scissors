function getUserChoice() {
    userInput = document.getElementById("userInput").value; 
     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissors' || userInput === 'Sheet' || userInput === 'sheet' || userInput === 'Stone' || userInput === 'stone' || userInput === 'Shears' || userInput === 'shears') {
       document.getElementById("inputResult").innerHTML = `You chose ${userInput}`;
     }
    else if (userInput === 'emp' || userInput === 'EMP'){
        document.getElementById("inputResult").innerHTML = `You chose ${userInput}...  OH GOD YOU KILLED THE COMPUTER... I guess that means you win? Cheater.`
     
     } else {
        document.getElementById("inputResult").innerHTML = `Ok what does ${userInput} even mean, I'm just a Rock Paper Scissors script dude`;
     }
    
   }

   
   function getComputerChoice() {
     
    computerChoice = null 

     switch (Math.floor(Math.random() * 3)) {
       case 0:
        computerChoice === 'rock';
       case 1:
         computerChoice === 'paper';
       case 2:
         computerChoice === 'scissors';

      document.getElementById("computerInput").innerHTML = "The computer is ready."
       }
   }

   function determineWinner(userInput, computerChoice) {
    if (userInput === computerChoice) {
      return 'The game is a tie!';
    } 
      
    else if (userInput === 'rock' || userInput === 'Rock' || userInput === 'stone' || userInput === 'Stone') {
      if (computerChoice === 'paper' || computerChoice === 'Paper' || computerChoice === 'sheet' || computerChoice === 'Sheet') {
        document.getElementById("winner").innerHTML = "Computer Won!"
      } else {
        document.getElementById("winner").innerHTML = "You Won!"
     } 
    }
    
    else if (userInput === 'scissors' || userInput === 'Scissors' || userInput === 'shears' || userInput === 'Shears') {
      if (computerChoice === 'rock' || computerChoice === 'Rock' || computerChoice === 'stone' || computerChoice === 'Stone') {
        document.getElementById("winner").innerHTML = "Computer Won!"
      } else {
        document.getElementById("winner").innerHTML = "You Won!"
      }
    } 
    else if (userInput === 'paper' || userInput === 'Paper' || userInput === 'sheet' || userInput === 'Sheet') {
      if (computerChoice === 'scissors' || computerChoice === 'Scissors' || computerChoice === 'shears' || computerChoice === 'Shears') {
        document.getElementById("winner").innerHTML = "Computer Won!"
      } else {
        document.getElementById("winner").innerHTML = "You sdfghjk!"
        
      }
     }
    }