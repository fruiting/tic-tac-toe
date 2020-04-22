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

        /** @var {Number} coordinate Start value of coordinate */
        this._coordinate = 0;

        /** @var {Number} step Step of coordinates in cells */
        this._step = 0;
    }

    /**
     * Calculates coordinates values
     *
     * @param {Number} perpendicularNumber Number of row or col
     *
     * @returns {VoidFunction}
     */
    calculateCoordinate(perpendicularNumber) {
        for (let i = 0; i < perpendicularNumber; i++) {
            this._coordinate += this._step;
        }
    }
}

export default WinnerDimensionPerpendicular;
