import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ProductService from '../../../service/ProductService'
import { update } from "../../../redux/Slice/ProductSlice";
import { ListTableProduct } from "./ListTableProduct";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "react-hook-form";
import { getBase64 } from "../../../utils";
import styled from "@emotion/styled";
import { render } from "@testing-library/react";
import { faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";


const WrapUploadFile = styled(Upload)`
    & .ant-upload-list-item-container{
        // display:none
    }
`


export function AdminProduct() {
    window.scrollTo({
        top: 0
    })

    const dataAllProduct = useSelector((state) => state.product.dataProduct)
    let dataAddProduct = [...dataAllProduct]
    console.log('dataAllProductdataAllProduct', dataAllProduct);

    let dataImageDetail = []
    let dataImagePreview = []
    let dataImage = []


    const dispash = useDispatch()

    const getAllProduct = async () => {
        const res = await ProductService.getProductApi.getAllProduct()
        dispash(update(res.data))
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    const [form] = Form.useForm()

    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (data) => {
        console.log(data);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields()
    };

    const handleGetPathImageArr = (list, data) => {
        console.log('pussss', list.fileList);
        for (var i = 0; i < list.fileList.length; i++) {

            data.push(list.fileList[i].preview)
        }
        return data
    }

    const handleSubmit = async (data) => {
        data.image = data.image.fileList[0].preview
        data.imagePreview = handleGetPathImageArr(data.imagePreview, dataImagePreview)
        data.imageDetail = handleGetPathImageArr(data.imageDetail, dataImageDetail)
        if (typeof (data.size) === "string") {
            data.size = await data.size.split(',')
            // console.log('data.size', data.size);
        }
        // data.imageDetail
        // console.log('dataImagePreview', dataImagePreview);
        // data.name = data?.name?.file?.preview

        // const res = await ProductService.getProductApi.createProduct(data)
        console.log('dataaaaCreat', data);
        let dataPush = data
        dataAddProduct.push(dataPush)
        // if (res.message === 'SUCCESS') {

        // dispash(update(dataAddProduct))
        //     setIsModalOpen(false)
        //     message.info('Tạo product thành công')

        // }


    }

    const [avatar, setAvatar] = useState('')

    const handleSelectFile = async ({ fileList }) => {
        for (var i = 0; i < fileList.length; i++) {
            const file = fileList[i]
            if (file)
                if (!file?.url && !file?.preview) {
                    file.preview = await getBase64(file.originFileObj);
                }

        }

        // setAvatar(fileList.lengh != 0 && file?.preview)
        // console.log('file.preview', file?.preview);

    }


    return (
        <div style={{ marginLeft: 20, }}>
            <div style={{ display: "flex" }}>
                <h6>Quản lý sản phẩm</h6>
            </div>
            <Button onClick={showModal} style={{ width: 150, height: 150 }} >
                <PlusOutlined style={{ fontSize: 50 }} />
            </Button>

            {/* ListProduct */}
            <ListTableProduct />

            <Modal
                onOk={handleOk}
                onCancel={handleCancel}
                okText=" "

                okButtonProps={{
                    // disabled: true,
                    // ghost: true,
                    // color: "borderColorDisabled"
                    // content: ''
                    style: { border: "none", opacity: 0, zIndex: -10000 }

                }}
                // style={{ width: "100vh" }}
                width={800}
                title="Basic Modal" open={isModalOpen} >


                <Form
                    form={form}
                    onFinish={handleSubmit}
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
                        {/* <img style={{ height: 200, width: 200, objectFit: "contain", margin: "auto" }} src={productSelected?.image} /> */}
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.hash}
                        label="Tên sản phẩm"
                        name="name"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.hash}
                        label="Mã sản phẩm"
                        name="hash"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.type}
                        label="Kiểu"
                        name="type"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.price}
                        label="Giá"
                        name="price"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input type="number" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.countInStock}
                        label="CountInStock"
                        name="countInStock"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input type="number" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.rating}
                        label="Rating"
                        name="rating"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>



                    <Form.Item
                        // initialValue={productSelected?.discount}
                        label="Discount"
                        name="discount"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                    >
                        <Input type="number" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.size}
                        label="Size"
                        name="size"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.description}
                        label="Mô tả"
                        name="description"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <TextArea style={{ height: 200 }} />
                        {/* <Input type="textArea" readOnly={true} /> */}
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.name}
                        label="Ảnh "
                        name="image"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        {/* <Input type="" readOnly={false} /> */}
                        <Upload onChange={handleSelectFile}
                            type="drag"
                            onPreview={() => {
                                message.info('xemdialog')
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </Upload>
                        {/* {avatar ? <img style={{ width: 200, height: 200, objectFit: "contain" }}
                            src={avatar} alt="avarta"></img> : <></>} */}
                        {/* {avatar && (<img style={{ marginRight: 200, width: 200, height: 200, objectFit: "contain" }}
                            src={avatar} alt="avarta"></img>)} */}
                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.name}
                        label="Ảnh xem trước "
                        name="imagePreview"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        {/* <Input type="" readOnly={false} /> */}
                        <Upload onChange={handleSelectFile}
                            maxCount={4}
                            type="drag"
                            onPreview={() => {
                                message.info('xemdialog')
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </Upload>

                    </Form.Item>

                    <Form.Item
                        // initialValue={productSelected?.name}
                        label="Ảnh chi tiết "
                        name="imageDetail"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        {/* <Input type="" readOnly={false} /> */}
                        <Upload onChange={handleSelectFile}
                            maxCount={2}
                            type="drag"
                            onPreview={() => {
                                message.info('xemdialog')
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </Upload>

                    </Form.Item>



                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            Lưu Chỉnh sửa
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    )
}