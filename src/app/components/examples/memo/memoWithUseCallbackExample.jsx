import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button onClick={onLogOut} className="btn btn-primary me-2">
            Log Out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const isEqual = (prevState, nextState) => {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
};

const MemoizedLogOutButton = React.memo(LogOutButton, isEqual);

const MemoWithUseCallbackExample = (props) => {
    const [, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        console.log("Log Out");
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
            <button
                onClick={() => setState((prevState) => !prevState)}
                className="btn btn-primary"
            >
                Change State
            </button>
        </>
    );
};

export default MemoWithUseCallbackExample;
