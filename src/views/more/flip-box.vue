<template>
    <div class="">
        <h1>3D Flip Box (Horizontal)</h1>
<h3>Hover over the box below:</h3>

<div class="flip-box1">
  <div class="flip-box-inner1">
    <div class="flip-box-front1">
      <h2>Front Side</h2>
    </div>
    <div class="flip-box-back1">
      <h2>Back Side</h2>
    </div>
  </div>
</div>

<h1>3D Flip Box (Vertical)</h1>
<h3>Hover over the box below:</h3>

<div class="flip-box2">
  <div class="flip-box-inner2">
    <div class="flip-box-front2">
      <h2>Front Side</h2>
    </div>
    <div class="flip-box-back2">
      <h2>Back Side</h2>
    </div>
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
            
        },
        methods: {
            
        }
    }
</script>

<style lang="stylus" scoped>
   .flip-box1 {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-box-inner1 {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box1:hover .flip-box-inner1 {
  transform: rotateY(180deg);
}

.flip-box-front1, .flip-box-back1 {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front1 {
  background-color: #bbb;
  color: black;
}

.flip-box-back1 {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
} 


.flip-box2 {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-box-inner2 {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box2:hover .flip-box-inner2 {
  transform: rotateX(180deg);
}

.flip-box-front2, .flip-box-back2 {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front2 {
  background-color: #bbb;
  color: black;
}

.flip-box-back2 {
  background-color: dodgerblue;
  color: white;
  transform: rotateX(180deg);
}
</style>