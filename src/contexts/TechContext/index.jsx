import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const token = window.localStorage.getItem("@TOKEN:")
    const { setTechsUser }= useContext(UserContext)
    const [user, setUser] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [idDelete, setIdDelete] = useState(null)
    const [idEdit, setIdEdit] = useState(null)


    const addTechProfile = async (data) => {
        (async() => {
            try {
                    
                await api.post("users/techs", data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                getUserData()
                    toast.success(
                        `A Tecnologia ${data.title} foi adicionada!`
                    );
    
                setIsOpen(false)
            }
            catch (error) {
                if(error.response.status === 401){
                    toast.error("Esta tecnologia já existe no seu perfil!")
                }
            }
        })()
    }

    const editTechProfile = async (data) => {
        (async() => {
            try {
                await api.put(`users/techs/${idEdit}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                getUserData()
                toast.success(
                    `A Tecnologia foi editada!`
                );
            }
            catch (error) {
                console.log(error)
            } finally{
                setIdEdit(false)
            }
        })()
    };

    const removeTechProfile = async (id) => {
        (async() => {
            try {
                await api.delete(`users/techs/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                getUserData()
                toast.success(
                    `A Tecnologia foi removida!`
                );
                setIsOpenDelete(false)
            }
            catch (error) {
                toast.error(error.response.data.message)
            }
        })()
    };

    const getUserData = async () => {
        try {
            const response = await api.get('profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(response.data)

            setTechsUser(response.data.techs)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUserData()
    }, []);

    return (
        <TechContext.Provider value={{user, isOpen, setIsOpen, isOpenDelete, setIsOpenDelete, isOpenEdit, setIsOpenEdit, addTechProfile, removeTechProfile, setIdDelete, idDelete, editTechProfile, setIdEdit, idEdit }} >
            {children}
        </TechContext.Provider>
    )
};