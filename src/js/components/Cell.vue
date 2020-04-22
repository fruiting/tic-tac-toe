<template>
    <div :class="[
        'js-tic-tac-toe-cell',
        'tic-tac-toe-board__cell',
        'tic-tac-toe-board__cell--' + $parent.board.length,
        $props.borderBottom ? 'tic-tac-toe-board__cell--border-bottom' : '',
        $props.borderRight ? 'tic-tac-toe-board__cell--border-right' : ''
        ]" @click="printFigure">
        <div class="tic-tac-toe-board__cell-figure" v-html="figure"></div>
    </div>
</template>

<script>
    export default {
        props: {
            /** @var {NumberConstructor} row Row number of cell in table */
            row: Number,

            /** @var {NumberConstructor} col Col number of cell in table */
            col: Number,

            /** @var {BooleanConstructor} borderBottom Flag describes necessity to use border bottom in cell */
            borderBottom: Boolean,

            /** @var {BooleanConstructor} borderRight Flag describes necessity to use border right in cell */
            borderRight: Boolean
        },

        data() {
            return {
                /** @var {String} figure Figure object */
                figure: null
            };
        },

        mounted() {
            this.resetCell();
        },

        methods: {
            /**
             * Prints active figure
             *
             * @returns {VoidFunction}
             */
            printFigure() {
                if (!this.figure && this.$parent.canDraw) {
                    this.figure = this.$parent.activeFigure.getFigure();
                    if (this.$parent.activeFigure.isNewStep()) {
                        this.$parent.step++;
                    }

                    this.$parent.writeScore(this.$props.row, this.$props.col);
                }
            },

            /**
             * Sets null to figure
             *
             * @returns {VoidFunction}
             */
            resetCell() {
                this.figure = null;
            }
        },
    }
</script>
