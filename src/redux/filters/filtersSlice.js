import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експорт дій
export const { changeFilter } = filtersSlice.actions;

// Експорт редюсера
export default filtersSlice.reducer;
