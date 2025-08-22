import './BookDetails.css';
import { useNavigate } from 'react-router-dom';

export default function BookDetails({ book }) {
  const navigate = useNavigate();

  if (!book) return null;

  return (
    <div className="book-detail">
      <div className="book-content">
        <div className="book-cover">
          <img
            src={book.cover ? `/assets/${book.cover}` : `/assets/placeholder.jpg`}
            alt={`Obálka knihy ${book.title}`}
          />
        </div>

        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre || "—"}</p>
          <p><strong>Year of publication:</strong> {book.year}</p>
          <p><strong>Price:</strong> {book.priceCZK ? `${book.priceCZK} Kč` : "—"}</p>
          <p><strong>Rating:</strong> {book.rating ? `${book.rating}/5` : "—"}</p>
        </div>
      </div>

      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to list
      </button>
    </div>
  );
}
