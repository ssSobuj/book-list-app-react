/* eslint-disable react/prop-types */

import BookRow from "./bookRow";

export default function Table({ books, setBooks }) {
  const deleteBook = (id) => {
    const dilit = books.filter((book) => book.isbn !== id);
    setBooks(dilit);
  };

  const removeAll = () => {
    setBooks([]);


  };

  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ISBN#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publishd Year</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookRow book={book} key={book.ISBN} deleteBook={deleteBook}/>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={removeAll} className="btn btn-danger btn-md">
        Remove All
      </button>
    </>
  );
}
