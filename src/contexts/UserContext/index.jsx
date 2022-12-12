import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userPersist, setUserPersist] = useState(false);
    const token = window.localStorage.getItem("@TOKEN:");
    const [techsUser, setTechsUser] = useState(null)
    const navigate = useNavigate();
    
    useEffect(() => {
        (async () => {
            if(token) {
                try{
                    const response = await api.get('profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    setUser(response.data)
                    setTechsUser(response.data.techs)
                    setUserPersist(true)
                    navigate('/dashboard')

                }catch(error){
                    console.log(error)
                }finally{
                    setUserPersist(false)
                }

            }else{
                setUser(false)
                setUserPersist(false)
                return navigate('/login')
            }
        })();
    }, []);

    const onSubmitForm = (data) => {
        (async () => {
            try {
                const response = await api.post("sessions", data);
                    setLoading(true)
                    toast.success("Login efetuado com sucesso!")
                    setUser(response.data.user);
                    setTechsUser(response.data.user.techs)
                    window.localStorage.clear();
                    window.localStorage.setItem("@TOKEN:", response.data.token);
                    window.localStorage.setItem("@USERID:", response.data.user.id);
                    navigate('/dashboard')

    
            } catch (error) {
                toast.error("Senha ou Email incorreto, tente novamente!")
                console.log(error);
            } finally {
                    setLoading(false)
            };
        })();
    };

    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading, onSubmitForm, userPersist, token, setTechsUser, techsUser }}>
            {children}
        </UserContext.Provider>
    )
};