import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/NavBar";
import axios from "axios";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => setPokemons(resp.data.results));
  }, []);

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Poke App</Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <pre>{JSON.stringify(pokemons, null, 2)}</pre>
      </div>
    </>
  );
};

export default App;
