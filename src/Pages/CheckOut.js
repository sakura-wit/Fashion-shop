import React from "react";
import { InforPayment } from "../components/Checkout/InforPayment";
import { Bill } from "../components/Checkout/Bill";

export function CheckOut() {

    return (

        <div className="checkout-contain" >
            <InforPayment />
            <Bill />

        </div>
    )
}