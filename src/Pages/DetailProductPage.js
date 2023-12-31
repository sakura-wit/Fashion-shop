import React from "react";
import { SelectProduct } from "../components/Detail/SelectProduct";
import { DetailProduct } from "../components/Detail/DetailProduct";
import { Feedback } from "../components/Detail/Feedback";
import { useScrollToTop } from "../components/common/useScrollToTop";

export function DetailProductPage() {
    return (

        <div className="detailpage-contain">
            <SelectProduct />
            <DetailProduct />
            <Feedback />
        </div>
    )
}