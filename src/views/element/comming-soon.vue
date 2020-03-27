<template>
        <div class="bgimg">
            <div class="topleft">
                <p>Logo</p>
            </div>
            <div class="middle">
                <h1>COMING SOON</h1>
                <hr>
                <p>35 days left</p>
            </div>
            <div class="bottomleft">
                <p>Some text</p>
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

<style>
body, html, #app {
    height: 100%;
    margin: 0;
    box-sizing:border-box;
}

.bgimg {
    background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');
    height: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 25px;
}

.topleft {
    position: absolute;
    top: 0;
    left: 16px;
}

.bottomleft {
    position: absolute;
    bottom: 0;
    left: 16px;
}

.middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

hr {
    margin: auto;
    width: 40%;
}
</style>