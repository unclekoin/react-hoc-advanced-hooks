import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typography/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const runFactorial = (n) => {
    console.log("Run Factorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [state, setState] = useState(false);

    const result = useMemo(() => runFactorial(value), [value]);

    const buttonColor = useMemo(
        () => ({ value: state ? "warning" : "danger" }),
        [state]
    );

    useEffect(() => {
        console.log("Render");
    });

    useEffect(() => {
        console.log("Render button color");
    }, [buttonColor]);

    const increaseValue = () => {
        setValue((prevState) => prevState + 10);
    };

    const decreaseValue = () => {
        setValue((prevState) => prevState - 10);
    };
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <div className="mb-2 d-flex align-items-center">
                    <span className="fs-4">!{value}</span>
                    <span className="mx-1">=</span>
                    <span>{result}</span>
                </div>
                <button onClick={increaseValue} className="btn btn-danger me-2">
                    Increase
                </button>
                <button
                    onClick={decreaseValue}
                    className="btn btn-primary"
                    disabled={!value}
                >
                    Decrease
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <div className="mb-2">State: {String(state)}</div>
                <button
                    onClick={() => setState((prevState) => !prevState)}
                    className={`btn btn-${buttonColor.value}`}
                >
                    Change State
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
