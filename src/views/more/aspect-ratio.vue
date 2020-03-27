<template>
    <div class="">
        <span>Create flexible elements that keep their aspect ratio
            (4:3, 16:9, etc.) when resized:</span>
        <h2>Maintain Aspect Ratio 1:1</h2>
        <p>Resize the window to see the effect.</p>

        <div class="container1">
            <div class="text">1:1 Aspect ratio</div>
        </div>
        <h2>Maintain Aspect Ratio 16:9</h2>
        <p>Resize the window to see the effect.</p>

        <div class="container2">
            <div class="text">16:9 Aspect ratio</div>
        </div>
        <h2>Maintain Aspect Ratio 4:3</h2>
        <p>Resize the window to see the effect.</p>

        <div class="container3">
            <div class="text">4:3 Aspect ratio</div>
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
.text {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 20px;
    color: white;
}

.container1 {
    background-color: darkgreen;
    position: relative;
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
}

.container2 {
    background-color: red;
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.container3 {  
    background-color: navy;
    position: relative;
    width: 100%;
    padding-top: 75%; /* 16:9 Aspect Ratio */
}
</style>