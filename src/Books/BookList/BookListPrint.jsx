import "./BookListPrint.css"

export default function BookListPrint(){
    return (
        <header className="print-only head-print">
            <h1>List of e-books</h1>
            <small>
            Printed: {new Date().toLocaleString()}
            </small>
            <hr />
        </header>
    )
}