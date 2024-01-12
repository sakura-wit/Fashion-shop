import React from "react";
import { useSelector } from "react-redux";

export function DetailProduct() {

    const dataDetailProduct = useSelector((state) => state.product.productDetail)

    return (

        <div className="de-detailproduct-contain">
            <h2>CHI TIẾT SẢN PHẨM</h2>

            <div style={{ display: "flex", margin: "auto" }}>
                {
                    dataDetailProduct.imageDetail?.map((val, key) => {
                        return (
                            <img key={key} src={val} />
                        )
                    })
                }
                {/* <img src="https://oldsailor.com.vn/vnt_upload/product/04_2023/d6479940d97a05245c6b1_1.jpg" />
                <img src="https://oldsailor.com.vn/vnt_upload/product/08_2023/46de42b6a76775392c767.jpg" /> */}

            </div>

            <div className="de-decript-contain">
                <p>CHI TIẾT:</p>

                <p>- Chất vải mang tới sự mềm mại, thấm hút mồ hôi tốt</p>

                <p>- Form quần mang lại trải nghiệm không quá bó sát hay thùng thình mà ôm gọn vào cơ thể người mặc</p>

                <p>- Quần tây là một trong những lựa chọn phù hợp trong mọi hoàn cảnh (như đi làm, đi chơi, đi tiệc,...) nhưng vẫn trang trọng và lịch lãm.</p>

                <p>Size 30 - 40.</p>

                <p>Form Basic</p>

                <p>Màu: Đen</p>

                <p>Mã sản phẩm: QTDE11087</p>
            </div>
        </div>
    )
}