import React from "react";

interface ComponentProps {
    onSubmit: (e: any) => void;
}

const Einjerhar = (props: ComponentProps): JSX.Element => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name: </label>
            <input type="text" placeholder="Enter Einjerhar name..." />
        </form>
    );
};

export default Einjerhar;