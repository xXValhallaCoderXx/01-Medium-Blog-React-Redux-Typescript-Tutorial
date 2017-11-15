import React from "react";
import { NorseGods } from '../models';
import { GodInfoContainerState } from '../containers/CreateGodContainer';

interface GodInfoViewProps {
    handleOnDropDownChange: (e: string) => void;
}

type ComponentProps = GodInfoViewProps & GodInfoContainerState

const CreateGodView = (props: ComponentProps): JSX.Element => {
    console.log('THE PROPZ', props)
    return (
        <div>
            <hr />
            <h3>Choose Which Being To Send To Valhalla</h3>
            <select onChange={(e) => props.handleOnDropDownChange(e.target.value)}>
            {props.godsList.map((key) => {
                console.log('WHAT', key)
                return <option key={key}>{(key)}</option>
            })}
            </select>
            <form onSubmit={() => console.log('SUBMIT')}>
    
            
            <button type="submit">Add Norse God</button>
          </form>
        </div>
    )
};

export default CreateGodView;