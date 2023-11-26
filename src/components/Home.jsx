/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import FormData from "./FormData";
import Table from "./Table";
import { getDataFromLocalStorage } from "../Utils/Utils";
// import { getDataFromLocalStorage } from "../../Utils/Utils";
// import FormData from "../../components/FormData";
// import Table from "../../components/Table";

export default function Home() {

  const [books, setBooks] = useState(getDataFromLocalStorage());

  useEffect(()=>{
    localStorage.setItem("books", JSON.stringify(books))
  },[books])

  return (
    <>
        <div className="wrapper">
			<h1>BookList App</h1>
			<p>Add and view your books using local storage</p>
			<div className="main">
				<div className="form-container">
					<FormData books={books} setBooks={setBooks}/>
				</div>
				<div className="view-container">
                <Table  books={books} setBooks={setBooks}/>
				</div>
			</div>
		</div>
    </>
  )
}
