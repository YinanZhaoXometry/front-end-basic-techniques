<template>
    <div class="">
        <p>
            <img class="image1" src="https://www.w3schools.com/howto/img_paris.jpg" alt="Paris"
                 width="400" height="300">
        </p>

        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img src="https://www.w3schools.com/howto/img_paris.jpg" alt="Paris"
                         style="width:300px;height:200px">
                </div>
                <div class="flip-box-back">
                    <h2>Paris</h2>
                    <p>What an amazing city</p>
                </div>
            </div>
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
img.image1:hover {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.flip-box {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
}

.flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-box-front {
    background-color: #bbb;
    color: black;
}

.flip-box-back {
    background-color: #555;
    color: white;
    transform: rotateY(180deg);
}
</style>
</head>
<body>

<h1>Image Flip with Text</h1>

</style>