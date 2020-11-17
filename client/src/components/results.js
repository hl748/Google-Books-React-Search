import React, { useEffect, useState } from 'react';
import "./results.css"
import GetBooks from "./getbooks-ajax"
import "jquery"
import $ from "jquery"



function Results() {
    const GotBooks = GetBooks()

    return (
        <div className="container">
            <h1>Results</h1>


            <div id="books" >

            </div>
        </div>
    )
    
}

export default Results