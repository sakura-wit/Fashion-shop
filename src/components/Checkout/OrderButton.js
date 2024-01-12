import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductCur } from "../../redux/Slice/ProductSlice";

import * as UserService from '../../service/UserService'
import { userAction } from "../../redux/Slice/UserSlice";

export function OrderButton(props) {
    const dataUpdate = useSelector((state) => state.product.productCurrent)

    const idUser = useSelector((state) => state.user.dataUser)

    const { style, title, onClick, data } = props

    const dispatch = useDispatch()

    // const userCart = useSelector((state)=>state.user.)


    useEffect(() => {


    }, [])

    const handleUpdateCart = (data) => {
        const shippingAddress = {}
        // shippingAddress.fullName = value?.lastName + data.value.firstName
        // shippingAddress.address = value.address
        // shippingAddress.phone = value.phone
        // shippingAddress.city = value.city
        console.log('dataaaInformation', data.value);
    }
    return (

        <button onClick={handleUpdateCart} style={style} className="buybut-control" >{title}
            <FontAwesomeIcon className="buybut-control-icon"
                icon={faBagShopping}
                style={{ color: "#000", marginLeft: 10 }} /></button>
    )
}