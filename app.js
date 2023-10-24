/*array of items */

const items = [ "paper", "rock", "scissors"];
const moves = ["winner" ,"winner2"];
const names = ["Alix","Élie","Dominique","Morgan","Loïs","Eden","Charlie","Ange","Camille","Stéphane","Ivy","Joy","Cameron","Terry","Taylor","Sidney","Skye","Yuri","Yuma","Yuki","Tomi","Tama","Aoi","Kaori",]
const avatars = [
  {
    id : 1,
    src : "./image/avatar1.png",
  },

  {
    id : 2,
    src : "./image/avatar2.png",
  },

  {
    id : 3,
    src : "./image/avatar3.png",
  },

  {
    id : 4,
    src : "./image/avatar4.png",
  },

  {
    id : 5,
    src : "./image/avatar5.png",
  },

  {
    id : 6,
    src : "./image/avatar6.png"
  },

  {
    id : 7,
    src : "image/avatar7.png",
  },

  {
    id : 8,
    src : "./image/avatar8.png",
  },

  {
    id : 9,
    src : "./image/avatar9.png",
  },


  {
    id : 10,
    src : "./image/avatar10.png",
  },
]

/*generate the different card in the inner html 
const modalcard = document.getElementById("modalcard");

  const avatarCards = avatars.map(avatar => {
    return `
      <div class="container-fluid bg-warning d-flex justify-content-center">
        <div class="card border border-dark rounded">
          <img id=${avatar.src} src=${avatar.src} alt="card-img" class="card-img">
        </div>
      </div>
    `
  }).join("")


modalcard.innerHTML = avatarCards;*/




var choice = document.getElementById("choice");
var replay = document.getElementById("replay");
var annoucement= document.getElementById("annoucement");

/*Avatar/skin/character */
const computerAvatar= document.getElementById("computerAvatar");
const playerAvatar= document.getElementById("playerAvatar");

/*names */
const computerName = document.getElementById("computerName");

/*bouttons items */
const play = document.getElementById("play");
const playbtn = document.getElementById("btnplay");
const btns = document.querySelectorAll(".btn-check");
const btnReplay = document.getElementById("btnreplay");


const computerSelection = document.getElementById("computerSelection");
const playerSelection = document.getElementById("playerSelection");
const playerIsWinning = document.getElementById("playerIsWinning");

/*winning items */
const computerIsWinning = document.getElementById("computerIsWinning");
const stars = document.querySelectorAll(".star");
const confettis = document.querySelectorAll(".confetti");



/* Generate a random image and names for the computer avatar  */

const randomItems = (arr) =>{
  return Math.floor(Math.random() * arr.length)
}

const randomComputerImg = ()=>{
  /*computer image cannot be the same as the player  */
 computerAvatar.src =  avatars[randomItems(avatars)].src
 if (computerAvatar.src == playerAvatar.src){
  computerAvatar.src =  avatars[randomItems(avatars)].src
 }

}

const randomComputerName = ()=>{
 computerName.textContent = names[randomItems(names)];
}
computerSpeudo =  computerName.textContent;

window.addEventListener("DOMContentLoaded", () => {
  randomComputerImg()
  randomComputerName()
})





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
computerSelection.innerHTML =`<p>${computerName.textContent} choose <span class="text-danger text-capitalize fs-3">${computerChoice}</span> </p>`
playerSelection.innerHTML =`<p>You\'ve choose <span class="text-primary text-capitalize fs-3">${playerChoice}</span> </p>`

} else {  
  /*random animation for the winner */
   const randomMoves = (arr) =>{
    return Math.floor(Math.random() * arr.length);
    } 
  
    var winnerMoves = moves[randomMoves(moves)]
 

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

 
  computerSelection.innerHTML = ""
   playerSelection.innerHTML = ""

  randomComputerImg()
  randomComputerName()
})
}

})
);



