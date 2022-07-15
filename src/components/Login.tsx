import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { logInReducer } from "../state/slices/loggedSlice";
import { appDispatch } from "../state/store";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

  const [userName, setUserName] = React.useState("");
  
  const dispatch = appDispatch();

  const logIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(userName){
      dispatch(logInReducer(userName));
    }
  }
  return (
    <>
      <div className="user_card">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="d-flex justify-content-center">
          
          <h3 id="form-title">LOGIN</h3>
        </div>
        <div className="d-flex justify-content-center form_container">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control 
                placeholder="Name" 
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center mt-3 login_container">
              <Button type="submit" onClick={(e) => logIn(e)}>Login</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
