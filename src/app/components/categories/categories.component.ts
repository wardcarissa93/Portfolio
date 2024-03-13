import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
  ngOnInit(): void {
    this.getCategories();
  }

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  
  // Method to set category filter
  setCategoryFilter(category: Category): void {
    if (this.categoryFilter === category) {
      this.categoryFilter = undefined;
      this.newCategoryFilterEvent.emit(undefined);
    } else {
      // Set the clicked category as the new filter
      this.categoryFilter = category;
      this.newCategoryFilterEvent.emit(category);
    }
  }
}
