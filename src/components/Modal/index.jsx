import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledTitles } from "../../styles/typographies";
import { Input } from "../Input";
import { StyledContainerModal } from "./styles";
import { RiCloseCircleFill } from 'react-icons/ri'
import { StyledButtons } from "../../styles/buttons";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"


export const ModalRegisterTech = () => {

  const { setIsOpen, addTechProfile } = useContext(TechContext);

  const formAddTechSchema = yup.object().shape({
    title: yup.string().required().min(3)
});

const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formAddTechSchema),
})

  return(

    <StyledContainerModal>

      <div>

        <div>
          <StyledTitles typography="titleTwo">Cadastrar Tecnologia</StyledTitles>
          <RiCloseCircleFill onClick={() => setIsOpen(false)} />
        </div>

        <form onSubmit={handleSubmit(addTechProfile)}>
          <Input
            label="Nome"
            placeholder="Insira o nome da tecnologia"
            type="text"
            id="title" 
            register={register("title")}
          />
          {errors.title?.message && (
            <span aria-label={errors.title.message}>
              {errors.title.message}
            </span>
          )}

          <fieldset>
            <label htmlFor="status">Selecionar Status</label>
            <select id="status" name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>

          <StyledButtons howUse="newRegisterTech" />

        </form>

      </div>
    </StyledContainerModal>
  );
};

export const ModalEditTech = () => {

  const { editTechProfile, setIdEdit } = useContext(TechContext);


  const formEditTechSchema = yup.object().shape({
    status: yup.string(),
});

const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formEditTechSchema),
})

  return(

    <StyledContainerModal>

      <div>

        <div>
          <StyledTitles typography="titleTwo">Editar Tecnologia</StyledTitles>
          <RiCloseCircleFill onClick={() => setIdEdit(false)} />
        </div>

        <form onSubmit={handleSubmit(editTechProfile)}>
          <Input disabled={true}
            label="Nome:"
            placeholder="Insira o nome da tecnologia"
            type="text"
            id="title" 
            register={register("title")}
          />

          <fieldset>
            <label htmlFor="status">Selecionar Status:</label>
            <select id="status" name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>

          <StyledButtons howUse="saveEdits" />

        </form>

      </div>
    </StyledContainerModal>
  );
};