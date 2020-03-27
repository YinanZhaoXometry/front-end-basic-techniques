<template>
    <div class="container">
        <div class="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
            <button class="dropdown-btn">Dropdown
                <i class="icon-caret-down"></i>
            </button>
            <div class="dropdown-container">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            <a href="#contact">Search</a>
        </div>

        <div class="main">
            <h2>Sidebar Dropdown</h2>
            <p>Click on the dropdown button to open the dropdown menu
                inside the side navigation.</p>
            <p>This sidebar is of full height (100%) and always shown.
            </p>
            <p>Some random text..</p>
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
        this.initDropDownClickListener()
    },
    methods: {
        initDropDownClickListener() {
            var dropdown = document.getElementsByClassName('dropdown-btn')
            var i
            for (i = 0; i < dropdown.length; i++) {
                dropdown[i].addEventListener('click', function() {
                    this.classList.toggle('active')
                    var dropdownContent = this.nextElementSibling
                    if (dropdownContent.style.display === 'block') {
                        dropdownContent.style.display = 'none'
                    } else {
                        dropdownContent.style.display = 'block'
                    }
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
/* Fixed sidenav, full height */
.sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
    box-sizing border-box
}

/* Style the sidenav links and the dropdown button */
.sidenav a, .dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
}

/* On mouse-over */
.sidenav a:hover, .dropdown-btn:hover {
    color: #f1f1f1;
}

/* Main content */
.main {
    margin-left: 200px; /* Same as the width of the sidenav */
    font-size: 20px; /* Increased text to enable scrolling */
    padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
    background-color: green;
    color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
    display: none;
    background-color: #262626;
    padding-left: 8px;
}

/* Optional: Style the caret down icon */
.icon-caret-down
    height 0
    width 0
    border 6px solid transparent
    border-top-color inherit
    float: right;
    margin-top 10px
    margin-right 10px  

/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}
</style>