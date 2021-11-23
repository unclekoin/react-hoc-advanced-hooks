import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";

const withAuthAndStyles = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const isAuth = localStorage.getItem("user");
        setIsAuth(!!isAuth);
    }, []);

    const onLogin = () => {
        localStorage.setItem("user", true);
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };

    return (
        <CardWrapper>
            <Component isAuth={isAuth} method={isAuth ? onLogOut : onLogin} {...props} />
        </CardWrapper>
    );
};

export default withAuthAndStyles;
