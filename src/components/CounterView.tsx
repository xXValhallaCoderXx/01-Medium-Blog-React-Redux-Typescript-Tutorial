import React from "react";
import { CounterContainerState } from '../containers/CounterContainer';

// Define our Functions passwed down
interface CounterViewProps {
    handleDecrease: () => void;
    handleIncrease: (num: number) => void; //Define a function expecting a parameter
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
                <button onClick={() => props.handleIncrease(1)}>+</button>
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