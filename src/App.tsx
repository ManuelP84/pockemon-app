import "./App.css";
import Router from "./components/routes/Router";
import { getPokemons } from "./services/getPockemons";
import { appDispatch } from "./state/store";
import { useEffect } from "react";

function App() {
  const dispatch = appDispatch();

  useEffect(() => {
    dispatch(getPokemons(50));
  }, [dispatch]);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
