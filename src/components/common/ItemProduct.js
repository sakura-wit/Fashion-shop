import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BuyButton } from "./BuyButton";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { ScrollToTop } from "./useScrollToTop";



export function ItemProduct() {

    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {

        setIsClick(true);
    };

    const handleMouseLeave = () => {
        setIsClick(false);

    };

    // function ProductInfor() {
    //     return (
    //         <div className={`your-component ${isClick ? 'show' : ''}`}
    //          style={{ backgroundColor: "aqua", marginTop: "-150%", zIndex: 9999 }
    //         }>
    //             Nguyễn Văn Đạt
    //         </div >
    //     )
    // }


    return (
        <div
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            style={{ zIndex: 2 }}
            className='item-control' >
            <div style={{ zIndex: 2 }} className=" itemfavour-control ">
                <img style={{ zIndex: -2 }} src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/382628914_1364892494099796_5679409985926550937_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Lg_T6h9iJBAAX9ItHWv&_nc_ht=scontent.fsgn3-1.fna&oh=03_AdSoIA6Hbh4AHL-YPeNK6lNe7eHxgMcZDEWY_bNwhpeeLw&oe=653DF495" />
                <FontAwesomeIcon style={{ zIndex: -1 }} icon={faHeart} />
            </div>

            <img style={{ zIndex: -1 }}

                src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />

            <Link to="/detail" onClick={ScrollToTop}>
                <BuyButton
                    title='Đặt hàng'
                    style={{
                        width: "160px",
                        height: 40,
                        marginLeft: 60,
                        borderRadius: "0.4rem"
                    }} />
            </Link>

            <p>TITLE</p>

            <div className={`de-prevew-container ${isClick ? 'show' : ''}`}>
                <h6>TITLE</h6>
                <div style={{ display: "flex" }}>
                    <img style={{ width: 80, height: 80 }} src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
                    <div>
                        <Rating />
                        <h6>chất liệu: </h6>
                        <h6>Giá: </h6>
                    </div>

                </div>

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
