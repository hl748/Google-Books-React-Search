import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

function Navigation () {
    return (
    <>
    <Navbar>
    <Navbar.Brand>Google Books</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>
    <Link to="/">Search</Link>
    </Nav.Link>
    <Nav.Link>
      <Link to="/saved">Saved</Link>
      </Nav.Link>
    </Nav>
    </Navbar>
    </>
    )
}

export default Navigation