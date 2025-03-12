import React from 'react';
import BooksItem from './BookItem';
import './Books.css'; // Import the CSS file

const Books = ({ booksData }) => {
    const {books,loading}=booksData;
    return (
        <div className="books-container">
            {loading? <h1>Loading...</h1>:
            <div>
            <h1 className="books-title">Books</h1>
            <table className="books-table">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Pages</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                    <BooksItem key={index} book={book} />
                    ))}
                </tbody>
            </table>
            </div>
            }
        </div>
    );
}

export default Books;