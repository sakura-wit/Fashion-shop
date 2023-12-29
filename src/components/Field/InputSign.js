import React from "react";
import { Controller } from "react-hook-form";




export function InputSign(props) {

    const { fields, control, style, defaultVal, placeholder, readOnly } = props;


    return (

        <div>

            <div
            // style={style}
            // className="inputtext-contain"
            >
                <Controller

                    name={fields.name}
                    control={control}
                    defaultValue={defaultVal}
                    render={({ field }) => (

                        <input

                            style={style}
                            // required
                            id={fields.name}
                            label={fields.label}
                            {...field}
                            placeholder={placeholder}
                            readOnly={readOnly}
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