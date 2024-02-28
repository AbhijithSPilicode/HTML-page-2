let strikeButton = document.getElementById("strike");
let resetButton=document.getElementById("reset");

let scoreTeam1=document.getElementById('score-team1');


let scoreTeam2=document.getElementById("score-team2")


let team1Score=0;
let team2Score=0;


let turn=1;
let team1Ball=0;
let team2Ball=0;
let possibleOutcomes=[10,20,30,40,50,60,70,80,90]

function updateScore(){
    scoreTeam1.textContent=team1Score;
    scoreTeam2.textContent=team2Score;
}

function gameOver(){
    gameOverAudio.play()
    if(team1Score>team2Score) alert("Team 1 wins");
    if(team2Score>team1Score) alert("Team 2 wins");
    if(team1Score==team2Score) alert("It is a draw");
}

function resetGame(){
    window.location.reload()
}

resetButton.addEventListener("click",function(){
    resetGame()    
    })

function strikeGame(){
    let randomElement=possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    if(turn==1){
        team1Ball++;
        document.querySelector(`#team1-superover div:nth-child(${team1Ball})`).textContent=randomElement
        if(team1Ball==2){
            turn=2;
        }
        else{
            team1Score+=randomElement;
        }
    }
    if(turn==2){
        team2Ball++;
        document.querySelector(`#team2-superover div:nth-child(${team2Ball})`).textContent=randomElement
        if(team2Ball==6 || team2Wickets==2 || team2Score>team1Score){
            turn=3;
            gameOver();
        }
        else{
            team2Score+=randomElement;
        }
    }
    updateScore()
}
strikeButton.addEventListener("click",function(){
    strikeGame()   
})
