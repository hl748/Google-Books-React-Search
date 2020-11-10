import React from "react"
import Jumbotron from "./components/jumbotron"
import SearchBar from "./components/searchbar"
import SavedBooks from "./components/savedbooks"
import "./components/jumbotron.css"
import "./components/searchbar.css"
import "./components/savedbooks.css"

function Saved () {
    return (
        <div>
            <Jumbotron />
            <SearchBar />
            <SavedBooks />
        </div>
    )
}

export default Saved;