import { makeRequest } from "../api/axios/request";

export const processOrderApi = {
    createNewOrder: (data) =>
        makeRequest({
            url: '/order/create-order',
            method: 'POST',
            data
        }),

    getAllOrder: () =>
        makeRequest({
            url: '/order/get-allOrder',
            method: 'GET',
        }),

    getOrderConfirmed: () =>
        makeRequest({
            url: '/order/get-allOrder/?filter=confirm&filter=Confirmed',
            method: 'GET',
        }),

    getOrderPending: () =>
        makeRequest({
            url: '/order/get-allOrder/?filter=confirm&filter=Pending',
            method: 'GET',
        }),
    updateIsPaid: (id) =>
        makeRequest({
            url: `/order/update-order/${id}`,
            method: 'PUT',
            data: {
                confirm: "Confirmed"
            }
        }),
}