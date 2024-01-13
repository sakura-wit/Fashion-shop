import React, { useState } from 'react';
import { DeleteOutlined, PlusOutlined, QuestionCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Popconfirm, Row, Select, Space, message } from 'antd';
import { useForm } from 'react-hook-form';
import * as UserSerVice from '../../../service/UserService'
import { useDispatch } from 'react-redux';
import { userAction } from '../../../redux/Slice/UserSlice';



export function DrawerUser(props) {
    const access_token = localStorage.getItem('access_token')
    const { userSelected, listUser } = props
    let newListUser = listUser


    const dispash = useDispatch()

    const handleDeleteUser = async (data) => {
        const res = await UserSerVice.getUserApi.deleteUser(userSelected._id, access_token)
        if (res.message === 'detete SUCCESS') {
            message.info('Xóa người dùng thành công')
            onClose();

            const check = newListUser.some((item) => item._id === userSelected._id)
            if (check) {
                const newList = newListUser.filter((item) => item._id !== userSelected._id)
                newListUser = [...newList]
                dispash(userAction.updateDataAllUser([...newList]))

            }

        }



    }

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        form.resetFields()
    };

    const [form] = Form.useForm()
    return (
        <>
            <Button onClick={showDrawer} icon={<UnorderedListOutlined />}>
            </Button>
            <Drawer
                title="Thông tin chi tiết"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
            // extra={
            //     <Space>
            //         <Button onClick={onClose}>Cancel</Button>
            //         <Button onClick={onClose} type="primary">
            //             Submit
            //         </Button>
            //     </Space>
            // }
            >

                <Form
                    form={form}
                    // onFinish={ }
                    name="wrap"
                    labelCol={{
                        flex: '150px',
                    }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{
                        flex: 1,
                    }}
                    colon={false}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item
                        labelAlign='center'
                    >
                        <img style={{ height: 200, width: 200, objectFit: "contain", margin: "auto" }} src={userSelected?.avatar} />
                    </Form.Item>


                    <Form.Item
                        initialValue={userSelected?.name}
                        label="Tên"
                        name="name"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input readOnly={true} />
                    </Form.Item>

                    <Form.Item
                        initialValue={userSelected?.email}
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input readOnly={true} />
                    </Form.Item>

                    <Form.Item
                        initialValue={userSelected?.age}
                        label="Tuổi"
                        name="age"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input readOnly={true} />
                    </Form.Item>

                    <Form.Item
                        initialValue={userSelected?.address}
                        label="Địa chỉ"
                        name="address"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input readOnly={true} />
                    </Form.Item>

                    <Form.Item
                        initialValue={userSelected?.phone}
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input readOnly={true} />
                    </Form.Item>

                    <Form.Item label=" ">
                        <Popconfirm
                            onConfirm={handleDeleteUser}
                            title="Xóa"
                            description="Bạn có chắc chắn muốn xóa người dùng này không ?"
                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        >
                            <Button type="primary" htmlType="submit">
                                Xóa
                            </Button>
                        </Popconfirm>
                    </Form.Item>
                </Form>


            </Drawer>
        </>
    );
}