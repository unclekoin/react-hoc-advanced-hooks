import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component />
            <Component />
            <Component />
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>Компонент списка #{number}</div>;
};

Component.propTypes = {
    number: PropTypes.string
};

export default ChildrenExercise;
