import React, { Component } from 'react';
import AddItemView from '../components/AddItemView'
import { Valkyrie, Aesir, Einherjar, Deity } from '../models';
import { deities } from '../data/sampleData';

// Make use of the TS 'Union Type' this allows DeityType to be Valkyire, Aesir or Einherjar
export type DeityType = Valkyrie | Aesir | Einherjar;


export interface GodInfoContainerState {
    totalDeities: Deity[] // List of all deities added
    deityChoice: ['valkyrie', 'einjerhar', 'aesir']; // Choice options we have
    deity: Valkyrie | Aesir | Einherjar; // Defining a model for what properties a deity will have
    formValues: string[] | any // Expecting an array of String, since the properties are unknown added 'any' as union type
}


class AddItemContainer extends React.Component<{}, GodInfoContainerState> {
    constructor() {
        super();
        this.state = {
            deityChoice: ['valkyrie', 'einjerhar', 'aesir'],
            deity: {} as Valkyrie | Aesir | Einherjar, // Instiate as an empty object - with type of Valkyrie, Aesir or Einherjar
            formValues: [],
            totalDeities: deities // Populate totalDeities with our sample data
        }
    }
    render(): JSX.Element {
        console.log('TOTAL DEITIES: ', deities);
        return <AddItemView 
            {...this.state}
            handleInputChange={(e: any) => this.handleInputChange(e)}
            onSubmit={(e: any) => this.onSubmit(e)}
            handleOnDropDownChange={(deityType: string) => this.handleOnDropDownChange(deityType)} />;
    }

    handleOnDropDownChange(deityType: string) {
        // On dropdown - We set deity as a specific Type of Valkyrie, Aesir or Einherjar
        switch (deityType) {
            case 'valkyrie':
                this.setState({ deity: { entity: "valkyrie"} as Valkyrie})
                break;
            case 'aesir':
                this.setState({ deity: { entity: "aesir"} as Aesir})
                break;
            case 'einjerhar':
                this.setState({ deity: { entity: "einherjar"} as Einherjar})
                break;
        }
    }

    // On Inpute change, depending on which Input Element is changed we will add it to the form values array
    handleInputChange(e: any){
        this.setState({
            formValues: {
                ...this.state.formValues,
                [e.target.name]: e.target.value
            }
        })
    }

    // On form submit - Depening in Deity type - Add values to state then insert in our array of deities
    onSubmit(e: any){
        e.preventDefault();
        switch(this.state.deity.entity){
            case 'valkyrie':
                this.setState({
                    deity: {
                        id: Math.floor(Math.random() * 1000) + 1,
                        entity: this.state.deity.entity,
                        saved: this.state.formValues.saved,
                        name: this.state.formValues.godName
                    }
                }, () => deities.push(this.state.deity));
                break;
            case 'aesir':
                this.setState({
                    deity: {
                        id: Math.floor(Math.random() * 1000) + 1,
                        entity: this.state.deity.entity,
                        protected: this.state.formValues.protected,
                        name: this.state.formValues.godName
                    }
                }, () => deities.push(this.state.deity));
                break;
            case 'einherjar':
                this.setState({
                    deity: {
                        id: Math.floor(Math.random() * 1000) + 1,
                        entity: this.state.deity.entity,
                        slain: this.state.formValues.slain,
                        name: this.state.formValues.godName
                    }
                }, () => deities.push(this.state.deity));
                break;
        }       
    }

    // This Function does not do anything, but I  wanted to display another use for types
    selectedBeing(deity: DeityType) {
        // Since we have defined what kind of deities we can have
        // If we type a case for something other than we have define we will get an error
        switch (deity.entity) {
            case 'valkyrie':
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

export default AddItemContainer;