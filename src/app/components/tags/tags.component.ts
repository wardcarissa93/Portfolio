import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tag } from '../../models/tag';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tags',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit {
  constructor(private tagService: TagService) {}

  tags: Tag[] = [];
  getTags(): void {
    this.tagService
      .getTags()
      .subscribe((tags) => (this.tags = tags));
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
