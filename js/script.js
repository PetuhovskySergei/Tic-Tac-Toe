window.onload = function () {
    let board = document.getElementById("board");

    function generateMatrix(size) {
        for (let y = 1; y <= size; y++) {
            for (let x = 1; x <= size; x++) {
                let newItem = document.createElement("div");
                newItem.setAttribute("class" , "item");
                newItem.setAttribute("x" , x);
                newItem.setAttribute("y" , y);

                board.appendChild(newItem);
            }
        }
    }

    generateMatrix(3);

    let game = new Game("Waiting");

    let player1 = new Player("Вася", "X", "current");
    let player2 = new Player("Петя", "O", "wait");
    let players = [player1, player2];

    board.addEventListener("click", function (event) {
        let currentFigure;
        let currentPlayer;

        game.state = "In game";
        for (let i = 0; i < players.length; i++) {
            if (players[i].turn === "current") {
                event.target.innerText = players[i].figure;
                players[i].turn = "wait";
                currentFigure = players[i].figure;
                currentPlayer = players[i].name;
                continue;
            };
            players[i].turn = "current";
        };



        function boardCheck() {
            let verticalCount = 0,
                horizontalCount = 0,
                diagonalCount = 0;

            for (let i = 0; i < board.childNodes.length; i++) {
                if (event.target.attributes.y.value == board.childNodes[i].getAttribute("y") && event.target.innerText == board.childNodes[i].innerText) {
                    horizontalCount++
                }

                if (event.target.attributes.x.value == board.childNodes[i].getAttribute("x") && event.target.innerText == board.childNodes[i].innerText) {
                    verticalCount++
                }

                if (
                    (event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") + 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") - 1
                        ||
                    event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") - 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") - 1
                        ||
                    event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") - 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") + 1
                        ||
                    event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") + 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") + 1)
                        && event.target.innerText == board.childNodes[i].innerText) {
                    diagonalCount++
                }
            }

            if (horizontalCount == 3 || verticalCount == 3 || diagonalCount == 3) {
                alert(currentPlayer + " is winner");
            };
        }


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



        // for (let j = 0; j < board.childNodes.length; j++) {
        //     let winner = "";
        //
        //
        //     if (board.childNodes[j-1] === undefined || board.childNodes[j+1] === undefined || board.childNodes[j-3] === undefined
        //         || board.childNodes[j+3] === undefined || board.childNodes[j-4] === undefined || board.childNodes[j+4] === undefined) {
        //         continue;
        //     }
        //
        //     if (board.childNodes[j].innerText === "") {
        //         continue;
        //     } else if ((board.childNodes[j].innerText) == (board.childNodes[j+1].innerText) && (board.childNodes[j].innerText) == (board.childNodes[j-1].innerText)) {
        //         alert("asdad")
        //     } else if ((board.childNodes[j].innerText) == (board.childNodes[j+3].innerText) && (board.childNodes[j].innerText) == (board.childNodes[j-3].innerText)) {
        //         alert("asdad")
        //     } else if ((board.childNodes[j].innerText) == (board.childNodes[j+4].innerText) && (board.childNodes[j].innerText) == (board.childNodes[j-4].innerText)) {
        //         alert("asdad")
        //     }
        // }

    });
};

class Game {
    constructor(state) {
        this.state = state;
    };
};

class Player {
    constructor(name, figure, turn) {
        this.name = name;
        this.figure = figure;
        this.turn = turn;
    }
}