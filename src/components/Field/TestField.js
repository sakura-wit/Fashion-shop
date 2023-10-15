import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup"
import schema from "../../schema";

function TestFiel(props) {


    const { control, formState } = props

    return (
        <div >

            <Controller
                // key={field.name}
                name={props.fields.name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        label={field.label}
                        error={!!formState.errors[field.name]}
                        helperText={formState.errors[field.name]?.message || ""}
                        {...field}
                    />
                )}
            />

            {/* <Controller
                // key={field.name}
                name={props.fields[1].name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        label={field.label}
                        error={!!formState.errors[field.name]}
                        helperText={formState.errors[field.name]?.message || ""}
                        {...field}
                    />
                )}
            /> */}
            {/* ))} */}
        </div>
    );
}

export default TestFiel