/* eslint-disable default-case */
import styled, { css } from "styled-components";
import baseTitles from "./baseTitles";

const StyledTitles = styled(baseTitles)`
    ${({typography}) =>{

        switch(typography){
            case "titleOne":
                return css`
                font-size: var(--font-size-1);
                font-weight: var(--font-weight-bold);
                line-height: 28px;
                color: var(--color-grey-0);
                `
        }
    }}
`

export default StyledTitles