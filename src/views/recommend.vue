<template>
  <div class="recommend" v-selfLoading:[title]="loading">
    <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <Slider :sliders="slider" v-if="slider.length"></Slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li v-for="item in albums" class="item" :key="item.id" @click="selectItem(item)">
              <div class="icon">
                <img width="60" height="60" :src="item.pic" />
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="title">
                  {{ item.title }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script setup>
import { getRecommend } from '@/serviece/recommend.js'
import Slider from '@/components/base/slider.vue'
import scroll from '@/components/base/scroll/scroll.vue'
import { ref } from 'vue'
const slider = ref([])
const albums = ref([])
const loading = ref(true)
const title = '正在加载中'
getRecommend()
  .then((res) => {
    setTimeout(() => {
      loading.value = false
      slider.value = res.sliders
      albums.value = res.albums
    }, 2000)
  })
  .catch((e) => {
    console.log('e>>>', e)
  })
const selectItem = () => {}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 44px;
  bottom: 0;
  overflow: scroll;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;

      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }

        .name {
          margin-bottom: 10px;
          color: $color-text;
        }

        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
