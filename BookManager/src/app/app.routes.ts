import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './guards/auth.guard'; // Remove this line if AuthGuard is no longer needed

export const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'book-list' } // Default redirection to the book-list page
];
