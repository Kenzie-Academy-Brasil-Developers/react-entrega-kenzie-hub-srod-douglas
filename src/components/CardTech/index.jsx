import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledTitles } from "../../styles/typographies"
import { StyledTechList } from "./styles"

export const CardTech = () => {
    const { user } = useContext(UserContext)


    return (
        <StyledTechList>
            {user.techs.map((tech) => 
                <li>
                    <StyledTitles typography="titleTwo">{tech.title}</StyledTitles>
                    <StyledTitles typography="headline">{tech.status}</StyledTitles>
                </li>
            )}
        </StyledTechList>
    )
}