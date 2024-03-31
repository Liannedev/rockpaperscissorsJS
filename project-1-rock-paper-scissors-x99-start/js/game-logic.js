// All code should be written in this file.
const playerOneMoveOneType;
const playerOneMoveTwoType;
const playerOneMoveThreeType;


const playerOneMoveOneValue;
const playerOneMoveTwoValue;
const playerOneMoveThreeValue;


const playerTwoMoveOneType;
const playerTwoMoveTwoType;
const playerTwoMoveThreeType;


const playerTwoMoveOneValue;
const playerTwoMoveTwoValue;
const playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (player == "Player One") {
        playerOneMoveOneType = moveOneType 
        playerOneMoveOneValue = moveOneValue
        playerOneMoveTwoType = moveTwoType
        playerOneMoveTwoValue = moveTwoValue
        playerOneMoveThreeType = moveThreeType
        playerOneMoveThreeValue = moveThreeValue
    } else if (player == "Player Two") {
        playerTwoMoveOneType = moveOneType
        playerTwoMoveOneValue = moveOneValue
        playerOneMoveTwoType = moveTwoType
        playerTwoMoveTwoValue = moveTwoValue
        playerTwoMoveThreeType = moveThreeType
        playerTwoMoveThreeValue = moveThreeValue
    }
}

const getRoundWinner = (round) => {
    if (playerOneMoveOneType === "rock" && playerTwoMoveOneType === "rock") {
        return "Tie" 
    } else if (playerOneMoveOneType === "rock" && playerTwoMoveOneType === "paper") {
        return "Player Two" 
    } else if (playerOneMoveOneType === "rock" && playerTwoMoveOneType === "scissors") {
        return "Player One"
    } else if (playerOneMoveOneType === "paper" && playerTwoMoveOneType === "rock") {
        return "Player One" 
    } else if (playerOneMoveOneType === "paper" && playerTwoMoveOneType === "paper") {
        return "Tie" 
    } else if (playerOneMoveOneType === "paper" && playerTwoMoveOneType === "scissors") {
        return "Player Two"
    } else if (playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "rock") {
        return "Player Two" 
    } else if (playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "paper") {
        return "Player One" 
    } else if (playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "scissors") {
        return "Tie"
    } 

}