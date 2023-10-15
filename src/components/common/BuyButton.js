import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function BuyButton(props) {

    const { style, title } = props

    return (

        <button style={style} className="buybut-control" >{title}
            <FontAwesomeIcon className="buybut-control-icon"
                icon={faBagShopping}
                style={{ color: "#000", marginLeft: 10 }} /></button>
    )
}