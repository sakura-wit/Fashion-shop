import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ItemProduct } from "./ItemProduct";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSlice, setDataProductNew, setDetaislProduct } from "../../redux/Slice/ProductSlice";
import * as ProductService from '../../service/ProductService'

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", background: "gray"
            }}
            onClick={onClick}
        />
    );
}

function SlideShowMul(props) {

    const { type, data } = props
    const dataProductNew = useSelector((state) => state.product.dataProductNew)

    const [dataList, setDataList] = useState()

    async function getDataList() {
        const res = await ProductService.getProductApi.getProductFilterAll(type, data)
        dispash(setDataProductNew(res.data))
    }

    useEffect(() => {
        getDataList()
    }, [])

    var settings = {
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerPadding: "60px",
        // variableWidth: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                },

            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            },
        ]

    };

    const style = {
        marginTop: -100
    }

    const dispash = useDispatch()


    return (

        <Slider className="slideshowmul-container"  {...settings}>
            {

                dataProductNew?.map((val) => {
                    // return <ItemProduct style={style} data={val} key={val.name} image={val.image} title={val.name} />
                    return <Link to='/detail'>
                        <img onClick={() => {
                            dispash(setDetaislProduct(val))
                            const jsonString = JSON.stringify(val);
                            localStorage.setItem('dataDetailProduct', jsonString)
                        }} src={val.image} />
                    </Link>

                })
            }


        </Slider>

    )
}

export { SlideShowMul, Arrow }