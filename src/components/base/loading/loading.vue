<script setup>
import { ref } from "vue"
const title = ref()
// eslint-disable-next-line no-unused-vars
const setTitle = (value) => {
    title.value = value
}

defineExpose({
    setTitle
})
</script>
<template>
    <div class="loading">
        <img src="./loading.gif" alt="">
        <p class="desc">{{ title }}</p>
    </div>
</template>
<style lang="scss" scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    .loading-content {
        text-align: center;

        .desc {
            line-height: 20px;
            font-size: $font-size-small;
            color: $color-text-l;
        }
    }
}
</style>