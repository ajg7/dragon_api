import styled from "styled-components";

export const DragonCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    border: 5px ${(props) => props.color} solid;
    margin: 15px;
    padding: 5px;
`;
