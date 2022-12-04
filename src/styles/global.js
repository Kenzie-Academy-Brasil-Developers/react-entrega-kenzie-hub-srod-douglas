import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        list-style: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;

        cursor: default;

        background-color: var(--color-grey-4);
    }

    a{

        text-decoration: none;

        color: var(--color-grey-1);

        cursor: pointer;
        transition: .5s;

    }

    :root{

        --color-white: #fff;

        --color-grey-0:#F8F9FA;
        --color-grey-1:#868E96;
        --color-grey-2:#343B41;
        --color-grey-3:#212529;
        --color-grey-4:#121214;

        --color-success:#3FE864;
        --color-negative:#E83F5B;

        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;

        --font-size-0: 1.125rem;
        --font-size-1: 1rem;
        --font-size-2: 0.75rem;

        --font-weight-bold: 700;
        --font-weight-regular: 400;

    }
`
export default GlobalStyle