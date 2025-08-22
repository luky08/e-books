import "./BookList.css";
import { useNavigate } from "react-router-dom";

export default function BookList({ books, onSelect }) {

    const navigate = useNavigate();
  return (
    <table className="book-table" border="1">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year of publication</th>
        </tr>
      </thead>
      <tbody>
        {books.map((b) => (
          <tr
            key={b.id}
            className="book-row"
            onClick={() => navigate(`/book/${b.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate(`/${b.id}`)}
          >
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
