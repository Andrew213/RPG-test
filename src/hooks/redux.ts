import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { StoreDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { StateT } from "../store/type";

export const useStoreDispatch = () => useDispatch<StoreDispatch>();

export const useStoreSelector: TypedUseSelectorHook<StateT> = useSelector;
