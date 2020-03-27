<template>
    <div>
        <div class="container">
            <button class="btn success">Success</button>
            <button class="btn info">Info</button>
            <button class="btn warning">Warning</button>
            <button class="btn danger">Danger</button>
            <button class="btn default">Default</button>
        </div>
        <div class="container">
            <button class="btn success outline">Success</button>
            <button class="btn info outline">Info</button>
            <button class="btn warning outline">Warning</button>
            <button class="btn danger outline">Danger</button>
            <button class="btn default outline">Default</button>
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
    methods: {}
}
</script>

<style lang="stylus" scoped>
.btn {
    border: none; /* Remove borders */
    color: white; /* Add a text color */
    padding: 14px 28px; /* Add some padding */
    cursor: pointer; /* Add a pointer cursor on mouse-over */
}

.btn.outline {
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
}

.container {
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.container .btn {
    margin-right: 5px;
}

.success { /* Green */
    background-color: #4CAF50;
}

/* Green */
.success:hover {
    background-color: #46a049;
}

.info { /* Blue */
    background-color: #2196F3;
}

/* Blue */
.info:hover {
    background: #0b7dda;
}

.warning { /* Orange */
    background-color: #ff9800;
}

/* Orange */
.warning:hover {
    background: #e68a00;
}

.danger { /* Red */
    background-color: #f44336;
}

/* Red */
.danger:hover {
    background: #da190b;
}

.default { /* Gray */
    background-color: #e7e7e7;
    color: black;
}

/* Gray */
.default:hover {
    background: #ddd;
}

/* Green */
.success.outline {
    border-color: #4CAF50;
    color: green;
}

.success.outline:hover {
    background-color: #4CAF50;
    color: white;
}

/* Blue */
.info.outline {
    border-color: #2196F3;
    color: dodgerblue;
}

.info.outline:hover {
    background: #2196F3;
    color: white;
}

/* Orange */
.warning.outline {
    border-color: #ff9800;
    color: orange;
}

.warning.outline:hover {
    background: #ff9800;
    color: white;
}

/* Red */
.danger.outline {
    border-color: #f44336;
    color: red;
}

.danger.outline:hover {
    background: #f44336;
    color: white;
}

/* Gray */
.default.outline {
    border-color: #e7e7e7;
    color: black;
}

.default.outline:hover {
    background: #e7e7e7;
}
</style>