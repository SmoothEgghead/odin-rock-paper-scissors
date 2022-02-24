function computerPlay()
{
    num = Math.floor(Math.random()*3);
    
    switch (num) 
    {
        case 1: return "rock";
        break;

        case 2: return "paper";
        break;

        case 0: return "scissors";
        break;
    }
}

function playRound(comp, player)
{
    if (player != "rock" && player != "scissors" && player != "paper")
    {
        return player + " is an invalid selection, please type rock, paper, or scissors."
    }

    if (comp == player)
    {
        return "Tie!"
    }

    else if ((comp == "rock" && player == "paper") || (comp == "paper" && player == "scissors") || (comp == "scissors" && player == "rock"))
    {
        return "You win! " + player + " beats " + comp + "!"
    }

    else
    {
        return "You lose! " + comp + " beats " + player + "!"
    }
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        computerSelection= computerPlay();
        playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
        console.log(playRound(computerSelection, playerSelection));

    }
}

game();