import Routes from "./routes"
import { Container } from "./style";
import GlobalStyle from "./styles/global";
export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
    );
};

export default App
