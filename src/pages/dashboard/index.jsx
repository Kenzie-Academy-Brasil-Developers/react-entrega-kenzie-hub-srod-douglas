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
import { ModalEditTech, ModalRegisterTech } from "../../components/Modal";

const DashboardPage = () => {

  const { user, setUser, userPersist } = useContext(UserContext);
  const { isOpen, setIsOpen, idEdit } = useContext(TechContext);

  if(!user && !userPersist){
    return;
  };

    return (
  
      <Fade>
        <Header page="dashboard" setUser={setUser} />
        <main>
          <>
            <SectionUser>

              <StyledTitles typography="titleOne">
                Olá, {user.name}
              </StyledTitles>

              <StyledTitles typography="headlineBold">
                {user.course_module}
              </StyledTitles>
  
            </SectionUser>
  
            <SectionInfos>

              {isOpen && <ModalRegisterTech />}
              {idEdit && <ModalEditTech />}
            
              <div>
                <StyledTitles typography="titleOne">
                  Tecnologias
                </StyledTitles>
                <AiOutlineAppstoreAdd size="1.5rem" onClick={() => setIsOpen(true)}/>
              </div>
              
              <CardTech />
  
            </SectionInfos>
            <LoaderDash/>
          </>
        </main>
      </Fade>
  );
};
export default DashboardPage;