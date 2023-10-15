import React from "react";
import { ProducCart } from "../components/ShoppingCart/ProductCart";
import { BuyButton } from "../components/common/BuyButton";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../components/common/useScrollToTop";

export function ShoppingCart() {
    return (

        <div className="shoppingcart-contain">
            <ProducCart />
            <ProducCart />
            <ProducCart />
            <ProducCart />
            <Link onClick={ScrollToTop} to="/checkout">
                <BuyButton title='Thanh toán' style={{ marginLeft: 180, marginTop: 50 }} />
            </Link>

        </div>
    )

}