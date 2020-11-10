import React from "react"
import "./searchbar.css"

function SearchBar () {
    return (
        <div class="container">
            <div>
            <h2>Google Books Search</h2>
            <form>
  <input type="text" size="185"></input>
  <input type="submit" value="Submit"></input>
    </form>
    </div>
        </div>
    )
}

export default SearchBar;
