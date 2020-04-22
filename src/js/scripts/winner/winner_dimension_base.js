import Abstract from "../abstract";
import Figure from "../figures/figure";

/**
 * Class WinnerDimensionBase which describes logic of winner detection in all dimensions
 */
class WinnerDimensionBase extends Abstract {
    /**
     * WinnerDimensionBaseConstructor
     *
     * @param {Array|Array[]} board Array which describes game table
     */
    constructor(board) {
        super();

        /** @var {Array|Array[]} _board Array which describes game table */
        this._board = board;

        /** @var {Figure|Null} _winner */
        this._winner = null;

        /** @var {Object|Number[]} _winnerCoordinates Object of winner dimension coordinates */
        this._winnerCoordinates = null;

        /** @var {Number} _boardWidth Width of tic-tac-toe board */
        this._boardWidth = document.querySelector('.js-tic-tac-toe-board').offsetWidth;
    }

    /**
     * Returns object which describes winner of a game
     *
     * @returns {Figure|Null}
     */
    getWinner() {
        return this._winner;
    }

    /**
     * Returns object of winner coordinates
     *
     * @returns {Object|Null}
     */
    getWinnerCoordinates() {
        return this._winnerCoordinates;
    }

    /**
     * Checks winning game and return flag
     *
     * @returns {Boolean}
     */
    isWinning() {
        super.implementMethod('isWinning');
    }
}

export default WinnerDimensionBase;
