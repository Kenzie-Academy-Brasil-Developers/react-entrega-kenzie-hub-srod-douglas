/* eslint-disable default-case */
import styled, { css } from "styled-components";
import baseButtons from "./baseButtons";

const StyledButtons = styled(baseButtons)`
  transition: 0.5s;
  cursor: pointer;

  ${({ howUse }) => {
    switch (howUse) {
      case "entry":
        return css`
          width: 100%;
          max-width: 346px;
          height: 48px;
          padding: 0 22px;

          background-color: var(--color-primary);
          color: var(--color-white);

          border: 1px solid var(--color-primary);
          border-radius: 4px;

          font-size: var(--font-size-1);
          font-weight: var(--font-weight-regular);

          &:hover {
            background-color: var(--color-primary-focus);
          }
        `;
      case "newRegister":
        return css`
          width: 100%;
          max-width: 346px;
          height: 48px;
          padding: 0 22px;

          background-color: var(--color-primary);
          color: var(--color-white);

          border: 1px solid var(--color-primary);
          border-radius: 4px;

          font-size: var(--font-size-1);
          font-weight: var(--font-weight-regular);

          &:hover {
            background-color: var(--color-primary-focus);
          }
        `;
    }
  }}
`;
export default StyledButtons;
