import styled from "styled-components";

export const StyledContainerModal = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    top: -2rem;
    left: 0;

    background-color: rgba(0,0,0, .6);

    display: flex;
    flex-direction: column;

    z-index: 2;
    
    div {
        display: flex;
        flex-direction: column;

        width: 370px;
        gap: 24px;
        padding: 12px 20px;
        margin: auto;

        background-color: var(--color-grey-3);
        border-radius: 4px;

        & > h2 {
            color: var(--color-grey-0);
            background-color: var(--color-grey-2);
        }

        & > svg {
            width: 25px;
            height: 25px;

            color: var(--color-grey-4);
            background-color: var(--color-grey-2);

            cursor: pointer;
            transition: .5s;
            opacity: .5;

            &:hover{
                opacity: 1;
                cursor: pointer;
            }
        }

        & > form{
            background-color: var(--color-grey-3);
        }

        & > form > fieldset, label {
            background-color: var(--color-grey-3);
            border: none;

            gap: 10px;
        }

        & > form > fieldset{
            display: flex;
            flex-direction: column;

            background-color: var(--color-grey-3);
            color: #fff;

            width: 100%;

            margin-bottom: 1rem;

            & > select {
                height: 44px;
                padding: 12px;

                font-size: var(--font-size-1);

                color: var(--color-grey-0);
                background-color: var(--color-grey-2);

                & > option{
                    background-color: var(--color-grey-3);
                }
            }
        }
    }

    div > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        height: 50px;
        margin: -12px 0 0 0;
        background-color: var(--color-grey-2);
    }
`