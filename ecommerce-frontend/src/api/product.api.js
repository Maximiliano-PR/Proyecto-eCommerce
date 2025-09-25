import axios from "axios"

const BASE_URL = 'http://localhost:3001/api'

export const getAllProducts = (searchTerm) => {
    return axios.get(`${BASE_URL}/products?name=${searchTerm || ""}`)
}