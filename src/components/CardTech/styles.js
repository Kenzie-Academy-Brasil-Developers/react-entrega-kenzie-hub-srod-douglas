import styled from "styled-components";

export const StyledTechList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 16px 19px;
  gap: 16px;

  background-color: var(--color-grey-3);
  border-radius: 4px;

  h2,
  span {
    max-width: 100px;
    width: 100px;
    transition: 0.5s;
  }

  span {
    text-align: right;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 16px;

    border-radius: 4px;
    background-color: var(--color-grey-4);

    cursor: pointer;
    transition: 0.5s;

    & > div > svg {
      transition: 0.5s;
    }

    & > div {
      display: flex;
      justify-content: center;

      height: 100%;
      width: 50px;
      gap: 10px;
      margin: 0;

      background-color: var(--color-grey-4);
      transition: 0.5s;
    }

    :hover {
      background-color: var(--color-grey-2);
      & > h2,
      span,
      div,
      div > svg {
        background-color: var(--color-grey-2);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
