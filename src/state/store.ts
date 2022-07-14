import { configureStore } from "@reduxjs/toolkit";
import loggedSlice from "./slices/loggedSlice";

const store = configureStore({
    reducer: {
        logged: loggedSlice,
    },
});

export default store;

type stateType = ReturnType<typeof store.getState>

export type { stateType }; 