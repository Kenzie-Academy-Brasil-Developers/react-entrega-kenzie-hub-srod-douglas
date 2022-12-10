/* eslint-disable no-unused-expressions */
import React from "react";

import { Header } from "../../components/Header";

import { StyledTitles } from "../../styles/typographies";
import { Fade, SectionInfos, SectionUser } from "./styles";
import { LoaderDash } from "../../components/Loader";
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { CardTech } from "../../components/CardTech";
import { TechContext } from "../../contexts/TechContext";

const DashboardPage = () => {

  const { user, setUser, userPersist } = useContext(UserContext);
  const { openModal } = useContext(TechContext)
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
          <div>
            <StyledTitles typography="titleOne">
              Tecnologias
            </StyledTitles>
            <AiOutlineAppstoreAdd size="1.5rem" onClick={openModal}/>
          </div>
          <CardTech />

{/*           <StyledTitles typography="headlineBold">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </StyledTitles> */}

        </SectionInfos>
        <LoaderDash/>

      </main>

    </Fade>

  );
};
export default DashboardPage;