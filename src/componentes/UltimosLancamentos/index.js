import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  overflow-x: auto;
  white-space: nowrap;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img key={livro.id} src={livro.src} alt={livro.nome} />
        ))}
    </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;