import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../state/slices/loggedSlice";
import { appDispatch } from "../state/store";
import { logOutReducer } from "../state/slices/loggedSlice";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

interface IPockemonNavbarProps {}

const PockemonNavbar: React.FunctionComponent<IPockemonNavbarProps> = () => {
  const user = useSelector(selectUser());
  const dispatch = appDispatch();

  return (
    <div>
      <Navbar bg="dark sticky-top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to={"/home"}>
              <i>PokeApp</i>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {user.logged && (
              <>
                <Nav.Link>
                  <Link className="nav-link" to={"/pockemons"}>
                    <i>Pokemons</i>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to={"/favorites"}>
                    <i>Favorites</i>
                  </Link>
                </Nav.Link>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </>
            )}
          </Nav>

          <Nav>
            {user.logged ? (
              <>
                <Nav.Link>
                  <Link className="nav-link" to={""}>
                    <b>
                      <i>Hi, {user.userName}!</i>
                    </b>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="nav-link "
                    to={"/home"}
                    onClick={() => dispatch(logOutReducer())}
                  >
                    <i>Logout</i>
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link className="nav-link " to={"/login"}>
                    <i>Login</i>
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default PockemonNavbar;
