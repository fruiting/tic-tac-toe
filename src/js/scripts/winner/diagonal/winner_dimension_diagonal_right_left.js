import WinnerDimensionBase from "../winner_dimension_base";
import functions from "../../functions";

/**
 * Class WinnerDimensionDiagonalRightLeft describes logic of winner detection in right to left diagonal
 */
class WinnerDimensionDiagonalRightLeft extends WinnerDimensionBase {
    /**
     * WinnerDimensionDiagonalRightLeft constructor.
     *
     * @param {Array|Array[]} board
     */
    constructor(board) {
        super(board);
    }

    /**
     * Checks winning game and return flag
     *
     * @returns {Boolean}
     */
    isWinning() {
        /** @var {Array|Array[]} diagonalResults Array of results in right to left diagonal */
        const diagonalResults = [];
        for (let i = 0; i < this._board.length; i++) {
            /** @var {Array|String[]} reversedArray describes reversed row in horizontal row */
            const reversedArray = this._board[i].slice().reverse();
            diagonalResults.push(reversedArray[i]);
        }

        const win = functions.areArrayObjectsEqual(diagonalResults);
        if (win) {
            this._winner = diagonalResults[0];
            this._winnerCoordinates = {
                xStart: this._boardWidth,
                yStart: 0,
                xEnd: 0,
                yEnd: this._boardWidth
            };
        }

        return win;
    }
}

export default WinnerDimensionDiagonalRightLeft;
