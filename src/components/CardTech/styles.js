import styled from "styled-components";

export const StyledTechList = styled.ul`
    padding: 16px 19px;
    gap: 16px;
    background-color: var(--color-grey-3);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2, span{
        transition: .5s;
    }

    & > li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding: 16px;
        border-radius: 4px;

        background-color: var(--color-grey-4);
        cursor: pointer;
        transition: .5s;
        
        :hover{
            background-color: var(--color-grey-2);
            & > h2, span{
                background-color: var(--color-grey-2);
            }
        }


    }


`