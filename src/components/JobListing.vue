<script setup>
import { AppState } from '@/AppState.js';
import { Job } from '@/models/Jobs.js';
import { computed } from 'vue';


defineProps({
  jobProp: { type: Job, required: true }
})

const account = computed(() => AppState.account)


</script>


<template>
  <div class="row shadow-lg mb-4 job-border">
    <div class="col-md-7 w-100">
      <div class="p-3">
        <div class="d-flex flex-column justify-content-between fs-4">
          <p> Company: {{ jobProp.company }}</p>
          <p>Job Title: {{ jobProp.jobTitle }}</p>
          <p>Rate: {{ jobProp.rate }} </p>
          <p>Hours: {{ jobProp.hours }}</p>
        </div>
        <p Description: v-if="jobProp.description">{{ jobProp.description }}</p>
        <p v-else>Please contact Job provider for additional information</p>
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <button v-if="jobProp.creatorId == account?.id" class="btn btn-outline-danger mt-3" type="button">Delete
                Job Posting</button>
            </div>
          </div>
          <div class="d-flex flex-row-reverse align-items-center gap-3 mt-0">
            <p class="mb-0">{{ jobProp.creator.name }}</p>
            <img :src="jobProp.creator.picture" alt="profile picture of the listings creator" class="creator-img">
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

.job-border {
  border-style: solid;
  border-color: rgb(66 184 131);
}

.creator-img {
  height: 3.7em;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>