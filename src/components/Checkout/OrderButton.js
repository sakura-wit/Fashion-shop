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

    const { style, title, onClick } = props

    const user = useSelector((state) => state.user.dataUser)
    const dataCreatOrder = useSelector((state) => state.order.dataCreateOrder)
    const cartUser = useSelector((state) => state.product.productCurrent)
    const orderItem = useSelector((state) => state.order.orderItem)

    const dispash = useDispatch()

    const navigate = useNavigate()

    async function updateCart(data, id) {
        await UserService.getUserApi.updateUser(data, id)
    }
    return (

        <button onClick={onClick} style={style} className="buybut-control" >{title}
            <FontAwesomeIcon className="buybut-control-icon"
                icon={faBagShopping}
                style={{ color: "#000", marginLeft: 10 }} /></button>
    )
}