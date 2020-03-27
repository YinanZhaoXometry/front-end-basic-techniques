<template>
    <div class="container">
        <h2>Parallelogram CSS</h2>
        <div class="parallelogram"></div>

        <h2>Trapezoid CSS</h2>
        <div class="trapezoid "></div>

        <h2>Triangle Up CSS</h2>
        <div class="triangle-up"></div>
        <h2>Triangle Left CSS</h2>
        <div class="triangle-left"></div>
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
.container {
    padding:20px;
}
.parallelogram {
    width: 100px;
    height: 50px;
    transform: skew(20deg);
    background: #555;
}

.trapezoid {
    border-bottom: 50px solid #555;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    height: 0;
    width: 125px;
}

.triangle-up {
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid #555;
}

.triangle-left {
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-right: 50px solid #555;
    border-bottom: 25px solid transparent;
}
</style>