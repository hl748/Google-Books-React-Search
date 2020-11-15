import axios from "axios"

function GetBooks () {
    console.log("GotBook")
    return axios.get("/api/books")
}

export default GetBooks;