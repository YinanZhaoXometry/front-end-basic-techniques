<template>
    <div class="">
        <div class="header">
            <h2>Scroll Down</h2>
            <p>Scroll down to see the sticky effect.</p>
        </div>

        <div id="navbar">
            <a class="active" href="javascript:void(0)">Home</a>
            <a href="javascript:void(0)">News</a>
            <a href="javascript:void(0)">Contact</a>
        </div>

        <div class="main ">
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
                    var navbar = document.getElementById("navbar");
                    var sticky = navbar.offsetTop;
                        console.log(window.pageYOffset, sticky)
                    if (window.pageYOffset > sticky) {
                        navbar.classList.add("sticky")
                    } else {
                        console.log(2)
                        navbar.classList.remove("sticky");
                    }
                })
            },
          
        }
    }
</script>

<style lang="stylus" scoped>
    .header {
        background-color: #f1f1f1;
        padding: 30px;
        text-align: center;
    }

    #navbar {
        overflow: hidden;
        background-color: #333;
    }

    #navbar a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    #navbar a:hover {
        background-color: #ddd;
        color: black;
    }

    #navbar a.active {
        background-color: #4CAF50;
        color: white;
    }

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }
    .sticky + .main {
        padding-top: 60px;
    }
    .main
        margin auto
        width 60%
</style>