import React from "react";
import { SlideShowSin } from "../components/common/SlideShowSin";
import { SlideShowMul } from "../components/common/SlideShowMul";
import { ItemProduct } from "../components/common/ItemProduct";
import { News } from "../components/common/News";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/Slice/ProductSlice";

import * as ProductService from '../service/ProductService'
import * as UserService from '../service/UserService'
import { useEffect } from "react";
import { Pagination } from "antd";


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
        return res.data

    }

    async function getDataPanigation(page) {

        const res = await ProductService.getProductApi.getDataPanigation(page)
        dispash(update(res.data))
    }



    // const data1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNjU4ZmM1ZjdhNGQxMDg4NzQyYTRmNjkyIiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcwNDE4MjYzMCwiZXhwIjoxNzM1NzE4NjMwfQ.DK56j8Z3CeZwe14qXlmz2JPbeL_mjLShwyzOjTnZxo4'

    // async function refresh(data1) {
    //     const data = await UserService.getUserApi.refreshToken(data1)
    //     console.log('refreshtokennnn', data.access_token);
    // }

    // var o1 = { dat: "name" }
    // var o2 = { bc: "name1" }
    // o1 = o2
    // console.log('o1111111111111', o1);

    useEffect(() => {
        // await dispash(update(getData))
        // refresh(data1)
        getData()
    }, [])

    // console.log('dataaaa', dataProduct);


    return (

        <div className="homepage-contain">
            <SlideShowSin />
            <div className="ho-newproduct-contain">
                <h1>Sản phẩm mới</h1>

                <SlideShowMul dataProduct={dataProduct} />

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

                <SlideShowMul dataProduct={dataProduct} />

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
