/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useState } from "react";

export default function FormData({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setisbn] = useState("");
  const [pubYear, setPubYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //creating a book object
    const book = {
      title,
      author,
      isbn,
      pubYear,
    };

    setBooks([...books, book]);
    cleareInput();
  };
  const cleareInput = () => {
    setTitle("");
    setAuthor("");
    setisbn("");
    setPubYear("");
  };
  // form submit event

  return (
    <>
      <form onSubmit={handleSubmit} className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          required
        ></input>
        <br></br>
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <br></br>
        <label>ISBN#</label>
        <input
          type="text"
          className="form-control"
          required
          value={isbn}
          onChange={(e) => setisbn(e.target.value)}
        ></input>
        <br></br>
        <label>Pulish Year</label>
        <input
          type="text"
          className="form-control"
          required
          value={pubYear}
          onChange={(e) => setPubYear(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" className="btn btn-success btn-md">
          ADD
        </button>
      </form>
    </>
  );
}
