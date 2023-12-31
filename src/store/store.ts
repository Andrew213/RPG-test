import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export type StoreT = typeof store;

export type StoreDispatch = StoreT["dispatch"];
