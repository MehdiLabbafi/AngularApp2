# AngularApp2
Assignment 3

# Book Manager Project

## Description
The Book Manager is an Angular-based web application that allows users to manage a list of books. Users can add, edit, and delete books as well as search for specific books in the list.

## Project Structure
The project is organized as follows:

```
src/
  app/
    components/
      book-list/
        book-list.component.ts
        book-list.component.html
        book-list.component.css
      search/
        search.component.ts
        search.component.html
        search.component.css
    models/
      book.model.ts
    services/
      book.service.ts
    app.component.ts
    app.component.html
    app.component.css
    app.routes.ts
    app.module.ts
  assets/
    images/
      book.jpg
  index.html
  main.ts
```

## Features
- **Add Books**: Users can add new books by entering the title and author.
- **Edit Books**: Existing books can be edited.
- **Delete Books**: Books can be deleted from the list.
- **Search Functionality**: Users can search for books by title or author.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/MehdiLabbafi/AngularApp2.git
   cd BookManager
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   ng serve
   ```

4. **Access the application**:
   Open your web browser and navigate to:
   ```
   http://localhost:4200
   ```
   By default, Angular runs the development server on port 4200. If this port is in use or you wish to specify a different port, use:
   ```bash
   ng serve --port <port_number>
   ```

## Components
### Book List Component
- **Path**: `src/app/components/book-list/`
- **Description**: Displays a list of books with the options to add, edit, and delete books.

### Search Component
- **Path**: `src/app/components/search/`
- **Description**: Provides a search interface to filter books by title or author.

## Services
### Book Service
- **Path**: `src/app/services/book.service.ts`
- **Description**: Manages the list of books and provides methods for CRUD operations.

## Models
### Book Model
- **Path**: `src/app/models/book.model.ts`
- **Description**: Defines the structure of a book object with `id`, `title`, and `author` properties.

## Routing
The application uses Angular Router for navigation. The routes are defined in `src/app/app.routes.ts`:
```typescript
import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'book-list' }
];
```

## How to Contribute
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

## Contributors

- **Mehdi Labbafi** - Developer and creator of the project.


