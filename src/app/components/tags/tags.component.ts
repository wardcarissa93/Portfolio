import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tag } from '../../models/tag';
import { TagService } from '../../tag.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }
  ngOnInit(): void {
    this.getTags();
  }

  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  // Method to set tag filter
  setTagFilter(tag: Tag): void {
    if (this.tagFilter === tag) {
      // If the current tagFilter is the same as the clicked tag, remove the filter
      this.tagFilter = undefined;
      this.newTagFilterEvent.emit(undefined);
    } else {
      // Set the clicked tag as the new filter
      this.tagFilter = tag;
      this.newTagFilterEvent.emit(tag);
    }
  }
}
