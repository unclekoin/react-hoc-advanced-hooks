import React from "react";
import CardWrapper from "../../common/Card";

const withPropsStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="Style Component" />
        </CardWrapper>
    );
};

export default withPropsStyles;
