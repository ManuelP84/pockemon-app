import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Enter your name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Name" />
        </Form.Group>

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
