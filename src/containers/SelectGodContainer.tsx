import React, { Component } from 'react';
import SelectedGodView from '../components/SelectGodView'
import { Valkyrie, Aesir, Einherjar, NorseGods } from '../models';
import { listOfNorseGods } from '../data/sampleData';

export type ValhallaBeing = Valkyrie | Aesir | Einherjar;


export interface GodInfoContainerState {
    selectedGod: {};
    godsList: NorseGods[];
}


class GodInfoContainer extends React.Component<{}, GodInfoContainerState> {
<<<<<<< HEAD:src/containers/SelectGodContainer.tsx
    constructor() {
=======
    public constructor() {
>>>>>>> a79d8cfff76e86144c487103ad137c696ca8f7af:src/containers/GodInfoContainer.tsx
        super();
        this.state = {
            selectedGod: {},
            godsList: listOfNorseGods
        }
    }
<<<<<<< HEAD:src/containers/SelectGodContainer.tsx
    render(): JSX.Element {
        return <SelectedGodView
=======
    public render() {
        return <GodInfoView
>>>>>>> a79d8cfff76e86144c487103ad137c696ca8f7af:src/containers/GodInfoContainer.tsx
            {...this.state}
            handleOnDropDownChange={(e: string) => this.handleOnDropDownChange(e)} />;;
    }

    handleOnDropDownChange(e: string) {
<<<<<<< HEAD:src/containers/SelectGodContainer.tsx
        console.log('WHAT IS E', e)
        const value: any = this.state.godsList.filter(item => {
            return item.name == e
=======
        const value: any = this.state.godsList.filter(item => {
            return item.entity == e
>>>>>>> a79d8cfff76e86144c487103ad137c696ca8f7af:src/containers/GodInfoContainer.tsx
        })

        this.setState({ selectedGod: value[0] });
        this.selectedBeing(value[0]);
    }

    selectedBeing(norseGod: ValhallaBeing) {
        switch (norseGod.entity) {
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

export default GodInfoContainer;