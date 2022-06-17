import { createSlice, configureStore } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    currentPage: 1,
    searchStatus: null,
    searchError: null,
    resultsCount:0
  },
  reducers: {
    setSearchResults(state, action) {
      state.searchResults = action.payload.list;
      state.resultsCount = action.payload.resultsCount;      
    },
    setSearchStatus(state, action) {
      state.searchStatus = action.payload;
    },
    setSearchError(state, action) {
      state.searchError = action.payload;
    },
    increasePage(state){
      state.currentPage++;
    },
    decreasePage(state){
      state.currentPage--;
    }
  },
});

const store = configureStore({ reducer: { search: searchSlice.reducer } });

export const searchAction = searchSlice.actions;

export default store;
