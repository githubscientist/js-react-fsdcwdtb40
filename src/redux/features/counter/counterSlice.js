import { createSlice } from "@reduxjs/toolkit";

// create a slice
const counterSlice = createSlice({
    // specify the name of the slice
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
    }
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => {
    return state.counter.count;
}

export default counterSlice.reducer;