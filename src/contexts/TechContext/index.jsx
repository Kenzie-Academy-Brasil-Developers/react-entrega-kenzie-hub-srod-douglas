import { createContext, useState } from "react";
import { ModalComponent } from "../../components/Modal";



export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    let subtitle;

    const customStyles = {

        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    function openModal() {
        setIsOpen(true);
        return(
            <ModalComponent/>
        )
      }
    
      function afterOpenModal() {
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }


    return (
        <TechContext.Provider value={{ modalIsOpen, openModal, afterOpenModal, closeModal, customStyles }} >
            {children}
        </TechContext.Provider>
    )
}