export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.creatorId = data.creatorId
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
}