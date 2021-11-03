import React from "react";
import { dragons } from "./mock-data";
import Dragon from "./Dragon";

const Dragons: React.FC = (): JSX.Element => {
    return (
        <div>
            {dragons.map((dragon) => {
                return <Dragon dragon={dragon} />;
            })}
        </div>
    );
};

export default Dragons;
