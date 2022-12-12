import styled from "styled-components";

export const StyledFormLogin = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  gap: 22px;
  padding: 42px 22px;

  height: 600px;
  width: 100%;
  max-width:470px;

  border: 1px solid var(--color-grey-3);
  border-radius: 4px;

  background-color: var(--color-grey-3);

  div:last-child{

    height: 100px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 22px;

  }

  div, p, h1{
    background-color: var(--color-grey-3);
  }

  a > p{

    display: flex;
    justify-content: center;
    align-items: center;

    width: 424px;
    height: 48px;
    padding: 0 24px;

    background-color: var(--color-grey-1);
    color: var(--color-grey-0);

    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
  }

  p:nth-child(5), p:nth-child(3){

    display: flex;
    width: 100%;

    margin: -10px 0 10px 0;

    color: var(--color-negative);
    font-size: var(--font-size-2);

  }

  a > p {
    cursor: pointer;
  }

  a{

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 446px;
    height: 52px;
    padding: 0 22px;

    background-color: transparent;
    color: var(--color-white);

    border: 1px solid var(--color-grey-4);
    border-radius: 4px;

    font-size: var(--font-size-0);
    font-weight: var(--font-weight-regular);

    &:hover {
      background-color: var(--color-grey-4);
    }
  }
`;