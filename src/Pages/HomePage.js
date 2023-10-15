import React from "react";
import { SlideShowSin } from "../components/common/SlideShowSin";
import { SlideShowMul } from "../components/common/SlideShowMul";
import { ItemProduct } from "../components/common/ItemProduct";
import { News } from "../components/common/News";


export function HomePage() {
    // function scrollToTop() {
    //     window.scrollTo({
    //         top: 0,
    //         // behavior: 'smooth', // Để có hiệu ứng cuộn mượt
    //     });
    // }


    return (

        <div className="homepage-contain">
            <SlideShowSin />
            <div className="ho-newproduct-contain">
                <h1>Sản phẩm mới</h1>

                <SlideShowMul />

            </div>

            <div className="ho-itemcontain">
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />


            </div>

            <div className="ho-news-contain">
                <News />
                <News />
            </div>

            <div className="ho-newproduct-contain">
                <h1>Sản phẩm bán chạy</h1>

                <SlideShowMul />

            </div>

        </div >

    )
}
