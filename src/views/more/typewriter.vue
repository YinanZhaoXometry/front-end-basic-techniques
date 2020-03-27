<template>
    <div class="">
        <h1>Typewriter</h1>

        <button @click="typeWriter()">Click me</button>

        <p id="demo"></p>
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
        typeWriter() {
            var txt = 'Lorem ipsum dummy text blabla. 你好 👋 世界！'
            var speed = 50
            let that = this
            if (that.i < txt.length) {
                document.getElementById('demo').innerHTML += txt.charAt(that.i)
                that.i++
                setTimeout(that.typeWriter, speed)
            }
        }
    }
}
</script>

<style lang="stylus" scoped></style>