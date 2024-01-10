import { DeleteOutlined, QuestionCircleOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Popconfirm, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

import * as ProductService from '../../../service/ProductService'
import { useDispatch } from "react-redux";
import { update } from "../../../redux/Slice/ProductSlice";

export function DrawerProduct(props) {

    const { productSelected, listProduct } = props
    let newListProduct = listProduct
    const access_token = localStorage.getItem('access_token')

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        form.resetFields()
    };

    const [form] = Form.useForm()



    const handleUpdate = async (data) => {
        console.log('dataFormUpdate', data);
        console.log('data.size', typeof (data.size));
        if (typeof (data.size) === "string") {
            data.size = await data.size.split(',')
            console.log('data.size', data.size);
        }

        const res = await ProductService.getProductApi.updateProduct(data, productSelected._id)
        console.log('resssssUpdateProduct', res);
        if (res.message === 'update product SUCCESS') {
            message.info(`Cập nhật thông tin ${data.name} thành công`)
            // onClose()
        }
    }

    const handleDelete = async () => {
        const res = await ProductService.getProductApi.deleteProduct(productSelected._id, access_token)
        // console.log('productSelected._id', productSelected._id)
        if (res.message === 'delete product Success') {
            message.info(`Xóa sản phẩm ${productSelected.name} thành công`)
            onClose()
            const check = newListProduct.some((item) => item._id === productSelected._id)
            if (check) {
                const newList = newListProduct.filter((item) => item._id !== productSelected._id)
                newListProduct = [...newList]
                dispatch(update([...newList]))
                console.log('valueee', newList);
                // await UserService.getUserApi.deleteUser(userSelected._id, access_token)
            }
        }
    }


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

            >


                <Form
                    form={form}
                    onFinish={handleUpdate}
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
                        <img style={{ height: 200, width: 200, objectFit: "contain", margin: "auto" }} src={productSelected?.image} />
                    </Form.Item>


                    <Form.Item
                        initialValue={productSelected?.name}
                        label="Tên"
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
                        initialValue={productSelected?.hash}
                        label="Mã sản phẩm"
                        name="hash"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={productSelected?.type}
                        label="Kiểu"
                        name="type"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={productSelected?.price}
                        label="Giá"
                        name="price"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input type="number" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={productSelected?.countInStock}
                        label="CountInStock"
                        name="countInStock"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input type="number" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={productSelected?.rating}
                        label="Rating"
                        name="rating"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>



                    <Form.Item
                        initialValue={productSelected?.discount}
                        label="Discount"
                        name="discount"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input type="number" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={productSelected?.size}
                        label="Size"
                        name="size"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={productSelected?.description}
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


                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            Lưu Chỉnh sửa
                        </Button>
                    </Form.Item>
                </Form>

                <Popconfirm

                    onConfirm={handleDelete}
                    title="Xóa"
                    description="Bạn có chắc chắn muốn xóa sản phẩm này không ?"
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                >
                    <Button style={{ marginLeft: 150 }} type="primary" htmlType="submit">
                        Xóa
                    </Button>
                </Popconfirm>


            </Drawer>
        </>
    );
}