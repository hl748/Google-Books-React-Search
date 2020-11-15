import axios from "axios"

function GoogleRequest (input) {
    console.log("Google Request")
    return axios.get("/api/google/", {params: {q:"title:" + input}})
}

export default GoogleRequest;