import { createSlice } from "@reduxjs/toolkit";
const finishArray = localStorage.getItem("finishhhhh")
  ? JSON.parse(localStorage.getItem("finishhhhh"))
  : [];

const finishInLocalStorage = (data) => {
  localStorage.setItem("finishhhhh", JSON.stringify(data));
};
const finishSlice = createSlice({
  initialState: finishArray,
  name: "finishSlice",
  reducers: {
    addfinish: (state, action) => {
      const newState = [...state, action.payload];
      finishInLocalStorage(newState);
      return newState;
    },
    deletefinish: (state, action) => {
      const newState = state.filter((finish) => finish.id !== action.payload);
      finishInLocalStorage(newState);
      return newState;
    },
  },
});

export const { addfinish, deletefinish } = finishSlice.actions;
export default finishSlice.reducer;
