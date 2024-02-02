import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import finishSlice from "./finishSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    finish: finishSlice,
  },
});
