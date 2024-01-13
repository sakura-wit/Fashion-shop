import React, { useEffect } from "react";
import { useState } from "react";
import { Button, InputNumber, Menu, Table, message } from "antd";
import { AppstoreOutlined, DeleteOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { ShoppingCartSelect } from "../components/ShoppingCart/ShoppingCartSelect/ShoppingCartSelect";
import { Header } from "../Layouts/Header";
import { ShoppingCardPend } from "../components/ShoppingCart/ShoppingCardPend/ShoppingCardPend";
import { ShoppingCardDone } from "../components/ShoppingCart/ShoppingCardDone/ShoppingCartDone";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export function ShoppingCart() {

    const items = [
        getItem('Giỏ hàng', 'cart', <UserOutlined />,

        ),
        getItem('Đang chờ', 'cartpending', <AppstoreOutlined />,

        ),
        getItem('Đang giao', 'cartdone', <SettingOutlined />),
    ];

    const renderPage = (key) => {
        switch (key) {
            case 'cart':
                return (
                    <ShoppingCartSelect />
                )
            case 'cartpending':
                return (
                    <ShoppingCardPend />
                )

            case 'cartdone':
                return (
                    <ShoppingCardDone />
                )

            default:
                return <></>
        }
    }

    const [valueOption, setValueOption] = useState("rỗng")
    const getValueOption = (data) => {
        setValueOption(data.key)
        console.log('dataaaValueOption', data.key);
    }
    return (

        <div style={{ marginTop: 160 }}>
            <Header hiddenOption={false} hiddenCart={false} hiddenSearch={false}></Header>
            <div style={{ display: "flex" }}>
                <Menu
                    onClick={getValueOption}
                    mode="inline"
                    style={{
                        width: 256,
                        height: "100vh",
                        boxShadow: "1px 1px 2px #ccc"
                    }}
                    items={items}
                />
                <div style={{ padding: 15 }}>
                    {renderPage(valueOption)}
                </div>

            </div>
        </div>
    );

}