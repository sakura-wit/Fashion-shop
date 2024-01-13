import React, { useEffect } from "react";
import { InforPayment } from "../components/Checkout/InforPayment";
import { Bill } from "../components/Checkout/Bill";
import { useSelector } from "react-redux";

export function CheckOut(props) {

    window.scrollTo({
        top: 0
    })

    const singleProduct = useSelector((state) => state.product.checkPay)
    console.log('singleProduct', singleProduct);

    const dataCheckout = useSelector((state) => state.product.productCheckout)
    console.log('dataCheckout', dataCheckout);

    const orderItem = useSelector((state) => state.order.orderItem)
    console.log('orderItem', orderItem);

    return (

        <div className="checkout-contain" >
            <InforPayment orderItem={orderItem} />
            <Bill dataCheckout={orderItem} />

        </div>
    )
}