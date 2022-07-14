import { configureStore } from "@reduxjs/toolkit";
import loggedSlice from "./slices/loggedSlice";

const store = configureStore({
    reducer: {
        logged: loggedSlice,
    },
});

export default store;