<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const jobs = computed(() => AppState.jobs)
const account = computed(() => AppState.account)
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h1 class="display-3">Jobs</h1>
        </div>
      </div>
    </div>
  </section>
  <section v-if="account" class="container">
    <div class="row">
      <div class="col-md-6">
        jobs form goes here
      </div>
      <div class="col-md-6">
        <img class="mb-3 img-fluid rounded shadow-lg"
          src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwam9ifGVufDB8MXwwfHx8Mg%3D%3D"
          alt="man writing on paper in an office">
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div class="col-12">
        Job listings here
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