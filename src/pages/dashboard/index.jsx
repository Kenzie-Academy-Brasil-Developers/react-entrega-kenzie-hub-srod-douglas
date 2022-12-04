/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { Header } from "../../components/Header";

import { StyledTitles } from "../../styles/typographies";
import { Fade, SectionInfos, SectionUser } from "./styles";

const DashboardPage = () => {

  const navigate = useNavigate();
  const { userId } = useParams();

  if (!userId) {

    navigate("/login");

  }

  const [user, setUser] = useState({});

  useEffect(() => {

    (async () => {

      try {

        const response = await api.get(`users/${userId}`);
        setUser(response.data);

      } catch (error) {

        console.log(error);
        navigate("/login");

      }

    })();

  }, []);

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

      </main>

    </Fade>

  );
};
export default DashboardPage;