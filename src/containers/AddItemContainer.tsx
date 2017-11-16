import React, { Component } from 'react';
import AddItemView from '../components/AddItemView'
import { Valkyrie, Aesir, Einherjar, NorseGods } from '../models';
import { listOfNorseGods } from '../data/sampleData';

export type ValhallaBeing = Valkyrie | Aesir | Einherjar;


export interface GodInfoContainerState {
    addedGodsList: NorseGods[]
    godTypesList: ['valkyrie', 'einjerhar', 'aesir'];
    godType: Valkyrie | Aesir | Einherjar;
    formValues: string[] | any
}


class AddItemContainer extends React.Component<{}, GodInfoContainerState> {
    constructor() {
        super();
        this.state = {
            godTypesList: ['valkyrie', 'einjerhar', 'aesir'],
            godType: {} as Valkyrie | Aesir | Einherjar,
            formValues: [],
            addedGodsList: listOfNorseGods
        }
    }
    render(): JSX.Element {
        return <AddItemView 
            {...this.state}
            handleInputChange={(e: any) => this.handleInputChange(e)}
            onSubmit={(e: any) => this.onSubmit(e)}
            handleOnDropDownChange={(e: string) => this.handleOnDropDownChange(e)} />;
    }

    onSubmit(e: any){
        e.preventDefault();
        switch(this.state.godType.entity){
            case 'valkyrie':
                this.setState({
                    godType: {
                        id: Math.floor(Math.random() * 1000) + 1,
                        entity: this.state.godType.entity,
                        saved: this.state.formValues.saved,
                        name: this.state.formValues.godName
                    }
                }, () => listOfNorseGods.push(this.state.godType));
                break;
            case 'aesir':
                this.setState({
                    godType: {
                        id: Math.floor(Math.random() * 1000) + 1,
                        entity: this.state.godType.entity,
                        protected: this.state.formValues.protected,
                        name: this.state.formValues.godName
                    }
                }, () => listOfNorseGods.push(this.state.godType));
                break;
            case 'einherjar':
                this.setState({
                    godType: {
                        id: Math.floor(Math.random() * 1000) + 1,
                        entity: this.state.godType.entity,
                        slain: this.state.formValues.slain,
                        name: this.state.formValues.godName
                    }
                }, () => listOfNorseGods.push(this.state.godType));
                break;
        }
        this.setState({ formValues: []})
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
                break;
            case 'aesir':
                this.setState({ godType: { entity: "aesir"} as Aesir})
                break;
            case 'einjerhar':
                this.setState({ godType: { entity: "einherjar"} as Einherjar})
                break;
        }
    }

};

export default AddItemContainer;