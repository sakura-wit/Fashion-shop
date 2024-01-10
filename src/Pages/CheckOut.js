import React from "react";
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


    // var n = [1]
    // var a = []
    // var b = { name: 1 }
    // var c = { name: 2 }

    // a.push(b)
    // console.log('testArrayy', a);
    // a.push(c)
    // console.log('testArrayy', a);

    // // n = [...a]
    // console.log('n=a', n);
    // console.log('n=a', n = a);




    return (

        <div className="checkout-contain" >
            <InforPayment />
            <Bill dataCheckout={dataCheckout} />

        </div>
    )
}