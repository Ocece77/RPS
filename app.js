const items = [ "paper", "rock", "scissors"];
const moves = ["winner" ,"winner2"];

var choice = document.getElementById("choice");
var replay = document.getElementById("replay");
var annoucement= document.getElementById("annoucement");
const computerAvatar= document.getElementById("computerAvatar");
const playerAvatar= document.getElementById("playerAvatar");
const play = document.getElementById("play");
const playbtn = document.getElementById("btnplay");
const btns = document.querySelectorAll(".btn-check");
const btnReplay = document.getElementById("btnreplay");
const computerSelection = document.getElementById("computerSelection");
const playerSelection = document.getElementById("playerSelection");
const playerIsWinning = document.getElementById("playerIsWinning");
const computerIsWinning = document.getElementById("computerIsWinning");
const stars = document.querySelectorAll(".star");
const confettis = document.querySelectorAll(".confetti");







/* Hide the play button */
  playbtn.addEventListener("click", ()=>{
  play.classList.add("visually-hidden")
  choice.classList.remove("visually-hidden")

 });

 



/*THE GAME */
/* Getting player choice*/
let playerChoice = undefined;
 let playerScore = 0;
 let computerScore = 0;




btns.forEach(btn => 
  btn.addEventListener("click", (e)=>{
   playerChoice = e.currentTarget.id;

  const computerResult = document.getElementById("computer-result");
  const playerResult = document.getElementById("player-result");

  

 if (playerScore < 5 && computerScore < 5){
  
/* Computer random choice */
const computerRandom = (items)=>{
  return Math.floor(Math.random() * items.length)
}
let computerChoice = items[computerRandom(items)];


/*remove the equality sentence */
if(!equality.classList.contains("visually-hidden")){
  equality.classList.add("visually-hidden");
}

  switch(playerChoice){
    

    /*the player choose rock */
    case "rock":
      if (computerChoice == "paper"){
        computerScore++ ;
      }
      else if (computerChoice == "scissors"){
        playerScore++;
      }
      else if (computerChoice == "rock"){
        equality.classList.remove("visually-hidden");
      }
      break;


        /*the player choose paper */
    case "paper":
      if (computerChoice == "paper"){
        equality.classList.remove("visually-hidden");
      }
      else if (computerChoice == "scissors"){
        computerScore++;
      }
      else if(computerChoice == "rock"){
        playerScore++;
      }
      break;

        /*the player choose scissors */
    case "scissors":
      if (computerChoice == "paper"){
        playerScore++;
      }
      else if (computerChoice == "scissors"){
        equality.classList.remove("visually-hidden");
      }
      else if(computerChoice == "rock"){
        computerScore++;
      }
      break;
  
  }

/*Display the result */
computerResult.textContent = computerScore;
playerResult.textContent = playerScore;
computerSelection.innerHTML =`<p>The computer choose <span class="text-danger text-capitalize fs-3">${computerChoice}</span> </p>`
playerSelection.innerHTML =`<p>You\'ve choose <span class="text-primary text-capitalize fs-3">${playerChoice}</span> </p>`

} else {  
  /*random animation for the winner */
   const randomMoves = (arr) =>{
    return Math.floor(Math.random() * arr.length);
    } 
  
    var winnerMoves = moves[randomMoves(moves)]
    console.log(winnerMoves)
 

  if(computerScore == 5){
    computerAvatar.classList.add(winnerMoves);
    computerIsWinning.classList.remove("visually-hidden");

    confettis.forEach( confetti =>{
            confetti.classList.add("emoticon1");
    });

    stars.forEach( star=>{
            star.classList.add("emoticon2");
    });



  } else if(playerScore == 5){
    playerAvatar.classList.add(winnerMoves);
    playerIsWinning.classList.remove("visually-hidden");

    confettis.forEach( confetti =>{
      confetti.classList.add("emoticon1");
     });

    stars.forEach( star=>{
       star.classList.add("emoticon2");
    });



  }
  
 
  
/*Display the prompt for winning or losing */
  choice.classList.add("visually-hidden");
  replay.classList.remove("visually-hidden");
  
  if (computerScore > playerScore){
    annoucement.textContent = "You Lose against computer ? Bruh 💀 "
  } else {
    annoucement.textContent = "You Win ! You're so smart 💗"
  }

  /*Replay de game  */

btnReplay.addEventListener("click",()=>{

  /*reset scores */
  playerScore = 0;
  computerScore = 0;

  computerResult.textContent = computerScore;
  playerResult.textContent = playerScore;

  computerAvatar.classList.remove(winnerMoves);
  playerAvatar.classList.remove(winnerMoves);


  choice.classList.remove("visually-hidden");
  replay.classList.add("visually-hidden");

  computerIsWinning.classList.add("visually-hidden");
  playerIsWinning.classList.add("visually-hidden");

  confettis.forEach( confetti =>{
    confetti.classList.remove("emoticon1");
   });

  stars.forEach( star=>{
     star.classList.remove("emoticon2");
  });

})

}

})
);





