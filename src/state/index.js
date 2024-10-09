import { configureStore } from "@reduxjs/toolkit";
import { ModalSlice } from "./endpoints/modal";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

//Reducers
const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDm) => gDm().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
