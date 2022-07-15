import * as React from "react";
import { pockeType } from "../state/slices/pockemonSlice";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

interface IPockemonCardProps {
  pokemon: pockeType;
}

const PockemonCard: React.FunctionComponent<IPockemonCardProps> = ({
  pokemon,
}) => {
  return (
    <div>
      {pokemon.sprite && (
        <Card.Body>
          <Card.Title>{pokemon.id}</Card.Title>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="favorite" />
          </Form.Group>
          <Card.Img
            variant="top"
            src={pokemon.sprite}
            alt={`Image of pokémon ${pokemon.name}`}
          />
        </Card.Body>
      )}
      ,
      <Card.Body>
        <Card.Title>
          <i>{pokemon.name}</i>
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`pokemon/${pokemon.name}`}>Info</Card.Link>
      </Card.Body>
    </div>
  );
};

export default PockemonCard;
