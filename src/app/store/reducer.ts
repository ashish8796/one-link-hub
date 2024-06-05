import { IAction, IState } from "./tsTypes";

export const initState = {};

type MainAction = IAction;

function reducer(state: IState, action: MainAction) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
