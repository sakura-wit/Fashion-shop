import React from "react";
import { SlideShowDetails } from "./SlideShowDetail";
import { ScrollView } from "../common/ScrollView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { AddCartButton, BuyButton } from "../common/AddCartButton";
import { ScrollToTop } from "../common/useScrollToTop";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function SelectProduct() {

    const dataDetailProduct = useSelector((state) => state.product.productDetail)
    console.log('dataDetailProduct', dataDetailProduct);

    return (
        <>

            <div className="de-selectProduct-contain">
                <SlideShowDetails image={dataDetailProduct.imageDetail} />
                <div className="de-detailselect-contain">
                    <h4>{dataDetailProduct.description}</h4>
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
                        <p>445.000 đ</p>
                    </div>

                    {/* Size option */}
                    <div className="de-selectsize-contain">

                        <select defaultValue="selected" className="de-selectsize">
                            <option value="selected"> Size </option>
                            <option value="opt1">1</option> -
                            <option value="opt2" >2</option>
                            <option value="opt3" >3</option>
                            <option value="opt4">4</option>
                        </select>

                        <div>
                            <span>Kích thước size</span>
                            <FontAwesomeIcon icon={faPenRuler} style={{ color: "#010204", }} />
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <Link to='/checkout' onClick={ScrollToTop}>
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
                        {/* <button
                            style={{ width: 180 }}
                            className="buybut-control" >Thêm vào giỏ hàng
                            <FontAwesomeIcon className="buybut-control-icon"
                                icon={faBagShopping}
                                style={{ color: "#000", marginLeft: 10 }} /></button> */}
                    </div>


                    <ScrollView />
                </div>

            </div>
        </>

    )
}