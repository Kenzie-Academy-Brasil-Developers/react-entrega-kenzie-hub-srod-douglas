/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import StyledTitles from "../../styles/typographies";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (
      !window.localStorage.getItem("@TOKEN") ||
      !window.localStorage.getItem("@USERID")
    ) {
      navigate("/");
    }
  }, []);

  const idUser = useParams()(async () => {
    try {
      const response = await api.get(`users/${idUser}`);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    } finally {
    }
  })();
  console.log(user);
  return (
    <>
      <Header page="dashboard" />
      <main>
        <section>
          <StyledTitles typography="titleOne">Olá, {user.name}</StyledTitles>
          <StyledTitles typography="headlineBold">
            {user.course_module}
          </StyledTitles>
        </section>
        <section>
          <StyledTitles typography="titleOne">
            Que pena! Estamos em desenvolvimento :({" "}
          </StyledTitles>
          <StyledTitles typography="headlineBold">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </StyledTitles>
        </section>
      </main>
    </>
  );
};
export default DashboardPage;
