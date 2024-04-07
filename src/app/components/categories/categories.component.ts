// Importing necessary Angular modules and services
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing the Category model and CategoryService
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

// Component decorator with selector, template, and styles
@Component({
  selector: 'app-categories',
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule],
  templateUrl: './categories.component.html', // Template URL for the component
  styleUrl: './categories.component.scss' // Style URL for the component
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = []; // Array to store categories

  // Method to fetch categories from the service
  getCategories(): void {
    this.categoryService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  // OnInit lifecycle hook to call getCategories() when the component is initialized
  ngOnInit(): void {
    this.getCategories();
  }

  // Input property to receive category filter from parent component
  @Input() categoryFilter: Category | undefined;

  // Output property to emit new category filter to parent component
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  
  // Method to set category filter based on user interaction
  setCategoryFilter(category: Category): void {
    if (this.categoryFilter === category) { // If the clicked category is already the filter
      this.categoryFilter = undefined; // Clear the filter
      this.newCategoryFilterEvent.emit(undefined); // Emit undefined to remove the filter in the parent component
    } else {
      this.categoryFilter = category; // Set the clicked category as the new filter
      this.newCategoryFilterEvent.emit(category); // Emit the new filter to the parent component
    }
  }
}
