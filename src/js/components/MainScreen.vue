<template>
    <div class="container">
        <form class="main-screen-form" v-on:submit="runGame">
            <label for="cells-count">Enter cells count (3 to 5)</label>
            <div class="main-screen-form__row">
                <input class="focus-none" id="cells-count" v-model="cellsCount" type="number">
                <button class="btn btn--blue" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                /** @var {Number} cellsCount Number of rows and cols in game table */
                cellsCount: 3
            };
        },

        methods: {
            /**
             * Validates printed number
             *
             * @returns {VoidFunction}
             */
            validateNumber() {
                const min = 3;
                const max = 5;

                if (this.cellsCount < min) {
                    this.cellsCount = min;
                } else if (this.cellsCount > max) {
                    this.cellsCount = max;
                }
            },

            /**
             * Starts game
             *
             * @param {Object} e
             *
             * @returns {VoidFunction}
             */
            runGame(e) {
                e.preventDefault();

                this.validateNumber();
                this.$parent.$data.active = true;
                this.$parent.$props.cells = this.cellsCount;
            }
        }
    }
</script>
