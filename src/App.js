import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import ListaDeLivros from './componentes/ListaDeLivros';
// import DetalhesLivro from './componentes/DetalhesLivro';
// import ListaDeFavoritos from './componentes/ListaDeFavoritos';
// import UltimosLancamentos from './componentes/UltimosLancamentos'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Menu>
          <ul>
            <li>
              <Link to="/livros">Livros</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
          </ul>
        </Menu>
        <Conteudo>
          <Routes>
            <Route path="/" element={<><Pesquisa /><UltimosLancamentos /></>} />
            <Route path="/livros" element={<ListaDeLivros />} />
            <Route path="/livros/:id" element={<DetalhesLivro />} />
            <Route path="/favoritos" element={<ListaDeFavoritos />} />
          </Routes>
        </Conteudo>
      </AppContainer>
    </Router>
  );
}

export default App;
