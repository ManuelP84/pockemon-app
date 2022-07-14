import * as React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectUser } from "../../state/slices/loggedSlice";
import Favorites from "../Favorites";
import Home from "../Home";
import Login from "../Login";
import PockemonNavbar from "../Navbar";
import PockemonList from "../PockemonList";

interface IRouterProps {}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  const user = useSelector(selectUser());

  return (
    <div>
      <BrowserRouter>
        <PockemonNavbar />
        {user.logged && (
          <Routes>
            <Route path="/pockemons" element={<PockemonList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/home" element={<Home />} />
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
