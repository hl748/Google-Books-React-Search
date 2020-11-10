import React from "react"
import Jumbotron from "./components/jumbotron"
import SearchBar from "./components/searchbar"
import Results from "./components/results"
import "./components/jumbotron.css"
import "./components/searchbar.css"
import "./components/results.css"


function Search () {
    return (
        <div>
            <Jumbotron />
            <SearchBar />
            <Results />
        </div>
    )
}

export default Search