<template>
    <div class="">
        <h2>Hide Input Number Arrows</h2>
        <p><strong>Note:</strong> It is still possible to increment
            the number when you scroll inside the number input.</p>
        <input type="number" value="5">
        <br>
        <input class="hide-arrow" type="number" value="5">
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="stylus" scoped>
/* Chrome, Safari, Edge, Opera */
input.hide-arrow::-webkit-outer-spin-button, input.hide-arrow::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input.hide-arrow[type=number] {
    -moz-appearance: textfield;
}
</style>
