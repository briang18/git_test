function computerplay(){
let a= Math.floor(Math.random()*3);
switch(a){
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    default:
        return "scissors";
}
}

function playerselection(){
    selection=prompt('Enter your choice',"");
    return selection.toLowerCase();
}

function playRound(a, b){
    if(a==b){
    return"The result of the game is a draw";
    }
    else if(a=="rock"){
        switch(b){
            case "paper":
                return "Paper beats rock, you lose";
                break;
            case "scissors":
                return "Rock beats scissors, you win";
        }
    }

    else if(a=="paper"){
        switch(b){
            case "rock":
                return "Paper beats rock, you win";
                break;
            case "scissors":
                    return "Scissors beats paper, you lose";
        }
    }
    
    else if(a=="scissors"){
        switch(b){
            case "paper":
                return "scissors beats paper, you win";
                break;
            case "rock":
                return "Rock beats scissors, you lose"; 
        }
    }
}

function game(a){

    for(i=0; i< 5; i++){
        console.log(a);
    }
}

game(playRound(playerselection(),computerplay()));      
