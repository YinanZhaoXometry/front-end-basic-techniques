<template>
    <div class="wrapper">
        <a href="#" class="sidenav-item about">关于</a>
        <a href="#" class="sidenav-item blog">博客</a>
        <a href="#" class="sidenav-item project">项目</a>
        <a href="#" class="sidenav-item contact">联系我</a>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {  },
        props: {},
        data () {
            return {
                
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
    a
        text-decoration none
    .wrapper
        width 60%
        margin auto
        min-height 500px
        margin-top 100px
        border 1px solid #eee
        position relative
        overflow hidden
    .sidenav-item
        transition left .3s
        cursor pointer
        display block
        position absolute
        font-size 20px
        font-weight 500
        border-radius 0 5px 5px 0
        padding 15px 10px
        box-sizing border-box
        width 110px
        color #fff
        left -70px
        &:hover
            left 0
    .about
        top 20px
        background #4CAF50
    .blog
        top 90px
        background #2196F3
    .project
        top 160px
        background #f44336
    .contact
        top 230px
        background #555
</style>