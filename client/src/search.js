import React from "react"
import Jumbotron from "./components/jumbotron"
import SearchBar from "./components/searchbar"
import Results from "./components/results"
import "./components/jumbotron.css"
import "./components/searchbar.css"
import "./components/results.css"
import Submit from "./components/submit-ajax"
import GoogleRequest from "./components/google-request"
import { useState, useEffect } from "react"


function Search () {
    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState("")
    
    return (
        <div>
            <Jumbotron />
            <SearchBar setSearchInput={setSearchInput} searchInput={searchInput}/>
            <Results setResults={setResults} results={results}/>
        </div>
    )
}

export default Search