import Figure from "./figure";

/**
 * Class Cross describes Cross figure logic
 */
class Cross extends Figure {
    /**
     * Zero constructor.
     */
    constructor() {
        super();

        /** @var {String} code of figure */
        this.code = 'cross';
    }

    /**
     * Returns figure symbol
     *
     * @returns {String}
     */
    getFigure() {
        return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"\n' +
            '                 xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"\n' +
            '                 viewBox="0 0 640 640" class="figure-svg">\n' +
            '                <defs>\n' +
            '                    <path d="M614.81 614.43L28.24 27.86" id="e1vPANiMpq"></path>\n' +
            '                    <path d="M25.95 614.81L612.52 28.24" id="a1suyTc3h7"></path>\n' +
            '                </defs>\n' +
            '                <g>\n' +
            '                    <g>\n' +
            '                        <g>\n' +
            '                            <g>\n' +
            '                                <use xlink:href="#e1vPANiMpq" opacity="1" fill-opacity="0" stroke="#4851a8"\n' +
            '                                    stroke-width="75"\n' +
            '                                    stroke-opacity="1">\n' +
            '                                </use>\n' +
            '                            </g>\n' +
            '                        </g>\n' +
            '                        <g>\n' +
            '                            <g>\n' +
            '                                <use xlink:href="#a1suyTc3h7" opacity="1" fill-opacity="0" stroke="#4851a8"\n' +
            '                                    stroke-width="75" stroke-opacity="1">\n' +
            '                                </use>\n' +
            '                            </g>\n' +
            '                        </g>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </svg>';
    }

    /**
     * Returns figure code
     *
     * @returns {String}
     */
    getFigureCode() {
        return this.code;
    }

    /**
     * Returns flag of new step
     *
     * @returns {Boolean}
     */
    isNewStep() {
        return true;
    }
}

export default Cross;
