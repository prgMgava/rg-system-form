import styled from "styled-components";

export const Container = styled.div`
div{
    color: ${ props => !!props.error && "var(--mesage-error)"};
    span{
        color: var(--mesage-error);
    }
}

@media (max-width: 320px){
  display: flex;
  flex-direction: column;
  div.label {
      margin-left: 3.1rem;
    } 
}
`

export const InputContainer = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: var(--white);
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  svg {
    text-align: center;
    line-height: 55px;
    font-size: 1.1rem;
    color: ${ props => !!props.error ? "var(--mesage-error)" : "var(--gray-light)"};
    align-self: center;
    justify-self: center;
  }

  input {
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--gray-dark);
  }

  input::placeholder {
    color: var(--gray-placeholder);
    font-weight: 500;
  }

  @media (max-width:320px) {
    width: 70%;
    margin: 0 auto;
    padding: 0;
   grid-template-columns: 20% 80%;
  align-self: center;

  }
`;
