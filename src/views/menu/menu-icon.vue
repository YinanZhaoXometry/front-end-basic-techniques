<template>
    <div :class="{ cross: showClose }" class="container" @click="showClose =! showClose">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {  },
        props: {},
        data () {
            return {
                showClose: false
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="stylus" scoped>
    .container
        display inline-block
        cursor pointer
        padding 30px
        div
            width 35px
            height 5px
            background-color #333
            margin 6px 0
            transition .4s
    .cross 
        .bar1
            transform rotate(-45deg) translate(-9px, 6px)
        .bar2
            opacity 0
        .bar3
            transform rotate(45deg) translate(-8px, -7px)
</style>