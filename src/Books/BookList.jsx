import "./BookList.css";
import "./BookListPrint.css"
import { useNavigate } from "react-router-dom";

export default function BookList({ books, onSelect }) {

    const handlePrint = () => {
        window.print();
    };

    const navigate = useNavigate();
  return (
        <div className="book-list-container">
        <div className="toolbar no-print">
            <button onClick={handlePrint} className="print-btn">Print list</button>
        </div>

        <header className="print-only head-print">
            <h1>List of e-books</h1>
            <small>
            Printed: {new Date().toLocaleString()}
            </small>
            <hr />
        </header>
        
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
        </div>
  );
}
