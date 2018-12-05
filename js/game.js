export default class Game {
    constructor(players, isGameStarted = false) {
        this.state = {
            players,
            isGameStarted,
            currentPlayer: null
        }
    };

    checkCurrentPlayer(playerOne, playerTwo) {
        return game.state.currentPlayer.name == playerOne.name ? playerTwo : playerOne
    }
};
