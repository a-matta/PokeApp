import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/NavBar";
import axios from "axios";
import { Card, Row } from "react-bootstrap";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((resp) => {
      const arrayOfPromises = resp.data.results.map((p: { url: string }) =>
        axios.get(p.url).then((r) => r.data)
      );

      Promise.all(arrayOfPromises).then((data: any) => setPokemons(data));
    });
  }, []);

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Poke App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row xs={1} md={6} className="g-4 justify-content-md-center">
          {pokemons.map((p: any) => (
            <Card
              key={p.name}
              className="m-5"
              style={{ background: "#f8f9fa" }}
            >
              <Card.Img
                variant="top"
                src={p.sprites.back_default}
                alt={`image of ${p.name}`}
              />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
