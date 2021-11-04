import React, { useMemo } from "react";
import { getDragons, dragons, DragonInfo } from "./mock-data";
import Dragon from "./Dragon";

const Dragons: React.FC = (): JSX.Element => {
    const dragonList: Promise<DragonInfo[]> = useMemo(() => getDragons(), []);
    return (
        <div>
            {dragons.map((dragon) => {
                return <Dragon dragon={dragon} />;
            })}
        </div>
    );
};

export default Dragons;
