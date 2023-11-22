import axios from "axios";
import { makeRequest } from "../api/axios/request";

export const getProductApi = {
    getAllProduct: () =>
        makeRequest({
            url: '/product/get-allProduct',
            method: 'GET'
        }),


}