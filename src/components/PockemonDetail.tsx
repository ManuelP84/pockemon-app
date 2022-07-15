import * as React from "react";
import { pockeType } from "../state/slices/pockemonSlice";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { appDispatch } from "../state/store";
import {
  addFavoriteReducer,
} from "../state/slices/pockemonSlice";
import { Link } from "react-router-dom";

interface IPockemonDetailProps {
  pokemon: pockeType;
}

const PockemonDetail: React.FunctionComponent<IPockemonDetailProps> = ({
  pokemon,
}) => {
  const dispatch = appDispatch();

  return (
    <Container>
      <br />
      <br />
      <Row xm={1} md={5} className="g-4 justify-content-center">
        <Col className="justify-content-center">
          <>
            <Card style={{ width: "13rem" }}>
              <Card.Body>
                <Card.Title>{pokemon.id}</Card.Title>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Like"
                    checked={pokemon.isFavorite}
                    onClick={() => dispatch(addFavoriteReducer(pokemon.id))}
                  />
                </Form.Group>
                <Card.Img
                  variant="top"
                  src={pokemon.sprite}
                  alt={`Picture from the pokémon ${
                    pokemon.name.charAt(0).toUpperCase + pokemon.name.slice(1)
                  }`}
                />
              </Card.Body>

              <Card.Body>
                <Card.Title>
                  <i>
                    Name:{" "}
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </i>
                </Card.Title>
                <Card.Title>
                  <i>Weight: {pokemon.weight}</i>
                </Card.Title>
              </Card.Body>
              <Card.Body>
                <Link
                  className={"link-dark btn btn-success btn-lg active p-2"}
                  to={`/pockemons`}
                >
                  Pokemons
                </Link>
              </Card.Body>
            </Card>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default PockemonDetail;
