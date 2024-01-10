import React, { useState } from "react";
import { DrawerUser } from "../AdminUser/DrawerUser";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { DrawerProduct } from "./DrawerProduct";

export function ListTableProduct() {

    const dataAllProduct = useSelector((state) => state.product.dataProduct)
    const [productSelected, setProductSelected] = useState()
    let listProduct = dataAllProduct


    const renderAction = () => {

        return (
            <div>
                <DrawerProduct productSelected={productSelected} listProduct={dataAllProduct} />
            </div>
        )
    }

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
        },
        {
            title: 'Mã sản phẩm',
            dataIndex: 'hash',
        },
        {
            title: 'Kiểu',
            dataIndex: 'type',
        },
        {
            title: 'Active',
            dataIndex: 'action',
            render: renderAction
        },
    ];

    const handleDetailProduct = (data) => {
        console.log('dataProductdataProduct', data);
        setProductSelected(data)
    }



    return (
        <div style={{ marginTop: 50 }} >
            <Table style={{ width: "1000px" }} columns={columns} dataSource={listProduct}

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