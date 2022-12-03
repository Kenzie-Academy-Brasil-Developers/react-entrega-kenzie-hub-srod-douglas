import React from "react";
import Header from "../../components/Header";
import FormLogin from "./Form";

const LoginPage = () => {
  return (
    <>
      <Header page="login" />
      <main>
        <section>
          <FormLogin />
        </section>
      </main>
    </>
  );
};
export default LoginPage;
