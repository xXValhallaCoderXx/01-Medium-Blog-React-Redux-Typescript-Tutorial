import React from "react";

// DEFINE THE PROPS TYPES
export interface StatelessPropTypes {
    god: string;
    sons: number;
}

const Message = ({ god, sons }: StatelessPropTypes) => (
    <div>
        <h4>{god} The Wanderer</h4>
        <div>Has {sons} Sons</div>
    </div>
);

export default Message;