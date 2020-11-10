import React from "react"
import { Jumbotron } from "react-bootstrap"
import "./jumbotron.css"


function Header () {
    return (
<Jumbotron>
    <div class="container">
  <h1>Google Books Search (with React)</h1>
  <h2>Search for and Save Books of Interest</h2>
  </div>
</Jumbotron>
    )
}

export default Header;