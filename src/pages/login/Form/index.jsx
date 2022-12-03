import React, { useEffect, useState } from "react";
import StyledButtons from "../../../styles/buttons";
import StyledTitles from "../../../styles/typographies";
import StyledFormLogin from "./styles";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../services/api";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { formLoginSchema } from "./formLoginSchema";
import { toast } from "react-toastify";


const FormLogin = () => {
  const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

  const [user, setUser] = useState({});

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

        setLoading(true)
        toast.success("Login efetuado com sucesso!")
        const response = await api.post("sessions", data);

        setUser(response.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN:", response.data.token);
        window.localStorage.setItem("@USERID:", response.data.user.id);
        navigate(`/dashboard/${response.data.user.id}`)
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
      <h1>
        Carregando...
      </h1>
    )
  }

  /* criar estado de carregamento (loading) */
  /* após isso, redirecionar o usuário para dashboard */

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <StyledTitles typography="titleOne">Login</StyledTitles>
      </div>
      <Input placeholder="Digite aqui seu email" label="Email" id="email" register={register("email")} />
      {errors.email?.message && (
        <p aria-label="erro ao inserir email">{errors.email.message}</p>
      )}

      <Input placeholder="Digite aqui sua senha" label="Senha" id="password" register={register("password")} />
        {errors.email?.message && (
        <p aria-label="erro ao inserir email">{errors.email.message}</p>
      )}

      <StyledButtons type="submit" howUse="entry" />
      
      <div>
        <StyledTitles type="submit" typography="headlineBold">
          Ainda não possui uma conta?
        </StyledTitles>
        <Link to="/register">
          <StyledButtons type="button" howUse="goRegister" />
        </Link>
      </div>
    </StyledFormLogin>
  );
};
export default FormLogin;
