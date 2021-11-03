export interface DragonInfo {
    name: string;
    scaleColor: string;
    size: number;
    title: string;
    element: string;
}

export const dragons: DragonInfo[] = [
    {
        name: "Galthazar",
        scaleColor: "cyan",
        size: 900,
        title: "Bringer Of Death",
        element: "ice",
    },
    {
        name: "Sygon",
        scaleColor: "red",
        size: 498,
        title: "The Victorious",
        element: "fire",
    },
    {
        name: "Mairaenth",
        scaleColor: "orange",
        size: 324,
        title: "Champion Of The Skies",
        element: "lightning",
    },
    {
        name: "Xiriss",
        scaleColor: "blue",
        size: 1000,
        title: "The Gentleheart",
        element: "water",
    },
    {
        name: "Chainniore",
        scaleColor: "violet",
        size: 234,
        title: "The Deathlady",
        element: "shadow",
    },
];
