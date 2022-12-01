import React from 'react'
import logoBrand from "../../assets/images/logoBrand.svg"
import StyledButtons from '../../styles/buttons'
import { StyledHeader } from './styles'

const Header = () => {

  return (
    <StyledHeader>
        <img src={logoBrand} alt="Logo Kenzie Hub" aria-label="Imagem Kenzie Hub"/>
        <StyledButtons howUse="return"/>
    </StyledHeader>
  )
}

export default Header