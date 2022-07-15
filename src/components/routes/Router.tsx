import * as React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectUser } from "../../state/slices/loggedSlice";
import Favorites from "../Favorites";
import Home from "../Home";
import Login from "../Login";
import PockemonNavbar from "../Navbar";
import PockemonDetail from "../PockemonDetail";
import PockemonList from "../PockemonList";
import { selectPokemons } from "../../state/slices/pockemonSlice";
import FindAPokemon from "../FindAPokemon";

interface IRouterProps {}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  const user = useSelector(selectUser());

  const pokemons = useSelector(selectPokemons());
  const pokemon = pokemons.find((poke) => poke.detailsActive == true);
  const pokeDefault = {
    id: 1,
    name: "",
    sprite: "",
    weight: 1,
    isFavorite: false,
    detailsActive: true,
  };

  return (
    <div>
      <BrowserRouter>
        <PockemonNavbar />
        {user.logged && (
          <Routes>
            <Route path="/pockemons" element={<PockemonList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/find" element={<FindAPokemon />} />
            <Route path="/home" element={<Home />} />
            <Route
              path={`/pockemons/pokemon/${pokemon?.name}`}
              element={
                <PockemonDetail pokemon={pokemon ? pokemon : pokeDefault} />
              }
            />
          </Routes>
        )}

        {!user.logged && (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Router;
