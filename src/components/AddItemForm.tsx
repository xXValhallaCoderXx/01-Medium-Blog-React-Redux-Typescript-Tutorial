import React from "react";

interface ComponentProps {
    onSubmit: (e: any) => void;
    handleInputChange: (e: React.SyntheticEvent<EventTarget>) => void;
    deityType: string;
}

const TestForm = (props: ComponentProps): JSX.Element => {
    function handleInputName(){
        switch(props.deityType){
            case 'aesir':
                return "protected"
            case 'valkyrie':
                return "saved"
            case 'einherjar':
                return "slain"
        }
    }
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name: </label>
            <input 
                type="text" 
                name="godName" 
                placeholder="Enter name..." 
                onChange={(e: React.SyntheticEvent<EventTarget>) => props.handleInputChange(e)} />
            <br />
            <label>{handleInputName()}: </label>
            <input 
                type="number" name={handleInputName()} 
                placeholder="Enter value..." 
                onChange={(e: React.SyntheticEvent<EventTarget>) => props.handleInputChange(e)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TestForm;