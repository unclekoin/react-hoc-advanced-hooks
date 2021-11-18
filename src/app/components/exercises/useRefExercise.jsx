import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const handelChange = () => {
        const ref = blockRef.current;
        ref.textContent = "Text";
        ref.style.width = "80px";
        ref.style.height = "150px";
        console.log(blockRef.current.textContent);
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина будут равны 150 и 80</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-3"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small className="d-block">
                    Блок
                </small>
            </div>
            <button onClick={handelChange} className="btn btn-danger">
                Change
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
