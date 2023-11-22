import React from "react";
import { InputTextGroup } from "../components/Field/InputTextGroub";
import { useForm, useWatch } from "react-hook-form";

import * as UserService from '../service/UserService'
import { InputSign } from "../components/Field/InputSign";

import background from '../images/backgroundregister_auto_x2_auto_x2.jpg'

export function RegisterPage() {

    const { control, handleSubmit, formState, getValues } = useForm({
        mode: 'onchange'
    })



    const fields = [
        { name: 'email', lable: '*email' },
        { name: 'password', lable: '*password' },
        { name: 'confirmPassword', lable: '*confirmPassword' },

    ]
    const onSubmit = async (data) => {
        const res = await UserService.getUserApi.signupUser(data)
        console.log('res', data);

        // console.log('data', data);
    }



    return (


        <div className="registerpage-contain">

            <img style={{ objectFit: "contain", position: "absolute", width: "100%", opacity: 0.9 }} src={background} />

            <div className="a1">
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <h1>Register</h1>
                    {/* <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bxs-user'></i>
                    </div> */}
                    <div className="input-box">
                        {/* <input type="text" placeholder="Email" required /> */}
                        <InputSign fields={fields[0]} control={control} placeholder={fields[0].name} />
                        {/* <InputTextGroup placeholder={fields[0].name} fields={fields[0]} control={control} formState={formState} /> */}
                        <i className='bx bx-envelope'></i>
                    </div>
                    <div className="input-box">
                        <InputSign fields={fields[1]} control={control} placeholder={fields[1].name} />
                        {/* <input type="password" placeholder="Password" required /> */}
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="input-box">
                        <InputSign fields={fields[2]} control={control} placeholder={fields[2].name} />
                        {/* <input type="password" placeholder="Enter your Password" required /> */}
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <button type="submit" className="btn">Register</button>

                    <div className="or">
                        <h5>---OR---</h5>
                    </div>
                    <div className="btnor">
                        <button className="btnfb">Facebook</button>
                        <button className="btngg">Google</button>
                    </div>
                    <div className="content">
                        Do you already have an account?
                        <a>Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

