/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledHeader = styled.header`

    width: 370px;
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

                        font-size: 200px;
                    }
                `
            case "dashboard":
                return css`
                    a{
                        font-size: 200px;
                    }
                `
            case "login":
                return css`
                    justify-content: center;
                `
        }
    }}


`