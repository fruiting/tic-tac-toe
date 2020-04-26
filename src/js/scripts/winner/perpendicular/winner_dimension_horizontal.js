import functions from "../../functions";
import WinnerDimensionPerpendicular from "./winner_dimension_perpendicular";

/**
 * Class WinnerDimensionHorizontal which describes logic of winner detection in horizontal dimensions
 */
class WinnerDimensionHorizontal extends WinnerDimensionPerpendicular {
    /**
     * WinnerDimensionHorizontal constructor.
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
            win = functions.areArrayObjectsEqual(this._board[i]);
            if (win) {
                this.calculateCoordinate(i);
                this._winner = this._board[i][0];
                this._winnerCoordinates = {
                    xStart: 0,
                    yStart: this._coordinate,
                    xEnd: this._boardWidth,
                    yEnd: this._coordinate
                };
                break;
            }
        }

        return win;
    }
}

export default WinnerDimensionHorizontal;
