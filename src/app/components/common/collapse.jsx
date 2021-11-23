import React, { useEffect, useRef, useState } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import PropTypes from "prop-types";

const CollapseWrapper = ({ children, title, name }) => {
    const [display, setDisplay] = useState(false);
    const collapseRef = useRef();
    const toggleDisplay = () => {
        setDisplay((prevState) => !prevState);
    };
    useEffect(() => {
        const newCollapse = new BsCollapse(collapseRef.current, {
            toggle: false
        });
        display ? newCollapse.show() : newCollapse.hide();
    }, [display]);

    const Children = React.Children.map(children, (child, index) => {
        const config = {
            number: String(index)
        };
        return child.type.name === "Component"
            ? React.cloneElement(child, config)
            : child;
    });

    return (
        <div className="card  my-2">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    {title}
                    <i
                        className={
                            "bi bi-caret-" +
                            (!display ? "down-fill" : "up-fill")
                        }
                        onClick={toggleDisplay}
                    ></i>
                </div>
                <div className="collapse" ref={collapseRef} id={name + title}>
                    {Children}
                </div>
            </div>
        </div>
    );
};

CollapseWrapper.defaultProps = {
    title: "Информация"
};
CollapseWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    title: PropTypes.string,
    name: PropTypes.string
};

export default CollapseWrapper;
