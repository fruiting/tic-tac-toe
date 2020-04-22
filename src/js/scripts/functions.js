const functions = {
    /**
     * Returns flag which means that all array values are equal
     *
     * @param {Array|Figure[]} array Array of figures
     *
     * @returns {Boolean}
     */
    areArrayObjectsEqual(array) {
        return array.every((val, i, arr) => {
            if (val !== '') {
                return val.getFigureCode() === arr[0].getFigureCode();
            }
        });
    },

    /**
     * Returns an svg of line by coordinates
     *
     * @param {Number} xStart
     * @param {Number} yStart
     * @param {Number} xEnd
     * @param {Number} yEnd
     *
     * @returns {String}
     */
    getWinnerLine(xStart, yStart, xEnd, yEnd) {
        return '<svg class="winner-line-svg">\n' +
            '        <line x1="' + xStart + '" y1="' + yStart + '" x2="' + xEnd + '" y2="' + yEnd + '" class="winner-line-svg__line" />\n' +
            '    </svg>';
    }
};

export default functions;
