import Abstract from "../abstract";

/**
 * Abstract Figure class describes tic-tac-toe figures logic
 */
class Figure extends Abstract {
    /**
     * Returns figure symbol
     *
     * @returns {String}
     */
    getFigure() {
        super.implementMethod('getFigure');
    }

    /**
     * Returns figure code
     *
     * @returns {String}
     */
    getFigureCode() {
        super.implementMethod('getFigureCode');
    }

    /**
     * Returns flag of new step
     *
     * @returns {Boolean}
     */
    isNewStep() {
        super.implementMethod('isNewStep');
    }
}

export default Figure;
