import React from "react";

export const baseButtons = ({howUse, isReleased, className}) => {
    return(
        <>
            {howUse === "entry" && <button className={className} type="submit">Entrar</button>}
            {howUse === "goRegister" && <button className={className}>Cadastre-se</button>}
            {howUse === "newRegister" && <button type="submit" className={className}>Cadastrar</button>}
            {howUse === "return" && <button className={className}>Voltar</button>}
        </>
    )
}