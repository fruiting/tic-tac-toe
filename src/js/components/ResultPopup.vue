<template>
    <div>
        <b-modal :id="id" hide-footer>
            <template v-slot:modal-title>
                Game over
            </template>
            <div class="d-block text-center">
                <h3>{{ winnerFigure }} won</h3>
            </div>
            <b-button class="mt-3" variant="info" block @click="reset">Reset game</b-button>
            <b-button class="mt-3" variant="warning" block @click="goToTheMenu">Menu</b-button>
        </b-modal>
    </div>
</template>

<script>
    import Figure from "../scripts/figures/figure";

    export default {
        name: 'result-popup',

        props: {
            /** @var {Figure} winner Object which describes game winner */
            winner: Figure
        },

        data() {
            return {
                /** @var {String} id attribute of popup */
                id: 'result-popup',

                /** @var {String} winnerFigure */
                winnerFigure: null
            };
        },

        watch: {
            winner: function() {
                this.winnerFigure = this.$props.winner.getFigureCode();
            }
        },

        methods: {
            /**
             * Closes this popup
             *
             * @returns {VoidFunction}
             */
            closePopup() {
                this.$bvModal.hide(this.id);
            },

            /**
             * Resets the game
             *
             * @returns {VoidFunction}
             */
            reset() {
                this.closePopup();
                this.$parent.reset();
            },

            /**
             * Close the game and goes to the main menu
             *
             * @returns {VoidFunction}
             */
            goToTheMenu() {
                this.closePopup();
                this.$parent.close();
            }
        }
    }
</script>
