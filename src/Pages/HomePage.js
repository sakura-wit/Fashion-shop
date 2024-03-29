import React, { useState } from "react";
import { SlideShowSin } from "../components/common/SlideShowSin";
import { SlideShowMul } from "../components/common/SlideShowMul";
import { ItemProduct } from "../components/common/ItemProduct";
import { News } from "../components/common/News";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/Slice/ProductSlice";

import * as ProductService from '../service/ProductService'
import * as UserService from '../service/UserService'
import { useEffect } from "react";
import { Pagination, Spin } from "antd";


export function HomePage() {
    window.scrollTo({
        top: 0,
        // behavior: 'smooth', // Để có hiệu ứng cuộn mượt
    });
    const [isLoading, setIsLoading] = useState(false)
    const dataUser = useSelector((state) => state.user.dataUser)
    console.log('dataUser', dataUser);

    // const dataCart = useSelector((state) => state.product.productCurrent)
    // console.log('productCurrent', dataCart, typeof (dataCart))

    const dataProduct = useSelector((state) => state.product.dataProduct)
    const dispash = useDispatch()



    async function getData() {
        const res = await ProductService.getProductApi.getAllProduct()
        dispash(update(res.data))
        return res.data

    }

    async function getDataPanigation(page) {
        setIsLoading(true)
        const res = await ProductService.getProductApi.getDataPanigation(page, '')
        if (res.data) {
            dispash(update(res.data))
        }
        setIsLoading(false)
    }


    useEffect(() => {

        getDataPanigation(1)
    }, [])

    // console.log('dataaaa', dataProduct);


    return (

        <div className="homepage-contain">
            {isLoading && <div className="loading">
                <Spin />
            </div>}
            <SlideShowSin />
            <div className="ho-newproduct-contain">
                <h1>Sản phẩm mới</h1>

                <SlideShowMul type='note' data='new' />

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

                <SlideShowMul type='note' data='selling' />

            </div>

            <div style={{ width: 300, margin: "auto" }}>

                <Pagination onChange={(data) => {
                    getDataPanigation(data)
                    window.scrollTo({
                        top: 0
                    })
                }} style={{ margin: "auto" }} defaultCurrent={1} total={50} />;

            </div>
        </div >

    )
}
