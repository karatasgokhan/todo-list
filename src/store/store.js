import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { theTodoListApi } from "./apis/TheTodoListApi";

export const store = configureStore({
  reducer: {
    [theTodoListApi.reducerPath]: theTodoListApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(theTodoListApi.middleware),
});

setupListeners(store.dispatch);
