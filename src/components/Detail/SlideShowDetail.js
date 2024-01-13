import React from "react";
import Slider from "react-slick";

export function SlideShowDetails(props) {

    const { image } = props
    const settings = {
        customPaging: function (i) {
            return (
                <img style={{ cursor: "pointer", width: 100, height: 100 }} src={`${image[i]}`} />
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

                    {image?.map((val, key) => {
                        return (
                            <div style={{ backgroundColor: "black", height: 600, width: 600 }}>
                                <img key={key} style={{ cursor: "pointer", margin: "auto", width: 500, height: 500 }} src={val} />
                            </div>

                        )
                    })}

                </Slider>
            </div>
        </div>
    );
}
