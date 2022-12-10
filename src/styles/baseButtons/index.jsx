import React from "react";

export const baseButtons = ({howUse, className}) => {
    return(
        <>
            {howUse === "entry" && <button className={className} type="submit">Entrar</button>}
            {howUse === "goRegister" && <button className={className}>Cadastre-se</button>}
            {howUse === "newRegister" && <button type="submit" className={className}>Cadastrar</button>}
            {howUse === "newRegisterTech" && <button type="submit" className={className}>Cadastrar Tecnologia</button>}
            {howUse === "return" && <button type="submit" className={className}>Voltar</button>}
        </>
    )
}