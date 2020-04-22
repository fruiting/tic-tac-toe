<template>
    <div class="container">
        <div class="container--col">
            <div class="flex-center">
                <button class="btn btn--blue btn--margin-right" @click="close">Change count</button>
                <button class="btn btn--yellow btn--margin-left" @click="reset">Reset</button>
            </div>
            <div class="board">
                <div class="tic-tac-toe-board js-tic-tac-toe-board" ref="board">
                    <div v-for="(n, i) in board.length">
                        <cell v-for="(n, j) in board.length"
                            :border-bottom="i !== board.length && j !== (board.length - 1)"
                            :border-right="i !== (board.length - 1)" :row="j" :col="i"></cell>
                    </div>
                </div>
                <div class="winner-line" v-html="winnerLine"></div>
            </div>
        </div>

        <result-popup :winner="winner"></result-popup>
    </div>
</template>

<script>
    import Cell from "./Cell";
    import ResultPopup from "./ResultPopup";
    import Cross from "../scripts/figures/cross";
    import Zero from "../scripts/figures/zero";
    import WinnerChecker from "../scripts/winner/winner_checker";
    import functions from "../scripts/functions";

    export default {
        components: {
            Cell,
            ResultPopup
        },

        data() {
            return {
                /** @var {Array|String} board Describes tic-tac-toe board rows and cols */
                board: [],

                /** @var {Figure} Figure object */
                activeFigure: null,

                /** @var {Number} step Number of step */
                step: 0,

                /** @var {Boolean} canDraw Flag which describes ability to draw */
                canDraw: true,

                /** @var {Figure} winner Object describes winner */
                winner: null,

                /** @var {String} winnerLine */
                winnerLine: null
            }
        },

        mounted() {
            this.drawTable();
        },

        methods: {
            /**
             * Draws table
             *
             * @returns {VoidFunction}
             */
            drawTable() {
                this.board = [];
                for (let i = 0; i < this.$attrs.value; i++) {
                    let row = [];
                    for (let j = 0; j < this.$attrs.value; j++) {
                        row.push('');
                    }
                    this.board.push(row);
                }

                this.activeFigure = new Cross();
            },

            /**
             * Closes board
             *
             * @returns {VoidFunction}
             */
            close() {
                this.$parent.active = false;
            },

            /**
             * Resets the game and clears the table
             *
             * @returns {VoidFunction}
             */
            reset() {
                this.winnerLine = null;
                this.drawTable();
                this.$children.forEach(element => {
                    if (element.constructor.options.name === 'cell') {
                        element.resetCell();
                    }
                });
                this.canDraw = true;
            },

            /**
             * Checks score and switches figure if game is not finished
             *
             * @param {Number} row Row number
             * @param {Number} col Col number
             *
             * @returns {VoidFunction}
             */
            writeScore(row, col) {
                this.board[row][col] = this.activeFigure;

                if (this.isFinished()) {
                    this.canDraw = false;
                    this.$bvModal.show('result-popup');
                } else {
                    this.switchFigure();
                }
            },

            /**
             * Returns flag of end game
             *
             * @returns {Boolean}
             */
            isFinished() {
                if (this.step >= this.board.length) {
                    const winnerDetectorObject = new WinnerChecker().checkWinner(this.board);
                    if (winnerDetectorObject) {
                        this.winner = winnerDetectorObject.getWinner();
                        const {xStart, yStart, xEnd, yEnd} = winnerDetectorObject.getWinnerCoordinates();
                        this.winnerLine = functions.getWinnerLine(xStart, yStart, xEnd, yEnd);
                        return true;
                    }
                }

                return false;
            },

            /**
             * Switches figures
             *
             * @returns {VoidFunction}
             */
            switchFigure() {
                if (this.activeFigure instanceof Cross) {
                    this.activeFigure = new Zero();
                } else {
                    this.activeFigure = new Cross();
                }
            }
        }
    }
</script>
