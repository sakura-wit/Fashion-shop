import React from "react";

export function LikeButtonFace(props) {

    const { dataHref } = props

    return (
        <div class="fb-like" data-href={dataHref}
            data-width="" data-layout="" data-action="" data-size="" data-share="true"></div>
    )
}