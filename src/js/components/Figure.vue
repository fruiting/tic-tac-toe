<template>
    <svg>
        <use xlink:href="#icon-cross"></use>
    </svg>
</template>

<script>
    export default {
        name: 'figure',

        props: {
            /** @var {StringConstructor} icon Svg icon id */
            icon: String
        }
    }
</script>
