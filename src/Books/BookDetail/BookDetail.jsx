import './BookDetail.css';
import { useNavigate } from 'react-router-dom';
import { apiGet } from "../../utils/api";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BookDetails() {
  const navigate = useNavigate();


    const { id } = useParams();
    const [book, setBook] = useState({});


    // When the `id` changes → call the API /api/books/:id
    // Find the book that matches the current `id` in the URL
    // Store that book in the `book` state
    // The component re-renders with the book's details
    useEffect(() => {
        apiGet("/api/books/" + id)
            .then((res) => {
            if (Array.isArray(res?.data)) {
              const found = res.data.find(b => String(b.book_id) === String(id));
              setBook(found || null);
            } else {
              setBook(null);
            }
          })
      }, [id]);

      if (!book) { return "Book not found"}


  return (
    <div className="book-detail">
      <div className="book-content">
        <div className="book-cover">
          <img
            src={`/assets/${book.cover}`}
            alt={`Obálka knihy ${book.title}`}
          />
        </div>

        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p><strong>Author:</strong> {book.author_name}</p>
          <p><strong>Genre:</strong> {book.genre_name || "—"}</p>
          <p><strong>Year of publication:</strong> {book.publication_year}</p>
          <p><strong>Price:</strong> {book.price ? `${book.price} Kč` : "—"}</p>
          <p><strong>Rating:</strong> {book.rating ? `${book.rating}/5` : "—"}</p>
        </div>
      </div>

      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to list
      </button>
    </div>
  );
}
