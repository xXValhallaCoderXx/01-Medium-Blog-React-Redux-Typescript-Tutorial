import React from "react";
import { CounterContainerState } from '../containers/CounterContainer';

interface CounterViewProps {
    handleDecrease: () => void;
    handleIncrease: () => void;
    handleDisplayError: () => void;
}

type ComponentProps = CounterContainerState & CounterViewProps

const CounterView = (props: ComponentProps): JSX.Element => {
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
            <hr />
        </div>
    );
};

export default CounterView;