import React from "react"
import "./searchbar.css"
import Submit from "./submit-ajax"
import Delete from "./delete-ajax"
import { useEffect, useState } from "react"
import GoogleRequest from "./google-request"
import axios from "axios"
import "jquery"
import $ from "jquery"


function SearchBar () {
    const SearchGoogle = (input) => {
        GoogleRequest(input).then(
            (response) => {
                $("#books").empty()
                for (var i = 0; i < response.data.items.length; i++) {
                $("#books").prepend("<h1 " + "id=" + i + " class=book>" + JSON.stringify(response.data.items[i].volumeInfo.title) + "</h1>")
                
            }
            $(".book").on("click", function(){
                console.log("Clicked")         
                const thisText = $(this).text()
                let number
                localStorage.setItem("book" + number, thisText)
                console.log(thisText, "thetext")
                number++
                console.log(number)
                axios.post("/api/books", {String: thisText})
})
            for(var i = 0; i<response.data.items.length; i++){
                $("#books").css("background-color","green")
            }
            })
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
        <button onClick={() => {SearchGoogle(value)}}>Search</button>
        <button onClick={() => Submit(value)}>Submit</button>
    </div>
        </div>
    )
}

export default SearchBar;
