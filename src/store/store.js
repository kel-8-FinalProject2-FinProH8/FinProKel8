import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./reducer/MovieSlice";

const store = configureStore({
    reducer:{
            MovieSlice : MovieSlice,
    }
})

export {store}