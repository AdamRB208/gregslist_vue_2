<script setup>
import { AppState } from '@/AppState.js';
import HouseListing from '@/components/HouseListing.vue';
import { House } from '@/models/Houses.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const houses = computed(() => AppState.houses)


onMounted(() => {
  getHouses()
})

async function getHouses() {
  try {
    await housesService.getHouses()
  }
  catch (error) {
    Pop.error(error, 'could not get houses');
    logger.log('COULD NOT GET HOUSES', error)
  }
}
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h1 class="display-3">Houses</h1>
        </div>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div class="col-md-6">
        Form here
      </div>
      <div class="col-md-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1680300960814-f684429a9cad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhhcHB5JTIwcGVvcGxlJTIwaW4lMjBhJTIwaG91c2V8ZW58MHwxfDB8fHww"
          alt="image of a couple moving into a new house">
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-12">
        <HouseListing :houseProp="house" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
img {
  max-height: 80dvh;
  width: 100%;
  object-fit: cover;
}
</style>