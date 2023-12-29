import React from "react";

export function ItemProductAd(props) {

    const { image, title, data } = props

    return (
        <div style={{ display: "flex", border: "solid 1px", marginBottom: "5px" }}>

            <img style={{ height: 80, width: 80, objectFit: "contain" }} src={image}></img>

            <div>
                <p>{title}</p>
                <p>Mã sp</p>
            </div>

        </div>
    )
}