import WinnerDimensionBase from "../winner_dimension_base";

/**
 * Class WinnerDimensionPerpendicular is a parent class for horizontal and vertical classes
 */
class WinnerDimensionPerpendicular extends WinnerDimensionBase {
    /**
     * WinnerDimensionPerpendicular constructor.
     *
     * @param board
     */
    constructor(board) {
        super(board);
        this._coordinate = document.querySelector('.js-tic-tac-toe-cell').offsetWidth;
    }

    /**
     * Calculates coordinates values
     *
     * @param {Number} perpendicularNumber Number of row or col
     *
     * @returns {VoidFunction}
     */
    calculateCoordinate(perpendicularNumber) {
        this._coordinate = (this._coordinate / 2) * (perpendicularNumber + (perpendicularNumber + 1));
    }
}

export default WinnerDimensionPerpendicular;
