<template>
    <div id="app">
        <tic-tac-toe v-if="active" :value="$props.cells"></tic-tac-toe>
        <main-screen v-else></main-screen>
    </div>
</template>
<script>
    import MainScreen from "./MainScreen";
    import TicTacToe from "./TicTacToe";

    export default {
        components: {
            MainScreen,
            TicTacToe
        },

        props: {
            /** @var {NumberConstructor} cells Cells count */
            cells: Number
        },

        data() {
            return {
                active: false
            };
        }
    }
</script>
