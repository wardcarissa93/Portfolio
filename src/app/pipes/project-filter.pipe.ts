// Importing necessary Angular modules and models
import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project'; // Importing Project model
import { Tag } from '../models/tag'; // Importing Tag model

// Pipe decorator for defining custom pipes
@Pipe({
  name: 'projectFilter', // Name of the pipe used in templates
  standalone: true, // Indicates that this pipe is standalone and does not depend on external state
  pure: false // Make the pipe impure to allow for dynamic filtering based on external changes
})
export class ProjectFilterPipe implements PipeTransform {
  // Transform method to perform filtering on projects based on a tag
  transform(projects: Project[], tag: Tag | undefined): Project[] {
    if (!tag) {
      // If no tag is provided, return all projects unfiltered
      return projects;
    }

    // Filter projects based on the selected tag
    return projects.filter((project) => {
      // Check if the project has the selected tag
      return project.tags.some((projectTag: Tag) => projectTag.id === tag.id);
    });
  }
}