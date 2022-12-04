import styled from "styled-components";
import { keyFadeIn } from "../../styles/transitions";

export const Fade = styled.div`
    animation: ${keyFadeIn} .5s ease-in;
`

export const MainDashboard = styled.main`
    display: flex;
    margin: 0 29%;
`

export const SectionUser = styled.section`

    display: flex;
    justify-content: space-around;
    align-items: center;

    border-top: 1px solid var(--color-grey-1);
    border-bottom: 1px solid var(--color-grey-1);

    height: 100px;
    

    width: 100%;

    @media(max-width: 767px){

        flex-direction: column;
        align-items: flex-start;

        padding: 35px 12px;

    }

`

export const SectionInfos = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 20px;

    width: 59%;
    height: 200px;

    margin: 0 auto;

    @media(max-width: 767px){

        display: none;
        
    }
`