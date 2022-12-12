import React, { CSSProperties } from "react"
import { Container, ContainerLoaderDash } from "./styles"
import { PropagateLoader, RingLoader } from "react-spinners";

export const Loader = () => {

    const override: CSSProperties = {

        display: "block",
        margin: "0 auto",
        borderColor: "red",

      };

    return(

        <Container>
            <PropagateLoader size="15px" color="#FF577F" loading={true} speedMultiplier={1} cssOverride={override} />
        </Container>

    )
};

export const LoaderDash = () => {
    const override: CSSProperties = {

        display: "block",
        margin: "0 auto",
        borderColor: "red",

      };

    return(

        <ContainerLoaderDash>
            <RingLoader size="200px" color="#FF577F" loading={true} speedMultiplier={1} cssOverride={override} />
        </ContainerLoaderDash>

    )
};