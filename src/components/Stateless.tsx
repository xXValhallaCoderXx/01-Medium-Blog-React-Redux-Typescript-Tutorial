import React from "react";

// DEFINE THE PROPS TYPES
export interface StatelessPropTypes {
    norseGod: string;
    numberOfSons: number;
}

const Message = ({ norseGod, numberOfSons }: StatelessPropTypes) => (
    <div>
        <h4>{norseGod} The Wanderer</h4>
        <div>Has {numberOfSons} Sons</div>
    </div>
);

export default Message;