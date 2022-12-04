/* eslint-disable default-case */
import React, { useState }from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

import logoBrand from "../../assets/images/logoBrand.svg"
import { StyledHeader } from './styles'

export const Header = ({ page, setUser }) => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const logoutUser = () => {

    setLoading(true)
    toast.success("Logout efetuado, estamos redirecionando ao login.")
    
    setTimeout(() => {

      window.localStorage.clear()
      setUser(null)
      setLoading(false)
      navigate('/login')
      
    }, 4000);
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
          <button onClick={logoutUser} to="/login">Sair</button>
        </StyledHeader>

      );
  };
};