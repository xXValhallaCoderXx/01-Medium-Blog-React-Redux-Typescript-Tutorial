import React from "react";
import { NorseGods } from '../models';
import GodInfoView from './GodInfoView';

interface GodInfoViewProps {
    handleOnDropDownChange: (e: string) => void;
    godsList: NorseGods[];
    selectedGod: {};
}

type ComponentProps = GodInfoViewProps

const SelectGodView = (props: ComponentProps): JSX.Element => {
    return (
        <div>
            <h3>Choose Thy Being Of Valhalla</h3>
            <select onChange={(e) => props.handleOnDropDownChange(e.target.value)}>
            {props.godsList.map((key) => { 
                return <option key={key.id}>{(key.name)}</option>
            })}
            </select>

            {Object.keys(props.selectedGod).length === 0
            ? null
            : <GodInfoView selectedGod={props.selectedGod} />}
        </div>
    )
};

export default SelectGodView;