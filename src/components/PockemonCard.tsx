import * as React from "react";
import { addFavoriteReducer, pockeType } from "../state/slices/pockemonSlice";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { appDispatch } from "../state/store";

interface IPockemonCardProps {
  pokemon: pockeType;
}

const PockemonCard: React.FunctionComponent<IPockemonCardProps> = ({
  pokemon,
}) => {
  const dispatch = appDispatch();
  return (
    <div>
      {pokemon.sprite && (
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
            alt={`Picture from the pokémon ${pokemon.name}`}
          />
        </Card.Body>
      )}
      <Card.Body>
        <Card.Title>
          <i>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</i>
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`pokemon/${pokemon.name}`}>Info</Card.Link>
      </Card.Body>
    </div>
  );
};

export default PockemonCard;
