<template>
    <div class="">
        <h1>JavaScript Progress Bar</h1>

        <div id="myProgress">
            <div id="myBar"></div>
        </div>

        <br>
        <button @click="move()">Click Me</button>
        <div style="float:right;" id="prlabel"></div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            i: 0
        }
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        move() {
            if (this.i == 0) {
                this.i = 1
                var elem = document.getElementById('myBar')
                var label = document.getElementById('prlabel')
                var width = 1
                var id = setInterval(frame, 10)
                function frame() {
                    if (width >= 100) {
                        clearInterval(id)
                        this.i = 0
                    } else {
                        width++
                        elem.style.width = width + '%'
                        label.innerHTML = width + "%";
                    }
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
#myProgress {
    width: 100%;
    background-color: #ddd;
}

#myBar {
    width: 1%;
    height: 30px;
    background-color: #4CAF50;
}
</style>