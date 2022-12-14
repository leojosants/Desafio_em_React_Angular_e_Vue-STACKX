import styled from "styled-components";

export const Container = styled.div`

 div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
        color: white;
        width: 8.3rem;
        height: 3.1rem;
        border-radius: .5rem;
        border: none;
        background-color: var(--shark);
        margin: 0 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            margin-right: .3rem;
        }

        p {
            font-size: 1rem;
            font-weight: 600;
        }
    }

 }`;
