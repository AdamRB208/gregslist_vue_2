<script setup>
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableJobData = ref({
  company: '',
  jobTitle: '',
  hours: '',
  rate: '',
  description: '',
})

async function createJob() {
  try {
    const jobData = editableJobData.value
    await jobsService.createJob(jobData)
    editableJobData.value = {
      company: '',
      jobTitle: '',
      hours: '',
      rate: '',
      description: ''
    }
  }
  catch (error) {
    Pop.error(error, 'could not create a job');
    logger.log('COULD NOT CREATE A JOB', error)
  }
}
</script>


<template>
  <form @submit.prevent="createJob()">
    <div class="mb-3">
      <label for="company">Company</label>
      <input v-model="editableJobData.company" id="jobCompany" name="company" type="text" required maxlength="100"
        placeholder="Company Name...">
    </div>
    <div class="mb-3">
      <label for="jobTitle">Job Title</label>
      <input v-model="editableJobData.jobTitle" id="jobJobTitle" name="jobTitle" type="text" required maxlength="100"
        placeholder="Job Title...">
    </div>
    <div class="mb-3">
      <label for="rate">Rate</label>
      <input v-model="editableJobData.rate" id="jobRate" name="rate" type="number" required min="10" max="1000"
        placeholder="0">
    </div>
    <div class="mb-3">
      <label for="hours">Hours</label>
      <input v-model="editableJobData.hours" id="jobHours" name="hours" type="number" required min="0" max="70"
        placeholder="0">
    </div>
    <div class="mb-3">
      <label for="description">Job Description</label>
      <textarea v-model="editableJobData.description" id="jobDescription" name="description" type="text" class="w-100"
        placeholder="Description of the Job..." maxlength="5000"></textarea>
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