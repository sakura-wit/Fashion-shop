import { DeleteOutlined, QuestionCircleOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Popconfirm, Spin, Table, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

import * as ProductService from '../../../service/ProductService'
import * as OrderService from '../../../service/OrderService'
import { useDispatch } from "react-redux";
import { update } from "../../../redux/Slice/ProductSlice";
import { orderAction } from "../../../redux/Slice/OrderSlice";


export function DrawerDone(props) {

    const [isLoading, setIsLoading] = useState(false)

    const { title, orderSelected, listOrder } = props
    let newListProduct = listOrder
    const access_token = localStorage.getItem('access_token')

    const [titleClick, setTitleClick] = useState()

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

        if (typeof (data.size) === "string") {
            data.size = await data.size.split(',')
        }
        setIsLoading(true)
        const res = await ProductService.getProductApi.updateProduct(data, orderSelected._id)
        setIsLoading(false)
        if (res.message === 'update product SUCCESS') {
            message.info(`Cập nhật thông tin ${data.name} thành công`)
            // onClose()
        }
    }

    const handleDelete = async (data) => {

        const check = newListProduct.some((item) => item._id === orderSelected._id)
        if (check) {
            const newList = newListProduct.filter((item) => item._id !== orderSelected._id)
            newListProduct = [...newList]
            dispatch(orderAction.updateUserOrderPend(newListProduct))
            const res = await OrderService.processOrderApi.deleteOrder(orderSelected._id, access_token)
            if (res.message === 'delete order Success') {
                onClose()
                message.info('Hủy đơn hàng thành công')
            }

        }

    }

    const renderImage = (data) => {
        return (
            <img style={{ width: 100, height: 100, objectFit: "contain" }} src={data} />
        )
    }

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'image',
            render: renderImage
        },
        {
            title: 'Tên',
            dataIndex: 'name',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',

        },
        {
            title: 'Đơn giá',
            dataIndex: 'price',
        },
    ];


    return (
        <>
            {isLoading && <div className="loading">
                <Spin />
            </div>}
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
                        <img style={{ height: 200, width: 200, objectFit: "contain", margin: "auto" }} src={orderSelected?.image} />
                    </Form.Item>


                    <Form.Item
                        initialValue={orderSelected?.name}
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
                        initialValue={orderSelected?.shippingAddress.phone}
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
                        initialValue={orderSelected?._id}
                        label="Mã đơn hàng"
                        name="_id"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={orderSelected?.createdAt}
                        label="Ngày tạo"
                        name="createdAt"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={orderSelected?.itemsPrice}
                        label="Giá trị đơn hàng"
                        name="itemsPrice"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input type="number" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={orderSelected?.paymentMethod}
                        label="Phương thức thanh toán"
                        name="paymentMethod"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Input type="text" readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={orderSelected?.shippingPrice}
                        label="Chi phí shipping"
                        name="shippingPrice"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input readOnly={false} />
                    </Form.Item>

                    <Form.Item
                        initialValue={orderSelected?.shippingAddress.address}
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

                    <Form.Item
                        initialValue={orderSelected?.shippingAddress.city}
                        label="Thành phố"
                        name="city"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Input />
                        {/* <TextArea style={{ height: 200 }} /> */}
                        {/* <Input type="textArea" readOnly={true} /> */}
                    </Form.Item>

                    <Form.Item
                        initialValue={orderSelected?.shippingAddress.city}
                        label="Danh sách sản phẩm"
                        name="orderItems"
                        rules={[
                            {
                                required: false,

                            },
                        ]}
                    >
                        <Table style={{ width: "1200px", margin: "auto" }} columns={columns} dataSource={orderSelected?.orderItems}


                        />
                    </Form.Item>


                    {/* <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            Lưu Chỉnh sửa
                        </Button>
                    </Form.Item> */}
                </Form>

                <Popconfirm

                    onConfirm={handleDelete}
                    title="Xác nhận"
                    description="Xác nhận đơn hàng ?"
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                >
                    <Button style={{ marginLeft: 150 }} type="primary" htmlType="submit">
                        {title}
                    </Button>
                </Popconfirm>


            </Drawer>
        </>
    );
}