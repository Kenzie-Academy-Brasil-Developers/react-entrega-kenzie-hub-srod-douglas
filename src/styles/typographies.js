/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { baseTitles } from "./baseTitles";

export const StyledTitles = styled(baseTitles)`

    ${({typography}) =>{

        switch(typography){

            case "titleOne":

                return css`

                    font-size: var(--font-size-0);
                    font-weight: var(--font-weight-bold);
                    line-height: 28px;

                    color: var(--color-grey-0);

                `

            case "titleTwo":

                return css`

                    font-size: var(--font-size-0);
                    font-weight: var(--font-weight-bold);
                    line-height: 18px;

                    color: var(--color-grey-1);

                `

            case "titleThree":

                return css`

                    font-size: var(--font-size-0);
                    font-weight: var(--font-weight-bold);
                    line-height: 18px;

                    color: var(--color-grey-1);

                `
            case "headline":

                return css`

                    font-size: var(--font-size-1);
                    font-weight: var(--font-weight-regular);
                    line-height: 18px;

                    color: var(--color-grey-1);
                `
            case "headlineBold":

                return css`

                    font-size: var(--font-size-1);
                    font-weight: var(--font-weight-bold);
                    line-height: 18px;

                    color: var(--color-grey-1);

                `
            }
        }
    }
`