import * as React from "react";
import { useSelector } from "react-redux";
import { selectPokemons } from "../state/slices/pockemonSlice";
import { pockeType } from "../state/slices/pockemonSlice";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import PockemonCard from "./PockemonCard";

interface IPockemonListProps {}

const PockemonList: React.FunctionComponent<IPockemonListProps> = () => {
  const pokemons = useSelector(selectPokemons());
  console.log(pokemons);

  return (
    <>
      <Container>
        <br />
        <br />
        <Row xm={1} md={5} className="g-4">
          {pokemons.map((pokemon) => (
            <Col>
              <Card style={{ width: "13rem" }}>
                <PockemonCard pokemon={pokemon} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PockemonList;
