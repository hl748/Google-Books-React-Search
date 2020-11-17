import React from "react"
import "./savedbooks.css"
import GetBooks from "./getbooks-ajax"
import { useEffect, useState } from "react"

function SavedBooks () {
    // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  })

  // Loads all books and sets them to books
  function loadBooks() {
    GetBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
    return (
        <div class="container">
        <h1>Saved Books</h1>
        <div id="books" onLoad={() => {}}>
        {
            books.map(listitem => (
                <li className="list-group-item list-group-item-primary" />
            ))
        }
        </div>
        </div>
    )
}

export default SavedBooks