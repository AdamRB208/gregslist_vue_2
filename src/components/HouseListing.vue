<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/Houses.js';
import { computed } from 'vue';


defineProps({
  houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)

</script>


<template>
  <div class="row shadow-lg mb-4 house-border">
    <div class="col-md-5 px-0">
      <img :src="houseProp.imgUrl" :alt="`a picture of a ${houseProp.year} ${houseProp.description}`" class="w-100">
    </div>
    <div class="col-md-7">
      <div class="p-3">
        <div class="d-flex justify-content-between">
          <p class="fs-3"> Year: {{ houseProp.year }} Bedrooms: {{ houseProp.bedrooms }} Bathrooms: {{
            houseProp.bathrooms }} Levels:
            {{ houseProp.levels }}
          </p>
          <small>{{ houseProp.createdAt }}</small>
        </div>
        <p class="fs-3">Price: {{ houseProp.price }}</p>
        <p Description: v-if="houseProp.description">{{ houseProp.description }}</p>
        <p v-else>A lovely Home</p>
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <button>Delete Listing</button>
            </div>
          </div>
          <div class="d-flex align-items-center gap-3 mt-3">
            <p class="mb-0">{{ houseProp.creator.name }}</p>
            <img :src="houseProp.creator.picture" alt="profile picture of the listings creator" class="creator-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  height: 45dvh;

  object-fit: cover;
}

.house-border {
  border-style: solid;
  border-color: rgb(66 184 131);
}

.creator-img {
  height: 3.7em;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>