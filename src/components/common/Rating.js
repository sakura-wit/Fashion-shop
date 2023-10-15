import { useState } from "react";

export default function Rating() {
    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);

    const first = {
        color: star1
            ? "red"
            : star2
                ? "red"
                : star3
                    ? "red"
                    : star4
                        ? "red"
                        : star5
                            ? "red"
                            : "black"
    };

    const second = {
        color: star2
            ? "red"
            : star3
                ? "red"
                : star4
                    ? "red"
                    : star5
                        ? "red"
                        : "black"
    };

    const third = {
        color: star3 ? "red" : star4 ? "red" : star5 ? "red" : "black"
    };

    const fourth = {
        color: star4 ? "red" : star5 ? "red" : "black"
    };

    const fifth = {
        color: star5 ? "red" : "black"
    };

    return (
        <div className="rating-container">
            <div>
                <div className="rate">
                    <h1
                        style={first}
                        onClick={() => {
                            setStar1(() => !star1);
                            setStar2(() => false);
                            setStar3(() => false);
                            setStar4(() => false);
                            setStar5(() => false);
                        }}
                    >
                        &#9734;
                    </h1>
                    <h1
                        style={second}
                        onClick={() => {
                            setStar2(() => !star2);
                            setStar3(() => false);
                            setStar4(() => false);
                            setStar5(() => false);
                        }}
                    >
                        &#9734;
                    </h1>
                    <h1
                        style={third}
                        onClick={() => {
                            setStar3(() => !star3);
                            setStar4(() => false);
                            setStar5(() => false);
                        }}
                    >
                        &#9734;
                    </h1>
                    <h1
                        style={fourth}
                        onClick={() => {
                            setStar4(() => !star4);
                            setStar5(() => false);
                        }}
                    >
                        &#9734;
                    </h1>
                    <h1 style={fifth} onClick={() => setStar5(() => !star5)}>
                        &#9734;
                    </h1>
                </div>
            </div>
        </div>
    );
}