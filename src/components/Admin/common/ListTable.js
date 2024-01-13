import React, { useEffect, useState } from 'react';
import { Button, Drawer, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { DrawerUser } from '../AdminUser/DrawerUser';
import * as UserService from '../../../service/UserService'
import { userAction } from '../../../redux/Slice/UserSlice';


export function ListTable() {

    const dataAllUser = useSelector((state) => state.user.dataAllUser)
    const [userSelected, setUserSelected] = useState()
    let listUser = dataAllUser

    const handleDeleteUser = async (data) => {
        setUserSelected(data)
    }


    const renderAction = () => {

        return (
            <div>
                <DrawerUser userSelected={userSelected} listUser={listUser} />
            </div>
        )
    }

    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Active',
            dataIndex: 'action',
            render: renderAction
        },
    ];


    return (
        <div style={{ marginTop: 50 }} >
            <Table style={{ width: "1000px" }} columns={columns} dataSource={dataAllUser}

                onRow={(record, index) => {
                    return {
                        onClick: (event) => {
                            handleDeleteUser(record)
                        }
                    }

                }}

            />
        </div>
    );
}