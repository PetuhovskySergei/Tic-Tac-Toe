window.onload = function () {
    let board = document.getElementById("board");

    for (let i = 0; i < 9; i++) {
        let newItem = document.createElement("div");
        newItem.setAttribute("class" , "item");

        board.appendChild(newItem);
    }

    let game = new Game("Waiting");

    let player1 = new Player("Вася", "X", "current");
    let player2 = new Player("Петя", "O", "wait");
    let players = [player1, player2];
    console.log(players)

    board.addEventListener("click", function (event) {
        game.state = "In game";
        for (let i = 0; i < players.length; i++) {
            if (players[i].turn === "current") {
                event.target.innerText = players[i].figure;
                players[i].turn = "wait";
                continue;
            };
            players[i].turn = "current";
        };
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