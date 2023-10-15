import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import schema from "../../schema";



export function InputTextGroup(props) {

    const { fields, control, formState, style, label, title } = props;


    return (

        <div>

            <div
                style={style}
                className="inputtext-contain"
            >
                {/* <label> {title} </label> */}
                <Controller
                    // key={field.name}

                    name={fields.name}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            // className="inputtext-contain-textfield"

                            size="small"
                            fullWidth
                            label={fields.label}
                            error={!!formState.errors[field.name]}
                            helperText={formState.errors[field.name]?.message || ""}
                            {...field}
                            multiline={fields.mul}
                        />
                        // <textarea
                        //     error={true}
                        //     {...field}
                        // />
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