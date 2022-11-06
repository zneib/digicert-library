import { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Book from './components/Book';

type BookType = {
  title: string;
  author: string;
  id: number;
}

const BooksLayout = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await fetch('https://deno-testing-api.deno.dev/api/books');
      const data = await res.json();
      setBooks(data.data.documents);
    }
    getAllBooks();
  }, [])

  return (
    <div className="App">
      <h1>All Library Books</h1>
      <BooksLayout>
        {books.length > 0 && books.map((book: BookType) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </BooksLayout>
    </div>
  );
}

export default App;
