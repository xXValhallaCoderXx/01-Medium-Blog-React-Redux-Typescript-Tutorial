import React, { Component } from 'react';
import GodInfoView from '../components/GodInfoView'
import { Valkyrie, Aesir, Einherjar, NorseGods } from '../models';
import { sampleAesir, sampleEinherjar, sampleValk } from '../modelData';

export type ValhallaBeing = Valkyrie | Aesir | Einherjar;

export interface GodInfoContainerState {
    selectedGod: object;
    godsList: NorseGods[];
}

const HOC = (ComposedComponent: /*typeof React.Component*/ any) => class extends Component<{}, GodInfoContainerState> {
    constructor(props: any){
        super(props);
        this.state = {
            selectedGod: {},
            godsList: [sampleAesir, sampleEinherjar, sampleValk]
        }
    }
    render() {
        return <ComposedComponent 
            {...this.state}
            handleOnDropDownChange={(e: string) => this.handleOnDropDownChange(e)}/>;
    }

    handleOnDropDownChange(e: string){
        var value: any = this.state.godsList.filter(item => {
            return item.entity == e
          })

        this.setState({ selectedGod: value[0] });
        this.selectedBeing(value[0]);
    }

    selectedBeing(norseGod: ValhallaBeing){
        switch(norseGod.entity){
            case 'valkyrie':
                console.log('YOU HAVE SELECTED THE VALKYRIE', norseGod)
                break;
            case 'aesir':
                console.log('YOU HAVE SELECTED THE AESIR', norseGod)
                break;
            case 'einherjar':
                console.log('YOU HAVE SELECTED THE EINHERJAR', norseGod)
                break;
        }
    }
};

export default HOC(GodInfoView);