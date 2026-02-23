import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../features/auth/registerSlice';
import loginReducer from '../features/auth/loginSlice';
import todoReducer from '../features/todos/todoSlice';

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        todo: todoReducer,
    }
});

export default store;