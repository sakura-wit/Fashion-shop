
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


const dataName = {
    name: "Dattttttheoơ"
}

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
    getDetailUser: (data) =>
        makeRequest({
            url: `/user/getDetails/${data}`,
            method: 'GET'
        })




}