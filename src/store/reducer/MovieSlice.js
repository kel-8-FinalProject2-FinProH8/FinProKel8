import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: "",
};

export const fetchapi = createAsyncThunk("movie/film", async (Search) => {
  try {
    const result = await axios.get(
      `https://www.omdbapi.com/?apikey=66c23431&s=${Search}`
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchapi.pending, (state) => {
      return { ...state, loading: true };
    })
    .addCase(fetchapi.fulfilled, (state, action)=>{
      return { ...state, movies: action.payload.Search, loading: false, error: "" }
    })
    .addCase(fetchapi.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error.message };
      })  
  },
});


export default MovieSlice.reducer


// .addCase(fetchapi.fulfilled, (state, action) => {
//   if (action.payload.Response === "True") {
//     return {
//       ...state,
//       movies: action.payload.Search,
//       loading: false,
//       error: "",
//     };
//   } else if (action.payload.Response === "False") {
//     return {
//       ...state,
//       movies: action.payload.Error,
//       loading: false,
//       error: "",
//     };
//   }
// })