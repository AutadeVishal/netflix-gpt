import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice(
    {
        name:"gpt",
        initialState:{
            showGPTSearch:false,
            movieResults:null,
            movieNames:null,
        }
,
reducers:{
    toggleGPTSearchView:(state)=>{
        state.showGPTSearch=!state.showGPTSearch;
    },
    addGPTMovieResults:(state,action)=>{
        const {movieNames,movieResults}=action.payload;
        state.movieNames=movieNames;
        state.movieResults=movieResults;
    }
}
    }
)
export const {addGPTMovieResults,toggleGPTSearchView}=gptSlice.actions;
export default  gptSlice.reducer;