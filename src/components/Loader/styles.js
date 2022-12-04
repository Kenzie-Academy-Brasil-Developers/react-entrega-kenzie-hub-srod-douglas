import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    padding: 200px;
`

export const ContainerLoaderDash = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    @media (max-width: 767px) {
        
        width: 50%;
        height: 50%;

        margin-top: 10%;
    }
`