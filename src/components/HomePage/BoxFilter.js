import React, { useEffect, useState } from "react";

export function BoxFilter() {

    const [isFixed, setIsFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPos < windowHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const blockStyle = {
        position: isFixed ? "unset" : "fixed",
        top: "0px",
        transition: " transform 10s ease-in-out 2s"
    };







    return (
        <div style={blockStyle} className="in-boxfilter-contain">


        </div >
    )
}