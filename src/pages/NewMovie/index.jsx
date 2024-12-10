import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Form, CustomInput, Textarea } from "./styles";
import { Header } from "../../components/Header"
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button"

import { api } from "../../services/api";

export function NewMovie() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    await api.post("/notes", {
      title,
      description,
      tags,
      rating
    })

    alert("Nota criada com sucesso!")
    navigate("/")
  }

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
              onChange={e => setTitle(e.target.value)}
            />

            <CustomInput 
              placeholder="Sua nota (de 0 a 5)"
              type="text"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <section className="markers">
            <h2>Marcadores</h2>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <MovieItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <MovieItem 
                isNew 
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />

              
            </div>
          </section>

          <footer>
            <Button 
              title="Excluir filme"
              className="deleteMovie"
            />

            <Button 
              title="Salvar alterações"
              onClick={handleNewNote}
            />
          </footer>
        </Form>
      </main>
    </Container>
  )
}