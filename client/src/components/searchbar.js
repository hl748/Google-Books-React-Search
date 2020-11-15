import React from "react"
import "./searchbar.css"
import Submit from "./submit-ajax"
import Delete from "./delete-ajax"
import { useEffect, useState } from "react"
import GoogleRequest from "./google-request"


function SearchBar () {
    const SearchGoogle = (input) => {
        GoogleRequest(input).then((response) => {console.log(response)})
    }
        const [value, setValue] = useState("")
    return (
        <div class="container">
            <div>
            <h2>Google Books Search</h2>
            <form>
  <input type="text" id="enter-book" size="185" value={value} onChange={(event) => {
      setValue(event.target.value)
      console.log(event.target.value)
  }}/>
    </form>
        <button onClick={() => SearchGoogle(value)}>Search</button>
    </div>
        </div>
    )
}

export default SearchBar;
