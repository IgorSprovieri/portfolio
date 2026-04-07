import { ListAllProjectsTabbedByCategoryView } from '../components/views/ListAllProjectsTabbedByCategory.view';
import { projectCategoryService } from '@/domain/services/projectCategory.service';
import { projectService } from '@/domain/services/project.service';

export const ListAllProjectsTabbedByCategoryController = async () => {
  const [projects, categories] = await Promise.all([
    projectService.getAllProjectsGroupedByCategory(),
    projectCategoryService.getAllCategories(),
  ]);

  if (Array.isArray(projects)) {
    return <></>;
  }

  return (
    <ListAllProjectsTabbedByCategoryView
      projects={projects}
      categories={categories}
    />
  );
};
