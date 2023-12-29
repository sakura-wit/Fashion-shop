import React from "react";
import { SlideShowSin } from "../components/common/SlideShowSin";
import { SlideShowMul } from "../components/common/SlideShowMul";
import { ItemProduct } from "../components/common/ItemProduct";
import { News } from "../components/common/News";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/Slice/ProductSlice";

import * as ProductService from '../service/ProductService'
import { useEffect } from "react";


export function HomePage() {
    // function scrollToTop() {
    //     window.scrollTo({
    //         top: 0,
    //         // behavior: 'smooth', // Để có hiệu ứng cuộn mượt
    //     });
    // }
    const dataUser = useSelector((state) => state.user.dataUser)
    console.log('dataUser', dataUser);

    // const dataCart = useSelector((state) => state.product.productCurrent)
    // console.log('productCurrent', dataCart, typeof (dataCart))

    const dataProduct = useSelector((state) => state.product.dataProduct)
    const dispash = useDispatch()



    async function getData() {
        const res = await ProductService.getProductApi.getAllProduct()
        dispash(update(res.data))
        // return res.data

    }

    // var o1 = { dat: "name" }
    // var o2 = { bc: "name1" }
    // o1 = o2
    // console.log('o1111111111111', o1);

    useEffect(() => {
        // await dispash(update(getData))

        getData()
    }, [])

    // console.log('dataaaa', dataProduct);


    return (

        <div className="homepage-contain">
            <SlideShowSin />
            <div className="ho-newproduct-contain">
                <h1>Sản phẩm mới</h1>

                <SlideShowMul />

            </div>

            <div className="ho-in-wrapcomponent">



                {/* <div className="ho-boxfilter">
                    <BoxFilter />
                </div> */}

                <div className="ho-itemcontain">


                    {
                        dataProduct?.map((val) => {
                            // console.log(val);
                            return (

                                <ItemProduct data={val} key={val.name} image={val.image} title={val.name} />
                            )
                        })
                    }

                </div>

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
