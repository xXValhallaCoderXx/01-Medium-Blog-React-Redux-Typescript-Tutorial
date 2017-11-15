import React from "react";

interface ComponentProps {
    onSubmit: (e: any) => void;
    handleInputChange: (i: any, e: Event) => null;
}

const Valkyrie = (props: ComponentProps): JSX.Element => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name: </label>
            <input type="text" name="name" placeholder="Enter Valkyrie name..." onChange={(e: React.FormEvent<HTMLInputElement>) => console.log(e.currentTarget.value)} />
        </form>
    );
};

export default Valkyrie;