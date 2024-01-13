import React from "react";
import { CmtForm } from "./common/CmtForm";

export function Feedback(props) {

    const { dataHref, width } = props

    return (
        <div style={{ width: 1200 }} className="de-feedback-contain">
            <div style={{ marginLeft: "100px" }} className="fb-comments " data-href={dataHref}
                data-width={width} data-numposts="5"></div>
        </div>

        // <div className="de-feedback-contain">
        //     <CmtForm />
        //     <CmtForm />
        // </div>
    )
}