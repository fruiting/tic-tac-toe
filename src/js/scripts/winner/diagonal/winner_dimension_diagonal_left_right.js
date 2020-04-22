import WinnerDimensionBase from "../winner_dimension_base";
import functions from "../../functions";

/**
 * Class WinnerDimensionDiagonalLeftRight describes logic of winner detection in left to right diagonal
 */
class WinnerDimensionDiagonalLeftRight extends WinnerDimensionBase {
    /**
     * WinnerDimensionDiagonalLeftRight constructor.
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
        let win = false;

        for (let i = 0; i < this._board.length; i++) {
            /** @var {Array|Array[]} diagonalResults Array of results in left to right diagonal */
            const diagonalResults = [];

            for (let j = 0; j < this._board.length; j++) {
                for (let k = 0; k < this._board.length; k++) {
                    if (j === k) {
                        diagonalResults.push(this._board[j][k]);
                    }
                }
            }

            win = functions.areArrayObjectsEqual(diagonalResults);
            if (win) {
                this._winner = this._board[i][0];
                this._winnerCoordinates = {
                    xStart: 0,
                    yStart: 0,
                    xEnd: this._boardWidth,
                    yEnd: this._boardWidth
                };
                break;
            }
        }

        return win;
    }
}

export default WinnerDimensionDiagonalLeftRight
