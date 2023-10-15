import React from "react";
import { SlideShowDetails } from "./SlideShowDetail";
import { ScrollView } from "../common/ScrollView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { BuyButton } from "../common/BuyButton";
import { ScrollToTop } from "../common/useScrollToTop";
import { Link } from "react-router-dom";

export function SelectProduct() {

    return (
        <>

            <div className="de-selectProduct-contain">
                <SlideShowDetails />
                <div className="de-detailselect-contain">
                    <h4>Quần kaki basic nam form slim-fit Old Sailor - QKDE31007 - Big size upto 42</h4>
                    <span style={{ padding: 8, textAlign: "center" }}>Mã sản phẩm  - QKDE310071</span>

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

                        <select className="de-selectsize">
                            <option selected> Size </option>
                            <option></option> -
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>

                        <div>
                            <span>Kích thước size</span>
                            <FontAwesomeIcon icon={faPenRuler} style={{ color: "#010204", }} />
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <Link to='/checkout' onClick={ScrollToTop}>
                            <BuyButton style={{ width: 200 }} title='Đặt hàng ngay' />
                        </Link>

                        <BuyButton style={{ width: 180 }} title='Thêm vào giỏ hàng' />
                    </div>


                    <ScrollView />
                </div>

            </div>
        </>

    )
}