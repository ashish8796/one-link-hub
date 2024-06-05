import { useContext } from "react";
import StoreContext from "../store/StoreContext";

export function useMiniStore() {
  const storeContext = useContext(StoreContext);
  if (!storeContext) {
    throw new Error("useSelector must be used within a StoreProvider");
  }

  return storeContext;
}
