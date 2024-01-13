import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import React from "react";
import { ListGroupItem } from "../common/ListGroupItem";
import { ListGroup } from "../common/ListGroup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderAction } from "../../redux/Slice/OrderSlice";

export function Bill(props) {

    const { dataCheckout } = props

    const [selectedOption, setSelectedOption] = useState(null);

    const dispatch = useDispatch()

    var totalPrice = 0;

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        dispatch(orderAction.updatePaymentMethod(event.target.value))
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

                {
                    dataCheckout?.map((val, key) => {
                        val.amount ? totalPrice += val.price * val.amount : totalPrice += val.price
                        return (
                            <MDBListGroupItem key={key} style={{
                                display: "flex",
                                justifyContent: "space-between",
                                paddingBottom: 0
                            }} >
                                <p> {val.name} x ( {val.amount ? val.amount : 1} ) </p>
                                <p style={{ fontWeight: "bold" }}> {val.amount ? val.price * val.amount : val.price}đ </p>
                            </MDBListGroupItem>
                        )
                    })
                }

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
                    paddingBottom: 0,
                    fontWeight: 500
                }}>
                    <p>Tạm tính</p>
                    <p style={{ fontWeight: "bold" }} >{totalPrice}</p>
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
                    <p>{totalPrice + 20000}đ</p>
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
                                value="Banking"
                                checked={selectedOption === "Banking"}
                                onChange={handleChange}
                            />

                            Chuyển khoản ngân hàng
                        </label>

                        {/* Discription for payment method */}
                        <div className={`description ${selectedOption === "Banking" ? 'show' : ''}`}>
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
                                value="COD"
                                checked={selectedOption === "COD"}
                                onChange={handleChange}

                            />

                            Trả tiền mặt khi nhận hàng
                        </label>

                        {/* Discription for payment method */}
                        <div className={`description ${selectedOption === "COD" ? 'show' : ''}`}>
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
                                value="Paypall"
                                checked={selectedOption === "Paypall"}
                                onChange={handleChange}
                            />

                            Trả tiền mặt khi nhận hàng
                        </label>

                        {/* Discription for payment method  */}
                        <div className={`description ${selectedOption === "Paypall" ? 'show' : ''}`}>
                            This is the description for Option 3.
                        </div>

                    </div>
                </MDBListGroupItem>


            </MDBListGroup>


        </div >
    )
}