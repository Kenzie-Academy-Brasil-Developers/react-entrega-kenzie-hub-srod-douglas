/* eslint-disable no-unused-expressions */
import React from "react";

import { Header } from "../../components/Header";

import { StyledTitles } from "../../styles/typographies";
import { Fade, SectionInfos, SectionUser } from "./styles";
import { LoaderDash } from "../../components/Loader";

import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const DashboardPage = () => {

  const { user, setUser, userPersist } = useContext(UserContext);

  if(!user && !userPersist){

    return;

  };

  return (

    <Fade>

      <Header page="dashboard" setUser={setUser} />

      <main>

        <SectionUser>

          <StyledTitles typography="titleOne">
            Olá, {user.name}
          </StyledTitles>

          <StyledTitles typography="headlineBold">
            {user.course_module}
          </StyledTitles>

        </SectionUser>

        <SectionInfos>

          <StyledTitles typography="titleOne">
            Que pena! Estamos em desenvolvimento :(
          </StyledTitles>

          <StyledTitles typography="headlineBold">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </StyledTitles>

        </SectionInfos>
        <LoaderDash/>

      </main>

    </Fade>

  );
};
export default DashboardPage;