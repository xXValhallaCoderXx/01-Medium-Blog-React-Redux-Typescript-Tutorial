import React from "react";

interface ComponentProps {
    onSubmit: (e: any) => void;
    handleInputChange: (i: any, e: any) => null;
}

const Valkyrie = (props: ComponentProps): JSX.Element => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name: </label>
            <input type="text" placeholder="Enter Valkyrie name..." onChange={(i: any, e: any) => props.handleInputChange(i, e)} />
        </form>
    );
};

export default Valkyrie;