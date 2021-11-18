import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typography/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const [state, setState] = useState(false);
    const prevState = useRef("");

    const toggleState = () => {
        setState((prevState) => !prevState);
    };

    useEffect(() => {
        prevState.current = String(state);
    }, [state]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider/>
            <small className="d-block mb-3">Current State: { String(state) }</small>
            <button onClick={toggleState} type="button" className="btn btn-primary position-relative">
            Toggle State
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {prevState.current}
                </span>
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
