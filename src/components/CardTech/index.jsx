import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledTitles } from "../../styles/typographies";
import { StyledTechList } from "./styles";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { UserContext } from "../../contexts/UserContext";

export const CardTech = () => {
    
    const { removeTechProfile, setIdEdit } = useContext(TechContext);
    const { techsUser } = useContext(UserContext)

    if (techsUser) {
        return (
            <StyledTechList>
                {techsUser.map((tech) => (

                <li key={tech.id}>
                    <StyledTitles typography="titleTwo">{tech.title}</StyledTitles>
                    <StyledTitles typography="headline">{tech.status}</StyledTitles>

                    <div>
                    <RiEdit2Fill
                        id={tech.id}
                        onClick={(event) => setIdEdit(event.currentTarget.id)}
                    />
                    <MdDelete
                        id={tech.id}
                        onClick={(event) => removeTechProfile(event.currentTarget.id)}
                    />
                    </div>

                </li>
                ))}
            </StyledTechList>
        );
    } else {
        return (

            <StyledTitles typography="titleTwo">
                Você ainda não possui tecnologias cadastradas :({" "}
            </StyledTitles>
        );
    }
};