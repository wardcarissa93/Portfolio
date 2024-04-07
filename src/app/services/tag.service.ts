// Importing necessary Angular modules and RxJS utilities
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Importing Tag model and predefined tags
import { Tag } from '../models/tag';
import { TAGS } from '../data/tags'; // Assuming this file contains the predefined tags

// Injectable decorator for providing the service at root level
@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor() { }

  // Method to fetch all tags as an Observable
  getTags(): Observable<Tag[]> {
    // Create an Observable of the predefined tags
    const tags = of(TAGS);

    // Return the Observable containing tags
    return tags;
  }
}
