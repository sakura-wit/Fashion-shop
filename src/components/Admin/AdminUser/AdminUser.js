import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { ListTable } from "../common/ListTable";
import * as UserService from "../../../service/UserService"
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/Slice/UserSlice";
import { DrawerUser } from "./DrawerUser";

export function AdminUser() {
    window.scrollTo({
        top: 0
    })

    const dispash = useDispatch()
    const dataAllUser = useSelector((state) => state.user.dataAllUser)
    const access_token = localStorage.getItem('access_token')
    // let dataAllUser = undefined

    const getAllUser = async (data) => {
        const res = await UserService.getUserApi.getAllUser(data)
        dispash(userAction.updateDataAllUser(res.data))
        return res.data
    }
    useEffect(() => {
        getAllUser(access_token)
    }, [])

    return (
        <div style={{ marginLeft: 20, }}>
            <div style={{ display: "flex" }}>
                <h6>Quản lý người dùng</h6>
                {/* <Button
                    // onClick={handleGetAll}
                    style={{ margin: 10, marginTop: -5 }}>Xem tất cả</Button> */}
            </div>
            {/* <Button style={{ width: 150, height: 150 }} >
                <PlusOutlined style={{ fontSize: 50 }} />
            </Button> */}

            {/* List User */}
            <ListTable />


        </div>

    )
}