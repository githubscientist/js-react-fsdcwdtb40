import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        name: '',
        email: '',
        password: ''
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload.name;
        },
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

export const { setName, setEmail, setPassword, clearForm } = registerSlice.actions;

export const selectName = (state) => state.register.name;
export const selectEmail = (state) => state.register.email;
export const selectPassword = (state) => state.register.password;

export default registerSlice.reducer;