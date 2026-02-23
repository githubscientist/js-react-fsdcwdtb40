import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    // name of the slice
    name: "counter",
    // initial state
    initialState: {
        value: 0
    },
    // reducers
    reducers: {
        increment: (state) => {
            state.value = state.value + 1; // the state is directly mutated
        }
    }
});

// 3 export statements
// export the reducers
export const { increment } = counterSlice.actions;

// export the selector
export const selectCount = (state) => state.counter.value;

// export the reducer
export default counterSlice.reducer;