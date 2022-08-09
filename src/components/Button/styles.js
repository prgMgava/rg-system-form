import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 150px;
  height: 59px;
  border: none;
  border-radius: 49px;
  color: var(--white);
  background-color: var(--blue);
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  &:hover{
      background-color: var(--blue-hover);
  }
`;
