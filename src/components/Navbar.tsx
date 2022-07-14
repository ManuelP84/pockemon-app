import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface IPockemonNavbarProps {
}

const PockemonNavbar: React.FunctionComponent<IPockemonNavbarProps> = (props) => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Pockemons</Nav.Link>
            <Nav.Link href="#features">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default PockemonNavbar;
