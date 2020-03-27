<template>
    <div class="">
        <h2>Different type of Dividers</h2>

        <p>Dashed</p>
        <hr class="dashed">

        <p>Dotted</p>
        <hr class="dotted">

        <p>Solid</p>
        <hr class="solid">

        <p>Rounded</p>
        <hr class="rounded">
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

<style lang="stylus" >
body {
    font-family: Arial, Helvetica, sans-serif;
}

/* Dashed border */
hr.dashed {
    border-top: 3px dashed #bbb;
}

/* Dotted border */
hr.dotted {
    border-top: 3px dotted #bbb;
}

/* Solid border */
hr.solid {
    border-top: 3px solid #bbb;
}

/* Rounded border */
hr.rounded {
    border-top: 8px solid #bbb;
    border-radius: 5px;
}
</style>