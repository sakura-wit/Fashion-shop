import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputSign } from "../components/Field/InputSign";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../service/UserService'
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import UserSlice, { userAction } from "../redux/Slice/UserSlice";
import { Button, Form, Input, Popconfirm, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../utils";
import styled from "@emotion/styled";
import { isLoading } from "../api/axios/request";
import avatarDefault from "../../src/avatadefault.png"


const WrapUploadFile = styled(Upload)`
    & .ant-upload-list-item-container{
        display:none
    }
`

export function InforUser() {

    // window.scrollTo({
    //     top: 0,
    // })

    const inforUser = useSelector((state) => state.user.dataUser)
    const [dataUpdate, setDataUpdate] = useState(inforUser)




    // console.log('dataUserrrInfor', inforUser);

    const dispash = useDispatch()

    const [form] = Form.useForm()

    const [avatar, setAvatar] = useState(inforUser.avatar ? inforUser.avatar : avatarDefault)

    const handleSelectFile = async ({ fileList }) => {
        const file = fileList[0]
        if (!file?.url && !file?.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setAvatar(file.preview)
    }

    const onSubmitUpdate = async (data) => {
        console.log('data.avatar', data);
        if (data.avatar && data.avatar.file)
            data.avatar = data.avatar.file.preview
        console.log('dataUpdateInforUser', data);

        const res = await UserService.getUserApi.updateUser(data, inforUser)

        setDataUpdate({
            ...dataUpdate,
            name: data.name,
            address: data.address,
            phone: data.phone,
            avatar: data.avatar ? data.avatar : avatar,
        })

        if (res?.message === 'SUCCESS') {
            message.info('Cập nhật thông tin thành công')
        }
    }

    useEffect(() => {
        if (dataUpdate)
            dispash(userAction.update(dataUpdate))
    }, [dataUpdate])



    useEffect(() => {
        // Cập nhật giá trị ban đầu cho form khi inforUser thay đổi
        form.setFieldsValue({
            name: inforUser?.name,
            email: inforUser?.email,
            phone: inforUser?.phone,
            address: inforUser?.address,
            avatar: inforUser?.avatar
        });
    }, [inforUser, form]);


    return (

        <div className="inforuser-contain">

            <Form
                form={form}
                onFinish={onSubmitUpdate}
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
                    margin: "auto",
                    maxWidth: 1000,
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",

                }}
            >

                <Form.Item
                    initialValue={dataUpdate?.avatar}
                    // label="Tên"
                    name="avatar"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >

                    <WrapUploadFile
                        onChange={handleSelectFile}
                        maxCount={1}
                        style={{ display: "block" }} >
                        {avatar ? (<img style={{ cursor: "pointer", border: "solid 1px #ccc", padding: 3, width: 200, height: 200, objectFit: "contain" }}
                            src={avatar} alt="avarta"></img>) : <img
                            style={{ cursor: "pointer", border: "solid 1px #ccc", padding: 3, objectFit: "contain", width: 200, height: 200 }}
                            alt="avatar"
                            src={dataUpdate.avatar} />}
                        <div style={{ maxWidth: 130, width: "100%", margin: "auto" }}>
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </div>

                    </WrapUploadFile>

                </Form.Item>

                <div style={{ display: 'flex' }}>

                    <div style={{ marginRight: 50, marginTop: 50 }}>

                        <Form.Item
                            initialValue={dataUpdate?.name}
                            label="Tên người dùng"
                            name="name"
                            rules={[
                                {
                                    required: false,

                                },
                            ]}
                        >
                            <Input readOnly={false} />
                        </Form.Item>

                        <Form.Item
                            initialValue={dataUpdate?.email}
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: false,

                                },
                            ]}
                        >
                            <Input readOnly={false} />
                        </Form.Item>
                    </div>
                    <div style={{ marginTop: 50 }}>
                        <Form.Item
                            initialValue={dataUpdate?.phone}
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                                {
                                    required: false,

                                },
                            ]}
                        >
                            <Input readOnly={false} />
                        </Form.Item>

                        <Form.Item
                            initialValue={dataUpdate?.address}
                            label="Địa chỉ"
                            name="address"
                            rules={[
                                {
                                    required: false,

                                },
                            ]}
                        >
                            <Input readOnly={false} />
                        </Form.Item>


                        <Button type="primary" htmlType="submit">
                            Lưu Chỉnh sửa
                        </Button>

                    </div>

                </div>

            </Form>

        </div >

    )
}