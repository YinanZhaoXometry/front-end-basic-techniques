<template>
    <div class="">
        <div class="slidedown-menu" id="navbar">
            <div class="menu-item">首页</div>
            <div class="menu-item">关于</div>
            <div class="menu-item">文章</div>
            <div class="menu-item">联系</div>
        </div>

        <div class="main">
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
            <h1 class="title">这是标题</h1>
            <h5 class="subtitle">这是副标题</h5>
            <p class="content">这是正文内容：Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laborum at reprehenderit ex architecto dolore nemo quasi unde quas, porro corporis eius cumque alias voluptatem, beatae ad impedit exercitationem voluptatum.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ScrollSlidedownBar',
        components: {  },
        props: {},
        data () {
            return {
                prevScrollpos: window.pageYOffset
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.getScrollTop()
        },
        methods: {
            getScrollTop() {
                window.addEventListener('scroll', function (e) {
                    console.log('document.body.scrollTop', document.body.scrollTop)
                    console.log('document.documentElement.scrollTop', document.documentElement.scrollTop)
                    var currentScrollPos = window.pageYOffset;
                    if (this.prevScrollpos > currentScrollPos) {
                        document.getElementById("navbar").style.top = "0";
                    } else {
                        document.getElementById("navbar").style.top = "-60px";
                    }
                    this.prevScrollpos = currentScrollPos;
                })
            },
          
        }
    }
</script>

<style lang="stylus" scoped>
    .slidedown-menu
        position fixed
        top 0px
        left 0
        background #333
        height 60px
        width 100%
        transition top 0.3s
    .menu-item
        float left
        width 120px
        font-size 24px
        line-height 60px
        font-weight 400
        color #fff
        cursor pointer
        text-align center
        &:hover
            color #eee
            background #666
    .main
        margin auto
        margin-top 100px
        width 60%
</style>