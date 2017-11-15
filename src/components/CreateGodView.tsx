import React from "react";
import { NorseGods } from '../models';
import { GodInfoContainerState } from '../containers/CreateGodContainer';
import { AesirForm, ValkyrieForm, EinjerharForm } from './Form';

interface GodInfoViewProps {
    handleOnDropDownChange: (e: string) => void;
    onSubmit: (e: any) => void;
    handleInputChange: (i: any, e: any) => any;
}

type ComponentProps = GodInfoViewProps & GodInfoContainerState

const CreateGodView = (props: ComponentProps): JSX.Element => {

    function handleRenderForm(){
        switch(props.godType.entity){
            case 'valkyrie':
                return <ValkyrieForm onSubmit={props.onSubmit} handleInputChange={props.handleInputChange} />
            case 'aesir':
                return <AesirForm onSubmit={props.onSubmit} />
            case 'einherjar':
                return <EinjerharForm onSubmit={props.onSubmit} />
        }
    }

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
            {handleRenderForm()}
        </div>
    )
};

export default CreateGodView;