import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Pipe({
  name: 'projectFilter',
  standalone: true,
  pure: false  // Make the pipe impure
})
export class ProjectFilterPipe implements PipeTransform {
  transform(projects: Project[], tag: Tag | undefined): Project[] {
    if (!tag) {
      return projects;
    }

    return projects.filter((project) => {
      // Check if the project has the selected tag
      return project.tags.some((projectTag: Tag) => projectTag.id === tag.id);
    });
  }
}

