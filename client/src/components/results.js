import React, { useEffect, useState } from 'react';
import "./results.css"
import GetBooks from "./getbooks-ajax"



function Results() {
useEffect(() => {
    GetBooks().then((response) => {console.log(response)})

},[])
    return (
        <div className="container">
            <h1>Results</h1>


            <div id="books" >

            </div>
        </div>
    )
}

export default Results