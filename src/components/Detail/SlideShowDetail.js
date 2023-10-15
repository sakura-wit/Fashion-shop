import React from "react";
import Slider from "react-slick";

export function SlideShowDetails(props) {
    const dot = [
        "https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg",
        "https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg",
        "https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg",
        "https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg",
    ];

    const settings = {
        customPaging: function (i) {
            return (
                <img width style={{ width: 100, height: 100 }} src={`${dot[i]}`} />
            );
        },
        dots: true,
        dotsClass: " test-dot  ",
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div style={{ margin: "auto", marginBottom: 40, marginTop: 0, marginRight: 40, width: 500 }} >
            <div >
                <h2></h2>
                <Slider {...settings}>
                    <div style={{ backgroundColor: "black", height: 600, width: 600 }}>
                        asdasd
                        <img style={{ margin: "auto", width: 500, height: 500 }} src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
                    </div>
                    <div>
                        sadasd
                        <img style={{ margin: "auto", width: 500, height: 500 }} src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
                    </div>
                    <div>
                        asdasdas
                        <img style={{ margin: "auto", width: 500, height: 500 }} src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
                    </div>
                    <div>
                        asdadasdas
                        <img style={{ margin: "auto", width: 500, height: 500 }} src="https://oldsailor.com.vn/vnt_upload/product/09_2023/thumbs/550_crop_004479e2870a52540b1b25.jpg" />
                    </div>
                </Slider>
            </div>
        </div>

        // <div style={{ width: 560, height: 800, border: "1px solid black", margin: "auto", marginLeft: 130 }}>
        //     <img style={{ objectFit: "cover", marginTop: 50 }} src="	https://oldsailor.com.vn/vnt_upload/product/10_2023/thumbs/550_crop_4a37d5194cdf9881c1ce46.jpg" />
        // </div>
    );
}
