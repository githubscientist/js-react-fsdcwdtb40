import { createSlice } from "@reduxjs/toolkit";

// create a slice
const counterSlice = createSlice({
    // specify the name of the slice
    name: "counter",
    initialState: {
        count: 0
    },
});