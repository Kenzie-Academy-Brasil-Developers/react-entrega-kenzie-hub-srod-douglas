import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledTitles } from "../../styles/typographies";
import { Input } from "../Input";
import { StyledContainerModal } from "./styles";
import { RiCloseCircleFill } from 'react-icons/ri'
import { StyledButtons } from "../../styles/buttons";
export const ModalRegisterTech = () => {
  const { isOpen, setIsOpen } = useContext(TechContext);


  return(
    <StyledContainerModal>
      <div>
        <div>
          <StyledTitles typography="titleTwo">Cadastrar Tecnologia</StyledTitles>
          <RiCloseCircleFill onClick={() => setIsOpen(false)} />
        </div>
        <Input
          label="Nome"
          placeholder="Insira o nome da tecnologia"
          type="text"
          id="inputTech" /* register={...register()} */
        />
        <fieldset>
          <label htmlFor="optionTech">Selecionar Status</label>
          <select id="optionTech" name="optionTech">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </fieldset>
        <StyledButtons howUse="newRegisterTech" />
      </div>
    </StyledContainerModal>
  );
};

export const ModalDetailsTech = () => {
  return <></>;
};
