import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import schema from "../../schema";



export function InputTextGroup(props) {

    const { fields, control, formState, style, label, title, change, placeholder } = props;


    const handleChane = (value) => {
        console.log("value", value.target.value);
    }

    return (

        <div>

            <div
                style={style}
                className="inputtext-contain"
            >
                <Controller

                    name={fields.name}
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <TextField
                            size="small"
                            id={fields.name}
                            fullWidth
                            label={fields.label}
                            error={!!formState.errors[field.name]}
                            helperText={formState.errors[field.name]?.message || ""}
                            {...field}
                            multiline={fields.mul}
                            placeholder={placeholder}
                        />
                    )}
                />
            </div>


        </div >




        // <div className="inputtext-contain">
        //     <label>{title}</label>
        //     {/* <input type={type}></input> */}
        //     <TextField fullWidth />
        // </div>


    )
}