import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Job } from "@/models/Jobs.js"
import { AppState } from "@/AppState.js"

class JobsService {
  async getJobs() {
    const response = await api.get('api/jobs')
    logger.log('got jobs', response.data)
    const jobs = response.data.map(pojo => new Job(pojo))
    AppState.jobs = jobs
    logger.log('job data rendering')
  }


}

export const jobsService = new JobsService()