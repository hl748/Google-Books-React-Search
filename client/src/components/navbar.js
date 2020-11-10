import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation () {
    return (
    <>
    <Navbar>
    <Navbar.Brand>Google Books</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="search">Search</Nav.Link>
      <Nav.Link href="saved">Saved</Nav.Link>
    </Nav>
    </Navbar>
    </>
    )
}

export default Navigation