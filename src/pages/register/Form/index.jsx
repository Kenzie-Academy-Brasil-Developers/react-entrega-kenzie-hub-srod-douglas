import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup"

import { api } from "../../../services/api";

import { Input } from "../../../components/Input";
import { StyledButtons } from "../../../styles/buttons";
import { StyledTitles } from "../../../styles/typographies";
import { StyledFormRegister, StyledMainRegister } from "./styles";

export const FormRegister = () => {

  const navigate = useNavigate();

  const formRegisterSchema = yup.object().shape({

    name: yup.string()
    .required("O nome é obrigatório")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "O nome deve possuir somente letras.")
    .min(3, "O nome deve possuir pelo menos 3 caracteres.")
    .max(150, "O nome deve possuir no máximo 150 caracteres."),

    email: yup.string()
    .required("Email é obrigatório")
    .email("O email digitado é inválido."),

    password: yup.string()
    .required("A senha é obrigatória")
    .matches(/(?=.*?[a-z])(?=.*?[A-Z])/, "A senha deve possuir pelo menos uma letra.")
    .matches(/(?=.*?[0-9])/, "A senha deve possuir pelo menos um número.")
    .matches(/(?=.*?[#?!@$%^&*-])/, "A senha deve possuir pelo menos um caractere especial. Ex:'#, !, @, %...'")
    .min(8, "A senha deve possuir no mínimo 8 caracteres.")
    .max(25, "A senha deve possuir no máximo 25 caracteres."),

    passwordConfirm: yup.string().oneOf([yup.ref("password")], "As senhas não conferem"),

    bio: yup.string().required("A bio é obrigatória.")
    .min(3, "A bio deve possuir pelo menos 3 caracteres.")
    .max(200, "A bio deve possuir no máximo 200 caracteres."),

    contact: yup.string().required("A informação de contato é obrigatória.")
    .min(8, "A informação de contato deve possuir pelo menos 8 caracteres.")
    .max(100, "A informação de contato deve possuir no máximo 100 caracteres."),

    course_module: yup.string().required("Selecione um módulo para cadastrar."),

})

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({

  mode: "onBlur",
  resolver: yupResolver(formRegisterSchema),

});

  const onRegisterSubmit = (data) => {

    const { name, email, password, bio, contact, course_module } = data;
    const newData = { name, email, password, bio, contact, course_module };


    (async () => {

      try {
        
        const response = await api.post("users", newData);

        toast.success(

          "Cadastro efetuado com sucesso! Aguarde enquanto redirecionamos ao login."
        );

        setTimeout(() => {

          navigate("/login");

        }, 3000);

      } catch (error) {

        toast.error(error.response.data.message)

      }
    })();
  };

  return (

    <StyledMainRegister>
      <section>
        <StyledFormRegister
          onSubmit={handleSubmit(onRegisterSubmit)}
          noValidate
          autoComplete="off"
        >
          
          <div>
            <StyledTitles typography="titleOne">
              Crie sua conta
            </StyledTitles>

            <StyledTitles typography="headline">
              Rápido e grátis, vamos nessa
            </StyledTitles>
          </div>

          <Input
            type="text"
            placeholder="Digite aqui seu nome"
            label="Nome"
            id="name"
            register={register("name")}
          />
          {errors.name?.message && (
            <span aria-label={errors.name.message}>
              {errors.name.message}
            </span>
          )}

          <Input
            type="email"
            placeholder="Digite aqui seu email"
            label="Email"
            id="email"
            register={register("email")}
          />
          {errors.email?.message && (
            <span aria-label="erro ao inserir email">
              {errors.email.message}
            </span>
          )}
 
          <Input
            type="password"
            placeholder="Digite aqui sua senha"
            label="Senha"
            id="password"
            register={register("password")}

          />
          {errors.password?.message && (
            <span aria-label={errors.password.message}>
              {errors.password.message}
            </span>
          )}

          <Input
            type="password"
            placeholder="Digite novamente sua senha"
            label="Confirmar Senha"
            id="passwordConfirm"
            register={register("passwordConfirm")}
          />
          {errors.passwordConfirm?.message && (
            <span aria-label={errors.passwordConfirm.message}>
              {errors.passwordConfirm.message}
            </span>
          )}

          <Input
            type="text"
            placeholder="Fale sobre você"
            label="Bio"
            id="bio"
            register={register("bio")}
          />
          {errors.bio?.message && (
            <span aria-label={errors.bio.message}>
              {errors.bio.message}
            </span>
          )}

          <Input
            type="text"
            placeholder="Opção de contato"
            label="Contato"
            id="contact"
            register={register("contact")}
          />
          {errors.contact?.message && (
            <span aria-label={errors.contact.message}>
              {errors.contact.message}
            </span>
          )}

          <label htmlFor="course">Selecionar módulo</label>
          <select id="course" name="course_module" {...register("course_module")}>

            <option value="">Escolha um módulo</option>

            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>

            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>

            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>

            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>

          </select>
          {errors.course_module?.message && (
            <span aria-label={errors.course_module.message}>
              {errors.course_module.message}
            </span>
          )}

          <StyledButtons howUse="newRegister" />
        </StyledFormRegister>
      </section>
    </StyledMainRegister>
  );
};