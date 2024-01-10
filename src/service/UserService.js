
import axios from "axios";
import { makeRequest } from "../api/axios/request";

// export const signupUser = async (data) => {
//     const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/user/sign-up`, data)
//     return res.data
// }

// export const signinUser = async (data) => {
//     const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/user/sign-in`, data)
//     return res.data
// }

// export const getAllProduct = async () => {
//     const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/product/get-allProduct`)
//     return res.data

// }

export const axiosJWT = axios.create()


export const getUserApi = {
    getAllProduct: () =>
        makeRequest({
            url: '/product/get-allProduct',
            method: 'GET'
        }),

    signinUser: (data) =>
        makeRequest({
            url: '/user/sign-in',
            method: 'POST',
            data
        }),
    signupUser: (data) =>
        makeRequest({
            url: '/user/sign-up',
            method: 'POST',
            data
        }),
    updateUser: (data, id) => {
        console.log('datttttttt');
        if (id._id) {
            makeRequest({
                url: `/user/update-user/${id._id}`,
                method: 'PUT',
                data
            })
            console.log('khongronggg');
        }

    },
    getDetailUser: (data, access_token) =>
        makeRequest({
            url: `/user/getDetails/${data}`,
            method: 'GET',
            headers: {
                token: `Beare ${access_token}`,
            }

        }),

    refreshToken: (data) =>
        makeRequest({
            url: `/user/refresh-token`,
            method: 'POST',
            headers: {
                token: `Beare ${data}`
            },
            // withCredentials: true

        }),

    getAllUser: (data) =>
        makeRequest({
            url: '/user/getAll',
            method: 'GET',
            headers: {
                token: `Beare ${data}`
            }
        }),

    deleteUser: (data, token) =>
        makeRequest({
            url: `/user//delete-user/${data}`,
            method: 'DELETE',
            headers: {
                token: `Beare ${token}`
            }
        })

}

// export const getDetailUser = async (id, access_token) => {
//     const res = await axiosJWT.get(`${process.env.REACT_APP_URL_BACKEND}/user/getDetails/${id}`, {
//         headers: {
//             token: `Beare ${access_token} `
//         }
//     })
//     return res.data
// }