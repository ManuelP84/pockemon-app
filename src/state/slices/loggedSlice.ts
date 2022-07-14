import { createSlice } from "@reduxjs/toolkit";

type userType = {
    userName: string;
    logged: boolean | null;
};


interface initialStateType {
    user: userType,
}


const initialState: initialStateType = {
    user : {
        userName: "",
        logged: false,
    }
}


const loggedSlice = createSlice({
    name: "logged",
    initialState,
    reducers: {
        logInReducer(state: initialStateType){
            state.user.logged = true
        },
        logOutReducer(state: initialStateType){
            state.user.logged = false
        }
    }
});

export default loggedSlice.reducer;

export const { logInReducer, logOutReducer } = loggedSlice.actions;

export type { userType };

export type loggedStateType = typeof initialState;