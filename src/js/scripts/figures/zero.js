import Figure from "./figure";

/**
 * Class Zero describes Zero figure logic
 */
class Zero extends Figure {
    /**
     * Zero constructor.
     */
    constructor() {
        super();

        /** @var {String} code of figure */
        this.code = 'zero';
    }

    /**
     * Returns figure symbol
     *
     * @returns {String}
     */
    getFigure() {
        return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
            '                preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" class="figure-svg">\n' +
            '                <defs>\n' +
            '                    <path d="M564.34 320C564.34 454.85 454.85 564.34 320 564.34C185.15 564.34 75.66 454.85 75.66 320C75.66 185.15 185.15 75.66 320 75.66C454.85 75.66 564.34 185.15 564.34 320Z" id="bndJzNs1X"></path>\n' +
            '                    <mask id="maskb2jFtJS4H" x="-74.34" y="-74.34" width="788.67" height="788.67" maskUnits="userSpaceOnUse">\n' +
            '                        <rect x="-74.34" y="-74.34" width="788.67" height="788.67" fill="white"></rect>\n' +
            '                        <use xlink:href="#bndJzNs1X" opacity="1" fill="black"></use>\n' +
            '                    </mask>\n' +
            '                </defs>\n' +
            '                <g>\n' +
            '                    <g>\n' +
            '                        <g>\n' +
            '                            <g mask="url(#maskb2jFtJS4H)">\n' +
            '                                <use xlink:href="#bndJzNs1X" opacity="1" fill-opacity="0"stroke="#c24d42" stroke-width="150" stroke-opacity="1"></use>\n' +
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
        return false;
    }
}

export default Zero;
