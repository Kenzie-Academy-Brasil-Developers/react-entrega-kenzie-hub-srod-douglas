import React from "react";

export const baseButtons = ({howUse, className}) => {
    return(
        <>
            {howUse === "entry" && <button className={className} type="submit">Entrar</button>}
            {howUse === "goRegister" && <button className={className}>Cadastre-se</button>}
            {howUse === "newRegister" && <button className={className}>Cadastrar</button>}
            {howUse === "return" && <button type="submit" className={className}>Voltar</button>}
        </>
    )
}