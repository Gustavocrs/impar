import Busca from "./pages/Busca";
import { GlobalStyle } from "./UI/GlobalStyle";
import Header from "./components/Header";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Busca/>      
    </>
  );
}

export default App;
