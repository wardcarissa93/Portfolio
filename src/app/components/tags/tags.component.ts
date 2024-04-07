// Importing necessary Angular modules and services
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing Tag model and TagService
import { Tag } from '../../models/tag';
import { TagService } from '../../services/tag.service';

// Component decorator with selector, template, and styles
@Component({
  selector: 'app-tags',
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule],
  templateUrl: './tags.component.html', // Template URL for the component
  styleUrl: './tags.component.scss' // Style URL for the component
})
export class TagsComponent implements OnInit {
  constructor(private tagService: TagService) {} // Injecting TagService

  tags: Tag[] = []; // Array to store tags

  // Method to fetch tags from the service
  getTags(): void {
    this.tagService
      .getTags()
      .subscribe((tags) => (this.tags = tags)); // Assign fetched tags to the 'tags' array
  }

  // OnInit lifecycle hook to call getTags() when the component is initialized
  ngOnInit(): void {
    this.getTags();
  }

  // Input property to receive tag filter from parent component
  @Input() tagFilter: Tag | undefined;
  // Output property to emit new tag filter to parent component
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  // Method to set tag filter based on user interaction
  setTagFilter(tag: Tag): void {
    if (this.tagFilter === tag) {
      // If the current tagFilter is the same as the clicked tag, remove the filter
      this.tagFilter = undefined;
      this.newTagFilterEvent.emit(undefined); // Emit undefined to remove the filter in the parent component
    } else {
      // Set the clicked tag as the new filter
      this.tagFilter = tag;
      this.newTagFilterEvent.emit(tag); // Emit the new filter to the parent component
    }
  }
}
