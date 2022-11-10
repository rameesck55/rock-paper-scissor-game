    var computerScore =0
    var playerScore=0
    var a=document.getElementById("a1")
    var b=document.getElementById("a2")
    const text = document.getElementById('demo');
    const text2 = document.getElementById('demo2');
    const playerScore_span=document.getElementById("playerScore");
    const computerScore_span=document.getElementById("computerScore");

    var count=0;


    // Rock function begins

  function rock(){

    var cv = Math.floor(Math.random()*3)
   if(count<5){
    count++;
    a.className="fas fa-hand-rock"
      if(cv==0){
        b.className="fas fa-hand-rock"
        text2.innerHTML="Tie"
        text2.style.color = 'blue';
      }
      else if(cv==1){
        b.className="fas fa-hand-paper"
        text2.innerHTML="Lose"
        text2.style.color = 'red';
        computerScore++ ;
        computerScore_span.innerHTML=computerScore
        playerScore_span.innerHTML=playerScore
      }
      else{
        b.className="fas fa-hand-scissors";
        text2.innerHTML="Win"
        text2.style.color = 'green';
        playerScore++ ;
        playerScore_span.innerHTML=playerScore;
        computerScore_span.innerHTML=computerScore

      }
    
   }
   else{
    alert("The game is over")
        
    }

}

    // fuction paper begins


function paper(){
    if(count<5){
    count++;
    var cv = Math.floor(Math.random()*3)
    a.className="fas fa-hand-paper"
      if(cv==0){
        b.className="fas fa-hand-rock"
        text2.innerHTML="Win"
        text2.style.color = 'green';
        playerScore++ ;
        playerScore_span.innerHTML=playerScore
        computerScore_span.innerHTML=computerScore





      }
      else if(cv==1){
        b.className="fas fa-hand-paper"
        text2.innerHTML="Tie"
        text2.style.color = 'blue';

      }
      else{
        b.className="fas fa-hand-scissors"
        text2.innerHTML="Lose"
        text2.style.color = 'red';
        computerScore++ ;
        computerScore_span.innerHTML=computerScore
        playerScore_span.innerHTML=playerScore



      }
}
else{
    alert("The game is over")
        
}

}


// function scissor begins


function sciss(){

    var cv = Math.floor(Math.random()*3)
    if(count<5){
    count++;
    a.className="fas fa-hand-scissors"
      if(cv==0){
        b.className="fas fa-hand-rock"
        text2.innerHTML="lose"
        text2.style.color = 'red';
        computerScore++ ;
        computerScore_span.innerHTML=computerScore
        playerScore_span.innerHTML=playerScore

      }
      if(cv==1){
        b.className="fas fa-hand-paper"
        text2.innerHTML="win"
        text2.style.color = 'green';
        playerScore++ ;
        playerScore_span.innerHTML=playerScore
        computerScore_span.innerHTML=computerScore

      }
      else{
        b.className="fas fa-hand-scissors"
        text2.innerHTML="Tie"
        text2.style.color = 'blue';

      }
}
else{
    alert("The game is over")
        
}


}








  
// }    

// const buttons = document.querySelectorAll('.selection button');
// const showIcon = document.querySelector('.show i');
// const computerShowIcon = document.querySelector('.computer i');

// // Storing the scores.
// let computerScore = 1;
// let playerScore = 1;

// const rockIcon = "fas fa-hand-rock";
// const paperIcon = "fas fa-hand-paper";
// const scissorsIcon = "fas fa-hand-scissors";

// const randomClasses = [rockIcon, paperIcon, scissorsIcon];
// const text = document.getElementById('demo');
// const text2 = document.getElementById('demo2');

// const tie = ()=>{
//     text.innerHTML = "It's a Tie ! ";
//     text.style.color = 'orange';
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = 'orange';
// }

// const win = ()=>{
//     text.innerHTML = "It's a Win ! ";
//     text.style.color = 'rgb(1, 146, 1)';
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = 'rgb(1, 146, 1)';
// }

// const lose = ()=>{
//     text.innerHTML = "You Loosed ! ";
//     text.style.color = 'red';
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = 'red';
// }

// // Game Functionality.
// const game = () =>{
//     buttons.forEach(btn =>{
//         btn.addEventListener('click',(e)=>{
//         // Random rock paper scissor for the computer and clicked ones for the player
//            let clickedBtn = e.target.className;
//            showIcon.className = clickedBtn;
//            let randomNum = Math.floor(Math.random() * randomClasses.length);
//            computerShowIcon.className = randomClasses[randomNum];

//            // If it's a Tie .
//            if(showIcon.className === computerShowIcon.className){
//                pScore.innerHTML = pScore.innerHTML;
//                cScore.innerHTML = cScore.innerHTML;
//                tie();
//            }

//            // if it's not a Tie.
//            else if(showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon){
//                pScore.innerHTML = playerScore;
//                playerScore++;
//                win();
//            }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
//                cScore.innerHTML = computerScore;
//                computerScore++;
//                lose();
//            }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
//                cScore.innerHTML = computerScore;
//                computerScore++;
//                lose();
//            }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
//                pScore.innerHTML = playerScore;
//                playerScore++;
//                win();
//            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
//                cScore.innerHTML = computerScore;
//                computerScore++;
//                lose();
//            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
//                pScore.innerHTML = playerScore;
//                playerScore++;
//                win();
//            }
//         });
//     });
// }

// // Run the game.
// game();