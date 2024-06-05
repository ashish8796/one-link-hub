'use client'

import { useReducer } from "react";
import StoreContext from "./StoreContext";
import reducer, { initState } from "./reducer";

interface IStoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: IStoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
