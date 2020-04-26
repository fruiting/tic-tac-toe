import functions from "../../functions";
import WinnerDimensionPerpendicular from "./winner_dimension_perpendicular";

/**
 * Class WinnerDimensionVertical which describes logic of winner detection in vertical dimensions
 */
class WinnerDimensionVertical extends WinnerDimensionPerpendicular {
    /**
     * WinnerDimensionVertical constructor.
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
            /** @var {Array|String[]} colResults Array of column results in current iteration */
            const colResults = [];
            for (let j = 0; j < this._board.length; j++) {
                colResults.push(this._board[j][i]);
            }

            win = functions.areArrayObjectsEqual(colResults);
            if (win) {
                this.calculateCoordinate(i);
                this._winner = colResults[0];
                this._winnerCoordinates = {
                    xStart: this._coordinate,
                    yStart: 0,
                    xEnd: this._coordinate,
                    yEnd: this._boardWidth
                };
                break;
            }
        }

        return win;
    }
}

export default WinnerDimensionVertical;
