import Collapse from "../components/common/collapse";
import React from "react";
import HOCExample from "../components/examples/hoc/hocExample";
import CardWrapper from "../components/common/Card";
import HocExercise from "../components/exercises/hocExercise";
import BlockQuoteWrapper from "../components/common/blockQuote";
import Title from "../components/common/typography/title";
import Subtitle from "../components/common/typography/subtitle";
import Divider from "../components/common/divider";
import withAuthAndStyles from "../components/exercises/solutions/withAuthAndStyles";
import Component from "../components/exercises/solutions/SimpleComponent";

const HOCLayout = () => {
    const AuthComponent = withAuthAndStyles(Component);
    return (
        <>
            <Title>HOC</Title>
            <Collapse title="Информация">
                <BlockQuoteWrapper>
                    <p>
                        Аргументы: callBack , [array of dependencies]
                        <br />
                        Возвращает: Закэшированное значение выполненной функции,
                        которое обновляется только при изменении зависимостей.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuoteWrapper>
            </Collapse>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> add{" "}
                <code>&quot;react/display-name&quot;: &quot;off&quot;</code> to
                EsLint rules
            </CardWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <HOCExample />
            <Divider />
            <Subtitle>Упражнения</Subtitle>
            <HocExercise />
            <Subtitle>Решение</Subtitle>
            <AuthComponent />
        </>
    );
};
export default HOCLayout;
