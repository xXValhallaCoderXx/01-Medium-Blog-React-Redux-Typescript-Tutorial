import React, { Component } from 'react';
import CreateGodView from '../components/CreateGodView'
import { Valkyrie, Aesir, Einherjar, NorseGods } from '../models';
import { listOfNorseGods } from '../data/sampleData';

export type ValhallaBeing = Valkyrie | Aesir | Einherjar;


export interface GodInfoContainerState {
    godsList: ['valkyrie', 'einjerhar', 'aesir'];
    godType: Valkyrie | Aesir | Einherjar;
    formValues: string[]
}


class GodInfoContainer extends React.Component<{}, GodInfoContainerState> {
    constructor() {
        super();
        this.state = {
            godsList: ['valkyrie', 'einjerhar', 'aesir'],
            godType: {} as Valkyrie | Aesir | Einherjar,
            formValues: []
        }
    }
    render(): JSX.Element {
        console.log('THJE STATE', this.state)
        return <CreateGodView
            {...this.state}
            handleInputChange={(e: any) => this.handleInputChange(e)}
            onSubmit={(e: any) => this.onSubmit(e)}
            handleOnDropDownChange={(e: string) => this.handleOnDropDownChange(e)} />;
    }

    onSubmit(e: any){
        e.preventDefault();
        console.log('SUBMIT')
        switch(this.state.godType.entity){
            case 'valkyrie':
                console.log('HITTING HERE')
                this.setState({
                    godType: {
                        id: Math.floor(Math.random() * 1000) + 1,
                        entity: "valkyrie",
                        saved: 100,
                        name: "test"
                    }
                }, () => {
                    listOfNorseGods.push(this.state.godType);
                    console.log('ADDED ', listOfNorseGods)
                });

                break;
            case 'aesir':
                break;
            case 'einherjar':
                break;

        }
    }

    handleInputChange(e: any){
        this.setState({
            formValues: {
                ...this.state.formValues,
                [e.target.name]: e.target.value
            }
        })
    }

    handleOnDropDownChange(e: string) {
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