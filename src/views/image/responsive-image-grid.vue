<template>
    <div class="row">
        <div class="column">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/falls2.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
            <img src="https://www.w3schools.com/w3images/nature.jpg">
            <img src="https://www.w3schools.com/w3images/mist.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
        </div>
        <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
            <img src="https://www.w3schools.com/w3images/ocean.jpg">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/mountainskies.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
        </div>
        <div class="column">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/falls2.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
            <img src="https://www.w3schools.com/w3images/nature.jpg">
            <img src="https://www.w3schools.com/w3images/mist.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
        </div>
        <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
            <img src="https://www.w3schools.com/w3images/ocean.jpg">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/mountainskies.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
        </div>
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
.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
    .column {
        flex: 50%;
        max-width: 50%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .column {
        flex: 100%;
        max-width: 100%;
    }
}
</style>