import React, { Component } from 'react';
import CounterView from '../components/CounterView';
import ErrorMessage from '../components/Error';

export interface CounterContainerState {
    value: number;
    error: boolean;
}

const HOC = (ComposedComponent: any) => class extends Component<{}, CounterContainerState> {
    constructor(props: any){
        super(props);
        this.state = {
            value: 0,
            error: false
        }
    }
    render() {
        return <ComposedComponent 
            {...this.state}
            handleDisplayError={() => this.handleDisplayError()}
            handleIncrease={() => this.handleIncrease()}
            handleDecrease={() => this.handleDecrease()} />;
    }

    handleIncrease(){
        // Increase Counter Function On Click
        const { value } = this.state;
        this.setState({ 
            value: value + 1,
            error: false,
        })
    };

    handleDecrease(){
        // Decrease Counter Function On Click
        const { value } = this.state;
        if(value === 0){
            // If Counter Is 0, Set False to display a message to user
            this.setState({ error: true })
            return null;
        };
        
        this.setState({ 
            value: value - 1,
            error: false,
        })
    };

    handleDisplayError(){
        // If try do decrease counter below 0, error is displayed to user
        const { error } = this.state;
        if(error){
            return <ErrorMessage />
        };
        return null;
    }
};

export default HOC(CounterView);