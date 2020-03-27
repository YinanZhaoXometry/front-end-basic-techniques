<template>
    <div class="">
        <h2>Animated Modal with Header and Footer</h2>

        <!-- Trigger/Open The Modal -->
        <button id="myBtn1">Open Top Modal</button>
        <button id="myBtn2">Open Bottom Modal</button>
        <!-- The Top Modal -->
        <div id="myModal1" class="top-modal">
            <!-- Modal content -->
            <div class="modal-content1">
                <div class="modal-header">
                    <span class="close1">&times;</span>
                    <h2>Modal Header1</h2>
                </div>
                <div class="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
        </div>

        <!-- The Bottom Modal -->
        <div id="myModal2" class="bottom-modal">
            <!-- Modal content -->
            <div class="modal-content2">
                <div class="modal-header">
                    <span class="close2">&times;</span>
                    <h2>Modal Header2</h2>
                </div>
                <div class="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
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
        this.initTopModal()
        this.initBottomModal()
    },
    methods: {
        initTopModal() {
            // Get the modal
            var modal = document.getElementById('myModal1')

            // Get the button that opens the modal
            var btn = document.getElementById('myBtn1')

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName('close1')[0]

            // When the user clicks the button, open the modal
            btn.onclick = function() {
                modal.style.display = 'block'
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = 'none'
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none'
                }
            }
            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none'
                }
            } ) 
        },
        initBottomModal() {
            // Get the modal
            var modal = document.getElementById('myModal2')

            // Get the button that opens the modal
            var btn = document.getElementById('myBtn2')

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName('close2')[0]

            // When the user clicks the button, open the modal
            btn.onclick = function() {
                modal.style.display = 'block'
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = 'none'
            }

            // When the user clicks anywhere outside of the modal, close it
            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none'
                }
            } ) 
        }
    }
}
</script>

<style lang="stylus" scoped>
/* The Modal (background) */
.top-modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content1 {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
}

/* Add Animation */
@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }

    to {
        top: 0;
        opacity: 1;
    }
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }

    to {
        top: 0;
        opacity: 1;
    }
}

/* The Close Button */
.close1 {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close1:hover, .close1:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.modal-header {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}

.modal-body {
    padding: 2px 16px;
}

.modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}

/* The Modal (background) */
.bottom-modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    -webkit-animation-name: fadeIn; /* Fade in the background */
    -webkit-animation-duration: 0.4s;
    animation-name: fadeIn;
    animation-duration: 0.4s;
}

/* Modal Content */
.modal-content2 {
    position: fixed;
    bottom: 0;
    background-color: #fefefe;
    width: 100%;
    -webkit-animation-name: slideIn;
    -webkit-animation-duration: 0.4s;
    animation-name: slideIn;
    animation-duration: 0.4s;
}

/* The Close Button */
.close2 {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close2:hover, .close2:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.modal-header {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}

.modal-body {
    padding: 2px 16px;
}

.modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}

/* Add Animation */
@keyframes slideIn {
    from {
        bottom: -300px;
        opacity: 0;
    }

    to {
        bottom: 0;
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        bottom: -300px;
        opacity: 0;
    }

    to {
        bottom: 0;
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>