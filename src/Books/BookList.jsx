import "./BookList.css";
import "./BookListPrint.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGet } from "../utils/api";

export default function BookList() {

    const [bookState, setBooks] = useState([]);

    useEffect(() => {
        apiGet("/api/book").then((data) => setBooks(data.data));
    }, []);

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
                {bookState.map((b) => (
                <tr
                    key={b.book_id}
                    className="book-row"
                    onClick={() => navigate(`/book/${b.book_id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate(`/${b.book_id}`)}
                >
                    <td>{b.title}</td>
                    <td>{b.author_name}</td>
                    <td>{b.publication_year}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
  );
}
