import React from "react";

export function ListGroup(props) {

    return (

        <div>

            <ul className="list-groub-contain">
                <li style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textTransform: "uppercase",
                    borderBottom: "2px solid black"
                }}>
                    <p style={{
                        fontWeight: "bold"
                    }}> {props.title} </p>

                    <p style={{
                        fontWeight: "bold"
                    }}> {props.decrip} </p>

                </li>
                {props.children}
            </ul>
        </div>
    )
}