import {Game} from "./game";
import {Player} from "./player";
import {boardCheck} from "../utils/boardCheck";


window.onload = function () {
    const board = document.getElementById("board");

    // function generateMatrix(size) {
    //     for (let y = 1; y <= size; y++) {
    //         for (let x = 1; x <= size; x++) {
    //             let newItem = document.createElement("div");
    //             newItem.setAttribute("class" , "item");
    //             newItem.setAttribute("x" , x);
    //             newItem.setAttribute("y" , y);
    //
    //             board.appendChild(newItem);
    //         }
    //     }
    // }
    //
    // generateMatrix(3);

    const game = new Game("Waiting");


    const player1 = new Player("Вася", "X");
    const player2 = new Player("Петя", "O");


    //game state initialization

    game.state = {
        currentPlayer: player1
    };

    function playerCheck(playerOne, playerTwo) {
        return game.state.currentPlayer.name == playerOne.name ? playerTwo : playerOne
    }

    // console.log(game.state.currentPlayer.figure);

    board.addEventListener("click", function (event) {

        // game.state = {
        //     isGameStarted: true
        //     // boardMatrix: {
        //     //
        //     // }
        // };

        event.target.innerHTML = game.state.currentPlayer.figure;

        game.state.currentPlayer = playerCheck(player1, player2);




        boardCheck();


        // if (
        //     (board.childNodes[0].innerText == currentFigure && board.childNodes[1].innerText == currentFigure && board.childNodes[2].innerText == currentFigure) ||
        //     (board.childNodes[3].innerText == currentFigure && board.childNodes[4].innerText == currentFigure && board.childNodes[5].innerText == currentFigure) ||
        //     (board.childNodes[6].innerText == currentFigure && board.childNodes[7].innerText == currentFigure && board.childNodes[8].innerText == currentFigure) ||
        //     (board.childNodes[0].innerText == currentFigure && board.childNodes[3].innerText == currentFigure && board.childNodes[6].innerText == currentFigure) ||
        //     (board.childNodes[1].innerText == currentFigure && board.childNodes[4].innerText == currentFigure && board.childNodes[7].innerText == currentFigure) ||
        //     (board.childNodes[2].innerText == currentFigure && board.childNodes[5].innerText == currentFigure && board.childNodes[8].innerText == currentFigure) ||
        //     (board.childNodes[0].innerText == currentFigure && board.childNodes[4].innerText == currentFigure && board.childNodes[8].innerText == currentFigure) ||
        //     (board.childNodes[2].innerText == currentFigure && board.childNodes[4].innerText == currentFigure && board.childNodes[6].innerText == currentFigure)
        // ) {
        //     alert(currentPlayer + " is winner");
        //     game.state = "Done";
        // }
    });
};
