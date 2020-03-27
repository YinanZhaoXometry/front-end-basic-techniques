<template>
    <div class="main">
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

        <div class="type5 sidenav">
            <a href="javascript:void(0)" class="btn-close sidenav-item">&times;</a>
            <a href="#" class="sidenav-item">关于</a>
            <a href="#" class="sidenav-item">服务</a>
            <a href="#" class="sidenav-item">客户</a>
            <a href="#" class="sidenav-item">联系人</a>
        </div>

        <button class="type1 btn-open">&#9776; 滑入导航栏，覆盖</button>
        <button class="type2 btn-open">&#9776; 滑入导航栏全屏，覆盖</button>
        <button class="type3 btn-open">&#9776; 滑入导航栏 挤压内容区域</button>
        <button class="type4 btn-open">&#9776; 滑入导航栏，挤压内容区域 带遮罩</button>
        <button class="type5 btn-open">&#9776; 滑入导航栏，推出内容区域</button>
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
            this.initEvents()
        },
        methods: {
            initEvents() {
                this.initSidenavType1()
                this.initSidenavType2()
                this.initSidenavType3()
                this.initSidenavType4()
                this.initSidenavType5()
            },
            initSidenavType1() {
                let btnOpen = document.querySelector('.type1.btn-open')
                let sideNav = document.querySelector('.type1.sidenav')
                let btnClose = document.querySelector('.type1 .btn-close')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '200px'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                })
            },
            initSidenavType2() {
                let btnOpen = document.querySelector('.type2.btn-open')
                let sideNav = document.querySelector('.type2.sidenav')
                let btnClose = document.querySelector('.type2 .btn-close')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '100vw'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                })
            },
            initSidenavType3() {
                let btnOpen = document.querySelector('.type3.btn-open')
                let sideNav = document.querySelector('.type3.sidenav')
                let btnClose = document.querySelector('.type3 .btn-close')
                let main = document.querySelector('.main')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '200px'
                    main.style.marginLeft = '200px'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                    main.style.marginLeft = '0'
                })
            },
            initSidenavType4() {
                let btnOpen = document.querySelector('.type4.btn-open')
                let sideNav = document.querySelector('.type4.sidenav')
                let btnClose = document.querySelector('.type4 .btn-close')
                let main = document.querySelector('.main')
                btnOpen.addEventListener('click', function() {
                    sideNav.style.width = '200px'
                    main.style.marginLeft = '200px'
                    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
                })
                btnClose.addEventListener('click', function() {
                    sideNav.style.width = '0'
                    main.style.marginLeft = '0'
                    document.body.style.backgroundColor = "white"
                })
            },
            initSidenavType5() {
                let btnOpen = document.querySelector('.type5.btn-open')
                let sideNav = document.querySelector('.type5.sidenav')
                let btnClose = document.querySelector('.type5 .btn-close')
                let main = document.querySelector('.main')
                btnOpen.addEventListener('click', function() {
                    document.body.style.transform = 'translateX(200px)'
                })
                btnClose.addEventListener('click', function() {
                    document.body.style.transform = 'translateX(0)'
                    sideNav.style.transform = 'translateX(-100%)'
                })
            }
        }
    }
</script>
<style lang="stylus">
    html,
    body
        height 100vh
    #app:before
        content ''
        display table
</style>
<style lang="stylus" scoped>

    a
        text-decoration none
        color black
    .sidenav
        position fixed
        left 0
        top 0
        height 100%
        width 0
        background #111
        overflow-x hidden
        padding-top 60px
    .sidenav.type5
        transform translateX(-100%)
        width 200px
    .sidenav-item
        color #aaa
        font-style 24px
        display block
        padding 10px 20px
        white-space nowrap
        &:hover
            color #fff
    .btn-open
        border none
        cursor pointer
        font-size 24px
        background-color lightblue
        color #fff
        padding 10px 20px
        display block
        margin auto
        border-radius 4px
        margin-top 20px
        &:hover
            background #6666ff
    .btn-close
        font-size 34px
        position absolute
        right 25px
        top 0
        margin-left 50px
        &:focus
            color #fff
    .type1.sidenav, 
    .type2.sidenav, 
    .type3.sidenav, 
    .type4.sidenav, 
    .type5.sidenav
        transition width .5s
    .type2 .sidenav-item
        text-align center
    .main
        transition margin-left .5s
        margin-left 0

    
</style>
<style lang="stylus">
    body
        transition background-color .5s, transform .5s
</style>