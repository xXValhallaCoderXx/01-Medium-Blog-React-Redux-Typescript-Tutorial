import React from "react";
import { NorseGods } from '../models';

interface GodInfoViewProps {
    handleOnDropDownChange: (e: string) => void;
    godsList: NorseGods[];
}

type ComponentProps = GodInfoViewProps

const GodInfoView = (props: ComponentProps): JSX.Element => {
    return (
        <div>
            <h3>Choose Thy Being Of Valhalla</h3>
            <select onChange={(e) => props.handleOnDropDownChange(e.target.value)}>
            {props.godsList.map((key) => { 
                return <option key={key.id}>{(key.entity)}</option>
            })}
            </select>
        </div>
    )
};

export default GodInfoView;