import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ItemProduct } from "./ItemProduct";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetaislProduct } from "../../redux/Slice/ProductSlice";

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

    const { dataProduct } = props

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
                dataProduct?.map((val) => {
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

            {/* <div style={{ background: "#fff", marginLeft: 10 }}>
                <img src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_e26282b367f4b3aaeae5.jpg" />
            </div> */}
            {/* <div>
                    <img src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/343568893_952000432654326_7914730856250120757_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=ajQh0wV00DwAX8XNwjr&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDd1S3sDgK-QzYz54lvFTm6NQHp_EAzv2uUW5FTqsNMTg&oe=64EAF580" />
                </div> */}
            {/* <div>
                <img src="	https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_d9105fb7a15f74012d4e26.jpg" />
            </div>
            <div>
                <img src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_8c81a5275bcf8e91d7de27.jpg" />
            </div>
            <div>
                <img src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_d9105fb7a15f74012d4e26.jpg" />
            </div>
            <div>
                <img src="	https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_2cab553058d68d88d4c73.jpg" />
            </div>
            <div>
                <img src="	https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_22935a0857ee82b0dbff1.jpg" />
            </div>
            <div>
                <img src="	https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
            </div>
            <div>
                <img src="	https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
            </div> */}
        </Slider>

    )
}

export { SlideShowMul, Arrow }