import React, { Component } from 'react';
import CreateGodView from '../components/CreateGodView'
import { Valkyrie, Aesir, Einherjar, NorseGods } from '../models';
import { listOfNorseGods } from '../data/sampleData';

export type ValhallaBeing = Valkyrie | Aesir | Einherjar;


export interface GodInfoContainerState {
    godsList: ['valkyrie', 'einjerhar', 'aesir'];
    godType: Valkyrie | Aesir | Einherjar;
}


class GodInfoContainer extends React.Component<{}, GodInfoContainerState> {
    constructor() {
        super();
        this.state = {
            godsList: ['valkyrie', 'einjerhar', 'aesir'],
            godType: {} as Valkyrie | Aesir | Einherjar
        }
    }
    render(): JSX.Element {
        return <CreateGodView
            {...this.state}
            onSubmit={(e: any) => this.onSubmit(e)}
            handleOnDropDownChange={(e: string) => this.handleOnDropDownChange(e)} />;
    }

    onSubmit(e: any){
        e.preventDefault();
        console.log('SUBMIT', e)
    }

    handleOnDropDownChange(e: string) {
        console.log('SELECTEDzzz: ', e)
        switch (e) {
            case 'valkyrie':
                this.setState({ godType: { entity: "valkyrie"} as Valkyrie})
                console.log('YOU HAVE SELECTED THE VALKYRIE')
                break;
            case 'aesir':
                this.setState({ godType: { entity: "aesir"} as Aesir})
                console.log('YOU HAVE SELECTED THE AESIR')
                break;
            case 'einjerhar':
                this.setState({ godType: { entity: "einherjar"} as Einherjar})
                console.log('YOU HAVE SELECTED THE EINHERJAR')
                break;
        }
    }

};

export default GodInfoContainer;