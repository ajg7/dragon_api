import React from "react";
import { DragonInfo } from "./mock-data";
import { DragonCard } from "./styles";

interface DragonProps {
    dragon: DragonInfo;
}

const Dragon: React.FC = (props: DragonProps): JSX.Element => {
    const { dragon } = props;
    return (
        <DragonCard color={dragon.scaleColor}>
            <p>{dragon.name}</p>
            <p>{dragon.size}</p>
            <p>{dragon.title}</p>
            <p>{dragon.element}</p>
        </DragonCard>
    );
};

export default Dragon;
