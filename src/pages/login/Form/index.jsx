import React from "react";
import StyledButtons from "../../../styles/buttons";
import StyledTitles from "../../../styles/typographies";
import StyledFormLogin from "./styles";

const FormLogin = () => {
    return (
        <>
            <StyledFormLogin>
                <div>
                    <StyledTitles typography="titleOne">Login</StyledTitles>
                </div>
                <label>Email</label>
                <input placeholder="Digite aqui seu email"/>
                <label>Senha</label>
                <input placeholder="Digite aqui sua senha"/>
                <StyledButtons howUse="entry"/>
                <div>
                    <StyledTitles typography="headlineBold">Ainda não possui uma conta?</StyledTitles>
                    <StyledButtons howUse="goRegister"/>
                </div>
            </StyledFormLogin>
        </>
    )
}
export default FormLogin