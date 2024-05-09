import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Component({
  selector: 'bm-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent {
  constructor(
    private service: BookStoreService,
    private router: Router,
  ) {}

  create(book: Book) {
    this.service.create(book).subscribe((createdBook) => {
      this.router.navigate(['/books', createdBook.isbn]);
    });
  }
}
