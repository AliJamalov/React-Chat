import { configureStore } from "@reduxjs/toolkit";

// Slices
import userSlice from "../slices/users.slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});

export default store;