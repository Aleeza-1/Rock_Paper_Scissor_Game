let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

for(let choice of choices)
    {
        choice.addEventListener("click",()=>{
            let userChoice=choice.getAttribute("id");
            playgame(userChoice);
        });
    }

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
}

const drawGame=()=>{
    msg.innerText="Game Drawn. Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`YOU WIN!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else
    {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`YOU LOOSE. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const playgame=(userChoice)=>{
    console.log("User Choice is = "+userChoice);
    // generate computer choice
    let compChoice=genCompChoice();
    console.log("Computer choice = "+compChoice);
    if(userChoice===compChoice)
        {
            drawGame();
        }
    else
    {
        let userWin=true; 
        if(userChoice==="rock")
        {
            // paper,scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            // rock,scissor
            userWin=compChoice==="scissors"?false:true;
        }
        else
        {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}