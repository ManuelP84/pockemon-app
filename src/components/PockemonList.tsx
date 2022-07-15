import * as React from "react";
import { useSelector } from "react-redux";
import { selectPokemons } from "../state/slices/pockemonSlice";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PockemonCard from "./PockemonCard";
import { appDispatch } from "../state/store";
import { turnOffDetails } from "../state/slices/pockemonSlice";

interface IPockemonListProps {}

const PockemonList: React.FunctionComponent<IPockemonListProps> = () => {
  const pokemons = useSelector(selectPokemons());
  const dispatch = appDispatch();

  React.useEffect(() => {
    dispatch(turnOffDetails());
  }, [dispatch]);

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
