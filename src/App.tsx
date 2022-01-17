import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/NavBar";
import axios from "axios";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((resp) => {
      const arrayOfPromises = resp.data.results.map((p: { url: string }) =>
        axios.get(p.url).then((r) => r.data)
      );

      Promise.all(arrayOfPromises).then((data: any) => setPokemons(data));
    }); // array of promise
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
