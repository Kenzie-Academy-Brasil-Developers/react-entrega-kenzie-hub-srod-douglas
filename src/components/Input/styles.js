import styled from "styled-components";

export const StyledFieldset = styled.fieldset`

    label, input{

        background-color: var(--color-grey-3);

    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    gap: 20px;

    width: 100%;
    max-width:470px;

    border: 1px solid var(--color-grey-3);
    border-radius: 4px;

    background-color: var(--color-grey-3);

    label {

        width: 100%;

        font-size: var(--font-size-1);
        font-weight: var(--font-weight-regular);

        color: var(--color-grey-0);
    }

    input {

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

        &::placeholder {

            color: var(--color-grey-1);
            border: none;

        }

        &:focus{

            border: 1px solid var(--color-grey-2);
            outline: none;

            background-color: var(--color-grey-2);
            color: var(--color-grey-0);

        }
    }
`;