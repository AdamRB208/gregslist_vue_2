<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/Houses.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


defineProps({
  houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)

async function deleteHouse(houseId) {
  try {
    const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'It will be gone forever!', 'Yes I am sure', "I've changed my mind")

    if (!confirmed) {
      return
    }
    await housesService.deleteHouse(houseId)
  }
  catch (error) {
    Pop.error(error, 'could not delete house');
    logger.log('COULD NOT DELETE HOUSE', error)
  }
}

</script>


<template>
  <div class="row shadow-lg mb-4 house-border">
    <div class="col-md-5 px-0">
      <img :src="houseProp.imgUrl" :alt="`a picture of a ${houseProp.year} ${houseProp.description}`"
        class="w-100 h-100">
    </div>
    <div class="col-md-7">
      <div class="p-3">
        <div>
          <small class="d-flex">{{ houseProp.createdAt.toLocaleDateString() }}</small>
        </div>
        <div class="d-flex flex-column justify-content-between fs-3">
          <p> Year: {{ houseProp.year }}</p>
          <p>Levels: {{ houseProp.levels }}</p>
          <p>Bedrooms: {{ houseProp.bedrooms }} </p>
          <p>Bathrooms: {{ houseProp.bathrooms }}</p>
        </div>
        <p class="fs-3">Price: {{ '$' + houseProp.price.toLocaleString() }}</p>
        <p Description: v-if="houseProp.description">{{ houseProp.description }}</p>
        <p v-else>A lovely Home</p>
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <button v-if="houseProp.creatorId == account?.id" @click="deleteHouse(houseProp.id)"
                class="btn btn-outline-danger" type="button">Delete
                Listing</button>
            </div>
          </div>
          <div class="d-flex flex-row-reverse align-items-center gap-3 mt-3">
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

small {
  justify-content: flex-end;
}
</style>