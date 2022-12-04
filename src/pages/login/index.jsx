import React from "react";
import { Header } from "../../components/Header";
import { FormLogin } from "./Form";
import { Fade } from "./styles";

const LoginPage = () => {

  window.localStorage.clear()

  return (

    <Fade>

      <Header page="login" />

      <main>

        <section>

          <FormLogin />

        </section>

      </main>

    </Fade>

  );
};
export default LoginPage;