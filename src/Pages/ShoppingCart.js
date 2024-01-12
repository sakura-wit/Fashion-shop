import React, { useEffect } from "react";
import { ProducCart } from "../components/ShoppingCart/ProductCart";
import { AddCartButton, BuyButton } from "../components/common/AddCartButton";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../components/common/useScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { set } from "react-hook-form";
import { deleteProductCur, setCheckpay, setProductCheckout, updateProductCur } from "../redux/Slice/ProductSlice";
import * as UserService from '../service/UserService'
import { Button, InputNumber, Table, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { orderAction } from "../redux/Slice/OrderSlice";

let keyProduct

export function ShoppingCart() {

    const dataProductCart = useSelector((state) => state.product.productCurrent)
    const userCart = useSelector((state) => state.user.dataUser)
    const idUser = useSelector((state) => state.user.dataUser)


    //LIST DATA FOR TABLE
    const [listCart, setListCart] = useState(dataProductCart)



    const [productSelected, setProductSelected] = useState()
    // let productSelected

    const [amount, setAmount] = useState([])
    const [amountArr, setAmountArr] = useState([])






    const dispash = useDispatch()

    async function updateCart(data, id) {
        await UserService.getUserApi.updateUser(data, id)
    }

    //DELETE PRODUCT IN LISTCART
    const handleSetListCart = (data) => {
        const check = listCart.some((item) => item._id === data._id)
        if (check) {
            const newList = listCart.filter((item) => item._id !== data._id)
            setListCart(newList)
            dispash(deleteProductCur([...newList]))
            console.log('valueee', newList);
            const res = updateCart({ cart: newList }, idUser)

            // if (res?.message === 'update product SUCCESS') {
            //     console.log('Xóa sản phẩm thành công')

            // }
        }

    }

    // const changeCheckPay = () => {
    //     dispash(setProductCheckout(listCart))
    //     dispash(setCheckpay("multiPay"))
    // }


    // XỬ LÝ CHO LISTTABLE
    const renderImage = (data) => {
        return (
            <img style={{ width: 100, height: 100, objectFit: "contain" }} src={data} />
        )
    }

    useEffect(() => {
        console.log('changeAmountttt', amountArr);
    }, [amountArr])



    // const renderAmount = () => {
    //     return (
    //         <InputNumber
    //             defaultValue={1}
    //             max={10}
    //             min={1}
    //             onChange={changeAmount}
    //         />
    //     )
    // }

    const handleInputChange = (value, record) => {
        // Log giá trị của hàng khi InputNumber thay đổi
        console.log('Changed Amount:', value);
        // console.log('Row Data:', record);
        const newAmoutArr = [...amountArr]
        newAmoutArr[record.key] = value
        setAmountArr(newAmoutArr)
    };

    const renderAction = () => {

        return (
            <div>
                <Button icon={<DeleteOutlined />} />
            </div>
        )
    }

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'image',
            render: renderImage
        },
        {
            title: 'Tên',
            dataIndex: 'name',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            // render: renderAmount,
            render: (_, record, index) => (
                <InputNumber
                    defaultValue={1}
                    max={10}
                    min={1}
                    onChange={(value) => handleInputChange(value, record)}
                />
            ),
            // onCell: (record) => ({
            //     onClick: () => {
            //         keyProduct = record?.key
            //         console.log('Record of colum 2 ', keyProduct);
            //     }
            // })
        },
        {
            title: 'Active',
            dataIndex: 'action',
            render: renderAction,
            onCell: (record) => ({
                onClick: () => {
                    // `record` chứa giá trị của hàng được click
                    console.log('Clicked Column 3:', record);
                    handleSetListCart(record)
                },
            }),
        },
    ];


    const handleDetailProduct = (data) => {
        setProductSelected(data)

    }

    //TEST SELECTROW
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.index > 0;

    //TẠO KEY ĐỂ CHỌN CÁC PRODUCT THANH TOÁN
    const listWithKeys = listCart.map((item, index) => {
        return {
            ...item,
            key: index // Tạo key dựa trên index (có thể sử dụng một giá trị khác nếu cần)
        };

    });


    //LIST ORDER PRODUCT
    const [listOrder, setListOrder] = useState([])

    useEffect(() => {
        console.log('listOrder', listOrder, typeof (listOrder));

    }, [listOrder])

    const handlePayment = () => {
        console.log('listWithKeys', listWithKeys.length);
        const newArr = []

        // console.log('amountArr[i]', amountArr);

        for (var i = 0; i < listWithKeys.length; i++) {


            const newOrder = {
                name: listWithKeys[i].name,
                amount: amountArr[i] ? amountArr[i] : 1,
                image: listWithKeys[i].image,
                price: listWithKeys[i].price,
                discount: listWithKeys[i].discount ? listWithKeys[i].discount : 0,
                product: listWithKeys[i]._id
            }
            newArr.push(newOrder);
            console.log('newwwARRAY', newArr);
        }
        dispash(orderAction.updateOrderItem(newArr))
        setListOrder([...newArr]);

    }

    return (

        <div className="shoppingcart-contain">

            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Link to='/checkout' style={{ cursor: "pointer", color: "black" }}>
                    <Button onClick={handlePayment} style={{ marginLeft: 70 }} >
                        Thanh Toán
                    </Button>
                </Link>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>

            <Table rowSelection={rowSelection} style={{ width: "1200px", margin: "auto" }} columns={columns} dataSource={listWithKeys}

                onRow={(record, index) => {
                    return {
                        onClick: (event) => {
                            handleDetailProduct(record)
                        }
                    }

                }}

            />


        </div>
    )

}