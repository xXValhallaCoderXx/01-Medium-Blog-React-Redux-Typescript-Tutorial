import React from "react";

interface ComponentProps {
    onSubmit: (e: any) => void;
}

const Valkyrie = (props: ComponentProps): JSX.Element => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name: </label>
            <input type="text" placeholder="Enter Valkyrie name..." />
        </form>
    );
};

export default Valkyrie;