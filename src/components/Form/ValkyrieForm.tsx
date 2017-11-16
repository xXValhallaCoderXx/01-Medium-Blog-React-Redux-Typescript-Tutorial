import React from "react";

interface ComponentProps {
    onSubmit: (e: any) => void;
    handleInputChange: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Valkyrie = (props: ComponentProps): JSX.Element => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name: </label>
            <input type="text" name="Name" placeholder="Enter Valkyrie name..." onChange={(e: React.SyntheticEvent<EventTarget>) => props.handleInputChange(e)} />
            <input type="number" name="Saved" placeholder="Enter Saved..." onChange={(e: React.SyntheticEvent<EventTarget>) => props.handleInputChange(e)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Valkyrie;