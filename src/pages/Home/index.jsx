import { FiPlus } from "react-icons/fi";

import { Container } from "./styles";
import { Header } from "../../components/Header"
import { Note } from "../../components/Note";

export function Home() {
  return(
    <Container>
      <Header />

      <div className="myMovies">
        <h1>Meus filmes</h1>
        <button>
          <FiPlus />
          Adicionar filme
        </button>
      </div>

      <div className="movieTags">

        <Note data={{
          title: "Interestellar", tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />

        <Note data={{
          title: "Interestellar", tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />

        <Note data={{
          title: "Interestellar", tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />

      </div>
    </Container>
  )
}