import React, { useState } from "react";
import StyledButtons from "../../../styles/buttons";
import StyledTitles from "../../../styles/typographies";
import StyledFormLogin from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../services/api";

const FormLogin = () => {
  /*   const [loading, setLoading] = useState(false) */
  const [user, setUser] = useState({});

  const formLoginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

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

        setUser(response.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN:", response.data.token);
        window.localStorage.setItem("@USERID:", response.data.user.id);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  /* inserir aqui a lógica para o form */

  /* fazer requisição post na api para login (rota /sessions)     OK      */

  /* se requisição ok, armazenar o data.user no estado user       OK      */
  /* armazenar no localStorage:       OK
        @TOKEN: data.token              OK
        @USERID: data.user.id           OK
    */
  /* criar estado de carregamento (loading) */
  /* após isso, redirecionar o usuário para dashboard */

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <StyledTitles typography="titleOne">Login</StyledTitles>
      </div>

      <label>Email</label>

      <input placeholder="Digite aqui seu email" {...register("email")} />
      {errors.email?.message && (
        <p aria-label="erro ao inserir email">{errors.email.message}</p>
      )}

      <label>Senha</label>

      <input placeholder="Digite aqui sua senha" {...register("password")} />
      {errors.password?.message && (
        <span aria-label="erro ao inserir senha">
          {errors.password.message}
        </span>
      )}

      <StyledButtons howUse="entry" />

      <div>
        <StyledTitles type="submit" typography="headlineBold">
          Ainda não possui uma conta?
        </StyledTitles>
        <StyledButtons type="submit" howUse="goRegister" />
      </div>
    </StyledFormLogin>
  );
};
export default FormLogin;
