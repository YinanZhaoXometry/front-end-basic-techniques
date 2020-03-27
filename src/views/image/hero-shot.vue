<template>
    <div class="hero-image">
        <div class="hero-text">
            <h1 style="font-size:50px">I am John Doe</h1>
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
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
<style lang="stylus">
body, html, #app {
    height: 100%;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
<style lang="stylus" scoped>
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.w3schools.com/howto/photographer.jpg');
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
}

.hero-text button:hover {
    background-color: #555;
    color: white;
}
</style>