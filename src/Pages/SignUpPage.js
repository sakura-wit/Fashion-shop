import React from "react";
import { InputTextGroup } from "../components/Field/InputTextGroub";
import { AddCartButton, BuyButton } from "../components/common/AddCartButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as UserService from '../service/UserService'
import { useMutationHook } from "../hook/useMultationHook";
import { ItemProduct } from "../components/common/ItemProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/Slice/ProductSlice";
import { async } from "q";
import { useMutation } from "@tanstack/react-query";

export function SignUpPage() {

    const dataProduct = useSelector((state) => state.product.dataProduct)
    const dispash = useDispatch()

    const fields = [
        { name: "email", label: "email*" },
        { name: "pass", label: "pass*" },
    ]

    const { control, handleSubmit, formState } = useForm({
    })


    console.log('dataProduct: ', dataProduct);


    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    const handleOnChange = (value) => {
        // console.log(`${value.target.name}`, value.target.value);
        if (value.target.name === 'pass') {
            setPass(value.target.value)
        } else if (value.target.name === 'email') {
            setEmail(value.target.value)
        }
    }

    async function test() {
        const res = await UserService.getUserApi.getAllProduct()
        dispash(update(res.data))
    }

    useEffect(() => {


        test();
    }, [])


    const handleGetData = () => {

    }

    // const mutation = useMutationHook(
    //     data => UserService.signinUser(data)
    // )
    // const { data } = mutation

    const onSubmit = () => {
        // mutation.mutate({ email, password, })
    }

    return (
        <div style={{ marginTop: 160, }}>
            {/* <input onChange={handleOnChange} type="text" /> */}
            <form style={{ width: 600 }} onChange={handleOnChange} onSubmit={handleSubmit(onSubmit)}>
                <InputTextGroup
                    fields={fields[0]}
                    control={control}
                    formState={formState}
                />

                <InputTextGroup
                    fields={fields[1]}
                    control={control}
                    formState={formState}
                />

                <AddCartButton title='Đăng nhập' />

                {/* {data?.status === 'ERR' && <span>{data?.message}</span>} */}
            </form>

            <AddCartButton onClick={handleGetData} title='Sản phẩm ' />

            <ItemProduct />

        </div>
    )
}