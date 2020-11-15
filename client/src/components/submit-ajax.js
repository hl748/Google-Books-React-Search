import axios from "axios"

function Submit (book) {
  console.log("Submitted")
  return axios.post("/api/books", book)
}



export default Submit;

  