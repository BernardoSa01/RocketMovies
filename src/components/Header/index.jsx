import { Container, Nav, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Input } from '../Input'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <Nav>
          <a href="#">RocketMovies</a>
      </Nav>

      <Input
        type="text"  
        placeholder="Pesquisar pelo título"
      />

      <Profile to="/profile">
          <strong>
           {user.name}
          </strong>

        <img 
          src={avatarUrl}
          alt={user.name}
        />
      </Profile>

      <Logout onClick={signOut}>
        sair
      </Logout>
    </Container>
  )
}