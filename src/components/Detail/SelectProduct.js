import React, { useState } from "react";
import { SlideShowDetails } from "./SlideShowDetail";
import { ScrollView } from "../common/ScrollView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { AddCartButton, BuyButton } from "../common/AddCartButton";
import { ScrollToTop } from "../common/useScrollToTop";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSlice, setCheckpay, setDetaislProduct, setProductCheckout } from "../../redux/Slice/ProductSlice";

export function SelectProduct() {

    const dataDetailProduct = useSelector((state) => state.product.productDetail)
    console.log('dataDetailProduct', dataDetailProduct);

    // const [productPay, setProductPay] = useState([])

    var payment = []

    const onClick = (val) => {
        console.log('onClick', val.target.value);
    }

    const dispash = useDispatch()

    // {
    //     name: dataDetailProduct.name,
    //     price: dataDetailProduct.price
    // }

    const changeCheckPay = () => {

        payment = [{
            name: dataDetailProduct.name,
            price: dataDetailProduct.price
        }]

        dispash(setProductCheckout(payment))
        console.log('productPay', payment);
        dispash(setCheckpay("siglePay"))

    }

    return (
        <>

            <div className="de-selectProduct-contain">
                <SlideShowDetails image={dataDetailProduct.imagePreview} />
                <div className="de-detailselect-contain">
                    <h4>{dataDetailProduct.name}</h4>
                    <span style={{ padding: 8, textAlign: "center" }}>{dataDetailProduct.hash}</span>

                    {/* Price */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 8,
                        borderTop: "1px solid gray",
                        borderBottom: "1px solid gray",
                        marginTop: 10
                    }}>
                        <p>Gía</p>
                        <p>{dataDetailProduct.price}đ</p>
                    </div>



                    {/* Size option */}
                    <div className="de-selectsize-contain">

                        <select onChange={onClick} defaultValue="selected" className="de-selectsize">
                            <option value="selected"> Size </option>
                            {
                                dataDetailProduct.size?.map((val, key) => {
                                    return (
                                        <option key={key} value={val}>{val}</option>

                                    )
                                })

                            }

                        </select>

                        <div>
                            <span>Kích thước size</span>
                            <FontAwesomeIcon icon={faPenRuler} style={{ color: "#010204", }} />
                        </div>
                    </div>


                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <Link to="/checkout" dataproduct="nguyenvandat" onClick={changeCheckPay}>
                            <button
                                style={{ width: 180 }}
                                className="buybut-control" >Đặt hàng ngay
                                <FontAwesomeIcon className="buybut-control-icon"
                                    icon={faBagShopping}
                                    style={{ color: "#000", marginLeft: 10 }} /></button>
                        </Link>

                        <AddCartButton
                            data={dataDetailProduct}
                            style={{ width: 180 }}
                            title="Thêm vào giỏ hàng" />
                    </div>


                    <ScrollView data={dataDetailProduct} />
                </div>

            </div>
        </>

    )
}