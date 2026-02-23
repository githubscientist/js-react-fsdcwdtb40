import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: '',
        password: ''
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        setPassword: (state, action) => {
            state.password = action.payload.password;
        },
        clearForm: (state) => {
            state.name = '';
            state.email = '';
            state.password = '';
        }
    }
});

export const { setEmail, setPassword, clearForm } = loginSlice.actions;

export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;

export default loginSlice.reducer;