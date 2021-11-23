import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, method }) => {
    return (
        <button
            onClick={method}
            className={`btn btn-${isAuth ? "danger" : "primary"}`}
        >
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    method: PropTypes.func
};

export default SimpleComponent;
