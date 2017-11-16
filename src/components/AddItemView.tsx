import React from "react";
import { NorseGods } from '../models';
import { GodInfoContainerState } from '../containers/AddItemContainer';
import { AesirForm, ValkyrieForm, EinjerharForm } from './Form';

interface GodInfoViewProps {
    handleOnDropDownChange: (e: string) => void;
    onSubmit: (e: any) => void;
    handleInputChange: (e: any) => void;
}

type ComponentProps = GodInfoViewProps & GodInfoContainerState

const CreateGodView = (props: ComponentProps): JSX.Element => {
    console.log('THESE ARE THE PROPS', props)
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
            {props.godTypesList.map((key) => {
                return <option key={key}>{(key)}</option>
            })}
            </select>
            {handleRenderForm()}
        </div>
    )
};

export default CreateGodView;