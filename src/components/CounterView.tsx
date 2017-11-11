import React from "react";
import { CounterContainerState } from '../containers/Counter';

interface CounterViewProps {
    handleDecrease: () => void;
    handleIncrease: () => void;
    handleDisplayError: () => void;
}

type I = CounterContainerState & CounterViewProps

const CounterView = (props: I) => {
    return (
        <div>
            <h1>Beer Drank: {props.value}</h1>
            {props.handleDisplayError()}
            <hr />
            <div className="basic-padding">
                <label>Increase: </label>
                <button onClick={() => props.handleIncrease()}>+</button>
            </div>
            <br />
            <div className="basic-padding">
                <label>Decrease: </label>
                <button onClick={() => props.handleDecrease()}>-</button>
            </div>
        </div>
    );

};

export default CounterView;