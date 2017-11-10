import React from 'react'
import Stateless from './Stateless';

interface HelloWorldProps {
    name: string;
}

interface HelloWorldState {
    componentState: number;
}

export class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {
    constructor(props: HelloWorldProps) {
        super(props);
        this.state = {
            componentState: 100,
        };
    }
    render() {
        return (
            <div>
                <h1>Basic Application</h1>
                <h3>Hello  {this.props.name}</h3>
                <hr/>
                <Stateless norseGod="Odin" numberOfSons={4} />
            </div>
        );
    }
};