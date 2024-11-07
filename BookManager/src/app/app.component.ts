import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, BookListComponent, SearchComponent] // Adding components to imports
})
export class AppComponent {
  title = 'BookManager';
}
