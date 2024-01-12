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
    let dataInforUser = inforUser
    var changeInfor = { ...inforUser }
    const [dataUpdate, setDataUpdate] = useState(inforUser)




    // console.log('dataUserrrInfor', inforUser);

    const dispash = useDispatch()

    const { control, handleSubmit, formState } = useForm({})

    const fields = [
        { name: 'name' },
        { name: 'email' },
        { name: 'phone' },
        { name: 'address' },
    ]

    // const testOb = {
    //     dataTest: {}
    // }

    // testOb.dataTest = {
    //     name: 'datnguyen'
    // }


    // console.log('testttOB', testOb);

    const onSubmit = async (data) => {
        // await UserService.getUserApi.updateUser(data, inforUser)
        // console.log('INFORRR', data);

        // changeInfor.name = data.name
        // changeInfor.address = data.address
        // changeInfor.phone = data.phone
        // dispash(userAction.update(changeInfor))
        // console.log('dataUpdate', data);
    }

    const [form] = Form.useForm()

    const [avatar, setAvatar] = useState(inforUser.avatar)

    const handleSelectFile = async ({ fileList }) => {
        const file = fileList[0]
        if (!file?.url && !file?.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setAvatar(file.preview)
    }

    const onSubmitUpdate = async (data) => {
        console.log('data.avatar', data);
        if (data.avatar.file)
            data.avatar = data.avatar.file.preview
        console.log('dataUpdateInforUser', data);

        const res = await UserService.getUserApi.updateUser(data, inforUser)
        changeInfor.name = data.name
        changeInfor.address = data.address
        changeInfor.phone = data.phone
        changeInfor.avatar = data.avatar
        console.log('changeInfor', changeInfor);
        dispash(userAction.update(changeInfor))

        if (res?.message === 'SUCCESS') {
            message.info('Cập nhật thông tin thành công')
        }
    }

    // const handleUpdate = async () => {
    //     await UserService.getUserApi.updateUser(dataUpdate, inforUser)
    //     dispash(userAction.update(dataUpdate))
    // }

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

                    // justifyContent: "space-between"
                }}
            >

                <Form.Item
                    initialValue={inforUser?.avatar}
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

                        {/* <img style={{ objectFit: "contain", width: 200, height: 200 }}
                            alt="avatar"
                            src={avatar ? avatar : "https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg"}
                        /> */}
                        {/* <div style={{ maxWidth: 200, maxHeight: 200, width: "100%", height: "100%" }}> */}
                        {avatar ? (<img style={{ cursor: "pointer", border: "solid 1px #ccc", padding: 3, width: 200, height: 200, objectFit: "contain" }}
                            src={avatar} alt="avarta"></img>) : <img
                            style={{ cursor: "pointer", border: "solid 1px #ccc", padding: 3, objectFit: "contain", width: 200, height: 200 }}
                            alt="avatar"
                            src={inforUser.avatar} />}
                        {/* </div> */}
                        {/* <img
                            style={{ objectFit: "contain", width: 200, height: 200 }}
                            alt="avatar"
                            src={inforUser.avatar} /> */}
                        {/* {avatar && (<img style={{ width: 200, height: 200, objectFit: "contain" }}
                            src={avatar} alt="avarta"></img>)} */}
                        <div style={{ maxWidth: 130, width: "100%", margin: "auto" }}>
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </div>

                    </WrapUploadFile>

                </Form.Item>

                <div style={{ display: 'flex' }}>

                    <div style={{ marginRight: 50, marginTop: 50 }}>

                        <Form.Item
                            initialValue={dataInforUser?.name}
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
                            initialValue={inforUser?.email}
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
                            initialValue={inforUser?.phone}
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
                            initialValue={inforUser?.address}
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

        // <div className="inforuser-contain">

        //     <img
        //         style={{ objectFit: "contain", width: 200, height: 200 }}
        //         src="https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg" />
        //     <form
        //         onSubmit={handleSubmit(onSubmit)}
        //         style={{ display: "flex", flexWrap: "wrap", marginTop: 30 }}>



        //         <div>
        //             <span>{fields[0].name}</span>
        //             <InputSign
        //                 style={{ marginRight: 40, height: 40, width: 250 }}
        //                 control={control}
        //                 fields={fields[0]}
        //                 defaultVal={inforUser.name}
        //             />
        //         </div>


        //         <div>
        //             <span>{fields[1].name}</span>
        //             <InputSign
        //                 style={{ marginRight: 40, height: 40, width: 250 }}
        //                 control={control}
        //                 fields={fields[1]}
        //                 defaultVal={inforUser.email}
        //                 readOnly={true}
        //             />
        //         </div>

        //         <div>
        //             <span>{fields[2].name}</span>
        //             <InputSign
        //                 style={{ marginRight: 40, height: 40, width: 250 }}
        //                 control={control}
        //                 fields={fields[2]}
        //                 defaultVal={`0${inforUser.phone}`}
        //             />
        //         </div>

        //         <div>
        //             <span>{fields[3].name}</span>
        //             <InputSign
        //                 style={{ marginRight: 40, height: 40, width: 250 }}
        //                 control={control}
        //                 fields={fields[3]}
        //                 defaultVal={inforUser.address}
        //             />
        //         </div>

        //         <button
        //             style={{ width: 100, height: 40, marginLeft: 100 }}
        //         >Lưu</button>


        //     </form>

        //     {/* <button
        //         onClick={handleLogout}
        //         style={{ width: 200, height: 40 }}
        //     >Đăng xuất</button> */}

        // </div>
    )
}