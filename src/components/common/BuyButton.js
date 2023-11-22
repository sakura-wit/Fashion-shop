import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { setDetaislProduct } from "../../redux/Slice/ProductSlice";

export function BuyButton(props) {
    const dispash = useDispatch()

    const { style, title, data } = props

    const handleDetailProduct = () => {
        dispash(setDetaislProduct(data))
    }

    return (
        <div>
            <button onClick={handleDetailProduct} style={style} className="buybut-control" >{title}
                <FontAwesomeIcon className="buybut-control-icon"
                    icon={faBagShopping}
                    style={{ color: "#000", marginLeft: 10 }} /></button>
        </div>
    )
}