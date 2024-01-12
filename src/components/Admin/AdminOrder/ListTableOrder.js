import React, { useState } from "react";
import { DrawerUser } from "../AdminUser/DrawerUser";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { DrawerOrder } from "./DrawerOrder";

export function ListTableOrder(props) {

    const { title } = props
    const dataAllProduct = useSelector((state) => state.product.dataProduct)
    const [orderSelected, setOrderSelected] = useState()

    const dataAllOrder = useSelector((state) => state.order.dataOrderAdmin)
    console.log('dataAllOrder', dataAllOrder);

    //Đảo ngược list
    let listOrder = dataAllOrder.slice().reverse()



    const renderAction = () => {

        return (
            <div>
                <DrawerOrder title={title} orderSelected={orderSelected} listOrder={dataAllOrder} />
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
            render: renderAction
        },
    ];

    const handleDetailProduct = (data) => {
        console.log('dataProductdataProduct', data);
        setOrderSelected(data)
    }



    return (
        <div style={{ marginTop: 50 }} >
            <Table style={{ width: "1000px" }} columns={columns} dataSource={listOrder}

                onRow={(record, index) => {
                    return {
                        onClick: (event) => {
                            handleDetailProduct(record)
                        }
                    }

                }}

            />
        </div>
    );
}