import React from "react";
import StyledButtons from "../../../styles/buttons";
import StyledTitles from "../../../styles/typographies";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formRegisterSchema from "./registerSchema";
import { StyledFormRegister, StyledMainRegister } from "./styles";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRegisterSchema),
  });

  const onRegisterSubmit = (data) => {
    /* delete data.passwordConfirm */
  };

  return (
    <StyledMainRegister>
      <section>

        <StyledFormRegister
          onSubmit={handleSubmit(onRegisterSubmit)}
          noValidate
        >
        <div>
          <StyledTitles typography="titleOne">Crie sua conta</StyledTitles>
          <StyledTitles typography="headline">
            Rápido e grátis, vamos nessa
          </StyledTitles>
        </div>
          <label>Nome</label>
          <input placeholder="Digite aqui seu nome" {...register("name")} />
          {errors.name?.message && (
            <span aria-label={errors.name.message}>{errors.name.message}</span>
          )}

          <label>Email</label>
          <input placeholder="Digite aqui seu email" {...register("email")} />
          {errors.email?.message && (
            <span aria-label={errors.email.message}>
              {errors.email.message}
            </span>
          )}

          <label>Senha</label>
          <input
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password?.message && (
            <span aria-label={errors.password.message}>
              {errors.password.message}
            </span>
          )}

          <label>Confirmar Senha</label>
          <input
            placeholder="Digite novamente sua senha"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm?.message && (
            <span aria-label={errors.passwordConfirm.message}>
              {errors.passwordConfirm.message}
            </span>
          )}

          <label>Bio</label>
          <input placeholder="Fale sobre você" {...register("bio")} />
          {errors.bio?.message && (
            <span aria-label={errors.bio.message}>{errors.bio.message}</span>
          )}

          <label>Contato</label>
          <input placeholder="Opção de contato" {...register("contact")} />
          {errors.contact?.message && (
            <span aria-label={errors.contact.message}>
              {errors.contact.message}
            </span>
          )}

          <label>Selecionar módulo</label>
          <select {...register("course_module")}>
            {errors.course_module?.message && (
              <span aria-label={errors.course_module.message}>
                {errors.course_module.message}
              </span>
            )}

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
          <StyledButtons howUse="newRegister" />
        </StyledFormRegister>
      </section>
    </StyledMainRegister>
  );
};

export default FormRegister;
