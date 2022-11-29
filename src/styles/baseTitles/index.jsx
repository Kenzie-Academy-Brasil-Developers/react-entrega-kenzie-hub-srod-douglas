import React from "react";


const baseTitles = ({typography, className, children}) => {
    return(
        <>
        {typography === "titleOne" && <h1 className={className}>{children}</h1>}
        {typography === "titleTwo" && <h2 className={className}>{children}</h2>}
        {typography === "titleThree" && <h3 className={className}>{children}</h3>}

        {typography === "headline" && <span className={className}>{children}</span>}
        {typography === "headlineBold" && <p className={className}>{children}</p>}
        {typography === "headlineItalic" && <span className={className}>{children}</span>}
        </>
    )
}   

export default baseTitles