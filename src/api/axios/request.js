import axios from "axios";
import { jwtDecode } from "jwt-decode";


export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_URL_BACKEND,
})



export const intercepterRequest = async (config) => {
    return config;

}

const intercepterError = async (err) => {
    return Promise.reject(err)
}

const intercepterResponse = async (response) => {
    return response?.data

}

makeRequest.interceptors.request.use(intercepterRequest, intercepterError)
makeRequest.interceptors.response.use(intercepterResponse, intercepterError)