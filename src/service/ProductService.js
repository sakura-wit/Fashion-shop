import axios from "axios";
import { makeRequest } from "../api/axios/request";

export const getProductApi = {
    getAllProduct: () =>
        makeRequest({
            url: '/product/get-allProduct',
            method: 'GET'
        }),

    getDataPanigation: (page, filter) =>
        makeRequest({
            url: `/product/get-allProduct?filter=name&filter=${filter}&page=${page - 1}&limit=8`,
            method: 'GET'
        }),

    getProductFilter: (name) =>
        makeRequest({
            url: `/product/get-allProduct?filter=name&filter=${name}&limit=8`,
            method: 'GET'
        }),

    getProductFilterAll: (future, data) =>
        makeRequest({
            url: `/product/get-allProduct?filter=${future}&filter=${data}&limit=8`,
            method: 'GET'
        }),

    updateProduct: (data, id) =>
        makeRequest({
            url: `/product/update-product/${id}`,
            method: 'PUT',
            data
        }),

    deleteProduct: (id, access) =>
        makeRequest({
            url: `/product/delete-product/${id}`,
            method: 'DELETE',
            headers: {
                token: `Beare ${access}`
            }
        }),

    createProduct: (data) =>
        makeRequest({
            url: `/product/create-product`,
            method: 'POST',
            data
        })



}