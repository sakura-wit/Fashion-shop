import { Button, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as OrderService from '../../../service/OrderService'
import { useDispatch, useSelector } from "react-redux";
import { DrawerOrder } from "../../Admin/AdminOrder/DrawerOrder";
import { DrawerPend } from "./DrawerPen";
import { orderAction } from "../../../redux/Slice/OrderSlice";

export function ShoppingCardPend() {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.dataUser)

    const orderPending = useSelector((state) => state.order.userOrderPend)
    // const [orderPending, setOrderPending] = useState()
    let listOrder = orderPending.filter((item) => item.confirm === 'Pending')

    async function getOrderPend() {
        setIsLoading(true)
        const res = await OrderService.processOrderApi.getOrderPendingOfUser(user.email)
        dispatch(orderAction.updateUserOrderPend(res.data))
        setIsLoading(false)
    }

    useEffect(() => {
        getOrderPend()
    }, [])

    //TEST SELECTROW
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.index > 0;

    const renderAction = () => {

        return (
            <div>
                <DrawerOrder title='Hủy đơn' />
            </div>
        )
    }

    const columns = [
        {
            title: 'Tên tài khoản',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Mã đơn hàng',
            dataIndex: '_id',
            key: '_id'
        },
        {
            title: 'Thành phố',
            dataIndex: ['shippingAddress', 'city'],
            key: 'city'
        },
        {
            title: 'Giá trị đơn hàng',
            dataIndex: 'totalPrice',
            // render: renderAction
            key: 'totalPricec'
        },
        {
            title: 'Active',
            dataIndex: 'action',
            // key: 'action',
            render: (_, record, index) => (
                <DrawerPend listOrder={listOrder} orderSelected={record} title='Hủy đơn' />
            ),
        },
    ];

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
                {/* <Link to='/checkout' style={{ cursor: "pointer", color: "black" }}>
                    <Button style={{ marginLeft: 70 }} >
                        Thanh Toán
                    </Button>
                </Link> */}
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>

            <Table rowSelection={rowSelection} style={{ width: "1200px", margin: "auto" }}
                dataSource={listOrder}
                columns={columns}
                onRow={(record, index) => {
                    return {
                        onClick: (event) => {
                            // handleDetailProduct(record)
                        }
                    }

                }}

            />


        </div>
    )
}