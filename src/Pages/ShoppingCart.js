import React, { useEffect } from "react";
import { ProducCart } from "../components/ShoppingCart/ProductCart";
import { AddCartButton, BuyButton } from "../components/common/AddCartButton";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../components/common/useScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { set } from "react-hook-form";
import { deleteProductCur, setCheckpay, setProductCheckout, updateProductCur } from "../redux/Slice/ProductSlice";
import * as UserService from '../service/UserService'

export function ShoppingCart() {

    const dataProductCart = useSelector((state) => state.product.productCurrent)
    const userCart = useSelector((state) => state.user.dataUser)
    const idUser = useSelector((state) => state.user.dataUser)
    console.log('iddddddd', idUser);
    console.log('userCart', userCart);

    const [listCart, setListCart] = useState(dataProductCart)
    console.log(listCart);


    useEffect(() => {
        console.log('dataProductCart', dataProductCart);
    }, [dataProductCart])

    const dispash = useDispatch()

    async function updateCart(data, id) {
        await UserService.getUserApi.updateUser(data, id)
    }

    const handleSetListCart = async (data) => {
        const check = listCart.some((item) => item._id === data._id)
        if (check) {
            const newList = listCart.filter((item) => item._id !== data._id)
            setListCart(newList)
            dispash(deleteProductCur([...newList]))
            console.log('valueee', newList);
            await updateCart({ data: newList }, idUser)
        }
    }

    const changeCheckPay = () => {
        dispash(setProductCheckout(listCart))
        dispash(setCheckpay("multiPay"))
    }

    return (

        <div className="shoppingcart-contain">
            {listCart?.map((val) => {
                if (userCart) {
                    return (
                        // <ProducCart key={val._id}
                        //     type={val.type}
                        //     price={val.price}
                        //     dataItem={val}
                        //     listItem={dataProductCart}
                        // />
                        <div key={val._id}

                            style={{ margin: "auto", width: 1000, display: "flex", padding: 20, borderBottom: "1px solid gray", }}>
                            <img style={{ width: 100, height: 100, objectFit: "contain" }} src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
                            <div style={{ width: 800, display: "flex", justifyContent: "space-around" }}>
                                <h6>Decripstion : {val.type}</h6>
                                <h6>Số lượng x giá ( {val.price} ) : </h6>
                                <h6>Tổng tiền :</h6>
                            </div>

                            <FontAwesomeIcon cursor={"pointer"} onClick={() => handleSetListCart(val)} icon={faTrash} />

                        </div>
                    )
                }

            })}

            <Link onClick={changeCheckPay} to="/checkout">
                <AddCartButton title='Thanh toán' style={{ marginLeft: 180, marginTop: 50 }} />
            </Link>

        </div>
    )

}