import React from "react";
import { CounterContainerState, ValhallaBeing } from '../containers/Counter';

interface CounterViewProps {
    handleDecrease: () => void;
    handleIncrease: () => void;
    handleDisplayError: () => void;
    selectedBeing: (x: any) => void;
    handleFormSubmit: (e: React.SyntheticEvent<EventTarget>) => void;
    handleOnChange: (e: React.SyntheticEvent<EventTarget>) => void;
}

type I = CounterContainerState & CounterViewProps & ValhallaBeing


const CounterView = (props: I) => {
    console.log('THE PROPS', props)
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
            <h2>Union Type Example</h2>
            <br/><br/>
            <h3>Choose thy being of Valhalla</h3>
            <select onChange={props.selectedBeing('test')}>
                <option value={'valk'}>Valk</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        </div>
    );

};

export default CounterView;