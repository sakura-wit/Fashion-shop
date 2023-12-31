import { faStore, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function ProducCart(props) {

    const { image, type, price, dataItem } = props



    const handleDeleteProduct = () => {

    }


    return (

        <div style={{ margin: "auto", width: 1000, display: "flex", padding: 20, borderBottom: "1px solid gray", }}>
            <img style={{ width: 100, height: 100, objectFit: "contain" }} src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
            <div style={{ width: 800, display: "flex", justifyContent: "space-around" }}>
                <h6>Decripstion : {dataItem.type}</h6>
                <h6>Số lượng x giá ( {dataItem.price} ) : </h6>
                <h6>Tổng tiền :</h6>
            </div>


            <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTrash} />
            <FontAwesomeIcon style={{ padding: 10, cursor: "pointer" }} color="#000" icon={faStore} />


        </div>
    )



}