import React from "react";
import { InputTextGroup } from "../components/Field/InputTextGroub";
import { AddCartButton, BuyButton } from "../components/common/AddCartButton";
import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import * as UserService from '../service/UserService'
import { useMutationHook } from "../hook/useMultationHook";
import { useEffect } from "react";
import { async } from "q";

export function SignPage() {

    const fields = [
        { name: "email", label: "email*" },
        { name: "password", label: "pass*" },
        { name: "confirmPassword", label: "confirmPassword*" },
    ]

    const { control, handleSubmit, formState, getValues } = useForm({
        mode: 'onChange'
    })

    const emailWatch = useWatch({ control, name: 'email' })


    useEffect(() => {
        console.log(getValues(), emailWatch);
    }, [emailWatch])


    // const handleOnChange = (value) => {
    //     // console.log(`${value.target.name}`, value.target.value);
    //     if (value.target.name === 'pass') {
    //         setPass(value.target.value)
    //     } else if (value.target.name === 'email') {
    //         setEmail(value.target.value)
    //     } else if (value.target.name === 'confirmPass') {
    //         setConfirmPass(value.target.value)
    //     }


    // }


    // const mutation = useMutationHook(
    //     data => UserService.signupUser(data)
    // )
    // const { data } = mutation

    const onSubmit = async (data) => {
        console.log(data);

        const res = await UserService.getUserApi.signupUser(data)
        console.log('res', res);
        // mutation.mutate({ email, password, confirmPassword })
    }



    // console.log('mutation', mutation);

    return (
        <div style={{ marginTop: 160, display: "flex" }}>
            {/* <input onChange={handleOnChange} type="text" /> */}
            <form style={{ width: 600 }} onSubmit={handleSubmit(onSubmit)}>\
                {
                    fields.map((val) => {
                        return (
                            <InputTextGroup
                                key={val.name}
                                fields={val}
                                control={control}
                                formState={formState}
                            />
                        )
                    })
                }



                <AddCartButton title='Đăng kí' />

                {/* {data?.status === 'ERR' && <span>{data?.message}</span>} */}
            </form>

        </div>
    )
}