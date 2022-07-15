import * as React from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { selectPokemons } from "../state/slices/pockemonSlice";
import Form from "react-bootstrap/Form";
import { appDispatch } from "../state/store";
import { addFavoriteReducer, pockeType } from "../state/slices/pockemonSlice";

interface IFavoritesProps {}

const Favorites: React.FunctionComponent<IFavoritesProps> = () => {
  const pokemons = useSelector(selectPokemons());
  const dispatch = appDispatch();

  return (
    <Container>
      <br />
      <br />
      <Row xm={1} md={5} className="g-4">
        {pokemons.map((pokemon) => (
          <>
            {pokemon.isFavorite && (
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
                        alt={`Picture from the pokémon ${pokemon.name.charAt(0).toUpperCase + pokemon.name.slice(1)}`}
                      />
                    </Card.Body>

                    <Card.Body>
                      <Card.Title>
                        <i>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</i>
                      </Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href={`pokemon/${pokemon.name}`}>
                        Info
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </>
              </Col>
            )}
          </>
        ))}
      </Row>
    </Container>
  );
};

export default Favorites;
