export interface IState {}

export interface IAppStore {
  state: any,
  dispatch: any
}

export type IAction = {
  type: string;
  payload: any;
};
