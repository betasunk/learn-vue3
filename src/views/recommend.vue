<template>
    <div>
        推荐页面
    </div>
</template>
<script setup>
import { getRecommend } from '@/serviece/recommend.js'
getRecommend().then((res) => {
    console.log('res>>>1', res);
}).catch((e) => {
    console.log('e>>>', e);
})

</script>