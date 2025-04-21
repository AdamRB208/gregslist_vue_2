<script setup>
import { AppState } from '@/AppState.js';
import JobForm from '@/components/JobForm.vue';
import JobListing from '@/components/JobListing.vue';
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const jobs = computed(() => AppState.jobs)
const account = computed(() => AppState.account)

onMounted(() => {
  getJobs()
})

async function getJobs() {
  try {
    await jobsService.getJobs()
  }
  catch (error) {
    Pop.error(error, 'could not get jobs');
    logger.log('COULD NOT GET JOBS', error)
  }
}
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
        <JobForm />
      </div>
      <div class="col-md-6">
        <img class="mb-3 img-fluid rounded-5 shadow-lg"
          src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwam9ifGVufDB8MXwwfHx8Mg%3D%3D"
          alt="man writing on paper in an office">
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="job in jobs" :key="job.id" class="col-12">
        <JobListing :jobProp="job" />
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