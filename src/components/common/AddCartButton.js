import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductCur } from "../../redux/Slice/ProductSlice";

import * as UserService from '../../service/UserService'

export function AddCartButton(props) {
    const dataUpdate = useSelector((state) => state.product.productCurrent)
    // console.log('dataaaaSend', dataUpdate);

    const idUser = useSelector((state) => state.user.dataUser)
    // console.log('idddd', idUser);

    const { style, title, onClick, data } = props

    const dispatch = useDispatch()


    async function updateCart(data, id) {
        await UserService.getUserApi.updateUser(data, id)
    }



    useEffect(() => {

        // const newDataUpdateCar = [...dataUpdate]
        // console.log('dataupdate', dataUpdate);
        updateCart({ cart: dataUpdate }, idUser)
    }, [dataUpdate])

    const handleUpdateCart = () => {
        // console.log("dataaaUpdate", daata);
        dispatch(updateProductCur([data]))




    }
    return (

        <button onClick={handleUpdateCart} style={style} className="buybut-control" >{title}
            <FontAwesomeIcon className="buybut-control-icon"
                icon={faBagShopping}
                style={{ color: "#000", marginLeft: 10 }} /></button>
    )
}