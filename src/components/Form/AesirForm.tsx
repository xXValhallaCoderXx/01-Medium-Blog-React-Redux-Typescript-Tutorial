import React from "react";

interface ComponentProps {
    onSubmit: (e: any) => void;
}

const AesirForm = (props: ComponentProps): JSX.Element => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name: </label>
            <input type="text" placeholder="Enter name..." />
        </form>
    );
};

export default AesirForm;