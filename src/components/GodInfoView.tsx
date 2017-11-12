import React from "react";
import { NorseGods } from '../models';

interface GodInfoViewProps {
    handleOnDropDownChange: (e: string) => void;
    test: object;
    godsList: NorseGods[];
}

type ComponentProps = GodInfoViewProps

const GodInfoView = (props: ComponentProps) => {
    return (
        <div>
            <h3>Choose Thy Being Of Valhalla</h3>
            <select onChange={(e) => props.handleOnDropDownChange(e.currentTarget.value)}>
            {props.godsList.map((key) => { 
                return <option key={key.id}>{(key.entity)}</option>
            })}
            </select>
        </div>
    )
};

export default GodInfoView;