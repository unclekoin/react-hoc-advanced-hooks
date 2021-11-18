import React, { useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typography/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const [isFirst, setIsFirst] = useState(true);

    const handleClickFocus = () => {
        const { value } = inputRef.current;
        if (value) {
            console.log(value);
            inputRef.current.value = "";
        }
        if (isFirst) {
            inputRef.current.focus();
            setIsFirst((prevState) => !prevState);
        }
    };

    const handleClickWidth = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control mb-3"
                id="email"
            />
            <button
                onClick={handleClickFocus}
                className="btn btn-primary d-block mb-2"
            >
                Focus & Value
            </button>
            <button onClick={handleClickWidth} className="btn btn-secondary">
                Change Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
