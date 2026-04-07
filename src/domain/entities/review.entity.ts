export class ReviewEntity {
  id: string;
  title: string;
  subTitle: string;
  smallDescription: string;
  description?: string;

  constructor(data: ReviewEntity) {
    this.id = data.id;
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.smallDescription = data.smallDescription;
    this.description = data.description;
  }
}
