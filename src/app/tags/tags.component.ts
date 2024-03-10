import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tag } from '../models/tag';
import { TagService } from '../tag.service';

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

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }
}
