import React from "react";
import { StyledFieldset } from "./styles";

export const Input = ({ label, placeholder, type, id, register, disabled }) => {

  return (

    <StyledFieldset>

      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} disabled={disabled} {...register} />

    </StyledFieldset>
    
  );
};