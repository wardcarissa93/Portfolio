import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { CATEGORIES } from '../data/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }
  getCategories(): Observable<Category[]> {
    const categories = of(CATEGORIES);
    return categories;
  }
}
