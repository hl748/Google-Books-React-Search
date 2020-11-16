import axios from "axios"

function Delete (id) {
    console.log("Deleted")
    
    return axios.delete("/api/books/:id")
  }

export default Delete;