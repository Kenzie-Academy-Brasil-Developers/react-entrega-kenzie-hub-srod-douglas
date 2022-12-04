import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { api } from "../../../services/api";
import { formRegisterSchema } from "./registerSchema";

import { Input } from "../../../components/Input";
import { StyledButtons } from "../../../styles/buttons";
import { StyledTitles } from "../../../styles/typographies";
import { StyledFormRegister, StyledMainRegister } from "./styles";

export const FormRegister = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({

    mode: "onBlur",
    resolver: yupResolver(formRegisterSchema),

  });

  const onRegisterSubmit = (data) => {
console.log(data)
    const { name, email, password, bio, contact, course_module } = data;
    const newData = { name, email, password, bio, contact, course_module };

    (async () => {

      try {

        const response = await api.post("users", newData);
        console.log(response.data)
        toast.success(

          "Cadastro efetuado com sucesso! Aguarde enquanto redirecionamos ao login."
        );

        setTimeout(() => {

          navigate("/login");

        }, 3000);

      } catch (error) {

        console.log(error)

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
          <select id="course" register={register("course_module")}>

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