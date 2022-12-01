import styled from "styled-components";

export const StyledFormRegister = styled.form`

    label, form, input, h1{
        background-color: var(--color-grey-3);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 22px;
    padding: 42px 22px;


    width: 370px;
    max-width:100%;

    border: 1px solid var(--color-grey-3);
    border-radius: 4px;

    background-color: var(--color-grey-3);

    & > div{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--color-grey-3);
            gap: 22px;
    }

    & > label{

        width: 100%;
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-regular);
        color: var(--color-grey-0);
    }
    
    & > input, select {
        width: 100%;
        max-width: 346px;
        height: 48px;
        padding: 0 16px;
        border: 1px solid var(--color-grey-2);
        border-radius: 4px;
        background-color: var(--color-grey-2);

        font-family: "Inter", sans-serif;
        font-size: var(--font-size-1);
        font-weight: var(--font-regular);

        &::placeholder {
            color: var(--color-grey-1);
        }

    & > select {

    }

  }
`;

export const StyledMainRegister = styled.main`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

   /*  &> div{

    } */
`