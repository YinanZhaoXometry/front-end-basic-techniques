<template>
    <div class="page">
        <div class="tab">
            <div @click="switchTab('London', $event)" class="tab-item">London</div>
            <div @click="switchTab('Beijing', $event)" class="tab-item">Beijing</div>
            <div @click="switchTab('New York', $event)" class="tab-item">New York</div>
        </div>

        <div class="tab-content">
            <div class="tab-content-item">
                <h3>London</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minus placeat cupiditate sint deserunt cum, vel asperiores quidem nam error quo odit doloremque, totam ullam, repellat quis porro expedita temporibus.</p>
            </div>
            <div class="tab-content-item">
                <h3>Beijing</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minus placeat cupiditate sint deserunt cum, vel asperiores quidem nam error quo odit doloremque, totam ullam, repellat quis porro expedita temporibus.</p>
            </div>
            <div class="tab-content-item">
                <h3>New York</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minus placeat cupiditate sint deserunt cum, vel asperiores quidem nam error quo odit doloremque, totam ullam, repellat quis porro expedita temporibus.</p>
            </div>
        </div>
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
            document.getElementsByClassName('tab-item')[0].click()
        },
        methods: {
            switchTab(city,event) {
                // change tab content
                let contentItems = document.getElementsByClassName('tab-content-item')
                for (let contentItem of contentItems) {
                    if (contentItem.firstChild.innerText === city) {
                        contentItem.style.display = 'block'
                    } else {
                        contentItem.style.display = 'none'
                    }
                }

                // set tabitem active
                let tabItems = document.getElementsByClassName('tab-item')
                for (let tabItem of tabItems) {
                    tabItem.classList.remove('active')
                }
                event.target.classList.toggle('active')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .page
        color #333
        box-sizing border-box
        border 1px solid #ccc
    .tab
        background #e7e7e7
        border-bottom 1px solid #ccc
        &::after
            content ''
            clear both
            display block
    .tab-item
        font-size 16px
        font-weight 500
        float left
        padding 20px 40px
        cursor pointer
        user-select none
        &:hover
            background #eee
        &:active
            background #cfcfcf
        &.active
            background #ccc
    .tab-content-item
        padding 20px
        display none
        animation fadeIn 1s both
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>