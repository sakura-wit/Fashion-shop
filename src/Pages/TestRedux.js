import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/Slice/UserSlice";

export function TestRedux() {

    const dispash = useDispatch()
    const data = useSelector((state) => state.user.dataUser)

    console.log("newData", data);

    const handleClick = () => {
        const data = {
            newData: {
                name: 'CR',
                phone: 1234,
                address: "HuT"
            }

        }

        dispash(userAction.update(data))
    }

    return (
        <div style={{ marginTop: 160 }}>
            Nguyễn Văn Đạt

            <button onClick={handleClick} type="button" className="btn btn-info">button</button>

        </div>
    )
}

