import { ProjectCategoryEntity } from './projectCategory.entity';

export class ProjectEntity {
  id: string;
  category: ProjectCategoryEntity;
  title: string;
  src: string;
  alt: string;
  description: string;
  skillIcons: { src: string; alt: string; height: number; width: number }[];
  readMore?: string;

  constructor(data: ProjectEntity) {
    this.id = data.id;
    this.category = data.category;
    this.title = data.title;
    this.src = data.src;
    this.alt = data.alt;
    this.description = data.description;
    this.skillIcons = data.skillIcons;
    this.readMore = data.readMore;
  }
}
