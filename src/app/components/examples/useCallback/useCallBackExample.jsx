import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typography/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithOutCallback = (data) => {
        console.log(data);
    };

    const validateWithCallback = useCallback(() => (data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <div>Render With Out Callback: {withOutCallback.current}</div>
            <div>Render With Callback: {withCallback.current}</div>
            <SmallTitle>Example</SmallTitle>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                onChange={handleChange}
                type="email"
                name="email"
                value={data.email || ""}
                className="form-control mb-3"
                id="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
