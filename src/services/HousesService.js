import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/Houses.js"
import { AppState } from "@/AppState.js"

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('Got Houses', response.data)
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
    logger.log('houses data rendering')
  }



}

export const housesService = new HousesService()