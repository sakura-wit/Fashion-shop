import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputSign } from "../components/Field/InputSign";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../service/UserService'
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import UserSlice, { userAction } from "../redux/Slice/UserSlice";

export function InforUser() {

    window.scrollTo({
        top: 0,
    })

    const inforUser = useSelector((state) => state.user.dataUser)
    var changeInfor = { ...inforUser }


    useEffect(() => {
        console.log('CHANGEINFOR', inforUser);
    }, [inforUser])

    console.log('dataUserrrInfor', inforUser);

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
        await UserService.getUserApi.updateUser(data, inforUser)
        console.log('INFORRR', data);

        changeInfor.name = data.name
        changeInfor.address = data.address
        changeInfor.phone = data.phone
        dispash(userAction.update(changeInfor))
    }






    const handleLogout = () => {
        console.log('LOGOUTTTTT');

    }

    return (
        <div className="inforuser-contain">

            <img
                style={{ objectFit: "contain", width: 200, height: 200 }}
                src="https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexWrap: "wrap", marginTop: 30 }}>
                <div>
                    <span>{fields[0].name}</span>
                    <InputSign
                        style={{ marginRight: 40, height: 40, width: 250 }}
                        control={control}
                        fields={fields[0]}
                        defaultVal={inforUser.name}
                    />
                </div>


                <div>
                    <span>{fields[1].name}</span>
                    <InputSign
                        style={{ marginRight: 40, height: 40, width: 250 }}
                        control={control}
                        fields={fields[1]}
                        defaultVal={inforUser.email}
                        readOnly={true}
                    />
                </div>

                <div>
                    <span>{fields[2].name}</span>
                    <InputSign
                        style={{ marginRight: 40, height: 40, width: 250 }}
                        control={control}
                        fields={fields[2]}
                        defaultVal={inforUser.phone}
                    />
                </div>

                <div>
                    <span>{fields[3].name}</span>
                    <InputSign
                        style={{ marginRight: 40, height: 40, width: 250 }}
                        control={control}
                        fields={fields[3]}
                        defaultVal={inforUser.address}
                    />
                </div>

                <button
                    style={{ width: 100, height: 40, marginLeft: 100 }}
                >Lưu</button>


            </form>
            <button
                onClick={handleLogout}
                style={{ width: 200, height: 40 }}
            >Đăng xuất</button>

        </div>
    )
}