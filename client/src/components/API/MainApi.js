import axios from "axios";
const url='http://localhost:8000/api'

export default axios.create({
    baseURL:url
})
