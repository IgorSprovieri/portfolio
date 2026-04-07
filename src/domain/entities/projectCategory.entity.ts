export class ProjectCategoryEntity {
  id: string;
  name: string;
  slug: string;

  constructor(data: ProjectCategoryEntity) {
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
  }
}
