<template>
    <div class="icon-bar icon-bar_horizontal">
        <a @click="activeIndex=0" href="#" :class="{active: activeIndex===0}" class="icon-bar-item"></a>
        <a @click="activeIndex=1" href="#" :class="{active: activeIndex===1}" class="icon-bar-item"></a>
        <a @click="activeIndex=2" href="#" :class="{active: activeIndex===2}" class="icon-bar-item"></a>
        <a @click="activeIndex=3" href="#" :class="{active: activeIndex===3}" class="icon-bar-item"></a>
        <a @click="activeIndex=4" href="#" :class="{active: activeIndex===4}" class="icon-bar-item"></a>
        <div class="search-bar">
            <input type="text" class="search-input">
            <button class="search-button">搜</button>
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
                activeIndex: 0 
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
    .icon-bar
        width 90px
        background-color #555
    .icon-bar-item
        display block
        text-align center
        padding 16px
        transition all .3s ease
        color #fff
        font-size 30px
        text-decoration none
        &::before
            font-size 30px
            font-style normal
            text-decoration none
        &:nth-child(1)::before
            content '\2659'
        &:nth-child(2)::before
            content '\2661'
        &:nth-child(3)::before
            content '\2662'
        &:nth-child(4)::before
            content '\2667'
        &:nth-child(5)::before
            content '\2664'
        &:hover
            background-color #000
        &:active
            background-color #777
    .active
        background-color #4caf50
    .icon-bar_horizontal
        display flex
        width auto
    .icon-bar_horizontal .icon-bar-item
        flex-basis 50px
        box-sizing border-box
    @media screen and (max-width: 500px) {
        .icon-bar_horizontal {
            display block
        }
    }
    .search-bar
        margin-left auto
        margin-right 20px
        box-sizing border-box
        line-height 77px
    .search-input
        box-sizing inherit
        height 30px
        border none
    .search-button
        height 30px
        box-sizing inherit
        border-radius none
        border none 
        background #e9e9e9
        cursor pointer
</style>