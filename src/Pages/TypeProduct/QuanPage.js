import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ProductService from '../../service/ProductService'
import { update } from "../../redux/Slice/ProductSlice";
import { SlideShowSin } from "../../components/common/SlideShowSin";
import { Pagination, Spin } from "antd";
import { SlideShowMul } from "../../components/common/SlideShowMul";
import { ItemProduct } from "../../components/common/ItemProduct";
import { News } from "../../components/common/News";


export function QuanPage() {

    window.scrollTo({
        top: 0,
        // behavior: 'smooth', // Để có hiệu ứng cuộn mượt
    });
    const dataUser = useSelector((state) => state.user.dataUser)
    console.log('dataUser', dataUser);

    const dataProduct = useSelector((state) => state.product.dataProduct)
    const dispash = useDispatch()

    const [isLoading, setIsLoading] = useState(false)


    async function getDataAo() {
        // setIsLoading(true)
        const res = await ProductService.getProductApi.getProductFilterAll('name', 'Quần')
        if (res.data) {
            dispash(update(res.data))
        }
        // setIsLoading(false)
        return res.data

    }

    async function getDataPanigation(page) {
        setIsLoading(true)
        const res = await ProductService.getProductApi.getDataPanigation(page, 'Quần')
        if (res.data) {
            dispash(update(res.data))
        }
        setIsLoading(false)
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
