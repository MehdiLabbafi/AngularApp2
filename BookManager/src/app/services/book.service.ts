import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  constructor() {
    this.loadBooksFromStorage();
  }

  private loadBooksFromStorage(): void {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    } else {
      // Initial data
      this.books = [
        { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 4.5 },
        { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', rating: 4.0 }
      ];
      this.saveBooksToStorage();
    }
  }

  private saveBooksToStorage(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    book.id = this.books.length + 1;
    this.books.push(book);
    this.saveBooksToStorage();
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
      this.saveBooksToStorage();
    }
  }

  deleteBook(bookId: number): void {
    this.books = this.books.filter(book => book.id !== bookId);
    this.saveBooksToStorage();
  }
}