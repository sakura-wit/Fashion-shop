import React from "react";
import { InputTextGroup } from "../Field/InputTextGroub";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../../schema";
import { useState } from "react";
import { useEffect } from "react";
import { BuyButton } from "../common/BuyButton";




export function InforPayment() {

    const fields = [
        { name: "firstName", label: "Tên*" },
        { name: "lastName", label: "Họ" },
        { name: "compName", label: "Tên công ty" },
        { name: "address", label: "Địa chỉ*" },
        { name: "phoneNumber", label: "Số điện thoại*" },
        { name: "email", label: "Email*" },
        { name: "note", label: "Ghi chú", mul: true },
        // Thêm các trường khác nếu cần
    ];

    const [field, setField] = useState({
        name: "",
        label: ""
    })



    useEffect(() => {
        setField("first", 'alo');
        console.log(field)
    }, [])

    const { control, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (values) => {
        console.log("values", values)
    }

    return (

        <form
            className="ch-inforpayment-contain"
            onSubmit={handleSubmit(onSubmit)}

        >
            <h5>THÔNG TIN THANH TOÁN</h5>

            {/* Họ và tên */}
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between"
                }}
            >

                <InputTextGroup
                    style={{ width: 320 }}
                    fields={fields[0]}
                    control={control}
                    formState={formState}
                    type="text" title="Tên* " place={"aloooo"} />

                <InputTextGroup
                    style={{ width: 320 }}
                    fields={fields[1]}
                    control={control}
                    formState={formState}
                    type="text" title="Họ " place={"aloooo"} />

            </div>

            {/* Company */}
            <div>
                <InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[2]}
                    control={control}
                    formState={formState}
                    type="email" title="Tên công ty" />
            </div>



            {/* phone/ email */}
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>

                < InputTextGroup
                    style={{
                        marginRight: 20,
                        width: 320
                    }}
                    fields={fields[3]}
                    control={control}
                    formState={formState}
                    type="text" title="Địa chỉ *" place="Địa chỉ" />

                <InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[4]}
                    control={control}
                    formState={formState}
                    type="text" title="Số điện thoại*" />

            </div>


            <div style={{
            }}>
                < InputTextGroup
                    style={{
                        width: 320
                    }}
                    fields={fields[5]}
                    control={control}
                    formState={formState}
                    title="Địa chỉ email*" place="Địa chỉ" />
                {/* <InputTextGroup titl="Số điện thoại*" /> */}
            </div>



            <div style={{ paddingLeft: 0, fontWeight: 500 }}>
                {/* <p>Ghi chú đơn hàng</p> */}
                < InputTextGroup
                    style={{
                        width: 700,
                        mul: "true",
                        // textField: {
                        //     multiline: true
                        // }
                    }}
                    fields={fields[6]}
                    control={control}
                    formState={formState}
                    title="Địa chỉ email*" place="Địa chỉ" />
            </div>

            <BuyButton title='Thanh toán' />

        </form >
    )
}