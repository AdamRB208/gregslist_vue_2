export class Job {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.description = data.description
    this.rate = data.rate
    this.hours = data.hours
    this.jobTitle = data.jobTitle
    this.company = data.company
  }
}