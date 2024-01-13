import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductCur, updateProductCur } from "../../redux/Slice/ProductSlice";

import * as OrderService from '../../service/OrderService'
import * as UserService from '../../service/UserService'
import { userAction } from "../../redux/Slice/UserSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export function OrderButton(props) {
    const dataUpdate = useSelector((state) => state.product.productCurrent)

    const idUser = useSelector((state) => state.user.dataUser)

    const { style, title, onClick, data } = props

    const user = useSelector((state) => state.user.dataUser)
    const dataCreatOrder = useSelector((state) => state.order.dataCreateOrder)
    const cartUser = useSelector((state) => state.product.productCurrent)
    const orderItem = useSelector((state) => state.order.orderItem)

    const dispash = useDispatch()

    // const userCart = useSelector((state)=>state.user.)

    const navigate = useNavigate()

    async function updateCart(data, id) {
        await UserService.getUserApi.updateUser(data, id)
    }

    const handleUpdateCart = async () => {
        const res = await OrderService.processOrderApi.createNewOrder(dataCreatOrder)
        if (res.message === 'SUCCESS') {
            message.info('Thêm đơn hàng thành công')
            return navigate('/')
        }

        var listCart = cartUser

        for (var i = 0; i < orderItem.length; i++) {

            const check = listCart.some((item) => item._id === orderItem[i].product)
            if (check) {
                console.log('orderItem[i].product', orderItem[i].product);
                const newList = listCart.filter((item) => item._id !== orderItem[i].product)
                listCart = [...newList]
                dispash(deleteProductCur([...newList]))
                console.log('valueee', newList);
                const res = updateCart({ cart: newList }, user._id)
                // console.log('orderItem.length', orderItem[i]);

                if (res?.message === 'update product SUCCESS') {
                    console.log('Xóa sản phẩm thành công')

                }
            }
        }
    }
    return (

        <button onClick={handleUpdateCart} style={style} className="buybut-control" >{title}
            <FontAwesomeIcon className="buybut-control-icon"
                icon={faBagShopping}
                style={{ color: "#000", marginLeft: 10 }} /></button>
    )
}