import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Job } from "@/models/Jobs.js"
import { AppState } from "@/AppState.js"

class JobsService {
  async deleteJob(jobId) {
    const response = await api.delete(`api/jobs/${jobId}`)
    logger.log('deleted job', response.data)
  }
  async createJob(jobData) {
    const response = await api.post('api/jobs', jobData)
    logger.log('created job', response.data)
    const job = new Job(response.data)
    AppState.jobs.push(job)
    logger.log('created job rendering');

  }

  async getJobs() {
    const response = await api.get('api/jobs')
    logger.log('got jobs', response.data)
    const jobs = response.data.map(pojo => new Job(pojo))
    AppState.jobs = jobs
    logger.log('job data rendering')
  }

}

export const jobsService = new JobsService()