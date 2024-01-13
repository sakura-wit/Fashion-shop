import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { ScrollToTop } from "./useScrollToTop";
import { useDispatch } from "react-redux";
import { updateProductCur } from "../../redux/Slice/ProductSlice";
import { BuyButton } from "./BuyButton";
import { AddCartButton } from "./AddCartButton";
import { Rate } from "antd";



export function ItemProduct(props) {

    const { image, title, data } = props

    const [isClick, setIsClick] = useState(false);



    const handleClick = () => {

        setIsClick(true);
    };

    const handleMouseLeave = () => {
        setIsClick(false);

    };



    return (
        <div
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            style={{ zIndex: 2 }}
            className='item-control' >
            <div style={{ zIndex: 2 }} className=" itemfavour-control ">
                <img style={{ zIndex: -2 }} />
                <FontAwesomeIcon style={{ zIndex: -1 }} icon={faHeart} />
            </div>

            <img style={{ zIndex: -1 }}
                src={image}

            />

            <div style={{ marginLeft: "80px" }}>
                <p>{title}</p>
                <Link to="/detail" onClick={ScrollToTop}>
                    <BuyButton
                        data={data}
                        title='Đặt hàng'
                        style={{
                            width: "120px",
                            height: 40,
                            borderRadius: "0.4rem"


                        }} />
                </Link >


            </div>


            <div className={`de-prevew-container ${isClick ? 'show' : ''}`}>
                <h6>TITLE</h6>
                <div style={{ display: "flex", }}>
                    <img style={{ width: 80, height: 80, objectFit: "cover", marginRight: 3 }} src={data.image} />
                    <div>
                        {/* <Rating /> */}
                        <Rate allowHalf defaultValue={data.rating} />
                        <h6>Loại:{data.type} </h6>
                        <h6>Giá: {data.price}</h6>
                    </div>

                </div>
                <AddCartButton
                    data={data}
                    title='Giỏ hàng'
                    style={{
                        width: "120px",
                        height: 40,

                        borderRadius: "0.4rem"


                    }} />

            </div>

        </div >
    )

    // const [isComponentVisible, setComponentVisible] = useState(false);

    // const handleClick = () => {
    //     setComponentVisible(true);
    // };

    // const handleLeave = () => {
    //     setComponentVisible(false)
    // }

    // return (
    //     <div>
    //         <button onClick={handleClick}
    //             onMouseLeave={handleLeave}>Click để hiển thị/ẩn component</button>
    //         <div className={`your-component ${isComponentVisible ? 'show' : ''}`}>
    //             <div>
    //                 Nguyen van dat
    //             </div>
    //         </div>
    //     </div>
    // );

}
