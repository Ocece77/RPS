const items = [ "paper", "rock", "scissors"];

var choice = document.getElementById("choice");
var replay = document.getElementById("replay");
var annoucement= document.getElementById("annoucement");
const play = document.getElementById("play");
const playbtn = document.getElementById("btnplay");
const btns = document.querySelectorAll(".btn-check");
const btnReplay = document.getElementById("btnreplay");



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

  

 if (playerScore < 5 && computerScore< 5){
  
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



} else {

  choice.classList.add("visually-hidden");
  replay.classList.remove("visually-hidden");
  if (computerScore > playerScore){
    annoucement.textContent = "You Lose against computer ? Bruh 💀 "
  } else {
    annoucement.textContent = "You Win ! You're so smart 💗"
  }
}

})
);

/*Replay de game  */

btnReplay.addEventListener("click",()=>{

  /*reset scores */
  playerScore = 0;
  computerScore = 0;


  choice.classList.remove("visually-hidden");
  replay.classList.add("visually-hidden");


})
