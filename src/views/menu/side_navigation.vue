<template>
    <div class="">
        <div class="type1 sidenav">
            <a href="javascript:void(0)" class="btn-close sidenav-item">&times;</a>
            <a href="#" class="sidenav-item">关于</a>
            <a href="#" class="sidenav-item">服务</a>
            <a href="#" class="sidenav-item">客户</a>
            <a href="#" class="sidenav-item">联系人</a>
        </div>

        <div class="type2 sidenav">
            <a href="javascript:void(0)" class="btn-close sidenav-item">&times;</a>
            <a href="#" class="sidenav-item">关于</a>
            <a href="#" class="sidenav-item">服务</a>
            <a href="#" class="sidenav-item">客户</a>
            <a href="#" class="sidenav-item">联系人</a>
        </div>

        <div class="type3 sidenav">
            <a href="javascript:void(0)" class="btn-close sidenav-item">&times;</a>
            <a href="#" class="sidenav-item">关于</a>
            <a href="#" class="sidenav-item">服务</a>
            <a href="#" class="sidenav-item">客户</a>
            <a href="#" class="sidenav-item">联系人</a>
        </div>

        <div class="type4 sidenav">
            <a href="javascript:void(0)" class="btn-close sidenav-item">&times;</a>
            <a href="#" class="sidenav-item">关于</a>
            <a href="#" class="sidenav-item">服务</a>
            <a href="#" class="sidenav-item">客户</a>
            <a href="#" class="sidenav-item">联系人</a>
        </div>

        <button class="type1 btn-open">&#9776; 滑入导航栏，覆盖</button>
        <button class="type2 btn-open">&#9776; 滑入导航栏全屏，覆盖</button>
        <button class="type3 btn-open">&#9776; 滑入导航栏 挤压屏幕内容</button>
        <button class="type4 btn-open">&#9776; 滑入导航栏，挤压屏幕内容 带遮罩</button>
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
            initEvents() {
                this.initSidenavType1()
                this.initSidenavType2()
                this.initSidenavType3()
                this.initSidenavType4()
            },
            initSidenavType1() {
                let btnOpen = document.querySelector('.type1 .btn-open')
                let sideNav = document.querySelector('.type1 .sidenav')
                let btnClose = document.querySelector('.type1 .btn-close')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '500px'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                })
            },
            initSidenavType2() {
                let btnOpen = document.querySelector('.type2 .btn-open')
                let sideNav = document.querySelector('.type2 .sidenav')
                let btnClose = document.querySelector('.type2 .btn-close')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '500px'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                })
            },
            initSidenavType3() {
                let btnOpen = document.querySelector('.type3 .btn-open')
                let sideNav = document.querySelector('.type3 .sidenav')
                let btnClose = document.querySelector('.type3 .btn-close')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '500px'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                })
            },
            initSidenavType4() {
                let btnOpen = document.querySelector('.type4 .btn-open')
                let sideNav = document.querySelector('.type4 .sidenav')
                let btnClose = document.querySelector('.type4 .btn-close')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '500px'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    a
        text-decoration none
        color black
    .btn-open
        border none
        cursor pointer
        font-size 30px
        background-color lightblue
        color #fff
        padding 10px 20px
        display block
        margin auto
        border-radius 4px
        &:hover
            background #6666ff
    .sidenav
        position fixed
        left 0
        top 0
        height 100%
        width 0
        transition width 1s
        background #111
        overflow-x hidden
        padding-top 60px
    .sidenav-item
        color #aaa
        font-style 24px
        display block
        padding 10px 20px
        white-space nowrap
        &:hover
            color #fff
    .btn-close
        font-size 34px
        position absolute
        right 25px
        top 0
        margin-left 50px
        &:focus
            color #fff
</style>