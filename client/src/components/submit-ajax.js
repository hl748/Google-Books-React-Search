import axios from "axios"

function Submit (book) {
  console.log("Submitted", book)
  return axios.post("http://localhost:3000/api/books", book)
}



export default Submit;

  