let randomNumber = parseInt(Math.random()*100 + 1);
// console.log(randomNumber);

let userGuessNumber = document.querySelector('[input]');
// console.log((userGuessNumber.value));

const guessButton = document.querySelector('.Guess-button');
// console.log(guessButton);

const currentStatus = document.querySelector('.current-status');
// console.log(currentStatus);

const remainingAttempts = document.querySelector('.remaining-attempt');
// console.log(remainingAttempts);

const restartButton = document.querySelector('.restart');
// console.log(restartButton);

const darkmoon = document.querySelector('#darkmoon');
console.log(darkmoon);

const lightmoon = document.querySelector('#lightmoon');
console.log(lightmoon);

let numGuess = 1;
let playGame = true;

if(playGame){
     guessButton.addEventListener('click',function(e){
          e.preventDefault();
          const guess = parseInt(userGuessNumber.value);
          // console.log(guess);
          validateGuess(guess);
     });
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert('please Enter the valid Number');
    }
    else if(guess < 1){
      alert('please Enter the valid Number');
    }
    else if(guess > 100){
      alert('please Enter the valid Number');
    }
    else if(numGuess === 11){
        DisplayCurrentStatus(`Random number was ${randomNumber}`);
        endGame();
    }
    else{
       checkGuess(guess);
    }
}

function checkGuess(guess){
      
     if(guess === randomNumber){
          let emoji = String.fromCodePoint(128526);
          DisplayCurrentStatus(`Your Guess is right ${emoji}`);
          endGame();
     }
     else if(guess > randomNumber){
          let emoji = String.fromCodePoint(128558);
          DisplayCurrentStatus(`To High ${emoji}`);
     }
     else if(guess < randomNumber){
          let emoji = String.fromCodePoint(128543);
          DisplayCurrentStatus(`To Low ${emoji}`);
     }
}

function DisplayCurrentStatus(message){
     userGuessNumber.value = '';
     currentStatus.innerHTML = message;
     numGuess++;
     remainingAttempts.innerHTML = `Reamining-Attempts: ${11-numGuess}`;
}

function endGame(){
   userGuessNumber.value = '';
   userGuessNumber.setAttribute('disabled','');
   document.querySelector('.input-container').innerHTML = "Game Over";
   playGame = false;
   newGame();
}

function newGame(){
     restartButton.addEventListener('click',function(e){

          document.querySelector('.input-container').innerHTML = `<input type="number" min="1" max="100" input>`;
          // console.log('restart butoon me aaya');
          userGuessNumber = document.querySelector('[input]');
          // console.log(userGuessNumber);

          randomNumber = parseInt(Math.random()*100 + 1);
          // console.log(randomNumber);

          DisplayCurrentStatus('Start Guessing.....');

          numGuess = 1;  
          remainingAttempts.innerHTML = `Reamining-Attempts: ${11-numGuess}`;
          console.log(numGuess);
          playGame = true;
          console.log(numGuess);
     })
}

darkmoon.addEventListener('click',function(e){
     darkmoon.classList.add('dark'); 
     lightmoon.classList.remove('light');
     // document.body.style.background = "white";
     document.querySelector('.container').style.background = "#e3e3e3";
     document.querySelector('.container').style.color = "black";
     guessButton.style.color = "black";
     document.querySelector('.question-mark-sign').style.background = "rgb(2, 0, 27)";
});

lightmoon.addEventListener('click',function(e){
     lightmoon.classList.add('light');
     darkmoon.classList.remove('dark');
     // document.body.style.background = "black";
     document.querySelector('.container').style.background = "black";
     document.querySelector('.container').style.color = "white";
     guessButton.style.color = "black";
     document.querySelector('.question-mark-sign').style.background = "black";
})

// set the emoji

// var emoji = String.fromCodePoint(0x1F621);
// // console.log(emoji)

// const d = document.querySelector('.extra').innerHTML = emoji;
// console.log(d)