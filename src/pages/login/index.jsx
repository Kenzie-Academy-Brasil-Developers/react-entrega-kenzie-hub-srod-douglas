import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { FormLogin } from "./Form";
import { Fade } from "./styles";

const LoginPage = () => {
  const { user } = useContext(UserContext)

  if(user){
    return <Navigate to='/dashboard' />
  }
  
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