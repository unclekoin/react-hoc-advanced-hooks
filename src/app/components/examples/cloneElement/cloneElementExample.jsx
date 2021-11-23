import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typography/smallTitle";
const CloneElementExample = () => {
    const field = <TextField label="Email" name="email" />;

    const handleChange = (target) => {
        console.log("Change:", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, { onChange: handleChange, label: "Password", name: "password" })}
        </CardWrapper>
    );
};

export { CloneElementExample };
