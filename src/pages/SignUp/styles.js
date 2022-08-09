import styled from "styled-components";

export const ContainerFlex = styled.div`
	display: flex;
`

export const Column = styled.div`
	padding: 16px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  div {
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 5rem;
      overflow: hidden;
      h2 {
        font-size: 2.2rem;
        color: var(--gray);
        margin-bottom: 10px;
      }
    }
  }
`;

