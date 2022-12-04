import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { StyledButtons } from "../../../styles/buttons";
import { StyledTitles } from "../../../styles/typographies";
import { StyledFormLogin } from "./styles";

import { Input } from "../../../components/Input";
import { formLoginSchema } from "./formLoginSchema";
import { api } from "../../../services/api";

export const FormLogin = () => {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  useEffect(() => {

  }, [user])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({

    resolver: yupResolver(formLoginSchema),

  });

  const onSubmitForm = (data) => {

    (async () => {

      try {

        const response = await api.post("sessions", data);

        setLoading(true)
        toast.success("Login efetuado com sucesso!")

        setTimeout(() => {

          setUser(response.data.user);

          window.localStorage.clear();
          window.localStorage.setItem("@TOKEN:", response.data.token);
          window.localStorage.setItem("@USERID:", response.data.user.id);

          navigate(`/dashboard/${response.data.user.id}`)

        }, 3000);

      } catch (error) {

        toast.error("Hmm... Algo deu errado. Tente novamente!")
        console.log(error);

      } finally {

        setLoading(false)

      }
    })();
  };

  if(loading){

    return(

      <h1>Carregando...</h1>

    )
  }


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