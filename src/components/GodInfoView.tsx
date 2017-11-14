import React from "react";
import { CounterContainerState } from '../containers/CounterContainer';

interface GodInfoProps {
    selectedGod: {
        [key: string]: any;
    };
}

type ComponentProps = GodInfoProps;

const GodInfoView = (props: ComponentProps): JSX.Element => {
    const { selectedGod } = props;

    function renderGodInfo(){
        return Object.keys(selectedGod).map(function(key, index) {
            return <div key={index}><label>{key}: </label>{selectedGod[key]}</div>
         });
    }

    return (
        <div>
            {renderGodInfo()}            
        </div>
    );
};

export default GodInfoView;