import React from "react";
import { InputTextGroup } from "../Field/InputTextGroub";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../../schema";
import { useState } from "react";
import { useEffect } from "react";
import { AddCartButton, BuyButton } from "../common/AddCartButton";
import { OrderButton } from "./OrderButton";
import { useDispatch, useSelector } from "react-redux";
import * as OrderService from '../../service/OrderService'
import { deleteProductCur } from "../../redux/Slice/ProductSlice";
import * as UserService from '../../service/UserService'
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import * as PaymentService from '../../service/PaymentService'
import { PayPalButton } from "react-paypal-button-v2";
import { orderAction } from "../../redux/Slice/OrderSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";



export function InforPayment(props) {

    const user = useSelector((state) => state.user.dataUser)
    const paymentMethod = useSelector((state) => state.order.paymentMethod)

    const orderItem = useSelector((state) => state.order.orderItem)

    const cartUser = useSelector((state) => state.product.productCurrent)
    // const [listCart, setListCart] = useState(cartUser)

    const [dataOrder, setDataOrder] = useState()

    const navigate = useNavigate();

    const shippingPrice = 20000

    const dispash = useDispatch()

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

    async function updateCart(data, id) {
        await UserService.getUserApi.updateUser(data, id)
    }

    // const vietnamTime = new Intl.DateTimeFormat('en-US', {
    //     timeZone: 'Asia/Ho_Chi_Minh',
    // }).format(currentDate);


    const onSubmit = async (values) => {


        //get Shipping address
        const shippingAddress = {}
        shippingAddress.fullName = values.lastName + ' ' + values.firstName
        shippingAddress.address = values.address
        shippingAddress.phone = values.phone
        shippingAddress.city = values.city

        //Items Price
        var itemsPrice = 0
        for (var i = 0; i < orderItem.length; i++) {
            itemsPrice += orderItem[i].price * orderItem[i].amount

        }

        let totalPrice = 20000 + itemsPrice

        const dateCurrent = new Date()

        const data = {
            orderItems: orderItem,
            email: user.email,
            name: values.lastName ? values.lastName + ' ' + values.firstName : values.firstName,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod,
            itemsPrice: itemsPrice,
            shippingPrice: 20000,
            totalPrice: totalPrice,
            user: user._id,
            isPaid: false,
            paidAt: new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Ho_Chi_Minh',
            }).format(dateCurrent),
            isDelivered: false,
            confirm: "Pending"
        }

        dispash(orderAction.updateDataCreateOrder(data))

        setDataOrder(data)

        if (!(payMethod === 'Paypall' && sdkReady)) {
            const res = await OrderService.processOrderApi.createNewOrder(data)
            if (res.message === 'SUCCESS') {
                message.info('Đặt đơn hàng thành công')
                navigate('/')
            }
        }


        var listCart = cartUser

        for (var i = 0; i < orderItem.length; i++) {

            const check = listCart.some((item) => item._id === orderItem[i].product)
            if (check) {

                const newList = listCart.filter((item) => item._id !== orderItem[i].product)
                listCart = [...newList]
                dispash(deleteProductCur([...newList]))

                const res = updateCart({ cart: newList }, user._id)


                if (res?.message === 'update product SUCCESS') {
                    console.log('Xóa sản phẩm thành công')

                }
            }
        }

    }

    ///// PROCESS PAYMENT PAYPALL

    const payMethod = useSelector((state) => state.order.paymentMethod)

    const [sdkReady, setSdkReady] = useState(false)

    const onSuccessPaypal = async (details, data) => {
       
        let newDataOrder = { ...dataOrder }
        newDataOrder.isPaid = true
        const res = await OrderService.processOrderApi.createNewOrder(newDataOrder)
        if (res.message === 'SUCCESS') {
            message.info('Đặt hàng thành công')
            return navigate('/')
        }

    }


    const addPaypalScript = async () => {
        const { data } = await PaymentService.processOrderApi.getIdClient()

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
        script.async = true;
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }
    useEffect(() => {
        if (!window.paypal) {
            addPaypalScript()
        } else {
            setSdkReady(true)
        }


    }, [])


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
                    type="text" title="Tên "
                    required={true}
                />

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
                    title="Tên tỉnh/Thành phố"
                    required={true}
                />
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
                    type="text" title="Địa chỉ " place="address"
                    required={true}
                />

                <InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[4]}
                    control={control}
                    formState={formState}
                    type="text" title="Số điện thoại*"
                    place="phone"
                    required={true}
                />

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
                    title="Địa chỉ email" place="email"
                    required={true} />
                {/* <InputTextGroup titl="Số điện thoại*" /> */}
            </div>



            <div style={{ paddingLeft: 0, fontWeight: 500 }}>
                {/* <p>Ghi chú đơn hàng</p> */}
                < InputTextGroup
                    style={{
                        width: 700,
                        mul: "true",
                    }}
                    fields={fields[6]}
                    control={control}
                    formState={formState}
                />
            </div>

            {
                payMethod === 'Paypall' && sdkReady ? <PayPalButton
                    amount={0.1}
                    onSuccess={onSuccessPaypal}
                    onError={(data) => {
                        alert('Error')
                    }
                    }
                    onClick={handleSubmit(onSubmit)}
                >
                </PayPalButton> : <button onClick={handleSubmit(onSubmit)} className="buybut-control" >Đặt hàng
                    <FontAwesomeIcon className="buybut-control-icon"
                        icon={faBagShopping}
                        style={{ color: "#000", marginLeft: 10 }} /></button>
            }



        </form >
    )
}