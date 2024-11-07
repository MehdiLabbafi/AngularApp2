import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  imports: [CommonModule, FormsModule]
})
export class SearchComponent {
  books: Book[] = [];
  searchQuery: string = '';

  constructor(private bookService: BookService) {
    this.updateBooksList();
  }

  updateBooksList() {
    this.books = this.bookService.getBooks();
  }

  searchBooks() {
    return this.books.filter(book => 
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}