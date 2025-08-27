import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import "./App.css";
import BookList from "./Books/BookList/BookList";
import BookDetail from "./Books/BookDetail/BookDetail";
import Head from "./Head";


function App() {
  return (
    <Router>
      <Head/>
      <Routes>
        <Route path="" element={<BookList/>}/>
        <Route path="book/:id" element={<BookDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
