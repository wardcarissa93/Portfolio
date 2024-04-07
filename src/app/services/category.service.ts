// Importing necessary Angular modules and RxJS utilities
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Importing Category model and predefined categories
import { Category } from '../models/category';
import { CATEGORIES } from '../data/categories'; // Assuming this file contains the predefined categories

// Injectable decorator for providing the service at root level
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }

  // Method to fetch categories as an Observable
  getCategories(): Observable<Category[]> {
    // Create an Observable of the predefined categories
    const categories = of(CATEGORIES);

    // Return the Observable containing categories
    return categories;
  }
}
