<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableHouseData = ref({
  bedrooms: '',
  bathrooms: '',
  levels: '',
  year: '',
  imgUrl: '',
  price: '',
  description: ''
})

async function createHouse() {
  try {
    const houseData = editableHouseData.value
    await housesService.createHouse(houseData)
    editableHouseData.value = {
      bedrooms: '',
      bathrooms: '',
      levels: '',
      year: '',
      imgUrl: '',
      price: '',
      description: ''
    }
  }
  catch (error) {
    Pop.error(error, 'could not create house');
    logger.log('COULD NOT CREATE HOUSE', error)
  }
}

</script>


<template>
  <form @submit.prevent="createHouse()">
    <div class="mb-3">
      <label for="bedrooms"> Bedrooms</label>
      <input v-model="editableHouseData.bedrooms" id="houseBedrooms" name="bedrooms" type="number" required min="1"
        max="10" placeholder="0">
    </div>
    <div class="mb-3">
      <label for="bathrooms">Bathrooms</label>
      <input v-model="editableHouseData.bathrooms" id="houseBathrooms" name="bathrooms" type="number" required min="1"
        max="10" placeholder="0">
    </div>
    <div class="mb-3">
      <label for="levels">Levels</label>
      <input v-model="editableHouseData.levels" id="houseLevels" name="levels" type="number" required min="1" max="10"
        placeholder="0">
    </div>
    <div class="mb-3">
      <label for="year">Year</label>
      <input v-model="editableHouseData.year" id="houseYear" name="year" type="number" required min="1776" max="2025"
        placeholder="2025">
    </div>
    <div class="mb-3">
      <label for="houseImgUrl">House Image URL</label>
      <input v-model="editableHouseData.imgUrl" id="houseImgUrl" name="imgUrl" type="url" required maxlength="500"
        placeholder="Image URL...">
    </div>
    <div class="mb-3">
      <label for="price">Price</label>
      <input v-model="editableHouseData.price" id="housePrice" name="price" type="number" required min="0"
        max="100000000" placeholder="$$$">
    </div>
    <div class="mb-3">
      <label for="description">House Description</label>
      <textarea v-model="editableHouseData.description" id="houseDescription" name="description" type="text"
        class="w-100" placeholder="Description of the house..." maxlength="500"></textarea>
    </div>
    <div class="text-end">
      <button class="btn btn-outline-primary me-2" type="reset">Reset Form</button>
      <button class="btn btn-outline-success" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>


<style lang="scss" scoped>
label {
  display: block;
}

input {
  width: 100%;
}
</style>