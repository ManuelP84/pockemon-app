import * as React from "react";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { pockeType, selectPokemons } from "../state/slices/pockemonSlice";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { appDispatch } from "../state/store";
import { addFavoriteReducer } from "../state/slices/pockemonSlice";

interface IFindAPokemonProps {}

const FindAPokemon: React.FunctionComponent<IFindAPokemonProps> = (props) => {
  const pokemons = useSelector(selectPokemons());

  const [word, setWord] = React.useState("");
  const dispatch = appDispatch();

  const filterList = pokemons.filter((poke) => poke.name.includes(word));

  return (
    <>
      <br />
      <Container>
        <br />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setWord(e.target.value)}
          />
        </Form>
        <br />
        <Row xm={1} md={5} className="g-4">
          {word.length > 0 &&
            filterList.map((pokemon) => (
              <>
                <Col>
                  <>
                    <Card style={{ width: "13rem" }}>
                      <Card.Body>
                        <Card.Title>{pokemon.id}</Card.Title>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Like"
                            checked={pokemon.isFavorite}
                            onClick={() =>
                              dispatch(addFavoriteReducer(pokemon.id))
                            }
                          />
                        </Form.Group>
                        <Card.Img
                          variant="top"
                          src={pokemon.sprite}
                          alt={`Picture from the pokémon ${
                            pokemon.name.charAt(0).toUpperCase +
                            pokemon.name.slice(1)
                          }`}
                        />
                      </Card.Body>

                      <Card.Body>
                        <Card.Title>
                          <i>
                            {pokemon.name.charAt(0).toUpperCase() +
                              pokemon.name.slice(1)}
                          </i>
                        </Card.Title>
                      </Card.Body>
                      <Card.Body>
                        <Link
                          className={
                            "link-dark btn btn-success btn-lg active p-2"
                          }
                          to={`/pockemons`}
                        >
                          Pokemons
                        </Link>
                      </Card.Body>
                    </Card>
                  </>
                </Col>
              </>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default FindAPokemon;
