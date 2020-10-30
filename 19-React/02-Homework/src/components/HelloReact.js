import React, { useState, useEffect } from "react";
import Background from './Background'
import Table from './search'
import API from "../api";
import Item from "./table";

function Landing () {
    const [results, setResults] = useState([])
    const [search, setSearch] = useState("")
    const [sorted, setSorted] = useState(false)
    useEffect(() => {
      API.getAll()
        .then( res =>
            setResults(res.data.results)
        )
        .catch(err => console.log(err));
    },[]);
    let finalResults;                 
    if (sorted) {
      finalResults = results.sort(function(a, b){
        let name1 = a.name.first + " " + a.name.last
        let name2 = b.name.first + " " + b.name.last
        if (name1 < name2) {
          return -1
        }
        if (name1 === name2) {
          return 0
        }
        if (name1 > name2) {
          return 1;
        }
      })
      }
      else {
        finalResults = results;
      }
  return (
  <>
    <Background>
    <h1>Employee Directory</h1>
    </Background>
    <input type="text" onInput={(e) => setSearch(e.target.value)}>
    </input>
    <button onClick={(e) => {setSorted(true)}}>Sort By Name</button>
    <Table>
    {finalResults.map(employee => (
    (employee.name.first + " " + employee.name.last).includes(search)?
    <Item
    key={employee.id.value}
    image={employee.picture.thumbnail}
    name={employee.name.first + " " + employee.name.last}
    phone={employee.cell}
    email={employee.email}
    />:""
    ))
    }
    </Table>
  </>
);
}

export default Landing;

