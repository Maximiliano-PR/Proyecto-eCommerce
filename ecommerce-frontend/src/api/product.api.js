import axios from "axios"

const BASE_URL = 'http://localhost:3001'

export const getAllProducts = (searchTerm) => {
    return axios.get(`${BASE_URL}/api/products?name=${searchTerm || ""}`)
}

export const createProduct = (product) => {
    return axios.post(`${BASE_URL}/api/products`, product)
}
export const login = (loginData) => {
    return axios.post(`${BASE_URL}/auth/login`, loginData)
}