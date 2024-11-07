import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [CommonModule, FormsModule]
})
export class BookListComponent {
  books: Book[] = [];
  newBook: Book = { id: 0, title: '', author: '' };
  isEditing: boolean = false;
  editingBookId: number | null = null;

  constructor(private bookService: BookService) {
    // Fetch the list of books from the service
    this.books = this.bookService.getBooks();
  }

  addBook() {
    if (this.newBook.title && this.newBook.author) {
      if (this.isEditing && this.editingBookId !== null) {
        // Edit an existing book
        this.bookService.updateBook({ ...this.newBook, id: this.editingBookId });
        this.isEditing = false;
        this.editingBookId = null;
      } else {
        // Add a new book
        this.bookService.addBook({ ...this.newBook });
      }
      // Clear the form
      this.newBook = { id: 0, title: '', author: '' };
      // Update the book list
      this.books = this.bookService.getBooks();
    }
  }

  editBook(book: Book) {
    // Set the form to the selected book for editing
    this.newBook = { ...book };
    this.isEditing = true;
    this.editingBookId = book.id;
  }

  deleteBook(bookId: number) {
    // Delete a book from the service
    this.bookService.deleteBook(bookId);
    // Update the book list
    this.books = this.bookService.getBooks();
  }
}
