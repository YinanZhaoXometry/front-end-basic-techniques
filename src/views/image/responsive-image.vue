<template>
    <div class="">
        <div>
            <!-- 图片根据父元素宽度拉伸 -->
            <img src="https://www.w3schools.com/howto/img_nature.jpg"
                 alt="Nature" class="responsive1" width="600"
                 height="400">
        </div>
        <div>
            <!-- 设置最大放大尺寸为图片原始尺寸 -->
            <img src="https://www.w3schools.com/howto/img_nature.jpg"
                 alt="Nature" class="responsive2" width="600"
                 height="400">
        </div>
        <div>
            <!-- 设置最大可放大尺寸 -->
            <img src="https://www.w3schools.com/howto/img_nature.jpg"
                 alt="Nature" class="responsive3" width="600"
                 height="400">
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
.responsive1 {
    width: 100%;
    height: auto;
}

.responsive2 {
    max-width: 100%;
    height: auto;
}

.responsive3 {
    width: 100%;
    max-width: 400px;
    height: auto;
}
</style>