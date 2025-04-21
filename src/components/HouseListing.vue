<script setup>
import { House } from '@/models/Houses.js';


defineProps({
  houseProp: { type: House, required: true }
})


</script>


<template>
  <div class="row">
    <div class="col-md-5">
      <img :src="houseProp.imgUrl" :alt="`a picture of a ${houseProp.year} ${houseProp.description}`">
    </div>
    <div class="col-md-7">
      {{ houseProp.description }}
    </div>
  </div>
</template>


<style lang="scss" scoped></style>