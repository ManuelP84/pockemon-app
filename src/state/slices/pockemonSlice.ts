import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPokemons } from "../../services/getPockemons";
import { stateType } from "../store";

type pockeType = {
  id: number;
  name: string;
  sprite: string;
  weight: number;
  isFavorite: boolean;
  detailsActive: boolean;
};

interface initialStateType {
  pokemons: pockeType[];
}

const initialState: initialStateType = {
  pokemons: [],
};

const pokeSlice = createSlice({
  name: "pockemon",
  initialState,
  reducers: {
    addFavoriteReducer: (state, action) => {
      state.pokemons = state.pokemons.map((poke) =>
        poke.id == action.payload
          ? {
              ...poke,
              isFavorite: !poke.isFavorite,
            }
          : poke
      );
    },
    turnDetailTrue: (state, action) => {
      state.pokemons = state.pokemons.map((poke) =>
        poke.id == action.payload
          ? {
              ...poke,
              detailsActive: !poke.detailsActive,
            }
          : poke
      );
    },
    turnOffDetails: (state) => {
      state.pokemons = state.pokemons.map((poke) =>
        poke.detailsActive == true
          ? {
              ...poke,
              detailsActive: false,
            }
          : poke
      );
    },
  },

  //GET POCKEMONS
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action: any) => {
      state.pokemons = action.payload;
    });
  },
});

export default pokeSlice.reducer;

export type { pockeType };

export type pokeStateType = typeof initialState;

export const selectPokemons = () => (state: stateType) =>
  state.pokemon.pokemons;

export const { addFavoriteReducer, turnDetailTrue, turnOffDetails } =
  pokeSlice.actions;
