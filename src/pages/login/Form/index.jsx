import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledButtons } from "../../../styles/buttons";
import { StyledTitles } from "../../../styles/typographies";
import { StyledFormLogin } from "./styles";

import { Input } from "../../../components/Input";
import { formLoginSchema } from "./formLoginSchema";
import { Loader } from "../../../components/Loader";

import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

export const FormLogin = () => {

  const { loading, onSubmitForm} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  });

  if(loading){
    return(
      <Loader/>
    )
  };

  return (

    <StyledFormLogin onSubmit={handleSubmit(onSubmitForm)} autoComplete="off">

      <div>
        <StyledTitles typography="titleOne">Login</StyledTitles>
      </div>

      <Input placeholder="Digite aqui seu email" label="Email" id="email" register={register("email")} />
      {errors.email?.message && (
        <p aria-label="erro ao inserir email">
          {errors.email.message}
        </p>
      )}

      <Input placeholder="Digite aqui sua senha" label="Senha" id="password" register={register("password")} type="password" />
        {errors.email?.message && (
        <p aria-label="erro ao inserir email">
          {errors.email.message}
        </p>
      )}

      <StyledButtons type="submit" howUse="entry" />

      <div>

        <StyledTitles type="submit" typography="headlineBold">
          Ainda não possui uma conta?
        </StyledTitles>

        <Link to="/register">
          Cadastre-se
        </Link>

      </div>
    </StyledFormLogin>
  );
};