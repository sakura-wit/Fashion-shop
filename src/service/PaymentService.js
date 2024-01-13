import { makeRequest } from "../api/axios/request";

export const processOrderApi = {
    getIdClient: () =>
        makeRequest({
            url: '/payment/config',
            method: 'GET',
        }),


}