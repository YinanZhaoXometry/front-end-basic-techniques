<template>
    <div style="padding:20px;position:relative;">
        <div class="smartphone">
            <div class="content">
                <iframe src="https://youzan.github.io/vant/mobile.html#/zh-CN/"
                        style="width:100%;border:none;height:100%" />
            </div>
        </div>
        <br>
        <br>
        <div class="tablet">
            <div class="content">
                <iframe src="https://youzan.github.io/vant/#/zh-CN/"
                        style="width:100%;border:none;height:100%" />
            </div>
        </div>
        <br>
        <br>
        <div class="laptop">
            <div class="content">
                <iframe src="https://youzan.github.io/vant/#/zh-CN/"
                        style="width:100%;border:none;height:100%" />
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
    mounted() {},
    methods: {}
}
</script>

<style lang="stylus" >
/* The device with borders */
.smartphone {
    position: relative;
    width: 360px;
    height: 640px;
    margin: auto;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
}

/* The horizontal line on the top of the device */
.smartphone:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
    width: 360px;
    height: 640px;
    background: white;
}

/* The device with borders */
.tablet {
  position: relative;
  width: 768px;
  height: 1024px;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
}

/* The horizontal line on the top of the device */
.tablet:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.tablet:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.tablet .content {
  width: 768px;
  height: 1024px;
  background: white;
  margin: -1px;
}

/* The laptop with borders */
.laptop {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.6) translate(-50%); /* Scaled down for a better Try-it experience (change to 1 for full scale) */
    transform: scale(0.6) translate(-50%); /* Scaled down for a better Try-it experience (change to 1 for full scale) */
    left: 50%;
    position: absolute;
    width: 1366px;
    height: 800px;
    border-radius: 6px;
    border-style: solid;
    border-color: black;
    border-width: 24px 24px 80px;
    background-color: black;
    margin-bottom: 100px;
}

/* The keyboard of the laptop */
.laptop:after {
    content: '';
    display: block;
    position: absolute;
    width: 1600px;
    height: 60px;
    margin: 80px 0 0 -110px;
    background: black;
    border-radius: 6px;
}

/* The top of the keyboard */
.laptop:before {
    content: '';
    display: block;
    position: absolute;
    width: 250px;
    height: 30px;
    bottom: -110px;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    background: #f1f1f1;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1;
}

/* The screen (or content) of the device */
.laptop .content {
    width: 1366px;
    height: 800px;
    overflow: hidden;
    border: none;
}
</style>