<template>
    <div class="accordion">
        <button @click="toggleButtonActive" class="accordion-button">Section 1</button>
        <div class="accordion-panel">
                        <p class="accordion-panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, debitis molestiae omnis placeat magnam voluptate, nemo doloribus rem, consequuntur et illo perferendis vel amet assumenda ipsum delectus laborum eos provident.</p>
            <p class="accordion-panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, debitis molestiae omnis placeat magnam voluptate, nemo doloribus rem, consequuntur et illo perferendis vel amet assumenda ipsum delectus laborum eos provident.</p>
        </div>
        <button @click="toggleButtonActive" class="accordion-button">Section 2</button>
        <div class="accordion-panel">
            <p class="accordion-panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, debitis molestiae omnis placeat magnam voluptate, nemo doloribus rem, consequuntur et illo perferendis vel amet assumenda ipsum delectus laborum eos provident.</p>
        </div>
        <button @click="toggleButtonActive" class="accordion-button">Section 3</button>
        <div class="accordion-panel">
            <p class="accordion-panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, debitis molestiae omnis placeat magnam voluptate, nemo doloribus rem, consequuntur et illo perferendis vel amet assumenda ipsum delectus laborum eos provident.</p>
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
            
        },
        methods: {
            toggleButtonActive(e) {
                let classList = e.target.classList
                let panel = e.target.nextSibling
                if (classList.contains('active')) {
                    panel.style.height = 0 
                } else {
                    panel.style.height = panel.scrollHeight + 'px'
                }
                e.target.classList.toggle('active')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .accordion-button
        display block
        border none
        outline none
        background-color #eee
        width 100%
        cursor pointer
        font-size 16px
        padding 15px 10px
        transition .4s
        &:hover
            background #ccc
    .accordion-panel
        height 0
        padding 0 20px
        overflow hidden
        transition height .2s ease-out
    .accordion-panel-content
        padding 15px 0
    .active
        background #ccc
    .accordion-button::after
        content '\2795'
        padding 0
        font-size 12px
        float right
    .accordion-button.active::after
        content '\2796'
</style>