<script setup>
import { reactive, ref } from 'vue'
// ==================

const refValue = ref('Chris1993')
let setRefValue = () => {
  refValue.value = 'changed Chris1993'
}

let refObj = ref({ name: 'Chris1994' })
let setRefObj = () => {
  refObj.value.name = 'Hello Chris1993'
}
</script>
<template>
  <p>refValue</p>
  <el-button @click="setRefValue">{{ refValue }}</el-button>
  <p>refObj</p>
  <el-button @click="setRefObj">{{ refObj.name }}</el-button>
</template>