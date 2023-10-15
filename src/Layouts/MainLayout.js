import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainLayout(props) {
    return <div className="web-contain">
        <Header />
        {props.children}
        <Footer />
    </div>
}