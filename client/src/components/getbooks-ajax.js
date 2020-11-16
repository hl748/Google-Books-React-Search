import axios from "axios"

function GetBooks () {
    console.log("GotBook")
    return axios.get("http://localhost:3001/api/books")
}

export default GetBooks;