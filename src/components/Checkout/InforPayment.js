import React from "react";
import { InputTextGroup } from "../Field/InputTextGroub";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../../schema";
import { useState } from "react";
import { useEffect } from "react";
import { AddCartButton, BuyButton } from "../common/AddCartButton";
import { OrderButton } from "./OrderButton";
import { useSelector } from "react-redux";
import * as OrderService from '../../service/OrderService'




export function InforPayment(props) {

    const user = useSelector((state) => state.user.dataUser)
    const paymentMethod = useSelector((state) => state.order.paymentMethod)

    const { orderItem } = props

    const shippingPrice = 20000

    const fields = [
        { name: "firstName", label: "Tên*" },
        { name: "lastName", label: "Họ" },
        { name: "compName", label: "Tên công ty" },
        { name: "address", label: "Địa chỉ*" },
        { name: "phone", label: "Số điện thoại*" },
        { name: "email", label: "Email*" },
        { name: "note", label: "Ghi chú", mul: true },
        { name: "city", label: "Tên tỉnh/Thành phố*", },
        // Thêm các trường khác nếu cần
    ];


    const { control, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    })




    const onSubmit = async (values) => {

        //get Shipping address
        const shippingAddress = {}
        shippingAddress.fullName = values.lastName + ' ' + values.firstName
        shippingAddress.address = values.address
        shippingAddress.phone = values.phone
        shippingAddress.city = values.city
        console.log('dataaaInformation', shippingAddress);

        //Items Price
        var itemsPrice = 0
        for (var i = 0; i < orderItem.length; i++) {
            itemsPrice += orderItem[i].price * orderItem[i].amount

        }
        console.log('itemsPrice', itemsPrice);

        let totalPrice = 20000 + itemsPrice

        const dateCurrent = new Date()

        const data = {
            orderItems: orderItem,
            email: user.email,
            name: user.name,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod,
            itemsPrice: itemsPrice,
            shippingPrice: 20000,
            totalPrice: totalPrice,
            user: user._id,
            isPaid: false,
            paidAt: dateCurrent.getDate(),
            isDelivered: false,
            confirm: "Pending"
        }

        console.log('dataCreateeeOrderr', data);

        const res = await OrderService.processOrderApi.createNewOrder(data)
        console.log('ressssss', res);
    }

    return (

        <form
            className="ch-inforpayment-contain"
            onSubmit={handleSubmit(onSubmit)}

        >
            <h5>THÔNG TIN THANH TOÁN</h5>

            {/* Họ và tên */}
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",

                }}
            >

                <InputTextGroup
                    style={{ width: 320 }}
                    fields={fields[0]}
                    control={control}
                    formState={formState}
                    type="text" title="Tên* " place={"aloooo"} />

                <InputTextGroup
                    style={{ width: 320 }}
                    fields={fields[1]}
                    control={control}
                    formState={formState}
                    type="text" title="Họ " place={"aloooo"} />

            </div>

            {/* Company */}
            <div>
                <InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[2]}
                    control={control}
                    formState={formState}
                    type="text" title="Tên công ty" />
            </div>

            {/* City */}
            <div>
                <InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[7]}
                    control={control}
                    formState={formState}
                    title="Tên tỉnh/Thành phố" />
            </div>

            {/* phone/ email */}
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>

                < InputTextGroup
                    style={{
                        marginRight: 20,
                        width: 320
                    }}
                    fields={fields[3]}
                    control={control}
                    formState={formState}
                    type="text" title="Địa chỉ *" place="Địa chỉ" />

                <InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[4]}
                    control={control}
                    formState={formState}
                    type="text" title="Số điện thoại*" />

            </div>


            <div style={{
            }}>
                < InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[5]}
                    control={control}
                    formState={formState}
                    title="Địa chỉ email*" place="Địa chỉ" />
                {/* <InputTextGroup titl="Số điện thoại*" /> */}
            </div>



            <div style={{ paddingLeft: 0, fontWeight: 500 }}>
                {/* <p>Ghi chú đơn hàng</p> */}
                < InputTextGroup
                    style={{
                        width: 700,
                        mul: "true",
                        // textField: {
                        //     multiline: true
                        // }
                    }}
                    fields={fields[6]}
                    control={control}
                    formState={formState}
                />
            </div>

            <OrderButton title='Đặt hàng' />

        </form >
    )
}