import Game from "./game";
import {Player} from "./player";
import {boardCheck} from "../utils/boardCheck";


window.onload = function () {
    const board = document.getElementById("board"),
        player1 = new Player("Вася", "X"),
        player2 = new Player("Петя", "O"),
        game = new Game(player1, player2);

    console.log(board.childNodes);

    game.state = {
        currentPlayer: player1
        // isGameStarted: false
    };

    board.addEventListener("click", function (event) {

        game.state.isGameStarted = true;

        // game.state = Object.assign({}, game, {})

        event.target.innerHTML = game.state.currentPlayer.figure;

        game.state.currentPlayer = Game.checkCurrentPlayer(player1, player2);

        boardCheck();
    });
};
