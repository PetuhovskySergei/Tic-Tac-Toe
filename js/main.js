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


    const player1 = new Player("Вася", "X", "current");
    const player2 = new Player("Петя", "O", "wait");


    //game state initialization

    game.state = {
        currentPlayer: player1
    }

    board.addEventListener("click", function (event) {
        let currentFigure;
        let currentPlayer;

        game.state = {
            isGameStarted: true,
            boardMatrix: {

            },
            // currentPlayer: player1
        };

        event.target.innerHTML = game.state.currentPlayer.figure;

        game.state.currentPlayer = game.state.currentPlayer.name == player1.name ? player2 : player1




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
