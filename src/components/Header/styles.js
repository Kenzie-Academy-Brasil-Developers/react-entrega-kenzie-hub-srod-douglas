/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledHeader = styled.header`

    width: 470px;
    max-width: 100%;
    height: 60px;

    padding: 50px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;



    &>img {

        width: 122px;
        
    }


    ${({page}) => {

        switch(page){

            case "register":
                return css`

                    a{
                        display:flex;
                        align-items: center;
                        justify-content: center;

                        width: 88px;
                        height: 44px;
                        padding: 0 22px;

                        background-color: var(--color-grey-3);
                        color: var(--color-white);

                        border: 1px solid var(--color-grey-3);
                        border-radius: 4px;

                        font-size: var(--font-size-1);
                        font-weight: var(--font-weight-regular);
                    }

                    & > a:hover{

                        background-color: var(--color-grey-2);

                    }

                    @media (max-width: 767px){

                        padding: 50px 10px;

                    }
                `
            case "dashboard":
                return css`
                    
                    width: 100%;

                    display: flex;
                    justify-content: space-around;

                    button{

                        display:flex;
                        align-items: center;
                        justify-content: center;

                        width: 88px;
                        height: 44px;
                        padding: 0 22px;

                        background-color: var(--color-grey-3);
                        color: var(--color-white);

                        border: 1px solid var(--color-grey-3);
                        border-radius: 4px;

                        font-size: var(--font-size-1);
                        font-weight: var(--font-weight-regular);

                        cursor: pointer;
                    }

                    & > button:hover{

                        background-color: var(--color-grey-2);

                    }
                `
            case "login":
                return css`

                    justify-content: center;

                `
            }
        }
    }
`