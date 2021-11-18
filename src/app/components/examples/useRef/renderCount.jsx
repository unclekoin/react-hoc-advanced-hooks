import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typography/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [, setState] = useState(false);

    const toggleState = () => {
        setState((prevState) => !prevState);
    };

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет рендеров</SmallTitle>
            <Divider/>
            <button onClick={toggleState} type="button" className="btn btn-primary position-relative">
            Toggle State
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {renderCount.current}
                </span>
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
