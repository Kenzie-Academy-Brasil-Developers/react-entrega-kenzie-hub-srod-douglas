import React from "react";

const baseButtons = ({howUse, isReleased, className}) => {
    return(
        <>
            {howUse === "entry" && <button /* isReleased={isReleased}  */className={className} type="submit">Entrar</button>}
            {howUse === "goRegister" && <button className={className}>Cadastre-se</button>}
            {howUse === "newRegister" && <button type="submit" /* isReleased={isReleased} */ className={className}>Cadastrar</button>}
            {howUse === "return" && <button className={className}>Voltar</button>}
        </>
    )
}
export default baseButtons