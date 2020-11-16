import axios from "axios"

function GoogleRequest (input) {
    console.log("Google Request")
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + input)
}

export default GoogleRequest;