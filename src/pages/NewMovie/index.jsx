import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, CustomInput, Textarea } from "./styles";
import { Header } from "../../components/Header"
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button"

export function NewMovie() {
  return(
    <Container>
      <Header />

      <main>

        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <h1>Novo filme</h1>
          </header>

          <div>
            <CustomInput 
              placeholder="Título"
              type="text"
            />

            <CustomInput 
              placeholder="Sua nota (de 0 a 5)"
              type="text"
            />
          </div>

          <Textarea 
            placeholder="Observações"
          />

          <section className="markers">
            <h2>Marcadores</h2>
            <div className="tags">
              <MovieItem value="Ficção Científica" />
              <MovieItem isNew placeholder="Novo marcador" />

              
            </div>
          </section>

          <footer>
            <Button 
              title="Excluir filme"
              className="deleteMovie"
            />

            <Button 
              title="Salvar alterações"
            />
          </footer>
        </Form>
      </main>
    </Container>
  )
}