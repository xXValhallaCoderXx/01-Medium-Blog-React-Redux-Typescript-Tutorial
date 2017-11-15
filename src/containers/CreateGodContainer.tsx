import React, { Component } from 'react';
import CreateGodView from '../components/CreateGodView'
import { Valkyrie, Aesir, Einherjar, NorseGods } from '../models';
import { listOfNorseGods } from '../data/sampleData';

export type ValhallaBeing = Valkyrie | Aesir | Einherjar;


export interface GodInfoContainerState {
    godsList: ['valkyrie', 'einjerhar', 'aesir'];
    godType: ValhallaBeing | any;
}


class GodInfoContainer extends React.Component<{}, GodInfoContainerState> {
    constructor() {
        super();
        this.state = {
            godsList: ['valkyrie', 'einjerhar', 'aesir'],
            godType: {} as ValhallaBeing
        }
    }
    render(): JSX.Element {
        return <CreateGodView
            {...this.state}
            handleOnDropDownChange={(e: string) => this.handleOnDropDownChange(e)} />;;
    }


    handleOnDropDownChange(e: string) {
        console.log('SELECTED: ', e)
        switch (e) {
            case 'valkyrie':
                this.setState({ godType: {} as Valkyrie})
                console.log('YOU HAVE SELECTED THE VALKYRIE')
                break;
            case 'aesir':
                console.log('YOU HAVE SELECTED THE AESIR')
                break;
            case 'einherjar':
                console.log('YOU HAVE SELECTED THE EINHERJAR')
                break;
        }
    }

};

export default GodInfoContainer;