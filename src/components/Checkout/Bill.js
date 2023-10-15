import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import React from "react";
import { ListGroupItem } from "../common/ListGroupItem";
import { ListGroup } from "../common/ListGroup";
import { useState } from "react";

export function Bill() {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (

        <div style={{ fontSize: "90%" }} className="ch-bill-contain">
            <MDBListGroup light>
                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0,
                    fontWeight: 500,
                    borderBottom: "3px solid ",
                }} >
                    <p>SẢN PHẨM</p>
                    <p>TẠM TÍNH</p>
                </MDBListGroupItem>

                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0
                }} >
                    <p>New shirt blue </p>
                    <p style={{ fontWeight: "bold" }}> 111111đ </p>
                </MDBListGroupItem>
                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0
                }} >
                    <p> Air Fort 1</p>
                    <p style={{ fontWeight: "bold" }} >22222</p>
                </MDBListGroupItem>
                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0
                }}>
                    <p> Jogger 2023 For Men </p>
                    <p style={{ fontWeight: "bold" }} >250.000đ</p>
                </MDBListGroupItem>
                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0
                }}>
                    <p> Hoodie Pink 2022 </p>
                    <p style={{ fontWeight: "bold" }} >120.000đ</p>
                </MDBListGroupItem>
                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0
                }}>
                    <p> Jeans For Girl </p>
                    <p style={{ fontWeight: "bold" }} >350.000đ</p>
                </MDBListGroupItem>
                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0
                }}>
                    <p> Baggy Bad Guy</p>
                    <p style={{ fontWeight: "bold" }} > 450.000đ </p>
                </MDBListGroupItem>

                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0,
                    fontWeight: 500
                }}>
                    <p>Tạm tính</p>
                    <p style={{ fontWeight: "bold" }} >123456789</p>
                </MDBListGroupItem>

                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0
                }}>
                    <p>Giao hàng</p>
                    <p>đồng giá 20000đ</p>
                </MDBListGroupItem>

                <MDBListGroupItem style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 0,
                    fontWeight: 500
                }}>
                    <p>Tổng</p>
                    <p>123456789</p>
                </MDBListGroupItem>

                <MDBListGroupItem style={{

                    justifyContent: "space-between",
                    paddingBottom: 0,
                    fontWeight: 500,
                    fontSize: "medium"

                }}>
                    <div className="form-check"
                        style={{
                            borderBottom: "2px solid #f5f5f5",
                            paddingBottom: 10,
                            fontSize: "90%"
                        }}
                    >
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <input className="form-check-input" type="radio"
                                name="flexRadioDefault" id="flexRadioDefault1"
                                value="option1"
                                checked={selectedOption === "option1"}
                                onChange={handleChange}
                            />

                            Chuyển khoản ngân hàng
                        </label>

                        {/* Discription for payment method */}
                        <div className={`description ${selectedOption === "option1" ? 'show' : ''}`}>
                            This is the description for Option 1.
                        </div>

                    </div>

                    <div className="form-check"
                        style={{
                            borderBottom: "2px solid #f5f5f5",
                            paddingBottom: 10,
                            fontSize: "90%"
                        }}>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            <input
                                className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="option2"
                                checked={selectedOption === "option2"}
                                onChange={handleChange}

                            />

                            Trả tiền mặt khi nhận hàng
                        </label>

                        {/* Discription for payment method */}
                        <div className={`description ${selectedOption === "option2" ? 'show' : ''}`}>
                            This is the description for Option 2.
                        </div>

                    </div>
                    <div className="form-check"
                        style={{
                            borderBottom: "2px solid #f5f5f5",
                            paddingBottom: 10,
                            fontSize: "90%"
                        }}>
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            <input
                                className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault3"
                                value="option3"
                                checked={selectedOption === "option3"}
                                onChange={handleChange}
                            />

                            Trả tiền mặt khi nhận hàng
                        </label>

                        {/* Discription for payment method  */}
                        <div className={`description ${selectedOption === "option3" ? 'show' : ''}`}>
                            This is the description for Option 3.
                        </div>

                    </div>
                </MDBListGroupItem>


            </MDBListGroup>


        </div >
    )
}