import { Container, Nav, Profile, Logout } from "./styles";

import { Input } from '../Input'

export function Header() {
  return(
    <Container>
      <Nav>
          <a href="#">RocketMovies</a>
      </Nav>

      <Input
        type="text"  
        placeholder="Pesquisar pelo título"
      />

      <Profile>
          <strong>
            Bernardo Sá
          </strong>

        <img 
          src="https://github.com/BernardoSa01.png" 
          alt="Imagem de Bernardo Sá" 
        />
      </Profile>

      <Logout>sair</Logout>
    </Container>
  )
}