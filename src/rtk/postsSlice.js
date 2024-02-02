import { createSlice } from "@reduxjs/toolkit";
const todoArray = localStorage.getItem("ToDooo")
  ? JSON.parse(localStorage.getItem("ToDooo"))
  : [];

const todoInLocalStorage = (data) => {
  localStorage.setItem("ToDooo", JSON.stringify(data));
};
const postsSlice = createSlice({
  initialState: todoArray,
  name: "postsSlice",
  reducers: {
    addPost: (state, action) => {
      const newState = [...state, action.payload];
      todoInLocalStorage(newState);
      return newState;
    },
    deletePost: (state, action) => {
      const newState = state.filter((post) => post.id !== action.payload);
      todoInLocalStorage(newState);
      return newState;
    },
    editPost: (state, action) => {
      const { id, name, content } = action.payload;
      const item = state.find((post) => post.id === id);
      if (item) {
        item.name = name;
        item.content = content;
        const newState = state
        todoInLocalStorage(newState);
      }
    },
  },
});

export const { addPost, deletePost, editPost } = postsSlice.actions;
export default postsSlice.reducer;
