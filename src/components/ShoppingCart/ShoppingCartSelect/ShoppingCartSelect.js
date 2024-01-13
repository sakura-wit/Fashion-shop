import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../../service/UserService'
import { deleteProductCur } from "../../../redux/Slice/ProductSlice";
import { Button, InputNumber, Select, Spin, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { orderAction } from "../../../redux/Slice/OrderSlice";
import { Link } from "react-router-dom";

export function ShoppingCartSelect() {

    ///// GIỎ HÀNG
    const [isLoading, setIsLoading] = useState(false)
    const dataProductCart = useSelector((state) => state.product.productCurrent)
    const userCart = useSelector((state) => state.user.dataUser)
    const idUser = useSelector((state) => state.user.dataUser)


    //LIST DATA FOR TABLE
    const [listCart, setListCart] = useState(dataProductCart)

    const [amountArr, setAmountArr] = useState([])

    const [selectArr, setSelectArr] = useState([])





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

            setIsLoading(true)
            const res = updateCart({ cart: newList }, idUser)
            setIsLoading(false)
        }

    }

    // XỬ LÝ CHO LISTTABLE
    const renderImage = (data) => {
        return (
            <img style={{ width: 100, height: 100, objectFit: "contain" }} src={data} />
        )
    }



    const handleInputChange = (value, record) => {
        // Log giá trị của hàng khi InputNumber thay đổi
        console.log('Changed Amount:', value);
        // console.log('Row Data:', record);
        const newAmoutArr = [...amountArr]
        newAmoutArr[record.key] = value
        setAmountArr(newAmoutArr)
    };

    const handleSelectChange = (value, record) => {
        // Log giá trị của hàng khi InputNumber thay đổi
        console.log('Changed select:', value);
        // console.log('Row Data:', record);
        const newSelectArr = [...selectArr]
        newSelectArr[record.key] = value
        console.log('newSelectArrnewSelectArr', newSelectArr);
        setSelectArr(newSelectArr)
    }

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
            title: 'Size',
            dataIndex: 'size',
            render: (_, record, index) => (
                <Select
                    placeholder="Select a person"
                    optionFilterProp="children"
                    defaultValue={'S'}
                    onChange={(value) => handleSelectChange(value, record)}
                    options={[
                        {
                            value: 'S',
                            label: 'S',
                        },
                        {
                            value: 'M',
                            label: 'M',
                        },
                        {
                            value: 'L',
                            label: 'L',
                        },
                        {
                            value: 'XL',
                            label: 'XL',
                        },
                        {
                            value: 'XXL',
                            label: 'XXL',
                        },
                    ]}
                />
            ),
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
        // setProductSelected(data)

    }

    //TEST SELECTROW
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
        if (selectedRowKeys.length === 0) {
            console.log('datttt');
        }
    }, [selectedRowKeys])

    const handlePayment = () => {
        console.log('listWithKeys', listWithKeys.length);
        const newArr = []

        // console.log('amountArr[i]', amountArr);

        if (selectedRowKeys.length !== 0) {
            for (var i = 0; i < selectedRowKeys.length; i++) {
                const newOrder = {
                    name: listWithKeys[selectedRowKeys[i]].name,
                    amount: amountArr[i] ? amountArr[i] : 1,
                    size: selectArr[i] ? selectArr : 'S',
                    image: listWithKeys[selectedRowKeys[i]].image,
                    price: listWithKeys[selectedRowKeys[i]].price,
                    discount: listWithKeys[selectedRowKeys[i]].discount ? listWithKeys[i].discount : 0,
                    product: listWithKeys[selectedRowKeys[i]]._id
                }
                newArr.push(newOrder)
            }
        } else {

            for (var i = 0; i < listWithKeys.length; i++) {

                const newOrder = {
                    name: listWithKeys[i].name,
                    amount: amountArr[i] ? amountArr[i] : 1,
                    size: selectArr[i] ? selectArr : 'S',
                    image: listWithKeys[i].image,
                    price: listWithKeys[i].price,
                    discount: listWithKeys[i].discount ? listWithKeys[i].discount : 0,
                    product: listWithKeys[i]._id
                }
                newArr.push(newOrder);
                console.log('newwwARRAY', newArr);
            }
        }
        dispash(orderAction.updateOrderItem(newArr))
        setListOrder([...newArr]);

    }

    return (

        <div className="shoppingcart-contain">
            {isLoading && <div className="loading">
                <Spin />
            </div>}
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