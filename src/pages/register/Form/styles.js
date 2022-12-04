import styled from "styled-components";
import { keyFadeIn } from "../../../styles/transitions";

export const StyledFormRegister = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    gap: 30px;
    padding: 42px 22px;

    width: 470px;
    max-width:100%;

    border: 1px solid var(--color-grey-3);
    border-radius: 4px;

    background-color: var(--color-grey-3);

    form, h1, span{

        background-color: var(--color-grey-3);

    }

    div{

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: var(--color-grey-3);

        gap: 22px;

        span{

            color: var(--color-grey-1);

        }
    }

    span{

        display: flex;
        width: 100%;

        margin: -10px 0 10px 0;

        color: var(--color-negative);

        font-size: var(--font-size-2);
        transition: ${keyFadeIn} 2s ease-in;

    }
    
    select {

        width: 100%;
        max-width: 446px;
        height: 48px;
        padding: 0 16px;

        border: 1px solid var(--color-grey-2);
        border-radius: 4px;

        background-color: var(--color-grey-2);
        color: var(--color-grey-0);

        font-family: "Inter", sans-serif;
        font-size: var(--font-size-1);
        font-weight: var(--font-regular);

        -webkit-appearance: var(--color-grey-2);

        :focus{

            border: none;
            outline: none;

        }

        option {

            background-color: var(--color-grey-2);
            color: var(--color-grey-0);

        }
    }

    label{

        width: 100%;
        margin-bottom: -10px;

        font-size: var(--font-size-1);
        font-weight: var(--font-weight-regular);

        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
    }
`;

export const StyledMainRegister = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin: 0 auto;
    padding: 0 0 20px 0;

    @media (max-width: 768px){

        section{

            min-width: 320px;
            max-width: 100%;
            padding: 10px;
            
        }
    }
`