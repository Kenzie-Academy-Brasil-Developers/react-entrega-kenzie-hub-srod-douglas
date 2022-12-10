import { createContext, useState } from "react";
import { ModalComponent } from "../../components/Modal";



export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    return (
        <TechContext.Provider value={{ isOpen, setIsOpen }} >
            {children}
        </TechContext.Provider>
    )
}