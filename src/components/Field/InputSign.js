import React from "react";
import { Controller } from "react-hook-form";




export function InputSign(props) {

    const { fields, control, formState, style, label, title, change, placeholder } = props;


    return (

        <div>

            <div
            // style={style}
            // className="inputtext-contain"
            >
                <Controller

                    name={fields.name}
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        // <TextField
                        //     size="small"
                        //     id={fields.name}
                        //     fullWidth
                        //     label={fields.label}
                        //     error={!!formState.errors[field.name]}
                        //     helperText={formState.errors[field.name]?.message || ""}
                        //     {...field}
                        //     multiline={fields.mul}
                        //     placeholder={placeholder}
                        // />

                        <input
                            style={{ height: 50 }}
                            required
                            id={fields.name}
                            label={fields.label}
                            {...field}
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