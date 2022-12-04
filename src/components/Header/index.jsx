/* eslint-disable default-case */
import React from 'react'
import { Link } from 'react-router-dom'

import logoBrand from "../../assets/images/logoBrand.svg"
import { StyledHeader } from './styles'

export const Header = ({ page, setUser }) => {

  const logoutUser = () => {

    window.localStorage.clear()
    setUser(null)

  }

  switch(page){

    case "login":

      return (

        <StyledHeader page={page}>
          <img src = {logoBrand} alt="Logo Kenzie Hub" aria-label="Imagem Kenzie Hub" />
        </StyledHeader>

      );
    
    case "register":

      return (

        <StyledHeader page={page}>
          <img src = {logoBrand} alt="Logo Kenzie Hub" aria-label="Imagem Kenzie Hub"/>
          <Link to="/login">Voltar</Link>
        </StyledHeader>
      );

    case "dashboard":

      return (

        <StyledHeader page={page}>
          <img src = {logoBrand} alt="Logo Kenzie Hub" aria-label="Imagem Kenzie Hub"/>
          <Link onClick={logoutUser} to="/login">Sair</Link>
        </StyledHeader>

      );
  };
};