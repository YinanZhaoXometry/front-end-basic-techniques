<template>
    <div class="">
        <button @click="topFunction()" id="myBtn"
                title="Go to top">Top</button>

        <div style="background-color:black;color:white;padding:30px">
            Scroll Down</div>
        <div
             style="background-color:lightgrey;padding:30px 30px 2500px">
            This example demonstrates how to create a "scroll to top"
            button that becomes visible
            <strong>when the user starts to scroll the page</strong>.
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
    mounted() {
        //Get the button
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = () => {
            this.scrollFunction()
        }
    },
    methods: {
        scrollFunction() {
            var mybutton = document.getElementById('myBtn')
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = 'block'
            } else {
                mybutton.style.display = 'none'
            }
        },
        // When the user clicks on the button, scroll to the top of the document
        topFunction() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
}
</script>
<style lang="stylus">
body, html {
    scroll-behavior: smooth;
}
</style>
<style lang="stylus" scoped>
#myBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: red;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
}

#myBtn:hover {
    background-color: #555;
}
</style>