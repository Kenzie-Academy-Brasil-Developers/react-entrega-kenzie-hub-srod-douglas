import styled from "styled-components";
import { keyFadeIn } from "../../styles/transitions";

export const Fade = styled.div`

    animation: ${keyFadeIn} .5s ease-in;
    
    @media (max-width: 767px){
        main{
            padding: 10px;
        }
    }
`