import React from "react";
import { Deity } from '../models';
import { GodInfoContainerState } from '../containers/AddItemContainer';
import AddItemForm from './AddItemForm';

interface GodInfoViewProps {
    handleOnDropDownChange: (e: string) => void;
    onSubmit: (e: any) => void;
    handleInputChange: (e: any) => void;
}

// Use the 'Intersection' Operator to co-join 2 interfaces into one
// This allows us to keep our Componennt instantiation cleaner
type ComponentProps = GodInfoViewProps & GodInfoContainerState

const CreateGodView = (props: ComponentProps): JSX.Element => {
    console.log('PROPS', props)
    return (
        <div>
            <h3>Choose Which Being To Send To Valhalla</h3>
            <label>Choose Deity Type: </label>
            <select onChange={(e) => props.handleOnDropDownChange(e.target.value)}>
            <option>Select Deity...</option>
            {props.deityChoice.map((key) => {
                // Create option drop down for each Deity type
                return <option key={key}>{key}</option>
            })}
            </select>
            <br />
            <div className="form-wrapper">
            {Object.keys(props.deity).length === 0
            // If deity has been selected display form
            ? null
            : <AddItemForm 
                onSubmit={props.onSubmit}
                handleInputChange={props.handleInputChange} 
                deityType={props.deity.entity} 
            />}
            </div>
        </div>
    )
};

export default CreateGodView;