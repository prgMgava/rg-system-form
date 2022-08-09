import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "./styles";


export const Dashboard = () => {
  const navigate  = useNavigate()
  return (
      <Container>
        <h1>Cadastro feito com sucesso</h1>
        <Button onClick={() => navigate('/')}>voltar</Button>
      </Container>
    )
};

export default Dashboard;
