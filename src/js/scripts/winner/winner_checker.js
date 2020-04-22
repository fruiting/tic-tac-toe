import WinnerDimensionHorizontal from "./perpendicular/winner_dimension_horizontal";
import WinnerDimensionVertical from "./perpendicular/winner_dimension_vertical";
import WinnerDimensionDiagonalLeftRight from "./diagonal/winner_dimension_diagonal_left_right";
import WinnerDimensionDiagonalRightLeft from "./diagonal/winner_dimension_diagonal_right_left";

/**
 * Class WinnerChecker which describes logic of winner detection
 */
class WinnerChecker {
    /**
     * WinnerChecker constructor
     */
    constructor() {
        this.classes = [
            WinnerDimensionHorizontal,
            WinnerDimensionVertical,
            WinnerDimensionDiagonalLeftRight,
            WinnerDimensionDiagonalRightLeft
        ];
    }

    /**
     * Returns flag of winning game
     *
     * @param {Array|Array[]} board
     *
     * @returns {WinnerDimensionBase|Null}
     */
    checkWinner(board) {
        let win = null;

        for (let i = 0; i < this.classes.length; i++) {
            /** @var WinnerDimensionBase object */
            const object = new this.classes[i](board);
            win = object.isWinning();

            if (win) {
                return object;
            }
        }

        return null;
    }
}

export default WinnerChecker;
