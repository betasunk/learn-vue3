<script setup>
import { ref } from "vue";
import useScroll from "./useScroll"
const props = defineProps({
    options: Object
})
const scrollRef = ref(null)
useScroll(scrollRef, props.options)


</script>

<template>
    <div ref="scrollRef">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped></style>