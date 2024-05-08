import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private service: BookStoreService) {
    this.books = this.service.getAll();
  }
}
