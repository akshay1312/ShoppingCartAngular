import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories() {
    return ["Fruits", "Diary", "Bread", "Vegetables"];
  }
}
