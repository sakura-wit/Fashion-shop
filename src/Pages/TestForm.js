import React from "react";
import TestFiel from "../components/Field/TestField";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schema";

function TestForm() {




    const { control, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema), // Sử dụng yupResolver để tích hợp với Yup
    });


    const onSubmit = (data) => {
        console.log(data);
    };

    const fields = [
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        // Thêm các trường khác nếu cần
    ];

    return (

        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 160 }}
        >
            <h1>My Form</h1>
            <TestFiel control={control} formState={formState} fields={fields[0]} />
            <TestFiel control={control} formState={formState} fields={fields[1]} />

            <button type="submit">Submit</button>

            <div style={{ display: "flex", width: 500, height: 500, backgroundColor: "aqua" }}>

            </div>
        </form>


    )
}

export default TestForm