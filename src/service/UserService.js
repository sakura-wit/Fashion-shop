
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

const dataaa = {
    "cart": [
        {
            "_id": "6540a722fbd34714bcb3607d",
            "name": "product2",
            "image": "https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg",
            "type": "shirt",
            "price": 199,
        }]
}

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
        // console.log('datttttttt');
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