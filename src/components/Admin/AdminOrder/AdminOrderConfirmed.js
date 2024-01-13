import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as OrderService from '../../../service/OrderService'
import { orderAction, update } from "../../../redux/Slice/OrderSlice";
import { ListTableOrder } from "./ListTableOrder";
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


export function AdminOrderConfirmed() {
    window.scrollTo({
        top: 0
    })

    const dispash = useDispatch()

    async function getAllOrder() {
        const res = await OrderService.processOrderApi.getOrderConfirmed()
        dispash(orderAction.updateDataOrderAdmin(res.data))
        return res.data
    }

    useEffect(() => {
        getAllOrder()

    }, [])




    const [form] = Form.useForm()

    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (data) => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields()
    };

    const handleGetPathImageArr = (list, data) => {
        for (var i = 0; i < list.fileList.length; i++) {

            data.push(list.fileList[i].preview)
        }
        return data
    }

    const handleSubmit = async (data) => {



    }






    return (
        <div style={{ marginLeft: 20, }}>
            <div style={{ display: "flex" }}>
                <h6>Quản lý sản phẩm</h6>
            </div>


            {/* ListOrder */}
            <ListTableOrder title='Hủy đơn' />


        </div >
    )
}