import React from "react";
import { Header } from "../../components/Header";
import { FormRegister } from "./Form";
import { Fade } from "./styles";

const RegisterPage = () => {

  return (
    <Fade>
      <Header page="register" />
      <FormRegister />
    </Fade>
  );
};

export default RegisterPage;