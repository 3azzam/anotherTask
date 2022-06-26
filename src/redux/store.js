import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import gameReducer from "./reducers/gameReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        game: gameReducer
    }
})
