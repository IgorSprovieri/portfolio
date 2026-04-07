export class ExperienceEntity {
  id: string;
  title: string;
  period: string;
  location: string;
  topics: string[];

  constructor(data: ExperienceEntity) {
    this.id = data.id;
    this.title = data.title;
    this.period = data.period;
    this.location = data.location;
    this.topics = data.topics;
  }
}
