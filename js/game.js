export class Game {
    constructor(state, isGameStarted = false) {
        this.state = {
            ...state,
            isGameStarted,

        }

    };
};
