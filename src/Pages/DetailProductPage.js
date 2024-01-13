import React, { useEffect } from "react";
import { SelectProduct } from "../components/Detail/SelectProduct";
import { DetailProduct } from "../components/Detail/DetailProduct";
import { Feedback } from "../components/Detail/Feedback";
import { useScrollToTop } from "../components/common/useScrollToTop";
import { initFacebookSDK } from "../utils";
import { useDispatch } from "react-redux";
import { setDetaislProduct } from "../redux/Slice/ProductSlice";

export function DetailProductPage() {
    window.scrollTo({
        top: 0
    })

    const dispatch = useDispatch()

    useEffect(() => {
        initFacebookSDK()

        let storageData = localStorage.getItem('dataDetailProduct')
        console.log('storageData', JSON.parse(storageData));
        if (JSON.parse(storageData)) {
            dispatch(setDetaislProduct(JSON.parse(storageData)))
        }
    }, [])



    return (

        <div className="detailpage-contain">
            <SelectProduct />
            <DetailProduct />
            <Feedback width="1000" dataHref="https://developers.facebook.com/docs/plugins/comments#configurator" />
        </div>
    )
}