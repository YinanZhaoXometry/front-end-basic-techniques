<template>
    <div class="">
        <div class="slideshow-container">

            <div class="mySlides">
                <q>I love you the more in that I believe you had liked
                    me for my own sake and for nothing else</q>
                <p class="author">- John Keats</p>
            </div>

            <div class="mySlides">
                <q>But man is not made for defeat. A man can be
                    destroyed but not defeated.</q>
                <p class="author">- Ernest Hemingway</p>
            </div>

            <div class="mySlides">
                <q>I have not failed. I've just found 10,000 ways that
                    won't work.</q>
                <p class="author">- Thomas A. Edison</p>
            </div>

            <a class="prev" @click="plusSlides(-1)">❮</a>
            <a class="next" @click="plusSlides(1)">❯</a>

        </div>

        <div class="dot-container">
            <span class="dot" @click="currentSlide(1)"></span>
            <span class="dot" @click="currentSlide(2)"></span>
            <span class="dot" @click="currentSlide(3)"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            slideIndex: 1
        }
    },
    computed: {},
    created() {},
    mounted() {
        this.showSlides(this.slideIndex)
    },
    methods: {
        plusSlides(n) {
            this.showSlides((this.slideIndex += n))
        },

        currentSlide(n) {
            this.showSlides((this.slideIndex = n))
        },

        showSlides(n) {
            var i
            var slides = document.getElementsByClassName('mySlides')
            var dots = document.getElementsByClassName('dot')
            if (n > slides.length) {
                this.slideIndex = 1
            }
            if (n < 1) {
                this.slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none'
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(' active', '')
            }
            slides[this.slideIndex - 1].style.display = 'block'
            dots[this.slideIndex - 1].className += ' active'
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    font-family: Verdana, sans-serif;
    margin: 0;
}

/* Slideshow container */
.slideshow-container {
    position: relative;
    background: #f1f1f1f1;
}

/* Slides */
.mySlides {
    display: none;
    padding: 80px;
    text-align: center;
}

/* Next & previous buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -30px;
    padding: 16px;
    color: #888;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

/* Position the "next button" to the right */
.next {
    position: absolute;
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
}

/* The dot/bullet/indicator container */
.dot-container {
    text-align: center;
    padding: 20px;
    background: #ddd;
}

/* The dots/bullets/indicators */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

/* Add a background color to the active dot/circle */
.active, .dot:hover {
    background-color: #717171;
}

/* Add an italic font style to all quotes */
q {
    font-style: italic;
}

/* Add a blue color to the author */
.author {
    color: cornflowerblue;
}
</style>