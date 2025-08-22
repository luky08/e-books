import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import "./App.css";
import BookList from "./Books/BookList";
import BookDetails from "./Books/BookDetails";
import Head from "./Head";

const Books = [
  {
    id: 1,
    title: "The Wim Hof Method: Activate Your Full Human Potential",
    author: "Wim Hof",
    year: 2020,
    genre: "Self-help / Health",
    priceCZK: 399,
    rating: 4.3,
    cover: "wim-hof.jpg",
  },
  {
    id: 2,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    year: 2011,
    genre: "Biography",
    priceCZK: 349,
    rating: 4.7,
    cover: "steve-jobs.jpg",
  },
];

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = Books.find((b) => b.id === Number(id));

  if (!book) {
    return <p>Book not found.</p>;
  }

  return <BookDetails book={book} onBack={() => navigate("/")} />;
}

function App() {
  return (
    <Router>
      <Head/>
      <Routes>
        <Route path="" element={<BookList books={Books} />} />
        <Route path="book/:id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
