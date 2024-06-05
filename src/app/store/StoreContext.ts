import { createContext } from "react";

const intiState = {
  state: {},
  dispatch: {},
};

const StoreContext = createContext(intiState);

export default StoreContext;
