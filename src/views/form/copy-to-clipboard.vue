<template>
    <div class="">
        <h1>Copy to Clipboard</h1>
        <!-- The text field -->
        <input type="text" value="Hello World" id="myInput">
        <div class="tooltip">
            <!-- The button used to copy the text -->
            <button @click="myFunction()" @mouseout="outFunc()">Copy
                text</button>
                 <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
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
    mounted() {},
    methods: {
        myFunction() {
            var copyText = document.getElementById('myInput')
            copyText.select()
            copyText.setSelectionRange(0, 99999)
            document.execCommand('copy')

            var tooltip = document.getElementById('myTooltip')
            tooltip.innerHTML = 'Copied'
        },

        outFunc() {
            var tooltip = document.getElementById('myTooltip')
            tooltip.innerHTML = 'Copy to clipboard'
        }
    }
}
</script>

<style lang="stylus" scoped>
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>